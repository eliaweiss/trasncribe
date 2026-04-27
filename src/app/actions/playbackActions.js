function r(e) {
  return function (t, n) {
    t({
      type: "setTempo",
      tempo: e
    });
    return;
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
    n({
      type: "changePitch",
      amount: e,
      value: t
    });
    return;
  };
}
function l(e) {
  return function (t, n) {
    t({
      type: "setDelay",
      seconds: e
    });
    return;
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