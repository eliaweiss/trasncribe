function r(e, t, n) {
  var r = t.dispatchConfig.phasedRegistrationNames[n];
  return g(e, r);
}
function o(e, t, n) {
  var o = t ? y.bubbled : y.captured;
  var a = r(e, n, o);
  if (a) {
    n._dispatchListeners = m(n._dispatchListeners, a);
    n._dispatchIDs = m(n._dispatchIDs, e);
  }
}
function a(e) {
  if (e && e.dispatchConfig.phasedRegistrationNames) {
    h.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker, o, e);
  }
}
function i(e) {
  if (e && e.dispatchConfig.phasedRegistrationNames) {
    h.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(e.dispatchMarker, o, e);
  }
}
function s(e, t, n) {
  if (n && n.dispatchConfig.registrationName) {
    var r = n.dispatchConfig.registrationName;
    var o = g(e, r);
    if (o) {
      n._dispatchListeners = m(n._dispatchListeners, o);
      n._dispatchIDs = m(n._dispatchIDs, e);
    }
  }
}
function u(e) {
  if (e && e.dispatchConfig.registrationName) {
    s(e.dispatchMarker, null, e);
  }
}
function l(e) {
  v(e, a);
}
function c(e) {
  v(e, i);
}
function p(e, t, n, r) {
  h.injection.getInstanceHandle().traverseEnterLeave(n, r, s, e, t);
}
function d(e) {
  v(e, u);
}
var f = require("./12.js");
var h = require("./25.js");
require("./4.js");
var m = require("./106.js");
var v = require("./108.js");
var y = f.PropagationPhases;
var g = h.getListener;
var b = {
  accumulateTwoPhaseDispatches: l,
  accumulateTwoPhaseDispatchesSkipTarget: c,
  accumulateDirectDispatches: d,
  accumulateEnterLeaveDispatches: p
};
module.exports = b;