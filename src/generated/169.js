function n(e) {
  if (e === window) {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  } else {
    return {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  }
}
module.exports = n;