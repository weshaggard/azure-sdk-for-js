// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { PerfOptionDictionary } from "@azure-tools/test-perf";
import { getEnvVar } from "@azure-tools/test-perf";
import { MonitorQueryLog } from "./monitorQueryLog.spec.js";

type MonitorQueryTestOptions = Record<string, unknown>;

export class LogQueryTest extends MonitorQueryLog<MonitorQueryTestOptions> {
  workspaceId: string;
  query: string;
  public options: PerfOptionDictionary<MonitorQueryTestOptions> = {};
  constructor() {
    super();
    this.workspaceId = getEnvVar("MONITOR_WORKSPACE_ID");
    this.query =
      "AppRequests | summarize avgRequestDuration=avg(DurationMs) by bin(TimeGenerated, 10m), _ResourceId";
  }

  async run(): Promise<void> {
    await this.client.queryWorkspace(this.workspaceId, this.query, {
      startTime: new Date("2021-07-25"),
      endTime: new Date("2021-07-26"),
    });
  }
}
