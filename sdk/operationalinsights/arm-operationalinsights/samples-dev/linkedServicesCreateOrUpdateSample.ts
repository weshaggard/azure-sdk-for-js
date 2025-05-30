/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { LinkedService } from "@azure/arm-operationalinsights";
import { OperationalInsightsManagementClient } from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a linked service.
 *
 * @summary Create or update a linked service.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2020-08-01/examples/LinkedServicesCreate.json
 */
async function linkedServicesCreate(): Promise<void> {
  const subscriptionId =
    process.env["OPERATIONALINSIGHTS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-00000000000";
  const resourceGroupName = process.env["OPERATIONALINSIGHTS_RESOURCE_GROUP"] || "mms-eus";
  const workspaceName = "TestLinkWS";
  const linkedServiceName = "Cluster";
  const parameters: LinkedService = {
    writeAccessResourceId:
      "/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.OperationalInsights/clusters/testcluster",
  };
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(credential, subscriptionId);
  const result = await client.linkedServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    linkedServiceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await linkedServicesCreate();
}

main().catch(console.error);
