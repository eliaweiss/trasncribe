import React from "react";

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.7,
  xmlns: "http://www.w3.org/2000/svg",
};

export function MusicNoteIcon({ size = 16 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 17V5l11-2v12" />
      <circle cx="6" cy="17" r="3" fill="currentColor" stroke="none" />
      <circle cx="17" cy="15" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ClockIcon({ size = 18 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function PitchWaveIcon({ size = 18 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
      <path d="M3 12h2l2-7 4 14 3-10 2 6 2-3h3" />
    </svg>
  );
}

export function BookmarkIcon({ size = 16, filled = false }) {
  return (
    <svg
      {...baseProps}
      fill={filled ? "currentColor" : "none"}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M6 3h12v18l-6-4-6 4z" />
    </svg>
  );
}

export function LoopIcon({ size = 16 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17 4l3 3-3 3" />
      <path d="M20 7H7a4 4 0 0 0-4 4v1" />
      <path d="M7 20l-3-3 3-3" />
      <path d="M4 17h13a4 4 0 0 0 4-4v-1" />
    </svg>
  );
}

export function ResetIcon({ size = 18 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

export function SettingsIcon({ size = 20 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function UploadIcon({ size = 18 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
      <path d="M12 16V4" />
      <path d="M7 9l5-5 5 5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function YouTubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="12" rx="3" fill="currentColor" />
      <path d="M10 9.5v5l4-2.5z" fill="#0b1024" />
    </svg>
  );
}

export function ExpandIcon({ size = 18 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10V4h6" />
      <path d="M20 14v6h-6" />
      <path d="M14 4h6v6" />
      <path d="M4 14v6h6" />
    </svg>
  );
}

export function FitViewIcon({ size = 18 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

export function PlayIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
    </svg>
  );
}

export function PauseIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
      <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
    </svg>
  );
}

export function MinusIcon({ size = 16 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2.4}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlusIcon({ size = 16 }) {
  return (
    <svg {...baseProps} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2.4}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
