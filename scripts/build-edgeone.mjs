#!/usr/bin/env node
/**
 * Static build for Tencent EdgeOne Pages.
 * Sets DEPLOY_TARGET so Vite prerenders an SPA shell and skips Nitro.
 * Does not run database migrations.
 */
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

function writeStaticManifest() {
  const dir = join(root, "dist/client/__grok");
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "manifest.webmanifest"),
    `${JSON.stringify(
      {
        name: "ORBITAL · CS 电竞版图",
        short_name: "ORBITAL",
        id: "/",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#05070c",
        theme_color: "#05070c",
        icons: [{ src: "/__grok/icon-180.png", sizes: "180x180", type: "image/png" }],
      },
      null,
      2,
    )}\n`,
  );
}

const child = spawn(process.execPath, [join(root, "scripts/with-app-env.mjs"), "vite", "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, DEPLOY_TARGET: "edgeone" },
});

child.on("error", (err) => {
  console.error("[build:edgeone] failed to start vite:", err?.message || err);
  process.exit(127);
});

child.on("exit", (code, signal) => {
  if (signal || code) {
    process.exit(code ?? 1);
  }
  writeStaticManifest();
  process.exit(0);
});
