/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
/**
 * This sample demonstrates how to Obtains the liveness status of the machine during the specified time interval.
 *
 * @summary Obtains the liveness status of the machine during the specified time interval.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/Machines/SMMachinesGetLivenessGet.json
 */
import { ServiceMap } from "@azure/arm-servicemap";
import { DefaultAzureCredential } from "@azure/identity";

async function smMachinesGetLivenessGet(): Promise<void> {
  const subscriptionId = "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName = "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const machineName = "m-A4AB1C69-03E9-42D2-B822-B42555569FB4";
  const startTime = new Date("2018-01-07T07:07:27.6026938Z");
  const endTime = new Date("2018-01-07T07:09:27.6026938Z");
  const options = { startTime: startTime, endTime: endTime };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const result = await client.machines.getLiveness(
    resourceGroupName,
    workspaceName,
    machineName,
    options,
  );
  console.log(result);
}

smMachinesGetLivenessGet().catch(console.error);
