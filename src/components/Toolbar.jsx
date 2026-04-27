import React from "react";

export default function Toolbar(props) {
  const {
    hasSelectionEnd,
    hasSelectionStart,
    onJumpToFileStart,
    onJumpToSelectionEnd,
    onJumpToSelectionStart,
    onPlayPause,
    onSetTempo,
    selectionMode,
    setSelectionMode,
    tempo,
  } = props;

  return (
    <div>
      <div className="btn-group pull-left" style={{ marginTop: ".5em" }}>
        <button className="btn btn-default" title="Hotkey: space" onClick={onPlayPause}>Play/Pause</button>
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Settings</button>
      </div>

      <div className="btn-group pull-left" style={{ clear: "left", marginTop: ".25em" }}>
        <button className="btn btn-default btn-sm" title="Jump to the start of the file" onClick={onJumpToFileStart}>File Start</button>
        <button className="btn btn-default btn-sm" disabled={!hasSelectionStart} title="Jump to the start selection line" onClick={onJumpToSelectionStart}>Selection Start</button>
        <button className="btn btn-default btn-sm" disabled={!hasSelectionEnd} title="Jump to the end selection line" onClick={onJumpToSelectionEnd}>Selection End</button>
      </div>

      <div className="btn-group pull-left" style={{ clear: "left", marginTop: ".25em" }}>
        <button
          className={`btn btn-default btn-sm ${selectionMode === "start" ? "active" : ""}`}
          onClick={() => setSelectionMode("start")}
          type="button"
        >
          Place Start
        </button>
        <button
          className={`btn btn-default btn-sm ${selectionMode === "section" ? "active" : ""}`}
          onClick={() => setSelectionMode("section")}
          type="button"
        >
          Select Section
        </button>
      </div>

      <div className="group" style={{ display: "block" }}>
        <span className="flashicon emboss" style={{ marginLeft: "-1em" }}>Slow</span>
        <input
          aria-label="Tempo"
          id="tempo-slider"
          max="200"
          min="25"
          onChange={event => onSetTempo(event.target.value)}
          step="1"
          type="range"
          value={tempo}
        />
        <span className="flashicon emboss" style={{ marginRight: "-1em" }}>Fast</span>
        <div style={{ paddingTop: ".25em" }}>{tempo}%</div>
      </div>
    </div>
  );
}
