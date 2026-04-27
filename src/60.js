/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
function r(e, t) {
  if (!a.canUseDOM || t && !("addEventListener" in document)) {
    return false;
  }
  var n = "on" + e;
  var r = n in document;
  if (!r) {
    var i = document.createElement("div");
    i.setAttribute(n, "return;");
    r = typeof i[n] == "function";
  }
  if (!r && o && e === "wheel") {
    r = document.implementation.hasFeature("Events.wheel", "3.0");
  }
  return r;
}
var o;
var a = require("./5.js");
if (a.canUseDOM) {
  o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true;
}
module.exports = r;