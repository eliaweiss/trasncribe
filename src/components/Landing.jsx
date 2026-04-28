import React from "react";

export default function Landing({ onChooseAudio, onLoadYouTube }) {
  const requestYouTubeLink = () => {
    const url = window.prompt("Paste a YouTube URL");
    if (url) onLoadYouTube(url);
  };

  return (
    <main id="landing" aria-label="Start screen">
      <section className="landing-shell">
        <div className="landing-hero">
          <div className="landing-wave" aria-hidden="true">
            <svg viewBox="0 0 64 36" role="img">
              <defs>
                <linearGradient id="landingWaveformLogoGradient" x1="0" x2="64" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8b5cff" />
                  <stop offset="100%" stopColor="#23d6ff" />
                </linearGradient>
              </defs>
              <path d="M2 20h7l5-15 8 30 8-24 7 18 6-9h19" />
            </svg>
          </div>

          <h1>Welcome to Music Transcriber</h1>
          <p>
            Upload an audio file or enter a YouTube link to get started.
            <span>Transcribe, analyze, and explore your music with precision.</span>
          </p>
        </div>

        <div className="start-options">
          <article className="start-card upload-card">
            <div className="start-card-icon" aria-hidden="true">{"\u21e7"}</div>
            <h2>Upload Audio File</h2>
            <p>Upload MP3, WAV, FLAC, M4A or other audio formats.</p>
            <button className="start-action primary-start-action" onClick={onChooseAudio} type="button">
              Choose File
            </button>
          </article>

          <div className="option-divider" aria-hidden="true">or</div>

          <article className="start-card youtube-card">
            <div className="start-card-icon" aria-hidden="true">{"\u25b6"}</div>
            <h2>Enter YouTube Link</h2>
            <p>Paste a YouTube link to extract and transcribe the audio.</p>
            <button className="start-action youtube-start-action" onClick={requestYouTubeLink} type="button">
              Enter YouTube Link
            </button>
          </article>
        </div>

        <aside className="format-note">
          <span className="format-icon" aria-hidden="true">{"\u25cc"}</span>
          <p>
            <strong>Supported formats:</strong> MP3, WAV, FLAC, M4A, OGG, AAC and more.
            <span>For best results, use high quality audio files.</span>
          </p>
        </aside>
      </section>
    </main>
  );
}
