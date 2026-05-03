import React from "react";
import { PauseIcon, PlayIcon, SettingsIcon } from "./Icons.jsx";

export default function Transport(props) {
  const {
    countInBeat,
    countInEnabled,
    currentTimeLabel,
    durationLabel,
    hasSelectionEnd,
    hasSelectionStart,
    isPlaying,
    onJumpToFileStart,
    onJumpToSelectionEnd,
    onJumpToSelectionStart,
    onPlayPause,
    onToggleCountIn,
  } = props;

  const isCountingIn = countInBeat > 0;

  return (
    <div className="transport-row">
      <div className="play-group">
        <button
          className={`play-button${isCountingIn ? " play-button--counting" : ""}`}
          title={isCountingIn ? "Cancel count-in" : isPlaying ? "Pause (space)" : "Play (space)"}
          onClick={onPlayPause}
          type="button"
        >
          {isCountingIn ? (
            <span className="count-in-beat" key={countInBeat}>{countInBeat}</span>
          ) : isPlaying ? (
            <PauseIcon size={28} />
          ) : (
            <PlayIcon size={28} />
          )}
        </button>
        <button
          className={`count-in-toggle${countInEnabled ? " count-in-toggle--on" : ""}`}
          onClick={onToggleCountIn}
          title={countInEnabled ? "Count-in: ON — click to disable" : "Count-in: OFF — click to enable"}
          type="button"
          aria-pressed={countInEnabled}
        >
          1·2·3·4
        </button>
      </div>

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
