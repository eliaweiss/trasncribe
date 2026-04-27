function r() {
  if (this._rootNodeID) {
    d.updateWrapper(this);
  }
}
function o(e) {
  var t = this._currentElement.props;
  var n = i.executeOnChange(t, e);
  u.asap(r, this);
  var o = t.name;
  if (t.type === "radio" && o != null) {
    var a = s.getNode(this._rootNodeID);
    for (var l = a; l.parentNode;) {
      l = l.parentNode;
    }
    for (var d = l.querySelectorAll("input[name=" + JSON.stringify("" + o) + "][type=\"radio\"]"), f = 0; f < d.length; f++) {
      var h = d[f];
      if (h !== a && h.form === a.form) {
        var m = s.getID(h);
        if (m) {
          undefined;
        } else {
          c(false);
        }
        var v = p[m];
        if (v) {
          undefined;
        } else {
          c(false);
        }
        u.asap(r, v);
      }
    }
  }
  return n;
}
var a = require("./51.js");
var i = require("./47.js");
var s = require("./7.js");
var u = require("./11.js");
var l = require("./3.js");
var c = require("./1.js");
var p = {};
var d = {
  getNativeProps: function (e, t, n) {
    var r = i.getValue(t);
    var o = i.getChecked(t);
    var a = l({}, t, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: r ?? e._wrapperState.initialValue,
      checked: o ?? e._wrapperState.initialChecked,
      onChange: e._wrapperState.onChange
    });
    return a;
  },
  mountWrapper: function (e, t) {
    var n = t.defaultValue;
    e._wrapperState = {
      initialChecked: t.defaultChecked || false,
      initialValue: n ?? null,
      onChange: o.bind(e)
    };
  },
  mountReadyWrapper: function (e) {
    p[e._rootNodeID] = e;
  },
  unmountWrapper: function (e) {
    delete p[e._rootNodeID];
  },
  updateWrapper: function (e) {
    var t = e._currentElement.props;
    var n = t.checked;
    if (n != null) {
      a.updatePropertyByID(e._rootNodeID, "checked", n || false);
    }
    var r = i.getValue(t);
    if (r != null) {
      a.updatePropertyByID(e._rootNodeID, "value", "" + r);
    }
  }
};
module.exports = d;