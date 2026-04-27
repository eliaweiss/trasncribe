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
var u = require("../../generated/2.js");
var l = r(u);
var c = function (e) {
  function t(e) {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.state = {};
  }
  a(t, e);
  i(t, [{
    key: "mouseEvent",
    value: function (e, t) {
      var n = this.refs.main;
      if (!this.mouseEventing) {
        this.mouseEventing = true;
        for (var r = 1; r < n.childNodes.length; r++) {
          var o = new MouseEvent(t.type, t.nativeEvent);
          var a = n.childNodes[r].dispatchEvent(o);
          if (!a) {
            break;
          }
        }
        this.mouseEventing = false;
        t.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return l.default.createElement("div", {
        ref: "main",
        className: "mouse-container",
        style: {
          height: this.props.height
        }
      }, l.default.createElement("div", {
        className: "overlay",
        style: {
          height: this.props.height,
          zIndex: 39,
          width: this.props.width
        },
        onClick: function (t) {
          return e.mouseEvent("onMouseClick", t);
        },
        onMouseUp: function (t) {
          return e.mouseEvent("onMouseUp", t);
        },
        onMouseDown: function (t) {
          return e.mouseEvent("onMouseDown", t);
        },
        onDoubleClick: function (t) {
          return e.mouseEvent("onMouseDoubleClick", t);
        },
        onMouseEnter: function (t) {
          return e.mouseEvent("onMouseEnter", t);
        },
        onMouseLeave: function (t) {
          return e.mouseEvent("onMouseLeave", t);
        },
        onMouseMove: function (t) {
          return e.mouseEvent("onMouseMove", t);
        }
      }), this.props.children);
    }
  }]);
  return t;
}(l.default.Component);
exports.default = c;
module.exports = exports.default;