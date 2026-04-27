function r(e) {
  var t = e.nodeName && e.nodeName.toLowerCase();
  return t === "select" || t === "input" && e.type === "file";
}
function o(e) {
  var t = _.getPooled(T.change, N, e, O(e));
  E.accumulateTwoPhaseDispatches(t);
  C.batchedUpdates(a, t);
}
function a(e) {
  b.enqueueEvents(e);
  b.processEventQueue(false);
}
function i(e, t) {
  M = e;
  N = t;
  M.attachEvent("onchange", o);
}
function s() {
  if (M) {
    M.detachEvent("onchange", o);
    M = null;
    N = null;
  }
}
function u(e, t, n) {
  if (e === x.topChange) {
    return n;
  }
}
function l(e, t, n) {
  if (e === x.topFocus) {
    s();
    i(t, n);
  } else if (e === x.topBlur) {
    s();
  }
}
function c(e, t) {
  M = e;
  N = t;
  D = e.value;
  R = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value");
  Object.defineProperty(M, "value", j);
  M.attachEvent("onpropertychange", d);
}
function p() {
  if (M) {
    delete M.value;
    M.detachEvent("onpropertychange", d);
    M = null;
    N = null;
    D = null;
    R = null;
  }
}
function d(e) {
  if (e.propertyName === "value") {
    var t = e.srcElement.value;
    if (t !== D) {
      D = t;
      o(e);
    }
  }
}
function f(e, t, n) {
  if (e === x.topInput) {
    return n;
  }
}
function h(e, t, n) {
  if (e === x.topFocus) {
    p();
    c(t, n);
  } else if (e === x.topBlur) {
    p();
  }
}
function m(e, t, n) {
  if ((e === x.topSelectionChange || e === x.topKeyUp || e === x.topKeyDown) && M && M.value !== D) {
    D = M.value;
    return N;
  }
}
function v(e) {
  return e.nodeName && e.nodeName.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
}
function y(e, t, n) {
  if (e === x.topClick) {
    return n;
  }
}
var g = require("./12.js");
var b = require("./25.js");
var E = require("./26.js");
var w = require("./5.js");
var C = require("./11.js");
var _ = require("./17.js");
var O = require("./57.js");
var P = require("./60.js");
var k = require("./110.js");
var S = require("./14.js");
var x = g.topLevelTypes;
var T = {
  change: {
    phasedRegistrationNames: {
      bubbled: S({
        onChange: null
      }),
      captured: S({
        onChangeCapture: null
      })
    },
    dependencies: [x.topBlur, x.topChange, x.topClick, x.topFocus, x.topInput, x.topKeyDown, x.topKeyUp, x.topSelectionChange]
  }
};
var M = null;
var N = null;
var D = null;
var R = null;
var A = false;
if (w.canUseDOM) {
  A = P("change") && (!("documentMode" in document) || document.documentMode > 8);
}
var I = false;
if (w.canUseDOM) {
  I = P("input") && (!("documentMode" in document) || document.documentMode > 9);
}
var j = {
  get: function () {
    return R.get.call(this);
  },
  set: function (e) {
    D = "" + e;
    R.set.call(this, e);
  }
};
var L = {
  eventTypes: T,
  extractEvents: function (e, t, n, o, a) {
    var i;
    var s;
    if (r(t)) {
      if (A) {
        i = u;
      } else {
        s = l;
      }
    } else if (k(t)) {
      if (I) {
        i = f;
      } else {
        i = m;
        s = h;
      }
    } else if (v(t)) {
      i = y;
    }
    if (i) {
      var c = i(e, t, n);
      if (c) {
        var p = _.getPooled(T.change, c, o, a);
        p.type = "change";
        E.accumulateTwoPhaseDispatches(p);
        return p;
      }
    }
    if (s) {
      s(e, t, n);
    }
  }
};
module.exports = L;