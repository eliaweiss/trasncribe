import React, { useLayoutEffect, useMemo, useRef } from "react";
import { formatPreciseTime } from "../utils/audioBuffer.js";
import Timeline from "./Timeline.jsx";
import Transport from "./Transport.jsx";
import YouTubePlayer from "./YouTubePlayer.jsx";
import { ExpandIcon, FitViewIcon, MinusIcon, MusicNoteIcon, PlusIcon } from "./Icons.jsx";

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
    onSeek,
    onSetSelection,
    onZoom,
    selection,
    sourceType,
    youtubeVideoId,
    onYouTubePlayerReady,
    zoom,
  } = props;

  const displayRef = useRef(null);
  const previousZoomRef = useRef(zoom);
  const position = duration ? currentTime / duration : 0;
  const width = useMemo(() => Math.max(window.innerWidth * zoom, window.innerWidth), [zoom]);
  const currentTimeLabel = formatPreciseTime(currentTime);
  const durationLabel = formatPreciseTime(duration);

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
    <section className="player-panel panel-card" aria-label="Waveform player">
      <div className="waveform-topbar">
        <div className="track-meta">
          <span className="track-icon" aria-hidden="true">
            <MusicNoteIcon size={14} />
          </span>
          <span className="track-name">{fileName || "Audio File"}</span>
        </div>
        <div className="zoom-controls" aria-label="Waveform zoom">
          <button
            type="button"
            className="zoom-button"
            onClick={() => onZoom(Math.max(1, zoom - 1))}
            aria-label="Zoom out"
          >
            <MinusIcon size={14} />
          </button>
          <span className="zoom-level">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            className="zoom-button"
            onClick={() => onZoom(Math.min(20, zoom + 1))}
            aria-label="Zoom in"
          >
            <PlusIcon size={14} />
          </button>
          <button
            type="button"
            className="zoom-button"
            onClick={() => onZoom(1)}
            aria-label="Fit entire track"
            title="Fit entire track"
          >
            <FitViewIcon size={14} />
          </button>
          <button
            type="button"
            className="zoom-button expand-button"
            onClick={() => document.documentElement.requestFullscreen?.()}
            aria-label="Expand"
          >
            <ExpandIcon size={14} />
          </button>
        </div>
      </div>

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
          positionLabel={currentTimeLabel}
          selection={selection}
          width={width}
        />
      </div>

      <Transport
        currentTimeLabel={currentTimeLabel}
        durationLabel={durationLabel}
        hasSelectionEnd={selection.end != null}
        hasSelectionStart={selection.start != null}
        isPlaying={isPlaying}
        onJumpToFileStart={onJumpToFileStart}
        onJumpToSelectionEnd={onJumpToSelectionEnd}
        onJumpToSelectionStart={onJumpToSelectionStart}
        onPlayPause={onPlayPause}
      />
    </section>
  );
}
