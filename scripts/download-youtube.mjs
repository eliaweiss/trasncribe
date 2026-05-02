#!/usr/bin/env node

/* Usage: node scripts/download-youtube.mjs <youtube-url>
// Example: 
node scripts/download-youtube.mjs "https://youtu.be/N2RNe2jwHE0?si=vxJjiTDdZCGGNu2_"
transcript
yt-dlp --write-auto-subs --skip-download "https://www.youtube.com/watch?v=h3ReF6WkYY8"
*/
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const youtubeUrl = process.argv[2] || "https://www.youtube.com/watch?v=ZeIMPqIrZMc&t=239s";

console.log(`📥 Downloading YouTube video: ${youtubeUrl}`);
console.log(`⏱️  Started at ${new Date().toISOString()}`);

try {
  // Extract video ID for filename
  const videoIdMatch = youtubeUrl.match(/[?&]v=([^&]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : "video";
  
  const outputPath = join(__dirname, `${videoId}.%(ext)s`);

  // Download with best quality video and audio
  const command = `yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" -o "${outputPath}" "${youtubeUrl}"`;

  console.log(`\n🔧 Running: ${command}\n`);
  
  execSync(command, { 
    stdio: "inherit",
    cwd: __dirname 
  });

  console.log(`\n✅ Download completed successfully!`);
  console.log(`📁 File saved in: ${__dirname}`);
} catch (error) {
  console.error(`\n❌ Error downloading video:`, error.message);
  process.exit(1);
}