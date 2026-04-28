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
              background: "linear-gradient(135deg, #8b5cff, #23d6ff)",
              borderRadius: "2px",
              boxShadow: "0 0 12px rgba(35, 214, 255, 0.45)",
              height: 14,
              left: 2,
              position: "absolute",
              top: 10,
              width: 18,
            }}
          />
          <div
            style={{
              background: "#23d6ff",
              bottom: 0,
              boxShadow: "0 0 16px rgba(35, 214, 255, 0.55)",
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
