import React, { useRef } from "react";
import TimeTicks from "./TimeTicks.jsx";
import WaveformCanvas from "./WaveformCanvas.jsx";
import SelectionOverlay from "./SelectionOverlay.jsx";
import MarkerOverlay from "./MarkerOverlay.jsx";

const HEIGHT = 170;
const WAVE_TOP = 20;
const WAVE_BOTTOM = 28;

export default function Timeline({ audioBuffer, duration, marks, onSeek, onSetSelection, position, positionLabel, selection, selectionColor, width }) {
  const canvasRef = useRef(null);
  const waveHeight = HEIGHT - WAVE_TOP - WAVE_BOTTOM;

  return (
    <div className="mouse-container" style={{ height: HEIGHT, position: "relative" }}>
      <WaveformCanvas
        ref={canvasRef}
        audioBuffer={audioBuffer}
        height={waveHeight}
        width={width}
      />
      <MarkerOverlay marks={marks} width={width} height={HEIGHT - WAVE_BOTTOM} />
      <div
        className="overlay"
        id="waveform-position"
        style={{
          height: HEIGHT - WAVE_BOTTOM,
          left: 0,
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          width,
        }}
      >
        <div className="position-line" style={{ left: `${position * width}px` }}>
          <span className="position-label">{positionLabel}</span>
        </div>
      </div>
      <TimeTicks duration={duration} width={width} />
      <SelectionOverlay
        height={HEIGHT - WAVE_BOTTOM}
        onSeek={onSeek}
        selection={selection}
        selectionColor={selectionColor}
        setSelection={onSetSelection}
        width={width}
      />
    </div>
  );
}
