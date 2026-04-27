function r(e, t, n, r) {
  o.call(this, e, t, n, r);
}
var o = require("./17.js");
var a = {
  clipboardData: function (e) {
    if ("clipboardData" in e) {
      return e.clipboardData;
    } else {
      return window.clipboardData;
    }
  }
};
o.augmentClass(r, a);
module.exports = r;