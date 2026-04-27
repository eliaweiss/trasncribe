var n = typeof window != "undefined" && !!window.document && !!window.document.createElement;
var r = {
  canUseDOM: n,
  canUseWorkers: typeof Worker != "undefined",
  canUseEventListeners: n && (!!window.addEventListener || !!window.attachEvent),
  canUseViewport: n && !!window.screen,
  isInWorker: !n
};
module.exports = r;