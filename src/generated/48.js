var r = require("./51.js");
var o = require("./7.js");
var a = {
  processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
  replaceNodeWithMarkupByID: r.dangerouslyReplaceNodeWithMarkupByID,
  unmountIDFromEnvironment: function (e) {
    o.purgeID(e);
  }
};
module.exports = a;