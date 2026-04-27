function r(e) {
  var t = e.length;
  if (Array.isArray(e) || typeof e != "object" && typeof e != "function") {
    o(false);
  } else {
    undefined;
  }
  if (typeof t != "number") {
    o(false);
  } else {
    undefined;
  }
  if (t === 0 || t - 1 in e) {
    undefined;
  } else {
    o(false);
  }
  if (e.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(e);
    } catch (e) {}
  }
  var n = Array(t);
  for (var r = 0; r < t; r++) {
    n[r] = e[r];
  }
  return n;
}
var o = require("./1.js");
module.exports = r;