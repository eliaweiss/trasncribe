var r = require("./83.js");
var o = require("./46.js");
var a = require("./7.js");
var i = require("./10.js");
var s = require("./1.js");
var u = {
  dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
  style: "`style` must be set using `updateStylesByID()`."
};
var l = {
  updatePropertyByID: function (e, t, n) {
    var r = a.getNode(e);
    if (u.hasOwnProperty(t)) {
      s(false);
    } else {
      undefined;
    }
    if (n != null) {
      o.setValueForProperty(r, t, n);
    } else {
      o.deleteValueForProperty(r, t);
    }
  },
  dangerouslyReplaceNodeWithMarkupByID: function (e, t) {
    var n = a.getNode(e);
    r.dangerouslyReplaceNodeWithMarkup(n, t);
  },
  dangerouslyProcessChildrenUpdates: function (e, t) {
    for (var n = 0; n < e.length; n++) {
      e[n].parentNode = a.getNode(e[n].parentID);
    }
    r.processUpdates(e, t);
  }
};
i.measureMethods(l, "ReactDOMIDOperations", {
  dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID",
  dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates"
});
module.exports = l;