var r = require("./1.js");
function o(e) {
  var t = this;
  if (t.instancePool.length) {
    var n = t.instancePool.pop();
    t.call(n, e);
    return n;
  }
  return new t(e);
}
function a(e, t) {
  var n = this;
  if (n.instancePool.length) {
    var r = n.instancePool.pop();
    n.call(r, e, t);
    return r;
  }
  return new n(e, t);
}
function i(e, t, n) {
  var r = this;
  if (r.instancePool.length) {
    var o = r.instancePool.pop();
    r.call(o, e, t, n);
    return o;
  }
  return new r(e, t, n);
}
function s(e, t, n, r) {
  var o = this;
  if (o.instancePool.length) {
    var a = o.instancePool.pop();
    o.call(a, e, t, n, r);
    return a;
  }
  return new o(e, t, n, r);
}
function u(e, t, n, r, o) {
  var a = this;
  if (a.instancePool.length) {
    var i = a.instancePool.pop();
    a.call(i, e, t, n, r, o);
    return i;
  }
  return new a(e, t, n, r, o);
}
function l(e) {
  var t = this;
  if (e instanceof t) {
    undefined;
  } else {
    r(false);
  }
  e.destructor();
  if (t.instancePool.length < t.poolSize) {
    t.instancePool.push(e);
  }
}
var c = 10;
var p = o;
function d(e, t) {
  var n = e;
  n.instancePool = [];
  n.getPooled = t || p;
  n.poolSize ||= c;
  n.release = l;
  return n;
}
var f = {
  addPoolingTo: d,
  oneArgumentPooler: o,
  twoArgumentPooler: a,
  threeArgumentPooler: i,
  fourArgumentPooler: s,
  fiveArgumentPooler: u
};
module.exports = f;