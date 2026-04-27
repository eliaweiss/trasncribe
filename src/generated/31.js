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
  function t() {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
  }
  a(t, e);
  i(t, [{
    key: "queueSelect",
    value: function () {
      var e = this;
      setTimeout(function () {
        e.props.focusElement().select();
        e.props.focusElement().focus();
      }, 1);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      if (this.props.focusElement && this.props.isOpen) {
        this.queueSelect();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (this.props.focusElement && this.props.isOpen && !e.isOpen) {
        this.queueSelect();
      }
    }
  }, {
    key: "onSubmit",
    value: function (e) {
      e.preventDefault();
      this.props.onSubmit(e);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = l.default.createElement("button", {
        type: "button",
        className: "close",
        onClick: function () {
          return e.props.onClose();
        }
      }, l.default.createElement("span", {
        "aria-hidden": "true"
      }, String.fromCharCode(215)), l.default.createElement("span", {
        className: "sr-only"
      }, "Close"));
      if (this.props.hasCloseX === false) {
        t = null;
      }
      return l.default.createElement(p.default, {
        isOpen: this.props.isOpen,
        onRequestClose: function () {
          return e.props.onClose();
        },
        className: "Modal__Bootstrap modal-dialog modal-sm",
        style: this.props.style
      }, l.default.createElement("div", {
        className: "modal-content"
      }, l.default.createElement("div", {
        className: "modal-header"
      }, t, this.props.header), l.default.createElement("form", {
        onSubmit: function (t) {
          return e.onSubmit(t);
        }
      }, l.default.createElement("div", {
        className: "modal-body"
      }, this.props.children), this.props.footer ? l.default.createElement("div", {
        className: "modal-footer"
      }, this.props.footer) : null)));
    }
  }]);
  return t;
}(l.default.Component);
exports.default = d;
module.exports = exports.default;