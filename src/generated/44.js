function r(e) {
  if (!i(e) || o(e) != s) {
    return false;
  }
  var t = a(e);
  if (t === null) {
    return true;
  }
  var n = p.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && c.call(n) == d;
}
var o = require("./193.js");
var a = require("./195.js");
var i = require("./200.js");
var s = "[object Object]";
var u = Function.prototype;
var l = Object.prototype;
var c = u.toString;
var p = l.hasOwnProperty;
var d = c.call(Object);
module.exports = r;