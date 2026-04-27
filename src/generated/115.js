(function (e, t, n) {
  "use strict";

  function r(e) {
    if (e) {
      e.setTargetAtTime ||= e.setTargetValueAtTime;
    }
  }
  if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
    window.AudioContext = webkitAudioContext;
    if (!AudioContext.prototype.hasOwnProperty("createGain")) {
      AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
    }
    if (!AudioContext.prototype.hasOwnProperty("createDelay")) {
      AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
    }
    if (!AudioContext.prototype.hasOwnProperty("createScriptProcessor")) {
      AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
    }
    if (!AudioContext.prototype.hasOwnProperty("createPeriodicWave")) {
      AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
    }
    AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
    AudioContext.prototype.createGain = function () {
      var e = this.internal_createGain();
      r(e.gain);
      return e;
    };
    AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
    AudioContext.prototype.createDelay = function (e) {
      var t = e ? this.internal_createDelay(e) : this.internal_createDelay();
      r(t.delayTime);
      return t;
    };
    AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
    AudioContext.prototype.createBufferSource = function () {
      var e = this.internal_createBufferSource();
      if (e.start) {
        e.internal_start = e.start;
        e.start = function (t, n, r) {
          if (typeof r != "undefined") {
            e.internal_start(t || 0, n, r);
          } else {
            e.internal_start(t || 0, n);
          }
        };
      } else {
        e.start = function (e, t, n) {
          if (t || n) {
            this.noteGrainOn(e || 0, t, n);
          } else {
            this.noteOn(e || 0);
          }
        };
      }
      if (e.stop) {
        e.internal_stop = e.stop;
        e.stop = function (t) {
          e.internal_stop(t || 0);
        };
      } else {
        e.stop = function (e) {
          this.noteOff(e || 0);
        };
      }
      r(e.playbackRate);
      return e;
    };
    AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
    AudioContext.prototype.createDynamicsCompressor = function () {
      var e = this.internal_createDynamicsCompressor();
      r(e.threshold);
      r(e.knee);
      r(e.ratio);
      r(e.reduction);
      r(e.attack);
      r(e.release);
      return e;
    };
    AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
    AudioContext.prototype.createBiquadFilter = function () {
      var e = this.internal_createBiquadFilter();
      r(e.frequency);
      r(e.detune);
      r(e.Q);
      r(e.gain);
      return e;
    };
    if (AudioContext.prototype.hasOwnProperty("createOscillator")) {
      AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
      AudioContext.prototype.createOscillator = function () {
        var e = this.internal_createOscillator();
        if (e.start) {
          e.internal_start = e.start;
          e.start = function (t) {
            e.internal_start(t || 0);
          };
        } else {
          e.start = function (e) {
            this.noteOn(e || 0);
          };
        }
        if (e.stop) {
          e.internal_stop = e.stop;
          e.stop = function (t) {
            e.internal_stop(t || 0);
          };
        } else {
          e.stop = function (e) {
            this.noteOff(e || 0);
          };
        }
        e.setPeriodicWave ||= e.setWaveTable;
        r(e.frequency);
        r(e.detune);
        return e;
      };
    }
  }
  if (window.hasOwnProperty("webkitOfflineAudioContext") && !window.hasOwnProperty("OfflineAudioContext")) {
    window.OfflineAudioContext = webkitOfflineAudioContext;
  }
})(window);