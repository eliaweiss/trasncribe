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
  return function (t, n) {
    e.forEach(function (e) {
      t = e(t, n);
    });
    return t;
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = require("./29.js");
var i = require("./153.js");
var s = require("./148.js");
var u = r(s);
var l = require("./154.js");
var c = r(l);
var p = require("./149.js");
var d = r(p);
var f = require("./150.js");
var h = r(f);
var m = require("./151.js");
var v = r(m);
var y = require("./147.js");
var g = r(y);
var b = {
  auth: u.default,
  zoom: c.default,
  loops: d.default,
  marks: h.default,
  playback: v.default,
  workspace: i.workspace,
  audio: g.default
};
var E = (0, a.combineReducers)(b);
exports.default = o([E, i.root]);
module.exports = exports.default;