function r(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function o(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) {
      n[t] = e[t];
    }
    return n;
  }
  return Array.from(e);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = require("./68.js");
var i = r(a);
var s = require("./6.js");
var u = require("./23.js");
var l = r(u);
var c = {
  marks: []
};
exports.default = (0, l.default)(c, {
  updateMark: function (e, t) {
    var n = t.id;
    var r = t.time;
    var o = t.label;
    var a = t.markedForDeletion;
    var i = e.marks.slice(0);
    var s = i.find(function (e) {
      return e.id === n;
    });
    var l = i.indexOf(s);
    var c = {};
    if (r !== undefined) {
      c.time = r;
    }
    if (o !== undefined) {
      c.label = o;
    }
    if (a === true) {
      c.markedForDeletion = true;
    }
    var p = Object.assign({}, s, c);
    i[l] = p;
    return (0, u.copyState)(e, {
      marks: i
    });
  },
  addMark: function (e, t) {
    if (i.default.loaded) {
      var n = {
        id: (0, s.getUnique)(),
        time: i.default.currentTime / i.default.audioBuffer.duration,
        type: t.markType,
        label: ""
      };
      return (0, u.copyState)(e, {
        marks: [].concat(o(e.marks), [n])
      });
    }
  },
  removeMark: function (e, t) {
    var n = e.marks.slice(0);
    var r = n.find(function (e) {
      return e.id === t.id;
    });
    n.splice(n.indexOf(r), 1);
    return (0, u.copyState)(e, {
      marks: n
    });
  }
});
module.exports = exports.default;