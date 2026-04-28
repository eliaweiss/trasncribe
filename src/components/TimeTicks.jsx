import React from "react";
import { formatTime } from "../utils/audioBuffer.js";

export default function TimeTicks({ duration, width }) {
  if (!duration) return null;

  const targetTickCount = Math.max(5, Math.floor(width / 150));
  const rawStep = duration / targetTickCount;
  const steps = [2, 5, 10, 15, 30, 60, 90, 120];
  const step = steps.find(candidate => candidate >= rawStep) || 180;
  const ticks = [];
  for (let time = 0; time <= duration; time += step) {
    ticks.push(time);
  }

  return (
    <div className="time-ticks" style={{ width }}>
      {ticks.map(time => (
        <div
          key={time}
          className="time-tick"
          style={{ left: `${(time / duration) * width}px` }}
        >
          <span className="time-tick-label">{formatTime(time)}</span>
        </div>
      ))}
    </div>
  );
}
