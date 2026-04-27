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
function i(e, t) {
  return function (n) {
    var r = {
      [t]: n.target.value
    };
    e.setState(r);
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = function () {
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
function u(e, t, n) {
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
var l = require("./2.js");
var c = r(l);
var p = require("./31.js");
var d = r(p);
var f = require("./279.js");
var h = function (e) {
  function t(e) {
    o(this, t);
    u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
    this.element = e.element;
    this.state = {
      fileName: "loop.mp3",
      processing: false,
      progress: null,
      downloadUrl: null
    };
  }
  a(t, e);
  s(t, [{
    key: "componentDidMount",
    value: function () {
      this.reset();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function (e) {
      var t = e.isOpen && !this.props.isOpen;
      if (t) {
        this.reset();
      }
    }
  }, {
    key: "reset",
    value: function () {
      if (this.saveLoopWorker) {
        this.saveLoopWorker.terminate();
        this.saveLoopWorker = null;
      }
      if (this.state.downloadUrl) {
        URL.revokeObjectURL(this.state.downloadUrl);
      }
      this.setState({
        downloadUrl: null,
        processing: false,
        progress: 0
      });
    }
  }, {
    key: "cancel",
    value: function () {
      this.reset();
      this.props.onClose();
    }
  }, {
    key: "submit",
    value: function () {
      if (this.state.downloadUrl) {
        this.props.onClose();
        return;
      } else {
        this.setState({
          processing: true
        });
        this.encode();
        return;
      }
    }
  }, {
    key: "encode",
    value: function () {
      var e = this.props.loop.start;
      var t = this.props.loop.end;
      if (e != null && t != null) {
        var n = this.props.audioBuffer;
        var r = e * n.duration;
        var o = t * n.duration;
        var a = n.sampleRate;
        var i = r * a;
        var s = o * a;
        var u = n.numberOfChannels;
        var l = n.getChannelData(0);
        var c = u > 1 ? n.getChannelData(1) : l;
        this.encodeOptions = {
          pitch: this.props.pitch,
          tempo: this.props.tempo,
          sampleRate: a,
          leftBuffer: l.subarray(i, s),
          rightBuffer: c.subarray(i, s)
        };
        if (this.saveLoopWorker) {
          this.saveLoopWorker.terminate();
        }
        var p = this.saveLoopWorker = new f();
        p.addEventListener("message", this.onMessage.bind(this));
      }
    }
  }, {
    key: "onMessage",
    value: function (e) {
      if (e.data.name === "mp3EncodeProgress") {
        this.setState({
          progress: e.data.progress
        });
      }
      if (e.data.name === "mp3Encoded") {
        this.setState({
          processing: false,
          downloadUrl: e.data.url
        });
      }
      if (e.data.name === "ready") {
        this.saveLoopWorker.postMessage({
          name: "encodeMp3",
          options: this.encodeOptions
        });
        this.encodeOptions = null;
      }
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props.loop;
      var n = t && t.start != null && t.end != null;
      var r = !n;
      var o = this.state.downloadUrl ? "Ready for download" : null;
      var a = "Save Loop";
      if (this.state.processing) {
        a = "Processing";
      } else if (this.state.downloadUrl) {
        a = "Download MP3";
      } else if (r) {
        a = "Close";
      }
      var s = "btn btn-primary";
      if (this.state.processing) {
        s = "btn btn-default";
      } else if (this.state.downloadUrl) {
        s = "btn btn-success";
      }
      var u = !!this.state.processing;
      var l = r ? function () {
        return e.props.onClose();
      } : function () {
        return e.submit();
      };
      var p = c.default.createElement("h2", null, "Oops! First select the portion of the song you want to download.");
      var f = c.default.createElement("div", null, c.default.createElement("div", {
        className: "form-group"
      }, c.default.createElement("label", {
        htmlFor: "download-loop-filename"
      }, "Filename"), c.default.createElement("input", {
        id: "download-loop-filename",
        ref: "filename",
        type: "text",
        defaultValue: this.state.fileName,
        onChange: i(this, "fileName"),
        disabled: u,
        className: "form-control"
      })), c.default.createElement("div", {
        className: "progress"
      }, c.default.createElement("div", {
        className: "progress-bar active",
        role: "progressbar",
        style: {
          width: this.state.progress + "%"
        }
      }, o)));
      var h = c.default.createElement("h4", {
        className: "modal-title"
      }, "Download Loop as MP3");
      var m = c.default.createElement("div", null, c.default.createElement("button", {
        type: "button",
        className: "btn btn-link",
        onClick: function () {
          return e.close();
        },
        style: {
          display: this.props.isRegistering ? "none" : "inline"
        }
      }, "Close"), c.default.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        disabled: this.props.isRegistering
      }, a));
      var v = n ? f : p;
      var m = this.state.downloadUrl ? c.default.createElement("a", {
        href: this.state.downloadUrl,
        onClick: l,
        className: s,
        download: this.state.fileName
      }, a) : c.default.createElement("button", {
        className: s,
        disabled: u
      }, a);
      return c.default.createElement(d.default, {
        isOpen: this.props.isOpen,
        onClose: function () {
          return e.cancel();
        },
        onSubmit: l,
        focusElement: function () {
          return e.refs.filename;
        },
        header: h,
        footer: m
      }, v);
    }
  }]);
  return t;
}(c.default.Component);
exports.default = h;
module.exports = exports.default;