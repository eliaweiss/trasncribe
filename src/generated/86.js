function r(e, t) {
  var n = C.hasOwnProperty(t) ? C[t] : null;
  if (O.hasOwnProperty(t)) {
    if (n !== E.OVERRIDE_BASE) {
      v(false);
    } else {
      undefined;
    }
  }
  if (e.hasOwnProperty(t)) {
    if (n !== E.DEFINE_MANY && n !== E.DEFINE_MANY_MERGED) {
      v(false);
    } else {
      undefined;
    }
  }
}
function o(e, t) {
  if (t) {
    if (typeof t == "function") {
      v(false);
    } else {
      undefined;
    }
    if (d.isValidElement(t)) {
      v(false);
    } else {
      undefined;
    }
    var n = e.prototype;
    if (t.hasOwnProperty(b)) {
      _.mixins(e, t.mixins);
    }
    for (var o in t) {
      if (t.hasOwnProperty(o) && o !== b) {
        var a = t[o];
        r(n, o);
        if (_.hasOwnProperty(o)) {
          _[o](e, a);
        } else {
          var i = C.hasOwnProperty(o);
          var l = n.hasOwnProperty(o);
          var c = typeof a == "function";
          var p = c && !i && !l && t.autobind !== false;
          if (p) {
            n.__reactAutoBindMap ||= {};
            n.__reactAutoBindMap[o] = a;
            n[o] = a;
          } else if (l) {
            var f = C[o];
            if (!i || f !== E.DEFINE_MANY_MERGED && f !== E.DEFINE_MANY) {
              v(false);
            } else {
              undefined;
            }
            if (f === E.DEFINE_MANY_MERGED) {
              n[o] = s(n[o], a);
            } else if (f === E.DEFINE_MANY) {
              n[o] = u(n[o], a);
            }
          } else {
            n[o] = a;
          }
        }
      }
    }
  }
}
function a(e, t) {
  if (t) {
    for (var n in t) {
      var r = t[n];
      if (t.hasOwnProperty(n)) {
        var o = n in _;
        if (o) {
          v(false);
        } else {
          undefined;
        }
        var a = n in e;
        if (a) {
          v(false);
        } else {
          undefined;
        }
        e[n] = r;
      }
    }
  }
}
function i(e, t) {
  if (e && t && typeof e == "object" && typeof t == "object") {
    undefined;
  } else {
    v(false);
  }
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      if (e[n] !== undefined) {
        v(false);
      } else {
        undefined;
      }
      e[n] = t[n];
    }
  }
  return e;
}
function s(e, t) {
  return function () {
    var n = e.apply(this, arguments);
    var r = t.apply(this, arguments);
    if (n == null) {
      return r;
    }
    if (r == null) {
      return n;
    }
    var o = {};
    i(o, n);
    i(o, r);
    return o;
  };
}
function u(e, t) {
  return function () {
    e.apply(this, arguments);
    t.apply(this, arguments);
  };
}
function l(e, t) {
  var n = t.bind(e);
  return n;
}
function c(e) {
  for (var t in e.__reactAutoBindMap) {
    if (e.__reactAutoBindMap.hasOwnProperty(t)) {
      var n = e.__reactAutoBindMap[t];
      e[t] = l(e, n);
    }
  }
}
var p = require("./87.js");
var d = require("./8.js");
require("./38.js");
require("./37.js");
var f = require("./102.js");
var h = require("./3.js");
var m = require("./24.js");
var v = require("./1.js");
var y = require("./32.js");
var g = require("./14.js");
require("./4.js");
var b = g({
  mixins: null
});
var E = y({
  DEFINE_ONCE: null,
  DEFINE_MANY: null,
  OVERRIDE_BASE: null,
  DEFINE_MANY_MERGED: null
});
var w = [];
var C = {
  mixins: E.DEFINE_MANY,
  statics: E.DEFINE_MANY,
  propTypes: E.DEFINE_MANY,
  contextTypes: E.DEFINE_MANY,
  childContextTypes: E.DEFINE_MANY,
  getDefaultProps: E.DEFINE_MANY_MERGED,
  getInitialState: E.DEFINE_MANY_MERGED,
  getChildContext: E.DEFINE_MANY_MERGED,
  render: E.DEFINE_ONCE,
  componentWillMount: E.DEFINE_MANY,
  componentDidMount: E.DEFINE_MANY,
  componentWillReceiveProps: E.DEFINE_MANY,
  shouldComponentUpdate: E.DEFINE_ONCE,
  componentWillUpdate: E.DEFINE_MANY,
  componentDidUpdate: E.DEFINE_MANY,
  componentWillUnmount: E.DEFINE_MANY,
  updateComponent: E.OVERRIDE_BASE
};
var _ = {
  displayName: function (e, t) {
    e.displayName = t;
  },
  mixins: function (e, t) {
    if (t) {
      for (var n = 0; n < t.length; n++) {
        o(e, t[n]);
      }
    }
  },
  childContextTypes: function (e, t) {
    e.childContextTypes = h({}, e.childContextTypes, t);
  },
  contextTypes: function (e, t) {
    e.contextTypes = h({}, e.contextTypes, t);
  },
  getDefaultProps: function (e, t) {
    if (e.getDefaultProps) {
      e.getDefaultProps = s(e.getDefaultProps, t);
    } else {
      e.getDefaultProps = t;
    }
  },
  propTypes: function (e, t) {
    e.propTypes = h({}, e.propTypes, t);
  },
  statics: function (e, t) {
    a(e, t);
  },
  autobind: function () {}
};
var O = {
  replaceState: function (e, t) {
    this.updater.enqueueReplaceState(this, e);
    if (t) {
      this.updater.enqueueCallback(this, t);
    }
  },
  isMounted: function () {
    return this.updater.isMounted(this);
  },
  setProps: function (e, t) {
    this.updater.enqueueSetProps(this, e);
    if (t) {
      this.updater.enqueueCallback(this, t);
    }
  },
  replaceProps: function (e, t) {
    this.updater.enqueueReplaceProps(this, e);
    if (t) {
      this.updater.enqueueCallback(this, t);
    }
  }
};
function P() {}
h(P.prototype, p.prototype, O);
var k = {
  createClass: function (e) {
    function t(e, t, n) {
      if (this.__reactAutoBindMap) {
        c(this);
      }
      this.props = e;
      this.context = t;
      this.refs = m;
      this.updater = n || f;
      this.state = null;
      var r = this.getInitialState ? this.getInitialState() : null;
      if (typeof r != "object" || Array.isArray(r)) {
        v(false);
      } else {
        undefined;
      }
      this.state = r;
    }
    t.prototype = new P();
    t.prototype.constructor = t;
    w.forEach(o.bind(null, t));
    o(t, e);
    if (t.getDefaultProps) {
      t.defaultProps = t.getDefaultProps();
    }
    if (t.prototype.render) {
      undefined;
    } else {
      v(false);
    }
    for (var n in C) {
      t.prototype[n] ||= null;
    }
    return t;
  },
  injection: {
    injectMixin: function (e) {
      w.push(e);
    }
  }
};
module.exports = k;