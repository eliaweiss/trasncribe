module.exports = function (e) {
  if (!e.webpackPolyfill) {
    e.deprecate = function () {};
    e.paths = [];
    e.children = [];
    e.webpackPolyfill = 1;
  }
  return e;
};