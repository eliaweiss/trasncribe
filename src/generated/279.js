module.exports = function () {
  return new Worker(require.p + "worker.js");
};