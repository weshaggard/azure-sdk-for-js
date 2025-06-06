# Release History

## 2.0.1 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 2.0.0 (2025-04-08)

### Features Added

Stable release of the Geographic replication support added in v6.0.0-beta.1.

## 2.0.0-beta.1 (2025-02-11)

### Other Changes

- The `offset` property of a checkpoint is no longer re-interpreted as a number.

## 1.1.0-beta.1 (2024-06-06)

### Features Added

- With the dropping of support for Node.js versions that are no longer in LTS, the dependency on `@types/node` has been updated to version 12. Read our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.
- Updates all async methods on `BlobCheckpointStore` to accept
  an optional `options` parameter that can be used to pass in an
  `abortSignal` and `tracingOptions`.
  Resolves issue [#9492](https://github.com/Azure/azure-sdk-for-js/issues/9492).

### Key Bugs Fixed

- Fixed a bug where `ContainerClient` could not passed to `BlobCheckpointStore` if the `ContainerClient` was created by another version of `@azure/storage-blob`.

### Other Changes

- The `offset` property of a checkpoint is no longer re-interpreted as a number.

## 1.0.1 (2020-08-03)

- Fixes issue [#10132](https://github.com/Azure/azure-sdk-for-js/issues/10132)
  where using an Azure Storage Account with soft-deletes or blob versioning enabled
  would cause `listCheckpoints` to suffer performance penalties proportional to the
  number of times `updateCheckpoint` was called.

## 1.0.0 (2020-01-09)

- This release marks the general availability of the `@azure/eventhubs-checkpointstore-blob` package.
- `claimOwnership()` will throw on underlying issues with storage, rather than
  failing silently.

## 1.0.0-preview.5 (2019-12-03)

- Updated to use the latest version of the `@azure/event-hubs` package.
- Updated to use version 12.x.x of the `@azure/storage-blob` package.

Breaking changes:

- `BlobPartitionManager` has been renamed to `BlobCheckpointStore` to reflect naming changes
  made in the `@azure/event-hubs` package.
- `BlobCheckpointStore` storage layout has changed and is incompatible with checkpoints and ownerships
  serialized from previous previews.
- `updateCheckpoint` no longer returns an `Promise<string>` with an etag. It now returns `Promise<void>`.
- `Checkpoint` and `PartitionOwnership` have had redundant/overlapping fields removed.

## 1.0.0-preview.4 (2019-11-05)

- Updated to use the latest version of the `@azure/event-hubs` package and `@azure/storage-blob` packages.

## 1.0.0-preview.3 (2019-10-08)

- Updated to use the latest version of the `@azure/event-hubs` package.

## 1.0.0-preview.2 (2019-10-07)

- Current implementation of the Partition Manager takes the event hub name, consumer group name and partition id to ensure uniqueness for the checkpoint and ownership.
  Since the same event hub name and consumer group name can exist in another namespace, we added `fullyQualifiedNamespace` as well to ensure uniqueness.
  ([PR #5153](https://github.com/Azure/azure-sdk-for-js/pull/5153))

## 1.0.0-preview.1 (2019-09-12)

This is the first preview of the `@azure/eventhubs-checkpointstore-blob` library which provides the implementation for the `PartitionManager` interface from the `@azure/event-hubs` library which is required to store checkpoints & aid in load balancing of multiple instances of an EventProcessor.
