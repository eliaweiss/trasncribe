function r() {
  var e = document.createElement("div");
  var t = e.style;
  if (!("AnimationEvent" in window)) {
    delete s.animationend.animation;
  }
  if (!("TransitionEvent" in window)) {
    delete s.transitionend.transition;
  }
  for (var n in s) {
    var r = s[n];
    for (var o in r) {
      if (o in t) {
        u.push(r[o]);
        break;
      }
    }
  }
}
function o(e, t, n) {
  e.addEventListener(t, n, false);
}
function a(e, t, n) {
  e.removeEventListener(t, n, false);
}
var i = require("./5.js");
var s = {
  transitionend: {
    transition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "mozTransitionEnd",
    OTransition: "oTransitionEnd",
    msTransition: "MSTransitionEnd"
  },
  animationend: {
    animation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
    MozAnimation: "mozAnimationEnd",
    OAnimation: "oAnimationEnd",
    msAnimation: "MSAnimationEnd"
  }
};
var u = [];
if (i.canUseDOM) {
  r();
}
var l = {
  addEndEventListener: function (e, t) {
    if (u.length === 0) {
      window.setTimeout(t, 0);
      return;
    } else {
      u.forEach(function (n) {
        o(e, n, t);
      });
      return;
    }
  },
  removeEndEventListener: function (e, t) {
    if (u.length !== 0) {
      u.forEach(function (n) {
        a(e, n, t);
      });
    }
  }
};
module.exports = l;