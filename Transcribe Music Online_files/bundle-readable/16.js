function r() {
  o.attachRefs(this, this._currentElement);
}
var o = require("./245.js");
var a = {
  mountComponent: function (e, t, n, o) {
    var a = e.mountComponent(t, n, o);
    if (e._currentElement && e._currentElement.ref != null) {
      n.getReactMountReady().enqueue(r, e);
    }
    return a;
  },
  unmountComponent: function (e) {
    o.detachRefs(e, e._currentElement);
    e.unmountComponent();
  },
  receiveComponent: function (e, t, n, a) {
    var i = e._currentElement;
    if (t !== i || a !== e._context) {
      var s = o.shouldUpdateRefs(i, t);
      if (s) {
        o.detachRefs(e, i);
      }
      e.receiveComponent(t, n, a);
      if (s && e._currentElement && e._currentElement.ref != null) {
        n.getReactMountReady().enqueue(r, e);
      }
    }
  },
  performUpdateIfNecessary: function (e, t) {
    e.performUpdateIfNecessary(t);
  }
};
module.exports = a;