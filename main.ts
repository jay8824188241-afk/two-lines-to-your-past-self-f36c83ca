// Two Lines to Your Past Self — make.fun bounty entry.
//
// Writes exactly two lines to /output/entry.txt:
//   line 1 — a warning to the writer's past self about one specific
//            moment, in a single sentence;
//   line 2 — one sentence on why that moment mattered and what
//            changed because of it.
// Node standard library only; no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "When Dad calls from the hospital on that Tuesday night, answer on the first ring instead of letting it roll to voicemail.";
const LINE_2 =
  "Those four minutes were the last time you heard his voice, and answering is the one thing from that week you never wished you could undo.";

const text = LINE_1 + "\n" + LINE_2;

if (text.length < 1 || text.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`Wrote /output/entry.txt (${text.length} characters, 2 lines)`);
