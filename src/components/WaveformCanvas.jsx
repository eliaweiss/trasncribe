import React, { forwardRef, useEffect } from "react";

function drawWaveform(canvas, audioBuffer) {
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);

  if (!audioBuffer) return;

  const gradient = context.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "#a875ff");
  gradient.addColorStop(0.45, "#7c5cff");
  gradient.addColorStop(0.65, "#4f7cff");
  gradient.addColorStop(1, "#23d6ff");
  context.fillStyle = gradient;

  const data = audioBuffer.getChannelData(0);
  const middle = height / 2;
  const samplesPerPixel = Math.max(1, Math.floor(data.length / width));
  const minBarHeight = 1;

  for (let x = 0; x < width; x += 1) {
    const start = x * samplesPerPixel;
    let peak = 0;
    for (let i = 0; i < samplesPerPixel; i += 1) {
      const sample = Math.abs(data[start + i] || 0);
      if (sample > peak) peak = sample;
    }

    const amplitude = Math.max(minBarHeight, peak * (height / 2) * 0.96);
    context.fillRect(x, middle - amplitude, 1, amplitude * 2);
  }
}

const WaveformCanvas = forwardRef(function WaveformCanvas({ audioBuffer, height, width }, ref) {
  useEffect(() => {
    if (ref.current) drawWaveform(ref.current, audioBuffer);
  }, [audioBuffer, ref, width]);

  return (
    <canvas
      ref={ref}
      width={width}
      height={height}
      className="overlay"
      id="waveform-data"
      style={{ top: 18, bottom: 28 }}
    />
  );
});

export default WaveformCanvas;
