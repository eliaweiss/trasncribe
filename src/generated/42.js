function n(e) {
  return o[e];
}
function r(e) {
  return ("" + e).replace(a, n);
}
var o = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  "\"": "&quot;",
  "'": "&#x27;"
};
var a = /[&><"']/g;
module.exports = r;