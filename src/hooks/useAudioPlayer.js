import { useCallback, useEffect, useRef, useState } from "react";
import { PitchShifter } from "soundtouchjs";
import { getAudioContext } from "../utils/audioBuffer.js";

const SOUND_TOUCH_BUFFER_SIZE = 4096;
// SoundTouch consumes input samples ahead of what the audio hardware is actually playing.
// This constant compensates for that processing latency so the position line stays in sync.
const SOUND_TOUCH_LATENCY_S = 1.0;
const COUNT_IN_BEATS = 4;
const COUNT_IN_INTERVAL_MS = 1000;

export function useAudioPlayer() {
  const audioRef = useRef(new Audio());
  const gainNodeRef = useRef(null);
  const loopRangeRef = useRef(null);
  const pitchShifterRef = useRef(null);
  const pitchShifterConnectedRef = useRef(false);
  const youtubePlayerRef = useRef(null);
  const countInActiveRef = useRef(false);
  const countInCancelRef = useRef(false);
  const countInEnabledRef = useRef(false);
  const [sourceUrl, setSourceUrl] = useState(null);
  const [sourceType, setSourceType] = useState(null);
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pitchCents, setPitchCentsState] = useState(0);
  const [tempo, setTempoState] = useState(100);
  const [countInEnabled, setCountInEnabled] = useState(() => {
    const stored = window.localStorage.getItem("transcribe:countInEnabled") === "1";
    countInEnabledRef.current = stored;
    return stored;
  });
  const [countInBeat, setCountInBeat] = useState(0);

  const disconnectPitchShifter = useCallback(() => {
    const shifter = pitchShifterRef.current;
    if (!shifter || !pitchShifterConnectedRef.current) return;
    shifter.disconnect();
    pitchShifterConnectedRef.current = false;
  }, []);

  const connectPitchShifter = useCallback(async () => {
    const shifter = pitchShifterRef.current;
    if (!shifter || pitchShifterConnectedRef.current) return;

    const audioContext = getAudioContext();
    if (!gainNodeRef.current) {
      gainNodeRef.current = audioContext.createGain();
      gainNodeRef.current.gain.value = 1;
      gainNodeRef.current.connect(audioContext.destination);
    }

    await audioContext.resume();
    shifter.connect(gainNodeRef.current);
    pitchShifterConnectedRef.current = true;
  }, []);

  const createPitchShifter = useCallback((audioBuffer, startTime = 0) => {
    disconnectPitchShifter();

    const shifter = new PitchShifter(getAudioContext(), audioBuffer, SOUND_TOUCH_BUFFER_SIZE, () => {
      disconnectPitchShifter();
      setCurrentTime(audioBuffer.duration);
      setIsPlaying(false);
    });

    shifter.tempo = tempo / 100;
    shifter.pitchSemitones = pitchCents / 100;
    shifter.percentagePlayed = audioBuffer.duration ? startTime / audioBuffer.duration : 0;
    shifter.on("play", detail => {
      const nextTime = detail.timePlayed || 0;
      const loopRange = loopRangeRef.current;

      if (loopRange && pitchShifterConnectedRef.current && nextTime >= loopRange.end) {
        shifter.percentagePlayed = loopRange.start / audioBuffer.duration;
        setCurrentTime(loopRange.start);
        setDuration(audioBuffer.duration);
        return;
      }

      setCurrentTime(Math.min(nextTime + SOUND_TOUCH_LATENCY_S, audioBuffer.duration));
      setDuration(audioBuffer.duration);
    });

    pitchShifterRef.current = shifter;
    pitchShifterConnectedRef.current = false;
    setDuration(audioBuffer.duration);
    setCurrentTime(Math.min(startTime, audioBuffer.duration));
  }, [disconnectPitchShifter, pitchCents, tempo]);

  const syncTime = useCallback(() => {
    const audio = audioRef.current;
    const audioDuration = audio.duration || 0;
    const loopRange = loopRangeRef.current;

    if (loopRange && !audio.paused && audio.currentTime >= loopRange.end) {
      audio.currentTime = loopRange.start;
      setCurrentTime(loopRange.start);
      setDuration(audioDuration);
      return;
    }

    setCurrentTime(audio.currentTime || 0);
    setDuration(audioDuration);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const onEnded = () => setIsPlaying(false);
    audio.volume = 1;
    audio.addEventListener("timeupdate", syncTime);
    audio.addEventListener("loadedmetadata", syncTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.pause();
      disconnectPitchShifter();
      audio.removeEventListener("timeupdate", syncTime);
      audio.removeEventListener("loadedmetadata", syncTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [disconnectPitchShifter, syncTime]);

  const setTempo = useCallback(nextTempo => {
    const clampedTempo = Math.max(25, Math.min(200, Number(nextTempo) || 100));
    setTempoState(clampedTempo);
    audioRef.current.playbackRate = clampedTempo / 100;
    if (pitchShifterRef.current) pitchShifterRef.current.tempo = clampedTempo / 100;
    youtubePlayerRef.current?.setPlaybackRate?.(clampedTempo / 100);
  }, []);

  const setPitchCents = useCallback(nextPitchCents => {
    const clampedPitchCents = Math.max(-2400, Math.min(2400, Math.round(Number(nextPitchCents) || 0)));
    setPitchCentsState(clampedPitchCents);
    if (pitchShifterRef.current) pitchShifterRef.current.pitchSemitones = clampedPitchCents / 100;
  }, []);

  const setLoopRange = useCallback(range => {
    loopRangeRef.current = range;
  }, []);

  const toggleCountIn = useCallback(() => {
    setCountInEnabled(prev => {
      const next = !prev;
      countInEnabledRef.current = next;
      window.localStorage.setItem("transcribe:countInEnabled", next ? "1" : "0");
      return next;
    });
  }, []);

  const load = useCallback((url, audioBuffer = null) => {
    const audio = audioRef.current;
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    youtubePlayerRef.current?.pauseVideo?.();
    disconnectPitchShifter();
    audio.pause();
    if (audioBuffer) {
      audio.removeAttribute("src");
      createPitchShifter(audioBuffer);
    } else {
      audio.src = url;
      audio.playbackRate = tempo / 100;
    }
    audio.currentTime = 0;
    audio.volume = 1;
    setSourceUrl(url);
    setSourceType("audio");
    setYoutubeVideoId("");
    loopRangeRef.current = null;
    setCurrentTime(0);
    setDuration(audioBuffer?.duration || 0);
    setIsPlaying(false);
  }, [createPitchShifter, disconnectPitchShifter, sourceUrl, tempo]);

  const loadYouTube = useCallback(videoId => {
    const audio = audioRef.current;
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    disconnectPitchShifter();
    audio.pause();
    audio.removeAttribute("src");
    youtubePlayerRef.current?.pauseVideo?.();
    setSourceUrl(`youtube:${videoId}`);
    setSourceType("youtube");
    setYoutubeVideoId(videoId);
    loopRangeRef.current = null;
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [disconnectPitchShifter, sourceUrl]);

  const attachYouTubePlayer = useCallback(player => {
    youtubePlayerRef.current = player;
    player.setPlaybackRate?.(tempo / 100);
    setDuration(player.getDuration?.() || 0);
    setCurrentTime(player.getCurrentTime?.() || 0);
  }, [tempo]);

  const playPause = useCallback(async () => {
    // Cancel an in-progress count-in
    if (countInActiveRef.current) {
      countInCancelRef.current = true;
      countInActiveRef.current = false;
      setCountInBeat(0);
      return;
    }

    const loopRange = loopRangeRef.current;

    // Determine whether this action is a pause (vs. starting playback)
    let isPausing = false;
    if (sourceType === "youtube") {
      const ytPlayer = youtubePlayerRef.current;
      if (!ytPlayer) return;
      isPausing = ytPlayer.getPlayerState?.() === window.YT?.PlayerState?.PLAYING;
    } else {
      const shifter = pitchShifterRef.current;
      if (shifter) {
        isPausing = pitchShifterConnectedRef.current;
      } else {
        const audio = audioRef.current;
        if (!audio.src) return;
        isPausing = !audio.paused;
      }
    }

    // Pause immediately — no count-in on pause
    if (isPausing) {
      if (sourceType === "youtube") {
        const ytPlayer = youtubePlayerRef.current;
        ytPlayer.pauseVideo();
        setCurrentTime(ytPlayer.getCurrentTime?.() || 0);
        setIsPlaying(false);
      } else {
        const shifter = pitchShifterRef.current;
        if (shifter) {
          disconnectPitchShifter();
          setCurrentTime(shifter.timePlayed || 0);
          setIsPlaying(false);
        } else {
          const audio = audioRef.current;
          audio.pause();
          setCurrentTime(audio.currentTime || 0);
          setIsPlaying(false);
        }
      }
      return;
    }

    // Run count-in before starting playback
    if (countInEnabledRef.current) {
      countInActiveRef.current = true;
      countInCancelRef.current = false;

      const audioCtx = getAudioContext();
      await audioCtx.resume();

      for (let i = 0; i < COUNT_IN_BEATS; i++) {
        if (countInCancelRef.current) {
          countInActiveRef.current = false;
          setCountInBeat(0);
          return;
        }

        setCountInBeat(i + 1);

        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.connect(g);
        g.connect(audioCtx.destination);
        osc.type = "sine";
        osc.frequency.value = i === 0 ? 1000 : 750;
        g.gain.setValueAtTime(0.4, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);

        await new Promise(resolve => setTimeout(resolve, COUNT_IN_INTERVAL_MS));
      }

      countInActiveRef.current = false;
      setCountInBeat(0);
      if (countInCancelRef.current) return;
    }

    // Start playback
    if (sourceType === "youtube") {
      const ytPlayer = youtubePlayerRef.current;
      if (!ytPlayer) return;
      const currentVideoTime = ytPlayer.getCurrentTime?.() || 0;
      if (loopRange && (currentVideoTime < loopRange.start || currentVideoTime >= loopRange.end)) {
        ytPlayer.seekTo(loopRange.start, true);
        setCurrentTime(loopRange.start);
      }
      ytPlayer.setPlaybackRate?.(tempo / 100);
      ytPlayer.playVideo();
      setIsPlaying(true);
      return;
    }

    const audio = audioRef.current;
    const shifter = pitchShifterRef.current;

    if (shifter) {
      if (loopRange && (shifter.timePlayed < loopRange.start || shifter.timePlayed >= loopRange.end)) {
        shifter.percentagePlayed = loopRange.start / duration;
        setCurrentTime(loopRange.start);
      }
      await connectPitchShifter();
      setIsPlaying(true);
      return;
    }

    if (!audio.src) return;
    if (loopRange && (audio.currentTime < loopRange.start || audio.currentTime >= loopRange.end)) {
      audio.currentTime = loopRange.start;
      setCurrentTime(loopRange.start);
    }
    audio.volume = 1;
    audio.playbackRate = tempo / 100;
    await audio.play();
    setIsPlaying(true);
  }, [connectPitchShifter, disconnectPitchShifter, duration, sourceType, tempo]);

  const playFromStart = useCallback(async () => {
    if (sourceType === "youtube") {
      const player = youtubePlayerRef.current;
      if (!player) return;
      player.seekTo(0, true);
      player.setPlaybackRate?.(tempo / 100);
      player.playVideo();
      setCurrentTime(0);
      setIsPlaying(true);
      return;
    }

    const audio = audioRef.current;
    const shifter = pitchShifterRef.current;

    if (shifter) {
      shifter.percentagePlayed = 0;
      await connectPitchShifter();
      setCurrentTime(0);
      setIsPlaying(true);
      return;
    }

    if (!audio.src) return;
    audio.currentTime = 0;
    audio.volume = 1;
    audio.playbackRate = tempo / 100;
    await audio.play();
    setCurrentTime(0);
    setIsPlaying(true);
  }, [connectPitchShifter, sourceType, tempo]);

  const seek = useCallback(seconds => {
    if (sourceType === "youtube") {
      const player = youtubePlayerRef.current;
      if (!player || !Number.isFinite(seconds)) return;
      const max = player.getDuration?.() || seconds;
      const nextTime = Math.max(0, Math.min(seconds, max));
      player.seekTo(nextTime, true);
      setCurrentTime(nextTime);
      setDuration(max);
      return;
    }

    const audio = audioRef.current;
    if (!Number.isFinite(seconds)) return;
    const shifter = pitchShifterRef.current;

    if (shifter) {
      const max = duration || shifter.duration || seconds;
      const nextTime = Math.max(0, Math.min(seconds, max));
      shifter.percentagePlayed = max ? nextTime / max : 0;
      setCurrentTime(nextTime);
      setDuration(max);
      return;
    }

    const max = Number.isFinite(audio.duration) ? audio.duration : seconds;
    audio.currentTime = Math.max(0, Math.min(seconds, max));
    setCurrentTime(audio.currentTime || 0);
  }, [duration, sourceType]);

  useEffect(() => {
    if (sourceType !== "youtube") return undefined;

    const timer = window.setInterval(() => {
      const player = youtubePlayerRef.current;
      if (!player) return;
      const state = player.getPlayerState?.();
      const nextDuration = player.getDuration?.() || 0;
      const nextTime = player.getCurrentTime?.() || 0;
      const loopRange = loopRangeRef.current;

      if (loopRange && state === window.YT?.PlayerState?.PLAYING && nextTime >= loopRange.end) {
        player.seekTo(loopRange.start, true);
        setCurrentTime(loopRange.start);
        setDuration(nextDuration);
        setIsPlaying(true);
        return;
      }

      setCurrentTime(nextTime);
      setDuration(nextDuration);
      setIsPlaying(state === window.YT?.PlayerState?.PLAYING);
    }, 250);

    return () => window.clearInterval(timer);
  }, [sourceType]);

  useEffect(() => {
    const onKeyDown = event => {
      const target = event.target;
      const isTyping = target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if (isTyping) return;

      if (event.code === "Space") {
        event.preventDefault();
        playPause();
      }

      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        playFromStart();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        seek(currentTime - 5);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        seek(currentTime + 5);
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        seek(currentTime + 10);
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        seek(currentTime - 10);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentTime, playFromStart, playPause, seek]);

  return {
    currentTime,
    duration,
    attachYouTubePlayer,
    countInBeat,
    countInEnabled,
    isPlaying,
    load,
    loadYouTube,
    playFromStart,
    playPause,
    seek,
    setPitchCents,
    setLoopRange,
    setTempo,
    sourceUrl,
    sourceType,
    pitchCents,
    tempo,
    toggleCountIn,
    youtubeVideoId,
  };
}
