/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { WorkspaceNamedValue } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  NamedValueContract,
  WorkspaceNamedValueListByServiceNextOptionalParams,
  WorkspaceNamedValueListByServiceOptionalParams,
  WorkspaceNamedValueListByServiceResponse,
  WorkspaceNamedValueGetEntityTagOptionalParams,
  WorkspaceNamedValueGetEntityTagResponse,
  WorkspaceNamedValueGetOptionalParams,
  WorkspaceNamedValueGetResponse,
  NamedValueCreateContract,
  WorkspaceNamedValueCreateOrUpdateOptionalParams,
  WorkspaceNamedValueCreateOrUpdateResponse,
  NamedValueUpdateParameters,
  WorkspaceNamedValueUpdateOptionalParams,
  WorkspaceNamedValueUpdateResponse,
  WorkspaceNamedValueDeleteOptionalParams,
  WorkspaceNamedValueListValueOptionalParams,
  WorkspaceNamedValueListValueResponse,
  WorkspaceNamedValueRefreshSecretOptionalParams,
  WorkspaceNamedValueRefreshSecretResponse,
  WorkspaceNamedValueListByServiceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceNamedValue operations. */
export class WorkspaceNamedValueImpl implements WorkspaceNamedValue {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceNamedValue class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of named values defined within a workspace in a service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceNamedValueListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<NamedValueContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceNamedValueListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NamedValueContract[]> {
    let result: WorkspaceNamedValueListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        workspaceId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        workspaceId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceNamedValueListByServiceOptionalParams,
  ): AsyncIterableIterator<NamedValueContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of named values defined within a workspace in a service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceNamedValueListByServiceOptionalParams,
  ): Promise<WorkspaceNamedValueListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the named value specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    options?: WorkspaceNamedValueGetEntityTagOptionalParams,
  ): Promise<WorkspaceNamedValueGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, namedValueId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the named value specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    options?: WorkspaceNamedValueGetOptionalParams,
  ): Promise<WorkspaceNamedValueGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, namedValueId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates named value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    parameters: NamedValueCreateContract,
    options?: WorkspaceNamedValueCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceNamedValueCreateOrUpdateResponse>,
      WorkspaceNamedValueCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<WorkspaceNamedValueCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serviceName,
        workspaceId,
        namedValueId,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      WorkspaceNamedValueCreateOrUpdateResponse,
      OperationState<WorkspaceNamedValueCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates named value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    parameters: NamedValueCreateContract,
    options?: WorkspaceNamedValueCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceNamedValueCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      workspaceId,
      namedValueId,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the specific named value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    ifMatch: string,
    parameters: NamedValueUpdateParameters,
    options?: WorkspaceNamedValueUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceNamedValueUpdateResponse>,
      WorkspaceNamedValueUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<WorkspaceNamedValueUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serviceName,
        workspaceId,
        namedValueId,
        ifMatch,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      WorkspaceNamedValueUpdateResponse,
      OperationState<WorkspaceNamedValueUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the specific named value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    ifMatch: string,
    parameters: NamedValueUpdateParameters,
    options?: WorkspaceNamedValueUpdateOptionalParams,
  ): Promise<WorkspaceNamedValueUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      serviceName,
      workspaceId,
      namedValueId,
      ifMatch,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes specific named value from the workspace in an API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    ifMatch: string,
    options?: WorkspaceNamedValueDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        namedValueId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * Gets the secret of the named value specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param options The options parameters.
   */
  listValue(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    options?: WorkspaceNamedValueListValueOptionalParams,
  ): Promise<WorkspaceNamedValueListValueResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, namedValueId, options },
      listValueOperationSpec,
    );
  }

  /**
   * Refresh the secret of the named value specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param options The options parameters.
   */
  async beginRefreshSecret(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    options?: WorkspaceNamedValueRefreshSecretOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceNamedValueRefreshSecretResponse>,
      WorkspaceNamedValueRefreshSecretResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<WorkspaceNamedValueRefreshSecretResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serviceName,
        workspaceId,
        namedValueId,
        options,
      },
      spec: refreshSecretOperationSpec,
    });
    const poller = await createHttpPoller<
      WorkspaceNamedValueRefreshSecretResponse,
      OperationState<WorkspaceNamedValueRefreshSecretResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Refresh the secret of the named value specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param namedValueId Identifier of the NamedValue.
   * @param options The options parameters.
   */
  async beginRefreshSecretAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    namedValueId: string,
    options?: WorkspaceNamedValueRefreshSecretOptionalParams,
  ): Promise<WorkspaceNamedValueRefreshSecretResponse> {
    const poller = await this.beginRefreshSecret(
      resourceGroupName,
      serviceName,
      workspaceId,
      namedValueId,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    nextLink: string,
    options?: WorkspaceNamedValueListByServiceNextOptionalParams,
  ): Promise<WorkspaceNamedValueListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamedValueCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.isKeyVaultRefreshFailed1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues/{namedValueId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.WorkspaceNamedValueGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.namedValueId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues/{namedValueId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.namedValueId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues/{namedValueId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueCreateOrUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueCreateOrUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters61,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.namedValueId,
    Parameters.workspaceId,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues/{namedValueId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters62,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.namedValueId,
    Parameters.workspaceId,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues/{namedValueId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.namedValueId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listValueOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues/{namedValueId}/listValue",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NamedValueSecretContract,
      headersMapper: Mappers.WorkspaceNamedValueListValueHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.namedValueId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const refreshSecretOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/namedValues/{namedValueId}/refreshSecret",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueRefreshSecretHeaders,
    },
    201: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueRefreshSecretHeaders,
    },
    202: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueRefreshSecretHeaders,
    },
    204: {
      bodyMapper: Mappers.NamedValueContract,
      headersMapper: Mappers.WorkspaceNamedValueRefreshSecretHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.namedValueId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamedValueCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.serviceName,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
