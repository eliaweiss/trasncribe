function n(e, t) {
  return function (n = e, r) {
    return (t[r.type] || function (e) {
      return e;
    })(n, r) || n;
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = n;
n.copyState = function (e, t) {
  return Object.assign({}, e, t);
};
module.exports = exports.default;