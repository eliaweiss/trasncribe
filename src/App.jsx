import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import Player from "./components/Player.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import { useAudioPlayer } from "./hooks/useAudioPlayer.js";
import { decodeAudioFile } from "./utils/audioBuffer.js";
import { getYouTubeVideoId } from "./utils/youtube.js";

export default function App() {
  const fileInputRef = useRef(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: null });
  const [marks, setMarks] = useState([]);
  const [zoom, setZoom] = useState(1);
  const player = useAudioPlayer();

  const isLoaded = Boolean(player.sourceUrl);

  const chooseAudio = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const loadFile = useCallback(async file => {
    if (!file) return;

    const decoded = await decodeAudioFile(file);
    const url = URL.createObjectURL(file);
    player.load(url, decoded);
    setAudioBuffer(decoded);
    setFileName(file.name.replace(/\.[^/.]+$/, ""));
    setSelection({ start: 0, end: null });
    setMarks([]);
  }, [player]);

  const loadYouTube = useCallback(url => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) {
      window.alert("Please paste a valid YouTube URL.");
      return;
    }

    player.loadYouTube(videoId);
    setAudioBuffer(null);
    setFileName("YouTube Video");
    setSelection({ start: 0, end: null });
    setMarks([]);
  }, [player]);

  const chooseYouTube = useCallback(() => {
    const url = window.prompt("Paste a YouTube URL");
    if (url) loadYouTube(url);
  }, [loadYouTube]);

  const onFileInput = useCallback(event => {
    loadFile(event.target.files?.[0]);
    event.target.value = "";
  }, [loadFile]);

  const addMarker = useCallback(() => {
    if (!isLoaded || !player.duration) return;
    setMarks(existing => existing.concat({
      id: Date.now() + Math.random(),
      type: "mark",
      position: player.currentTime / player.duration,
      time: player.currentTime,
      label: "Mark",
    }));
  }, [isLoaded, player.currentTime, player.duration]);

  useEffect(() => {
    const onKeyDown = event => {
      const target = event.target;
      const isTyping = target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key.toLowerCase() === "m") addMarker();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [addMarker]);

  const removeMarker = useCallback(id => {
    setMarks(existing => existing.filter(mark => mark.id !== id));
  }, []);

  const saveLoopSelection = useCallback(() => {
    if (selection.end == null) return;
    setMarks(existing => existing.concat({
      id: Date.now() + Math.random(),
      type: "loop",
      position: selection.start,
      end: selection.end,
      label: "Loop",
    }));
  }, [selection]);

  const selectLoop = useCallback(loop => {
    setSelection({ start: loop.position, end: loop.end });
  }, []);

  const selectMark = useCallback(mark => {
    player.seek(mark.time);
  }, [player]);

  const jumpToFileStart = useCallback(() => {
    if (!isLoaded) return;
    player.seek(0);
  }, [isLoaded, player]);

  const jumpToRatio = useCallback(ratio => {
    if (!isLoaded || !player.duration) return;
    player.seek(player.duration * ratio);
  }, [isLoaded, player]);

  const jumpToSelectionStart = useCallback(() => {
    if (selection.start == null) return;
    jumpToRatio(selection.start);
  }, [jumpToRatio, selection.start]);

  const jumpToSelectionEnd = useCallback(() => {
    if (selection.end == null) return;
    jumpToRatio(selection.end);
  }, [jumpToRatio, selection.end]);

  useEffect(() => {
    const onKeyDown = event => {
      const target = event.target;
      const isTyping = target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

      const key = event.key.toLowerCase();
      if (key === "f") {
        event.preventDefault();
        jumpToFileStart();
      }
      if (key === "s") {
        event.preventDefault();
        jumpToSelectionStart();
      }
      if (key === "e") {
        event.preventDefault();
        jumpToSelectionEnd();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [jumpToFileStart, jumpToSelectionEnd, jumpToSelectionStart]);

  useEffect(() => {
    if (!player.duration || selection.end == null) {
      player.setLoopRange(null);
      return;
    }

    const start = selection.start * player.duration;
    const end = selection.end * player.duration;
    player.setLoopRange(end > start ? { start, end } : null);
  }, [player, selection.end, selection.start]);

  const sortedMarks = useMemo(() => marks.slice().sort((a, b) => a.position - b.position), [marks]);

  return (
    <div className={`page-wrap ${isLoaded ? "audio-loaded" : "audio-not-loaded"}`}>
      <Header onChooseAudio={chooseAudio} onChooseYouTube={chooseYouTube} />
      <input ref={fileInputRef} type="file" className="hidden" accept="audio/*" onChange={onFileInput} />

      {!isLoaded && <Landing onChooseAudio={chooseAudio} onLoadYouTube={loadYouTube} />}

      {isLoaded && (
        <>
          <Player
            audioBuffer={audioBuffer}
            currentTime={player.currentTime}
            duration={player.duration}
            fileName={fileName}
            isPlaying={player.isPlaying}
            marks={sortedMarks}
            onJumpToFileStart={jumpToFileStart}
            onJumpToSelectionEnd={jumpToSelectionEnd}
            onJumpToSelectionStart={jumpToSelectionStart}
            onPlayPause={player.playPause}
            onSetPitchCents={player.setPitchCents}
            onSeek={player.seek}
            onSetSelection={setSelection}
            onSetTempo={player.setTempo}
            onYouTubePlayerReady={player.attachYouTubePlayer}
            onZoom={setZoom}
            selection={selection}
            sourceType={player.sourceType}
            pitchCents={player.pitchCents}
            tempo={player.tempo}
            youtubeVideoId={player.youtubeVideoId}
            zoom={zoom}
          />
          <ControlPanel
            duration={player.duration}
            marks={sortedMarks}
            onAddLoop={saveLoopSelection}
            onAddMark={addMarker}
            onRemoveMark={removeMarker}
            onSelectLoop={selectLoop}
            onSelectMark={selectMark}
          />
        </>
      )}
    </div>
  );
}
