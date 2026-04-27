function n(e) {
  return function () {
    return e;
  };
}
function r() {}
r.thatReturns = n;
r.thatReturnsFalse = n(false);
r.thatReturnsTrue = n(true);
r.thatReturnsNull = n(null);
r.thatReturnsThis = function () {
  return this;
};
r.thatReturnsArgument = function (e) {
  return e;
};
module.exports = r;