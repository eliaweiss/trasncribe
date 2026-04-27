/*!
 * Bootstrap without jQuery v0.6.1 for Bootstrap 3
 * By Daniel Davis under MIT License
 * https://github.com/tagawa/bootstrap-without-jquery
 */
module.exports = function () {
  "use strict";

  function e() {
    var e;
    var t = document.createElement("div");
    var n = {
      transition: "transitionend",
      OTransition: "otransitionend",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (e in n) {
      if (n.hasOwnProperty(e) && t.style[e] !== undefined) {
        return n[e];
      }
    }
    return false;
  }
  function t(e) {
    var t = {};
    e = e || window.event;
    t.evTarget = e.currentTarget || e.srcElement;
    var n = t.evTarget.getAttribute("data-target");
    t.dataTarget = !!n && document.querySelector(n);
    return t;
  }
  function n(e) {
    var t = e.style.height;
    e.style.height = "auto";
    var n = getComputedStyle(e).height;
    e.style.height = t;
    e.offsetHeight;
    return n;
  }
  function r(e, t) {
    if (document.createEvent) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, true, false);
      e.dispatchEvent(n);
    } else {
      e.fireEvent("on" + t);
    }
  }
  function o(e, t) {
    e.classList.remove("collapse");
    e.classList.add("collapsing");
    t.classList.remove("collapsed");
    t.setAttribute("aria-expanded", true);
    e.style.height = n(e);
    if (p) {
      e.addEventListener(p, function () {
        i(e);
      }, false);
    } else {
      i(e);
    }
  }
  function a(e, t) {
    e.classList.remove("collapse");
    e.classList.remove("in");
    e.classList.add("collapsing");
    t.classList.add("collapsed");
    t.setAttribute("aria-expanded", false);
    e.style.height = getComputedStyle(e).height;
    e.offsetHeight;
    e.style.height = "0px";
  }
  function i(e) {
    e.classList.remove("collapsing");
    e.classList.add("collapse");
    e.setAttribute("aria-expanded", false);
    if (e.style.height !== "0px") {
      e.classList.add("in");
      e.style.height = "auto";
    }
  }
  function s(e) {
    e.preventDefault();
    var n = t(e);
    var r = n.dataTarget;
    if (r.classList.contains("in")) {
      a(r, n.evTarget);
    } else {
      o(r, n.evTarget);
    }
    return false;
  }
  function u(e) {
    function n() {
      try {
        a.parentNode.removeChild(a);
        r(a, "closed.bs.alert");
      } catch (e) {
        window.console.error("Unable to remove alert");
      }
    }
    e.preventDefault();
    var o = t(e);
    var a = o.dataTarget;
    if (!a) {
      var i = o.evTarget.parentNode;
      if (i.classList.contains("alert")) {
        a = i;
      } else if (i.parentNode.classList.contains("alert")) {
        a = i.parentNode;
      }
    }
    r(a, "close.bs.alert");
    a.classList.remove("in");
    if (p && a.classList.contains("fade")) {
      a.addEventListener(p, function () {
        n();
      }, false);
    } else {
      n();
    }
    return false;
  }
  function l(e) {
    e = e || window.event;
    var t = e.currentTarget || e.srcElement;
    t.parentElement.classList.toggle("open");
    return false;
  }
  function c(e) {
    e = e || window.event;
    var t = e.currentTarget || e.srcElement;
    t.parentElement.classList.remove("open");
    if (e.relatedTarget && e.relatedTarget.getAttribute("data-toggle") !== "dropdown") {
      e.relatedTarget.click();
    }
    return false;
  }
  var p = e();
  var d = document.querySelectorAll("[data-toggle=collapse]");
  for (var f = 0, h = d.length; f < h; f++) {
    d[f].onclick = s;
  }
  var m = document.querySelectorAll("[data-dismiss=alert]");
  for (var v = 0, y = m.length; v < y; v++) {
    m[v].onclick = u;
  }
  var g;
  var b = document.querySelectorAll("[data-toggle=dropdown]");
  for (var E = 0, w = b.length; E < w; E++) {
    g = b[E];
    g.setAttribute("tabindex", "0");
    g.onclick = l;
    g.onblur = c;
  }
};