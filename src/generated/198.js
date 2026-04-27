function n(e, t) {
  return function (n) {
    return e(t(n));
  };
}
module.exports = n;