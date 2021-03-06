/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/functionsMappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";

/** Class representing a Functions. */
export class Functions {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Create a Functions.
   * @param {StreamAnalyticsManagementClientContext} client Reference to the service client.
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a function or replaces an already existing function under an existing streaming job.
   * @param functionParameter The definition of the function that will be used to create a new
   * function or replace the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param [options] The optional parameters
   * @returns Promise<Models.FunctionsCreateOrReplaceResponse>
   */
  createOrReplace(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsCreateOrReplaceOptionalParams): Promise<Models.FunctionsCreateOrReplaceResponse>;
  /**
   * @param functionParameter The definition of the function that will be used to create a new
   * function or replace the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param callback The callback
   */
  createOrReplace(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  /**
   * @param functionParameter The definition of the function that will be used to create a new
   * function or replace the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrReplace(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, options: Models.FunctionsCreateOrReplaceOptionalParams, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  createOrReplace(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsCreateOrReplaceOptionalParams | msRest.ServiceCallback<Models.FunctionModel>, callback?: msRest.ServiceCallback<Models.FunctionModel>): Promise<Models.FunctionsCreateOrReplaceResponse> {
    return this.client.sendOperationRequest(
      {
        functionParameter,
        resourceGroupName,
        jobName,
        functionName,
        options
      },
      createOrReplaceOperationSpec,
      callback) as Promise<Models.FunctionsCreateOrReplaceResponse>;
  }

  /**
   * Updates an existing function under an existing streaming job. This can be used to partially
   * update (ie. update one or two properties) a function without affecting the rest the job or
   * function definition.
   * @param functionParameter A function object. The properties specified here will overwrite the
   * corresponding properties in the existing function (ie. Those properties will be updated). Any
   * properties that are set to null here will mean that the corresponding property in the existing
   * function will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param [options] The optional parameters
   * @returns Promise<Models.FunctionsUpdateResponse>
   */
  update(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsUpdateOptionalParams): Promise<Models.FunctionsUpdateResponse>;
  /**
   * @param functionParameter A function object. The properties specified here will overwrite the
   * corresponding properties in the existing function (ie. Those properties will be updated). Any
   * properties that are set to null here will mean that the corresponding property in the existing
   * function will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param callback The callback
   */
  update(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  /**
   * @param functionParameter A function object. The properties specified here will overwrite the
   * corresponding properties in the existing function (ie. Those properties will be updated). Any
   * properties that are set to null here will mean that the corresponding property in the existing
   * function will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, options: Models.FunctionsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  update(functionParameter: Models.FunctionModel, resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsUpdateOptionalParams | msRest.ServiceCallback<Models.FunctionModel>, callback?: msRest.ServiceCallback<Models.FunctionModel>): Promise<Models.FunctionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        functionParameter,
        resourceGroupName,
        jobName,
        functionName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.FunctionsUpdateResponse>;
  }

  /**
   * Deletes a function from the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, jobName: string, functionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jobName: string, functionName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, jobName: string, functionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, jobName: string, functionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        functionName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets details about the specified function.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param [options] The optional parameters
   * @returns Promise<Models.FunctionsGetResponse>
   */
  get(resourceGroupName: string, jobName: string, functionName: string, options?: msRest.RequestOptionsBase): Promise<Models.FunctionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, functionName: string, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, functionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  get(resourceGroupName: string, jobName: string, functionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FunctionModel>, callback?: msRest.ServiceCallback<Models.FunctionModel>): Promise<Models.FunctionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        functionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FunctionsGetResponse>;
  }

  /**
   * Lists all of the functions under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<Models.FunctionsListByStreamingJobResponse>
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, options?: Models.FunctionsListByStreamingJobOptionalParams): Promise<Models.FunctionsListByStreamingJobResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param callback The callback
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, callback: msRest.ServiceCallback<Models.FunctionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStreamingJob(resourceGroupName: string, jobName: string, options: Models.FunctionsListByStreamingJobOptionalParams, callback: msRest.ServiceCallback<Models.FunctionListResult>): void;
  listByStreamingJob(resourceGroupName: string, jobName: string, options?: Models.FunctionsListByStreamingJobOptionalParams | msRest.ServiceCallback<Models.FunctionListResult>, callback?: msRest.ServiceCallback<Models.FunctionListResult>): Promise<Models.FunctionsListByStreamingJobResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        options
      },
      listByStreamingJobOperationSpec,
      callback) as Promise<Models.FunctionsListByStreamingJobResponse>;
  }

  /**
   * Tests if the information provided for a function is valid. This can range from testing the
   * connection to the underlying web service behind the function or making sure the function code
   * provided is syntactically correct.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param [options] The optional parameters
   * @returns Promise<Models.FunctionsTestResponse>
   */
  test(resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsTestOptionalParams): Promise<Models.FunctionsTestResponse> {
    return this.beginTest(resourceGroupName,jobName,functionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FunctionsTestResponse>;
  }

  /**
   * Retrieves the default definition of a function based on the parameters specified.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param [options] The optional parameters
   * @returns Promise<Models.FunctionsRetrieveDefaultDefinitionResponse>
   */
  retrieveDefaultDefinition(resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsRetrieveDefaultDefinitionOptionalParams): Promise<Models.FunctionsRetrieveDefaultDefinitionResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param callback The callback
   */
  retrieveDefaultDefinition(resourceGroupName: string, jobName: string, functionName: string, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The optional parameters
   * @param callback The callback
   */
  retrieveDefaultDefinition(resourceGroupName: string, jobName: string, functionName: string, options: Models.FunctionsRetrieveDefaultDefinitionOptionalParams, callback: msRest.ServiceCallback<Models.FunctionModel>): void;
  retrieveDefaultDefinition(resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsRetrieveDefaultDefinitionOptionalParams | msRest.ServiceCallback<Models.FunctionModel>, callback?: msRest.ServiceCallback<Models.FunctionModel>): Promise<Models.FunctionsRetrieveDefaultDefinitionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        functionName,
        options
      },
      retrieveDefaultDefinitionOperationSpec,
      callback) as Promise<Models.FunctionsRetrieveDefaultDefinitionResponse>;
  }

  /**
   * Tests if the information provided for a function is valid. This can range from testing the
   * connection to the underlying web service behind the function or making sure the function code
   * provided is syntactically correct.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginTest(resourceGroupName: string, jobName: string, functionName: string, options?: Models.FunctionsBeginTestOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        jobName,
        functionName,
        options
      },
      beginTestOperationSpec,
      options);
  }

  /**
   * Lists all of the functions under the specified streaming job.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FunctionsListByStreamingJobNextResponse>
   */
  listByStreamingJobNext(nextPageLink: string, options?: Models.FunctionsListByStreamingJobNextOptionalParams): Promise<Models.FunctionsListByStreamingJobNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByStreamingJobNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FunctionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStreamingJobNext(nextPageLink: string, options: Models.FunctionsListByStreamingJobNextOptionalParams, callback: msRest.ServiceCallback<Models.FunctionListResult>): void;
  listByStreamingJobNext(nextPageLink: string, options?: Models.FunctionsListByStreamingJobNextOptionalParams | msRest.ServiceCallback<Models.FunctionListResult>, callback?: msRest.ServiceCallback<Models.FunctionListResult>): Promise<Models.FunctionsListByStreamingJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByStreamingJobNextOperationSpec,
      callback) as Promise<Models.FunctionsListByStreamingJobNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrReplaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "functionParameter",
    mapper: {
      ...Mappers.FunctionModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsCreateOrReplaceHeaders
    },
    201: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsCreateOrReplaceHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.FunctionsCreateOrReplaceHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "functionParameter",
    mapper: {
      ...Mappers.FunctionModel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.FunctionsUpdateHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.FunctionsGetHeaders
    }
  },
  serializer
};

const listByStreamingJobOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FunctionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const retrieveDefaultDefinitionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/RetrieveDefaultDefinition",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "functionRetrieveDefaultDefinitionParameters"
    ],
    mapper: Mappers.FunctionRetrieveDefaultDefinitionParameters
  },
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginTestOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/test",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "functionParameter"
    ],
    mapper: Mappers.FunctionModel
  },
  responses: {
    200: {
      bodyMapper: Mappers.ResourceTestStatus
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByStreamingJobNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FunctionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
