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
var y = require("./215.js");
var g = require("./217.js");
var b = require("./20.js");
var E = require("./46.js");
var w = require("./12.js");
var C = require("./36.js");
var _ = require("./48.js");
var O = require("./231.js");
var P = require("./234.js");
var k = require("./235.js");
var S = require("./89.js");
var x = require("./237.js");
var T = require("./7.js");
var M = require("./242.js");
var N = require("./10.js");
var D = require("./52.js");
var R = require("./3.js");
var A = require("./41.js");
var I = require("./42.js");
var j = require("./1.js");
require("./60.js");
var L = require("./14.js");
var U = require("./43.js");
var F = require("./61.js");
require("./74.js");
require("./64.js");
require("./4.js");
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
module.exports = v;