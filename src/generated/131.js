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
var c = require("./121.js");
var p = r(c);
var d = require("./6.js");
var f = function (e) {
  function t() {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
  }
  a(t, e);
  i(t, [{
    key: "render",
    value: function () {
      var e = this;
      return l.default.createElement("div", {
        className: "group",
        style: {
          paddingTop: ".5em",
          display: (0, d.display)(this.props.visible)
        }
      }, l.default.createElement("div", {
        className: "btn-spinner"
      }, l.default.createElement("p", null, "Octives"), l.default.createElement("button", {
        className: "btn btn-sm btn-default",
        onClick: function () {
          return e.props.onChangePitch(-1, "octives");
        }
      }, "−"), l.default.createElement(p.default, {
        type: "text",
        value: this.props.octives,
        onChange: function (t) {
          return e.props.onSetPitch(parseInt(t), "octives");
        }
      }), l.default.createElement("button", {
        className: "btn btn-sm btn-default",
        onClick: function () {
          return e.props.onChangePitch(1, "octives");
        }
      }, "+")), l.default.createElement("div", {
        className: "btn-spinner"
      }, l.default.createElement("p", null, "Semitones"), l.default.createElement("button", {
        className: "btn btn-sm btn-default",
        onClick: function () {
          return e.props.onChangePitch(-1, "semitones");
        }
      }, "−"), l.default.createElement(p.default, {
        type: "text",
        value: this.props.semitones,
        onChange: function (t) {
          return e.props.onSetPitch(parseInt(t), "semitones");
        }
      }), l.default.createElement("button", {
        className: "btn btn-sm btn-default",
        onClick: function () {
          return e.props.onChangePitch(1, "semitones");
        }
      }, "+")), l.default.createElement("div", {
        className: "btn-spinner"
      }, l.default.createElement("p", null, "Cents"), l.default.createElement("button", {
        className: "btn btn-sm btn-default",
        onClick: function () {
          return e.props.onChangePitch(-1, "cents");
        }
      }, "−"), l.default.createElement(p.default, {
        type: "text",
        value: this.props.cents,
        onChange: function (t) {
          return e.props.onSetPitch(parseInt(t), "cents");
        }
      }), l.default.createElement("button", {
        className: "btn btn-sm btn-default",
        onClick: function () {
          return e.props.onChangePitch(1, "cents");
        }
      }, "+")), l.default.createElement("div", {
        className: "clearfix"
      }));
    }
  }]);
  return t;
}(l.default.Component);
exports.default = f;
module.exports = exports.default;