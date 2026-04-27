(function (e, t) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = t();
  } else if (typeof define == "function" && define.amd) {
    define([], t);
  } else {
    var n = t();
    for (var r in n) {
      (typeof exports == "object" ? exports : e)[r] = n[r];
    }
  }
})(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) {
        return n[r].exports;
      }
      var o = n[r] = {
        exports: {},
        id: r,
        loaded: false
      };
      e[r].call(o.exports, o, o.exports, t);
      o.loaded = true;
      return o.exports;
    }
    var n = {};
    t.m = e;
    t.c = n;
    t.p = "";
    return t(0);
  }([function (e, t, n) {
    e.exports = n(143);
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, o, a, i, s) {
      if (!e) {
        var u;
        if (t === undefined) {
          u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var l = [n, r, o, a, i, s];
          var c = 0;
          u = new Error(t.replace(/%s/g, function () {
            return l[c++];
          }));
          u.name = "Invariant Violation";
        }
        u.framesToPop = 1;
        throw u;
      }
    }
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    e.exports = n(35);
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (e == null) {
        throw new TypeError("Object.assign target cannot be null or undefined");
      }
      var n = Object(e);
      var r = Object.prototype.hasOwnProperty;
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o];
        if (a != null) {
          var i = Object(a);
          for (var s in i) {
            if (r.call(i, s)) {
              n[s] = i[s];
            }
          }
        }
      }
      return n;
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    var r = n(9);
    var o = r;
    e.exports = o;
  }, function (e, t) {
    "use strict";

    var n = typeof window != "undefined" && !!window.document && !!window.document.createElement;
    var r = {
      canUseDOM: n,
      canUseWorkers: typeof Worker != "undefined",
      canUseEventListeners: n && (!!window.addEventListener || !!window.attachEvent),
      canUseViewport: n && !!window.screen,
      isInWorker: !n
    };
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return Object.keys(e).filter(function (t) {
        return e[t];
      }).join(" ");
    }
    function o(e, t) {
      var n = e;
      var r = parseInt(n / 60);
      var o = Math.round(n % 60);
      if (t) {
        o = (n % 60).toFixed(2);
      }
      var a = r + ":" + (o < 10 ? "0" + o : o);
      return a;
    }
    function a(e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      return function () {
        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) {
          r[o] = arguments[o];
        }
        var a = {
          type: e
        };
        n.forEach(function (e, t) {
          a[n[t]] = r[t];
        });
        return a;
      };
    }
    function i(e) {
      var t = document.documentElement;
      var n = e.target.getBoundingClientRect();
      var r = n.left + window.pageXOffset - t.clientLeft;
      return e.pageX - r;
    }
    function s(e) {
      if (e) {
        return "block";
      } else {
        return "none";
      }
    }
    function u() {
      m++;
      return Date.now() + m;
    }
    function l(e, t, n) {
      var r = false;
      return function () {
        if (!r) {
          e.apply(n, arguments);
          r = true;
          setTimeout(function () {
            r = false;
          }, t);
        }
      };
    }
    function c(e, t) {
      var n = null;
      return function () {
        var r = this;
        var o = arguments;
        clearTimeout(n);
        n = setTimeout(function () {
          e.apply(r, o);
        }, t);
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.classList = r;
    t.formatTime = o;
    t.makeAction = a;
    t.relX = i;
    t.display = s;
    t.getUnique = u;
    t.throttle = l;
    t.debounce = c;
    if (typeof window != "undefined") {
      n(115);
    }
    var p = function () {
      var e = {};
      var t = {
        navigator: {}
      };
      if (typeof window != "undefined") {
        e = document;
        t = window;
      }
      return {
        document: e,
        window: t
      };
    }();
    t.shims = p;
    var d = typeof window != "undefined";
    t.hasWindow = d;
    if (!Object.assign) {
      Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (e) {
          if (e === undefined || e === null) {
            throw new TypeError("Cannot convert first argument to object");
          }
          var t = Object(e);
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (r !== undefined && r !== null) {
              r = Object(r);
              var o = Object.keys(Object(r));
              for (var a = 0, i = o.length; a < i; a++) {
                var s = o[a];
                var u = Object.getOwnPropertyDescriptor(r, s);
                if (u !== undefined && u.enumerable) {
                  t[s] = r[s];
                }
              }
            }
          }
          return t;
        }
      });
    }
    var f = function () {
      if (typeof window == "undefined") {
        return function () {};
      } else {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame).bind(window);
      }
    }();
    t.requestAnimationFrame = f;
    var h = function () {
      if (typeof window == "undefined") {
        return function () {};
      } else {
        return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame).bind(window);
      }
    }();
    t.cancelAnimationFrame = h;
    var m = 0;
    var v = n(181);
    t.key = v;
    v.filter = function (e) {
      var t = e.target || e.srcElement;
      return !t.isContentEditable && t.tagName != "INPUT" && t.tagName != "SELECT" && t.tagName != "TEXTAREA";
    };
  }, function (e, t, n) {
    "use strict";

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
    var E = n(20);
    var w = n(36);
    n(13);
    var C = n(88);
    var _ = n(8);
    var O = n(96);
    var P = n(21);
    var k = n(27);
    var S = n(99);
    var x = n(10);
    var T = n(16);
    var M = n(52);
    var N = n(11);
    var D = n(3);
    var R = n(24);
    var A = n(70);
    var I = n(59);
    var j = n(1);
    var L = n(43);
    var U = n(62);
    n(64);
    n(4);
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
    e.exports = $;
  }, function (e, t, n) {
    "use strict";

    var r = n(13);
    var o = n(3);
    n(41);
    var a = typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var i = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function s(e, t, n, r, o, i, s) {
      var u = {
        $$typeof: a,
        type: e,
        key: t,
        ref: n,
        props: s,
        _owner: i
      };
      return u;
    }
    s.createElement = function (e, t, n) {
      var o;
      var a = {};
      var u = null;
      var l = null;
      var c = null;
      var p = null;
      if (t != null) {
        l = t.ref === undefined ? null : t.ref;
        u = t.key === undefined ? null : "" + t.key;
        c = t.__self === undefined ? null : t.__self;
        p = t.__source === undefined ? null : t.__source;
        for (o in t) {
          if (t.hasOwnProperty(o) && !i.hasOwnProperty(o)) {
            a[o] = t[o];
          }
        }
      }
      var d = arguments.length - 2;
      if (d === 1) {
        a.children = n;
      } else if (d > 1) {
        var f = Array(d);
        for (var h = 0; h < d; h++) {
          f[h] = arguments[h + 2];
        }
        a.children = f;
      }
      if (e && e.defaultProps) {
        var m = e.defaultProps;
        for (o in m) {
          if (typeof a[o] == "undefined") {
            a[o] = m[o];
          }
        }
      }
      return s(e, u, l, c, p, r.current, a);
    };
    s.createFactory = function (e) {
      var t = s.createElement.bind(null, e);
      t.type = e;
      return t;
    };
    s.cloneAndReplaceKey = function (e, t) {
      var n = s(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
      return n;
    };
    s.cloneAndReplaceProps = function (e, t) {
      var n = s(e.type, e.key, e.ref, e._self, e._source, e._owner, t);
      return n;
    };
    s.cloneElement = function (e, t, n) {
      var a;
      var u = o({}, e.props);
      var l = e.key;
      var c = e.ref;
      var p = e._self;
      var d = e._source;
      var f = e._owner;
      if (t != null) {
        if (t.ref !== undefined) {
          c = t.ref;
          f = r.current;
        }
        if (t.key !== undefined) {
          l = "" + t.key;
        }
        for (a in t) {
          if (t.hasOwnProperty(a) && !i.hasOwnProperty(a)) {
            u[a] = t[a];
          }
        }
      }
      var h = arguments.length - 2;
      if (h === 1) {
        u.children = n;
      } else if (h > 1) {
        var m = Array(h);
        for (var v = 0; v < h; v++) {
          m[v] = arguments[v + 2];
        }
        u.children = m;
      }
      return s(e.type, l, c, p, d, f, u);
    };
    s.isValidElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    };
    e.exports = s;
  }, function (e, t) {
    "use strict";

    function n(e) {
      return function () {
        return e;
      };
    }
    function r() {}
    r.thatReturns = n;
    r.thatReturnsFalse = n(false);
    r.thatReturnsTrue = n(true);
    r.thatReturnsNull = n(null);
    r.thatReturnsThis = function () {
      return this;
    };
    r.thatReturnsArgument = function (e) {
      return e;
    };
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      return n;
    }
    var o = {
      enableMeasure: false,
      storedMeasure: r,
      measureMethods: function (e, t, n) {},
      measure: function (e, t, n) {
        return n;
      },
      injection: {
        injectMeasure: function (e) {
          o.storedMeasure = e;
        }
      }
    };
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (k.ReactReconcileTransaction && E) {
        undefined;
      } else {
        v(false);
      }
    }
    function o() {
      this.reinitializeTransaction();
      this.dirtyComponentsLength = null;
      this.callbackQueue = c.getPooled();
      this.reconcileTransaction = k.ReactReconcileTransaction.getPooled(false);
    }
    function a(e, t, n, o, a, i) {
      r();
      E.batchedUpdates(e, t, n, o, a, i);
    }
    function i(e, t) {
      return e._mountOrder - t._mountOrder;
    }
    function s(e) {
      var t = e.dirtyComponentsLength;
      if (t !== y.length) {
        v(false);
      } else {
        undefined;
      }
      y.sort(i);
      for (var n = 0; n < t; n++) {
        var r = y[n];
        var o = r._pendingCallbacks;
        r._pendingCallbacks = null;
        f.performUpdateIfNecessary(r, e.reconcileTransaction);
        if (o) {
          for (var a = 0; a < o.length; a++) {
            e.callbackQueue.enqueue(o[a], r.getPublicInstance());
          }
        }
      }
    }
    function u(e) {
      r();
      if (E.isBatchingUpdates) {
        y.push(e);
        return;
      } else {
        E.batchedUpdates(u, e);
        return;
      }
    }
    function l(e, t) {
      if (E.isBatchingUpdates) {
        undefined;
      } else {
        v(false);
      }
      g.enqueue(e, t);
      b = true;
    }
    var c = n(45);
    var p = n(15);
    var d = n(10);
    var f = n(16);
    var h = n(40);
    var m = n(3);
    var v = n(1);
    var y = [];
    var g = c.getPooled();
    var b = false;
    var E = null;
    var w = {
      initialize: function () {
        this.dirtyComponentsLength = y.length;
      },
      close: function () {
        if (this.dirtyComponentsLength !== y.length) {
          y.splice(0, this.dirtyComponentsLength);
          O();
        } else {
          y.length = 0;
        }
      }
    };
    var C = {
      initialize: function () {
        this.callbackQueue.reset();
      },
      close: function () {
        this.callbackQueue.notifyAll();
      }
    };
    var _ = [w, C];
    m(o.prototype, h.Mixin, {
      getTransactionWrappers: function () {
        return _;
      },
      destructor: function () {
        this.dirtyComponentsLength = null;
        c.release(this.callbackQueue);
        this.callbackQueue = null;
        k.ReactReconcileTransaction.release(this.reconcileTransaction);
        this.reconcileTransaction = null;
      },
      perform: function (e, t, n) {
        return h.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n);
      }
    });
    p.addPoolingTo(o);
    function O() {
      while (y.length || b) {
        if (y.length) {
          var e = o.getPooled();
          e.perform(s, null, e);
          o.release(e);
        }
        if (b) {
          b = false;
          var t = g;
          g = c.getPooled();
          t.notifyAll();
          c.release(t);
        }
      }
    }
    O = d.measure("ReactUpdates", "flushBatchedUpdates", O);
    var P = {
      injectReconcileTransaction: function (e) {
        if (e) {
          undefined;
        } else {
          v(false);
        }
        k.ReactReconcileTransaction = e;
      },
      injectBatchingStrategy: function (e) {
        if (e) {
          undefined;
        } else {
          v(false);
        }
        if (typeof e.batchedUpdates != "function") {
          v(false);
        } else {
          undefined;
        }
        if (typeof e.isBatchingUpdates != "boolean") {
          v(false);
        } else {
          undefined;
        }
        E = e;
      }
    };
    var k = {
      ReactReconcileTransaction: null,
      batchedUpdates: a,
      enqueueUpdate: u,
      flushBatchedUpdates: O,
      injection: P,
      asap: l
    };
    e.exports = k;
  }, function (e, t, n) {
    "use strict";

    var r = n(32);
    var o = r({
      bubbled: null,
      captured: null
    });
    var a = r({
      topAbort: null,
      topBlur: null,
      topCanPlay: null,
      topCanPlayThrough: null,
      topChange: null,
      topClick: null,
      topCompositionEnd: null,
      topCompositionStart: null,
      topCompositionUpdate: null,
      topContextMenu: null,
      topCopy: null,
      topCut: null,
      topDoubleClick: null,
      topDrag: null,
      topDragEnd: null,
      topDragEnter: null,
      topDragExit: null,
      topDragLeave: null,
      topDragOver: null,
      topDragStart: null,
      topDrop: null,
      topDurationChange: null,
      topEmptied: null,
      topEncrypted: null,
      topEnded: null,
      topError: null,
      topFocus: null,
      topInput: null,
      topKeyDown: null,
      topKeyPress: null,
      topKeyUp: null,
      topLoad: null,
      topLoadedData: null,
      topLoadedMetadata: null,
      topLoadStart: null,
      topMouseDown: null,
      topMouseMove: null,
      topMouseOut: null,
      topMouseOver: null,
      topMouseUp: null,
      topPaste: null,
      topPause: null,
      topPlay: null,
      topPlaying: null,
      topProgress: null,
      topRateChange: null,
      topReset: null,
      topScroll: null,
      topSeeked: null,
      topSeeking: null,
      topSelectionChange: null,
      topStalled: null,
      topSubmit: null,
      topSuspend: null,
      topTextInput: null,
      topTimeUpdate: null,
      topTouchCancel: null,
      topTouchEnd: null,
      topTouchMove: null,
      topTouchStart: null,
      topVolumeChange: null,
      topWaiting: null,
      topWheel: null
    });
    var i = {
      topLevelTypes: a,
      PropagationPhases: o
    };
    e.exports = i;
  }, function (e, t) {
    "use strict";

    var n = {
      current: null
    };
    e.exports = n;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t;
      for (t in e) {
        if (e.hasOwnProperty(t)) {
          return t;
        }
      }
      return null;
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    var r = n(1);
    function o(e) {
      var t = this;
      if (t.instancePool.length) {
        var n = t.instancePool.pop();
        t.call(n, e);
        return n;
      }
      return new t(e);
    }
    function a(e, t) {
      var n = this;
      if (n.instancePool.length) {
        var r = n.instancePool.pop();
        n.call(r, e, t);
        return r;
      }
      return new n(e, t);
    }
    function i(e, t, n) {
      var r = this;
      if (r.instancePool.length) {
        var o = r.instancePool.pop();
        r.call(o, e, t, n);
        return o;
      }
      return new r(e, t, n);
    }
    function s(e, t, n, r) {
      var o = this;
      if (o.instancePool.length) {
        var a = o.instancePool.pop();
        o.call(a, e, t, n, r);
        return a;
      }
      return new o(e, t, n, r);
    }
    function u(e, t, n, r, o) {
      var a = this;
      if (a.instancePool.length) {
        var i = a.instancePool.pop();
        a.call(i, e, t, n, r, o);
        return i;
      }
      return new a(e, t, n, r, o);
    }
    function l(e) {
      var t = this;
      if (e instanceof t) {
        undefined;
      } else {
        r(false);
      }
      e.destructor();
      if (t.instancePool.length < t.poolSize) {
        t.instancePool.push(e);
      }
    }
    var c = 10;
    var p = o;
    function d(e, t) {
      var n = e;
      n.instancePool = [];
      n.getPooled = t || p;
      n.poolSize ||= c;
      n.release = l;
      return n;
    }
    var f = {
      addPoolingTo: d,
      oneArgumentPooler: o,
      twoArgumentPooler: a,
      threeArgumentPooler: i,
      fourArgumentPooler: s,
      fiveArgumentPooler: u
    };
    e.exports = f;
  }, function (e, t, n) {
    "use strict";

    function r() {
      o.attachRefs(this, this._currentElement);
    }
    var o = n(245);
    var a = {
      mountComponent: function (e, t, n, o) {
        var a = e.mountComponent(t, n, o);
        if (e._currentElement && e._currentElement.ref != null) {
          n.getReactMountReady().enqueue(r, e);
        }
        return a;
      },
      unmountComponent: function (e) {
        o.detachRefs(e, e._currentElement);
        e.unmountComponent();
      },
      receiveComponent: function (e, t, n, a) {
        var i = e._currentElement;
        if (t !== i || a !== e._context) {
          var s = o.shouldUpdateRefs(i, t);
          if (s) {
            o.detachRefs(e, i);
          }
          e.receiveComponent(t, n, a);
          if (s && e._currentElement && e._currentElement.ref != null) {
            n.getReactMountReady().enqueue(r, e);
          }
        }
      },
      performUpdateIfNecessary: function (e, t) {
        e.performUpdateIfNecessary(t);
      }
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      this.dispatchConfig = e;
      this.dispatchMarker = t;
      this.nativeEvent = n;
      var o = this.constructor.Interface;
      for (var a in o) {
        if (o.hasOwnProperty(a)) {
          var s = o[a];
          if (s) {
            this[a] = s(n);
          } else if (a === "target") {
            this.target = r;
          } else {
            this[a] = n[a];
          }
        }
      }
      var u = n.defaultPrevented ?? n.returnValue === false;
      if (u) {
        this.isDefaultPrevented = i.thatReturnsTrue;
      } else {
        this.isDefaultPrevented = i.thatReturnsFalse;
      }
      this.isPropagationStopped = i.thatReturnsFalse;
    }
    var o = n(15);
    var a = n(3);
    var i = n(9);
    n(4);
    var s = {
      type: null,
      target: null,
      currentTarget: i.thatReturnsNull,
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    };
    a(r.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var e = this.nativeEvent;
        if (e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
          this.isDefaultPrevented = i.thatReturnsTrue;
        }
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        if (e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else {
            e.cancelBubble = true;
          }
          this.isPropagationStopped = i.thatReturnsTrue;
        }
      },
      persist: function () {
        this.isPersistent = i.thatReturnsTrue;
      },
      isPersistent: i.thatReturnsFalse,
      destructor: function () {
        var e = this.constructor.Interface;
        for (var t in e) {
          this[t] = null;
        }
        this.dispatchConfig = null;
        this.dispatchMarker = null;
        this.nativeEvent = null;
      }
    });
    r.Interface = s;
    r.augmentClass = function (e, t) {
      var n = this;
      var r = Object.create(n.prototype);
      a(r, e.prototype);
      e.prototype = r;
      e.prototype.constructor = e;
      e.Interface = a({}, n.Interface, t);
      e.augmentClass = n.augmentClass;
      o.addPoolingTo(e, o.fourArgumentPooler);
    };
    o.addPoolingTo(r, o.fourArgumentPooler);
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n() {
      var e = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
      return a + e;
    }
    function r() {
      f ||= new Promise(function (e) {
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.src = "https://js.stripe.com/v2/";
        t.onload = function () {
          Stripe.setPublishableKey(i);
          e();
        };
        document.head.appendChild(t);
      });
      return f;
    }
    function o() {
      h ||= new Promise(function (e) {
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.src = "https://www.paypalobjects.com/api/checkout.js";
        t.onload = function () {
          e();
        };
        document.head.appendChild(t);
      });
      return h;
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.getServerUrl = n;
    t.loadStripe = r;
    t.loadPaypal = o;
    var a = "https://server.tunetranscriber.com";
    var i = "pk_live_P2QoJLgz8pWaQ1CnlEBQKExF";
    t.stripePk = i;
    var s = "production";
    t.paypalEnvironment = s;
    var u = typeof window == "undefined";
    if (!u) {
      var l = window.location.hostname.indexOf(".local") >= 0 || document.cookie.includes("istranscribertest");
      if (l) {
        var c = window.location.hostname;
        var p = window.location.protocol;
        var d = window.location.port ? ":3000" : "";
        a = p + "//" + c + d;
        t.stripePk = i = "pk_test_BoP97ky2AGW9x3nUBf3J0jrt";
        t.paypalEnvironment = s = "sandbox";
      }
    }
    var f;
    var h;
    var m = {
      cents: 2500,
      hash: "5018592d5bd5b45e99938f6e3569ce54"
    };
    t.price = m;
  }, function (e, t, n) {
    e.exports = n(206);
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      return (e & t) === t;
    }
    var o = n(1);
    var a = {
      MUST_USE_ATTRIBUTE: 1,
      MUST_USE_PROPERTY: 2,
      HAS_SIDE_EFFECTS: 4,
      HAS_BOOLEAN_VALUE: 8,
      HAS_NUMERIC_VALUE: 16,
      HAS_POSITIVE_NUMERIC_VALUE: 48,
      HAS_OVERLOADED_BOOLEAN_VALUE: 64,
      injectDOMPropertyConfig: function (e) {
        var t = a;
        var n = e.Properties || {};
        var i = e.DOMAttributeNamespaces || {};
        var u = e.DOMAttributeNames || {};
        var l = e.DOMPropertyNames || {};
        var c = e.DOMMutationMethods || {};
        if (e.isCustomAttribute) {
          s._isCustomAttributeFunctions.push(e.isCustomAttribute);
        }
        for (var p in n) {
          if (s.properties.hasOwnProperty(p)) {
            o(false);
          } else {
            undefined;
          }
          var d = p.toLowerCase();
          var f = n[p];
          var h = {
            attributeName: d,
            attributeNamespace: null,
            propertyName: p,
            mutationMethod: null,
            mustUseAttribute: r(f, t.MUST_USE_ATTRIBUTE),
            mustUseProperty: r(f, t.MUST_USE_PROPERTY),
            hasSideEffects: r(f, t.HAS_SIDE_EFFECTS),
            hasBooleanValue: r(f, t.HAS_BOOLEAN_VALUE),
            hasNumericValue: r(f, t.HAS_NUMERIC_VALUE),
            hasPositiveNumericValue: r(f, t.HAS_POSITIVE_NUMERIC_VALUE),
            hasOverloadedBooleanValue: r(f, t.HAS_OVERLOADED_BOOLEAN_VALUE)
          };
          if (h.mustUseAttribute && h.mustUseProperty) {
            o(false);
          } else {
            undefined;
          }
          if (!h.mustUseProperty && h.hasSideEffects) {
            o(false);
          } else {
            undefined;
          }
          if (h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1) {
            undefined;
          } else {
            o(false);
          }
          if (u.hasOwnProperty(p)) {
            var m = u[p];
            h.attributeName = m;
          }
          if (i.hasOwnProperty(p)) {
            h.attributeNamespace = i[p];
          }
          if (l.hasOwnProperty(p)) {
            h.propertyName = l[p];
          }
          if (c.hasOwnProperty(p)) {
            h.mutationMethod = c[p];
          }
          s.properties[p] = h;
        }
      }
    };
    var i = {};
    var s = {
      ID_ATTRIBUTE_NAME: "data-reactid",
      properties: {},
      getPossibleStandardName: null,
      _isCustomAttributeFunctions: [],
      isCustomAttribute: function (e) {
        for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
          var n = s._isCustomAttributeFunctions[t];
          if (n(e)) {
            return true;
          }
        }
        return false;
      },
      getDefaultValueForProperty: function (e, t) {
        var n;
        var r = i[e];
        if (!r) {
          i[e] = r = {};
        }
        if (!(t in r)) {
          n = document.createElement(e);
          r[t] = n[t];
        }
        return r[t];
      },
      injection: a
    };
    e.exports = s;
  }, function (e, t, n) {
    "use strict";

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
    var p = n(104);
    var d = n(1);
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
    e.exports = v;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e) {
      if (!e || !e.ok) {
        return "Invalid username or password";
      }
    }
    function a(e, t, n) {
      n = n || (t ? "gold" : null);
      localStorage.setItem("token", t);
      localStorage.setItem("plan", n || "");
      return {
        type: "completeLogin",
        error: e,
        plan: n
      };
    }
    function i(e, t) {
      return function (n) {
        if (e && t) {
          n(O());
          return b.default.fetch("/login", {
            body: {
              username: e,
              password: t
            }
          }).then(function (e) {
            return n(a(o(e)));
          }).catch(function (e) {
            return n(a(o(e)));
          });
        } else {
          return n(a("Enter a username and password"));
        }
      };
    }
    function s() {
      return function (e) {
        return (0, _.default)().logout().then(function () {
          return e(P());
        });
      };
    }
    function u() {
      return {
        type: "gatherCredentials"
      };
    }
    function l() {
      return {
        type: "stopGatheringCredentials"
      };
    }
    function c(e) {
      return {
        type: "gatherRegistration",
        message: e
      };
    }
    function p() {
      return {
        type: "beginRegistration"
      };
    }
    function d() {
      var e = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var t = e.errors;
      if (typeof window != "undefined") {
        (0, _.default)().login(true);
      }
      return {
        type: "completeRegistration",
        errors: t
      };
    }
    function f(e) {
      var t = e.creditCard;
      var n = e.expires;
      var r = e.cvc;
      return new Promise(function (e, o) {
        Stripe.card.createToken({
          number: t,
          cvc: r,
          exp_month: n.split("/")[0],
          exp_year: n.split("/")[1]
        }, function (t, n) {
          if (n.error) {
            o(n.error.message);
          } else {
            e(n.id);
          }
        });
      });
    }
    function h(e) {
      return function (t) {
        var n = y(Object.assign({
          paypal: true
        }, e));
        if (n.length) {
          return t(d({
            errors: n
          }));
        } else {
          t(p());
          return paypal.rest.payment.create(e.env, e.client, {
            transactions: [{
              amount: {
                total: e.p / 100 + ".00",
                currency: "USD"
              }
            }]
          });
        }
      };
    }
    function m(e) {
      return function (t) {
        return e.actions.payment.execute().then(function () {
          return b.default.fetch("/paypal/register", {
            body: {
              email: e.email,
              password: e.password
            }
          }).then(function (e) {
            if (e.ok) {
              t(d());
              t(a());
              return;
            } else {
              return e.text().then(function (e) {
                return t(d({
                  errors: [e]
                }));
              });
            }
          }).catch(function (e) {
            t(d({
              errors: ["An error occurred signing up"]
            }));
          });
        });
      };
    }
    function v(e) {
      return function (t) {
        var n = y(e);
        if (n.length) {
          return t(d({
            errors: n
          }));
        } else {
          t(p());
          (0, w.loadStripe)().then(function () {
            return f(e);
          }).then(function (n) {
            b.default.fetch("/register", {
              body: {
                email: e.email,
                password: e.password,
                p: e.p,
                h: e.h,
                token: n
              }
            }).then(function (e) {
              if (e.ok) {
                return e.json().then(function (e) {
                  var n = e.token;
                  t(d());
                  t(a(null, n));
                });
              } else {
                return e.text().then(function (e) {
                  return t(d({
                    errors: [e]
                  }));
                });
              }
            }).catch(function (e) {
              t(d({
                errors: ["An error occurred signing up"]
              }));
            });
          }).catch(function (e) {
            t(d({
              errors: [e]
            }));
          });
          return;
        }
      };
    }
    function y(e) {
      var t = e.email;
      var n = e.password;
      var r = e.creditCard;
      var o = e.expires;
      var a = e.cvc;
      var i = e.paypal;
      var s = [];
      var u = s.push.bind(s);
      if (!t || t.indexOf("@") < 0) {
        u("Enter your email");
      }
      if (!n || n.length < 8) {
        u("Enter a password of at least 8 characters");
      }
      if (!i) {
        if (!r || !r.length) {
          u("Enter a credit card number");
        }
        if (!o) {
          u("Enter the expiration date");
        }
        if (o && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(o)) {
          u("Expiration date should be in the format of MM/YY");
        }
        if (!a) {
          u("Enter the security code");
        }
      }
      return s;
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.completeLogin = a;
    t.login = i;
    t.logout = s;
    t.gatherCredentials = u;
    t.stopGatheringCredentials = l;
    t.gatherRegistration = c;
    t.beginRegistration = p;
    t.completeRegistration = d;
    t.registerPaypal = h;
    t.finishRegisterPaypal = m;
    t.register = v;
    var g = n(157);
    var b = r(g);
    var E = n(6);
    var w = n(18);
    var C = n(30);
    var _ = r(C);
    var O = (0, E.makeAction)("beginLogin");
    t.beginLogin = O;
    var P = (0, E.makeAction)("completeLogout");
    t.completeLogout = P;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      return function (n = e, r) {
        return (t[r.type] || function (e) {
          return e;
        })(n, r) || n;
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.default = n;
    n.copyState = function (e, t) {
      return Object.assign({}, e, t);
    };
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    var r = {};
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(84);
    var o = n(223);
    var a = n(97);
    var i = n(106);
    var s = n(108);
    var u = n(1);
    n(4);
    var l = {};
    var c = null;
    function p(e, t) {
      if (e) {
        o.executeDispatchesInOrder(e, t);
        if (!e.isPersistent()) {
          e.constructor.release(e);
        }
      }
    }
    function d(e) {
      return p(e, true);
    }
    function f(e) {
      return p(e, false);
    }
    var h = null;
    var m = {
      injection: {
        injectMount: o.injection.injectMount,
        injectInstanceHandle: function (e) {
          h = e;
        },
        getInstanceHandle: function () {
          return h;
        },
        injectEventPluginOrder: r.injectEventPluginOrder,
        injectEventPluginsByName: r.injectEventPluginsByName
      },
      eventNameDispatchConfigs: r.eventNameDispatchConfigs,
      registrationNameModules: r.registrationNameModules,
      putListener: function (e, t, n) {
        if (typeof n != "function") {
          u(false);
        } else {
          undefined;
        }
        var o = l[t] ||= {};
        o[e] = n;
        var a = r.registrationNameModules[t];
        if (a && a.didPutListener) {
          a.didPutListener(e, t, n);
        }
      },
      getListener: function (e, t) {
        var n = l[t];
        return n && n[e];
      },
      deleteListener: function (e, t) {
        var n = r.registrationNameModules[t];
        if (n && n.willDeleteListener) {
          n.willDeleteListener(e, t);
        }
        var o = l[t];
        if (o) {
          delete o[e];
        }
      },
      deleteAllListeners: function (e) {
        for (var t in l) {
          if (l[t][e]) {
            var n = r.registrationNameModules[t];
            if (n && n.willDeleteListener) {
              n.willDeleteListener(e, t);
            }
            delete l[t][e];
          }
        }
      },
      extractEvents: function (e, t, n, o, a) {
        var s;
        for (var u = r.plugins, l = 0; l < u.length; l++) {
          var c = u[l];
          if (c) {
            var p = c.extractEvents(e, t, n, o, a);
            if (p) {
              s = i(s, p);
            }
          }
        }
        return s;
      },
      enqueueEvents: function (e) {
        if (e) {
          c = i(c, e);
        }
      },
      processEventQueue: function (e) {
        var t = c;
        c = null;
        if (e) {
          s(t, d);
        } else {
          s(t, f);
        }
        if (c) {
          u(false);
        } else {
          undefined;
        }
        a.rethrowCaughtError();
      },
      __purge: function () {
        l = {};
      },
      __getListenerBank: function () {
        return l;
      }
    };
    e.exports = m;
  }, function (e, t, n) {
    "use strict";

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
    var f = n(12);
    var h = n(25);
    n(4);
    var m = n(106);
    var v = n(108);
    var y = f.PropagationPhases;
    var g = h.getListener;
    var b = {
      accumulateTwoPhaseDispatches: l,
      accumulateTwoPhaseDispatchesSkipTarget: c,
      accumulateDirectDispatches: d,
      accumulateEnterLeaveDispatches: p
    };
    e.exports = b;
  }, function (e, t) {
    "use strict";

    var n = {
      remove: function (e) {
        e._reactInternalInstance = undefined;
      },
      get: function (e) {
        return e._reactInternalInstance;
      },
      has: function (e) {
        return e._reactInternalInstance !== undefined;
      },
      set: function (e, t) {
        e._reactInternalInstance = t;
      }
    };
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(17);
    var a = n(57);
    var i = {
      view: function (e) {
        if (e.view) {
          return e.view;
        }
        var t = a(e);
        if (t != null && t.window === t) {
          return t;
        }
        var n = t.ownerDocument;
        if (n) {
          return n.defaultView || n.parentWindow;
        } else {
          return window;
        }
      },
      detail: function (e) {
        return e.detail || 0;
      }
    };
    o.augmentClass(r, i);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    t.__esModule = true;
    t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = undefined;
    var o = n(113);
    var a = r(o);
    var i = n(274);
    var s = r(i);
    var u = n(273);
    var l = r(u);
    var c = n(272);
    var p = r(c);
    var d = n(112);
    var f = r(d);
    var h = n(114);
    r(h);
    t.createStore = a.default;
    t.combineReducers = s.default;
    t.bindActionCreators = l.default;
    t.applyMiddleware = p.default;
    t.compose = f.default;
  }, function (e, t, n) {
    (function (r) {
      "use strict";

      function o() {
        function e(e) {
          return fetch((0, a.getServerUrl)("/auth/callback/"), {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
              code: e,
              redirectUri: l
            })
          }).then(function (e) {
            return e.json();
          }).then(function (e) {
            console.log("data", e);
            history.pushState("", "", i ? i.location.pathname : null);
            localStorage.setItem("tok", e.token);
            return {
              plan: "gold",
              token: e.token
            };
          });
        }
        return {
          getAuthStatus: function () {
            if (i) {
              var t = new URLSearchParams(i.location.search);
              var n = t.get("code");
              if (n) {
                return e(n);
              } else if (this.getToken()) {
                return Promise.resolve(this.getToken());
              } else {
                return promise.resolve({
                  plan: null
                });
              }
            }
          },
          login: function (e) {
            var t = "https://data.tunetranscriber.com";
            var n = "https://" + s + "/authorize?response_type=code&client_id=" + u + "&redirect_uri=" + l + "&scope=openid%20profile&audience=" + t;
            if (i && e) {
              window.location = n;
            } else {
              r.open(n);
            }
          },
          getToken: function () {
            var e = localStorage.getItem("tok");
            if (e) {
              return {
                token: e,
                plan: "gold"
              };
            } else {
              return {
                token: null,
                plan: null
              };
            }
          },
          logout: function () {
            localStorage.removeItem("tok");
            return Promise.resolve();
          }
        };
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = o;
      var a = n(18);
      var i = typeof window == "undefined" ? null : window;
      var s = "tunetranscriber.auth0.com";
      var u = "2nXDRzErTKkmyUcbXrU6LaKBQaKKIjDF";
      var l = i ? i.location.protocol + "//" + i.location.host + i.location.pathname : "";
      e.exports = t.default;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(19);
    var p = r(c);
    var d = function (e) {
      function t() {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      a(t, e);
      i(t, [{
        key: "queueSelect",
        value: function () {
          var e = this;
          setTimeout(function () {
            e.props.focusElement().select();
            e.props.focusElement().focus();
          }, 1);
        }
      }, {
        key: "componentDidMount",
        value: function () {
          if (this.props.focusElement && this.props.isOpen) {
            this.queueSelect();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function (e) {
          if (this.props.focusElement && this.props.isOpen && !e.isOpen) {
            this.queueSelect();
          }
        }
      }, {
        key: "onSubmit",
        value: function (e) {
          e.preventDefault();
          this.props.onSubmit(e);
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = l.default.createElement("button", {
            type: "button",
            className: "close",
            onClick: function () {
              return e.props.onClose();
            }
          }, l.default.createElement("span", {
            "aria-hidden": "true"
          }, String.fromCharCode(215)), l.default.createElement("span", {
            className: "sr-only"
          }, "Close"));
          if (this.props.hasCloseX === false) {
            t = null;
          }
          return l.default.createElement(p.default, {
            isOpen: this.props.isOpen,
            onRequestClose: function () {
              return e.props.onClose();
            },
            className: "Modal__Bootstrap modal-dialog modal-sm",
            style: this.props.style
          }, l.default.createElement("div", {
            className: "modal-content"
          }, l.default.createElement("div", {
            className: "modal-header"
          }, t, this.props.header), l.default.createElement("form", {
            onSubmit: function (t) {
              return e.onSubmit(t);
            }
          }, l.default.createElement("div", {
            className: "modal-body"
          }, this.props.children), this.props.footer ? l.default.createElement("div", {
            className: "modal-footer"
          }, this.props.footer) : null)));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = d;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    var r = n(1);
    function o(e) {
      var t;
      var n = {};
      if (e instanceof Object && !Array.isArray(e)) {
        undefined;
      } else {
        r(false);
      }
      for (t in e) {
        if (e.hasOwnProperty(t)) {
          n[t] = t;
        }
      }
      return n;
    }
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    e.exports = n(50);
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    t.__esModule = true;
    t.connect = t.Provider = undefined;
    var o = n(211);
    var a = r(o);
    var i = n(212);
    var s = r(i);
    t.Provider = a.default;
    t.connect = s.default;
  }, function (e, t, n) {
    "use strict";

    var r = n(50);
    var o = n(90);
    var a = n(241);
    var i = n(3);
    var s = n(266);
    var u = {};
    i(u, a);
    i(u, {
      findDOMNode: s("findDOMNode", "ReactDOM", "react-dom", r, r.findDOMNode),
      render: s("render", "ReactDOM", "react-dom", r, r.render),
      unmountComponentAtNode: s("unmountComponentAtNode", "ReactDOM", "react-dom", r, r.unmountComponentAtNode),
      renderToString: s("renderToString", "ReactDOMServer", "react-dom/server", o, o.renderToString),
      renderToStaticMarkup: s("renderToStaticMarkup", "ReactDOMServer", "react-dom/server", o, o.renderToStaticMarkup)
    });
    u.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r;
    u.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o;
    e.exports = u;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (!Object.prototype.hasOwnProperty.call(e, v)) {
        e[v] = h++;
        d[e[v]] = {};
      }
      return d[e[v]];
    }
    var o = n(12);
    var a = n(25);
    var i = n(84);
    var s = n(238);
    var u = n(10);
    var l = n(105);
    var c = n(3);
    var p = n(60);
    var d = {};
    var f = false;
    var h = 0;
    var m = {
      topAbort: "abort",
      topBlur: "blur",
      topCanPlay: "canplay",
      topCanPlayThrough: "canplaythrough",
      topChange: "change",
      topClick: "click",
      topCompositionEnd: "compositionend",
      topCompositionStart: "compositionstart",
      topCompositionUpdate: "compositionupdate",
      topContextMenu: "contextmenu",
      topCopy: "copy",
      topCut: "cut",
      topDoubleClick: "dblclick",
      topDrag: "drag",
      topDragEnd: "dragend",
      topDragEnter: "dragenter",
      topDragExit: "dragexit",
      topDragLeave: "dragleave",
      topDragOver: "dragover",
      topDragStart: "dragstart",
      topDrop: "drop",
      topDurationChange: "durationchange",
      topEmptied: "emptied",
      topEncrypted: "encrypted",
      topEnded: "ended",
      topError: "error",
      topFocus: "focus",
      topInput: "input",
      topKeyDown: "keydown",
      topKeyPress: "keypress",
      topKeyUp: "keyup",
      topLoadedData: "loadeddata",
      topLoadedMetadata: "loadedmetadata",
      topLoadStart: "loadstart",
      topMouseDown: "mousedown",
      topMouseMove: "mousemove",
      topMouseOut: "mouseout",
      topMouseOver: "mouseover",
      topMouseUp: "mouseup",
      topPaste: "paste",
      topPause: "pause",
      topPlay: "play",
      topPlaying: "playing",
      topProgress: "progress",
      topRateChange: "ratechange",
      topScroll: "scroll",
      topSeeked: "seeked",
      topSeeking: "seeking",
      topSelectionChange: "selectionchange",
      topStalled: "stalled",
      topSuspend: "suspend",
      topTextInput: "textInput",
      topTimeUpdate: "timeupdate",
      topTouchCancel: "touchcancel",
      topTouchEnd: "touchend",
      topTouchMove: "touchmove",
      topTouchStart: "touchstart",
      topVolumeChange: "volumechange",
      topWaiting: "waiting",
      topWheel: "wheel"
    };
    var v = "_reactListenersID" + String(Math.random()).slice(2);
    var y = c({}, s, {
      ReactEventListener: null,
      injection: {
        injectReactEventListener: function (e) {
          e.setHandleTopLevel(y.handleTopLevel);
          y.ReactEventListener = e;
        }
      },
      setEnabled: function (e) {
        if (y.ReactEventListener) {
          y.ReactEventListener.setEnabled(e);
        }
      },
      isEnabled: function () {
        return !!y.ReactEventListener && !!y.ReactEventListener.isEnabled();
      },
      listenTo: function (e, t) {
        var n = t;
        var a = r(n);
        for (var s = i.registrationNameDependencies[e], u = o.topLevelTypes, l = 0; l < s.length; l++) {
          var c = s[l];
          if (!a.hasOwnProperty(c) || !a[c]) {
            if (c === u.topWheel) {
              if (p("wheel")) {
                y.ReactEventListener.trapBubbledEvent(u.topWheel, "wheel", n);
              } else if (p("mousewheel")) {
                y.ReactEventListener.trapBubbledEvent(u.topWheel, "mousewheel", n);
              } else {
                y.ReactEventListener.trapBubbledEvent(u.topWheel, "DOMMouseScroll", n);
              }
            } else if (c === u.topScroll) {
              if (p("scroll", true)) {
                y.ReactEventListener.trapCapturedEvent(u.topScroll, "scroll", n);
              } else {
                y.ReactEventListener.trapBubbledEvent(u.topScroll, "scroll", y.ReactEventListener.WINDOW_HANDLE);
              }
            } else if (c === u.topFocus || c === u.topBlur) {
              if (p("focus", true)) {
                y.ReactEventListener.trapCapturedEvent(u.topFocus, "focus", n);
                y.ReactEventListener.trapCapturedEvent(u.topBlur, "blur", n);
              } else if (p("focusin")) {
                y.ReactEventListener.trapBubbledEvent(u.topFocus, "focusin", n);
                y.ReactEventListener.trapBubbledEvent(u.topBlur, "focusout", n);
              }
              a[u.topBlur] = true;
              a[u.topFocus] = true;
            } else if (m.hasOwnProperty(c)) {
              y.ReactEventListener.trapBubbledEvent(c, m[c], n);
            }
            a[c] = true;
          }
        }
      },
      trapBubbledEvent: function (e, t, n) {
        return y.ReactEventListener.trapBubbledEvent(e, t, n);
      },
      trapCapturedEvent: function (e, t, n) {
        return y.ReactEventListener.trapCapturedEvent(e, t, n);
      },
      ensureScrollValueMonitoring: function () {
        if (!f) {
          var e = l.refreshScrollValues;
          y.ReactEventListener.monitorScrollValue(e);
          f = true;
        }
      },
      eventNameDispatchConfigs: a.eventNameDispatchConfigs,
      registrationNameModules: a.registrationNameModules,
      putListener: a.putListener,
      getListener: a.getListener,
      deleteListener: a.deleteListener,
      deleteAllListeners: a.deleteAllListeners
    });
    u.measureMethods(y, "ReactBrowserEventEmitter", {
      putListener: "putListener",
      deleteListener: "deleteListener"
    });
    e.exports = y;
  }, function (e, t, n) {
    "use strict";

    var r = {};
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(32);
    var o = r({
      prop: null,
      context: null,
      childContext: null
    });
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(28);
    var a = n(105);
    var i = n(56);
    var s = {
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: i,
      button: function (e) {
        var t = e.button;
        if ("which" in e) {
          return t;
        } else if (t === 2) {
          return 2;
        } else if (t === 4) {
          return 1;
        } else {
          return 0;
        }
      },
      buttons: null,
      relatedTarget: function (e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
      },
      pageX: function (e) {
        if ("pageX" in e) {
          return e.pageX;
        } else {
          return e.clientX + a.currentScrollLeft;
        }
      },
      pageY: function (e) {
        if ("pageY" in e) {
          return e.pageY;
        } else {
          return e.clientY + a.currentScrollTop;
        }
      }
    };
    o.augmentClass(r, s);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(1);
    var o = {
      reinitializeTransaction: function () {
        this.transactionWrappers = this.getTransactionWrappers();
        if (this.wrapperInitData) {
          this.wrapperInitData.length = 0;
        } else {
          this.wrapperInitData = [];
        }
        this._isInTransaction = false;
      },
      _isInTransaction: false,
      getTransactionWrappers: null,
      isInTransaction: function () {
        return !!this._isInTransaction;
      },
      perform: function (e, t, n, o, a, i, s, u) {
        if (this.isInTransaction()) {
          r(false);
        } else {
          undefined;
        }
        var l;
        var c;
        try {
          this._isInTransaction = true;
          l = true;
          this.initializeAll(0);
          c = e.call(t, n, o, a, i, s, u);
          l = false;
        } finally {
          try {
            if (l) {
              try {
                this.closeAll(0);
              } catch (e) {}
            } else {
              this.closeAll(0);
            }
          } finally {
            this._isInTransaction = false;
          }
        }
        return c;
      },
      initializeAll: function (e) {
        for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
          var r = t[n];
          try {
            this.wrapperInitData[n] = a.OBSERVED_ERROR;
            this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null;
          } finally {
            if (this.wrapperInitData[n] === a.OBSERVED_ERROR) {
              try {
                this.initializeAll(n + 1);
              } catch (e) {}
            }
          }
        }
      },
      closeAll: function (e) {
        if (this.isInTransaction()) {
          undefined;
        } else {
          r(false);
        }
        for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
          var o;
          var i = t[n];
          var s = this.wrapperInitData[n];
          try {
            o = true;
            if (s !== a.OBSERVED_ERROR && i.close) {
              i.close.call(this, s);
            }
            o = false;
          } finally {
            if (o) {
              try {
                this.closeAll(n + 1);
              } catch (e) {}
            }
          }
        }
        this.wrapperInitData.length = 0;
      }
    };
    var a = {
      Mixin: o,
      OBSERVED_ERROR: {}
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    var r = false;
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      return o[e];
    }
    function r(e) {
      return ("" + e).replace(a, n);
    }
    var o = {
      "&": "&amp;",
      ">": "&gt;",
      "<": "&lt;",
      "\"": "&quot;",
      "'": "&#x27;"
    };
    var a = /[&><"']/g;
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(5);
    var o = /^[ \r\n\t\f]/;
    var a = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
    function i(e, t) {
      e.innerHTML = t;
    }
    if (typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction) {
      i = function (e, t) {
        MSApp.execUnsafeLocalFunction(function () {
          e.innerHTML = t;
        });
      };
    }
    if (r.canUseDOM) {
      var s = document.createElement("div");
      s.innerHTML = " ";
      if (s.innerHTML === "") {
        i = function (e, t) {
          if (e.parentNode) {
            e.parentNode.replaceChild(e, e);
          }
          if (o.test(t) || t[0] === "<" && a.test(t)) {
            e.innerHTML = String.fromCharCode(65279) + t;
            var n = e.firstChild;
            if (n.data.length === 1) {
              e.removeChild(n);
            } else {
              n.deleteData(0, 1);
            }
          } else {
            e.innerHTML = t;
          }
        };
      }
    }
    e.exports = i;
  }, function (e, t, n) {
    function r(e) {
      if (!i(e) || o(e) != s) {
        return false;
      }
      var t = a(e);
      if (t === null) {
        return true;
      }
      var n = p.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && c.call(n) == d;
    }
    var o = n(193);
    var a = n(195);
    var i = n(200);
    var s = "[object Object]";
    var u = Function.prototype;
    var l = Object.prototype;
    var c = u.toString;
    var p = l.hasOwnProperty;
    var d = c.call(Object);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r() {
      this._callbacks = null;
      this._contexts = null;
    }
    var o = n(15);
    var a = n(3);
    var i = n(1);
    a(r.prototype, {
      enqueue: function (e, t) {
        this._callbacks = this._callbacks || [];
        this._contexts = this._contexts || [];
        this._callbacks.push(e);
        this._contexts.push(t);
      },
      notifyAll: function () {
        var e = this._callbacks;
        var t = this._contexts;
        if (e) {
          if (e.length !== t.length) {
            i(false);
          } else {
            undefined;
          }
          this._callbacks = null;
          this._contexts = null;
          for (var n = 0; n < e.length; n++) {
            e[n].call(t[n]);
          }
          e.length = 0;
          t.length = 0;
        }
      },
      reset: function () {
        this._callbacks = null;
        this._contexts = null;
      },
      destructor: function () {
        this.reset();
      }
    });
    o.addPoolingTo(r);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return !!c.hasOwnProperty(e) || !l.hasOwnProperty(e) && (u.test(e) ? (c[e] = true, true) : (l[e] = true, false));
    }
    function o(e, t) {
      return t == null || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && t === false;
    }
    var a = n(20);
    var i = n(10);
    var s = n(269);
    n(4);
    var u = /^[a-zA-Z_][\w\.\-]*$/;
    var l = {};
    var c = {};
    var p = {
      createMarkupForID: function (e) {
        return a.ID_ATTRIBUTE_NAME + "=" + s(e);
      },
      setAttributeForID: function (e, t) {
        e.setAttribute(a.ID_ATTRIBUTE_NAME, t);
      },
      createMarkupForProperty: function (e, t) {
        var n = a.properties.hasOwnProperty(e) ? a.properties[e] : null;
        if (n) {
          if (o(n, t)) {
            return "";
          }
          var r = n.attributeName;
          if (n.hasBooleanValue || n.hasOverloadedBooleanValue && t === true) {
            return r + "=\"\"";
          } else {
            return r + "=" + s(t);
          }
        }
        if (a.isCustomAttribute(e)) {
          if (t == null) {
            return "";
          } else {
            return e + "=" + s(t);
          }
        } else {
          return null;
        }
      },
      createMarkupForCustomAttribute: function (e, t) {
        if (r(e) && t != null) {
          return e + "=" + s(t);
        } else {
          return "";
        }
      },
      setValueForProperty: function (e, t, n) {
        var r = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
        if (r) {
          var i = r.mutationMethod;
          if (i) {
            i(e, n);
          } else if (o(r, n)) {
            this.deleteValueForProperty(e, t);
          } else if (r.mustUseAttribute) {
            var s = r.attributeName;
            var u = r.attributeNamespace;
            if (u) {
              e.setAttributeNS(u, s, "" + n);
            } else if (r.hasBooleanValue || r.hasOverloadedBooleanValue && n === true) {
              e.setAttribute(s, "");
            } else {
              e.setAttribute(s, "" + n);
            }
          } else {
            var l = r.propertyName;
            if (!r.hasSideEffects || "" + e[l] != "" + n) {
              e[l] = n;
            }
          }
        } else if (a.isCustomAttribute(t)) {
          p.setValueForAttribute(e, t, n);
        }
      },
      setValueForAttribute: function (e, t, n) {
        if (r(t)) {
          if (n == null) {
            e.removeAttribute(t);
          } else {
            e.setAttribute(t, "" + n);
          }
        }
      },
      deleteValueForProperty: function (e, t) {
        var n = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
        if (n) {
          var r = n.mutationMethod;
          if (r) {
            r(e, undefined);
          } else if (n.mustUseAttribute) {
            e.removeAttribute(n.attributeName);
          } else {
            var o = n.propertyName;
            var i = a.getDefaultValueForProperty(e.nodeName, o);
            if (!n.hasSideEffects || "" + e[o] !== i) {
              e[o] = i;
            }
          }
        } else if (a.isCustomAttribute(t)) {
          e.removeAttribute(t);
        }
      }
    };
    i.measureMethods(p, "DOMPropertyOperations", {
      setValueForProperty: "setValueForProperty",
      setValueForAttribute: "setValueForAttribute",
      deleteValueForProperty: "deleteValueForProperty"
    });
    e.exports = p;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e.checkedLink != null && e.valueLink != null) {
        l(false);
      } else {
        undefined;
      }
    }
    function o(e) {
      r(e);
      if (e.value != null || e.onChange != null) {
        l(false);
      } else {
        undefined;
      }
    }
    function a(e) {
      r(e);
      if (e.checked != null || e.onChange != null) {
        l(false);
      } else {
        undefined;
      }
    }
    function i(e) {
      if (e) {
        var t = e.getName();
        if (t) {
          return " Check the render method of `" + t + "`.";
        }
      }
      return "";
    }
    var s = n(103);
    var u = n(38);
    var l = n(1);
    n(4);
    var c = {
      button: true,
      checkbox: true,
      image: true,
      hidden: true,
      radio: true,
      reset: true,
      submit: true
    };
    var p = {
      value: function (e, t, n) {
        if (!e[t] || c[e.type] || e.onChange || e.readOnly || e.disabled) {
          return null;
        } else {
          return new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
        }
      },
      checked: function (e, t, n) {
        if (!e[t] || e.onChange || e.readOnly || e.disabled) {
          return null;
        } else {
          return new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
        }
      },
      onChange: s.func
    };
    var d = {};
    var f = {
      checkPropTypes: function (e, t, n) {
        for (var r in p) {
          if (p.hasOwnProperty(r)) {
            var o = p[r](t, r, e, u.prop, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          }
          if (o instanceof Error && !(o.message in d)) {
            d[o.message] = true;
            i(n);
          }
        }
      },
      getValue: function (e) {
        if (e.valueLink) {
          o(e);
          return e.valueLink.value;
        } else {
          return e.value;
        }
      },
      getChecked: function (e) {
        if (e.checkedLink) {
          a(e);
          return e.checkedLink.value;
        } else {
          return e.checked;
        }
      },
      executeOnChange: function (e, t) {
        if (e.valueLink) {
          o(e);
          return e.valueLink.requestChange(t.target.value);
        } else if (e.checkedLink) {
          a(e);
          return e.checkedLink.requestChange(t.target.checked);
        } else if (e.onChange) {
          return e.onChange.call(undefined, t);
        } else {
          return undefined;
        }
      }
    };
    e.exports = f;
  }, function (e, t, n) {
    "use strict";

    var r = n(51);
    var o = n(7);
    var a = {
      processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
      replaceNodeWithMarkupByID: r.dangerouslyReplaceNodeWithMarkupByID,
      unmountIDFromEnvironment: function (e) {
        o.purgeID(e);
      }
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    var r = n(1);
    var o = false;
    var a = {
      unmountIDFromEnvironment: null,
      replaceNodeWithMarkupByID: null,
      processChildrenUpdates: null,
      injection: {
        injectEnvironment: function (e) {
          if (o) {
            r(false);
          } else {
            undefined;
          }
          a.unmountIDFromEnvironment = e.unmountIDFromEnvironment;
          a.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID;
          a.processChildrenUpdates = e.processChildrenUpdates;
          o = true;
        }
      }
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    var r = n(13);
    var o = n(91);
    var a = n(93);
    var i = n(21);
    var s = n(7);
    var u = n(10);
    var l = n(16);
    var c = n(11);
    var p = n(53);
    var d = n(54);
    var f = n(270);
    n(4);
    a.inject();
    var h = u.measure("React", "render", s.render);
    var m = {
      findDOMNode: d,
      render: h,
      unmountComponentAtNode: s.unmountComponentAtNode,
      version: p,
      unstable_batchedUpdates: c.batchedUpdates,
      unstable_renderSubtreeIntoContainer: f
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject == "function") {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        CurrentOwner: r,
        InstanceHandles: i,
        Mount: s,
        Reconciler: l,
        TextComponent: o
      });
    }
    e.exports = m;
  }, function (e, t, n) {
    "use strict";

    var r = n(83);
    var o = n(46);
    var a = n(7);
    var i = n(10);
    var s = n(1);
    var u = {
      dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
      style: "`style` must be set using `updateStylesByID()`."
    };
    var l = {
      updatePropertyByID: function (e, t, n) {
        var r = a.getNode(e);
        if (u.hasOwnProperty(t)) {
          s(false);
        } else {
          undefined;
        }
        if (n != null) {
          o.setValueForProperty(r, t, n);
        } else {
          o.deleteValueForProperty(r, t);
        }
      },
      dangerouslyReplaceNodeWithMarkupByID: function (e, t) {
        var n = a.getNode(e);
        r.dangerouslyReplaceNodeWithMarkup(n, t);
      },
      dangerouslyProcessChildrenUpdates: function (e, t) {
        for (var n = 0; n < e.length; n++) {
          e[n].parentNode = a.getNode(e[n].parentID);
        }
        r.processUpdates(e, t);
      }
    };
    i.measureMethods(l, "ReactDOMIDOperations", {
      dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID",
      dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates"
    });
    e.exports = l;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      s.enqueueUpdate(e);
    }
    function o(e, t) {
      var n = i.get(e);
      if (n) {
        return n;
      } else {
        return null;
      }
    }
    n(13);
    var a = n(8);
    var i = n(27);
    var s = n(11);
    var u = n(3);
    var l = n(1);
    n(4);
    var c = {
      isMounted: function (e) {
        var t = i.get(e);
        return !!t && !!t._renderedComponent;
      },
      enqueueCallback: function (e, t) {
        if (typeof t != "function") {
          l(false);
        } else {
          undefined;
        }
        var n = o(e);
        if (n) {
          if (n._pendingCallbacks) {
            n._pendingCallbacks.push(t);
          } else {
            n._pendingCallbacks = [t];
          }
          r(n);
          return;
        } else {
          return null;
        }
      },
      enqueueCallbackInternal: function (e, t) {
        if (typeof t != "function") {
          l(false);
        } else {
          undefined;
        }
        if (e._pendingCallbacks) {
          e._pendingCallbacks.push(t);
        } else {
          e._pendingCallbacks = [t];
        }
        r(e);
      },
      enqueueForceUpdate: function (e) {
        var t = o(e, "forceUpdate");
        if (t) {
          t._pendingForceUpdate = true;
          r(t);
        }
      },
      enqueueReplaceState: function (e, t) {
        var n = o(e, "replaceState");
        if (n) {
          n._pendingStateQueue = [t];
          n._pendingReplaceState = true;
          r(n);
        }
      },
      enqueueSetState: function (e, t) {
        var n = o(e, "setState");
        if (n) {
          var a = n._pendingStateQueue ||= [];
          a.push(t);
          r(n);
        }
      },
      enqueueSetProps: function (e, t) {
        var n = o(e, "setProps");
        if (n) {
          c.enqueueSetPropsInternal(n, t);
        }
      },
      enqueueSetPropsInternal: function (e, t) {
        var n = e._topLevelWrapper;
        if (n) {
          undefined;
        } else {
          l(false);
        }
        var o = n._pendingElement || n._currentElement;
        var i = o.props;
        var s = u({}, i.props, t);
        n._pendingElement = a.cloneAndReplaceProps(o, a.cloneAndReplaceProps(i, s));
        r(n);
      },
      enqueueReplaceProps: function (e, t) {
        var n = o(e, "replaceProps");
        if (n) {
          c.enqueueReplacePropsInternal(n, t);
        }
      },
      enqueueReplacePropsInternal: function (e, t) {
        var n = e._topLevelWrapper;
        if (n) {
          undefined;
        } else {
          l(false);
        }
        var o = n._pendingElement || n._currentElement;
        var i = o.props;
        n._pendingElement = a.cloneAndReplaceProps(o, a.cloneAndReplaceProps(i, t));
        r(n);
      },
      enqueueElementInternal: function (e, t) {
        e._pendingElement = t;
        r(e);
      }
    };
    e.exports = c;
  }, function (e, t) {
    "use strict";

    e.exports = "0.14.9";
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e == null) {
        return null;
      } else if (e.nodeType === 1) {
        return e;
      } else if (o.has(e)) {
        return a.getNodeFromInstance(e);
      } else {
        if (e.render != null && typeof e.render == "function") {
          i(false);
        } else {
          undefined;
        }
        i(false);
        return;
      }
    }
    n(13);
    var o = n(27);
    var a = n(7);
    var i = n(1);
    n(4);
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t;
      var n = e.keyCode;
      if ("charCode" in e) {
        t = e.charCode;
        if (t === 0 && n === 13) {
          t = 13;
        }
      } else {
        t = n;
      }
      if (t >= 32 || t === 13) {
        return t;
      } else {
        return 0;
      }
    }
    e.exports = n;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = this;
      var n = t.nativeEvent;
      if (n.getModifierState) {
        return n.getModifierState(e);
      }
      var r = o[e];
      return !!r && !!n[r];
    }
    function r(e) {
      return n;
    }
    var o = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = e.target || e.srcElement || window;
      if (t.nodeType === 3) {
        return t.parentNode;
      } else {
        return t;
      }
    }
    e.exports = n;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = e && (r && e[r] || e[o]);
      if (typeof t == "function") {
        return t;
      }
    }
    var r = typeof Symbol == "function" && Symbol.iterator;
    var o = "@@iterator";
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return typeof e == "function" && typeof e.prototype != "undefined" && typeof e.prototype.mountComponent == "function" && typeof e.prototype.receiveComponent == "function";
    }
    function o(e) {
      var t;
      if (e === null || e === false) {
        t = new i(o);
      } else if (typeof e == "object") {
        var n = e;
        if (!n || typeof n.type != "function" && typeof n.type != "string") {
          l(false);
        } else {
          undefined;
        }
        t = typeof n.type == "string" ? s.createInternalComponent(n) : r(n.type) ? new n.type(n) : new c();
      } else if (typeof e == "string" || typeof e == "number") {
        t = s.createInstanceForText(e);
      } else {
        l(false);
      }
      t.construct(e);
      t._mountIndex = 0;
      t._mountImage = null;
      return t;
    }
    var a = n(230);
    var i = n(95);
    var s = n(101);
    var u = n(3);
    var l = n(1);
    n(4);
    function c() {}
    u(c.prototype, a.Mixin, {
      _instantiateReactComponent: o
    });
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    /**
    * Checks if an event is supported in the current execution environment.
    *
    * NOTE: This will not work correctly for non-generic events such as `change`,
    * `reset`, `load`, `error`, and `select`.
    *
    * Borrows from Modernizr.
    *
    * @param {string} eventNameSuffix Event name, e.g. "click".
    * @param {?boolean} capture Check if the capture phase is supported.
    * @return {boolean} True if the event is supported.
    * @internal
    * @license Modernizr 3.0.0pre (Custom Build) | MIT
    */
    function r(e, t) {
      if (!a.canUseDOM || t && !("addEventListener" in document)) {
        return false;
      }
      var n = "on" + e;
      var r = n in document;
      if (!r) {
        var i = document.createElement("div");
        i.setAttribute(n, "return;");
        r = typeof i[n] == "function";
      }
      if (!r && o && e === "wheel") {
        r = document.implementation.hasFeature("Events.wheel", "3.0");
      }
      return r;
    }
    var o;
    var a = n(5);
    if (a.canUseDOM) {
      o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true;
    }
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(5);
    var o = n(42);
    var a = n(43);
    function i(e, t) {
      e.textContent = t;
    }
    if (r.canUseDOM) {
      if (!("textContent" in document.documentElement)) {
        i = function (e, t) {
          a(e, o(t));
        };
      }
    }
    e.exports = i;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      var n = e === null || e === false;
      var r = t === null || t === false;
      if (n || r) {
        return n === r;
      }
      var o = typeof e;
      var a = typeof t;
      if (o === "string" || o === "number") {
        return a === "string" || a === "number";
      } else {
        return a === "object" && e.type === t.type && e.key === t.key;
      }
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return m[e];
    }
    function o(e, t) {
      if (e && e.key != null) {
        return i(e.key);
      } else {
        return t.toString(36);
      }
    }
    function a(e) {
      return ("" + e).replace(v, r);
    }
    function i(e) {
      return "$" + a(e);
    }
    function s(e, t, n, r) {
      var a = typeof e;
      if (a === "undefined" || a === "boolean") {
        e = null;
      }
      if (e === null || a === "string" || a === "number" || l.isValidElement(e)) {
        n(r, e, t === "" ? f + o(e, 0) : t);
        return 1;
      }
      var u;
      var c;
      var m = 0;
      var v = t === "" ? f : t + h;
      if (Array.isArray(e)) {
        for (var y = 0; y < e.length; y++) {
          u = e[y];
          c = v + o(u, y);
          m += s(u, c, n, r);
        }
      } else {
        var g = p(e);
        if (g) {
          var b;
          var E = g.call(e);
          if (g !== e.entries) {
            var w = 0;
            while (!(b = E.next()).done) {
              u = b.value;
              c = v + o(u, w++);
              m += s(u, c, n, r);
            }
          } else {
            while (!(b = E.next()).done) {
              var C = b.value;
              if (C) {
                u = C[1];
                c = v + i(C[0]) + h + o(u, 0);
                m += s(u, c, n, r);
              }
            }
          }
        } else if (a === "object") {
          String(e);
          d(false);
        }
      }
      return m;
    }
    function u(e, t, n) {
      if (e == null) {
        return 0;
      } else {
        return s(e, "", t, n);
      }
    }
    n(13);
    var l = n(8);
    var c = n(21);
    var p = n(58);
    var d = n(1);
    n(4);
    var f = c.SEPARATOR;
    var h = ":";
    var m = {
      "=": "=0",
      ".": "=1",
      ":": "=2"
    };
    var v = /[=.:]/g;
    e.exports = u;
  }, function (e, t, n) {
    "use strict";

    n(3);
    var r = n(9);
    n(4);
    var o = r;
    e.exports = o;
  }, function (e, t) {
    "use strict";

    function n() {
      return {
        type: "saveLoop"
      };
    }
    function r(e) {
      return {
        type: "removeLoop",
        id: e
      };
    }
    function o(e, t) {
      return {
        type: "setLoop",
        start: e,
        end: t
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.saveLoop = n;
    t.removeLoop = r;
    t.setLoop = o;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e) {
      return function (t) {
        t(h(e));
        return fetch((0, l.getServerUrl)("/workspace/" + e), {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + (0, f.default)().getToken().token
          }
        }).then(function (e) {
          return e.json();
        }).then(function (e) {
          return t(y(e.id, e));
        });
      };
    }
    function a(e) {
      var t = JSON.parse(JSON.stringify(e));
      delete t.workspace;
      delete t.auth;
      delete t.audio;
      delete t.playback.isPlaying;
      return t;
    }
    function i(e, t) {
      return function (n) {
        if (e && t && e.audio && e.audio.dataHash) {
          var r = a(e);
          var o = a(t);
          var i = !t.auth.isLoggedIn && e.auth.isLoggedIn;
          var u = Object.keys(r).some(function (e) {
            return JSON.stringify(r[e]) !== JSON.stringify(o[e]);
          });
          if (u || i) {
            n(m());
            if (e.auth.isLoggedIn) {
              s(n, e.audio.dataHash, r, i);
            }
          }
        }
      };
    }
    function s(e, t, n) {
      var r = !(arguments.length <= 3) && arguments[3] !== undefined && arguments[3];
      if (r) {
        e(u(t, n));
      } else {
        g(e, t, n);
      }
    }
    function u(e, t) {
      return function (n) {
        if (e) {
          return fetch((0, l.getServerUrl)("/workspace/" + e), {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + (0, f.default)().getToken().token
            },
            credentials: "include",
            method: "POST",
            body: JSON.stringify(t)
          }).then(function (e) {
            if (e.ok) {
              n(v());
            } else {
              n((0, p.logout)());
              n((0, p.gatherCredentials)());
            }
          });
        }
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.loadWorkspace = o;
    t.updateWorkspace = i;
    var l = n(18);
    var c = n(6);
    var p = n(22);
    var d = n(30);
    var f = r(d);
    var h = (0, c.makeAction)("requestWorkspace", "parent");
    t.requestWorkspace = h;
    var m = (0, c.makeAction)("workspaceDirty");
    var v = (0, c.makeAction)("workspaceSynced");
    var y = (0, c.makeAction)("receiveWorkspace", "id", "data");
    var g = (0, c.debounce)(function (e, t, n) {
      e(u(t, n));
    }, 3000);
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(139);
    var p = r(c);
    n(29);
    var d = n(34);
    var f = n(158);
    var h = r(f);
    var m = n(155);
    var v = r(m);
    var y = function (e) {
      function t() {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      a(t, e);
      i(t, [{
        key: "render",
        value: function () {
          var e = (0, h.default)();
          (0, v.default)(e);
          return l.default.createElement(d.Provider, {
            store: e
          }, l.default.createElement(p.default, null));
        }
      }]);
      return t;
    }(u.Component);
    t.default = y;
    e.exports = t.default;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    var o = function () {
      function e() {
        n(this, e);
        this.delay = null;
        this.waiting = false;
        this.currentLoop = {
          start: 0,
          end: null
        };
        this.delayTimer = null;
        this.audioSystem = null;
        this.loopInterval = null;
        this._isPlaying = false;
        this._speed = 100;
        this.pitchVals = {
          octives: 0,
          semitones: 0,
          cents: 0
        };
      }
      r(e, [{
        key: "updatePitch",
        value: function () {
          if (this.loaded && this.audioSystem.setPitch) {
            this.audioSystem.setPitch(parseInt(this.pitch));
          }
        }
      }, {
        key: "updateVolume",
        value: function () {
          if (this.loaded && this.audioSystem.setVolume) {
            this.audioSystem.setVolume(100);
          }
        }
      }, {
        key: "onCurrentTimeChanged",
        value: function () {
          var e = this.currentTime;
          if (this.currentLoop.end) {
            var t = this.currentLoop.start;
            var n = this.currentLoop.end;
            var r = e <= t && t - e > 0.01;
            var o = e >= n && e - n > 0.01;
            if (r || o) {
              this.seek(this.currentLoop.start);
              if (this.delay) {
                this.pause();
                this.playIn();
              }
            }
          }
          if (e >= this.audioBuffer.duration) {
            this.pause();
          }
        }
      }, {
        key: "play",
        value: function (e, t) {
          if (this.loaded && (this.cancelDelay(), e && (this.pause(), this.seek(this.currentLoop.start)), !(this.audioSystem.currentTime >= this.audioBuffer.duration))) {
            if (t) {
              this.playIn();
              return;
            }
            this.audioSystem.play();
            this.isPlaying = true;
          }
        }
      }, {
        key: "playPause",
        value: function () {
          if (this.isPlaying || this.waiting) {
            this.pause();
          } else {
            this.play(false, false);
          }
        }
      }, {
        key: "pause",
        value: function () {
          if (this.audioSystem) {
            this.cancelDelay();
            this.audioSystem.pause();
            this.isPlaying = false;
          }
        }
      }, {
        key: "seek",
        value: function (e) {
          if (this.loaded && this.currentTime !== e) {
            this.cancelDelay();
            var t = this.isPlaying;
            this.pause();
            this.audioSystem.seek(e);
            if (t) {
              this.play();
            }
          }
        }
      }, {
        key: "playIn",
        value: function () {
          this.cancelDelay();
          if (this.delay) {
            this.waiting = true;
            this.delayTimer = setTimeout(function () {
              this.waiting = false;
              this.play();
            }.bind(this), this.delay * 1000);
            return;
          } else {
            this.play(false, false);
            return;
          }
        }
      }, {
        key: "cancelDelay",
        value: function () {
          clearTimeout(this.delayTimer);
          this.waiting = false;
        }
      }, {
        key: "load",
        value: function (e) {
          var t = this;
          this.cancelDelay();
          this.audioSystem = e;
          e.isPlaying = function () {
            return t.isPlaying;
          };
          e.onAudioBufferChanged = function (e) {
            return t.audioBuffer = e;
          };
        }
      }, {
        key: "changePitch",
        value: function (e, t) {
          var n = $(t.currentTarget);
          var r = n.data("direction") === "up" ? 1 : -1;
          var o = parseInt(n.data("multiplier"));
          var a = parseInt(n.data("max"));
          var i = -a;
          var s = n.data("property");
          var u = this.pitchVals[s]();
          var l = u + o * r;
          return !(l > a) && !(l < i) && void this.pitchVals[s](l);
        }
      }, {
        key: "getDataHash",
        value: function () {
          return this.audioSystem.getDataHash();
        }
      }, {
        key: "isPlaying",
        get: function () {
          return this._isPlaying;
        },
        set: function (e) {
          var t = this;
          if (this._isPlaying !== e) {
            this._isPlaying = e;
            if (!e) {
              clearInterval(this.loopInterval);
            }
            if (e) {
              this.loopInterval = setInterval(function () {
                return t.onCurrentTimeChanged();
              }, 4);
            }
            if (this.onStatusChanged) {
              this.onStatusChanged(e);
            }
          }
        }
      }, {
        key: "loaded",
        get: function () {
          return this.audioBuffer != null;
        }
      }, {
        key: "pitch",
        get: function () {
          var e = Math.pow(2, 1 / 12);
          var t = this.pitchVals.octives * 12;
          t += this.pitchVals.semitones;
          t += this.pitchVals.cents / 100;
          var n = Math.pow(e, t);
          var r = parseFloat((n * 100).toFixed(2));
          return r;
        }
      }, {
        key: "speed",
        get: function () {
          return this._speed;
        },
        set: function (e) {
          if (this._speed !== e) {
            this._speed = e;
            this.audioSystem.speed = parseInt(e) / 100;
          }
        }
      }, {
        key: "audioBuffer",
        get: function () {
          return this._audioBuffer;
        },
        set: function (e) {
          this._audioBuffer = e;
          if (this.onAudioBufferChanged) {
            this.onAudioBufferChanged(e);
          }
        }
      }, {
        key: "currentTime",
        get: function () {
          return (this.audioSystem || {}).currentTime || 0;
        }
      }]);
      return e;
    }();
    t.default = new o();
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    var r = n(9);
    var o = {
      listen: function (e, t, n) {
        if (e.addEventListener) {
          e.addEventListener(t, n, false);
          return {
            remove: function () {
              e.removeEventListener(t, n, false);
            }
          };
        } else if (e.attachEvent) {
          e.attachEvent("on" + t, n);
          return {
            remove: function () {
              e.detachEvent("on" + t, n);
            }
          };
        } else {
          return undefined;
        }
      },
      capture: function (e, t, n) {
        if (e.addEventListener) {
          e.addEventListener(t, n, true);
          return {
            remove: function () {
              e.removeEventListener(t, n, true);
            }
          };
        } else {
          return {
            remove: r
          };
        }
      },
      registerDefault: function () {}
    };
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      var n = true;
      e: while (n) {
        var r = e;
        var a = t;
        n = false;
        if (r && a) {
          if (r === a) {
            return true;
          }
          if (o(r)) {
            return false;
          }
          if (o(a)) {
            e = r;
            t = a.parentNode;
            n = true;
            continue e;
          }
          if (r.contains) {
            return r.contains(a);
          } else {
            return !!r.compareDocumentPosition && !!(r.compareDocumentPosition(a) & 16);
          }
        }
        return false;
      }
    }
    var o = n(173);
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      try {
        e.focus();
      } catch (e) {}
    }
    e.exports = n;
  }, function (e, t) {
    "use strict";

    function n() {
      if (typeof document == "undefined") {
        return null;
      }
      try {
        return document.activeElement || document.body;
      } catch (e) {
        return document.body;
      }
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (i) {
        undefined;
      } else {
        a(false);
      }
      if (!d.hasOwnProperty(e)) {
        e = "*";
      }
      if (!s.hasOwnProperty(e)) {
        if (e === "*") {
          i.innerHTML = "<link />";
        } else {
          i.innerHTML = "<" + e + "></" + e + ">";
        }
        s[e] = !i.firstChild;
      }
      if (s[e]) {
        return d[e];
      } else {
        return null;
      }
    }
    var o = n(5);
    var a = n(1);
    var i = o.canUseDOM ? document.createElement("div") : null;
    var s = {};
    var u = [1, "<select multiple=\"true\">", "</select>"];
    var l = [1, "<table>", "</table>"];
    var c = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var p = [1, "<svg xmlns=\"http://www.w3.org/2000/svg\">", "</svg>"];
    var d = {
      "*": [1, "?<div>", "</div>"],
      area: [1, "<map>", "</map>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      param: [1, "<object>", "</object>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      optgroup: u,
      option: u,
      caption: l,
      colgroup: l,
      tbody: l,
      tfoot: l,
      thead: l,
      td: c,
      th: c
    };
    var f = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    f.forEach(function (e) {
      d[e] = p;
      s[e] = true;
    });
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (e === t) {
        return true;
      }
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) {
        return false;
      }
      var n = Object.keys(e);
      var o = Object.keys(t);
      if (n.length !== o.length) {
        return false;
      }
      var a = r.bind(t);
      for (var i = 0; i < n.length; i++) {
        if (!a(n[i]) || e[n[i]] !== t[n[i]]) {
          return false;
        }
      }
      return true;
    }
    var r = Object.prototype.hasOwnProperty;
    e.exports = n;
  }, function (e, t, n) {
    var r;
    var o;
    var a;
    var i = n(6);
    var s = i.shims.document;
    var u = i.shims.window;
    /*! nouislider - 12.0.0 - 9/14/2018 */
    (function (n) {
      o = [];
      r = n;
      a = typeof r == "function" ? r.apply(t, o) : r;
      if (a !== undefined) {
        e.exports = a;
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
  }, function (e, t, n) {
    function r(e) {
      return function (t) {
        if (t == null) {
          return undefined;
        } else {
          return t[e];
        }
      };
    }
    function o(e) {
      return e != null && i(g(e));
    }
    function a(e, t) {
      e = typeof e == "number" || f.test(e) ? +e : -1;
      t = t == null ? y : t;
      return e > -1 && e % 1 == 0 && e < t;
    }
    function i(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= y;
    }
    function s(e) {
      var t = l(e);
      for (var n = t.length, r = n && e.length, o = !!r && i(r) && (d(e) || p(e)), s = -1, u = []; ++s < n;) {
        var c = t[s];
        if (o && a(c, r) || m.call(e, c)) {
          u.push(c);
        }
      }
      return u;
    }
    function u(e) {
      var t = typeof e;
      return !!e && (t == "object" || t == "function");
    }
    function l(e) {
      if (e == null) {
        return [];
      }
      if (!u(e)) {
        e = Object(e);
      }
      var t = e.length;
      t = t && i(t) && (d(e) || p(e)) && t || 0;
      var n = e.constructor;
      for (var r = -1, o = typeof n == "function" && n.prototype === e, s = Array(t), l = t > 0; ++r < t;) {
        s[r] = r + "";
      }
      for (var c in e) {
        if ((!l || !a(c, t)) && (c != "constructor" || !o && !!m.call(e, c))) {
          s.push(c);
        }
      }
      return s;
    }
    var c = n(187);
    var p = n(190);
    var d = n(191);
    var f = /^\d+$/;
    var h = Object.prototype;
    var m = h.hasOwnProperty;
    var v = c(Object, "keys");
    var y = 9007199254740991;
    var g = r("length");
    var b = v ? function (e) {
      var t = e == null ? undefined : e.constructor;
      if (typeof t == "function" && t.prototype === e || typeof e != "function" && o(e)) {
        return s(e);
      } else if (u(e)) {
        return v(e);
      } else {
        return [];
      }
    } : s;
    e.exports = b;
  }, function (e, t, n) {
    var r = n(199);
    var o = r.Symbol;
    e.exports = o;
  }, function (e, t, n) {
    e.exports = n(201)();
  }, function (e, t) {
    /*!
     * Adapted from jQuery UI core
     *
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    function n(e, t) {
      var n = e.nodeName.toLowerCase();
      return (/input|select|textarea|button|object/.test(n) ? !e.disabled : n === "a" ? e.href || t : t) && o(e);
    }
    function r(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0 || e.style.display === "none";
    }
    function o(e) {
      while (e && e !== document.body) {
        if (r(e)) {
          return false;
        }
        e = e.parentNode;
      }
      return true;
    }
    function a(e) {
      var t = e.getAttribute("tabindex");
      if (t === null) {
        t = undefined;
      }
      var r = isNaN(t);
      return (r || t >= 0) && n(e, !r);
    }
    function i(e) {
      return [].slice.call(e.querySelectorAll("*"), 0).filter(function (e) {
        return a(e);
      });
    }
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    t.__esModule = true;
    var o = n(78);
    var a = r(o);
    t.default = a.default.shape({
      subscribe: a.default.func.isRequired,
      dispatch: a.default.func.isRequired,
      getState: a.default.func.isRequired
    });
  }, function (e, t) {
    "use strict";

    function n(e) {
      if (typeof console != "undefined" && typeof console.error == "function") {
        console.error(e);
      }
      try {
        throw new Error(e);
      } catch (e) {}
    }
    t.__esModule = true;
    t.default = n;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var r = {
      animationIterationCount: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      stopOpacity: true,
      strokeDashoffset: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var o = ["Webkit", "ms", "Moz", "O"];
    Object.keys(r).forEach(function (e) {
      o.forEach(function (t) {
        r[n(t, e)] = r[e];
      });
    });
    var a = {
      background: {
        backgroundAttachment: true,
        backgroundColor: true,
        backgroundImage: true,
        backgroundPositionX: true,
        backgroundPositionY: true,
        backgroundRepeat: true
      },
      backgroundPosition: {
        backgroundPositionX: true,
        backgroundPositionY: true
      },
      border: {
        borderWidth: true,
        borderStyle: true,
        borderColor: true
      },
      borderBottom: {
        borderBottomWidth: true,
        borderBottomStyle: true,
        borderBottomColor: true
      },
      borderLeft: {
        borderLeftWidth: true,
        borderLeftStyle: true,
        borderLeftColor: true
      },
      borderRight: {
        borderRightWidth: true,
        borderRightStyle: true,
        borderRightColor: true
      },
      borderTop: {
        borderTopWidth: true,
        borderTopStyle: true,
        borderTopColor: true
      },
      font: {
        fontStyle: true,
        fontVariant: true,
        fontWeight: true,
        fontSize: true,
        lineHeight: true,
        fontFamily: true
      },
      outline: {
        outlineWidth: true,
        outlineStyle: true,
        outlineColor: true
      }
    };
    var i = {
      isUnitlessNumber: r,
      shorthandPropertyExpansions: a
    };
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      var r = n >= e.childNodes.length ? null : e.childNodes.item(n);
      e.insertBefore(t, r);
    }
    var o = n(220);
    var a = n(100);
    var i = n(10);
    var s = n(43);
    var u = n(61);
    var l = n(1);
    var c = {
      dangerouslyReplaceNodeWithMarkup: o.dangerouslyReplaceNodeWithMarkup,
      updateTextContent: u,
      processUpdates: function (e, t) {
        var n;
        var i = null;
        var c = null;
        for (var p = 0; p < e.length; p++) {
          n = e[p];
          if (n.type === a.MOVE_EXISTING || n.type === a.REMOVE_NODE) {
            var d = n.fromIndex;
            var f = n.parentNode.childNodes[d];
            var h = n.parentID;
            if (f) {
              undefined;
            } else {
              l(false);
            }
            i = i || {};
            i[h] = i[h] || [];
            i[h][d] = f;
            c = c || [];
            c.push(f);
          }
        }
        var m;
        m = t.length && typeof t[0] == "string" ? o.dangerouslyRenderMarkup(t) : t;
        if (c) {
          for (var v = 0; v < c.length; v++) {
            c[v].parentNode.removeChild(c[v]);
          }
        }
        for (var y = 0; y < e.length; y++) {
          n = e[y];
          switch (n.type) {
            case a.INSERT_MARKUP:
              r(n.parentNode, m[n.markupIndex], n.toIndex);
              break;
            case a.MOVE_EXISTING:
              r(n.parentNode, i[n.parentID][n.fromIndex], n.toIndex);
              break;
            case a.SET_MARKUP:
              s(n.parentNode, n.content);
              break;
            case a.TEXT_CONTENT:
              u(n.parentNode, n.content);
              break;
            case a.REMOVE_NODE:
          }
        }
      }
    };
    i.measureMethods(c, "DOMChildrenOperations", {
      updateTextContent: "updateTextContent"
    });
    e.exports = c;
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (s) {
        for (var e in u) {
          var t = u[e];
          var n = s.indexOf(e);
          if (n > -1) {
            undefined;
          } else {
            i(false);
          }
          if (!l.plugins[n]) {
            if (t.extractEvents) {
              undefined;
            } else {
              i(false);
            }
            l.plugins[n] = t;
            var r = t.eventTypes;
            for (var a in r) {
              if (o(r[a], t, a)) {
                undefined;
              } else {
                i(false);
              }
            }
          }
        }
      }
    }
    function o(e, t, n) {
      if (l.eventNameDispatchConfigs.hasOwnProperty(n)) {
        i(false);
      } else {
        undefined;
      }
      l.eventNameDispatchConfigs[n] = e;
      var r = e.phasedRegistrationNames;
      if (r) {
        for (var o in r) {
          if (r.hasOwnProperty(o)) {
            var s = r[o];
            a(s, t, n);
          }
        }
        return true;
      }
      return !!e.registrationName && (a(e.registrationName, t, n), true);
    }
    function a(e, t, n) {
      if (l.registrationNameModules[e]) {
        i(false);
      } else {
        undefined;
      }
      l.registrationNameModules[e] = t;
      l.registrationNameDependencies[e] = t.eventTypes[n].dependencies;
    }
    var i = n(1);
    var s = null;
    var u = {};
    var l = {
      plugins: [],
      eventNameDispatchConfigs: {},
      registrationNameModules: {},
      registrationNameDependencies: {},
      injectEventPluginOrder: function (e) {
        if (s) {
          i(false);
        } else {
          undefined;
        }
        s = Array.prototype.slice.call(e);
        r();
      },
      injectEventPluginsByName: function (e) {
        var t = false;
        for (var n in e) {
          if (e.hasOwnProperty(n)) {
            var o = e[n];
            if (!u.hasOwnProperty(n) || u[n] !== o) {
              if (u[n]) {
                i(false);
              } else {
                undefined;
              }
              u[n] = o;
              t = true;
            }
          }
        }
        if (t) {
          r();
        }
      },
      getPluginModuleForEvent: function (e) {
        var t = e.dispatchConfig;
        if (t.registrationName) {
          return l.registrationNameModules[t.registrationName] || null;
        }
        for (var n in t.phasedRegistrationNames) {
          if (t.phasedRegistrationNames.hasOwnProperty(n)) {
            var r = l.registrationNameModules[t.phasedRegistrationNames[n]];
            if (r) {
              return r;
            }
          }
        }
        return null;
      },
      _resetEventPlugins: function () {
        s = null;
        for (var e in u) {
          if (u.hasOwnProperty(e)) {
            delete u[e];
          }
        }
        l.plugins.length = 0;
        var t = l.eventNameDispatchConfigs;
        for (var n in t) {
          if (t.hasOwnProperty(n)) {
            delete t[n];
          }
        }
        var r = l.registrationNameModules;
        for (var o in r) {
          if (r.hasOwnProperty(o)) {
            delete r[o];
          }
        }
      }
    };
    e.exports = l;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return ("" + e).replace(E, "//");
    }
    function o(e, t) {
      this.func = e;
      this.context = t;
      this.count = 0;
    }
    function a(e, t, n) {
      var r = e.func;
      var o = e.context;
      r.call(o, t, e.count++);
    }
    function i(e, t, n) {
      if (e == null) {
        return e;
      }
      var r = o.getPooled(t, n);
      y(e, a, r);
      o.release(r);
    }
    function s(e, t, n, r) {
      this.result = e;
      this.keyPrefix = t;
      this.func = n;
      this.context = r;
      this.count = 0;
    }
    function u(e, t, n) {
      var o = e.result;
      var a = e.keyPrefix;
      var i = e.func;
      var s = e.context;
      var u = i.call(s, t, e.count++);
      if (Array.isArray(u)) {
        l(u, o, n, v.thatReturnsArgument);
      } else if (u != null) {
        if (m.isValidElement(u)) {
          u = m.cloneAndReplaceKey(u, a + (u !== t ? r(u.key || "") + "/" : "") + n);
        }
        o.push(u);
      }
    }
    function l(e, t, n, o, a) {
      var i = "";
      if (n != null) {
        i = r(n) + "/";
      }
      var l = s.getPooled(t, i, o, a);
      y(e, u, l);
      s.release(l);
    }
    function c(e, t, n) {
      if (e == null) {
        return e;
      }
      var r = [];
      l(e, r, null, t, n);
      return r;
    }
    function p(e, t, n) {
      return null;
    }
    function d(e, t) {
      return y(e, p, null);
    }
    function f(e) {
      var t = [];
      l(e, t, null, v.thatReturnsArgument);
      return t;
    }
    var h = n(15);
    var m = n(8);
    var v = n(9);
    var y = n(63);
    var g = h.twoArgumentPooler;
    var b = h.fourArgumentPooler;
    var E = /\/(?!\/)/g;
    o.prototype.destructor = function () {
      this.func = null;
      this.context = null;
      this.count = 0;
    };
    h.addPoolingTo(o, g);
    s.prototype.destructor = function () {
      this.result = null;
      this.keyPrefix = null;
      this.func = null;
      this.context = null;
      this.count = 0;
    };
    h.addPoolingTo(s, b);
    var w = {
      forEach: i,
      map: c,
      mapIntoWithKeyPrefixInternal: l,
      count: d,
      toArray: f
    };
    e.exports = w;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      var n = C.hasOwnProperty(t) ? C[t] : null;
      if (O.hasOwnProperty(t)) {
        if (n !== E.OVERRIDE_BASE) {
          v(false);
        } else {
          undefined;
        }
      }
      if (e.hasOwnProperty(t)) {
        if (n !== E.DEFINE_MANY && n !== E.DEFINE_MANY_MERGED) {
          v(false);
        } else {
          undefined;
        }
      }
    }
    function o(e, t) {
      if (t) {
        if (typeof t == "function") {
          v(false);
        } else {
          undefined;
        }
        if (d.isValidElement(t)) {
          v(false);
        } else {
          undefined;
        }
        var n = e.prototype;
        if (t.hasOwnProperty(b)) {
          _.mixins(e, t.mixins);
        }
        for (var o in t) {
          if (t.hasOwnProperty(o) && o !== b) {
            var a = t[o];
            r(n, o);
            if (_.hasOwnProperty(o)) {
              _[o](e, a);
            } else {
              var i = C.hasOwnProperty(o);
              var l = n.hasOwnProperty(o);
              var c = typeof a == "function";
              var p = c && !i && !l && t.autobind !== false;
              if (p) {
                n.__reactAutoBindMap ||= {};
                n.__reactAutoBindMap[o] = a;
                n[o] = a;
              } else if (l) {
                var f = C[o];
                if (!i || f !== E.DEFINE_MANY_MERGED && f !== E.DEFINE_MANY) {
                  v(false);
                } else {
                  undefined;
                }
                if (f === E.DEFINE_MANY_MERGED) {
                  n[o] = s(n[o], a);
                } else if (f === E.DEFINE_MANY) {
                  n[o] = u(n[o], a);
                }
              } else {
                n[o] = a;
              }
            }
          }
        }
      }
    }
    function a(e, t) {
      if (t) {
        for (var n in t) {
          var r = t[n];
          if (t.hasOwnProperty(n)) {
            var o = n in _;
            if (o) {
              v(false);
            } else {
              undefined;
            }
            var a = n in e;
            if (a) {
              v(false);
            } else {
              undefined;
            }
            e[n] = r;
          }
        }
      }
    }
    function i(e, t) {
      if (e && t && typeof e == "object" && typeof t == "object") {
        undefined;
      } else {
        v(false);
      }
      for (var n in t) {
        if (t.hasOwnProperty(n)) {
          if (e[n] !== undefined) {
            v(false);
          } else {
            undefined;
          }
          e[n] = t[n];
        }
      }
      return e;
    }
    function s(e, t) {
      return function () {
        var n = e.apply(this, arguments);
        var r = t.apply(this, arguments);
        if (n == null) {
          return r;
        }
        if (r == null) {
          return n;
        }
        var o = {};
        i(o, n);
        i(o, r);
        return o;
      };
    }
    function u(e, t) {
      return function () {
        e.apply(this, arguments);
        t.apply(this, arguments);
      };
    }
    function l(e, t) {
      var n = t.bind(e);
      return n;
    }
    function c(e) {
      for (var t in e.__reactAutoBindMap) {
        if (e.__reactAutoBindMap.hasOwnProperty(t)) {
          var n = e.__reactAutoBindMap[t];
          e[t] = l(e, n);
        }
      }
    }
    var p = n(87);
    var d = n(8);
    n(38);
    n(37);
    var f = n(102);
    var h = n(3);
    var m = n(24);
    var v = n(1);
    var y = n(32);
    var g = n(14);
    n(4);
    var b = g({
      mixins: null
    });
    var E = y({
      DEFINE_ONCE: null,
      DEFINE_MANY: null,
      OVERRIDE_BASE: null,
      DEFINE_MANY_MERGED: null
    });
    var w = [];
    var C = {
      mixins: E.DEFINE_MANY,
      statics: E.DEFINE_MANY,
      propTypes: E.DEFINE_MANY,
      contextTypes: E.DEFINE_MANY,
      childContextTypes: E.DEFINE_MANY,
      getDefaultProps: E.DEFINE_MANY_MERGED,
      getInitialState: E.DEFINE_MANY_MERGED,
      getChildContext: E.DEFINE_MANY_MERGED,
      render: E.DEFINE_ONCE,
      componentWillMount: E.DEFINE_MANY,
      componentDidMount: E.DEFINE_MANY,
      componentWillReceiveProps: E.DEFINE_MANY,
      shouldComponentUpdate: E.DEFINE_ONCE,
      componentWillUpdate: E.DEFINE_MANY,
      componentDidUpdate: E.DEFINE_MANY,
      componentWillUnmount: E.DEFINE_MANY,
      updateComponent: E.OVERRIDE_BASE
    };
    var _ = {
      displayName: function (e, t) {
        e.displayName = t;
      },
      mixins: function (e, t) {
        if (t) {
          for (var n = 0; n < t.length; n++) {
            o(e, t[n]);
          }
        }
      },
      childContextTypes: function (e, t) {
        e.childContextTypes = h({}, e.childContextTypes, t);
      },
      contextTypes: function (e, t) {
        e.contextTypes = h({}, e.contextTypes, t);
      },
      getDefaultProps: function (e, t) {
        if (e.getDefaultProps) {
          e.getDefaultProps = s(e.getDefaultProps, t);
        } else {
          e.getDefaultProps = t;
        }
      },
      propTypes: function (e, t) {
        e.propTypes = h({}, e.propTypes, t);
      },
      statics: function (e, t) {
        a(e, t);
      },
      autobind: function () {}
    };
    var O = {
      replaceState: function (e, t) {
        this.updater.enqueueReplaceState(this, e);
        if (t) {
          this.updater.enqueueCallback(this, t);
        }
      },
      isMounted: function () {
        return this.updater.isMounted(this);
      },
      setProps: function (e, t) {
        this.updater.enqueueSetProps(this, e);
        if (t) {
          this.updater.enqueueCallback(this, t);
        }
      },
      replaceProps: function (e, t) {
        this.updater.enqueueReplaceProps(this, e);
        if (t) {
          this.updater.enqueueCallback(this, t);
        }
      }
    };
    function P() {}
    h(P.prototype, p.prototype, O);
    var k = {
      createClass: function (e) {
        function t(e, t, n) {
          if (this.__reactAutoBindMap) {
            c(this);
          }
          this.props = e;
          this.context = t;
          this.refs = m;
          this.updater = n || f;
          this.state = null;
          var r = this.getInitialState ? this.getInitialState() : null;
          if (typeof r != "object" || Array.isArray(r)) {
            v(false);
          } else {
            undefined;
          }
          this.state = r;
        }
        t.prototype = new P();
        t.prototype.constructor = t;
        w.forEach(o.bind(null, t));
        o(t, e);
        if (t.getDefaultProps) {
          t.defaultProps = t.getDefaultProps();
        }
        if (t.prototype.render) {
          undefined;
        } else {
          v(false);
        }
        for (var n in C) {
          t.prototype[n] ||= null;
        }
        return t;
      },
      injection: {
        injectMixin: function (e) {
          w.push(e);
        }
      }
    };
    e.exports = k;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      this.props = e;
      this.context = t;
      this.refs = a;
      this.updater = n || o;
    }
    var o = n(102);
    n(41);
    var a = n(24);
    var i = n(1);
    n(4);
    r.prototype.isReactComponent = {};
    r.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null) {
        i(false);
      } else {
        undefined;
      }
      this.updater.enqueueSetState(this, e);
      if (t) {
        this.updater.enqueueCallback(this, t);
      }
    };
    r.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this);
      if (e) {
        this.updater.enqueueCallback(this, e);
      }
    };
    e.exports = r;
  }, function (e, t) {
    "use strict";

    var n = {
      useCreateElement: false
    };
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (this._rootNodeID && this._wrapperState.pendingUpdate) {
        this._wrapperState.pendingUpdate = false;
        var e = this._currentElement.props;
        var t = i.getValue(e);
        if (t != null) {
          o(this, Boolean(e.multiple), t);
        }
      }
    }
    function o(e, t, n) {
      var r;
      var o;
      var a = s.getNode(e._rootNodeID).options;
      if (t) {
        r = {};
        o = 0;
        for (; o < n.length; o++) {
          r["" + n[o]] = true;
        }
        for (o = 0; o < a.length; o++) {
          var i = r.hasOwnProperty(a[o].value);
          if (a[o].selected !== i) {
            a[o].selected = i;
          }
        }
      } else {
        r = "" + n;
        o = 0;
        for (; o < a.length; o++) {
          if (a[o].value === r) {
            a[o].selected = true;
            return;
          }
        }
        if (a.length) {
          a[0].selected = true;
        }
      }
    }
    function a(e) {
      var t = this._currentElement.props;
      var n = i.executeOnChange(t, e);
      this._wrapperState.pendingUpdate = true;
      u.asap(r, this);
      return n;
    }
    var i = n(47);
    var s = n(7);
    var u = n(11);
    var l = n(3);
    n(4);
    var c = "__ReactDOMSelect_value$" + Math.random().toString(36).slice(2);
    var p = {
      valueContextKey: c,
      getNativeProps: function (e, t, n) {
        return l({}, t, {
          onChange: e._wrapperState.onChange,
          value: undefined
        });
      },
      mountWrapper: function (e, t) {
        var n = i.getValue(t);
        e._wrapperState = {
          pendingUpdate: false,
          initialValue: n ?? t.defaultValue,
          onChange: a.bind(e),
          wasMultiple: Boolean(t.multiple)
        };
      },
      processChildContext: function (e, t, n) {
        var r = l({}, n);
        r[c] = e._wrapperState.initialValue;
        return r;
      },
      postUpdateWrapper: function (e) {
        var t = e._currentElement.props;
        e._wrapperState.initialValue = undefined;
        var n = e._wrapperState.wasMultiple;
        e._wrapperState.wasMultiple = Boolean(t.multiple);
        var r = i.getValue(t);
        if (r != null) {
          e._wrapperState.pendingUpdate = false;
          o(e, Boolean(t.multiple), r);
        } else if (n !== Boolean(t.multiple)) {
          if (t.defaultValue != null) {
            o(e, Boolean(t.multiple), t.defaultValue);
          } else {
            o(e, Boolean(t.multiple), t.multiple ? [] : "");
          }
        }
      }
    };
    e.exports = p;
  }, function (e, t, n) {
    "use strict";

    var r = n(93);
    var o = n(247);
    var a = n(53);
    r.inject();
    var i = {
      renderToString: o.renderToString,
      renderToStaticMarkup: o.renderToStaticMarkup,
      version: a
    };
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    var r = n(83);
    var o = n(46);
    var a = n(48);
    var i = n(7);
    var s = n(3);
    var u = n(42);
    var l = n(61);
    n(64);
    function c(e) {}
    s(c.prototype, {
      construct: function (e) {
        this._currentElement = e;
        this._stringText = "" + e;
        this._rootNodeID = null;
        this._mountIndex = 0;
      },
      mountComponent: function (e, t, n) {
        this._rootNodeID = e;
        if (t.useCreateElement) {
          var r = n[i.ownerDocumentContextKey];
          var a = r.createElement("span");
          o.setAttributeForID(a, e);
          i.getID(a);
          l(a, this._stringText);
          return a;
        }
        var s = u(this._stringText);
        if (t.renderToStaticMarkup) {
          return s;
        } else {
          return "<span " + o.createMarkupForID(e) + ">" + s + "</span>";
        }
      },
      receiveComponent: function (e, t) {
        if (e !== this._currentElement) {
          this._currentElement = e;
          var n = "" + e;
          if (n !== this._stringText) {
            this._stringText = n;
            var o = i.getNode(this._rootNodeID);
            r.updateTextContent(o, n);
          }
        }
      },
      unmountComponent: function () {
        a.unmountIDFromEnvironment(this._rootNodeID);
      }
    });
    e.exports = c;
  }, function (e, t, n) {
    "use strict";

    function r() {
      this.reinitializeTransaction();
    }
    var o = n(11);
    var a = n(40);
    var i = n(3);
    var s = n(9);
    var u = {
      initialize: s,
      close: function () {
        d.isBatchingUpdates = false;
      }
    };
    var l = {
      initialize: s,
      close: o.flushBatchedUpdates.bind(o)
    };
    var c = [l, u];
    i(r.prototype, a.Mixin, {
      getTransactionWrappers: function () {
        return c;
      }
    });
    var p = new r();
    var d = {
      isBatchingUpdates: false,
      batchedUpdates: function (e, t, n, r, o, a) {
        var i = d.isBatchingUpdates;
        d.isBatchingUpdates = true;
        if (i) {
          e(t, n, r, o, a);
        } else {
          p.perform(e, null, t, n, r, o, a);
        }
      }
    };
    e.exports = d;
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (!P) {
        P = true;
        y.EventEmitter.injectReactEventListener(v);
        y.EventPluginHub.injectEventPluginOrder(s);
        y.EventPluginHub.injectInstanceHandle(g);
        y.EventPluginHub.injectMount(b);
        y.EventPluginHub.injectEventPluginsByName({
          SimpleEventPlugin: _,
          EnterLeaveEventPlugin: u,
          ChangeEventPlugin: a,
          SelectEventPlugin: w,
          BeforeInputEventPlugin: o
        });
        y.NativeComponent.injectGenericComponentClass(h);
        y.NativeComponent.injectTextComponentClass(m);
        y.Class.injectMixin(p);
        y.DOMProperty.injectDOMPropertyConfig(c);
        y.DOMProperty.injectDOMPropertyConfig(O);
        y.EmptyComponent.injectEmptyComponent("noscript");
        y.Updates.injectReconcileTransaction(E);
        y.Updates.injectBatchingStrategy(f);
        y.RootIndex.injectCreateReactRootIndex(l.canUseDOM ? i.createReactRootIndex : C.createReactRootIndex);
        y.Component.injectEnvironment(d);
      }
    }
    var o = n(216);
    var a = n(218);
    var i = n(219);
    var s = n(221);
    var u = n(222);
    var l = n(5);
    var c = n(225);
    var p = n(226);
    var d = n(48);
    var f = n(92);
    var h = n(232);
    var m = n(91);
    var v = n(239);
    var y = n(240);
    var g = n(21);
    var b = n(7);
    var E = n(244);
    var w = n(253);
    var C = n(254);
    var _ = n(255);
    var O = n(252);
    var P = false;
    e.exports = {
      inject: r
    };
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (p.current) {
        var e = p.current.getName();
        if (e) {
          return " Check the render method of `" + e + "`.";
        }
      }
      return "";
    }
    function o(e, t) {
      if (e._store && !e._store.validated && e.key == null) {
        e._store.validated = true;
        a("uniqueKey", e, t);
      }
    }
    function a(e, t, n) {
      var o = r();
      if (!o) {
        var a = typeof n == "string" ? n : n.displayName || n.name;
        if (a) {
          o = " Check the top-level render call using <" + a + ">.";
        }
      }
      var i = h[e] ||= {};
      if (i[o]) {
        return null;
      }
      i[o] = true;
      var s = {
        parentOrOwner: o,
        url: " See https://fb.me/react-warning-keys for more information.",
        childOwner: null
      };
      if (t && t._owner && t._owner !== p.current) {
        s.childOwner = " It was passed a child from " + t._owner.getName() + ".";
      }
      return s;
    }
    function i(e, t) {
      if (typeof e == "object") {
        if (Array.isArray(e)) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (l.isValidElement(r)) {
              o(r, t);
            }
          }
        } else if (l.isValidElement(e)) {
          if (e._store) {
            e._store.validated = true;
          }
        } else if (e) {
          var a = d(e);
          if (a && a !== e.entries) {
            for (var i, s = a.call(e); !(i = s.next()).done;) {
              if (l.isValidElement(i.value)) {
                o(i.value, t);
              }
            }
          }
        }
      }
    }
    function s(e, t, n, o) {
      for (var a in t) {
        if (t.hasOwnProperty(a)) {
          var i;
          try {
            if (typeof t[a] != "function") {
              f(false);
            } else {
              undefined;
            }
            i = t[a](n, a, e, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (e) {
            i = e;
          }
          if (i instanceof Error && !(i.message in m)) {
            m[i.message] = true;
            r();
          }
        }
      }
    }
    function u(e) {
      var t = e.type;
      if (typeof t == "function") {
        var n = t.displayName || t.name;
        if (t.propTypes) {
          s(n, t.propTypes, e.props, c.prop);
        }
        typeof t.getDefaultProps == "function";
      }
    }
    var l = n(8);
    var c = n(38);
    n(37);
    var p = n(13);
    n(41);
    var d = n(58);
    var f = n(1);
    n(4);
    var h = {};
    var m = {};
    var v = {
      createElement: function (e, t, n) {
        var r = typeof e == "string" || typeof e == "function";
        var o = l.createElement.apply(this, arguments);
        if (o == null) {
          return o;
        }
        if (r) {
          for (var a = 2; a < arguments.length; a++) {
            i(arguments[a], e);
          }
        }
        u(o);
        return o;
      },
      createFactory: function (e) {
        var t = v.createElement.bind(null, e);
        t.type = e;
        return t;
      },
      cloneElement: function (e, t, n) {
        var r = l.cloneElement.apply(this, arguments);
        for (var o = 2; o < arguments.length; o++) {
          i(arguments[o], r.type);
        }
        u(r);
        return r;
      }
    };
    e.exports = v;
  }, function (e, t, n) {
    "use strict";

    function r() {
      i.registerNullComponentID(this._rootNodeID);
    }
    var o;
    var a = n(8);
    var i = n(96);
    var s = n(16);
    var u = n(3);
    var l = {
      injectEmptyComponent: function (e) {
        o = a.createElement(e);
      }
    };
    function c(e) {
      this._currentElement = null;
      this._rootNodeID = null;
      this._renderedComponent = e(o);
    }
    u(c.prototype, {
      construct: function (e) {},
      mountComponent: function (e, t, n) {
        t.getReactMountReady().enqueue(r, this);
        this._rootNodeID = e;
        return s.mountComponent(this._renderedComponent, e, t, n);
      },
      receiveComponent: function () {},
      unmountComponent: function (e, t, n) {
        s.unmountComponent(this._renderedComponent);
        i.deregisterNullComponentID(this._rootNodeID);
        this._rootNodeID = null;
        this._renderedComponent = null;
      }
    });
    c.injection = l;
    e.exports = c;
  }, function (e, t) {
    "use strict";

    function n(e) {
      return !!a[e];
    }
    function r(e) {
      a[e] = true;
    }
    function o(e) {
      delete a[e];
    }
    var a = {};
    var i = {
      isNullComponentID: n,
      registerNullComponentID: r,
      deregisterNullComponentID: o
    };
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      try {
        return t(n, r);
      } catch (e) {
        if (o === null) {
          o = e;
        }
        return;
      }
    }
    var o = null;
    var a = {
      invokeGuardedCallback: r,
      invokeGuardedCallbackWithCatch: r,
      rethrowCaughtError: function () {
        if (o) {
          var e = o;
          o = null;
          throw e;
        }
      }
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return a(document.documentElement, e);
    }
    var o = n(236);
    var a = n(70);
    var i = n(71);
    var s = n(72);
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
    e.exports = u;
  }, function (e, t, n) {
    "use strict";

    var r = n(264);
    var o = /\/?>/;
    var a = {
      CHECKSUM_ATTR_NAME: "data-react-checksum",
      addChecksumToMarkup: function (e) {
        var t = r(e);
        return e.replace(o, " " + a.CHECKSUM_ATTR_NAME + "=\"" + t + "\"$&");
      },
      canReuseMarkup: function (e, t) {
        var n = t.getAttribute(a.CHECKSUM_ATTR_NAME);
        n = n && parseInt(n, 10);
        var o = r(e);
        return o === n;
      }
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    var r = n(32);
    var o = r({
      INSERT_MARKUP: null,
      MOVE_EXISTING: null,
      REMOVE_NODE: null,
      SET_MARKUP: null,
      TEXT_CONTENT: null
    });
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (typeof e.type == "function") {
        return e.type;
      }
      var t = e.type;
      var n = p[t];
      if (n == null) {
        p[t] = n = l(t);
      }
      return n;
    }
    function o(e) {
      if (c) {
        undefined;
      } else {
        u(false);
      }
      return new c(e.type, e.props);
    }
    function a(e) {
      return new d(e);
    }
    function i(e) {
      return e instanceof d;
    }
    var s = n(3);
    var u = n(1);
    var l = null;
    var c = null;
    var p = {};
    var d = null;
    var f = {
      injectGenericComponentClass: function (e) {
        c = e;
      },
      injectTextComponentClass: function (e) {
        d = e;
      },
      injectComponentClasses: function (e) {
        s(p, e);
      }
    };
    var h = {
      getComponentClassForElement: r,
      createInternalComponent: o,
      createInstanceForText: a,
      isTextComponent: i,
      injection: f
    };
    e.exports = h;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {}
    n(4);
    var o = {
      isMounted: function (e) {
        return false;
      },
      enqueueCallback: function (e, t) {},
      enqueueForceUpdate: function (e) {
        r(e, "forceUpdate");
      },
      enqueueReplaceState: function (e, t) {
        r(e, "replaceState");
      },
      enqueueSetState: function (e, t) {
        r(e, "setState");
      },
      enqueueSetProps: function (e, t) {
        r(e, "setProps");
      },
      enqueueReplaceProps: function (e, t) {
        r(e, "replaceProps");
      }
    };
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      function t(t, n, r, o, a, i) {
        o = o || C;
        i = i || r;
        if (n[r] == null) {
          var s = b[a];
          if (t) {
            return new Error("Required " + s + " `" + i + "` was not specified in " + ("`" + o + "`."));
          } else {
            return null;
          }
        }
        return e(n, r, o, a, i);
      }
      var n = t.bind(null, false);
      n.isRequired = t.bind(null, true);
      return n;
    }
    function o(e) {
      function t(t, n, r, o, a) {
        var i = t[n];
        var s = m(i);
        if (s !== e) {
          var u = b[o];
          var l = v(i);
          return new Error("Invalid " + u + " `" + a + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."));
        }
        return null;
      }
      return r(t);
    }
    function a() {
      return r(E.thatReturns(null));
    }
    function i(e) {
      function t(t, n, r, o, a) {
        var i = t[n];
        if (!Array.isArray(i)) {
          var s = b[o];
          var u = m(i);
          return new Error("Invalid " + s + " `" + a + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected an array."));
        }
        for (var l = 0; l < i.length; l++) {
          var c = e(i, l, r, o, a + "[" + l + "]", "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          if (c instanceof Error) {
            return c;
          }
        }
        return null;
      }
      return r(t);
    }
    function s() {
      function e(e, t, n, r, o) {
        if (!g.isValidElement(e[t])) {
          var a = b[r];
          return new Error("Invalid " + a + " `" + o + "` supplied to " + ("`" + n + "`, expected a single ReactElement."));
        }
        return null;
      }
      return r(e);
    }
    function u(e) {
      function t(t, n, r, o, a) {
        if (!(t[n] instanceof e)) {
          var i = b[o];
          var s = e.name || C;
          var u = y(t[n]);
          return new Error("Invalid " + i + " `" + a + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected ") + ("instance of `" + s + "`."));
        }
        return null;
      }
      return r(t);
    }
    function l(e) {
      function t(t, n, r, o, a) {
        var i = t[n];
        for (var s = 0; s < e.length; s++) {
          if (i === e[s]) {
            return null;
          }
        }
        var u = b[o];
        var l = JSON.stringify(e);
        return new Error("Invalid " + u + " `" + a + "` of value `" + i + "` " + ("supplied to `" + r + "`, expected one of " + l + "."));
      }
      return r(Array.isArray(e) ? t : function () {
        return new Error("Invalid argument supplied to oneOf, expected an instance of array.");
      });
    }
    function c(e) {
      function t(t, n, r, o, a) {
        var i = t[n];
        var s = m(i);
        if (s !== "object") {
          var u = b[o];
          return new Error("Invalid " + u + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected an object."));
        }
        for (var l in i) {
          if (i.hasOwnProperty(l)) {
            var c = e(i, l, r, o, a + "." + l, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            if (c instanceof Error) {
              return c;
            }
          }
        }
        return null;
      }
      return r(t);
    }
    function p(e) {
      function t(t, n, r, o, a) {
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          if (s(t, n, r, o, a, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED") == null) {
            return null;
          }
        }
        var u = b[o];
        return new Error("Invalid " + u + " `" + a + "` supplied to " + ("`" + r + "`."));
      }
      return r(Array.isArray(e) ? t : function () {
        return new Error("Invalid argument supplied to oneOfType, expected an instance of array.");
      });
    }
    function d() {
      function e(e, t, n, r, o) {
        if (!h(e[t])) {
          var a = b[r];
          return new Error("Invalid " + a + " `" + o + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
        }
        return null;
      }
      return r(e);
    }
    function f(e) {
      function t(t, n, r, o, a) {
        var i = t[n];
        var s = m(i);
        if (s !== "object") {
          var u = b[o];
          return new Error("Invalid " + u + " `" + a + "` of type `" + s + "` " + ("supplied to `" + r + "`, expected `object`."));
        }
        for (var l in e) {
          var c = e[l];
          if (c) {
            var p = c(i, l, r, o, a + "." + l, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            if (p) {
              return p;
            }
          }
        }
        return null;
      }
      return r(t);
    }
    function h(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e)) {
            return e.every(h);
          }
          if (e === null || g.isValidElement(e)) {
            return true;
          }
          var t = w(e);
          if (!t) {
            return false;
          }
          var n;
          var r = t.call(e);
          if (t !== e.entries) {
            while (!(n = r.next()).done) {
              if (!h(n.value)) {
                return false;
              }
            }
          } else {
            while (!(n = r.next()).done) {
              var o = n.value;
              if (o && !h(o[1])) {
                return false;
              }
            }
          }
          return true;
        default:
          return false;
      }
    }
    function m(e) {
      var t = typeof e;
      if (Array.isArray(e)) {
        return "array";
      } else if (e instanceof RegExp) {
        return "object";
      } else {
        return t;
      }
    }
    function v(e) {
      var t = m(e);
      if (t === "object") {
        if (e instanceof Date) {
          return "date";
        }
        if (e instanceof RegExp) {
          return "regexp";
        }
      }
      return t;
    }
    function y(e) {
      if (e.constructor && e.constructor.name) {
        return e.constructor.name;
      } else {
        return "<<anonymous>>";
      }
    }
    var g = n(8);
    var b = n(37);
    var E = n(9);
    var w = n(58);
    var C = "<<anonymous>>";
    var _ = {
      array: o("array"),
      bool: o("boolean"),
      func: o("function"),
      number: o("number"),
      object: o("object"),
      string: o("string"),
      any: a(),
      arrayOf: i,
      element: s(),
      instanceOf: u,
      node: d(),
      objectOf: c,
      oneOf: l,
      oneOfType: p,
      shape: f
    };
    e.exports = _;
  }, function (e, t) {
    "use strict";

    var n = {
      injectCreateReactRootIndex: function (e) {
        r.createReactRootIndex = e;
      }
    };
    var r = {
      createReactRootIndex: null,
      injection: n
    };
    e.exports = r;
  }, function (e, t) {
    "use strict";

    var n = {
      currentScrollLeft: 0,
      currentScrollTop: 0,
      refreshScrollValues: function (e) {
        n.currentScrollLeft = e.x;
        n.currentScrollTop = e.y;
      }
    };
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (t == null) {
        o(false);
      } else {
        undefined;
      }
      if (e == null) {
        return t;
      }
      var n = Array.isArray(e);
      var r = Array.isArray(t);
      if (n && r) {
        e.push.apply(e, t);
        return e;
      } else if (n) {
        e.push(t);
        return e;
      } else if (r) {
        return [e].concat(t);
      } else {
        return [e, t];
      }
    }
    var o = n(1);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      var r = e;
      var o = r[n] === undefined;
      if (o && t != null) {
        r[n] = t;
      }
    }
    function o(e) {
      if (e == null) {
        return e;
      }
      var t = {};
      a(e, r, t);
      return t;
    }
    var a = n(63);
    n(4);
    e.exports = o;
  }, function (e, t) {
    "use strict";

    function n(e, t, n) {
      if (Array.isArray(e)) {
        e.forEach(t, n);
      } else if (e) {
        t.call(n, e);
      }
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (!a && o.canUseDOM) {
        a = "textContent" in document.documentElement ? "textContent" : "innerText";
      }
      return a;
    }
    var o = n(5);
    var a = null;
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && r[e.type] || t === "textarea");
    }
    var r = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (o.isValidElement(e)) {
        undefined;
      } else {
        a(false);
      }
      return e;
    }
    var o = n(8);
    var a = n(1);
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      if (t.length === 0) {
        return function (e) {
          return e;
        };
      } else if (t.length === 1) {
        return t[0];
      } else {
        return t.reduce(function (e, t) {
          return function () {
            return e(t.apply(undefined, arguments));
          };
        });
      }
    }
    t.__esModule = true;
    t.default = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t, n) {
      function r() {
        if (y === v) {
          y = v.slice();
        }
      }
      function a() {
        return m;
      }
      function s(e) {
        if (typeof e != "function") {
          throw new Error("Expected listener to be a function.");
        }
        var t = true;
        r();
        y.push(e);
        return function () {
          if (t) {
            t = false;
            r();
            var n = y.indexOf(e);
            y.splice(n, 1);
          }
        };
      }
      function c(e) {
        if (!(0, i.default)(e)) {
          throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        }
        if (typeof e.type == "undefined") {
          throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
        }
        if (g) {
          throw new Error("Reducers may not dispatch actions.");
        }
        try {
          g = true;
          m = h(m, e);
        } finally {
          g = false;
        }
        for (var t = v = y, n = 0; n < t.length; n++) {
          var r = t[n];
          r();
        }
        return e;
      }
      function p(e) {
        if (typeof e != "function") {
          throw new Error("Expected the nextReducer to be a function.");
        }
        h = e;
        c({
          type: l.INIT
        });
      }
      function d() {
        var e;
        var t = s;
        e = {
          subscribe: function (e) {
            function n() {
              if (e.next) {
                e.next(a());
              }
            }
            if (typeof e != "object") {
              throw new TypeError("Expected the observer to be an object.");
            }
            n();
            var r = t(n);
            return {
              unsubscribe: r
            };
          }
        };
        e[u.default] = function () {
          return this;
        };
        return e;
      }
      var f;
      if (typeof t == "function" && typeof n == "undefined") {
        n = t;
        t = undefined;
      }
      if (typeof n != "undefined") {
        if (typeof n != "function") {
          throw new Error("Expected the enhancer to be a function.");
        }
        return n(o)(e, t);
      }
      if (typeof e != "function") {
        throw new Error("Expected the reducer to be a function.");
      }
      var h = e;
      var m = t;
      var v = [];
      var y = v;
      var g = false;
      c({
        type: l.INIT
      });
      f = {
        dispatch: c,
        subscribe: s,
        getState: a,
        replaceReducer: p
      };
      f[u.default] = d;
      return f;
    }
    t.__esModule = true;
    t.ActionTypes = undefined;
    t.default = o;
    var a = n(44);
    var i = r(a);
    var s = n(275);
    var u = r(s);
    var l = t.ActionTypes = {
      INIT: "@@redux/INIT"
    };
  }, function (e, t) {
    "use strict";

    function n(e) {
      if (typeof console != "undefined" && typeof console.error == "function") {
        console.error(e);
      }
      try {
        throw new Error(e);
      } catch (e) {}
    }
    t.__esModule = true;
    t.default = n;
  }, function (e, t) {
    (function (e, t, n) {
      "use strict";

      function r(e) {
        if (e) {
          e.setTargetAtTime ||= e.setTargetValueAtTime;
        }
      }
      if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
        window.AudioContext = webkitAudioContext;
        if (!AudioContext.prototype.hasOwnProperty("createGain")) {
          AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
        }
        if (!AudioContext.prototype.hasOwnProperty("createDelay")) {
          AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
        }
        if (!AudioContext.prototype.hasOwnProperty("createScriptProcessor")) {
          AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
        }
        if (!AudioContext.prototype.hasOwnProperty("createPeriodicWave")) {
          AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
        }
        AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
        AudioContext.prototype.createGain = function () {
          var e = this.internal_createGain();
          r(e.gain);
          return e;
        };
        AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
        AudioContext.prototype.createDelay = function (e) {
          var t = e ? this.internal_createDelay(e) : this.internal_createDelay();
          r(t.delayTime);
          return t;
        };
        AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
        AudioContext.prototype.createBufferSource = function () {
          var e = this.internal_createBufferSource();
          if (e.start) {
            e.internal_start = e.start;
            e.start = function (t, n, r) {
              if (typeof r != "undefined") {
                e.internal_start(t || 0, n, r);
              } else {
                e.internal_start(t || 0, n);
              }
            };
          } else {
            e.start = function (e, t, n) {
              if (t || n) {
                this.noteGrainOn(e || 0, t, n);
              } else {
                this.noteOn(e || 0);
              }
            };
          }
          if (e.stop) {
            e.internal_stop = e.stop;
            e.stop = function (t) {
              e.internal_stop(t || 0);
            };
          } else {
            e.stop = function (e) {
              this.noteOff(e || 0);
            };
          }
          r(e.playbackRate);
          return e;
        };
        AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
        AudioContext.prototype.createDynamicsCompressor = function () {
          var e = this.internal_createDynamicsCompressor();
          r(e.threshold);
          r(e.knee);
          r(e.ratio);
          r(e.reduction);
          r(e.attack);
          r(e.release);
          return e;
        };
        AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
        AudioContext.prototype.createBiquadFilter = function () {
          var e = this.internal_createBiquadFilter();
          r(e.frequency);
          r(e.detune);
          r(e.Q);
          r(e.gain);
          return e;
        };
        if (AudioContext.prototype.hasOwnProperty("createOscillator")) {
          AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
          AudioContext.prototype.createOscillator = function () {
            var e = this.internal_createOscillator();
            if (e.start) {
              e.internal_start = e.start;
              e.start = function (t) {
                e.internal_start(t || 0);
              };
            } else {
              e.start = function (e) {
                this.noteOn(e || 0);
              };
            }
            if (e.stop) {
              e.internal_stop = e.stop;
              e.stop = function (t) {
                e.internal_stop(t || 0);
              };
            } else {
              e.stop = function (e) {
                this.noteOff(e || 0);
              };
            }
            e.setPeriodicWave ||= e.setWaveTable;
            r(e.frequency);
            r(e.detune);
            return e;
          };
        }
      }
      if (window.hasOwnProperty("webkitOfflineAudioContext") && !window.hasOwnProperty("OfflineAudioContext")) {
        window.OfflineAudioContext = webkitOfflineAudioContext;
      }
    })(window);
  }, function (e, t) {
    "use strict";

    function n() {
      return {
        type: "audioLoading"
      };
    }
    function r(e) {
      return {
        type: "audioLoaded",
        dataHash: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.audioLoading = n;
    t.audioLoaded = r;
  }, function (e, t) {
    "use strict";

    function n() {
      return {
        type: "addMark",
        markType: "mark"
      };
    }
    function r() {
      return {
        type: "addMark",
        markType: "beat"
      };
    }
    function o(e) {
      return {
        type: "removeMark",
        id: e
      };
    }
    function a(e, t) {
      var n = t.markedForDeletion;
      var r = t.time;
      var o = t.label;
      return {
        type: "updateMark",
        id: e,
        time: r,
        label: o,
        markedForDeletion: n
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.addMark = n;
    t.addBeat = r;
    t.removeMark = o;
    t.updateMark = a;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return function (t, n) {
        if (!["gold", "silver"].includes(n().auth.plan) && e < 50) {
          t(r(50));
          t((0, p.gatherRegistration)("Slow down to 25% and more!"));
          return;
        } else {
          t({
            type: "setTempo",
            tempo: e
          });
          return;
        }
      };
    }
    function o(e) {
      return {
        type: "changeFile",
        filename: e
      };
    }
    function a(e) {
      return {
        type: "setPlaybackTime",
        time: e
      };
    }
    function i(e, t) {
      return {
        type: "setPitch",
        amount: e,
        value: t
      };
    }
    function s(e) {
      return {
        type: "setVolume",
        volume: e
      };
    }
    function u(e, t) {
      return function (n, r) {
        if (["gold"].includes(r().auth.plan)) {
          n({
            type: "changePitch",
            amount: e,
            value: t
          });
          return;
        } else {
          n((0, p.gatherRegistration)("Change pitch and more!"));
          return;
        }
      };
    }
    function l(e) {
      return function (t, n) {
        if (["gold", "silver"].includes(n().auth.plan)) {
          t({
            type: "setDelay",
            seconds: e
          });
          return;
        } else {
          t((0, p.gatherRegistration)("Delay start and more!"));
          return;
        }
      };
    }
    function c(e) {
      return {
        type: "changePlayStatus",
        isPlaying: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.setTempo = r;
    t.changeFile = o;
    t.setPlaybackTime = a;
    t.setPitch = i;
    t.setVolume = s;
    t.changePitch = u;
    t.setDelay = l;
    t.changePlayStatus = c;
    var p = n(22);
  }, function (e, t) {
    "use strict";

    function n(e) {
      return {
        type: "setZoom",
        level: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.zoom = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.state = {
          placementId: null
        };
      }
      a(t, e);
      i(t, [{
        key: "componentDidMount",
        value: function () {
          if (window.CHITIKA === undefined) {
            window.CHITIKA = {
              units: []
            };
          }
          var e = {
            calltype: "async[2]",
            publisher: "portnine",
            width: 300,
            height: 600,
            sid: "Chitika Default"
          };
          var t = window.CHITIKA.units.length;
          window.CHITIKA.units.push(e);
          this.setState({
            placementId: t
          });
          setTimeout(function () {
            var e = document.createElement("script");
            e.src = "//cdn.chitika.net/getads.js";
            e.async = true;
            document.body.appendChild(e);
          }, 500);
        }
      }, {
        key: "render",
        value: function () {
          if (this.state.placementId === null) {
            return l.default.createElement("div", {
              "data-blar2": "234"
            });
          } else {
            return l.default.createElement("div", null, l.default.createElement("script", {
              type: "text/javascript",
              src: "",
              async: true
            }), l.default.createElement("div", {
              "data-blar": "1234",
              id: "chitikaAdBlock-" + this.state.placementId
            }));
          }
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = c;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    };
    var a = n(2);
    var i = r(a);
    var s = i.default.createClass({
      displayName: "BlurInput",
      propTypes: {
        onChange: i.default.PropTypes.func.isRequired
      },
      getInitialState: function () {
        return {
          value: this.props.value
        };
      },
      render: function () {
        return i.default.createElement("input", o({}, this.props, {
          type: "text",
          value: this.state.value,
          onChange: this.handleChange,
          onBlur: this.handleBlur
        }));
      },
      componentWillReceiveProps: function (e) {
        this.setState({
          value: e.value
        });
      },
      handleChange: function (e) {
        this.setState({
          value: e.target.value
        });
      },
      handleBlur: function (e) {
        this.props.onChange(e.target.value);
      }
    });
    t.default = s;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(203);
    var p = r(c);
    var d = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
      }
      a(t, e);
      i(t, [{
        key: "shouldComponentUpdate",
        value: function (e) {
          return this.props.items != e.items;
        }
      }, {
        key: "render",
        value: function () {
          var e = this.props.items || [];
          var t = e.map(function (e) {
            var t = "label label-" + e.className;
            return l.default.createElement("li", {
              className: "card",
              onClick: function (t) {
                e.select();
                t.preventDefault();
              },
              key: e.key
            }, l.default.createElement("a", {
              href: "#",
              onClick: function (t) {
                e.remove();
                t.preventDefault();
                t.stopPropagation();
              },
              className: "close"
            }, String.fromCharCode(215)), l.default.createElement("div", {
              className: t
            }, e.title), l.default.createElement("div", {
              className: "caption"
            }, e.line1), l.default.createElement("div", {
              className: "time"
            }, e.line2));
          });
          return l.default.createElement("ul", {
            className: "cards"
          }, l.default.createElement(p.default, {
            transitionName: "card",
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 200
          }, t));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = d;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(6);
    var p = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.state = {
          currentTime: 0
        };
        this.throttledSetCurrentTime = (0, c.throttle)(this.setCurrentTime, 1000 / 15, this);
      }
      a(t, e);
      i(t, [{
        key: "componentWillReceiveProps",
        value: function (e) {
          this.update(e);
          this.setCurrentTime(e);
        }
      }, {
        key: "update",
        value: function (e) {
          var t = this;
          (0, c.cancelAnimationFrame)(this.frameId);
          e = e || this.props;
          this.throttledSetCurrentTime(e);
          if (e.isPlaying) {
            this.frameId = (0, c.requestAnimationFrame)(function () {
              return t.update();
            });
          }
        }
      }, {
        key: "setCurrentTime",
        value: function (e) {
          this.setState({
            currentTime: e.getCurrentTime()
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = (0, c.formatTime)(this.state.currentTime, true);
          return l.default.createElement("div", {
            className: "currentTime"
          }, e);
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = p;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(31);
    var p = r(c);
    var d = n(6);
    var f = function (e) {
      function t() {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      a(t, e);
      i(t, [{
        key: "save",
        value: function () {
          this.props.onSave({
            label: this.refs.label.value
          });
        }
      }, {
        key: "removeMark",
        value: function () {
          this.props.onRemoveMark(this.props.mark.id);
          this.props.onCancel();
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props.mark.type === "beat";
          var n = l.default.createElement("h4", {
            className: "modal-title",
            id: "myModalLabel"
          }, "Edit ", this.props.mark.type);
          var r = l.default.createElement("div", null, l.default.createElement("button", {
            type: "button",
            className: "btn btn-default",
            onClick: function () {
              return e.removeMark();
            },
            "data-dismiss": "modal",
            "data-bind": "click:deleteMark"
          }, "Delete ", this.props.mark.type), l.default.createElement("button", {
            type: "submit",
            className: "btn btn-primary"
          }, "Save changes"));
          return l.default.createElement(p.default, {
            isOpen: this.props.isOpen,
            onClose: function () {
              return e.props.onCancel();
            },
            onSubmit: function () {
              return e.save();
            },
            header: n,
            footer: r,
            focusElement: function () {
              return e.refs.label;
            }
          }, l.default.createElement("div", {
            className: "form-group",
            style: {
              display: (0, d.display)(!t)
            }
          }, l.default.createElement("label", null, "Label"), l.default.createElement("input", {
            ref: "label",
            type: "text",
            className: "form-control",
            defaultValue: this.props.mark.label
          })));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = f;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      }
      var t = {};
      if (e != null) {
        for (var n in e) {
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            t[n] = e[n];
          }
        }
      }
      t.default = e;
      return t;
    }
    function o(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function a(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function i(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function u(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var l = n(2);
    var c = o(l);
    n(34);
    var p = n(31);
    var d = o(p);
    var f = n(22);
    r(f);
    function h(e, t) {
      return c.default.createElement("div", null, c.default.createElement("h2", {
        className: "question"
      }, e), c.default.createElement("p", {
        className: "answer"
      }, t));
    }
    var m = function (e) {
      function t() {
        a(this, t);
        u(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      i(t, e);
      s(t, [{
        key: "close",
        value: function () {
          this.props.onClose();
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = ["comments", "tunetranscriber.com"].join("@");
          return c.default.createElement(d.default, {
            isOpen: this.props.isOpen,
            onClose: function () {
              return e.close();
            },
            style: {
              content: {
                maxWidth: "800px",
                width: "100%"
              }
            },
            footer: c.default.createElement("button", {
              className: "btn btn-primary",
              onClick: function () {
                return e.close();
              }
            }, "Close")
          }, h("How can I preserve my progress?", "Unlock the ability to save your work and access additional features by upgrading to TuneTranscriber Pro. Once upgraded, simply load a song and your progress will be saved automatically."), h("I've already paid for the service, but my work isn't saving. What's wrong?", "Your work should automatically save when you're logged in, and it should reload when you open the same MP3 file or YouTube video. If this isn't functioning correctly, ensure you are signed in, indicated by the presence of 'Log out' in the top right corner."), h("I need something else.", t));
        }
      }]);
      return t;
    }(c.default.Component);
    t.default = m;
    e.exports = t.default;
  }, function (t, n, r) {
    "use strict";

    function o(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function a(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function i(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function u(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var l = r(2);
    var c = o(l);
    var p = function (t) {
      function n(e) {
        a(this, n);
        u(Object.getPrototypeOf(n.prototype), "constructor", this).call(this, e);
        this.state = {
          isDragging: false
        };
      }
      i(n, t);
      s(n, [{
        key: "componentDidMount",
        value: function () {
          this.setupFileDrop();
        }
      }, {
        key: "setupFileDrop",
        value: function () {
          var t = this;
          var n = this.refs.landing;
          var r = this.refs.dropmask;
          n.addEventListener("dragover", function (e) {
            t.setState({
              isDragging: true
            });
            e.preventDefault();
          });
          r.addEventListener("dragleave", function () {
            this.setState({
              isDragging: false
            });
            e.preventDefault();
          });
          r.addEventListener("drop", function (e, n) {
            t.setState({
              isDragging: false
            });
            t.props.onDropFile(e);
            e.preventDefault();
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this.state.isDragging ? "drag" : "";
          return c.default.createElement("div", {
            ref: "landing",
            id: "landing",
            className: "hidden-audio-loaded " + e
          }, c.default.createElement("div", {
            className: "container"
          }, c.default.createElement("div", {
            className: "hero-cont"
          }, c.default.createElement("div", {
            className: "hero"
          }, c.default.createElement("h1", {
            className: "title"
          }, c.default.createElement("span", {
            className: "bb"
          }, "Transcribe"), " music ", c.default.createElement("span", {
            style: {
              display: "block",
              paddingTop: "20px"
            }
          }, "like a pro.")), c.default.createElement("h2", {
            className: "tagline",
            style: {
              marginBottom: "1.5em"
            }
          }, "Slow down your favorite songs so you can learn how they are played."), c.default.createElement("button", {
            className: "btn btn-primary btn-lg",
            onClick: this.props.onChooseAudio
          }, "Load an MP3"), " ", c.default.createElement("button", {
            className: "btn btn-primary btn-lg",
            onClick: this.props.onChooseVideo
          }, "Load a YouTube Video")), c.default.createElement("div", {
            id: "screenshot",
            className: "main-img"
          }, c.default.createElement("img", {
            src: "screenshot.png"
          })))), c.default.createElement("div", {
            className: "lightbox visible-drag"
          }, c.default.createElement("p", {
            className: "message"
          }, "Drop file to load song..."), c.default.createElement("div", {
            ref: "dropmask",
            className: "dropmask"
          })), c.default.createElement("div", {
            className: "lightbox visible-audio-loading"
          }, c.default.createElement("div", {
            className: "message"
          }, "Loading audio...", c.default.createElement("br", null), c.default.createElement("div", {
            className: "gps_ring"
          }), c.default.createElement("div", {
            className: "gps_ring"
          }), c.default.createElement("div", {
            className: "gps_ring"
          }))));
        }
      }]);
      return n;
    }(c.default.Component);
    n.default = p;
    t.exports = n.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(19);
    r(c);
    var p = n(124);
    var d = r(p);
    var f = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.marks = e.marks;
        this.type = e.type;
        this.element = e.element;
        this.dragState = null;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.state = {
          marks: [],
          currentMark: null,
          audioDuration: null
        };
      }
      a(t, e);
      i(t, [{
        key: "componentDidMount",
        value: function () {
          document.addEventListener("mousemove", this.onMouseMove);
          document.addEventListener("mouseup", this.onMouseUp);
        }
      }, {
        key: "componentDidUnMount",
        value: function () {
          document.removeEventListener("mousemove", this.onMouseMove);
          document.removeEventListener("mouseup", this.onMouseUp);
        }
      }, {
        key: "onMouseDown",
        value: function (e, t) {
          var n = t.time - this.pos(e) / this.props.width;
          this.dragState = {
            isMouseDown: true,
            isDragging: false,
            markId: t.id,
            markedForDeletion: null,
            time: null,
            markTarget: e.target,
            originalY: e.pageY,
            diff: n
          };
        }
      }, {
        key: "onMouseMove",
        value: function (e) {
          var t = this.dragState;
          if (t && t.isMouseDown) {
            t.isDragging = true;
            t.time = this.pos(e) / this.props.width + t.diff;
            t.markedForDeletion = Math.abs(e.pageY - this.dragState.originalY) > 100;
            this.props.onMarkChanged(t.markId, {
              time: t.time,
              markedForDeletion: t.markedForDeletion
            });
          }
        }
      }, {
        key: "onMouseUp",
        value: function (e) {
          if (this.dragState && this.dragState.isMouseDown) {
            if (this.dragState.markedForDeletion) {
              this.props.onRemoveMark(this.dragState.markId);
            }
            this.dragState = null;
          }
        }
      }, {
        key: "pos",
        value: function (e) {
          var t = 0;
          var n = e.pageX - t + e.target.parentNode.scrollLeft;
          return n;
        }
      }, {
        key: "shouldComponentUpdate",
        value: function (e, t) {
          return this.props.width !== e.width || this.props.marks !== e.marks || this.state !== t;
        }
      }, {
        key: "updateLabel",
        value: function (e, t) {
          this.setState({
            currentMark: null
          });
          var n = Object.assign({}, e, {
            label: t
          });
          this.props.onMarkChanged(e.id, n);
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props.type;
          var n = this.props.marks.filter(function (t) {
            return t.type === e.props.type && !t.markedForDeletion;
          }).map(function (n) {
            var r = n.time * e.props.width;
            return l.default.createElement("div", {
              style: {
                left: r
              },
              key: n.id,
              className: t,
              onDoubleClick: function (t) {
                return e.setState({
                  currentMark: n
                });
              },
              onMouseDown: function (t) {
                return e.onMouseDown(t, n);
              }
            }, l.default.createElement("label", null, n.label));
          }.bind(this));
          var r = null;
          if (this.state.currentMark) {
            var o = this.state.currentMark;
            if (o) {
              o.label;
            } else {
              null;
            }
            var a = o != null;
            r = l.default.createElement(d.default, {
              isOpen: a,
              onSave: function (t) {
                return e.updateLabel(o, t.label);
              },
              onCancel: function () {
                return e.setState({
                  currentMark: null
                });
              },
              mark: o,
              onRemoveMark: this.props.onRemoveMark
            });
          }
          return l.default.createElement("div", {
            className: this.props.className + " mark-panel",
            onselectstart: function () {
              return false;
            },
            unselectable: "on",
            style: {
              MozUserSelect: false
            }
          }, r, n);
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = f;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.state = {};
      }
      a(t, e);
      i(t, [{
        key: "mouseEvent",
        value: function (e, t) {
          var n = this.refs.main;
          if (!this.mouseEventing) {
            this.mouseEventing = true;
            for (var r = 1; r < n.childNodes.length; r++) {
              var o = new MouseEvent(t.type, t.nativeEvent);
              var a = n.childNodes[r].dispatchEvent(o);
              if (!a) {
                break;
              }
            }
            this.mouseEventing = false;
            t.stopPropagation();
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return l.default.createElement("div", {
            ref: "main",
            className: "mouse-container",
            style: {
              height: this.props.height
            }
          }, l.default.createElement("div", {
            className: "overlay",
            style: {
              height: this.props.height,
              zIndex: 39,
              width: this.props.width
            },
            onClick: function (t) {
              return e.mouseEvent("onMouseClick", t);
            },
            onMouseUp: function (t) {
              return e.mouseEvent("onMouseUp", t);
            },
            onMouseDown: function (t) {
              return e.mouseEvent("onMouseDown", t);
            },
            onDoubleClick: function (t) {
              return e.mouseEvent("onMouseDoubleClick", t);
            },
            onMouseEnter: function (t) {
              return e.mouseEvent("onMouseEnter", t);
            },
            onMouseLeave: function (t) {
              return e.mouseEvent("onMouseLeave", t);
            },
            onMouseMove: function (t) {
              return e.mouseEvent("onMouseMove", t);
            }
          }), this.props.children);
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = c;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e) {
      var t = e.isLoggedIn ? i.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          t.preventDefault();
          e.onLogout();
        }
      }, "Log out") : i.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          t.preventDefault();
          e.onLogin();
        }
      }, "Log in");
      return i.default.createElement("nav", {
        className: "navbar navbar-default",
        role: "navigation"
      }, i.default.createElement("script", {
        src: "https://cdn.auth0.com/js/lock/11.0.1/lock.min.js"
      }), i.default.createElement("div", {
        className: "navbar-header"
      }, i.default.createElement("button", {
        type: "button",
        className: "navbar-toggle",
        "data-toggle": "collapse",
        "data-target": ".navbar-ex1-collapse"
      }, i.default.createElement("span", {
        className: "sr-only"
      }, "Toggle navigation"), i.default.createElement("span", null, "Menu")), i.default.createElement("a", {
        className: "navbar-brand",
        href: "#"
      }, i.default.createElement("img", {
        src: "logo-blueblock.png"
      }))), i.default.createElement("div", {
        className: "collapse navbar-collapse navbar-ex1-collapse"
      }, i.default.createElement("ul", {
        className: "nav navbar-nav navbar-right"
      }, i.default.createElement("li", {
        className: "visible-audio-loaded"
      }, i.default.createElement("input", {
        type: "file",
        className: "hidden",
        id: "files",
        name: "files",
        onChange: e.onFileSelect
      }), i.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          t.preventDefault();
          e.onChooseAudio();
        }
      }, "Choose Audio")), i.default.createElement("li", null, i.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          t.preventDefault();
          e.onHelp();
        }
      }, "Help")), i.default.createElement("li", null, t))));
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.default = o;
    var a = n(2);
    var i = r(a);
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(19);
    var p = r(c);
    var d = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.state = {
          isOpen: true
        };
      }
      a(t, e);
      i(t, [{
        key: "close",
        value: function () {
          this.setState({
            isOpen: false
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return l.default.createElement(p.default, {
            isOpen: this.props.isOpen && this.state.isOpen,
            onRequestClose: function () {
              return e.close();
            },
            className: "Modal__Bootstrap modal-dialog modal-sm"
          }, l.default.createElement("div", {
            className: "modal-content"
          }, l.default.createElement("div", {
            className: "modal-header"
          }, l.default.createElement("button", {
            type: "button",
            className: "close",
            onClick: function () {
              return e.close();
            }
          }, String.fromCharCode(215)), l.default.createElement("h4", {
            className: "modal-title"
          }, "Browser not supported")), l.default.createElement("div", {
            className: "modal-body"
          }, l.default.createElement("p", null, "Unfortunately your browser doesn't support the functions needed to load music from your computer."), l.default.createElement("p", null, "Try running the latest version of Google Chrome browser or Firefox to enable all functionality. You can download it ", l.default.createElement("a", {
            href: "http://www.google.com/chrome",
            target: "blank"
          }, "here"), "."), l.default.createElement("p", null, "You can still load videos from YouTube."), l.default.createElement("p", {
            className: "text-right"
          }, l.default.createElement("button", {
            className: "btn btn-primary",
            onClick: function () {
              return e.close();
            }
          }, "Ok")))));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = d;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(121);
    var p = r(c);
    var d = n(6);
    var f = function (e) {
      function t() {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      a(t, e);
      i(t, [{
        key: "render",
        value: function () {
          var e = this;
          return l.default.createElement("div", {
            className: "group",
            style: {
              paddingTop: ".5em",
              display: (0, d.display)(this.props.visible)
            }
          }, l.default.createElement("div", {
            className: "btn-spinner"
          }, l.default.createElement("p", null, "Octives"), l.default.createElement("button", {
            className: "btn btn-sm btn-default",
            onClick: function () {
              return e.props.onChangePitch(-1, "octives");
            }
          }, "−"), l.default.createElement(p.default, {
            type: "text",
            value: this.props.octives,
            onChange: function (t) {
              return e.props.onSetPitch(parseInt(t), "octives");
            }
          }), l.default.createElement("button", {
            className: "btn btn-sm btn-default",
            onClick: function () {
              return e.props.onChangePitch(1, "octives");
            }
          }, "+")), l.default.createElement("div", {
            className: "btn-spinner"
          }, l.default.createElement("p", null, "Semitones"), l.default.createElement("button", {
            className: "btn btn-sm btn-default",
            onClick: function () {
              return e.props.onChangePitch(-1, "semitones");
            }
          }, "−"), l.default.createElement(p.default, {
            type: "text",
            value: this.props.semitones,
            onChange: function (t) {
              return e.props.onSetPitch(parseInt(t), "semitones");
            }
          }), l.default.createElement("button", {
            className: "btn btn-sm btn-default",
            onClick: function () {
              return e.props.onChangePitch(1, "semitones");
            }
          }, "+")), l.default.createElement("div", {
            className: "btn-spinner"
          }, l.default.createElement("p", null, "Cents"), l.default.createElement("button", {
            className: "btn btn-sm btn-default",
            onClick: function () {
              return e.props.onChangePitch(-1, "cents");
            }
          }, "−"), l.default.createElement(p.default, {
            type: "text",
            value: this.props.cents,
            onChange: function (t) {
              return e.props.onSetPitch(parseInt(t), "cents");
            }
          }), l.default.createElement("button", {
            className: "btn btn-sm btn-default",
            onClick: function () {
              return e.props.onChangePitch(1, "cents");
            }
          }, "+")), l.default.createElement("div", {
            className: "clearfix"
          }));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = f;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = function (e) {
      function t() {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      a(t, e);
      i(t, [{
        key: "setDelay",
        value: function (e, t) {
          this.props.onSetDelay(t);
          e.preventDefault();
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = null;
          if (this.props.showSaveNotification) {
            t = l.default.createElement("div", {
              className: "btn-group pull-left",
              style: {
                marginTop: ".5em",
                marginLeft: ".5em"
              }
            }, l.default.createElement("button", {
              onClick: this.props.onShowSaveNotification,
              className: "btn btn-default",
              title: "Save your work"
            }, "Save your work"));
          }
          return l.default.createElement("div", null, l.default.createElement("div", {
            className: "btn-group pull-left",
            style: {
              marginTop: ".5em"
            }
          }, l.default.createElement("button", {
            onClick: this.props.onPlay,
            className: "btn btn-default",
            title: "Hotkey: r"
          }, "Play"), l.default.createElement("button", {
            onClick: this.props.onPause,
            className: "btn btn-default",
            title: "Hotkey: p"
          }, "Pause"), l.default.createElement("div", {
            className: "btn-group"
          }, l.default.createElement("button", {
            type: "button",
            className: "btn btn-default dropdown-toggle",
            "data-toggle": "dropdown"
          }, "Settings"), l.default.createElement("ul", {
            className: "dropdown-menu multi-level",
            role: "menu"
          }, l.default.createElement("li", null, l.default.createElement("a", {
            href: "#",
            className: "",
            onClick: function (t) {
              e.props.onAdjustModeChange("tempo");
              t.preventDefault();
            }
          }, "Adjust Tempo")), l.default.createElement("li", null, l.default.createElement("a", {
            href: "#",
            className: "youtube-hidden",
            onClick: function (t) {
              e.props.onAdjustModeChange("pitch");
              t.preventDefault();
            }
          }, "Adjust Pitch")), null, l.default.createElement("li", {
            className: "divider youtube-hidden"
          }), l.default.createElement("li", {
            className: "dropdown-submenu"
          }, l.default.createElement("a", {
            tabIndex: "-1",
            href: "#"
          }, "Start/Loop Delay"), l.default.createElement("ul", {
            className: "dropdown-menu",
            role: "menu"
          }, l.default.createElement("li", null, l.default.createElement("a", {
            href: "#",
            onClick: function (t) {
              return e.setDelay(t, 0.5);
            }
          }, "½ Second")), l.default.createElement("li", null, l.default.createElement("a", {
            href: "#",
            onClick: function (t) {
              return e.setDelay(t, 1);
            }
          }, "1 Second")), l.default.createElement("li", null, l.default.createElement("a", {
            href: "#",
            onClick: function (t) {
              return e.setDelay(t, 2);
            }
          }, "2 Second")), l.default.createElement("li", null, l.default.createElement("a", {
            href: "#",
            onClick: function (t) {
              return e.setDelay(t, 5);
            }
          }, "5 Second")), l.default.createElement("li", {
            className: "divider"
          }), l.default.createElement("li", null, l.default.createElement("a", {
            href: "#",
            onClick: function (t) {
              return e.setDelay(t, null);
            }
          }, "None"))))))), t);
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = c;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(6);
    var p = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.update = this.update.bind(this);
        this.state = {
          position: 0
        };
        this.throttledSetPosition = (0, c.throttle)(this.setPosition, 1000 / 60, this);
      }
      a(t, e);
      i(t, [{
        key: "onDblClick",
        value: function (e) {
          if (this.props.onDoubleClick) {
            var t = (0, c.relX)(e) / this.props.width;
            this.props.onDoubleClick(t);
            this.setState({
              position: this.props.getPosition()
            });
          }
        }
      }, {
        key: "componentWillReceiveProps",
        value: function (e) {
          this.update(e);
        }
      }, {
        key: "update",
        value: function (e) {
          var t = this;
          (0, c.cancelAnimationFrame)(this.frameId);
          this.throttledSetPosition(e);
          if (e.isPlaying) {
            this.frameId = (0, c.requestAnimationFrame)(function () {
              return t.update(t.props);
            });
          } else {
            this.frameId = null;
          }
        }
      }, {
        key: "setPosition",
        value: function (e) {
          this.setState({
            position: e.getPosition()
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.state.position * this.props.width;
          return l.default.createElement("div", {
            onDoubleClick: function (t) {
              return e.onDblClick(t);
            },
            style: {
              width: this.props.width
            },
            className: this.props.className,
            id: this.props.id,
            height: "224"
          }, l.default.createElement("div", {
            className: "position-line",
            style: {
              left: t
            }
          }));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = p;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      }
      var t = {};
      if (e != null) {
        for (var n in e) {
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            t[n] = e[n];
          }
        }
      }
      t.default = e;
      return t;
    }
    function o(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function a(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function i(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function u(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var l = n(2);
    var c = o(l);
    var p = n(33);
    o(p);
    var d = n(34);
    var f = n(31);
    var h = o(f);
    var m = n(22);
    var v = r(m);
    var y = n(30);
    var g = o(y);
    var b = n(18);
    var E = function (e) {
      function t(e) {
        a(this, t);
        u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.state = {
          regsitered: false,
          paymentType: "paypal"
        };
      }
      i(t, e);
      s(t, [{
        key: "registerWithCreditCard",
        value: function (e) {
          var t = this;
          e.preventDefault();
          function n(e) {
            return t.refs[e].value;
          }
          this.props.dispatch(v.register({
            email: n("email"),
            password: n("password"),
            creditCard: n("creditCard"),
            expires: n("expires"),
            cvc: n("cvc"),
            p: n("p"),
            h: n("h")
          }));
        }
      }, {
        key: "registerWithPaypal",
        value: function (e) {
          return this.props.dispatch(v.registerPaypal(e));
        }
      }, {
        key: "finishRegisterWithPaypal",
        value: function (e) {
          var t = this;
          return this.props.dispatch(v.finishRegisterPaypal(e)).then(function () {
            return t.setState({
              registered: true
            });
          });
        }
      }, {
        key: "close",
        value: function () {
          this.props.dispatch(v.completeRegistration());
        }
      }, {
        key: "renderPaypalButton",
        value: function () {
          var e = this;
          if (!this.refs.paypalButton || !this.refs.paypalButton.firstChild) {
            function t(t) {
              return e.refs[t].value;
            }
            this.props.dispatch;
            var n = this.registerWithPaypal.bind(this);
            var r = this.finishRegisterWithPaypal.bind(this);
            (0, b.loadPaypal)().then(function () {
              paypal.Button.render({
                env: b.paypalEnvironment,
                client: {
                  sandbox: "Abj1sspXb1ZfeNKTjVqPOfus4HwFm0_09-jWinQ_CEpp8DZ1mGerjl0OrIAyQtWyZPB_nQ294oEPVLSG",
                  production: "AWOBR9pZZ550TAA4kSckynTvDwgAgiHqj4MgLN0OORWWe92oqk3sRbsa6H2fig2N0VBuB8CMoew_CAj0"
                },
                payment: function (e, r) {
                  var o = this.props.env;
                  var a = this.props.client;
                  var i = t("p");
                  var s = t("email");
                  var u = t("password");
                  return n({
                    email: s,
                    password: u,
                    env: o,
                    client: a,
                    p: i
                  });
                },
                commit: true,
                onAuthorize: function (e, n) {
                  r({
                    actions: n,
                    email: t("email"),
                    password: t("password")
                  });
                }
              }, e.refs.paypalButton);
            });
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function () {
          this.renderPaypalButton();
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props.isRegistering ? "Upgrading..." : "Upgrade";
          var n = this.props.registrationErrors.map(function (e) {
            return c.default.createElement("li", {
              className: "text-danger",
              key: e
            }, e);
          });
          var r = this.state.regsitered;
          var o = c.default.createElement("h1", {
            style: {
              textAlign: "center",
              fontFamily: "Bangers"
            }
          }, r ? "Welcome!" : this.props.message);
          var a = c.default.createElement("div", null, c.default.createElement("button", {
            type: "button",
            className: "btn btn-default",
            onClick: function () {
              return e.close();
            },
            style: {
              display: this.props.isRegistering ? "none" : "inline"
            }
          }, "Close"));
          return c.default.createElement(h.default, {
            isOpen: this.props.isGatheringRegistration,
            onClose: function () {
              return e.close();
            },
            onSubmit: function (t) {
              return e.registerWithCreditCard(t);
            },
            focusElement: function () {
              return e.refs.email;
            },
            style: {
              content: {
                width: 800,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }
            },
            header: o,
            footer: r ? null : a
          }, r && c.default.createElement("div", null, c.default.createElement("h2", null, "You now have access to all features."), c.default.createElement("button", {
            type: "button",
            onClick: function () {
              return (0, g.default)().login();
            },
            className: "btn btn-primary"
          }, "Log in")), !r && c.default.createElement("div", {
            className: "row upgrade-container"
          }, c.default.createElement("div", {
            className: "col-md-6"
          }, c.default.createElement("div", {
            ref: "stripeContainer"
          }), c.default.createElement("h2", null, "Upgrade to Pro"), c.default.createElement("ul", null, c.default.createElement("li", null, "Save your marks, loops, and other data."), c.default.createElement("li", null, "Slow down songs to 25% tempo."), c.default.createElement("li", null, "No ads."), c.default.createElement("li", null, "Change pitch without changing tempo."), c.default.createElement("li", null, "Save MP3s with pitch and tempo changed."), c.default.createElement("li", null, "Download and play selected loops as MP3s."), c.default.createElement("li", null, "Data saves automatically to our servers.")), c.default.createElement("small", {
            style: {
              color: "#5869FC",
              fontFamily: "Bangers",
              fontSize: "25px"
            }
          }, "Only $", c.default.createElement("span", null, b.price.cents / 100))), c.default.createElement("div", {
            className: "col-md-6"
          }, c.default.createElement("ul", {
            className: "list-unstyled"
          }, n), c.default.createElement("input", {
            ref: "p",
            type: "hidden",
            value: b.price.cents
          }), c.default.createElement("input", {
            ref: "h",
            type: "hidden",
            value: b.price.hash
          }), c.default.createElement("p", null, c.default.createElement("strong", null, "1. Create a username and password")), c.default.createElement("div", {
            className: "form-group"
          }, c.default.createElement("div", {
            className: "row"
          }, c.default.createElement("div", {
            className: "col-md-6"
          }, c.default.createElement("input", {
            ref: "email",
            type: "text",
            className: "form-control",
            placeholder: "Email"
          })), c.default.createElement("div", {
            className: "col-md-6"
          }, c.default.createElement("input", {
            ref: "password",
            type: "password",
            className: "form-control",
            placeholder: "Password"
          })))), c.default.createElement("p", null, c.default.createElement("strong", null, "2. Choose your payment method")), c.default.createElement("div", {
            className: "radio"
          }, c.default.createElement("label", null, c.default.createElement("input", {
            onChange: function (t) {
              return e.setState({
                paymentType: t.target.checked ? "paypal" : "creditcard"
              });
            },
            type: "radio",
            name: "optionsRadios",
            id: "optionsRadios1",
            checked: this.state.paymentType === "paypal"
          }), "Pay with PayPal")), c.default.createElement("div", {
            className: "radio"
          }, c.default.createElement("label", null, c.default.createElement("input", {
            onChange: function (t) {
              return e.setState({
                paymentType: t.target.checked ? "creditcard" : "paypal"
              });
            },
            type: "radio",
            name: "optionsRadios",
            id: "optionsRadios2",
            checked: this.state.paymentType === "creditcard"
          }), "Secure payment with credit or debit card")), c.default.createElement("hr", {
            style: {
              marginTop: "1em"
            }
          }), c.default.createElement("div", {
            ref: "paypalButton",
            style: {
              display: this.state.paymentType === "paypal" ? "block" : "none"
            }
          }), c.default.createElement("div", {
            style: {
              display: this.state.paymentType === "creditcard" ? "block" : "none"
            }
          }, c.default.createElement("div", {
            className: "form-group"
          }, c.default.createElement("input", {
            ref: "creditCard",
            type: "text",
            className: "form-control",
            placeholder: "Credit Card #"
          })), c.default.createElement("div", {
            className: "form-group"
          }, c.default.createElement("div", {
            className: "row"
          }, c.default.createElement("div", {
            className: "col-md-9"
          }, c.default.createElement("input", {
            ref: "expires",
            type: "text",
            className: "form-control",
            placeholder: "MM / YY"
          })), c.default.createElement("div", {
            className: "col-md-3"
          }, c.default.createElement("input", {
            ref: "cvc",
            type: "text",
            className: "form-control",
            placeholder: "CVC"
          })))), c.default.createElement("button", {
            type: "submit",
            className: "btn btn-primary",
            disabled: this.props.isRegistering
          }, t)))));
        }
      }]);
      return t;
    }(c.default.Component);
    t.default = (0, d.connect)(function (e) {
      return e.auth;
    })(E);
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    function i(e, t) {
      return function (n) {
        var r = {
          [t]: n.target.value
        };
        e.setState(r);
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function u(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var l = n(2);
    var c = r(l);
    var p = n(31);
    var d = r(p);
    var f = n(279);
    var h = function (e) {
      function t(e) {
        o(this, t);
        u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.element = e.element;
        this.state = {
          fileName: "loop.mp3",
          processing: false,
          progress: null,
          downloadUrl: null
        };
      }
      a(t, e);
      s(t, [{
        key: "componentDidMount",
        value: function () {
          this.reset();
        }
      }, {
        key: "componentWillReceiveProps",
        value: function (e) {
          var t = e.isOpen && !this.props.isOpen;
          if (t) {
            this.reset();
          }
        }
      }, {
        key: "reset",
        value: function () {
          if (this.saveLoopWorker) {
            this.saveLoopWorker.terminate();
            this.saveLoopWorker = null;
          }
          if (this.state.downloadUrl) {
            URL.revokeObjectURL(this.state.downloadUrl);
          }
          this.setState({
            downloadUrl: null,
            processing: false,
            progress: 0
          });
        }
      }, {
        key: "cancel",
        value: function () {
          this.reset();
          this.props.onClose();
        }
      }, {
        key: "submit",
        value: function () {
          if (this.state.downloadUrl) {
            this.props.onClose();
            return;
          } else {
            this.setState({
              processing: true
            });
            this.encode();
            return;
          }
        }
      }, {
        key: "encode",
        value: function () {
          var e = this.props.loop.start;
          var t = this.props.loop.end;
          if (e != null && t != null) {
            var n = this.props.audioBuffer;
            var r = e * n.duration;
            var o = t * n.duration;
            var a = n.sampleRate;
            var i = r * a;
            var s = o * a;
            var u = n.numberOfChannels;
            var l = n.getChannelData(0);
            var c = u > 1 ? n.getChannelData(1) : l;
            this.encodeOptions = {
              pitch: this.props.pitch,
              tempo: this.props.tempo,
              sampleRate: a,
              leftBuffer: l.subarray(i, s),
              rightBuffer: c.subarray(i, s)
            };
            if (this.saveLoopWorker) {
              this.saveLoopWorker.terminate();
            }
            var p = this.saveLoopWorker = new f();
            p.addEventListener("message", this.onMessage.bind(this));
          }
        }
      }, {
        key: "onMessage",
        value: function (e) {
          if (e.data.name === "mp3EncodeProgress") {
            this.setState({
              progress: e.data.progress
            });
          }
          if (e.data.name === "mp3Encoded") {
            this.setState({
              processing: false,
              downloadUrl: e.data.url
            });
          }
          if (e.data.name === "ready") {
            this.saveLoopWorker.postMessage({
              name: "encodeMp3",
              options: this.encodeOptions
            });
            this.encodeOptions = null;
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props.loop;
          var n = t && t.start != null && t.end != null;
          var r = !n;
          var o = this.state.downloadUrl ? "Ready for download" : null;
          var a = "Save Loop";
          if (this.state.processing) {
            a = "Processing";
          } else if (this.state.downloadUrl) {
            a = "Download MP3";
          } else if (r) {
            a = "Close";
          }
          var s = "btn btn-primary";
          if (this.state.processing) {
            s = "btn btn-default";
          } else if (this.state.downloadUrl) {
            s = "btn btn-success";
          }
          var u = !!this.state.processing;
          var l = r ? function () {
            return e.props.onClose();
          } : function () {
            return e.submit();
          };
          var p = c.default.createElement("h2", null, "Oops! First select the portion of the song you want to download.");
          var f = c.default.createElement("div", null, c.default.createElement("div", {
            className: "form-group"
          }, c.default.createElement("label", {
            htmlFor: "download-loop-filename"
          }, "Filename"), c.default.createElement("input", {
            id: "download-loop-filename",
            ref: "filename",
            type: "text",
            defaultValue: this.state.fileName,
            onChange: i(this, "fileName"),
            disabled: u,
            className: "form-control"
          })), c.default.createElement("div", {
            className: "progress"
          }, c.default.createElement("div", {
            className: "progress-bar active",
            role: "progressbar",
            style: {
              width: this.state.progress + "%"
            }
          }, o)));
          var h = c.default.createElement("h4", {
            className: "modal-title"
          }, "Download Loop as MP3");
          var m = c.default.createElement("div", null, c.default.createElement("button", {
            type: "button",
            className: "btn btn-link",
            onClick: function () {
              return e.close();
            },
            style: {
              display: this.props.isRegistering ? "none" : "inline"
            }
          }, "Close"), c.default.createElement("button", {
            type: "submit",
            className: "btn btn-primary",
            disabled: this.props.isRegistering
          }, a));
          var v = n ? f : p;
          var m = this.state.downloadUrl ? c.default.createElement("a", {
            href: this.state.downloadUrl,
            onClick: l,
            className: s,
            download: this.state.fileName
          }, a) : c.default.createElement("button", {
            className: s,
            disabled: u
          }, a);
          return c.default.createElement(d.default, {
            isOpen: this.props.isOpen,
            onClose: function () {
              return e.cancel();
            },
            onSubmit: l,
            focusElement: function () {
              return e.refs.filename;
            },
            header: h,
            footer: m
          }, v);
        }
      }]);
      return t;
    }(c.default.Component);
    t.default = h;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(6);
    var p = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.startX = -1;
        this.dragged = false;
        this.isMouseDown = false;
      }
      a(t, e);
      i(t, [{
        key: "shouldComponentUpdate",
        value: function (e, t) {
          return this.props.start !== e.start || this.props.end !== e.end || this.props.width !== e.width || this.props.height !== e.height;
        }
      }, {
        key: "componentDidMount",
        value: function () {
          var e = this;
          this.canvas = this.refs.canvas;
          this.ctx = this.canvas.getContext("2d");
          setTimeout(function () {
            e.draw();
          }, 500);
        }
      }, {
        key: "onMouseDown",
        value: function (e) {
          this.isMouseDown = true;
          if (this.isOnResizeElement(e, this.props.start)) {
            this.startX = (this.props.end || this.props.start) * this.canvas.offsetWidth;
            return;
          } else if (this.isOnResizeElement(e, this.props.end)) {
            this.startX = this.props.start * this.canvas.offsetWidth;
            return;
          } else {
            this.startX = (0, c.relX)(e);
            return;
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function () {
          this.draw();
        }
      }, {
        key: "onMouseMove",
        value: function (e) {
          if (this.isMouseDown) {
            this.dragged = true;
            this.setCurrentSelection(e);
          } else {
            this.hitTestResizer(e);
          }
        }
      }, {
        key: "onMouseOut",
        value: function (e) {
          if (!this.isMouseDown) {
            document.body.style.cursor = null;
          }
        }
      }, {
        key: "setCurrentSelection",
        value: function (e) {
          var t = (0, c.relX)(e);
          var n = Math.min(this.startX, t);
          var r = Math.max(this.startX, t);
          if (r - n > 2) {
            this.props.setLoop(n / this.canvas.offsetWidth, r / this.canvas.offsetWidth);
          }
          e.stopPropagation();
          e.preventDefault();
          e.nativeEvent.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }
      }, {
        key: "onClick",
        value: function (e) {
          if (this.isMouseDown) {
            try {
              if (this.dragged) {
                this.dragged = false;
                this.isMouseDown = false;
              } else {
                this.props.setLoop((0, c.relX)(e) / this.canvas.offsetWidth, null);
              }
            } finally {
              this.isMouseDown = false;
              this.startX = -1;
            }
          }
        }
      }, {
        key: "hitTestResizer",
        value: function (e) {
          var t = this.props.start;
          var n = this.props.end;
          if (t > 0 && this.isOnResizeElement(e, t)) {
            document.body.style.cursor = "col-resize";
          } else if (n != null && this.isOnResizeElement(e, n)) {
            document.body.style.cursor = "col-resize";
          } else {
            document.body.style.cursor = null;
          }
        }
      }, {
        key: "isOnResizeElement",
        value: function (e, t) {
          return Math.abs((0, c.relX)(e) - t * this.canvas.offsetWidth) < 3;
        }
      }, {
        key: "drawEdge",
        value: function (e) {
          var t = 2;
          var n = this.ctx;
          var r = this.canvas.height;
          n.beginPath();
          n.moveTo(e + t + 1, 0);
          n.lineTo(e + 1, t);
          n.lineTo(e + 1, r - t);
          n.lineTo(e + t + 1, r);
          n.lineTo(e, r);
          n.lineTo(e - t - 0, r);
          n.lineTo(e - 0, r - t);
          n.lineTo(e - 0, t);
          n.lineTo(e - t - 0, 0);
          n.closePath();
          n.fillStyle = "#5869FC";
          n.shadowColor = "#333";
          n.shadowBlur = 0.5;
          n.fill();
        }
      }, {
        key: "drawBackground",
        value: function (e, t) {
          var n = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
          n.addColorStop(0, d.selection.color1);
          n.addColorStop(1, d.selection.color2);
          this.ctx.fillStyle = n;
          this.ctx.fillRect(e + 1, 0, t - e - 1, this.canvas.height);
        }
      }, {
        key: "draw",
        value: function () {
          var e = this.ctx;
          var t = this.canvas.width;
          e.clearRect(0, 0, t, this.canvas.height);
          var n = this.props.start * t;
          var r = this.props.end * t;
          e.fillStyle = "#F6F6F9";
          this.drawEdge(n);
          if (this.props.end != null) {
            this.drawBackground(n, r);
            this.drawEdge(r);
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return l.default.createElement("canvas", {
            ref: "canvas",
            width: this.props.width,
            id: "waveform-selection",
            height: this.props.height,
            unselectable: "on",
            style: {
              MozUserSelect: "none"
            },
            onSelectStart: function () {
              return false;
            },
            onMouseDown: function (t) {
              return e.onMouseDown(t);
            },
            onMouseMove: function (t) {
              return e.onMouseMove(t);
            },
            onMouseOut: function (t) {
              return e.onMouseOut(t);
            },
            onMouseUp: function (t) {
              return e.onClick(t);
            }
          });
        }
      }]);
      return t;
    }(l.default.Component);
    var d = {
      selection: {
        color1: "rgba(246,246,249,.015)",
        color2: "rgba(246,246,249,.075)"
      }
    };
    t.default = p;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    function i(e) {
      if (e) {
        var t = function () {
          var t = {
            max: e.pop(),
            min: e.shift()
          };
          var n = t.max - t.min;
          e.forEach(function (e) {
            var r = Math.round(e / n * 100) + "%";
            t[r] = e;
          });
          return {
            v: {
              start: [100],
              snap: true,
              range: t
            }
          };
        }();
        if (typeof t == "object") {
          return t.v;
        }
      }
      return {
        start: [100],
        step: 1,
        range: {
          min: [25],
          max: [165]
        }
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function u(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var l = n(2);
    var c = r(l);
    var p = n(19);
    var d = r(p);
    var f = n(6);
    var h = n(75);
    var m = function (e) {
      function t(e) {
        o(this, t);
        u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.state = {
          isModalOpen: false
        };
      }
      a(t, e);
      s(t, [{
        key: "setupSlider",
        value: function (e) {
          var t = this.refs.tempoSlider;
          if (e && e.destroy && t.noUiSlider) {
            t.noUiSlider.destroy();
          }
          h.create(t, i(this.props.tempoValues));
          var n = function (e) {
            this.props.onSetSpeed(parseInt(e));
          }.bind(this);
          t.noUiSlider.on("slide", n);
          t.noUiSlider.on("set", n);
        }
      }, {
        key: "componentDidMount",
        value: function () {
          this.setupSlider();
        }
      }, {
        key: "componentDidUpdate",
        value: function (e, t) {
          if (this.props.speed !== parseInt(this.refs.tempoSlider.noUiSlider.get())) {
            this.refs.tempoSlider.noUiSlider.set(this.props.speed);
          }
          if (e.tempoValues !== this.props.tempoValues) {
            this.setupSlider({
              destroy: true
            });
          }
        }
      }, {
        key: "closeModal",
        value: function () {
          this.setState({
            isModalOpen: false
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props.speed + "%";
          return c.default.createElement("div", {
            className: "group",
            style: {
              display: (0, f.display)(this.props.visible)
            }
          }, c.default.createElement("span", {
            style: {
              marginLeft: "-1em"
            },
            className: "flashicon emboss"
          }, "Slow"), c.default.createElement("div", {
            ref: "tempoSlider",
            id: "tempo-slider"
          }), c.default.createElement("span", {
            className: "flashicon emboss",
            style: {
              marginRight: "-1em"
            }
          }, "Fast"), c.default.createElement("span", {
            className: "flashicon emboss",
            style: {
              marginRight: "-2.25em",
              float: "none"
            }
          }, "Faster"), c.default.createElement("div", {
            style: {
              paddingTop: ".25em"
            }
          }, c.default.createElement("span", null, t), c.default.createElement("br", null), c.default.createElement("a", {
            href: "#",
            className: "youtube-visible",
            style: {
              fontSize: ".7em"
            },
            onClick: function () {
              return e.setState({
                isModalOpen: true
              });
            }
          }, "Why are these speeds limited?")), c.default.createElement(d.default, {
            isOpen: this.state.isModalOpen,
            onRequestClose: function () {
              return e.closeModal();
            },
            className: "Modal__Bootstrap modal-dialog modal-sm"
          }, c.default.createElement("div", {
            className: "modal-content"
          }, c.default.createElement("div", {
            className: "modal-header"
          }, c.default.createElement("button", {
            type: "button",
            className: "close",
            onClick: function () {
              return e.closeModal();
            }
          }, "×"), c.default.createElement("h4", {
            className: "modal-title"
          }, "Why these speeds only?")), c.default.createElement("div", {
            className: "modal-body"
          }, c.default.createElement("p", null, "YouTube determines the playback speeds available for each video. Typically, videos are restricted to 50%, 100%, and 125% playback speeds."), c.default.createElement("p", null, "However, if you load an MP3, you have the flexibility to play it at much slower speeds, allowing for greater control over the playback speed. Simply load an MP3 to experience this expanded range of speeds."), c.default.createElement("p", {
            className: "text-right"
          }, c.default.createElement("button", {
            className: "btn btn-primary",
            onClick: function () {
              e.closeModal();
              e.props.onChooseAudio();
            }
          }, "Load an MP3"))))));
        }
      }]);
      return t;
    }(c.default.Component);
    t.default = m;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(6);
    var p = function (e) {
      function t() {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      a(t, e);
      i(t, [{
        key: "shouldComponentUpdate",
        value: function (e, t) {
          return this.props.width !== e.width || this.props.duration !== e.duration;
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = [];
          var n = [0.1, 0.25, 0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 1200];
          var r = 75;
          var o = this.props.width / r;
          var a = null;
          if (this.props.duration) {
            a = n.filter(function (t) {
              return e.props.duration / t <= o;
            })[0];
            var t = [];
            for (var i = a; i < this.props.duration; i += a) {
              t.push(i);
            }
          }
          var s = t.map(function (t) {
            var n = t * (e.props.width / e.props.duration);
            var r = (0, c.formatTime)(t, a <= 1);
            return l.default.createElement("div", {
              key: t,
              className: "time-tick",
              style: {
                left: n
              }
            }, l.default.createElement("label", null, r));
          });
          return l.default.createElement("div", {
            className: this.props.className,
            id: this.props.id,
            style: {
              width: this.props.width
            }
          }, s);
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = p;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      }
      var t = {};
      if (e != null) {
        for (var n in e) {
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            t[n] = e[n];
          }
        }
      }
      t.default = e;
      return t;
    }
    function o(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function a(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function i(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    function s(e) {
      return {
        auth: e.auth,
        zoom: e.zoom,
        audio: e.audio,
        loops: e.loops,
        workspace: e.workspace,
        playback: e.playback,
        marks: e.marks.marks
      };
    }
    function u() {
      var e = this;
      var t = typeof window !== undefined && l("file");
      if (t) {
        var n = decodeURIComponent(l("title")) || "Audio File";
        var r = l("partner");
        var o = l("pid");
        var a = l("proxy");
        var i = c(r);
        var s = c(t, i * 99);
        var u = a ? (0, w.getServerUrl)("/partner?u=" + t) : t;
        if (s != o) {
          console.log("Song check id is not valid", s, o);
          return;
        }
        window.history.pushState(null, "", window.location.href.split("?")[0]);
        fetch(u).then(function (e) {
          return e.blob();
        }).then(function (t) {
          return e.loadFile(n, new P.default(t));
        });
      }
    }
    function l(e) {
      var t = new RegExp("[?&]" + e + "=([^&#]*)", "i");
      var n = t.exec(window.location.href);
      if (n) {
        return n[1];
      } else {
        return null;
      }
    }
    function c(e) {
      var t = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var n = t;
      for (var r = 0; r < e.length; r++) {
        n += e.charCodeAt(r);
      }
      return n;
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var p = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function d(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var f = n(2);
    var h = o(f);
    n(29);
    var m = n(34);
    var v = n(160);
    var y = o(v);
    var g = n(6);
    var b = n(68);
    var E = o(b);
    var w = n(18);
    var C = n(144);
    var _ = o(C);
    var O = n(145);
    var P = o(O);
    var k = n(159);
    var S = o(k);
    var x = n(126);
    var T = o(x);
    var M = n(129);
    var N = o(M);
    var D = n(122);
    var R = o(D);
    var A = n(123);
    var I = o(A);
    var j = n(130);
    var L = o(j);
    var U = n(134);
    var F = o(U);
    var B = n(125);
    var V = o(B);
    var W = n(127);
    var H = o(W);
    var q = n(128);
    var K = o(q);
    var z = n(131);
    var Y = o(z);
    var G = n(132);
    var X = o(G);
    var $ = n(133);
    var Q = o($);
    var Z = n(136);
    var J = o(Z);
    var ee = n(135);
    var te = o(ee);
    var ne = n(137);
    var re = o(ne);
    var oe = n(140);
    var ae = o(oe);
    var ie = n(138);
    var se = o(ie);
    var ue = n(141);
    var le = o(ue);
    var ce = n(142);
    var pe = o(ce);
    var de = n(120);
    var fe = o(de);
    var he = n(116);
    var me = r(he);
    var ve = n(65);
    var ye = r(ve);
    var ge = n(117);
    var be = r(ge);
    var Ee = n(118);
    var we = r(Ee);
    var Ce = n(119);
    var _e = r(Ce);
    var Oe = n(66);
    var Pe = r(Oe);
    var ke = n(22);
    var Se = r(ke);
    var xe = n(30);
    var Te = o(xe);
    var Me = function (e) {
      function t(e) {
        var n = this;
        a(this, t);
        d(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        var r = this.props.dispatch;
        this.setupHotkeys();
        this.player = E.default;
        this.state = {
          width: 0,
          adjustMode: "tempo"
        };
        this.player.onAudioBufferChanged = function () {
          r(me.audioLoaded(n.player.getDataHash()));
          if (n.props.auth.isLoggedIn) {
            r(Pe.loadWorkspace(n.props.audio.dataHash));
          }
        };
        this.player.onStatusChanged = function (e) {
          r(we.changePlayStatus(e));
          clearInterval(n.playInterval);
          if (e) {
            n.playInterval = setInterval(function () {
              return n.repositionScroll();
            }, 1000);
          }
        };
        if (typeof window != "undefined") {
          window.addEventListener("storage", function (e) {
            var t = (0, Te.default)().getToken();
            var n = t.token;
            var o = t.plan;
            if (n) {
              r(Se.completeLogin(null, n, o));
              r(Pe.loadWorkspace(this.props.audio.dataHash));
            }
          }, false);
        }
      }
      i(t, e);
      p(t, [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          (0, y.default)();
          var t = typeof window !== undefined && window.location.href.indexOf("loadFake") >= 0;
          if (t) {
            var n = new _.default();
            var r = new P.default(n);
            this.loadFile("Test Song", r);
            r.onAudioBufferChanged(n);
          }
          u.call(this);
          var o = typeof document != "undefined" ? document.body.offsetWidth : 0;
          this.setState({
            width: o
          });
          (0, Te.default)().getAuthStatus().then(function (t) {
            if (t.plan) {
              var n = e.props.dispatch;
              n(Se.completeLogin(null, t.token, t.plan));
            }
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function (e, t) {
          if (this.player.audioBuffer) {
            var n = this.props.loops.currentLoop;
            var r = this.player.currentLoop;
            var o = this.player.audioBuffer.duration;
            r.start = n.start * o;
            r.end = n.end * o || null;
          }
          if (this.player.pitchVals !== this.props.playback.pitch) {
            this.player.pitchVals = this.props.playback.pitch;
            this.player.updatePitch();
          }
          if (this.player.volume !== this.props.playback.volume) {
            this.player.volume = this.props.playback.volume;
            this.player.updateVolume();
          }
          if (this.props.zoom.level !== e.zoom.level) {
            this.repositionScroll();
          }
          if (this.props.auth.isGatheringCredentials && !e.auth.isGatheringCredentials) {
            var a = this.props.dispatch;
            a(Se.beginLogin());
            (0, Te.default)().login();
          }
          this.player.delay = this.props.playback.delay;
          this.player.speed = this.props.playback.tempo;
          if (this.props.audio.status === "loaded" && e.audio.status !== "loaded") {
            ga("send", "event", "audio", "loaded", this.player.audioSystem.type);
          }
        }
      }, {
        key: "seekToPlaybackTime",
        value: function (e) {
          var t = this.player.audioBuffer.duration * e;
          this.player.seek(t);
          this.props.dispatch(we.setPlaybackTime(t));
        }
      }, {
        key: "setupHotkeys",
        value: function () {
          var e = this;
          if (typeof g.key != "undefined") {
            var t = this.props.dispatch;
            (0, g.key)("space", function () {
              return e.player.playPause();
            });
            (0, g.key)("r", function () {
              return e.player.play(true, true);
            });
            (0, g.key)("p", function () {
              return e.player.playPause();
            });
            (0, g.key)("m", function () {
              return t(be.addMark());
            });
            (0, g.key)("b", function () {
              return t(be.addBeat());
            });
            (0, g.key)("l", function () {
              return t(ye.saveLoop());
            });
          }
        }
      }, {
        key: "showLoopSaveDialog",
        value: function () {
          this.saveLoopDialog.show();
        }
      }, {
        key: "onChooseVideo",
        value: function () {
          this.player.pause();
          var e = window.prompt("Enter a YouTube URL", "https://www.youtube.com/watch?v=TLV4_xaYynY");
          if (e) {
            this.player.load(new S.default(e));
            document.body.classList.add("youtube");
            document.body.classList.remove("audio-not-loaded");
            document.body.classList.add("audio-loaded");
            ga("send", "event", "audio", "select", "youtube");
          }
        }
      }, {
        key: "onChooseAudio",
        value: function () {
          this.player.pause();
          if (this.player.loaded) {
            window.location.reload();
            return;
          } else {
            document.getElementById("files").click();
            document.body.classList.remove("youtube");
            ga("send", "event", "audio", "select", "mp3");
            return;
          }
        }
      }, {
        key: "handleFileSelect",
        value: function (e) {
          if (this.checkSupport()) {
            var t = (e.target.files || e.dataTransfer.files)[0];
            if (t) {
              this.loadFile(t.name, new P.default(t));
            }
          }
        }
      }, {
        key: "loadFile",
        value: function (e, t) {
          this.player.load(t);
          this.props.dispatch(we.changeFile(e));
          this.props.dispatch(me.audioLoading());
        }
      }, {
        key: "checkSupport",
        value: function () {
          var e = true;
          var t = window.console || {
            log: function () {}
          };
          if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            t.log("The File APIs are not fully supported in this browser.");
            e = false;
          }
          if (!window.AudioContext) {
            t.log("The Audio APIs are not fully supported in this browser.");
            e = false;
          }
          if (!e) {
            this.setState({
              browserSupported: false
            });
          }
          return e;
        }
      }, {
        key: "timeFromDecimal",
        value: function (e) {
          var t = (this.player.audioBuffer || {}).duration;
          var n = e * t;
          return n || 0;
        }
      }, {
        key: "removeMark",
        value: function (e) {
          this.props.dispatch(be.removeMark(e));
        }
      }, {
        key: "getMarkCards",
        value: function (e) {
          var t = this;
          if (this.props.marks.length) {
            return this.props.marks.filter(function (t) {
              return t.type == e;
            }).map(function (n) {
              return {
                title: e == "mark" ? "Mark" : "Beat",
                key: n.id,
                line1: n.label,
                line2: (0, g.formatTime)(t.timeFromDecimal(n.time), e == "beat"),
                remove: function () {
                  return t.removeMark(n.id);
                },
                select: function () {
                  return t.seekToPlaybackTime(n.time);
                },
                className: e
              };
            });
          } else {
            return [];
          }
        }
      }, {
        key: "getLoopCards",
        value: function () {
          var e = this;
          var t = this.props.dispatch;
          return this.props.loops.loops.map(function (n) {
            return {
              title: "Loop",
              key: n.id,
              line1: (0, g.formatTime)(e.timeFromDecimal(n.start), false) + String.fromCharCode(8212) + (0, g.formatTime)(e.timeFromDecimal(n.end), false),
              remove: function () {
                return t(ye.removeLoop(n.id));
              },
              select: function () {
                t(ye.setLoop(n.start, n.end));
              },
              className: "loop"
            };
          });
        }
      }, {
        key: "showRegister",
        value: function (e) {
          this.props.dispatch(Se.gatherRegistration(e));
        }
      }, {
        key: "downloadLoopOrDisplay",
        value: function () {
          if (["gold", "silver"].includes(this.props.auth.plan)) {
            this.setState({
              isSavingLoop: true
            });
            return;
          } else {
            return this.showRegister("Save to MP3 and more!");
          }
        }
      }, {
        key: "repositionScroll",
        value: function () {
          if (this.player.loaded) {
            var e = this.player.currentTime / this.player.audioBuffer.duration * (document.body.offsetWidth * this.props.zoom.level);
            var t = this.refs["scroll-container"];
            var n = t.scrollLeft;
            var r = t.offsetWidth;
            var o = n + r - 100 < e;
            var a = n > e;
            if (o || a) {
              t.scrollLeft = e - r * 0.2;
            }
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props.dispatch;
          function n(e) {
            return function () {
              return t(e.apply(undefined, arguments));
            };
          }
          var r = this.props.audio.status;
          var o = this.state.width;
          var a = o * this.props.zoom.level;
          var i = this.getMarkCards("mark");
          var s = this.getMarkCards("beat");
          var u = this.getLoopCards();
          var l = !i.length && !s.length && !u.length;
          var c = false;
          var p = (0, g.classList)({
            "page-wrap": true,
            "audio-loading": r === "loading",
            "audio-loaded": r === "loaded",
            "audio-not-loaded": r !== "loaded"
          });
          var d = null;
          var f = 224;
          var m = 0;
          var v = 0;
          var y = ["gold", "silver"].includes(this.props.auth.plan);
          h.default.createElement("div", {
            className: "ad visible-audio-loaded"
          }, h.default.createElement(fe.default, null));
          if (this.player.loaded) {
            if (this.player.audioSystem.type === "youtube") {
              f = 56;
            }
            d = this.player.audioSystem.getTempoValues();
            m = this.player.audioBuffer.duration;
            v = this.player.currentTime;
            c = this.player.audioSystem.canDownloadLoop;
          }
          return h.default.createElement("div", {
            className: p
          }, h.default.createElement(N.default, {
            onChooseAudio: function (t) {
              return e.onChooseAudio();
            },
            onFileSelect: function (t) {
              return e.handleFileSelect(t);
            },
            isLoggedIn: this.props.auth.isLoggedIn,
            onLogin: function () {
              return t(Se.gatherCredentials());
            },
            onLogout: function () {
              return t(Se.logout());
            },
            onHelp: function () {
              return e.setState({
                isHelpOpen: true
              });
            }
          }), h.default.createElement(V.default, {
            isOpen: this.state.isHelpOpen === true,
            onClose: function () {
              return e.setState({
                isHelpOpen: false
              });
            }
          }), h.default.createElement(T.default, {
            onChooseAudio: function (t) {
              return e.onChooseAudio();
            },
            onChooseVideo: function (t) {
              return e.onChooseVideo();
            },
            onDropFile: function (t) {
              return e.handleFileSelect(t);
            }
          }), h.default.createElement("div", {
            id: "player",
            className: "visible-audio-loaded",
            style: {
              marginLeft: 0
            }
          }, h.default.createElement("div", {
            className: "inner-container"
          }, h.default.createElement(pe.default, {
            onZoom: function (e) {
              return t(_e.zoom(e));
            }
          }), h.default.createElement("h1", null, this.props.playback.displayFilename), h.default.createElement("div", {
            id: "yt-player"
          })), h.default.createElement("div", {
            id: "display",
            ref: "scroll-container"
          }, h.default.createElement(K.default, {
            width: a,
            height: f
          }, h.default.createElement(H.default, {
            className: "overlay",
            type: "mark",
            marks: this.props.marks,
            width: a,
            onMarkChanged: n(be.updateMark),
            onEditMark: function (t) {
              return e.setState({
                editingMark: t
              });
            },
            onRemoveMark: function (t) {
              return e.removeMark(t);
            }
          }), h.default.createElement(H.default, {
            className: "overlay bottom",
            type: "beat",
            marks: this.props.marks,
            width: a,
            onMarkChanged: n(be.updateMark),
            onRemoveMark: function (t) {
              return e.removeMark(t);
            }
          }), h.default.createElement(se.default, {
            className: "overlay bottom",
            id: "time-panel",
            duration: m,
            width: a
          }), h.default.createElement(le.default, {
            className: "overlay",
            width: a,
            height: f - 18,
            tabIndex: "0",
            audioBuffer: this.player.audioBuffer
          }), h.default.createElement(Q.default, {
            width: a,
            onDoubleClick: function (t) {
              return e.seekToPlaybackTime(t);
            },
            getPosition: function () {
              return e.player.currentTime / m || 0;
            },
            isPlaying: this.props.playback.isPlaying,
            className: "overlay",
            id: "waveform-position",
            height: f
          }), h.default.createElement(J.default, {
            start: this.props.loops.currentLoop.start,
            end: this.props.loops.currentLoop.end,
            setLoop: function (e, n) {
              return t(ye.setLoop(e, n));
            },
            width: a,
            height: f
          }))), h.default.createElement("div", {
            id: "toolbar",
            className: "clear-group"
          }, h.default.createElement("div", {
            className: "pull-right"
          }, h.default.createElement(I.default, {
            getCurrentTime: function () {
              return e.player.currentTime;
            },
            isPlaying: this.props.playback.isPlaying
          })), h.default.createElement(X.default, {
            onPlay: function () {
              return e.player.play(true, true);
            },
            onPause: function () {
              return e.player.playPause();
            },
            onAdjustModeChange: function (t) {
              return e.setState({
                adjustMode: t
              });
            },
            onSetDelay: function (e) {
              return t(we.setDelay(e));
            },
            showSaveNotification: !y,
            onShowSaveNotification: function () {
              return e.showRegister("Save your marks, loops, and more!");
            }
          }), h.default.createElement(Y.default, {
            visible: this.state.adjustMode === "pitch",
            onChanged: function () {
              return 1112234;
            },
            octives: this.props.playback.pitch.octives,
            semitones: this.props.playback.pitch.semitones,
            cents: this.props.playback.pitch.cents,
            onChangePitch: function (e, n) {
              return t(we.changePitch(e, n));
            },
            onSetPitch: function (e, n) {
              return t(we.setPitch(e, n));
            }
          }), h.default.createElement(re.default, {
            speed: this.props.playback.tempo,
            visible: this.state.adjustMode === "tempo",
            onSetSpeed: function (e) {
              return t(we.setTempo(e));
            },
            tempoValues: d,
            onChooseAudio: function (t) {
              return e.onChooseAudio();
            }
          }), null)), h.default.createElement("div", {
            className: "control-panel visible-audio-loaded",
            style: {
              marginLeft: 0
            }
          }, h.default.createElement("div", {
            className: "btn-group"
          }, h.default.createElement("button", {
            className: "btn btn-default btn-sm",
            title: "You can also tap 'm' to add a mark",
            onMouseDown: function () {
              return t(be.addMark());
            }
          }, "Add Mark"), h.default.createElement("button", {
            className: "btn btn-default btn-sm",
            title: "You can also tap 'b' to add a beat",
            onMouseDown: function () {
              return t(be.addBeat());
            }
          }, "Add Beat"), h.default.createElement("button", {
            className: "btn btn-default btn-sm",
            title: "You can also press 'l' to add a loop",
            onClick: function () {
              return t(ye.saveLoop());
            }
          }, "Add Loop"), c ? h.default.createElement("button", {
            className: "btn btn-default btn-sm",
            onClick: function () {
              return e.downloadLoopOrDisplay();
            }
          }, "Download MP3") : null), h.default.createElement("p", {
            id: "empty-mark-message",
            style: {
              display: (0, g.display)(l)
            }
          }, "Tap 'm' while playing to add marks to the beat or to label parts of the song."), h.default.createElement(R.default, {
            items: i
          }), h.default.createElement(R.default, {
            items: s
          }), h.default.createElement(R.default, {
            items: u
          })), h.default.createElement(L.default, {
            isOpen: this.state.browserSupported === false
          }), h.default.createElement(te.default, {
            isOpen: this.state.isSavingLoop,
            onClose: function () {
              return e.setState({
                isSavingLoop: false
              });
            },
            loop: this.props.loops.currentLoop,
            audioBuffer: this.player.audioBuffer,
            tempo: this.props.playback.tempo,
            pitch: this.player.pitch
          }), h.default.createElement(F.default, {
            isOpen: this.props.auth.isGatheringRegistration,
            message: this.props.auth.gatherRegistrationMessage
          }));
        }
      }]);
      return t;
    }(h.default.Component);
    t.default = (0, m.connect)(s)(Me);
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    function i(e) {
      return {
        start: [100],
        step: 1,
        range: {
          min: [1],
          max: [100]
        }
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function u(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var l = n(2);
    var c = r(l);
    var p = n(19);
    r(p);
    var d = n(6);
    var f = n(75);
    var h = function (e) {
      function t() {
        o(this, t);
        u(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      a(t, e);
      s(t, [{
        key: "setupSlider",
        value: function (e) {
          var t = this.refs.tempoSlider;
          if (e && e.destroy && t.noUiSlider) {
            t.noUiSlider.destroy();
          }
          f.create(t, i());
          var n = function (e) {
            this.props.onSetVolume(parseInt(e));
          }.bind(this);
          t.noUiSlider.on("slide", n);
          t.noUiSlider.on("set", n);
        }
      }, {
        key: "componentDidMount",
        value: function () {
          this.setupSlider();
        }
      }, {
        key: "componentDidUpdate",
        value: function (e, t) {
          if (this.props.volume !== parseInt(this.refs.tempoSlider.noUiSlider.get())) {
            this.refs.tempoSlider.noUiSlider.set(this.props.volume);
          }
          if (e.tempoValues !== this.props.tempoValues) {
            this.setupSlider({
              destroy: true
            });
          }
        }
      }, {
        key: "render",
        value: function () {
          return c.default.createElement("div", {
            className: "group",
            style: {
              display: (0, d.display)(this.props.visible)
            }
          }, c.default.createElement("div", {
            ref: "tempoSlider",
            id: "tempo-slider"
          }), c.default.createElement("div", {
            style: {
              paddingTop: ".25em"
            }
          }, "Volume"));
        }
      }]);
      return t;
    }(c.default.Component);
    t.default = h;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.averages = [];
      }
      a(t, e);
      i(t, [{
        key: "componentDidMount",
        value: function () {
          this.canvas = this.refs.canvas;
          this.waveform = this.canvas.getContext("2d");
          this.drawBuffer();
        }
      }, {
        key: "componentWillReceiveProps",
        value: function (e) {
          if (e.audioBuffer !== this.props.audioBuffer) {
            this.onAudioBufferChanged(e.audioBuffer);
          }
        }
      }, {
        key: "shouldComponentUpdate",
        value: function (e) {
          return e.audioBuffer !== this.props.audioBuffer || e.width !== this.props.width || e.height !== this.props.height;
        }
      }, {
        key: "componentDidUpdate",
        value: function (e, t) {
          this.drawBuffer();
        }
      }, {
        key: "shadeColor",
        value: function (e, t) {
          var n = parseInt(e.slice(1), 16);
          var r = Math.round(t * 2.55);
          var o = (n >> 16) + r;
          var a = (n >> 8 & 255) + r;
          var i = (n & 255) + r;
          return "#" + (16777216 + (o < 255 ? o < 1 ? 0 : o : 255) * 65536 + (a < 255 ? a < 1 ? 0 : a : 255) * 256 + (i < 255 ? i < 1 ? 0 : i : 255)).toString(16).slice(1);
        }
      }, {
        key: "waveformColor",
        value: function () {
          if (!this.gradient) {
            var e = this.shadeColor("#181C39", 10);
            var t = this.shadeColor(e, -10);
            this.gradient = this.waveform.createLinearGradient(0, 0, 0, this.canvas.offsetHeight);
            this.gradient.addColorStop(0, e);
            this.gradient.addColorStop(1, t);
          }
          return this.gradient;
        }
      }, {
        key: "drawBuffer",
        value: function () {
          var e = this.props.audioBuffer;
          if (e) {
            var t = this.canvas.offsetHeight / 2;
            var n = 1.5;
            var r = this.waveform;
            r.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
            r.fillStyle = this.waveformColor();
            r.lineWidth = 1;
            this.reduce(this.averages, this.canvas.offsetWidth, function (e, o, a) {
              var i = a * t * n;
              var s = o * t * -1 * n;
              var u = t - i;
              var l = i + s;
              r.fillRect(e, u, 1, l);
            });
          }
        }
      }, {
        key: "onAudioBufferChanged",
        value: function (e) {
          if (e && e.getChannelData) {
            var t = e.getChannelData(0);
            var n = this.canvas.offsetWidth * 20;
            var r = this.averages;
            r.length = 0;
            var o = 0;
            this.reduce(t, n, function (e, t, n) {
              r.push(t);
              r.push(n);
              o = Math.max(Math.max(o, n), -t);
            }, true);
            this.maxAmp = o;
          }
        }
      }, {
        key: "reduce2",
        value: function (e, t, n) {
          var r = Math.ceil(e.length / t);
          for (var o = Math.ceil(e.length / r), a = 0, i = 0; i < o; i++) {
            var s = 0;
            var u = 0;
            var l = 0;
            var c = 0;
            var p = 0;
            var d = 0;
            for (var f = 0; f < r; f++) {
              var h = e[a];
              if (h < 0) {
                s = h < s ? h : s;
                l++;
                p += h;
              } else {
                u = h > u ? h : u;
                c++;
                d += h;
              }
              a++;
            }
            n(i, s, u);
          }
        }
      }, {
        key: "reduce",
        value: function (e, t, n, r) {
          var o = e.length / t;
          for (var a = 0; a < t; a++) {
            var i = 0;
            var s = 0;
            var u = 0;
            var l = 0;
            var c = 0;
            var p = 0;
            for (var d = 0; d < o; d++) {
              var f = e[Math.round(a * o + d)];
              if (f < 0) {
                i = f < i ? f : i;
                u++;
                c += f;
              } else {
                s = f > s ? f : s;
                l++;
                p += f;
              }
            }
            n(a, c / u || 0, p / l || 0);
          }
        }
      }, {
        key: "render",
        value: function () {
          return l.default.createElement("canvas", {
            ref: "canvas",
            width: this.props.width,
            className: this.props.className,
            style: {
              top: 0,
              bottom: "18px"
            },
            height: this.props.height,
            id: "waveform-data"
          });
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = c;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        this.onZoom = e.onZoom || function () {};
      }
      a(t, e);
      i(t, [{
        key: "render",
        value: function () {
          var e = this;
          return l.default.createElement("div", {
            className: "btn-group btn-group-sm pull-right"
          }, l.default.createElement("button", {
            type: "button",
            onClick: function () {
              return e.onZoom("out");
            },
            className: "btn btn-default"
          }, String.fromCharCode(8722)), l.default.createElement("button", {
            type: "button",
            className: "btn btn-default",
            onClick: function () {
              return e.onZoom(1);
            }
          }, "Zoom"), l.default.createElement("button", {
            type: "button",
            onClick: function () {
              return e.onZoom("in");
            },
            className: "btn btn-default"
          }, String.fromCharCode(43)));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = c;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var o = n(2);
    var a = r(o);
    var i = n(146);
    var s = r(i);
    var u = n(67);
    r(u);
    var l = n(19);
    var c = r(l);
    var p = n(204);
    var d = r(p);
    var f = n(33);
    var h = r(f);
    n(278);
    if (typeof window != "undefined") {
      c.default.setAppElement(document.body);
      h.default.render(a.default.createElement(s.default, null), document);
    }
    t.default = function (e, t) {
      var n = d.default.renderToString(a.default.createElement(s.default, e));
      t(null, "<!DOCTYPE html>" + n);
    };
    e.exports = t.default;
  }, function (e, t) {
    "use strict";

    function n() {
      var e = [];
      for (var t = 0; t < 264600; t++) {
        e.push(Math.random() * 2 - 1);
      }
      e.push(2.25);
      e.push(-2.25);
      var n = new Float32Array(e);
      var r = {
        name: "Test Data",
        getChannelData: function () {
          return n;
        },
        sampleRate: 44100,
        length: e.length,
        duration: e.length / 44100,
        channels: 1,
        debug: true
      };
      return r;
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.default = n;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    var i = n(156);
    var s = r(i);
    var u = function () {
      function e(t) {
        var n = this;
        o(this, e);
        this.pitch = 1;
        this.soundtouch = null;
        this._speed = 1;
        this.startOffset = 0;
        this.lastTime = 0;
        this.canDownloadLoop = true;
        if (t.debug) {
          setTimeout(function () {
            n.audioBuffer = t;
            n.seekTo(0);
          }, 1);
        } else {
          var r = new FileReader();
          r.onload = function (t) {
            e.context = new AudioContext();
            var n = this.gainNode = e.context.createGain();
            n.connect(e.context.destination);
            e.context.decodeAudioData(t.target.result, function (e) {
              this.audioBuffer = e;
              this.seekTo(0);
            }.bind(this), function (e) {
              alert(e);
            });
          }.bind(this);
          r.readAsArrayBuffer(t);
        }
      }
      a(e, [{
        key: "play",
        value: function () {
          if (this.node) {
            this.node.connect(this.gainNode);
            this.lastTime = e.context.currentTime;
          }
        }
      }, {
        key: "pause",
        value: function () {
          this.startOffset = parseFloat(this.currentTime);
          if (this.node) {
            this.node.disconnect();
          }
        }
      }, {
        key: "seek",
        value: function (e) {
          if (this.node) {
            this.node = null;
            this.seekTo(e);
          }
        }
      }, {
        key: "seekTo",
        value: function (t) {
          var n = new s.default(this.audioBuffer, Math.floor(t * this.audioBuffer.sampleRate));
          this.soundtouch = new soundtouch.SoundTouch(this.audioBuffer.sampleRate);
          this.soundtouch.tempo = this.speed;
          this.soundtouch.pitch = this.pitch;
          var r = new soundtouch.SimpleFilter(n, this.soundtouch);
          this.node = soundtouch.getWebAudioNode(e.context, r);
          this.startOffset = parseFloat(t);
          this.lastTime = e.context.currentTime;
        }
      }, {
        key: "setVolume",
        value: function (e) {
          this.gainNode.gain.value = 1;
        }
      }, {
        key: "setPitch",
        value: function (e) {
          this.pitch = e / 100;
          if (this.node) {
            this.node.disconnect();
            this.seekTo(this.currentTime);
            if (this.isPlaying()) {
              this.node.connect(this.gainNode);
            }
          }
        }
      }, {
        key: "getTempoValues",
        value: function () {}
      }, {
        key: "getDataHash",
        value: function () {
          var e = this.audioBuffer.length;
          for (var t = this.audioBuffer.getChannelData(0), n = e, r = 0; r < t.length; r++) {
            n += t[r] * (r + 1);
          }
          return n = "m" + Math.abs(n).toString();
        }
      }, {
        key: "type",
        get: function () {
          return "mp3";
        }
      }, {
        key: "speed",
        get: function () {
          return this._speed;
        },
        set: function (e) {
          this._speed = e;
          if (this.node) {
            this.node.disconnect();
            this.seekTo(this.currentTime);
            if (this.isPlaying()) {
              this.node.connect(this.gainNode);
            }
          }
        }
      }, {
        key: "audioBuffer",
        get: function () {
          return this._audioBuffer;
        },
        set: function (e) {
          this._audioBuffer = e;
          this.onAudioBufferChanged(e);
        }
      }, {
        key: "currentTime",
        get: function () {
          if (!this.isPlaying()) {
            return this.startOffset;
          }
          var t = e.context.currentTime - this.lastTime;
          var n = t * this.speed + this.startOffset;
          return n;
        }
      }]);
      return e;
    }();
    t.default = u;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    function s(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var u = n(2);
    var l = r(u);
    var c = n(67);
    var p = r(c);
    var d = n(205);
    var f = r(d);
    var h = n(178);
    var m = r(h);
    var v = n(177);
    var y = r(v);
    n(179);
    n(163);
    var g = n(6);
    var b = f.default.Initializer;
    var E = function (e) {
      function t(e) {
        o(this, t);
        s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
        if (g.hasWindow) {
          window._gscq = [];
        }
      }
      a(t, e);
      i(t, [{
        key: "componentDidMount",
        value: function () {
          (0, f.default)("create", "UA-53190126-1", "auto");
          (0, f.default)("send", "pageview");
        }
      }, {
        key: "render",
        value: function () {
          return l.default.createElement("html", null, l.default.createElement("head", null, l.default.createElement("meta", {
            charSet: "utf-8"
          }), l.default.createElement("meta", {
            property: "og:title",
            content: "Tune Transcriber"
          }), l.default.createElement("meta", {
            property: "og:type",
            content: "website"
          }), l.default.createElement("meta", {
            property: "og:image",
            content: "https://www.tunetranscriber.com/screenshot.png"
          }), l.default.createElement("meta", {
            property: "og:description",
            content: "A free online tool to slow down songs and transcribe music."
          }), l.default.createElement("meta", {
            name: "twitter:card",
            content: "summary_large_image"
          }), l.default.createElement("meta", {
            name: "twitter:site",
            content: "@tunetranscriber"
          }), l.default.createElement("meta", {
            name: "twitter:title",
            content: "Tune Transcriber"
          }), l.default.createElement("meta", {
            name: "twitter:description",
            content: "A free online tool to slow down songs and transcribe music."
          }), l.default.createElement("meta", {
            name: "twitter:image:src",
            content: "https://www.tunetranscriber.com/screenshot.png"
          }), l.default.createElement("link", {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png"
          }), l.default.createElement("link", {
            rel: "icon",
            href: "favicon.ico?v2"
          }), l.default.createElement("link", {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png"
          }), l.default.createElement("link", {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png"
          }), l.default.createElement("link", {
            rel: "manifest",
            href: "/site.webmanifest"
          }), l.default.createElement("link", {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#5bbad5"
          }), l.default.createElement("meta", {
            name: "msapplication-TileColor",
            content: "#da532c"
          }), l.default.createElement("meta", {
            name: "theme-color",
            content: "#ffffff"
          }), l.default.createElement("meta", {
            content: "width=device-width, initial-scale=1",
            name: "viewport"
          }), l.default.createElement("link", {
            rel: "icon",
            href: y.default,
            type: "image/x-icon"
          }), l.default.createElement("link", {
            rel: "stylesheet",
            href: "main.css",
            type: "text/css",
            media: "screen"
          }), l.default.createElement("title", null, "Transcribe Music Online"), l.default.createElement(b, null)), l.default.createElement("body", null, l.default.createElement(p.default, null), l.default.createElement("script", {
            src: m.default
          }), l.default.createElement("script", {
            src: "bundle.js",
            charSet: "utf-8"
          }), l.default.createElement("script", {
            src: "//widgets.getsitecontrol.com/31121/script.js"
          })));
        }
      }]);
      return t;
    }(l.default.Component);
    t.default = E;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var o = n(23);
    var a = r(o);
    var i = "not-loaded";
    var s = "loaded";
    var u = "loading";
    var l = {
      status: i
    };
    t.default = (0, a.default)(l, {
      audioLoading: function (e, t) {
        return Object.assign({}, e, {
          status: u
        });
      },
      audioLoaded: function (e, t) {
        return Object.assign({}, e, {
          status: s,
          dataHash: t.dataHash
        });
      }
    });
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var o = n(23);
    var a = r(o);
    var i = {
      isLoggedIn: false,
      isLoggingIn: false,
      isGatheringCredentials: false,
      loginErrors: [],
      isGatheringRegistration: false,
      isRegistering: false,
      registrationErrors: []
    };
    t.default = (0, a.default)(i, {
      gatherCredentials: function (e, t) {
        return (0, o.copyState)(e, {
          isGatheringCredentials: true,
          loginErrors: []
        });
      },
      stopGatheringCredentials: function (e, t) {
        return (0, o.copyState)(e, {
          isGatheringCredentials: false,
          loginErrors: []
        });
      },
      beginLogin: function (e, t) {
        return (0, o.copyState)(e, {
          isLoggingIn: true,
          loginErrors: []
        });
      },
      completeLogin: function (e, t) {
        var n = t.error ? [t.error] : [];
        var r = !n.length;
        return (0, o.copyState)(e, {
          isLoggedIn: r,
          isLoggingIn: false,
          isGatheringCredentials: !r,
          justRegistered: true,
          loginErrors: n,
          plan: t.plan
        });
      },
      completeLogout: function (e) {
        return (0, o.copyState)(e, {
          isLoggedIn: false,
          plan: null
        });
      },
      gatherRegistration: function (e, t) {
        return (0, o.copyState)(e, {
          isGatheringRegistration: true,
          gatherRegistrationMessage: t.message,
          registrationErrors: []
        });
      },
      beginRegistration: function (e, t) {
        return (0, o.copyState)(e, {
          isRegistering: true,
          registrationErrors: []
        });
      },
      completeRegistration: function (e, t) {
        var n = t.errors || [];
        var r = false;
        return (0, o.copyState)(e, {
          isGatheringRegistration: n.length > 0,
          isRegistering: false,
          isLoggedIn: r,
          registrationErrors: n
        });
      }
    });
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e = u, t) {
      return p.reduce(e, t);
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    function i(e, t, n) {
      for (var r = true; r;) {
        var o = e;
        var a = t;
        var i = n;
        r = false;
        if (o === null) {
          o = Function.prototype;
        }
        var s = Object.getOwnPropertyDescriptor(o, a);
        if (s !== undefined) {
          if ("value" in s) {
            return s.value;
          }
          var u = s.get;
          if (u === undefined) {
            return;
          }
          return u.call(i);
        }
        var l = Object.getPrototypeOf(o);
        if (l === null) {
          return;
        }
        e = l;
        t = a;
        n = i;
        r = true;
        s = l = undefined;
      }
    }
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    t.default = a;
    n(65);
    var u = {
      currentLoop: {
        start: 0
      },
      loops: []
    };
    var l = function () {
      function e() {
        o(this, e);
      }
      s(e, [{
        key: "reduce",
        value: function (e, t) {
          return (this[t.type] || function (e) {
            return e;
          })(e, t) || e;
        }
      }]);
      return e;
    }();
    var c = function (e) {
      function t() {
        o(this, t);
        i(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
      }
      r(t, e);
      s(t, [{
        key: "setLoop",
        value: function (e, t) {
          return Object.assign({}, e, {
            currentLoop: {
              start: t.start,
              end: t.end
            }
          });
        }
      }, {
        key: "removeLoop",
        value: function (e, t) {
          var n = e.loops.filter(function (e) {
            return e.id == t.id;
          })[0];
          var r = e.loops.indexOf(n);
          if (r >= 0) {
            e.loops.splice(r, 1);
            return Object.assign({}, e, {
              loops: e.loops.slice(0)
            });
          }
        }
      }, {
        key: "saveLoop",
        value: function (e, t) {
          var n = e.currentLoop;
          if (n.start && n.end) {
            var r = {
              start: n.start,
              end: n.end,
              id: Date.now()
            };
            return Object.assign({}, e, {
              loops: e.loops.concat([r])
            });
          }
        }
      }]);
      return t;
    }(l);
    var p = new c();
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var a = n(68);
    var i = r(a);
    var s = n(6);
    var u = n(23);
    var l = r(u);
    var c = {
      marks: []
    };
    t.default = (0, l.default)(c, {
      updateMark: function (e, t) {
        var n = t.id;
        var r = t.time;
        var o = t.label;
        var a = t.markedForDeletion;
        var i = e.marks.slice(0);
        var s = i.find(function (e) {
          return e.id === n;
        });
        var l = i.indexOf(s);
        var c = {};
        if (r !== undefined) {
          c.time = r;
        }
        if (o !== undefined) {
          c.label = o;
        }
        if (a === true) {
          c.markedForDeletion = true;
        }
        var p = Object.assign({}, s, c);
        i[l] = p;
        return (0, u.copyState)(e, {
          marks: i
        });
      },
      addMark: function (e, t) {
        if (i.default.loaded) {
          var n = {
            id: (0, s.getUnique)(),
            time: i.default.currentTime / i.default.audioBuffer.duration,
            type: t.markType,
            label: ""
          };
          return (0, u.copyState)(e, {
            marks: [].concat(o(e.marks), [n])
          });
        }
      },
      removeMark: function (e, t) {
        var n = e.marks.slice(0);
        var r = n.find(function (e) {
          return e.id === t.id;
        });
        n.splice(n.indexOf(r), 1);
        return (0, u.copyState)(e, {
          marks: n
        });
      }
    });
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var o = n(23);
    var a = r(o);
    var i = {
      isPlaying: false,
      tempo: 100,
      volume: 100,
      playbackTime: 0,
      pitch: {
        octives: 0,
        semitones: 0,
        cents: 0
      }
    };
    t.default = (0, a.default)(i, {
      setTempo: function (e, t) {
        return Object.assign({}, e, {
          tempo: t.tempo
        });
      },
      setVolume: function (e, t) {
        return Object.assign({}, e, {
          volume: 100
        });
      },
      changePlayStatus: function (e, t) {
        return Object.assign({}, e, {
          isPlaying: t.isPlaying
        });
      },
      changeFile: function (e, t) {
        var n = t.filename.replace(/\.[^/.]+$/, "");
        return Object.assign({}, e, {
          displayFilename: n
        });
      },
      setDelay: function (e, t) {
        return Object.assign({}, e, {
          delay: t.seconds
        });
      },
      setPitch: function (e, t) {
        var n = {
          octives: e.pitch.octives,
          semitones: e.pitch.semitones,
          cents: e.pitch.cents
        };
        n[t.value] = t.amount;
        return Object.assign({}, e, {
          pitch: n
        });
      },
      changePitch: function (e, t) {
        var n = {
          octives: {
            m: 1,
            max: 3
          },
          semitones: {
            m: 1,
            max: 12
          },
          cents: {
            m: 10,
            max: 100
          }
        }[t.value];
        var r = n.m;
        var o = n.max;
        var a = -o;
        var i = e.pitch[t.value];
        var s = i + r * t.amount;
        if (!(s > o) && !(s < a)) {
          var u = {
            octives: e.pitch.octives,
            semitones: e.pitch.semitones,
            cents: e.pitch.cents
          };
          u[t.value] = s;
          return Object.assign({}, e, {
            pitch: u
          });
        }
      },
      setPlaybackTime: function (e, t) {
        if (e.playbackTime !== t.time) {
          return Object.assign({}, e, {
            playbackTime: t.time
          });
        }
      }
    });
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e) {
      return function (t, n) {
        e.forEach(function (e) {
          t = e(t, n);
        });
        return t;
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var a = n(29);
    var i = n(153);
    var s = n(148);
    var u = r(s);
    var l = n(154);
    var c = r(l);
    var p = n(149);
    var d = r(p);
    var f = n(150);
    var h = r(f);
    var m = n(151);
    var v = r(m);
    var y = n(147);
    var g = r(y);
    var b = {
      auth: u.default,
      zoom: c.default,
      loops: d.default,
      marks: h.default,
      playback: v.default,
      workspace: i.workspace,
      audio: g.default
    };
    var E = (0, a.combineReducers)(b);
    t.default = o([E, i.root]);
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e = {}, t) {
      if (!e.auth.isLoggedIn) {
        return e;
      }
      if (t.type !== "receiveWorkspace") {
        return e;
      }
      var n = t.data;
      if (Object.keys(n).length) {
        return Object.assign({}, e, n);
      } else {
        return e;
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.root = o;
    var a = n(23);
    var i = r(a);
    var s = {
      isDirty: false
    };
    var u = (0, i.default)(s, {
      workspaceDirty: function (e, t) {
        if (!e.isDirty) {
          return (0, a.copyState)(e, {
            isDirty: true
          });
        }
      },
      workspaceSynced: function (e, t) {
        return (0, a.copyState)(e, {
          isDirty: false
        });
      }
    });
    t.workspace = u;
  }, function (e, t) {
    "use strict";

    function n(e = r, t) {
      switch (t.type) {
        case "setZoom":
          var n = e.level;
          var o = t.level;
          if (o === "in") {
            n++;
          } else if (o === "out") {
            n--;
          } else {
            n = o;
          }
          if (n > 0 && n < 20) {
            return Object.assign({}, e, {
              level: n
            });
          }
      }
      return e;
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.default = n;
    var r = {
      level: 7
    };
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t;
      e.subscribe(function () {
        var n = t;
        t = e.getState();
        e.dispatch((0, o.updateWorkspace)(e.getState(), n));
      });
      if (typeof window != "undefined") {
        window.onbeforeunload = function (t) {
          if (e.getState().workspace.isDirty) {
            if (e.getState().auth.isLoggedIn) {
              return "Data is being saved to the server, if you close now you will lose some of your work.";
            } else {
              return "You will lose all of your current data, do you want to continue?";
            }
          }
        };
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.default = r;
    var o = n(66);
    e.exports = t.default;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      this.buffer = e;
      this.seekedPosition = t;
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    n.prototype = {
      extract: function (e, t, n) {
        var r = this.buffer.numberOfChannels;
        var o = this.buffer.getChannelData(0);
        var a = r > 1 ? this.buffer.getChannelData(1) : o;
        for (var i = 0; i < t; i++) {
          e[i * 2] = o[i + n + this.seekedPosition];
          e[i * 2 + 1] = a[i + n + this.seekedPosition];
        }
        return Math.min(t, o.length - n);
      }
    };
    t.default = n;
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = n(18);
    t.default = {
      fetch: function (e) {
        function t(t, n) {
          return e.apply(this, arguments);
        }
        t.toString = function () {
          return e.toString();
        };
        return t;
      }(function (e, t) {
        t = t || {};
        var n = Object.assign({
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include",
          method: t.body ? "POST" : "GET"
        }, t);
        if (t.body) {
          n.body = JSON.stringify(t.body);
        }
        return fetch((0, r.getServerUrl)(e), n);
      })
    };
    e.exports = t.default;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e) {
      var t = (0, a.applyMiddleware)(l.default)(a.createStore);
      return t(s.default, e);
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.default = o;
    var a = n(29);
    var i = n(152);
    var s = r(i);
    var u = n(271);
    var l = r(u);
    e.exports = t.default;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function r(e) {
      var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var n = e.match(t);
      if (n && n[7].length == 11) {
        return n[7];
      } else {
        alert("Cannot read the YouTube URL");
        return;
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false;
          r.configurable = true;
          if ("value" in r) {
            r.writable = true;
          }
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        if (n) {
          e(t.prototype, n);
        }
        if (r) {
          e(t, r);
        }
        return t;
      };
    }();
    var a = function () {
      function e(t) {
        n(this, e);
        this.onReady = this.onReady.bind(this);
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
        this.type = "youtube";
        this.player = null;
        this.videoUrl = t;
        this.videoId = r(t);
        this.realTime = true;
        var o = document.createElement("script");
        o.src = "https://www.youtube.com/iframe_api";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(o, a);
        window.onYouTubeIframeAPIReady = this.onReady;
      }
      o(e, [{
        key: "play",
        value: function () {
          this.player.playVideo();
        }
      }, {
        key: "pause",
        value: function () {
          this.player.pauseVideo();
        }
      }, {
        key: "seek",
        value: function (e) {
          this.player.seekTo(e, true);
        }
      }, {
        key: "onReady",
        value: function () {
          this.onPlayerReady;
          this.player = new YT.Player("yt-player", {
            height: "390",
            width: "640",
            videoId: this.videoId,
            playerVars: {
              html5: 1,
              controls: 0,
              modestbranding: 1,
              showinfo: 0,
              rel: 0
            },
            events: {
              onReady: this.onPlayerReady,
              onStateChange: this.onPlayerStateChange
            }
          });
        }
      }, {
        key: "getDataHash",
        value: function () {
          var e = this.audioBuffer.length;
          for (var t = 0; t < this.videoUrl.length; t++) {
            e += this.videoUrl.charCodeAt(t) * (t + 1);
          }
          e += this.audioBuffer.length * 1e-8;
          return "y" + Math.abs(e).toString();
        }
      }, {
        key: "onPlayerReady",
        value: function (e) {
          e.target.playVideo();
        }
      }, {
        key: "onPlayerStateChange",
        value: function (e) {
          if (!this.audioBuffer && this.player.getDuration() > 0) {
            this.player.stopVideo();
            var t = {
              duration: this.player.getDuration(),
              sampleRate: 44100
            };
            t.length = t.duration * t.sampleRate;
            this.audioBuffer = t;
          }
        }
      }, {
        key: "setVolume",
        value: function (e) {
          this.player.setVolume(100);
        }
      }, {
        key: "getTempoValues",
        value: function () {
          if (!this.rates) {
            var e = this.player.getAvailablePlaybackRates();
            e = e.map(function (e) {
              return e * 100;
            }).sort(function (e, t) {
              return e - t;
            });
            this.rates = e;
          }
          return this.rates;
        }
      }, {
        key: "audioBuffer",
        get: function () {
          return this._audioBuffer;
        },
        set: function (e) {
          this._audioBuffer = e;
          this.onAudioBufferChanged(e);
        }
      }, {
        key: "speed",
        set: function (e) {
          this.player.setPlaybackRate(e);
        }
      }, {
        key: "currentTime",
        get: function () {
          return this.player.getCurrentTime();
        }
      }]);
      return e;
    }();
    t.default = a;
    e.exports = t.default;
  }, function (e, t) {
    /*!
     * Bootstrap without jQuery v0.6.1 for Bootstrap 3
     * By Daniel Davis under MIT License
     * https://github.com/tagawa/bootstrap-without-jquery
     */
    e.exports = function () {
      "use strict";

      function e() {
        var e;
        var t = document.createElement("div");
        var n = {
          transition: "transitionend",
          OTransition: "otransitionend",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };
        for (e in n) {
          if (n.hasOwnProperty(e) && t.style[e] !== undefined) {
            return n[e];
          }
        }
        return false;
      }
      function t(e) {
        var t = {};
        e = e || window.event;
        t.evTarget = e.currentTarget || e.srcElement;
        var n = t.evTarget.getAttribute("data-target");
        t.dataTarget = !!n && document.querySelector(n);
        return t;
      }
      function n(e) {
        var t = e.style.height;
        e.style.height = "auto";
        var n = getComputedStyle(e).height;
        e.style.height = t;
        e.offsetHeight;
        return n;
      }
      function r(e, t) {
        if (document.createEvent) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(t, true, false);
          e.dispatchEvent(n);
        } else {
          e.fireEvent("on" + t);
        }
      }
      function o(e, t) {
        e.classList.remove("collapse");
        e.classList.add("collapsing");
        t.classList.remove("collapsed");
        t.setAttribute("aria-expanded", true);
        e.style.height = n(e);
        if (p) {
          e.addEventListener(p, function () {
            i(e);
          }, false);
        } else {
          i(e);
        }
      }
      function a(e, t) {
        e.classList.remove("collapse");
        e.classList.remove("in");
        e.classList.add("collapsing");
        t.classList.add("collapsed");
        t.setAttribute("aria-expanded", false);
        e.style.height = getComputedStyle(e).height;
        e.offsetHeight;
        e.style.height = "0px";
      }
      function i(e) {
        e.classList.remove("collapsing");
        e.classList.add("collapse");
        e.setAttribute("aria-expanded", false);
        if (e.style.height !== "0px") {
          e.classList.add("in");
          e.style.height = "auto";
        }
      }
      function s(e) {
        e.preventDefault();
        var n = t(e);
        var r = n.dataTarget;
        if (r.classList.contains("in")) {
          a(r, n.evTarget);
        } else {
          o(r, n.evTarget);
        }
        return false;
      }
      function u(e) {
        function n() {
          try {
            a.parentNode.removeChild(a);
            r(a, "closed.bs.alert");
          } catch (e) {
            window.console.error("Unable to remove alert");
          }
        }
        e.preventDefault();
        var o = t(e);
        var a = o.dataTarget;
        if (!a) {
          var i = o.evTarget.parentNode;
          if (i.classList.contains("alert")) {
            a = i;
          } else if (i.parentNode.classList.contains("alert")) {
            a = i.parentNode;
          }
        }
        r(a, "close.bs.alert");
        a.classList.remove("in");
        if (p && a.classList.contains("fade")) {
          a.addEventListener(p, function () {
            n();
          }, false);
        } else {
          n();
        }
        return false;
      }
      function l(e) {
        e = e || window.event;
        var t = e.currentTarget || e.srcElement;
        t.parentElement.classList.toggle("open");
        return false;
      }
      function c(e) {
        e = e || window.event;
        var t = e.currentTarget || e.srcElement;
        t.parentElement.classList.remove("open");
        if (e.relatedTarget && e.relatedTarget.getAttribute("data-toggle") !== "dropdown") {
          e.relatedTarget.click();
        }
        return false;
      }
      var p = e();
      var d = document.querySelectorAll("[data-toggle=collapse]");
      for (var f = 0, h = d.length; f < h; f++) {
        d[f].onclick = s;
      }
      var m = document.querySelectorAll("[data-dismiss=alert]");
      for (var v = 0, y = m.length; v < y; v++) {
        m[v].onclick = u;
      }
      var g;
      var b = document.querySelectorAll("[data-toggle=dropdown]");
      for (var E = 0, w = b.length; E < w; E++) {
        g = b[E];
        g.setAttribute("tabindex", "0");
        g.onclick = l;
        g.onblur = c;
      }
    };
  }, function (e, t) {
    function n(e, t) {
      if (e.indexOf) {
        return e.indexOf(t);
      }
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) {
          return n;
        }
      }
      return -1;
    }
    function r(e) {
      if (!(this instanceof r)) {
        return new r(e);
      }
      e ||= {};
      if (e.nodeType) {
        e = {
          el: e
        };
      }
      this.opts = e;
      this.el = e.el || document.body;
      if (typeof this.el != "object") {
        this.el = document.querySelector(this.el);
      }
    }
    e.exports = function (e) {
      return new r(e);
    };
    r.prototype.add = function (e) {
      var t = this.el;
      if (t) {
        if (t.className === "") {
          return t.className = e;
        }
        var r = t.className.split(" ");
        if (n(r, e) > -1) {
          return r;
        } else {
          r.push(e);
          t.className = r.join(" ");
          return r;
        }
      }
    };
    r.prototype.remove = function (e) {
      var t = this.el;
      if (t && t.className !== "") {
        var r = t.className.split(" ");
        var o = n(r, e);
        if (o > -1) {
          r.splice(o, 1);
        }
        t.className = r.join(" ");
        return r;
      }
    };
    r.prototype.has = function (e) {
      var t = this.el;
      if (t) {
        var r = t.className.split(" ");
        return n(r, e) > -1;
      }
    };
    r.prototype.toggle = function (e) {
      var t = this.el;
      if (t) {
        if (this.has(e)) {
          this.remove(e);
        } else {
          this.add(e);
        }
      }
    };
  }, function (e, t, n) {
    var r; /*!
           Copyright (c) 2015 Jed Watson.
           Based on code that is Copyright 2013-2015, Facebook, Inc.
           All rights reserved.
           */
    (function () {
      "use strict";

      var o = typeof window != "undefined" && !!window.document && !!window.document.createElement;
      var a = {
        canUseDOM: o,
        canUseWorkers: typeof Worker != "undefined",
        canUseEventListeners: o && (!!window.addEventListener || !!window.attachEvent),
        canUseViewport: o && !!window.screen
      };
      r = function () {
        return a;
      }.call(t, n, t, e);
      if (r !== undefined) {
        e.exports = r;
      }
    })();
  }, function (e, t) {}, function (e, t, n) {
    "use strict";

    var r = n(1);
    var o = {
      addClass: function (e, t) {
        if (/\s/.test(t)) {
          r(false);
        } else {
          undefined;
        }
        if (t) {
          if (e.classList) {
            e.classList.add(t);
          } else if (!o.hasClass(e, t)) {
            e.className = e.className + " " + t;
          }
        }
        return e;
      },
      removeClass: function (e, t) {
        if (/\s/.test(t)) {
          r(false);
        } else {
          undefined;
        }
        if (t) {
          if (e.classList) {
            e.classList.remove(t);
          } else if (o.hasClass(e, t)) {
            e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
          }
        }
        return e;
      },
      conditionClass: function (e, t, n) {
        return (n ? o.addClass : o.removeClass)(e, t);
      },
      hasClass: function (e, t) {
        if (/\s/.test(t)) {
          r(false);
        } else {
          undefined;
        }
        if (e.classList) {
          return !!t && e.classList.contains(t);
        } else {
          return (" " + e.className + " ").indexOf(" " + t + " ") > -1;
        }
      }
    };
    e.exports = o;
  }, function (e, t) {
    "use strict";

    function n(e) {
      return e.replace(r, function (e, t) {
        return t.toUpperCase();
      });
    }
    var r = /-(.)/g;
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return o(e.replace(a, "ms-"));
    }
    var o = n(165);
    var a = /^-ms-/;
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return !!e && (typeof e == "object" || typeof e == "function") && "length" in e && !("setInterval" in e) && typeof e.nodeType != "number" && (Array.isArray(e) || "callee" in e || "item" in e);
    }
    function o(e) {
      if (r(e)) {
        if (Array.isArray(e)) {
          return e.slice();
        } else {
          return a(e);
        }
      } else {
        return [e];
      }
    }
    var a = n(176);
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = e.match(c);
      return t && t[1].toLowerCase();
    }
    function o(e, t) {
      var n = l;
      if (l) {
        undefined;
      } else {
        u(false);
      }
      var o = r(e);
      var a = o && s(o);
      if (a) {
        n.innerHTML = a[1] + e + a[2];
        for (var c = a[0]; c--;) {
          n = n.lastChild;
        }
      } else {
        n.innerHTML = e;
      }
      var p = n.getElementsByTagName("script");
      if (p.length) {
        if (t) {
          undefined;
        } else {
          u(false);
        }
        i(p).forEach(t);
      }
      var d = i(n.childNodes);
      while (n.lastChild) {
        n.removeChild(n.lastChild);
      }
      return d;
    }
    var a = n(5);
    var i = n(167);
    var s = n(73);
    var u = n(1);
    var l = a.canUseDOM ? document.createElement("div") : null;
    var c = /^\s*<(\w+)/;
    e.exports = o;
  }, function (e, t) {
    "use strict";

    function n(e) {
      if (e === window) {
        return {
          x: window.pageXOffset || document.documentElement.scrollLeft,
          y: window.pageYOffset || document.documentElement.scrollTop
        };
      } else {
        return {
          x: e.scrollLeft,
          y: e.scrollTop
        };
      }
    }
    e.exports = n;
  }, function (e, t) {
    "use strict";

    function n(e) {
      return e.replace(r, "-$1").toLowerCase();
    }
    var r = /([A-Z])/g;
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return o(e).replace(a, "-ms-");
    }
    var o = n(170);
    var a = /^ms-/;
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      return !!e && !!(typeof Node == "function" ? e instanceof Node : typeof e == "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string");
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return o(e) && e.nodeType == 3;
    }
    var o = n(172);
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e, t, n) {
      if (!e) {
        return null;
      }
      var o = {};
      for (var a in e) {
        if (r.call(e, a)) {
          o[a] = t.call(n, e[a], a, e);
        }
      }
      return o;
    }
    var r = Object.prototype.hasOwnProperty;
    e.exports = n;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = {};
      return function (n) {
        if (!t.hasOwnProperty(n)) {
          t[n] = e.call(this, n);
        }
        return t[n];
      };
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = e.length;
      if (Array.isArray(e) || typeof e != "object" && typeof e != "function") {
        o(false);
      } else {
        undefined;
      }
      if (typeof t != "number") {
        o(false);
      } else {
        undefined;
      }
      if (t === 0 || t - 1 in e) {
        undefined;
      } else {
        o(false);
      }
      if (e.hasOwnProperty) {
        try {
          return Array.prototype.slice.call(e);
        } catch (e) {}
      }
      var n = Array(t);
      for (var r = 0; r < t; r++) {
        n[r] = e[r];
      }
      return n;
    }
    var o = n(1);
    e.exports = r;
  }, function (e, t, n) {
    e.exports = n.p + "favicon.ico";
  }, function (e, t, n) {
    e.exports = n.p + "soundtouch.js";
  }, function (e, t, n) {
    e.exports = n.p + "textlogo.png";
  }, function (e, t) {
    "use strict";

    function n(e, t, p) {
      if (typeof t != "string") {
        if (c) {
          var d = l(t);
          if (d && d !== c) {
            n(e, d, p);
          }
        }
        var f = i(t);
        if (s) {
          f = f.concat(s(t));
        }
        for (var h = 0; h < f.length; ++h) {
          var m = f[h];
          if (!r[m] && !o[m] && (!p || !p[m])) {
            var v = u(t, m);
            try {
              a(e, m, v);
            } catch (e) {}
          }
        }
        return e;
      }
      return e;
    }
    var r = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var o = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var a = Object.defineProperty;
    var i = Object.getOwnPropertyNames;
    var s = Object.getOwnPropertySymbols;
    var u = Object.getOwnPropertyDescriptor;
    var l = Object.getPrototypeOf;
    var c = l && l(Object);
    e.exports = n;
  }, function (e, t, n) {
    var r = n(6);
    var o = r.shims.document;
    var a = r.shims.window;
    (function (t) {
      function n(e, t) {
        for (var n = e.length; n--;) {
          if (e[n] === t) {
            return n;
          }
        }
        return -1;
      }
      function r(e, t) {
        if (e.length != t.length) {
          return false;
        }
        for (var n = 0; n < e.length; n++) {
          if (e[n] !== t[n]) {
            return false;
          }
        }
        return true;
      }
      function i(e) {
        for (C in O) {
          O[C] = e[M[C]];
        }
      }
      function s(e) {
        var t;
        var r;
        var o;
        var a;
        var s;
        var u;
        t = e.keyCode;
        if (n(T, t) == -1) {
          T.push(t);
        }
        if (t == 93 || t == 224) {
          t = 91;
        }
        if (t in O) {
          O[t] = true;
          for (o in k) {
            if (k[o] == t) {
              c[o] = true;
            }
          }
        } else {
          i(e);
          if (c.filter.call(this, e) && t in _) {
            u = v();
            a = 0;
            for (; a < _[t].length; a++) {
              r = _[t][a];
              if (r.scope == u || r.scope == "all") {
                s = r.mods.length > 0;
                for (o in O) {
                  if (!O[o] && n(r.mods, +o) > -1 || O[o] && n(r.mods, +o) == -1) {
                    s = false;
                  }
                }
                if (r.mods.length == 0 && !O[16] && !O[18] && !O[17] && !O[91] || !!s) {
                  if (r.method(e, r) === false) {
                    if (e.preventDefault) {
                      e.preventDefault();
                    } else {
                      e.returnValue = false;
                    }
                    if (e.stopPropagation) {
                      e.stopPropagation();
                    }
                    e.cancelBubble &&= true;
                  }
                }
              }
            }
          }
        }
      }
      function u(e) {
        var t;
        var r = e.keyCode;
        var o = n(T, r);
        if (o >= 0) {
          T.splice(o, 1);
        }
        if (r == 93 || r == 224) {
          r = 91;
        }
        if (r in O) {
          O[r] = false;
          for (t in k) {
            if (k[t] == r) {
              c[t] = false;
            }
          }
        }
      }
      function l() {
        for (C in O) {
          O[C] = false;
        }
        for (C in k) {
          c[C] = false;
        }
      }
      function c(e, t, n) {
        var r;
        var o;
        r = g(e);
        if (n === undefined) {
          n = t;
          t = "all";
        }
        for (var a = 0; a < r.length; a++) {
          o = [];
          e = r[a].split("+");
          if (e.length > 1) {
            o = b(e);
            e = [e[e.length - 1]];
          }
          e = e[0];
          e = x(e);
          if (!(e in _)) {
            _[e] = [];
          }
          _[e].push({
            shortcut: r[a],
            scope: t,
            method: n,
            key: r[a],
            mods: o
          });
        }
      }
      function p(e, t) {
        var n;
        var o;
        var a;
        var i;
        var s;
        var u = [];
        n = g(e);
        i = 0;
        for (; i < n.length; i++) {
          o = n[i].split("+");
          if (o.length > 1) {
            u = b(o);
            e = o[o.length - 1];
          }
          e = x(e);
          if (t === undefined) {
            t = v();
          }
          if (!_[e]) {
            return;
          }
          for (a = 0; a < _[e].length; a++) {
            s = _[e][a];
            if (s.scope === t && r(s.mods, u)) {
              _[e][a] = {};
            }
          }
        }
      }
      function d(e) {
        if (typeof e == "string") {
          e = x(e);
        }
        return n(T, e) != -1;
      }
      function f() {
        return T.slice(0);
      }
      function h(e) {
        var t = (e.target || e.srcElement).tagName;
        return t != "INPUT" && t != "SELECT" && t != "TEXTAREA";
      }
      function m(e) {
        P = e || "all";
      }
      function v() {
        return P || "all";
      }
      function y(e) {
        var t;
        var n;
        var r;
        for (t in _) {
          n = _[t];
          r = 0;
          while (r < n.length) {
            if (n[r].scope === e) {
              n.splice(r, 1);
            } else {
              r++;
            }
          }
        }
      }
      function g(e) {
        var t;
        e = e.replace(/\s/g, "");
        t = e.split(",");
        if (t[t.length - 1] == "") {
          t[t.length - 2] += ",";
        }
        return t;
      }
      function b(e) {
        for (var t = e.slice(0, e.length - 1), n = 0; n < t.length; n++) {
          t[n] = k[t[n]];
        }
        return t;
      }
      function E(e, t, n) {
        if (e.addEventListener) {
          e.addEventListener(t, n, false);
        } else if (e.attachEvent) {
          e.attachEvent("on" + t, function () {
            n(a.event);
          });
        }
      }
      function w() {
        var e = t.key;
        t.key = N;
        return e;
      }
      var C;
      var _ = {};
      var O = {
        16: false,
        18: false,
        17: false,
        91: false
      };
      var P = "all";
      var k = {
        "⇧": 16,
        shift: 16,
        "⌥": 18,
        alt: 18,
        option: 18,
        "⌃": 17,
        ctrl: 17,
        control: 17,
        "⌘": 91,
        command: 91
      };
      var S = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        return: 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        delete: 46,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": 189,
        "=": 187,
        ";": 186,
        "'": 222,
        "[": 219,
        "]": 221,
        "\\": 220
      };
      function x(e) {
        return S[e] || e.toUpperCase().charCodeAt(0);
      }
      var T = [];
      for (C = 1; C < 20; C++) {
        S["f" + C] = 111 + C;
      }
      var M = {
        16: "shiftKey",
        18: "altKey",
        17: "ctrlKey",
        91: "metaKey"
      };
      for (C in k) {
        c[C] = false;
      }
      E(o, "keydown", function (e) {
        s(e);
      });
      E(o, "keyup", u);
      E(a, "focus", l);
      var N = t.key;
      t.key = c;
      t.key.setScope = m;
      t.key.getScope = v;
      t.key.deleteScope = y;
      t.key.filter = h;
      t.key.isPressed = d;
      t.key.getPressedKeyCodes = f;
      t.key.noConflict = w;
      t.key.unbind = p;
      e.exports = c;
    })(this);
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, o, a, i, s) {
      if (!e) {
        var u;
        if (t === undefined) {
          u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var l = [n, r, o, a, i, s];
          var c = 0;
          u = new Error(t.replace(/%s/g, function () {
            return l[c++];
          }));
          u.name = "Invariant Violation";
        }
        u.framesToPop = 1;
        throw u;
      }
    }
    e.exports = r;
  }, function (e, t, n) {
    function r(e, t) {
      if (t == null) {
        return e;
      } else {
        return o(t, a(t), e);
      }
    }
    var o = n(184);
    var a = n(76);
    e.exports = r;
  }, function (e, t) {
    function n(e, t, n) {
      n ||= {};
      for (var r = -1, o = t.length; ++r < o;) {
        var a = t[r];
        n[a] = e[a];
      }
      return n;
    }
    e.exports = n;
  }, function (e, t) {
    function n(e, t, n) {
      if (typeof e != "function") {
        return r;
      }
      if (t === undefined) {
        return e;
      }
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 3:
          return function (n, r, o) {
            return e.call(t, n, r, o);
          };
        case 4:
          return function (n, r, o, a) {
            return e.call(t, n, r, o, a);
          };
        case 5:
          return function (n, r, o, a, i) {
            return e.call(t, n, r, o, a, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    }
    function r(e) {
      return e;
    }
    e.exports = n;
  }, function (e, t, n) {
    function r(e) {
      return i(function (t, n) {
        var r = -1;
        var i = t == null ? 0 : n.length;
        var s = i > 2 ? n[i - 2] : undefined;
        var u = i > 2 ? n[2] : undefined;
        var l = i > 1 ? n[i - 1] : undefined;
        if (typeof s == "function") {
          s = o(s, l, 5);
          i -= 2;
        } else {
          s = typeof l == "function" ? l : undefined;
          i -= s ? 1 : 0;
        }
        if (u && a(n[0], n[1], u)) {
          s = i < 3 ? undefined : s;
          i = 1;
        }
        while (++r < i) {
          var c = n[r];
          if (c) {
            e(t, c, s);
          }
        }
        return t;
      });
    }
    var o = n(185);
    var a = n(188);
    var i = n(192);
    e.exports = r;
  }, function (e, t) {
    function n(e) {
      return !!e && typeof e == "object";
    }
    function r(e, t) {
      var n = e == null ? undefined : e[t];
      if (i(n)) {
        return n;
      } else {
        return undefined;
      }
    }
    function o(e) {
      return a(e) && d.call(e) == s;
    }
    function a(e) {
      var t = typeof e;
      return !!e && (t == "object" || t == "function");
    }
    function i(e) {
      return e != null && (o(e) ? f.test(c.call(e)) : n(e) && u.test(e));
    }
    var s = "[object Function]";
    var u = /^\[object .+?Constructor\]$/;
    var l = Object.prototype;
    var c = Function.prototype.toString;
    var p = l.hasOwnProperty;
    var d = l.toString;
    var f = RegExp("^" + c.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = r;
  }, function (e, t) {
    function n(e) {
      return function (t) {
        if (t == null) {
          return undefined;
        } else {
          return t[e];
        }
      };
    }
    function r(e) {
      return e != null && i(c(e));
    }
    function o(e, t) {
      e = typeof e == "number" || u.test(e) ? +e : -1;
      t = t == null ? l : t;
      return e > -1 && e % 1 == 0 && e < t;
    }
    function a(e, t, n) {
      if (!s(n)) {
        return false;
      }
      var a = typeof t;
      if (a == "number" ? r(n) && o(t, n.length) : a == "string" && t in n) {
        var i = n[t];
        if (e === e) {
          return e === i;
        } else {
          return i !== i;
        }
      }
      return false;
    }
    function i(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= l;
    }
    function s(e) {
      var t = typeof e;
      return !!e && (t == "object" || t == "function");
    }
    var u = /^\d+$/;
    var l = 9007199254740991;
    var c = n("length");
    e.exports = a;
  }, function (e, t, n) {
    function r(e, t, n) {
      for (var r = -1, o = i(t), a = o.length; ++r < a;) {
        var s = o[r];
        var u = e[s];
        var l = n(u, t[s], s, e, t);
        if (!(l === l ? l === u : u !== u) || u === undefined && !(s in e)) {
          e[s] = l;
        }
      }
      return e;
    }
    var o = n(183);
    var a = n(186);
    var i = n(76);
    var s = a(function (e, t, n) {
      if (n) {
        return r(e, t, n);
      } else {
        return o(e, t);
      }
    });
    e.exports = s;
  }, function (e, t) {
    function n(e) {
      return o(e) && h.call(e, "callee") && (!v.call(e, "callee") || m.call(e) == c);
    }
    function r(e) {
      return e != null && i(e.length) && !a(e);
    }
    function o(e) {
      return u(e) && r(e);
    }
    function a(e) {
      var t = s(e) ? m.call(e) : "";
      return t == p || t == d;
    }
    function i(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= l;
    }
    function s(e) {
      var t = typeof e;
      return !!e && (t == "object" || t == "function");
    }
    function u(e) {
      return !!e && typeof e == "object";
    }
    var l = 9007199254740991;
    var c = "[object Arguments]";
    var p = "[object Function]";
    var d = "[object GeneratorFunction]";
    var f = Object.prototype;
    var h = f.hasOwnProperty;
    var m = f.toString;
    var v = f.propertyIsEnumerable;
    e.exports = n;
  }, function (e, t) {
    function n(e) {
      return !!e && typeof e == "object";
    }
    function r(e, t) {
      var n = e == null ? undefined : e[t];
      if (s(n)) {
        return n;
      } else {
        return undefined;
      }
    }
    function o(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= y;
    }
    function a(e) {
      return i(e) && h.call(e) == l;
    }
    function i(e) {
      var t = typeof e;
      return !!e && (t == "object" || t == "function");
    }
    function s(e) {
      return e != null && (a(e) ? m.test(d.call(e)) : n(e) && c.test(e));
    }
    var u = "[object Array]";
    var l = "[object Function]";
    var c = /^\[object .+?Constructor\]$/;
    var p = Object.prototype;
    var d = Function.prototype.toString;
    var f = p.hasOwnProperty;
    var h = p.toString;
    var m = RegExp("^" + d.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var v = r(Array, "isArray");
    var y = 9007199254740991;
    var g = v || function (e) {
      return n(e) && o(e.length) && h.call(e) == u;
    };
    e.exports = g;
  }, function (e, t) {
    function n(e, t) {
      if (typeof e != "function") {
        throw new TypeError(r);
      }
      t = o(t === undefined ? e.length - 1 : +t || 0, 0);
      return function () {
        var n = arguments;
        for (var r = -1, a = o(n.length - t, 0), i = Array(a); ++r < a;) {
          i[r] = n[t + r];
        }
        switch (t) {
          case 0:
            return e.call(this, i);
          case 1:
            return e.call(this, n[0], i);
          case 2:
            return e.call(this, n[0], n[1], i);
        }
        var s = Array(t + 1);
        for (r = -1; ++r < t;) {
          s[r] = n[r];
        }
        s[t] = i;
        return e.apply(this, s);
      };
    }
    var r = "Expected a function";
    var o = Math.max;
    e.exports = n;
  }, function (e, t, n) {
    function r(e) {
      if (e == null) {
        if (e === undefined) {
          return u;
        } else {
          return s;
        }
      } else if (l && l in Object(e)) {
        return a(e);
      } else {
        return i(e);
      }
    }
    var o = n(77);
    var a = n(196);
    var i = n(197);
    var s = "[object Null]";
    var u = "[object Undefined]";
    var l = o ? o.toStringTag : undefined;
    e.exports = r;
  }, function (e, t) {
    (function (t) {
      var n = typeof t == "object" && t && t.Object === Object && t;
      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t, n) {
    var r = n(198);
    var o = r(Object.getPrototypeOf, Object);
    e.exports = o;
  }, function (e, t, n) {
    function r(e) {
      var t = i.call(e, u);
      var n = e[u];
      try {
        e[u] = undefined;
        var r = true;
      } catch (e) {}
      var o = s.call(e);
      if (r) {
        if (t) {
          e[u] = n;
        } else {
          delete e[u];
        }
      }
      return o;
    }
    var o = n(77);
    var a = Object.prototype;
    var i = a.hasOwnProperty;
    var s = a.toString;
    var u = o ? o.toStringTag : undefined;
    e.exports = r;
  }, function (e, t) {
    function n(e) {
      return o.call(e);
    }
    var r = Object.prototype;
    var o = r.toString;
    e.exports = n;
  }, function (e, t) {
    function n(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    e.exports = n;
  }, function (e, t, n) {
    var r = n(194);
    var o = typeof self == "object" && self && self.Object === Object && self;
    var a = r || o || Function("return this")();
    e.exports = a;
  }, function (e, t) {
    function n(e) {
      return e != null && typeof e == "object";
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r() {}
    var o = n(202);
    e.exports = function () {
      function e(e, t, n, r, a, i) {
        if (i !== o) {
          var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          s.name = "Invariant Violation";
          throw s;
        }
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t
      };
      n.checkPropTypes = r;
      n.PropTypes = n;
      return n;
    };
  }, function (e, t) {
    "use strict";

    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = n;
  }, function (e, t, n) {
    e.exports = n(227);
  }, function (e, t, n) {
    "use strict";

    e.exports = n(90);
  }, function (e, t, n) {
    var r;
    var o;
    var a;
    var i;
    var s;
    var u = [].slice;
    r = n(2);
    a = r.DOM.script;
    if (typeof window != "undefined" && window !== null && window.GoogleAnalyticsObject == null) {
      window.GoogleAnalyticsObject = "ga";
    }
    if (typeof window != "undefined" && window !== null && window.ga == null) {
      window.ga = o;
    }
    o = function () {
      var e;
      e = arguments.length >= 1 ? u.call(arguments, 0) : [];
      if (typeof window != "undefined" && window !== null) {
        return window[window.GoogleAnalyticsObject].apply(window, e);
      } else {
        return undefined;
      }
    };
    if (typeof window != "undefined" && window !== null && window[s = window.GoogleAnalyticsObject] == null) {
      window[s] = function () {
        var e;
        var t;
        t = arguments.length >= 1 ? u.call(arguments, 0) : [];
        e = window[window.GoogleAnalyticsObject];
        (e.q ||= []).push(t);
      };
    }
    i = false;
    o.Initializer = r.createClass({
      displayName: "GAInitializer",
      componentDidMount: function () {
        window[window.GoogleAnalyticsObject].l = new Date().getTime();
        if (!i) {
          return this.addScript();
        }
      },
      addScript: function () {
        var e;
        var t;
        i = true;
        e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "//www.google-analytics.com/analytics.js";
        t = document.getElementsByTagName("script")[0];
        return t.parentNode.insertBefore(e, t);
      },
      render: function () {
        return a(null);
      }
    });
    e.exports = o;
  }, function (e, t, n) {
    function r(e) {
      delete e.ref;
    }
    var o = n(2);
    var a = n(33);
    var i = n(162);
    var s = o.createFactory(n(207));
    var u = n(208);
    var l = n(161);
    var c = n(33).unstable_renderSubtreeIntoContainer;
    var p = i.canUseDOM ? window.HTMLElement : {};
    e.exports = o.createClass({
      displayName: "Modal",
      statics: {
        setAppElement: u.setElement,
        injectCSS: function () {}
      },
      propTypes: {
        isOpen: o.PropTypes.bool.isRequired,
        style: o.PropTypes.shape({
          content: o.PropTypes.object,
          overlay: o.PropTypes.object
        }),
        appElement: o.PropTypes.instanceOf(p),
        onRequestClose: o.PropTypes.func,
        closeTimeoutMS: o.PropTypes.number,
        ariaHideApp: o.PropTypes.bool
      },
      getDefaultProps: function () {
        return {
          isOpen: false,
          ariaHideApp: true,
          closeTimeoutMS: 0
        };
      },
      componentDidMount: function () {
        this.node = document.createElement("div");
        this.node.className = "ReactModalPortal";
        document.body.appendChild(this.node);
        this.renderPortal(this.props);
      },
      componentWillReceiveProps: function (e) {
        this.renderPortal(e);
      },
      componentWillUnmount: function () {
        a.unmountComponentAtNode(this.node);
        document.body.removeChild(this.node);
      },
      renderPortal: function (e) {
        if (e.isOpen) {
          l(document.body).add("ReactModal__Body--open");
        } else {
          l(document.body).remove("ReactModal__Body--open");
        }
        if (e.ariaHideApp) {
          u.toggle(e.isOpen, e.appElement);
        }
        r(e);
        this.portal = c(this, s(e), this.node);
      },
      render: function () {
        return o.DOM.noscript();
      }
    });
  }, function (e, t, n) {
    function r(e) {
      e.stopPropagation();
    }
    var o = n(2);
    var a = o.DOM.div;
    var i = n(209);
    var s = n(210);
    var u = n(189);
    var l = {
      overlay: {
        base: "ReactModal__Overlay",
        afterOpen: "ReactModal__Overlay--after-open",
        beforeClose: "ReactModal__Overlay--before-close"
      },
      content: {
        base: "ReactModal__Content",
        afterOpen: "ReactModal__Content--after-open",
        beforeClose: "ReactModal__Content--before-close"
      }
    };
    var c = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
      },
      content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
      }
    };
    e.exports = o.createClass({
      displayName: "ModalPortal",
      getDefaultProps: function () {
        return {
          style: {
            overlay: {},
            content: {}
          }
        };
      },
      getInitialState: function () {
        return {
          afterOpen: false,
          beforeClose: false
        };
      },
      componentDidMount: function () {
        if (this.props.isOpen) {
          this.setFocusAfterRender(true);
          this.open();
        }
      },
      componentWillUnmount: function () {
        clearTimeout(this.closeTimer);
      },
      componentWillReceiveProps: function (e) {
        if (!this.props.isOpen && e.isOpen) {
          this.setFocusAfterRender(true);
          this.open();
        } else if (this.props.isOpen && !e.isOpen) {
          this.close();
        }
      },
      componentDidUpdate: function () {
        if (this.focusAfterRender) {
          this.focusContent();
          this.setFocusAfterRender(false);
        }
      },
      setFocusAfterRender: function (e) {
        this.focusAfterRender = e;
      },
      open: function () {
        i.setupScopedFocus(this.node);
        i.markForFocusLater();
        this.setState({
          isOpen: true
        }, function () {
          this.setState({
            afterOpen: true
          });
        }.bind(this));
      },
      close: function () {
        if (this.ownerHandlesClose()) {
          if (this.props.closeTimeoutMS > 0) {
            this.closeWithTimeout();
          } else {
            this.closeWithoutTimeout();
          }
        }
      },
      focusContent: function () {
        this.refs.content.focus();
      },
      closeWithTimeout: function () {
        this.setState({
          beforeClose: true
        }, function () {
          this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS);
        }.bind(this));
      },
      closeWithoutTimeout: function () {
        this.setState({
          afterOpen: false,
          beforeClose: false
        }, this.afterClose);
      },
      afterClose: function () {
        i.returnFocus();
        i.teardownScopedFocus();
      },
      handleKeyDown: function (e) {
        if (e.keyCode == 9) {
          s(this.refs.content, e);
        }
        if (e.keyCode == 27) {
          this.requestClose();
        }
      },
      handleOverlayClick: function () {
        if (this.ownerHandlesClose()) {
          this.requestClose();
        } else {
          this.focusContent();
        }
      },
      requestClose: function () {
        if (this.ownerHandlesClose()) {
          this.props.onRequestClose();
        }
      },
      ownerHandlesClose: function () {
        return this.props.onRequestClose;
      },
      shouldBeClosed: function () {
        return !this.props.isOpen && !this.state.beforeClose;
      },
      buildClassName: function (e, t) {
        var n = l[e].base;
        if (this.state.afterOpen) {
          n += " " + l[e].afterOpen;
        }
        if (this.state.beforeClose) {
          n += " " + l[e].beforeClose;
        }
        if (t) {
          return n + " " + t;
        } else {
          return n;
        }
      },
      render: function () {
        if (this.shouldBeClosed()) {
          return a();
        } else {
          return a({
            ref: "overlay",
            className: this.buildClassName("overlay", this.props.overlayClassName),
            style: u({}, c.overlay, this.props.style.overlay || {}),
            onClick: this.handleOverlayClick
          }, a({
            ref: "content",
            style: u({}, c.content, this.props.style.content || {}),
            className: this.buildClassName("content", this.props.className),
            tabIndex: "-1",
            onClick: r,
            onKeyDown: this.handleKeyDown
          }, this.props.children));
        }
      }
    });
  }, function (e, t) {
    function n(e) {
      if (typeof e == "string") {
        var t = document.querySelectorAll(e);
        e = "length" in t ? t[0] : t;
      }
      u = e || u;
    }
    function r(e) {
      i(e);
      (e || u).setAttribute("aria-hidden", "true");
    }
    function o(e) {
      i(e);
      (e || u).removeAttribute("aria-hidden");
    }
    function a(e, t) {
      if (e) {
        r(t);
      } else {
        o(t);
      }
    }
    function i(e) {
      if (!e && !u) {
        throw new Error("react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible");
      }
    }
    function s() {
      u = document.body;
    }
    var u = typeof document != "undefined" ? document.body : null;
    t.toggle = a;
    t.setElement = n;
    t.show = o;
    t.hide = r;
    t.resetForTesting = s;
  }, function (e, t, n) {
    function r(e) {
      u = true;
    }
    function o(e) {
      if (u) {
        u = false;
        if (!i) {
          return;
        }
        setTimeout(function () {
          if (!i.contains(document.activeElement)) {
            var e = a(i)[0] || i;
            e.focus();
          }
        }, 0);
      }
    }
    var a = n(79);
    var i = null;
    var s = null;
    var u = false;
    t.markForFocusLater = function () {
      s = document.activeElement;
    };
    t.returnFocus = function () {
      try {
        s.focus();
      } catch (e) {
        console.warn("You tried to return focus to " + s + " but it is not in the DOM anymore");
      }
      s = null;
    };
    t.setupScopedFocus = function (e) {
      i = e;
      if (window.addEventListener) {
        window.addEventListener("blur", r, false);
        document.addEventListener("focus", o, true);
      } else {
        window.attachEvent("onBlur", r);
        document.attachEvent("onFocus", o);
      }
    };
    t.teardownScopedFocus = function () {
      i = null;
      if (window.addEventListener) {
        window.removeEventListener("blur", r);
        document.removeEventListener("focus", o);
      } else {
        window.detachEvent("onBlur", r);
        document.detachEvent("onFocus", o);
      }
    };
  }, function (e, t, n) {
    var r = n(79);
    e.exports = function (e, t) {
      var n = r(e);
      var o = n[t.shiftKey ? 0 : n.length - 1];
      var a = o === document.activeElement || e === document.activeElement;
      if (a) {
        t.preventDefault();
        var i = n[t.shiftKey ? n.length - 1 : 0];
        i.focus();
      }
    };
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      if (!t || typeof t != "object" && typeof t != "function") {
        return e;
      } else {
        return t;
      }
    }
    function i(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    t.__esModule = true;
    t.default = undefined;
    var s = n(2);
    var u = n(78);
    var l = r(u);
    var c = n(80);
    var p = r(c);
    var d = n(81);
    r(d);
    var f = function (e) {
      function t(n, r) {
        o(this, t);
        var i = a(this, e.call(this, n, r));
        i.store = n.store;
        return i;
      }
      i(t, e);
      t.prototype.getChildContext = function () {
        return {
          store: this.store
        };
      };
      t.prototype.render = function () {
        return s.Children.only(this.props.children);
      };
      return t;
    }(s.Component);
    t.default = f;
    f.propTypes = {
      store: p.default.isRequired,
      children: l.default.element.isRequired
    };
    f.childContextTypes = {
      store: p.default.isRequired
    };
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function a(e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      if (!t || typeof t != "object" && typeof t != "function") {
        return e;
      } else {
        return t;
      }
    }
    function i(e, t) {
      if (typeof t != "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (t) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, t);
        } else {
          e.__proto__ = t;
        }
      }
    }
    function s(e) {
      return e.displayName || e.name || "Component";
    }
    function u(e, t) {
      try {
        return e.apply(t);
      } catch (e) {
        S.value = e;
        return S;
      }
    }
    function l(e, t, n, r = {}) {
      var l = Boolean(e);
      var d = e || O;
      var h = undefined;
      h = typeof t == "function" ? t : t ? (0, y.default)(t) : P;
      var v = n || k;
      var g = r.pure;
      var b = g === undefined || g;
      var E = r.withRef;
      var C = E !== undefined && E;
      var T = b && v !== k;
      var M = x++;
      return function (e) {
        function t(e, t, n) {
          var r = v(e, t, n);
          return r;
        }
        var n = "Connect(" + s(e) + ")";
        var r = function (r) {
          function s(e, t) {
            o(this, s);
            var i = a(this, r.call(this, e, t));
            i.version = M;
            i.store = e.store || t.store;
            (0, _.default)(i.store, "Could not find \"store\" in either the context or " + ("props of \"" + n + "\". ") + "Either wrap the root component in a <Provider>, " + ("or explicitly pass \"store\" as a prop to \"" + n + "\"."));
            var u = i.store.getState();
            i.state = {
              storeState: u
            };
            i.clearCache();
            return i;
          }
          i(s, r);
          s.prototype.shouldComponentUpdate = function () {
            return !b || this.haveOwnPropsChanged || this.hasStoreStateChanged;
          };
          s.prototype.computeStateProps = function (e, t) {
            if (!this.finalMapStateToProps) {
              return this.configureFinalMapState(e, t);
            }
            var n = e.getState();
            var r = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(n, t) : this.finalMapStateToProps(n);
            return r;
          };
          s.prototype.configureFinalMapState = function (e, t) {
            var n = d(e.getState(), t);
            var r = typeof n == "function";
            this.finalMapStateToProps = r ? n : d;
            this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
            if (r) {
              return this.computeStateProps(e, t);
            } else {
              return n;
            }
          };
          s.prototype.computeDispatchProps = function (e, t) {
            if (!this.finalMapDispatchToProps) {
              return this.configureFinalMapDispatch(e, t);
            }
            var n = e.dispatch;
            var r = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(n, t) : this.finalMapDispatchToProps(n);
            return r;
          };
          s.prototype.configureFinalMapDispatch = function (e, t) {
            var n = h(e.dispatch, t);
            var r = typeof n == "function";
            this.finalMapDispatchToProps = r ? n : h;
            this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
            if (r) {
              return this.computeDispatchProps(e, t);
            } else {
              return n;
            }
          };
          s.prototype.updateStatePropsIfNeeded = function () {
            var e = this.computeStateProps(this.store, this.props);
            return (!this.stateProps || !(0, m.default)(e, this.stateProps)) && (this.stateProps = e, true);
          };
          s.prototype.updateDispatchPropsIfNeeded = function () {
            var e = this.computeDispatchProps(this.store, this.props);
            return (!this.dispatchProps || !(0, m.default)(e, this.dispatchProps)) && (this.dispatchProps = e, true);
          };
          s.prototype.updateMergedPropsIfNeeded = function () {
            var e = t(this.stateProps, this.dispatchProps, this.props);
            return (!this.mergedProps || !T || !(0, m.default)(e, this.mergedProps)) && (this.mergedProps = e, true);
          };
          s.prototype.isSubscribed = function () {
            return typeof this.unsubscribe == "function";
          };
          s.prototype.trySubscribe = function () {
            if (l && !this.unsubscribe) {
              this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
              this.handleChange();
            }
          };
          s.prototype.tryUnsubscribe = function () {
            if (this.unsubscribe) {
              this.unsubscribe();
              this.unsubscribe = null;
            }
          };
          s.prototype.componentDidMount = function () {
            this.trySubscribe();
          };
          s.prototype.componentWillReceiveProps = function (e) {
            if (!b || !(0, m.default)(e, this.props)) {
              this.haveOwnPropsChanged = true;
            }
          };
          s.prototype.componentWillUnmount = function () {
            this.tryUnsubscribe();
            this.clearCache();
          };
          s.prototype.clearCache = function () {
            this.dispatchProps = null;
            this.stateProps = null;
            this.mergedProps = null;
            this.haveOwnPropsChanged = true;
            this.hasStoreStateChanged = true;
            this.haveStatePropsBeenPrecalculated = false;
            this.statePropsPrecalculationError = null;
            this.renderedElement = null;
            this.finalMapDispatchToProps = null;
            this.finalMapStateToProps = null;
          };
          s.prototype.handleChange = function () {
            if (this.unsubscribe) {
              var e = this.store.getState();
              var t = this.state.storeState;
              if (!b || t !== e) {
                if (b && !this.doStatePropsDependOnOwnProps) {
                  var n = u(this.updateStatePropsIfNeeded, this);
                  if (!n) {
                    return;
                  }
                  if (n === S) {
                    this.statePropsPrecalculationError = S.value;
                  }
                  this.haveStatePropsBeenPrecalculated = true;
                }
                this.hasStoreStateChanged = true;
                this.setState({
                  storeState: e
                });
              }
            }
          };
          s.prototype.getWrappedInstance = function () {
            (0, _.default)(C, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call.");
            return this.refs.wrappedInstance;
          };
          s.prototype.render = function () {
            var t = this.haveOwnPropsChanged;
            var n = this.hasStoreStateChanged;
            var r = this.haveStatePropsBeenPrecalculated;
            var o = this.statePropsPrecalculationError;
            var a = this.renderedElement;
            this.haveOwnPropsChanged = false;
            this.hasStoreStateChanged = false;
            this.haveStatePropsBeenPrecalculated = false;
            this.statePropsPrecalculationError = null;
            if (o) {
              throw o;
            }
            var i = true;
            var s = true;
            if (b && a) {
              i = n || t && this.doStatePropsDependOnOwnProps;
              s = t && this.doDispatchPropsDependOnOwnProps;
            }
            var u = false;
            var l = false;
            if (r) {
              u = true;
            } else if (i) {
              u = this.updateStatePropsIfNeeded();
            }
            if (s) {
              l = this.updateDispatchPropsIfNeeded();
            }
            var d = true;
            d = (!!u || !!l || !!t) && this.updateMergedPropsIfNeeded();
            if (!d && a) {
              return a;
            } else {
              if (C) {
                this.renderedElement = (0, p.createElement)(e, c({}, this.mergedProps, {
                  ref: "wrappedInstance"
                }));
              } else {
                this.renderedElement = (0, p.createElement)(e, this.mergedProps);
              }
              return this.renderedElement;
            }
          };
          return s;
        }(p.Component);
        r.displayName = n;
        r.WrappedComponent = e;
        r.contextTypes = {
          store: f.default
        };
        r.propTypes = {
          store: f.default
        };
        return (0, w.default)(r, e);
      };
    }
    t.__esModule = true;
    var c = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    };
    t.default = l;
    var p = n(2);
    var d = n(80);
    var f = r(d);
    var h = n(213);
    var m = r(h);
    var v = n(214);
    var y = r(v);
    var g = n(81);
    r(g);
    var b = n(44);
    r(b);
    var E = n(180);
    var w = r(E);
    var C = n(182);
    var _ = r(C);
    function O(e) {
      return {};
    }
    function P(e) {
      return {
        dispatch: e
      };
    }
    function k(e, t, n) {
      return c({}, n, e, t);
    }
    var S = {
      value: null
    };
    var x = 0;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (e === t) {
        return true;
      }
      var n = Object.keys(e);
      var r = Object.keys(t);
      if (n.length !== r.length) {
        return false;
      }
      var o = Object.prototype.hasOwnProperty;
      for (var a = 0; a < n.length; a++) {
        if (!o.call(t, n[a]) || e[n[a]] !== t[n[a]]) {
          return false;
        }
      }
      return true;
    }
    t.__esModule = true;
    t.default = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return function (t) {
        return (0, o.bindActionCreators)(e, t);
      };
    }
    t.__esModule = true;
    t.default = r;
    var o = n(29);
  }, function (e, t, n) {
    "use strict";

    var r = n(7);
    var o = n(54);
    var a = n(71);
    var i = {
      componentDidMount: function () {
        if (this.props.autoFocus) {
          a(o(this));
        }
      }
    };
    var s = {
      Mixin: i,
      focusDOMComponent: function () {
        a(r.getNode(this._rootNodeID));
      }
    };
    e.exports = s;
  }, function (e, t, n) {
    "use strict";

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
    var f = n(12);
    var h = n(26);
    var m = n(5);
    var v = n(224);
    var y = n(257);
    var g = n(260);
    var b = n(14);
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
    e.exports = D;
  }, function (e, t, n) {
    "use strict";

    var r = n(82);
    var o = n(5);
    var a = n(10);
    n(166);
    var i = n(265);
    var s = n(171);
    var u = n(175);
    n(4);
    var l = u(function (e) {
      return s(e);
    });
    var c = false;
    var p = "cssFloat";
    if (o.canUseDOM) {
      var d = document.createElement("div").style;
      try {
        d.font = "";
      } catch (e) {
        c = true;
      }
      if (document.documentElement.style.cssFloat === undefined) {
        p = "styleFloat";
      }
    }
    var f = {
      createMarkupForStyles: function (e) {
        var t = "";
        for (var n in e) {
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            if (r != null) {
              t += l(n) + ":";
              t += i(n, r) + ";";
            }
          }
        }
        return t || null;
      },
      setValueForStyles: function (e, t) {
        var n = e.style;
        for (var o in t) {
          if (t.hasOwnProperty(o)) {
            var a = i(o, t[o]);
            if (o === "float") {
              o = p;
            }
            if (a) {
              n[o] = a;
            } else {
              var s = c && r.shorthandPropertyExpansions[o];
              if (s) {
                for (var u in s) {
                  n[u] = "";
                }
              } else {
                n[o] = "";
              }
            }
          }
        }
      }
    };
    a.measureMethods(f, "CSSPropertyOperations", {
      setValueForStyles: "setValueForStyles"
    });
    e.exports = f;
  }, function (e, t, n) {
    "use strict";

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
    var g = n(12);
    var b = n(25);
    var E = n(26);
    var w = n(5);
    var C = n(11);
    var _ = n(17);
    var O = n(57);
    var P = n(60);
    var k = n(110);
    var S = n(14);
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
    e.exports = L;
  }, function (e, t) {
    "use strict";

    var n = 0;
    var r = {
      createReactRootIndex: function () {
        return n++;
      }
    };
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return e.substring(1, e.indexOf(" "));
    }
    var o = n(5);
    var a = n(168);
    var i = n(9);
    var s = n(73);
    var u = n(1);
    var l = /^(<[^ \/>]+)/;
    var c = "data-danger-index";
    var p = {
      dangerouslyRenderMarkup: function (e) {
        if (o.canUseDOM) {
          undefined;
        } else {
          u(false);
        }
        var t;
        var n = {};
        for (var p = 0; p < e.length; p++) {
          if (e[p]) {
            undefined;
          } else {
            u(false);
          }
          t = r(e[p]);
          t = s(t) ? t : "*";
          n[t] = n[t] || [];
          n[t][p] = e[p];
        }
        var d = [];
        var f = 0;
        for (t in n) {
          if (n.hasOwnProperty(t)) {
            var h;
            var m = n[t];
            for (h in m) {
              if (m.hasOwnProperty(h)) {
                var v = m[h];
                m[h] = v.replace(l, "$1 " + c + "=\"" + h + "\" ");
              }
            }
            for (var y = a(m.join(""), i), g = 0; g < y.length; ++g) {
              var b = y[g];
              if (b.hasAttribute && b.hasAttribute(c)) {
                h = +b.getAttribute(c);
                b.removeAttribute(c);
                if (d.hasOwnProperty(h)) {
                  u(false);
                } else {
                  undefined;
                }
                d[h] = b;
                f += 1;
              }
            }
          }
        }
        if (f !== d.length) {
          u(false);
        } else {
          undefined;
        }
        if (d.length !== e.length) {
          u(false);
        } else {
          undefined;
        }
        return d;
      },
      dangerouslyReplaceNodeWithMarkup: function (e, t) {
        if (o.canUseDOM) {
          undefined;
        } else {
          u(false);
        }
        if (t) {
          undefined;
        } else {
          u(false);
        }
        if (e.tagName.toLowerCase() === "html") {
          u(false);
        } else {
          undefined;
        }
        var n;
        n = typeof t == "string" ? a(t, i)[0] : t;
        e.parentNode.replaceChild(n, e);
      }
    };
    e.exports = p;
  }, function (e, t, n) {
    "use strict";

    var r = n(14);
    var o = [r({
      ResponderEventPlugin: null
    }), r({
      SimpleEventPlugin: null
    }), r({
      TapEventPlugin: null
    }), r({
      EnterLeaveEventPlugin: null
    }), r({
      ChangeEventPlugin: null
    }), r({
      SelectEventPlugin: null
    }), r({
      BeforeInputEventPlugin: null
    })];
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    var r = n(12);
    var o = n(26);
    var a = n(39);
    var i = n(7);
    var s = n(14);
    var u = r.topLevelTypes;
    var l = i.getFirstReactDOM;
    var c = {
      mouseEnter: {
        registrationName: s({
          onMouseEnter: null
        }),
        dependencies: [u.topMouseOut, u.topMouseOver]
      },
      mouseLeave: {
        registrationName: s({
          onMouseLeave: null
        }),
        dependencies: [u.topMouseOut, u.topMouseOver]
      }
    };
    var p = [null, null];
    var d = {
      eventTypes: c,
      extractEvents: function (e, t, n, r, s) {
        if (e === u.topMouseOver && (r.relatedTarget || r.fromElement)) {
          return null;
        }
        if (e !== u.topMouseOut && e !== u.topMouseOver) {
          return null;
        }
        var d;
        if (t.window === t) {
          d = t;
        } else {
          var f = t.ownerDocument;
          d = f ? f.defaultView || f.parentWindow : window;
        }
        var h;
        var m;
        var v = "";
        var y = "";
        if (e === u.topMouseOut) {
          h = t;
          v = n;
          m = l(r.relatedTarget || r.toElement);
          if (m) {
            y = i.getID(m);
          } else {
            m = d;
          }
          m = m || d;
        } else {
          h = d;
          m = t;
          y = n;
        }
        if (h === m) {
          return null;
        }
        var g = a.getPooled(c.mouseLeave, v, r, s);
        g.type = "mouseleave";
        g.target = h;
        g.relatedTarget = m;
        var b = a.getPooled(c.mouseEnter, y, r, s);
        b.type = "mouseenter";
        b.target = m;
        b.relatedTarget = h;
        o.accumulateEnterLeaveDispatches(g, b, v, y);
        p[0] = g;
        p[1] = b;
        return p;
      }
    };
    e.exports = d;
  }, function (e, t, n) {
    "use strict";

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
    var d = n(12);
    var f = n(97);
    var h = n(1);
    n(4);
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
    e.exports = y;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      this._root = e;
      this._startText = this.getText();
      this._fallbackText = null;
    }
    var o = n(15);
    var a = n(3);
    var i = n(109);
    a(r.prototype, {
      destructor: function () {
        this._root = null;
        this._startText = null;
        this._fallbackText = null;
      },
      getText: function () {
        if ("value" in this._root) {
          return this._root.value;
        } else {
          return this._root[i()];
        }
      },
      getData: function () {
        if (this._fallbackText) {
          return this._fallbackText;
        }
        var e;
        var t;
        var n = this._startText;
        var r = n.length;
        var o = this.getText();
        var a = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
        var s = t > 1 ? 1 - t : undefined;
        this._fallbackText = o.slice(e, s);
        return this._fallbackText;
      }
    });
    o.addPoolingTo(r);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r;
    var o = n(20);
    var a = n(5);
    var i = o.injection.MUST_USE_ATTRIBUTE;
    var s = o.injection.MUST_USE_PROPERTY;
    var u = o.injection.HAS_BOOLEAN_VALUE;
    var l = o.injection.HAS_SIDE_EFFECTS;
    var c = o.injection.HAS_NUMERIC_VALUE;
    var p = o.injection.HAS_POSITIVE_NUMERIC_VALUE;
    var d = o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
    if (a.canUseDOM) {
      var f = document.implementation;
      r = f && f.hasFeature && f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
    }
    var h = {
      isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
      Properties: {
        accept: null,
        acceptCharset: null,
        accessKey: null,
        action: null,
        allowFullScreen: i | u,
        allowTransparency: i,
        alt: null,
        async: u,
        autoComplete: null,
        autoPlay: u,
        capture: i | u,
        cellPadding: null,
        cellSpacing: null,
        charSet: i,
        challenge: i,
        checked: s | u,
        classID: i,
        className: r ? i : s,
        cols: i | p,
        colSpan: null,
        content: null,
        contentEditable: null,
        contextMenu: i,
        controls: s | u,
        coords: null,
        crossOrigin: null,
        data: null,
        dateTime: i,
        default: u,
        defer: u,
        dir: null,
        disabled: i | u,
        download: d,
        draggable: null,
        encType: null,
        form: i,
        formAction: i,
        formEncType: i,
        formMethod: i,
        formNoValidate: u,
        formTarget: i,
        frameBorder: i,
        headers: null,
        height: i,
        hidden: i | u,
        high: null,
        href: null,
        hrefLang: null,
        htmlFor: null,
        httpEquiv: null,
        icon: null,
        id: s,
        inputMode: i,
        integrity: null,
        is: i,
        keyParams: i,
        keyType: i,
        kind: null,
        label: null,
        lang: null,
        list: i,
        loop: s | u,
        low: null,
        manifest: i,
        marginHeight: null,
        marginWidth: null,
        max: null,
        maxLength: i,
        media: i,
        mediaGroup: null,
        method: null,
        min: null,
        minLength: i,
        multiple: s | u,
        muted: s | u,
        name: null,
        nonce: i,
        noValidate: u,
        open: u,
        optimum: null,
        pattern: null,
        placeholder: null,
        poster: null,
        preload: null,
        radioGroup: null,
        readOnly: s | u,
        rel: null,
        required: u,
        reversed: u,
        role: i,
        rows: i | p,
        rowSpan: null,
        sandbox: null,
        scope: null,
        scoped: u,
        scrolling: null,
        seamless: i | u,
        selected: s | u,
        shape: null,
        size: i | p,
        sizes: i,
        span: p,
        spellCheck: null,
        src: null,
        srcDoc: s,
        srcLang: null,
        srcSet: i,
        start: c,
        step: null,
        style: null,
        summary: null,
        tabIndex: null,
        target: null,
        title: null,
        type: null,
        useMap: null,
        value: s | l,
        width: i,
        wmode: i,
        wrap: null,
        about: i,
        datatype: i,
        inlist: i,
        prefix: i,
        property: i,
        resource: i,
        typeof: i,
        vocab: i,
        autoCapitalize: i,
        autoCorrect: i,
        autoSave: null,
        color: null,
        itemProp: i,
        itemScope: i | u,
        itemType: i,
        itemID: i,
        itemRef: i,
        results: null,
        security: i,
        unselectable: i
      },
      DOMAttributeNames: {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
      },
      DOMPropertyNames: {
        autoComplete: "autocomplete",
        autoFocus: "autofocus",
        autoPlay: "autoplay",
        autoSave: "autosave",
        encType: "encoding",
        hrefLang: "hreflang",
        radioGroup: "radiogroup",
        spellCheck: "spellcheck",
        srcDoc: "srcdoc",
        srcSet: "srcset"
      }
    };
    e.exports = h;
  }, function (e, t, n) {
    "use strict";

    n(27);
    var r = n(54);
    n(4);
    var o = "_getDOMNodeDidWarn";
    var a = {
      getDOMNode: function () {
        this.constructor[o] = true;
        return r(this);
      }
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = "transition" + e + "Timeout";
      var n = "transition" + e;
      return function (e) {
        if (e[n]) {
          if (e[t] == null) {
            return new Error(t + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
          }
          if (typeof e[t] != "number") {
            return new Error(t + " must be a number (in milliseconds)");
          }
        }
      };
    }
    var o = n(35);
    var a = n(3);
    var i = n(251);
    var s = n(228);
    var u = o.createClass({
      displayName: "ReactCSSTransitionGroup",
      propTypes: {
        transitionName: s.propTypes.name,
        transitionAppear: o.PropTypes.bool,
        transitionEnter: o.PropTypes.bool,
        transitionLeave: o.PropTypes.bool,
        transitionAppearTimeout: r("Appear"),
        transitionEnterTimeout: r("Enter"),
        transitionLeaveTimeout: r("Leave")
      },
      getDefaultProps: function () {
        return {
          transitionAppear: false,
          transitionEnter: true,
          transitionLeave: true
        };
      },
      _wrapChild: function (e) {
        return o.createElement(s, {
          name: this.props.transitionName,
          appear: this.props.transitionAppear,
          enter: this.props.transitionEnter,
          leave: this.props.transitionLeave,
          appearTimeout: this.props.transitionAppearTimeout,
          enterTimeout: this.props.transitionEnterTimeout,
          leaveTimeout: this.props.transitionLeaveTimeout
        }, e);
      },
      render: function () {
        return o.createElement(i, a({}, this.props, {
          childFactory: this._wrapChild
        }));
      }
    });
    e.exports = u;
  }, function (e, t, n) {
    "use strict";

    var r = n(35);
    var o = n(50);
    var a = n(164);
    var i = n(250);
    var s = n(111);
    var u = 17;
    var l = r.createClass({
      displayName: "ReactCSSTransitionGroupChild",
      propTypes: {
        name: r.PropTypes.oneOfType([r.PropTypes.string, r.PropTypes.shape({
          enter: r.PropTypes.string,
          leave: r.PropTypes.string,
          active: r.PropTypes.string
        }), r.PropTypes.shape({
          enter: r.PropTypes.string,
          enterActive: r.PropTypes.string,
          leave: r.PropTypes.string,
          leaveActive: r.PropTypes.string,
          appear: r.PropTypes.string,
          appearActive: r.PropTypes.string
        })]).isRequired,
        appear: r.PropTypes.bool,
        enter: r.PropTypes.bool,
        leave: r.PropTypes.bool,
        appearTimeout: r.PropTypes.number,
        enterTimeout: r.PropTypes.number,
        leaveTimeout: r.PropTypes.number
      },
      transition: function (e, t, n) {
        var r = o.findDOMNode(this);
        if (!r) {
          if (t) {
            t();
          }
          return;
        }
        var s = this.props.name[e] || this.props.name + "-" + e;
        var u = this.props.name[e + "Active"] || s + "-active";
        var l = null;
        function c(e) {
          if (!e || e.target === r) {
            clearTimeout(l);
            a.removeClass(r, s);
            a.removeClass(r, u);
            i.removeEndEventListener(r, c);
            if (t) {
              t();
            }
          }
        }
        a.addClass(r, s);
        this.queueClass(u);
        if (n) {
          l = setTimeout(c, n);
          this.transitionTimeouts.push(l);
        } else {
          i.addEndEventListener(r, c);
        }
      },
      queueClass: function (e) {
        this.classNameQueue.push(e);
        this.timeout ||= setTimeout(this.flushClassNameQueue, u);
      },
      flushClassNameQueue: function () {
        if (this.isMounted()) {
          this.classNameQueue.forEach(a.addClass.bind(a, o.findDOMNode(this)));
        }
        this.classNameQueue.length = 0;
        this.timeout = null;
      },
      componentWillMount: function () {
        this.classNameQueue = [];
        this.transitionTimeouts = [];
      },
      componentWillUnmount: function () {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.transitionTimeouts.forEach(function (e) {
          clearTimeout(e);
        });
      },
      componentWillAppear: function (e) {
        if (this.props.appear) {
          this.transition("appear", e, this.props.appearTimeout);
        } else {
          e();
        }
      },
      componentWillEnter: function (e) {
        if (this.props.enter) {
          this.transition("enter", e, this.props.enterTimeout);
        } else {
          e();
        }
      },
      componentWillLeave: function (e) {
        if (this.props.leave) {
          this.transition("leave", e, this.props.leaveTimeout);
        } else {
          e();
        }
      },
      render: function () {
        return s(this.props.children);
      }
    });
    e.exports = l;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      var r = e[n] === undefined;
      if (t != null && r) {
        e[n] = a(t, null);
      }
    }
    var o = n(16);
    var a = n(59);
    var i = n(62);
    var s = n(63);
    n(4);
    var u = {
      instantiateChildren: function (e, t, n) {
        if (e == null) {
          return null;
        }
        var o = {};
        s(e, r, o);
        return o;
      },
      updateChildren: function (e, t, n, r) {
        if (!t && !e) {
          return null;
        }
        var s;
        for (s in t) {
          if (t.hasOwnProperty(s)) {
            var u = e && e[s];
            var l = u && u._currentElement;
            var c = t[s];
            if (u != null && i(l, c)) {
              o.receiveComponent(u, c, n, r);
              t[s] = u;
            } else {
              if (u) {
                o.unmountComponent(u, s);
              }
              var p = a(c, null);
              t[s] = p;
            }
          }
        }
        for (s in e) {
          if (!!e.hasOwnProperty(s) && (!t || !t.hasOwnProperty(s))) {
            o.unmountComponent(e[s]);
          }
        }
        return t;
      },
      unmountChildren: function (e) {
        for (var t in e) {
          if (e.hasOwnProperty(t)) {
            var n = e[t];
            o.unmountComponent(n);
          }
        }
      }
    };
    e.exports = u;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = e._currentElement._owner || null;
      if (t) {
        var n = t.getName();
        if (n) {
          return " Check the render method of `" + n + "`.";
        }
      }
      return "";
    }
    function o(e) {}
    var a = n(49);
    var i = n(13);
    var s = n(8);
    var u = n(27);
    var l = n(10);
    var c = n(38);
    n(37);
    var p = n(16);
    var d = n(52);
    var f = n(3);
    var h = n(24);
    var m = n(1);
    var v = n(62);
    n(4);
    o.prototype.render = function () {
      var e = u.get(this)._currentElement.type;
      return e(this.props, this.context, this.updater);
    };
    var y = 1;
    var g = {
      construct: function (e) {
        this._currentElement = e;
        this._rootNodeID = null;
        this._instance = null;
        this._pendingElement = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._renderedComponent = null;
        this._context = null;
        this._mountOrder = 0;
        this._topLevelWrapper = null;
        this._pendingCallbacks = null;
      },
      mountComponent: function (e, t, n) {
        this._context = n;
        this._mountOrder = y++;
        this._rootNodeID = e;
        var r;
        var a;
        var i = this._processProps(this._currentElement.props);
        var l = this._processContext(n);
        var c = this._currentElement.type;
        var f = "prototype" in c;
        if (f) {
          r = new c(i, l, d);
        }
        if (!f || r === null || r === false || !!s.isValidElement(r)) {
          a = r;
          r = new o(c);
        }
        r.props = i;
        r.context = l;
        r.refs = h;
        r.updater = d;
        this._instance = r;
        u.set(r, this);
        var v = r.state;
        if (v === undefined) {
          r.state = v = null;
        }
        if (typeof v != "object" || Array.isArray(v)) {
          m(false);
        } else {
          undefined;
        }
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        if (r.componentWillMount) {
          r.componentWillMount();
          if (this._pendingStateQueue) {
            r.state = this._processPendingState(r.props, r.context);
          }
        }
        if (a === undefined) {
          a = this._renderValidatedComponent();
        }
        this._renderedComponent = this._instantiateReactComponent(a);
        var g = p.mountComponent(this._renderedComponent, e, t, this._processChildContext(n));
        if (r.componentDidMount) {
          t.getReactMountReady().enqueue(r.componentDidMount, r);
        }
        return g;
      },
      unmountComponent: function () {
        var e = this._instance;
        if (e.componentWillUnmount) {
          e.componentWillUnmount();
        }
        p.unmountComponent(this._renderedComponent);
        this._renderedComponent = null;
        this._instance = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._pendingCallbacks = null;
        this._pendingElement = null;
        this._context = null;
        this._rootNodeID = null;
        this._topLevelWrapper = null;
        u.remove(e);
      },
      _maskContext: function (e) {
        var t = null;
        var n = this._currentElement.type;
        var r = n.contextTypes;
        if (!r) {
          return h;
        }
        t = {};
        for (var o in r) {
          t[o] = e[o];
        }
        return t;
      },
      _processContext: function (e) {
        var t = this._maskContext(e);
        return t;
      },
      _processChildContext: function (e) {
        var t = this._currentElement.type;
        var n = this._instance;
        var r = n.getChildContext && n.getChildContext();
        if (r) {
          if (typeof t.childContextTypes != "object") {
            m(false);
          } else {
            undefined;
          }
          for (var o in r) {
            if (o in t.childContextTypes) {
              undefined;
            } else {
              m(false);
            }
          }
          return f({}, e, r);
        }
        return e;
      },
      _processProps: function (e) {
        return e;
      },
      _checkPropTypes: function (e, t, n) {
        var o = this.getName();
        for (var a in e) {
          if (e.hasOwnProperty(a)) {
            var i;
            try {
              if (typeof e[a] != "function") {
                m(false);
              } else {
                undefined;
              }
              i = e[a](t, a, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (e) {
              i = e;
            }
            if (i instanceof Error) {
              r(this);
              n === c.prop;
            }
          }
        }
      },
      receiveComponent: function (e, t, n) {
        var r = this._currentElement;
        var o = this._context;
        this._pendingElement = null;
        this.updateComponent(t, r, e, o, n);
      },
      performUpdateIfNecessary: function (e) {
        if (this._pendingElement != null) {
          p.receiveComponent(this, this._pendingElement || this._currentElement, e, this._context);
        }
        if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
          this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context);
        }
      },
      updateComponent: function (e, t, n, r, o) {
        var a;
        var i = this._instance;
        var s = this._context === o ? i.context : this._processContext(o);
        if (t === n) {
          a = n.props;
        } else {
          a = this._processProps(n.props);
          if (i.componentWillReceiveProps) {
            i.componentWillReceiveProps(a, s);
          }
        }
        var u = this._processPendingState(a, s);
        var l = this._pendingForceUpdate || !i.shouldComponentUpdate || i.shouldComponentUpdate(a, u, s);
        if (l) {
          this._pendingForceUpdate = false;
          this._performComponentUpdate(n, a, u, s, e, o);
        } else {
          this._currentElement = n;
          this._context = o;
          i.props = a;
          i.state = u;
          i.context = s;
        }
      },
      _processPendingState: function (e, t) {
        var n = this._instance;
        var r = this._pendingStateQueue;
        var o = this._pendingReplaceState;
        this._pendingReplaceState = false;
        this._pendingStateQueue = null;
        if (!r) {
          return n.state;
        }
        if (o && r.length === 1) {
          return r[0];
        }
        var a = f({}, o ? r[0] : n.state);
        for (var i = o ? 1 : 0; i < r.length; i++) {
          var s = r[i];
          f(a, typeof s == "function" ? s.call(n, a, e, t) : s);
        }
        return a;
      },
      _performComponentUpdate: function (e, t, n, r, o, a) {
        var i;
        var s;
        var u;
        var l = this._instance;
        var c = Boolean(l.componentDidUpdate);
        if (c) {
          i = l.props;
          s = l.state;
          u = l.context;
        }
        if (l.componentWillUpdate) {
          l.componentWillUpdate(t, n, r);
        }
        this._currentElement = e;
        this._context = a;
        l.props = t;
        l.state = n;
        l.context = r;
        this._updateRenderedComponent(o, a);
        if (c) {
          o.getReactMountReady().enqueue(l.componentDidUpdate.bind(l, i, s, u), l);
        }
      },
      _updateRenderedComponent: function (e, t) {
        var n = this._renderedComponent;
        var r = n._currentElement;
        var o = this._renderValidatedComponent();
        if (v(r, o)) {
          p.receiveComponent(n, o, e, this._processChildContext(t));
        } else {
          var a = this._rootNodeID;
          var i = n._rootNodeID;
          p.unmountComponent(n);
          this._renderedComponent = this._instantiateReactComponent(o);
          var s = p.mountComponent(this._renderedComponent, a, e, this._processChildContext(t));
          this._replaceNodeWithMarkupByID(i, s);
        }
      },
      _replaceNodeWithMarkupByID: function (e, t) {
        a.replaceNodeWithMarkupByID(e, t);
      },
      _renderValidatedComponentWithoutOwnerOrContext: function () {
        var e = this._instance;
        var t = e.render();
        return t;
      },
      _renderValidatedComponent: function () {
        var e;
        i.current = this;
        try {
          e = this._renderValidatedComponentWithoutOwnerOrContext();
        } finally {
          i.current = null;
        }
        if (e === null || e === false || s.isValidElement(e)) {
          undefined;
        } else {
          m(false);
        }
        return e;
      },
      attachRef: function (e, t) {
        var n = this.getPublicInstance();
        if (n == null) {
          m(false);
        } else {
          undefined;
        }
        var r = t.getPublicInstance();
        var o = n.refs === h ? n.refs = {} : n.refs;
        o[e] = r;
      },
      detachRef: function (e) {
        var t = this.getPublicInstance().refs;
        delete t[e];
      },
      getName: function () {
        var e = this._currentElement.type;
        var t = this._instance && this._instance.constructor;
        return e.displayName || t && t.displayName || e.name || t && t.name || null;
      },
      getPublicInstance: function () {
        var e = this._instance;
        if (e instanceof o) {
          return null;
        } else {
          return e;
        }
      },
      _instantiateReactComponent: null
    };
    l.measureMethods(g, "ReactCompositeComponent", {
      mountComponent: "mountComponent",
      updateComponent: "updateComponent",
      _renderValidatedComponent: "_renderValidatedComponent"
    });
    var b = {
      Mixin: g
    };
    e.exports = b;
  }, function (e, t) {
    "use strict";

    var n = {
      onClick: true,
      onDoubleClick: true,
      onMouseDown: true,
      onMouseMove: true,
      onMouseUp: true,
      onClickCapture: true,
      onDoubleClickCapture: true,
      onMouseDownCapture: true,
      onMouseMoveCapture: true,
      onMouseUpCapture: true
    };
    var r = {
      getNativeProps: function (e, t, r) {
        if (!t.disabled) {
          return t;
        }
        var o = {};
        for (var a in t) {
          if (t.hasOwnProperty(a) && !n[a]) {
            o[a] = t[a];
          }
        }
        return o;
      }
    };
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r() {
      return this;
    }
    function o() {
      var e = this._reactInternalComponent;
      return !!e;
    }
    function a() {}
    function i(e, t) {
      var n = this._reactInternalComponent;
      if (n) {
        D.enqueueSetPropsInternal(n, e);
        if (t) {
          D.enqueueCallbackInternal(n, t);
        }
      }
    }
    function s(e, t) {
      var n = this._reactInternalComponent;
      if (n) {
        D.enqueueReplacePropsInternal(n, e);
        if (t) {
          D.enqueueCallbackInternal(n, t);
        }
      }
    }
    function u(e, t) {
      if (t) {
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) {
            j(false);
          } else {
            undefined;
          }
          if (typeof t.dangerouslySetInnerHTML == "object" && z in t.dangerouslySetInnerHTML) {
            undefined;
          } else {
            j(false);
          }
        }
        if (t.style != null && typeof t.style != "object") {
          j(false);
        } else {
          undefined;
        }
      }
    }
    function l(e, t, n, r) {
      var o = T.findReactContainerForID(e);
      if (o) {
        var a = o.nodeType === Y ? o.ownerDocument : o;
        V(t, a);
      }
      r.getReactMountReady().enqueue(c, {
        id: e,
        registrationName: t,
        listener: n
      });
    }
    function c() {
      var e = this;
      C.putListener(e.id, e.registrationName, e.listener);
    }
    function p() {
      var e = this;
      if (e._rootNodeID) {
        undefined;
      } else {
        j(false);
      }
      var t = T.getNode(e._rootNodeID);
      if (t) {
        undefined;
      } else {
        j(false);
      }
      switch (e._tag) {
        case "iframe":
          e._wrapperState.listeners = [C.trapBubbledEvent(w.topLevelTypes.topLoad, "load", t)];
          break;
        case "video":
        case "audio":
          e._wrapperState.listeners = [];
          for (var n in G) {
            if (G.hasOwnProperty(n)) {
              e._wrapperState.listeners.push(C.trapBubbledEvent(w.topLevelTypes[n], G[n], t));
            }
          }
          break;
        case "img":
          e._wrapperState.listeners = [C.trapBubbledEvent(w.topLevelTypes.topError, "error", t), C.trapBubbledEvent(w.topLevelTypes.topLoad, "load", t)];
          break;
        case "form":
          e._wrapperState.listeners = [C.trapBubbledEvent(w.topLevelTypes.topReset, "reset", t), C.trapBubbledEvent(w.topLevelTypes.topSubmit, "submit", t)];
      }
    }
    function d() {
      P.mountReadyWrapper(this);
    }
    function f() {
      S.postUpdateWrapper(this);
    }
    function h(e) {
      if (!J.call(Z, e)) {
        if (Q.test(e)) {
          undefined;
        } else {
          j(false);
        }
        Z[e] = true;
      }
    }
    function m(e, t) {
      return e.indexOf("-") >= 0 || t.is != null;
    }
    function v(e) {
      h(e);
      this._tag = e.toLowerCase();
      this._renderedChildren = null;
      this._previousStyle = null;
      this._previousStyleCopy = null;
      this._rootNodeID = null;
      this._wrapperState = null;
      this._topLevelWrapper = null;
      this._nodeWithLegacyProperties = null;
    }
    var y = n(215);
    var g = n(217);
    var b = n(20);
    var E = n(46);
    var w = n(12);
    var C = n(36);
    var _ = n(48);
    var O = n(231);
    var P = n(234);
    var k = n(235);
    var S = n(89);
    var x = n(237);
    var T = n(7);
    var M = n(242);
    var N = n(10);
    var D = n(52);
    var R = n(3);
    var A = n(41);
    var I = n(42);
    var j = n(1);
    n(60);
    var L = n(14);
    var U = n(43);
    var F = n(61);
    n(74);
    n(64);
    n(4);
    var B = C.deleteListener;
    var V = C.listenTo;
    var W = C.registrationNameModules;
    var H = {
      string: true,
      number: true
    };
    var q = L({
      children: null
    });
    var K = L({
      style: null
    });
    var z = L({
      __html: null
    });
    var Y = 1;
    var G = {
      topAbort: "abort",
      topCanPlay: "canplay",
      topCanPlayThrough: "canplaythrough",
      topDurationChange: "durationchange",
      topEmptied: "emptied",
      topEncrypted: "encrypted",
      topEnded: "ended",
      topError: "error",
      topLoadedData: "loadeddata",
      topLoadedMetadata: "loadedmetadata",
      topLoadStart: "loadstart",
      topPause: "pause",
      topPlay: "play",
      topPlaying: "playing",
      topProgress: "progress",
      topRateChange: "ratechange",
      topSeeked: "seeked",
      topSeeking: "seeking",
      topStalled: "stalled",
      topSuspend: "suspend",
      topTimeUpdate: "timeupdate",
      topVolumeChange: "volumechange",
      topWaiting: "waiting"
    };
    var X = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var $ = {
      listing: true,
      pre: true,
      textarea: true
    };
    R({
      menuitem: true
    }, X);
    var Q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Z = {};
    var J = {}.hasOwnProperty;
    v.displayName = "ReactDOMComponent";
    v.Mixin = {
      construct: function (e) {
        this._currentElement = e;
      },
      mountComponent: function (e, t, n) {
        this._rootNodeID = e;
        var r = this._currentElement.props;
        switch (this._tag) {
          case "iframe":
          case "img":
          case "form":
          case "video":
          case "audio":
            this._wrapperState = {
              listeners: null
            };
            t.getReactMountReady().enqueue(p, this);
            break;
          case "button":
            r = O.getNativeProps(this, r, n);
            break;
          case "input":
            P.mountWrapper(this, r, n);
            r = P.getNativeProps(this, r, n);
            break;
          case "option":
            k.mountWrapper(this, r, n);
            r = k.getNativeProps(this, r, n);
            break;
          case "select":
            S.mountWrapper(this, r, n);
            r = S.getNativeProps(this, r, n);
            n = S.processChildContext(this, r, n);
            break;
          case "textarea":
            x.mountWrapper(this, r, n);
            r = x.getNativeProps(this, r, n);
        }
        u(this, r);
        var o;
        if (t.useCreateElement) {
          var a = n[T.ownerDocumentContextKey];
          var i = a.createElement(this._currentElement.type);
          E.setAttributeForID(i, this._rootNodeID);
          T.getID(i);
          this._updateDOMProperties({}, r, t, i);
          this._createInitialChildren(t, r, n, i);
          o = i;
        } else {
          var s = this._createOpenTagMarkupAndPutListeners(t, r);
          var l = this._createContentMarkup(t, r, n);
          o = !l && X[this._tag] ? s + "/>" : s + ">" + l + "</" + this._currentElement.type + ">";
        }
        switch (this._tag) {
          case "input":
            t.getReactMountReady().enqueue(d, this);
          case "button":
          case "select":
          case "textarea":
            if (r.autoFocus) {
              t.getReactMountReady().enqueue(y.focusDOMComponent, this);
            }
        }
        return o;
      },
      _createOpenTagMarkupAndPutListeners: function (e, t) {
        var n = "<" + this._currentElement.type;
        for (var r in t) {
          if (t.hasOwnProperty(r)) {
            var o = t[r];
            if (o != null) {
              if (W.hasOwnProperty(r)) {
                if (o) {
                  l(this._rootNodeID, r, o, e);
                }
              } else {
                if (r === K) {
                  o &&= this._previousStyleCopy = R({}, t.style);
                  o = g.createMarkupForStyles(o);
                }
                var a = null;
                if (this._tag != null && m(this._tag, t)) {
                  if (r !== q) {
                    a = E.createMarkupForCustomAttribute(r, o);
                  }
                } else {
                  a = E.createMarkupForProperty(r, o);
                }
                if (a) {
                  n += " " + a;
                }
              }
            }
          }
        }
        if (e.renderToStaticMarkup) {
          return n;
        }
        var i = E.createMarkupForID(this._rootNodeID);
        return n + " " + i;
      },
      _createContentMarkup: function (e, t, n) {
        var r = "";
        var o = t.dangerouslySetInnerHTML;
        if (o != null) {
          if (o.__html != null) {
            r = o.__html;
          }
        } else {
          var a = H[typeof t.children] ? t.children : null;
          var i = a != null ? null : t.children;
          if (a != null) {
            r = I(a);
          } else if (i != null) {
            var s = this.mountChildren(i, e, n);
            r = s.join("");
          }
        }
        if ($[this._tag] && r.charAt(0) === "\n") {
          return "\n" + r;
        } else {
          return r;
        }
      },
      _createInitialChildren: function (e, t, n, r) {
        var o = t.dangerouslySetInnerHTML;
        if (o != null) {
          if (o.__html != null) {
            U(r, o.__html);
          }
        } else {
          var a = H[typeof t.children] ? t.children : null;
          var i = a != null ? null : t.children;
          if (a != null) {
            F(r, a);
          } else if (i != null) {
            for (var s = this.mountChildren(i, e, n), u = 0; u < s.length; u++) {
              r.appendChild(s[u]);
            }
          }
        }
      },
      receiveComponent: function (e, t, n) {
        var r = this._currentElement;
        this._currentElement = e;
        this.updateComponent(t, r, e, n);
      },
      updateComponent: function (e, t, n, r) {
        var o = t.props;
        var a = this._currentElement.props;
        switch (this._tag) {
          case "button":
            o = O.getNativeProps(this, o);
            a = O.getNativeProps(this, a);
            break;
          case "input":
            P.updateWrapper(this);
            o = P.getNativeProps(this, o);
            a = P.getNativeProps(this, a);
            break;
          case "option":
            o = k.getNativeProps(this, o);
            a = k.getNativeProps(this, a);
            break;
          case "select":
            o = S.getNativeProps(this, o);
            a = S.getNativeProps(this, a);
            break;
          case "textarea":
            x.updateWrapper(this);
            o = x.getNativeProps(this, o);
            a = x.getNativeProps(this, a);
        }
        u(this, a);
        this._updateDOMProperties(o, a, e, null);
        this._updateDOMChildren(o, a, e, r);
        if (!A && this._nodeWithLegacyProperties) {
          this._nodeWithLegacyProperties.props = a;
        }
        if (this._tag === "select") {
          e.getReactMountReady().enqueue(f, this);
        }
      },
      _updateDOMProperties: function (e, t, n, r) {
        var o;
        var a;
        var i;
        for (o in e) {
          if (!t.hasOwnProperty(o) && e.hasOwnProperty(o)) {
            if (o === K) {
              var s = this._previousStyleCopy;
              for (a in s) {
                if (s.hasOwnProperty(a)) {
                  i = i || {};
                  i[a] = "";
                }
              }
              this._previousStyleCopy = null;
            } else if (W.hasOwnProperty(o)) {
              if (e[o]) {
                B(this._rootNodeID, o);
              }
            } else if (b.properties[o] || b.isCustomAttribute(o)) {
              r ||= T.getNode(this._rootNodeID);
              E.deleteValueForProperty(r, o);
            }
          }
        }
        for (o in t) {
          var u = t[o];
          var c = o === K ? this._previousStyleCopy : e[o];
          if (t.hasOwnProperty(o) && u !== c) {
            if (o === K) {
              if (u) {
                u = this._previousStyleCopy = R({}, u);
              } else {
                this._previousStyleCopy = null;
              }
              if (c) {
                for (a in c) {
                  if (!!c.hasOwnProperty(a) && (!u || !u.hasOwnProperty(a))) {
                    i = i || {};
                    i[a] = "";
                  }
                }
                for (a in u) {
                  if (u.hasOwnProperty(a) && c[a] !== u[a]) {
                    i = i || {};
                    i[a] = u[a];
                  }
                }
              } else {
                i = u;
              }
            } else if (W.hasOwnProperty(o)) {
              if (u) {
                l(this._rootNodeID, o, u, n);
              } else if (c) {
                B(this._rootNodeID, o);
              }
            } else if (m(this._tag, t)) {
              r ||= T.getNode(this._rootNodeID);
              if (o === q) {
                u = null;
              }
              E.setValueForAttribute(r, o, u);
            } else if (b.properties[o] || b.isCustomAttribute(o)) {
              r ||= T.getNode(this._rootNodeID);
              if (u != null) {
                E.setValueForProperty(r, o, u);
              } else {
                E.deleteValueForProperty(r, o);
              }
            }
          }
        }
        if (i) {
          r ||= T.getNode(this._rootNodeID);
          g.setValueForStyles(r, i);
        }
      },
      _updateDOMChildren: function (e, t, n, r) {
        var o = H[typeof e.children] ? e.children : null;
        var a = H[typeof t.children] ? t.children : null;
        var i = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html;
        var s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html;
        var u = o != null ? null : e.children;
        var l = a != null ? null : t.children;
        var c = o != null || i != null;
        var p = a != null || s != null;
        if (u != null && l == null) {
          this.updateChildren(null, n, r);
        } else if (c && !p) {
          this.updateTextContent("");
        }
        if (a != null) {
          if (o !== a) {
            this.updateTextContent("" + a);
          }
        } else if (s != null) {
          if (i !== s) {
            this.updateMarkup("" + s);
          }
        } else if (l != null) {
          this.updateChildren(l, n, r);
        }
      },
      unmountComponent: function () {
        switch (this._tag) {
          case "iframe":
          case "img":
          case "form":
          case "video":
          case "audio":
            var e = this._wrapperState.listeners;
            if (e) {
              for (var t = 0; t < e.length; t++) {
                e[t].remove();
              }
            }
            break;
          case "input":
            P.unmountWrapper(this);
            break;
          case "html":
          case "head":
          case "body":
            j(false);
        }
        this.unmountChildren();
        C.deleteAllListeners(this._rootNodeID);
        _.unmountIDFromEnvironment(this._rootNodeID);
        this._rootNodeID = null;
        this._wrapperState = null;
        if (this._nodeWithLegacyProperties) {
          var n = this._nodeWithLegacyProperties;
          n._reactInternalComponent = null;
          this._nodeWithLegacyProperties = null;
        }
      },
      getPublicInstance: function () {
        if (!this._nodeWithLegacyProperties) {
          var e = T.getNode(this._rootNodeID);
          e._reactInternalComponent = this;
          e.getDOMNode = r;
          e.isMounted = o;
          e.setState = a;
          e.replaceState = a;
          e.forceUpdate = a;
          e.setProps = i;
          e.replaceProps = s;
          e.props = this._currentElement.props;
          this._nodeWithLegacyProperties = e;
        }
        return this._nodeWithLegacyProperties;
      }
    };
    N.measureMethods(v, "ReactDOMComponent", {
      mountComponent: "mountComponent",
      updateComponent: "updateComponent"
    });
    R(v.prototype, v.Mixin, M.Mixin);
    e.exports = v;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return o.createFactory(e);
    }
    var o = n(8);
    n(94);
    var a = n(174);
    var i = a({
      a: "a",
      abbr: "abbr",
      address: "address",
      area: "area",
      article: "article",
      aside: "aside",
      audio: "audio",
      b: "b",
      base: "base",
      bdi: "bdi",
      bdo: "bdo",
      big: "big",
      blockquote: "blockquote",
      body: "body",
      br: "br",
      button: "button",
      canvas: "canvas",
      caption: "caption",
      cite: "cite",
      code: "code",
      col: "col",
      colgroup: "colgroup",
      data: "data",
      datalist: "datalist",
      dd: "dd",
      del: "del",
      details: "details",
      dfn: "dfn",
      dialog: "dialog",
      div: "div",
      dl: "dl",
      dt: "dt",
      em: "em",
      embed: "embed",
      fieldset: "fieldset",
      figcaption: "figcaption",
      figure: "figure",
      footer: "footer",
      form: "form",
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      head: "head",
      header: "header",
      hgroup: "hgroup",
      hr: "hr",
      html: "html",
      i: "i",
      iframe: "iframe",
      img: "img",
      input: "input",
      ins: "ins",
      kbd: "kbd",
      keygen: "keygen",
      label: "label",
      legend: "legend",
      li: "li",
      link: "link",
      main: "main",
      map: "map",
      mark: "mark",
      menu: "menu",
      menuitem: "menuitem",
      meta: "meta",
      meter: "meter",
      nav: "nav",
      noscript: "noscript",
      object: "object",
      ol: "ol",
      optgroup: "optgroup",
      option: "option",
      output: "output",
      p: "p",
      param: "param",
      picture: "picture",
      pre: "pre",
      progress: "progress",
      q: "q",
      rp: "rp",
      rt: "rt",
      ruby: "ruby",
      s: "s",
      samp: "samp",
      script: "script",
      section: "section",
      select: "select",
      small: "small",
      source: "source",
      span: "span",
      strong: "strong",
      style: "style",
      sub: "sub",
      summary: "summary",
      sup: "sup",
      table: "table",
      tbody: "tbody",
      td: "td",
      textarea: "textarea",
      tfoot: "tfoot",
      th: "th",
      thead: "thead",
      time: "time",
      title: "title",
      tr: "tr",
      track: "track",
      u: "u",
      ul: "ul",
      var: "var",
      video: "video",
      wbr: "wbr",
      circle: "circle",
      clipPath: "clipPath",
      defs: "defs",
      ellipse: "ellipse",
      g: "g",
      image: "image",
      line: "line",
      linearGradient: "linearGradient",
      mask: "mask",
      path: "path",
      pattern: "pattern",
      polygon: "polygon",
      polyline: "polyline",
      radialGradient: "radialGradient",
      rect: "rect",
      stop: "stop",
      svg: "svg",
      text: "text",
      tspan: "tspan"
    }, r);
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (this._rootNodeID) {
        d.updateWrapper(this);
      }
    }
    function o(e) {
      var t = this._currentElement.props;
      var n = i.executeOnChange(t, e);
      u.asap(r, this);
      var o = t.name;
      if (t.type === "radio" && o != null) {
        var a = s.getNode(this._rootNodeID);
        for (var l = a; l.parentNode;) {
          l = l.parentNode;
        }
        for (var d = l.querySelectorAll("input[name=" + JSON.stringify("" + o) + "][type=\"radio\"]"), f = 0; f < d.length; f++) {
          var h = d[f];
          if (h !== a && h.form === a.form) {
            var m = s.getID(h);
            if (m) {
              undefined;
            } else {
              c(false);
            }
            var v = p[m];
            if (v) {
              undefined;
            } else {
              c(false);
            }
            u.asap(r, v);
          }
        }
      }
      return n;
    }
    var a = n(51);
    var i = n(47);
    var s = n(7);
    var u = n(11);
    var l = n(3);
    var c = n(1);
    var p = {};
    var d = {
      getNativeProps: function (e, t, n) {
        var r = i.getValue(t);
        var o = i.getChecked(t);
        var a = l({}, t, {
          defaultChecked: undefined,
          defaultValue: undefined,
          value: r ?? e._wrapperState.initialValue,
          checked: o ?? e._wrapperState.initialChecked,
          onChange: e._wrapperState.onChange
        });
        return a;
      },
      mountWrapper: function (e, t) {
        var n = t.defaultValue;
        e._wrapperState = {
          initialChecked: t.defaultChecked || false,
          initialValue: n ?? null,
          onChange: o.bind(e)
        };
      },
      mountReadyWrapper: function (e) {
        p[e._rootNodeID] = e;
      },
      unmountWrapper: function (e) {
        delete p[e._rootNodeID];
      },
      updateWrapper: function (e) {
        var t = e._currentElement.props;
        var n = t.checked;
        if (n != null) {
          a.updatePropertyByID(e._rootNodeID, "checked", n || false);
        }
        var r = i.getValue(t);
        if (r != null) {
          a.updatePropertyByID(e._rootNodeID, "value", "" + r);
        }
      }
    };
    e.exports = d;
  }, function (e, t, n) {
    "use strict";

    var r = n(85);
    var o = n(89);
    var a = n(3);
    n(4);
    var i = o.valueContextKey;
    var s = {
      mountWrapper: function (e, t, n) {
        var r = n[i];
        var o = null;
        if (r != null) {
          o = false;
          if (Array.isArray(r)) {
            for (var a = 0; a < r.length; a++) {
              if ("" + r[a] == "" + t.value) {
                o = true;
                break;
              }
            }
          } else {
            o = "" + r == "" + t.value;
          }
        }
        e._wrapperState = {
          selected: o
        };
      },
      getNativeProps: function (e, t, n) {
        var o = a({
          selected: undefined,
          children: undefined
        }, t);
        if (e._wrapperState.selected != null) {
          o.selected = e._wrapperState.selected;
        }
        var i = "";
        r.forEach(t.children, function (e) {
          if (e != null) {
            if (typeof e == "string" || typeof e == "number") {
              i += e;
            }
          }
        });
        if (i) {
          o.children = i;
        }
        return o;
      }
    };
    e.exports = s;
  }, function (e, t, n) {
    "use strict";

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
    var u = n(5);
    var l = n(268);
    var c = n(109);
    var p = u.canUseDOM && "selection" in document && !("getSelection" in window);
    var d = {
      getOffsets: p ? o : a,
      setOffsets: p ? i : s
    };
    e.exports = d;
  }, function (e, t, n) {
    "use strict";

    function r() {
      if (this._rootNodeID) {
        c.updateWrapper(this);
      }
    }
    function o(e) {
      var t = this._currentElement.props;
      var n = a.executeOnChange(t, e);
      s.asap(r, this);
      return n;
    }
    var a = n(47);
    var i = n(51);
    var s = n(11);
    var u = n(3);
    var l = n(1);
    n(4);
    var c = {
      getNativeProps: function (e, t, n) {
        if (t.dangerouslySetInnerHTML != null) {
          l(false);
        } else {
          undefined;
        }
        var r = u({}, t, {
          defaultValue: undefined,
          value: undefined,
          children: e._wrapperState.initialValue,
          onChange: e._wrapperState.onChange
        });
        return r;
      },
      mountWrapper: function (e, t) {
        var n = t.defaultValue;
        var r = t.children;
        if (r != null) {
          if (n != null) {
            l(false);
          } else {
            undefined;
          }
          if (Array.isArray(r)) {
            if (r.length <= 1) {
              undefined;
            } else {
              l(false);
            }
            r = r[0];
          }
          n = "" + r;
        }
        if (n == null) {
          n = "";
        }
        var i = a.getValue(t);
        e._wrapperState = {
          initialValue: "" + (i ?? n),
          onChange: o.bind(e)
        };
      },
      updateWrapper: function (e) {
        var t = e._currentElement.props;
        var n = a.getValue(t);
        if (n != null) {
          i.updatePropertyByID(e._rootNodeID, "value", "" + n);
        }
      }
    };
    e.exports = c;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      o.enqueueEvents(e);
      o.processEventQueue(false);
    }
    var o = n(25);
    var a = {
      handleTopLevel: function (e, t, n, a, i) {
        var s = o.extractEvents(e, t, n, a, i);
        r(s);
      }
    };
    e.exports = a;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = d.getID(e);
      var n = p.getReactRootIDFromNodeID(t);
      var r = d.findReactContainerForID(n);
      var o = d.getFirstReactDOM(r);
      return o;
    }
    function o(e, t) {
      this.topLevelType = e;
      this.nativeEvent = t;
      this.ancestors = [];
    }
    function a(e) {
      i(e);
    }
    function i(e) {
      var t = d.getFirstReactDOM(m(e.nativeEvent)) || window;
      for (var n = t; n;) {
        e.ancestors.push(n);
        n = r(n);
      }
      for (var o = 0; o < e.ancestors.length; o++) {
        t = e.ancestors[o];
        var a = d.getID(t) || "";
        y._handleTopLevel(e.topLevelType, t, a, e.nativeEvent, m(e.nativeEvent));
      }
    }
    function s(e) {
      var t = v(window);
      e(t);
    }
    var u = n(69);
    var l = n(5);
    var c = n(15);
    var p = n(21);
    var d = n(7);
    var f = n(11);
    var h = n(3);
    var m = n(57);
    var v = n(169);
    h(o.prototype, {
      destructor: function () {
        this.topLevelType = null;
        this.nativeEvent = null;
        this.ancestors.length = 0;
      }
    });
    c.addPoolingTo(o, c.twoArgumentPooler);
    var y = {
      _enabled: true,
      _handleTopLevel: null,
      WINDOW_HANDLE: l.canUseDOM ? window : null,
      setHandleTopLevel: function (e) {
        y._handleTopLevel = e;
      },
      setEnabled: function (e) {
        y._enabled = !!e;
      },
      isEnabled: function () {
        return y._enabled;
      },
      trapBubbledEvent: function (e, t, n) {
        var r = n;
        if (r) {
          return u.listen(r, t, y.dispatchEvent.bind(null, e));
        } else {
          return null;
        }
      },
      trapCapturedEvent: function (e, t, n) {
        var r = n;
        if (r) {
          return u.capture(r, t, y.dispatchEvent.bind(null, e));
        } else {
          return null;
        }
      },
      monitorScrollValue: function (e) {
        var t = s.bind(null, e);
        u.listen(window, "scroll", t);
      },
      dispatchEvent: function (e, t) {
        if (y._enabled) {
          var n = o.getPooled(e, t);
          try {
            f.batchedUpdates(a, n);
          } finally {
            o.release(n);
          }
        }
      }
    };
    e.exports = y;
  }, function (e, t, n) {
    "use strict";

    var r = n(20);
    var o = n(25);
    var a = n(49);
    var i = n(86);
    var s = n(95);
    var u = n(36);
    var l = n(101);
    var c = n(10);
    var p = n(104);
    var d = n(11);
    var f = {
      Component: a.injection,
      Class: i.injection,
      DOMProperty: r.injection,
      EmptyComponent: s.injection,
      EventPluginHub: o.injection,
      EventEmitter: u.injection,
      NativeComponent: l.injection,
      Perf: c.injection,
      RootIndex: p.injection,
      Updates: d.injection
    };
    e.exports = f;
  }, function (e, t, n) {
    "use strict";

    var r = n(85);
    var o = n(87);
    var a = n(86);
    var i = n(233);
    var s = n(8);
    n(94);
    var u = n(103);
    var l = n(53);
    var c = n(3);
    var p = n(111);
    var d = s.createElement;
    var f = s.createFactory;
    var h = s.cloneElement;
    var m = {
      Children: {
        map: r.map,
        forEach: r.forEach,
        count: r.count,
        toArray: r.toArray,
        only: p
      },
      Component: o,
      createElement: d,
      cloneElement: h,
      isValidElement: s.isValidElement,
      PropTypes: u,
      createClass: a.createClass,
      createFactory: f,
      createMixin: function (e) {
        return e;
      },
      DOM: i,
      version: l,
      __spread: c
    };
    e.exports = m;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      v.push({
        parentID: e,
        parentNode: null,
        type: p.INSERT_MARKUP,
        markupIndex: y.push(t) - 1,
        content: null,
        fromIndex: null,
        toIndex: n
      });
    }
    function o(e, t, n) {
      v.push({
        parentID: e,
        parentNode: null,
        type: p.MOVE_EXISTING,
        markupIndex: null,
        content: null,
        fromIndex: t,
        toIndex: n
      });
    }
    function a(e, t) {
      v.push({
        parentID: e,
        parentNode: null,
        type: p.REMOVE_NODE,
        markupIndex: null,
        content: null,
        fromIndex: t,
        toIndex: null
      });
    }
    function i(e, t) {
      v.push({
        parentID: e,
        parentNode: null,
        type: p.SET_MARKUP,
        markupIndex: null,
        content: t,
        fromIndex: null,
        toIndex: null
      });
    }
    function s(e, t) {
      v.push({
        parentID: e,
        parentNode: null,
        type: p.TEXT_CONTENT,
        markupIndex: null,
        content: t,
        fromIndex: null,
        toIndex: null
      });
    }
    function u() {
      if (v.length) {
        c.processChildrenUpdates(v, y);
        l();
      }
    }
    function l() {
      v.length = 0;
      y.length = 0;
    }
    var c = n(49);
    var p = n(100);
    n(13);
    var d = n(16);
    var f = n(229);
    var h = n(107);
    var m = 0;
    var v = [];
    var y = [];
    var g = {
      Mixin: {
        _reconcilerInstantiateChildren: function (e, t, n) {
          return f.instantiateChildren(e, t, n);
        },
        _reconcilerUpdateChildren: function (e, t, n, r) {
          var o;
          o = h(t);
          return f.updateChildren(e, o, n, r);
        },
        mountChildren: function (e, t, n) {
          var r = this._reconcilerInstantiateChildren(e, t, n);
          this._renderedChildren = r;
          var o = [];
          var a = 0;
          for (var i in r) {
            if (r.hasOwnProperty(i)) {
              var s = r[i];
              var u = this._rootNodeID + i;
              var l = d.mountComponent(s, u, t, n);
              s._mountIndex = a++;
              o.push(l);
            }
          }
          return o;
        },
        updateTextContent: function (e) {
          m++;
          var t = true;
          try {
            var n = this._renderedChildren;
            f.unmountChildren(n);
            for (var r in n) {
              if (n.hasOwnProperty(r)) {
                this._unmountChild(n[r]);
              }
            }
            this.setTextContent(e);
            t = false;
          } finally {
            m--;
            if (!m) {
              if (t) {
                l();
              } else {
                u();
              }
            }
          }
        },
        updateMarkup: function (e) {
          m++;
          var t = true;
          try {
            var n = this._renderedChildren;
            f.unmountChildren(n);
            for (var r in n) {
              if (n.hasOwnProperty(r)) {
                this._unmountChildByName(n[r], r);
              }
            }
            this.setMarkup(e);
            t = false;
          } finally {
            m--;
            if (!m) {
              if (t) {
                l();
              } else {
                u();
              }
            }
          }
        },
        updateChildren: function (e, t, n) {
          m++;
          var r = true;
          try {
            this._updateChildren(e, t, n);
            r = false;
          } finally {
            m--;
            if (!m) {
              if (r) {
                l();
              } else {
                u();
              }
            }
          }
        },
        _updateChildren: function (e, t, n) {
          var r = this._renderedChildren;
          var o = this._reconcilerUpdateChildren(r, e, t, n);
          this._renderedChildren = o;
          if (o || r) {
            var a;
            var i = 0;
            var s = 0;
            for (a in o) {
              if (o.hasOwnProperty(a)) {
                var u = r && r[a];
                var l = o[a];
                if (u === l) {
                  this.moveChild(u, s, i);
                  i = Math.max(u._mountIndex, i);
                  u._mountIndex = s;
                } else {
                  if (u) {
                    i = Math.max(u._mountIndex, i);
                    this._unmountChild(u);
                  }
                  this._mountChildByNameAtIndex(l, a, s, t, n);
                }
                s++;
              }
            }
            for (a in r) {
              if (!!r.hasOwnProperty(a) && (!o || !o.hasOwnProperty(a))) {
                this._unmountChild(r[a]);
              }
            }
          }
        },
        unmountChildren: function () {
          var e = this._renderedChildren;
          f.unmountChildren(e);
          this._renderedChildren = null;
        },
        moveChild: function (e, t, n) {
          if (e._mountIndex < n) {
            o(this._rootNodeID, e._mountIndex, t);
          }
        },
        createChild: function (e, t) {
          r(this._rootNodeID, t, e._mountIndex);
        },
        removeChild: function (e) {
          a(this._rootNodeID, e._mountIndex);
        },
        setTextContent: function (e) {
          s(this._rootNodeID, e);
        },
        setMarkup: function (e) {
          i(this._rootNodeID, e);
        },
        _mountChildByNameAtIndex: function (e, t, n, r, o) {
          var a = this._rootNodeID + t;
          var i = d.mountComponent(e, a, r, o);
          e._mountIndex = n;
          this.createChild(e, i);
        },
        _unmountChild: function (e) {
          this.removeChild(e);
          e._mountIndex = null;
        }
      }
    };
    e.exports = g;
  }, function (e, t, n) {
    "use strict";

    var r = n(1);
    var o = {
      isValidOwner: function (e) {
        return !!e && typeof e.attachRef == "function" && typeof e.detachRef == "function";
      },
      addComponentAsRefTo: function (e, t, n) {
        if (o.isValidOwner(n)) {
          undefined;
        } else {
          r(false);
        }
        n.attachRef(t, e);
      },
      removeComponentAsRefFrom: function (e, t, n) {
        if (o.isValidOwner(n)) {
          undefined;
        } else {
          r(false);
        }
        if (n.getPublicInstance().refs[t] === e.getPublicInstance()) {
          n.detachRef(t);
        }
      }
    };
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      this.reinitializeTransaction();
      this.renderToStaticMarkup = false;
      this.reactMountReady = o.getPooled(null);
      this.useCreateElement = !e && s.useCreateElement;
    }
    var o = n(45);
    var a = n(15);
    var i = n(36);
    var s = n(88);
    var u = n(98);
    var l = n(40);
    var c = n(3);
    var p = {
      initialize: u.getSelectionInformation,
      close: u.restoreSelection
    };
    var d = {
      initialize: function () {
        var e = i.isEnabled();
        i.setEnabled(false);
        return e;
      },
      close: function (e) {
        i.setEnabled(e);
      }
    };
    var f = {
      initialize: function () {
        this.reactMountReady.reset();
      },
      close: function () {
        this.reactMountReady.notifyAll();
      }
    };
    var h = [p, d, f];
    var m = {
      getTransactionWrappers: function () {
        return h;
      },
      getReactMountReady: function () {
        return this.reactMountReady;
      },
      destructor: function () {
        o.release(this.reactMountReady);
        this.reactMountReady = null;
      }
    };
    c(r.prototype, l.Mixin, m);
    a.addPoolingTo(r);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      if (typeof e == "function") {
        e(t.getPublicInstance());
      } else {
        a.addComponentAsRefTo(t, e, n);
      }
    }
    function o(e, t, n) {
      if (typeof e == "function") {
        e(null);
      } else {
        a.removeComponentAsRefFrom(t, e, n);
      }
    }
    var a = n(243);
    var i = {};
    i.attachRefs = function (e, t) {
      if (t !== null && t !== false) {
        var n = t.ref;
        if (n != null) {
          r(n, e, t._owner);
        }
      }
    };
    i.shouldUpdateRefs = function (e, t) {
      var n = e === null || e === false;
      var r = t === null || t === false;
      return n || r || t._owner !== e._owner || t.ref !== e.ref;
    };
    i.detachRefs = function (e, t) {
      if (t !== null && t !== false) {
        var n = t.ref;
        if (n != null) {
          o(n, e, t._owner);
        }
      }
    };
    e.exports = i;
  }, function (e, t) {
    "use strict";

    var n = {
      isBatchingUpdates: false,
      batchedUpdates: function (e) {}
    };
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (i.isValidElement(e)) {
        undefined;
      } else {
        h(false);
      }
      var t;
      try {
        p.injection.injectBatchingStrategy(l);
        var n = s.createReactRootID();
        t = c.getPooled(false);
        return t.perform(function () {
          var r = f(e, null);
          var o = r.mountComponent(n, t, d);
          return u.addChecksumToMarkup(o);
        }, null);
      } finally {
        c.release(t);
        p.injection.injectBatchingStrategy(a);
      }
    }
    function o(e) {
      if (i.isValidElement(e)) {
        undefined;
      } else {
        h(false);
      }
      var t;
      try {
        p.injection.injectBatchingStrategy(l);
        var n = s.createReactRootID();
        t = c.getPooled(true);
        return t.perform(function () {
          var r = f(e, null);
          return r.mountComponent(n, t, d);
        }, null);
      } finally {
        c.release(t);
        p.injection.injectBatchingStrategy(a);
      }
    }
    var a = n(92);
    var i = n(8);
    var s = n(21);
    var u = n(99);
    var l = n(246);
    var c = n(248);
    var p = n(11);
    var d = n(24);
    var f = n(59);
    var h = n(1);
    e.exports = {
      renderToString: r,
      renderToStaticMarkup: o
    };
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      this.reinitializeTransaction();
      this.renderToStaticMarkup = e;
      this.reactMountReady = a.getPooled(null);
      this.useCreateElement = false;
    }
    var o = n(15);
    var a = n(45);
    var i = n(40);
    var s = n(3);
    var u = n(9);
    var l = {
      initialize: function () {
        this.reactMountReady.reset();
      },
      close: u
    };
    var c = [l];
    var p = {
      getTransactionWrappers: function () {
        return c;
      },
      getReactMountReady: function () {
        return this.reactMountReady;
      },
      destructor: function () {
        a.release(this.reactMountReady);
        this.reactMountReady = null;
      }
    };
    s(r.prototype, i.Mixin, p);
    o.addPoolingTo(r);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(107);
    var o = {
      getChildMapping: function (e) {
        if (e) {
          return r(e);
        } else {
          return e;
        }
      },
      mergeChildMappings: function (e, t) {
        function n(n) {
          if (t.hasOwnProperty(n)) {
            return t[n];
          } else {
            return e[n];
          }
        }
        e = e || {};
        t = t || {};
        var r = {};
        var o = [];
        for (var a in e) {
          if (t.hasOwnProperty(a)) {
            if (o.length) {
              r[a] = o;
              o = [];
            }
          } else {
            o.push(a);
          }
        }
        var i;
        var s = {};
        for (var u in t) {
          if (r.hasOwnProperty(u)) {
            for (i = 0; i < r[u].length; i++) {
              var l = r[u][i];
              s[r[u][i]] = n(l);
            }
          }
          s[u] = n(u);
        }
        for (i = 0; i < o.length; i++) {
          s[o[i]] = n(o[i]);
        }
        return s;
      }
    };
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r() {
      var e = document.createElement("div");
      var t = e.style;
      if (!("AnimationEvent" in window)) {
        delete s.animationend.animation;
      }
      if (!("TransitionEvent" in window)) {
        delete s.transitionend.transition;
      }
      for (var n in s) {
        var r = s[n];
        for (var o in r) {
          if (o in t) {
            u.push(r[o]);
            break;
          }
        }
      }
    }
    function o(e, t, n) {
      e.addEventListener(t, n, false);
    }
    function a(e, t, n) {
      e.removeEventListener(t, n, false);
    }
    var i = n(5);
    var s = {
      transitionend: {
        transition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "mozTransitionEnd",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd"
      },
      animationend: {
        animation: "animationend",
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "mozAnimationEnd",
        OAnimation: "oAnimationEnd",
        msAnimation: "MSAnimationEnd"
      }
    };
    var u = [];
    if (i.canUseDOM) {
      r();
    }
    var l = {
      addEndEventListener: function (e, t) {
        if (u.length === 0) {
          window.setTimeout(t, 0);
          return;
        } else {
          u.forEach(function (n) {
            o(e, n, t);
          });
          return;
        }
      },
      removeEndEventListener: function (e, t) {
        if (u.length !== 0) {
          u.forEach(function (n) {
            a(e, n, t);
          });
        }
      }
    };
    e.exports = l;
  }, function (e, t, n) {
    "use strict";

    var r = n(35);
    var o = n(249);
    var a = n(3);
    var i = n(9);
    var s = r.createClass({
      displayName: "ReactTransitionGroup",
      propTypes: {
        component: r.PropTypes.any,
        childFactory: r.PropTypes.func
      },
      getDefaultProps: function () {
        return {
          component: "span",
          childFactory: i.thatReturnsArgument
        };
      },
      getInitialState: function () {
        return {
          children: o.getChildMapping(this.props.children)
        };
      },
      componentWillMount: function () {
        this.currentlyTransitioningKeys = {};
        this.keysToEnter = [];
        this.keysToLeave = [];
      },
      componentDidMount: function () {
        var e = this.state.children;
        for (var t in e) {
          if (e[t]) {
            this.performAppear(t);
          }
        }
      },
      componentWillReceiveProps: function (e) {
        var t = o.getChildMapping(e.children);
        var n = this.state.children;
        this.setState({
          children: o.mergeChildMappings(n, t)
        });
        var r;
        for (r in t) {
          var a = n && n.hasOwnProperty(r);
          if (!!t[r] && !a && !this.currentlyTransitioningKeys[r]) {
            this.keysToEnter.push(r);
          }
        }
        for (r in n) {
          var i = t && t.hasOwnProperty(r);
          if (!!n[r] && !i && !this.currentlyTransitioningKeys[r]) {
            this.keysToLeave.push(r);
          }
        }
      },
      componentDidUpdate: function () {
        var e = this.keysToEnter;
        this.keysToEnter = [];
        e.forEach(this.performEnter);
        var t = this.keysToLeave;
        this.keysToLeave = [];
        t.forEach(this.performLeave);
      },
      performAppear: function (e) {
        this.currentlyTransitioningKeys[e] = true;
        var t = this.refs[e];
        if (t.componentWillAppear) {
          t.componentWillAppear(this._handleDoneAppearing.bind(this, e));
        } else {
          this._handleDoneAppearing(e);
        }
      },
      _handleDoneAppearing: function (e) {
        var t = this.refs[e];
        if (t.componentDidAppear) {
          t.componentDidAppear();
        }
        delete this.currentlyTransitioningKeys[e];
        var n = o.getChildMapping(this.props.children);
        if (!n || !n.hasOwnProperty(e)) {
          this.performLeave(e);
        }
      },
      performEnter: function (e) {
        this.currentlyTransitioningKeys[e] = true;
        var t = this.refs[e];
        if (t.componentWillEnter) {
          t.componentWillEnter(this._handleDoneEntering.bind(this, e));
        } else {
          this._handleDoneEntering(e);
        }
      },
      _handleDoneEntering: function (e) {
        var t = this.refs[e];
        if (t.componentDidEnter) {
          t.componentDidEnter();
        }
        delete this.currentlyTransitioningKeys[e];
        var n = o.getChildMapping(this.props.children);
        if (!n || !n.hasOwnProperty(e)) {
          this.performLeave(e);
        }
      },
      performLeave: function (e) {
        this.currentlyTransitioningKeys[e] = true;
        var t = this.refs[e];
        if (t.componentWillLeave) {
          t.componentWillLeave(this._handleDoneLeaving.bind(this, e));
        } else {
          this._handleDoneLeaving(e);
        }
      },
      _handleDoneLeaving: function (e) {
        var t = this.refs[e];
        if (t.componentDidLeave) {
          t.componentDidLeave();
        }
        delete this.currentlyTransitioningKeys[e];
        var n = o.getChildMapping(this.props.children);
        if (n && n.hasOwnProperty(e)) {
          this.performEnter(e);
        } else {
          this.setState(function (t) {
            var n = a({}, t.children);
            delete n[e];
            return {
              children: n
            };
          });
        }
      },
      render: function () {
        var e = [];
        for (var t in this.state.children) {
          var n = this.state.children[t];
          if (n) {
            e.push(r.cloneElement(this.props.childFactory(n), {
              ref: t,
              key: t
            }));
          }
        }
        return r.createElement(this.props.component, this.props, e);
      }
    });
    e.exports = s;
  }, function (e, t, n) {
    "use strict";

    var r = n(20);
    var o = r.injection.MUST_USE_ATTRIBUTE;
    var a = {
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace"
    };
    var i = {
      Properties: {
        clipPath: o,
        cx: o,
        cy: o,
        d: o,
        dx: o,
        dy: o,
        fill: o,
        fillOpacity: o,
        fontFamily: o,
        fontSize: o,
        fx: o,
        fy: o,
        gradientTransform: o,
        gradientUnits: o,
        markerEnd: o,
        markerMid: o,
        markerStart: o,
        offset: o,
        opacity: o,
        patternContentUnits: o,
        patternUnits: o,
        points: o,
        preserveAspectRatio: o,
        r: o,
        rx: o,
        ry: o,
        spreadMethod: o,
        stopColor: o,
        stopOpacity: o,
        stroke: o,
        strokeDasharray: o,
        strokeLinecap: o,
        strokeOpacity: o,
        strokeWidth: o,
        textAnchor: o,
        transform: o,
        version: o,
        viewBox: o,
        x1: o,
        x2: o,
        x: o,
        xlinkActuate: o,
        xlinkArcrole: o,
        xlinkHref: o,
        xlinkRole: o,
        xlinkShow: o,
        xlinkTitle: o,
        xlinkType: o,
        xmlBase: o,
        xmlLang: o,
        xmlSpace: o,
        y1: o,
        y2: o,
        y: o
      },
      DOMAttributeNamespaces: {
        xlinkActuate: a.xlink,
        xlinkArcrole: a.xlink,
        xlinkHref: a.xlink,
        xlinkRole: a.xlink,
        xlinkShow: a.xlink,
        xlinkTitle: a.xlink,
        xlinkType: a.xlink,
        xmlBase: a.xml,
        xmlLang: a.xml,
        xmlSpace: a.xml
      },
      DOMAttributeNames: {
        clipPath: "clip-path",
        fillOpacity: "fill-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        gradientTransform: "gradientTransform",
        gradientUnits: "gradientUnits",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        patternContentUnits: "patternContentUnits",
        patternUnits: "patternUnits",
        preserveAspectRatio: "preserveAspectRatio",
        spreadMethod: "spreadMethod",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strokeDasharray: "stroke-dasharray",
        strokeLinecap: "stroke-linecap",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        textAnchor: "text-anchor",
        viewBox: "viewBox",
        xlinkActuate: "xlink:actuate",
        xlinkArcrole: "xlink:arcrole",
        xlinkHref: "xlink:href",
        xlinkRole: "xlink:role",
        xlinkShow: "xlink:show",
        xlinkTitle: "xlink:title",
        xlinkType: "xlink:type",
        xmlBase: "xml:base",
        xmlLang: "xml:lang",
        xmlSpace: "xml:space"
      }
    };
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

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
    var a = n(12);
    var i = n(26);
    var s = n(5);
    var u = n(98);
    var l = n(17);
    var c = n(72);
    var p = n(110);
    var d = n(14);
    var f = n(74);
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
    e.exports = _;
  }, function (e, t) {
    "use strict";

    var n = Math.pow(2, 53);
    var r = {
      createReactRootIndex: function () {
        return Math.ceil(Math.random() * n);
      }
    };
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(12);
    var o = n(69);
    var a = n(26);
    var i = n(7);
    var s = n(256);
    var u = n(17);
    var l = n(259);
    var c = n(261);
    var p = n(39);
    var d = n(258);
    var f = n(262);
    var h = n(28);
    var m = n(263);
    var v = n(9);
    var y = n(55);
    var g = n(1);
    var b = n(14);
    var E = r.topLevelTypes;
    var w = {
      abort: {
        phasedRegistrationNames: {
          bubbled: b({
            onAbort: true
          }),
          captured: b({
            onAbortCapture: true
          })
        }
      },
      blur: {
        phasedRegistrationNames: {
          bubbled: b({
            onBlur: true
          }),
          captured: b({
            onBlurCapture: true
          })
        }
      },
      canPlay: {
        phasedRegistrationNames: {
          bubbled: b({
            onCanPlay: true
          }),
          captured: b({
            onCanPlayCapture: true
          })
        }
      },
      canPlayThrough: {
        phasedRegistrationNames: {
          bubbled: b({
            onCanPlayThrough: true
          }),
          captured: b({
            onCanPlayThroughCapture: true
          })
        }
      },
      click: {
        phasedRegistrationNames: {
          bubbled: b({
            onClick: true
          }),
          captured: b({
            onClickCapture: true
          })
        }
      },
      contextMenu: {
        phasedRegistrationNames: {
          bubbled: b({
            onContextMenu: true
          }),
          captured: b({
            onContextMenuCapture: true
          })
        }
      },
      copy: {
        phasedRegistrationNames: {
          bubbled: b({
            onCopy: true
          }),
          captured: b({
            onCopyCapture: true
          })
        }
      },
      cut: {
        phasedRegistrationNames: {
          bubbled: b({
            onCut: true
          }),
          captured: b({
            onCutCapture: true
          })
        }
      },
      doubleClick: {
        phasedRegistrationNames: {
          bubbled: b({
            onDoubleClick: true
          }),
          captured: b({
            onDoubleClickCapture: true
          })
        }
      },
      drag: {
        phasedRegistrationNames: {
          bubbled: b({
            onDrag: true
          }),
          captured: b({
            onDragCapture: true
          })
        }
      },
      dragEnd: {
        phasedRegistrationNames: {
          bubbled: b({
            onDragEnd: true
          }),
          captured: b({
            onDragEndCapture: true
          })
        }
      },
      dragEnter: {
        phasedRegistrationNames: {
          bubbled: b({
            onDragEnter: true
          }),
          captured: b({
            onDragEnterCapture: true
          })
        }
      },
      dragExit: {
        phasedRegistrationNames: {
          bubbled: b({
            onDragExit: true
          }),
          captured: b({
            onDragExitCapture: true
          })
        }
      },
      dragLeave: {
        phasedRegistrationNames: {
          bubbled: b({
            onDragLeave: true
          }),
          captured: b({
            onDragLeaveCapture: true
          })
        }
      },
      dragOver: {
        phasedRegistrationNames: {
          bubbled: b({
            onDragOver: true
          }),
          captured: b({
            onDragOverCapture: true
          })
        }
      },
      dragStart: {
        phasedRegistrationNames: {
          bubbled: b({
            onDragStart: true
          }),
          captured: b({
            onDragStartCapture: true
          })
        }
      },
      drop: {
        phasedRegistrationNames: {
          bubbled: b({
            onDrop: true
          }),
          captured: b({
            onDropCapture: true
          })
        }
      },
      durationChange: {
        phasedRegistrationNames: {
          bubbled: b({
            onDurationChange: true
          }),
          captured: b({
            onDurationChangeCapture: true
          })
        }
      },
      emptied: {
        phasedRegistrationNames: {
          bubbled: b({
            onEmptied: true
          }),
          captured: b({
            onEmptiedCapture: true
          })
        }
      },
      encrypted: {
        phasedRegistrationNames: {
          bubbled: b({
            onEncrypted: true
          }),
          captured: b({
            onEncryptedCapture: true
          })
        }
      },
      ended: {
        phasedRegistrationNames: {
          bubbled: b({
            onEnded: true
          }),
          captured: b({
            onEndedCapture: true
          })
        }
      },
      error: {
        phasedRegistrationNames: {
          bubbled: b({
            onError: true
          }),
          captured: b({
            onErrorCapture: true
          })
        }
      },
      focus: {
        phasedRegistrationNames: {
          bubbled: b({
            onFocus: true
          }),
          captured: b({
            onFocusCapture: true
          })
        }
      },
      input: {
        phasedRegistrationNames: {
          bubbled: b({
            onInput: true
          }),
          captured: b({
            onInputCapture: true
          })
        }
      },
      keyDown: {
        phasedRegistrationNames: {
          bubbled: b({
            onKeyDown: true
          }),
          captured: b({
            onKeyDownCapture: true
          })
        }
      },
      keyPress: {
        phasedRegistrationNames: {
          bubbled: b({
            onKeyPress: true
          }),
          captured: b({
            onKeyPressCapture: true
          })
        }
      },
      keyUp: {
        phasedRegistrationNames: {
          bubbled: b({
            onKeyUp: true
          }),
          captured: b({
            onKeyUpCapture: true
          })
        }
      },
      load: {
        phasedRegistrationNames: {
          bubbled: b({
            onLoad: true
          }),
          captured: b({
            onLoadCapture: true
          })
        }
      },
      loadedData: {
        phasedRegistrationNames: {
          bubbled: b({
            onLoadedData: true
          }),
          captured: b({
            onLoadedDataCapture: true
          })
        }
      },
      loadedMetadata: {
        phasedRegistrationNames: {
          bubbled: b({
            onLoadedMetadata: true
          }),
          captured: b({
            onLoadedMetadataCapture: true
          })
        }
      },
      loadStart: {
        phasedRegistrationNames: {
          bubbled: b({
            onLoadStart: true
          }),
          captured: b({
            onLoadStartCapture: true
          })
        }
      },
      mouseDown: {
        phasedRegistrationNames: {
          bubbled: b({
            onMouseDown: true
          }),
          captured: b({
            onMouseDownCapture: true
          })
        }
      },
      mouseMove: {
        phasedRegistrationNames: {
          bubbled: b({
            onMouseMove: true
          }),
          captured: b({
            onMouseMoveCapture: true
          })
        }
      },
      mouseOut: {
        phasedRegistrationNames: {
          bubbled: b({
            onMouseOut: true
          }),
          captured: b({
            onMouseOutCapture: true
          })
        }
      },
      mouseOver: {
        phasedRegistrationNames: {
          bubbled: b({
            onMouseOver: true
          }),
          captured: b({
            onMouseOverCapture: true
          })
        }
      },
      mouseUp: {
        phasedRegistrationNames: {
          bubbled: b({
            onMouseUp: true
          }),
          captured: b({
            onMouseUpCapture: true
          })
        }
      },
      paste: {
        phasedRegistrationNames: {
          bubbled: b({
            onPaste: true
          }),
          captured: b({
            onPasteCapture: true
          })
        }
      },
      pause: {
        phasedRegistrationNames: {
          bubbled: b({
            onPause: true
          }),
          captured: b({
            onPauseCapture: true
          })
        }
      },
      play: {
        phasedRegistrationNames: {
          bubbled: b({
            onPlay: true
          }),
          captured: b({
            onPlayCapture: true
          })
        }
      },
      playing: {
        phasedRegistrationNames: {
          bubbled: b({
            onPlaying: true
          }),
          captured: b({
            onPlayingCapture: true
          })
        }
      },
      progress: {
        phasedRegistrationNames: {
          bubbled: b({
            onProgress: true
          }),
          captured: b({
            onProgressCapture: true
          })
        }
      },
      rateChange: {
        phasedRegistrationNames: {
          bubbled: b({
            onRateChange: true
          }),
          captured: b({
            onRateChangeCapture: true
          })
        }
      },
      reset: {
        phasedRegistrationNames: {
          bubbled: b({
            onReset: true
          }),
          captured: b({
            onResetCapture: true
          })
        }
      },
      scroll: {
        phasedRegistrationNames: {
          bubbled: b({
            onScroll: true
          }),
          captured: b({
            onScrollCapture: true
          })
        }
      },
      seeked: {
        phasedRegistrationNames: {
          bubbled: b({
            onSeeked: true
          }),
          captured: b({
            onSeekedCapture: true
          })
        }
      },
      seeking: {
        phasedRegistrationNames: {
          bubbled: b({
            onSeeking: true
          }),
          captured: b({
            onSeekingCapture: true
          })
        }
      },
      stalled: {
        phasedRegistrationNames: {
          bubbled: b({
            onStalled: true
          }),
          captured: b({
            onStalledCapture: true
          })
        }
      },
      submit: {
        phasedRegistrationNames: {
          bubbled: b({
            onSubmit: true
          }),
          captured: b({
            onSubmitCapture: true
          })
        }
      },
      suspend: {
        phasedRegistrationNames: {
          bubbled: b({
            onSuspend: true
          }),
          captured: b({
            onSuspendCapture: true
          })
        }
      },
      timeUpdate: {
        phasedRegistrationNames: {
          bubbled: b({
            onTimeUpdate: true
          }),
          captured: b({
            onTimeUpdateCapture: true
          })
        }
      },
      touchCancel: {
        phasedRegistrationNames: {
          bubbled: b({
            onTouchCancel: true
          }),
          captured: b({
            onTouchCancelCapture: true
          })
        }
      },
      touchEnd: {
        phasedRegistrationNames: {
          bubbled: b({
            onTouchEnd: true
          }),
          captured: b({
            onTouchEndCapture: true
          })
        }
      },
      touchMove: {
        phasedRegistrationNames: {
          bubbled: b({
            onTouchMove: true
          }),
          captured: b({
            onTouchMoveCapture: true
          })
        }
      },
      touchStart: {
        phasedRegistrationNames: {
          bubbled: b({
            onTouchStart: true
          }),
          captured: b({
            onTouchStartCapture: true
          })
        }
      },
      volumeChange: {
        phasedRegistrationNames: {
          bubbled: b({
            onVolumeChange: true
          }),
          captured: b({
            onVolumeChangeCapture: true
          })
        }
      },
      waiting: {
        phasedRegistrationNames: {
          bubbled: b({
            onWaiting: true
          }),
          captured: b({
            onWaitingCapture: true
          })
        }
      },
      wheel: {
        phasedRegistrationNames: {
          bubbled: b({
            onWheel: true
          }),
          captured: b({
            onWheelCapture: true
          })
        }
      }
    };
    var C = {
      topAbort: w.abort,
      topBlur: w.blur,
      topCanPlay: w.canPlay,
      topCanPlayThrough: w.canPlayThrough,
      topClick: w.click,
      topContextMenu: w.contextMenu,
      topCopy: w.copy,
      topCut: w.cut,
      topDoubleClick: w.doubleClick,
      topDrag: w.drag,
      topDragEnd: w.dragEnd,
      topDragEnter: w.dragEnter,
      topDragExit: w.dragExit,
      topDragLeave: w.dragLeave,
      topDragOver: w.dragOver,
      topDragStart: w.dragStart,
      topDrop: w.drop,
      topDurationChange: w.durationChange,
      topEmptied: w.emptied,
      topEncrypted: w.encrypted,
      topEnded: w.ended,
      topError: w.error,
      topFocus: w.focus,
      topInput: w.input,
      topKeyDown: w.keyDown,
      topKeyPress: w.keyPress,
      topKeyUp: w.keyUp,
      topLoad: w.load,
      topLoadedData: w.loadedData,
      topLoadedMetadata: w.loadedMetadata,
      topLoadStart: w.loadStart,
      topMouseDown: w.mouseDown,
      topMouseMove: w.mouseMove,
      topMouseOut: w.mouseOut,
      topMouseOver: w.mouseOver,
      topMouseUp: w.mouseUp,
      topPaste: w.paste,
      topPause: w.pause,
      topPlay: w.play,
      topPlaying: w.playing,
      topProgress: w.progress,
      topRateChange: w.rateChange,
      topReset: w.reset,
      topScroll: w.scroll,
      topSeeked: w.seeked,
      topSeeking: w.seeking,
      topStalled: w.stalled,
      topSubmit: w.submit,
      topSuspend: w.suspend,
      topTimeUpdate: w.timeUpdate,
      topTouchCancel: w.touchCancel,
      topTouchEnd: w.touchEnd,
      topTouchMove: w.touchMove,
      topTouchStart: w.touchStart,
      topVolumeChange: w.volumeChange,
      topWaiting: w.waiting,
      topWheel: w.wheel
    };
    for (var _ in C) {
      C[_].dependencies = [_];
    }
    var O = b({
      onClick: null
    });
    var P = {};
    var k = {
      eventTypes: w,
      extractEvents: function (e, t, n, r, o) {
        var i = C[e];
        if (!i) {
          return null;
        }
        var v;
        switch (e) {
          case E.topAbort:
          case E.topCanPlay:
          case E.topCanPlayThrough:
          case E.topDurationChange:
          case E.topEmptied:
          case E.topEncrypted:
          case E.topEnded:
          case E.topError:
          case E.topInput:
          case E.topLoad:
          case E.topLoadedData:
          case E.topLoadedMetadata:
          case E.topLoadStart:
          case E.topPause:
          case E.topPlay:
          case E.topPlaying:
          case E.topProgress:
          case E.topRateChange:
          case E.topReset:
          case E.topSeeked:
          case E.topSeeking:
          case E.topStalled:
          case E.topSubmit:
          case E.topSuspend:
          case E.topTimeUpdate:
          case E.topVolumeChange:
          case E.topWaiting:
            v = u;
            break;
          case E.topKeyPress:
            if (y(r) === 0) {
              return null;
            }
          case E.topKeyDown:
          case E.topKeyUp:
            v = c;
            break;
          case E.topBlur:
          case E.topFocus:
            v = l;
            break;
          case E.topClick:
            if (r.button === 2) {
              return null;
            }
          case E.topContextMenu:
          case E.topDoubleClick:
          case E.topMouseDown:
          case E.topMouseMove:
          case E.topMouseOut:
          case E.topMouseOver:
          case E.topMouseUp:
            v = p;
            break;
          case E.topDrag:
          case E.topDragEnd:
          case E.topDragEnter:
          case E.topDragExit:
          case E.topDragLeave:
          case E.topDragOver:
          case E.topDragStart:
          case E.topDrop:
            v = d;
            break;
          case E.topTouchCancel:
          case E.topTouchEnd:
          case E.topTouchMove:
          case E.topTouchStart:
            v = f;
            break;
          case E.topScroll:
            v = h;
            break;
          case E.topWheel:
            v = m;
            break;
          case E.topCopy:
          case E.topCut:
          case E.topPaste:
            v = s;
        }
        if (v) {
          undefined;
        } else {
          g(false);
        }
        var b = v.getPooled(i, n, r, o);
        a.accumulateTwoPhaseDispatches(b);
        return b;
      },
      didPutListener: function (e, t, n) {
        if (t === O) {
          var r = i.getNode(e);
          P[e] ||= o.listen(r, "click", v);
        }
      },
      willDeleteListener: function (e, t) {
        if (t === O) {
          P[e].remove();
          delete P[e];
        }
      }
    };
    e.exports = k;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(17);
    var a = {
      clipboardData: function (e) {
        if ("clipboardData" in e) {
          return e.clipboardData;
        } else {
          return window.clipboardData;
        }
      }
    };
    o.augmentClass(r, a);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(17);
    var a = {
      data: null
    };
    o.augmentClass(r, a);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(39);
    var a = {
      dataTransfer: null
    };
    o.augmentClass(r, a);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(28);
    var a = {
      relatedTarget: null
    };
    o.augmentClass(r, a);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(17);
    var a = {
      data: null
    };
    o.augmentClass(r, a);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(28);
    var a = n(55);
    var i = n(267);
    var s = n(56);
    var u = {
      key: i,
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: s,
      charCode: function (e) {
        if (e.type === "keypress") {
          return a(e);
        } else {
          return 0;
        }
      },
      keyCode: function (e) {
        if (e.type === "keydown" || e.type === "keyup") {
          return e.keyCode;
        } else {
          return 0;
        }
      },
      which: function (e) {
        if (e.type === "keypress") {
          return a(e);
        } else if (e.type === "keydown" || e.type === "keyup") {
          return e.keyCode;
        } else {
          return 0;
        }
      }
    };
    o.augmentClass(r, u);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(28);
    var a = n(56);
    var i = {
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: a
    };
    o.augmentClass(r, i);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(39);
    var a = {
      deltaX: function (e) {
        if ("deltaX" in e) {
          return e.deltaX;
        } else if ("wheelDeltaX" in e) {
          return -e.wheelDeltaX;
        } else {
          return 0;
        }
      },
      deltaY: function (e) {
        if ("deltaY" in e) {
          return e.deltaY;
        } else if ("wheelDeltaY" in e) {
          return -e.wheelDeltaY;
        } else if ("wheelDelta" in e) {
          return -e.wheelDelta;
        } else {
          return 0;
        }
      },
      deltaZ: null,
      deltaMode: null
    };
    o.augmentClass(r, a);
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = 1;
      var n = 0;
      for (var o = 0, a = e.length, i = a & -4; o < i;) {
        for (; o < Math.min(o + 4096, i); o += 4) {
          n += (t += e.charCodeAt(o)) + (t += e.charCodeAt(o + 1)) + (t += e.charCodeAt(o + 2)) + (t += e.charCodeAt(o + 3));
        }
        t %= r;
        n %= r;
      }
      for (; o < a; o++) {
        n += t += e.charCodeAt(o);
      }
      t %= r;
      n %= r;
      return t | n << 16;
    }
    var r = 65521;
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      var n = t == null || typeof t == "boolean" || t === "";
      if (n) {
        return "";
      }
      var r = isNaN(t);
      if (r || t === 0 || a.hasOwnProperty(e) && a[e]) {
        return "" + t;
      } else {
        if (typeof t == "string") {
          t = t.trim();
        }
        return t + "px";
      }
    }
    var o = n(82);
    var a = o.isUnitlessNumber;
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, o) {
      return o;
    }
    n(3);
    n(4);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e.key) {
        var t = a[e.key] || e.key;
        if (t !== "Unidentified") {
          return t;
        }
      }
      if (e.type === "keypress") {
        var n = o(e);
        if (n === 13) {
          return "Enter";
        } else {
          return String.fromCharCode(n);
        }
      }
      if (e.type === "keydown" || e.type === "keyup") {
        return i[e.keyCode] || "Unidentified";
      } else {
        return "";
      }
    }
    var o = n(55);
    var a = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var i = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    e.exports = r;
  }, function (e, t) {
    "use strict";

    function n(e) {
      while (e && e.firstChild) {
        e = e.firstChild;
      }
      return e;
    }
    function r(e) {
      while (e) {
        if (e.nextSibling) {
          return e.nextSibling;
        }
        e = e.parentNode;
      }
    }
    function o(e, t) {
      for (var o = n(e), a = 0, i = 0; o;) {
        if (o.nodeType === 3) {
          i = a + o.textContent.length;
          if (a <= t && i >= t) {
            return {
              node: o,
              offset: t - a
            };
          }
          a = i;
        }
        o = n(r(o));
      }
    }
    e.exports = o;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return "\"" + o(e) + "\"";
    }
    var o = n(42);
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(7);
    e.exports = r.renderSubtreeIntoContainer;
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = e.dispatch;
      var n = e.getState;
      return function (e) {
        return function (r) {
          if (typeof r == "function") {
            return r(t, n);
          } else {
            return e(r);
          }
        };
      };
    }
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      return function (e) {
        return function (n, r, o) {
          var i = e(n, r, o);
          var u = i.dispatch;
          var l = [];
          var c = {
            getState: i.getState,
            dispatch: function (e) {
              return u(e);
            }
          };
          l = t.map(function (e) {
            return e(c);
          });
          u = s.default.apply(undefined, l)(i.dispatch);
          return a({}, i, {
            dispatch: u
          });
        };
      };
    }
    t.__esModule = true;
    var a = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    };
    t.default = o;
    var i = n(112);
    var s = r(i);
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      return function () {
        return t(e.apply(undefined, arguments));
      };
    }
    function r(e, t) {
      if (typeof e == "function") {
        return n(e, t);
      }
      if (typeof e != "object" || e === null) {
        throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + ". Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
      }
      for (var r = Object.keys(e), o = {}, a = 0; a < r.length; a++) {
        var i = r[a];
        var s = e[i];
        if (typeof s == "function") {
          o[i] = n(s, t);
        }
      }
      return o;
    }
    t.__esModule = true;
    t.default = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        return {
          default: e
        };
      }
    }
    function o(e, t) {
      var n = t && t.type;
      var r = n && "\"" + n.toString() + "\"" || "an action";
      return "Given action " + r + ", reducer \"" + e + "\" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.";
    }
    function a(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t];
        var r = n(undefined, {
          type: s.ActionTypes.INIT
        });
        if (typeof r == "undefined") {
          throw new Error("Reducer \"" + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
        }
        var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(undefined, {
          type: o
        }) == "undefined") {
          throw new Error("Reducer \"" + t + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + s.ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
        }
      });
    }
    function i(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        if (typeof e[i] == "function") {
          n[i] = e[i];
        }
      }
      var s = Object.keys(n);
      var u = undefined;
      try {
        a(n);
      } catch (e) {
        u = e;
      }
      return function (e = {}) {
        var t = arguments[1];
        if (u) {
          throw u;
        }
        var r = false;
        var a = {};
        for (var i = 0; i < s.length; i++) {
          var l = s[i];
          var c = n[l];
          var p = e[l];
          var d = c(p, t);
          if (typeof d == "undefined") {
            var f = o(l, t);
            throw new Error(f);
          }
          a[l] = d;
          r = r || d !== p;
        }
        if (r) {
          return a;
        } else {
          return e;
        }
      };
    }
    t.__esModule = true;
    t.default = i;
    var s = n(113);
    var u = n(44);
    r(u);
    var l = n(114);
    r(l);
  }, function (e, t, n) {
    (function (e, r) {
      "use strict";

      function o(e) {
        if (e && e.__esModule) {
          return e;
        } else {
          return {
            default: e
          };
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var a;
      var i = n(276);
      var s = o(i);
      a = typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof e != "undefined" ? e : r;
      var u = (0, s.default)(a);
      t.default = u;
    }).call(t, function () {
      return this;
    }(), n(277)(e));
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t;
      var n = e.Symbol;
      if (typeof n == "function") {
        if (n.observable) {
          t = n.observable;
        } else {
          t = n("observable");
          n.observable = t;
        }
      } else {
        t = "@@observable";
      }
      return t;
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.default = n;
  }, function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        e.deprecate = function () {};
        e.paths = [];
        e.children = [];
        e.webpackPolyfill = 1;
      }
      return e;
    };
  }, function (e, t) {
    (function (e) {
      "use strict";

      function t(e) {
        if (typeof e != "string") {
          e = String(e);
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) {
          throw new TypeError("Invalid character in header field name");
        }
        return e.toLowerCase();
      }
      function n(e) {
        if (typeof e != "string") {
          e = String(e);
        }
        return e;
      }
      function r(e) {
        this.map = {};
        if (e instanceof r) {
          e.forEach(function (e, t) {
            this.append(t, e);
          }, this);
        } else if (e) {
          Object.getOwnPropertyNames(e).forEach(function (t) {
            this.append(t, e[t]);
          }, this);
        }
      }
      function o(e) {
        if (e.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        } else {
          e.bodyUsed = true;
          return;
        }
      }
      function a(e) {
        return new Promise(function (t, n) {
          e.onload = function () {
            t(e.result);
          };
          e.onerror = function () {
            n(e.error);
          };
        });
      }
      function i(e) {
        var t = new FileReader();
        t.readAsArrayBuffer(e);
        return a(t);
      }
      function s(e) {
        var t = new FileReader();
        t.readAsText(e);
        return a(t);
      }
      function u() {
        this.bodyUsed = false;
        this._initBody = function (e) {
          this._bodyInit = e;
          if (typeof e == "string") {
            this._bodyText = e;
          } else if (h.blob && Blob.prototype.isPrototypeOf(e)) {
            this._bodyBlob = e;
          } else if (h.formData && FormData.prototype.isPrototypeOf(e)) {
            this._bodyFormData = e;
          } else if (e) {
            if (!h.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e)) {
              throw new Error("unsupported BodyInit type");
            }
          } else {
            this._bodyText = "";
          }
          if (!this.headers.get("content-type")) {
            if (typeof e == "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            }
          }
        };
        if (h.blob) {
          this.blob = function () {
            var e = o(this);
            if (e) {
              return e;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            }
            if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            }
            return Promise.resolve(new Blob([this._bodyText]));
          };
          this.arrayBuffer = function () {
            return this.blob().then(i);
          };
          this.text = function () {
            var e = o(this);
            if (e) {
              return e;
            }
            if (this._bodyBlob) {
              return s(this._bodyBlob);
            }
            if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            }
            return Promise.resolve(this._bodyText);
          };
        } else {
          this.text = function () {
            var e = o(this);
            if (e) {
              return e;
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
        }
        if (h.formData) {
          this.formData = function () {
            return this.text().then(p);
          };
        }
        this.json = function () {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      function l(e) {
        var t = e.toUpperCase();
        if (m.indexOf(t) > -1) {
          return t;
        } else {
          return e;
        }
      }
      function c(e, t) {
        t = t || {};
        var n = t.body;
        if (c.prototype.isPrototypeOf(e)) {
          if (e.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = e.url;
          this.credentials = e.credentials;
          if (!t.headers) {
            this.headers = new r(e.headers);
          }
          this.method = e.method;
          this.mode = e.mode;
          if (!n) {
            n = e._bodyInit;
            e.bodyUsed = true;
          }
        } else {
          this.url = e;
        }
        this.credentials = t.credentials || this.credentials || "omit";
        if (!!t.headers || !this.headers) {
          this.headers = new r(t.headers);
        }
        this.method = l(t.method || this.method || "GET");
        this.mode = t.mode || this.mode || null;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && n) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(n);
      }
      function p(e) {
        var t = new FormData();
        e.trim().split("&").forEach(function (e) {
          if (e) {
            var n = e.split("=");
            var r = n.shift().replace(/\+/g, " ");
            var o = n.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(r), decodeURIComponent(o));
          }
        });
        return t;
      }
      function d(e) {
        var t = new r();
        var n = (e.getAllResponseHeaders() || "").trim().split("\n");
        n.forEach(function (e) {
          var n = e.trim().split(":");
          var r = n.shift().trim();
          var o = n.join(":").trim();
          t.append(r, o);
        });
        return t;
      }
      function f(e, t) {
        t ||= {};
        this.type = "default";
        this.status = t.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = t.statusText;
        this.headers = t.headers instanceof r ? t.headers : new r(t.headers);
        this.url = t.url || "";
        this._initBody(e);
      }
      if (!e.fetch) {
        r.prototype.append = function (e, r) {
          e = t(e);
          r = n(r);
          var o = this.map[e];
          if (!o) {
            o = [];
            this.map[e] = o;
          }
          o.push(r);
        };
        r.prototype.delete = function (e) {
          delete this.map[t(e)];
        };
        r.prototype.get = function (e) {
          var n = this.map[t(e)];
          if (n) {
            return n[0];
          } else {
            return null;
          }
        };
        r.prototype.getAll = function (e) {
          return this.map[t(e)] || [];
        };
        r.prototype.has = function (e) {
          return this.map.hasOwnProperty(t(e));
        };
        r.prototype.set = function (e, r) {
          this.map[t(e)] = [n(r)];
        };
        r.prototype.forEach = function (e, t) {
          Object.getOwnPropertyNames(this.map).forEach(function (n) {
            this.map[n].forEach(function (r) {
              e.call(t, r, n, this);
            }, this);
          }, this);
        };
        var h = {
          blob: "FileReader" in e && "Blob" in e && function () {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in e,
          arrayBuffer: "ArrayBuffer" in e
        };
        var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        c.prototype.clone = function () {
          return new c(this);
        };
        u.call(c.prototype);
        u.call(f.prototype);
        f.prototype.clone = function () {
          return new f(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new r(this.headers),
            url: this.url
          });
        };
        f.error = function () {
          var e = new f(null, {
            status: 0,
            statusText: ""
          });
          e.type = "error";
          return e;
        };
        var v = [301, 302, 303, 307, 308];
        f.redirect = function (e, t) {
          if (v.indexOf(t) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new f(null, {
            status: t,
            headers: {
              location: e
            }
          });
        };
        e.Headers = r;
        e.Request = c;
        e.Response = f;
        e.fetch = function (e, t) {
          return new Promise(function (n, r) {
            function o() {
              if ("responseURL" in i) {
                return i.responseURL;
              } else if (/^X-Request-URL:/m.test(i.getAllResponseHeaders())) {
                return i.getResponseHeader("X-Request-URL");
              } else {
                return undefined;
              }
            }
            var a;
            a = c.prototype.isPrototypeOf(e) && !t ? e : new c(e, t);
            var i = new XMLHttpRequest();
            i.onload = function () {
              var e = i.status === 1223 ? 204 : i.status;
              if (e < 100 || e > 599) {
                r(new TypeError("Network request failed"));
                return;
              }
              var t = {
                status: e,
                statusText: i.statusText,
                headers: d(i),
                url: o()
              };
              var a = "response" in i ? i.response : i.responseText;
              n(new f(a, t));
            };
            i.onerror = function () {
              r(new TypeError("Network request failed"));
            };
            i.ontimeout = function () {
              r(new TypeError("Network request failed"));
            };
            i.open(a.method, a.url, true);
            if (a.credentials === "include") {
              i.withCredentials = true;
            }
            if ("responseType" in i && h.blob) {
              i.responseType = "blob";
            }
            a.headers.forEach(function (e, t) {
              i.setRequestHeader(t, e);
            });
            i.send(typeof a._bodyInit == "undefined" ? null : a._bodyInit);
          });
        };
        e.fetch.polyfill = true;
      }
    })(typeof self != "undefined" ? self : this);
  }, function (e, t, n) {
    e.exports = function () {
      return new Worker(n.p + "worker.js");
    };
  }]);
});