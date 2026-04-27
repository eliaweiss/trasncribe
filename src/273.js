function n(e, t) {
  return function () {
    return t(e.apply(undefined, arguments));
  };
}
function r(e, t) {
  if (typeof e == "function") {
    return n(e, t);
  }
  if (typeof e != "object" || e === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + ". Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }
  for (var r = Object.keys(e), o = {}, a = 0; a < r.length; a++) {
    var i = r[a];
    var s = e[i];
    if (typeof s == "function") {
      o[i] = n(s, t);
    }
  }
  return o;
}
exports.__esModule = true;
exports.default = r;