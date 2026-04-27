function n(e) {
  var t = 1;
  var n = 0;
  for (var o = 0, a = e.length, i = a & -4; o < i;) {
    for (; o < Math.min(o + 4096, i); o += 4) {
      n += (t += e.charCodeAt(o)) + (t += e.charCodeAt(o + 1)) + (t += e.charCodeAt(o + 2)) + (t += e.charCodeAt(o + 3));
    }
    t %= r;
    n %= r;
  }
  for (; o < a; o++) {
    n += t += e.charCodeAt(o);
  }
  t %= r;
  n %= r;
  return t | n << 16;
}
var r = 65521;
module.exports = n;