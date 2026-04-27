function r(e) {
  if (i.isValidElement(e)) {
    undefined;
  } else {
    h(false);
  }
  var t;
  try {
    p.injection.injectBatchingStrategy(l);
    var n = s.createReactRootID();
    t = c.getPooled(false);
    return t.perform(function () {
      var r = f(e, null);
      var o = r.mountComponent(n, t, d);
      return u.addChecksumToMarkup(o);
    }, null);
  } finally {
    c.release(t);
    p.injection.injectBatchingStrategy(a);
  }
}
function o(e) {
  if (i.isValidElement(e)) {
    undefined;
  } else {
    h(false);
  }
  var t;
  try {
    p.injection.injectBatchingStrategy(l);
    var n = s.createReactRootID();
    t = c.getPooled(true);
    return t.perform(function () {
      var r = f(e, null);
      return r.mountComponent(n, t, d);
    }, null);
  } finally {
    c.release(t);
    p.injection.injectBatchingStrategy(a);
  }
}
var a = require("./92.js");
var i = require("./8.js");
var s = require("./21.js");
var u = require("./99.js");
var l = require("./246.js");
var c = require("./248.js");
var p = require("./11.js");
var d = require("./24.js");
var f = require("./59.js");
var h = require("./1.js");
module.exports = {
  renderToString: r,
  renderToStaticMarkup: o
};