function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = function () {
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
var i = require("../../generated/156.js");
var s = r(i);
var u = function () {
  function e(t) {
    var n = this;
    o(this, e);
    this.pitch = 1;
    this.soundtouch = null;
    this._speed = 1;
    this.startOffset = 0;
    this.lastTime = 0;
    this.canDownloadLoop = true;
    if (t.debug) {
      setTimeout(function () {
        n.audioBuffer = t;
        n.seekTo(0);
      }, 1);
    } else {
      var r = new FileReader();
      r.onload = function (t) {
        e.context = new AudioContext();
        var n = this.gainNode = e.context.createGain();
        n.connect(e.context.destination);
        e.context.decodeAudioData(t.target.result, function (e) {
          this.audioBuffer = e;
          this.seekTo(0);
        }.bind(this), function (e) {
          alert(e);
        });
      }.bind(this);
      r.readAsArrayBuffer(t);
    }
  }
  a(e, [{
    key: "play",
    value: function () {
      if (this.node) {
        this.node.connect(this.gainNode);
        this.lastTime = e.context.currentTime;
      }
    }
  }, {
    key: "pause",
    value: function () {
      this.startOffset = parseFloat(this.currentTime);
      if (this.node) {
        this.node.disconnect();
      }
    }
  }, {
    key: "seek",
    value: function (e) {
      if (this.node) {
        this.node = null;
        this.seekTo(e);
      }
    }
  }, {
    key: "seekTo",
    value: function (t) {
      var n = new s.default(this.audioBuffer, Math.floor(t * this.audioBuffer.sampleRate));
      this.soundtouch = new soundtouch.SoundTouch(this.audioBuffer.sampleRate);
      this.soundtouch.tempo = this.speed;
      this.soundtouch.pitch = this.pitch;
      var r = new soundtouch.SimpleFilter(n, this.soundtouch);
      this.node = soundtouch.getWebAudioNode(e.context, r);
      this.startOffset = parseFloat(t);
      this.lastTime = e.context.currentTime;
    }
  }, {
    key: "setVolume",
    value: function (e) {
      this.gainNode.gain.value = 1;
    }
  }, {
    key: "setPitch",
    value: function (e) {
      this.pitch = e / 100;
      if (this.node) {
        this.node.disconnect();
        this.seekTo(this.currentTime);
        if (this.isPlaying()) {
          this.node.connect(this.gainNode);
        }
      }
    }
  }, {
    key: "getTempoValues",
    value: function () {}
  }, {
    key: "getDataHash",
    value: function () {
      var e = this.audioBuffer.length;
      for (var t = this.audioBuffer.getChannelData(0), n = e, r = 0; r < t.length; r++) {
        n += t[r] * (r + 1);
      }
      return n = "m" + Math.abs(n).toString();
    }
  }, {
    key: "type",
    get: function () {
      return "mp3";
    }
  }, {
    key: "speed",
    get: function () {
      return this._speed;
    },
    set: function (e) {
      this._speed = e;
      if (this.node) {
        this.node.disconnect();
        this.seekTo(this.currentTime);
        if (this.isPlaying()) {
          this.node.connect(this.gainNode);
        }
      }
    }
  }, {
    key: "audioBuffer",
    get: function () {
      return this._audioBuffer;
    },
    set: function (e) {
      this._audioBuffer = e;
      this.onAudioBufferChanged(e);
    }
  }, {
    key: "currentTime",
    get: function () {
      if (!this.isPlaying()) {
        return this.startOffset;
      }
      var t = e.context.currentTime - this.lastTime;
      var n = t * this.speed + this.startOffset;
      return n;
    }
  }]);
  return e;
}();
exports.default = u;
module.exports = exports.default;