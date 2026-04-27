function r(e) {
  delete e.ref;
}
var o = require("./2.js");
var a = require("./33.js");
var i = require("./162.js");
var s = o.createFactory(require("./207.js"));
var u = require("./208.js");
var l = require("./161.js");
var c = require("./33.js").unstable_renderSubtreeIntoContainer;
var p = i.canUseDOM ? window.HTMLElement : {};
module.exports = o.createClass({
  displayName: "Modal",
  statics: {
    setAppElement: u.setElement,
    injectCSS: function () {}
  },
  propTypes: {
    isOpen: o.PropTypes.bool.isRequired,
    style: o.PropTypes.shape({
      content: o.PropTypes.object,
      overlay: o.PropTypes.object
    }),
    appElement: o.PropTypes.instanceOf(p),
    onRequestClose: o.PropTypes.func,
    closeTimeoutMS: o.PropTypes.number,
    ariaHideApp: o.PropTypes.bool
  },
  getDefaultProps: function () {
    return {
      isOpen: false,
      ariaHideApp: true,
      closeTimeoutMS: 0
    };
  },
  componentDidMount: function () {
    this.node = document.createElement("div");
    this.node.className = "ReactModalPortal";
    document.body.appendChild(this.node);
    this.renderPortal(this.props);
  },
  componentWillReceiveProps: function (e) {
    this.renderPortal(e);
  },
  componentWillUnmount: function () {
    a.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  },
  renderPortal: function (e) {
    if (e.isOpen) {
      l(document.body).add("ReactModal__Body--open");
    } else {
      l(document.body).remove("ReactModal__Body--open");
    }
    if (e.ariaHideApp) {
      u.toggle(e.isOpen, e.appElement);
    }
    r(e);
    this.portal = c(this, s(e), this.node);
  },
  render: function () {
    return o.DOM.noscript();
  }
});