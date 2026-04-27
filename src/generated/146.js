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
Object.defineProperty(exports, "__esModule", {
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
var u = require("./2.js");
var l = r(u);
var c = require("../app/AppProvider.js");
var p = r(c);
var d = require("./205.js");
var f = r(d);
var h = require("./178.js");
var m = r(h);
var v = require("./177.js");
var y = r(v);
require("./179.js");
require("./163.js");
var g = require("./6.js");
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
exports.default = E;
module.exports = exports.default;