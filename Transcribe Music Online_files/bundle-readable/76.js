function r(e) {
  return function (t) {
    if (t == null) {
      return undefined;
    } else {
      return t[e];
    }
  };
}
function o(e) {
  return e != null && i(g(e));
}
function a(e, t) {
  e = typeof e == "number" || f.test(e) ? +e : -1;
  t = t == null ? y : t;
  return e > -1 && e % 1 == 0 && e < t;
}
function i(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= y;
}
function s(e) {
  var t = l(e);
  for (var n = t.length, r = n && e.length, o = !!r && i(r) && (d(e) || p(e)), s = -1, u = []; ++s < n;) {
    var c = t[s];
    if (o && a(c, r) || m.call(e, c)) {
      u.push(c);
    }
  }
  return u;
}
function u(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function l(e) {
  if (e == null) {
    return [];
  }
  if (!u(e)) {
    e = Object(e);
  }
  var t = e.length;
  t = t && i(t) && (d(e) || p(e)) && t || 0;
  var n = e.constructor;
  for (var r = -1, o = typeof n == "function" && n.prototype === e, s = Array(t), l = t > 0; ++r < t;) {
    s[r] = r + "";
  }
  for (var c in e) {
    if ((!l || !a(c, t)) && (c != "constructor" || !o && !!m.call(e, c))) {
      s.push(c);
    }
  }
  return s;
}
var c = require("./187.js");
var p = require("./190.js");
var d = require("./191.js");
var f = /^\d+$/;
var h = Object.prototype;
var m = h.hasOwnProperty;
var v = c(Object, "keys");
var y = 9007199254740991;
var g = r("length");
var b = v ? function (e) {
  var t = e == null ? undefined : e.constructor;
  if (typeof t == "function" && t.prototype === e || typeof e != "function" && o(e)) {
    return s(e);
  } else if (u(e)) {
    return v(e);
  } else {
    return [];
  }
} : s;
module.exports = b;