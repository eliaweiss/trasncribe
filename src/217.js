var r = require("./82.js");
var o = require("./5.js");
var a = require("./10.js");
require("./166.js");
var i = require("./265.js");
var s = require("./171.js");
var u = require("./175.js");
require("./4.js");
var l = u(function (e) {
  return s(e);
});
var c = false;
var p = "cssFloat";
if (o.canUseDOM) {
  var d = document.createElement("div").style;
  try {
    d.font = "";
  } catch (e) {
    c = true;
  }
  if (document.documentElement.style.cssFloat === undefined) {
    p = "styleFloat";
  }
}
var f = {
  createMarkupForStyles: function (e) {
    var t = "";
    for (var n in e) {
      if (e.hasOwnProperty(n)) {
        var r = e[n];
        if (r != null) {
          t += l(n) + ":";
          t += i(n, r) + ";";
        }
      }
    }
    return t || null;
  },
  setValueForStyles: function (e, t) {
    var n = e.style;
    for (var o in t) {
      if (t.hasOwnProperty(o)) {
        var a = i(o, t[o]);
        if (o === "float") {
          o = p;
        }
        if (a) {
          n[o] = a;
        } else {
          var s = c && r.shorthandPropertyExpansions[o];
          if (s) {
            for (var u in s) {
              n[u] = "";
            }
          } else {
            n[o] = "";
          }
        }
      }
    }
  }
};
a.measureMethods(f, "CSSPropertyOperations", {
  setValueForStyles: "setValueForStyles"
});
module.exports = f;