function n(e, t) {
  if (typeof e != "function") {
    throw new TypeError(r);
  }
  t = o(t === undefined ? e.length - 1 : +t || 0, 0);
  return function () {
    var n = arguments;
    for (var r = -1, a = o(n.length - t, 0), i = Array(a); ++r < a;) {
      i[r] = n[t + r];
    }
    switch (t) {
      case 0:
        return e.call(this, i);
      case 1:
        return e.call(this, n[0], i);
      case 2:
        return e.call(this, n[0], n[1], i);
    }
    var s = Array(t + 1);
    for (r = -1; ++r < t;) {
      s[r] = n[r];
    }
    s[t] = i;
    return e.apply(this, s);
  };
}
var r = "Expected a function";
var o = Math.max;
module.exports = n;