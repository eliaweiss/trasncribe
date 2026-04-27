function n() {
  return {
    type: "addMark",
    markType: "mark"
  };
}
function r() {
  return {
    type: "addMark",
    markType: "beat"
  };
}
function o(e) {
  return {
    type: "removeMark",
    id: e
  };
}
function a(e, t) {
  var n = t.markedForDeletion;
  var r = t.time;
  var o = t.label;
  return {
    type: "updateMark",
    id: e,
    time: r,
    label: o,
    markedForDeletion: n
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMark = n;
exports.addBeat = r;
exports.removeMark = o;
exports.updateMark = a;