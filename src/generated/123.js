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
  function t(e) {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.state = {
      currentTime: 0
    };
    this.throttledSetCurrentTime = (0, c.throttle)(this.setCurrentTime, 1000 / 15, this);
  }
  a(t, e);
  i(t, [{
    key: "componentWillReceiveProps",
    value: function (e) {
      this.update(e);
      this.setCurrentTime(e);
    }
  }, {
    key: "update",
    value: function (e) {
      var t = this;
      (0, c.cancelAnimationFrame)(this.frameId);
      e = e || this.props;
      this.throttledSetCurrentTime(e);
      if (e.isPlaying) {
        this.frameId = (0, c.requestAnimationFrame)(function () {
          return t.update();
        });
      }
    }
  }, {
    key: "setCurrentTime",
    value: function (e) {
      this.setState({
        currentTime: e.getCurrentTime()
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = (0, c.formatTime)(this.state.currentTime, true);
      return l.default.createElement("div", {
        className: "currentTime"
      }, e);
    }
  }]);
  return t;
}(l.default.Component);
exports.default = p;
module.exports = exports.default;