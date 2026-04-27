function n(e = r, t) {
  switch (t.type) {
    case "setZoom":
      var n = e.level;
      var o = t.level;
      if (o === "in") {
        n++;
      } else if (o === "out") {
        n--;
      } else {
        n = o;
      }
      if (n > 0 && n < 20) {
        return Object.assign({}, e, {
          level: n
        });
      }
  }
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = n;
var r = {
  level: 7
};
module.exports = exports.default;