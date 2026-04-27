function r(e, t, n, r) {
  return e === n && t === r;
}
function o(e) {
  var t = document.selection;
  var n = t.createRange();
  var r = n.text.length;
  var o = n.duplicate();
  o.moveToElementText(e);
  o.setEndPoint("EndToStart", n);
  var a = o.text.length;
  var i = a + r;
  return {
    start: a,
    end: i
  };
}
function a(e) {
  var t = window.getSelection && window.getSelection();
  if (!t || t.rangeCount === 0) {
    return null;
  }
  var n = t.anchorNode;
  var o = t.anchorOffset;
  var a = t.focusNode;
  var i = t.focusOffset;
  var s = t.getRangeAt(0);
  try {
    s.startContainer.nodeType;
    s.endContainer.nodeType;
  } catch (e) {
    return null;
  }
  var u = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset);
  var l = u ? 0 : s.toString().length;
  var c = s.cloneRange();
  c.selectNodeContents(e);
  c.setEnd(s.startContainer, s.startOffset);
  var p = r(c.startContainer, c.startOffset, c.endContainer, c.endOffset);
  var d = p ? 0 : c.toString().length;
  var f = d + l;
  var h = document.createRange();
  h.setStart(n, o);
  h.setEnd(a, i);
  var m = h.collapsed;
  return {
    start: m ? f : d,
    end: m ? d : f
  };
}
function i(e, t) {
  var n;
  var r;
  var o = document.selection.createRange().duplicate();
  if (typeof t.end == "undefined") {
    n = t.start;
    r = n;
  } else if (t.start > t.end) {
    n = t.end;
    r = t.start;
  } else {
    n = t.start;
    r = t.end;
  }
  o.moveToElementText(e);
  o.moveStart("character", n);
  o.setEndPoint("EndToStart", o);
  o.moveEnd("character", r - n);
  o.select();
}
function s(e, t) {
  if (window.getSelection) {
    var n = window.getSelection();
    var r = e[c()].length;
    var o = Math.min(t.start, r);
    var a = typeof t.end == "undefined" ? o : Math.min(t.end, r);
    if (!n.extend && o > a) {
      var i = a;
      a = o;
      o = i;
    }
    var s = l(e, o);
    var u = l(e, a);
    if (s && u) {
      var p = document.createRange();
      p.setStart(s.node, s.offset);
      n.removeAllRanges();
      if (o > a) {
        n.addRange(p);
        n.extend(u.node, u.offset);
      } else {
        p.setEnd(u.node, u.offset);
        n.addRange(p);
      }
    }
  }
}
var u = require("./5.js");
var l = require("./268.js");
var c = require("./109.js");
var p = u.canUseDOM && "selection" in document && !("getSelection" in window);
var d = {
  getOffsets: p ? o : a,
  setOffsets: p ? i : s
};
module.exports = d;