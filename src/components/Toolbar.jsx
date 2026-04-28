import React, { useEffect, useState } from "react";

function Stepper({ disabled = false, label, max, min, onChange, step, value }) {
  const [draftValue, setDraftValue] = useState(String(value));

  useEffect(() => {
    setDraftValue(String(value));
  }, [value]);

  const commitValue = nextValue => {
    const numberValue = Number(nextValue);
    if (!Number.isFinite(numberValue)) {
      setDraftValue(String(value));
      return;
    }

    const clampedValue = Math.max(min, Math.min(max, Math.round(numberValue)));
    setDraftValue(String(clampedValue));
    onChange(clampedValue);
  };

  return (
    <div className="stepper">
      <div className="stepper-label">{label}</div>
      <div className="stepper-controls">
        <button
          className="round-stepper"
          disabled={disabled || value >= max}
          onClick={() => onChange(value + step)}
          type="button"
        >
          +
        </button>
        <input
          aria-label={label}
          className="stepper-value"
          disabled={disabled}
          max={max}
          min={min}
          onBlur={() => commitValue(draftValue)}
          onChange={event => setDraftValue(event.target.value)}
          onKeyDown={event => {
            if (event.key === "Enter") {
              event.currentTarget.blur();
            }
          }}
          step="1"
          type="number"
          value={draftValue}
        />
        <button
          className="round-stepper"
          disabled={disabled || value <= min}
          onClick={() => onChange(value - step)}
          type="button"
        >
          -
        </button>
      </div>
    </div>
  );
}

function ResetButton({ className = "", disabled = false, onClick }) {
  return (
    <button
      className={`soft-button ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      reset
    </button>
  );
}

export default function Toolbar(props) {
  const {
    currentTimeLabel,
    hasSelectionEnd,
    hasSelectionStart,
    isPlaying,
    onJumpToFileStart,
    onJumpToSelectionEnd,
    onJumpToSelectionStart,
    onPlayPause,
    onSetPitchCents,
    onSetTempo,
    pitchCents,
    sourceType,
    tempo,
  } = props;

  const canShiftPitch = sourceType === "audio";
  const octaves = Math.trunc(pitchCents / 1200);
  const centsAfterOctaves = pitchCents - octaves * 1200;
  const semitones = Math.trunc(centsAfterOctaves / 100);
  const cents = centsAfterOctaves - semitones * 100;

  return (
    <>
      <div className="transport-panel">
        <div className="state-readout">
          <span>{isPlaying ? "Playing" : "Pause"}</span>
          <span>is_playing: {String(isPlaying)}</span>
        </div>
        <button className="play-button" title="Hotkey: space" onClick={onPlayPause} type="button">
          <span className="play-icon" aria-hidden="true">||</span>
          <span>{isPlaying ? "Pause" : "Pause"}</span>
        </button>
        <button type="button" className="settings-button" title="Settings">
          <span aria-hidden="true">{"\u2699"}</span>
          <span>settings</span>
        </button>
        <div className="time-badge">{currentTimeLabel}</div>
      </div>

      <div className="panel-card selection-card">
        <h2>selection_controls</h2>
        <button className="text-row-button" title="Hotkey: F. Jump to the start of the file" onClick={onJumpToFileStart} type="button">
          File Start
        </button>
        <button className="text-row-button" disabled={!hasSelectionStart} title="Hotkey: S. Jump to the start selection line" onClick={onJumpToSelectionStart} type="button">
          Selection Start
        </button>
        <button className="text-row-button" disabled={!hasSelectionEnd} title="Hotkey: E. Jump to the end selection line" onClick={onJumpToSelectionEnd} type="button">
          Selection End
        </button>
      </div>

      <div className="audio-title">audio_controls</div>

      <div className="panel-card speed-card">
        <div className="speed-label">Speed</div>
        <div className="speed-value">{tempo}%</div>
        <div className="speed-actions">
          <button className="round-stepper" disabled={tempo >= 200} onClick={() => onSetTempo(tempo + 5)} type="button">+</button>
          <button className="round-stepper" disabled={tempo <= 25} onClick={() => onSetTempo(tempo - 5)} type="button">-</button>
          <ResetButton disabled={tempo === 100} onClick={() => onSetTempo(100)} />
        </div>
      </div>

      <div className="panel-card pitch-card">
        <Stepper
          disabled={!canShiftPitch}
          label="Octaves"
          max={2}
          min={-2}
          onChange={nextOctaves => onSetPitchCents(nextOctaves * 1200 + semitones * 100 + cents)}
          step={1}
          value={octaves}
        />
        <Stepper
          disabled={!canShiftPitch}
          label="Semitones"
          max={11}
          min={-11}
          onChange={nextSemitones => onSetPitchCents(octaves * 1200 + nextSemitones * 100 + cents)}
          step={1}
          value={semitones}
        />
        <Stepper
          disabled={!canShiftPitch}
          label="Cents"
          max={99}
          min={-99}
          onChange={nextCents => onSetPitchCents(octaves * 1200 + semitones * 100 + nextCents)}
          step={1}
          value={cents}
        />
        <ResetButton className="pitch-reset" disabled={!canShiftPitch || pitchCents === 0} onClick={() => onSetPitchCents(0)} />
      </div>
    </>
  );
}
