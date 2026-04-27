var n = {
  injectCreateReactRootIndex: function (e) {
    r.createReactRootIndex = e;
  }
};
var r = {
  createReactRootIndex: null,
  injection: n
};
module.exports = r;