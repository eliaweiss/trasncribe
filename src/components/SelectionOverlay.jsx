import React, { useEffect, useRef, useState } from "react";

const SELECTION_DRAG_THRESHOLD_PIXELS = 4;
const SELECTION_HANDLE_HIT_RADIUS_PIXELS = 8;

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

function xFromEvent(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  return event.clientX - rect.left;
}

function handleFromEvent(event, canvas, selection) {
  const x = xFromEvent(event, canvas);
  const startX = selection.start * canvas.getBoundingClientRect().width;
  const endX = selection.end == null ? null : selection.end * canvas.getBoundingClientRect().width;

  if (endX != null && Math.abs(x - endX) <= SELECTION_HANDLE_HIT_RADIUS_PIXELS) return "end";
  if (Math.abs(x - startX) <= SELECTION_HANDLE_HIT_RADIUS_PIXELS) return "start";
  return null;
}

export default function SelectionOverlay({ height, onSeek, selection, setSelection, width }) {
  const canvasRef = useRef(null);
  const dragModeRef = useRef(null);
  const dragStartRef = useRef(null);
  const hasDraggedRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const [cursor, setCursor] = useState("crosshair");
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (canvasRef.current) drawSelection(canvasRef.current, selection);
  }, [selection, width]);

  const updateSectionEnd = event => {
    if (dragStartRef.current == null) return;
    const current = ratioFromEvent(event, canvasRef.current);
    setSelection({ start: Math.min(dragStartRef.current, current), end: Math.max(dragStartRef.current, current) });
  };

  const updateDraggedHandle = event => {
    const current = ratioFromEvent(event, canvasRef.current);

    if (dragModeRef.current === "start") {
      const nextStart = selection.end == null ? current : Math.min(current, selection.end);
      onSeek(nextStart);
      setSelection({ start: nextStart, end: selection.end });
      return;
    }

    if (dragModeRef.current === "end" && selection.end != null) {
      const nextEnd = Math.max(current, selection.start);
      onSeek(nextEnd);
      setSelection({ start: selection.start, end: nextEnd });
    }
  };

  const beginSelection = event => {
    event.preventDefault();
    canvasRef.current.setPointerCapture?.(event.pointerId);
    const selectedHandle = handleFromEvent(event, canvasRef.current, selection);
    hasDraggedRef.current = false;
    pointerStartXRef.current = event.clientX;
    dragModeRef.current = selectedHandle || "selection";
    setIsDragging(true);

    if (selectedHandle) {
      setCursor("ew-resize");
      onSeek(selectedHandle === "start" ? selection.start : selection.end);
      return;
    }

    const start = ratioFromEvent(event, canvasRef.current);
    dragStartRef.current = start;
    onSeek(start);
    setSelection({ start, end: null });
  };

  const updateSelection = event => {
    if (!isDragging) {
      setCursor(handleFromEvent(event, canvasRef.current, selection) ? "ew-resize" : "crosshair");
      return;
    }

    const movedPixels = Math.abs(event.clientX - pointerStartXRef.current);
    if (movedPixels >= SELECTION_DRAG_THRESHOLD_PIXELS) {
      hasDraggedRef.current = true;
      if (dragModeRef.current === "selection") updateSectionEnd(event);
      else updateDraggedHandle(event);
    }
  };

  const endSelection = event => {
    if (!isDragging) return;
    if (hasDraggedRef.current) {
      if (dragModeRef.current === "selection") updateSectionEnd(event);
      else updateDraggedHandle(event);
    }
    dragModeRef.current = null;
    dragStartRef.current = null;
    hasDraggedRef.current = false;
    setIsDragging(false);
    setCursor(handleFromEvent(event, canvasRef.current, selection) ? "ew-resize" : "crosshair");
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
      onPointerLeave={() => {
        if (!isDragging) setCursor("crosshair");
      }}
      onPointerUp={endSelection}
      style={{
        cursor,
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
