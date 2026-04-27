import { useCallback, useEffect, useRef, useState } from "react";

export function useAudioPlayer() {
  const audioRef = useRef(new Audio());
  const loopRangeRef = useRef(null);
  const youtubePlayerRef = useRef(null);
  const [sourceUrl, setSourceUrl] = useState(null);
  const [sourceType, setSourceType] = useState(null);
  const [youtubeVideoId, setYoutubeVideoId] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempoState] = useState(100);

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
      audio.removeEventListener("timeupdate", syncTime);
      audio.removeEventListener("loadedmetadata", syncTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [syncTime]);

  const setTempo = useCallback(nextTempo => {
    const clampedTempo = Math.max(25, Math.min(200, Number(nextTempo) || 100));
    setTempoState(clampedTempo);
    audioRef.current.playbackRate = clampedTempo / 100;
    youtubePlayerRef.current?.setPlaybackRate?.(clampedTempo / 100);
  }, []);

  const setLoopRange = useCallback(range => {
    loopRangeRef.current = range;
  }, []);

  const load = useCallback(url => {
    const audio = audioRef.current;
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    youtubePlayerRef.current?.pauseVideo?.();
    audio.pause();
    audio.src = url;
    audio.currentTime = 0;
    audio.volume = 1;
    audio.playbackRate = tempo / 100;
    setSourceUrl(url);
    setSourceType("audio");
    setYoutubeVideoId("");
    loopRangeRef.current = null;
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [sourceUrl, tempo]);

  const loadYouTube = useCallback(videoId => {
    const audio = audioRef.current;
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
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
  }, [sourceUrl]);

  const attachYouTubePlayer = useCallback(player => {
    youtubePlayerRef.current = player;
    player.setPlaybackRate?.(tempo / 100);
    setDuration(player.getDuration?.() || 0);
    setCurrentTime(player.getCurrentTime?.() || 0);
  }, [tempo]);

  const playPause = useCallback(async () => {
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
      player.setPlaybackRate?.(tempo / 100);
      player.playVideo();
      setIsPlaying(true);
      return;
    }

    const audio = audioRef.current;
    if (!audio.src) return;

    if (audio.paused) {
      audio.volume = 1;
      audio.playbackRate = tempo / 100;
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setCurrentTime(audio.currentTime || 0);
    setIsPlaying(false);
  }, [sourceType, tempo]);

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
    if (!audio.src) return;
    audio.currentTime = 0;
    audio.volume = 1;
    audio.playbackRate = tempo / 100;
    await audio.play();
    setCurrentTime(0);
    setIsPlaying(true);
  }, [sourceType, tempo]);

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
    const max = Number.isFinite(audio.duration) ? audio.duration : seconds;
    audio.currentTime = Math.max(0, Math.min(seconds, max));
    setCurrentTime(audio.currentTime || 0);
  }, [sourceType]);

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
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [playFromStart, playPause]);

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
    setLoopRange,
    setTempo,
    sourceUrl,
    sourceType,
    tempo,
    youtubeVideoId,
  };
}
