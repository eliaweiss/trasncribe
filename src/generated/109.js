function r() {
  if (!a && o.canUseDOM) {
    a = "textContent" in document.documentElement ? "textContent" : "innerText";
  }
  return a;
}
var o = require("./5.js");
var a = null;
module.exports = r;