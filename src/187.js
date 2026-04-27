function n(e) {
  return !!e && typeof e == "object";
}
function r(e, t) {
  var n = e == null ? undefined : e[t];
  if (i(n)) {
    return n;
  } else {
    return undefined;
  }
}
function o(e) {
  return a(e) && d.call(e) == s;
}
function a(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function i(e) {
  return e != null && (o(e) ? f.test(c.call(e)) : n(e) && u.test(e));
}
var s = "[object Function]";
var u = /^\[object .+?Constructor\]$/;
var l = Object.prototype;
var c = Function.prototype.toString;
var p = l.hasOwnProperty;
var d = l.toString;
var f = RegExp("^" + c.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = r;