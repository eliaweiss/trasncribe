class PlaybackController {
  constructor() {
    this.delay = null;
    this.waiting = false;
    this.currentLoop = { start: 0, end: null };
    this.delayTimer = null;
    this.audioSystem = null;
    this.loopInterval = null;
    this._isPlaying = false;
    this._speed = 100;
    this.pitchVals = { octives: 0, semitones: 0, cents: 0 };
  }

  updatePitch() {
    if (this.loaded && this.audioSystem.setPitch) {
      this.audioSystem.setPitch(parseInt(this.pitch, 10));
    }
  }

  updateVolume() {
    if (this.loaded && this.audioSystem.setVolume) {
      this.audioSystem.setVolume(100);
    }
  }

  onCurrentTimeChanged() {
    const currentTime = this.currentTime;

    if (this.currentLoop.end) {
      const loopStart = this.currentLoop.start;
      const loopEnd = this.currentLoop.end;
      const isBeforeLoop = currentTime <= loopStart && loopStart - currentTime > 0.01;
      const isAfterLoop = currentTime >= loopEnd && currentTime - loopEnd > 0.01;

      if (isBeforeLoop || isAfterLoop) {
        this.seek(this.currentLoop.start);
        if (this.delay) {
          this.pause();
          this.playIn();
        }
      }
    }

    if (currentTime >= this.audioBuffer.duration) {
      this.pause();
    }
  }

  play(restartFromLoopStart, waitForDelay) {
    if (!this.loaded) return;

    this.cancelDelay();

    if (restartFromLoopStart) {
      this.pause();
      this.seek(this.currentLoop.start);
    }

    if (this.audioSystem.currentTime >= this.audioBuffer.duration) return;

    if (waitForDelay) {
      this.playIn();
      return;
    }

    this.audioSystem.play();
    this.isPlaying = true;
  }

  playPause() {
    if (this.isPlaying || this.waiting) {
      this.pause();
      return;
    }

    this.play(false, false);
  }

  pause() {
    if (!this.audioSystem) return;

    this.cancelDelay();
    this.audioSystem.pause();
    this.isPlaying = false;
  }

  seek(seconds) {
    if (!this.loaded || this.currentTime === seconds) return;

    this.cancelDelay();
    const wasPlaying = this.isPlaying;
    this.pause();
    this.audioSystem.seek(seconds);

    if (wasPlaying) {
      this.play();
    }
  }

  playIn() {
    this.cancelDelay();

    if (!this.delay) {
      this.play(false, false);
      return;
    }

    this.waiting = true;
    this.delayTimer = setTimeout(() => {
      this.waiting = false;
      this.play();
    }, this.delay * 1000);
  }

  cancelDelay() {
    clearTimeout(this.delayTimer);
    this.waiting = false;
  }

  load(audioSystem) {
    this.cancelDelay();
    this.audioSystem = audioSystem;
    audioSystem.isPlaying = () => this.isPlaying;
    audioSystem.onAudioBufferChanged = audioBuffer => {
      this.audioBuffer = audioBuffer;
    };
  }

  getDataHash() {
    return this.audioSystem.getDataHash();
  }

  get isPlaying() {
    return this._isPlaying;
  }

  set isPlaying(isPlaying) {
    if (this._isPlaying === isPlaying) return;

    this._isPlaying = isPlaying;

    if (!isPlaying) {
      clearInterval(this.loopInterval);
    }

    if (isPlaying) {
      this.loopInterval = setInterval(() => this.onCurrentTimeChanged(), 4);
    }

    if (this.onStatusChanged) {
      this.onStatusChanged(isPlaying);
    }
  }

  get loaded() {
    return this.audioBuffer != null;
  }

  get pitch() {
    const semitoneRatio = Math.pow(2, 1 / 12);
    let semitones = this.pitchVals.octives * 12;
    semitones += this.pitchVals.semitones;
    semitones += this.pitchVals.cents / 100;
    return parseFloat((Math.pow(semitoneRatio, semitones) * 100).toFixed(2));
  }

  get speed() {
    return this._speed;
  }

  set speed(percent) {
    if (this._speed === percent) return;

    this._speed = percent;
    this.audioSystem.speed = parseInt(percent, 10) / 100;
  }

  get audioBuffer() {
    return this._audioBuffer;
  }

  set audioBuffer(audioBuffer) {
    this._audioBuffer = audioBuffer;
    if (this.onAudioBufferChanged) {
      this.onAudioBufferChanged(audioBuffer);
    }
  }

  get currentTime() {
    return (this.audioSystem || {}).currentTime || 0;
  }
}

module.exports = new PlaybackController();
