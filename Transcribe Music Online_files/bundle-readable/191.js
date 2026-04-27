function n(e) {
  return !!e && typeof e == "object";
}
function r(e, t) {
  var n = e == null ? undefined : e[t];
  if (s(n)) {
    return n;
  } else {
    return undefined;
  }
}
function o(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= y;
}
function a(e) {
  return i(e) && h.call(e) == l;
}
function i(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function s(e) {
  return e != null && (a(e) ? m.test(d.call(e)) : n(e) && c.test(e));
}
var u = "[object Array]";
var l = "[object Function]";
var c = /^\[object .+?Constructor\]$/;
var p = Object.prototype;
var d = Function.prototype.toString;
var f = p.hasOwnProperty;
var h = p.toString;
var m = RegExp("^" + d.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var v = r(Array, "isArray");
var y = 9007199254740991;
var g = v || function (e) {
  return n(e) && o(e.length) && h.call(e) == u;
};
module.exports = g;