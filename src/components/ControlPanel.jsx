import React from "react";
import { formatTime } from "../utils/audioBuffer.js";
import { BookmarkIcon, LoopIcon } from "./Icons.jsx";

export default function ControlPanel({ duration, marks, onAddLoop, onAddMark, onRemoveMark, onSelectLoop, onSelectMark }) {
  const visibleMarks = marks.filter(mark => mark.type !== "loop");
  const loops = marks.filter(mark => mark.type === "loop");
  const hasItems = visibleMarks.length > 0 || loops.length > 0;

  return (
    <aside className="markers-panel panel-card" aria-label="Markers">
      <header className="panel-heading">
        <span className="panel-heading-icon" aria-hidden="true">
          <BookmarkIcon size={16} filled />
        </span>
        <span>Markers</span>
      </header>

      <div className="markers-body">
        <div className="marker-actions">
          <button
            type="button"
            className="marker-button marker-mark-button"
            title="You can also tap 'm' to add a mark"
            onClick={onAddMark}
          >
            <BookmarkIcon size={14} />
            <span>Add Mark</span>
          </button>
          <button
            type="button"
            className="marker-button marker-loop-button"
            title="Save the current selection as a loop"
            onClick={onAddLoop}
          >
            <LoopIcon size={14} />
            <span>Add Loop</span>
          </button>
        </div>

        <div className="markers-content">
          {!hasItems && (
            <p className="markers-empty">
              <span>No markers or loops added yet.</span>
              <small>Use the buttons to add markers or create loops.</small>
            </p>
          )}

          {hasItems && (
            <ul className="cards">
              {visibleMarks.map(mark => (
                <li
                  key={mark.id}
                  className="card"
                  onClick={() => onSelectMark(mark)}
                >
                  <span className="card-label">
                    <BookmarkIcon size={12} />
                    Mark {formatTime(mark.time)}
                  </span>
                  <button
                    type="button"
                    className="card-remove"
                    onClick={event => {
                      event.stopPropagation();
                      onRemoveMark(mark.id);
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
              {loops.map(loop => (
                <li
                  key={loop.id}
                  className="card"
                  onClick={() => onSelectLoop(loop)}
                >
                  <span className="card-label">
                    <LoopIcon size={12} />
                    Loop {formatTime(loop.position * duration)} – {formatTime(loop.end * duration)}
                  </span>
                  <button
                    type="button"
                    className="card-remove"
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
          )}
        </div>
      </div>
    </aside>
  );
}
