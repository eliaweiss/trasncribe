function n(e) {
  while (e && e.firstChild) {
    e = e.firstChild;
  }
  return e;
}
function r(e) {
  while (e) {
    if (e.nextSibling) {
      return e.nextSibling;
    }
    e = e.parentNode;
  }
}
function o(e, t) {
  for (var o = n(e), a = 0, i = 0; o;) {
    if (o.nodeType === 3) {
      i = a + o.textContent.length;
      if (a <= t && i >= t) {
        return {
          node: o,
          offset: t - a
        };
      }
      a = i;
    }
    o = n(r(o));
  }
}
module.exports = o;