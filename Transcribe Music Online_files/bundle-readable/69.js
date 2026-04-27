var r = require("./9.js");
var o = {
  listen: function (e, t, n) {
    if (e.addEventListener) {
      e.addEventListener(t, n, false);
      return {
        remove: function () {
          e.removeEventListener(t, n, false);
        }
      };
    } else if (e.attachEvent) {
      e.attachEvent("on" + t, n);
      return {
        remove: function () {
          e.detachEvent("on" + t, n);
        }
      };
    } else {
      return undefined;
    }
  },
  capture: function (e, t, n) {
    if (e.addEventListener) {
      e.addEventListener(t, n, true);
      return {
        remove: function () {
          e.removeEventListener(t, n, true);
        }
      };
    } else {
      return {
        remove: r
      };
    }
  },
  registerDefault: function () {}
};
module.exports = o;