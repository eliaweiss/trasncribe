function r(e) {
  u = true;
}
function o(e) {
  if (u) {
    u = false;
    if (!i) {
      return;
    }
    setTimeout(function () {
      if (!i.contains(document.activeElement)) {
        var e = a(i)[0] || i;
        e.focus();
      }
    }, 0);
  }
}
var a = require("./79.js");
var i = null;
var s = null;
var u = false;
exports.markForFocusLater = function () {
  s = document.activeElement;
};
exports.returnFocus = function () {
  try {
    s.focus();
  } catch (e) {
    console.warn("You tried to return focus to " + s + " but it is not in the DOM anymore");
  }
  s = null;
};
exports.setupScopedFocus = function (e) {
  i = e;
  if (window.addEventListener) {
    window.addEventListener("blur", r, false);
    document.addEventListener("focus", o, true);
  } else {
    window.attachEvent("onBlur", r);
    document.attachEvent("onFocus", o);
  }
};
exports.teardownScopedFocus = function () {
  i = null;
  if (window.addEventListener) {
    window.removeEventListener("blur", r);
    document.removeEventListener("focus", o);
  } else {
    window.detachEvent("onBlur", r);
    document.detachEvent("onFocus", o);
  }
};