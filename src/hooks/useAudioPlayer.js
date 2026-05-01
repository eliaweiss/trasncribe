import { useCallback, useEffect, useRef, useState } from "react";
import { PitchShifter } from "soundtouchjs";
import { getAudioContext } from "../utils/audioBuffer.js";

const SOUND_TOUCH_BUFFER_SIZE = 4096;

export function useAudioPlayer() {
  const audioRef = useRef(new Audio());
  const gainNodeRef = useRef(null);
  const loopRangeRef = useRef(null);
  const pitchShifterRef = useRef(null);
  const pitchShifterConnectedRef = useRef(false);
  const youtubePlayerRef = useRef(null);
  const [sourceUrl, setSourceUrl] = useState(null);
  const [sourceType, setSourceType] = useState(null);
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pitchCents, setPitchCentsState] = useState(0);
  const [tempo, setTempoState] = useState(100);

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

      setCurrentTime(Math.min(nextTime, audioBuffer.duration));
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
    const loopRange = loopRangeRef.current;

    if (sourceType === "youtube") {
      const player = youtubePlayerRef.current;
      if (!player) return;
      const playerState = player.getPlayerState?.();
      if (playerState === window.YT?.PlayerState?.PLAYING) {
        player.pauseVideo();
        setCurrentTime(player.getCurrentTime?.() || 0);
        setIsPlaying(false);
        return;
      }
      const currentVideoTime = player.getCurrentTime?.() || 0;
      if (loopRange && (currentVideoTime < loopRange.start || currentVideoTime >= loopRange.end)) {
        player.seekTo(loopRange.start, true);
        setCurrentTime(loopRange.start);
      }
      player.setPlaybackRate?.(tempo / 100);
      player.playVideo();
      setIsPlaying(true);
      return;
    }

    const audio = audioRef.current;
    const shifter = pitchShifterRef.current;

    if (shifter) {
      if (pitchShifterConnectedRef.current) {
        disconnectPitchShifter();
        setCurrentTime(shifter.timePlayed || 0);
        setIsPlaying(false);
        return;
      }

      if (loopRange && (shifter.timePlayed < loopRange.start || shifter.timePlayed >= loopRange.end)) {
        shifter.percentagePlayed = loopRange.start / duration;
        setCurrentTime(loopRange.start);
      }

      await connectPitchShifter();
      setIsPlaying(true);
      return;
    }

    if (!audio.src) return;

    if (audio.paused) {
      if (loopRange && (audio.currentTime < loopRange.start || audio.currentTime >= loopRange.end)) {
        audio.currentTime = loopRange.start;
        setCurrentTime(loopRange.start);
      }
      audio.volume = 1;
      audio.playbackRate = tempo / 100;
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setCurrentTime(audio.currentTime || 0);
    setIsPlaying(false);
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
    youtubeVideoId,
  };
}
