function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return function (e) {
    return function (n, r, o) {
      var i = e(n, r, o);
      var u = i.dispatch;
      var l = [];
      var c = {
        getState: i.getState,
        dispatch: function (e) {
          return u(e);
        }
      };
      l = t.map(function (e) {
        return e(c);
      });
      u = s.default.apply(undefined, l)(i.dispatch);
      return a({}, i, {
        dispatch: u
      });
    };
  };
}
exports.__esModule = true;
var a = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) {
      if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
  }
  return e;
};
exports.default = o;
var i = require("./112.js");
var s = r(i);