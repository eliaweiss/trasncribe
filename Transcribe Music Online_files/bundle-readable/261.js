function r(e, t, n, r) {
  o.call(this, e, t, n, r);
}
var o = require("./28.js");
var a = require("./55.js");
var i = require("./267.js");
var s = require("./56.js");
var u = {
  key: i,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: s,
  charCode: function (e) {
    if (e.type === "keypress") {
      return a(e);
    } else {
      return 0;
    }
  },
  keyCode: function (e) {
    if (e.type === "keydown" || e.type === "keyup") {
      return e.keyCode;
    } else {
      return 0;
    }
  },
  which: function (e) {
    if (e.type === "keypress") {
      return a(e);
    } else if (e.type === "keydown" || e.type === "keyup") {
      return e.keyCode;
    } else {
      return 0;
    }
  }
};
o.augmentClass(r, u);
module.exports = r;