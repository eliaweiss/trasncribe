function r(e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (e != null) {
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        t[n] = e[n];
      }
    }
  }
  t.default = e;
  return t;
}
function o(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function a(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function i(e, t) {
  if (typeof t != "function" && t !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (t) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, t);
    } else {
      e.__proto__ = t;
    }
  }
}
function s(e) {
  return {
    zoom: e.zoom,
    audio: e.audio,
    loops: e.loops,
    playback: e.playback,
    marks: e.marks.marks
  };
}
function u() {
  var e = this;
  var t = typeof window !== undefined && l("file");
  if (t) {
    var n = decodeURIComponent(l("title")) || "Audio File";
    var r = l("partner");
    var o = l("pid");
    var a = l("proxy");
    var i = c(r);
    var s = c(t, i * 99);
    var u = a ? (0, w.getServerUrl)("/partner?u=" + t) : t;
    if (s != o) {
      console.log("Song check id is not valid", s, o);
      return;
    }
    window.history.pushState(null, "", window.location.href.split("?")[0]);
    fetch(u).then(function (e) {
      return e.blob();
    }).then(function (t) {
      return e.loadFile(n, new P.default(t));
    });
  }
}
function l(e) {
  var t = new RegExp("[?&]" + e + "=([^&#]*)", "i");
  var n = t.exec(window.location.href);
  if (n) {
    return n[1];
  } else {
    return null;
  }
}
function c(e) {
  var t = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var n = t;
  for (var r = 0; r < e.length; r++) {
    n += e.charCodeAt(r);
  }
  return n;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var p = function () {
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
function d(e, t, n) {
  for (var r = true; r;) {
    var o = e;
    var a = t;
    var i = n;
    r = false;
    if (o === null) {
      o = Function.prototype;
    }
    var s = Object.getOwnPropertyDescriptor(o, a);
    if (s !== undefined) {
      if ("value" in s) {
        return s.value;
      }
      var u = s.get;
      if (u === undefined) {
        return;
      }
      return u.call(i);
    }
    var l = Object.getPrototypeOf(o);
    if (l === null) {
      return;
    }
    e = l;
    t = a;
    n = i;
    r = true;
    s = l = undefined;
  }
}
var f = require("../generated/2.js");
var h = o(f);
require("../generated/29.js");
var m = require("../generated/34.js");
var v = require("../generated/160.js");
var y = o(v);
var g = require("../generated/6.js");
var b = require("./PlaybackController.js");
var E = o(b);
var w = require("../generated/18.js");
var C = require("../generated/144.js");
var _ = o(C);
var O = require("./audio/Mp3AudioSystem.js");
var P = o(O);
var k = require("./audio/YoutubeAudioSystem.js");
var S = o(k);
var x = require("./components/Landing.js");
var T = o(x);
var M = require("../generated/129.js");
var N = o(M);
var D = require("../generated/122.js");
var R = o(D);
var A = require("../generated/123.js");
var I = o(A);
var j = require("../generated/130.js");
var L = o(j);
var B = require("../generated/125.js");
var V = o(B);
var W = require("./components/MarkPanel.js");
var H = o(W);
var q = require("./components/MouseEventLayer.js");
var K = o(q);
var z = require("../generated/131.js");
var Y = o(z);
var G = require("./components/Toolbar.js");
var X = o(G);
var $ = require("./components/WaveformPosition.js");
var Q = o($);
var Z = require("./components/WaveformSelection.js");
var J = o(Z);
var ee = require("./components/DownloadLoopDialog.js");
var te = o(ee);
var ne = require("./components/LandingHero.js");
var re = o(ne);
var oe = require("../generated/140.js");
var ae = o(oe);
var ie = require("../generated/138.js");
var se = o(ie);
var ue = require("../generated/141.js");
var le = o(ue);
var ce = require("../generated/142.js");
var pe = o(ce);
var de = require("../generated/120.js");
var fe = o(de);
var he = require("./actions/audioActions.js");
var me = r(he);
var ve = require("../generated/65.js");
var ye = r(ve);
var ge = require("./actions/markActions.js");
var be = r(ge);
var Ee = require("./actions/playbackActions.js");
var we = r(Ee);
var Ce = require("./actions/zoomActions.js");
var _e = r(Ce);
var Me = function (e) {
  function t(e) {
    var n = this;
    a(this, t);
    d(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    var r = this.props.dispatch;
    this.setupHotkeys();
    this.player = E.default;
    this.state = {
      width: 0,
      adjustMode: "tempo"
    };
    this.player.onAudioBufferChanged = function () {
      r(me.audioLoaded(n.player.getDataHash()));
    };
    this.player.onStatusChanged = function (e) {
      r(we.changePlayStatus(e));
      clearInterval(n.playInterval);
      if (e) {
        n.playInterval = setInterval(function () {
          return n.repositionScroll();
        }, 1000);
      }
    };
  }
  i(t, e);
  p(t, [{
    key: "componentDidMount",
    value: function () {
      var e = this;
      (0, y.default)();
      var t = typeof window !== undefined && window.location.href.indexOf("loadFake") >= 0;
      if (t) {
        var n = new _.default();
        var r = new P.default(n);
        this.loadFile("Test Song", r);
        r.onAudioBufferChanged(n);
      }
      u.call(this);
      var o = typeof document != "undefined" ? document.body.offsetWidth : 0;
      this.setState({
        width: o
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function (e, t) {
      if (this.player.audioBuffer) {
        var n = this.props.loops.currentLoop;
        var r = this.player.currentLoop;
        var o = this.player.audioBuffer.duration;
        r.start = n.start * o;
        r.end = n.end * o || null;
      }
      if (this.player.pitchVals !== this.props.playback.pitch) {
        this.player.pitchVals = this.props.playback.pitch;
        this.player.updatePitch();
      }
      if (this.player.volume !== this.props.playback.volume) {
        this.player.volume = this.props.playback.volume;
        this.player.updateVolume();
      }
      if (this.props.zoom.level !== e.zoom.level) {
        this.repositionScroll();
      }
      this.player.delay = this.props.playback.delay;
      this.player.speed = this.props.playback.tempo;
      if (this.props.audio.status === "loaded" && e.audio.status !== "loaded") {
        ga("send", "event", "audio", "loaded", this.player.audioSystem.type);
      }
    }
  }, {
    key: "seekToSeconds",
    value: function (e) {
      if (!this.player.loaded) {
        return;
      }
      var t = this.player.audioBuffer.duration;
      var n = Math.max(0, Math.min(e, t));
      this.player.seek(n);
      this.props.dispatch(we.setPlaybackTime(n));
      this.repositionScroll();
      this.forceUpdate();
    }
  }, {
    key: "seekToPlaybackTime",
    value: function (e) {
      this.seekToSeconds(this.player.audioBuffer.duration * e);
    }
  }, {
    key: "setupHotkeys",
    value: function () {
      var e = this;
      if (typeof g.key != "undefined") {
        var t = this.props.dispatch;
        (0, g.key)("space", function () {
          e.player.playPause();
          return false;
        });
        (0, g.key)("r", function () {
          return e.player.play(true, true);
        });
        (0, g.key)("p", function () {
          e.player.playPause();
          return false;
        });
        (0, g.key)("m", function () {
          return t(be.addMark());
        });
        (0, g.key)("b", function () {
          return t(be.addBeat());
        });
        (0, g.key)("l", function () {
          return t(ye.saveLoop());
        });
      }
    }
  }, {
    key: "showLoopSaveDialog",
    value: function () {
      this.saveLoopDialog.show();
    }
  }, {
    key: "onChooseVideo",
    value: function () {
      this.player.pause();
      var e = window.prompt("Enter a YouTube URL", "https://www.youtube.com/watch?v=TLV4_xaYynY");
      if (e) {
        this.player.load(new S.default(e));
        document.body.classList.add("youtube");
        document.body.classList.remove("audio-not-loaded");
        document.body.classList.add("audio-loaded");
        ga("send", "event", "audio", "select", "youtube");
      }
    }
  }, {
    key: "onChooseAudio",
    value: function () {
      this.player.pause();
      if (this.player.loaded) {
        window.location.reload();
        return;
      } else {
        document.getElementById("files").click();
        document.body.classList.remove("youtube");
        ga("send", "event", "audio", "select", "mp3");
        return;
      }
    }
  }, {
    key: "handleFileSelect",
    value: function (e) {
      if (this.checkSupport()) {
        var t = (e.target.files || e.dataTransfer.files)[0];
        if (t) {
          this.loadFile(t.name, new P.default(t));
        }
      }
    }
  }, {
    key: "loadFile",
    value: function (e, t) {
      this.player.load(t);
      this.props.dispatch(we.changeFile(e));
      this.props.dispatch(me.audioLoading());
    }
  }, {
    key: "checkSupport",
    value: function () {
      var e = true;
      var t = window.console || {
        log: function () {}
      };
      if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        t.log("The File APIs are not fully supported in this browser.");
        e = false;
      }
      if (!window.AudioContext) {
        t.log("The Audio APIs are not fully supported in this browser.");
        e = false;
      }
      if (!e) {
        this.setState({
          browserSupported: false
        });
      }
      return e;
    }
  }, {
    key: "timeFromDecimal",
    value: function (e) {
      var t = (this.player.audioBuffer || {}).duration;
      var n = e * t;
      return n || 0;
    }
  }, {
    key: "removeMark",
    value: function (e) {
      this.props.dispatch(be.removeMark(e));
    }
  }, {
    key: "getMarkCards",
    value: function (e) {
      var t = this;
      if (this.props.marks.length) {
        return this.props.marks.filter(function (t) {
          return t.type == e;
        }).map(function (n) {
          return {
            title: e == "mark" ? "Mark" : "Beat",
            key: n.id,
            line1: n.label,
            line2: (0, g.formatTime)(t.timeFromDecimal(n.time), e == "beat"),
            remove: function () {
              return t.removeMark(n.id);
            },
            select: function () {
              return t.seekToPlaybackTime(n.time);
            },
            className: e
          };
        });
      } else {
        return [];
      }
    }
  }, {
    key: "getLoopCards",
    value: function () {
      var e = this;
      var t = this.props.dispatch;
      return this.props.loops.loops.map(function (n) {
        return {
          title: "Loop",
          key: n.id,
          line1: (0, g.formatTime)(e.timeFromDecimal(n.start), false) + String.fromCharCode(8212) + (0, g.formatTime)(e.timeFromDecimal(n.end), false),
          remove: function () {
            return t(ye.removeLoop(n.id));
          },
          select: function () {
            t(ye.setLoop(n.start, n.end));
          },
          className: "loop"
        };
      });
    }
  }, {
    key: "showRegister",
    value: function (e) {
      return null;
    }
  }, {
    key: "downloadLoopOrDisplay",
    value: function () {
      this.setState({
        isSavingLoop: true
      });
      return;
    }
  }, {
    key: "repositionScroll",
    value: function () {
      if (this.player.loaded) {
        var e = this.player.currentTime / this.player.audioBuffer.duration * (document.body.offsetWidth * this.props.zoom.level);
        var t = this.refs["scroll-container"];
        var n = t.scrollLeft;
        var r = t.offsetWidth;
        var o = n + r - 100 < e;
        var a = n > e;
        if (o || a) {
          t.scrollLeft = e - r * 0.2;
        }
      }
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props.dispatch;
      function n(e) {
        return function () {
          return t(e.apply(undefined, arguments));
        };
      }
      var r = this.props.audio.status;
      var o = this.state.width;
      var a = o * this.props.zoom.level;
      var i = this.getMarkCards("mark");
      var s = this.getMarkCards("beat");
      var u = this.getLoopCards();
      var l = !i.length && !s.length && !u.length;
      var c = false;
      var p = (0, g.classList)({
        "page-wrap": true,
        "audio-loading": r === "loading",
        "audio-loaded": r === "loaded",
        "audio-not-loaded": r !== "loaded"
      });
      var d = null;
      var f = 224;
      var m = 0;
      var v = 0;
      var y = true;
      h.default.createElement("div", {
        className: "ad visible-audio-loaded"
      }, h.default.createElement(fe.default, null));
      if (this.player.loaded) {
        if (this.player.audioSystem.type === "youtube") {
          f = 56;
        }
        d = this.player.audioSystem.getTempoValues();
        m = this.player.audioBuffer.duration;
        v = this.player.currentTime;
        c = this.player.audioSystem.canDownloadLoop;
      }
      return h.default.createElement("div", {
        className: p
      }, h.default.createElement(N.default, {
        onChooseAudio: function (t) {
          return e.onChooseAudio();
        },
        onFileSelect: function (t) {
          return e.handleFileSelect(t);
        },
        onHelp: function () {
          return e.setState({
            isHelpOpen: true
          });
        }
      }), h.default.createElement(V.default, {
        isOpen: this.state.isHelpOpen === true,
        onClose: function () {
          return e.setState({
            isHelpOpen: false
          });
        }
      }), h.default.createElement(T.default, {
        onChooseAudio: function (t) {
          return e.onChooseAudio();
        },
        onChooseVideo: function (t) {
          return e.onChooseVideo();
        },
        onDropFile: function (t) {
          return e.handleFileSelect(t);
        }
      }), h.default.createElement("div", {
        id: "player",
        className: "visible-audio-loaded",
        style: {
          marginLeft: 0
        }
      }, h.default.createElement("div", {
        className: "inner-container"
      }, h.default.createElement(pe.default, {
        onZoom: function (e) {
          return t(_e.zoom(e));
        }
      }), h.default.createElement("h1", null, this.props.playback.displayFilename), h.default.createElement("div", {
        id: "yt-player"
      })), h.default.createElement("div", {
        id: "display",
        ref: "scroll-container"
      }, h.default.createElement(K.default, {
        width: a,
        height: f
      }, h.default.createElement(H.default, {
        className: "overlay",
        type: "mark",
        marks: this.props.marks,
        width: a,
        onMarkChanged: n(be.updateMark),
        onEditMark: function (t) {
          return e.setState({
            editingMark: t
          });
        },
        onRemoveMark: function (t) {
          return e.removeMark(t);
        }
      }), h.default.createElement(H.default, {
        className: "overlay bottom",
        type: "beat",
        marks: this.props.marks,
        width: a,
        onMarkChanged: n(be.updateMark),
        onRemoveMark: function (t) {
          return e.removeMark(t);
        }
      }), h.default.createElement(se.default, {
        className: "overlay bottom",
        id: "time-panel",
        duration: m,
        width: a
      }), h.default.createElement(le.default, {
        className: "overlay",
        width: a,
        height: f - 18,
        tabIndex: "0",
        audioBuffer: this.player.audioBuffer
      }), h.default.createElement(Q.default, {
        width: a,
        onClick: function (t) {
          return e.seekToPlaybackTime(t);
        },
        onDoubleClick: function (t) {
          return e.seekToPlaybackTime(t);
        },
        getPosition: function () {
          return e.player.currentTime / m || 0;
        },
        isPlaying: this.props.playback.isPlaying,
        className: "overlay",
        id: "waveform-position",
        height: f
      }), h.default.createElement(J.default, {
        start: this.props.loops.currentLoop.start,
        end: this.props.loops.currentLoop.end,
        setLoop: function (e, n) {
          return t(ye.setLoop(e, n));
        },
        width: a,
        height: f
      }))), h.default.createElement("div", {
        id: "toolbar",
        className: "clear-group"
      }, h.default.createElement("div", {
        className: "pull-right"
      }, h.default.createElement(I.default, {
        getCurrentTime: function () {
          return e.player.currentTime;
        },
        isPlaying: this.props.playback.isPlaying
      })), h.default.createElement(X.default, {
        onPlay: function () {
          return e.player.play(true, true);
        },
        onPause: function () {
          return e.player.playPause();
        },
        onJumpToStart: function () {
          return e.seekToSeconds(0);
        },
        onJumpToSelectionStart: function () {
          return null != e.props.loops.currentLoop.start ? e.seekToPlaybackTime(e.props.loops.currentLoop.start) : null;
        },
        onJumpToSelectionEnd: function () {
          return null != e.props.loops.currentLoop.end ? e.seekToPlaybackTime(e.props.loops.currentLoop.end) : null;
        },
        selectionStart: this.props.loops.currentLoop.start,
        selectionEnd: this.props.loops.currentLoop.end,
        onAdjustModeChange: function (t) {
          return e.setState({
            adjustMode: t
          });
        },
        onSetDelay: function (e) {
          return t(we.setDelay(e));
        },
        showSaveNotification: !y,
        onShowSaveNotification: function () {
          return e.showRegister("Save your marks, loops, and more!");
        }
      }), h.default.createElement(Y.default, {
        visible: this.state.adjustMode === "pitch",
        onChanged: function () {
          return 1112234;
        },
        octives: this.props.playback.pitch.octives,
        semitones: this.props.playback.pitch.semitones,
        cents: this.props.playback.pitch.cents,
        onChangePitch: function (e, n) {
          return t(we.changePitch(e, n));
        },
        onSetPitch: function (e, n) {
          return t(we.setPitch(e, n));
        }
      }), h.default.createElement(re.default, {
        speed: this.props.playback.tempo,
        visible: this.state.adjustMode === "tempo",
        onSetSpeed: function (e) {
          return t(we.setTempo(e));
        },
        tempoValues: d,
        onChooseAudio: function (t) {
          return e.onChooseAudio();
        }
      }), null)), h.default.createElement("div", {
        className: "control-panel visible-audio-loaded",
        style: {
          marginLeft: 0
        }
      }, h.default.createElement("div", {
        className: "btn-group"
      }, h.default.createElement("button", {
        className: "btn btn-default btn-sm",
        title: "You can also tap 'm' to add a mark",
        onMouseDown: function () {
          return t(be.addMark());
        }
      }, "Add Mark"), h.default.createElement("button", {
        className: "btn btn-default btn-sm",
        title: "You can also tap 'b' to add a beat",
        onMouseDown: function () {
          return t(be.addBeat());
        }
      }, "Add Beat"), h.default.createElement("button", {
        className: "btn btn-default btn-sm",
        title: "You can also press 'l' to add a loop",
        onClick: function () {
          return t(ye.saveLoop());
        }
      }, "Add Loop"), c ? h.default.createElement("button", {
        className: "btn btn-default btn-sm",
        onClick: function () {
          return e.downloadLoopOrDisplay();
        }
      }, "Download MP3") : null), h.default.createElement("p", {
        id: "empty-mark-message",
        style: {
          display: (0, g.display)(l)
        }
      }, "Tap 'm' while playing to add marks to the beat or to label parts of the song."), h.default.createElement(R.default, {
        items: i
      }), h.default.createElement(R.default, {
        items: s
      }), h.default.createElement(R.default, {
        items: u
      })), h.default.createElement(L.default, {
        isOpen: this.state.browserSupported === false
      }), h.default.createElement(te.default, {
        isOpen: this.state.isSavingLoop,
        onClose: function () {
          return e.setState({
            isSavingLoop: false
          });
        },
        loop: this.props.loops.currentLoop,
        audioBuffer: this.player.audioBuffer,
        tempo: this.props.playback.tempo,
        pitch: this.player.pitch
      }));
    }
  }]);
  return t;
}(h.default.Component);
exports.default = (0, m.connect)(s)(Me);
module.exports = exports.default;