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
var g = require("./8.js");
var b = require("./37.js");
var E = require("./9.js");
var w = require("./58.js");
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
module.exports = _;