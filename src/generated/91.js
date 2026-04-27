var r = require("./83.js");
var o = require("./46.js");
var a = require("./48.js");
var i = require("./7.js");
var s = require("./3.js");
var u = require("./42.js");
var l = require("./61.js");
require("./64.js");
function c(e) {}
s(c.prototype, {
  construct: function (e) {
    this._currentElement = e;
    this._stringText = "" + e;
    this._rootNodeID = null;
    this._mountIndex = 0;
  },
  mountComponent: function (e, t, n) {
    this._rootNodeID = e;
    if (t.useCreateElement) {
      var r = n[i.ownerDocumentContextKey];
      var a = r.createElement("span");
      o.setAttributeForID(a, e);
      i.getID(a);
      l(a, this._stringText);
      return a;
    }
    var s = u(this._stringText);
    if (t.renderToStaticMarkup) {
      return s;
    } else {
      return "<span " + o.createMarkupForID(e) + ">" + s + "</span>";
    }
  },
  receiveComponent: function (e, t) {
    if (e !== this._currentElement) {
      this._currentElement = e;
      var n = "" + e;
      if (n !== this._stringText) {
        this._stringText = n;
        var o = i.getNode(this._rootNodeID);
        r.updateTextContent(o, n);
      }
    }
  },
  unmountComponent: function () {
    a.unmountIDFromEnvironment(this._rootNodeID);
  }
});
module.exports = c;