/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/operationsMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a Operations. */
export class Operations {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a Operations.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the available Storage Rest API operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.OperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationListResult>, callback?: msRest.ServiceCallback<Models.OperationListResult>): Promise<Models.OperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OperationsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Storage/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
