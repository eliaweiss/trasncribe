function r(e) {
  if (!Object.prototype.hasOwnProperty.call(e, v)) {
    e[v] = h++;
    d[e[v]] = {};
  }
  return d[e[v]];
}
var o = require("./12.js");
var a = require("./25.js");
var i = require("./84.js");
var s = require("./238.js");
var u = require("./10.js");
var l = require("./105.js");
var c = require("./3.js");
var p = require("./60.js");
var d = {};
var f = false;
var h = 0;
var m = {
  topAbort: "abort",
  topBlur: "blur",
  topCanPlay: "canplay",
  topCanPlayThrough: "canplaythrough",
  topChange: "change",
  topClick: "click",
  topCompositionEnd: "compositionend",
  topCompositionStart: "compositionstart",
  topCompositionUpdate: "compositionupdate",
  topContextMenu: "contextmenu",
  topCopy: "copy",
  topCut: "cut",
  topDoubleClick: "dblclick",
  topDrag: "drag",
  topDragEnd: "dragend",
  topDragEnter: "dragenter",
  topDragExit: "dragexit",
  topDragLeave: "dragleave",
  topDragOver: "dragover",
  topDragStart: "dragstart",
  topDrop: "drop",
  topDurationChange: "durationchange",
  topEmptied: "emptied",
  topEncrypted: "encrypted",
  topEnded: "ended",
  topError: "error",
  topFocus: "focus",
  topInput: "input",
  topKeyDown: "keydown",
  topKeyPress: "keypress",
  topKeyUp: "keyup",
  topLoadedData: "loadeddata",
  topLoadedMetadata: "loadedmetadata",
  topLoadStart: "loadstart",
  topMouseDown: "mousedown",
  topMouseMove: "mousemove",
  topMouseOut: "mouseout",
  topMouseOver: "mouseover",
  topMouseUp: "mouseup",
  topPaste: "paste",
  topPause: "pause",
  topPlay: "play",
  topPlaying: "playing",
  topProgress: "progress",
  topRateChange: "ratechange",
  topScroll: "scroll",
  topSeeked: "seeked",
  topSeeking: "seeking",
  topSelectionChange: "selectionchange",
  topStalled: "stalled",
  topSuspend: "suspend",
  topTextInput: "textInput",
  topTimeUpdate: "timeupdate",
  topTouchCancel: "touchcancel",
  topTouchEnd: "touchend",
  topTouchMove: "touchmove",
  topTouchStart: "touchstart",
  topVolumeChange: "volumechange",
  topWaiting: "waiting",
  topWheel: "wheel"
};
var v = "_reactListenersID" + String(Math.random()).slice(2);
var y = c({}, s, {
  ReactEventListener: null,
  injection: {
    injectReactEventListener: function (e) {
      e.setHandleTopLevel(y.handleTopLevel);
      y.ReactEventListener = e;
    }
  },
  setEnabled: function (e) {
    if (y.ReactEventListener) {
      y.ReactEventListener.setEnabled(e);
    }
  },
  isEnabled: function () {
    return !!y.ReactEventListener && !!y.ReactEventListener.isEnabled();
  },
  listenTo: function (e, t) {
    var n = t;
    var a = r(n);
    for (var s = i.registrationNameDependencies[e], u = o.topLevelTypes, l = 0; l < s.length; l++) {
      var c = s[l];
      if (!a.hasOwnProperty(c) || !a[c]) {
        if (c === u.topWheel) {
          if (p("wheel")) {
            y.ReactEventListener.trapBubbledEvent(u.topWheel, "wheel", n);
          } else if (p("mousewheel")) {
            y.ReactEventListener.trapBubbledEvent(u.topWheel, "mousewheel", n);
          } else {
            y.ReactEventListener.trapBubbledEvent(u.topWheel, "DOMMouseScroll", n);
          }
        } else if (c === u.topScroll) {
          if (p("scroll", true)) {
            y.ReactEventListener.trapCapturedEvent(u.topScroll, "scroll", n);
          } else {
            y.ReactEventListener.trapBubbledEvent(u.topScroll, "scroll", y.ReactEventListener.WINDOW_HANDLE);
          }
        } else if (c === u.topFocus || c === u.topBlur) {
          if (p("focus", true)) {
            y.ReactEventListener.trapCapturedEvent(u.topFocus, "focus", n);
            y.ReactEventListener.trapCapturedEvent(u.topBlur, "blur", n);
          } else if (p("focusin")) {
            y.ReactEventListener.trapBubbledEvent(u.topFocus, "focusin", n);
            y.ReactEventListener.trapBubbledEvent(u.topBlur, "focusout", n);
          }
          a[u.topBlur] = true;
          a[u.topFocus] = true;
        } else if (m.hasOwnProperty(c)) {
          y.ReactEventListener.trapBubbledEvent(c, m[c], n);
        }
        a[c] = true;
      }
    }
  },
  trapBubbledEvent: function (e, t, n) {
    return y.ReactEventListener.trapBubbledEvent(e, t, n);
  },
  trapCapturedEvent: function (e, t, n) {
    return y.ReactEventListener.trapCapturedEvent(e, t, n);
  },
  ensureScrollValueMonitoring: function () {
    if (!f) {
      var e = l.refreshScrollValues;
      y.ReactEventListener.monitorScrollValue(e);
      f = true;
    }
  },
  eventNameDispatchConfigs: a.eventNameDispatchConfigs,
  registrationNameModules: a.registrationNameModules,
  putListener: a.putListener,
  getListener: a.getListener,
  deleteListener: a.deleteListener,
  deleteAllListeners: a.deleteAllListeners
});
u.measureMethods(y, "ReactBrowserEventEmitter", {
  putListener: "putListener",
  deleteListener: "deleteListener"
});
module.exports = y;