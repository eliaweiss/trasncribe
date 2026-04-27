function r() {
  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
    this._wrapperState.pendingUpdate = false;
    var e = this._currentElement.props;
    var t = i.getValue(e);
    if (t != null) {
      o(this, Boolean(e.multiple), t);
    }
  }
}
function o(e, t, n) {
  var r;
  var o;
  var a = s.getNode(e._rootNodeID).options;
  if (t) {
    r = {};
    o = 0;
    for (; o < n.length; o++) {
      r["" + n[o]] = true;
    }
    for (o = 0; o < a.length; o++) {
      var i = r.hasOwnProperty(a[o].value);
      if (a[o].selected !== i) {
        a[o].selected = i;
      }
    }
  } else {
    r = "" + n;
    o = 0;
    for (; o < a.length; o++) {
      if (a[o].value === r) {
        a[o].selected = true;
        return;
      }
    }
    if (a.length) {
      a[0].selected = true;
    }
  }
}
function a(e) {
  var t = this._currentElement.props;
  var n = i.executeOnChange(t, e);
  this._wrapperState.pendingUpdate = true;
  u.asap(r, this);
  return n;
}
var i = require("./47.js");
var s = require("./7.js");
var u = require("./11.js");
var l = require("./3.js");
require("./4.js");
var c = "__ReactDOMSelect_value$" + Math.random().toString(36).slice(2);
var p = {
  valueContextKey: c,
  getNativeProps: function (e, t, n) {
    return l({}, t, {
      onChange: e._wrapperState.onChange,
      value: undefined
    });
  },
  mountWrapper: function (e, t) {
    var n = i.getValue(t);
    e._wrapperState = {
      pendingUpdate: false,
      initialValue: n ?? t.defaultValue,
      onChange: a.bind(e),
      wasMultiple: Boolean(t.multiple)
    };
  },
  processChildContext: function (e, t, n) {
    var r = l({}, n);
    r[c] = e._wrapperState.initialValue;
    return r;
  },
  postUpdateWrapper: function (e) {
    var t = e._currentElement.props;
    e._wrapperState.initialValue = undefined;
    var n = e._wrapperState.wasMultiple;
    e._wrapperState.wasMultiple = Boolean(t.multiple);
    var r = i.getValue(t);
    if (r != null) {
      e._wrapperState.pendingUpdate = false;
      o(e, Boolean(t.multiple), r);
    } else if (n !== Boolean(t.multiple)) {
      if (t.defaultValue != null) {
        o(e, Boolean(t.multiple), t.defaultValue);
      } else {
        o(e, Boolean(t.multiple), t.multiple ? [] : "");
      }
    }
  }
};
module.exports = p;