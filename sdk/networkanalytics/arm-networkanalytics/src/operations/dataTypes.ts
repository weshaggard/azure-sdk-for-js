/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DataTypes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftNetworkAnalytics } from "../microsoftNetworkAnalytics";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DataType,
  DataTypesListByDataProductNextOptionalParams,
  DataTypesListByDataProductOptionalParams,
  DataTypesListByDataProductResponse,
  DataTypesGetOptionalParams,
  DataTypesGetResponse,
  DataTypesCreateOptionalParams,
  DataTypesCreateResponse,
  DataTypeUpdate,
  DataTypesUpdateOptionalParams,
  DataTypesUpdateResponse,
  DataTypesDeleteOptionalParams,
  DataTypesDeleteResponse,
  DataTypesDeleteDataOptionalParams,
  DataTypesDeleteDataResponse,
  ContainerSaS,
  DataTypesGenerateStorageContainerSasTokenOptionalParams,
  DataTypesGenerateStorageContainerSasTokenResponse,
  DataTypesListByDataProductNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataTypes operations. */
export class DataTypesImpl implements DataTypes {
  private readonly client: MicrosoftNetworkAnalytics;

  /**
   * Initialize a new instance of the class DataTypes class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftNetworkAnalytics) {
    this.client = client;
  }

  /**
   * List data type by parent resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param options The options parameters.
   */
  public listByDataProduct(
    resourceGroupName: string,
    dataProductName: string,
    options?: DataTypesListByDataProductOptionalParams
  ): PagedAsyncIterableIterator<DataType> {
    const iter = this.listByDataProductPagingAll(
      resourceGroupName,
      dataProductName,
      options
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
        return this.listByDataProductPagingPage(
          resourceGroupName,
          dataProductName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDataProductPagingPage(
    resourceGroupName: string,
    dataProductName: string,
    options?: DataTypesListByDataProductOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DataType[]> {
    let result: DataTypesListByDataProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDataProduct(
        resourceGroupName,
        dataProductName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDataProductNext(
        resourceGroupName,
        dataProductName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDataProductPagingAll(
    resourceGroupName: string,
    dataProductName: string,
    options?: DataTypesListByDataProductOptionalParams
  ): AsyncIterableIterator<DataType> {
    for await (const page of this.listByDataProductPagingPage(
      resourceGroupName,
      dataProductName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List data type by parent resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param options The options parameters.
   */
  private _listByDataProduct(
    resourceGroupName: string,
    dataProductName: string,
    options?: DataTypesListByDataProductOptionalParams
  ): Promise<DataTypesListByDataProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, options },
      listByDataProductOperationSpec
    );
  }

  /**
   * Retrieve data type resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesGetOptionalParams
  ): Promise<DataTypesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, dataTypeName, options },
      getOperationSpec
    );
  }

  /**
   * Create data type resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: DataTypesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataTypesCreateResponse>,
      DataTypesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataTypesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        dataProductName,
        dataTypeName,
        resource,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      DataTypesCreateResponse,
      OperationState<DataTypesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create data type resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    resource: DataType,
    options?: DataTypesCreateOptionalParams
  ): Promise<DataTypesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      dataProductName,
      dataTypeName,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update data type resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataTypesUpdateResponse>,
      DataTypesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataTypesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        dataProductName,
        dataTypeName,
        properties,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      DataTypesUpdateResponse,
      OperationState<DataTypesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update data type resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    properties: DataTypeUpdate,
    options?: DataTypesUpdateOptionalParams
  ): Promise<DataTypesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      dataProductName,
      dataTypeName,
      properties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete data type resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataTypesDeleteResponse>,
      DataTypesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataTypesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, dataProductName, dataTypeName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      DataTypesDeleteResponse,
      OperationState<DataTypesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete data type resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    options?: DataTypesDeleteOptionalParams
  ): Promise<DataTypesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dataProductName,
      dataTypeName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete data for data type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginDeleteData(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, unknown>,
    options?: DataTypesDeleteDataOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataTypesDeleteDataResponse>,
      DataTypesDeleteDataResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataTypesDeleteDataResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, dataProductName, dataTypeName, body, options },
      spec: deleteDataOperationSpec
    });
    const poller = await createHttpPoller<
      DataTypesDeleteDataResponse,
      OperationState<DataTypesDeleteDataResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete data for data type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginDeleteDataAndWait(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: Record<string, unknown>,
    options?: DataTypesDeleteDataOptionalParams
  ): Promise<DataTypesDeleteDataResponse> {
    const poller = await this.beginDeleteData(
      resourceGroupName,
      dataProductName,
      dataTypeName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Generate sas token for storage container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param dataTypeName The data type name.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  generateStorageContainerSasToken(
    resourceGroupName: string,
    dataProductName: string,
    dataTypeName: string,
    body: ContainerSaS,
    options?: DataTypesGenerateStorageContainerSasTokenOptionalParams
  ): Promise<DataTypesGenerateStorageContainerSasTokenResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, dataTypeName, body, options },
      generateStorageContainerSasTokenOperationSpec
    );
  }

  /**
   * ListByDataProductNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param nextLink The nextLink from the previous successful call to the ListByDataProduct method.
   * @param options The options parameters.
   */
  private _listByDataProductNext(
    resourceGroupName: string,
    dataProductName: string,
    nextLink: string,
    options?: DataTypesListByDataProductNextOptionalParams
  ): Promise<DataTypesListByDataProductNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, nextLink, options },
      listByDataProductNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDataProductOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataTypeListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataType
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName,
    Parameters.dataTypeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataType
    },
    201: {
      bodyMapper: Mappers.DataType
    },
    202: {
      bodyMapper: Mappers.DataType
    },
    204: {
      bodyMapper: Mappers.DataType
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName,
    Parameters.dataTypeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataType
    },
    201: {
      bodyMapper: Mappers.DataType
    },
    202: {
      bodyMapper: Mappers.DataType
    },
    204: {
      bodyMapper: Mappers.DataType
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.properties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName,
    Parameters.dataTypeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.DataTypesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.DataTypesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.DataTypesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.DataTypesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName,
    Parameters.dataTypeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteDataOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/deleteData",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.DataTypesDeleteDataHeaders
    },
    201: {
      headersMapper: Mappers.DataTypesDeleteDataHeaders
    },
    202: {
      headersMapper: Mappers.DataTypesDeleteDataHeaders
    },
    204: {
      headersMapper: Mappers.DataTypesDeleteDataHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName,
    Parameters.dataTypeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateStorageContainerSasTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/dataTypes/{dataTypeName}/generateStorageContainerSasToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerSasToken
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName,
    Parameters.dataTypeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDataProductNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataTypeListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
