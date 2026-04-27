function r(e) {
  return a(document.documentElement, e);
}
var o = require("./236.js");
var a = require("./70.js");
var i = require("./71.js");
var s = require("./72.js");
var u = {
  hasSelectionCapabilities: function (e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && e.type === "text" || t === "textarea" || e.contentEditable === "true");
  },
  getSelectionInformation: function () {
    var e = s();
    return {
      focusedElem: e,
      selectionRange: u.hasSelectionCapabilities(e) ? u.getSelection(e) : null
    };
  },
  restoreSelection: function (e) {
    var t = s();
    var n = e.focusedElem;
    var o = e.selectionRange;
    if (t !== n && r(n)) {
      if (u.hasSelectionCapabilities(n)) {
        u.setSelection(n, o);
      }
      i(n);
    }
  },
  getSelection: function (e) {
    var t;
    if ("selectionStart" in e) {
      t = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
    } else if (document.selection && e.nodeName && e.nodeName.toLowerCase() === "input") {
      var n = document.selection.createRange();
      if (n.parentElement() === e) {
        t = {
          start: -n.moveStart("character", -e.value.length),
          end: -n.moveEnd("character", -e.value.length)
        };
      }
    } else {
      t = o.getOffsets(e);
    }
    return t || {
      start: 0,
      end: 0
    };
  },
  setSelection: function (e, t) {
    var n = t.start;
    var r = t.end;
    if (typeof r == "undefined") {
      r = n;
    }
    if ("selectionStart" in e) {
      e.selectionStart = n;
      e.selectionEnd = Math.min(r, e.value.length);
    } else if (document.selection && e.nodeName && e.nodeName.toLowerCase() === "input") {
      var a = e.createTextRange();
      a.collapse(true);
      a.moveStart("character", n);
      a.moveEnd("character", r - n);
      a.select();
    } else {
      o.setOffsets(e, t);
    }
  }
};
module.exports = u;