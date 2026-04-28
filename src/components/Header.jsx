import React from "react";
import WaveformLogo from "./WaveformLogo.jsx";

export default function Header({ onChooseAudio, onChooseYouTube }) {
  return (
    <header className="app-header">
      <a className="app-title" href="#" onClick={event => event.preventDefault()}>
        <WaveformLogo className="app-logo" />
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
