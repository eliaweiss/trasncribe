var n = {
  onClick: true,
  onDoubleClick: true,
  onMouseDown: true,
  onMouseMove: true,
  onMouseUp: true,
  onClickCapture: true,
  onDoubleClickCapture: true,
  onMouseDownCapture: true,
  onMouseMoveCapture: true,
  onMouseUpCapture: true
};
var r = {
  getNativeProps: function (e, t, r) {
    if (!t.disabled) {
      return t;
    }
    var o = {};
    for (var a in t) {
      if (t.hasOwnProperty(a) && !n[a]) {
        o[a] = t[a];
      }
    }
    return o;
  }
};
module.exports = r;