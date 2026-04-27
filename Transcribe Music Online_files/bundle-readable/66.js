function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o(e) {
  return function (t) {
    t(h(e));
    return fetch((0, l.getServerUrl)("/workspace/" + e), {
      credentials: "include",
      headers: {
        Authorization: "Bearer " + (0, f.default)().getToken().token
      }
    }).then(function (e) {
      return e.json();
    }).then(function (e) {
      return t(y(e.id, e));
    });
  };
}
function a(e) {
  var t = JSON.parse(JSON.stringify(e));
  delete t.workspace;
  delete t.auth;
  delete t.audio;
  delete t.playback.isPlaying;
  return t;
}
function i(e, t) {
  return function (n) {
    if (e && t && e.audio && e.audio.dataHash) {
      var r = a(e);
      var o = a(t);
      var i = !t.auth.isLoggedIn && e.auth.isLoggedIn;
      var u = Object.keys(r).some(function (e) {
        return JSON.stringify(r[e]) !== JSON.stringify(o[e]);
      });
      if (u || i) {
        n(m());
        if (e.auth.isLoggedIn) {
          s(n, e.audio.dataHash, r, i);
        }
      }
    }
  };
}
function s(e, t, n) {
  var r = !(arguments.length <= 3) && arguments[3] !== undefined && arguments[3];
  if (r) {
    e(u(t, n));
  } else {
    g(e, t, n);
  }
}
function u(e, t) {
  return function (n) {
    if (e) {
      return fetch((0, l.getServerUrl)("/workspace/" + e), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + (0, f.default)().getToken().token
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify(t)
      }).then(function (e) {
        if (e.ok) {
          n(v());
        } else {
          n((0, p.logout)());
          n((0, p.gatherCredentials)());
        }
      });
    }
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWorkspace = o;
exports.updateWorkspace = i;
var l = require("./18.js");
var c = require("./6.js");
var p = require("./22.js");
var d = require("./30.js");
var f = r(d);
var h = (0, c.makeAction)("requestWorkspace", "parent");
exports.requestWorkspace = h;
var m = (0, c.makeAction)("workspaceDirty");
var v = (0, c.makeAction)("workspaceSynced");
var y = (0, c.makeAction)("receiveWorkspace", "id", "data");
var g = (0, c.debounce)(function (e, t, n) {
  e(u(t, n));
}, 3000);