function n(e) {
  return e.replace(r, "-$1").toLowerCase();
}
var r = /([A-Z])/g;
module.exports = n;