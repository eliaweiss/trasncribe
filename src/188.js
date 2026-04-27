function n(e) {
  return function (t) {
    if (t == null) {
      return undefined;
    } else {
      return t[e];
    }
  };
}
function r(e) {
  return e != null && i(c(e));
}
function o(e, t) {
  e = typeof e == "number" || u.test(e) ? +e : -1;
  t = t == null ? l : t;
  return e > -1 && e % 1 == 0 && e < t;
}
function a(e, t, n) {
  if (!s(n)) {
    return false;
  }
  var a = typeof t;
  if (a == "number" ? r(n) && o(t, n.length) : a == "string" && t in n) {
    var i = n[t];
    if (e === e) {
      return e === i;
    } else {
      return i !== i;
    }
  }
  return false;
}
function i(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= l;
}
function s(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var u = /^\d+$/;
var l = 9007199254740991;
var c = n("length");
module.exports = a;