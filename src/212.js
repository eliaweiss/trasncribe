function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function a(e, t) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  if (!t || typeof t != "object" && typeof t != "function") {
    return e;
  } else {
    return t;
  }
}
function i(e, t) {
  if (typeof t != "function" && t !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (t) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, t);
    } else {
      e.__proto__ = t;
    }
  }
}
function s(e) {
  return e.displayName || e.name || "Component";
}
function u(e, t) {
  try {
    return e.apply(t);
  } catch (e) {
    S.value = e;
    return S;
  }
}
function l(e, t, n, r = {}) {
  var l = Boolean(e);
  var d = e || O;
  var h = undefined;
  h = typeof t == "function" ? t : t ? (0, y.default)(t) : P;
  var v = n || k;
  var g = r.pure;
  var b = g === undefined || g;
  var E = r.withRef;
  var C = E !== undefined && E;
  var T = b && v !== k;
  var M = x++;
  return function (e) {
    function t(e, t, n) {
      var r = v(e, t, n);
      return r;
    }
    var n = "Connect(" + s(e) + ")";
    var r = function (r) {
      function s(e, t) {
        o(this, s);
        var i = a(this, r.call(this, e, t));
        i.version = M;
        i.store = e.store || t.store;
        (0, _.default)(i.store, "Could not find \"store\" in either the context or " + ("props of \"" + n + "\". ") + "Either wrap the root component in a <Provider>, " + ("or explicitly pass \"store\" as a prop to \"" + n + "\"."));
        var u = i.store.getState();
        i.state = {
          storeState: u
        };
        i.clearCache();
        return i;
      }
      i(s, r);
      s.prototype.shouldComponentUpdate = function () {
        return !b || this.haveOwnPropsChanged || this.hasStoreStateChanged;
      };
      s.prototype.computeStateProps = function (e, t) {
        if (!this.finalMapStateToProps) {
          return this.configureFinalMapState(e, t);
        }
        var n = e.getState();
        var r = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(n, t) : this.finalMapStateToProps(n);
        return r;
      };
      s.prototype.configureFinalMapState = function (e, t) {
        var n = d(e.getState(), t);
        var r = typeof n == "function";
        this.finalMapStateToProps = r ? n : d;
        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
        if (r) {
          return this.computeStateProps(e, t);
        } else {
          return n;
        }
      };
      s.prototype.computeDispatchProps = function (e, t) {
        if (!this.finalMapDispatchToProps) {
          return this.configureFinalMapDispatch(e, t);
        }
        var n = e.dispatch;
        var r = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(n, t) : this.finalMapDispatchToProps(n);
        return r;
      };
      s.prototype.configureFinalMapDispatch = function (e, t) {
        var n = h(e.dispatch, t);
        var r = typeof n == "function";
        this.finalMapDispatchToProps = r ? n : h;
        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
        if (r) {
          return this.computeDispatchProps(e, t);
        } else {
          return n;
        }
      };
      s.prototype.updateStatePropsIfNeeded = function () {
        var e = this.computeStateProps(this.store, this.props);
        return (!this.stateProps || !(0, m.default)(e, this.stateProps)) && (this.stateProps = e, true);
      };
      s.prototype.updateDispatchPropsIfNeeded = function () {
        var e = this.computeDispatchProps(this.store, this.props);
        return (!this.dispatchProps || !(0, m.default)(e, this.dispatchProps)) && (this.dispatchProps = e, true);
      };
      s.prototype.updateMergedPropsIfNeeded = function () {
        var e = t(this.stateProps, this.dispatchProps, this.props);
        return (!this.mergedProps || !T || !(0, m.default)(e, this.mergedProps)) && (this.mergedProps = e, true);
      };
      s.prototype.isSubscribed = function () {
        return typeof this.unsubscribe == "function";
      };
      s.prototype.trySubscribe = function () {
        if (l && !this.unsubscribe) {
          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
          this.handleChange();
        }
      };
      s.prototype.tryUnsubscribe = function () {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      };
      s.prototype.componentDidMount = function () {
        this.trySubscribe();
      };
      s.prototype.componentWillReceiveProps = function (e) {
        if (!b || !(0, m.default)(e, this.props)) {
          this.haveOwnPropsChanged = true;
        }
      };
      s.prototype.componentWillUnmount = function () {
        this.tryUnsubscribe();
        this.clearCache();
      };
      s.prototype.clearCache = function () {
        this.dispatchProps = null;
        this.stateProps = null;
        this.mergedProps = null;
        this.haveOwnPropsChanged = true;
        this.hasStoreStateChanged = true;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;
        this.renderedElement = null;
        this.finalMapDispatchToProps = null;
        this.finalMapStateToProps = null;
      };
      s.prototype.handleChange = function () {
        if (this.unsubscribe) {
          var e = this.store.getState();
          var t = this.state.storeState;
          if (!b || t !== e) {
            if (b && !this.doStatePropsDependOnOwnProps) {
              var n = u(this.updateStatePropsIfNeeded, this);
              if (!n) {
                return;
              }
              if (n === S) {
                this.statePropsPrecalculationError = S.value;
              }
              this.haveStatePropsBeenPrecalculated = true;
            }
            this.hasStoreStateChanged = true;
            this.setState({
              storeState: e
            });
          }
        }
      };
      s.prototype.getWrappedInstance = function () {
        (0, _.default)(C, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call.");
        return this.refs.wrappedInstance;
      };
      s.prototype.render = function () {
        var t = this.haveOwnPropsChanged;
        var n = this.hasStoreStateChanged;
        var r = this.haveStatePropsBeenPrecalculated;
        var o = this.statePropsPrecalculationError;
        var a = this.renderedElement;
        this.haveOwnPropsChanged = false;
        this.hasStoreStateChanged = false;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;
        if (o) {
          throw o;
        }
        var i = true;
        var s = true;
        if (b && a) {
          i = n || t && this.doStatePropsDependOnOwnProps;
          s = t && this.doDispatchPropsDependOnOwnProps;
        }
        var u = false;
        var l = false;
        if (r) {
          u = true;
        } else if (i) {
          u = this.updateStatePropsIfNeeded();
        }
        if (s) {
          l = this.updateDispatchPropsIfNeeded();
        }
        var d = true;
        d = (!!u || !!l || !!t) && this.updateMergedPropsIfNeeded();
        if (!d && a) {
          return a;
        } else {
          if (C) {
            this.renderedElement = (0, p.createElement)(e, c({}, this.mergedProps, {
              ref: "wrappedInstance"
            }));
          } else {
            this.renderedElement = (0, p.createElement)(e, this.mergedProps);
          }
          return this.renderedElement;
        }
      };
      return s;
    }(p.Component);
    r.displayName = n;
    r.WrappedComponent = e;
    r.contextTypes = {
      store: f.default
    };
    r.propTypes = {
      store: f.default
    };
    return (0, w.default)(r, e);
  };
}
exports.__esModule = true;
var c = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) {
      if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
  }
  return e;
};
exports.default = l;
var p = require("./2.js");
var d = require("./80.js");
var f = r(d);
var h = require("./213.js");
var m = r(h);
var v = require("./214.js");
var y = r(v);
var g = require("./81.js");
r(g);
var b = require("./44.js");
r(b);
var E = require("./180.js");
var w = r(E);
var C = require("./182.js");
var _ = r(C);
function O(e) {
  return {};
}
function P(e) {
  return {
    dispatch: e
  };
}
function k(e, t, n) {
  return c({}, n, e, t);
}
var S = {
  value: null
};
var x = 0;