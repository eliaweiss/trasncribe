var r = require("./1.js");
var o = false;
var a = {
  unmountIDFromEnvironment: null,
  replaceNodeWithMarkupByID: null,
  processChildrenUpdates: null,
  injection: {
    injectEnvironment: function (e) {
      if (o) {
        r(false);
      } else {
        undefined;
      }
      a.unmountIDFromEnvironment = e.unmountIDFromEnvironment;
      a.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID;
      a.processChildrenUpdates = e.processChildrenUpdates;
      o = true;
    }
  }
};
module.exports = a;