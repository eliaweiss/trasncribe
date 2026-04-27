function r(e, t, n, r) {
  o.call(this, e, t, n, r);
}
var o = require("./17.js");
var a = require("./57.js");
var i = {
  view: function (e) {
    if (e.view) {
      return e.view;
    }
    var t = a(e);
    if (t != null && t.window === t) {
      return t;
    }
    var n = t.ownerDocument;
    if (n) {
      return n.defaultView || n.parentWindow;
    } else {
      return window;
    }
  },
  detail: function (e) {
    return e.detail || 0;
  }
};
o.augmentClass(r, i);
module.exports = r;