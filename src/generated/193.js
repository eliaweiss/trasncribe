function r(e) {
  if (e == null) {
    if (e === undefined) {
      return u;
    } else {
      return s;
    }
  } else if (l && l in Object(e)) {
    return a(e);
  } else {
    return i(e);
  }
}
var o = require("./77.js");
var a = require("./196.js");
var i = require("./197.js");
var s = "[object Null]";
var u = "[object Undefined]";
var l = o ? o.toStringTag : undefined;
module.exports = r;