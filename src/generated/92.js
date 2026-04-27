function r() {
  this.reinitializeTransaction();
}
var o = require("./11.js");
var a = require("./40.js");
var i = require("./3.js");
var s = require("./9.js");
var u = {
  initialize: s,
  close: function () {
    d.isBatchingUpdates = false;
  }
};
var l = {
  initialize: s,
  close: o.flushBatchedUpdates.bind(o)
};
var c = [l, u];
i(r.prototype, a.Mixin, {
  getTransactionWrappers: function () {
    return c;
  }
});
var p = new r();
var d = {
  isBatchingUpdates: false,
  batchedUpdates: function (e, t, n, r, o, a) {
    var i = d.isBatchingUpdates;
    d.isBatchingUpdates = true;
    if (i) {
      e(t, n, r, o, a);
    } else {
      p.perform(e, null, t, n, r, o, a);
    }
  }
};
module.exports = d;