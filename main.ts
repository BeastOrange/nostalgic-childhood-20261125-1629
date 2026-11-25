// Writes a single-sentence nostalgic childhood memory to entry.txt in the output directory.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function validateSentence(text: string): void {
  if (!text || text.trim().length === 0) {
    throw new Error('Validation error: sentence must be non-blank.');
  }
  if (text.length > 280) {
    throw new Error(
      `Validation error: sentence must be at most 280 characters (got ${text.length}).`
    );
  }
  if (!text.endsWith('.')) {
    throw new Error('Validation error: sentence must end with a terminal period.');
  }
  const periodCount: number = (text.match(/\./g) || []).length;
  if (periodCount !== 1) {
    throw new Error(
      `Validation error: sentence must contain exactly one terminal period and no other sentence-ending periods inside (found ${periodCount}).`
    );
  }
}

const sentence: string =
  'The last summer my grandmother still knew my name, she stood at the kitchen window in the late light, humming off-key while the rice steamed, and I believed that smell would follow me home forever.';

validateSentence(sentence);

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

writeFileSync(join(outputDir, 'entry.txt'), sentence, 'utf8');

