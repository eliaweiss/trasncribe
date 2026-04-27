function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("../../generated/23.js");
var a = r(o);
var i = {
  isPlaying: false,
  tempo: 100,
  volume: 100,
  playbackTime: 0,
  pitch: {
    octives: 0,
    semitones: 0,
    cents: 0
  }
};
exports.default = (0, a.default)(i, {
  setTempo: function (e, t) {
    return Object.assign({}, e, {
      tempo: t.tempo
    });
  },
  setVolume: function (e, t) {
    return Object.assign({}, e, {
      volume: 100
    });
  },
  changePlayStatus: function (e, t) {
    return Object.assign({}, e, {
      isPlaying: t.isPlaying
    });
  },
  changeFile: function (e, t) {
    var n = t.filename.replace(/\.[^/.]+$/, "");
    return Object.assign({}, e, {
      displayFilename: n
    });
  },
  setDelay: function (e, t) {
    return Object.assign({}, e, {
      delay: t.seconds
    });
  },
  setPitch: function (e, t) {
    var n = {
      octives: e.pitch.octives,
      semitones: e.pitch.semitones,
      cents: e.pitch.cents
    };
    n[t.value] = t.amount;
    return Object.assign({}, e, {
      pitch: n
    });
  },
  changePitch: function (e, t) {
    var n = {
      octives: {
        m: 1,
        max: 3
      },
      semitones: {
        m: 1,
        max: 12
      },
      cents: {
        m: 10,
        max: 100
      }
    }[t.value];
    var r = n.m;
    var o = n.max;
    var a = -o;
    var i = e.pitch[t.value];
    var s = i + r * t.amount;
    if (!(s > o) && !(s < a)) {
      var u = {
        octives: e.pitch.octives,
        semitones: e.pitch.semitones,
        cents: e.pitch.cents
      };
      u[t.value] = s;
      return Object.assign({}, e, {
        pitch: u
      });
    }
  },
  setPlaybackTime: function (e, t) {
    if (e.playbackTime !== t.time) {
      return Object.assign({}, e, {
        playbackTime: t.time
      });
    }
  }
});
module.exports = exports.default;