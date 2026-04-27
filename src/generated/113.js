function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o(e, t, n) {
  function r() {
    if (y === v) {
      y = v.slice();
    }
  }
  function a() {
    return m;
  }
  function s(e) {
    if (typeof e != "function") {
      throw new Error("Expected listener to be a function.");
    }
    var t = true;
    r();
    y.push(e);
    return function () {
      if (t) {
        t = false;
        r();
        var n = y.indexOf(e);
        y.splice(n, 1);
      }
    };
  }
  function c(e) {
    if (!(0, i.default)(e)) {
      throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
    }
    if (typeof e.type == "undefined") {
      throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
    }
    if (g) {
      throw new Error("Reducers may not dispatch actions.");
    }
    try {
      g = true;
      m = h(m, e);
    } finally {
      g = false;
    }
    for (var t = v = y, n = 0; n < t.length; n++) {
      var r = t[n];
      r();
    }
    return e;
  }
  function p(e) {
    if (typeof e != "function") {
      throw new Error("Expected the nextReducer to be a function.");
    }
    h = e;
    c({
      type: l.INIT
    });
  }
  function d() {
    var e;
    var t = s;
    e = {
      subscribe: function (e) {
        function n() {
          if (e.next) {
            e.next(a());
          }
        }
        if (typeof e != "object") {
          throw new TypeError("Expected the observer to be an object.");
        }
        n();
        var r = t(n);
        return {
          unsubscribe: r
        };
      }
    };
    e[u.default] = function () {
      return this;
    };
    return e;
  }
  var f;
  if (typeof t == "function" && typeof n == "undefined") {
    n = t;
    t = undefined;
  }
  if (typeof n != "undefined") {
    if (typeof n != "function") {
      throw new Error("Expected the enhancer to be a function.");
    }
    return n(o)(e, t);
  }
  if (typeof e != "function") {
    throw new Error("Expected the reducer to be a function.");
  }
  var h = e;
  var m = t;
  var v = [];
  var y = v;
  var g = false;
  c({
    type: l.INIT
  });
  f = {
    dispatch: c,
    subscribe: s,
    getState: a,
    replaceReducer: p
  };
  f[u.default] = d;
  return f;
}
exports.__esModule = true;
exports.ActionTypes = undefined;
exports.default = o;
var a = require("./44.js");
var i = r(a);
var s = require("./275.js");
var u = r(s);
var l = exports.ActionTypes = {
  INIT: "@@redux/INIT"
};