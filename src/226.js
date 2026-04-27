require("./27.js");
var r = require("./54.js");
require("./4.js");
var o = "_getDOMNodeDidWarn";
var a = {
  getDOMNode: function () {
    this.constructor[o] = true;
    return r(this);
  }
};
module.exports = a;