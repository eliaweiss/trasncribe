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
var o = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) {
      if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
  }
  return e;
};
var a = require("./2.js");
var i = r(a);
var s = i.default.createClass({
  displayName: "BlurInput",
  propTypes: {
    onChange: i.default.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      value: this.props.value
    };
  },
  render: function () {
    return i.default.createElement("input", o({}, this.props, {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange,
      onBlur: this.handleBlur
    }));
  },
  componentWillReceiveProps: function (e) {
    this.setState({
      value: e.value
    });
  },
  handleChange: function (e) {
    this.setState({
      value: e.target.value
    });
  },
  handleBlur: function (e) {
    this.props.onChange(e.target.value);
  }
});
exports.default = s;
module.exports = exports.default;