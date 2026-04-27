Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("./18.js");
exports.default = {
  fetch: function (e) {
    function t(t, n) {
      return e.apply(this, arguments);
    }
    t.toString = function () {
      return e.toString();
    };
    return t;
  }(function (e, t) {
    t = t || {};
    var n = Object.assign({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      method: t.body ? "POST" : "GET"
    }, t);
    if (t.body) {
      n.body = JSON.stringify(t.body);
    }
    return fetch((0, r.getServerUrl)(e), n);
  })
};
module.exports = exports.default;