function readYoutubeVideoId(videoUrl) {
  const youtubeUrlPattern =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = videoUrl.match(youtubeUrlPattern);

  if (match && match[7].length === 11) {
    return match[7];
  }

  alert("Cannot read the YouTube URL");
  return undefined;
}

class YoutubeAudioSystem {
  constructor(videoUrl) {
    this.onReady = this.onReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.type = "youtube";
    this.player = null;
    this.videoUrl = videoUrl;
    this.videoId = readYoutubeVideoId(videoUrl);
    this.realTime = true;

    const iframeApiScript = document.createElement("script");
    iframeApiScript.src = "https://www.youtube.com/iframe_api";

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(iframeApiScript, firstScript);

    window.onYouTubeIframeAPIReady = this.onReady;
  }

  play() {
    this.player.playVideo();
  }

  pause() {
    this.player.pauseVideo();
  }

  seek(seconds) {
    this.player.seekTo(seconds, true);
  }

  onReady() {
    this.player = new YT.Player("yt-player", {
      height: "390",
      width: "640",
      videoId: this.videoId,
      playerVars: {
        html5: 1,
        controls: 0,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
  }

  getDataHash() {
    let hash = this.audioBuffer.length;

    for (let index = 0; index < this.videoUrl.length; index += 1) {
      hash += this.videoUrl.charCodeAt(index) * (index + 1);
    }

    hash += this.audioBuffer.length * 1e-8;
    return "y" + Math.abs(hash).toString();
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  onPlayerStateChange() {
    if (this.audioBuffer || this.player.getDuration() <= 0) return;

    this.player.stopVideo();

    const audioBuffer = {
      duration: this.player.getDuration(),
      sampleRate: 44100,
    };
    audioBuffer.length = audioBuffer.duration * audioBuffer.sampleRate;

    this.audioBuffer = audioBuffer;
  }

  setVolume() {
    this.player.setVolume(100);
  }

  getTempoValues() {
    if (!this.rates) {
      this.rates = this.player
        .getAvailablePlaybackRates()
        .map(rate => 100 * rate)
        .sort((left, right) => left - right);
    }

    return this.rates;
  }

  get audioBuffer() {
    return this._audioBuffer;
  }

  set audioBuffer(audioBuffer) {
    this._audioBuffer = audioBuffer;
    this.onAudioBufferChanged(audioBuffer);
  }

  set speed(speed) {
    this.player.setPlaybackRate(speed);
  }

  get currentTime() {
    return this.player.getCurrentTime();
  }
}

module.exports = YoutubeAudioSystem;
