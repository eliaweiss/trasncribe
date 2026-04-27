function r(e, t, n, r) {
  o.call(this, e, t, n, r);
}
var o = require("./28.js");
var a = require("./105.js");
var i = require("./56.js");
var s = {
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: i,
  button: function (e) {
    var t = e.button;
    if ("which" in e) {
      return t;
    } else if (t === 2) {
      return 2;
    } else if (t === 4) {
      return 1;
    } else {
      return 0;
    }
  },
  buttons: null,
  relatedTarget: function (e) {
    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
  },
  pageX: function (e) {
    if ("pageX" in e) {
      return e.pageX;
    } else {
      return e.clientX + a.currentScrollLeft;
    }
  },
  pageY: function (e) {
    if ("pageY" in e) {
      return e.pageY;
    } else {
      return e.clientY + a.currentScrollTop;
    }
  }
};
o.augmentClass(r, s);
module.exports = r;