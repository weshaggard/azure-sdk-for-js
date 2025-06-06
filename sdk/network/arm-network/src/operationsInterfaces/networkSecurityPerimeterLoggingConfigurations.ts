/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  NspLoggingConfiguration,
  NetworkSecurityPerimeterLoggingConfigurationsListOptionalParams,
  NetworkSecurityPerimeterLoggingConfigurationsGetOptionalParams,
  NetworkSecurityPerimeterLoggingConfigurationsGetResponse,
  NetworkSecurityPerimeterLoggingConfigurationsCreateOrUpdateOptionalParams,
  NetworkSecurityPerimeterLoggingConfigurationsCreateOrUpdateResponse,
  NetworkSecurityPerimeterLoggingConfigurationsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkSecurityPerimeterLoggingConfigurations. */
export interface NetworkSecurityPerimeterLoggingConfigurations {
  /**
   * Lists the NSP logging configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityPerimeterName The name of the network security perimeter.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    networkSecurityPerimeterName: string,
    options?: NetworkSecurityPerimeterLoggingConfigurationsListOptionalParams,
  ): PagedAsyncIterableIterator<NspLoggingConfiguration>;
  /**
   * Gets the NSP logging configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityPerimeterName The name of the network security perimeter.
   * @param loggingConfigurationName The name of the NSP logging configuration. Accepts 'instance' as
   *                                 name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkSecurityPerimeterName: string,
    loggingConfigurationName: string,
    options?: NetworkSecurityPerimeterLoggingConfigurationsGetOptionalParams,
  ): Promise<NetworkSecurityPerimeterLoggingConfigurationsGetResponse>;
  /**
   * Creates or updates NSP logging configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityPerimeterName The name of the network security perimeter.
   * @param loggingConfigurationName The name of the NSP logging configuration. Accepts 'instance' as
   *                                 name.
   * @param parameters Parameters that hold the NspLoggingConfiguration to be created/updated.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkSecurityPerimeterName: string,
    loggingConfigurationName: string,
    parameters: NspLoggingConfiguration,
    options?: NetworkSecurityPerimeterLoggingConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<NetworkSecurityPerimeterLoggingConfigurationsCreateOrUpdateResponse>;
  /**
   * Deletes an NSP Logging configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityPerimeterName The name of the network security perimeter.
   * @param loggingConfigurationName The name of the NSP logging configuration. Accepts 'instance' as
   *                                 name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    networkSecurityPerimeterName: string,
    loggingConfigurationName: string,
    options?: NetworkSecurityPerimeterLoggingConfigurationsDeleteOptionalParams,
  ): Promise<void>;
}
