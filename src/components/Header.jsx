import React from "react";

export default function Header({ onChooseAudio, onChooseYouTube }) {
  return (
    <header className="app-header">
      <a className="app-title" href="#" onClick={event => event.preventDefault()}>
        <span className="app-logo" aria-hidden="true">
          <svg viewBox="0 0 64 36" role="img">
            <defs>
              <linearGradient id="waveformLogoGradient" x1="0" x2="64" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8b5cff" />
                <stop offset="100%" stopColor="#23d6ff" />
              </linearGradient>
            </defs>
            <path d="M2 20h7l5-15 8 30 8-24 7 18 6-9h19" />
          </svg>
        </span>
        <span>Music Transcriber</span>
      </a>
      <div className="header-actions" aria-label="Load audio source">
        <button type="button" className="pill-button pill-button-primary" onClick={onChooseAudio}>
          <span className="button-icon" aria-hidden="true">{"\u21e7"}</span>
          Choose Audio
        </button>
        <button type="button" className="pill-button pill-button-secondary" onClick={onChooseYouTube}>
          <span className="button-icon youtube-icon" aria-hidden="true">{"\u25b6"}</span>
          Choose YouTube
        </button>
      </div>
    </header>
  );
}
