/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { GeneratedClientOptionalParams } from "./models/index.js";

/** @internal */
export class GeneratedClientContext extends coreClient.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param endpoint HTTP or HTTPS endpoint for the Web PubSub service instance.
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-web-pubsub/1.2.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{Endpoint}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2021-10-01";
  }
}
