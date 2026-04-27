function r(e, t, n, r) {
  o.call(this, e, t, n, r);
}
var o = require("./28.js");
var a = require("./56.js");
var i = {
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: a
};
o.augmentClass(r, i);
module.exports = r;