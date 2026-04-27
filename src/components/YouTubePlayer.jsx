import React, { useEffect, useRef } from "react";
import { loadYouTubeIframeApi } from "../utils/youtube.js";

export default function YouTubePlayer({ onPlayerReady, videoId }) {
  const containerRef = useRef(null);
  const onPlayerReadyRef = useRef(onPlayerReady);
  const playerRef = useRef(null);

  useEffect(() => {
    onPlayerReadyRef.current = onPlayerReady;
  }, [onPlayerReady]);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeIframeApi().then(YT => {
      if (cancelled || !containerRef.current) return;

      if (playerRef.current) {
        playerRef.current.loadVideoById(videoId);
        onPlayerReadyRef.current(playerRef.current);
        return;
      }

      playerRef.current = new YT.Player(containerRef.current, {
        height: "240",
        width: "426",
        videoId,
        playerVars: {
          modestbranding: 1,
          origin: window.location.origin,
          rel: 0,
        },
        events: {
          onReady: event => onPlayerReadyRef.current(event.target),
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [videoId]);

  return (
    <div style={{ margin: "0 auto 1em", maxWidth: 426 }}>
      <div ref={containerRef} />
    </div>
  );
}
