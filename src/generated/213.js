function n(e, t) {
  if (e === t) {
    return true;
  }
  var n = Object.keys(e);
  var r = Object.keys(t);
  if (n.length !== r.length) {
    return false;
  }
  var o = Object.prototype.hasOwnProperty;
  for (var a = 0; a < n.length; a++) {
    if (!o.call(t, n[a]) || e[n[a]] !== t[n[a]]) {
      return false;
    }
  }
  return true;
}
exports.__esModule = true;
exports.default = n;