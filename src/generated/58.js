function n(e) {
  var t = e && (r && e[r] || e[o]);
  if (typeof t == "function") {
    return t;
  }
}
var r = typeof Symbol == "function" && Symbol.iterator;
var o = "@@iterator";
module.exports = n;