function r() {
  i.registerNullComponentID(this._rootNodeID);
}
var o;
var a = require("./8.js");
var i = require("./96.js");
var s = require("./16.js");
var u = require("./3.js");
var l = {
  injectEmptyComponent: function (e) {
    o = a.createElement(e);
  }
};
function c(e) {
  this._currentElement = null;
  this._rootNodeID = null;
  this._renderedComponent = e(o);
}
u(c.prototype, {
  construct: function (e) {},
  mountComponent: function (e, t, n) {
    t.getReactMountReady().enqueue(r, this);
    this._rootNodeID = e;
    return s.mountComponent(this._renderedComponent, e, t, n);
  },
  receiveComponent: function () {},
  unmountComponent: function (e, t, n) {
    s.unmountComponent(this._renderedComponent);
    i.deregisterNullComponentID(this._rootNodeID);
    this._rootNodeID = null;
    this._renderedComponent = null;
  }
});
c.injection = l;
module.exports = c;