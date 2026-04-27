var r = require("./79.js");
module.exports = function (e, t) {
  var n = r(e);
  var o = n[t.shiftKey ? 0 : n.length - 1];
  var a = o === document.activeElement || e === document.activeElement;
  if (a) {
    t.preventDefault();
    var i = n[t.shiftKey ? n.length - 1 : 0];
    i.focus();
  }
};