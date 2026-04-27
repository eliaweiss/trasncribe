function n(e) {
  return o(e) && h.call(e, "callee") && (!v.call(e, "callee") || m.call(e) == c);
}
function r(e) {
  return e != null && i(e.length) && !a(e);
}
function o(e) {
  return u(e) && r(e);
}
function a(e) {
  var t = s(e) ? m.call(e) : "";
  return t == p || t == d;
}
function i(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= l;
}
function s(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function u(e) {
  return !!e && typeof e == "object";
}
var l = 9007199254740991;
var c = "[object Arguments]";
var p = "[object Function]";
var d = "[object GeneratorFunction]";
var f = Object.prototype;
var h = f.hasOwnProperty;
var m = f.toString;
var v = f.propertyIsEnumerable;
module.exports = n;