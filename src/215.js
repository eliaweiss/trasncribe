var r = require("./7.js");
var o = require("./54.js");
var a = require("./71.js");
var i = {
  componentDidMount: function () {
    if (this.props.autoFocus) {
      a(o(this));
    }
  }
};
var s = {
  Mixin: i,
  focusDOMComponent: function () {
    a(r.getNode(this._rootNodeID));
  }
};
module.exports = s;