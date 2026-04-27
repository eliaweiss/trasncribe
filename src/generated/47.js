function r(e) {
  if (e.checkedLink != null && e.valueLink != null) {
    l(false);
  } else {
    undefined;
  }
}
function o(e) {
  r(e);
  if (e.value != null || e.onChange != null) {
    l(false);
  } else {
    undefined;
  }
}
function a(e) {
  r(e);
  if (e.checked != null || e.onChange != null) {
    l(false);
  } else {
    undefined;
  }
}
function i(e) {
  if (e) {
    var t = e.getName();
    if (t) {
      return " Check the render method of `" + t + "`.";
    }
  }
  return "";
}
var s = require("./103.js");
var u = require("./38.js");
var l = require("./1.js");
require("./4.js");
var c = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
var p = {
  value: function (e, t, n) {
    if (!e[t] || c[e.type] || e.onChange || e.readOnly || e.disabled) {
      return null;
    } else {
      return new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
    }
  },
  checked: function (e, t, n) {
    if (!e[t] || e.onChange || e.readOnly || e.disabled) {
      return null;
    } else {
      return new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
  },
  onChange: s.func
};
var d = {};
var f = {
  checkPropTypes: function (e, t, n) {
    for (var r in p) {
      if (p.hasOwnProperty(r)) {
        var o = p[r](t, r, e, u.prop, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
      }
      if (o instanceof Error && !(o.message in d)) {
        d[o.message] = true;
        i(n);
      }
    }
  },
  getValue: function (e) {
    if (e.valueLink) {
      o(e);
      return e.valueLink.value;
    } else {
      return e.value;
    }
  },
  getChecked: function (e) {
    if (e.checkedLink) {
      a(e);
      return e.checkedLink.value;
    } else {
      return e.checked;
    }
  },
  executeOnChange: function (e, t) {
    if (e.valueLink) {
      o(e);
      return e.valueLink.requestChange(t.target.value);
    } else if (e.checkedLink) {
      a(e);
      return e.checkedLink.requestChange(t.target.checked);
    } else if (e.onChange) {
      return e.onChange.call(undefined, t);
    } else {
      return undefined;
    }
  }
};
module.exports = f;