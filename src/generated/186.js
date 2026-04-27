function r(e) {
  return i(function (t, n) {
    var r = -1;
    var i = t == null ? 0 : n.length;
    var s = i > 2 ? n[i - 2] : undefined;
    var u = i > 2 ? n[2] : undefined;
    var l = i > 1 ? n[i - 1] : undefined;
    if (typeof s == "function") {
      s = o(s, l, 5);
      i -= 2;
    } else {
      s = typeof l == "function" ? l : undefined;
      i -= s ? 1 : 0;
    }
    if (u && a(n[0], n[1], u)) {
      s = i < 3 ? undefined : s;
      i = 1;
    }
    while (++r < i) {
      var c = n[r];
      if (c) {
        e(t, c, s);
      }
    }
    return t;
  });
}
var o = require("./185.js");
var a = require("./188.js");
var i = require("./192.js");
module.exports = r;