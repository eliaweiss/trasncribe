var r = require("./85.js");
var o = require("./87.js");
var a = require("./86.js");
var i = require("./233.js");
var s = require("./8.js");
require("./94.js");
var u = require("./103.js");
var l = require("./53.js");
var c = require("./3.js");
var p = require("./111.js");
var d = s.createElement;
var f = s.createFactory;
var h = s.cloneElement;
var m = {
  Children: {
    map: r.map,
    forEach: r.forEach,
    count: r.count,
    toArray: r.toArray,
    only: p
  },
  Component: o,
  createElement: d,
  cloneElement: h,
  isValidElement: s.isValidElement,
  PropTypes: u,
  createClass: a.createClass,
  createFactory: f,
  createMixin: function (e) {
    return e;
  },
  DOM: i,
  version: l,
  __spread: c
};
module.exports = m;