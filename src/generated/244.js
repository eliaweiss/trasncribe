function r(e) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = false;
  this.reactMountReady = o.getPooled(null);
  this.useCreateElement = !e && s.useCreateElement;
}
var o = require("./45.js");
var a = require("./15.js");
var i = require("./36.js");
var s = require("./88.js");
var u = require("./98.js");
var l = require("./40.js");
var c = require("./3.js");
var p = {
  initialize: u.getSelectionInformation,
  close: u.restoreSelection
};
var d = {
  initialize: function () {
    var e = i.isEnabled();
    i.setEnabled(false);
    return e;
  },
  close: function (e) {
    i.setEnabled(e);
  }
};
var f = {
  initialize: function () {
    this.reactMountReady.reset();
  },
  close: function () {
    this.reactMountReady.notifyAll();
  }
};
var h = [p, d, f];
var m = {
  getTransactionWrappers: function () {
    return h;
  },
  getReactMountReady: function () {
    return this.reactMountReady;
  },
  destructor: function () {
    o.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};
c(r.prototype, l.Mixin, m);
a.addPoolingTo(r);
module.exports = r;