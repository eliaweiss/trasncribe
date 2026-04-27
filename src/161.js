function n(e, t) {
  if (e.indexOf) {
    return e.indexOf(t);
  }
  for (var n = 0, r = e.length; n < r; n++) {
    if (e[n] === t) {
      return n;
    }
  }
  return -1;
}
function r(e) {
  if (!(this instanceof r)) {
    return new r(e);
  }
  e ||= {};
  if (e.nodeType) {
    e = {
      el: e
    };
  }
  this.opts = e;
  this.el = e.el || document.body;
  if (typeof this.el != "object") {
    this.el = document.querySelector(this.el);
  }
}
module.exports = function (e) {
  return new r(e);
};
r.prototype.add = function (e) {
  var t = this.el;
  if (t) {
    if (t.className === "") {
      return t.className = e;
    }
    var r = t.className.split(" ");
    if (n(r, e) > -1) {
      return r;
    } else {
      r.push(e);
      t.className = r.join(" ");
      return r;
    }
  }
};
r.prototype.remove = function (e) {
  var t = this.el;
  if (t && t.className !== "") {
    var r = t.className.split(" ");
    var o = n(r, e);
    if (o > -1) {
      r.splice(o, 1);
    }
    t.className = r.join(" ");
    return r;
  }
};
r.prototype.has = function (e) {
  var t = this.el;
  if (t) {
    var r = t.className.split(" ");
    return n(r, e) > -1;
  }
};
r.prototype.toggle = function (e) {
  var t = this.el;
  if (t) {
    if (this.has(e)) {
      this.remove(e);
    } else {
      this.add(e);
    }
  }
};