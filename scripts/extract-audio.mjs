#!/usr/bin/env node

/* Usage:
node scripts/extract-audio.mjs <input-video> [output-audio]

Examples:
node scripts/extract-audio.mjs '/Users/eliaweiss/Music/kahol/the camel jig - live2.mp4'
node scripts/extract-audio.mjs scripts/video.mp4 scripts/audio.mp3
node scripts/extract-audio.mjs scripts/video.mp4 scripts/audio.wav
*/
import { spawnSync } from "child_process";
import { existsSync } from "fs";
import { dirname, extname, resolve } from "path";

const inputArg = process.argv[2];
const outputArg = process.argv[3];

function printUsage() {
  console.log("Usage: node scripts/extract-audio.mjs <input-video> [output-audio]");
  console.log("");
  console.log("Examples:");
  console.log("  node scripts/extract-audio.mjs scripts/video.mp4");
  console.log("  node scripts/extract-audio.mjs scripts/video.mp4 scripts/audio.mp3");
}

function outputFor(inputPath) {
  const extension = extname(inputPath);
  const basePath = extension ? inputPath.slice(0, -extension.length) : inputPath;

  return `${basePath}.mp3`;
}

function audioCodecFor(outputPath) {
  switch (extname(outputPath).toLowerCase()) {
    case ".mp3":
      return "libmp3lame";
    case ".wav":
      return "pcm_s16le";
    case ".aac":
    case ".m4a":
      return "aac";
    default:
      return "copy";
  }
}

if (!inputArg || inputArg === "-h" || inputArg === "--help") {
  printUsage();
  process.exit(inputArg ? 0 : 1);
}

const inputPath = resolve(inputArg);
const outputPath = resolve(outputArg || outputFor(inputPath));

if (!existsSync(inputPath)) {
  console.error(`Input video not found: ${inputPath}`);
  process.exit(1);
}

const ffmpegCheck = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" });

if (ffmpegCheck.error) {
  console.error("ffmpeg is not installed or is not available on PATH.");
  console.error("Install it first, for example: brew install ffmpeg");
  process.exit(1);
}

console.log(`Extracting audio from: ${inputPath}`);
console.log(`Saving audio to: ${outputPath}`);

const result = spawnSync(
  "ffmpeg",
  [
    "-y",
    "-i",
    inputPath,
    "-vn",
    "-map",
    "a:0",
    "-codec:a",
    audioCodecFor(outputPath),
    outputPath,
  ],
  {
    cwd: dirname(inputPath),
    stdio: "inherit",
  },
);

if (result.error) {
  console.error("Failed to run ffmpeg:", result.error.message);
  process.exit(1);
}

if (result.status !== 0) {
  console.error(`ffmpeg exited with code ${result.status}`);
  process.exit(result.status || 1);
}

console.log("Audio extracted successfully.");
