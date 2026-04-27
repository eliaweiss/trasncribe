import React, { useRef } from "react";
import TimeTicks from "./TimeTicks.jsx";
import WaveformCanvas from "./WaveformCanvas.jsx";
import SelectionOverlay from "./SelectionOverlay.jsx";
import MarkerOverlay from "./MarkerOverlay.jsx";

const HEIGHT = 224;

export default function Timeline({ audioBuffer, duration, marks, onSeek, onSetSelection, position, selection, selectionMode, width }) {
  const canvasRef = useRef(null);

  return (
    <div className="mouse-container" style={{ height: HEIGHT, position: "relative" }}>
      <MarkerOverlay marks={marks} width={width} />
      <TimeTicks duration={duration} width={width} />
      <WaveformCanvas ref={canvasRef} audioBuffer={audioBuffer} height={HEIGHT - 18} width={width} />
      <div className="overlay" id="waveform-position" style={{ pointerEvents: "none", width }} height={HEIGHT}>
        <div className="position-line" style={{ left: `${position * width}px` }} />
      </div>
      <SelectionOverlay
        height={HEIGHT}
        onSeek={onSeek}
        selection={selection}
        selectionMode={selectionMode}
        setSelection={onSetSelection}
        width={width}
      />
    </div>
  );
}
