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
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  if (!t || typeof t != "object" && typeof t != "function") {
    return e;
  } else {
    return t;
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
exports.__esModule = true;
exports.default = undefined;
var s = require("./2.js");
var u = require("./78.js");
var l = r(u);
var c = require("./80.js");
var p = r(c);
var d = require("./81.js");
r(d);
var f = function (e) {
  function t(n, r) {
    o(this, t);
    var i = a(this, e.call(this, n, r));
    i.store = n.store;
    return i;
  }
  i(t, e);
  t.prototype.getChildContext = function () {
    return {
      store: this.store
    };
  };
  t.prototype.render = function () {
    return s.Children.only(this.props.children);
  };
  return t;
}(s.Component);
exports.default = f;
f.propTypes = {
  store: p.default.isRequired,
  children: l.default.element.isRequired
};
f.childContextTypes = {
  store: p.default.isRequired
};