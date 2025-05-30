// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ContainerServiceFleetClient } = require("@azure/arm-containerservicefleet");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to delete a Fleet
 *
 * @summary delete a Fleet
 * x-ms-original-file: 2025-03-01/Fleets_Delete.json
 */
async function deletesAFleetResourceAsynchronouslyWithALongRunningOperation() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  await client.fleets.delete("rg1", "fleet1");
}

/**
 * This sample demonstrates how to delete a Fleet
 *
 * @summary delete a Fleet
 * x-ms-original-file: 2025-03-01/Fleets_Delete_MaximumSet_Gen.json
 */
async function deletesAFleetResourceAsynchronouslyWithALongRunningOperationGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  await client.fleets.delete("rgfleets", "fleet1", {
    ifMatch: "crsgokrdxddjsvqxpplerummnmzav",
  });
}

async function main() {
  await deletesAFleetResourceAsynchronouslyWithALongRunningOperation();
  await deletesAFleetResourceAsynchronouslyWithALongRunningOperationGeneratedByMaximumSetRule();
}

main().catch(console.error);
