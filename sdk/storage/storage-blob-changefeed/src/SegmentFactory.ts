// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ShardFactory } from "./ShardFactory.js";
import type { ContainerClient, CommonOptions } from "@azure/storage-blob";
import { CHANGE_FEED_CONTAINER_NAME } from "./utils/constants.js";
import type { Shard } from "./Shard.js";
import { Segment } from "./Segment.js";
import type { SegmentCursor } from "./models/ChangeFeedCursor.js";
import { bodyToString } from "./utils/utils.node.js";
import { parseDateFromSegmentPath } from "./utils/utils.common.js";
import type { AbortSignalLike } from "@azure/abort-controller";
import { tracingClient } from "./utils/tracing.js";

export interface SegmentManifest {
  version?: number;
  begin?: Date;
  intervalSecs?: number;
  status: string;
  config?: any;
  chunkFilePaths: string[];
}

/**
 * Options to configure {@link SegmentFactory.create} operation.
 */
export interface CreateSegmentOptions extends CommonOptions {
  /**
   * An implementation of the `AbortSignalLike` interface to signal the request to cancel the operation.
   * For example, use the &commat;azure/abort-controller to create an `AbortSignal`.
   */
  abortSignal?: AbortSignalLike;
}

export class SegmentFactory {
  private readonly shardFactory: ShardFactory;

  constructor(shardFactory: ShardFactory) {
    this.shardFactory = shardFactory;
  }

  public async create(
    containerClient: ContainerClient,
    manifestPath: string,
    cursor?: SegmentCursor,
    options: CreateSegmentOptions = {},
  ): Promise<Segment> {
    return tracingClient.withSpan("SegmentFactory-create", options, async (updatedOptions) => {
      const shards: Shard[] = [];
      const dateTime: Date = parseDateFromSegmentPath(manifestPath);

      const blobClient = containerClient.getBlobClient(manifestPath);
      const blobDownloadRes = await blobClient.download(undefined, undefined, {
        abortSignal: options.abortSignal,
        tracingOptions: updatedOptions.tracingOptions,
      });
      const blobContent: string = await bodyToString(blobDownloadRes);

      const segmentManifest = JSON.parse(blobContent) as SegmentManifest;

      const containerPrefixLength = CHANGE_FEED_CONTAINER_NAME.length + 1; // "$blobchangefeed/"
      for (const shardPath of segmentManifest.chunkFilePaths) {
        const shardPathSubStr = shardPath.substring(containerPrefixLength);
        const shardCursor = cursor?.ShardCursors.find((x) =>
          x.CurrentChunkPath.startsWith(shardPathSubStr),
        );
        const shard: Shard = await this.shardFactory.create(
          containerClient,
          shardPathSubStr,
          shardCursor,
          {
            abortSignal: options.abortSignal,
            tracingOptions: updatedOptions.tracingOptions,
          },
        );
        if (shard.hasNext()) {
          shards.push(shard);
        }
      }

      let shardIndex = 0;
      if (cursor?.CurrentShardPath) {
        shardIndex = shards.findIndex((s) => s.shardPath === cursor?.CurrentShardPath);
        if (shardIndex === -1) {
          shardIndex = 0;
        }
      }
      return new Segment(shards, shardIndex, dateTime, manifestPath);
    });
  }
}
