/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ReplicationStorageClassifications } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient.js";
import {
  StorageClassification,
  ReplicationStorageClassificationsListByReplicationFabricsNextOptionalParams,
  ReplicationStorageClassificationsListByReplicationFabricsOptionalParams,
  ReplicationStorageClassificationsListByReplicationFabricsResponse,
  ReplicationStorageClassificationsListNextOptionalParams,
  ReplicationStorageClassificationsListOptionalParams,
  ReplicationStorageClassificationsListResponse,
  ReplicationStorageClassificationsGetOptionalParams,
  ReplicationStorageClassificationsGetResponse,
  ReplicationStorageClassificationsListByReplicationFabricsNextResponse,
  ReplicationStorageClassificationsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationStorageClassifications operations. */
export class ReplicationStorageClassificationsImpl
  implements ReplicationStorageClassifications
{
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationStorageClassifications class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the storage classifications available in the specified fabric.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param fabricName Site name of interest.
   * @param options The options parameters.
   */
  public listByReplicationFabrics(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    options?: ReplicationStorageClassificationsListByReplicationFabricsOptionalParams,
  ): PagedAsyncIterableIterator<StorageClassification> {
    const iter = this.listByReplicationFabricsPagingAll(
      resourceGroupName,
      resourceName,
      fabricName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByReplicationFabricsPagingPage(
          resourceGroupName,
          resourceName,
          fabricName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByReplicationFabricsPagingPage(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    options?: ReplicationStorageClassificationsListByReplicationFabricsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<StorageClassification[]> {
    let result: ReplicationStorageClassificationsListByReplicationFabricsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReplicationFabrics(
        resourceGroupName,
        resourceName,
        fabricName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReplicationFabricsNext(
        resourceGroupName,
        resourceName,
        fabricName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReplicationFabricsPagingAll(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    options?: ReplicationStorageClassificationsListByReplicationFabricsOptionalParams,
  ): AsyncIterableIterator<StorageClassification> {
    for await (const page of this.listByReplicationFabricsPagingPage(
      resourceGroupName,
      resourceName,
      fabricName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the storage classifications in the vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: ReplicationStorageClassificationsListOptionalParams,
  ): PagedAsyncIterableIterator<StorageClassification> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          resourceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: ReplicationStorageClassificationsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<StorageClassification[]> {
    let result: ReplicationStorageClassificationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, resourceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: ReplicationStorageClassificationsListOptionalParams,
  ): AsyncIterableIterator<StorageClassification> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the storage classifications available in the specified fabric.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param fabricName Site name of interest.
   * @param options The options parameters.
   */
  private _listByReplicationFabrics(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    options?: ReplicationStorageClassificationsListByReplicationFabricsOptionalParams,
  ): Promise<ReplicationStorageClassificationsListByReplicationFabricsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, fabricName, options },
      listByReplicationFabricsOperationSpec,
    );
  }

  /**
   * Gets the details of the specified storage classification.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    storageClassificationName: string,
    options?: ReplicationStorageClassificationsGetOptionalParams,
  ): Promise<ReplicationStorageClassificationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        fabricName,
        storageClassificationName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Lists the storage classifications in the vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: ReplicationStorageClassificationsListOptionalParams,
  ): Promise<ReplicationStorageClassificationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec,
    );
  }

  /**
   * ListByReplicationFabricsNext
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param fabricName Site name of interest.
   * @param nextLink The nextLink from the previous successful call to the ListByReplicationFabrics
   *                 method.
   * @param options The options parameters.
   */
  private _listByReplicationFabricsNext(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    nextLink: string,
    options?: ReplicationStorageClassificationsListByReplicationFabricsNextOptionalParams,
  ): Promise<ReplicationStorageClassificationsListByReplicationFabricsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, fabricName, nextLink, options },
      listByReplicationFabricsNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: ReplicationStorageClassificationsListNextOptionalParams,
  ): Promise<ReplicationStorageClassificationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationFabricsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationCollection,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassification,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.storageClassificationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassifications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationCollection,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByReplicationFabricsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationCollection,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageClassificationCollection,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
