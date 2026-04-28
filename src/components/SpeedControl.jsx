import React from "react";
import { ClockIcon, MinusIcon, PlusIcon, ResetIcon } from "./Icons.jsx";

export default function SpeedControl({ tempo, onSetTempo }) {
  return (
    <section className="panel-card speed-card" aria-label="Playback speed">
      <header className="panel-heading">
        <span className="panel-heading-icon" aria-hidden="true">
          <ClockIcon size={16} />
        </span>
        <span>Speed</span>
      </header>

      <div className="speed-value">
        <span className="speed-value-number">{tempo}</span>
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
