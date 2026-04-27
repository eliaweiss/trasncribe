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
Object.defineProperty(exports, "__esModule", {
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
exports.default = a;
require("../../generated/65.js");
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
module.exports = exports.default;