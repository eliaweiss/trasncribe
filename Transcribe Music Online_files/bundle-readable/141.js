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
function a(e, t) {
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
Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
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
function s(e, t, n) {
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
var u = require("./2.js");
var l = r(u);
var c = function (e) {
  function t(e) {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.averages = [];
  }
  a(t, e);
  i(t, [{
    key: "componentDidMount",
    value: function () {
      this.canvas = this.refs.canvas;
      this.waveform = this.canvas.getContext("2d");
      this.drawBuffer();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function (e) {
      if (e.audioBuffer !== this.props.audioBuffer) {
        this.onAudioBufferChanged(e.audioBuffer);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function (e) {
      return e.audioBuffer !== this.props.audioBuffer || e.width !== this.props.width || e.height !== this.props.height;
    }
  }, {
    key: "componentDidUpdate",
    value: function (e, t) {
      this.drawBuffer();
    }
  }, {
    key: "shadeColor",
    value: function (e, t) {
      var n = parseInt(e.slice(1), 16);
      var r = Math.round(t * 2.55);
      var o = (n >> 16) + r;
      var a = (n >> 8 & 255) + r;
      var i = (n & 255) + r;
      return "#" + (16777216 + (o < 255 ? o < 1 ? 0 : o : 255) * 65536 + (a < 255 ? a < 1 ? 0 : a : 255) * 256 + (i < 255 ? i < 1 ? 0 : i : 255)).toString(16).slice(1);
    }
  }, {
    key: "waveformColor",
    value: function () {
      if (!this.gradient) {
        var e = this.shadeColor("#181C39", 10);
        var t = this.shadeColor(e, -10);
        this.gradient = this.waveform.createLinearGradient(0, 0, 0, this.canvas.offsetHeight);
        this.gradient.addColorStop(0, e);
        this.gradient.addColorStop(1, t);
      }
      return this.gradient;
    }
  }, {
    key: "drawBuffer",
    value: function () {
      var e = this.props.audioBuffer;
      if (e) {
        var t = this.canvas.offsetHeight / 2;
        var n = 1.5;
        var r = this.waveform;
        r.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
        r.fillStyle = this.waveformColor();
        r.lineWidth = 1;
        this.reduce(this.averages, this.canvas.offsetWidth, function (e, o, a) {
          var i = a * t * n;
          var s = o * t * -1 * n;
          var u = t - i;
          var l = i + s;
          r.fillRect(e, u, 1, l);
        });
      }
    }
  }, {
    key: "onAudioBufferChanged",
    value: function (e) {
      if (e && e.getChannelData) {
        var t = e.getChannelData(0);
        var n = this.canvas.offsetWidth * 20;
        var r = this.averages;
        r.length = 0;
        var o = 0;
        this.reduce(t, n, function (e, t, n) {
          r.push(t);
          r.push(n);
          o = Math.max(Math.max(o, n), -t);
        }, true);
        this.maxAmp = o;
      }
    }
  }, {
    key: "reduce2",
    value: function (e, t, n) {
      var r = Math.ceil(e.length / t);
      for (var o = Math.ceil(e.length / r), a = 0, i = 0; i < o; i++) {
        var s = 0;
        var u = 0;
        var l = 0;
        var c = 0;
        var p = 0;
        var d = 0;
        for (var f = 0; f < r; f++) {
          var h = e[a];
          if (h < 0) {
            s = h < s ? h : s;
            l++;
            p += h;
          } else {
            u = h > u ? h : u;
            c++;
            d += h;
          }
          a++;
        }
        n(i, s, u);
      }
    }
  }, {
    key: "reduce",
    value: function (e, t, n, r) {
      var o = e.length / t;
      for (var a = 0; a < t; a++) {
        var i = 0;
        var s = 0;
        var u = 0;
        var l = 0;
        var c = 0;
        var p = 0;
        for (var d = 0; d < o; d++) {
          var f = e[Math.round(a * o + d)];
          if (f < 0) {
            i = f < i ? f : i;
            u++;
            c += f;
          } else {
            s = f > s ? f : s;
            l++;
            p += f;
          }
        }
        n(a, c / u || 0, p / l || 0);
      }
    }
  }, {
    key: "render",
    value: function () {
      return l.default.createElement("canvas", {
        ref: "canvas",
        width: this.props.width,
        className: this.props.className,
        style: {
          top: 0,
          bottom: "18px"
        },
        height: this.props.height,
        id: "waveform-data"
      });
    }
  }]);
  return t;
}(l.default.Component);
exports.default = c;
module.exports = exports.default;