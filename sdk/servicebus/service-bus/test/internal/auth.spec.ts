// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createSasTokenProvider } from "@azure/core-amqp";
import { AzureNamedKeyCredential, AzureSASCredential } from "@azure/core-auth";
import type { ServiceBusReceiver } from "../../src/index.js";
import { ServiceBusClient, parseServiceBusConnectionString } from "../../src/index.js";
import { TestClientType } from "../public/utils/testUtils.js";
import type {
  ServiceBusClientForTests,
  ServiceBusTestHelpers,
} from "../public/utils/testutils2.js";
import { createServiceBusClientForTests } from "../public/utils/testutils2.js";
import { afterAll, beforeAll, describe, it } from "vitest";
import { assert } from "../public/utils/chai.js";
import { getConnectionString } from "../utils/injectables.js";

type UnpackReturnType<T extends (...args: any) => any> =
  ReturnType<T> extends Promise<infer U> ? U : never;

describe
  .runIf(getConnectionString())
  .each([TestClientType.UnpartitionedQueue, TestClientType.UnpartitionedSubscription])(
  "[%s] Authentication",
  (entityType) => {
    const serviceBusConnectionString = getConnectionString()!;
    describe(`Authentication via SAK to ${TestClientType[entityType]}`, () => {
      let tempClient: ServiceBusClientForTests;
      let entities: UnpackReturnType<ServiceBusTestHelpers["createTestEntities"]>;

      beforeAll(async () => {
        tempClient = createServiceBusClientForTests();
        entities = await tempClient.test.createTestEntities(entityType);
      });

      afterAll(async () => {
        await tempClient.test.afterEach();
        await tempClient.test.after();
      });

      it("ServiceBusClient with connection string", async () => {
        const client = new ServiceBusClient(serviceBusConnectionString);

        const sender = tempClient.createSender(entities.queue ?? entities.topic!);

        await sender.sendMessages({
          body: "Hello",
        });

        await sender.close();

        let receiver: ServiceBusReceiver;

        if (entities.queue) {
          receiver = client.createReceiver(entities.queue!, {
            receiveMode: "receiveAndDelete",
          });
        } else {
          receiver = client.createReceiver(entities.topic!, entities.subscription!, {
            receiveMode: "receiveAndDelete",
          });
        }

        const messages = await receiver.receiveMessages(1, {
          maxWaitTimeInMs: 10 * 1000,
        });

        await receiver.close();

        assert.equal(messages.length, 1, "Should have received at least one message");
        await client.close();
      });

      it("ServiceBusClient with NamedKeyCredential", async () => {
        const parsed = parseServiceBusConnectionString(serviceBusConnectionString);
        const client = new ServiceBusClient(
          parsed.fullyQualifiedNamespace,
          new AzureNamedKeyCredential(parsed.sharedAccessKeyName!, parsed.sharedAccessKey!),
        );

        const sender = tempClient.createSender(entities.queue ?? entities.topic!);

        await sender.sendMessages({
          body: "Hello",
        });

        await sender.close();

        let receiver: ServiceBusReceiver;

        if (entities.queue) {
          receiver = client.createReceiver(entities.queue!, {
            receiveMode: "receiveAndDelete",
          });
        } else {
          receiver = client.createReceiver(entities.topic!, entities.subscription!, {
            receiveMode: "receiveAndDelete",
          });
        }

        const messages = await receiver.receiveMessages(1, {
          maxWaitTimeInMs: 10 * 1000,
        });

        await receiver.close();

        assert.equal(messages.length, 1, "Should have received at least one message");
        await client.close();
      });
    });

    describe(`Authentication via SAS to ${TestClientType[entityType]}`, () => {
      let tempClient: ServiceBusClientForTests;
      let entities: UnpackReturnType<ServiceBusTestHelpers["createTestEntities"]>;
      let sasConnectionString: string;
      let sharedAccessSignature: string;

      beforeAll(async () => {
        tempClient = createServiceBusClientForTests();
        entities = await tempClient.test.createTestEntities(entityType);

        const endpoint = parseServiceBusConnectionString(serviceBusConnectionString).endpoint;

        sharedAccessSignature = await getSharedAccessSignature(
          serviceBusConnectionString,
          entities.queue ?? `${entities.topic!}`,
          endpoint.replace(/\/+$/, ""),
        );
        sasConnectionString = await getSasConnectionString(
          serviceBusConnectionString,
          entities.queue ?? `${entities.topic!}`,
          endpoint.replace(/\/+$/, ""),
        );
      });

      afterAll(async () => {
        await tempClient.test.afterEach();
        await tempClient.test.after();
      });

      it("ServiceBusClient with connection string", async () => {
        const client = new ServiceBusClient(sasConnectionString);

        const sender = tempClient.createSender(entities.queue ?? entities.topic!);

        await sender.sendMessages({
          body: "Hello",
        });

        await sender.close();

        let receiver: ServiceBusReceiver;

        if (entities.queue) {
          receiver = client.createReceiver(entities.queue!, {
            receiveMode: "receiveAndDelete",
          });
        } else {
          receiver = client.createReceiver(entities.topic!, entities.subscription!, {
            receiveMode: "receiveAndDelete",
          });
        }

        const messages = await receiver.receiveMessages(1, {
          maxWaitTimeInMs: 10 * 1000,
        });

        await receiver.close();

        assert.equal(messages.length, 1, "Should have received at least one message");
        await client.close();
      });

      it("ServiceBusClient with SASCredential", async () => {
        const parsed = parseServiceBusConnectionString(sasConnectionString);
        const client = new ServiceBusClient(
          parsed.fullyQualifiedNamespace,
          new AzureSASCredential(sharedAccessSignature),
        );

        const sender = tempClient.createSender(entities.queue ?? entities.topic!);

        await sender.sendMessages({
          body: "Hello",
        });

        await sender.close();

        let receiver: ServiceBusReceiver;

        if (entities.queue) {
          receiver = client.createReceiver(entities.queue!, {
            receiveMode: "receiveAndDelete",
          });
        } else {
          receiver = client.createReceiver(entities.topic!, entities.subscription!, {
            receiveMode: "receiveAndDelete",
          });
        }

        const messages = await receiver.receiveMessages(1, {
          maxWaitTimeInMs: 10 * 1000,
        });

        await receiver.close();

        assert.equal(messages.length, 1, "Should have received at least one message");
        await client.close();
      });

      async function getSharedAccessSignature(
        connectionString: string,
        path: string,
        fqdn: string,
      ): Promise<string> {
        const parsed = parseServiceBusConnectionString(connectionString) as {
          sharedAccessKeyName: string;
          sharedAccessKey: string;
        };
        return (await createSasTokenProvider(parsed).getToken(`${fqdn}/${path}`)).token;
      }

      async function getSasConnectionString(
        connectionString: string,
        path: string,
        fqdn: string,
      ): Promise<string> {
        const sas = await getSharedAccessSignature(connectionString, path, fqdn);

        return `Endpoint=${fqdn};SharedAccessSignature=${sas}`;
      }
    });
  },
);
