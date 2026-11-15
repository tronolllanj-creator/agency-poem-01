// agency-poem-01 round 2: one better poem about agency, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const lines = [
  "The master mason sits upon the stone,",
  "And leaves the chisel to the younger hand.",
  "He traces out the temple, all alone,",
  "Yet lets another strike the iron band.",
  "",
  "He guides the heavy mallet with his eye,",
  "And feels the granite shudder through the grain.",
  "He watches every silver splinter fly,",
  "Yet spares his aging palm the bruising strain.",
  "",
  "To act by proxy is to multiply",
  "The singular design across the dust:",
  "The master gives the vision to the sky,",
  "The servant yields the muscle to the trust.",
  "",
  "At last the porch arises from the clay,",
  "Built by a hand that took the master's way."
];

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outputDir, 'entry.txt'), lines.join('\n'), 'utf8');
