function n() {
  if (typeof document == "undefined") {
    return null;
  }
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}
module.exports = n;