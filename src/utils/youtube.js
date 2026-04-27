export function getYouTubeVideoId(input) {
  const value = input.trim();
  if (!value) return "";

  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.searchParams.has("v")) return url.searchParams.get("v");
    const embedMatch = url.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/);
    return embedMatch ? embedMatch[1] : "";
  } catch {
    return /^[a-zA-Z0-9_-]{11}$/.test(value) ? value : "";
  }
}

export function loadYouTubeIframeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);

  return new Promise(resolve => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve(window.YT);
    };

    if (!document.querySelector("script[src='https://www.youtube.com/iframe_api']")) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });
}
