// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Simple example of how to get an event route.
 */

import { DefaultAzureCredential } from "@azure/identity";
import { DigitalTwinsClient } from "@azure/digital-twins-core";
import { inspect } from "node:util";

async function main(): Promise<void> {
  // AZURE_DIGITALTWINS_URL: The URL to your Azure Digital Twins instance
  const url = process.env.AZURE_DIGITALTWINS_URL;
  if (url === undefined) {
    throw new Error("Required environment variable AZURE_DIGITALTWINS_URL is not set.");
  }

  // DefaultAzureCredential is provided by @azure/identity. It supports
  // different authentication mechanisms and determines the appropriate
  // credential type based of the environment it is executing in. See
  // https://www.npmjs.com/package/@azure/identity for more information on
  // authenticating with DefaultAzureCredential or other implementations of
  // TokenCredential.
  const credential = new DefaultAzureCredential();
  const serviceClient = new DigitalTwinsClient(url, credential);

  // Get event route
  const eventRouteId = "<event route ID to get>"; // Event route ID must exist in your Azure Digital Twins instance
  const eventRoute = serviceClient.getEventRoute(eventRouteId);
  console.log(`EventRoute:`);
  console.log(inspect(eventRoute));
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});
