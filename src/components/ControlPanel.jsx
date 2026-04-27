import React from "react";
import { formatTime } from "../utils/audioBuffer.js";

export default function ControlPanel({ duration, marks, onAddBeat, onAddLoop, onAddMark, onRemoveMark }) {
  const visibleMarks = marks.filter(mark => mark.type !== "loop");
  const loops = marks.filter(mark => mark.type === "loop");

  return (
    <div className="control-panel visible-audio-loaded" style={{ marginLeft: 0 }}>
      <div className="btn-group">
        <button className="btn btn-default btn-sm" title="You can also tap 'm' to add a mark" onClick={onAddMark}>Add Mark</button>
        <button className="btn btn-default btn-sm" title="You can also tap 'b' to add a beat" onClick={onAddBeat}>Add Beat</button>
        <button className="btn btn-default btn-sm" title="Save the current selection as a loop" onClick={onAddLoop}>Add Loop</button>
      </div>

      {!visibleMarks.length && !loops.length && (
        <p id="empty-mark-message" style={{ display: "block" }}>
          Tap Add Mark or Add Beat while playing to label parts of the song.
        </p>
      )}

      <ul className="cards">
        {visibleMarks.map(mark => (
          <li key={mark.id} className="card">
            <strong>{mark.type === "beat" ? "Beat" : "Mark"}</strong> {formatTime(mark.time)}
            <button className="btn btn-default btn-xs" onClick={() => onRemoveMark(mark.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <ul className="cards">
        {loops.map(loop => (
          <li key={loop.id} className="card">
            <strong>Loop</strong> {formatTime(loop.position * duration)} - {formatTime(loop.end * duration)}
            <button className="btn btn-default btn-xs" onClick={() => onRemoveMark(loop.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
