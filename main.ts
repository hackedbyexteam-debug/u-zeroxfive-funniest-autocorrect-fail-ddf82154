// Funniest Autocorrect Fail — one line, under 200 characters.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output).
// Deterministic: no input, no network.
//
// The fail: "lingerie" autocorrected to "linguine" in a flirty text.
// Intended word vs. sent word is obvious on first read — she meant
// lingerie, the phone sent linguine — and the last clause ("I'll be
// wearing it when you get home") lands the joke: she is, apparently,
// wearing pasta tonight. It reads as a real sent message, not a
// written joke, and the wrong word is specific and original, not a
// generic typo or the overused "ducking" gag.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `Babe, can't wait for tonight — I just bought sexy new linguine and I'll be wearing it when you get home.`;

const MAX_CHARS = 199; // gate: entry.txt must be 1–199 chars ("under 200")
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, outside the 1–${MAX_CHARS} range`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${ENTRY.length} chars)`);
