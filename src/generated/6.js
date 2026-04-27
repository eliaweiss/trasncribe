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
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classList = r;
exports.formatTime = o;
exports.makeAction = a;
exports.relX = i;
exports.display = s;
exports.getUnique = u;
exports.throttle = l;
exports.debounce = c;
if (typeof window != "undefined") {
  require("./115.js");
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
exports.shims = p;
var d = typeof window != "undefined";
exports.hasWindow = d;
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
exports.requestAnimationFrame = f;
var h = function () {
  if (typeof window == "undefined") {
    return function () {};
  } else {
    return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame).bind(window);
  }
}();
exports.cancelAnimationFrame = h;
var m = 0;
var v = require("./181.js");
exports.key = v;
v.filter = function (e) {
  var t = e.target || e.srcElement;
  return !t.isContentEditable && t.tagName != "INPUT" && t.tagName != "SELECT" && t.tagName != "TEXTAREA";
};