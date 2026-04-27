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
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = function () {
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
function u(e, t, n) {
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
var l = require("./2.js");
var c = o(l);
var p = function (t) {
  function n(e) {
    a(this, n);
    u(Object.getPrototypeOf(n.prototype), "constructor", this).call(this, e);
    this.state = {
      isDragging: false
    };
  }
  i(n, t);
  s(n, [{
    key: "componentDidMount",
    value: function () {
      this.setupFileDrop();
    }
  }, {
    key: "setupFileDrop",
    value: function () {
      var t = this;
      var n = this.refs.landing;
      var r = this.refs.dropmask;
      n.addEventListener("dragover", function (e) {
        t.setState({
          isDragging: true
        });
        e.preventDefault();
      });
      r.addEventListener("dragleave", function () {
        this.setState({
          isDragging: false
        });
        e.preventDefault();
      });
      r.addEventListener("drop", function (e, n) {
        t.setState({
          isDragging: false
        });
        t.props.onDropFile(e);
        e.preventDefault();
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this.state.isDragging ? "drag" : "";
      return c.default.createElement("div", {
        ref: "landing",
        id: "landing",
        className: "hidden-audio-loaded " + e
      }, c.default.createElement("div", {
        className: "container"
      }, c.default.createElement("div", {
        className: "hero-cont"
      }, c.default.createElement("div", {
        className: "hero"
      }, c.default.createElement("h1", {
        className: "title"
      }, c.default.createElement("span", {
        className: "bb"
      }, "Transcribe"), " music ", c.default.createElement("span", {
        style: {
          display: "block",
          paddingTop: "20px"
        }
      }, "like a pro.")), c.default.createElement("h2", {
        className: "tagline",
        style: {
          marginBottom: "1.5em"
        }
      }, "Slow down your favorite songs so you can learn how they are played."), c.default.createElement("button", {
        className: "btn btn-primary btn-lg",
        onClick: this.props.onChooseAudio
      }, "Load an MP3"), " ", c.default.createElement("button", {
        className: "btn btn-primary btn-lg",
        onClick: this.props.onChooseVideo
      }, "Load a YouTube Video")), c.default.createElement("div", {
        id: "screenshot",
        className: "main-img"
      }, c.default.createElement("img", {
        src: "screenshot.png"
      })))), c.default.createElement("div", {
        className: "lightbox visible-drag"
      }, c.default.createElement("p", {
        className: "message"
      }, "Drop file to load song..."), c.default.createElement("div", {
        ref: "dropmask",
        className: "dropmask"
      })), c.default.createElement("div", {
        className: "lightbox visible-audio-loading"
      }, c.default.createElement("div", {
        className: "message"
      }, "Loading audio...", c.default.createElement("br", null), c.default.createElement("div", {
        className: "gps_ring"
      }), c.default.createElement("div", {
        className: "gps_ring"
      }), c.default.createElement("div", {
        className: "gps_ring"
      }))));
    }
  }]);
  return n;
}(c.default.Component);
exports.default = p;
module.exports = exports.default;