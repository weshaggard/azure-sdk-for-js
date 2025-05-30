/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RemediationsListForManagementGroupOptionalParams,
  PolicyInsightsClient,
} from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets all remediations for the management group.
 *
 * @summary Gets all remediations for the management group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2024-10-01/examples/Remediations_ListManagementGroupScope.json
 */
async function listRemediationsAtManagementGroupScope(): Promise<void> {
  const managementGroupId = "financeMg";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential);
  const resArray = new Array();
  for await (let item of client.remediations.listForManagementGroup(
    managementGroupId,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets all remediations for the management group.
 *
 * @summary Gets all remediations for the management group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2024-10-01/examples/Remediations_ListManagementGroupScope_WithQuery.json
 */
async function listRemediationsAtManagementGroupScopeWithQueryParameters(): Promise<void> {
  const managementGroupId = "financeMg";
  const top = 1;
  const filter =
    "PolicyAssignmentId eq '/providers/microsoft.management/managementGroups/financeMg/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5'";
  const options: RemediationsListForManagementGroupOptionalParams = {
    top,
    filter,
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential);
  const resArray = new Array();
  for await (let item of client.remediations.listForManagementGroup(
    managementGroupId,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  listRemediationsAtManagementGroupScope();
  listRemediationsAtManagementGroupScopeWithQueryParameters();
}

main().catch(console.error);
