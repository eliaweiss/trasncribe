function r(e) {
  var t = e.match(c);
  return t && t[1].toLowerCase();
}
function o(e, t) {
  var n = l;
  if (l) {
    undefined;
  } else {
    u(false);
  }
  var o = r(e);
  var a = o && s(o);
  if (a) {
    n.innerHTML = a[1] + e + a[2];
    for (var c = a[0]; c--;) {
      n = n.lastChild;
    }
  } else {
    n.innerHTML = e;
  }
  var p = n.getElementsByTagName("script");
  if (p.length) {
    if (t) {
      undefined;
    } else {
      u(false);
    }
    i(p).forEach(t);
  }
  var d = i(n.childNodes);
  while (n.lastChild) {
    n.removeChild(n.lastChild);
  }
  return d;
}
var a = require("./5.js");
var i = require("./167.js");
var s = require("./73.js");
var u = require("./1.js");
var l = a.canUseDOM ? document.createElement("div") : null;
var c = /^\s*<(\w+)/;
module.exports = o;