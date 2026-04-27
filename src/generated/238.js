function r(e) {
  o.enqueueEvents(e);
  o.processEventQueue(false);
}
var o = require("./25.js");
var a = {
  handleTopLevel: function (e, t, n, a, i) {
    var s = o.extractEvents(e, t, n, a, i);
    r(s);
  }
};
module.exports = a;