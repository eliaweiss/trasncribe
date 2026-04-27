var r = require("./35.js");
var o = require("./50.js");
var a = require("./164.js");
var i = require("./250.js");
var s = require("./111.js");
var u = 17;
var l = r.createClass({
  displayName: "ReactCSSTransitionGroupChild",
  propTypes: {
    name: r.PropTypes.oneOfType([r.PropTypes.string, r.PropTypes.shape({
      enter: r.PropTypes.string,
      leave: r.PropTypes.string,
      active: r.PropTypes.string
    }), r.PropTypes.shape({
      enter: r.PropTypes.string,
      enterActive: r.PropTypes.string,
      leave: r.PropTypes.string,
      leaveActive: r.PropTypes.string,
      appear: r.PropTypes.string,
      appearActive: r.PropTypes.string
    })]).isRequired,
    appear: r.PropTypes.bool,
    enter: r.PropTypes.bool,
    leave: r.PropTypes.bool,
    appearTimeout: r.PropTypes.number,
    enterTimeout: r.PropTypes.number,
    leaveTimeout: r.PropTypes.number
  },
  transition: function (e, t, n) {
    var r = o.findDOMNode(this);
    if (!r) {
      if (t) {
        t();
      }
      return;
    }
    var s = this.props.name[e] || this.props.name + "-" + e;
    var u = this.props.name[e + "Active"] || s + "-active";
    var l = null;
    function c(e) {
      if (!e || e.target === r) {
        clearTimeout(l);
        a.removeClass(r, s);
        a.removeClass(r, u);
        i.removeEndEventListener(r, c);
        if (t) {
          t();
        }
      }
    }
    a.addClass(r, s);
    this.queueClass(u);
    if (n) {
      l = setTimeout(c, n);
      this.transitionTimeouts.push(l);
    } else {
      i.addEndEventListener(r, c);
    }
  },
  queueClass: function (e) {
    this.classNameQueue.push(e);
    this.timeout ||= setTimeout(this.flushClassNameQueue, u);
  },
  flushClassNameQueue: function () {
    if (this.isMounted()) {
      this.classNameQueue.forEach(a.addClass.bind(a, o.findDOMNode(this)));
    }
    this.classNameQueue.length = 0;
    this.timeout = null;
  },
  componentWillMount: function () {
    this.classNameQueue = [];
    this.transitionTimeouts = [];
  },
  componentWillUnmount: function () {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (e) {
      clearTimeout(e);
    });
  },
  componentWillAppear: function (e) {
    if (this.props.appear) {
      this.transition("appear", e, this.props.appearTimeout);
    } else {
      e();
    }
  },
  componentWillEnter: function (e) {
    if (this.props.enter) {
      this.transition("enter", e, this.props.enterTimeout);
    } else {
      e();
    }
  },
  componentWillLeave: function (e) {
    if (this.props.leave) {
      this.transition("leave", e, this.props.leaveTimeout);
    } else {
      e();
    }
  },
  render: function () {
    return s(this.props.children);
  }
});
module.exports = l;