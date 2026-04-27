function n(e) {
  if (typeof e == "string") {
    var t = document.querySelectorAll(e);
    e = "length" in t ? t[0] : t;
  }
  u = e || u;
}
function r(e) {
  i(e);
  (e || u).setAttribute("aria-hidden", "true");
}
function o(e) {
  i(e);
  (e || u).removeAttribute("aria-hidden");
}
function a(e, t) {
  if (e) {
    r(t);
  } else {
    o(t);
  }
}
function i(e) {
  if (!e && !u) {
    throw new Error("react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible");
  }
}
function s() {
  u = document.body;
}
var u = typeof document != "undefined" ? document.body : null;
exports.toggle = a;
exports.setElement = n;
exports.show = o;
exports.hide = r;
exports.resetForTesting = s;