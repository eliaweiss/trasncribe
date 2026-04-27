function r(e) {
  var t = d.getID(e);
  var n = p.getReactRootIDFromNodeID(t);
  var r = d.findReactContainerForID(n);
  var o = d.getFirstReactDOM(r);
  return o;
}
function o(e, t) {
  this.topLevelType = e;
  this.nativeEvent = t;
  this.ancestors = [];
}
function a(e) {
  i(e);
}
function i(e) {
  var t = d.getFirstReactDOM(m(e.nativeEvent)) || window;
  for (var n = t; n;) {
    e.ancestors.push(n);
    n = r(n);
  }
  for (var o = 0; o < e.ancestors.length; o++) {
    t = e.ancestors[o];
    var a = d.getID(t) || "";
    y._handleTopLevel(e.topLevelType, t, a, e.nativeEvent, m(e.nativeEvent));
  }
}
function s(e) {
  var t = v(window);
  e(t);
}
var u = require("./69.js");
var l = require("./5.js");
var c = require("./15.js");
var p = require("./21.js");
var d = require("./7.js");
var f = require("./11.js");
var h = require("./3.js");
var m = require("./57.js");
var v = require("./169.js");
h(o.prototype, {
  destructor: function () {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;
  }
});
c.addPoolingTo(o, c.twoArgumentPooler);
var y = {
  _enabled: true,
  _handleTopLevel: null,
  WINDOW_HANDLE: l.canUseDOM ? window : null,
  setHandleTopLevel: function (e) {
    y._handleTopLevel = e;
  },
  setEnabled: function (e) {
    y._enabled = !!e;
  },
  isEnabled: function () {
    return y._enabled;
  },
  trapBubbledEvent: function (e, t, n) {
    var r = n;
    if (r) {
      return u.listen(r, t, y.dispatchEvent.bind(null, e));
    } else {
      return null;
    }
  },
  trapCapturedEvent: function (e, t, n) {
    var r = n;
    if (r) {
      return u.capture(r, t, y.dispatchEvent.bind(null, e));
    } else {
      return null;
    }
  },
  monitorScrollValue: function (e) {
    var t = s.bind(null, e);
    u.listen(window, "scroll", t);
  },
  dispatchEvent: function (e, t) {
    if (y._enabled) {
      var n = o.getPooled(e, t);
      try {
        f.batchedUpdates(a, n);
      } finally {
        o.release(n);
      }
    }
  }
};
module.exports = y;