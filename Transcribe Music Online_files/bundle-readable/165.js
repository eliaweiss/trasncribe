function n(e) {
  return e.replace(r, function (e, t) {
    return t.toUpperCase();
  });
}
var r = /-(.)/g;
module.exports = n;