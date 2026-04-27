function r() {
  if (k.ReactReconcileTransaction && E) {
    undefined;
  } else {
    v(false);
  }
}
function o() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = c.getPooled();
  this.reconcileTransaction = k.ReactReconcileTransaction.getPooled(false);
}
function a(e, t, n, o, a, i) {
  r();
  E.batchedUpdates(e, t, n, o, a, i);
}
function i(e, t) {
  return e._mountOrder - t._mountOrder;
}
function s(e) {
  var t = e.dirtyComponentsLength;
  if (t !== y.length) {
    v(false);
  } else {
    undefined;
  }
  y.sort(i);
  for (var n = 0; n < t; n++) {
    var r = y[n];
    var o = r._pendingCallbacks;
    r._pendingCallbacks = null;
    f.performUpdateIfNecessary(r, e.reconcileTransaction);
    if (o) {
      for (var a = 0; a < o.length; a++) {
        e.callbackQueue.enqueue(o[a], r.getPublicInstance());
      }
    }
  }
}
function u(e) {
  r();
  if (E.isBatchingUpdates) {
    y.push(e);
    return;
  } else {
    E.batchedUpdates(u, e);
    return;
  }
}
function l(e, t) {
  if (E.isBatchingUpdates) {
    undefined;
  } else {
    v(false);
  }
  g.enqueue(e, t);
  b = true;
}
var c = require("./45.js");
var p = require("./15.js");
var d = require("./10.js");
var f = require("./16.js");
var h = require("./40.js");
var m = require("./3.js");
var v = require("./1.js");
var y = [];
var g = c.getPooled();
var b = false;
var E = null;
var w = {
  initialize: function () {
    this.dirtyComponentsLength = y.length;
  },
  close: function () {
    if (this.dirtyComponentsLength !== y.length) {
      y.splice(0, this.dirtyComponentsLength);
      O();
    } else {
      y.length = 0;
    }
  }
};
var C = {
  initialize: function () {
    this.callbackQueue.reset();
  },
  close: function () {
    this.callbackQueue.notifyAll();
  }
};
var _ = [w, C];
m(o.prototype, h.Mixin, {
  getTransactionWrappers: function () {
    return _;
  },
  destructor: function () {
    this.dirtyComponentsLength = null;
    c.release(this.callbackQueue);
    this.callbackQueue = null;
    k.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },
  perform: function (e, t, n) {
    return h.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n);
  }
});
p.addPoolingTo(o);
function O() {
  while (y.length || b) {
    if (y.length) {
      var e = o.getPooled();
      e.perform(s, null, e);
      o.release(e);
    }
    if (b) {
      b = false;
      var t = g;
      g = c.getPooled();
      t.notifyAll();
      c.release(t);
    }
  }
}
O = d.measure("ReactUpdates", "flushBatchedUpdates", O);
var P = {
  injectReconcileTransaction: function (e) {
    if (e) {
      undefined;
    } else {
      v(false);
    }
    k.ReactReconcileTransaction = e;
  },
  injectBatchingStrategy: function (e) {
    if (e) {
      undefined;
    } else {
      v(false);
    }
    if (typeof e.batchedUpdates != "function") {
      v(false);
    } else {
      undefined;
    }
    if (typeof e.isBatchingUpdates != "boolean") {
      v(false);
    } else {
      undefined;
    }
    E = e;
  }
};
var k = {
  ReactReconcileTransaction: null,
  batchedUpdates: a,
  enqueueUpdate: u,
  flushBatchedUpdates: O,
  injection: P,
  asap: l
};
module.exports = k;