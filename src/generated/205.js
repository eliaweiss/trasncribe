var r;
var o;
var a;
var i;
var s;
var u = [].slice;
r = require("./2.js");
a = r.DOM.script;
if (typeof window != "undefined" && window !== null && window.GoogleAnalyticsObject == null) {
  window.GoogleAnalyticsObject = "ga";
}
if (typeof window != "undefined" && window !== null && window.ga == null) {
  window.ga = o;
}
o = function () {
  var e;
  e = arguments.length >= 1 ? u.call(arguments, 0) : [];
  if (typeof window != "undefined" && window !== null) {
    return window[window.GoogleAnalyticsObject].apply(window, e);
  } else {
    return undefined;
  }
};
if (typeof window != "undefined" && window !== null && window[s = window.GoogleAnalyticsObject] == null) {
  window[s] = function () {
    var e;
    var t;
    t = arguments.length >= 1 ? u.call(arguments, 0) : [];
    e = window[window.GoogleAnalyticsObject];
    e.q || (e.q = []);
    e.q.push(t);
  };
}
i = false;
o.Initializer = r.createClass({
  displayName: "GAInitializer",
  componentDidMount: function () {
    window[window.GoogleAnalyticsObject].l = new Date().getTime();
    if (!i) {
      return this.addScript();
    }
  },
  addScript: function () {
    var e;
    var t;
    i = true;
    e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "//www.google-analytics.com/analytics.js";
    t = document.getElementsByTagName("script")[0];
    return t.parentNode.insertBefore(e, t);
  },
  render: function () {
    return a(null);
  }
});
module.exports = o;