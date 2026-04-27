function n(e, t) {
  this.buffer = e;
  this.seekedPosition = t;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
n.prototype = {
  extract: function (e, t, n) {
    var r = this.buffer.numberOfChannels;
    var o = this.buffer.getChannelData(0);
    var a = r > 1 ? this.buffer.getChannelData(1) : o;
    for (var i = 0; i < t; i++) {
      e[i * 2] = o[i + n + this.seekedPosition];
      e[i * 2 + 1] = a[i + n + this.seekedPosition];
    }
    return Math.min(t, o.length - n);
  }
};
exports.default = n;
module.exports = exports.default;