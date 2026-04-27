function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("./23.js");
var a = r(o);
var i = {
  isLoggedIn: false,
  isLoggingIn: false,
  isGatheringCredentials: false,
  loginErrors: [],
  isGatheringRegistration: false,
  isRegistering: false,
  registrationErrors: []
};
exports.default = (0, a.default)(i, {
  gatherCredentials: function (e, t) {
    return (0, o.copyState)(e, {
      isGatheringCredentials: true,
      loginErrors: []
    });
  },
  stopGatheringCredentials: function (e, t) {
    return (0, o.copyState)(e, {
      isGatheringCredentials: false,
      loginErrors: []
    });
  },
  beginLogin: function (e, t) {
    return (0, o.copyState)(e, {
      isLoggingIn: true,
      loginErrors: []
    });
  },
  completeLogin: function (e, t) {
    var n = t.error ? [t.error] : [];
    var r = !n.length;
    return (0, o.copyState)(e, {
      isLoggedIn: r,
      isLoggingIn: false,
      isGatheringCredentials: !r,
      justRegistered: true,
      loginErrors: n,
      plan: t.plan
    });
  },
  completeLogout: function (e) {
    return (0, o.copyState)(e, {
      isLoggedIn: false,
      plan: null
    });
  },
  gatherRegistration: function (e, t) {
    return (0, o.copyState)(e, {
      isGatheringRegistration: true,
      gatherRegistrationMessage: t.message,
      registrationErrors: []
    });
  },
  beginRegistration: function (e, t) {
    return (0, o.copyState)(e, {
      isRegistering: true,
      registrationErrors: []
    });
  },
  completeRegistration: function (e, t) {
    var n = t.errors || [];
    var r = false;
    return (0, o.copyState)(e, {
      isGatheringRegistration: n.length > 0,
      isRegistering: false,
      isLoggedIn: r,
      registrationErrors: n
    });
  }
});
module.exports = exports.default;