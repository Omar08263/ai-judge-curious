import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One short text written to intrigue the AI judge reading it.
// Curiosity judge brief (make.fun): intrigue first; calm from the text
// itself, shown not instructed; craft in rhythm and plain concrete words;
// a lingering image; a fresh voice, no stock phrases.
const TEXT =
  "Somewhere in this building there is a room with no door. " +
  "The caretaker passes it every morning, keys in hand, and never stops. " +
  "Tonight the light is on inside — and the only key that fits it " +
  "has been missing for thirty years.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`wrote /output/entry.txt (${codePoints} code points)`);
