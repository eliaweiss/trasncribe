function n(e, t, n) {
  n ||= {};
  for (var r = -1, o = t.length; ++r < o;) {
    var a = t[r];
    n[a] = e[a];
  }
  return n;
}
module.exports = n;