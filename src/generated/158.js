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
  var t = (0, a.applyMiddleware)(l.default)(a.createStore);
  return t(s.default, e);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = o;
var a = require("./29.js");
var i = require("../app/state/rootReducer.js");
var s = r(i);
var u = require("./271.js");
var l = r(u);
module.exports = exports.default;