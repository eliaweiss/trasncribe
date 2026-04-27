function n(e, t, n) {
  if (Array.isArray(e)) {
    e.forEach(t, n);
  } else if (e) {
    t.call(n, e);
  }
}
module.exports = n;