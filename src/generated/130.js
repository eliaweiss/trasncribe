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
var c = require("./19.js");
var p = r(c);
var d = function (e) {
  function t(e) {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.state = {
      isOpen: true
    };
  }
  a(t, e);
  i(t, [{
    key: "close",
    value: function () {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return l.default.createElement(p.default, {
        isOpen: this.props.isOpen && this.state.isOpen,
        onRequestClose: function () {
          return e.close();
        },
        className: "Modal__Bootstrap modal-dialog modal-sm"
      }, l.default.createElement("div", {
        className: "modal-content"
      }, l.default.createElement("div", {
        className: "modal-header"
      }, l.default.createElement("button", {
        type: "button",
        className: "close",
        onClick: function () {
          return e.close();
        }
      }, String.fromCharCode(215)), l.default.createElement("h4", {
        className: "modal-title"
      }, "Browser not supported")), l.default.createElement("div", {
        className: "modal-body"
      }, l.default.createElement("p", null, "Unfortunately your browser doesn't support the functions needed to load music from your computer."), l.default.createElement("p", null, "Try running the latest version of Google Chrome browser or Firefox to enable all functionality. You can download it ", l.default.createElement("a", {
        href: "http://www.google.com/chrome",
        target: "blank"
      }, "here"), "."), l.default.createElement("p", null, "You can still load videos from YouTube."), l.default.createElement("p", {
        className: "text-right"
      }, l.default.createElement("button", {
        className: "btn btn-primary",
        onClick: function () {
          return e.close();
        }
      }, "Ok")))));
    }
  }]);
  return t;
}(l.default.Component);
exports.default = d;
module.exports = exports.default;