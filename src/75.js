var r;
var o;
var a;
var i = require("./6.js");
var s = i.shims.document;
var u = i.shims.window;
/*! nouislider - 12.0.0 - 9/14/2018 */
(function (n) {
  o = [];
  r = n;
  a = typeof r == "function" ? r.apply(exports, o) : r;
  if (a !== undefined) {
    module.exports = a;
  }
})(function () {
  "use strict";

  function e(e) {
    return typeof e == "object" && typeof e.to == "function" && typeof e.from == "function";
  }
  function t(e) {
    e.parentElement.removeChild(e);
  }
  function n(e) {
    return e !== null && e !== undefined;
  }
  function r(e) {
    e.preventDefault();
  }
  function o(e) {
    return e.filter(function (e) {
      return !this[e] && (this[e] = true);
    }, {});
  }
  function a(e, t) {
    return Math.round(e / t) * t;
  }
  function i(e, t) {
    var n = e.getBoundingClientRect();
    var r = e.ownerDocument;
    var o = r.documentElement;
    var a = y(r);
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
      a.x = 0;
    }
    if (t) {
      return n.top + a.y - o.clientTop;
    } else {
      return n.left + a.x - o.clientLeft;
    }
  }
  function l(e) {
    return typeof e == "number" && !isNaN(e) && isFinite(e);
  }
  function c(e, t, n) {
    if (n > 0) {
      h(e, t);
      setTimeout(function () {
        m(e, t);
      }, n);
    }
  }
  function p(e) {
    return Math.max(Math.min(e, 100), 0);
  }
  function d(e) {
    if (Array.isArray(e)) {
      return e;
    } else {
      return [e];
    }
  }
  function f(e) {
    e = String(e);
    var t = e.split(".");
    if (t.length > 1) {
      return t[1].length;
    } else {
      return 0;
    }
  }
  function h(e, t) {
    if (e.classList) {
      e.classList.add(t);
    } else {
      e.className += " " + t;
    }
  }
  function m(e, t) {
    if (e.classList) {
      e.classList.remove(t);
    } else {
      e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  function v(e, t) {
    if (e.classList) {
      return e.classList.contains(t);
    } else {
      return new RegExp("\\b" + t + "\\b").test(e.className);
    }
  }
  function y(e) {
    var t = u.pageXOffset !== undefined;
    var n = (e.compatMode || "") === "CSS1Compat";
    var r = t ? u.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft;
    var o = t ? u.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop;
    return {
      x: r,
      y: o
    };
  }
  function g() {
    if (u.navigator.pointerEnabled) {
      return {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      };
    } else if (u.navigator.msPointerEnabled) {
      return {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      };
    } else {
      return {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      };
    }
  }
  function b() {
    var e = false;
    try {
      var t = Object.defineProperty({}, "passive", {
        get: function () {
          e = true;
        }
      });
      u.addEventListener("test", null, t);
    } catch (e) {}
    return e;
  }
  function E() {
    return u.CSS && CSS.supports && CSS.supports("touch-action", "none");
  }
  function w(e, t) {
    return 100 / (t - e);
  }
  function C(e, t) {
    return t * 100 / (e[1] - e[0]);
  }
  function _(e, t) {
    return C(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0]);
  }
  function O(e, t) {
    return t * (e[1] - e[0]) / 100 + e[0];
  }
  function P(e, t) {
    for (var n = 1; e >= t[n];) {
      n += 1;
    }
    return n;
  }
  function k(e, t, n) {
    if (n >= e.slice(-1)[0]) {
      return 100;
    }
    var r = P(n, e);
    var o = e[r - 1];
    var a = e[r];
    var i = t[r - 1];
    var s = t[r];
    return i + _([o, a], n) / w(i, s);
  }
  function S(e, t, n) {
    if (n >= 100) {
      return e.slice(-1)[0];
    }
    var r = P(n, t);
    var o = e[r - 1];
    var a = e[r];
    var i = t[r - 1];
    var s = t[r];
    return O([o, a], (n - i) * w(i, s));
  }
  function x(e, t, n, r) {
    if (r === 100) {
      return r;
    }
    var o = P(r, e);
    var i = e[o - 1];
    var s = e[o];
    if (n) {
      if (r - i > (s - i) / 2) {
        return s;
      } else {
        return i;
      }
    } else if (t[o - 1]) {
      return e[o - 1] + a(r - e[o - 1], t[o - 1]);
    } else {
      return r;
    }
  }
  function T(e, t, n) {
    var r;
    if (typeof t == "number") {
      t = [t];
    }
    if (!Array.isArray(t)) {
      throw new Error("noUiSlider (" + ne + "): 'range' contains invalid value.");
    }
    r = e === "min" ? 0 : e === "max" ? 100 : parseFloat(e);
    if (!l(r) || !l(t[0])) {
      throw new Error("noUiSlider (" + ne + "): 'range' value isn't numeric.");
    }
    n.xPct.push(r);
    n.xVal.push(t[0]);
    if (r) {
      n.xSteps.push(!isNaN(t[1]) && t[1]);
    } else if (!isNaN(t[1])) {
      n.xSteps[0] = t[1];
    }
    n.xHighestCompleteStep.push(0);
  }
  function M(e, t, n) {
    if (!t) {
      return true;
    }
    n.xSteps[e] = C([n.xVal[e], n.xVal[e + 1]], t) / w(n.xPct[e], n.xPct[e + 1]);
    var r = (n.xVal[e + 1] - n.xVal[e]) / n.xNumSteps[e];
    var o = Math.ceil(Number(r.toFixed(3)) - 1);
    var a = n.xVal[e] + n.xNumSteps[e] * o;
    n.xHighestCompleteStep[e] = a;
  }
  function N(e, t, n) {
    this.xPct = [];
    this.xVal = [];
    this.xSteps = [n || false];
    this.xNumSteps = [false];
    this.xHighestCompleteStep = [];
    this.snap = t;
    var r;
    var o = [];
    for (r in e) {
      if (e.hasOwnProperty(r)) {
        o.push([e[r], r]);
      }
    }
    if (o.length && typeof o[0][0] == "object") {
      o.sort(function (e, t) {
        return e[0][0] - t[0][0];
      });
    } else {
      o.sort(function (e, t) {
        return e[0] - t[0];
      });
    }
    r = 0;
    for (; r < o.length; r++) {
      T(o[r][1], o[r][0], this);
    }
    this.xNumSteps = this.xSteps.slice(0);
    r = 0;
    for (; r < this.xNumSteps.length; r++) {
      M(r, this.xNumSteps[r], this);
    }
  }
  function D(t) {
    if (e(t)) {
      return true;
    }
    throw new Error("noUiSlider (" + ne + "): 'format' requires 'to' and 'from' methods.");
  }
  function R(e, t) {
    if (!l(t)) {
      throw new Error("noUiSlider (" + ne + "): 'step' is not numeric.");
    }
    e.singleStep = t;
  }
  function A(e, t) {
    if (typeof t != "object" || Array.isArray(t)) {
      throw new Error("noUiSlider (" + ne + "): 'range' is not an object.");
    }
    if (t.min === undefined || t.max === undefined) {
      throw new Error("noUiSlider (" + ne + "): Missing 'min' or 'max' in 'range'.");
    }
    if (t.min === t.max) {
      throw new Error("noUiSlider (" + ne + "): 'range' 'min' and 'max' cannot be equal.");
    }
    e.spectrum = new N(t, e.snap, e.singleStep);
  }
  function I(e, t) {
    t = d(t);
    if (!Array.isArray(t) || !t.length) {
      throw new Error("noUiSlider (" + ne + "): 'start' option is incorrect.");
    }
    e.handles = t.length;
    e.start = t;
  }
  function j(e, t) {
    e.snap = t;
    if (typeof t != "boolean") {
      throw new Error("noUiSlider (" + ne + "): 'snap' option must be a boolean.");
    }
  }
  function L(e, t) {
    e.animate = t;
    if (typeof t != "boolean") {
      throw new Error("noUiSlider (" + ne + "): 'animate' option must be a boolean.");
    }
  }
  function U(e, t) {
    e.animationDuration = t;
    if (typeof t != "number") {
      throw new Error("noUiSlider (" + ne + "): 'animationDuration' option must be a number.");
    }
  }
  function F(e, t) {
    var n;
    var r = [false];
    if (t === "lower") {
      t = [true, false];
    } else if (t === "upper") {
      t = [false, true];
    }
    if (t === true || t === false) {
      for (n = 1; n < e.handles; n++) {
        r.push(t);
      }
      r.push(false);
    } else {
      if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) {
        throw new Error("noUiSlider (" + ne + "): 'connect' option doesn't match handle count.");
      }
      r = t;
    }
    e.connect = r;
  }
  function B(e, t) {
    switch (t) {
      case "horizontal":
        e.ort = 0;
        break;
      case "vertical":
        e.ort = 1;
        break;
      default:
        throw new Error("noUiSlider (" + ne + "): 'orientation' option is invalid.");
    }
  }
  function V(e, t) {
    if (!l(t)) {
      throw new Error("noUiSlider (" + ne + "): 'margin' option must be numeric.");
    }
    if (t !== 0 && (e.margin = e.spectrum.getMargin(t), !e.margin)) {
      throw new Error("noUiSlider (" + ne + "): 'margin' option is only supported on linear sliders.");
    }
  }
  function W(e, t) {
    if (!l(t)) {
      throw new Error("noUiSlider (" + ne + "): 'limit' option must be numeric.");
    }
    e.limit = e.spectrum.getMargin(t);
    if (!e.limit || e.handles < 2) {
      throw new Error("noUiSlider (" + ne + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
  }
  function H(e, t) {
    if (!l(t) && !Array.isArray(t)) {
      throw new Error("noUiSlider (" + ne + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(t) && t.length !== 2 && !l(t[0]) && !l(t[1])) {
      throw new Error("noUiSlider (" + ne + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (t !== 0) {
      if (!Array.isArray(t)) {
        t = [t, t];
      }
      e.padding = [e.spectrum.getMargin(t[0]), e.spectrum.getMargin(t[1])];
      if (e.padding[0] === false || e.padding[1] === false) {
        throw new Error("noUiSlider (" + ne + "): 'padding' option is only supported on linear sliders.");
      }
      if (e.padding[0] < 0 || e.padding[1] < 0) {
        throw new Error("noUiSlider (" + ne + "): 'padding' option must be a positive number(s).");
      }
      if (e.padding[0] + e.padding[1] >= 100) {
        throw new Error("noUiSlider (" + ne + "): 'padding' option must not exceed 100% of the range.");
      }
    }
  }
  function q(e, t) {
    switch (t) {
      case "ltr":
        e.dir = 0;
        break;
      case "rtl":
        e.dir = 1;
        break;
      default:
        throw new Error("noUiSlider (" + ne + "): 'direction' option was not recognized.");
    }
  }
  function K(e, t) {
    if (typeof t != "string") {
      throw new Error("noUiSlider (" + ne + "): 'behaviour' must be a string containing options.");
    }
    var n = t.indexOf("tap") >= 0;
    var r = t.indexOf("drag") >= 0;
    var o = t.indexOf("fixed") >= 0;
    var a = t.indexOf("snap") >= 0;
    var i = t.indexOf("hover") >= 0;
    if (o) {
      if (e.handles !== 2) {
        throw new Error("noUiSlider (" + ne + "): 'fixed' behaviour must be used with 2 handles");
      }
      V(e, e.start[1] - e.start[0]);
    }
    e.events = {
      tap: n || a,
      drag: r,
      fixed: o,
      snap: a,
      hover: i
    };
  }
  function z(e, t) {
    if (t !== false) {
      if (t === true) {
        e.tooltips = [];
        for (var n = 0; n < e.handles; n++) {
          e.tooltips.push(true);
        }
      } else {
        e.tooltips = d(t);
        if (e.tooltips.length !== e.handles) {
          throw new Error("noUiSlider (" + ne + "): must pass a formatter for all handles.");
        }
        e.tooltips.forEach(function (e) {
          if (typeof e != "boolean" && (typeof e != "object" || typeof e.to != "function")) {
            throw new Error("noUiSlider (" + ne + "): 'tooltips' must be passed a formatter or 'false'.");
          }
        });
      }
    }
  }
  function Y(e, t) {
    e.ariaFormat = t;
    D(t);
  }
  function G(e, t) {
    e.format = t;
    D(t);
  }
  function X(e, t) {
    e.keyboardSupport = t;
    if (typeof t != "boolean") {
      throw new Error("noUiSlider (" + ne + "): 'keyboardSupport' option must be a boolean.");
    }
  }
  function $(e, t) {
    e.documentElement = t;
  }
  function Q(e, t) {
    if (typeof t != "string" && t !== false) {
      throw new Error("noUiSlider (" + ne + "): 'cssPrefix' must be a string or `false`.");
    }
    e.cssPrefix = t;
  }
  function Z(e, t) {
    if (typeof t != "object") {
      throw new Error("noUiSlider (" + ne + "): 'cssClasses' must be an object.");
    }
    if (typeof e.cssPrefix == "string") {
      e.cssClasses = {};
      for (var n in t) {
        if (t.hasOwnProperty(n)) {
          e.cssClasses[n] = e.cssPrefix + t[n];
        }
      }
    } else {
      e.cssClasses = t;
    }
  }
  function J(e) {
    var t = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: true,
      animationDuration: 300,
      ariaFormat: re,
      format: re
    };
    var r = {
      step: {
        r: false,
        t: R
      },
      start: {
        r: true,
        t: I
      },
      connect: {
        r: true,
        t: F
      },
      direction: {
        r: true,
        t: q
      },
      snap: {
        r: false,
        t: j
      },
      animate: {
        r: false,
        t: L
      },
      animationDuration: {
        r: false,
        t: U
      },
      range: {
        r: true,
        t: A
      },
      orientation: {
        r: false,
        t: B
      },
      margin: {
        r: false,
        t: V
      },
      limit: {
        r: false,
        t: W
      },
      padding: {
        r: false,
        t: H
      },
      behaviour: {
        r: true,
        t: K
      },
      ariaFormat: {
        r: false,
        t: Y
      },
      format: {
        r: false,
        t: G
      },
      tooltips: {
        r: false,
        t: z
      },
      keyboardSupport: {
        r: true,
        t: X
      },
      documentElement: {
        r: false,
        t: $
      },
      cssPrefix: {
        r: true,
        t: Q
      },
      cssClasses: {
        r: true,
        t: Z
      }
    };
    var o = {
      connect: false,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: true,
      cssPrefix: "noUi-",
      cssClasses: {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
      }
    };
    if (e.format && !e.ariaFormat) {
      e.ariaFormat = e.format;
    }
    Object.keys(r).forEach(function (a) {
      if (!n(e[a]) && o[a] === undefined) {
        if (r[a].r) {
          throw new Error("noUiSlider (" + ne + "): '" + a + "' is required.");
        }
        return true;
      }
      r[a].t(t, n(e[a]) ? e[a] : o[a]);
    });
    t.pips = e.pips;
    var a = s.createElement("div");
    var i = a.style.msTransform !== undefined;
    var u = a.style.transform !== undefined;
    t.transformRule = u ? "transform" : i ? "msTransform" : "webkitTransform";
    var l = [["left", "top"], ["right", "bottom"]];
    t.style = l[t.dir][t.ort];
    return t;
  }
  function ee(e, n, a) {
    function s(e, t) {
      var n = Oe.createElement("div");
      if (t) {
        h(n, t);
      }
      e.appendChild(n);
      return n;
    }
    function u(e, t) {
      var r = s(e, n.cssClasses.origin);
      var o = s(r, n.cssClasses.handle);
      o.setAttribute("data-handle", t);
      if (n.keyboardSupport) {
        o.setAttribute("tabindex", "0");
      }
      o.setAttribute("role", "slider");
      o.setAttribute("aria-orientation", n.ort ? "vertical" : "horizontal");
      if (t === 0) {
        h(o, n.cssClasses.handleLower);
      } else if (t === n.handles - 1) {
        h(o, n.cssClasses.handleUpper);
      }
      return r;
    }
    function l(e, t) {
      return !!t && s(e, n.cssClasses.connect);
    }
    function f(e, t) {
      var r = s(t, n.cssClasses.connects);
      ce = [];
      pe = [];
      pe.push(l(r, e[0]));
      for (var o = 0; o < n.handles; o++) {
        ce.push(u(t, o));
        be[o] = o;
        pe.push(l(r, e[o + 1]));
      }
    }
    function w(e) {
      h(e, n.cssClasses.target);
      if (n.dir === 0) {
        h(e, n.cssClasses.ltr);
      } else {
        h(e, n.cssClasses.rtl);
      }
      if (n.ort === 0) {
        h(e, n.cssClasses.horizontal);
      } else {
        h(e, n.cssClasses.vertical);
      }
      return s(e, n.cssClasses.base);
    }
    function C(e, t) {
      return !!n.tooltips[t] && s(e.firstChild, n.cssClasses.tooltip);
    }
    function _() {
      var e = ce.map(C);
      W("update", function (t, r, o) {
        if (e[r]) {
          var a = t[r];
          if (n.tooltips[r] !== true) {
            a = n.tooltips[r].to(o[r]);
          }
          e[r].innerHTML = a;
        }
      });
    }
    function O() {
      W("update", function (e, t, r, o, a) {
        be.forEach(function (e) {
          var t = ce[e];
          var o = z(ge, e, 0, true, true, true);
          var i = z(ge, e, 100, true, true, true);
          var s = a[e];
          var u = n.ariaFormat.to(r[e]);
          o = we.fromStepping(o).toFixed(1);
          i = we.fromStepping(i).toFixed(1);
          s = we.fromStepping(s).toFixed(1);
          t.children[0].setAttribute("aria-valuemin", o);
          t.children[0].setAttribute("aria-valuemax", i);
          t.children[0].setAttribute("aria-valuenow", s);
          t.children[0].setAttribute("aria-valuetext", u);
        });
      });
    }
    function P(e, t, n) {
      if (e === "range" || e === "steps") {
        return we.xVal;
      }
      if (e === "count") {
        if (t < 2) {
          throw new Error("noUiSlider (" + ne + "): 'values' (>= 2) required for mode 'count'.");
        }
        var r = t - 1;
        var o = 100 / r;
        for (t = []; r--;) {
          t[r] = r * o;
        }
        t.push(100);
        e = "positions";
      }
      if (e === "positions") {
        return t.map(function (e) {
          return we.fromStepping(n ? we.getStep(e) : e);
        });
      } else if (e === "values") {
        if (n) {
          return t.map(function (e) {
            return we.fromStepping(we.getStep(we.toStepping(e)));
          });
        } else {
          return t;
        }
      } else {
        return undefined;
      }
    }
    function k(e, t, n) {
      function r(e, t) {
        return (e + t).toFixed(7) / 1;
      }
      var a = {};
      var i = we.xVal[0];
      var s = we.xVal[we.xVal.length - 1];
      var u = false;
      var l = false;
      var c = 0;
      n = o(n.slice().sort(function (e, t) {
        return e - t;
      }));
      if (n[0] !== i) {
        n.unshift(i);
        u = true;
      }
      if (n[n.length - 1] !== s) {
        n.push(s);
        l = true;
      }
      n.forEach(function (o, i) {
        var s;
        var p;
        var d;
        var f;
        var h;
        var m;
        var v;
        var y;
        var g;
        var b;
        var E = o;
        var w = n[i + 1];
        var C = t === "steps";
        if (C) {
          s = we.xNumSteps[i];
        }
        s ||= w - E;
        if (E !== false && w !== undefined) {
          s = Math.max(s, 1e-7);
          p = E;
          for (; p <= w; p = r(p, s)) {
            f = we.toStepping(p);
            h = f - c;
            y = h / e;
            g = Math.round(y);
            b = h / g;
            d = 1;
            for (; d <= g; d += 1) {
              m = c + d * b;
              a[m.toFixed(5)] = [we.fromStepping(m), 0];
            }
            v = n.indexOf(p) > -1 ? Te : C ? Me : xe;
            if (!i && u) {
              v = 0;
            }
            if (p !== w || !l) {
              a[f.toFixed(5)] = [p, v];
            }
            c = f;
          }
        }
      });
      return a;
    }
    function S(e, t, r) {
      function o(e, t) {
        var r = t === n.cssClasses.value;
        var o = r ? c : p;
        var a = r ? u : l;
        return t + " " + o[n.ort] + " " + a[e];
      }
      function a(e, a, u) {
        u = t ? t(a, u) : u;
        if (u !== Se) {
          var l = s(i, false);
          l.className = o(u, n.cssClasses.marker);
          l.style[n.style] = e + "%";
          if (u > xe) {
            l = s(i, false);
            l.className = o(u, n.cssClasses.value);
            l.setAttribute("data-value", a);
            l.style[n.style] = e + "%";
            l.innerHTML = r.to(a);
          }
        }
      }
      var i = Oe.createElement("div");
      var u = [];
      u[xe] = n.cssClasses.valueNormal;
      u[Te] = n.cssClasses.valueLarge;
      u[Me] = n.cssClasses.valueSub;
      var l = [];
      l[xe] = n.cssClasses.markerNormal;
      l[Te] = n.cssClasses.markerLarge;
      l[Me] = n.cssClasses.markerSub;
      var c = [n.cssClasses.valueHorizontal, n.cssClasses.valueVertical];
      var p = [n.cssClasses.markerHorizontal, n.cssClasses.markerVertical];
      h(i, n.cssClasses.pips);
      h(i, n.ort === 0 ? n.cssClasses.pipsHorizontal : n.cssClasses.pipsVertical);
      Object.keys(e).forEach(function (t) {
        a(t, e[t][0], e[t][1]);
      });
      return i;
    }
    function x() {
      if (fe) {
        t(fe);
        fe = null;
      }
    }
    function T(e) {
      x();
      var t = e.mode;
      var n = e.density || 1;
      var r = e.filter || false;
      var o = e.values || false;
      var a = e.stepped || false;
      var i = P(t, o, a);
      var s = k(n, t, i);
      var u = e.format || {
        to: Math.round
      };
      return fe = ye.appendChild(S(s, r, u));
    }
    function M() {
      var e = le.getBoundingClientRect();
      var t = "offset" + ["Width", "Height"][n.ort];
      if (n.ort === 0) {
        return e.width || le[t];
      } else {
        return e.height || le[t];
      }
    }
    function N(e, t, r, o) {
      function a(a) {
        return !!(a = D(a, o.pageOffset, o.target || t)) && (!ye.hasAttribute("disabled") || !!o.doNotReject) && (!v(ye, n.cssClasses.tap) || !!o.doNotReject) && (e !== he.start || a.buttons === undefined || !(a.buttons > 1)) && (!o.hover || !a.buttons) && (ve || a.preventDefault(), a.calcPoint = a.points[n.ort], void r(a, o));
      }
      var i = [];
      e.split(" ").forEach(function (e) {
        t.addEventListener(e, a, !!ve && {
          passive: true
        });
        i.push([e, a]);
      });
      return i;
    }
    function D(e, t, n) {
      var r;
      var o;
      var a = e.type.indexOf("touch") === 0;
      var i = e.type.indexOf("mouse") === 0;
      var s = e.type.indexOf("pointer") === 0;
      if (e.type.indexOf("MSPointer") === 0) {
        s = true;
      }
      if (a) {
        function u(e) {
          return e.target === n || n.contains(e.target);
        }
        if (e.type === "touchstart") {
          var l = Array.prototype.filter.call(e.touches, u);
          if (l.length > 1) {
            return false;
          }
          r = l[0].pageX;
          o = l[0].pageY;
        } else {
          var c = Array.prototype.find.call(e.changedTouches, u);
          if (!c) {
            return false;
          }
          r = c.pageX;
          o = c.pageY;
        }
      }
      t = t || y(Oe);
      if (i || s) {
        r = e.clientX + t.x;
        o = e.clientY + t.y;
      }
      e.pageOffset = t;
      e.points = [r, o];
      e.cursor = i || s;
      return e;
    }
    function R(e) {
      var t = e - i(le, n.ort);
      var r = t * 100 / M();
      r = p(r);
      if (n.dir) {
        return 100 - r;
      } else {
        return r;
      }
    }
    function A(e) {
      var t = 100;
      var n = false;
      ce.forEach(function (r, o) {
        if (!r.hasAttribute("disabled")) {
          var a = Math.abs(ge[o] - e);
          if (a < t || a === 100 && t === 100) {
            n = o;
            t = a;
          }
        }
      });
      return n;
    }
    function I(e, t) {
      if (e.type === "mouseout" && e.target.nodeName === "HTML" && e.relatedTarget === null) {
        L(e, t);
      }
    }
    function j(e, t) {
      if (navigator.appVersion.indexOf("MSIE 9") === -1 && e.buttons === 0 && t.buttonsProperty !== 0) {
        return L(e, t);
      }
      var r = (n.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
      var o = r * 100 / t.baseSize;
      G(r > 0, o, t.locations, t.handleNumbers);
    }
    function L(e, t) {
      if (t.handle) {
        m(t.handle, n.cssClasses.active);
        Ee -= 1;
      }
      t.listeners.forEach(function (e) {
        Pe.removeEventListener(e[0], e[1]);
      });
      if (Ee === 0) {
        m(ye, n.cssClasses.drag);
        Q();
        if (e.cursor) {
          ke.style.cursor = "";
          ke.removeEventListener("selectstart", r);
        }
      }
      t.handleNumbers.forEach(function (e) {
        q("change", e);
        q("set", e);
        q("end", e);
      });
    }
    function U(e, t) {
      var o;
      if (t.handleNumbers.length === 1) {
        var a = ce[t.handleNumbers[0]];
        if (a.hasAttribute("disabled")) {
          return false;
        }
        o = a.children[0];
        Ee += 1;
        h(o, n.cssClasses.active);
      }
      e.stopPropagation();
      var i = [];
      var s = N(he.move, Pe, j, {
        target: e.target,
        handle: o,
        listeners: i,
        startCalcPoint: e.calcPoint,
        baseSize: M(),
        pageOffset: e.pageOffset,
        handleNumbers: t.handleNumbers,
        buttonsProperty: e.buttons,
        locations: ge.slice()
      });
      var u = N(he.end, Pe, L, {
        target: e.target,
        handle: o,
        listeners: i,
        doNotReject: true,
        handleNumbers: t.handleNumbers
      });
      var l = N("mouseout", Pe, I, {
        target: e.target,
        handle: o,
        listeners: i,
        doNotReject: true,
        handleNumbers: t.handleNumbers
      });
      i.push.apply(i, s.concat(u, l));
      if (e.cursor) {
        ke.style.cursor = getComputedStyle(e.target).cursor;
        if (ce.length > 1) {
          h(ye, n.cssClasses.drag);
        }
        ke.addEventListener("selectstart", r, false);
      }
      t.handleNumbers.forEach(function (e) {
        q("start", e);
      });
    }
    function F(e) {
      e.stopPropagation();
      var t = R(e.calcPoint);
      var r = A(t);
      return r !== false && (n.events.snap || c(ye, n.cssClasses.tap, n.animationDuration), Z(r, t, true, true), Q(), q("slide", r, true), q("update", r, true), q("change", r, true), q("set", r, true), void (n.events.snap && U(e, {
        handleNumbers: [r]
      })));
    }
    function B(e) {
      var t = R(e.calcPoint);
      var n = we.getStep(t);
      var r = we.fromStepping(n);
      Object.keys(_e).forEach(function (e) {
        if (e.split(".")[0] === "hover") {
          _e[e].forEach(function (e) {
            e.call(de, r);
          });
        }
      });
    }
    function V(e) {
      if (!e.fixed) {
        ce.forEach(function (e, t) {
          N(he.start, e.children[0], U, {
            handleNumbers: [t]
          });
        });
      }
      if (e.tap) {
        N(he.start, le, F, {});
      }
      if (e.hover) {
        N(he.move, le, B, {
          hover: true
        });
      }
      if (e.drag) {
        pe.forEach(function (t, r) {
          if (t !== false && r !== 0 && r !== pe.length - 1) {
            var o = ce[r - 1];
            var a = ce[r];
            var i = [t];
            h(t, n.cssClasses.draggable);
            if (e.fixed) {
              i.push(o.children[0]);
              i.push(a.children[0]);
            }
            i.forEach(function (e) {
              N(he.start, e, U, {
                handles: [o, a],
                handleNumbers: [r - 1, r]
              });
            });
          }
        });
      }
    }
    function W(e, t) {
      _e[e] = _e[e] || [];
      _e[e].push(t);
      if (e.split(".")[0] === "update") {
        ce.forEach(function (e, t) {
          q("update", t);
        });
      }
    }
    function H(e) {
      var t = e && e.split(".")[0];
      var n = t && e.substring(t.length);
      Object.keys(_e).forEach(function (e) {
        var r = e.split(".")[0];
        var o = e.substring(r.length);
        if ((!t || t === r) && (!n || n === o)) {
          delete _e[e];
        }
      });
    }
    function q(e, t, r) {
      Object.keys(_e).forEach(function (o) {
        var a = o.split(".")[0];
        if (e === a) {
          _e[o].forEach(function (e) {
            e.call(de, Ce.map(n.format.to), t, Ce.slice(), r || false, ge.slice());
          });
        }
      });
    }
    function K(e) {
      return e + "%";
    }
    function z(e, t, r, o, a, i) {
      if (ce.length > 1) {
        if (o && t > 0) {
          r = Math.max(r, e[t - 1] + n.margin);
        }
        if (a && t < ce.length - 1) {
          r = Math.min(r, e[t + 1] - n.margin);
        }
      }
      if (ce.length > 1 && n.limit) {
        if (o && t > 0) {
          r = Math.min(r, e[t - 1] + n.limit);
        }
        if (a && t < ce.length - 1) {
          r = Math.max(r, e[t + 1] - n.limit);
        }
      }
      if (n.padding) {
        if (t === 0) {
          r = Math.max(r, n.padding[0]);
        }
        if (t === ce.length - 1) {
          r = Math.min(r, 100 - n.padding[1]);
        }
      }
      r = we.getStep(r);
      r = p(r);
      return (r !== e[t] || !!i) && r;
    }
    function Y(e, t) {
      var r = n.ort;
      return (r ? t : e) + ", " + (r ? e : t);
    }
    function G(e, t, n, r) {
      var o = n.slice();
      var a = [!e, e];
      var i = [e, !e];
      r = r.slice();
      if (e) {
        r.reverse();
      }
      if (r.length > 1) {
        r.forEach(function (e, n) {
          var r = z(o, e, o[e] + t, a[n], i[n], false);
          if (r === false) {
            t = 0;
          } else {
            t = r - o[e];
            o[e] = r;
          }
        });
      } else {
        a = i = [true];
      }
      var s = false;
      r.forEach(function (e, r) {
        s = Z(e, n[e] + t, a[r], i[r]) || s;
      });
      if (s) {
        r.forEach(function (e) {
          q("update", e);
          q("slide", e);
        });
      }
    }
    function X(e, t) {
      if (n.dir) {
        return 100 - e - t;
      } else {
        return e;
      }
    }
    function $(e, t) {
      ge[e] = t;
      Ce[e] = we.fromStepping(t);
      var r = "translate(" + Y(K(X(t, 0) - Ne), "0") + ")";
      ce[e].style[n.transformRule] = r;
      ee(e);
      ee(e + 1);
    }
    function Q() {
      be.forEach(function (e) {
        var t = ge[e] > 50 ? -1 : 1;
        var n = 3 + (ce.length + t * e);
        ce[e].style.zIndex = n;
      });
    }
    function Z(e, t, n, r) {
      t = z(ge, e, t, n, r, false);
      return t !== false && ($(e, t), true);
    }
    function ee(e) {
      if (pe[e]) {
        var t = 0;
        var r = 100;
        if (e !== 0) {
          t = ge[e - 1];
        }
        if (e !== pe.length - 1) {
          r = ge[e];
        }
        var o = r - t;
        var a = "translate(" + Y(K(X(t, o)), "0") + ")";
        var i = "scale(" + Y(o / 100, "1") + ")";
        pe[e].style[n.transformRule] = a + " " + i;
      }
    }
    function te(e, t) {
      if (e === null || e === false || e === undefined) {
        return ge[t];
      } else {
        if (typeof e == "number") {
          e = String(e);
        }
        e = n.format.from(e);
        e = we.toStepping(e);
        if (e === false || isNaN(e)) {
          return ge[t];
        } else {
          return e;
        }
      }
    }
    function re(e, t) {
      var r = d(e);
      var o = ge[0] === undefined;
      t = t === undefined || !!t;
      if (n.animate && !o) {
        c(ye, n.cssClasses.tap, n.animationDuration);
      }
      be.forEach(function (e) {
        Z(e, te(r[e], e), true, false);
      });
      be.forEach(function (e) {
        Z(e, ge[e], true, true);
      });
      Q();
      be.forEach(function (e) {
        q("update", e);
        if (r[e] !== null && t) {
          q("set", e);
        }
      });
    }
    function oe(e) {
      re(n.start, e);
    }
    function ae() {
      var e = Ce.map(n.format.to);
      if (e.length === 1) {
        return e[0];
      } else {
        return e;
      }
    }
    function ie() {
      for (var e in n.cssClasses) {
        if (n.cssClasses.hasOwnProperty(e)) {
          m(ye, n.cssClasses[e]);
        }
      }
      while (ye.firstChild) {
        ye.removeChild(ye.firstChild);
      }
      delete ye.noUiSlider;
    }
    function se() {
      return ge.map(function (e, t) {
        var n = we.getNearbySteps(e);
        var r = Ce[t];
        var o = n.thisStep.step;
        var a = null;
        if (o !== false && r + o > n.stepAfter.startValue) {
          o = n.stepAfter.startValue - r;
        }
        a = r > n.thisStep.startValue ? n.thisStep.step : n.stepBefore.step !== false && r - n.stepBefore.highestStep;
        if (e === 100) {
          o = null;
        } else if (e === 0) {
          a = null;
        }
        var i = we.countStepDecimals();
        if (o !== null && o !== false) {
          o = Number(o.toFixed(i));
        }
        if (a !== null && a !== false) {
          a = Number(a.toFixed(i));
        }
        return [a, o];
      });
    }
    function ue(e, t) {
      var r = ae();
      var o = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
      o.forEach(function (t) {
        if (e[t] !== undefined) {
          a[t] = e[t];
        }
      });
      var i = J(a);
      o.forEach(function (t) {
        if (e[t] !== undefined) {
          n[t] = i[t];
        }
      });
      we = i.spectrum;
      n.margin = i.margin;
      n.limit = i.limit;
      n.padding = i.padding;
      if (n.pips) {
        T(n.pips);
      }
      ge = [];
      re(e.start || r, t);
    }
    var le;
    var ce;
    var pe;
    var de;
    var fe;
    var he = g();
    var me = E();
    var ve = me && b();
    var ye = e;
    var ge = [];
    var be = [];
    var Ee = 0;
    var we = n.spectrum;
    var Ce = [];
    var _e = {};
    var Oe = e.ownerDocument;
    var Pe = n.documentElement || Oe.documentElement;
    var ke = Oe.body;
    var Se = -1;
    var xe = 0;
    var Te = 1;
    var Me = 2;
    var Ne = Oe.dir === "rtl" || n.ort === 1 ? 0 : 100;
    le = w(ye);
    f(n.connect, le);
    V(n.events);
    re(n.start);
    de = {
      destroy: ie,
      steps: se,
      on: W,
      off: H,
      get: ae,
      set: re,
      reset: oe,
      __moveHandles: function (e, t, n) {
        G(e, t, ge, n);
      },
      options: a,
      updateOptions: ue,
      target: ye,
      removePips: x,
      pips: T
    };
    if (n.pips) {
      T(n.pips);
    }
    if (n.tooltips) {
      _();
    }
    O();
    return de;
  }
  function te(e, t) {
    if (!e || !e.nodeName) {
      throw new Error("noUiSlider (" + ne + "): create requires a single element, got: " + e);
    }
    if (e.noUiSlider) {
      throw new Error("noUiSlider (" + ne + "): Slider was already initialized.");
    }
    var n = J(t, e);
    var r = ee(e, n, t);
    e.noUiSlider = r;
    return r;
  }
  var ne = "12.0.0";
  N.prototype.getMargin = function (e) {
    var t = this.xNumSteps[0];
    if (t && e / t % 1 !== 0) {
      throw new Error("noUiSlider (" + ne + "): 'limit', 'margin' and 'padding' must be divisible by step.");
    }
    return this.xPct.length === 2 && C(this.xVal, e);
  };
  N.prototype.toStepping = function (e) {
    return e = k(this.xVal, this.xPct, e);
  };
  N.prototype.fromStepping = function (e) {
    return S(this.xVal, this.xPct, e);
  };
  N.prototype.getStep = function (e) {
    return e = x(this.xPct, this.xSteps, this.snap, e);
  };
  N.prototype.getNearbySteps = function (e) {
    var t = P(e, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[t - 2],
        step: this.xNumSteps[t - 2],
        highestStep: this.xHighestCompleteStep[t - 2]
      },
      thisStep: {
        startValue: this.xVal[t - 1],
        step: this.xNumSteps[t - 1],
        highestStep: this.xHighestCompleteStep[t - 1]
      },
      stepAfter: {
        startValue: this.xVal[t],
        step: this.xNumSteps[t],
        highestStep: this.xHighestCompleteStep[t]
      }
    };
  };
  N.prototype.countStepDecimals = function () {
    var e = this.xNumSteps.map(f);
    return Math.max.apply(null, e);
  };
  N.prototype.convert = function (e) {
    return this.getStep(this.toStepping(e));
  };
  var re = {
    to: function (e) {
      return e !== undefined && e.toFixed(2);
    },
    from: Number
  };
  return {
    __spectrum: N,
    version: ne,
    create: te
  };
});