function n() {
  var e = [];
  for (var t = 0; t < 264600; t++) {
    e.push(Math.random() * 2 - 1);
  }
  e.push(2.25);
  e.push(-2.25);
  var n = new Float32Array(e);
  var r = {
    name: "Test Data",
    getChannelData: function () {
      return n;
    },
    sampleRate: 44100,
    length: e.length,
    duration: e.length / 44100,
    channels: 1,
    debug: true
  };
  return r;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = n;
module.exports = exports.default;