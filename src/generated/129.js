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
  return i.default.createElement("nav", {
    className: "navbar navbar-default",
    role: "navigation"
  }, i.default.createElement("div", {
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
  }, "Help")))));
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = o;
var a = require("./2.js");
var i = r(a);
module.exports = exports.default;