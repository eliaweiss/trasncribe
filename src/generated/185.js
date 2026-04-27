function n(e, t, n) {
  if (typeof e != "function") {
    return r;
  }
  if (t === undefined) {
    return e;
  }
  switch (n) {
    case 1:
      return function (n) {
        return e.call(t, n);
      };
    case 3:
      return function (n, r, o) {
        return e.call(t, n, r, o);
      };
    case 4:
      return function (n, r, o, a) {
        return e.call(t, n, r, o, a);
      };
    case 5:
      return function (n, r, o, a, i) {
        return e.call(t, n, r, o, a, i);
      };
  }
  return function () {
    return e.apply(t, arguments);
  };
}
function r(e) {
  return e;
}
module.exports = n;