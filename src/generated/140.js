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
  return {
    start: [100],
    step: 1,
    range: {
      min: [1],
      max: [100]
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
r(p);
var d = require("./6.js");
var f = require("./75.js");
var h = function (e) {
  function t() {
    o(this, t);
    u(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
  }
  a(t, e);
  s(t, [{
    key: "setupSlider",
    value: function (e) {
      var t = this.refs.tempoSlider;
      if (e && e.destroy && t.noUiSlider) {
        t.noUiSlider.destroy();
      }
      f.create(t, i());
      var n = function (e) {
        this.props.onSetVolume(parseInt(e));
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
      if (this.props.volume !== parseInt(this.refs.tempoSlider.noUiSlider.get())) {
        this.refs.tempoSlider.noUiSlider.set(this.props.volume);
      }
      if (e.tempoValues !== this.props.tempoValues) {
        this.setupSlider({
          destroy: true
        });
      }
    }
  }, {
    key: "render",
    value: function () {
      return c.default.createElement("div", {
        className: "group",
        style: {
          display: (0, d.display)(this.props.visible)
        }
      }, c.default.createElement("div", {
        ref: "tempoSlider",
        id: "tempo-slider"
      }), c.default.createElement("div", {
        style: {
          paddingTop: ".25em"
        }
      }, "Volume"));
    }
  }]);
  return t;
}(c.default.Component);
exports.default = h;
module.exports = exports.default;