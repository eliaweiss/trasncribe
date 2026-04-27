var r = require("./85.js");
var o = require("./89.js");
var a = require("./3.js");
require("./4.js");
var i = o.valueContextKey;
var s = {
  mountWrapper: function (e, t, n) {
    var r = n[i];
    var o = null;
    if (r != null) {
      o = false;
      if (Array.isArray(r)) {
        for (var a = 0; a < r.length; a++) {
          if ("" + r[a] == "" + t.value) {
            o = true;
            break;
          }
        }
      } else {
        o = "" + r == "" + t.value;
      }
    }
    e._wrapperState = {
      selected: o
    };
  },
  getNativeProps: function (e, t, n) {
    var o = a({
      selected: undefined,
      children: undefined
    }, t);
    if (e._wrapperState.selected != null) {
      o.selected = e._wrapperState.selected;
    }
    var i = "";
    r.forEach(t.children, function (e) {
      if (e != null) {
        if (typeof e == "string" || typeof e == "number") {
          i += e;
        }
      }
    });
    if (i) {
      o.children = i;
    }
    return o;
  }
};
module.exports = s;