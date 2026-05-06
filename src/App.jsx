import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import Player from "./components/Player.jsx";
import SpeedControl from "./components/SpeedControl.jsx";
import PitchControl from "./components/PitchControl.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import { useAudioPlayer } from "./hooks/useAudioPlayer.js";
import { decodeAudioFile } from "./utils/audioBuffer.js";
import { getYouTubeVideoId } from "./utils/youtube.js";

const DEFAULT_SETTINGS = {
  countInEnabled: false,
  marks: [],
  pitchCents: 0,
  selection: { start: 0, end: null },
  tempo: 100,
  zoom: 1,
};
const SETTINGS_STORAGE_PREFIX = "transcribe:source-settings:";

function clampRatio(value, fallback = 0) {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) return fallback;
  return Math.max(0, Math.min(1, numberValue));
}

function normalizeSelection(selection) {
  if (!selection || typeof selection !== "object")
    return DEFAULT_SETTINGS.selection;
  const start = clampRatio(selection.start, 0);
  const end = selection.end == null ? null : clampRatio(selection.end, start);
  return { start: end == null ? start : Math.min(start, end), end };
}

function normalizeMarks(marks) {
  if (!Array.isArray(marks)) return DEFAULT_SETTINGS.marks;

  return marks
    .filter((mark) => mark && typeof mark === "object")
    .map((mark) => {
      if (mark.type === "loop") {
        return {
          id: mark.id || Date.now() + Math.random(),
          type: "loop",
          position: clampRatio(mark.position, 0),
          end: clampRatio(mark.end, mark.position || 0),
          label: "Loop",
        };
      }

      return {
        id: mark.id || Date.now() + Math.random(),
        type: "mark",
        position: clampRatio(mark.position, 0),
        time: Math.max(0, Number(mark.time) || 0),
        label: "Mark",
      };
    });
}

function normalizeSettings(settings) {
  if (!settings || typeof settings !== "object") return DEFAULT_SETTINGS;

  return {
    countInEnabled: Boolean(settings.countInEnabled),
    marks: normalizeMarks(settings.marks),
    pitchCents: Math.max(
      -2400,
      Math.min(2400, Math.round(Number(settings.pitchCents) || 0))
    ),
    selection: normalizeSelection(settings.selection),
    tempo: Math.max(25, Math.min(200, Number(settings.tempo) || 100)),
    zoom: Math.max(0.1, Math.min(20, Number(settings.zoom) || 1)),
  };
}

function getStoredSettings(sourceKey) {
  try {
    const rawSettings = window.localStorage.getItem(
      `${SETTINGS_STORAGE_PREFIX}${sourceKey}`
    );
    return normalizeSettings(rawSettings ? JSON.parse(rawSettings) : null);
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function saveStoredSettings(sourceKey, settings) {
  try {
    window.localStorage.setItem(
      `${SETTINGS_STORAGE_PREFIX}${sourceKey}`,
      JSON.stringify({
        ...normalizeSettings(settings),
        version: 1,
      })
    );
  } catch {
    // Storage can fail in private mode or when quota is exhausted.
  }
}

function getFileSourceKey(file) {
  return `file:${file.name}:${file.size}:${file.lastModified}`;
}

function getYouTubeSourceKey(videoId) {
  return `youtube:${videoId}`;
}

export default function App() {
  const fileInputRef = useRef(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: null });
  const [marks, setMarks] = useState([]);
  const [sourceSettingsKey, setSourceSettingsKey] = useState("");
  const [zoom, setZoom] = useState(1);
  const player = useAudioPlayer();

  const isLoaded = Boolean(player.sourceUrl);

  const applySettings = useCallback(
    (settings) => {
      const normalizedSettings = normalizeSettings(settings);
      setMarks(normalizedSettings.marks);
      setSelection(normalizedSettings.selection);
      setZoom(normalizedSettings.zoom);
      player.setTempo(normalizedSettings.tempo);
      player.setPitchCents(normalizedSettings.pitchCents);
      player.setCountInEnabled(normalizedSettings.countInEnabled);
    },
    [player]
  );

  const chooseAudio = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const loadFile = useCallback(
    async (file) => {
      if (!file) return;

      const decoded = await decodeAudioFile(file);
      const url = URL.createObjectURL(file);
      const nextSourceSettingsKey = getFileSourceKey(file);
      player.load(url, decoded);
      setAudioBuffer(decoded);
      setFileName(file.name.replace(/\.[^/.]+$/, ""));
      setSourceSettingsKey(nextSourceSettingsKey);
      applySettings(getStoredSettings(nextSourceSettingsKey));
    },
    [applySettings, player]
  );

  const loadYouTube = useCallback(
    (url) => {
      const videoId = getYouTubeVideoId(url);
      if (!videoId) {
        window.alert("Please paste a valid YouTube URL.");
        return;
      }

      player.loadYouTube(videoId);
      setAudioBuffer(null);
      setFileName("YouTube Video");
      setSourceSettingsKey(getYouTubeSourceKey(videoId));
      applySettings(getStoredSettings(getYouTubeSourceKey(videoId)));
    },
    [applySettings, player]
  );

  const chooseYouTube = useCallback(() => {
    const url = window.prompt("Paste a YouTube URL");
    if (url) loadYouTube(url);
  }, [loadYouTube]);

  const onFileInput = useCallback(
    (event) => {
      loadFile(event.target.files?.[0]);
      event.target.value = "";
    },
    [loadFile]
  );

  const addMarker = useCallback(() => {
    if (!isLoaded || !player.duration) return;
    setMarks((existing) =>
      existing.concat({
        id: Date.now() + Math.random(),
        type: "mark",
        position: player.currentTime / player.duration,
        time: player.currentTime,
        label: "Mark",
      })
    );
  }, [isLoaded, player.currentTime, player.duration]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key.toLowerCase() === "m") addMarker();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [addMarker]);

  const removeMarker = useCallback((id) => {
    setMarks((existing) => existing.filter((mark) => mark.id !== id));
  }, []);

  const saveLoopSelection = useCallback(() => {
    if (selection.end == null) return;
    setMarks((existing) =>
      existing.concat({
        id: Date.now() + Math.random(),
        type: "loop",
        position: selection.start,
        end: selection.end,
        label: "Loop",
      })
    );
  }, [selection]);

  const selectLoop = useCallback((loop) => {
    setSelection({ start: loop.position, end: loop.end });
  }, []);

  const selectMark = useCallback(
    (mark) => {
      player.seek(mark.time);
      setSelection((prev) => ({ ...prev, start: mark.position }));
    },
    [player]
  );

  const jumpToFileStart = useCallback(() => {
    if (!isLoaded) return;
    player.seek(0);
  }, [isLoaded, player]);

  const jumpToRatio = useCallback(
    (ratio) => {
      if (!isLoaded || !player.duration) return;
      player.seek(player.duration * ratio);
    },
    [isLoaded, player]
  );

  const jumpToSelectionStart = useCallback(() => {
    if (selection.start == null) return;
    jumpToRatio(selection.start);
  }, [jumpToRatio, selection.start]);

  const jumpToSelectionEnd = useCallback(() => {
    if (selection.end == null) return;
    jumpToRatio(selection.end);
  }, [jumpToRatio, selection.end]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
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

  useEffect(() => {
    if (!isLoaded || !sourceSettingsKey) return;

    saveStoredSettings(sourceSettingsKey, {
      countInEnabled: player.countInEnabled,
      marks,
      pitchCents: player.pitchCents,
      selection,
      tempo: player.tempo,
      zoom,
    });
  }, [
    isLoaded,
    marks,
    player.countInEnabled,
    player.pitchCents,
    player.tempo,
    selection,
    sourceSettingsKey,
    zoom,
  ]);

  const sortedMarks = useMemo(
    () => marks.slice().sort((a, b) => a.position - b.position),
    [marks]
  );

  return (
    <div
      className={`page-wrap ${isLoaded ? "audio-loaded" : "audio-not-loaded"}`}
    >
      <Header onChooseAudio={chooseAudio} onChooseYouTube={chooseYouTube} />
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="audio/*"
        onChange={onFileInput}
      />

      {!isLoaded && (
        <Landing onChooseAudio={chooseAudio} onLoadYouTube={loadYouTube} />
      )}

      {isLoaded && (
        <main className="app-stage" aria-label="Muse Transcribe">
          <div className="transcriber-surface">
            <Player
              audioBuffer={audioBuffer}
              countInBeat={player.countInBeat}
              countInEnabled={player.countInEnabled}
              currentTime={player.currentTime}
              duration={player.duration}
              fileName={fileName}
              isPlaying={player.isPlaying}
              marks={sortedMarks}
              onJumpToFileStart={jumpToFileStart}
              onJumpToSelectionEnd={jumpToSelectionEnd}
              onJumpToSelectionStart={jumpToSelectionStart}
              onPlayPause={player.playPause}
              onSeek={player.seek}
              onSetSelection={setSelection}
              onToggleCountIn={player.toggleCountIn}
              onYouTubePlayerReady={player.attachYouTubePlayer}
              onZoom={setZoom}
              selection={selection}
              sourceType={player.sourceType}
              youtubeVideoId={player.youtubeVideoId}
              zoom={zoom}
            />
            <div className="controls-row">
              <SpeedControl tempo={player.tempo} onSetTempo={player.setTempo} />
              <PitchControl
                pitchCents={player.pitchCents}
                onSetPitchCents={player.setPitchCents}
                sourceType={player.sourceType}
              />
            </div>
            <ControlPanel
              duration={player.duration}
              marks={sortedMarks}
              onAddLoop={saveLoopSelection}
              onAddMark={addMarker}
              onRemoveMark={removeMarker}
              onSelectLoop={selectLoop}
              onSelectMark={selectMark}
            />
          </div>
        </main>
      )}
    </div>
  );
}
