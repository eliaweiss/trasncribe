function r(e) {
  return ("" + e).replace(E, "//");
}
function o(e, t) {
  this.func = e;
  this.context = t;
  this.count = 0;
}
function a(e, t, n) {
  var r = e.func;
  var o = e.context;
  r.call(o, t, e.count++);
}
function i(e, t, n) {
  if (e == null) {
    return e;
  }
  var r = o.getPooled(t, n);
  y(e, a, r);
  o.release(r);
}
function s(e, t, n, r) {
  this.result = e;
  this.keyPrefix = t;
  this.func = n;
  this.context = r;
  this.count = 0;
}
function u(e, t, n) {
  var o = e.result;
  var a = e.keyPrefix;
  var i = e.func;
  var s = e.context;
  var u = i.call(s, t, e.count++);
  if (Array.isArray(u)) {
    l(u, o, n, v.thatReturnsArgument);
  } else if (u != null) {
    if (m.isValidElement(u)) {
      u = m.cloneAndReplaceKey(u, a + (u !== t ? r(u.key || "") + "/" : "") + n);
    }
    o.push(u);
  }
}
function l(e, t, n, o, a) {
  var i = "";
  if (n != null) {
    i = r(n) + "/";
  }
  var l = s.getPooled(t, i, o, a);
  y(e, u, l);
  s.release(l);
}
function c(e, t, n) {
  if (e == null) {
    return e;
  }
  var r = [];
  l(e, r, null, t, n);
  return r;
}
function p(e, t, n) {
  return null;
}
function d(e, t) {
  return y(e, p, null);
}
function f(e) {
  var t = [];
  l(e, t, null, v.thatReturnsArgument);
  return t;
}
var h = require("./15.js");
var m = require("./8.js");
var v = require("./9.js");
var y = require("./63.js");
var g = h.twoArgumentPooler;
var b = h.fourArgumentPooler;
var E = /\/(?!\/)/g;
o.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
h.addPoolingTo(o, g);
s.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
h.addPoolingTo(s, b);
var w = {
  forEach: i,
  map: c,
  mapIntoWithKeyPrefixInternal: l,
  count: d,
  toArray: f
};
module.exports = w;