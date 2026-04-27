import React, { useRef } from "react";
import TimeTicks from "./TimeTicks.jsx";
import WaveformCanvas from "./WaveformCanvas.jsx";
import SelectionOverlay from "./SelectionOverlay.jsx";
import MarkerOverlay from "./MarkerOverlay.jsx";

const HEIGHT = 224;

function eventRatio(event, element) {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left + element.parentElement.scrollLeft;
  return Math.max(0, Math.min(1, x / element.width));
}

export default function Timeline({ audioBuffer, duration, marks, onSeek, onSetSelection, position, selection, selectionMode, width }) {
  const canvasRef = useRef(null);

  const handleSeek = event => {
    if (!canvasRef.current) return;
    onSeek(eventRatio(event, canvasRef.current));
  };

  return (
    <div className="mouse-container" style={{ height: HEIGHT }}>
      <div className="overlay" style={{ height: HEIGHT, zIndex: 39, width }} onClick={handleSeek} />
      <MarkerOverlay marks={marks} width={width} />
      <TimeTicks duration={duration} width={width} />
      <WaveformCanvas ref={canvasRef} audioBuffer={audioBuffer} height={HEIGHT - 18} width={width} />
      <div className="overlay" id="waveform-position" style={{ width }} height={HEIGHT} onClick={handleSeek}>
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
