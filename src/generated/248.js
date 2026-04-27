function r(e) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = e;
  this.reactMountReady = a.getPooled(null);
  this.useCreateElement = false;
}
var o = require("./15.js");
var a = require("./45.js");
var i = require("./40.js");
var s = require("./3.js");
var u = require("./9.js");
var l = {
  initialize: function () {
    this.reactMountReady.reset();
  },
  close: u
};
var c = [l];
var p = {
  getTransactionWrappers: function () {
    return c;
  },
  getReactMountReady: function () {
    return this.reactMountReady;
  },
  destructor: function () {
    a.release(this.reactMountReady);
    this.reactMountReady = null;
  }
};
s(r.prototype, i.Mixin, p);
o.addPoolingTo(r);
module.exports = r;