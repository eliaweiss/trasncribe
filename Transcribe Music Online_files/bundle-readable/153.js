function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o(e = {}, t) {
  if (!e.auth.isLoggedIn) {
    return e;
  }
  if (t.type !== "receiveWorkspace") {
    return e;
  }
  var n = t.data;
  if (Object.keys(n).length) {
    return Object.assign({}, e, n);
  } else {
    return e;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = o;
var a = require("./23.js");
var i = r(a);
var s = {
  isDirty: false
};
var u = (0, i.default)(s, {
  workspaceDirty: function (e, t) {
    if (!e.isDirty) {
      return (0, a.copyState)(e, {
        isDirty: true
      });
    }
  },
  workspaceSynced: function (e, t) {
    return (0, a.copyState)(e, {
      isDirty: false
    });
  }
});
exports.workspace = u;