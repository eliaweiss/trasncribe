function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o(e) {
  if (!e || !e.ok) {
    return "Invalid username or password";
  }
}
function a(e, t, n) {
  n = n || (t ? "gold" : null);
  localStorage.setItem("token", t);
  localStorage.setItem("plan", n || "");
  return {
    type: "completeLogin",
    error: e,
    plan: n
  };
}
function i(e, t) {
  return function (n) {
    if (e && t) {
      n(O());
      return b.default.fetch("/login", {
        body: {
          username: e,
          password: t
        }
      }).then(function (e) {
        return n(a(o(e)));
      }).catch(function (e) {
        return n(a(o(e)));
      });
    } else {
      return n(a("Enter a username and password"));
    }
  };
}
function s() {
  return function (e) {
    return (0, _.default)().logout().then(function () {
      return e(P());
    });
  };
}
function u() {
  return {
    type: "gatherCredentials"
  };
}
function l() {
  return {
    type: "stopGatheringCredentials"
  };
}
function c(e) {
  return {
    type: "gatherRegistration",
    message: e
  };
}
function p() {
  return {
    type: "beginRegistration"
  };
}
function d() {
  var e = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var t = e.errors;
  if (typeof window != "undefined") {
    (0, _.default)().login(true);
  }
  return {
    type: "completeRegistration",
    errors: t
  };
}
function f(e) {
  var t = e.creditCard;
  var n = e.expires;
  var r = e.cvc;
  return new Promise(function (e, o) {
    Stripe.card.createToken({
      number: t,
      cvc: r,
      exp_month: n.split("/")[0],
      exp_year: n.split("/")[1]
    }, function (t, n) {
      if (n.error) {
        o(n.error.message);
      } else {
        e(n.id);
      }
    });
  });
}
function h(e) {
  return function (t) {
    var n = y(Object.assign({
      paypal: true
    }, e));
    if (n.length) {
      return t(d({
        errors: n
      }));
    } else {
      t(p());
      return paypal.rest.payment.create(e.env, e.client, {
        transactions: [{
          amount: {
            total: e.p / 100 + ".00",
            currency: "USD"
          }
        }]
      });
    }
  };
}
function m(e) {
  return function (t) {
    return e.actions.payment.execute().then(function () {
      return b.default.fetch("/paypal/register", {
        body: {
          email: e.email,
          password: e.password
        }
      }).then(function (e) {
        if (e.ok) {
          t(d());
          t(a());
          return;
        } else {
          return e.text().then(function (e) {
            return t(d({
              errors: [e]
            }));
          });
        }
      }).catch(function (e) {
        t(d({
          errors: ["An error occurred signing up"]
        }));
      });
    });
  };
}
function v(e) {
  return function (t) {
    var n = y(e);
    if (n.length) {
      return t(d({
        errors: n
      }));
    } else {
      t(p());
      (0, w.loadStripe)().then(function () {
        return f(e);
      }).then(function (n) {
        b.default.fetch("/register", {
          body: {
            email: e.email,
            password: e.password,
            p: e.p,
            h: e.h,
            token: n
          }
        }).then(function (e) {
          if (e.ok) {
            return e.json().then(function (e) {
              var n = e.token;
              t(d());
              t(a(null, n));
            });
          } else {
            return e.text().then(function (e) {
              return t(d({
                errors: [e]
              }));
            });
          }
        }).catch(function (e) {
          t(d({
            errors: ["An error occurred signing up"]
          }));
        });
      }).catch(function (e) {
        t(d({
          errors: [e]
        }));
      });
      return;
    }
  };
}
function y(e) {
  var t = e.email;
  var n = e.password;
  var r = e.creditCard;
  var o = e.expires;
  var a = e.cvc;
  var i = e.paypal;
  var s = [];
  var u = s.push.bind(s);
  if (!t || t.indexOf("@") < 0) {
    u("Enter your email");
  }
  if (!n || n.length < 8) {
    u("Enter a password of at least 8 characters");
  }
  if (!i) {
    if (!r || !r.length) {
      u("Enter a credit card number");
    }
    if (!o) {
      u("Enter the expiration date");
    }
    if (o && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(o)) {
      u("Expiration date should be in the format of MM/YY");
    }
    if (!a) {
      u("Enter the security code");
    }
  }
  return s;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completeLogin = a;
exports.login = i;
exports.logout = s;
exports.gatherCredentials = u;
exports.stopGatheringCredentials = l;
exports.gatherRegistration = c;
exports.beginRegistration = p;
exports.completeRegistration = d;
exports.registerPaypal = h;
exports.finishRegisterPaypal = m;
exports.register = v;
var g = require("./157.js");
var b = r(g);
var E = require("./6.js");
var w = require("./18.js");
var C = require("./30.js");
var _ = r(C);
var O = (0, E.makeAction)("beginLogin");
exports.beginLogin = O;
var P = (0, E.makeAction)("completeLogout");
exports.completeLogout = P;