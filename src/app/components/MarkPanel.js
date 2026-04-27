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
var c = require("../../generated/19.js");
r(c);
var p = require("../../generated/124.js");
var d = r(p);
var f = function (e) {
  function t(e) {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.marks = e.marks;
    this.type = e.type;
    this.element = e.element;
    this.dragState = null;
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.state = {
      marks: [],
      currentMark: null,
      audioDuration: null
    };
  }
  a(t, e);
  i(t, [{
    key: "componentDidMount",
    value: function () {
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    }
  }, {
    key: "componentDidUnMount",
    value: function () {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    }
  }, {
    key: "onMouseDown",
    value: function (e, t) {
      var n = t.time - this.pos(e) / this.props.width;
      this.dragState = {
        isMouseDown: true,
        isDragging: false,
        markId: t.id,
        markedForDeletion: null,
        time: null,
        markTarget: e.target,
        originalY: e.pageY,
        diff: n
      };
    }
  }, {
    key: "onMouseMove",
    value: function (e) {
      var t = this.dragState;
      if (t && t.isMouseDown) {
        t.isDragging = true;
        t.time = this.pos(e) / this.props.width + t.diff;
        t.markedForDeletion = Math.abs(e.pageY - this.dragState.originalY) > 100;
        this.props.onMarkChanged(t.markId, {
          time: t.time,
          markedForDeletion: t.markedForDeletion
        });
      }
    }
  }, {
    key: "onMouseUp",
    value: function (e) {
      if (this.dragState && this.dragState.isMouseDown) {
        if (this.dragState.markedForDeletion) {
          this.props.onRemoveMark(this.dragState.markId);
        }
        this.dragState = null;
      }
    }
  }, {
    key: "pos",
    value: function (e) {
      var t = 0;
      var n = e.pageX - t + e.target.parentNode.scrollLeft;
      return n;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function (e, t) {
      return this.props.width !== e.width || this.props.marks !== e.marks || this.state !== t;
    }
  }, {
    key: "updateLabel",
    value: function (e, t) {
      this.setState({
        currentMark: null
      });
      var n = Object.assign({}, e, {
        label: t
      });
      this.props.onMarkChanged(e.id, n);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props.type;
      var n = this.props.marks.filter(function (t) {
        return t.type === e.props.type && !t.markedForDeletion;
      }).map(function (n) {
        var r = n.time * e.props.width;
        return l.default.createElement("div", {
          style: {
            left: r
          },
          key: n.id,
          className: t,
          onDoubleClick: function (t) {
            return e.setState({
              currentMark: n
            });
          },
          onMouseDown: function (t) {
            return e.onMouseDown(t, n);
          }
        }, l.default.createElement("label", null, n.label));
      }.bind(this));
      var r = null;
      if (this.state.currentMark) {
        var o = this.state.currentMark;
        if (o) {
          o.label;
        } else {
          null;
        }
        var a = o != null;
        r = l.default.createElement(d.default, {
          isOpen: a,
          onSave: function (t) {
            return e.updateLabel(o, t.label);
          },
          onCancel: function () {
            return e.setState({
              currentMark: null
            });
          },
          mark: o,
          onRemoveMark: this.props.onRemoveMark
        });
      }
      return l.default.createElement("div", {
        className: this.props.className + " mark-panel",
        onselectstart: function () {
          return false;
        },
        unselectable: "on",
        style: {
          MozUserSelect: false
        }
      }, r, n);
    }
  }]);
  return t;
}(l.default.Component);
exports.default = f;
module.exports = exports.default;