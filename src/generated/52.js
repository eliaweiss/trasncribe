function r(e) {
  s.enqueueUpdate(e);
}
function o(e, t) {
  var n = i.get(e);
  if (n) {
    return n;
  } else {
    return null;
  }
}
require("./13.js");
var a = require("./8.js");
var i = require("./27.js");
var s = require("./11.js");
var u = require("./3.js");
var l = require("./1.js");
require("./4.js");
var c = {
  isMounted: function (e) {
    var t = i.get(e);
    return !!t && !!t._renderedComponent;
  },
  enqueueCallback: function (e, t) {
    if (typeof t != "function") {
      l(false);
    } else {
      undefined;
    }
    var n = o(e);
    if (n) {
      if (n._pendingCallbacks) {
        n._pendingCallbacks.push(t);
      } else {
        n._pendingCallbacks = [t];
      }
      r(n);
      return;
    } else {
      return null;
    }
  },
  enqueueCallbackInternal: function (e, t) {
    if (typeof t != "function") {
      l(false);
    } else {
      undefined;
    }
    if (e._pendingCallbacks) {
      e._pendingCallbacks.push(t);
    } else {
      e._pendingCallbacks = [t];
    }
    r(e);
  },
  enqueueForceUpdate: function (e) {
    var t = o(e, "forceUpdate");
    if (t) {
      t._pendingForceUpdate = true;
      r(t);
    }
  },
  enqueueReplaceState: function (e, t) {
    var n = o(e, "replaceState");
    if (n) {
      n._pendingStateQueue = [t];
      n._pendingReplaceState = true;
      r(n);
    }
  },
  enqueueSetState: function (e, t) {
    var n = o(e, "setState");
    if (n) {
      var a = n._pendingStateQueue ||= [];
      a.push(t);
      r(n);
    }
  },
  enqueueSetProps: function (e, t) {
    var n = o(e, "setProps");
    if (n) {
      c.enqueueSetPropsInternal(n, t);
    }
  },
  enqueueSetPropsInternal: function (e, t) {
    var n = e._topLevelWrapper;
    if (n) {
      undefined;
    } else {
      l(false);
    }
    var o = n._pendingElement || n._currentElement;
    var i = o.props;
    var s = u({}, i.props, t);
    n._pendingElement = a.cloneAndReplaceProps(o, a.cloneAndReplaceProps(i, s));
    r(n);
  },
  enqueueReplaceProps: function (e, t) {
    var n = o(e, "replaceProps");
    if (n) {
      c.enqueueReplacePropsInternal(n, t);
    }
  },
  enqueueReplacePropsInternal: function (e, t) {
    var n = e._topLevelWrapper;
    if (n) {
      undefined;
    } else {
      l(false);
    }
    var o = n._pendingElement || n._currentElement;
    var i = o.props;
    n._pendingElement = a.cloneAndReplaceProps(o, a.cloneAndReplaceProps(i, t));
    r(n);
  },
  enqueueElementInternal: function (e, t) {
    e._pendingElement = t;
    r(e);
  }
};
module.exports = c;