function r(e) {
  return function (t, n) {
    if (!["gold", "silver"].includes(n().auth.plan) && e < 50) {
      t(r(50));
      t((0, p.gatherRegistration)("Slow down to 25% and more!"));
      return;
    } else {
      t({
        type: "setTempo",
        tempo: e
      });
      return;
    }
  };
}
function o(e) {
  return {
    type: "changeFile",
    filename: e
  };
}
function a(e) {
  return {
    type: "setPlaybackTime",
    time: e
  };
}
function i(e, t) {
  return {
    type: "setPitch",
    amount: e,
    value: t
  };
}
function s(e) {
  return {
    type: "setVolume",
    volume: e
  };
}
function u(e, t) {
  return function (n, r) {
    if (["gold"].includes(r().auth.plan)) {
      n({
        type: "changePitch",
        amount: e,
        value: t
      });
      return;
    } else {
      n((0, p.gatherRegistration)("Change pitch and more!"));
      return;
    }
  };
}
function l(e) {
  return function (t, n) {
    if (["gold", "silver"].includes(n().auth.plan)) {
      t({
        type: "setDelay",
        seconds: e
      });
      return;
    } else {
      t((0, p.gatherRegistration)("Delay start and more!"));
      return;
    }
  };
}
function c(e) {
  return {
    type: "changePlayStatus",
    isPlaying: e
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTempo = r;
exports.changeFile = o;
exports.setPlaybackTime = a;
exports.setPitch = i;
exports.setVolume = s;
exports.changePitch = u;
exports.setDelay = l;
exports.changePlayStatus = c;
var p = require("../../generated/22.js");