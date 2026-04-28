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
    <div style={{ marginRight: "1.25em", textAlign: "center" }}>
      <div style={{ color: "#101633", fontSize: "1.2em", marginBottom: ".25em" }}>{label}</div>
      <div className="btn-group">
        <button
          className="btn btn-default"
          disabled={disabled || value <= min}
          onClick={() => onChange(value - step)}
          type="button"
        >
          -
        </button>
        <input
          aria-label={label}
          className="btn btn-default"
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
          style={{ borderLeft: 0, borderRight: 0, cursor: "text", minWidth: "3.5em", width: "4.5em" }}
          type="number"
          value={draftValue}
        />
        <button
          className="btn btn-default"
          disabled={disabled || value >= max}
          onClick={() => onChange(value + step)}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}

function ResetButton({ disabled = false, onClick }) {
  return (
    <button
      className="btn btn-default"
      disabled={disabled}
      onClick={onClick}
      style={{ alignSelf: "flex-end", marginBottom: 0 }}
      type="button"
    >
      Reset
    </button>
  );
}

export default function Toolbar(props) {
  const {
    hasSelectionEnd,
    hasSelectionStart,
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
    <div>
      <div className="btn-group pull-left" style={{ marginTop: ".5em" }}>
        <button className="btn btn-default" title="Hotkey: space" onClick={onPlayPause}>Play/Pause</button>
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Settings</button>
      </div>

      <div className="btn-group pull-left" style={{ clear: "left", marginTop: ".25em" }}>
        <button className="btn btn-default" title="Hotkey: F. Jump to the start of the file" onClick={onJumpToFileStart}><u>F</u>ile Start</button>
        <button className="btn btn-default" disabled={!hasSelectionStart} title="Hotkey: S. Jump to the start selection line" onClick={onJumpToSelectionStart}><u>S</u>election Start</button>
        <button className="btn btn-default" disabled={!hasSelectionEnd} title="Hotkey: E. Jump to the end selection line" onClick={onJumpToSelectionEnd}>Selection <u>E</u>nd</button>
      </div>

      <div style={{ alignItems: "center", clear: "both", display: "flex", paddingTop: "1em" }}>
        <Stepper
          label="Speed"
          max={200}
          min={25}
          onChange={onSetTempo}
          step={5}
          value={tempo}
        />
        <ResetButton disabled={tempo === 100} onClick={() => onSetTempo(100)} />
      </div>

      <div style={{ alignItems: "center", display: "flex", paddingTop: ".75em" }}>
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
        <ResetButton disabled={!canShiftPitch || pitchCents === 0} onClick={() => onSetPitchCents(0)} />
      </div>
    </div>
  );
}
