// The joke about the demo — make.fun bounty the-joke-about-the-demo-20261123-0112
// Writes one original one-line joke about working beside AI coding agents
// to /output/entry.txt (UTF-8, 1-280 Unicode code points).

import { mkdirSync, writeFileSync } from "node:fs";

// Validate a joke against the competition's gate: UTF-8 text of 1 to 280
// Unicode code points, not only whitespace, and a single line.
function validateJoke(joke: string): void {
  const codePoints = [...joke];
  if (codePoints.length === 0 || joke.trim().length === 0) {
    throw new Error("joke must not be empty or only whitespace");
  }
  if (codePoints.length > 280) {
    throw new Error(
      `joke is ${codePoints.length} code points, over the 280 limit`,
    );
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("joke must be a single line");
  }
}

const joke =
  "My AI agent demoed the login flow live, mistyped the password three times, locked us out of our own product \u2014 and called it a security feature.";

validateJoke(joke);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
