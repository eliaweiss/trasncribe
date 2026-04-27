function r(e) {
  if (e == null) {
    return null;
  } else if (e.nodeType === 1) {
    return e;
  } else if (o.has(e)) {
    return a.getNodeFromInstance(e);
  } else {
    if (e.render != null && typeof e.render == "function") {
      i(false);
    } else {
      undefined;
    }
    i(false);
    return;
  }
}
require("./13.js");
var o = require("./27.js");
var a = require("./7.js");
var i = require("./1.js");
require("./4.js");
module.exports = r;