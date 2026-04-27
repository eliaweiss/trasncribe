function r() {
  if (!P) {
    P = true;
    y.EventEmitter.injectReactEventListener(v);
    y.EventPluginHub.injectEventPluginOrder(s);
    y.EventPluginHub.injectInstanceHandle(g);
    y.EventPluginHub.injectMount(b);
    y.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: _,
      EnterLeaveEventPlugin: u,
      ChangeEventPlugin: a,
      SelectEventPlugin: w,
      BeforeInputEventPlugin: o
    });
    y.NativeComponent.injectGenericComponentClass(h);
    y.NativeComponent.injectTextComponentClass(m);
    y.Class.injectMixin(p);
    y.DOMProperty.injectDOMPropertyConfig(c);
    y.DOMProperty.injectDOMPropertyConfig(O);
    y.EmptyComponent.injectEmptyComponent("noscript");
    y.Updates.injectReconcileTransaction(E);
    y.Updates.injectBatchingStrategy(f);
    y.RootIndex.injectCreateReactRootIndex(l.canUseDOM ? i.createReactRootIndex : C.createReactRootIndex);
    y.Component.injectEnvironment(d);
  }
}
var o = require("./216.js");
var a = require("./218.js");
var i = require("./219.js");
var s = require("./221.js");
var u = require("./222.js");
var l = require("./5.js");
var c = require("./225.js");
var p = require("./226.js");
var d = require("./48.js");
var f = require("./92.js");
var h = require("./232.js");
var m = require("./91.js");
var v = require("./239.js");
var y = require("./240.js");
var g = require("./21.js");
var b = require("./7.js");
var E = require("./244.js");
var w = require("./253.js");
var C = require("./254.js");
var _ = require("./255.js");
var O = require("./252.js");
var P = false;
module.exports = {
  inject: r
};