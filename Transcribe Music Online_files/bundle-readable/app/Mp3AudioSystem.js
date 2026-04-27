const WebAudioBufferSource = require("../156.js").default;

class Mp3AudioSystem {
  constructor(file) {
    this.pitch = 1;
    this.soundtouch = null;
    this._speed = 1;
    this.startOffset = 0;
    this.lastTime = 0;
    this.canDownloadLoop = true;

    if (file.debug) {
      setTimeout(() => {
        this.audioBuffer = file;
        this.seekTo(0);
      }, 1);
      return;
    }

    const reader = new FileReader();
    reader.onload = event => {
      Mp3AudioSystem.context = new AudioContext();
      this.gainNode = Mp3AudioSystem.context.createGain();
      this.gainNode.connect(Mp3AudioSystem.context.destination);

      Mp3AudioSystem.context.decodeAudioData(
        event.target.result,
        audioBuffer => {
          this.audioBuffer = audioBuffer;
          this.seekTo(0);
        },
        error => alert(error),
      );
    };
    reader.readAsArrayBuffer(file);
  }

  play() {
    if (!this.node) return;

    this.node.connect(this.gainNode);
    this.lastTime = Mp3AudioSystem.context.currentTime;
  }

  pause() {
    this.startOffset = parseFloat(this.currentTime);
    if (this.node) {
      this.node.disconnect();
    }
  }

  seek(seconds) {
    if (!this.node) return;

    this.node = null;
    this.seekTo(seconds);
  }

  seekTo(seconds) {
    const bufferSource = new WebAudioBufferSource(
      this.audioBuffer,
      Math.floor(seconds * this.audioBuffer.sampleRate),
    );

    this.soundtouch = new soundtouch.SoundTouch(this.audioBuffer.sampleRate);
    this.soundtouch.tempo = this.speed;
    this.soundtouch.pitch = this.pitch;

    const filter = new soundtouch.SimpleFilter(bufferSource, this.soundtouch);
    this.node = soundtouch.getWebAudioNode(Mp3AudioSystem.context, filter);
    this.startOffset = parseFloat(seconds);
    this.lastTime = Mp3AudioSystem.context.currentTime;
  }

  setVolume() {
    this.gainNode.gain.value = 1;
  }

  setPitch(percent) {
    this.pitch = percent / 100;

    if (!this.node) return;

    this.node.disconnect();
    this.seekTo(this.currentTime);

    if (this.isPlaying()) {
      this.node.connect(this.gainNode);
    }
  }

  getTempoValues() {}

  getDataHash() {
    const samples = this.audioBuffer.getChannelData(0);
    let hash = this.audioBuffer.length;

    for (let index = 0; index < samples.length; index += 1) {
      hash += samples[index] * (index + 1);
    }

    return "m" + Math.abs(hash).toString();
  }

  get type() {
    return "mp3";
  }

  get speed() {
    return this._speed;
  }

  set speed(speed) {
    this._speed = speed;

    if (!this.node) return;

    this.node.disconnect();
    this.seekTo(this.currentTime);

    if (this.isPlaying()) {
      this.node.connect(this.gainNode);
    }
  }

  get audioBuffer() {
    return this._audioBuffer;
  }

  set audioBuffer(audioBuffer) {
    this._audioBuffer = audioBuffer;
    this.onAudioBufferChanged(audioBuffer);
  }

  get currentTime() {
    if (!this.isPlaying()) return this.startOffset;

    const elapsed = Mp3AudioSystem.context.currentTime - this.lastTime;
    return elapsed * this.speed + this.startOffset;
  }
}

module.exports = Mp3AudioSystem;
