function r(e) {
  if (typeof e.type == "function") {
    return e.type;
  }
  var t = e.type;
  var n = p[t];
  if (n == null) {
    p[t] = n = l(t);
  }
  return n;
}
function o(e) {
  if (c) {
    undefined;
  } else {
    u(false);
  }
  return new c(e.type, e.props);
}
function a(e) {
  return new d(e);
}
function i(e) {
  return e instanceof d;
}
var s = require("./3.js");
var u = require("./1.js");
var l = null;
var c = null;
var p = {};
var d = null;
var f = {
  injectGenericComponentClass: function (e) {
    c = e;
  },
  injectTextComponentClass: function (e) {
    d = e;
  },
  injectComponentClasses: function (e) {
    s(p, e);
  }
};
var h = {
  getComponentClassForElement: r,
  createInternalComponent: o,
  createInstanceForText: a,
  isTextComponent: i,
  injection: f
};
module.exports = h;