function n(e, t) {
  var n = e === null || e === false;
  var r = t === null || t === false;
  if (n || r) {
    return n === r;
  }
  var o = typeof e;
  var a = typeof t;
  if (o === "string" || o === "number") {
    return a === "string" || a === "number";
  } else {
    return a === "object" && e.type === t.type && e.key === t.key;
  }
}
module.exports = n;