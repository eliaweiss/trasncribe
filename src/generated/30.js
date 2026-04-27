var r = function () {
  return this;
}();
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
      var t = "";
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
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = o;
var a = require("./18.js");
var i = typeof window == "undefined" ? null : window;
var s = "";
var u = "2nXDRzErTKkmyUcbXrU6LaKBQaKKIjDF";
var l = i ? i.location.protocol + "//" + i.location.host + i.location.pathname : "";
module.exports = exports.default;