// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { describe, it, assert, beforeAll } from "vitest";
import { parseOptions } from "../src/framework/parseOptions";
import { makeCommandInfo, subCommand, leafCommand } from "../src/framework/command";
import { silenceLogger } from "./util";

const simpleCommandInfo = makeCommandInfo("simple", "a simple command", {
  simpleArg: {
    kind: "string",
    description: "a simple argument",
    allowMultiple: false,
    default: "foo",
  },
});

interface SimpleExpectedOptionsType {
  simpleArg: string;
  help?: boolean;
  args?: string[];
}

describe("Command Framework", () => {
  beforeAll(silenceLogger);

  describe("subCommand", () => {
    it("simple dispatcher", async () => {
      const dispatcher = subCommand(
        { name: "test", description: "a sub-command dispatcher" },
        {
          sub: () =>
            new Promise((resolve) => {
              resolve({
                commandInfo: { name: "sub", description: "a leaf command" },
                default: leafCommand(
                  { name: "sub", description: "a leaf command" },
                  () =>
                    new Promise((resolve) => {
                      resolve(true);
                    }),
                ),
              });
            }),
          fail: () =>
            new Promise((resolve) => {
              resolve({
                commandInfo: { name: "fail", description: "a command that fails" },
                default: leafCommand(
                  { name: "fail", description: "a command that fails" },
                  () =>
                    new Promise((resolve) => {
                      resolve(false);
                    }),
                ),
              });
            }),
        },
      );

      assert.isTrue(await dispatcher("sub"));
      assert.isFalse(await dispatcher("fail"));
    });
  });

  describe("leafCommand", () => {
    it("simple leaf command with argument", async () => {
      const command = leafCommand(simpleCommandInfo, (opts: SimpleExpectedOptionsType) => {
        if (opts.simpleArg === "yes") {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });

      assert.isTrue(await command("--simpleArg", "yes"));
      assert.isFalse(await command("--simpleArg", "no"));
    });
  });

  describe("parseOptions", () => {
    it("simple", () => {
      const opts: SimpleExpectedOptionsType = parseOptions(
        ["--simpleArg", "test"],
        simpleCommandInfo.options,
      );
      assert.equal(opts.simpleArg, "test");
    });

    it("nested", async () => {
      const nestedOptions = {
        name: "nested",
        description: "",
        options: { internal: { kind: "boolean", description: "" } },
      } as const;
      const command = subCommand(
        { name: "top-level", description: "" },
        {
          nested: () =>
            Promise.resolve({
              default: leafCommand(nestedOptions, (options) => {
                assert.deepStrictEqual(options["--"], ["test1", "test2"]);
                return Promise.resolve(true);
              }),
              commandInfo: nestedOptions,
            }),
        },
      );

      assert.isTrue(await command("nested", "--internal", "--", "test1", "test2"));
    });
  });
});
