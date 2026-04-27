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
require("./34.js");
var p = require("./31.js");
var d = o(p);
function h(e, t) {
  return c.default.createElement("div", null, c.default.createElement("h2", {
    className: "question"
  }, e), c.default.createElement("p", {
    className: "answer"
  }, t));
}
var m = function (e) {
  function t() {
    a(this, t);
    u(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
  }
  i(t, e);
  s(t, [{
    key: "close",
    value: function () {
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = "";
      return c.default.createElement(d.default, {
        isOpen: this.props.isOpen,
        onClose: function () {
          return e.close();
        },
        style: {
          content: {
            maxWidth: "800px",
            width: "100%"
          }
        },
        footer: c.default.createElement("button", {
          className: "btn btn-primary",
          onClick: function () {
            return e.close();
          }
        }, "Close")
      }, h("How can I preserve my progress?", "Saving is disabled for now. A localStorage-based save flow will be added later."), h("I need something else.", t));
    }
  }]);
  return t;
}(c.default.Component);
exports.default = m;
module.exports = exports.default;