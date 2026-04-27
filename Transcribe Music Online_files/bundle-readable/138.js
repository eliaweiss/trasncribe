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
var c = require("./6.js");
var p = function (e) {
  function t() {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
  }
  a(t, e);
  i(t, [{
    key: "shouldComponentUpdate",
    value: function (e, t) {
      return this.props.width !== e.width || this.props.duration !== e.duration;
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = [];
      var n = [0.1, 0.25, 0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 1200];
      var r = 75;
      var o = this.props.width / r;
      var a = null;
      if (this.props.duration) {
        a = n.filter(function (t) {
          return e.props.duration / t <= o;
        })[0];
        var t = [];
        for (var i = a; i < this.props.duration; i += a) {
          t.push(i);
        }
      }
      var s = t.map(function (t) {
        var n = t * (e.props.width / e.props.duration);
        var r = (0, c.formatTime)(t, a <= 1);
        return l.default.createElement("div", {
          key: t,
          className: "time-tick",
          style: {
            left: n
          }
        }, l.default.createElement("label", null, r));
      });
      return l.default.createElement("div", {
        className: this.props.className,
        id: this.props.id,
        style: {
          width: this.props.width
        }
      }, s);
    }
  }]);
  return t;
}(l.default.Component);
exports.default = p;
module.exports = exports.default;