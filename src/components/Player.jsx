import React, { useMemo } from "react";
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
    onSeek,
    onSetSelection,
    onSetTempo,
    onZoom,
    selection,
    selectionMode,
    setSelectionMode,
    sourceType,
    tempo,
    youtubeVideoId,
    onYouTubePlayerReady,
    zoom,
  } = props;

  const position = duration ? currentTime / duration : 0;
  const width = useMemo(() => Math.max(window.innerWidth * zoom, window.innerWidth), [zoom]);

  return (
    <div id="player" className="visible-audio-loaded" style={{ marginLeft: 0 }}>
      <div className="inner-container">
        <div className="btn-group btn-group-sm pull-right">
          <button type="button" className="btn btn-default" onClick={() => onZoom(Math.max(1, zoom - 1))}>-</button>
          <button type="button" className="btn btn-default">Zoom</button>
          <button type="button" className="btn btn-default" onClick={() => onZoom(Math.min(20, zoom + 1))}>+</button>
        </div>
        <h1>{fileName || "Audio File"}</h1>
      </div>

      <div id="display">
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
          selectionMode={selectionMode}
          width={width}
        />
      </div>

      <div id="toolbar" className="clear-group">
        <div className="pull-right">
          <div className="currentTime">{formatPreciseTime(currentTime)}</div>
        </div>
        <Toolbar
          hasSelectionEnd={selection.end != null}
          hasSelectionStart={selection.start != null}
          isPlaying={isPlaying}
          onJumpToFileStart={onJumpToFileStart}
          onJumpToSelectionEnd={onJumpToSelectionEnd}
          onJumpToSelectionStart={onJumpToSelectionStart}
          onPlayPause={onPlayPause}
          onSetTempo={onSetTempo}
          selectionMode={selectionMode}
          setSelectionMode={setSelectionMode}
          tempo={tempo}
        />
      </div>
    </div>
  );
}
