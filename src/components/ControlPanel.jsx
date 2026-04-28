import React from "react";
import { formatTime } from "../utils/audioBuffer.js";

export default function ControlPanel({ duration, marks, onAddLoop, onAddMark, onRemoveMark, onSelectLoop, onSelectMark }) {
  const visibleMarks = marks.filter(mark => mark.type !== "loop");
  const loops = marks.filter(mark => mark.type === "loop");

  return (
    <aside className="control-panel panel-card visible-audio-loaded">
      <h2>markers</h2>
      <div className="marker-actions">
        <button className="pill-button pill-button-primary" title="You can also tap 'm' to add a mark" onClick={onAddMark}>Add Mark</button>
        <button className="soft-button marker-loop-button" title="Save the current selection as a loop" onClick={onAddLoop}>Add Loop</button>
      </div>

      {!visibleMarks.length && !loops.length && (
        <p id="empty-mark-message">
          Tap Add Mark while playing to label parts of the song.
        </p>
      )}

      <ul className="cards">
        {visibleMarks.map(mark => (
          <li key={mark.id} className="card" onClick={() => onSelectMark(mark)} style={{ cursor: "pointer" }}>
            <strong>Mark</strong> {formatTime(mark.time)}
            <button
              className="soft-button remove-mark-button"
              onClick={event => {
                event.stopPropagation();
                onRemoveMark(mark.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <ul className="cards">
        {loops.map(loop => (
          <li key={loop.id} className="card" onClick={() => onSelectLoop(loop)} style={{ cursor: "pointer" }}>
            <strong>Loop</strong> {formatTime(loop.position * duration)} - {formatTime(loop.end * duration)}
            <button
              className="soft-button remove-mark-button"
              onClick={event => {
                event.stopPropagation();
                onRemoveMark(loop.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
