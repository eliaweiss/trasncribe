import React from "react";

export default function Header({ onChooseAudio, onChooseYouTube }) {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span>Menu</span>
        </button>
        <a className="navbar-brand" href="#" onClick={event => event.preventDefault()}>
          <img src="/Transcribe Music Online_files/logo-blueblock.png" alt="Transcribe Music Online" />
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#" onClick={event => { event.preventDefault(); onChooseAudio(); }}>
              Choose Audio
            </a>
          </li>
          <li>
            <a href="#" onClick={event => { event.preventDefault(); onChooseYouTube(); }}>
              Choose YouTube
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
