import React, { useState } from "react";

export default function Landing({ onChooseAudio, onLoadYouTube }) {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  return (
    <div id="landing">
      <div className="container">
        <div className="hero-cont">
          <div className="hero">
            <h1 className="title">
              <span className="bb">Transcribe</span> music
              <span style={{ display: "block", paddingTop: 20 }}>like a pro.</span>
            </h1>
            <h2 className="tagline" style={{ marginBottom: "1.5em" }}>
              Slow down your favorite songs so you can learn how they are played.
            </h2>
            <button className="btn btn-primary btn-lg" onClick={onChooseAudio}>Load an MP3</button>
            <form
              className="form-inline"
              style={{ marginTop: "1em" }}
              onSubmit={event => {
                event.preventDefault();
                onLoadYouTube(youtubeUrl);
              }}
            >
              <input
                aria-label="YouTube URL"
                className="form-control input-lg"
                onChange={event => setYoutubeUrl(event.target.value)}
                placeholder="Paste a YouTube URL"
                type="text"
                value={youtubeUrl}
              />{" "}
              <button className="btn btn-primary btn-lg" type="submit">Load YouTube Video</button>
            </form>
          </div>
          <div id="screenshot" className="main-img">
            <img src="./Transcribe Music Online_files/screenshot.png" alt="Waveform screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}
