function n(e, t) {
  if (e == null) {
    throw new TypeError("Object.assign target cannot be null or undefined");
  }
  var n = Object(e);
  var r = Object.prototype.hasOwnProperty;
  for (var o = 1; o < arguments.length; o++) {
    var a = arguments[o];
    if (a != null) {
      var i = Object(a);
      for (var s in i) {
        if (r.call(i, s)) {
          n[s] = i[s];
        }
      }
    }
  }
  return n;
}
module.exports = n;