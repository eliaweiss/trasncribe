function r(e, t) {
  if (t == null) {
    o(false);
  } else {
    undefined;
  }
  if (e == null) {
    return t;
  }
  var n = Array.isArray(e);
  var r = Array.isArray(t);
  if (n && r) {
    e.push.apply(e, t);
    return e;
  } else if (n) {
    e.push(t);
    return e;
  } else if (r) {
    return [e].concat(t);
  } else {
    return [e, t];
  }
}
var o = require("./1.js");
module.exports = r;