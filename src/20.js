function r(e, t) {
  return (e & t) === t;
}
var o = require("./1.js");
var a = {
  MUST_USE_ATTRIBUTE: 1,
  MUST_USE_PROPERTY: 2,
  HAS_SIDE_EFFECTS: 4,
  HAS_BOOLEAN_VALUE: 8,
  HAS_NUMERIC_VALUE: 16,
  HAS_POSITIVE_NUMERIC_VALUE: 48,
  HAS_OVERLOADED_BOOLEAN_VALUE: 64,
  injectDOMPropertyConfig: function (e) {
    var t = a;
    var n = e.Properties || {};
    var i = e.DOMAttributeNamespaces || {};
    var u = e.DOMAttributeNames || {};
    var l = e.DOMPropertyNames || {};
    var c = e.DOMMutationMethods || {};
    if (e.isCustomAttribute) {
      s._isCustomAttributeFunctions.push(e.isCustomAttribute);
    }
    for (var p in n) {
      if (s.properties.hasOwnProperty(p)) {
        o(false);
      } else {
        undefined;
      }
      var d = p.toLowerCase();
      var f = n[p];
      var h = {
        attributeName: d,
        attributeNamespace: null,
        propertyName: p,
        mutationMethod: null,
        mustUseAttribute: r(f, t.MUST_USE_ATTRIBUTE),
        mustUseProperty: r(f, t.MUST_USE_PROPERTY),
        hasSideEffects: r(f, t.HAS_SIDE_EFFECTS),
        hasBooleanValue: r(f, t.HAS_BOOLEAN_VALUE),
        hasNumericValue: r(f, t.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: r(f, t.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: r(f, t.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      if (h.mustUseAttribute && h.mustUseProperty) {
        o(false);
      } else {
        undefined;
      }
      if (!h.mustUseProperty && h.hasSideEffects) {
        o(false);
      } else {
        undefined;
      }
      if (h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1) {
        undefined;
      } else {
        o(false);
      }
      if (u.hasOwnProperty(p)) {
        var m = u[p];
        h.attributeName = m;
      }
      if (i.hasOwnProperty(p)) {
        h.attributeNamespace = i[p];
      }
      if (l.hasOwnProperty(p)) {
        h.propertyName = l[p];
      }
      if (c.hasOwnProperty(p)) {
        h.mutationMethod = c[p];
      }
      s.properties[p] = h;
    }
  }
};
var i = {};
var s = {
  ID_ATTRIBUTE_NAME: "data-reactid",
  properties: {},
  getPossibleStandardName: null,
  _isCustomAttributeFunctions: [],
  isCustomAttribute: function (e) {
    for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
      var n = s._isCustomAttributeFunctions[t];
      if (n(e)) {
        return true;
      }
    }
    return false;
  },
  getDefaultValueForProperty: function (e, t) {
    var n;
    var r = i[e];
    if (!r) {
      i[e] = r = {};
    }
    if (!(t in r)) {
      n = document.createElement(e);
      r[t] = n[t];
    }
    return r[t];
  },
  injection: a
};
module.exports = s;