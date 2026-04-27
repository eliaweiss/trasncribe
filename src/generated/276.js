function n(e) {
  var t;
  var n = e.Symbol;
  if (typeof n == "function") {
    if (n.observable) {
      t = n.observable;
    } else {
      t = n("observable");
      n.observable = t;
    }
  } else {
    t = "@@observable";
  }
  return t;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = n;