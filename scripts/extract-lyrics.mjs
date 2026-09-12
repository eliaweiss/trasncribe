#!/usr/bin/env node

/* Usage:
node scripts/extract-lyrics.mjs <vocals.wav|stems-folder> [options]

Sends a vocal stem to Gemini (via Vercel AI Gateway) and writes lyrics.txt
in the same folder as the audio file.

Options:
  -o, --out <file>     Output path. Default: <audio-dir>/lyrics.txt
  -m, --model <model>  Model id. Default: MODEL from .env

Examples:
node scripts/extract-lyrics.mjs '/Users/eliaweiss/Music/Ditado Popular/stems/vocals.wav'
node scripts/extract-lyrics.mjs '/Users/eliaweiss/Music/Ditado Popular/stems'

Requires ffmpeg on PATH (brew install ffmpeg) and AI_GATEWAY_API_KEY in .env.
*/
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { spawnSync } from "child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { basename, dirname, extname, isAbsolute, join, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = resolve(__dirname, "..");
const DEFAULT_MODEL = "google/gemini-3.8-flash";
const VOCAL_NAMES = ["vocals.wav", "vocals.mp3", "vocals.m4a", "vocals.flac"];

const MEDIA_TYPES = {
  ".wav": "audio/wav",
  ".mp3": "audio/mpeg",
  ".mpeg": "audio/mpeg",
  ".m4a": "audio/mp4",
  ".aac": "audio/aac",
  ".flac": "audio/flac",
  ".ogg": "audio/ogg",
  ".opus": "audio/opus",
};

function printUsage() {
  console.log("Usage: node scripts/extract-lyrics.mjs <vocals.wav|stems-folder> [options]");
  console.log("");
  console.log("Options:");
  console.log("  -o, --out <file>     Output path. Default: <audio-dir>/lyrics.txt");
  console.log("  -m, --model <model>  Model id. Default: MODEL from .env");
  console.log("");
  console.log("Examples:");
  console.log("  node scripts/extract-lyrics.mjs '/Users/eliaweiss/Music/Ditado Popular/stems/vocals.wav'");
  console.log("  node scripts/extract-lyrics.mjs '/Users/eliaweiss/Music/Ditado Popular/stems'");
}

function loadEnvFile(path) {
  if (!existsSync(path)) {
    return;
  }

  process.loadEnvFile(path);
}

function resolveVocalPath(input) {
  const path = isAbsolute(input) ? input : resolve(process.cwd(), input);

  if (!existsSync(path)) {
    console.error(`File not found: ${path}`);
    process.exit(1);
  }

  if (statSync(path).isFile()) {
    return path;
  }

  for (const name of VOCAL_NAMES) {
    const candidate = join(path, name);
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return candidate;
    }
  }

  console.error(`No vocals file found in: ${path}`);
  console.error(`Looked for: ${VOCAL_NAMES.join(", ")}`);
  process.exit(1);
}

function resolveModel(modelId) {
  const configured = modelId || DEFAULT_MODEL;

  // Route provider/model strings through Vercel AI Gateway when the key is set.
  if (process.env.AI_GATEWAY_API_KEY) {
    return configured.includes("/") ? configured : `google/${configured}`;
  }

  return google(configured.replace(/^google\//, ""));
}

function mediaTypeFor(path) {
  return MEDIA_TYPES[extname(path).toLowerCase()] || "application/octet-stream";
}

function compressAudio(inputPath) {
  const ffmpegCheck = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" });
  if (ffmpegCheck.error) {
    console.error("ffmpeg is not installed or is not available on PATH.");
    console.error("Install it first, for example: brew install ffmpeg");
    process.exit(1);
  }

  const tempDir = mkdtempSync(join(tmpdir(), "extract-lyrics-"));
  const outputPath = join(tempDir, `${basename(inputPath, extname(inputPath))}.mp3`);

  console.log("🎚️  Compressing vocal stem for Gemini...");
  const result = spawnSync(
    "ffmpeg",
    ["-y", "-i", inputPath, "-ac", "1", "-ar", "22050", "-b:a", "80k", outputPath],
    { stdio: "inherit" },
  );

  if (result.error || result.status !== 0) {
    rmSync(tempDir, { recursive: true, force: true });
    console.error("❌ Failed to compress audio with ffmpeg.");
    process.exit(result.status || 1);
  }

  return {
    path: outputPath,
    mediaType: "audio/mpeg",
    cleanup() {
      rmSync(tempDir, { recursive: true, force: true });
    },
  };
}

function prepareAudio(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  const size = statSync(inputPath).size;
  const compact = ext === ".mp3" || ext === ".m4a" || ext === ".mpeg";

  if (compact && size <= 12 * 1024 * 1024) {
    return {
      path: inputPath,
      mediaType: mediaTypeFor(inputPath),
      cleanup() {},
    };
  }

  return compressAudio(inputPath);
}

loadEnvFile(join(ROOT_DIR, ".env"));

const args = process.argv.slice(2);
let vocalInput;
let outputPath;
let modelId = process.env.MODEL || DEFAULT_MODEL;

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];

  switch (arg) {
    case "-h":
    case "--help":
      printUsage();
      process.exit(0);
      break;
    case "-o":
    case "--out":
      outputPath = args[++i];
      break;
    case "-m":
    case "--model":
      modelId = args[++i];
      break;
    default:
      if (!vocalInput && !arg.startsWith("-")) {
        vocalInput = arg;
      } else {
        console.error(`Unknown argument: ${arg}`);
        printUsage();
        process.exit(1);
      }
  }
}

if (!vocalInput) {
  printUsage();
  process.exit(1);
}

if (!process.env.AI_GATEWAY_API_KEY && !process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  console.error("Missing AI_GATEWAY_API_KEY (or GOOGLE_GENERATIVE_AI_API_KEY) in .env");
  process.exit(1);
}

const vocalPath = resolveVocalPath(vocalInput);
const lyricsPath = outputPath
  ? isAbsolute(outputPath)
    ? outputPath
    : resolve(process.cwd(), outputPath)
  : join(dirname(vocalPath), "lyrics.txt");

const audio = prepareAudio(vocalPath);

console.log(`🎤 Vocal stem: ${vocalPath}`);
console.log(`🧠 Model: ${modelId}`);
console.log(`📝 Output: ${lyricsPath}`);
console.log(`⏱️  Started at ${new Date().toISOString()}`);

try {
  const audioData = readFileSync(audio.path);

  console.log("\n—— Extracting lyrics ——");
  const { text, sources } = await generateText({
    model: resolveModel(modelId),
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: [
              "Transcribe the sung lyrics from this vocal stem.",
              "Output only the lyrics, with no commentary, title, or explanation.",
              "Keep the original language.",
              "Use blank lines between verses or sections.",
              "You may label clear sections like [Verse], [Chorus], or [Bridge].",
              "Mark unintelligible words as [?].",
              "If there are no sung words, output exactly: [Instrumental]",
            ].join(" "),
          },
          {
            type: "file",
            data: audioData,
            mediaType: audio.mediaType,
          },
        ],
      },
    ],
  });

  const lyrics = String(text || "").trim();
  if (!lyrics) {
    console.error("❌ Gemini returned empty lyrics.");
    if (sources) {
      console.error(sources);
    }
    process.exit(1);
  }

  writeFileSync(lyricsPath, `${lyrics}\n`, "utf8");
  console.log(`\n✅ Lyrics saved to: ${lyricsPath}`);
} catch (error) {
  console.error("\n❌ Failed to extract lyrics:", error instanceof Error ? error.message : error);
  process.exit(1);
} finally {
  audio.cleanup();
}
