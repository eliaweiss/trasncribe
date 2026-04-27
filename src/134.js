function r(e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (e != null) {
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        t[n] = e[n];
      }
    }
  }
  t.default = e;
  return t;
}
function o(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function a(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
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
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, r.key, r);
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n);
    }
    if (r) {
      e(t, r);
    }
    return t;
  };
}();
function u(e, t, n) {
  for (var r = true; r;) {
    var o = e;
    var a = t;
    var i = n;
    r = false;
    if (o === null) {
      o = Function.prototype;
    }
    var s = Object.getOwnPropertyDescriptor(o, a);
    if (s !== undefined) {
      if ("value" in s) {
        return s.value;
      }
      var u = s.get;
      if (u === undefined) {
        return;
      }
      return u.call(i);
    }
    var l = Object.getPrototypeOf(o);
    if (l === null) {
      return;
    }
    e = l;
    t = a;
    n = i;
    r = true;
    s = l = undefined;
  }
}
var l = require("./2.js");
var c = o(l);
var p = require("./33.js");
o(p);
var d = require("./34.js");
var f = require("./31.js");
var h = o(f);
var m = require("./22.js");
var v = r(m);
var y = require("./30.js");
var g = o(y);
var b = require("./18.js");
var E = function (e) {
  function t(e) {
    a(this, t);
    u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.state = {
      regsitered: false,
      paymentType: "paypal"
    };
  }
  i(t, e);
  s(t, [{
    key: "registerWithCreditCard",
    value: function (e) {
      var t = this;
      e.preventDefault();
      function n(e) {
        return t.refs[e].value;
      }
      this.props.dispatch(v.register({
        email: n("email"),
        password: n("password"),
        creditCard: n("creditCard"),
        expires: n("expires"),
        cvc: n("cvc"),
        p: n("p"),
        h: n("h")
      }));
    }
  }, {
    key: "registerWithPaypal",
    value: function (e) {
      return this.props.dispatch(v.registerPaypal(e));
    }
  }, {
    key: "finishRegisterWithPaypal",
    value: function (e) {
      var t = this;
      return this.props.dispatch(v.finishRegisterPaypal(e)).then(function () {
        return t.setState({
          registered: true
        });
      });
    }
  }, {
    key: "close",
    value: function () {
      this.props.dispatch(v.completeRegistration());
    }
  }, {
    key: "renderPaypalButton",
    value: function () {
      var e = this;
      if (!this.refs.paypalButton || !this.refs.paypalButton.firstChild) {
        function t(t) {
          return e.refs[t].value;
        }
        this.props.dispatch;
        var n = this.registerWithPaypal.bind(this);
        var r = this.finishRegisterWithPaypal.bind(this);
        (0, b.loadPaypal)().then(function () {
          paypal.Button.render({
            env: b.paypalEnvironment,
            client: {
              sandbox: "Abj1sspXb1ZfeNKTjVqPOfus4HwFm0_09-jWinQ_CEpp8DZ1mGerjl0OrIAyQtWyZPB_nQ294oEPVLSG",
              production: "AWOBR9pZZ550TAA4kSckynTvDwgAgiHqj4MgLN0OORWWe92oqk3sRbsa6H2fig2N0VBuB8CMoew_CAj0"
            },
            payment: function (e, r) {
              var o = this.props.env;
              var a = this.props.client;
              var i = t("p");
              var s = t("email");
              var u = t("password");
              return n({
                email: s,
                password: u,
                env: o,
                client: a,
                p: i
              });
            },
            commit: true,
            onAuthorize: function (e, n) {
              r({
                actions: n,
                email: t("email"),
                password: t("password")
              });
            }
          }, e.refs.paypalButton);
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      this.renderPaypalButton();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props.isRegistering ? "Upgrading..." : "Upgrade";
      var n = this.props.registrationErrors.map(function (e) {
        return c.default.createElement("li", {
          className: "text-danger",
          key: e
        }, e);
      });
      var r = this.state.regsitered;
      var o = c.default.createElement("h1", {
        style: {
          textAlign: "center",
          fontFamily: "Bangers"
        }
      }, r ? "Welcome!" : this.props.message);
      var a = c.default.createElement("div", null, c.default.createElement("button", {
        type: "button",
        className: "btn btn-default",
        onClick: function () {
          return e.close();
        },
        style: {
          display: this.props.isRegistering ? "none" : "inline"
        }
      }, "Close"));
      return c.default.createElement(h.default, {
        isOpen: this.props.isGatheringRegistration,
        onClose: function () {
          return e.close();
        },
        onSubmit: function (t) {
          return e.registerWithCreditCard(t);
        },
        focusElement: function () {
          return e.refs.email;
        },
        style: {
          content: {
            width: 800,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        },
        header: o,
        footer: r ? null : a
      }, r && c.default.createElement("div", null, c.default.createElement("h2", null, "You now have access to all features."), c.default.createElement("button", {
        type: "button",
        onClick: function () {
          return (0, g.default)().login();
        },
        className: "btn btn-primary"
      }, "Log in")), !r && c.default.createElement("div", {
        className: "row upgrade-container"
      }, c.default.createElement("div", {
        className: "col-md-6"
      }, c.default.createElement("div", {
        ref: "stripeContainer"
      }), c.default.createElement("h2", null, "Upgrade to Pro"), c.default.createElement("ul", null, c.default.createElement("li", null, "Save your marks, loops, and other data."), c.default.createElement("li", null, "Slow down songs to 25% tempo."), c.default.createElement("li", null, "No ads."), c.default.createElement("li", null, "Change pitch without changing tempo."), c.default.createElement("li", null, "Save MP3s with pitch and tempo changed."), c.default.createElement("li", null, "Download and play selected loops as MP3s."), c.default.createElement("li", null, "Data saves automatically to our servers.")), c.default.createElement("small", {
        style: {
          color: "#5869FC",
          fontFamily: "Bangers",
          fontSize: "25px"
        }
      }, "Only $", c.default.createElement("span", null, b.price.cents / 100))), c.default.createElement("div", {
        className: "col-md-6"
      }, c.default.createElement("ul", {
        className: "list-unstyled"
      }, n), c.default.createElement("input", {
        ref: "p",
        type: "hidden",
        value: b.price.cents
      }), c.default.createElement("input", {
        ref: "h",
        type: "hidden",
        value: b.price.hash
      }), c.default.createElement("p", null, c.default.createElement("strong", null, "1. Create a username and password")), c.default.createElement("div", {
        className: "form-group"
      }, c.default.createElement("div", {
        className: "row"
      }, c.default.createElement("div", {
        className: "col-md-6"
      }, c.default.createElement("input", {
        ref: "email",
        type: "text",
        className: "form-control",
        placeholder: "Email"
      })), c.default.createElement("div", {
        className: "col-md-6"
      }, c.default.createElement("input", {
        ref: "password",
        type: "password",
        className: "form-control",
        placeholder: "Password"
      })))), c.default.createElement("p", null, c.default.createElement("strong", null, "2. Choose your payment method")), c.default.createElement("div", {
        className: "radio"
      }, c.default.createElement("label", null, c.default.createElement("input", {
        onChange: function (t) {
          return e.setState({
            paymentType: t.target.checked ? "paypal" : "creditcard"
          });
        },
        type: "radio",
        name: "optionsRadios",
        id: "optionsRadios1",
        checked: this.state.paymentType === "paypal"
      }), "Pay with PayPal")), c.default.createElement("div", {
        className: "radio"
      }, c.default.createElement("label", null, c.default.createElement("input", {
        onChange: function (t) {
          return e.setState({
            paymentType: t.target.checked ? "creditcard" : "paypal"
          });
        },
        type: "radio",
        name: "optionsRadios",
        id: "optionsRadios2",
        checked: this.state.paymentType === "creditcard"
      }), "Secure payment with credit or debit card")), c.default.createElement("hr", {
        style: {
          marginTop: "1em"
        }
      }), c.default.createElement("div", {
        ref: "paypalButton",
        style: {
          display: this.state.paymentType === "paypal" ? "block" : "none"
        }
      }), c.default.createElement("div", {
        style: {
          display: this.state.paymentType === "creditcard" ? "block" : "none"
        }
      }, c.default.createElement("div", {
        className: "form-group"
      }, c.default.createElement("input", {
        ref: "creditCard",
        type: "text",
        className: "form-control",
        placeholder: "Credit Card #"
      })), c.default.createElement("div", {
        className: "form-group"
      }, c.default.createElement("div", {
        className: "row"
      }, c.default.createElement("div", {
        className: "col-md-9"
      }, c.default.createElement("input", {
        ref: "expires",
        type: "text",
        className: "form-control",
        placeholder: "MM / YY"
      })), c.default.createElement("div", {
        className: "col-md-3"
      }, c.default.createElement("input", {
        ref: "cvc",
        type: "text",
        className: "form-control",
        placeholder: "CVC"
      })))), c.default.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        disabled: this.props.isRegistering
      }, t)))));
    }
  }]);
  return t;
}(c.default.Component);
exports.default = (0, d.connect)(function (e) {
  return e.auth;
})(E);
module.exports = exports.default;