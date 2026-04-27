function r(e, t) {
  var n = true;
  e: while (n) {
    var r = e;
    var a = t;
    n = false;
    if (r && a) {
      if (r === a) {
        return true;
      }
      if (o(r)) {
        return false;
      }
      if (o(a)) {
        e = r;
        t = a.parentNode;
        n = true;
        continue e;
      }
      if (r.contains) {
        return r.contains(a);
      } else {
        return !!r.compareDocumentPosition && !!(r.compareDocumentPosition(a) & 16);
      }
    }
    return false;
  }
}
var o = require("./173.js");
module.exports = r;