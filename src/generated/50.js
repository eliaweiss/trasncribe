var r = require("./13.js");
var o = require("./91.js");
var a = require("./93.js");
var i = require("./21.js");
var s = require("./7.js");
var u = require("./10.js");
var l = require("./16.js");
var c = require("./11.js");
var p = require("./53.js");
var d = require("./54.js");
var f = require("./270.js");
require("./4.js");
a.inject();
var h = u.measure("React", "render", s.render);
var m = {
  findDOMNode: d,
  render: h,
  unmountComponentAtNode: s.unmountComponentAtNode,
  version: p,
  unstable_batchedUpdates: c.batchedUpdates,
  unstable_renderSubtreeIntoContainer: f
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject == "function") {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    CurrentOwner: r,
    InstanceHandles: i,
    Mount: s,
    Reconciler: l,
    TextComponent: o
  });
}
module.exports = m;