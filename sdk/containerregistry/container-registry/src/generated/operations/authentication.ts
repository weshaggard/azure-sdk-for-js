/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Authentication } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClientContext } from "../generatedClientContext";
import {
  AuthenticationExchangeAadAccessTokenForAcrRefreshTokenOptionalParams,
  AuthenticationExchangeAadAccessTokenForAcrRefreshTokenResponse,
  AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams,
  AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenResponse
} from "../models";

/** Class representing a Authentication. */
export class AuthenticationImpl implements Authentication {
  private readonly client: GeneratedClientContext;

  /**
   * Initialize a new instance of the class Authentication class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClientContext) {
    this.client = client;
  }

  /**
   * Exchange AAD tokens for an ACR refresh Token
   * @param options The options parameters.
   */
  exchangeAadAccessTokenForAcrRefreshToken(
    options?: AuthenticationExchangeAadAccessTokenForAcrRefreshTokenOptionalParams
  ): Promise<AuthenticationExchangeAadAccessTokenForAcrRefreshTokenResponse> {
    return this.client.sendOperationRequest(
      { options },
      exchangeAadAccessTokenForAcrRefreshTokenOperationSpec
    );
  }

  /**
   * Exchange ACR Refresh token for an ACR Access Token
   * @param options The options parameters.
   */
  exchangeAcrRefreshTokenForAcrAccessToken(
    options?: AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams
  ): Promise<AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenResponse> {
    return this.client.sendOperationRequest(
      { options },
      exchangeAcrRefreshTokenForAcrAccessTokenOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const exchangeAadAccessTokenForAcrRefreshTokenOperationSpec: coreClient.OperationSpec = {
  path: "/oauth2/exchange",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AcrRefreshToken
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  formDataParameters: [Parameters.aadAccessToken],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.contentType3, Parameters.accept4],
  serializer
};
const exchangeAcrRefreshTokenForAcrAccessTokenOperationSpec: coreClient.OperationSpec = {
  path: "/oauth2/token",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AcrAccessToken
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  formDataParameters: [Parameters.acrRefreshToken],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.contentType3, Parameters.accept4],
  serializer
};
