const authActions = require("../22.js");

function audioLoading() {
  return { type: "audioLoading" };
}

function audioLoaded(dataHash) {
  return { type: "audioLoaded", dataHash };
}

function addMark() {
  return { type: "addMark", markType: "mark" };
}

function addBeat() {
  return { type: "addMark", markType: "beat" };
}

function removeMark(id) {
  return { type: "removeMark", id };
}

function updateMark(id, mark) {
  return {
    type: "updateMark",
    id,
    time: mark.time,
    label: mark.label,
    markedForDeletion: mark.markedForDeletion,
  };
}

function setTempo(tempo) {
  return function setTempoIfPlanAllows(dispatch, getState) {
    const plan = getState().auth.plan;

    if (!["gold", "silver"].includes(plan) && tempo < 50) {
      dispatch(setTempo(50));
      dispatch(authActions.gatherRegistration("Slow down to 25% and more!"));
      return;
    }

    dispatch({ type: "setTempo", tempo });
  };
}

function changeFile(filename) {
  return { type: "changeFile", filename };
}

function setPlaybackTime(time) {
  return { type: "setPlaybackTime", time };
}

function setPitch(amount, value) {
  return { type: "setPitch", amount, value };
}

function setVolume() {
  return { type: "setVolume", volume: 100 };
}

function changePitch(amount, value) {
  return function changePitchIfPlanAllows(dispatch, getState) {
    if (["gold"].includes(getState().auth.plan)) {
      dispatch({ type: "changePitch", amount, value });
      return;
    }

    dispatch(authActions.gatherRegistration("Change pitch and more!"));
  };
}

function setDelay(seconds) {
  return function setDelayIfPlanAllows(dispatch, getState) {
    if (["gold", "silver"].includes(getState().auth.plan)) {
      dispatch({ type: "setDelay", seconds });
      return;
    }

    dispatch(authActions.gatherRegistration("Delay start and more!"));
  };
}

function changePlayStatus(isPlaying) {
  return { type: "changePlayStatus", isPlaying };
}

function zoom(level) {
  return { type: "setZoom", level };
}

module.exports = {
  audioLoading,
  audioLoaded,
  addMark,
  addBeat,
  removeMark,
  updateMark,
  setTempo,
  changeFile,
  setPlaybackTime,
  setPitch,
  setVolume,
  changePitch,
  setDelay,
  changePlayStatus,
  zoom,
};
