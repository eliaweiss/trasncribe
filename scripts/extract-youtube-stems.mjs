#!/usr/bin/env node

/* Usage:
node scripts/extract-youtube-stems.mjs <youtube-url> [options]

Downloads audio with extract-youtube-audio.mjs into:
  /Users/eliaweiss/Music/<song name>/<song name>.<format>

Then separates stems with demucs and moves them to:
  /Users/eliaweiss/Music/<song name>/stems

Options:
  -n, --name <name>       Song / folder name. Default: video title
  -f, --format <format>   Audio format (mp3, wav, m4a, ...). Default: mp3
  -m, --model <model>     Demucs model. Default: htdemucs_6s
      --music-dir <dir>   Music root folder. Default: /Users/eliaweiss/Music

Examples:
node scripts/extract-youtube-stems.mjs "https://youtu.be/ieDA7pXU-qE"
node scripts/extract-youtube-stems.mjs "https://youtu.be/MCJ5eH-efWw" -n "Ditado Popular"

Requires yt-dlp, ffmpeg, and demucs on PATH:
  brew install yt-dlp ffmpeg python
  pip install -U demucs
*/
import { spawnSync } from "child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
} from "fs";
import { fileURLToPath } from "url";
import { basename, dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEFAULT_MUSIC_DIR = "/Users/eliaweiss/Music";
const DEFAULT_MODEL = "htdemucs_6s";
const EXTRACT_SCRIPT = join(__dirname, "extract-youtube-audio.mjs");

function printUsage() {
  console.log("Usage: node scripts/extract-youtube-stems.mjs <youtube-url> [options]");
  console.log("");
  console.log("Options:");
  console.log("  -n, --name <name>       Song / folder name. Default: video title");
  console.log("  -f, --format <format>   Audio format (mp3, wav, m4a, ...). Default: mp3");
  console.log("  -m, --model <model>     Demucs model. Default: htdemucs_6s");
  console.log("      --music-dir <dir>   Music root folder. Default: /Users/eliaweiss/Music");
  console.log("");
  console.log("Examples:");
  console.log('  node scripts/extract-youtube-stems.mjs "https://youtu.be/MCJ5eH-efWw"');
  console.log('  node scripts/extract-youtube-stems.mjs "https://youtu.be/MCJ5eH-efWw" -n "Ditado Popular"');
}

function run(command, args, options = {}) {
  return spawnSync(command, args, {
    encoding: "utf8",
    ...options,
  });
}

function requireCommand(command, args, installHint) {
  const result = run(command, args, { stdio: "ignore" });

  if (result.error) {
    console.error(`${command} is not installed or is not available on PATH.`);
    console.error(installHint);
    process.exit(1);
  }
}

function sanitizeSongName(name) {
  const sanitized = String(name)
    .replace(/[<>:"/\\|?*]/g, "")
    .replace(/\s+/g, " ")
    .replace(/[. ]+$/g, "")
    .trim();

  return sanitized || "untitled";
}

function resolveDemucs() {
  const direct = run("demucs", ["--help"], { stdio: "ignore" });
  if (!direct.error) {
    return ["demucs"];
  }

  const viaPython = run("python3", ["-m", "demucs", "--help"], { stdio: "ignore" });
  if (!viaPython.error) {
    return ["python3", "-m", "demucs"];
  }

  return null;
}

function collectFiles(dir) {
  const files = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(path));
    } else {
      files.push(path);
    }
  }

  return files;
}

function moveStems(fromDir, toDir) {
  mkdirSync(toDir, { recursive: true });

  const files = collectFiles(fromDir);
  if (files.length === 0) {
    console.error(`❌ Demucs produced no stem files in: ${fromDir}`);
    process.exit(1);
  }

  for (const src of files) {
    const dest = join(toDir, basename(src));
    if (existsSync(dest)) {
      rmSync(dest, { force: true });
    }
    renameSync(src, dest);
    console.log(`  → ${dest}`);
  }
}

const args = process.argv.slice(2);
let youtubeUrl;
let audioFormat = "mp3";
let songName;
let model = DEFAULT_MODEL;
let musicDir = DEFAULT_MUSIC_DIR;

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];

  switch (arg) {
    case "-h":
    case "--help":
      printUsage();
      process.exit(0);
      break;
    case "-f":
    case "--format":
      audioFormat = args[++i];
      break;
    case "-n":
    case "--name":
      songName = args[++i];
      break;
    case "-m":
    case "--model":
      model = args[++i];
      break;
    case "--music-dir":
      musicDir = args[++i];
      break;
    default:
      if (!youtubeUrl && !arg.startsWith("-")) {
        youtubeUrl = arg;
      } else {
        console.error(`Unknown argument: ${arg}`);
        printUsage();
        process.exit(1);
      }
  }
}

if (!youtubeUrl) {
  printUsage();
  process.exit(1);
}

if (!audioFormat) {
  console.error("Missing value for --format");
  process.exit(1);
}

if (!model) {
  console.error("Missing value for --model");
  process.exit(1);
}

if (!musicDir) {
  console.error("Missing value for --music-dir");
  process.exit(1);
}

audioFormat = audioFormat.toLowerCase();

requireCommand("yt-dlp", ["--version"], "Install it first, for example: brew install yt-dlp");
requireCommand("ffmpeg", ["-version"], "Install it first, for example: brew install ffmpeg");

const demucsCmd = resolveDemucs();
if (!demucsCmd) {
  console.error("demucs is not installed or is not available on PATH.");
  console.error("Install it first, for example:");
  console.error("  brew install python ffmpeg");
  console.error("  pip install -U demucs");
  process.exit(1);
}

if (!songName) {
  console.log("🔎 Fetching video title...");
  const titleResult = run("yt-dlp", ["--print", "%(title)s", "--no-download", youtubeUrl]);

  if (titleResult.error || titleResult.status !== 0) {
    console.error("❌ Failed to fetch the video title with yt-dlp.");
    if (titleResult.stderr) {
      console.error(titleResult.stderr.trim());
    }
    process.exit(titleResult.status || 1);
  }

  songName = titleResult.stdout.trim();
}

songName = sanitizeSongName(songName);

const songDir = join(musicDir, songName);
const audioPath = join(songDir, `${songName}.${audioFormat}`);
const stemsDir = join(songDir, "stems");
const demucsOutDir = join(songDir, model);

console.log(`🎵 YouTube: ${youtubeUrl}`);
console.log(`📁 Song folder: ${songDir}`);
console.log(`🎚️  Audio: ${audioPath}`);
console.log(`🎛️  Demucs model: ${model}`);
console.log(`⏱️  Started at ${new Date().toISOString()}`);

if (!existsSync(songDir)) {
  console.log(`📂 Creating song folder: ${songDir}`);
  mkdirSync(songDir, { recursive: true });
}

console.log("\n—— Extracting audio ——");
const extractResult = run(
  process.execPath,
  [EXTRACT_SCRIPT, youtubeUrl, "-f", audioFormat, "-d", songDir, "-n", songName],
  { stdio: "inherit" },
);

if (extractResult.error) {
  console.error("\n❌ Failed to run extract-youtube-audio.mjs:", extractResult.error.message);
  process.exit(1);
}

if (extractResult.status !== 0) {
  console.error(`\n❌ extract-youtube-audio.mjs exited with code ${extractResult.status}`);
  process.exit(extractResult.status || 1);
}

if (!existsSync(audioPath) || !statSync(audioPath).isFile()) {
  console.error(`\n❌ Extracted audio not found: ${audioPath}`);
  process.exit(1);
}

if (existsSync(demucsOutDir)) {
  rmSync(demucsOutDir, { recursive: true, force: true });
}

console.log("\n—— Separating stems ——");
const demucsResult = run(
  demucsCmd[0],
  [...demucsCmd.slice(1), "-n", model, "-o", songDir, audioPath],
  { stdio: "inherit" },
);

if (demucsResult.error) {
  console.error("\n❌ Failed to run demucs:", demucsResult.error.message);
  process.exit(1);
}

if (demucsResult.status !== 0) {
  console.error(`\n❌ demucs exited with code ${demucsResult.status}`);
  process.exit(demucsResult.status || 1);
}

if (!existsSync(demucsOutDir)) {
  console.error(`\n❌ Demucs output folder not found: ${demucsOutDir}`);
  process.exit(1);
}

console.log(`\n📦 Moving stems to: ${stemsDir}`);
moveStems(demucsOutDir, stemsDir);
rmSync(demucsOutDir, { recursive: true, force: true });

console.log(`\n✅ Done`);
console.log(`🎵 Audio: ${audioPath}`);
console.log(`🎛️  Stems: ${stemsDir}`);
