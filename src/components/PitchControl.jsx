import React from "react";
import { MinusIcon, PitchWaveIcon, PlusIcon, ResetIcon } from "./Icons.jsx";

function PitchStepper({ disabled, label, max, min, onChange, value }) {
  return (
    <div className="pitch-stepper">
      <div className="pitch-stepper-label">{label}</div>
      <div className="pitch-stepper-value">{value}</div>
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
  const octaves = Math.trunc(pitchCents / 1200);
  const centsAfterOctaves = pitchCents - octaves * 1200;
  const semitones = Math.trunc(centsAfterOctaves / 100);
  const cents = centsAfterOctaves - semitones * 100;

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
          label="Octaves"
          max={2}
          min={-2}
          onChange={next => onSetPitchCents(next * 1200 + semitones * 100 + cents)}
          value={octaves}
        />
        <PitchStepper
          disabled={!canShiftPitch}
          label="Semitones"
          max={11}
          min={-11}
          onChange={next => onSetPitchCents(octaves * 1200 + next * 100 + cents)}
          value={semitones}
        />
        <PitchStepper
          disabled={!canShiftPitch}
          label="Cents"
          max={99}
          min={-99}
          onChange={next => onSetPitchCents(octaves * 1200 + semitones * 100 + next)}
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
