import React, { useEffect, useRef, useState } from "react";

function drawSelection(canvas, selection) {
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);

  const startX = selection.start * width;
  const endX = selection.end == null ? null : selection.end * width;

  context.fillStyle = "#5869FC";
  context.fillRect(startX - 1, 0, 3, height);

  if (endX != null) {
    context.fillStyle = "rgba(88, 105, 252, 0.12)";
    context.fillRect(startX, 0, endX - startX, height);
    context.fillStyle = "#5869FC";
    context.fillRect(endX - 1, 0, 3, height);
  }
}

function ratioFromEvent(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  return Math.max(0, Math.min(1, x / rect.width));
}

export default function SelectionOverlay({ height, onSeek, selection, selectionMode, setSelection, width }) {
  const canvasRef = useRef(null);
  const [dragStart, setDragStart] = useState(null);

  useEffect(() => {
    if (canvasRef.current) drawSelection(canvasRef.current, selection);
  }, [selection, width]);

  const beginSelection = event => {
    const start = ratioFromEvent(event, canvasRef.current);
    setDragStart(selectionMode === "section" ? start : null);
    onSeek(start);
    setSelection({ start, end: null });
  };

  const updateSelection = event => {
    if (dragStart == null) return;
    const current = ratioFromEvent(event, canvasRef.current);
    setSelection({ start: Math.min(dragStart, current), end: Math.max(dragStart, current) });
  };

  const endSelection = event => {
    if (dragStart == null) return;
    updateSelection(event);
    setDragStart(null);
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      id="waveform-selection"
      onMouseDown={beginSelection}
      onMouseMove={updateSelection}
      onMouseUp={endSelection}
      style={{ MozUserSelect: "none", userSelect: "none" }}
      unselectable="on"
    />
  );
}
