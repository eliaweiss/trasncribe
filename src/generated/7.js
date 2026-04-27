function r(e, t) {
  for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
    if (e.charAt(r) !== t.charAt(r)) {
      return r;
    }
  }
  if (e.length === t.length) {
    return -1;
  } else {
    return n;
  }
}
function o(e) {
  if (e) {
    if (e.nodeType === W) {
      return e.documentElement;
    } else {
      return e.firstChild;
    }
  } else {
    return null;
  }
}
function a(e) {
  var t = o(e);
  return t && $.getID(t);
}
function i(e) {
  var t = s(e);
  if (t) {
    if (B.hasOwnProperty(t)) {
      var n = B[t];
      if (n !== e) {
        if (p(n, t)) {
          j(false);
        } else {
          undefined;
        }
        B[t] = e;
      }
    } else {
      B[t] = e;
    }
  }
  return t;
}
function s(e) {
  return e && e.getAttribute && e.getAttribute(F) || "";
}
function u(e, t) {
  var n = s(e);
  if (n !== t) {
    delete B[n];
  }
  e.setAttribute(F, t);
  B[t] = e;
}
function l(e) {
  if (!B.hasOwnProperty(e) || !p(B[e], e)) {
    B[e] = $.findReactNodeByID(e);
  }
  return B[e];
}
function c(e) {
  var t = k.get(e)._rootNodeID;
  if (O.isNullComponentID(t)) {
    return null;
  } else {
    if (!B.hasOwnProperty(t) || !p(B[t], t)) {
      B[t] = $.findReactNodeByID(t);
    }
    return B[t];
  }
}
function p(e, t) {
  if (e) {
    if (s(e) !== t) {
      j(false);
    } else {
      undefined;
    }
    var n = $.findReactContainerForID(t);
    if (n && A(n, e)) {
      return true;
    }
  }
  return false;
}
function d(e) {
  delete B[e];
}
function f(e) {
  var t = B[e];
  return !!t && !!p(t, e) && void (G = t);
}
function h(e) {
  G = null;
  P.traverseAncestors(e, f);
  var t = G;
  G = null;
  return t;
}
function m(e, t, n, r, o, a) {
  if (C.useCreateElement) {
    a = D({}, a);
    if (n.nodeType === W) {
      a[q] = n;
    } else {
      a[q] = n.ownerDocument;
    }
  }
  var i = T.mountComponent(e, t, r, a);
  e._renderedComponent._topLevelWrapper = e;
  $._mountImageIntoNode(i, n, o, r);
}
function v(e, t, n, r, o) {
  var a = N.ReactReconcileTransaction.getPooled(r);
  a.perform(m, null, e, t, n, a, r, o);
  N.ReactReconcileTransaction.release(a);
}
function y(e, t) {
  T.unmountComponent(e);
  if (t.nodeType === W) {
    t = t.documentElement;
  }
  while (t.lastChild) {
    t.removeChild(t.lastChild);
  }
}
function g(e) {
  var t = a(e);
  return !!t && t !== P.getReactRootIDFromNodeID(t);
}
function b(e) {
  for (; e && e.parentNode !== e; e = e.parentNode) {
    if (e.nodeType === 1) {
      var t = s(e);
      if (t) {
        var n;
        var r = P.getReactRootIDFromNodeID(t);
        var o = e;
        do {
          n = s(o);
          o = o.parentNode;
          if (o == null) {
            return null;
          }
        } while (n !== r);
        if (o === z[r]) {
          return e;
        }
      }
    }
  }
  return null;
}
var E = require("./20.js");
var w = require("./36.js");
require("./13.js");
var C = require("./88.js");
var _ = require("./8.js");
var O = require("./96.js");
var P = require("./21.js");
var k = require("./27.js");
var S = require("./99.js");
var x = require("./10.js");
var T = require("./16.js");
var M = require("./52.js");
var N = require("./11.js");
var D = require("./3.js");
var R = require("./24.js");
var A = require("./70.js");
var I = require("./59.js");
var j = require("./1.js");
var L = require("./43.js");
var U = require("./62.js");
require("./64.js");
require("./4.js");
var F = E.ID_ATTRIBUTE_NAME;
var B = {};
var V = 1;
var W = 9;
var H = 11;
var q = "__ReactMount_ownerDocument$" + Math.random().toString(36).slice(2);
var K = {};
var z = {};
var Y = [];
var G = null;
function X() {}
X.prototype.isReactComponent = {};
X.prototype.render = function () {
  return this.props;
};
var $ = {
  TopLevelWrapper: X,
  _instancesByReactRootID: K,
  scrollMonitor: function (e, t) {
    t();
  },
  _updateRootComponent: function (e, t, n, r) {
    $.scrollMonitor(n, function () {
      M.enqueueElementInternal(e, t);
      if (r) {
        M.enqueueCallbackInternal(e, r);
      }
    });
    return e;
  },
  _registerComponent: function (e, t) {
    if (!t || t.nodeType !== V && t.nodeType !== W && t.nodeType !== H) {
      j(false);
    } else {
      undefined;
    }
    w.ensureScrollValueMonitoring();
    var n = $.registerContainer(t);
    K[n] = e;
    return n;
  },
  _renderNewRootComponent: function (e, t, n, r) {
    var o = I(e, null);
    var a = $._registerComponent(o, t);
    N.batchedUpdates(v, o, a, t, n, r);
    return o;
  },
  renderSubtreeIntoContainer: function (e, t, n, r) {
    if (e == null || e._reactInternalInstance == null) {
      j(false);
    } else {
      undefined;
    }
    return $._renderSubtreeIntoContainer(e, t, n, r);
  },
  _renderSubtreeIntoContainer: function (e, t, n, r) {
    if (_.isValidElement(t)) {
      undefined;
    } else {
      j(false);
    }
    var i = new _(X, null, null, null, null, null, t);
    var u = K[a(n)];
    if (u) {
      var l = u._currentElement;
      var c = l.props;
      if (U(c, t)) {
        var p = u._renderedComponent.getPublicInstance();
        var d = r && function () {
          r.call(p);
        };
        $._updateRootComponent(u, i, n, d);
        return p;
      }
      $.unmountComponentAtNode(n);
    }
    var f = o(n);
    var h = f && !!s(f);
    var m = g(n);
    var v = h && !u && !m;
    var y = $._renderNewRootComponent(i, n, v, e != null ? e._reactInternalInstance._processChildContext(e._reactInternalInstance._context) : R)._renderedComponent.getPublicInstance();
    if (r) {
      r.call(y);
    }
    return y;
  },
  render: function (e, t, n) {
    return $._renderSubtreeIntoContainer(null, e, t, n);
  },
  registerContainer: function (e) {
    var t = a(e);
    t &&= P.getReactRootIDFromNodeID(t);
    t ||= P.createReactRootID();
    z[t] = e;
    return t;
  },
  unmountComponentAtNode: function (e) {
    if (!e || e.nodeType !== V && e.nodeType !== W && e.nodeType !== H) {
      j(false);
    } else {
      undefined;
    }
    var t = a(e);
    var n = K[t];
    if (!n) {
      g(e);
      var r = s(e);
      if (r) {
        r === P.getReactRootIDFromNodeID(r);
      }
      return false;
    }
    N.batchedUpdates(y, n, e);
    delete K[t];
    delete z[t];
    return true;
  },
  findReactContainerForID: function (e) {
    var t = P.getReactRootIDFromNodeID(e);
    var n = z[t];
    return n;
  },
  findReactNodeByID: function (e) {
    var t = $.findReactContainerForID(e);
    return $.findComponentRoot(t, e);
  },
  getFirstReactDOM: function (e) {
    return b(e);
  },
  findComponentRoot: function (e, t) {
    var n = Y;
    var r = 0;
    var o = h(t) || e;
    n[0] = o.firstChild;
    n.length = 1;
    while (r < n.length) {
      var a;
      for (var i = n[r++]; i;) {
        var s = $.getID(i);
        if (s) {
          if (t === s) {
            a = i;
          } else if (P.isAncestorIDOf(s, t)) {
            n.length = r = 0;
            n.push(i.firstChild);
          }
        } else {
          n.push(i.firstChild);
        }
        i = i.nextSibling;
      }
      if (a) {
        n.length = 0;
        return a;
      }
    }
    n.length = 0;
    j(false);
  },
  _mountImageIntoNode: function (e, t, n, a) {
    if (!t || t.nodeType !== V && t.nodeType !== W && t.nodeType !== H) {
      j(false);
    } else {
      undefined;
    }
    if (n) {
      var i = o(t);
      if (S.canReuseMarkup(e, i)) {
        return;
      }
      var s = i.getAttribute(S.CHECKSUM_ATTR_NAME);
      i.removeAttribute(S.CHECKSUM_ATTR_NAME);
      var u = i.outerHTML;
      i.setAttribute(S.CHECKSUM_ATTR_NAME, s);
      var l = e;
      var c = r(l, u);
      " (client) " + l.substring(c - 20, c + 20) + "\n (server) " + u.substring(c - 20, c + 20);
      if (t.nodeType === W) {
        j(false);
      } else {
        undefined;
      }
    }
    if (t.nodeType === W) {
      j(false);
    } else {
      undefined;
    }
    if (a.useCreateElement) {
      while (t.lastChild) {
        t.removeChild(t.lastChild);
      }
      t.appendChild(e);
    } else {
      L(t, e);
    }
  },
  ownerDocumentContextKey: q,
  getReactRootID: a,
  getID: i,
  setID: u,
  getNode: l,
  getNodeFromInstance: c,
  isValid: p,
  purgeID: d
};
x.measureMethods($, "ReactMount", {
  _renderNewRootComponent: "_renderNewRootComponent",
  _mountImageIntoNode: "_mountImageIntoNode"
});
module.exports = $;