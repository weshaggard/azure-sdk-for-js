// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ContainerServiceFleetClient } = require("@azure/arm-containerservicefleet");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to lists the user credentials of a Fleet.
 *
 * @summary lists the user credentials of a Fleet.
 * x-ms-original-file: 2025-03-01/Fleets_ListCredentialsResult.json
 */
async function listsTheUserCredentialsOfAFleet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.fleets.listCredentials("rg1", "fleet");
  console.log(result);
}

/**
 * This sample demonstrates how to lists the user credentials of a Fleet.
 *
 * @summary lists the user credentials of a Fleet.
 * x-ms-original-file: 2025-03-01/Fleets_ListCredentials_MaximumSet_Gen.json
 */
async function listsTheUserCredentialsOfAFleetGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.fleets.listCredentials("rgfleets", "fleet1");
  console.log(result);
}

async function main() {
  await listsTheUserCredentialsOfAFleet();
  await listsTheUserCredentialsOfAFleetGeneratedByMaximumSetRule();
}

main().catch(console.error);
