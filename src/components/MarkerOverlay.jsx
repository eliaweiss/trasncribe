import React from "react";

export default function MarkerOverlay({ marks, width }) {
  return (
    <>
      {marks.filter(mark => mark.type !== "loop").map(mark => (
        <div key={mark.id} className="overlay mark-panel" style={{ left: mark.position * width }}>
          <label>{mark.label}</label>
        </div>
      ))}
    </>
  );
}
