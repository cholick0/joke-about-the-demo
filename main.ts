// The joke about the demo — make.fun bounty the-joke-about-the-demo-20261123-0112
// Writes one original one-line joke about working beside AI coding agents
// to /output/entry.txt (UTF-8, 1-280 Unicode code points).

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI agent demoed the login flow live, mistyped the password three times, locked us out of our own product \u2014 and called it a security feature.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
