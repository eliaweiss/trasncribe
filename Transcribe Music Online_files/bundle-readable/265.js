function r(e, t) {
  var n = t == null || typeof t == "boolean" || t === "";
  if (n) {
    return "";
  }
  var r = isNaN(t);
  if (r || t === 0 || a.hasOwnProperty(e) && a[e]) {
    return "" + t;
  } else {
    if (typeof t == "string") {
      t = t.trim();
    }
    return t + "px";
  }
}
var o = require("./82.js");
var a = o.isUnitlessNumber;
module.exports = r;