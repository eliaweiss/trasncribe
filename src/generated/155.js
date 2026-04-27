function r(e) {
  var t;
  e.subscribe(function () {
    var n = t;
    t = e.getState();
    e.dispatch((0, o.updateWorkspace)(e.getState(), n));
  });
  if (typeof window != "undefined") {
    window.onbeforeunload = function (t) {
      if (e.getState().workspace.isDirty) {
        if (e.getState().auth.isLoggedIn) {
          return "Data is being saved to the server, if you close now you will lose some of your work.";
        } else {
          return "You will lose all of your current data, do you want to continue?";
        }
      }
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = r;
var o = require("./66.js");
module.exports = exports.default;