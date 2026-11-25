// Writes a single-sentence nostalgic childhood memory to entry.txt in the output directory.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

const sentence: string =
  'The last summer my grandmother still knew my name, she stood at the kitchen window in the late light, humming off-key while the rice steamed, and I believed that smell would follow me home forever.';

writeFileSync(join(outputDir, 'entry.txt'), sentence, 'utf8');
