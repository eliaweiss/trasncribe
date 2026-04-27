var r = require("./6.js");
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
  module.exports = c;
})(this);