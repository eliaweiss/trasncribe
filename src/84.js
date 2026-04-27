function r() {
  if (s) {
    for (var e in u) {
      var t = u[e];
      var n = s.indexOf(e);
      if (n > -1) {
        undefined;
      } else {
        i(false);
      }
      if (!l.plugins[n]) {
        if (t.extractEvents) {
          undefined;
        } else {
          i(false);
        }
        l.plugins[n] = t;
        var r = t.eventTypes;
        for (var a in r) {
          if (o(r[a], t, a)) {
            undefined;
          } else {
            i(false);
          }
        }
      }
    }
  }
}
function o(e, t, n) {
  if (l.eventNameDispatchConfigs.hasOwnProperty(n)) {
    i(false);
  } else {
    undefined;
  }
  l.eventNameDispatchConfigs[n] = e;
  var r = e.phasedRegistrationNames;
  if (r) {
    for (var o in r) {
      if (r.hasOwnProperty(o)) {
        var s = r[o];
        a(s, t, n);
      }
    }
    return true;
  }
  return !!e.registrationName && (a(e.registrationName, t, n), true);
}
function a(e, t, n) {
  if (l.registrationNameModules[e]) {
    i(false);
  } else {
    undefined;
  }
  l.registrationNameModules[e] = t;
  l.registrationNameDependencies[e] = t.eventTypes[n].dependencies;
}
var i = require("./1.js");
var s = null;
var u = {};
var l = {
  plugins: [],
  eventNameDispatchConfigs: {},
  registrationNameModules: {},
  registrationNameDependencies: {},
  injectEventPluginOrder: function (e) {
    if (s) {
      i(false);
    } else {
      undefined;
    }
    s = Array.prototype.slice.call(e);
    r();
  },
  injectEventPluginsByName: function (e) {
    var t = false;
    for (var n in e) {
      if (e.hasOwnProperty(n)) {
        var o = e[n];
        if (!u.hasOwnProperty(n) || u[n] !== o) {
          if (u[n]) {
            i(false);
          } else {
            undefined;
          }
          u[n] = o;
          t = true;
        }
      }
    }
    if (t) {
      r();
    }
  },
  getPluginModuleForEvent: function (e) {
    var t = e.dispatchConfig;
    if (t.registrationName) {
      return l.registrationNameModules[t.registrationName] || null;
    }
    for (var n in t.phasedRegistrationNames) {
      if (t.phasedRegistrationNames.hasOwnProperty(n)) {
        var r = l.registrationNameModules[t.phasedRegistrationNames[n]];
        if (r) {
          return r;
        }
      }
    }
    return null;
  },
  _resetEventPlugins: function () {
    s = null;
    for (var e in u) {
      if (u.hasOwnProperty(e)) {
        delete u[e];
      }
    }
    l.plugins.length = 0;
    var t = l.eventNameDispatchConfigs;
    for (var n in t) {
      if (t.hasOwnProperty(n)) {
        delete t[n];
      }
    }
    var r = l.registrationNameModules;
    for (var o in r) {
      if (r.hasOwnProperty(o)) {
        delete r[o];
      }
    }
  }
};
module.exports = l;