var r = require("./1.js");
var o = {
  addClass: function (e, t) {
    if (/\s/.test(t)) {
      r(false);
    } else {
      undefined;
    }
    if (t) {
      if (e.classList) {
        e.classList.add(t);
      } else if (!o.hasClass(e, t)) {
        e.className = e.className + " " + t;
      }
    }
    return e;
  },
  removeClass: function (e, t) {
    if (/\s/.test(t)) {
      r(false);
    } else {
      undefined;
    }
    if (t) {
      if (e.classList) {
        e.classList.remove(t);
      } else if (o.hasClass(e, t)) {
        e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
      }
    }
    return e;
  },
  conditionClass: function (e, t, n) {
    return (n ? o.addClass : o.removeClass)(e, t);
  },
  hasClass: function (e, t) {
    if (/\s/.test(t)) {
      r(false);
    } else {
      undefined;
    }
    if (e.classList) {
      return !!t && e.classList.contains(t);
    } else {
      return (" " + e.className + " ").indexOf(" " + t + " ") > -1;
    }
  }
};
module.exports = o;