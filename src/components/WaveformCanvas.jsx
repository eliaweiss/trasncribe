import React, { forwardRef, useEffect } from "react";

function drawWaveform(canvas, audioBuffer) {
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);

  if (!audioBuffer) return;

  const waveGradient = context.createLinearGradient(0, 0, width, 0);
  waveGradient.addColorStop(0, "#8057ff");
  waveGradient.addColorStop(0.52, "#5f7cff");
  waveGradient.addColorStop(1, "#18d8ff");
  context.fillStyle = waveGradient;

  const channelCount = Math.min(2, audioBuffer.numberOfChannels || 1);
  const gap = channelCount > 1 ? 10 : 0;
  const channelHeight = (height - gap) / channelCount;

  for (let channel = 0; channel < channelCount; channel += 1) {
    const data = audioBuffer.getChannelData(channel);
    const samplesPerPixel = Math.max(1, Math.floor(data.length / width));
    const topOffset = channel * (channelHeight + gap);
    const middle = topOffset + channelHeight / 2;

    for (let x = 0; x < width; x += 1) {
      const start = x * samplesPerPixel;
      let min = 1;
      let max = -1;
      for (let i = 0; i < samplesPerPixel; i += 1) {
        const sample = data[start + i] || 0;
        if (sample < min) min = sample;
        if (sample > max) max = sample;
      }
      const top = middle + min * (channelHeight / 2);
      const bottom = middle + max * (channelHeight / 2);
      context.fillRect(x, top, 1, Math.max(1, bottom - top));
    }
  }
}

const WaveformCanvas = forwardRef(function WaveformCanvas({ audioBuffer, height, width }, ref) {
  useEffect(() => {
    if (ref.current) drawWaveform(ref.current, audioBuffer);
  }, [audioBuffer, ref, width]);

  return <canvas ref={ref} width={width} height={height} className="overlay" id="waveform-data" style={{ top: 34, bottom: 18 }} />;
});

export default WaveformCanvas;
