function r(e, t, n) {
  var r = e;
  var o = r[n] === undefined;
  if (o && t != null) {
    r[n] = t;
  }
}
function o(e) {
  if (e == null) {
    return e;
  }
  var t = {};
  a(e, r, t);
  return t;
}
var a = require("./63.js");
require("./4.js");
module.exports = o;