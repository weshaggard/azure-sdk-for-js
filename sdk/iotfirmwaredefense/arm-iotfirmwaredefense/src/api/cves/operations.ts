// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTFirmwareDefenseContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _CveResourceListResult,
  _cveResourceListResultDeserializer,
  CveResource,
} from "../../models/models.js";
import { CvesListByFirmwareOptionalParams } from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listByFirmwareSend(
  context: Client,
  resourceGroupName: string,
  workspaceName: string,
  firmwareId: string,
  options: CvesListByFirmwareOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTFirmwareDefense/workspaces/{workspaceName}/firmwares/{firmwareId}/commonVulnerabilitiesAndExposures{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      workspaceName: workspaceName,
      firmwareId: firmwareId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listByFirmwareDeserialize(
  result: PathUncheckedResponse,
): Promise<_CveResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _cveResourceListResultDeserializer(result.body);
}

/** Lists CVE analysis results of a firmware. */
export function listByFirmware(
  context: Client,
  resourceGroupName: string,
  workspaceName: string,
  firmwareId: string,
  options: CvesListByFirmwareOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CveResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByFirmwareSend(context, resourceGroupName, workspaceName, firmwareId, options),
    _listByFirmwareDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
