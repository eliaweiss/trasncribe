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
    this.update = this.update.bind(this);
    this.state = {
      position: 0
    };
    this.throttledSetPosition = (0, c.throttle)(this.setPosition, 1000 / 60, this);
  }
  a(t, e);
  i(t, [{
    key: "onDblClick",
    value: function (e) {
      if (this.props.onDoubleClick) {
        var t = (0, c.relX)(e) / this.props.width;
        this.props.onDoubleClick(t);
        this.setState({
          position: this.props.getPosition()
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function (e) {
      this.update(e);
    }
  }, {
    key: "update",
    value: function (e) {
      var t = this;
      (0, c.cancelAnimationFrame)(this.frameId);
      this.throttledSetPosition(e);
      if (e.isPlaying) {
        this.frameId = (0, c.requestAnimationFrame)(function () {
          return t.update(t.props);
        });
      } else {
        this.frameId = null;
      }
    }
  }, {
    key: "setPosition",
    value: function (e) {
      this.setState({
        position: e.getPosition()
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.state.position * this.props.width;
      return l.default.createElement("div", {
        onDoubleClick: function (t) {
          return e.onDblClick(t);
        },
        style: {
          width: this.props.width
        },
        className: this.props.className,
        id: this.props.id,
        height: "224"
      }, l.default.createElement("div", {
        className: "position-line",
        style: {
          left: t
        }
      }));
    }
  }]);
  return t;
}(l.default.Component);
exports.default = p;
module.exports = exports.default;