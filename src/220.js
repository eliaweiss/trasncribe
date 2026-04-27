function r(e) {
  return e.substring(1, e.indexOf(" "));
}
var o = require("./5.js");
var a = require("./168.js");
var i = require("./9.js");
var s = require("./73.js");
var u = require("./1.js");
var l = /^(<[^ \/>]+)/;
var c = "data-danger-index";
var p = {
  dangerouslyRenderMarkup: function (e) {
    if (o.canUseDOM) {
      undefined;
    } else {
      u(false);
    }
    var t;
    var n = {};
    for (var p = 0; p < e.length; p++) {
      if (e[p]) {
        undefined;
      } else {
        u(false);
      }
      t = r(e[p]);
      t = s(t) ? t : "*";
      n[t] = n[t] || [];
      n[t][p] = e[p];
    }
    var d = [];
    var f = 0;
    for (t in n) {
      if (n.hasOwnProperty(t)) {
        var h;
        var m = n[t];
        for (h in m) {
          if (m.hasOwnProperty(h)) {
            var v = m[h];
            m[h] = v.replace(l, "$1 " + c + "=\"" + h + "\" ");
          }
        }
        for (var y = a(m.join(""), i), g = 0; g < y.length; ++g) {
          var b = y[g];
          if (b.hasAttribute && b.hasAttribute(c)) {
            h = +b.getAttribute(c);
            b.removeAttribute(c);
            if (d.hasOwnProperty(h)) {
              u(false);
            } else {
              undefined;
            }
            d[h] = b;
            f += 1;
          }
        }
      }
    }
    if (f !== d.length) {
      u(false);
    } else {
      undefined;
    }
    if (d.length !== e.length) {
      u(false);
    } else {
      undefined;
    }
    return d;
  },
  dangerouslyReplaceNodeWithMarkup: function (e, t) {
    if (o.canUseDOM) {
      undefined;
    } else {
      u(false);
    }
    if (t) {
      undefined;
    } else {
      u(false);
    }
    if (e.tagName.toLowerCase() === "html") {
      u(false);
    } else {
      undefined;
    }
    var n;
    n = typeof t == "string" ? a(t, i)[0] : t;
    e.parentNode.replaceChild(n, e);
  }
};
module.exports = p;