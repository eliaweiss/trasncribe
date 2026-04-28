import React from "react";

export default function Header({ onChooseAudio, onChooseYouTube }) {
  return (
    <header className="app-header">
      <a className="app-title" href="#" onClick={event => event.preventDefault()}>
        Music Transcriber
      </a>
      <div className="header-actions" aria-label="Load audio source">
        <button type="button" className="pill-button pill-button-primary" onClick={onChooseAudio}>
          <span aria-hidden="true">{"\u266b"}</span>
          Choose Audio
        </button>
        <button type="button" className="pill-button pill-button-secondary" onClick={onChooseYouTube}>
          <span aria-hidden="true">{"\u25bb"}</span>
          Choose YouTube
        </button>
      </div>
    </header>
  );
}
