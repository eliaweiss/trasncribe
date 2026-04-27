function r() {
  this._callbacks = null;
  this._contexts = null;
}
var o = require("./15.js");
var a = require("./3.js");
var i = require("./1.js");
a(r.prototype, {
  enqueue: function (e, t) {
    this._callbacks = this._callbacks || [];
    this._contexts = this._contexts || [];
    this._callbacks.push(e);
    this._contexts.push(t);
  },
  notifyAll: function () {
    var e = this._callbacks;
    var t = this._contexts;
    if (e) {
      if (e.length !== t.length) {
        i(false);
      } else {
        undefined;
      }
      this._callbacks = null;
      this._contexts = null;
      for (var n = 0; n < e.length; n++) {
        e[n].call(t[n]);
      }
      e.length = 0;
      t.length = 0;
    }
  },
  reset: function () {
    this._callbacks = null;
    this._contexts = null;
  },
  destructor: function () {
    this.reset();
  }
});
o.addPoolingTo(r);
module.exports = r;