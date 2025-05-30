/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** List containing this Resource Provider's available operations. */
export interface ResourceProviderOperationList {
  /**
   * Resource provider operations list.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: ResourceProviderOperationDefinition[];
  /**
   * The URI that can be used to request the next page for list of Azure operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Describes the Resource Provider Operation. */
export interface ResourceProviderOperationDefinition {
  /** Resource provider operation name. */
  name?: string;
  /** Indicates whether the operation is data action or not. */
  isDataAction?: boolean;
  /** Details about the operations */
  display?: ResourceProviderOperationDisplay;
}

/** Describes the properties of the Operation. */
export interface ResourceProviderOperationDisplay {
  /** Name of the resource provider. */
  provider?: string;
  /** Name of the resource type. */
  resource?: string;
  /** Name of the resource provider operation. */
  operation?: string;
  /** Description of the resource provider operation. */
  description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
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

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

/** The check availability result. */
export interface CheckNameAvailabilityResponse {
  /** Indicates if the resource name is available. */
  nameAvailable?: boolean;
  /** The reason why the given name is not available. */
  reason?: CheckNameAvailabilityReason;
  /** Detailed reason why the given name is available. */
  message?: string;
}

/** Additional Confidential Ledger properties. */
export interface LedgerProperties {
  /**
   * Unique name for the Confidential Ledger.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ledgerName?: string;
  /**
   * Endpoint for calling Ledger Service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ledgerUri?: string;
  /**
   * Endpoint for accessing network identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly identityServiceUri?: string;
  /**
   * Internal namespace for the Ledger
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ledgerInternalNamespace?: string;
  /** Object representing RunningState for Ledger. */
  runningState?: RunningState;
  /** Type of Confidential Ledger */
  ledgerType?: LedgerType;
  /**
   * Provisioning state of Ledger Resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** SKU associated with the ledger */
  ledgerSku?: LedgerSku;
  /** Array of all AAD based Security Principals. */
  aadBasedSecurityPrincipals?: AADBasedSecurityPrincipal[];
  /** Array of all cert based Security Principals. */
  certBasedSecurityPrincipals?: CertBasedSecurityPrincipal[];
  /** CCF Property for the logging level for the untrusted host: Trace, Debug, Info, Fail, Fatal. */
  hostLevel?: string;
  /** CCF Property for the maximum size of the http request body: 1MB, 5MB, 10MB. */
  maxBodySizeInMb?: number;
  /** CCF Property for the subject name to include in the node certificate. Default: CN=CCF Node. */
  subjectName?: string;
  /** Number of CCF nodes in the ACC Ledger. */
  nodeCount?: number;
  /** Prefix for the write load balancer. Example: write */
  writeLBAddressPrefix?: string;
  /** Number of additional threads processing incoming client requests in the enclave (modify with care!) */
  workerThreads?: number;
  /** Enclave platform of the Confidential Ledger. */
  enclavePlatform?: EnclavePlatform;
  /** Application type of the Confidential Ledger. */
  applicationType?: ApplicationType;
}

/** AAD based security principal with associated Ledger RoleName */
export interface AADBasedSecurityPrincipal {
  /** UUID/GUID based Principal Id of the Security Principal */
  principalId?: string;
  /** UUID/GUID based Tenant Id of the Security Principal */
  tenantId?: string;
  /** LedgerRole associated with the Security Principal of Ledger */
  ledgerRoleName?: LedgerRoleName;
}

/** Cert based security principal with Ledger RoleName */
export interface CertBasedSecurityPrincipal {
  /** Public key of the user cert (.pem or .cer) */
  cert?: string;
  /** LedgerRole associated with the Security Principal of Ledger */
  ledgerRoleName?: LedgerRoleName;
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
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
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

/** Object that includes an array of Confidential Ledgers and a possible link for next set. */
export interface ConfidentialLedgerList {
  /** List of Confidential Ledgers */
  value?: ConfidentialLedger[];
  /** The URL the client should use to fetch the next page (per server side paging). */
  nextLink?: string;
}

/** Object representing Backup properties of a Confidential Ledger Resource. */
export interface ConfidentialLedgerBackup {
  /** The region where the backup of the ledger will eventually be restored to. */
  restoreRegion?: string;
  /** SAS URI used to access the backup Fileshare. */
  uri: string;
}

/** Object representing the backup response of a Confidential Ledger Resource. */
export interface ConfidentialLedgerBackupResponse {
  /**
   * Response body stating if the ledger is being backed up.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** Object representing Restore properties of a Confidential Ledger Resource. */
export interface ConfidentialLedgerRestore {
  /** Fileshare where the ledger backup is stored. */
  fileShareName: string;
  /** The region the ledger is being restored to. */
  restoreRegion: string;
  /** SAS URI used to access the backup fileshare. */
  uri: string;
}

/** Object representing the restore response of a Confidential Ledger Resource. */
export interface ConfidentialLedgerRestoreResponse {
  /**
   * Response body stating if the ledger is being restored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** Additional Managed CCF properties. */
export interface ManagedCCFProperties {
  /**
   * Unique name for the Managed CCF.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly appName?: string;
  /**
   * Endpoint for calling Managed CCF Service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly appUri?: string;
  /**
   * Endpoint for accessing network identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly identityServiceUri?: string;
  /** List of member identity certificates for  Managed CCF */
  memberIdentityCertificates?: MemberIdentityCertificate[];
  /** Deployment Type of Managed CCF */
  deploymentType?: DeploymentType;
  /** Object representing RunningState for Managed CCF. */
  runningState?: RunningState;
  /**
   * Provisioning state of Managed CCF Resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Number of CCF nodes in the Managed CCF. */
  nodeCount?: number;
  /** Enclave platform of Managed CCF. */
  enclavePlatform?: EnclavePlatform;
}

/** Object representing MemberIdentityCertificate for Managed CCF. */
export interface MemberIdentityCertificate {
  /** Member Identity Certificate */
  certificate?: string;
  /** Member Identity Certificate Encryption Key */
  encryptionkey?: string;
  /** Anything */
  tags?: any;
}

/** Object representing DeploymentType for Managed CCF. */
export interface DeploymentType {
  /** Unique name for the Managed CCF. */
  languageRuntime?: LanguageRuntime;
  /** Source Uri containing ManagedCCF code */
  appSourceUri?: string;
}

/** Object that includes an array of Managed CCF and a possible link for next set. */
export interface ManagedCCFList {
  /** List of Managed CCF */
  value?: ManagedCCF[];
  /** The URL the client should use to fetch the next page (per server side paging). */
  nextLink?: string;
}

/** Object representing Backup properties of a Managed CCF Resource. */
export interface ManagedCCFBackup {
  /** The region where the backup of the managed CCF resource will eventually be restored to. */
  restoreRegion?: string;
  /** SAS URI used to access the backup Fileshare. */
  uri: string;
}

/** Object representing the backup response of a Managed CCF Resource. */
export interface ManagedCCFBackupResponse {
  /**
   * Response body stating if the managed CCF resource is being backed up.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** Object representing Restore properties of Managed CCF Resource. */
export interface ManagedCCFRestore {
  /** Fileshare where the managed CCF resource backup is stored. */
  fileShareName: string;
  /** The region the managed CCF resource is being restored to. */
  restoreRegion: string;
  /** SAS URI used to access the backup Fileshare. */
  uri: string;
}

/** Object representing the restore response of a Managed CCF Resource. */
export interface ManagedCCFRestoreResponse {
  /**
   * Response body stating if the managed CCF resource is being restored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** Tags for Managed CCF Certificates */
export interface CertificateTags {
  /** Additional tags for Managed CCF Certificates */
  tags?: { [propertyName: string]: string };
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** Confidential Ledger. Contains the properties of Confidential Ledger Resource. */
export interface ConfidentialLedger extends TrackedResource {
  /** Properties of Confidential Ledger Resource. */
  properties?: LedgerProperties;
}

/** Managed CCF. Contains the properties of Managed CCF Resource. */
export interface ManagedCCF extends TrackedResource {
  /** Properties of Managed CCF Resource. */
  properties?: ManagedCCFProperties;
}

/** Known values of {@link CheckNameAvailabilityReason} that the service accepts. */
export enum KnownCheckNameAvailabilityReason {
  /** Invalid */
  Invalid = "Invalid",
  /** AlreadyExists */
  AlreadyExists = "AlreadyExists",
}

/**
 * Defines values for CheckNameAvailabilityReason. \
 * {@link KnownCheckNameAvailabilityReason} can be used interchangeably with CheckNameAvailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type CheckNameAvailabilityReason = string;

/** Known values of {@link RunningState} that the service accepts. */
export enum KnownRunningState {
  /** Active */
  Active = "Active",
  /** Paused */
  Paused = "Paused",
  /** Unknown */
  Unknown = "Unknown",
  /** Pausing */
  Pausing = "Pausing",
  /** Resuming */
  Resuming = "Resuming",
}

/**
 * Defines values for RunningState. \
 * {@link KnownRunningState} can be used interchangeably with RunningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Paused** \
 * **Unknown** \
 * **Pausing** \
 * **Resuming**
 */
export type RunningState = string;

/** Known values of {@link LedgerType} that the service accepts. */
export enum KnownLedgerType {
  /** Unknown */
  Unknown = "Unknown",
  /** Public */
  Public = "Public",
  /** Private */
  Private = "Private",
}

/**
 * Defines values for LedgerType. \
 * {@link KnownLedgerType} can be used interchangeably with LedgerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Public** \
 * **Private**
 */
export type LedgerType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Unknown */
  Unknown = "Unknown",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Updating */
  Updating = "Updating",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Creating** \
 * **Deleting** \
 * **Updating**
 */
export type ProvisioningState = string;

/** Known values of {@link LedgerSku} that the service accepts. */
export enum KnownLedgerSku {
  /** Standard */
  Standard = "Standard",
  /** Basic */
  Basic = "Basic",
  /** Unknown */
  Unknown = "Unknown",
}

/**
 * Defines values for LedgerSku. \
 * {@link KnownLedgerSku} can be used interchangeably with LedgerSku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Basic** \
 * **Unknown**
 */
export type LedgerSku = string;

/** Known values of {@link LedgerRoleName} that the service accepts. */
export enum KnownLedgerRoleName {
  /** Reader */
  Reader = "Reader",
  /** Contributor */
  Contributor = "Contributor",
  /** Administrator */
  Administrator = "Administrator",
}

/**
 * Defines values for LedgerRoleName. \
 * {@link KnownLedgerRoleName} can be used interchangeably with LedgerRoleName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Reader** \
 * **Contributor** \
 * **Administrator**
 */
export type LedgerRoleName = string;

/** Known values of {@link EnclavePlatform} that the service accepts. */
export enum KnownEnclavePlatform {
  /** IntelSgx */
  IntelSgx = "IntelSgx",
  /** AmdSevSnp */
  AmdSevSnp = "AmdSevSnp",
}

/**
 * Defines values for EnclavePlatform. \
 * {@link KnownEnclavePlatform} can be used interchangeably with EnclavePlatform,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IntelSgx** \
 * **AmdSevSnp**
 */
export type EnclavePlatform = string;

/** Known values of {@link ApplicationType} that the service accepts. */
export enum KnownApplicationType {
  /** ConfidentialLedger */
  ConfidentialLedger = "ConfidentialLedger",
  /** CodeTransparency */
  CodeTransparency = "CodeTransparency",
}

/**
 * Defines values for ApplicationType. \
 * {@link KnownApplicationType} can be used interchangeably with ApplicationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ConfidentialLedger** \
 * **CodeTransparency**
 */
export type ApplicationType = string;

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

/** Known values of {@link LanguageRuntime} that the service accepts. */
export enum KnownLanguageRuntime {
  /** CPP */
  CPP = "CPP",
  /** JS */
  JS = "JS",
}

/**
 * Defines values for LanguageRuntime. \
 * {@link KnownLanguageRuntime} can be used interchangeably with LanguageRuntime,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **CPP** \
 * **JS**
 */
export type LanguageRuntime = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = ResourceProviderOperationList;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = ResourceProviderOperationList;

/** Optional parameters. */
export interface CheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type CheckNameAvailabilityOperationResponse =
  CheckNameAvailabilityResponse;

/** Optional parameters. */
export interface LedgerGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type LedgerGetResponse = ConfidentialLedger;

/** Optional parameters. */
export interface LedgerDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface LedgerCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type LedgerCreateResponse = ConfidentialLedger;

/** Optional parameters. */
export interface LedgerUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type LedgerUpdateResponse = ConfidentialLedger;

/** Optional parameters. */
export interface LedgerListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the list operation. eg. $filter=ledgerType eq 'Public' */
  filter?: string;
}

/** Contains response data for the listByResourceGroup operation. */
export type LedgerListByResourceGroupResponse = ConfidentialLedgerList;

/** Optional parameters. */
export interface LedgerListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the list operation. eg. $filter=ledgerType eq 'Public' */
  filter?: string;
}

/** Contains response data for the listBySubscription operation. */
export type LedgerListBySubscriptionResponse = ConfidentialLedgerList;

/** Optional parameters. */
export interface LedgerBackupOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the backup operation. */
export type LedgerBackupResponse = ConfidentialLedgerBackupResponse;

/** Optional parameters. */
export interface LedgerRestoreOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the restore operation. */
export type LedgerRestoreResponse = ConfidentialLedgerRestoreResponse;

/** Optional parameters. */
export interface LedgerListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type LedgerListByResourceGroupNextResponse = ConfidentialLedgerList;

/** Optional parameters. */
export interface LedgerListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type LedgerListBySubscriptionNextResponse = ConfidentialLedgerList;

/** Optional parameters. */
export interface ManagedCCFGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ManagedCCFGetResponse = ManagedCCF;

/** Optional parameters. */
export interface ManagedCCFDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ManagedCCFCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type ManagedCCFCreateResponse = ManagedCCF;

/** Optional parameters. */
export interface ManagedCCFUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type ManagedCCFUpdateResponse = ManagedCCF;

/** Optional parameters. */
export interface ManagedCCFListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the list operation. eg. $filter=ledgerType eq 'Public' */
  filter?: string;
}

/** Contains response data for the listByResourceGroup operation. */
export type ManagedCCFListByResourceGroupResponse = ManagedCCFList;

/** Optional parameters. */
export interface ManagedCCFListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the list operation. eg. $filter=ledgerType eq 'Public' */
  filter?: string;
}

/** Contains response data for the listBySubscription operation. */
export type ManagedCCFListBySubscriptionResponse = ManagedCCFList;

/** Optional parameters. */
export interface ManagedCCFBackupOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the backup operation. */
export type ManagedCCFBackupOperationResponse = ManagedCCFBackupResponse;

/** Optional parameters. */
export interface ManagedCCFRestoreOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the restore operation. */
export type ManagedCCFRestoreOperationResponse = ManagedCCFRestoreResponse;

/** Optional parameters. */
export interface ManagedCCFListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ManagedCCFListByResourceGroupNextResponse = ManagedCCFList;

/** Optional parameters. */
export interface ManagedCCFListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type ManagedCCFListBySubscriptionNextResponse = ManagedCCFList;

/** Optional parameters. */
export interface ConfidentialLedgerClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
