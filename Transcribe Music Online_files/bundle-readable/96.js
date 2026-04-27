function n(e) {
  return !!a[e];
}
function r(e) {
  a[e] = true;
}
function o(e) {
  delete a[e];
}
var a = {};
var i = {
  isNullComponentID: n,
  registerNullComponentID: r,
  deregisterNullComponentID: o
};
module.exports = i;