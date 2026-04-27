var r = require("./35.js");
var o = require("./249.js");
var a = require("./3.js");
var i = require("./9.js");
var s = r.createClass({
  displayName: "ReactTransitionGroup",
  propTypes: {
    component: r.PropTypes.any,
    childFactory: r.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      component: "span",
      childFactory: i.thatReturnsArgument
    };
  },
  getInitialState: function () {
    return {
      children: o.getChildMapping(this.props.children)
    };
  },
  componentWillMount: function () {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  },
  componentDidMount: function () {
    var e = this.state.children;
    for (var t in e) {
      if (e[t]) {
        this.performAppear(t);
      }
    }
  },
  componentWillReceiveProps: function (e) {
    var t = o.getChildMapping(e.children);
    var n = this.state.children;
    this.setState({
      children: o.mergeChildMappings(n, t)
    });
    var r;
    for (r in t) {
      var a = n && n.hasOwnProperty(r);
      if (!!t[r] && !a && !this.currentlyTransitioningKeys[r]) {
        this.keysToEnter.push(r);
      }
    }
    for (r in n) {
      var i = t && t.hasOwnProperty(r);
      if (!!n[r] && !i && !this.currentlyTransitioningKeys[r]) {
        this.keysToLeave.push(r);
      }
    }
  },
  componentDidUpdate: function () {
    var e = this.keysToEnter;
    this.keysToEnter = [];
    e.forEach(this.performEnter);
    var t = this.keysToLeave;
    this.keysToLeave = [];
    t.forEach(this.performLeave);
  },
  performAppear: function (e) {
    this.currentlyTransitioningKeys[e] = true;
    var t = this.refs[e];
    if (t.componentWillAppear) {
      t.componentWillAppear(this._handleDoneAppearing.bind(this, e));
    } else {
      this._handleDoneAppearing(e);
    }
  },
  _handleDoneAppearing: function (e) {
    var t = this.refs[e];
    if (t.componentDidAppear) {
      t.componentDidAppear();
    }
    delete this.currentlyTransitioningKeys[e];
    var n = o.getChildMapping(this.props.children);
    if (!n || !n.hasOwnProperty(e)) {
      this.performLeave(e);
    }
  },
  performEnter: function (e) {
    this.currentlyTransitioningKeys[e] = true;
    var t = this.refs[e];
    if (t.componentWillEnter) {
      t.componentWillEnter(this._handleDoneEntering.bind(this, e));
    } else {
      this._handleDoneEntering(e);
    }
  },
  _handleDoneEntering: function (e) {
    var t = this.refs[e];
    if (t.componentDidEnter) {
      t.componentDidEnter();
    }
    delete this.currentlyTransitioningKeys[e];
    var n = o.getChildMapping(this.props.children);
    if (!n || !n.hasOwnProperty(e)) {
      this.performLeave(e);
    }
  },
  performLeave: function (e) {
    this.currentlyTransitioningKeys[e] = true;
    var t = this.refs[e];
    if (t.componentWillLeave) {
      t.componentWillLeave(this._handleDoneLeaving.bind(this, e));
    } else {
      this._handleDoneLeaving(e);
    }
  },
  _handleDoneLeaving: function (e) {
    var t = this.refs[e];
    if (t.componentDidLeave) {
      t.componentDidLeave();
    }
    delete this.currentlyTransitioningKeys[e];
    var n = o.getChildMapping(this.props.children);
    if (n && n.hasOwnProperty(e)) {
      this.performEnter(e);
    } else {
      this.setState(function (t) {
        var n = a({}, t.children);
        delete n[e];
        return {
          children: n
        };
      });
    }
  },
  render: function () {
    var e = [];
    for (var t in this.state.children) {
      var n = this.state.children[t];
      if (n) {
        e.push(r.cloneElement(this.props.childFactory(n), {
          ref: t,
          key: t
        }));
      }
    }
    return r.createElement(this.props.component, this.props, e);
  }
});
module.exports = s;