function n(e) {
  var t = e.dispatch;
  var n = e.getState;
  return function (e) {
    return function (r) {
      if (typeof r == "function") {
        return r(t, n);
      } else {
        return e(r);
      }
    };
  };
}
module.exports = n;