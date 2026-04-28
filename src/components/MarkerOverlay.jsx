import React from "react";

export default function MarkerOverlay({ marks, width }) {
  return (
    <>
      {marks.filter(mark => mark.type !== "loop").map(mark => (
        <div
          key={mark.id}
          aria-label={`${mark.label} at marker position`}
          className="overlay mark-panel"
          style={{
            bottom: 18,
            left: mark.position * width,
            pointerEvents: "none",
            top: 0,
            transform: "translateX(-1px)",
            width: 0,
            zIndex: 40,
          }}
        >
          <div
            style={{
              background: "#f59e0b",
              borderRadius: "2px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.25)",
              height: 14,
              left: 2,
              position: "absolute",
              top: 10,
              width: 18,
            }}
          />
          <div
            style={{
              background: "#f59e0b",
              bottom: 0,
              boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.35)",
              position: "absolute",
              top: 0,
              width: 2,
            }}
          />
        </div>
      ))}
    </>
  );
}
