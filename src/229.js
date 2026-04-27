function r(e, t, n) {
  var r = e[n] === undefined;
  if (t != null && r) {
    e[n] = a(t, null);
  }
}
var o = require("./16.js");
var a = require("./59.js");
var i = require("./62.js");
var s = require("./63.js");
require("./4.js");
var u = {
  instantiateChildren: function (e, t, n) {
    if (e == null) {
      return null;
    }
    var o = {};
    s(e, r, o);
    return o;
  },
  updateChildren: function (e, t, n, r) {
    if (!t && !e) {
      return null;
    }
    var s;
    for (s in t) {
      if (t.hasOwnProperty(s)) {
        var u = e && e[s];
        var l = u && u._currentElement;
        var c = t[s];
        if (u != null && i(l, c)) {
          o.receiveComponent(u, c, n, r);
          t[s] = u;
        } else {
          if (u) {
            o.unmountComponent(u, s);
          }
          var p = a(c, null);
          t[s] = p;
        }
      }
    }
    for (s in e) {
      if (!!e.hasOwnProperty(s) && (!t || !t.hasOwnProperty(s))) {
        o.unmountComponent(e[s]);
      }
    }
    return t;
  },
  unmountChildren: function (e) {
    for (var t in e) {
      if (e.hasOwnProperty(t)) {
        var n = e[t];
        o.unmountComponent(n);
      }
    }
  }
};
module.exports = u;