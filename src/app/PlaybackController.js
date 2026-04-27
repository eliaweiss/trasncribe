function n(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, r.key, r);
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n);
    }
    if (r) {
      e(t, r);
    }
    return t;
  };
}();
var o = function () {
  function e() {
    n(this, e);
    this.delay = null;
    this.waiting = false;
    this.currentLoop = {
      start: 0,
      end: null
    };
    this.delayTimer = null;
    this.audioSystem = null;
    this.loopInterval = null;
    this._isPlaying = false;
    this._speed = 100;
    this.pitchVals = {
      octives: 0,
      semitones: 0,
      cents: 0
    };
  }
  r(e, [{
    key: "updatePitch",
    value: function () {
      if (this.loaded && this.audioSystem.setPitch) {
        this.audioSystem.setPitch(parseInt(this.pitch));
      }
    }
  }, {
    key: "updateVolume",
    value: function () {
      if (this.loaded && this.audioSystem.setVolume) {
        this.audioSystem.setVolume(100);
      }
    }
  }, {
    key: "onCurrentTimeChanged",
    value: function () {
      var e = this.currentTime;
      if (this.currentLoop.end) {
        var t = this.currentLoop.start;
        var n = this.currentLoop.end;
        var r = e <= t && t - e > 0.01;
        var o = e >= n && e - n > 0.01;
        if (r || o) {
          this.seek(this.currentLoop.start);
          if (this.delay) {
            this.pause();
            this.playIn();
          }
        }
      }
      if (e >= this.audioBuffer.duration) {
        this.pause();
      }
    }
  }, {
    key: "play",
    value: function (e, t) {
      if (this.loaded && (this.cancelDelay(), e && (this.pause(), this.seek(this.currentLoop.start)), !(this.audioSystem.currentTime >= this.audioBuffer.duration))) {
        if (t) {
          this.playIn();
          return;
        }
        this.audioSystem.play();
        this.isPlaying = true;
      }
    }
  }, {
    key: "playPause",
    value: function () {
      if (this.isPlaying || this.waiting) {
        this.pause();
      } else {
        this.play(false, false);
      }
    }
  }, {
    key: "pause",
    value: function () {
      if (this.audioSystem) {
        this.cancelDelay();
        this.audioSystem.pause();
        this.isPlaying = false;
      }
    }
  }, {
    key: "seek",
    value: function (e) {
      if (this.loaded && this.currentTime !== e) {
        this.cancelDelay();
        var t = this.isPlaying;
        this.pause();
        this.audioSystem.seek(e);
        if (t) {
          this.play();
        }
      }
    }
  }, {
    key: "playIn",
    value: function () {
      this.cancelDelay();
      if (this.delay) {
        this.waiting = true;
        this.delayTimer = setTimeout(function () {
          this.waiting = false;
          this.play();
        }.bind(this), this.delay * 1000);
        return;
      } else {
        this.play(false, false);
        return;
      }
    }
  }, {
    key: "cancelDelay",
    value: function () {
      clearTimeout(this.delayTimer);
      this.waiting = false;
    }
  }, {
    key: "load",
    value: function (e) {
      var t = this;
      this.cancelDelay();
      this.audioSystem = e;
      e.isPlaying = function () {
        return t.isPlaying;
      };
      e.onAudioBufferChanged = function (e) {
        return t.audioBuffer = e;
      };
    }
  }, {
    key: "changePitch",
    value: function (e, t) {
      var n = $(t.currentTarget);
      var r = n.data("direction") === "up" ? 1 : -1;
      var o = parseInt(n.data("multiplier"));
      var a = parseInt(n.data("max"));
      var i = -a;
      var s = n.data("property");
      var u = this.pitchVals[s]();
      var l = u + o * r;
      return !(l > a) && !(l < i) && void this.pitchVals[s](l);
    }
  }, {
    key: "getDataHash",
    value: function () {
      return this.audioSystem.getDataHash();
    }
  }, {
    key: "isPlaying",
    get: function () {
      return this._isPlaying;
    },
    set: function (e) {
      var t = this;
      if (this._isPlaying !== e) {
        this._isPlaying = e;
        if (!e) {
          clearInterval(this.loopInterval);
        }
        if (e) {
          this.loopInterval = setInterval(function () {
            return t.onCurrentTimeChanged();
          }, 4);
        }
        if (this.onStatusChanged) {
          this.onStatusChanged(e);
        }
      }
    }
  }, {
    key: "loaded",
    get: function () {
      return this.audioBuffer != null;
    }
  }, {
    key: "pitch",
    get: function () {
      var e = Math.pow(2, 1 / 12);
      var t = this.pitchVals.octives * 12;
      t += this.pitchVals.semitones;
      t += this.pitchVals.cents / 100;
      var n = Math.pow(e, t);
      var r = parseFloat((n * 100).toFixed(2));
      return r;
    }
  }, {
    key: "speed",
    get: function () {
      return this._speed;
    },
    set: function (e) {
      if (this._speed !== e) {
        this._speed = e;
        this.audioSystem.speed = parseInt(e) / 100;
      }
    }
  }, {
    key: "audioBuffer",
    get: function () {
      return this._audioBuffer;
    },
    set: function (e) {
      this._audioBuffer = e;
      if (this.onAudioBufferChanged) {
        this.onAudioBufferChanged(e);
      }
    }
  }, {
    key: "currentTime",
    get: function () {
      return (this.audioSystem || {}).currentTime || 0;
    }
  }]);
  return e;
}();
exports.default = new o();
module.exports = exports.default;