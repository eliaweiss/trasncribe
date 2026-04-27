function n() {
  return {
    type: "saveLoop"
  };
}
function r(e) {
  return {
    type: "removeLoop",
    id: e
  };
}
function o(e, t) {
  return {
    type: "setLoop",
    start: e,
    end: t
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveLoop = n;
exports.removeLoop = r;
exports.setLoop = o;