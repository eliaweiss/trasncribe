import React from "react";
import { formatTime } from "../utils/audioBuffer.js";

export default function TimeTicks({ duration, width }) {
  const ticks = [];
  const step = duration > 300 ? 10 : 2;
  for (let time = step; time <= duration; time += step) {
    ticks.push(time);
  }

  return (
    <div className="overlay bottom" id="time-panel" style={{ width }}>
      {ticks.map(time => (
        <div key={time} className="time-tick" style={{ left: `${(time / duration) * width}px` }}>
          <label>{formatTime(time)}</label>
        </div>
      ))}
    </div>
  );
}
