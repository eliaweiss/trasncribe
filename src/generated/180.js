function n(e, t, p) {
  if (typeof t != "string") {
    if (c) {
      var d = l(t);
      if (d && d !== c) {
        n(e, d, p);
      }
    }
    var f = i(t);
    if (s) {
      f = f.concat(s(t));
    }
    for (var h = 0; h < f.length; ++h) {
      var m = f[h];
      if (!r[m] && !o[m] && (!p || !p[m])) {
        var v = u(t, m);
        try {
          a(e, m, v);
        } catch (e) {}
      }
    }
    return e;
  }
  return e;
}
var r = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var o = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var a = Object.defineProperty;
var i = Object.getOwnPropertyNames;
var s = Object.getOwnPropertySymbols;
var u = Object.getOwnPropertyDescriptor;
var l = Object.getPrototypeOf;
var c = l && l(Object);
module.exports = n;