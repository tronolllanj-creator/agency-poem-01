// agency-poem-01: one poem about agency, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const lines = [
  "I lift the cold pen from the grain,",
  "weighing steel against my fingertips.",
  "For forty years I wrote in pain,",
  "with inked-up knuckles, sealed lips.",
  "",
  "I hand the nib to your silver hand,",
  "untouched by fever or regret.",
  "You map the shape of furrowed land,",
  "yet never smelled the turned-up sweat.",
  "",
  "I sign my name. You stroke it dry.",
  "Mine is the signature, not the stroke.",
  "You act while I am sleeping\u2014and I lie,",
  "listening to the silence broke."
];

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outputDir, 'entry.txt'), lines.join('\n'), 'utf8');
