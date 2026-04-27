let sharedAudioContext;

function getAudioContext() {
  if (!sharedAudioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    sharedAudioContext = new AudioContextClass();
  }
  return sharedAudioContext;
}

export async function decodeAudioFile(file) {
  const arrayBuffer = await file.arrayBuffer();
  return getAudioContext().decodeAudioData(arrayBuffer.slice(0));
}

export function formatTime(seconds = 0) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const wholeSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${wholeSeconds}`;
}

export function formatPreciseTime(seconds = 0) {
  if (!Number.isFinite(seconds)) return "0:00.00";
  const minutes = Math.floor(seconds / 60);
  const remaining = (seconds % 60).toFixed(2).padStart(5, "0");
  return `${minutes}:${remaining}`;
}
