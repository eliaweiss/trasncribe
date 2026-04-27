function r(e, t, n) {
  this.props = e;
  this.context = t;
  this.refs = a;
  this.updater = n || o;
}
var o = require("./102.js");
require("./41.js");
var a = require("./24.js");
var i = require("./1.js");
require("./4.js");
r.prototype.isReactComponent = {};
r.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) {
    i(false);
  } else {
    undefined;
  }
  this.updater.enqueueSetState(this, e);
  if (t) {
    this.updater.enqueueCallback(this, t);
  }
};
r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this);
  if (e) {
    this.updater.enqueueCallback(this, e);
  }
};
module.exports = r;