function r(e) {
  return !!c.hasOwnProperty(e) || !l.hasOwnProperty(e) && (u.test(e) ? (c[e] = true, true) : (l[e] = true, false));
}
function o(e, t) {
  return t == null || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && t === false;
}
var a = require("./20.js");
var i = require("./10.js");
var s = require("./269.js");
require("./4.js");
var u = /^[a-zA-Z_][\w\.\-]*$/;
var l = {};
var c = {};
var p = {
  createMarkupForID: function (e) {
    return a.ID_ATTRIBUTE_NAME + "=" + s(e);
  },
  setAttributeForID: function (e, t) {
    e.setAttribute(a.ID_ATTRIBUTE_NAME, t);
  },
  createMarkupForProperty: function (e, t) {
    var n = a.properties.hasOwnProperty(e) ? a.properties[e] : null;
    if (n) {
      if (o(n, t)) {
        return "";
      }
      var r = n.attributeName;
      if (n.hasBooleanValue || n.hasOverloadedBooleanValue && t === true) {
        return r + "=\"\"";
      } else {
        return r + "=" + s(t);
      }
    }
    if (a.isCustomAttribute(e)) {
      if (t == null) {
        return "";
      } else {
        return e + "=" + s(t);
      }
    } else {
      return null;
    }
  },
  createMarkupForCustomAttribute: function (e, t) {
    if (r(e) && t != null) {
      return e + "=" + s(t);
    } else {
      return "";
    }
  },
  setValueForProperty: function (e, t, n) {
    var r = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
    if (r) {
      var i = r.mutationMethod;
      if (i) {
        i(e, n);
      } else if (o(r, n)) {
        this.deleteValueForProperty(e, t);
      } else if (r.mustUseAttribute) {
        var s = r.attributeName;
        var u = r.attributeNamespace;
        if (u) {
          e.setAttributeNS(u, s, "" + n);
        } else if (r.hasBooleanValue || r.hasOverloadedBooleanValue && n === true) {
          e.setAttribute(s, "");
        } else {
          e.setAttribute(s, "" + n);
        }
      } else {
        var l = r.propertyName;
        if (!r.hasSideEffects || "" + e[l] != "" + n) {
          e[l] = n;
        }
      }
    } else if (a.isCustomAttribute(t)) {
      p.setValueForAttribute(e, t, n);
    }
  },
  setValueForAttribute: function (e, t, n) {
    if (r(t)) {
      if (n == null) {
        e.removeAttribute(t);
      } else {
        e.setAttribute(t, "" + n);
      }
    }
  },
  deleteValueForProperty: function (e, t) {
    var n = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
    if (n) {
      var r = n.mutationMethod;
      if (r) {
        r(e, undefined);
      } else if (n.mustUseAttribute) {
        e.removeAttribute(n.attributeName);
      } else {
        var o = n.propertyName;
        var i = a.getDefaultValueForProperty(e.nodeName, o);
        if (!n.hasSideEffects || "" + e[o] !== i) {
          e[o] = i;
        }
      }
    } else if (a.isCustomAttribute(t)) {
      e.removeAttribute(t);
    }
  }
};
i.measureMethods(p, "DOMPropertyOperations", {
  setValueForProperty: "setValueForProperty",
  setValueForAttribute: "setValueForAttribute",
  deleteValueForProperty: "deleteValueForProperty"
});
module.exports = p;