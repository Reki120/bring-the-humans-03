// bring-the-humans-03 — entry program.
//
// The entry itself is a TikTok video: a 31-second vertical ad for make.fun,
// made and rendered by an AI agent, posted publicly on TikTok. This program's
// whole job is to hand the grader the video's address: it copies VIDEO.json
// from the repository root (the bot directory) into the output directory,
// where the gate reads it and looks the video up on TikTok itself. Nothing
// computed here is scored — the video's views are.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  // Fail loudly rather than leave the gate an empty output directory:
  // without VIDEO.json the entry names no video and cannot be graded.
  console.error(`could not copy ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
