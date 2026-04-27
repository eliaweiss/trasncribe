function r(e, t, n) {
  v.push({
    parentID: e,
    parentNode: null,
    type: p.INSERT_MARKUP,
    markupIndex: y.push(t) - 1,
    content: null,
    fromIndex: null,
    toIndex: n
  });
}
function o(e, t, n) {
  v.push({
    parentID: e,
    parentNode: null,
    type: p.MOVE_EXISTING,
    markupIndex: null,
    content: null,
    fromIndex: t,
    toIndex: n
  });
}
function a(e, t) {
  v.push({
    parentID: e,
    parentNode: null,
    type: p.REMOVE_NODE,
    markupIndex: null,
    content: null,
    fromIndex: t,
    toIndex: null
  });
}
function i(e, t) {
  v.push({
    parentID: e,
    parentNode: null,
    type: p.SET_MARKUP,
    markupIndex: null,
    content: t,
    fromIndex: null,
    toIndex: null
  });
}
function s(e, t) {
  v.push({
    parentID: e,
    parentNode: null,
    type: p.TEXT_CONTENT,
    markupIndex: null,
    content: t,
    fromIndex: null,
    toIndex: null
  });
}
function u() {
  if (v.length) {
    c.processChildrenUpdates(v, y);
    l();
  }
}
function l() {
  v.length = 0;
  y.length = 0;
}
var c = require("./49.js");
var p = require("./100.js");
require("./13.js");
var d = require("./16.js");
var f = require("./229.js");
var h = require("./107.js");
var m = 0;
var v = [];
var y = [];
var g = {
  Mixin: {
    _reconcilerInstantiateChildren: function (e, t, n) {
      return f.instantiateChildren(e, t, n);
    },
    _reconcilerUpdateChildren: function (e, t, n, r) {
      var o;
      o = h(t);
      return f.updateChildren(e, o, n, r);
    },
    mountChildren: function (e, t, n) {
      var r = this._reconcilerInstantiateChildren(e, t, n);
      this._renderedChildren = r;
      var o = [];
      var a = 0;
      for (var i in r) {
        if (r.hasOwnProperty(i)) {
          var s = r[i];
          var u = this._rootNodeID + i;
          var l = d.mountComponent(s, u, t, n);
          s._mountIndex = a++;
          o.push(l);
        }
      }
      return o;
    },
    updateTextContent: function (e) {
      m++;
      var t = true;
      try {
        var n = this._renderedChildren;
        f.unmountChildren(n);
        for (var r in n) {
          if (n.hasOwnProperty(r)) {
            this._unmountChild(n[r]);
          }
        }
        this.setTextContent(e);
        t = false;
      } finally {
        m--;
        if (!m) {
          if (t) {
            l();
          } else {
            u();
          }
        }
      }
    },
    updateMarkup: function (e) {
      m++;
      var t = true;
      try {
        var n = this._renderedChildren;
        f.unmountChildren(n);
        for (var r in n) {
          if (n.hasOwnProperty(r)) {
            this._unmountChildByName(n[r], r);
          }
        }
        this.setMarkup(e);
        t = false;
      } finally {
        m--;
        if (!m) {
          if (t) {
            l();
          } else {
            u();
          }
        }
      }
    },
    updateChildren: function (e, t, n) {
      m++;
      var r = true;
      try {
        this._updateChildren(e, t, n);
        r = false;
      } finally {
        m--;
        if (!m) {
          if (r) {
            l();
          } else {
            u();
          }
        }
      }
    },
    _updateChildren: function (e, t, n) {
      var r = this._renderedChildren;
      var o = this._reconcilerUpdateChildren(r, e, t, n);
      this._renderedChildren = o;
      if (o || r) {
        var a;
        var i = 0;
        var s = 0;
        for (a in o) {
          if (o.hasOwnProperty(a)) {
            var u = r && r[a];
            var l = o[a];
            if (u === l) {
              this.moveChild(u, s, i);
              i = Math.max(u._mountIndex, i);
              u._mountIndex = s;
            } else {
              if (u) {
                i = Math.max(u._mountIndex, i);
                this._unmountChild(u);
              }
              this._mountChildByNameAtIndex(l, a, s, t, n);
            }
            s++;
          }
        }
        for (a in r) {
          if (!!r.hasOwnProperty(a) && (!o || !o.hasOwnProperty(a))) {
            this._unmountChild(r[a]);
          }
        }
      }
    },
    unmountChildren: function () {
      var e = this._renderedChildren;
      f.unmountChildren(e);
      this._renderedChildren = null;
    },
    moveChild: function (e, t, n) {
      if (e._mountIndex < n) {
        o(this._rootNodeID, e._mountIndex, t);
      }
    },
    createChild: function (e, t) {
      r(this._rootNodeID, t, e._mountIndex);
    },
    removeChild: function (e) {
      a(this._rootNodeID, e._mountIndex);
    },
    setTextContent: function (e) {
      s(this._rootNodeID, e);
    },
    setMarkup: function (e) {
      i(this._rootNodeID, e);
    },
    _mountChildByNameAtIndex: function (e, t, n, r, o) {
      var a = this._rootNodeID + t;
      var i = d.mountComponent(e, a, r, o);
      e._mountIndex = n;
      this.createChild(e, i);
    },
    _unmountChild: function (e) {
      this.removeChild(e);
      e._mountIndex = null;
    }
  }
};
module.exports = g;