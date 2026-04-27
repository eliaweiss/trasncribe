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
var l = require("./8.js");
var c = require("./38.js");
require("./37.js");
var p = require("./13.js");
require("./41.js");
var d = require("./58.js");
var f = require("./1.js");
require("./4.js");
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
module.exports = v;