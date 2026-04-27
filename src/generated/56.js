function n(e) {
  var t = this;
  var n = t.nativeEvent;
  if (n.getModifierState) {
    return n.getModifierState(e);
  }
  var r = o[e];
  return !!r && !!n[r];
}
function r(e) {
  return n;
}
var o = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
module.exports = r;