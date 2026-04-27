function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
exports.__esModule = true;
var o = require("./78.js");
var a = r(o);
exports.default = a.default.shape({
  subscribe: a.default.func.isRequired,
  dispatch: a.default.func.isRequired,
  getState: a.default.func.isRequired
});