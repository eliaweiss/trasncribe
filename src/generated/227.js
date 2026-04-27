function r(e) {
  var t = "transition" + e + "Timeout";
  var n = "transition" + e;
  return function (e) {
    if (e[n]) {
      if (e[t] == null) {
        return new Error(t + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
      }
      if (typeof e[t] != "number") {
        return new Error(t + " must be a number (in milliseconds)");
      }
    }
  };
}
var o = require("./35.js");
var a = require("./3.js");
var i = require("./251.js");
var s = require("./228.js");
var u = o.createClass({
  displayName: "ReactCSSTransitionGroup",
  propTypes: {
    transitionName: s.propTypes.name,
    transitionAppear: o.PropTypes.bool,
    transitionEnter: o.PropTypes.bool,
    transitionLeave: o.PropTypes.bool,
    transitionAppearTimeout: r("Appear"),
    transitionEnterTimeout: r("Enter"),
    transitionLeaveTimeout: r("Leave")
  },
  getDefaultProps: function () {
    return {
      transitionAppear: false,
      transitionEnter: true,
      transitionLeave: true
    };
  },
  _wrapChild: function (e) {
    return o.createElement(s, {
      name: this.props.transitionName,
      appear: this.props.transitionAppear,
      enter: this.props.transitionEnter,
      leave: this.props.transitionLeave,
      appearTimeout: this.props.transitionAppearTimeout,
      enterTimeout: this.props.transitionEnterTimeout,
      leaveTimeout: this.props.transitionLeaveTimeout
    }, e);
  },
  render: function () {
    return o.createElement(i, a({}, this.props, {
      childFactory: this._wrapChild
    }));
  }
});
module.exports = u;