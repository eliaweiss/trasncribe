function n(e) {
  if (typeof console != "undefined" && typeof console.error == "function") {
    console.error(e);
  }
  try {
    throw new Error(e);
  } catch (e) {}
}
exports.__esModule = true;
exports.default = n;