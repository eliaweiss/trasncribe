var r = require("./264.js");
var o = /\/?>/;
var a = {
  CHECKSUM_ATTR_NAME: "data-react-checksum",
  addChecksumToMarkup: function (e) {
    var t = r(e);
    return e.replace(o, " " + a.CHECKSUM_ATTR_NAME + "=\"" + t + "\"$&");
  },
  canReuseMarkup: function (e, t) {
    var n = t.getAttribute(a.CHECKSUM_ATTR_NAME);
    n = n && parseInt(n, 10);
    var o = r(e);
    return o === n;
  }
};
module.exports = a;