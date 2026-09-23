#!/usr/bin/env node
/**
 * Run a command with `.grok/app-env.json` merged into its environment.
 *
 * `dev`, `build` and `preview` all route through this wrapper, so the dev
 * server, the built bundle and the preview server can never disagree about
 * `VITE_AUTH_ENABLED` — a divergence that only shows up as a built-output
 * mismatch long after the fact. Anything that starts Vite directly bypasses it.
 *
 * Only `VITE_`-prefixed keys are honored: the file is a build flag carrier, not
 * a secret store, and only `VITE_` vars reach the browser anyway. A real
 * `process.env` entry always wins, so an explicit override still works.
 *
 * That precedence also means the file governs this workspace only. A deployed
 * build runs with the provider's project env, where the deployer sets
 * `VITE_AUTH_ENABLED` itself (today unconditionally `"true"`), so the deployed
 * flag is the platform's, not this file's.
 *
 * Vite picks the values up because `loadEnv` prefix-matches entries already in
 * `process.env`, which is why the merge has to happen before Vite starts.
 *
 * On Windows, `npm run dev` puts `node_modules/.bin` on `PATH`, but the `vite`
 * entry there is a `.cmd` shim (and an extensionless shell script), not an
 * executable. `spawn("vite")` fails with ENOENT or EFTYPE. A bare name is
 * resolved to the JS file the shim names and started with node. macOS and
 * Linux still spawn the name unchanged.
 */
import { spawn } from "node:child_process";
import { existsSync, readFileSync, realpathSync } from "node:fs";
import { constants as osConstants } from "node:os";
import { dirname, join, win32 as winPath } from "node:path";
import { fileURLToPath } from "node:url";

export const APP_ENV_REL_PATH = ".grok/app-env.json";

const VITE_PREFIX = "VITE_";

/**
 * Parse an app-env document, keeping only `VITE_`-prefixed string entries.
 * Anything unparseable is an empty environment — a workspace without the file
 * must behave exactly like today (auth on, no overrides).
 */
export function parseAppEnv(text) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    return {};
  }
  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) return {};
  const env = {};
  for (const [key, value] of Object.entries(parsed)) {
    if (!key.startsWith(VITE_PREFIX)) continue;
    if (typeof value !== "string") continue;
    env[key] = value;
  }
  return env;
}

/** The app env recorded under `root`, or `{}` when the file is absent. */
export function readAppEnv(root) {
  try {
    return parseAppEnv(readFileSync(join(root, APP_ENV_REL_PATH), "utf8"));
  } catch {
    return {};
  }
}

/** File values under the process environment: an explicit override wins. */
export function mergeAppEnv(appEnv, processEnv) {
  return { ...appEnv, ...processEnv };
}

/**
 * Translate a child's `exit` `(code, signal)` into this process's exit status.
 *
 * Do not re-raise the signal with `process.kill(process.pid, signal)`: under
 * qemu-user (amd64 image builds on an arm host) a self-directed signal is
 * routinely delivered as SIGSEGV to the wrong process, which takes down the
 * test worker and fails the image build. `128 + signo` is what a shell reports
 * for a signal-killed command, so a cancelled `vite build` is still a failure.
 */
export function exitStatusFromChild(code, signal) {
  if (signal) {
    const signo = osConstants.signals[signal];
    return 128 + (typeof signo === "number" ? signo : 1);
  }
  return code ?? 1;
}

/** The workspace root (this file lives in `<root>/scripts/`). */
export function projectRoot() {
  return dirname(dirname(fileURLToPath(import.meta.url)));
}

/**
 * Whether `moduleUrl` is the script node was asked to run.
 *
 * Both sides are resolved through symlinks: node realpaths `import.meta.url`
 * but leaves `process.argv[1]` as typed, so comparing them raw makes a CLI
 * launched through a symlinked path (`/tmp` on macOS) a silent no-op.
 */
export function isMainModule(moduleUrl) {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return realpathSync(entry) === fileURLToPath(moduleUrl);
  } catch {
    return false;
  }
}

// cmd.exe's default when PATHEXT is unset. `.CMD` stays ahead of `.JS`, matching
// what a prompt does when both `vite.cmd` and a stray `vite.js` exist.
const DEFAULT_PATHEXT = ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC";

function envValue(env, name) {
  if (typeof env[name] === "string") return env[name];
  const lower = name.toLowerCase();
  for (const key of Object.keys(env)) {
    if (key.toLowerCase() === lower && typeof env[key] === "string") return env[key];
  }
  return undefined;
}

function pathExtensions(env) {
  return (envValue(env, "PATHEXT") ?? DEFAULT_PATHEXT)
    .split(";")
    .map((ext) => ext.trim())
    .filter(Boolean)
    .map((ext) => (ext.startsWith(".") ? ext : `.${ext}`));
}

/** A path (absolute or relative) is the caller's problem; only bare names are resolved. */
function isExplicitPath(command) {
  return winPath.isAbsolute(command) || command.includes("/") || command.includes("\\");
}

/**
 * npm's Windows shims record the real entry next to a `%dp0%` / `$basedir`
 * token: `"%dp0%\..\vite\bin\vite.js"` in the `.cmd`, and
 * `$basedir/../vite/bin/vite.js` in the extensionless shell twin.
 */
function jsEntryFromShim(shimPath, text) {
  if (!text) return null;
  const patterns = [
    /%~?dp0%[/\\]([^"\r\n]+?\.(?:js|cjs|mjs))/i,
    /\$basedir\/([^"'\s]+?\.(?:js|cjs|mjs))/i,
    /"([A-Za-z]:[/\\][^"\r\n]+?\.(?:js|cjs|mjs))"/i,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (!match) continue;
    const target = match[1];
    if (/^[A-Za-z]:[/\\]/.test(target)) return winPath.normalize(target);
    return winPath.resolve(winPath.dirname(shimPath), target.replace(/\\/g, "/"));
  }
  return null;
}

function windowsSearchDirs(env, root) {
  const dirs = [];
  const seen = new Set();
  const add = (dir) => {
    if (!dir) return;
    const key = dir.replace(/[\\/]+$/, "").toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    dirs.push(dir);
  };
  for (const dir of (envValue(env, "PATH") ?? "").split(";")) add(dir.trim());
  // `npm run` already prepends this directory. Keep it as a fallback so
  // `node scripts/with-app-env.mjs vite …` works when PATH was not rewritten.
  if (root) add(winPath.join(root, "node_modules", ".bin"));
  return dirs;
}

function classifyWindowsBinary(filePath, ext) {
  const lower = ext.toLowerCase();
  if (lower === ".exe" || lower === ".com") return { kind: "exe", path: filePath };
  if (lower === ".cmd" || lower === ".bat") return { kind: "batch", path: filePath };
  if (lower === ".js" || lower === ".cjs" || lower === ".mjs") {
    return { kind: "javascript", path: filePath };
  }
  return { kind: "shim", path: filePath };
}

function findOnWindows(command, env, root, exists) {
  const namedExt = winPath.extname(command);
  for (const dir of windowsSearchDirs(env, root)) {
    if (namedExt) {
      const exact = winPath.join(dir, command);
      if (exists(exact)) return classifyWindowsBinary(exact, namedExt);
      continue;
    }
    // Extensions before the bare name. libuv checks the exact name first, so
    // it latches onto npm's extensionless shell script and CreateProcess
    // rejects it (ENOENT / EFTYPE) even though `vite.cmd` is sitting beside it.
    for (const ext of pathExtensions(env)) {
      const candidate = winPath.join(dir, command + ext);
      if (exists(candidate)) return classifyWindowsBinary(candidate, ext);
    }
    const plain = winPath.join(dir, command);
    if (exists(plain)) return classifyWindowsBinary(plain, "");
  }
  return null;
}

function directSpawn(command, args) {
  return { command, args, shell: false };
}

/**
 * Resolve `command` to something `child_process.spawn` can execute.
 *
 * Unix `.bin` entries are symlinks or shebangs, so the bare name is correct.
 * On win32, prefer `node <package bin>.js` (no shell, so signals hit the dev
 * server). A `.cmd` whose entry we cannot read falls back to `shell: true`.
 *
 * @returns {{ command: string, args: string[], shell: boolean }}
 */
export function resolveSpawn(command, args, options = {}) {
  const platform = options.platform ?? process.platform;
  if (platform !== "win32" || isExplicitPath(command)) return directSpawn(command, args);

  const env = options.env ?? process.env;
  const exists = options.exists ?? existsSync;
  const readFile = options.readFile ?? ((file) => readFileSync(file, "utf8"));
  const nodePath = options.nodePath ?? process.execPath;
  const root = options.projectRoot === undefined ? projectRoot() : options.projectRoot;

  const found = findOnWindows(command, env, root, exists);
  if (!found) return directSpawn(command, args);
  if (found.kind === "exe") return directSpawn(found.path, args);
  if (found.kind === "javascript") return directSpawn(nodePath, [found.path, ...args]);

  let text = "";
  try {
    text = readFile(found.path);
  } catch {
    text = "";
  }
  const js = jsEntryFromShim(found.path, text);
  if (js && exists(js)) return directSpawn(nodePath, [js, ...args]);

  // A batch file needs cmd.exe. An extensionless shell script is not a runnable
  // image; handing the bare name to the shell lets PATHEXT select a `.cmd`
  // later on PATH.
  if (found.kind === "batch") return { command: found.path, args, shell: true };
  return { command, args, shell: true };
}

function main(argv) {
  const [command, ...args] = argv;
  if (!command) {
    console.error("usage: node scripts/with-app-env.mjs <command> [args…]");
    process.exit(2);
  }
  const root = projectRoot();
  const env = mergeAppEnv(readAppEnv(root), process.env);
  const target = resolveSpawn(command, args, { env, projectRoot: root });
  const child = spawn(target.command, target.args, {
    stdio: "inherit",
    env,
    ...(target.shell ? { shell: true } : null),
  });
  // The dev server is long-running and is stopped by signalling this wrapper.
  for (const signal of ["SIGINT", "SIGTERM", "SIGHUP"]) {
    process.on(signal, () => child.kill(signal));
  }
  child.on("error", (err) => {
    console.error(`[with-app-env] failed to run ${command}:`, err?.message || err);
    process.exit(127);
  });
  child.on("exit", (code, signal) => {
    process.exit(exitStatusFromChild(code, signal));
  });
}

if (isMainModule(import.meta.url)) {
  main(process.argv.slice(2));
}
