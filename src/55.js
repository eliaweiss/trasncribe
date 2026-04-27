function n(e) {
  var t;
  var n = e.keyCode;
  if ("charCode" in e) {
    t = e.charCode;
    if (t === 0 && n === 13) {
      t = 13;
    }
  } else {
    t = n;
  }
  if (t >= 32 || t === 13) {
    return t;
  } else {
    return 0;
  }
}
module.exports = n;