import React, { useLayoutEffect, useMemo, useRef } from "react";
import { formatPreciseTime } from "../utils/audioBuffer.js";
import Timeline from "./Timeline.jsx";
import Toolbar from "./Toolbar.jsx";
import YouTubePlayer from "./YouTubePlayer.jsx";

export default function Player(props) {
  const {
    audioBuffer,
    currentTime,
    duration,
    fileName,
    isPlaying,
    marks,
    onJumpToFileStart,
    onJumpToSelectionEnd,
    onJumpToSelectionStart,
    onPlayPause,
    onSetPitchCents,
    onSeek,
    onSetSelection,
    onSetTempo,
    onZoom,
    selection,
    sourceType,
    pitchCents,
    tempo,
    youtubeVideoId,
    onYouTubePlayerReady,
    zoom,
  } = props;

  const displayRef = useRef(null);
  const previousZoomRef = useRef(zoom);
  const position = duration ? currentTime / duration : 0;
  const width = useMemo(() => Math.max(window.innerWidth * zoom, window.innerWidth), [zoom]);
  const currentTimeLabel = formatPreciseTime(currentTime);

  useLayoutEffect(() => {
    const display = displayRef.current;
    if (!display) return;

    const cursorX = position * width;
    const visibleStart = display.scrollLeft;
    const visibleEnd = visibleStart + display.clientWidth;
    const zoomChanged = previousZoomRef.current !== zoom;
    const padding = Math.min(120, display.clientWidth / 4);

    if (zoomChanged) {
      display.scrollLeft = Math.max(0, cursorX - display.clientWidth / 2);
      previousZoomRef.current = zoom;
      return;
    }

    if (cursorX < visibleStart + padding) {
      display.scrollLeft = Math.max(0, cursorX - padding);
    } else if (cursorX > visibleEnd - padding) {
      display.scrollLeft = cursorX - display.clientWidth + padding;
    }
  }, [position, width, zoom]);

  return (
    <div id="player" className="player-panel visible-audio-loaded">
      <div className="track-title">{fileName || "Audio File"}</div>

      <div id="display" className="waveform-display" ref={displayRef}>
        {sourceType === "youtube" && youtubeVideoId && (
          <YouTubePlayer onPlayerReady={onYouTubePlayerReady} videoId={youtubeVideoId} />
        )}
        <Timeline
          audioBuffer={audioBuffer}
          duration={duration}
          marks={marks}
          onSeek={ratio => onSeek(ratio * duration)}
          onSetSelection={onSetSelection}
          position={position}
          selection={selection}
          width={width}
        />
      </div>

      <div className="zoom-controls" aria-label="Waveform zoom">
        <button type="button" className="icon-button" onClick={() => onZoom(Math.min(20, zoom + 1))} aria-label="Zoom in">
          +
        </button>
        <button type="button" className="icon-button" onClick={() => onZoom(Math.max(1, zoom - 1))} aria-label="Zoom out">
          -
        </button>
      </div>

      <div id="toolbar" className="control-deck">
        <Toolbar
          hasSelectionEnd={selection.end != null}
          hasSelectionStart={selection.start != null}
          isPlaying={isPlaying}
          currentTimeLabel={currentTimeLabel}
          onJumpToFileStart={onJumpToFileStart}
          onJumpToSelectionEnd={onJumpToSelectionEnd}
          onJumpToSelectionStart={onJumpToSelectionStart}
          onPlayPause={onPlayPause}
          onSetPitchCents={onSetPitchCents}
          onSetTempo={onSetTempo}
          pitchCents={pitchCents}
          sourceType={sourceType}
          tempo={tempo}
        />
      </div>
    </div>
  );
}
