var r = require("./84.js");
var o = require("./223.js");
var a = require("./97.js");
var i = require("./106.js");
var s = require("./108.js");
var u = require("./1.js");
require("./4.js");
var l = {};
var c = null;
function p(e, t) {
  if (e) {
    o.executeDispatchesInOrder(e, t);
    if (!e.isPersistent()) {
      e.constructor.release(e);
    }
  }
}
function d(e) {
  return p(e, true);
}
function f(e) {
  return p(e, false);
}
var h = null;
var m = {
  injection: {
    injectMount: o.injection.injectMount,
    injectInstanceHandle: function (e) {
      h = e;
    },
    getInstanceHandle: function () {
      return h;
    },
    injectEventPluginOrder: r.injectEventPluginOrder,
    injectEventPluginsByName: r.injectEventPluginsByName
  },
  eventNameDispatchConfigs: r.eventNameDispatchConfigs,
  registrationNameModules: r.registrationNameModules,
  putListener: function (e, t, n) {
    if (typeof n != "function") {
      u(false);
    } else {
      undefined;
    }
    var o = l[t] ||= {};
    o[e] = n;
    var a = r.registrationNameModules[t];
    if (a && a.didPutListener) {
      a.didPutListener(e, t, n);
    }
  },
  getListener: function (e, t) {
    var n = l[t];
    return n && n[e];
  },
  deleteListener: function (e, t) {
    var n = r.registrationNameModules[t];
    if (n && n.willDeleteListener) {
      n.willDeleteListener(e, t);
    }
    var o = l[t];
    if (o) {
      delete o[e];
    }
  },
  deleteAllListeners: function (e) {
    for (var t in l) {
      if (l[t][e]) {
        var n = r.registrationNameModules[t];
        if (n && n.willDeleteListener) {
          n.willDeleteListener(e, t);
        }
        delete l[t][e];
      }
    }
  },
  extractEvents: function (e, t, n, o, a) {
    var s;
    for (var u = r.plugins, l = 0; l < u.length; l++) {
      var c = u[l];
      if (c) {
        var p = c.extractEvents(e, t, n, o, a);
        if (p) {
          s = i(s, p);
        }
      }
    }
    return s;
  },
  enqueueEvents: function (e) {
    if (e) {
      c = i(c, e);
    }
  },
  processEventQueue: function (e) {
    var t = c;
    c = null;
    if (e) {
      s(t, d);
    } else {
      s(t, f);
    }
    if (c) {
      u(false);
    } else {
      undefined;
    }
    a.rethrowCaughtError();
  },
  __purge: function () {
    l = {};
  },
  __getListenerBank: function () {
    return l;
  }
};
module.exports = m;