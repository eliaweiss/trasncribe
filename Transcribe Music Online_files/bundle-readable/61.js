var r = require("./5.js");
var o = require("./42.js");
var a = require("./43.js");
function i(e, t) {
  e.textContent = t;
}
if (r.canUseDOM) {
  if (!("textContent" in document.documentElement)) {
    i = function (e, t) {
      a(e, o(t));
    };
  }
}
module.exports = i;