var r = require("./1.js");
var o = {
  reinitializeTransaction: function () {
    this.transactionWrappers = this.getTransactionWrappers();
    if (this.wrapperInitData) {
      this.wrapperInitData.length = 0;
    } else {
      this.wrapperInitData = [];
    }
    this._isInTransaction = false;
  },
  _isInTransaction: false,
  getTransactionWrappers: null,
  isInTransaction: function () {
    return !!this._isInTransaction;
  },
  perform: function (e, t, n, o, a, i, s, u) {
    if (this.isInTransaction()) {
      r(false);
    } else {
      undefined;
    }
    var l;
    var c;
    try {
      this._isInTransaction = true;
      l = true;
      this.initializeAll(0);
      c = e.call(t, n, o, a, i, s, u);
      l = false;
    } finally {
      try {
        if (l) {
          try {
            this.closeAll(0);
          } catch (e) {}
        } else {
          this.closeAll(0);
        }
      } finally {
        this._isInTransaction = false;
      }
    }
    return c;
  },
  initializeAll: function (e) {
    for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
      var r = t[n];
      try {
        this.wrapperInitData[n] = a.OBSERVED_ERROR;
        this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null;
      } finally {
        if (this.wrapperInitData[n] === a.OBSERVED_ERROR) {
          try {
            this.initializeAll(n + 1);
          } catch (e) {}
        }
      }
    }
  },
  closeAll: function (e) {
    if (this.isInTransaction()) {
      undefined;
    } else {
      r(false);
    }
    for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
      var o;
      var i = t[n];
      var s = this.wrapperInitData[n];
      try {
        o = true;
        if (s !== a.OBSERVED_ERROR && i.close) {
          i.close.call(this, s);
        }
        o = false;
      } finally {
        if (o) {
          try {
            this.closeAll(n + 1);
          } catch (e) {}
        }
      }
    }
    this.wrapperInitData.length = 0;
  }
};
var a = {
  Mixin: o,
  OBSERVED_ERROR: {}
};
module.exports = a;