import React, { useEffect, useState } from "react";
import { ClockIcon, MinusIcon, PlusIcon, ResetIcon } from "./Icons.jsx";

export default function SpeedControl({ tempo, onSetTempo }) {
  const [draft, setDraft] = useState(String(tempo));
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing) setDraft(String(tempo));
  }, [tempo, editing]);

  function commit() {
    const num = parseInt(draft, 10);
    onSetTempo(Number.isFinite(num) ? num : tempo);
    setEditing(false);
  }

  function onKeyDown(event) {
    if (event.key === "Enter") { commit(); event.target.blur(); }
    if (event.key === "Escape") { setDraft(String(tempo)); setEditing(false); event.target.blur(); }
  }

  return (
    <section className="panel-card speed-card" aria-label="Playback speed">
      <header className="panel-heading">
        <span className="panel-heading-icon" aria-hidden="true">
          <ClockIcon size={16} />
        </span>
        <span>Speed</span>
      </header>

      <div className="speed-value">
        <input
          aria-label="Playback speed percentage"
          className="speed-value-number speed-value-input"
          inputMode="numeric"
          max="200"
          min="25"
          onBlur={commit}
          onChange={event => { setDraft(event.target.value); setEditing(true); }}
          onFocus={event => event.target.select()}
          onKeyDown={onKeyDown}
          type="number"
          value={draft}
        />
        <span className="speed-value-unit">%</span>
      </div>

      <div className="speed-buttons">
        <button
          type="button"
          className="speed-step-button"
          aria-label="Decrease speed"
          disabled={tempo <= 25}
          onClick={() => onSetTempo(tempo - 5)}
        >
          <MinusIcon size={18} />
        </button>
        <button
          type="button"
          className="speed-step-button"
          aria-label="Reset speed"
          disabled={tempo === 100}
          onClick={() => onSetTempo(100)}
        >
          <ResetIcon size={18} />
        </button>
        <button
          type="button"
          className="speed-step-button"
          aria-label="Increase speed"
          disabled={tempo >= 200}
          onClick={() => onSetTempo(tempo + 5)}
        >
          <PlusIcon size={18} />
        </button>
      </div>

      <input
        aria-label="Playback speed slider"
        className="speed-slider"
        max="200"
        min="25"
        onChange={event => onSetTempo(Number(event.target.value))}
        step="5"
        type="range"
        value={tempo}
      />
    </section>
  );
}
