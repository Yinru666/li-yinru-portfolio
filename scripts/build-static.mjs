import { spawnSync } from "node:child_process";
import { join } from "node:path";

const nextBin = join(
  "node_modules",
  ".bin",
  process.platform === "win32" ? "next.cmd" : "next",
);

const result = spawnSync(`${nextBin} build`, {
  env: {
    ...process.env,
    NEXT_OUTPUT: "export",
  },
  shell: true,
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
