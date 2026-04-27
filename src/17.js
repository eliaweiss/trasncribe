function r(e, t, n, r) {
  this.dispatchConfig = e;
  this.dispatchMarker = t;
  this.nativeEvent = n;
  var o = this.constructor.Interface;
  for (var a in o) {
    if (o.hasOwnProperty(a)) {
      var s = o[a];
      if (s) {
        this[a] = s(n);
      } else if (a === "target") {
        this.target = r;
      } else {
        this[a] = n[a];
      }
    }
  }
  var u = n.defaultPrevented ?? n.returnValue === false;
  if (u) {
    this.isDefaultPrevented = i.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = i.thatReturnsFalse;
  }
  this.isPropagationStopped = i.thatReturnsFalse;
}
var o = require("./15.js");
var a = require("./3.js");
var i = require("./9.js");
require("./4.js");
var s = {
  type: null,
  target: null,
  currentTarget: i.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (e) {
    return e.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};
a(r.prototype, {
  preventDefault: function () {
    this.defaultPrevented = true;
    var e = this.nativeEvent;
    if (e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      this.isDefaultPrevented = i.thatReturnsTrue;
    }
  },
  stopPropagation: function () {
    var e = this.nativeEvent;
    if (e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
      this.isPropagationStopped = i.thatReturnsTrue;
    }
  },
  persist: function () {
    this.isPersistent = i.thatReturnsTrue;
  },
  isPersistent: i.thatReturnsFalse,
  destructor: function () {
    var e = this.constructor.Interface;
    for (var t in e) {
      this[t] = null;
    }
    this.dispatchConfig = null;
    this.dispatchMarker = null;
    this.nativeEvent = null;
  }
});
r.Interface = s;
r.augmentClass = function (e, t) {
  var n = this;
  var r = Object.create(n.prototype);
  a(r, e.prototype);
  e.prototype = r;
  e.prototype.constructor = e;
  e.Interface = a({}, n.Interface, t);
  e.augmentClass = n.augmentClass;
  o.addPoolingTo(e, o.fourArgumentPooler);
};
o.addPoolingTo(r, o.fourArgumentPooler);
module.exports = r;