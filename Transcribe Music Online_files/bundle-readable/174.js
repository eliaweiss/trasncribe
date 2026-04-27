function n(e, t, n) {
  if (!e) {
    return null;
  }
  var o = {};
  for (var a in e) {
    if (r.call(e, a)) {
      o[a] = t.call(n, e[a], a, e);
    }
  }
  return o;
}
var r = Object.prototype.hasOwnProperty;
module.exports = n;