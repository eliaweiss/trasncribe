function n(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function r(e) {
  var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var n = e.match(t);
  if (n && n[7].length == 11) {
    return n[7];
  } else {
    alert("Cannot read the YouTube URL");
    return;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = function () {
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
var a = function () {
  function e(t) {
    n(this, e);
    this.onReady = this.onReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.type = "youtube";
    this.player = null;
    this.videoUrl = t;
    this.videoId = r(t);
    this.realTime = true;
    var o = document.createElement("script");
    o.src = "https://www.youtube.com/iframe_api";
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(o, a);
    window.onYouTubeIframeAPIReady = this.onReady;
  }
  o(e, [{
    key: "play",
    value: function () {
      this.player.playVideo();
    }
  }, {
    key: "pause",
    value: function () {
      this.player.pauseVideo();
    }
  }, {
    key: "seek",
    value: function (e) {
      this.player.seekTo(e, true);
    }
  }, {
    key: "onReady",
    value: function () {
      this.onPlayerReady;
      this.player = new YT.Player("yt-player", {
        height: "390",
        width: "640",
        videoId: this.videoId,
        playerVars: {
          html5: 1,
          controls: 0,
          modestbranding: 1,
          showinfo: 0,
          rel: 0
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    }
  }, {
    key: "getDataHash",
    value: function () {
      var e = this.audioBuffer.length;
      for (var t = 0; t < this.videoUrl.length; t++) {
        e += this.videoUrl.charCodeAt(t) * (t + 1);
      }
      e += this.audioBuffer.length * 1e-8;
      return "y" + Math.abs(e).toString();
    }
  }, {
    key: "onPlayerReady",
    value: function (e) {
      e.target.playVideo();
    }
  }, {
    key: "onPlayerStateChange",
    value: function (e) {
      if (!this.audioBuffer && this.player.getDuration() > 0) {
        this.player.stopVideo();
        var t = {
          duration: this.player.getDuration(),
          sampleRate: 44100
        };
        t.length = t.duration * t.sampleRate;
        this.audioBuffer = t;
      }
    }
  }, {
    key: "setVolume",
    value: function (e) {
      this.player.setVolume(100);
    }
  }, {
    key: "getTempoValues",
    value: function () {
      if (!this.rates) {
        var e = this.player.getAvailablePlaybackRates();
        e = e.map(function (e) {
          return e * 100;
        }).sort(function (e, t) {
          return e - t;
        });
        this.rates = e;
      }
      return this.rates;
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
    key: "speed",
    set: function (e) {
      this.player.setPlaybackRate(e);
    }
  }, {
    key: "currentTime",
    get: function () {
      return this.player.getCurrentTime();
    }
  }]);
  return e;
}();
exports.default = a;
module.exports = exports.default;