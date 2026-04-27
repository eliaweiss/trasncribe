function r() {}
var o = require("./202.js");
module.exports = function () {
  function e(e, t, n, r, a, i) {
    if (i !== o) {
      var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      s.name = "Invariant Violation";
      throw s;
    }
  }
  function t() {
    return e;
  }
  e.isRequired = e;
  var n = {
    array: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t
  };
  n.checkPropTypes = r;
  n.PropTypes = n;
  return n;
};