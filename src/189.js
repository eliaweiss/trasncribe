function r(e, t, n) {
  for (var r = -1, o = i(t), a = o.length; ++r < a;) {
    var s = o[r];
    var u = e[s];
    var l = n(u, t[s], s, e, t);
    if (!(l === l ? l === u : u !== u) || u === undefined && !(s in e)) {
      e[s] = l;
    }
  }
  return e;
}
var o = require("./183.js");
var a = require("./186.js");
var i = require("./76.js");
var s = a(function (e, t, n) {
  if (n) {
    return r(e, t, n);
  } else {
    return o(e, t);
  }
});
module.exports = s;