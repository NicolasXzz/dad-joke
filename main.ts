import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
// One dad joke on one line: the pun (grate/great) lands in the final words.
const JOKE =
  "My daughter said my jokes are cheesy. I told her that's grate — I was aiming for sharp cheddar.";
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, JOKE, "utf8");

// Read back and confirm the entry is one joke, within the 200-char gate.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== JOKE || written.length > 200 || written.trim().length === 0) {
  throw new Error("entry.txt verification failed");
}
