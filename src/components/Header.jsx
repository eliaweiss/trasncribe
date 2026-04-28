import React from "react";
import WaveformLogo from "./WaveformLogo.jsx";
import { UploadIcon, YouTubeIcon, GitHubIcon } from "./Icons.jsx";

export default function Header({ onChooseAudio, onChooseYouTube }) {
  return (
    <header className="app-header">
      <a
        className="app-title"
        href="#"
        onClick={(event) => event.preventDefault()}
      >
        <WaveformLogo className="app-logo" />
        <span>Muse Transcribe</span>
      </a>
      <div className="header-actions" aria-label="Load audio source">
        <button
          type="button"
          className="pill-button pill-button-primary"
          onClick={onChooseAudio}
        >
          <UploadIcon size={16} />
          Choose Audio
        </button>
        <button
          type="button"
          className="pill-button pill-button-secondary"
          onClick={onChooseYouTube}
        >
          <YouTubeIcon size={18} />
          Choose YouTube
        </button>
        <a
          href="https://github.com/eliaweiss/trasncribe"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="View source on GitHub"
          title="View source on GitHub"
        >
          <GitHubIcon size={20} />
        </a>
      </div>
    </header>
  );
}
