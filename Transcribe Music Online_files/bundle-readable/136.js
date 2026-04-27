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
var c = require("./6.js");
var p = function (e) {
  function t(e) {
    o(this, t);
    s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.startX = -1;
    this.dragged = false;
    this.isMouseDown = false;
  }
  a(t, e);
  i(t, [{
    key: "shouldComponentUpdate",
    value: function (e, t) {
      return this.props.start !== e.start || this.props.end !== e.end || this.props.width !== e.width || this.props.height !== e.height;
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.canvas = this.refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      setTimeout(function () {
        e.draw();
      }, 500);
    }
  }, {
    key: "onMouseDown",
    value: function (e) {
      this.isMouseDown = true;
      if (this.isOnResizeElement(e, this.props.start)) {
        this.startX = (this.props.end || this.props.start) * this.canvas.offsetWidth;
        return;
      } else if (this.isOnResizeElement(e, this.props.end)) {
        this.startX = this.props.start * this.canvas.offsetWidth;
        return;
      } else {
        this.startX = (0, c.relX)(e);
        return;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      this.draw();
    }
  }, {
    key: "onMouseMove",
    value: function (e) {
      if (this.isMouseDown) {
        this.dragged = true;
        this.setCurrentSelection(e);
      } else {
        this.hitTestResizer(e);
      }
    }
  }, {
    key: "onMouseOut",
    value: function (e) {
      if (!this.isMouseDown) {
        document.body.style.cursor = null;
      }
    }
  }, {
    key: "setCurrentSelection",
    value: function (e) {
      var t = (0, c.relX)(e);
      var n = Math.min(this.startX, t);
      var r = Math.max(this.startX, t);
      if (r - n > 2) {
        this.props.setLoop(n / this.canvas.offsetWidth, r / this.canvas.offsetWidth);
      }
      e.stopPropagation();
      e.preventDefault();
      e.nativeEvent.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  }, {
    key: "onClick",
    value: function (e) {
      if (this.isMouseDown) {
        try {
          if (this.dragged) {
            this.dragged = false;
            this.isMouseDown = false;
          } else {
            this.props.setLoop((0, c.relX)(e) / this.canvas.offsetWidth, null);
          }
        } finally {
          this.isMouseDown = false;
          this.startX = -1;
        }
      }
    }
  }, {
    key: "hitTestResizer",
    value: function (e) {
      var t = this.props.start;
      var n = this.props.end;
      if (t > 0 && this.isOnResizeElement(e, t)) {
        document.body.style.cursor = "col-resize";
      } else if (n != null && this.isOnResizeElement(e, n)) {
        document.body.style.cursor = "col-resize";
      } else {
        document.body.style.cursor = null;
      }
    }
  }, {
    key: "isOnResizeElement",
    value: function (e, t) {
      return Math.abs((0, c.relX)(e) - t * this.canvas.offsetWidth) < 3;
    }
  }, {
    key: "drawEdge",
    value: function (e) {
      var t = 2;
      var n = this.ctx;
      var r = this.canvas.height;
      n.beginPath();
      n.moveTo(e + t + 1, 0);
      n.lineTo(e + 1, t);
      n.lineTo(e + 1, r - t);
      n.lineTo(e + t + 1, r);
      n.lineTo(e, r);
      n.lineTo(e - t - 0, r);
      n.lineTo(e - 0, r - t);
      n.lineTo(e - 0, t);
      n.lineTo(e - t - 0, 0);
      n.closePath();
      n.fillStyle = "#5869FC";
      n.shadowColor = "#333";
      n.shadowBlur = 0.5;
      n.fill();
    }
  }, {
    key: "drawBackground",
    value: function (e, t) {
      var n = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
      n.addColorStop(0, d.selection.color1);
      n.addColorStop(1, d.selection.color2);
      this.ctx.fillStyle = n;
      this.ctx.fillRect(e + 1, 0, t - e - 1, this.canvas.height);
    }
  }, {
    key: "draw",
    value: function () {
      var e = this.ctx;
      var t = this.canvas.width;
      e.clearRect(0, 0, t, this.canvas.height);
      var n = this.props.start * t;
      var r = this.props.end * t;
      e.fillStyle = "#F6F6F9";
      this.drawEdge(n);
      if (this.props.end != null) {
        this.drawBackground(n, r);
        this.drawEdge(r);
      }
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      return l.default.createElement("canvas", {
        ref: "canvas",
        width: this.props.width,
        id: "waveform-selection",
        height: this.props.height,
        unselectable: "on",
        style: {
          MozUserSelect: "none"
        },
        onSelectStart: function () {
          return false;
        },
        onMouseDown: function (t) {
          return e.onMouseDown(t);
        },
        onMouseMove: function (t) {
          return e.onMouseMove(t);
        },
        onMouseOut: function (t) {
          return e.onMouseOut(t);
        },
        onMouseUp: function (t) {
          return e.onClick(t);
        }
      });
    }
  }]);
  return t;
}(l.default.Component);
var d = {
  selection: {
    color1: "rgba(246,246,249,.015)",
    color2: "rgba(246,246,249,.075)"
  }
};
exports.default = p;
module.exports = exports.default;