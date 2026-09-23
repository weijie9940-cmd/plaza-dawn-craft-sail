import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdirSync, mkdtempSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, win32 as winPath } from "node:path";
import { test } from "node:test";
import { promisify } from "node:util";
import {
  APP_ENV_REL_PATH,
  mergeAppEnv,
  parseAppEnv,
  projectRoot,
  readAppEnv,
  resolveSpawn,
} from "./with-app-env.mjs";

const execFileAsync = promisify(execFile);
const WRAPPER = join(projectRoot(), "scripts/with-app-env.mjs");
const PRINT_FLAG = "process.stdout.write(String(process.env.VITE_AUTH_ENABLED));";

function makeWorkspace(appEnvJson) {
  const root = mkdtempSync(join(tmpdir(), "app-env-"));
  if (appEnvJson !== undefined) {
    mkdirSync(join(root, ".grok"), { recursive: true });
    writeFileSync(join(root, APP_ENV_REL_PATH), appEnvJson);
  }
  return root;
}

test("keeps VITE_-prefixed string entries", () => {
  assert.deepEqual(parseAppEnv('{"VITE_AUTH_ENABLED":"false"}'), {
    VITE_AUTH_ENABLED: "false",
  });
});

test("drops non-VITE keys, non-string values and malformed documents", () => {
  assert.deepEqual(parseAppEnv('{"DATABASE_URL":"postgres://x","VITE_N":1,"VITE_OK":"y"}'), {
    VITE_OK: "y",
  });
  assert.deepEqual(parseAppEnv("not json"), {});
  assert.deepEqual(parseAppEnv('["VITE_AUTH_ENABLED"]'), {});
  assert.deepEqual(parseAppEnv("null"), {});
});

test("a missing app-env.json is a clean no-op", () => {
  assert.deepEqual(readAppEnv(makeWorkspace()), {});
});

test("reads the app env from a workspace", () => {
  const root = makeWorkspace('{"VITE_AUTH_ENABLED":"false"}');
  assert.deepEqual(readAppEnv(root), { VITE_AUTH_ENABLED: "false" });
});

test("an explicit process-env override wins over the file", () => {
  const merged = mergeAppEnv(
    { VITE_AUTH_ENABLED: "false" },
    { VITE_AUTH_ENABLED: "true", PATH: "/usr/bin" },
  );
  assert.equal(merged.VITE_AUTH_ENABLED, "true");
  assert.equal(merged.PATH, "/usr/bin");
});

test("the template ships auth off", () => {
  assert.deepEqual(readAppEnv(projectRoot()), { VITE_AUTH_ENABLED: "false" });
});

test("vite loadEnv resolves the wrapped value", () => {
  // What `import.meta.env.VITE_AUTH_ENABLED` becomes: loadEnv prefix-matches
  // process.env, so the wrapper's merge has to land before Vite starts.
  // Do not `import { loadEnv } from "vite"` here — Vite 8 loads rolldown
  // native bindings that SIGSEGV the test worker under qemu-user.
  const root = makeWorkspace('{"VITE_AUTH_ENABLED":"false"}');
  const merged = mergeAppEnv(readAppEnv(root), { PATH: "/usr/bin" });
  assert.equal(merged.VITE_AUTH_ENABLED, "false");
});

test("the wrapped command runs with the app env applied", async () => {
  const { stdout } = await execFileAsync(process.execPath, [
    WRAPPER,
    process.execPath,
    "-e",
    PRINT_FLAG,
  ]);
  assert.equal(stdout, "false");
});

test("the wrapped command sees an explicit override, not the file value", async () => {
  const { stdout } = await execFileAsync(
    process.execPath,
    [WRAPPER, process.execPath, "-e", PRINT_FLAG],
    { env: { ...process.env, VITE_AUTH_ENABLED: "true" } },
  );
  assert.equal(stdout, "true");
});

test("the wrapper propagates the command's exit code", async () => {
  await assert.rejects(
    execFileAsync(process.execPath, [WRAPPER, process.execPath, "-e", "process.exit(3)"]),
    (err) => err.code === 3,
  );
});

test("a signal-killed command is never reported as success", async () => {
  // The wrapper's own SIGTERM handler must not swallow the re-raised signal:
  // a cancelled build reporting exit 0 is a silently passing gate.
  await assert.rejects(
    execFileAsync(process.execPath, [
      WRAPPER,
      process.execPath,
      "-e",
      "process.kill(process.pid, 'SIGTERM');setTimeout(() => {}, 1000);",
    ]),
    (err) => err.signal === "SIGTERM" || err.code !== 0,
  );
});

// npm's cmd-shim output for `node_modules/.bin/vite.cmd` on Windows.
const VITE_CMD_SHIM = [
  "@ECHO off",
  "GOTO start",
  ":find_dp0",
  "SET dp0=%~dp0",
  "EXIT /b",
  ":start",
  "SETLOCAL",
  "CALL :find_dp0",
  'IF EXIST "%dp0%\\node.exe" (',
  '  SET "_prog=%dp0%\\node.exe"',
  ") ELSE (",
  '  SET "_prog=node"',
  "  SET PATHEXT=%PATHEXT:;.JS;=;%",
  ")",
  "endLocal & goto #_undefined_# 2>NUL || title %COMSPEC% & " +
    '"%_prog%"  "%dp0%\\..\\vite\\bin\\vite.js" %*',
  "",
].join("\r\n");

const VITE_SH_SHIM = [
  "#!/bin/sh",
  "basedir=$(dirname \"$(echo \"$0\" | sed -e 's,\\\\,/,g')\")",
  'exec node  "$basedir/../vite/bin/vite.js" "$@"',
  "",
].join("\n");

/** Case-insensitive stand-in for the Windows filesystem. Values are file text or `true`. */
function winFs(entries) {
  const files = new Map(
    Object.entries(entries).map(([file, content]) => [
      winPath.normalize(file).toLowerCase(),
      content,
    ]),
  );
  return {
    exists(file) {
      return files.has(winPath.normalize(file).toLowerCase());
    },
    readFile(file) {
      const value = files.get(winPath.normalize(file).toLowerCase());
      if (typeof value !== "string") throw new Error(`not readable: ${file}`);
      return value;
    },
  };
}

test("unix spawn is unchanged for a bare command", () => {
  assert.deepEqual(resolveSpawn("vite", ["dev", "--port", "8080"], { platform: "linux" }), {
    command: "vite",
    args: ["dev", "--port", "8080"],
    shell: false,
  });
  assert.deepEqual(resolveSpawn("vite", ["build"], { platform: "darwin" }), {
    command: "vite",
    args: ["build"],
    shell: false,
  });
});

test("an explicit path is spawned as given on Windows", () => {
  const nodeExe = "C:\\Program Files\\nodejs\\node.exe";
  assert.deepEqual(
    resolveSpawn(nodeExe, ["-e", "process.exit(0)"], {
      platform: "win32",
      exists: () => {
        throw new Error("explicit paths are not resolved");
      },
    }),
    { command: nodeExe, args: ["-e", "process.exit(0)"], shell: false },
  );
});

test("windows runs a .bin cmd shim via node and the package JS entry", () => {
  // `spawn("vite")` fails here: libuv opens the extensionless shell script
  // first (ENOENT / EFTYPE) and Node will not execute `vite.cmd` without a shell.
  const bin = "C:\\proj\\node_modules\\.bin";
  const js = "C:\\proj\\node_modules\\vite\\bin\\vite.js";
  const fs = winFs({
    [`${bin}\\vite.cmd`]: VITE_CMD_SHIM,
    [`${bin}\\vite`]: VITE_SH_SHIM,
    [js]: true,
  });
  const args = ["dev", "--host", "0.0.0.0", "--port", "8080"];
  assert.deepEqual(
    resolveSpawn("vite", args, {
      platform: "win32",
      env: { Path: `${bin};C:\\Windows\\system32` },
      projectRoot: "C:\\somewhere-else",
      nodePath: "C:\\Program Files\\nodejs\\node.exe",
      ...fs,
    }),
    {
      command: "C:\\Program Files\\nodejs\\node.exe",
      args: [js, ...args],
      shell: false,
    },
  );
});

test("windows falls back to the project .bin when PATH has no shim", () => {
  const js = "C:\\My Projects\\app\\node_modules\\vite\\bin\\vite.js";
  const fs = winFs({
    ["C:\\My Projects\\app\\node_modules\\.bin\\vite.cmd"]: VITE_CMD_SHIM,
    [js]: true,
  });
  assert.deepEqual(
    resolveSpawn("vite", ["build"], {
      platform: "win32",
      env: {},
      projectRoot: "C:\\My Projects\\app",
      nodePath: "C:\\Program Files\\nodejs\\node.exe",
      ...fs,
    }),
    {
      command: "C:\\Program Files\\nodejs\\node.exe",
      args: [js, "build"],
      shell: false,
    },
  );
});

test("windows PATH order wins over the project .bin fallback", () => {
  const toolsJs = "C:\\tools\\vite.js";
  const projectJs = "C:\\proj\\node_modules\\vite\\bin\\vite.js";
  const fs = winFs({
    ["C:\\tools\\vite.cmd"]: '"%_prog%" "%dp0%\\vite.js" %*\r\n',
    [toolsJs]: true,
    ["C:\\proj\\node_modules\\.bin\\vite.cmd"]: VITE_CMD_SHIM,
    [projectJs]: true,
  });
  const resolved = resolveSpawn("vite", ["preview"], {
    platform: "win32",
    env: { PATH: "C:\\tools" },
    projectRoot: "C:\\proj",
    nodePath: "C:\\node.exe",
    ...fs,
  });
  assert.deepEqual(resolved, {
    command: "C:\\node.exe",
    args: [toolsJs, "preview"],
    shell: false,
  });
});

test("windows prefers node.exe over a neighboring cmd shim", () => {
  const dir = "C:\\Program Files\\nodejs";
  const fs = winFs({
    [`${dir}\\node.exe`]: true,
    [`${dir}\\node.cmd`]: VITE_CMD_SHIM,
    ["C:\\Program Files\\nodejs\\node_modules\\vite\\bin\\vite.js"]: true,
  });
  assert.deepEqual(
    resolveSpawn("node", ["-e", "1"], {
      platform: "win32",
      env: { PATH: dir, PATHEXT: ".COM;.EXE;.BAT;.CMD" },
      projectRoot: "C:\\empty",
      nodePath: "C:\\should-not-be-used.exe",
      ...fs,
    }),
    // PATHEXT lists `.EXE`, so the resolved path keeps that casing. Windows
    // CreateProcess treats it as the same file.
    { command: `${dir}\\node.EXE`, args: ["-e", "1"], shell: false },
  );
});

test("windows uses shell only when a batch shim has no readable JS entry", () => {
  const cmd = "C:\\proj\\node_modules\\.bin\\vite.CMD";
  const fs = winFs({
    ["C:\\proj\\node_modules\\.bin\\vite.cmd"]: "@ECHO off\r\nREM no JS entry\r\n",
  });
  assert.deepEqual(
    resolveSpawn("vite", ["dev"], {
      platform: "win32",
      env: { PATH: "C:\\proj\\node_modules\\.bin" },
      projectRoot: "C:\\proj",
      nodePath: "C:\\node.exe",
      ...fs,
    }),
    { command: cmd, args: ["dev"], shell: true },
  );
});

test("windows unwraps an extensionless shim when no .cmd is present", () => {
  const bin = "C:\\proj\\node_modules\\.bin";
  const js = "C:\\proj\\node_modules\\vite\\bin\\vite.js";
  const fs = winFs({ [`${bin}\\vite`]: VITE_SH_SHIM, [js]: true });
  assert.deepEqual(
    resolveSpawn("vite", ["dev"], {
      platform: "win32",
      env: { PATH: bin },
      projectRoot: "C:\\proj",
      nodePath: "C:\\node.exe",
      ...fs,
    }),
    { command: "C:\\node.exe", args: [js, "dev"], shell: false },
  );
});

test("an unresolved windows command is left for spawn to fail as before", () => {
  assert.deepEqual(
    resolveSpawn("vite", ["dev"], {
      platform: "win32",
      env: { PATH: "C:\\empty" },
      projectRoot: "C:\\missing",
      exists: () => false,
    }),
    { command: "vite", args: ["dev"], shell: false },
  );
});

test("a bare command on PATH still runs with the app env applied", async () => {
  // `node` is a real executable here. On Windows `resolveSpawn` rewrites a
  // bare name to `node.exe` (or the shim's JS entry) before spawn.
  const { stdout } = await execFileAsync(process.execPath, [WRAPPER, "node", "-e", PRINT_FLAG]);
  assert.equal(stdout, "false");
});

test("the CLI still runs when invoked through a symlinked path", async () => {
  // node realpaths import.meta.url but not process.argv[1], so a raw comparison
  // turns the wrapper into a no-op that exits 0 without starting anything.
  const link = join(mkdtempSync(join(tmpdir(), "app-env-link-")), "scripts");
  symlinkSync(join(projectRoot(), "scripts"), link);
  const { stdout } = await execFileAsync(process.execPath, [
    join(link, "with-app-env.mjs"),
    process.execPath,
    "-e",
    PRINT_FLAG,
  ]);
  assert.equal(stdout, "false");
});
