function n(e) {
  var t = e.target || e.srcElement || window;
  if (t.nodeType === 3) {
    return t.parentNode;
  } else {
    return t;
  }
}
module.exports = n;