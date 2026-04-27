function r(e) {
  e.stopPropagation();
}
var o = require("./2.js");
var a = o.DOM.div;
var i = require("./209.js");
var s = require("./210.js");
var u = require("./189.js");
var l = {
  overlay: {
    base: "ReactModal__Overlay",
    afterOpen: "ReactModal__Overlay--after-open",
    beforeClose: "ReactModal__Overlay--before-close"
  },
  content: {
    base: "ReactModal__Content",
    afterOpen: "ReactModal__Content--after-open",
    beforeClose: "ReactModal__Content--before-close"
  }
};
var c = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
module.exports = o.createClass({
  displayName: "ModalPortal",
  getDefaultProps: function () {
    return {
      style: {
        overlay: {},
        content: {}
      }
    };
  },
  getInitialState: function () {
    return {
      afterOpen: false,
      beforeClose: false
    };
  },
  componentDidMount: function () {
    if (this.props.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    }
  },
  componentWillUnmount: function () {
    clearTimeout(this.closeTimer);
  },
  componentWillReceiveProps: function (e) {
    if (!this.props.isOpen && e.isOpen) {
      this.setFocusAfterRender(true);
      this.open();
    } else if (this.props.isOpen && !e.isOpen) {
      this.close();
    }
  },
  componentDidUpdate: function () {
    if (this.focusAfterRender) {
      this.focusContent();
      this.setFocusAfterRender(false);
    }
  },
  setFocusAfterRender: function (e) {
    this.focusAfterRender = e;
  },
  open: function () {
    i.setupScopedFocus(this.node);
    i.markForFocusLater();
    this.setState({
      isOpen: true
    }, function () {
      this.setState({
        afterOpen: true
      });
    }.bind(this));
  },
  close: function () {
    if (this.ownerHandlesClose()) {
      if (this.props.closeTimeoutMS > 0) {
        this.closeWithTimeout();
      } else {
        this.closeWithoutTimeout();
      }
    }
  },
  focusContent: function () {
    this.refs.content.focus();
  },
  closeWithTimeout: function () {
    this.setState({
      beforeClose: true
    }, function () {
      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS);
    }.bind(this));
  },
  closeWithoutTimeout: function () {
    this.setState({
      afterOpen: false,
      beforeClose: false
    }, this.afterClose);
  },
  afterClose: function () {
    i.returnFocus();
    i.teardownScopedFocus();
  },
  handleKeyDown: function (e) {
    if (e.keyCode == 9) {
      s(this.refs.content, e);
    }
    if (e.keyCode == 27) {
      this.requestClose();
    }
  },
  handleOverlayClick: function () {
    if (this.ownerHandlesClose()) {
      this.requestClose();
    } else {
      this.focusContent();
    }
  },
  requestClose: function () {
    if (this.ownerHandlesClose()) {
      this.props.onRequestClose();
    }
  },
  ownerHandlesClose: function () {
    return this.props.onRequestClose;
  },
  shouldBeClosed: function () {
    return !this.props.isOpen && !this.state.beforeClose;
  },
  buildClassName: function (e, t) {
    var n = l[e].base;
    if (this.state.afterOpen) {
      n += " " + l[e].afterOpen;
    }
    if (this.state.beforeClose) {
      n += " " + l[e].beforeClose;
    }
    if (t) {
      return n + " " + t;
    } else {
      return n;
    }
  },
  render: function () {
    if (this.shouldBeClosed()) {
      return a();
    } else {
      return a({
        ref: "overlay",
        className: this.buildClassName("overlay", this.props.overlayClassName),
        style: u({}, c.overlay, this.props.style.overlay || {}),
        onClick: this.handleOverlayClick
      }, a({
        ref: "content",
        style: u({}, c.content, this.props.style.content || {}),
        className: this.buildClassName("content", this.props.className),
        tabIndex: "-1",
        onClick: r,
        onKeyDown: this.handleKeyDown
      }, this.props.children));
    }
  }
});