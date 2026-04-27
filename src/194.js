var t = function () {
  return this;
}();
var n = typeof t == "object" && t && t.Object === Object && t;
module.exports = n;