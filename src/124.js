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
var u = require("./2.js");
var l = r(u);
var c = require("./31.js");
var p = r(c);
var d = require("./6.js");
var f = function (e) {
  function t() {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
  }
  a(t, e);
  i(t, [{
    key: "save",
    value: function () {
      this.props.onSave({
        label: this.refs.label.value
      });
    }
  }, {
    key: "removeMark",
    value: function () {
      this.props.onRemoveMark(this.props.mark.id);
      this.props.onCancel();
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props.mark.type === "beat";
      var n = l.default.createElement("h4", {
        className: "modal-title",
        id: "myModalLabel"
      }, "Edit ", this.props.mark.type);
      var r = l.default.createElement("div", null, l.default.createElement("button", {
        type: "button",
        className: "btn btn-default",
        onClick: function () {
          return e.removeMark();
        },
        "data-dismiss": "modal",
        "data-bind": "click:deleteMark"
      }, "Delete ", this.props.mark.type), l.default.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Save changes"));
      return l.default.createElement(p.default, {
        isOpen: this.props.isOpen,
        onClose: function () {
          return e.props.onCancel();
        },
        onSubmit: function () {
          return e.save();
        },
        header: n,
        footer: r,
        focusElement: function () {
          return e.refs.label;
        }
      }, l.default.createElement("div", {
        className: "form-group",
        style: {
          display: (0, d.display)(!t)
        }
      }, l.default.createElement("label", null, "Label"), l.default.createElement("input", {
        ref: "label",
        type: "text",
        className: "form-control",
        defaultValue: this.props.mark.label
      })));
    }
  }]);
  return t;
}(l.default.Component);
exports.default = f;
module.exports = exports.default;