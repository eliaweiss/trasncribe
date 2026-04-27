function n() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  if (t.length === 0) {
    return function (e) {
      return e;
    };
  } else if (t.length === 1) {
    return t[0];
  } else {
    return t.reduce(function (e, t) {
      return function () {
        return e(t.apply(undefined, arguments));
      };
    });
  }
}
exports.__esModule = true;
exports.default = n;