function r(e, t, n) {
  if (typeof e == "function") {
    e(t.getPublicInstance());
  } else {
    a.addComponentAsRefTo(t, e, n);
  }
}
function o(e, t, n) {
  if (typeof e == "function") {
    e(null);
  } else {
    a.removeComponentAsRefFrom(t, e, n);
  }
}
var a = require("./243.js");
var i = {};
i.attachRefs = function (e, t) {
  if (t !== null && t !== false) {
    var n = t.ref;
    if (n != null) {
      r(n, e, t._owner);
    }
  }
};
i.shouldUpdateRefs = function (e, t) {
  var n = e === null || e === false;
  var r = t === null || t === false;
  return n || r || t._owner !== e._owner || t.ref !== e.ref;
};
i.detachRefs = function (e, t) {
  if (t !== null && t !== false) {
    var n = t.ref;
    if (n != null) {
      o(n, e, t._owner);
    }
  }
};
module.exports = i;