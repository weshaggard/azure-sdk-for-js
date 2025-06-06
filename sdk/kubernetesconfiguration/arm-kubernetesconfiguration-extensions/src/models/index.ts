/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Scope of the extension. It can be either Cluster or Namespace; but not both. */
export interface Scope {
  /** Specifies that the scope of the extension is Cluster */
  cluster?: ScopeCluster;
  /** Specifies that the scope of the extension is Namespace */
  namespace?: ScopeNamespace;
}

/** Specifies that the scope of the extension is Cluster */
export interface ScopeCluster {
  /** Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created */
  releaseNamespace?: string;
}

/** Specifies that the scope of the extension is Namespace */
export interface ScopeNamespace {
  /** Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created */
  targetNamespace?: string;
}

/** Status from the extension. */
export interface ExtensionStatus {
  /** Status code provided by the Extension */
  code?: string;
  /** Short description of status of the extension. */
  displayStatus?: string;
  /** Level of the status. */
  level?: LevelType;
  /** Detailed message of the status from the Extension. */
  message?: string;
  /** DateLiteral (per ISO8601) noting the time of installation status. */
  time?: string;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Identity of the Extension resource in an AKS cluster */
export interface ExtensionPropertiesAksAssignedIdentity {
  /**
   * The principal ID of resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The identity type. */
  type?: AKSIdentityType;
}

/** Identity for the resource. */
export interface Identity {
  /**
   * The principal ID of resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The identity type. */
  type?: "SystemAssigned";
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Plan for the resource. */
export interface Plan {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The Extension Patch Request object. */
export interface PatchExtension {
  /** Flag to note if this extension participates in auto upgrade of minor version, or not. */
  autoUpgradeMinorVersion?: boolean;
  /** ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'. */
  releaseTrain?: string;
  /** Version of the extension for this extension, if it is 'pinned' to a specific version. autoUpgradeMinorVersion must be 'false'. */
  version?: string;
  /** Configuration settings, as name-value pairs for configuring this extension. */
  configurationSettings?: { [propertyName: string]: string };
  /** Configuration settings that are sensitive, as name-value pairs for configuring this extension. */
  configurationProtectedSettings?: { [propertyName: string]: string };
}

/** Result of the request to list Extensions.  It contains a list of Extension objects and a URL link to get the next set of results. */
export interface ExtensionsList {
  /**
   * List of Extensions within a Kubernetes cluster.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Extension[];
  /**
   * URL to get the next set of extension objects, if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The current status of an async operation. */
export interface OperationStatusResult {
  /** Fully qualified ID for the async operation. */
  id?: string;
  /** Name of the async operation. */
  name?: string;
  /** Operation status. */
  status: string;
  /** Additional information, if available. */
  properties?: { [propertyName: string]: string };
  /**
   * If present, details of the operation error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorDetail;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** The Extension object. */
export interface Extension extends ProxyResource {
  /** Identity of the Extension resource */
  identity?: Identity;
  /**
   * Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The plan information. */
  plan?: Plan;
  /** Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher. */
  extensionType?: string;
  /** Flag to note if this extension participates in auto upgrade of minor version, or not. */
  autoUpgradeMinorVersion?: boolean;
  /** ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'. */
  releaseTrain?: string;
  /** User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'. */
  version?: string;
  /** Scope at which the extension is installed. */
  scope?: Scope;
  /** Configuration settings, as name-value pairs for configuring this extension. */
  configurationSettings?: { [propertyName: string]: string };
  /** Configuration settings that are sensitive, as name-value pairs for configuring this extension. */
  configurationProtectedSettings?: { [propertyName: string]: string };
  /**
   * Currently installed version of the extension.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly currentVersion?: string;
  /**
   * Status of installation of this extension.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Status from this extension. */
  statuses?: ExtensionStatus[];
  /**
   * Error information from the Agent - e.g. errors during installation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly errorInfo?: ErrorDetail;
  /**
   * Custom Location settings properties.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly customLocationSettings?: { [propertyName: string]: string };
  /**
   * Uri of the Helm package
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly packageUri?: string;
  /** Identity of the Extension resource in an AKS cluster */
  aksAssignedIdentity?: ExtensionPropertiesAksAssignedIdentity;
  /**
   * Flag to note if this extension is a system extension
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isSystemExtension?: boolean;
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Creating** \
 * **Updating** \
 * **Deleting**
 */
export type ProvisioningState = string;

/** Known values of {@link LevelType} that the service accepts. */
export enum KnownLevelType {
  /** Error */
  Error = "Error",
  /** Warning */
  Warning = "Warning",
  /** Information */
  Information = "Information",
}

/**
 * Defines values for LevelType. \
 * {@link KnownLevelType} can be used interchangeably with LevelType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Error** \
 * **Warning** \
 * **Information**
 */
export type LevelType = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;
/** Defines values for AKSIdentityType. */
export type AKSIdentityType = "SystemAssigned" | "UserAssigned";

/** Optional parameters. */
export interface ExtensionsCreateOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type ExtensionsCreateResponse = Extension;

/** Optional parameters. */
export interface ExtensionsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ExtensionsGetResponse = Extension;

/** Optional parameters. */
export interface ExtensionsDeleteOptionalParams extends coreClient.OperationOptions {
  /** Delete the extension resource in Azure - not the normal asynchronous delete. */
  forceDelete?: boolean;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ExtensionsUpdateOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type ExtensionsUpdateResponse = Extension;

/** Optional parameters. */
export interface ExtensionsListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ExtensionsListResponse = ExtensionsList;

/** Optional parameters. */
export interface ExtensionsListNextOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ExtensionsListNextResponse = ExtensionsList;

/** Optional parameters. */
export interface OperationStatusGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type OperationStatusGetResponse = OperationStatusResult;

/** Optional parameters. */
export interface ExtensionsClientOptionalParams extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
