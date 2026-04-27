function r(e) {
  var t = i.call(e, u);
  var n = e[u];
  try {
    e[u] = undefined;
    var r = true;
  } catch (e) {}
  var o = s.call(e);
  if (r) {
    if (t) {
      e[u] = n;
    } else {
      delete e[u];
    }
  }
  return o;
}
var o = require("./77.js");
var a = Object.prototype;
var i = a.hasOwnProperty;
var s = a.toString;
var u = o ? o.toStringTag : undefined;
module.exports = r;