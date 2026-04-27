var r = require("./13.js");
var o = require("./3.js");
require("./41.js");
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
module.exports = s;