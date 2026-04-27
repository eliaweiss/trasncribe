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
function i(e) {
  if (e) {
    var t = function () {
      var t = {
        max: e.pop(),
        min: e.shift()
      };
      var n = t.max - t.min;
      e.forEach(function (e) {
        var r = Math.round(e / n * 100) + "%";
        t[r] = e;
      });
      return {
        v: {
          start: [100],
          snap: true,
          range: t
        }
      };
    }();
    if (typeof t == "object") {
      return t.v;
    }
  }
  return {
    start: [100],
    step: 1,
    range: {
      min: [25],
      max: [165]
    }
  };
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
var c = r(l);
var p = require("./19.js");
var d = r(p);
var f = require("./6.js");
var h = require("./75.js");
var m = function (e) {
  function t(e) {
    o(this, t);
    u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.state = {
      isModalOpen: false
    };
  }
  a(t, e);
  s(t, [{
    key: "setupSlider",
    value: function (e) {
      var t = this.refs.tempoSlider;
      if (e && e.destroy && t.noUiSlider) {
        t.noUiSlider.destroy();
      }
      h.create(t, i(this.props.tempoValues));
      var n = function (e) {
        this.props.onSetSpeed(parseInt(e));
      }.bind(this);
      t.noUiSlider.on("slide", n);
      t.noUiSlider.on("set", n);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      this.setupSlider();
    }
  }, {
    key: "componentDidUpdate",
    value: function (e, t) {
      if (this.props.speed !== parseInt(this.refs.tempoSlider.noUiSlider.get())) {
        this.refs.tempoSlider.noUiSlider.set(this.props.speed);
      }
      if (e.tempoValues !== this.props.tempoValues) {
        this.setupSlider({
          destroy: true
        });
      }
    }
  }, {
    key: "closeModal",
    value: function () {
      this.setState({
        isModalOpen: false
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props.speed + "%";
      return c.default.createElement("div", {
        className: "group",
        style: {
          display: (0, f.display)(this.props.visible)
        }
      }, c.default.createElement("span", {
        style: {
          marginLeft: "-1em"
        },
        className: "flashicon emboss"
      }, "Slow"), c.default.createElement("div", {
        ref: "tempoSlider",
        id: "tempo-slider"
      }), c.default.createElement("span", {
        className: "flashicon emboss",
        style: {
          marginRight: "-1em"
        }
      }, "Fast"), c.default.createElement("span", {
        className: "flashicon emboss",
        style: {
          marginRight: "-2.25em",
          float: "none"
        }
      }, "Faster"), c.default.createElement("div", {
        style: {
          paddingTop: ".25em"
        }
      }, c.default.createElement("span", null, t), c.default.createElement("br", null), c.default.createElement("a", {
        href: "#",
        className: "youtube-visible",
        style: {
          fontSize: ".7em"
        },
        onClick: function () {
          return e.setState({
            isModalOpen: true
          });
        }
      }, "Why are these speeds limited?")), c.default.createElement(d.default, {
        isOpen: this.state.isModalOpen,
        onRequestClose: function () {
          return e.closeModal();
        },
        className: "Modal__Bootstrap modal-dialog modal-sm"
      }, c.default.createElement("div", {
        className: "modal-content"
      }, c.default.createElement("div", {
        className: "modal-header"
      }, c.default.createElement("button", {
        type: "button",
        className: "close",
        onClick: function () {
          return e.closeModal();
        }
      }, "×"), c.default.createElement("h4", {
        className: "modal-title"
      }, "Why these speeds only?")), c.default.createElement("div", {
        className: "modal-body"
      }, c.default.createElement("p", null, "YouTube determines the playback speeds available for each video. Typically, videos are restricted to 50%, 100%, and 125% playback speeds."), c.default.createElement("p", null, "However, if you load an MP3, you have the flexibility to play it at much slower speeds, allowing for greater control over the playback speed. Simply load an MP3 to experience this expanded range of speeds."), c.default.createElement("p", {
        className: "text-right"
      }, c.default.createElement("button", {
        className: "btn btn-primary",
        onClick: function () {
          e.closeModal();
          e.props.onChooseAudio();
        }
      }, "Load an MP3"))))));
    }
  }]);
  return t;
}(c.default.Component);
exports.default = m;
module.exports = exports.default;