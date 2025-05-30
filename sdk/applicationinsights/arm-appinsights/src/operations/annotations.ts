/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Annotations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient.js";
import {
  Annotation,
  AnnotationsListOptionalParams,
  AnnotationsListResponse,
  AnnotationsCreateOptionalParams,
  AnnotationsCreateResponse,
  AnnotationsDeleteOptionalParams,
  AnnotationsGetOptionalParams,
  AnnotationsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Annotations operations. */
export class AnnotationsImpl implements Annotations {
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class Annotations class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of annotations for a component for given time range
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param start The start time to query from for annotations, cannot be older than 90 days from current
   *              date.
   * @param end The end time to query for annotations.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    start: string,
    end: string,
    options?: AnnotationsListOptionalParams,
  ): PagedAsyncIterableIterator<Annotation> {
    const iter = this.listPagingAll(
      resourceGroupName,
      resourceName,
      start,
      end,
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
        return this.listPagingPage(
          resourceGroupName,
          resourceName,
          start,
          end,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    start: string,
    end: string,
    options?: AnnotationsListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<Annotation[]> {
    let result: AnnotationsListResponse;
    result = await this._list(
      resourceGroupName,
      resourceName,
      start,
      end,
      options,
    );
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    start: string,
    end: string,
    options?: AnnotationsListOptionalParams,
  ): AsyncIterableIterator<Annotation> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      start,
      end,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets the list of annotations for a component for given time range
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param start The start time to query from for annotations, cannot be older than 90 days from current
   *              date.
   * @param end The end time to query for annotations.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    start: string,
    end: string,
    options?: AnnotationsListOptionalParams,
  ): Promise<AnnotationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, start, end, options },
      listOperationSpec,
    );
  }

  /**
   * Create an Annotation of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param annotationProperties Properties that need to be specified to create an annotation of a
   *                             Application Insights component.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    annotationProperties: Annotation,
    options?: AnnotationsCreateOptionalParams,
  ): Promise<AnnotationsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, annotationProperties, options },
      createOperationSpec,
    );
  }

  /**
   * Delete an Annotation of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param annotationId The unique annotation ID. This is unique within a Application Insights
   *                     component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    annotationId: string,
    options?: AnnotationsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, annotationId, options },
      deleteOperationSpec,
    );
  }

  /**
   * Get the annotation for given id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param annotationId The unique annotation ID. This is unique within a Application Insights
   *                     component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    annotationId: string,
    options?: AnnotationsGetOptionalParams,
  ): Promise<AnnotationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, annotationId, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AnnotationsListResult,
    },
    default: {
      bodyMapper: Mappers.AnnotationError,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.start, Parameters.end],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Annotation" } },
        },
      },
    },
    default: {
      bodyMapper: Mappers.AnnotationError,
    },
  },
  requestBody: Parameters.annotationProperties,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations/{annotationId}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.annotationId,
  ],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/Annotations/{annotationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Annotation" } },
        },
      },
    },
    default: {
      bodyMapper: Mappers.AnnotationError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.annotationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
