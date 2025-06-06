/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The request object containing targets groups and a connection filter */
export interface AddToGroupsRequest {
  /** A list of groups which target connections will be added into */
  groups?: string[];
  /** An OData filter which target connections satisfy */
  filter?: string;
}

/** The error object. */
export interface ErrorDetail {
  /** One of a server-defined set of error codes. */
  code?: string;
  /** A human-readable representation of the error. */
  message?: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details?: ErrorDetail[];
  inner?: InnerError;
}

export interface InnerError {
  /** A more specific error code than was provided by the containing error. */
  code?: string;
  inner?: InnerError;
}

/** The response object containing the token for the client */
export interface ClientTokenResponse {
  /** The token value for the WebSocket client to connect to the service */
  token?: string;
}

/** The request object containing targets groups and a connection filter */
export interface RemoveFromGroupsRequest {
  /** A list of groups which target connections will be removed from */
  groups?: string[];
  /** An OData filter which target connections satisfy */
  filter?: string;
}

/** Represents a page of elements as a LIST REST API result. */
export interface GroupMemberPagedValues {
  value: WebPubSubGroupMember[];
  /** An absolute URL that the client can GET in order to retrieve the next page of the collection. */
  nextLink?: string;
}

export interface WebPubSubGroupMember {
  /** A unique identifier of a connection. */
  connectionId: string;
  /** The user ID of the connection. A user can have multiple connections. */
  userId?: string;
}

/** Defines headers for WebPubSub_addConnectionsToGroups operation. */
export interface WebPubSubAddConnectionsToGroupsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_closeAllConnections operation. */
export interface WebPubSubCloseAllConnectionsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_generateClientToken operation. */
export interface WebPubSubGenerateClientTokenExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_removeConnectionsFromGroups operation. */
export interface WebPubSubRemoveConnectionsFromGroupsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_sendToAll operation. */
export interface WebPubSubSendToAllExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_closeConnection operation. */
export interface WebPubSubCloseConnectionExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_connectionExists operation. */
export interface WebPubSubConnectionExistsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_sendToConnection operation. */
export interface WebPubSubSendToConnectionExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_removeConnectionFromAllGroups operation. */
export interface WebPubSubRemoveConnectionFromAllGroupsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_groupExists operation. */
export interface WebPubSubGroupExistsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_closeGroupConnections operation. */
export interface WebPubSubCloseGroupConnectionsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_sendToGroup operation. */
export interface WebPubSubSendToGroupExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_listConnectionsInGroup operation. */
export interface WebPubSubListConnectionsInGroupExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_removeConnectionFromGroup operation. */
export interface WebPubSubRemoveConnectionFromGroupExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_addConnectionToGroup operation. */
export interface WebPubSubAddConnectionToGroupExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_revokePermission operation. */
export interface WebPubSubRevokePermissionExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_checkPermission operation. */
export interface WebPubSubCheckPermissionExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_grantPermission operation. */
export interface WebPubSubGrantPermissionExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_userExists operation. */
export interface WebPubSubUserExistsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_closeUserConnections operation. */
export interface WebPubSubCloseUserConnectionsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_sendToUser operation. */
export interface WebPubSubSendToUserExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_removeUserFromAllGroups operation. */
export interface WebPubSubRemoveUserFromAllGroupsExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_removeUserFromGroup operation. */
export interface WebPubSubRemoveUserFromGroupExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_addUserToGroup operation. */
export interface WebPubSubAddUserToGroupExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for WebPubSub_listConnectionsInGroupNext operation. */
export interface WebPubSubListConnectionsInGroupNextExceptionHeaders {
  errorCode?: string;
}

/** Known values of {@link WebPubSubClientType} that the service accepts. */
export enum KnownWebPubSubClientType {
  /** Default */
  Default = "Default",
  /** Mqtt */
  Mqtt = "MQTT",
}

/**
 * Defines values for WebPubSubClientType. \
 * {@link KnownWebPubSubClientType} can be used interchangeably with WebPubSubClientType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **MQTT**
 */
export type WebPubSubClientType = string;

/** Known values of {@link WebPubSubPermission} that the service accepts. */
export enum KnownWebPubSubPermission {
  /** SendToGroup */
  SendToGroup = "sendToGroup",
  /** JoinLeaveGroup */
  JoinLeaveGroup = "joinLeaveGroup",
}

/**
 * Defines values for WebPubSubPermission. \
 * {@link KnownWebPubSubPermission} can be used interchangeably with WebPubSubPermission,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **sendToGroup** \
 * **joinLeaveGroup**
 */
export type WebPubSubPermission = string;
/** Defines values for ContentType. */
export type ContentType = "application/json" | "application/octet-stream";

/** Optional parameters. */
export interface HealthApiGetServiceStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubAddConnectionsToGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubCloseAllConnectionsOptionalParams
  extends coreClient.OperationOptions {
  /** Exclude these connectionIds when closing the connections in the hub. */
  excluded?: string[];
  /** The reason closing the client connection. */
  reason?: string;
}

/** Optional parameters. */
export interface WebPubSubGenerateClientTokenOptionalParams
  extends coreClient.OperationOptions {
  /** User Id. */
  userId?: string;
  /** Roles that the connection with the generated token will have. */
  roles?: string[];
  /** The expire time of the generated token. */
  expirationTimeInMinutes?: number;
  /** Groups that the connection will join when it connects. */
  groups?: string[];
  /** The type of client. Case-insensitive. If not set, it's "Default". For Web PubSub for Socket.IO, only the default value is supported. For Web PubSub, the valid values are 'Default' and 'MQTT'. */
  clientType?: WebPubSubClientType;
}

/** Contains response data for the generateClientToken operation. */
export type WebPubSubGenerateClientTokenResponse = ClientTokenResponse;

/** Optional parameters. */
export interface WebPubSubRemoveConnectionsFromGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubSendToAll$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded connection Ids. */
  excludedConnections?: string[];
  /** Following OData filter syntax to filter out the subscribers receiving the messages. */
  filter?: string;
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubSendToAll$textOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded connection Ids. */
  excludedConnections?: string[];
  /** Following OData filter syntax to filter out the subscribers receiving the messages. */
  filter?: string;
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubCloseConnectionOptionalParams
  extends coreClient.OperationOptions {
  /** The reason closing the client connection. */
  reason?: string;
}

/** Optional parameters. */
export interface WebPubSubConnectionExistsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubSendToConnection$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubSendToConnection$textOptionalParams
  extends coreClient.OperationOptions {
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubRemoveConnectionFromAllGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubGroupExistsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubCloseGroupConnectionsOptionalParams
  extends coreClient.OperationOptions {
  /** Exclude these connectionIds when closing the connections in the group. */
  excluded?: string[];
  /** The reason closing the client connection. */
  reason?: string;
}

/** Optional parameters. */
export interface WebPubSubSendToGroup$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded connection Ids */
  excludedConnections?: string[];
  /** Following OData filter syntax to filter out the subscribers receiving the messages. */
  filter?: string;
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubSendToGroup$textOptionalParams
  extends coreClient.OperationOptions {
  /** Excluded connection Ids */
  excludedConnections?: string[];
  /** Following OData filter syntax to filter out the subscribers receiving the messages. */
  filter?: string;
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubListConnectionsInGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of connections to include in a single response. It should be between 1 and 200. */
  maxPageSize?: number;
  /** The maximum number of connections to return. If the value is not set, then all the connections in a group are returned. */
  top?: number;
  /** A token that allows the client to retrieve the next page of results. This parameter is provided by the service in the response of a previous request when there are additional results to be fetched. Clients should include the continuationToken in the next request to receive the subsequent page of data. If this parameter is omitted, the server will return the first page of results. */
  continuationToken?: string;
}

/** Contains response data for the listConnectionsInGroup operation. */
export type WebPubSubListConnectionsInGroupResponse = GroupMemberPagedValues;

/** Optional parameters. */
export interface WebPubSubRemoveConnectionFromGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubAddConnectionToGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubRevokePermissionOptionalParams
  extends coreClient.OperationOptions {
  /** The meaning of the target depends on the specific permission. For joinLeaveGroup and sendToGroup, targetName is a required parameter standing for the group name. */
  targetName?: string;
}

/** Optional parameters. */
export interface WebPubSubCheckPermissionOptionalParams
  extends coreClient.OperationOptions {
  /** The meaning of the target depends on the specific permission. For joinLeaveGroup and sendToGroup, targetName is a required parameter standing for the group name. */
  targetName?: string;
}

/** Optional parameters. */
export interface WebPubSubGrantPermissionOptionalParams
  extends coreClient.OperationOptions {
  /** The meaning of the target depends on the specific permission. For joinLeaveGroup and sendToGroup, targetName is a required parameter standing for the group name. */
  targetName?: string;
}

/** Optional parameters. */
export interface WebPubSubUserExistsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubCloseUserConnectionsOptionalParams
  extends coreClient.OperationOptions {
  /** Exclude these connectionIds when closing the connections for the user. */
  excluded?: string[];
  /** The reason closing the client connection. */
  reason?: string;
}

/** Optional parameters. */
export interface WebPubSubSendToUser$binaryOptionalParams
  extends coreClient.OperationOptions {
  /** Following OData filter syntax to filter out the subscribers receiving the messages. */
  filter?: string;
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubSendToUser$textOptionalParams
  extends coreClient.OperationOptions {
  /** Following OData filter syntax to filter out the subscribers receiving the messages. */
  filter?: string;
  /** The time-to-live (TTL) value in seconds for messages sent to the service. 0 is the default value, which means the message never expires. 300 is the maximum value. If this parameter is non-zero, messages that are not consumed by the client within the specified TTL will be dropped by the service. This parameter can help when the client's bandwidth is limited. */
  messageTtlSeconds?: number;
}

/** Optional parameters. */
export interface WebPubSubRemoveUserFromAllGroupsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubRemoveUserFromGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubAddUserToGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface WebPubSubListConnectionsInGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listConnectionsInGroupNext operation. */
export type WebPubSubListConnectionsInGroupNextResponse =
  GroupMemberPagedValues;

/** Optional parameters. */
export interface GeneratedClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
