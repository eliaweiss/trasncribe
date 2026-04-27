var r = require("./1.js");
var o = {
  isValidOwner: function (e) {
    return !!e && typeof e.attachRef == "function" && typeof e.detachRef == "function";
  },
  addComponentAsRefTo: function (e, t, n) {
    if (o.isValidOwner(n)) {
      undefined;
    } else {
      r(false);
    }
    n.attachRef(t, e);
  },
  removeComponentAsRefFrom: function (e, t, n) {
    if (o.isValidOwner(n)) {
      undefined;
    } else {
      r(false);
    }
    if (n.getPublicInstance().refs[t] === e.getPublicInstance()) {
      n.detachRef(t);
    }
  }
};
module.exports = o;