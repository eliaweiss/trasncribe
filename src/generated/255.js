var r = require("./12.js");
var o = require("./69.js");
var a = require("./26.js");
var i = require("./7.js");
var s = require("./256.js");
var u = require("./17.js");
var l = require("./259.js");
var c = require("./261.js");
var p = require("./39.js");
var d = require("./258.js");
var f = require("./262.js");
var h = require("./28.js");
var m = require("./263.js");
var v = require("./9.js");
var y = require("./55.js");
var g = require("./1.js");
var b = require("./14.js");
var E = r.topLevelTypes;
var w = {
  abort: {
    phasedRegistrationNames: {
      bubbled: b({
        onAbort: true
      }),
      captured: b({
        onAbortCapture: true
      })
    }
  },
  blur: {
    phasedRegistrationNames: {
      bubbled: b({
        onBlur: true
      }),
      captured: b({
        onBlurCapture: true
      })
    }
  },
  canPlay: {
    phasedRegistrationNames: {
      bubbled: b({
        onCanPlay: true
      }),
      captured: b({
        onCanPlayCapture: true
      })
    }
  },
  canPlayThrough: {
    phasedRegistrationNames: {
      bubbled: b({
        onCanPlayThrough: true
      }),
      captured: b({
        onCanPlayThroughCapture: true
      })
    }
  },
  click: {
    phasedRegistrationNames: {
      bubbled: b({
        onClick: true
      }),
      captured: b({
        onClickCapture: true
      })
    }
  },
  contextMenu: {
    phasedRegistrationNames: {
      bubbled: b({
        onContextMenu: true
      }),
      captured: b({
        onContextMenuCapture: true
      })
    }
  },
  copy: {
    phasedRegistrationNames: {
      bubbled: b({
        onCopy: true
      }),
      captured: b({
        onCopyCapture: true
      })
    }
  },
  cut: {
    phasedRegistrationNames: {
      bubbled: b({
        onCut: true
      }),
      captured: b({
        onCutCapture: true
      })
    }
  },
  doubleClick: {
    phasedRegistrationNames: {
      bubbled: b({
        onDoubleClick: true
      }),
      captured: b({
        onDoubleClickCapture: true
      })
    }
  },
  drag: {
    phasedRegistrationNames: {
      bubbled: b({
        onDrag: true
      }),
      captured: b({
        onDragCapture: true
      })
    }
  },
  dragEnd: {
    phasedRegistrationNames: {
      bubbled: b({
        onDragEnd: true
      }),
      captured: b({
        onDragEndCapture: true
      })
    }
  },
  dragEnter: {
    phasedRegistrationNames: {
      bubbled: b({
        onDragEnter: true
      }),
      captured: b({
        onDragEnterCapture: true
      })
    }
  },
  dragExit: {
    phasedRegistrationNames: {
      bubbled: b({
        onDragExit: true
      }),
      captured: b({
        onDragExitCapture: true
      })
    }
  },
  dragLeave: {
    phasedRegistrationNames: {
      bubbled: b({
        onDragLeave: true
      }),
      captured: b({
        onDragLeaveCapture: true
      })
    }
  },
  dragOver: {
    phasedRegistrationNames: {
      bubbled: b({
        onDragOver: true
      }),
      captured: b({
        onDragOverCapture: true
      })
    }
  },
  dragStart: {
    phasedRegistrationNames: {
      bubbled: b({
        onDragStart: true
      }),
      captured: b({
        onDragStartCapture: true
      })
    }
  },
  drop: {
    phasedRegistrationNames: {
      bubbled: b({
        onDrop: true
      }),
      captured: b({
        onDropCapture: true
      })
    }
  },
  durationChange: {
    phasedRegistrationNames: {
      bubbled: b({
        onDurationChange: true
      }),
      captured: b({
        onDurationChangeCapture: true
      })
    }
  },
  emptied: {
    phasedRegistrationNames: {
      bubbled: b({
        onEmptied: true
      }),
      captured: b({
        onEmptiedCapture: true
      })
    }
  },
  encrypted: {
    phasedRegistrationNames: {
      bubbled: b({
        onEncrypted: true
      }),
      captured: b({
        onEncryptedCapture: true
      })
    }
  },
  ended: {
    phasedRegistrationNames: {
      bubbled: b({
        onEnded: true
      }),
      captured: b({
        onEndedCapture: true
      })
    }
  },
  error: {
    phasedRegistrationNames: {
      bubbled: b({
        onError: true
      }),
      captured: b({
        onErrorCapture: true
      })
    }
  },
  focus: {
    phasedRegistrationNames: {
      bubbled: b({
        onFocus: true
      }),
      captured: b({
        onFocusCapture: true
      })
    }
  },
  input: {
    phasedRegistrationNames: {
      bubbled: b({
        onInput: true
      }),
      captured: b({
        onInputCapture: true
      })
    }
  },
  keyDown: {
    phasedRegistrationNames: {
      bubbled: b({
        onKeyDown: true
      }),
      captured: b({
        onKeyDownCapture: true
      })
    }
  },
  keyPress: {
    phasedRegistrationNames: {
      bubbled: b({
        onKeyPress: true
      }),
      captured: b({
        onKeyPressCapture: true
      })
    }
  },
  keyUp: {
    phasedRegistrationNames: {
      bubbled: b({
        onKeyUp: true
      }),
      captured: b({
        onKeyUpCapture: true
      })
    }
  },
  load: {
    phasedRegistrationNames: {
      bubbled: b({
        onLoad: true
      }),
      captured: b({
        onLoadCapture: true
      })
    }
  },
  loadedData: {
    phasedRegistrationNames: {
      bubbled: b({
        onLoadedData: true
      }),
      captured: b({
        onLoadedDataCapture: true
      })
    }
  },
  loadedMetadata: {
    phasedRegistrationNames: {
      bubbled: b({
        onLoadedMetadata: true
      }),
      captured: b({
        onLoadedMetadataCapture: true
      })
    }
  },
  loadStart: {
    phasedRegistrationNames: {
      bubbled: b({
        onLoadStart: true
      }),
      captured: b({
        onLoadStartCapture: true
      })
    }
  },
  mouseDown: {
    phasedRegistrationNames: {
      bubbled: b({
        onMouseDown: true
      }),
      captured: b({
        onMouseDownCapture: true
      })
    }
  },
  mouseMove: {
    phasedRegistrationNames: {
      bubbled: b({
        onMouseMove: true
      }),
      captured: b({
        onMouseMoveCapture: true
      })
    }
  },
  mouseOut: {
    phasedRegistrationNames: {
      bubbled: b({
        onMouseOut: true
      }),
      captured: b({
        onMouseOutCapture: true
      })
    }
  },
  mouseOver: {
    phasedRegistrationNames: {
      bubbled: b({
        onMouseOver: true
      }),
      captured: b({
        onMouseOverCapture: true
      })
    }
  },
  mouseUp: {
    phasedRegistrationNames: {
      bubbled: b({
        onMouseUp: true
      }),
      captured: b({
        onMouseUpCapture: true
      })
    }
  },
  paste: {
    phasedRegistrationNames: {
      bubbled: b({
        onPaste: true
      }),
      captured: b({
        onPasteCapture: true
      })
    }
  },
  pause: {
    phasedRegistrationNames: {
      bubbled: b({
        onPause: true
      }),
      captured: b({
        onPauseCapture: true
      })
    }
  },
  play: {
    phasedRegistrationNames: {
      bubbled: b({
        onPlay: true
      }),
      captured: b({
        onPlayCapture: true
      })
    }
  },
  playing: {
    phasedRegistrationNames: {
      bubbled: b({
        onPlaying: true
      }),
      captured: b({
        onPlayingCapture: true
      })
    }
  },
  progress: {
    phasedRegistrationNames: {
      bubbled: b({
        onProgress: true
      }),
      captured: b({
        onProgressCapture: true
      })
    }
  },
  rateChange: {
    phasedRegistrationNames: {
      bubbled: b({
        onRateChange: true
      }),
      captured: b({
        onRateChangeCapture: true
      })
    }
  },
  reset: {
    phasedRegistrationNames: {
      bubbled: b({
        onReset: true
      }),
      captured: b({
        onResetCapture: true
      })
    }
  },
  scroll: {
    phasedRegistrationNames: {
      bubbled: b({
        onScroll: true
      }),
      captured: b({
        onScrollCapture: true
      })
    }
  },
  seeked: {
    phasedRegistrationNames: {
      bubbled: b({
        onSeeked: true
      }),
      captured: b({
        onSeekedCapture: true
      })
    }
  },
  seeking: {
    phasedRegistrationNames: {
      bubbled: b({
        onSeeking: true
      }),
      captured: b({
        onSeekingCapture: true
      })
    }
  },
  stalled: {
    phasedRegistrationNames: {
      bubbled: b({
        onStalled: true
      }),
      captured: b({
        onStalledCapture: true
      })
    }
  },
  submit: {
    phasedRegistrationNames: {
      bubbled: b({
        onSubmit: true
      }),
      captured: b({
        onSubmitCapture: true
      })
    }
  },
  suspend: {
    phasedRegistrationNames: {
      bubbled: b({
        onSuspend: true
      }),
      captured: b({
        onSuspendCapture: true
      })
    }
  },
  timeUpdate: {
    phasedRegistrationNames: {
      bubbled: b({
        onTimeUpdate: true
      }),
      captured: b({
        onTimeUpdateCapture: true
      })
    }
  },
  touchCancel: {
    phasedRegistrationNames: {
      bubbled: b({
        onTouchCancel: true
      }),
      captured: b({
        onTouchCancelCapture: true
      })
    }
  },
  touchEnd: {
    phasedRegistrationNames: {
      bubbled: b({
        onTouchEnd: true
      }),
      captured: b({
        onTouchEndCapture: true
      })
    }
  },
  touchMove: {
    phasedRegistrationNames: {
      bubbled: b({
        onTouchMove: true
      }),
      captured: b({
        onTouchMoveCapture: true
      })
    }
  },
  touchStart: {
    phasedRegistrationNames: {
      bubbled: b({
        onTouchStart: true
      }),
      captured: b({
        onTouchStartCapture: true
      })
    }
  },
  volumeChange: {
    phasedRegistrationNames: {
      bubbled: b({
        onVolumeChange: true
      }),
      captured: b({
        onVolumeChangeCapture: true
      })
    }
  },
  waiting: {
    phasedRegistrationNames: {
      bubbled: b({
        onWaiting: true
      }),
      captured: b({
        onWaitingCapture: true
      })
    }
  },
  wheel: {
    phasedRegistrationNames: {
      bubbled: b({
        onWheel: true
      }),
      captured: b({
        onWheelCapture: true
      })
    }
  }
};
var C = {
  topAbort: w.abort,
  topBlur: w.blur,
  topCanPlay: w.canPlay,
  topCanPlayThrough: w.canPlayThrough,
  topClick: w.click,
  topContextMenu: w.contextMenu,
  topCopy: w.copy,
  topCut: w.cut,
  topDoubleClick: w.doubleClick,
  topDrag: w.drag,
  topDragEnd: w.dragEnd,
  topDragEnter: w.dragEnter,
  topDragExit: w.dragExit,
  topDragLeave: w.dragLeave,
  topDragOver: w.dragOver,
  topDragStart: w.dragStart,
  topDrop: w.drop,
  topDurationChange: w.durationChange,
  topEmptied: w.emptied,
  topEncrypted: w.encrypted,
  topEnded: w.ended,
  topError: w.error,
  topFocus: w.focus,
  topInput: w.input,
  topKeyDown: w.keyDown,
  topKeyPress: w.keyPress,
  topKeyUp: w.keyUp,
  topLoad: w.load,
  topLoadedData: w.loadedData,
  topLoadedMetadata: w.loadedMetadata,
  topLoadStart: w.loadStart,
  topMouseDown: w.mouseDown,
  topMouseMove: w.mouseMove,
  topMouseOut: w.mouseOut,
  topMouseOver: w.mouseOver,
  topMouseUp: w.mouseUp,
  topPaste: w.paste,
  topPause: w.pause,
  topPlay: w.play,
  topPlaying: w.playing,
  topProgress: w.progress,
  topRateChange: w.rateChange,
  topReset: w.reset,
  topScroll: w.scroll,
  topSeeked: w.seeked,
  topSeeking: w.seeking,
  topStalled: w.stalled,
  topSubmit: w.submit,
  topSuspend: w.suspend,
  topTimeUpdate: w.timeUpdate,
  topTouchCancel: w.touchCancel,
  topTouchEnd: w.touchEnd,
  topTouchMove: w.touchMove,
  topTouchStart: w.touchStart,
  topVolumeChange: w.volumeChange,
  topWaiting: w.waiting,
  topWheel: w.wheel
};
for (var _ in C) {
  C[_].dependencies = [_];
}
var O = b({
  onClick: null
});
var P = {};
var k = {
  eventTypes: w,
  extractEvents: function (e, t, n, r, o) {
    var i = C[e];
    if (!i) {
      return null;
    }
    var v;
    switch (e) {
      case E.topAbort:
      case E.topCanPlay:
      case E.topCanPlayThrough:
      case E.topDurationChange:
      case E.topEmptied:
      case E.topEncrypted:
      case E.topEnded:
      case E.topError:
      case E.topInput:
      case E.topLoad:
      case E.topLoadedData:
      case E.topLoadedMetadata:
      case E.topLoadStart:
      case E.topPause:
      case E.topPlay:
      case E.topPlaying:
      case E.topProgress:
      case E.topRateChange:
      case E.topReset:
      case E.topSeeked:
      case E.topSeeking:
      case E.topStalled:
      case E.topSubmit:
      case E.topSuspend:
      case E.topTimeUpdate:
      case E.topVolumeChange:
      case E.topWaiting:
        v = u;
        break;
      case E.topKeyPress:
        if (y(r) === 0) {
          return null;
        }
      case E.topKeyDown:
      case E.topKeyUp:
        v = c;
        break;
      case E.topBlur:
      case E.topFocus:
        v = l;
        break;
      case E.topClick:
        if (r.button === 2) {
          return null;
        }
      case E.topContextMenu:
      case E.topDoubleClick:
      case E.topMouseDown:
      case E.topMouseMove:
      case E.topMouseOut:
      case E.topMouseOver:
      case E.topMouseUp:
        v = p;
        break;
      case E.topDrag:
      case E.topDragEnd:
      case E.topDragEnter:
      case E.topDragExit:
      case E.topDragLeave:
      case E.topDragOver:
      case E.topDragStart:
      case E.topDrop:
        v = d;
        break;
      case E.topTouchCancel:
      case E.topTouchEnd:
      case E.topTouchMove:
      case E.topTouchStart:
        v = f;
        break;
      case E.topScroll:
        v = h;
        break;
      case E.topWheel:
        v = m;
        break;
      case E.topCopy:
      case E.topCut:
      case E.topPaste:
        v = s;
    }
    if (v) {
      undefined;
    } else {
      g(false);
    }
    var b = v.getPooled(i, n, r, o);
    a.accumulateTwoPhaseDispatches(b);
    return b;
  },
  didPutListener: function (e, t, n) {
    if (t === O) {
      var r = i.getNode(e);
      P[e] ||= o.listen(r, "click", v);
    }
  },
  willDeleteListener: function (e, t) {
    if (t === O) {
      P[e].remove();
      delete P[e];
    }
  }
};
module.exports = k;