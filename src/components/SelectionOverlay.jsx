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
  const dragStartRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (canvasRef.current) drawSelection(canvasRef.current, selection);
  }, [selection, width]);

  const updateSectionEnd = event => {
    if (dragStartRef.current == null) return;
    const current = ratioFromEvent(event, canvasRef.current);
    setSelection({ start: Math.min(dragStartRef.current, current), end: Math.max(dragStartRef.current, current) });
  };

  const beginSelection = event => {
    event.preventDefault();
    canvasRef.current.setPointerCapture?.(event.pointerId);
    const start = ratioFromEvent(event, canvasRef.current);
    onSeek(start);
    setSelection({ start, end: null });

    if (selectionMode === "section") {
      dragStartRef.current = start;
      setIsDragging(true);
    } else {
      dragStartRef.current = null;
      setIsDragging(false);
    }
  };

  const updateSelection = event => {
    if (!isDragging) return;
    updateSectionEnd(event);
  };

  const endSelection = event => {
    if (!isDragging) return;
    updateSectionEnd(event);
    dragStartRef.current = null;
    setIsDragging(false);
    canvasRef.current.releasePointerCapture?.(event.pointerId);
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      id="waveform-selection"
      onPointerDown={beginSelection}
      onPointerMove={updateSelection}
      onPointerUp={endSelection}
      style={{
        cursor: selectionMode === "section" ? "crosshair" : "pointer",
        left: 0,
        MozUserSelect: "none",
        pointerEvents: "auto",
        position: "absolute",
        top: 0,
        touchAction: "none",
        userSelect: "none",
        zIndex: 50,
      }}
      unselectable="on"
    />
  );
}
