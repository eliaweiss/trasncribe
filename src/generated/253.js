function r(e) {
  if ("selectionStart" in e && u.hasSelectionCapabilities(e)) {
    return {
      start: e.selectionStart,
      end: e.selectionEnd
    };
  }
  if (window.getSelection) {
    var t = window.getSelection();
    return {
      anchorNode: t.anchorNode,
      anchorOffset: t.anchorOffset,
      focusNode: t.focusNode,
      focusOffset: t.focusOffset
    };
  }
  if (document.selection) {
    var n = document.selection.createRange();
    return {
      parentElement: n.parentElement(),
      text: n.text,
      top: n.boundingTop,
      left: n.boundingLeft
    };
  }
}
function o(e, t) {
  if (E || y == null || y !== c()) {
    return null;
  }
  var n = r(y);
  if (!b || !f(b, n)) {
    b = n;
    var o = l.getPooled(v.select, g, e, t);
    o.type = "select";
    o.target = y;
    i.accumulateTwoPhaseDispatches(o);
    return o;
  }
  return null;
}
var a = require("./12.js");
var i = require("./26.js");
var s = require("./5.js");
var u = require("./98.js");
var l = require("./17.js");
var c = require("./72.js");
var p = require("./110.js");
var d = require("./14.js");
var f = require("./74.js");
var h = a.topLevelTypes;
var m = s.canUseDOM && "documentMode" in document && document.documentMode <= 11;
var v = {
  select: {
    phasedRegistrationNames: {
      bubbled: d({
        onSelect: null
      }),
      captured: d({
        onSelectCapture: null
      })
    },
    dependencies: [h.topBlur, h.topContextMenu, h.topFocus, h.topKeyDown, h.topMouseDown, h.topMouseUp, h.topSelectionChange]
  }
};
var y = null;
var g = null;
var b = null;
var E = false;
var w = false;
var C = d({
  onSelect: null
});
var _ = {
  eventTypes: v,
  extractEvents: function (e, t, n, r, a) {
    if (!w) {
      return null;
    }
    switch (e) {
      case h.topFocus:
        if (p(t) || t.contentEditable === "true") {
          y = t;
          g = n;
          b = null;
        }
        break;
      case h.topBlur:
        y = null;
        g = null;
        b = null;
        break;
      case h.topMouseDown:
        E = true;
        break;
      case h.topContextMenu:
      case h.topMouseUp:
        E = false;
        return o(r, a);
      case h.topSelectionChange:
        if (m) {
          break;
        }
      case h.topKeyDown:
      case h.topKeyUp:
        return o(r, a);
    }
    return null;
  },
  didPutListener: function (e, t, n) {
    if (t === C) {
      w = true;
    }
  }
};
module.exports = _;