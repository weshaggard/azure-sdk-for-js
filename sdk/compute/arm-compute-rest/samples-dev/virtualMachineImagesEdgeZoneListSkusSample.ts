// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { VirtualMachineImagesEdgeZoneListSkusParameters } from "@azure-rest/arm-compute";
import createComputeManagementClient from "@azure-rest/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a list of virtual machine image SKUs for the specified location, edge zone, publisher, and offer.
 *
 * @summary Gets a list of virtual machine image SKUs for the specified location, edge zone, publisher, and offer.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineImageExamples/VirtualMachineImagesEdgeZone_ListSkus_MaximumSet_Gen.json
 */
async function virtualMachineImagesEdgeZoneListSkusMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createComputeManagementClient(credential);
  const subscriptionId = "";
  const location = "aaaaaaaaaaaa";
  const edgeZone = "aaaaa";
  const publisherName = "aaaaaaaaaaaa";
  const offer = "aaaaaaaaaaaa";
  const options: VirtualMachineImagesEdgeZoneListSkusParameters = {
    queryParameters: { "api-version": "2022-08-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus",
      subscriptionId,
      location,
      edgeZone,
      publisherName,
      offer,
    )
    .get(options);
  console.log(result);
}

virtualMachineImagesEdgeZoneListSkusMaximumSetGen().catch(console.error);
/**
 * This sample demonstrates how to Gets a list of virtual machine image SKUs for the specified location, edge zone, publisher, and offer.
 *
 * @summary Gets a list of virtual machine image SKUs for the specified location, edge zone, publisher, and offer.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineImageExamples/VirtualMachineImagesEdgeZone_ListSkus_MinimumSet_Gen.json
 */
async function virtualMachineImagesEdgeZoneListSkusMinimumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createComputeManagementClient(credential);
  const subscriptionId = "";
  const location = "aaaaaaaaaaaaaaaaaaaa";
  const edgeZone = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const publisherName = "aaaaaaaaa";
  const offer = "aaaaaaaaaaaa";
  const options: VirtualMachineImagesEdgeZoneListSkusParameters = {
    queryParameters: { "api-version": "2022-08-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/edgeZones/{edgeZone}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus",
      subscriptionId,
      location,
      edgeZone,
      publisherName,
      offer,
    )
    .get(options);
  console.log(result);
}

virtualMachineImagesEdgeZoneListSkusMinimumSetGen().catch(console.error);
