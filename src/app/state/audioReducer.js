function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("../../generated/23.js");
var a = r(o);
var i = "not-loaded";
var s = "loaded";
var u = "loading";
var l = {
  status: i
};
exports.default = (0, a.default)(l, {
  audioLoading: function (e, t) {
    return Object.assign({}, e, {
      status: u
    });
  },
  audioLoaded: function (e, t) {
    return Object.assign({}, e, {
      status: s,
      dataHash: t.dataHash
    });
  }
});
module.exports = exports.default;