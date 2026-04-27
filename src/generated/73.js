function r(e) {
  if (i) {
    undefined;
  } else {
    a(false);
  }
  if (!d.hasOwnProperty(e)) {
    e = "*";
  }
  if (!s.hasOwnProperty(e)) {
    if (e === "*") {
      i.innerHTML = "<link />";
    } else {
      i.innerHTML = "<" + e + "></" + e + ">";
    }
    s[e] = !i.firstChild;
  }
  if (s[e]) {
    return d[e];
  } else {
    return null;
  }
}
var o = require("./5.js");
var a = require("./1.js");
var i = o.canUseDOM ? document.createElement("div") : null;
var s = {};
var u = [1, "<select multiple=\"true\">", "</select>"];
var l = [1, "<table>", "</table>"];
var c = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
var p = [1, "<svg xmlns=\"http://www.w3.org/2000/svg\">", "</svg>"];
var d = {
  "*": [1, "?<div>", "</div>"],
  area: [1, "<map>", "</map>"],
  col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
  legend: [1, "<fieldset>", "</fieldset>"],
  param: [1, "<object>", "</object>"],
  tr: [2, "<table><tbody>", "</tbody></table>"],
  optgroup: u,
  option: u,
  caption: l,
  colgroup: l,
  tbody: l,
  tfoot: l,
  thead: l,
  td: c,
  th: c
};
var f = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
f.forEach(function (e) {
  d[e] = p;
  s[e] = true;
});
module.exports = r;