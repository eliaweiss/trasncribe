var r = require("./1.js");
function o(e) {
  var t;
  var n = {};
  if (e instanceof Object && !Array.isArray(e)) {
    undefined;
  } else {
    r(false);
  }
  for (t in e) {
    if (e.hasOwnProperty(t)) {
      n[t] = t;
    }
  }
  return n;
}
module.exports = o;