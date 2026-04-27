function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("../generated/2.js");
var a = r(o);
var i = require("../generated/146.js");
var s = r(i);
var u = require("./AppProvider.js");
r(u);
var l = require("../generated/19.js");
var c = r(l);
var p = require("../generated/204.js");
var d = r(p);
var f = require("../generated/33.js");
var h = r(f);
require("../generated/278.js");
if (typeof window != "undefined") {
  c.default.setAppElement(document.body);
  h.default.render(a.default.createElement(s.default, null), document);
}
exports.default = function (e, t) {
  var n = d.default.renderToString(a.default.createElement(s.default, e));
  t(null, "<!DOCTYPE html>" + n);
};
module.exports = exports.default;