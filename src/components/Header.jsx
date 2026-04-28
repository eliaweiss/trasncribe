import React from "react";
import WaveformLogo from "./WaveformLogo.jsx";
import { UploadIcon, YouTubeIcon } from "./Icons.jsx";

export default function Header({ onChooseAudio, onChooseYouTube }) {
  return (
    <header className="app-header">
      <a className="app-title" href="#" onClick={event => event.preventDefault()}>
        <WaveformLogo className="app-logo" />
        <span>Music Transcriber</span>
      </a>
      <div className="header-actions" aria-label="Load audio source">
        <button type="button" className="pill-button pill-button-primary" onClick={onChooseAudio}>
          <UploadIcon size={16} />
          Choose Audio
        </button>
        <button type="button" className="pill-button pill-button-secondary" onClick={onChooseYouTube}>
          <YouTubeIcon size={18} />
          Choose YouTube
        </button>
      </div>
    </header>
  );
}
