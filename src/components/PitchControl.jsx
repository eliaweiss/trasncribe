import React, { useEffect, useState } from "react";
import { MinusIcon, PitchWaveIcon, PlusIcon, ResetIcon } from "./Icons.jsx";

function PitchStepper({ disabled, label, max, min, onChange, value }) {
  const [draft, setDraft] = useState(String(value));
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing) setDraft(String(value));
  }, [value, editing]);

  function commit() {
    const num = parseInt(draft, 10);
    if (Number.isFinite(num)) {
      onChange(Math.max(min, Math.min(max, num)));
    } else {
      setDraft(String(value));
    }
    setEditing(false);
  }

  function onKeyDown(event) {
    if (event.key === "Enter") { commit(); event.target.blur(); }
    if (event.key === "Escape") { setDraft(String(value)); setEditing(false); event.target.blur(); }
  }

  return (
    <div className="pitch-stepper">
      <div className="pitch-stepper-label">{label}</div>
      <input
        aria-label={label}
        className="pitch-stepper-value pitch-stepper-input"
        disabled={disabled}
        inputMode="numeric"
        max={max}
        min={min}
        onBlur={commit}
        onChange={event => { setDraft(event.target.value); setEditing(true); }}
        onFocus={event => event.target.select()}
        onKeyDown={onKeyDown}
        type="number"
        value={draft}
      />
      <div className="pitch-stepper-buttons">
        <button
          type="button"
          className="pitch-step-button"
          aria-label={`Decrease ${label.toLowerCase()}`}
          disabled={disabled || value <= min}
          onClick={() => onChange(value - 1)}
        >
          <MinusIcon size={16} />
        </button>
        <button
          type="button"
          className="pitch-step-button"
          aria-label={`Increase ${label.toLowerCase()}`}
          disabled={disabled || value >= max}
          onClick={() => onChange(value + 1)}
        >
          <PlusIcon size={16} />
        </button>
      </div>
    </div>
  );
}

export default function PitchControl({ pitchCents, onSetPitchCents, sourceType }) {
  const canShiftPitch = sourceType === "audio";
  const semitones = Math.trunc(pitchCents / 100);
  const cents = pitchCents - semitones * 100;

  return (
    <section className="panel-card pitch-card" aria-label="Pitch">
      <header className="panel-heading">
        <span className="panel-heading-icon" aria-hidden="true">
          <PitchWaveIcon size={16} />
        </span>
        <span>Pitch</span>
      </header>

      <div className="pitch-grid">
        <PitchStepper
          disabled={!canShiftPitch}
          label="Semitones"
          max={24}
          min={-24}
          onChange={next => onSetPitchCents(next * 100 + cents)}
          value={semitones}
        />
        <PitchStepper
          disabled={!canShiftPitch}
          label="Cents"
          max={99}
          min={-99}
          onChange={next => onSetPitchCents(semitones * 100 + next)}
          value={cents}
        />
        <button
          type="button"
          className="pitch-reset-button"
          disabled={!canShiftPitch || pitchCents === 0}
          onClick={() => onSetPitchCents(0)}
        >
          <span className="pitch-reset-icon" aria-hidden="true">
            <ResetIcon size={20} />
          </span>
          <span>Reset Pitch</span>
        </button>
      </div>
    </section>
  );
}
