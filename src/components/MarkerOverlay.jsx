import React from "react";

export default function MarkerOverlay({ marks, width, height = "100%" }) {
  return (
    <>
      {marks.filter(mark => mark.type !== "loop").map(mark => (
        <div
          key={mark.id}
          aria-label={`${mark.label} at marker position`}
          className="overlay mark-panel"
          style={{
            height,
            left: mark.position * width,
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            transform: "translateX(-1px)",
            width: 0,
            zIndex: 40,
          }}
        >
          <div className="mark-flag" />
          <div className="mark-line" />
        </div>
      ))}
    </>
  );
}
