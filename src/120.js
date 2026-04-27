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
exports.default = c;
module.exports = exports.default;