/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Workflow,
  WorkflowsListByStorageSyncServiceOptionalParams,
  WorkflowsGetOptionalParams,
  WorkflowsGetResponse,
  WorkflowsAbortOptionalParams,
  WorkflowsAbortResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workflows. */
export interface Workflows {
  /**
   * Get a Workflow List
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: WorkflowsListByStorageSyncServiceOptionalParams
  ): PagedAsyncIterableIterator<Workflow>;
  /**
   * Get Workflows resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param workflowId workflow Id
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageSyncServiceName: string,
    workflowId: string,
    options?: WorkflowsGetOptionalParams
  ): Promise<WorkflowsGetResponse>;
  /**
   * Abort the given workflow.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param workflowId workflow Id
   * @param options The options parameters.
   */
  abort(
    resourceGroupName: string,
    storageSyncServiceName: string,
    workflowId: string,
    options?: WorkflowsAbortOptionalParams
  ): Promise<WorkflowsAbortResponse>;
}
