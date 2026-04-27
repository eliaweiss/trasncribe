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
  var t = e.isLoggedIn ? i.default.createElement("a", {
    href: "#",
    onClick: function (t) {
      t.preventDefault();
      e.onLogout();
    }
  }, "Log out") : i.default.createElement("a", {
    href: "#",
    onClick: function (t) {
      t.preventDefault();
      e.onLogin();
    }
  }, "Log in");
  return i.default.createElement("nav", {
    className: "navbar navbar-default",
    role: "navigation"
  }, i.default.createElement("script", {
    src: "https://cdn.auth0.com/js/lock/11.0.1/lock.min.js"
  }), i.default.createElement("div", {
    className: "navbar-header"
  }, i.default.createElement("button", {
    type: "button",
    className: "navbar-toggle",
    "data-toggle": "collapse",
    "data-target": ".navbar-ex1-collapse"
  }, i.default.createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), i.default.createElement("span", null, "Menu")), i.default.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, i.default.createElement("img", {
    src: "logo-blueblock.png"
  }))), i.default.createElement("div", {
    className: "collapse navbar-collapse navbar-ex1-collapse"
  }, i.default.createElement("ul", {
    className: "nav navbar-nav navbar-right"
  }, i.default.createElement("li", {
    className: "visible-audio-loaded"
  }, i.default.createElement("input", {
    type: "file",
    className: "hidden",
    id: "files",
    name: "files",
    onChange: e.onFileSelect
  }), i.default.createElement("a", {
    href: "#",
    onClick: function (t) {
      t.preventDefault();
      e.onChooseAudio();
    }
  }, "Choose Audio")), i.default.createElement("li", null, i.default.createElement("a", {
    href: "#",
    onClick: function (t) {
      t.preventDefault();
      e.onHelp();
    }
  }, "Help")), i.default.createElement("li", null, t))));
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = o;
var a = require("./2.js");
var i = r(a);
module.exports = exports.default;