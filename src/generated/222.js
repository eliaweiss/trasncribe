var r = require("./12.js");
var o = require("./26.js");
var a = require("./39.js");
var i = require("./7.js");
var s = require("./14.js");
var u = r.topLevelTypes;
var l = i.getFirstReactDOM;
var c = {
  mouseEnter: {
    registrationName: s({
      onMouseEnter: null
    }),
    dependencies: [u.topMouseOut, u.topMouseOver]
  },
  mouseLeave: {
    registrationName: s({
      onMouseLeave: null
    }),
    dependencies: [u.topMouseOut, u.topMouseOver]
  }
};
var p = [null, null];
var d = {
  eventTypes: c,
  extractEvents: function (e, t, n, r, s) {
    if (e === u.topMouseOver && (r.relatedTarget || r.fromElement)) {
      return null;
    }
    if (e !== u.topMouseOut && e !== u.topMouseOver) {
      return null;
    }
    var d;
    if (t.window === t) {
      d = t;
    } else {
      var f = t.ownerDocument;
      d = f ? f.defaultView || f.parentWindow : window;
    }
    var h;
    var m;
    var v = "";
    var y = "";
    if (e === u.topMouseOut) {
      h = t;
      v = n;
      m = l(r.relatedTarget || r.toElement);
      if (m) {
        y = i.getID(m);
      } else {
        m = d;
      }
      m = m || d;
    } else {
      h = d;
      m = t;
      y = n;
    }
    if (h === m) {
      return null;
    }
    var g = a.getPooled(c.mouseLeave, v, r, s);
    g.type = "mouseleave";
    g.target = h;
    g.relatedTarget = m;
    var b = a.getPooled(c.mouseEnter, y, r, s);
    b.type = "mouseenter";
    b.target = m;
    b.relatedTarget = h;
    o.accumulateEnterLeaveDispatches(g, b, v, y);
    p[0] = g;
    p[1] = b;
    return p;
  }
};
module.exports = d;