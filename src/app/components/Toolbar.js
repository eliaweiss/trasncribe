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
var i = function () {
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
function s(e, t, n) {
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
var u = require("../../generated/2.js");
var l = r(u);
var c = function (e) {
  function t() {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
  }
  a(t, e);
  i(t, [{
    key: "setDelay",
    value: function (e, t) {
      this.props.onSetDelay(t);
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = null;
      if (this.props.showSaveNotification) {
        t = l.default.createElement("div", {
          className: "btn-group pull-left",
          style: {
            marginTop: ".5em",
            marginLeft: ".5em"
          }
        }, l.default.createElement("button", {
          onClick: this.props.onShowSaveNotification,
          className: "btn btn-default",
          title: "Save your work"
        }, "Save your work"));
      }
      return l.default.createElement("div", null, l.default.createElement("div", {
        className: "btn-group pull-left",
        style: {
          marginTop: ".5em"
        }
      }, l.default.createElement("button", {
        onClick: this.props.onPlay,
        className: "btn btn-default",
        title: "Hotkey: space"
      }, "Play"), l.default.createElement("button", {
        onClick: this.props.onPause,
        className: "btn btn-default",
        title: "Hotkey: p"
      }, "Pause"), l.default.createElement("div", {
        className: "btn-group"
      }, l.default.createElement("button", {
        type: "button",
        className: "btn btn-default dropdown-toggle",
        "data-toggle": "dropdown"
      }, "Settings"), l.default.createElement("ul", {
        className: "dropdown-menu multi-level",
        role: "menu"
      }, l.default.createElement("li", null, l.default.createElement("a", {
        href: "#",
        className: "",
        onClick: function (t) {
          e.props.onAdjustModeChange("tempo");
          t.preventDefault();
        }
      }, "Adjust Tempo")), l.default.createElement("li", null, l.default.createElement("a", {
        href: "#",
        className: "youtube-hidden",
        onClick: function (t) {
          e.props.onAdjustModeChange("pitch");
          t.preventDefault();
        }
      }, "Adjust Pitch")), null, l.default.createElement("li", {
        className: "divider youtube-hidden"
      }), l.default.createElement("li", {
        className: "dropdown-submenu"
      }, l.default.createElement("a", {
        tabIndex: "-1",
        href: "#"
      }, "Start/Loop Delay"), l.default.createElement("ul", {
        className: "dropdown-menu",
        role: "menu"
      }, l.default.createElement("li", null, l.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          return e.setDelay(t, 0.5);
        }
      }, "½ Second")), l.default.createElement("li", null, l.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          return e.setDelay(t, 1);
        }
      }, "1 Second")), l.default.createElement("li", null, l.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          return e.setDelay(t, 2);
        }
      }, "2 Second")), l.default.createElement("li", null, l.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          return e.setDelay(t, 5);
        }
      }, "5 Second")), l.default.createElement("li", {
        className: "divider"
      }), l.default.createElement("li", null, l.default.createElement("a", {
        href: "#",
        onClick: function (t) {
          return e.setDelay(t, null);
        }
      }, "None"))))))), l.default.createElement("div", {
        className: "btn-group pull-left",
        style: {
          clear: "left",
          marginTop: ".25em"
        }
      }, l.default.createElement("button", {
        onClick: this.props.onJumpToStart,
        className: "btn btn-default btn-sm",
        title: "Jump to the start of the file"
      }, "File Start"), l.default.createElement("button", {
        onClick: this.props.onJumpToSelectionStart,
        className: "btn btn-default btn-sm",
        disabled: null == this.props.selectionEnd,
        title: "Jump to the start of the selected loop"
      }, "Selection Start"), l.default.createElement("button", {
        onClick: this.props.onJumpToSelectionEnd,
        className: "btn btn-default btn-sm",
        disabled: null == this.props.selectionEnd,
        title: "Jump to the end of the selected loop"
      }, "Selection End")), t);
    }
  }]);
  return t;
}(l.default.Component);
exports.default = c;
module.exports = exports.default;