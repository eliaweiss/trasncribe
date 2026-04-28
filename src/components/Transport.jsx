import React from "react";
import { PauseIcon, PlayIcon, SettingsIcon } from "./Icons.jsx";

export default function Transport(props) {
  const {
    currentTimeLabel,
    durationLabel,
    hasSelectionEnd,
    hasSelectionStart,
    isPlaying,
    onJumpToFileStart,
    onJumpToSelectionEnd,
    onJumpToSelectionStart,
    onPlayPause,
  } = props;

  return (
    <div className="transport-row">
      <button
        className="play-button"
        title={isPlaying ? "Pause (space)" : "Play (space)"}
        onClick={onPlayPause}
        type="button"
      >
        {isPlaying ? <PauseIcon size={28} /> : <PlayIcon size={28} />}
      </button>

      <div className="time-badge">
        <strong>{currentTimeLabel}</strong>
        <span>/ {durationLabel}</span>
      </div>

      <div className="selection-card">
        <div className="selection-label">Selection</div>
        <div className="selection-actions">
          <button
            className="selection-button selection-button-active"
            title="Hotkey: F. Jump to the start of the file"
            onClick={onJumpToFileStart}
            type="button"
          >
            File Start
          </button>
          <button
            className="selection-button"
            disabled={!hasSelectionStart}
            title="Hotkey: S. Jump to the start selection line"
            onClick={onJumpToSelectionStart}
            type="button"
          >
            Selection Start
          </button>
          <button
            className="selection-button"
            disabled={!hasSelectionEnd}
            title="Hotkey: E. Jump to the end selection line"
            onClick={onJumpToSelectionEnd}
            type="button"
          >
            Selection End
          </button>
        </div>
      </div>

      <button type="button" className="settings-button" title="Settings" aria-label="Settings">
        <SettingsIcon size={20} />
      </button>
    </div>
  );
}
