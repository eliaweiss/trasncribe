function r(e) {
  return e === v.topMouseUp || e === v.topTouchEnd || e === v.topTouchCancel;
}
function o(e) {
  return e === v.topMouseMove || e === v.topTouchMove;
}
function a(e) {
  return e === v.topMouseDown || e === v.topTouchStart;
}
function i(e, t, n, r) {
  var o = e.type || "unknown-event";
  e.currentTarget = m.Mount.getNode(r);
  if (t) {
    f.invokeGuardedCallbackWithCatch(o, n, e, r);
  } else {
    f.invokeGuardedCallback(o, n, e, r);
  }
  e.currentTarget = null;
}
function s(e, t) {
  var n = e._dispatchListeners;
  var r = e._dispatchIDs;
  if (Array.isArray(n)) {
    for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) {
      i(e, t, n[o], r[o]);
    }
  } else if (n) {
    i(e, t, n, r);
  }
  e._dispatchListeners = null;
  e._dispatchIDs = null;
}
function u(e) {
  var t = e._dispatchListeners;
  var n = e._dispatchIDs;
  if (Array.isArray(t)) {
    for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) {
      if (t[r](e, n[r])) {
        return n[r];
      }
    }
  } else if (t && t(e, n)) {
    return n;
  }
  return null;
}
function l(e) {
  var t = u(e);
  e._dispatchIDs = null;
  e._dispatchListeners = null;
  return t;
}
function c(e) {
  var t = e._dispatchListeners;
  var n = e._dispatchIDs;
  if (Array.isArray(t)) {
    h(false);
  } else {
    undefined;
  }
  var r = t ? t(e, n) : null;
  e._dispatchListeners = null;
  e._dispatchIDs = null;
  return r;
}
function p(e) {
  return !!e._dispatchListeners;
}
var d = require("./12.js");
var f = require("./97.js");
var h = require("./1.js");
require("./4.js");
var m = {
  Mount: null,
  injectMount: function (e) {
    m.Mount = e;
  }
};
var v = d.topLevelTypes;
var y = {
  isEndish: r,
  isMoveish: o,
  isStartish: a,
  executeDirectDispatch: c,
  executeDispatchesInOrder: s,
  executeDispatchesInOrderStopAtTrue: l,
  hasDispatches: p,
  getNode: function (e) {
    return m.Mount.getNode(e);
  },
  getID: function (e) {
    return m.Mount.getID(e);
  },
  injection: m
};
module.exports = y;