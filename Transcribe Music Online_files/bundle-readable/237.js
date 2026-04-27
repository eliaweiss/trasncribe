function r() {
  if (this._rootNodeID) {
    c.updateWrapper(this);
  }
}
function o(e) {
  var t = this._currentElement.props;
  var n = a.executeOnChange(t, e);
  s.asap(r, this);
  return n;
}
var a = require("./47.js");
var i = require("./51.js");
var s = require("./11.js");
var u = require("./3.js");
var l = require("./1.js");
require("./4.js");
var c = {
  getNativeProps: function (e, t, n) {
    if (t.dangerouslySetInnerHTML != null) {
      l(false);
    } else {
      undefined;
    }
    var r = u({}, t, {
      defaultValue: undefined,
      value: undefined,
      children: e._wrapperState.initialValue,
      onChange: e._wrapperState.onChange
    });
    return r;
  },
  mountWrapper: function (e, t) {
    var n = t.defaultValue;
    var r = t.children;
    if (r != null) {
      if (n != null) {
        l(false);
      } else {
        undefined;
      }
      if (Array.isArray(r)) {
        if (r.length <= 1) {
          undefined;
        } else {
          l(false);
        }
        r = r[0];
      }
      n = "" + r;
    }
    if (n == null) {
      n = "";
    }
    var i = a.getValue(t);
    e._wrapperState = {
      initialValue: "" + (i ?? n),
      onChange: o.bind(e)
    };
  },
  updateWrapper: function (e) {
    var t = e._currentElement.props;
    var n = a.getValue(t);
    if (n != null) {
      i.updatePropertyByID(e._rootNodeID, "value", "" + n);
    }
  }
};
module.exports = c;