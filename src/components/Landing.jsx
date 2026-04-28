import React from "react";
import WaveformLogo from "./WaveformLogo.jsx";

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
            <WaveformLogo className="landing-logo" />
          </div>

          <h1>Welcome to Muse Transcribe</h1>
          <p>
            Upload an audio file or enter a YouTube link to get started.
            <span>
              Transcribe, analyze, and explore your music with precision.
            </span>
          </p>
        </div>

        <div className="start-options">
          <article className="start-card upload-card" onClick={onChooseAudio} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onChooseAudio()}>
            <div className="start-card-icon" aria-hidden="true">
              {"\u21e7"}
            </div>
            <h2>Upload Audio File</h2>
            <p>Upload MP3, WAV, FLAC, M4A or other audio formats.</p>
            <button
              className="start-action primary-start-action"
              onClick={e => { e.stopPropagation(); onChooseAudio(); }}
              type="button"
              tabIndex={-1}
            >
              Choose File
            </button>
          </article>

          <div className="option-divider" aria-hidden="true">
            or
          </div>

          <article className="start-card youtube-card" onClick={requestYouTubeLink} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && requestYouTubeLink()}>
            <div className="start-card-icon" aria-hidden="true">
              {"\u25b6"}
            </div>
            <h2>Enter YouTube Link</h2>
            <p>Paste a YouTube link to extract and transcribe the audio.</p>
            <button
              className="start-action youtube-start-action"
              onClick={e => { e.stopPropagation(); requestYouTubeLink(); }}
              type="button"
              tabIndex={-1}
            >
              Enter YouTube Link
            </button>
          </article>
        </div>

        <aside className="format-note">
          <span className="format-icon" aria-hidden="true">
            {"\u25cc"}
          </span>
          <p>
            <strong>Supported formats:</strong> MP3, WAV, FLAC, M4A, OGG, AAC
            and more.
            <span>For best results, use high quality audio files.</span>
          </p>
        </aside>
      </section>
    </main>
  );
}
