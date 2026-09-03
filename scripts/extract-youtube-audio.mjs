#!/usr/bin/env node

/* Usage:
node scripts/extract-youtube-audio.mjs <youtube-url> [options]

Options:
  -f, --format <format>   Audio format (mp3, wav, m4a, ...). Default: mp3
  -d, --dir <folder>      Output folder. Default: the scripts/ directory
  -n, --name <name>       Output file name without extension. Default: video title

Examples:
node scripts/extract-youtube-audio.mjs "https://youtu.be/fhNrqc6yvTU?si=KTDZ6B12JMGAMXgF"
node scripts/extract-youtube-audio.mjs "https://www.youtube.com/watch?v=ZeIMPqIrZMc" -f wav
node scripts/extract-youtube-audio.mjs "https://youtu.be/6T6RaSWQbo8?si=hE1up7_ATx4Vw9Ml" -d '/Users/eliaweiss/Music/esev bar' -n my-song
node scripts/extract-youtube-audio.mjs "https://youtu.be/crruMnUlGcY?si=uwcNrinpRRmb1_F3" -d '/Users/eliaweiss/Music/Tom Jobim' 

Requires yt-dlp and ffmpeg on PATH:
  brew install yt-dlp ffmpeg
*/
import { spawnSync } from "child_process";
import { existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, isAbsolute, join, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function printUsage() {
  console.log("Usage: node scripts/extract-youtube-audio.mjs <youtube-url> [options]");
  console.log("");
  console.log("Options:");
  console.log("  -f, --format <format>   Audio format (mp3, wav, m4a, ...). Default: mp3");
  console.log("  -d, --dir <folder>      Output folder. Default: the scripts/ directory");
  console.log("  -n, --name <name>       Output file name without extension. Default: video title");
  console.log("");
  console.log("Examples:");
  console.log('  node scripts/extract-youtube-audio.mjs "https://youtu.be/JmwOvFtOv9c"');
  console.log('  node scripts/extract-youtube-audio.mjs "https://youtu.be/JmwOvFtOv9c" -f wav -d ~/Music -n my-song');
}

const args = process.argv.slice(2);
let youtubeUrl;
let audioFormat = "mp3";
let outputDir;
let outputName;

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
    case "-d":
    case "--dir":
      outputDir = args[++i];
      break;
    case "-n":
    case "--name":
      outputName = args[++i];
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

audioFormat = audioFormat.toLowerCase();

const ytDlpCheck = spawnSync("yt-dlp", ["--version"], { stdio: "ignore" });

if (ytDlpCheck.error) {
  console.error("yt-dlp is not installed or is not available on PATH.");
  console.error("Install it first, for example: brew install yt-dlp");
  process.exit(1);
}

const ffmpegCheck = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" });

if (ffmpegCheck.error) {
  console.error("ffmpeg is not installed or is not available on PATH.");
  console.error("Install it first, for example: brew install ffmpeg");
  process.exit(1);
}

const baseDir = outputDir
  ? isAbsolute(outputDir)
    ? outputDir
    : resolve(process.cwd(), outputDir)
  : __dirname;
const baseName = outputName || "%(title)s";
const outputTemplate = join(baseDir, `${baseName}.%(ext)s`);

if (!existsSync(baseDir)) {
  console.log(`📂 Output folder does not exist, creating: ${baseDir}`);
  mkdirSync(baseDir, { recursive: true });
}

console.log(`🎵 Extracting audio from YouTube video: ${youtubeUrl}`);
console.log(`🎚️  Audio format: ${audioFormat}`);
console.log(`📁 Output folder: ${baseDir}`);
console.log(`📝 Output name: ${outputName || "video title"}.${audioFormat}`);
console.log(`⏱️  Started at ${new Date().toISOString()}`);

const result = spawnSync(
  "yt-dlp",
  [
    "-x",
    "--audio-format",
    audioFormat,
    "--audio-quality",
    "0",
    "-o",
    outputTemplate,
    youtubeUrl,
  ],
  {
    cwd: baseDir,
    stdio: "inherit",
  },
);

if (result.error) {
  console.error("\n❌ Failed to run yt-dlp:", result.error.message);
  process.exit(1);
}

if (result.status !== 0) {
  console.error(`\n❌ yt-dlp exited with code ${result.status}`);
  process.exit(result.status || 1);
}

console.log(`\n✅ Audio extracted successfully!`);
console.log(`📁 File saved in: ${baseDir}`);
