function r(e, t) {}
require("./4.js");
var o = {
  isMounted: function (e) {
    return false;
  },
  enqueueCallback: function (e, t) {},
  enqueueForceUpdate: function (e) {
    r(e, "forceUpdate");
  },
  enqueueReplaceState: function (e, t) {
    r(e, "replaceState");
  },
  enqueueSetState: function (e, t) {
    r(e, "setState");
  },
  enqueueSetProps: function (e, t) {
    r(e, "setProps");
  },
  enqueueReplaceProps: function (e, t) {
    r(e, "replaceProps");
  }
};
module.exports = o;