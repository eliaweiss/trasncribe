var r = require("./5.js");
var o = /^[ \r\n\t\f]/;
var a = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
function i(e, t) {
  e.innerHTML = t;
}
if (typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction) {
  i = function (e, t) {
    MSApp.execUnsafeLocalFunction(function () {
      e.innerHTML = t;
    });
  };
}
if (r.canUseDOM) {
  var s = document.createElement("div");
  s.innerHTML = " ";
  if (s.innerHTML === "") {
    i = function (e, t) {
      if (e.parentNode) {
        e.parentNode.replaceChild(e, e);
      }
      if (o.test(t) || t[0] === "<" && a.test(t)) {
        e.innerHTML = String.fromCharCode(65279) + t;
        var n = e.firstChild;
        if (n.data.length === 1) {
          e.removeChild(n);
        } else {
          n.deleteData(0, 1);
        }
      } else {
        e.innerHTML = t;
      }
    };
  }
}
module.exports = i;