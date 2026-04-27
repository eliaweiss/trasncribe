var n = Math.pow(2, 53);
var r = {
  createReactRootIndex: function () {
    return Math.ceil(Math.random() * n);
  }
};
module.exports = r;