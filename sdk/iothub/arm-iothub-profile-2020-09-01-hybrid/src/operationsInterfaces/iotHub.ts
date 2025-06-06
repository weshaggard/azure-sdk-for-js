/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import { FailoverInput, IotHubManualFailoverOptionalParams } from "../models/index.js";

/** Interface representing a IotHub. */
export interface IotHub {
  /**
   * Perform manual fail over of given hub
   * @param iotHubName IotHub to fail over
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param failoverInput Region to failover to. Must be a azure DR pair
   * @param options The options parameters.
   */
  beginManualFailover(
    iotHubName: string,
    resourceGroupName: string,
    failoverInput: FailoverInput,
    options?: IotHubManualFailoverOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Perform manual fail over of given hub
   * @param iotHubName IotHub to fail over
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param failoverInput Region to failover to. Must be a azure DR pair
   * @param options The options parameters.
   */
  beginManualFailoverAndWait(
    iotHubName: string,
    resourceGroupName: string,
    failoverInput: FailoverInput,
    options?: IotHubManualFailoverOptionalParams
  ): Promise<void>;
}
