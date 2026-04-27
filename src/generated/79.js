/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
function n(e, t) {
  var n = e.nodeName.toLowerCase();
  return (/input|select|textarea|button|object/.test(n) ? !e.disabled : n === "a" ? e.href || t : t) && o(e);
}
function r(e) {
  return e.offsetWidth <= 0 && e.offsetHeight <= 0 || e.style.display === "none";
}
function o(e) {
  while (e && e !== document.body) {
    if (r(e)) {
      return false;
    }
    e = e.parentNode;
  }
  return true;
}
function a(e) {
  var t = e.getAttribute("tabindex");
  if (t === null) {
    t = undefined;
  }
  var r = isNaN(t);
  return (r || t >= 0) && n(e, !r);
}
function i(e) {
  return [].slice.call(e.querySelectorAll("*"), 0).filter(function (e) {
    return a(e);
  });
}
module.exports = i;