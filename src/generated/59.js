function r(e) {
  return typeof e == "function" && typeof e.prototype != "undefined" && typeof e.prototype.mountComponent == "function" && typeof e.prototype.receiveComponent == "function";
}
function o(e) {
  var t;
  if (e === null || e === false) {
    t = new i(o);
  } else if (typeof e == "object") {
    var n = e;
    if (!n || typeof n.type != "function" && typeof n.type != "string") {
      l(false);
    } else {
      undefined;
    }
    t = typeof n.type == "string" ? s.createInternalComponent(n) : r(n.type) ? new n.type(n) : new c();
  } else if (typeof e == "string" || typeof e == "number") {
    t = s.createInstanceForText(e);
  } else {
    l(false);
  }
  t.construct(e);
  t._mountIndex = 0;
  t._mountImage = null;
  return t;
}
var a = require("./230.js");
var i = require("./95.js");
var s = require("./101.js");
var u = require("./3.js");
var l = require("./1.js");
require("./4.js");
function c() {}
u(c.prototype, a.Mixin, {
  _instantiateReactComponent: o
});
module.exports = o;