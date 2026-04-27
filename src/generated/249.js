var r = require("./107.js");
var o = {
  getChildMapping: function (e) {
    if (e) {
      return r(e);
    } else {
      return e;
    }
  },
  mergeChildMappings: function (e, t) {
    function n(n) {
      if (t.hasOwnProperty(n)) {
        return t[n];
      } else {
        return e[n];
      }
    }
    e = e || {};
    t = t || {};
    var r = {};
    var o = [];
    for (var a in e) {
      if (t.hasOwnProperty(a)) {
        if (o.length) {
          r[a] = o;
          o = [];
        }
      } else {
        o.push(a);
      }
    }
    var i;
    var s = {};
    for (var u in t) {
      if (r.hasOwnProperty(u)) {
        for (i = 0; i < r[u].length; i++) {
          var l = r[u][i];
          s[r[u][i]] = n(l);
        }
      }
      s[u] = n(u);
    }
    for (i = 0; i < o.length; i++) {
      s[o[i]] = n(o[i]);
    }
    return s;
  }
};
module.exports = o;