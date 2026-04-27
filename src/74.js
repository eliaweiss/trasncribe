function n(e, t) {
  if (e === t) {
    return true;
  }
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) {
    return false;
  }
  var n = Object.keys(e);
  var o = Object.keys(t);
  if (n.length !== o.length) {
    return false;
  }
  var a = r.bind(t);
  for (var i = 0; i < n.length; i++) {
    if (!a(n[i]) || e[n[i]] !== t[n[i]]) {
      return false;
    }
  }
  return true;
}
var r = Object.prototype.hasOwnProperty;
module.exports = n;