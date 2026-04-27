function r(e) {
  this._root = e;
  this._startText = this.getText();
  this._fallbackText = null;
}
var o = require("./15.js");
var a = require("./3.js");
var i = require("./109.js");
a(r.prototype, {
  destructor: function () {
    this._root = null;
    this._startText = null;
    this._fallbackText = null;
  },
  getText: function () {
    if ("value" in this._root) {
      return this._root.value;
    } else {
      return this._root[i()];
    }
  },
  getData: function () {
    if (this._fallbackText) {
      return this._fallbackText;
    }
    var e;
    var t;
    var n = this._startText;
    var r = n.length;
    var o = this.getText();
    var a = o.length;
    for (e = 0; e < r && n[e] === o[e]; e++);
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
    var s = t > 1 ? 1 - t : undefined;
    this._fallbackText = o.slice(e, s);
    return this._fallbackText;
  }
});
o.addPoolingTo(r);
module.exports = r;