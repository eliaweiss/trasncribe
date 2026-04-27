function r(e) {
  return m[e];
}
function o(e, t) {
  if (e && e.key != null) {
    return i(e.key);
  } else {
    return t.toString(36);
  }
}
function a(e) {
  return ("" + e).replace(v, r);
}
function i(e) {
  return "$" + a(e);
}
function s(e, t, n, r) {
  var a = typeof e;
  if (a === "undefined" || a === "boolean") {
    e = null;
  }
  if (e === null || a === "string" || a === "number" || l.isValidElement(e)) {
    n(r, e, t === "" ? f + o(e, 0) : t);
    return 1;
  }
  var u;
  var c;
  var m = 0;
  var v = t === "" ? f : t + h;
  if (Array.isArray(e)) {
    for (var y = 0; y < e.length; y++) {
      u = e[y];
      c = v + o(u, y);
      m += s(u, c, n, r);
    }
  } else {
    var g = p(e);
    if (g) {
      var b;
      var E = g.call(e);
      if (g !== e.entries) {
        var w = 0;
        while (!(b = E.next()).done) {
          u = b.value;
          c = v + o(u, w++);
          m += s(u, c, n, r);
        }
      } else {
        while (!(b = E.next()).done) {
          var C = b.value;
          if (C) {
            u = C[1];
            c = v + i(C[0]) + h + o(u, 0);
            m += s(u, c, n, r);
          }
        }
      }
    } else if (a === "object") {
      String(e);
      d(false);
    }
  }
  return m;
}
function u(e, t, n) {
  if (e == null) {
    return 0;
  } else {
    return s(e, "", t, n);
  }
}
require("./13.js");
var l = require("./8.js");
var c = require("./21.js");
var p = require("./58.js");
var d = require("./1.js");
require("./4.js");
var f = c.SEPARATOR;
var h = ":";
var m = {
  "=": "=0",
  ".": "=1",
  ":": "=2"
};
var v = /[=.:]/g;
module.exports = u;