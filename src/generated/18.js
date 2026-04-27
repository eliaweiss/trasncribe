function n() {
  var e = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
  return a + e;
}
function r() {
  f ||= new Promise(function (e) {
    var t = document.createElement("script");
    t.type = "text/javascript";
    t.src = "https://js.stripe.com/v2/";
    t.onload = function () {
      Stripe.setPublishableKey(i);
      e();
    };
    document.head.appendChild(t);
  });
  return f;
}
function o() {
  h ||= new Promise(function (e) {
    var t = document.createElement("script");
    t.type = "text/javascript";
    t.src = "https://www.paypalobjects.com/api/checkout.js";
    t.onload = function () {
      e();
    };
    document.head.appendChild(t);
  });
  return h;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServerUrl = n;
exports.loadStripe = r;
exports.loadPaypal = o;
var a = "";
var i = "pk_live_P2QoJLgz8pWaQ1CnlEBQKExF";
exports.stripePk = i;
var s = "production";
exports.paypalEnvironment = s;
var u = typeof window == "undefined";
if (!u) {
  var l = window.location.hostname.indexOf(".local") >= 0 || document.cookie.includes("istranscribertest");
  if (l) {
    var c = window.location.hostname;
    var p = window.location.protocol;
    var d = window.location.port ? ":3000" : "";
    a = p + "//" + c + d;
    exports.stripePk = i = "pk_test_BoP97ky2AGW9x3nUBf3J0jrt";
    exports.paypalEnvironment = s = "sandbox";
  }
}
var f;
var h;
var m = {
  cents: 2500,
  hash: "5018592d5bd5b45e99938f6e3569ce54"
};
exports.price = m;