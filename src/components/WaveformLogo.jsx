import React, { useId } from "react";

export default function WaveformLogo({ className = "", title }) {
  const gradientId = `waveform-logo-${useId().replaceAll(":", "")}`;
  const titleId = title ? `${gradientId}-title` : undefined;

  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-labelledby={titleId}
      className={`waveform-logo ${className}`.trim()}
      role={title ? "img" : undefined}
      viewBox="0 0 64 36"
    >
      {title && <title id={titleId}>{title}</title>}
      <defs>
        <linearGradient id={gradientId} x1="0" x2="64" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b5cff" />
          <stop offset="100%" stopColor="#23d6ff" />
        </linearGradient>
      </defs>
      <path d="M2 20h7l5-15 8 30 8-24 7 18 6-9h19" stroke={`url(#${gradientId})`} />
    </svg>
  );
}
