var r; /*!
       Copyright (c) 2015 Jed Watson.
       Based on code that is Copyright 2013-2015, Facebook, Inc.
       All rights reserved.
       */
(function () {
  "use strict";

  var o = typeof window != "undefined" && !!window.document && !!window.document.createElement;
  var a = {
    canUseDOM: o,
    canUseWorkers: typeof Worker != "undefined",
    canUseEventListeners: o && (!!window.addEventListener || !!window.attachEvent),
    canUseViewport: o && !!window.screen
  };
  r = function () {
    return a;
  }.call(exports, require, exports, module);
  if (r !== undefined) {
    module.exports = r;
  }
})();