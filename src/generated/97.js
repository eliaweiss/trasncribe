function r(e, t, n, r) {
  try {
    return t(n, r);
  } catch (e) {
    if (o === null) {
      o = e;
    }
    return;
  }
}
var o = null;
var a = {
  invokeGuardedCallback: r,
  invokeGuardedCallbackWithCatch: r,
  rethrowCaughtError: function () {
    if (o) {
      var e = o;
      o = null;
      throw e;
    }
  }
};
module.exports = a;