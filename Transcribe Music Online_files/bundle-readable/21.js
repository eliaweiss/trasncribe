function r(e) {
  return f + e.toString(36);
}
function o(e, t) {
  return e.charAt(t) === f || t === e.length;
}
function a(e) {
  return e === "" || e.charAt(0) === f && e.charAt(e.length - 1) !== f;
}
function i(e, t) {
  return t.indexOf(e) === 0 && o(t, e.length);
}
function s(e) {
  if (e) {
    return e.substr(0, e.lastIndexOf(f));
  } else {
    return "";
  }
}
function u(e, t) {
  if (a(e) && a(t)) {
    undefined;
  } else {
    d(false);
  }
  if (i(e, t)) {
    undefined;
  } else {
    d(false);
  }
  if (e === t) {
    return e;
  }
  var n;
  var r = e.length + h;
  for (n = r; n < t.length && !o(t, n); n++);
  return t.substr(0, n);
}
function l(e, t) {
  var n = Math.min(e.length, t.length);
  if (n === 0) {
    return "";
  }
  var r = 0;
  for (var i = 0; i <= n; i++) {
    if (o(e, i) && o(t, i)) {
      r = i;
    } else if (e.charAt(i) !== t.charAt(i)) {
      break;
    }
  }
  var s = e.substr(0, r);
  if (a(s)) {
    undefined;
  } else {
    d(false);
  }
  return s;
}
function c(e, t, n, r, o, a) {
  e = e || "";
  t = t || "";
  if (e === t) {
    d(false);
  } else {
    undefined;
  }
  var l = i(t, e);
  if (l || i(e, t)) {
    undefined;
  } else {
    d(false);
  }
  var c = 0;
  for (var p = l ? s : u, f = e;; f = p(f, t)) {
    var h;
    if ((!o || f !== e) && (!a || f !== t)) {
      h = n(f, l, r);
    }
    if (h === false || f === t) {
      break;
    }
    if (c++ < m) {
      undefined;
    } else {
      d(false);
    }
  }
}
var p = require("./104.js");
var d = require("./1.js");
var f = ".";
var h = f.length;
var m = 10000;
var v = {
  createReactRootID: function () {
    return r(p.createReactRootIndex());
  },
  createReactID: function (e, t) {
    return e + t;
  },
  getReactRootIDFromNodeID: function (e) {
    if (e && e.charAt(0) === f && e.length > 1) {
      var t = e.indexOf(f, 1);
      if (t > -1) {
        return e.substr(0, t);
      } else {
        return e;
      }
    }
    return null;
  },
  traverseEnterLeave: function (e, t, n, r, o) {
    var a = l(e, t);
    if (a !== e) {
      c(e, a, n, r, false, true);
    }
    if (a !== t) {
      c(a, t, n, o, true, false);
    }
  },
  traverseTwoPhase: function (e, t, n) {
    if (e) {
      c("", e, t, n, true, false);
      c(e, "", t, n, false, true);
    }
  },
  traverseTwoPhaseSkipTarget: function (e, t, n) {
    if (e) {
      c("", e, t, n, true, true);
      c(e, "", t, n, true, true);
    }
  },
  traverseAncestors: function (e, t, n) {
    c("", e, t, n, true, false);
  },
  getFirstCommonAncestorID: l,
  _getNextDescendantID: u,
  isAncestorIDOf: i,
  SEPARATOR: f
};
module.exports = v;