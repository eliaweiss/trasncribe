function n() {
  return {
    type: "audioLoading"
  };
}
function r(e) {
  return {
    type: "audioLoaded",
    dataHash: e
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audioLoading = n;
exports.audioLoaded = r;