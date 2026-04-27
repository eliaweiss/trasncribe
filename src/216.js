function r() {
  var e = window.opera;
  return typeof e == "object" && typeof e.version == "function" && parseInt(e.version(), 10) <= 12;
}
function o(e) {
  return (e.ctrlKey || e.altKey || e.metaKey) && (!e.ctrlKey || !e.altKey);
}
function a(e) {
  switch (e) {
    case x.topCompositionStart:
      return T.compositionStart;
    case x.topCompositionEnd:
      return T.compositionEnd;
    case x.topCompositionUpdate:
      return T.compositionUpdate;
  }
}
function i(e, t) {
  return e === x.topKeyDown && t.keyCode === w;
}
function s(e, t) {
  switch (e) {
    case x.topKeyUp:
      return E.indexOf(t.keyCode) !== -1;
    case x.topKeyDown:
      return t.keyCode !== w;
    case x.topKeyPress:
    case x.topMouseDown:
    case x.topBlur:
      return true;
    default:
      return false;
  }
}
function u(e) {
  var t = e.detail;
  if (typeof t == "object" && "data" in t) {
    return t.data;
  } else {
    return null;
  }
}
function l(e, t, n, r, o) {
  var l;
  var c;
  if (C) {
    l = a(e);
  } else if (N) {
    if (s(e, r)) {
      l = T.compositionEnd;
    }
  } else if (i(e, r)) {
    l = T.compositionStart;
  }
  if (!l) {
    return null;
  }
  if (P) {
    if (N || l !== T.compositionStart) {
      if (l === T.compositionEnd && N) {
        c = N.getData();
      }
    } else {
      N = v.getPooled(t);
    }
  }
  var p = y.getPooled(l, n, r, o);
  if (c) {
    p.data = c;
  } else {
    var d = u(r);
    if (d !== null) {
      p.data = d;
    }
  }
  h.accumulateTwoPhaseDispatches(p);
  return p;
}
function c(e, t) {
  switch (e) {
    case x.topCompositionEnd:
      return u(t);
    case x.topKeyPress:
      var n = t.which;
      if (n !== k) {
        return null;
      } else {
        M = true;
        return S;
      }
    case x.topTextInput:
      var r = t.data;
      if (r === S && M) {
        return null;
      } else {
        return r;
      }
    default:
      return null;
  }
}
function p(e, t) {
  if (N) {
    if (e === x.topCompositionEnd || s(e, t)) {
      var n = N.getData();
      v.release(N);
      N = null;
      return n;
    }
    return null;
  }
  switch (e) {
    case x.topPaste:
      return null;
    case x.topKeyPress:
      if (t.which && !o(t)) {
        return String.fromCharCode(t.which);
      } else {
        return null;
      }
    case x.topCompositionEnd:
      if (P) {
        return null;
      } else {
        return t.data;
      }
    default:
      return null;
  }
}
function d(e, t, n, r, o) {
  var a;
  a = O ? c(e, r) : p(e, r);
  if (!a) {
    return null;
  }
  var i = g.getPooled(T.beforeInput, n, r, o);
  i.data = a;
  h.accumulateTwoPhaseDispatches(i);
  return i;
}
var f = require("./12.js");
var h = require("./26.js");
var m = require("./5.js");
var v = require("./224.js");
var y = require("./257.js");
var g = require("./260.js");
var b = require("./14.js");
var E = [9, 13, 27, 32];
var w = 229;
var C = m.canUseDOM && "CompositionEvent" in window;
var _ = null;
if (m.canUseDOM && "documentMode" in document) {
  _ = document.documentMode;
}
var O = m.canUseDOM && "TextEvent" in window && !_ && !r();
var P = m.canUseDOM && (!C || _ && _ > 8 && _ <= 11);
var k = 32;
var S = String.fromCharCode(k);
var x = f.topLevelTypes;
var T = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: b({
        onBeforeInput: null
      }),
      captured: b({
        onBeforeInputCapture: null
      })
    },
    dependencies: [x.topCompositionEnd, x.topKeyPress, x.topTextInput, x.topPaste]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: b({
        onCompositionEnd: null
      }),
      captured: b({
        onCompositionEndCapture: null
      })
    },
    dependencies: [x.topBlur, x.topCompositionEnd, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: b({
        onCompositionStart: null
      }),
      captured: b({
        onCompositionStartCapture: null
      })
    },
    dependencies: [x.topBlur, x.topCompositionStart, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: b({
        onCompositionUpdate: null
      }),
      captured: b({
        onCompositionUpdateCapture: null
      })
    },
    dependencies: [x.topBlur, x.topCompositionUpdate, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
  }
};
var M = false;
var N = null;
var D = {
  eventTypes: T,
  extractEvents: function (e, t, n, r, o) {
    return [l(e, t, n, r, o), d(e, t, n, r, o)];
  }
};
module.exports = D;