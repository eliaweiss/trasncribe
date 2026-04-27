(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/generated/13.js
  var require__ = __commonJS({
    "src/generated/13.js"(exports, module) {
      var n = {
        current: null
      };
      module.exports = n;
    }
  });

  // src/generated/5.js
  var require__2 = __commonJS({
    "src/generated/5.js"(exports, module) {
      var n = typeof window != "undefined" && !!window.document && !!window.document.createElement;
      var r = {
        canUseDOM: n,
        canUseWorkers: typeof Worker != "undefined",
        canUseEventListeners: n && (!!window.addEventListener || !!window.attachEvent),
        canUseViewport: n && !!window.screen,
        isInWorker: !n
      };
      module.exports = r;
    }
  });

  // src/generated/1.js
  var require__3 = __commonJS({
    "src/generated/1.js"(exports, module) {
      function r(e2, t, n, r2, o, a, i, s) {
        if (!e2) {
          var u;
          if (t === void 0) {
            u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          } else {
            var l = [n, r2, o, a, i, s];
            var c = 0;
            u = new Error(t.replace(/%s/g, function() {
              return l[c++];
            }));
            u.name = "Invariant Violation";
          }
          u.framesToPop = 1;
          throw u;
        }
      }
      module.exports = r;
    }
  });

  // src/generated/176.js
  var require__4 = __commonJS({
    "src/generated/176.js"(exports, module) {
      function r(e2) {
        var t = e2.length;
        if (Array.isArray(e2) || typeof e2 != "object" && typeof e2 != "function") {
          o(false);
        } else {
        }
        if (typeof t != "number") {
          o(false);
        } else {
        }
        if (t === 0 || t - 1 in e2) {
        } else {
          o(false);
        }
        if (e2.hasOwnProperty) {
          try {
            return Array.prototype.slice.call(e2);
          } catch (e3) {
          }
        }
        var n = Array(t);
        for (var r2 = 0; r2 < t; r2++) {
          n[r2] = e2[r2];
        }
        return n;
      }
      var o = require__3();
      module.exports = r;
    }
  });

  // src/generated/167.js
  var require__5 = __commonJS({
    "src/generated/167.js"(exports, module) {
      function r(e2) {
        return !!e2 && (typeof e2 == "object" || typeof e2 == "function") && "length" in e2 && !("setInterval" in e2) && typeof e2.nodeType != "number" && (Array.isArray(e2) || "callee" in e2 || "item" in e2);
      }
      function o(e2) {
        if (r(e2)) {
          if (Array.isArray(e2)) {
            return e2.slice();
          } else {
            return a(e2);
          }
        } else {
          return [e2];
        }
      }
      var a = require__4();
      module.exports = o;
    }
  });

  // src/generated/73.js
  var require__6 = __commonJS({
    "src/generated/73.js"(exports, module) {
      function r(e2) {
        if (i) {
        } else {
          a(false);
        }
        if (!d.hasOwnProperty(e2)) {
          e2 = "*";
        }
        if (!s.hasOwnProperty(e2)) {
          if (e2 === "*") {
            i.innerHTML = "<link />";
          } else {
            i.innerHTML = "<" + e2 + "></" + e2 + ">";
          }
          s[e2] = !i.firstChild;
        }
        if (s[e2]) {
          return d[e2];
        } else {
          return null;
        }
      }
      var o = require__2();
      var a = require__3();
      var i = o.canUseDOM ? document.createElement("div") : null;
      var s = {};
      var u = [1, '<select multiple="true">', "</select>"];
      var l = [1, "<table>", "</table>"];
      var c = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
      var p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"];
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
      f.forEach(function(e2) {
        d[e2] = p;
        s[e2] = true;
      });
      module.exports = r;
    }
  });

  // src/generated/168.js
  var require__7 = __commonJS({
    "src/generated/168.js"(exports, module) {
      function r(e2) {
        var t = e2.match(c);
        return t && t[1].toLowerCase();
      }
      function o(e2, t) {
        var n = l;
        if (l) {
        } else {
          u(false);
        }
        var o2 = r(e2);
        var a2 = o2 && s(o2);
        if (a2) {
          n.innerHTML = a2[1] + e2 + a2[2];
          for (var c2 = a2[0]; c2--; ) {
            n = n.lastChild;
          }
        } else {
          n.innerHTML = e2;
        }
        var p = n.getElementsByTagName("script");
        if (p.length) {
          if (t) {
          } else {
            u(false);
          }
          i(p).forEach(t);
        }
        var d = i(n.childNodes);
        while (n.lastChild) {
          n.removeChild(n.lastChild);
        }
        return d;
      }
      var a = require__2();
      var i = require__5();
      var s = require__6();
      var u = require__3();
      var l = a.canUseDOM ? document.createElement("div") : null;
      var c = /^\s*<(\w+)/;
      module.exports = o;
    }
  });

  // src/generated/9.js
  var require__8 = __commonJS({
    "src/generated/9.js"(exports, module) {
      function n(e2) {
        return function() {
          return e2;
        };
      }
      function r() {
      }
      r.thatReturns = n;
      r.thatReturnsFalse = n(false);
      r.thatReturnsTrue = n(true);
      r.thatReturnsNull = n(null);
      r.thatReturnsThis = function() {
        return this;
      };
      r.thatReturnsArgument = function(e2) {
        return e2;
      };
      module.exports = r;
    }
  });

  // src/generated/220.js
  var require__9 = __commonJS({
    "src/generated/220.js"(exports, module) {
      function r(e2) {
        return e2.substring(1, e2.indexOf(" "));
      }
      var o = require__2();
      var a = require__7();
      var i = require__8();
      var s = require__6();
      var u = require__3();
      var l = /^(<[^ \/>]+)/;
      var c = "data-danger-index";
      var p = {
        dangerouslyRenderMarkup: function(e2) {
          if (o.canUseDOM) {
          } else {
            u(false);
          }
          var t;
          var n = {};
          for (var p2 = 0; p2 < e2.length; p2++) {
            if (e2[p2]) {
            } else {
              u(false);
            }
            t = r(e2[p2]);
            t = s(t) ? t : "*";
            n[t] = n[t] || [];
            n[t][p2] = e2[p2];
          }
          var d = [];
          var f = 0;
          for (t in n) {
            if (n.hasOwnProperty(t)) {
              var h;
              var m = n[t];
              for (h in m) {
                if (m.hasOwnProperty(h)) {
                  var v = m[h];
                  m[h] = v.replace(l, "$1 " + c + '="' + h + '" ');
                }
              }
              for (var y = a(m.join(""), i), g = 0; g < y.length; ++g) {
                var b = y[g];
                if (b.hasAttribute && b.hasAttribute(c)) {
                  h = +b.getAttribute(c);
                  b.removeAttribute(c);
                  if (d.hasOwnProperty(h)) {
                    u(false);
                  } else {
                  }
                  d[h] = b;
                  f += 1;
                }
              }
            }
          }
          if (f !== d.length) {
            u(false);
          } else {
          }
          if (d.length !== e2.length) {
            u(false);
          } else {
          }
          return d;
        },
        dangerouslyReplaceNodeWithMarkup: function(e2, t) {
          if (o.canUseDOM) {
          } else {
            u(false);
          }
          if (t) {
          } else {
            u(false);
          }
          if (e2.tagName.toLowerCase() === "html") {
            u(false);
          } else {
          }
          var n;
          n = typeof t == "string" ? a(t, i)[0] : t;
          e2.parentNode.replaceChild(n, e2);
        }
      };
      module.exports = p;
    }
  });

  // src/generated/32.js
  var require__10 = __commonJS({
    "src/generated/32.js"(exports, module) {
      var r = require__3();
      function o(e2) {
        var t;
        var n = {};
        if (e2 instanceof Object && !Array.isArray(e2)) {
        } else {
          r(false);
        }
        for (t in e2) {
          if (e2.hasOwnProperty(t)) {
            n[t] = t;
          }
        }
        return n;
      }
      module.exports = o;
    }
  });

  // src/generated/100.js
  var require__11 = __commonJS({
    "src/generated/100.js"(exports, module) {
      var r = require__10();
      var o = r({
        INSERT_MARKUP: null,
        MOVE_EXISTING: null,
        REMOVE_NODE: null,
        SET_MARKUP: null,
        TEXT_CONTENT: null
      });
      module.exports = o;
    }
  });

  // src/generated/10.js
  var require__12 = __commonJS({
    "src/generated/10.js"(exports, module) {
      function r(e2, t, n) {
        return n;
      }
      var o = {
        enableMeasure: false,
        storedMeasure: r,
        measureMethods: function(e2, t, n) {
        },
        measure: function(e2, t, n) {
          return n;
        },
        injection: {
          injectMeasure: function(e2) {
            o.storedMeasure = e2;
          }
        }
      };
      module.exports = o;
    }
  });

  // src/generated/43.js
  var require__13 = __commonJS({
    "src/generated/43.js"(exports, module) {
      var r = require__2();
      var o = /^[ \r\n\t\f]/;
      var a = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
      function i(e2, t) {
        e2.innerHTML = t;
      }
      if (typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction) {
        i = function(e2, t) {
          MSApp.execUnsafeLocalFunction(function() {
            e2.innerHTML = t;
          });
        };
      }
      if (r.canUseDOM) {
        s = document.createElement("div");
        s.innerHTML = " ";
        if (s.innerHTML === "") {
          i = function(e2, t) {
            if (e2.parentNode) {
              e2.parentNode.replaceChild(e2, e2);
            }
            if (o.test(t) || t[0] === "<" && a.test(t)) {
              e2.innerHTML = String.fromCharCode(65279) + t;
              var n = e2.firstChild;
              if (n.data.length === 1) {
                e2.removeChild(n);
              } else {
                n.deleteData(0, 1);
              }
            } else {
              e2.innerHTML = t;
            }
          };
        }
      }
      var s;
      module.exports = i;
    }
  });

  // src/generated/42.js
  var require__14 = __commonJS({
    "src/generated/42.js"(exports, module) {
      function n(e2) {
        return o[e2];
      }
      function r(e2) {
        return ("" + e2).replace(a, n);
      }
      var o = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
      };
      var a = /[&><"']/g;
      module.exports = r;
    }
  });

  // src/generated/61.js
  var require__15 = __commonJS({
    "src/generated/61.js"(exports, module) {
      var r = require__2();
      var o = require__14();
      var a = require__13();
      function i(e2, t) {
        e2.textContent = t;
      }
      if (r.canUseDOM) {
        if (!("textContent" in document.documentElement)) {
          i = function(e2, t) {
            a(e2, o(t));
          };
        }
      }
      module.exports = i;
    }
  });

  // src/generated/83.js
  var require__16 = __commonJS({
    "src/generated/83.js"(exports, module) {
      function r(e2, t, n) {
        var r2 = n >= e2.childNodes.length ? null : e2.childNodes.item(n);
        e2.insertBefore(t, r2);
      }
      var o = require__9();
      var a = require__11();
      var i = require__12();
      var s = require__13();
      var u = require__15();
      var l = require__3();
      var c = {
        dangerouslyReplaceNodeWithMarkup: o.dangerouslyReplaceNodeWithMarkup,
        updateTextContent: u,
        processUpdates: function(e2, t) {
          var n;
          var i2 = null;
          var c2 = null;
          for (var p = 0; p < e2.length; p++) {
            n = e2[p];
            if (n.type === a.MOVE_EXISTING || n.type === a.REMOVE_NODE) {
              var d = n.fromIndex;
              var f = n.parentNode.childNodes[d];
              var h = n.parentID;
              if (f) {
              } else {
                l(false);
              }
              i2 = i2 || {};
              i2[h] = i2[h] || [];
              i2[h][d] = f;
              c2 = c2 || [];
              c2.push(f);
            }
          }
          var m;
          m = t.length && typeof t[0] == "string" ? o.dangerouslyRenderMarkup(t) : t;
          if (c2) {
            for (var v = 0; v < c2.length; v++) {
              c2[v].parentNode.removeChild(c2[v]);
            }
          }
          for (var y = 0; y < e2.length; y++) {
            n = e2[y];
            switch (n.type) {
              case a.INSERT_MARKUP:
                r(n.parentNode, m[n.markupIndex], n.toIndex);
                break;
              case a.MOVE_EXISTING:
                r(n.parentNode, i2[n.parentID][n.fromIndex], n.toIndex);
                break;
              case a.SET_MARKUP:
                s(n.parentNode, n.content);
                break;
              case a.TEXT_CONTENT:
                u(n.parentNode, n.content);
                break;
              case a.REMOVE_NODE:
            }
          }
        }
      };
      i.measureMethods(c, "DOMChildrenOperations", {
        updateTextContent: "updateTextContent"
      });
      module.exports = c;
    }
  });

  // src/generated/20.js
  var require__17 = __commonJS({
    "src/generated/20.js"(exports, module) {
      function r(e2, t) {
        return (e2 & t) === t;
      }
      var o = require__3();
      var a = {
        MUST_USE_ATTRIBUTE: 1,
        MUST_USE_PROPERTY: 2,
        HAS_SIDE_EFFECTS: 4,
        HAS_BOOLEAN_VALUE: 8,
        HAS_NUMERIC_VALUE: 16,
        HAS_POSITIVE_NUMERIC_VALUE: 48,
        HAS_OVERLOADED_BOOLEAN_VALUE: 64,
        injectDOMPropertyConfig: function(e2) {
          var t = a;
          var n = e2.Properties || {};
          var i2 = e2.DOMAttributeNamespaces || {};
          var u = e2.DOMAttributeNames || {};
          var l = e2.DOMPropertyNames || {};
          var c = e2.DOMMutationMethods || {};
          if (e2.isCustomAttribute) {
            s._isCustomAttributeFunctions.push(e2.isCustomAttribute);
          }
          for (var p in n) {
            if (s.properties.hasOwnProperty(p)) {
              o(false);
            } else {
            }
            var d = p.toLowerCase();
            var f = n[p];
            var h = {
              attributeName: d,
              attributeNamespace: null,
              propertyName: p,
              mutationMethod: null,
              mustUseAttribute: r(f, t.MUST_USE_ATTRIBUTE),
              mustUseProperty: r(f, t.MUST_USE_PROPERTY),
              hasSideEffects: r(f, t.HAS_SIDE_EFFECTS),
              hasBooleanValue: r(f, t.HAS_BOOLEAN_VALUE),
              hasNumericValue: r(f, t.HAS_NUMERIC_VALUE),
              hasPositiveNumericValue: r(f, t.HAS_POSITIVE_NUMERIC_VALUE),
              hasOverloadedBooleanValue: r(f, t.HAS_OVERLOADED_BOOLEAN_VALUE)
            };
            if (h.mustUseAttribute && h.mustUseProperty) {
              o(false);
            } else {
            }
            if (!h.mustUseProperty && h.hasSideEffects) {
              o(false);
            } else {
            }
            if (h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1) {
            } else {
              o(false);
            }
            if (u.hasOwnProperty(p)) {
              var m = u[p];
              h.attributeName = m;
            }
            if (i2.hasOwnProperty(p)) {
              h.attributeNamespace = i2[p];
            }
            if (l.hasOwnProperty(p)) {
              h.propertyName = l[p];
            }
            if (c.hasOwnProperty(p)) {
              h.mutationMethod = c[p];
            }
            s.properties[p] = h;
          }
        }
      };
      var i = {};
      var s = {
        ID_ATTRIBUTE_NAME: "data-reactid",
        properties: {},
        getPossibleStandardName: null,
        _isCustomAttributeFunctions: [],
        isCustomAttribute: function(e2) {
          for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
            var n = s._isCustomAttributeFunctions[t];
            if (n(e2)) {
              return true;
            }
          }
          return false;
        },
        getDefaultValueForProperty: function(e2, t) {
          var n;
          var r2 = i[e2];
          if (!r2) {
            i[e2] = r2 = {};
          }
          if (!(t in r2)) {
            n = document.createElement(e2);
            r2[t] = n[t];
          }
          return r2[t];
        },
        injection: a
      };
      module.exports = s;
    }
  });

  // src/generated/269.js
  var require__18 = __commonJS({
    "src/generated/269.js"(exports, module) {
      function r(e2) {
        return '"' + o(e2) + '"';
      }
      var o = require__14();
      module.exports = r;
    }
  });

  // src/generated/4.js
  var require__19 = __commonJS({
    "src/generated/4.js"(exports, module) {
      var r = require__8();
      var o = r;
      module.exports = o;
    }
  });

  // src/generated/46.js
  var require__20 = __commonJS({
    "src/generated/46.js"(exports, module) {
      function r(e2) {
        return !!c.hasOwnProperty(e2) || !l.hasOwnProperty(e2) && (u.test(e2) ? (c[e2] = true, true) : (l[e2] = true, false));
      }
      function o(e2, t) {
        return t == null || e2.hasBooleanValue && !t || e2.hasNumericValue && isNaN(t) || e2.hasPositiveNumericValue && t < 1 || e2.hasOverloadedBooleanValue && t === false;
      }
      var a = require__17();
      var i = require__12();
      var s = require__18();
      require__19();
      var u = /^[a-zA-Z_][\w\.\-]*$/;
      var l = {};
      var c = {};
      var p = {
        createMarkupForID: function(e2) {
          return a.ID_ATTRIBUTE_NAME + "=" + s(e2);
        },
        setAttributeForID: function(e2, t) {
          e2.setAttribute(a.ID_ATTRIBUTE_NAME, t);
        },
        createMarkupForProperty: function(e2, t) {
          var n = a.properties.hasOwnProperty(e2) ? a.properties[e2] : null;
          if (n) {
            if (o(n, t)) {
              return "";
            }
            var r2 = n.attributeName;
            if (n.hasBooleanValue || n.hasOverloadedBooleanValue && t === true) {
              return r2 + '=""';
            } else {
              return r2 + "=" + s(t);
            }
          }
          if (a.isCustomAttribute(e2)) {
            if (t == null) {
              return "";
            } else {
              return e2 + "=" + s(t);
            }
          } else {
            return null;
          }
        },
        createMarkupForCustomAttribute: function(e2, t) {
          if (r(e2) && t != null) {
            return e2 + "=" + s(t);
          } else {
            return "";
          }
        },
        setValueForProperty: function(e2, t, n) {
          var r2 = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
          if (r2) {
            var i2 = r2.mutationMethod;
            if (i2) {
              i2(e2, n);
            } else if (o(r2, n)) {
              this.deleteValueForProperty(e2, t);
            } else if (r2.mustUseAttribute) {
              var s2 = r2.attributeName;
              var u2 = r2.attributeNamespace;
              if (u2) {
                e2.setAttributeNS(u2, s2, "" + n);
              } else if (r2.hasBooleanValue || r2.hasOverloadedBooleanValue && n === true) {
                e2.setAttribute(s2, "");
              } else {
                e2.setAttribute(s2, "" + n);
              }
            } else {
              var l2 = r2.propertyName;
              if (!r2.hasSideEffects || "" + e2[l2] != "" + n) {
                e2[l2] = n;
              }
            }
          } else if (a.isCustomAttribute(t)) {
            p.setValueForAttribute(e2, t, n);
          }
        },
        setValueForAttribute: function(e2, t, n) {
          if (r(t)) {
            if (n == null) {
              e2.removeAttribute(t);
            } else {
              e2.setAttribute(t, "" + n);
            }
          }
        },
        deleteValueForProperty: function(e2, t) {
          var n = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
          if (n) {
            var r2 = n.mutationMethod;
            if (r2) {
              r2(e2, void 0);
            } else if (n.mustUseAttribute) {
              e2.removeAttribute(n.attributeName);
            } else {
              var o2 = n.propertyName;
              var i2 = a.getDefaultValueForProperty(e2.nodeName, o2);
              if (!n.hasSideEffects || "" + e2[o2] !== i2) {
                e2[o2] = i2;
              }
            }
          } else if (a.isCustomAttribute(t)) {
            e2.removeAttribute(t);
          }
        }
      };
      i.measureMethods(p, "DOMPropertyOperations", {
        setValueForProperty: "setValueForProperty",
        setValueForAttribute: "setValueForAttribute",
        deleteValueForProperty: "deleteValueForProperty"
      });
      module.exports = p;
    }
  });

  // src/generated/12.js
  var require__21 = __commonJS({
    "src/generated/12.js"(exports, module) {
      var r = require__10();
      var o = r({
        bubbled: null,
        captured: null
      });
      var a = r({
        topAbort: null,
        topBlur: null,
        topCanPlay: null,
        topCanPlayThrough: null,
        topChange: null,
        topClick: null,
        topCompositionEnd: null,
        topCompositionStart: null,
        topCompositionUpdate: null,
        topContextMenu: null,
        topCopy: null,
        topCut: null,
        topDoubleClick: null,
        topDrag: null,
        topDragEnd: null,
        topDragEnter: null,
        topDragExit: null,
        topDragLeave: null,
        topDragOver: null,
        topDragStart: null,
        topDrop: null,
        topDurationChange: null,
        topEmptied: null,
        topEncrypted: null,
        topEnded: null,
        topError: null,
        topFocus: null,
        topInput: null,
        topKeyDown: null,
        topKeyPress: null,
        topKeyUp: null,
        topLoad: null,
        topLoadedData: null,
        topLoadedMetadata: null,
        topLoadStart: null,
        topMouseDown: null,
        topMouseMove: null,
        topMouseOut: null,
        topMouseOver: null,
        topMouseUp: null,
        topPaste: null,
        topPause: null,
        topPlay: null,
        topPlaying: null,
        topProgress: null,
        topRateChange: null,
        topReset: null,
        topScroll: null,
        topSeeked: null,
        topSeeking: null,
        topSelectionChange: null,
        topStalled: null,
        topSubmit: null,
        topSuspend: null,
        topTextInput: null,
        topTimeUpdate: null,
        topTouchCancel: null,
        topTouchEnd: null,
        topTouchMove: null,
        topTouchStart: null,
        topVolumeChange: null,
        topWaiting: null,
        topWheel: null
      });
      var i = {
        topLevelTypes: a,
        PropagationPhases: o
      };
      module.exports = i;
    }
  });

  // src/generated/84.js
  var require__22 = __commonJS({
    "src/generated/84.js"(exports, module) {
      function r() {
        if (s) {
          for (var e2 in u) {
            var t = u[e2];
            var n = s.indexOf(e2);
            if (n > -1) {
            } else {
              i(false);
            }
            if (!l.plugins[n]) {
              if (t.extractEvents) {
              } else {
                i(false);
              }
              l.plugins[n] = t;
              var r2 = t.eventTypes;
              for (var a2 in r2) {
                if (o(r2[a2], t, a2)) {
                } else {
                  i(false);
                }
              }
            }
          }
        }
      }
      function o(e2, t, n) {
        if (l.eventNameDispatchConfigs.hasOwnProperty(n)) {
          i(false);
        } else {
        }
        l.eventNameDispatchConfigs[n] = e2;
        var r2 = e2.phasedRegistrationNames;
        if (r2) {
          for (var o2 in r2) {
            if (r2.hasOwnProperty(o2)) {
              var s2 = r2[o2];
              a(s2, t, n);
            }
          }
          return true;
        }
        return !!e2.registrationName && (a(e2.registrationName, t, n), true);
      }
      function a(e2, t, n) {
        if (l.registrationNameModules[e2]) {
          i(false);
        } else {
        }
        l.registrationNameModules[e2] = t;
        l.registrationNameDependencies[e2] = t.eventTypes[n].dependencies;
      }
      var i = require__3();
      var s = null;
      var u = {};
      var l = {
        plugins: [],
        eventNameDispatchConfigs: {},
        registrationNameModules: {},
        registrationNameDependencies: {},
        injectEventPluginOrder: function(e2) {
          if (s) {
            i(false);
          } else {
          }
          s = Array.prototype.slice.call(e2);
          r();
        },
        injectEventPluginsByName: function(e2) {
          var t = false;
          for (var n in e2) {
            if (e2.hasOwnProperty(n)) {
              var o2 = e2[n];
              if (!u.hasOwnProperty(n) || u[n] !== o2) {
                if (u[n]) {
                  i(false);
                } else {
                }
                u[n] = o2;
                t = true;
              }
            }
          }
          if (t) {
            r();
          }
        },
        getPluginModuleForEvent: function(e2) {
          var t = e2.dispatchConfig;
          if (t.registrationName) {
            return l.registrationNameModules[t.registrationName] || null;
          }
          for (var n in t.phasedRegistrationNames) {
            if (t.phasedRegistrationNames.hasOwnProperty(n)) {
              var r2 = l.registrationNameModules[t.phasedRegistrationNames[n]];
              if (r2) {
                return r2;
              }
            }
          }
          return null;
        },
        _resetEventPlugins: function() {
          s = null;
          for (var e2 in u) {
            if (u.hasOwnProperty(e2)) {
              delete u[e2];
            }
          }
          l.plugins.length = 0;
          var t = l.eventNameDispatchConfigs;
          for (var n in t) {
            if (t.hasOwnProperty(n)) {
              delete t[n];
            }
          }
          var r2 = l.registrationNameModules;
          for (var o2 in r2) {
            if (r2.hasOwnProperty(o2)) {
              delete r2[o2];
            }
          }
        }
      };
      module.exports = l;
    }
  });

  // src/generated/97.js
  var require__23 = __commonJS({
    "src/generated/97.js"(exports, module) {
      function r(e2, t, n, r2) {
        try {
          return t(n, r2);
        } catch (e3) {
          if (o === null) {
            o = e3;
          }
          return;
        }
      }
      var o = null;
      var a = {
        invokeGuardedCallback: r,
        invokeGuardedCallbackWithCatch: r,
        rethrowCaughtError: function() {
          if (o) {
            var e2 = o;
            o = null;
            throw e2;
          }
        }
      };
      module.exports = a;
    }
  });

  // src/generated/223.js
  var require__24 = __commonJS({
    "src/generated/223.js"(exports, module) {
      function r(e2) {
        return e2 === v.topMouseUp || e2 === v.topTouchEnd || e2 === v.topTouchCancel;
      }
      function o(e2) {
        return e2 === v.topMouseMove || e2 === v.topTouchMove;
      }
      function a(e2) {
        return e2 === v.topMouseDown || e2 === v.topTouchStart;
      }
      function i(e2, t, n, r2) {
        var o2 = e2.type || "unknown-event";
        e2.currentTarget = m.Mount.getNode(r2);
        if (t) {
          f.invokeGuardedCallbackWithCatch(o2, n, e2, r2);
        } else {
          f.invokeGuardedCallback(o2, n, e2, r2);
        }
        e2.currentTarget = null;
      }
      function s(e2, t) {
        var n = e2._dispatchListeners;
        var r2 = e2._dispatchIDs;
        if (Array.isArray(n)) {
          for (var o2 = 0; o2 < n.length && !e2.isPropagationStopped(); o2++) {
            i(e2, t, n[o2], r2[o2]);
          }
        } else if (n) {
          i(e2, t, n, r2);
        }
        e2._dispatchListeners = null;
        e2._dispatchIDs = null;
      }
      function u(e2) {
        var t = e2._dispatchListeners;
        var n = e2._dispatchIDs;
        if (Array.isArray(t)) {
          for (var r2 = 0; r2 < t.length && !e2.isPropagationStopped(); r2++) {
            if (t[r2](e2, n[r2])) {
              return n[r2];
            }
          }
        } else if (t && t(e2, n)) {
          return n;
        }
        return null;
      }
      function l(e2) {
        var t = u(e2);
        e2._dispatchIDs = null;
        e2._dispatchListeners = null;
        return t;
      }
      function c(e2) {
        var t = e2._dispatchListeners;
        var n = e2._dispatchIDs;
        if (Array.isArray(t)) {
          h(false);
        } else {
        }
        var r2 = t ? t(e2, n) : null;
        e2._dispatchListeners = null;
        e2._dispatchIDs = null;
        return r2;
      }
      function p(e2) {
        return !!e2._dispatchListeners;
      }
      var d = require__21();
      var f = require__23();
      var h = require__3();
      require__19();
      var m = {
        Mount: null,
        injectMount: function(e2) {
          m.Mount = e2;
        }
      };
      var v = d.topLevelTypes;
      var y = {
        isEndish: r,
        isMoveish: o,
        isStartish: a,
        executeDirectDispatch: c,
        executeDispatchesInOrder: s,
        executeDispatchesInOrderStopAtTrue: l,
        hasDispatches: p,
        getNode: function(e2) {
          return m.Mount.getNode(e2);
        },
        getID: function(e2) {
          return m.Mount.getID(e2);
        },
        injection: m
      };
      module.exports = y;
    }
  });

  // src/generated/106.js
  var require__25 = __commonJS({
    "src/generated/106.js"(exports, module) {
      function r(e2, t) {
        if (t == null) {
          o(false);
        } else {
        }
        if (e2 == null) {
          return t;
        }
        var n = Array.isArray(e2);
        var r2 = Array.isArray(t);
        if (n && r2) {
          e2.push.apply(e2, t);
          return e2;
        } else if (n) {
          e2.push(t);
          return e2;
        } else if (r2) {
          return [e2].concat(t);
        } else {
          return [e2, t];
        }
      }
      var o = require__3();
      module.exports = r;
    }
  });

  // src/generated/108.js
  var require__26 = __commonJS({
    "src/generated/108.js"(exports, module) {
      function n(e2, t, n2) {
        if (Array.isArray(e2)) {
          e2.forEach(t, n2);
        } else if (e2) {
          t.call(n2, e2);
        }
      }
      module.exports = n;
    }
  });

  // src/generated/25.js
  var require__27 = __commonJS({
    "src/generated/25.js"(exports, module) {
      var r = require__22();
      var o = require__24();
      var a = require__23();
      var i = require__25();
      var s = require__26();
      var u = require__3();
      require__19();
      var l = {};
      var c = null;
      function p(e2, t) {
        if (e2) {
          o.executeDispatchesInOrder(e2, t);
          if (!e2.isPersistent()) {
            e2.constructor.release(e2);
          }
        }
      }
      function d(e2) {
        return p(e2, true);
      }
      function f(e2) {
        return p(e2, false);
      }
      var h = null;
      var m = {
        injection: {
          injectMount: o.injection.injectMount,
          injectInstanceHandle: function(e2) {
            h = e2;
          },
          getInstanceHandle: function() {
            return h;
          },
          injectEventPluginOrder: r.injectEventPluginOrder,
          injectEventPluginsByName: r.injectEventPluginsByName
        },
        eventNameDispatchConfigs: r.eventNameDispatchConfigs,
        registrationNameModules: r.registrationNameModules,
        putListener: function(e2, t, n) {
          if (typeof n != "function") {
            u(false);
          } else {
          }
          var o2 = l[t] ||= {};
          o2[e2] = n;
          var a2 = r.registrationNameModules[t];
          if (a2 && a2.didPutListener) {
            a2.didPutListener(e2, t, n);
          }
        },
        getListener: function(e2, t) {
          var n = l[t];
          return n && n[e2];
        },
        deleteListener: function(e2, t) {
          var n = r.registrationNameModules[t];
          if (n && n.willDeleteListener) {
            n.willDeleteListener(e2, t);
          }
          var o2 = l[t];
          if (o2) {
            delete o2[e2];
          }
        },
        deleteAllListeners: function(e2) {
          for (var t in l) {
            if (l[t][e2]) {
              var n = r.registrationNameModules[t];
              if (n && n.willDeleteListener) {
                n.willDeleteListener(e2, t);
              }
              delete l[t][e2];
            }
          }
        },
        extractEvents: function(e2, t, n, o2, a2) {
          var s2;
          for (var u2 = r.plugins, l2 = 0; l2 < u2.length; l2++) {
            var c2 = u2[l2];
            if (c2) {
              var p2 = c2.extractEvents(e2, t, n, o2, a2);
              if (p2) {
                s2 = i(s2, p2);
              }
            }
          }
          return s2;
        },
        enqueueEvents: function(e2) {
          if (e2) {
            c = i(c, e2);
          }
        },
        processEventQueue: function(e2) {
          var t = c;
          c = null;
          if (e2) {
            s(t, d);
          } else {
            s(t, f);
          }
          if (c) {
            u(false);
          } else {
          }
          a.rethrowCaughtError();
        },
        __purge: function() {
          l = {};
        },
        __getListenerBank: function() {
          return l;
        }
      };
      module.exports = m;
    }
  });

  // src/generated/238.js
  var require__28 = __commonJS({
    "src/generated/238.js"(exports, module) {
      function r(e2) {
        o.enqueueEvents(e2);
        o.processEventQueue(false);
      }
      var o = require__27();
      var a = {
        handleTopLevel: function(e2, t, n, a2, i) {
          var s = o.extractEvents(e2, t, n, a2, i);
          r(s);
        }
      };
      module.exports = a;
    }
  });

  // src/generated/105.js
  var require__29 = __commonJS({
    "src/generated/105.js"(exports, module) {
      var n = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(e2) {
          n.currentScrollLeft = e2.x;
          n.currentScrollTop = e2.y;
        }
      };
      module.exports = n;
    }
  });

  // src/generated/3.js
  var require__30 = __commonJS({
    "src/generated/3.js"(exports, module) {
      function n(e2, t) {
        if (e2 == null) {
          throw new TypeError("Object.assign target cannot be null or undefined");
        }
        var n2 = Object(e2);
        var r = Object.prototype.hasOwnProperty;
        for (var o = 1; o < arguments.length; o++) {
          var a = arguments[o];
          if (a != null) {
            var i = Object(a);
            for (var s in i) {
              if (r.call(i, s)) {
                n2[s] = i[s];
              }
            }
          }
        }
        return n2;
      }
      module.exports = n;
    }
  });

  // src/generated/60.js
  var require__31 = __commonJS({
    "src/generated/60.js"(exports, module) {
      function r(e2, t) {
        if (!a.canUseDOM || t && !("addEventListener" in document)) {
          return false;
        }
        var n = "on" + e2;
        var r2 = n in document;
        if (!r2) {
          var i = document.createElement("div");
          i.setAttribute(n, "return;");
          r2 = typeof i[n] == "function";
        }
        if (!r2 && o && e2 === "wheel") {
          r2 = document.implementation.hasFeature("Events.wheel", "3.0");
        }
        return r2;
      }
      var o;
      var a = require__2();
      if (a.canUseDOM) {
        o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true;
      }
      module.exports = r;
    }
  });

  // src/generated/36.js
  var require__32 = __commonJS({
    "src/generated/36.js"(exports, module) {
      function r(e2) {
        if (!Object.prototype.hasOwnProperty.call(e2, v)) {
          e2[v] = h++;
          d[e2[v]] = {};
        }
        return d[e2[v]];
      }
      var o = require__21();
      var a = require__27();
      var i = require__22();
      var s = require__28();
      var u = require__12();
      var l = require__29();
      var c = require__30();
      var p = require__31();
      var d = {};
      var f = false;
      var h = 0;
      var m = {
        topAbort: "abort",
        topBlur: "blur",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topChange: "change",
        topClick: "click",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topScroll: "scroll",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topSelectionChange: "selectionchange",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTextInput: "textInput",
        topTimeUpdate: "timeupdate",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
        topWheel: "wheel"
      };
      var v = "_reactListenersID" + String(Math.random()).slice(2);
      var y = c({}, s, {
        ReactEventListener: null,
        injection: {
          injectReactEventListener: function(e2) {
            e2.setHandleTopLevel(y.handleTopLevel);
            y.ReactEventListener = e2;
          }
        },
        setEnabled: function(e2) {
          if (y.ReactEventListener) {
            y.ReactEventListener.setEnabled(e2);
          }
        },
        isEnabled: function() {
          return !!y.ReactEventListener && !!y.ReactEventListener.isEnabled();
        },
        listenTo: function(e2, t) {
          var n = t;
          var a2 = r(n);
          for (var s2 = i.registrationNameDependencies[e2], u2 = o.topLevelTypes, l2 = 0; l2 < s2.length; l2++) {
            var c2 = s2[l2];
            if (!a2.hasOwnProperty(c2) || !a2[c2]) {
              if (c2 === u2.topWheel) {
                if (p("wheel")) {
                  y.ReactEventListener.trapBubbledEvent(u2.topWheel, "wheel", n);
                } else if (p("mousewheel")) {
                  y.ReactEventListener.trapBubbledEvent(u2.topWheel, "mousewheel", n);
                } else {
                  y.ReactEventListener.trapBubbledEvent(u2.topWheel, "DOMMouseScroll", n);
                }
              } else if (c2 === u2.topScroll) {
                if (p("scroll", true)) {
                  y.ReactEventListener.trapCapturedEvent(u2.topScroll, "scroll", n);
                } else {
                  y.ReactEventListener.trapBubbledEvent(u2.topScroll, "scroll", y.ReactEventListener.WINDOW_HANDLE);
                }
              } else if (c2 === u2.topFocus || c2 === u2.topBlur) {
                if (p("focus", true)) {
                  y.ReactEventListener.trapCapturedEvent(u2.topFocus, "focus", n);
                  y.ReactEventListener.trapCapturedEvent(u2.topBlur, "blur", n);
                } else if (p("focusin")) {
                  y.ReactEventListener.trapBubbledEvent(u2.topFocus, "focusin", n);
                  y.ReactEventListener.trapBubbledEvent(u2.topBlur, "focusout", n);
                }
                a2[u2.topBlur] = true;
                a2[u2.topFocus] = true;
              } else if (m.hasOwnProperty(c2)) {
                y.ReactEventListener.trapBubbledEvent(c2, m[c2], n);
              }
              a2[c2] = true;
            }
          }
        },
        trapBubbledEvent: function(e2, t, n) {
          return y.ReactEventListener.trapBubbledEvent(e2, t, n);
        },
        trapCapturedEvent: function(e2, t, n) {
          return y.ReactEventListener.trapCapturedEvent(e2, t, n);
        },
        ensureScrollValueMonitoring: function() {
          if (!f) {
            var e2 = l.refreshScrollValues;
            y.ReactEventListener.monitorScrollValue(e2);
            f = true;
          }
        },
        eventNameDispatchConfigs: a.eventNameDispatchConfigs,
        registrationNameModules: a.registrationNameModules,
        putListener: a.putListener,
        getListener: a.getListener,
        deleteListener: a.deleteListener,
        deleteAllListeners: a.deleteAllListeners
      });
      u.measureMethods(y, "ReactBrowserEventEmitter", {
        putListener: "putListener",
        deleteListener: "deleteListener"
      });
      module.exports = y;
    }
  });

  // src/generated/88.js
  var require__33 = __commonJS({
    "src/generated/88.js"(exports, module) {
      var n = {
        useCreateElement: false
      };
      module.exports = n;
    }
  });

  // src/generated/41.js
  var require__34 = __commonJS({
    "src/generated/41.js"(exports, module) {
      var r = false;
      module.exports = r;
    }
  });

  // src/generated/8.js
  var require__35 = __commonJS({
    "src/generated/8.js"(exports, module) {
      var r = require__();
      var o = require__30();
      require__34();
      var a = typeof Symbol == "function" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103;
      var i = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function s(e2, t, n, r2, o2, i2, s2) {
        var u = {
          $$typeof: a,
          type: e2,
          key: t,
          ref: n,
          props: s2,
          _owner: i2
        };
        return u;
      }
      s.createElement = function(e2, t, n) {
        var o2;
        var a2 = {};
        var u = null;
        var l = null;
        var c = null;
        var p = null;
        if (t != null) {
          l = t.ref === void 0 ? null : t.ref;
          u = t.key === void 0 ? null : "" + t.key;
          c = t.__self === void 0 ? null : t.__self;
          p = t.__source === void 0 ? null : t.__source;
          for (o2 in t) {
            if (t.hasOwnProperty(o2) && !i.hasOwnProperty(o2)) {
              a2[o2] = t[o2];
            }
          }
        }
        var d = arguments.length - 2;
        if (d === 1) {
          a2.children = n;
        } else if (d > 1) {
          var f = Array(d);
          for (var h = 0; h < d; h++) {
            f[h] = arguments[h + 2];
          }
          a2.children = f;
        }
        if (e2 && e2.defaultProps) {
          var m = e2.defaultProps;
          for (o2 in m) {
            if (typeof a2[o2] == "undefined") {
              a2[o2] = m[o2];
            }
          }
        }
        return s(e2, u, l, c, p, r.current, a2);
      };
      s.createFactory = function(e2) {
        var t = s.createElement.bind(null, e2);
        t.type = e2;
        return t;
      };
      s.cloneAndReplaceKey = function(e2, t) {
        var n = s(e2.type, t, e2.ref, e2._self, e2._source, e2._owner, e2.props);
        return n;
      };
      s.cloneAndReplaceProps = function(e2, t) {
        var n = s(e2.type, e2.key, e2.ref, e2._self, e2._source, e2._owner, t);
        return n;
      };
      s.cloneElement = function(e2, t, n) {
        var a2;
        var u = o({}, e2.props);
        var l = e2.key;
        var c = e2.ref;
        var p = e2._self;
        var d = e2._source;
        var f = e2._owner;
        if (t != null) {
          if (t.ref !== void 0) {
            c = t.ref;
            f = r.current;
          }
          if (t.key !== void 0) {
            l = "" + t.key;
          }
          for (a2 in t) {
            if (t.hasOwnProperty(a2) && !i.hasOwnProperty(a2)) {
              u[a2] = t[a2];
            }
          }
        }
        var h = arguments.length - 2;
        if (h === 1) {
          u.children = n;
        } else if (h > 1) {
          var m = Array(h);
          for (var v = 0; v < h; v++) {
            m[v] = arguments[v + 2];
          }
          u.children = m;
        }
        return s(e2.type, l, c, p, d, f, u);
      };
      s.isValidElement = function(e2) {
        return typeof e2 == "object" && e2 !== null && e2.$$typeof === a;
      };
      module.exports = s;
    }
  });

  // src/generated/96.js
  var require__36 = __commonJS({
    "src/generated/96.js"(exports, module) {
      function n(e2) {
        return !!a[e2];
      }
      function r(e2) {
        a[e2] = true;
      }
      function o(e2) {
        delete a[e2];
      }
      var a = {};
      var i = {
        isNullComponentID: n,
        registerNullComponentID: r,
        deregisterNullComponentID: o
      };
      module.exports = i;
    }
  });

  // src/generated/104.js
  var require__37 = __commonJS({
    "src/generated/104.js"(exports, module) {
      var n = {
        injectCreateReactRootIndex: function(e2) {
          r.createReactRootIndex = e2;
        }
      };
      var r = {
        createReactRootIndex: null,
        injection: n
      };
      module.exports = r;
    }
  });

  // src/generated/21.js
  var require__38 = __commonJS({
    "src/generated/21.js"(exports, module) {
      function r(e2) {
        return f + e2.toString(36);
      }
      function o(e2, t) {
        return e2.charAt(t) === f || t === e2.length;
      }
      function a(e2) {
        return e2 === "" || e2.charAt(0) === f && e2.charAt(e2.length - 1) !== f;
      }
      function i(e2, t) {
        return t.indexOf(e2) === 0 && o(t, e2.length);
      }
      function s(e2) {
        if (e2) {
          return e2.substr(0, e2.lastIndexOf(f));
        } else {
          return "";
        }
      }
      function u(e2, t) {
        if (a(e2) && a(t)) {
        } else {
          d(false);
        }
        if (i(e2, t)) {
        } else {
          d(false);
        }
        if (e2 === t) {
          return e2;
        }
        var n;
        var r2 = e2.length + h;
        for (n = r2; n < t.length && !o(t, n); n++) ;
        return t.substr(0, n);
      }
      function l(e2, t) {
        var n = Math.min(e2.length, t.length);
        if (n === 0) {
          return "";
        }
        var r2 = 0;
        for (var i2 = 0; i2 <= n; i2++) {
          if (o(e2, i2) && o(t, i2)) {
            r2 = i2;
          } else if (e2.charAt(i2) !== t.charAt(i2)) {
            break;
          }
        }
        var s2 = e2.substr(0, r2);
        if (a(s2)) {
        } else {
          d(false);
        }
        return s2;
      }
      function c(e2, t, n, r2, o2, a2) {
        e2 = e2 || "";
        t = t || "";
        if (e2 === t) {
          d(false);
        } else {
        }
        var l2 = i(t, e2);
        if (l2 || i(e2, t)) {
        } else {
          d(false);
        }
        var c2 = 0;
        for (var p2 = l2 ? s : u, f2 = e2; ; f2 = p2(f2, t)) {
          var h2;
          if ((!o2 || f2 !== e2) && (!a2 || f2 !== t)) {
            h2 = n(f2, l2, r2);
          }
          if (h2 === false || f2 === t) {
            break;
          }
          if (c2++ < m) {
          } else {
            d(false);
          }
        }
      }
      var p = require__37();
      var d = require__3();
      var f = ".";
      var h = f.length;
      var m = 1e4;
      var v = {
        createReactRootID: function() {
          return r(p.createReactRootIndex());
        },
        createReactID: function(e2, t) {
          return e2 + t;
        },
        getReactRootIDFromNodeID: function(e2) {
          if (e2 && e2.charAt(0) === f && e2.length > 1) {
            var t = e2.indexOf(f, 1);
            if (t > -1) {
              return e2.substr(0, t);
            } else {
              return e2;
            }
          }
          return null;
        },
        traverseEnterLeave: function(e2, t, n, r2, o2) {
          var a2 = l(e2, t);
          if (a2 !== e2) {
            c(e2, a2, n, r2, false, true);
          }
          if (a2 !== t) {
            c(a2, t, n, o2, true, false);
          }
        },
        traverseTwoPhase: function(e2, t, n) {
          if (e2) {
            c("", e2, t, n, true, false);
            c(e2, "", t, n, false, true);
          }
        },
        traverseTwoPhaseSkipTarget: function(e2, t, n) {
          if (e2) {
            c("", e2, t, n, true, true);
            c(e2, "", t, n, true, true);
          }
        },
        traverseAncestors: function(e2, t, n) {
          c("", e2, t, n, true, false);
        },
        getFirstCommonAncestorID: l,
        _getNextDescendantID: u,
        isAncestorIDOf: i,
        SEPARATOR: f
      };
      module.exports = v;
    }
  });

  // src/generated/27.js
  var require__39 = __commonJS({
    "src/generated/27.js"(exports, module) {
      var n = {
        remove: function(e2) {
          e2._reactInternalInstance = void 0;
        },
        get: function(e2) {
          return e2._reactInternalInstance;
        },
        has: function(e2) {
          return e2._reactInternalInstance !== void 0;
        },
        set: function(e2, t) {
          e2._reactInternalInstance = t;
        }
      };
      module.exports = n;
    }
  });

  // src/generated/264.js
  var require__40 = __commonJS({
    "src/generated/264.js"(exports, module) {
      function n(e2) {
        var t = 1;
        var n2 = 0;
        for (var o = 0, a = e2.length, i = a & -4; o < i; ) {
          for (; o < Math.min(o + 4096, i); o += 4) {
            n2 += (t += e2.charCodeAt(o)) + (t += e2.charCodeAt(o + 1)) + (t += e2.charCodeAt(o + 2)) + (t += e2.charCodeAt(o + 3));
          }
          t %= r;
          n2 %= r;
        }
        for (; o < a; o++) {
          n2 += t += e2.charCodeAt(o);
        }
        t %= r;
        n2 %= r;
        return t | n2 << 16;
      }
      var r = 65521;
      module.exports = n;
    }
  });

  // src/generated/99.js
  var require__41 = __commonJS({
    "src/generated/99.js"(exports, module) {
      var r = require__40();
      var o = /\/?>/;
      var a = {
        CHECKSUM_ATTR_NAME: "data-react-checksum",
        addChecksumToMarkup: function(e2) {
          var t = r(e2);
          return e2.replace(o, " " + a.CHECKSUM_ATTR_NAME + '="' + t + '"$&');
        },
        canReuseMarkup: function(e2, t) {
          var n = t.getAttribute(a.CHECKSUM_ATTR_NAME);
          n = n && parseInt(n, 10);
          var o2 = r(e2);
          return o2 === n;
        }
      };
      module.exports = a;
    }
  });

  // src/generated/243.js
  var require__42 = __commonJS({
    "src/generated/243.js"(exports, module) {
      var r = require__3();
      var o = {
        isValidOwner: function(e2) {
          return !!e2 && typeof e2.attachRef == "function" && typeof e2.detachRef == "function";
        },
        addComponentAsRefTo: function(e2, t, n) {
          if (o.isValidOwner(n)) {
          } else {
            r(false);
          }
          n.attachRef(t, e2);
        },
        removeComponentAsRefFrom: function(e2, t, n) {
          if (o.isValidOwner(n)) {
          } else {
            r(false);
          }
          if (n.getPublicInstance().refs[t] === e2.getPublicInstance()) {
            n.detachRef(t);
          }
        }
      };
      module.exports = o;
    }
  });

  // src/generated/245.js
  var require__43 = __commonJS({
    "src/generated/245.js"(exports, module) {
      function r(e2, t, n) {
        if (typeof e2 == "function") {
          e2(t.getPublicInstance());
        } else {
          a.addComponentAsRefTo(t, e2, n);
        }
      }
      function o(e2, t, n) {
        if (typeof e2 == "function") {
          e2(null);
        } else {
          a.removeComponentAsRefFrom(t, e2, n);
        }
      }
      var a = require__42();
      var i = {};
      i.attachRefs = function(e2, t) {
        if (t !== null && t !== false) {
          var n = t.ref;
          if (n != null) {
            r(n, e2, t._owner);
          }
        }
      };
      i.shouldUpdateRefs = function(e2, t) {
        var n = e2 === null || e2 === false;
        var r2 = t === null || t === false;
        return n || r2 || t._owner !== e2._owner || t.ref !== e2.ref;
      };
      i.detachRefs = function(e2, t) {
        if (t !== null && t !== false) {
          var n = t.ref;
          if (n != null) {
            o(n, e2, t._owner);
          }
        }
      };
      module.exports = i;
    }
  });

  // src/generated/16.js
  var require__44 = __commonJS({
    "src/generated/16.js"(exports, module) {
      function r() {
        o.attachRefs(this, this._currentElement);
      }
      var o = require__43();
      var a = {
        mountComponent: function(e2, t, n, o2) {
          var a2 = e2.mountComponent(t, n, o2);
          if (e2._currentElement && e2._currentElement.ref != null) {
            n.getReactMountReady().enqueue(r, e2);
          }
          return a2;
        },
        unmountComponent: function(e2) {
          o.detachRefs(e2, e2._currentElement);
          e2.unmountComponent();
        },
        receiveComponent: function(e2, t, n, a2) {
          var i = e2._currentElement;
          if (t !== i || a2 !== e2._context) {
            var s = o.shouldUpdateRefs(i, t);
            if (s) {
              o.detachRefs(e2, i);
            }
            e2.receiveComponent(t, n, a2);
            if (s && e2._currentElement && e2._currentElement.ref != null) {
              n.getReactMountReady().enqueue(r, e2);
            }
          }
        },
        performUpdateIfNecessary: function(e2, t) {
          e2.performUpdateIfNecessary(t);
        }
      };
      module.exports = a;
    }
  });

  // src/generated/15.js
  var require__45 = __commonJS({
    "src/generated/15.js"(exports, module) {
      var r = require__3();
      function o(e2) {
        var t = this;
        if (t.instancePool.length) {
          var n = t.instancePool.pop();
          t.call(n, e2);
          return n;
        }
        return new t(e2);
      }
      function a(e2, t) {
        var n = this;
        if (n.instancePool.length) {
          var r2 = n.instancePool.pop();
          n.call(r2, e2, t);
          return r2;
        }
        return new n(e2, t);
      }
      function i(e2, t, n) {
        var r2 = this;
        if (r2.instancePool.length) {
          var o2 = r2.instancePool.pop();
          r2.call(o2, e2, t, n);
          return o2;
        }
        return new r2(e2, t, n);
      }
      function s(e2, t, n, r2) {
        var o2 = this;
        if (o2.instancePool.length) {
          var a2 = o2.instancePool.pop();
          o2.call(a2, e2, t, n, r2);
          return a2;
        }
        return new o2(e2, t, n, r2);
      }
      function u(e2, t, n, r2, o2) {
        var a2 = this;
        if (a2.instancePool.length) {
          var i2 = a2.instancePool.pop();
          a2.call(i2, e2, t, n, r2, o2);
          return i2;
        }
        return new a2(e2, t, n, r2, o2);
      }
      function l(e2) {
        var t = this;
        if (e2 instanceof t) {
        } else {
          r(false);
        }
        e2.destructor();
        if (t.instancePool.length < t.poolSize) {
          t.instancePool.push(e2);
        }
      }
      var c = 10;
      var p = o;
      function d(e2, t) {
        var n = e2;
        n.instancePool = [];
        n.getPooled = t || p;
        n.poolSize ||= c;
        n.release = l;
        return n;
      }
      var f = {
        addPoolingTo: d,
        oneArgumentPooler: o,
        twoArgumentPooler: a,
        threeArgumentPooler: i,
        fourArgumentPooler: s,
        fiveArgumentPooler: u
      };
      module.exports = f;
    }
  });

  // src/generated/45.js
  var require__46 = __commonJS({
    "src/generated/45.js"(exports, module) {
      function r() {
        this._callbacks = null;
        this._contexts = null;
      }
      var o = require__45();
      var a = require__30();
      var i = require__3();
      a(r.prototype, {
        enqueue: function(e2, t) {
          this._callbacks = this._callbacks || [];
          this._contexts = this._contexts || [];
          this._callbacks.push(e2);
          this._contexts.push(t);
        },
        notifyAll: function() {
          var e2 = this._callbacks;
          var t = this._contexts;
          if (e2) {
            if (e2.length !== t.length) {
              i(false);
            } else {
            }
            this._callbacks = null;
            this._contexts = null;
            for (var n = 0; n < e2.length; n++) {
              e2[n].call(t[n]);
            }
            e2.length = 0;
            t.length = 0;
          }
        },
        reset: function() {
          this._callbacks = null;
          this._contexts = null;
        },
        destructor: function() {
          this.reset();
        }
      });
      o.addPoolingTo(r);
      module.exports = r;
    }
  });

  // src/generated/40.js
  var require__47 = __commonJS({
    "src/generated/40.js"(exports, module) {
      var r = require__3();
      var o = {
        reinitializeTransaction: function() {
          this.transactionWrappers = this.getTransactionWrappers();
          if (this.wrapperInitData) {
            this.wrapperInitData.length = 0;
          } else {
            this.wrapperInitData = [];
          }
          this._isInTransaction = false;
        },
        _isInTransaction: false,
        getTransactionWrappers: null,
        isInTransaction: function() {
          return !!this._isInTransaction;
        },
        perform: function(e2, t, n, o2, a2, i, s, u) {
          if (this.isInTransaction()) {
            r(false);
          } else {
          }
          var l;
          var c;
          try {
            this._isInTransaction = true;
            l = true;
            this.initializeAll(0);
            c = e2.call(t, n, o2, a2, i, s, u);
            l = false;
          } finally {
            try {
              if (l) {
                try {
                  this.closeAll(0);
                } catch (e3) {
                }
              } else {
                this.closeAll(0);
              }
            } finally {
              this._isInTransaction = false;
            }
          }
          return c;
        },
        initializeAll: function(e2) {
          for (var t = this.transactionWrappers, n = e2; n < t.length; n++) {
            var r2 = t[n];
            try {
              this.wrapperInitData[n] = a.OBSERVED_ERROR;
              this.wrapperInitData[n] = r2.initialize ? r2.initialize.call(this) : null;
            } finally {
              if (this.wrapperInitData[n] === a.OBSERVED_ERROR) {
                try {
                  this.initializeAll(n + 1);
                } catch (e3) {
                }
              }
            }
          }
        },
        closeAll: function(e2) {
          if (this.isInTransaction()) {
          } else {
            r(false);
          }
          for (var t = this.transactionWrappers, n = e2; n < t.length; n++) {
            var o2;
            var i = t[n];
            var s = this.wrapperInitData[n];
            try {
              o2 = true;
              if (s !== a.OBSERVED_ERROR && i.close) {
                i.close.call(this, s);
              }
              o2 = false;
            } finally {
              if (o2) {
                try {
                  this.closeAll(n + 1);
                } catch (e3) {
                }
              }
            }
          }
          this.wrapperInitData.length = 0;
        }
      };
      var a = {
        Mixin: o,
        OBSERVED_ERROR: {}
      };
      module.exports = a;
    }
  });

  // src/generated/11.js
  var require__48 = __commonJS({
    "src/generated/11.js"(exports, module) {
      function r() {
        if (k.ReactReconcileTransaction && E) {
        } else {
          v(false);
        }
      }
      function o() {
        this.reinitializeTransaction();
        this.dirtyComponentsLength = null;
        this.callbackQueue = c.getPooled();
        this.reconcileTransaction = k.ReactReconcileTransaction.getPooled(false);
      }
      function a(e2, t, n, o2, a2, i2) {
        r();
        E.batchedUpdates(e2, t, n, o2, a2, i2);
      }
      function i(e2, t) {
        return e2._mountOrder - t._mountOrder;
      }
      function s(e2) {
        var t = e2.dirtyComponentsLength;
        if (t !== y.length) {
          v(false);
        } else {
        }
        y.sort(i);
        for (var n = 0; n < t; n++) {
          var r2 = y[n];
          var o2 = r2._pendingCallbacks;
          r2._pendingCallbacks = null;
          f.performUpdateIfNecessary(r2, e2.reconcileTransaction);
          if (o2) {
            for (var a2 = 0; a2 < o2.length; a2++) {
              e2.callbackQueue.enqueue(o2[a2], r2.getPublicInstance());
            }
          }
        }
      }
      function u(e2) {
        r();
        if (E.isBatchingUpdates) {
          y.push(e2);
          return;
        } else {
          E.batchedUpdates(u, e2);
          return;
        }
      }
      function l(e2, t) {
        if (E.isBatchingUpdates) {
        } else {
          v(false);
        }
        g.enqueue(e2, t);
        b = true;
      }
      var c = require__46();
      var p = require__45();
      var d = require__12();
      var f = require__44();
      var h = require__47();
      var m = require__30();
      var v = require__3();
      var y = [];
      var g = c.getPooled();
      var b = false;
      var E = null;
      var w = {
        initialize: function() {
          this.dirtyComponentsLength = y.length;
        },
        close: function() {
          if (this.dirtyComponentsLength !== y.length) {
            y.splice(0, this.dirtyComponentsLength);
            O();
          } else {
            y.length = 0;
          }
        }
      };
      var C = {
        initialize: function() {
          this.callbackQueue.reset();
        },
        close: function() {
          this.callbackQueue.notifyAll();
        }
      };
      var _ = [w, C];
      m(o.prototype, h.Mixin, {
        getTransactionWrappers: function() {
          return _;
        },
        destructor: function() {
          this.dirtyComponentsLength = null;
          c.release(this.callbackQueue);
          this.callbackQueue = null;
          k.ReactReconcileTransaction.release(this.reconcileTransaction);
          this.reconcileTransaction = null;
        },
        perform: function(e2, t, n) {
          return h.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e2, t, n);
        }
      });
      p.addPoolingTo(o);
      function O() {
        while (y.length || b) {
          if (y.length) {
            var e2 = o.getPooled();
            e2.perform(s, null, e2);
            o.release(e2);
          }
          if (b) {
            b = false;
            var t = g;
            g = c.getPooled();
            t.notifyAll();
            c.release(t);
          }
        }
      }
      O = d.measure("ReactUpdates", "flushBatchedUpdates", O);
      var P = {
        injectReconcileTransaction: function(e2) {
          if (e2) {
          } else {
            v(false);
          }
          k.ReactReconcileTransaction = e2;
        },
        injectBatchingStrategy: function(e2) {
          if (e2) {
          } else {
            v(false);
          }
          if (typeof e2.batchedUpdates != "function") {
            v(false);
          } else {
          }
          if (typeof e2.isBatchingUpdates != "boolean") {
            v(false);
          } else {
          }
          E = e2;
        }
      };
      var k = {
        ReactReconcileTransaction: null,
        batchedUpdates: a,
        enqueueUpdate: u,
        flushBatchedUpdates: O,
        injection: P,
        asap: l
      };
      module.exports = k;
    }
  });

  // src/generated/52.js
  var require__49 = __commonJS({
    "src/generated/52.js"(exports, module) {
      function r(e2) {
        s.enqueueUpdate(e2);
      }
      function o(e2, t) {
        var n = i.get(e2);
        if (n) {
          return n;
        } else {
          return null;
        }
      }
      require__();
      var a = require__35();
      var i = require__39();
      var s = require__48();
      var u = require__30();
      var l = require__3();
      require__19();
      var c = {
        isMounted: function(e2) {
          var t = i.get(e2);
          return !!t && !!t._renderedComponent;
        },
        enqueueCallback: function(e2, t) {
          if (typeof t != "function") {
            l(false);
          } else {
          }
          var n = o(e2);
          if (n) {
            if (n._pendingCallbacks) {
              n._pendingCallbacks.push(t);
            } else {
              n._pendingCallbacks = [t];
            }
            r(n);
            return;
          } else {
            return null;
          }
        },
        enqueueCallbackInternal: function(e2, t) {
          if (typeof t != "function") {
            l(false);
          } else {
          }
          if (e2._pendingCallbacks) {
            e2._pendingCallbacks.push(t);
          } else {
            e2._pendingCallbacks = [t];
          }
          r(e2);
        },
        enqueueForceUpdate: function(e2) {
          var t = o(e2, "forceUpdate");
          if (t) {
            t._pendingForceUpdate = true;
            r(t);
          }
        },
        enqueueReplaceState: function(e2, t) {
          var n = o(e2, "replaceState");
          if (n) {
            n._pendingStateQueue = [t];
            n._pendingReplaceState = true;
            r(n);
          }
        },
        enqueueSetState: function(e2, t) {
          var n = o(e2, "setState");
          if (n) {
            var a2 = n._pendingStateQueue ||= [];
            a2.push(t);
            r(n);
          }
        },
        enqueueSetProps: function(e2, t) {
          var n = o(e2, "setProps");
          if (n) {
            c.enqueueSetPropsInternal(n, t);
          }
        },
        enqueueSetPropsInternal: function(e2, t) {
          var n = e2._topLevelWrapper;
          if (n) {
          } else {
            l(false);
          }
          var o2 = n._pendingElement || n._currentElement;
          var i2 = o2.props;
          var s2 = u({}, i2.props, t);
          n._pendingElement = a.cloneAndReplaceProps(o2, a.cloneAndReplaceProps(i2, s2));
          r(n);
        },
        enqueueReplaceProps: function(e2, t) {
          var n = o(e2, "replaceProps");
          if (n) {
            c.enqueueReplacePropsInternal(n, t);
          }
        },
        enqueueReplacePropsInternal: function(e2, t) {
          var n = e2._topLevelWrapper;
          if (n) {
          } else {
            l(false);
          }
          var o2 = n._pendingElement || n._currentElement;
          var i2 = o2.props;
          n._pendingElement = a.cloneAndReplaceProps(o2, a.cloneAndReplaceProps(i2, t));
          r(n);
        },
        enqueueElementInternal: function(e2, t) {
          e2._pendingElement = t;
          r(e2);
        }
      };
      module.exports = c;
    }
  });

  // src/generated/24.js
  var require__50 = __commonJS({
    "src/generated/24.js"(exports, module) {
      var r = {};
      module.exports = r;
    }
  });

  // src/generated/172.js
  var require__51 = __commonJS({
    "src/generated/172.js"(exports, module) {
      function n(e2) {
        return !!e2 && !!(typeof Node == "function" ? e2 instanceof Node : typeof e2 == "object" && typeof e2.nodeType == "number" && typeof e2.nodeName == "string");
      }
      module.exports = n;
    }
  });

  // src/generated/173.js
  var require__52 = __commonJS({
    "src/generated/173.js"(exports, module) {
      function r(e2) {
        return o(e2) && e2.nodeType == 3;
      }
      var o = require__51();
      module.exports = r;
    }
  });

  // src/generated/70.js
  var require__53 = __commonJS({
    "src/generated/70.js"(exports, module) {
      function r(e2, t) {
        var n = true;
        e: while (n) {
          var r2 = e2;
          var a = t;
          n = false;
          if (r2 && a) {
            if (r2 === a) {
              return true;
            }
            if (o(r2)) {
              return false;
            }
            if (o(a)) {
              e2 = r2;
              t = a.parentNode;
              n = true;
              continue e;
            }
            if (r2.contains) {
              return r2.contains(a);
            } else {
              return !!r2.compareDocumentPosition && !!(r2.compareDocumentPosition(a) & 16);
            }
          }
          return false;
        }
      }
      var o = require__52();
      module.exports = r;
    }
  });

  // src/generated/49.js
  var require__54 = __commonJS({
    "src/generated/49.js"(exports, module) {
      var r = require__3();
      var o = false;
      var a = {
        unmountIDFromEnvironment: null,
        replaceNodeWithMarkupByID: null,
        processChildrenUpdates: null,
        injection: {
          injectEnvironment: function(e2) {
            if (o) {
              r(false);
            } else {
            }
            a.unmountIDFromEnvironment = e2.unmountIDFromEnvironment;
            a.replaceNodeWithMarkupByID = e2.replaceNodeWithMarkupByID;
            a.processChildrenUpdates = e2.processChildrenUpdates;
            o = true;
          }
        }
      };
      module.exports = a;
    }
  });

  // src/generated/38.js
  var require__55 = __commonJS({
    "src/generated/38.js"(exports, module) {
      var r = require__10();
      var o = r({
        prop: null,
        context: null,
        childContext: null
      });
      module.exports = o;
    }
  });

  // src/generated/37.js
  var require__56 = __commonJS({
    "src/generated/37.js"(exports, module) {
      var r = {};
      module.exports = r;
    }
  });

  // src/generated/62.js
  var require__57 = __commonJS({
    "src/generated/62.js"(exports, module) {
      function n(e2, t) {
        var n2 = e2 === null || e2 === false;
        var r = t === null || t === false;
        if (n2 || r) {
          return n2 === r;
        }
        var o = typeof e2;
        var a = typeof t;
        if (o === "string" || o === "number") {
          return a === "string" || a === "number";
        } else {
          return a === "object" && e2.type === t.type && e2.key === t.key;
        }
      }
      module.exports = n;
    }
  });

  // src/generated/230.js
  var require__58 = __commonJS({
    "src/generated/230.js"(exports, module) {
      function r(e2) {
        var t = e2._currentElement._owner || null;
        if (t) {
          var n = t.getName();
          if (n) {
            return " Check the render method of `" + n + "`.";
          }
        }
        return "";
      }
      function o(e2) {
      }
      var a = require__54();
      var i = require__();
      var s = require__35();
      var u = require__39();
      var l = require__12();
      var c = require__55();
      require__56();
      var p = require__44();
      var d = require__49();
      var f = require__30();
      var h = require__50();
      var m = require__3();
      var v = require__57();
      require__19();
      o.prototype.render = function() {
        var e2 = u.get(this)._currentElement.type;
        return e2(this.props, this.context, this.updater);
      };
      var y = 1;
      var g = {
        construct: function(e2) {
          this._currentElement = e2;
          this._rootNodeID = null;
          this._instance = null;
          this._pendingElement = null;
          this._pendingStateQueue = null;
          this._pendingReplaceState = false;
          this._pendingForceUpdate = false;
          this._renderedComponent = null;
          this._context = null;
          this._mountOrder = 0;
          this._topLevelWrapper = null;
          this._pendingCallbacks = null;
        },
        mountComponent: function(e2, t, n) {
          this._context = n;
          this._mountOrder = y++;
          this._rootNodeID = e2;
          var r2;
          var a2;
          var i2 = this._processProps(this._currentElement.props);
          var l2 = this._processContext(n);
          var c2 = this._currentElement.type;
          var f2 = "prototype" in c2;
          if (f2) {
            r2 = new c2(i2, l2, d);
          }
          if (!f2 || r2 === null || r2 === false || !!s.isValidElement(r2)) {
            a2 = r2;
            r2 = new o(c2);
          }
          r2.props = i2;
          r2.context = l2;
          r2.refs = h;
          r2.updater = d;
          this._instance = r2;
          u.set(r2, this);
          var v2 = r2.state;
          if (v2 === void 0) {
            r2.state = v2 = null;
          }
          if (typeof v2 != "object" || Array.isArray(v2)) {
            m(false);
          } else {
          }
          this._pendingStateQueue = null;
          this._pendingReplaceState = false;
          this._pendingForceUpdate = false;
          if (r2.componentWillMount) {
            r2.componentWillMount();
            if (this._pendingStateQueue) {
              r2.state = this._processPendingState(r2.props, r2.context);
            }
          }
          if (a2 === void 0) {
            a2 = this._renderValidatedComponent();
          }
          this._renderedComponent = this._instantiateReactComponent(a2);
          var g2 = p.mountComponent(this._renderedComponent, e2, t, this._processChildContext(n));
          if (r2.componentDidMount) {
            t.getReactMountReady().enqueue(r2.componentDidMount, r2);
          }
          return g2;
        },
        unmountComponent: function() {
          var e2 = this._instance;
          if (e2.componentWillUnmount) {
            e2.componentWillUnmount();
          }
          p.unmountComponent(this._renderedComponent);
          this._renderedComponent = null;
          this._instance = null;
          this._pendingStateQueue = null;
          this._pendingReplaceState = false;
          this._pendingForceUpdate = false;
          this._pendingCallbacks = null;
          this._pendingElement = null;
          this._context = null;
          this._rootNodeID = null;
          this._topLevelWrapper = null;
          u.remove(e2);
        },
        _maskContext: function(e2) {
          var t = null;
          var n = this._currentElement.type;
          var r2 = n.contextTypes;
          if (!r2) {
            return h;
          }
          t = {};
          for (var o2 in r2) {
            t[o2] = e2[o2];
          }
          return t;
        },
        _processContext: function(e2) {
          var t = this._maskContext(e2);
          return t;
        },
        _processChildContext: function(e2) {
          var t = this._currentElement.type;
          var n = this._instance;
          var r2 = n.getChildContext && n.getChildContext();
          if (r2) {
            if (typeof t.childContextTypes != "object") {
              m(false);
            } else {
            }
            for (var o2 in r2) {
              if (o2 in t.childContextTypes) {
              } else {
                m(false);
              }
            }
            return f({}, e2, r2);
          }
          return e2;
        },
        _processProps: function(e2) {
          return e2;
        },
        _checkPropTypes: function(e2, t, n) {
          var o2 = this.getName();
          for (var a2 in e2) {
            if (e2.hasOwnProperty(a2)) {
              var i2;
              try {
                if (typeof e2[a2] != "function") {
                  m(false);
                } else {
                }
                i2 = e2[a2](t, a2, o2, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (e3) {
                i2 = e3;
              }
              if (i2 instanceof Error) {
                r(this);
                n === c.prop;
              }
            }
          }
        },
        receiveComponent: function(e2, t, n) {
          var r2 = this._currentElement;
          var o2 = this._context;
          this._pendingElement = null;
          this.updateComponent(t, r2, e2, o2, n);
        },
        performUpdateIfNecessary: function(e2) {
          if (this._pendingElement != null) {
            p.receiveComponent(this, this._pendingElement || this._currentElement, e2, this._context);
          }
          if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
            this.updateComponent(e2, this._currentElement, this._currentElement, this._context, this._context);
          }
        },
        updateComponent: function(e2, t, n, r2, o2) {
          var a2;
          var i2 = this._instance;
          var s2 = this._context === o2 ? i2.context : this._processContext(o2);
          if (t === n) {
            a2 = n.props;
          } else {
            a2 = this._processProps(n.props);
            if (i2.componentWillReceiveProps) {
              i2.componentWillReceiveProps(a2, s2);
            }
          }
          var u2 = this._processPendingState(a2, s2);
          var l2 = this._pendingForceUpdate || !i2.shouldComponentUpdate || i2.shouldComponentUpdate(a2, u2, s2);
          if (l2) {
            this._pendingForceUpdate = false;
            this._performComponentUpdate(n, a2, u2, s2, e2, o2);
          } else {
            this._currentElement = n;
            this._context = o2;
            i2.props = a2;
            i2.state = u2;
            i2.context = s2;
          }
        },
        _processPendingState: function(e2, t) {
          var n = this._instance;
          var r2 = this._pendingStateQueue;
          var o2 = this._pendingReplaceState;
          this._pendingReplaceState = false;
          this._pendingStateQueue = null;
          if (!r2) {
            return n.state;
          }
          if (o2 && r2.length === 1) {
            return r2[0];
          }
          var a2 = f({}, o2 ? r2[0] : n.state);
          for (var i2 = o2 ? 1 : 0; i2 < r2.length; i2++) {
            var s2 = r2[i2];
            f(a2, typeof s2 == "function" ? s2.call(n, a2, e2, t) : s2);
          }
          return a2;
        },
        _performComponentUpdate: function(e2, t, n, r2, o2, a2) {
          var i2;
          var s2;
          var u2;
          var l2 = this._instance;
          var c2 = Boolean(l2.componentDidUpdate);
          if (c2) {
            i2 = l2.props;
            s2 = l2.state;
            u2 = l2.context;
          }
          if (l2.componentWillUpdate) {
            l2.componentWillUpdate(t, n, r2);
          }
          this._currentElement = e2;
          this._context = a2;
          l2.props = t;
          l2.state = n;
          l2.context = r2;
          this._updateRenderedComponent(o2, a2);
          if (c2) {
            o2.getReactMountReady().enqueue(l2.componentDidUpdate.bind(l2, i2, s2, u2), l2);
          }
        },
        _updateRenderedComponent: function(e2, t) {
          var n = this._renderedComponent;
          var r2 = n._currentElement;
          var o2 = this._renderValidatedComponent();
          if (v(r2, o2)) {
            p.receiveComponent(n, o2, e2, this._processChildContext(t));
          } else {
            var a2 = this._rootNodeID;
            var i2 = n._rootNodeID;
            p.unmountComponent(n);
            this._renderedComponent = this._instantiateReactComponent(o2);
            var s2 = p.mountComponent(this._renderedComponent, a2, e2, this._processChildContext(t));
            this._replaceNodeWithMarkupByID(i2, s2);
          }
        },
        _replaceNodeWithMarkupByID: function(e2, t) {
          a.replaceNodeWithMarkupByID(e2, t);
        },
        _renderValidatedComponentWithoutOwnerOrContext: function() {
          var e2 = this._instance;
          var t = e2.render();
          return t;
        },
        _renderValidatedComponent: function() {
          var e2;
          i.current = this;
          try {
            e2 = this._renderValidatedComponentWithoutOwnerOrContext();
          } finally {
            i.current = null;
          }
          if (e2 === null || e2 === false || s.isValidElement(e2)) {
          } else {
            m(false);
          }
          return e2;
        },
        attachRef: function(e2, t) {
          var n = this.getPublicInstance();
          if (n == null) {
            m(false);
          } else {
          }
          var r2 = t.getPublicInstance();
          var o2 = n.refs === h ? n.refs = {} : n.refs;
          o2[e2] = r2;
        },
        detachRef: function(e2) {
          var t = this.getPublicInstance().refs;
          delete t[e2];
        },
        getName: function() {
          var e2 = this._currentElement.type;
          var t = this._instance && this._instance.constructor;
          return e2.displayName || t && t.displayName || e2.name || t && t.name || null;
        },
        getPublicInstance: function() {
          var e2 = this._instance;
          if (e2 instanceof o) {
            return null;
          } else {
            return e2;
          }
        },
        _instantiateReactComponent: null
      };
      l.measureMethods(g, "ReactCompositeComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent",
        _renderValidatedComponent: "_renderValidatedComponent"
      });
      var b = {
        Mixin: g
      };
      module.exports = b;
    }
  });

  // src/generated/95.js
  var require__59 = __commonJS({
    "src/generated/95.js"(exports, module) {
      function r() {
        i.registerNullComponentID(this._rootNodeID);
      }
      var o;
      var a = require__35();
      var i = require__36();
      var s = require__44();
      var u = require__30();
      var l = {
        injectEmptyComponent: function(e2) {
          o = a.createElement(e2);
        }
      };
      function c(e2) {
        this._currentElement = null;
        this._rootNodeID = null;
        this._renderedComponent = e2(o);
      }
      u(c.prototype, {
        construct: function(e2) {
        },
        mountComponent: function(e2, t, n) {
          t.getReactMountReady().enqueue(r, this);
          this._rootNodeID = e2;
          return s.mountComponent(this._renderedComponent, e2, t, n);
        },
        receiveComponent: function() {
        },
        unmountComponent: function(e2, t, n) {
          s.unmountComponent(this._renderedComponent);
          i.deregisterNullComponentID(this._rootNodeID);
          this._rootNodeID = null;
          this._renderedComponent = null;
        }
      });
      c.injection = l;
      module.exports = c;
    }
  });

  // src/generated/101.js
  var require__60 = __commonJS({
    "src/generated/101.js"(exports, module) {
      function r(e2) {
        if (typeof e2.type == "function") {
          return e2.type;
        }
        var t = e2.type;
        var n = p[t];
        if (n == null) {
          p[t] = n = l(t);
        }
        return n;
      }
      function o(e2) {
        if (c) {
        } else {
          u(false);
        }
        return new c(e2.type, e2.props);
      }
      function a(e2) {
        return new d(e2);
      }
      function i(e2) {
        return e2 instanceof d;
      }
      var s = require__30();
      var u = require__3();
      var l = null;
      var c = null;
      var p = {};
      var d = null;
      var f = {
        injectGenericComponentClass: function(e2) {
          c = e2;
        },
        injectTextComponentClass: function(e2) {
          d = e2;
        },
        injectComponentClasses: function(e2) {
          s(p, e2);
        }
      };
      var h = {
        getComponentClassForElement: r,
        createInternalComponent: o,
        createInstanceForText: a,
        isTextComponent: i,
        injection: f
      };
      module.exports = h;
    }
  });

  // src/generated/59.js
  var require__61 = __commonJS({
    "src/generated/59.js"(exports, module) {
      function r(e2) {
        return typeof e2 == "function" && typeof e2.prototype != "undefined" && typeof e2.prototype.mountComponent == "function" && typeof e2.prototype.receiveComponent == "function";
      }
      function o(e2) {
        var t;
        if (e2 === null || e2 === false) {
          t = new i(o);
        } else if (typeof e2 == "object") {
          var n = e2;
          if (!n || typeof n.type != "function" && typeof n.type != "string") {
            l(false);
          } else {
          }
          t = typeof n.type == "string" ? s.createInternalComponent(n) : r(n.type) ? new n.type(n) : new c();
        } else if (typeof e2 == "string" || typeof e2 == "number") {
          t = s.createInstanceForText(e2);
        } else {
          l(false);
        }
        t.construct(e2);
        t._mountIndex = 0;
        t._mountImage = null;
        return t;
      }
      var a = require__58();
      var i = require__59();
      var s = require__60();
      var u = require__30();
      var l = require__3();
      require__19();
      function c() {
      }
      u(c.prototype, a.Mixin, {
        _instantiateReactComponent: o
      });
      module.exports = o;
    }
  });

  // src/generated/64.js
  var require__62 = __commonJS({
    "src/generated/64.js"(exports, module) {
      require__30();
      var r = require__8();
      require__19();
      var o = r;
      module.exports = o;
    }
  });

  // src/generated/7.js
  var require__63 = __commonJS({
    "src/generated/7.js"(exports, module) {
      function r(e2, t) {
        for (var n = Math.min(e2.length, t.length), r2 = 0; r2 < n; r2++) {
          if (e2.charAt(r2) !== t.charAt(r2)) {
            return r2;
          }
        }
        if (e2.length === t.length) {
          return -1;
        } else {
          return n;
        }
      }
      function o(e2) {
        if (e2) {
          if (e2.nodeType === W) {
            return e2.documentElement;
          } else {
            return e2.firstChild;
          }
        } else {
          return null;
        }
      }
      function a(e2) {
        var t = o(e2);
        return t && $2.getID(t);
      }
      function i(e2) {
        var t = s(e2);
        if (t) {
          if (B.hasOwnProperty(t)) {
            var n = B[t];
            if (n !== e2) {
              if (p(n, t)) {
                j(false);
              } else {
              }
              B[t] = e2;
            }
          } else {
            B[t] = e2;
          }
        }
        return t;
      }
      function s(e2) {
        return e2 && e2.getAttribute && e2.getAttribute(F) || "";
      }
      function u(e2, t) {
        var n = s(e2);
        if (n !== t) {
          delete B[n];
        }
        e2.setAttribute(F, t);
        B[t] = e2;
      }
      function l(e2) {
        if (!B.hasOwnProperty(e2) || !p(B[e2], e2)) {
          B[e2] = $2.findReactNodeByID(e2);
        }
        return B[e2];
      }
      function c(e2) {
        var t = k.get(e2)._rootNodeID;
        if (O.isNullComponentID(t)) {
          return null;
        } else {
          if (!B.hasOwnProperty(t) || !p(B[t], t)) {
            B[t] = $2.findReactNodeByID(t);
          }
          return B[t];
        }
      }
      function p(e2, t) {
        if (e2) {
          if (s(e2) !== t) {
            j(false);
          } else {
          }
          var n = $2.findReactContainerForID(t);
          if (n && A(n, e2)) {
            return true;
          }
        }
        return false;
      }
      function d(e2) {
        delete B[e2];
      }
      function f(e2) {
        var t = B[e2];
        return !!t && !!p(t, e2) && void (G = t);
      }
      function h(e2) {
        G = null;
        P.traverseAncestors(e2, f);
        var t = G;
        G = null;
        return t;
      }
      function m(e2, t, n, r2, o2, a2) {
        if (C.useCreateElement) {
          a2 = D({}, a2);
          if (n.nodeType === W) {
            a2[q] = n;
          } else {
            a2[q] = n.ownerDocument;
          }
        }
        var i2 = T.mountComponent(e2, t, r2, a2);
        e2._renderedComponent._topLevelWrapper = e2;
        $2._mountImageIntoNode(i2, n, o2, r2);
      }
      function v(e2, t, n, r2, o2) {
        var a2 = N.ReactReconcileTransaction.getPooled(r2);
        a2.perform(m, null, e2, t, n, a2, r2, o2);
        N.ReactReconcileTransaction.release(a2);
      }
      function y(e2, t) {
        T.unmountComponent(e2);
        if (t.nodeType === W) {
          t = t.documentElement;
        }
        while (t.lastChild) {
          t.removeChild(t.lastChild);
        }
      }
      function g(e2) {
        var t = a(e2);
        return !!t && t !== P.getReactRootIDFromNodeID(t);
      }
      function b(e2) {
        for (; e2 && e2.parentNode !== e2; e2 = e2.parentNode) {
          if (e2.nodeType === 1) {
            var t = s(e2);
            if (t) {
              var n;
              var r2 = P.getReactRootIDFromNodeID(t);
              var o2 = e2;
              do {
                n = s(o2);
                o2 = o2.parentNode;
                if (o2 == null) {
                  return null;
                }
              } while (n !== r2);
              if (o2 === z[r2]) {
                return e2;
              }
            }
          }
        }
        return null;
      }
      var E = require__17();
      var w = require__32();
      require__();
      var C = require__33();
      var _ = require__35();
      var O = require__36();
      var P = require__38();
      var k = require__39();
      var S = require__41();
      var x = require__12();
      var T = require__44();
      var M = require__49();
      var N = require__48();
      var D = require__30();
      var R = require__50();
      var A = require__53();
      var I = require__61();
      var j = require__3();
      var L = require__13();
      var U = require__57();
      require__62();
      require__19();
      var F = E.ID_ATTRIBUTE_NAME;
      var B = {};
      var V = 1;
      var W = 9;
      var H = 11;
      var q = "__ReactMount_ownerDocument$" + Math.random().toString(36).slice(2);
      var K = {};
      var z = {};
      var Y = [];
      var G = null;
      function X() {
      }
      X.prototype.isReactComponent = {};
      X.prototype.render = function() {
        return this.props;
      };
      var $2 = {
        TopLevelWrapper: X,
        _instancesByReactRootID: K,
        scrollMonitor: function(e2, t) {
          t();
        },
        _updateRootComponent: function(e2, t, n, r2) {
          $2.scrollMonitor(n, function() {
            M.enqueueElementInternal(e2, t);
            if (r2) {
              M.enqueueCallbackInternal(e2, r2);
            }
          });
          return e2;
        },
        _registerComponent: function(e2, t) {
          if (!t || t.nodeType !== V && t.nodeType !== W && t.nodeType !== H) {
            j(false);
          } else {
          }
          w.ensureScrollValueMonitoring();
          var n = $2.registerContainer(t);
          K[n] = e2;
          return n;
        },
        _renderNewRootComponent: function(e2, t, n, r2) {
          var o2 = I(e2, null);
          var a2 = $2._registerComponent(o2, t);
          N.batchedUpdates(v, o2, a2, t, n, r2);
          return o2;
        },
        renderSubtreeIntoContainer: function(e2, t, n, r2) {
          if (e2 == null || e2._reactInternalInstance == null) {
            j(false);
          } else {
          }
          return $2._renderSubtreeIntoContainer(e2, t, n, r2);
        },
        _renderSubtreeIntoContainer: function(e2, t, n, r2) {
          if (_.isValidElement(t)) {
          } else {
            j(false);
          }
          var i2 = new _(X, null, null, null, null, null, t);
          var u2 = K[a(n)];
          if (u2) {
            var l2 = u2._currentElement;
            var c2 = l2.props;
            if (U(c2, t)) {
              var p2 = u2._renderedComponent.getPublicInstance();
              var d2 = r2 && function() {
                r2.call(p2);
              };
              $2._updateRootComponent(u2, i2, n, d2);
              return p2;
            }
            $2.unmountComponentAtNode(n);
          }
          var f2 = o(n);
          var h2 = f2 && !!s(f2);
          var m2 = g(n);
          var v2 = h2 && !u2 && !m2;
          var y2 = $2._renderNewRootComponent(i2, n, v2, e2 != null ? e2._reactInternalInstance._processChildContext(e2._reactInternalInstance._context) : R)._renderedComponent.getPublicInstance();
          if (r2) {
            r2.call(y2);
          }
          return y2;
        },
        render: function(e2, t, n) {
          return $2._renderSubtreeIntoContainer(null, e2, t, n);
        },
        registerContainer: function(e2) {
          var t = a(e2);
          t &&= P.getReactRootIDFromNodeID(t);
          t ||= P.createReactRootID();
          z[t] = e2;
          return t;
        },
        unmountComponentAtNode: function(e2) {
          if (!e2 || e2.nodeType !== V && e2.nodeType !== W && e2.nodeType !== H) {
            j(false);
          } else {
          }
          var t = a(e2);
          var n = K[t];
          if (!n) {
            g(e2);
            var r2 = s(e2);
            if (r2) {
              r2 === P.getReactRootIDFromNodeID(r2);
            }
            return false;
          }
          N.batchedUpdates(y, n, e2);
          delete K[t];
          delete z[t];
          return true;
        },
        findReactContainerForID: function(e2) {
          var t = P.getReactRootIDFromNodeID(e2);
          var n = z[t];
          return n;
        },
        findReactNodeByID: function(e2) {
          var t = $2.findReactContainerForID(e2);
          return $2.findComponentRoot(t, e2);
        },
        getFirstReactDOM: function(e2) {
          return b(e2);
        },
        findComponentRoot: function(e2, t) {
          var n = Y;
          var r2 = 0;
          var o2 = h(t) || e2;
          n[0] = o2.firstChild;
          n.length = 1;
          while (r2 < n.length) {
            var a2;
            for (var i2 = n[r2++]; i2; ) {
              var s2 = $2.getID(i2);
              if (s2) {
                if (t === s2) {
                  a2 = i2;
                } else if (P.isAncestorIDOf(s2, t)) {
                  n.length = r2 = 0;
                  n.push(i2.firstChild);
                }
              } else {
                n.push(i2.firstChild);
              }
              i2 = i2.nextSibling;
            }
            if (a2) {
              n.length = 0;
              return a2;
            }
          }
          n.length = 0;
          j(false);
        },
        _mountImageIntoNode: function(e2, t, n, a2) {
          if (!t || t.nodeType !== V && t.nodeType !== W && t.nodeType !== H) {
            j(false);
          } else {
          }
          if (n) {
            var i2 = o(t);
            if (S.canReuseMarkup(e2, i2)) {
              return;
            }
            var s2 = i2.getAttribute(S.CHECKSUM_ATTR_NAME);
            i2.removeAttribute(S.CHECKSUM_ATTR_NAME);
            var u2 = i2.outerHTML;
            i2.setAttribute(S.CHECKSUM_ATTR_NAME, s2);
            var l2 = e2;
            var c2 = r(l2, u2);
            " (client) " + l2.substring(c2 - 20, c2 + 20) + "\n (server) " + u2.substring(c2 - 20, c2 + 20);
            if (t.nodeType === W) {
              j(false);
            } else {
            }
          }
          if (t.nodeType === W) {
            j(false);
          } else {
          }
          if (a2.useCreateElement) {
            while (t.lastChild) {
              t.removeChild(t.lastChild);
            }
            t.appendChild(e2);
          } else {
            L(t, e2);
          }
        },
        ownerDocumentContextKey: q,
        getReactRootID: a,
        getID: i,
        setID: u,
        getNode: l,
        getNodeFromInstance: c,
        isValid: p,
        purgeID: d
      };
      x.measureMethods($2, "ReactMount", {
        _renderNewRootComponent: "_renderNewRootComponent",
        _mountImageIntoNode: "_mountImageIntoNode"
      });
      module.exports = $2;
    }
  });

  // src/generated/51.js
  var require__64 = __commonJS({
    "src/generated/51.js"(exports, module) {
      var r = require__16();
      var o = require__20();
      var a = require__63();
      var i = require__12();
      var s = require__3();
      var u = {
        dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
        style: "`style` must be set using `updateStylesByID()`."
      };
      var l = {
        updatePropertyByID: function(e2, t, n) {
          var r2 = a.getNode(e2);
          if (u.hasOwnProperty(t)) {
            s(false);
          } else {
          }
          if (n != null) {
            o.setValueForProperty(r2, t, n);
          } else {
            o.deleteValueForProperty(r2, t);
          }
        },
        dangerouslyReplaceNodeWithMarkupByID: function(e2, t) {
          var n = a.getNode(e2);
          r.dangerouslyReplaceNodeWithMarkup(n, t);
        },
        dangerouslyProcessChildrenUpdates: function(e2, t) {
          for (var n = 0; n < e2.length; n++) {
            e2[n].parentNode = a.getNode(e2[n].parentID);
          }
          r.processUpdates(e2, t);
        }
      };
      i.measureMethods(l, "ReactDOMIDOperations", {
        dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID",
        dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates"
      });
      module.exports = l;
    }
  });

  // src/generated/48.js
  var require__65 = __commonJS({
    "src/generated/48.js"(exports, module) {
      var r = require__64();
      var o = require__63();
      var a = {
        processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
        replaceNodeWithMarkupByID: r.dangerouslyReplaceNodeWithMarkupByID,
        unmountIDFromEnvironment: function(e2) {
          o.purgeID(e2);
        }
      };
      module.exports = a;
    }
  });

  // src/generated/91.js
  var require__66 = __commonJS({
    "src/generated/91.js"(exports, module) {
      var r = require__16();
      var o = require__20();
      var a = require__65();
      var i = require__63();
      var s = require__30();
      var u = require__14();
      var l = require__15();
      require__62();
      function c(e2) {
      }
      s(c.prototype, {
        construct: function(e2) {
          this._currentElement = e2;
          this._stringText = "" + e2;
          this._rootNodeID = null;
          this._mountIndex = 0;
        },
        mountComponent: function(e2, t, n) {
          this._rootNodeID = e2;
          if (t.useCreateElement) {
            var r2 = n[i.ownerDocumentContextKey];
            var a2 = r2.createElement("span");
            o.setAttributeForID(a2, e2);
            i.getID(a2);
            l(a2, this._stringText);
            return a2;
          }
          var s2 = u(this._stringText);
          if (t.renderToStaticMarkup) {
            return s2;
          } else {
            return "<span " + o.createMarkupForID(e2) + ">" + s2 + "</span>";
          }
        },
        receiveComponent: function(e2, t) {
          if (e2 !== this._currentElement) {
            this._currentElement = e2;
            var n = "" + e2;
            if (n !== this._stringText) {
              this._stringText = n;
              var o2 = i.getNode(this._rootNodeID);
              r.updateTextContent(o2, n);
            }
          }
        },
        unmountComponent: function() {
          a.unmountIDFromEnvironment(this._rootNodeID);
        }
      });
      module.exports = c;
    }
  });

  // src/generated/26.js
  var require__67 = __commonJS({
    "src/generated/26.js"(exports, module) {
      function r(e2, t, n) {
        var r2 = t.dispatchConfig.phasedRegistrationNames[n];
        return g(e2, r2);
      }
      function o(e2, t, n) {
        var o2 = t ? y.bubbled : y.captured;
        var a2 = r(e2, n, o2);
        if (a2) {
          n._dispatchListeners = m(n._dispatchListeners, a2);
          n._dispatchIDs = m(n._dispatchIDs, e2);
        }
      }
      function a(e2) {
        if (e2 && e2.dispatchConfig.phasedRegistrationNames) {
          h.injection.getInstanceHandle().traverseTwoPhase(e2.dispatchMarker, o, e2);
        }
      }
      function i(e2) {
        if (e2 && e2.dispatchConfig.phasedRegistrationNames) {
          h.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(e2.dispatchMarker, o, e2);
        }
      }
      function s(e2, t, n) {
        if (n && n.dispatchConfig.registrationName) {
          var r2 = n.dispatchConfig.registrationName;
          var o2 = g(e2, r2);
          if (o2) {
            n._dispatchListeners = m(n._dispatchListeners, o2);
            n._dispatchIDs = m(n._dispatchIDs, e2);
          }
        }
      }
      function u(e2) {
        if (e2 && e2.dispatchConfig.registrationName) {
          s(e2.dispatchMarker, null, e2);
        }
      }
      function l(e2) {
        v(e2, a);
      }
      function c(e2) {
        v(e2, i);
      }
      function p(e2, t, n, r2) {
        h.injection.getInstanceHandle().traverseEnterLeave(n, r2, s, e2, t);
      }
      function d(e2) {
        v(e2, u);
      }
      var f = require__21();
      var h = require__27();
      require__19();
      var m = require__25();
      var v = require__26();
      var y = f.PropagationPhases;
      var g = h.getListener;
      var b = {
        accumulateTwoPhaseDispatches: l,
        accumulateTwoPhaseDispatchesSkipTarget: c,
        accumulateDirectDispatches: d,
        accumulateEnterLeaveDispatches: p
      };
      module.exports = b;
    }
  });

  // src/generated/109.js
  var require__68 = __commonJS({
    "src/generated/109.js"(exports, module) {
      function r() {
        if (!a && o.canUseDOM) {
          a = "textContent" in document.documentElement ? "textContent" : "innerText";
        }
        return a;
      }
      var o = require__2();
      var a = null;
      module.exports = r;
    }
  });

  // src/generated/224.js
  var require__69 = __commonJS({
    "src/generated/224.js"(exports, module) {
      function r(e2) {
        this._root = e2;
        this._startText = this.getText();
        this._fallbackText = null;
      }
      var o = require__45();
      var a = require__30();
      var i = require__68();
      a(r.prototype, {
        destructor: function() {
          this._root = null;
          this._startText = null;
          this._fallbackText = null;
        },
        getText: function() {
          if ("value" in this._root) {
            return this._root.value;
          } else {
            return this._root[i()];
          }
        },
        getData: function() {
          if (this._fallbackText) {
            return this._fallbackText;
          }
          var e2;
          var t;
          var n = this._startText;
          var r2 = n.length;
          var o2 = this.getText();
          var a2 = o2.length;
          for (e2 = 0; e2 < r2 && n[e2] === o2[e2]; e2++) ;
          var i2 = r2 - e2;
          for (t = 1; t <= i2 && n[r2 - t] === o2[a2 - t]; t++) ;
          var s = t > 1 ? 1 - t : void 0;
          this._fallbackText = o2.slice(e2, s);
          return this._fallbackText;
        }
      });
      o.addPoolingTo(r);
      module.exports = r;
    }
  });

  // src/generated/17.js
  var require__70 = __commonJS({
    "src/generated/17.js"(exports, module) {
      function r(e2, t, n, r2) {
        this.dispatchConfig = e2;
        this.dispatchMarker = t;
        this.nativeEvent = n;
        var o2 = this.constructor.Interface;
        for (var a2 in o2) {
          if (o2.hasOwnProperty(a2)) {
            var s2 = o2[a2];
            if (s2) {
              this[a2] = s2(n);
            } else if (a2 === "target") {
              this.target = r2;
            } else {
              this[a2] = n[a2];
            }
          }
        }
        var u = n.defaultPrevented ?? n.returnValue === false;
        if (u) {
          this.isDefaultPrevented = i.thatReturnsTrue;
        } else {
          this.isDefaultPrevented = i.thatReturnsFalse;
        }
        this.isPropagationStopped = i.thatReturnsFalse;
      }
      var o = require__45();
      var a = require__30();
      var i = require__8();
      require__19();
      var s = {
        type: null,
        target: null,
        currentTarget: i.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e2) {
          return e2.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      };
      a(r.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var e2 = this.nativeEvent;
          if (e2) {
            if (e2.preventDefault) {
              e2.preventDefault();
            } else {
              e2.returnValue = false;
            }
            this.isDefaultPrevented = i.thatReturnsTrue;
          }
        },
        stopPropagation: function() {
          var e2 = this.nativeEvent;
          if (e2) {
            if (e2.stopPropagation) {
              e2.stopPropagation();
            } else {
              e2.cancelBubble = true;
            }
            this.isPropagationStopped = i.thatReturnsTrue;
          }
        },
        persist: function() {
          this.isPersistent = i.thatReturnsTrue;
        },
        isPersistent: i.thatReturnsFalse,
        destructor: function() {
          var e2 = this.constructor.Interface;
          for (var t in e2) {
            this[t] = null;
          }
          this.dispatchConfig = null;
          this.dispatchMarker = null;
          this.nativeEvent = null;
        }
      });
      r.Interface = s;
      r.augmentClass = function(e2, t) {
        var n = this;
        var r2 = Object.create(n.prototype);
        a(r2, e2.prototype);
        e2.prototype = r2;
        e2.prototype.constructor = e2;
        e2.Interface = a({}, n.Interface, t);
        e2.augmentClass = n.augmentClass;
        o.addPoolingTo(e2, o.fourArgumentPooler);
      };
      o.addPoolingTo(r, o.fourArgumentPooler);
      module.exports = r;
    }
  });

  // src/generated/257.js
  var require__71 = __commonJS({
    "src/generated/257.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__70();
      var a = {
        data: null
      };
      o.augmentClass(r, a);
      module.exports = r;
    }
  });

  // src/generated/260.js
  var require__72 = __commonJS({
    "src/generated/260.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__70();
      var a = {
        data: null
      };
      o.augmentClass(r, a);
      module.exports = r;
    }
  });

  // src/generated/14.js
  var require__73 = __commonJS({
    "src/generated/14.js"(exports, module) {
      function n(e2) {
        var t;
        for (t in e2) {
          if (e2.hasOwnProperty(t)) {
            return t;
          }
        }
        return null;
      }
      module.exports = n;
    }
  });

  // src/generated/216.js
  var require__74 = __commonJS({
    "src/generated/216.js"(exports, module) {
      function r() {
        var e2 = window.opera;
        return typeof e2 == "object" && typeof e2.version == "function" && parseInt(e2.version(), 10) <= 12;
      }
      function o(e2) {
        return (e2.ctrlKey || e2.altKey || e2.metaKey) && (!e2.ctrlKey || !e2.altKey);
      }
      function a(e2) {
        switch (e2) {
          case x.topCompositionStart:
            return T.compositionStart;
          case x.topCompositionEnd:
            return T.compositionEnd;
          case x.topCompositionUpdate:
            return T.compositionUpdate;
        }
      }
      function i(e2, t) {
        return e2 === x.topKeyDown && t.keyCode === w;
      }
      function s(e2, t) {
        switch (e2) {
          case x.topKeyUp:
            return E.indexOf(t.keyCode) !== -1;
          case x.topKeyDown:
            return t.keyCode !== w;
          case x.topKeyPress:
          case x.topMouseDown:
          case x.topBlur:
            return true;
          default:
            return false;
        }
      }
      function u(e2) {
        var t = e2.detail;
        if (typeof t == "object" && "data" in t) {
          return t.data;
        } else {
          return null;
        }
      }
      function l(e2, t, n, r2, o2) {
        var l2;
        var c2;
        if (C) {
          l2 = a(e2);
        } else if (N) {
          if (s(e2, r2)) {
            l2 = T.compositionEnd;
          }
        } else if (i(e2, r2)) {
          l2 = T.compositionStart;
        }
        if (!l2) {
          return null;
        }
        if (P) {
          if (N || l2 !== T.compositionStart) {
            if (l2 === T.compositionEnd && N) {
              c2 = N.getData();
            }
          } else {
            N = v.getPooled(t);
          }
        }
        var p2 = y.getPooled(l2, n, r2, o2);
        if (c2) {
          p2.data = c2;
        } else {
          var d2 = u(r2);
          if (d2 !== null) {
            p2.data = d2;
          }
        }
        h.accumulateTwoPhaseDispatches(p2);
        return p2;
      }
      function c(e2, t) {
        switch (e2) {
          case x.topCompositionEnd:
            return u(t);
          case x.topKeyPress:
            var n = t.which;
            if (n !== k) {
              return null;
            } else {
              M = true;
              return S;
            }
          case x.topTextInput:
            var r2 = t.data;
            if (r2 === S && M) {
              return null;
            } else {
              return r2;
            }
          default:
            return null;
        }
      }
      function p(e2, t) {
        if (N) {
          if (e2 === x.topCompositionEnd || s(e2, t)) {
            var n = N.getData();
            v.release(N);
            N = null;
            return n;
          }
          return null;
        }
        switch (e2) {
          case x.topPaste:
            return null;
          case x.topKeyPress:
            if (t.which && !o(t)) {
              return String.fromCharCode(t.which);
            } else {
              return null;
            }
          case x.topCompositionEnd:
            if (P) {
              return null;
            } else {
              return t.data;
            }
          default:
            return null;
        }
      }
      function d(e2, t, n, r2, o2) {
        var a2;
        a2 = O ? c(e2, r2) : p(e2, r2);
        if (!a2) {
          return null;
        }
        var i2 = g.getPooled(T.beforeInput, n, r2, o2);
        i2.data = a2;
        h.accumulateTwoPhaseDispatches(i2);
        return i2;
      }
      var f = require__21();
      var h = require__67();
      var m = require__2();
      var v = require__69();
      var y = require__71();
      var g = require__72();
      var b = require__73();
      var E = [9, 13, 27, 32];
      var w = 229;
      var C = m.canUseDOM && "CompositionEvent" in window;
      var _ = null;
      if (m.canUseDOM && "documentMode" in document) {
        _ = document.documentMode;
      }
      var O = m.canUseDOM && "TextEvent" in window && !_ && !r();
      var P = m.canUseDOM && (!C || _ && _ > 8 && _ <= 11);
      var k = 32;
      var S = String.fromCharCode(k);
      var x = f.topLevelTypes;
      var T = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: b({
              onBeforeInput: null
            }),
            captured: b({
              onBeforeInputCapture: null
            })
          },
          dependencies: [x.topCompositionEnd, x.topKeyPress, x.topTextInput, x.topPaste]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: b({
              onCompositionEnd: null
            }),
            captured: b({
              onCompositionEndCapture: null
            })
          },
          dependencies: [x.topBlur, x.topCompositionEnd, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: b({
              onCompositionStart: null
            }),
            captured: b({
              onCompositionStartCapture: null
            })
          },
          dependencies: [x.topBlur, x.topCompositionStart, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: b({
              onCompositionUpdate: null
            }),
            captured: b({
              onCompositionUpdateCapture: null
            })
          },
          dependencies: [x.topBlur, x.topCompositionUpdate, x.topKeyDown, x.topKeyPress, x.topKeyUp, x.topMouseDown]
        }
      };
      var M = false;
      var N = null;
      var D = {
        eventTypes: T,
        extractEvents: function(e2, t, n, r2, o2) {
          return [l(e2, t, n, r2, o2), d(e2, t, n, r2, o2)];
        }
      };
      module.exports = D;
    }
  });

  // src/generated/57.js
  var require__75 = __commonJS({
    "src/generated/57.js"(exports, module) {
      function n(e2) {
        var t = e2.target || e2.srcElement || window;
        if (t.nodeType === 3) {
          return t.parentNode;
        } else {
          return t;
        }
      }
      module.exports = n;
    }
  });

  // src/generated/110.js
  var require__76 = __commonJS({
    "src/generated/110.js"(exports, module) {
      function n(e2) {
        var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
        return t && (t === "input" && r[e2.type] || t === "textarea");
      }
      var r = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      module.exports = n;
    }
  });

  // src/generated/218.js
  var require__77 = __commonJS({
    "src/generated/218.js"(exports, module) {
      function r(e2) {
        var t = e2.nodeName && e2.nodeName.toLowerCase();
        return t === "select" || t === "input" && e2.type === "file";
      }
      function o(e2) {
        var t = _.getPooled(T.change, N, e2, O(e2));
        E.accumulateTwoPhaseDispatches(t);
        C.batchedUpdates(a, t);
      }
      function a(e2) {
        b.enqueueEvents(e2);
        b.processEventQueue(false);
      }
      function i(e2, t) {
        M = e2;
        N = t;
        M.attachEvent("onchange", o);
      }
      function s() {
        if (M) {
          M.detachEvent("onchange", o);
          M = null;
          N = null;
        }
      }
      function u(e2, t, n) {
        if (e2 === x.topChange) {
          return n;
        }
      }
      function l(e2, t, n) {
        if (e2 === x.topFocus) {
          s();
          i(t, n);
        } else if (e2 === x.topBlur) {
          s();
        }
      }
      function c(e2, t) {
        M = e2;
        N = t;
        D = e2.value;
        R = Object.getOwnPropertyDescriptor(e2.constructor.prototype, "value");
        Object.defineProperty(M, "value", j);
        M.attachEvent("onpropertychange", d);
      }
      function p() {
        if (M) {
          delete M.value;
          M.detachEvent("onpropertychange", d);
          M = null;
          N = null;
          D = null;
          R = null;
        }
      }
      function d(e2) {
        if (e2.propertyName === "value") {
          var t = e2.srcElement.value;
          if (t !== D) {
            D = t;
            o(e2);
          }
        }
      }
      function f(e2, t, n) {
        if (e2 === x.topInput) {
          return n;
        }
      }
      function h(e2, t, n) {
        if (e2 === x.topFocus) {
          p();
          c(t, n);
        } else if (e2 === x.topBlur) {
          p();
        }
      }
      function m(e2, t, n) {
        if ((e2 === x.topSelectionChange || e2 === x.topKeyUp || e2 === x.topKeyDown) && M && M.value !== D) {
          D = M.value;
          return N;
        }
      }
      function v(e2) {
        return e2.nodeName && e2.nodeName.toLowerCase() === "input" && (e2.type === "checkbox" || e2.type === "radio");
      }
      function y(e2, t, n) {
        if (e2 === x.topClick) {
          return n;
        }
      }
      var g = require__21();
      var b = require__27();
      var E = require__67();
      var w = require__2();
      var C = require__48();
      var _ = require__70();
      var O = require__75();
      var P = require__31();
      var k = require__76();
      var S = require__73();
      var x = g.topLevelTypes;
      var T = {
        change: {
          phasedRegistrationNames: {
            bubbled: S({
              onChange: null
            }),
            captured: S({
              onChangeCapture: null
            })
          },
          dependencies: [x.topBlur, x.topChange, x.topClick, x.topFocus, x.topInput, x.topKeyDown, x.topKeyUp, x.topSelectionChange]
        }
      };
      var M = null;
      var N = null;
      var D = null;
      var R = null;
      var A = false;
      if (w.canUseDOM) {
        A = P("change") && (!("documentMode" in document) || document.documentMode > 8);
      }
      var I = false;
      if (w.canUseDOM) {
        I = P("input") && (!("documentMode" in document) || document.documentMode > 9);
      }
      var j = {
        get: function() {
          return R.get.call(this);
        },
        set: function(e2) {
          D = "" + e2;
          R.set.call(this, e2);
        }
      };
      var L = {
        eventTypes: T,
        extractEvents: function(e2, t, n, o2, a2) {
          var i2;
          var s2;
          if (r(t)) {
            if (A) {
              i2 = u;
            } else {
              s2 = l;
            }
          } else if (k(t)) {
            if (I) {
              i2 = f;
            } else {
              i2 = m;
              s2 = h;
            }
          } else if (v(t)) {
            i2 = y;
          }
          if (i2) {
            var c2 = i2(e2, t, n);
            if (c2) {
              var p2 = _.getPooled(T.change, c2, o2, a2);
              p2.type = "change";
              E.accumulateTwoPhaseDispatches(p2);
              return p2;
            }
          }
          if (s2) {
            s2(e2, t, n);
          }
        }
      };
      module.exports = L;
    }
  });

  // src/generated/219.js
  var require__78 = __commonJS({
    "src/generated/219.js"(exports, module) {
      var n = 0;
      var r = {
        createReactRootIndex: function() {
          return n++;
        }
      };
      module.exports = r;
    }
  });

  // src/generated/221.js
  var require__79 = __commonJS({
    "src/generated/221.js"(exports, module) {
      var r = require__73();
      var o = [r({
        ResponderEventPlugin: null
      }), r({
        SimpleEventPlugin: null
      }), r({
        TapEventPlugin: null
      }), r({
        EnterLeaveEventPlugin: null
      }), r({
        ChangeEventPlugin: null
      }), r({
        SelectEventPlugin: null
      }), r({
        BeforeInputEventPlugin: null
      })];
      module.exports = o;
    }
  });

  // src/generated/28.js
  var require__80 = __commonJS({
    "src/generated/28.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__70();
      var a = require__75();
      var i = {
        view: function(e2) {
          if (e2.view) {
            return e2.view;
          }
          var t = a(e2);
          if (t != null && t.window === t) {
            return t;
          }
          var n = t.ownerDocument;
          if (n) {
            return n.defaultView || n.parentWindow;
          } else {
            return window;
          }
        },
        detail: function(e2) {
          return e2.detail || 0;
        }
      };
      o.augmentClass(r, i);
      module.exports = r;
    }
  });

  // src/generated/56.js
  var require__81 = __commonJS({
    "src/generated/56.js"(exports, module) {
      function n(e2) {
        var t = this;
        var n2 = t.nativeEvent;
        if (n2.getModifierState) {
          return n2.getModifierState(e2);
        }
        var r2 = o[e2];
        return !!r2 && !!n2[r2];
      }
      function r(e2) {
        return n;
      }
      var o = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      module.exports = r;
    }
  });

  // src/generated/39.js
  var require__82 = __commonJS({
    "src/generated/39.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__80();
      var a = require__29();
      var i = require__81();
      var s = {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: i,
        button: function(e2) {
          var t = e2.button;
          if ("which" in e2) {
            return t;
          } else if (t === 2) {
            return 2;
          } else if (t === 4) {
            return 1;
          } else {
            return 0;
          }
        },
        buttons: null,
        relatedTarget: function(e2) {
          return e2.relatedTarget || (e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement);
        },
        pageX: function(e2) {
          if ("pageX" in e2) {
            return e2.pageX;
          } else {
            return e2.clientX + a.currentScrollLeft;
          }
        },
        pageY: function(e2) {
          if ("pageY" in e2) {
            return e2.pageY;
          } else {
            return e2.clientY + a.currentScrollTop;
          }
        }
      };
      o.augmentClass(r, s);
      module.exports = r;
    }
  });

  // src/generated/222.js
  var require__83 = __commonJS({
    "src/generated/222.js"(exports, module) {
      var r = require__21();
      var o = require__67();
      var a = require__82();
      var i = require__63();
      var s = require__73();
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
        extractEvents: function(e2, t, n, r2, s2) {
          if (e2 === u.topMouseOver && (r2.relatedTarget || r2.fromElement)) {
            return null;
          }
          if (e2 !== u.topMouseOut && e2 !== u.topMouseOver) {
            return null;
          }
          var d2;
          if (t.window === t) {
            d2 = t;
          } else {
            var f = t.ownerDocument;
            d2 = f ? f.defaultView || f.parentWindow : window;
          }
          var h;
          var m;
          var v = "";
          var y = "";
          if (e2 === u.topMouseOut) {
            h = t;
            v = n;
            m = l(r2.relatedTarget || r2.toElement);
            if (m) {
              y = i.getID(m);
            } else {
              m = d2;
            }
            m = m || d2;
          } else {
            h = d2;
            m = t;
            y = n;
          }
          if (h === m) {
            return null;
          }
          var g = a.getPooled(c.mouseLeave, v, r2, s2);
          g.type = "mouseleave";
          g.target = h;
          g.relatedTarget = m;
          var b = a.getPooled(c.mouseEnter, y, r2, s2);
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
    }
  });

  // src/generated/225.js
  var require__84 = __commonJS({
    "src/generated/225.js"(exports, module) {
      var r;
      var o = require__17();
      var a = require__2();
      var i = o.injection.MUST_USE_ATTRIBUTE;
      var s = o.injection.MUST_USE_PROPERTY;
      var u = o.injection.HAS_BOOLEAN_VALUE;
      var l = o.injection.HAS_SIDE_EFFECTS;
      var c = o.injection.HAS_NUMERIC_VALUE;
      var p = o.injection.HAS_POSITIVE_NUMERIC_VALUE;
      var d = o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
      if (a.canUseDOM) {
        f = document.implementation;
        r = f && f.hasFeature && f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
      }
      var f;
      var h = {
        isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
        Properties: {
          accept: null,
          acceptCharset: null,
          accessKey: null,
          action: null,
          allowFullScreen: i | u,
          allowTransparency: i,
          alt: null,
          async: u,
          autoComplete: null,
          autoPlay: u,
          capture: i | u,
          cellPadding: null,
          cellSpacing: null,
          charSet: i,
          challenge: i,
          checked: s | u,
          classID: i,
          className: r ? i : s,
          cols: i | p,
          colSpan: null,
          content: null,
          contentEditable: null,
          contextMenu: i,
          controls: s | u,
          coords: null,
          crossOrigin: null,
          data: null,
          dateTime: i,
          default: u,
          defer: u,
          dir: null,
          disabled: i | u,
          download: d,
          draggable: null,
          encType: null,
          form: i,
          formAction: i,
          formEncType: i,
          formMethod: i,
          formNoValidate: u,
          formTarget: i,
          frameBorder: i,
          headers: null,
          height: i,
          hidden: i | u,
          high: null,
          href: null,
          hrefLang: null,
          htmlFor: null,
          httpEquiv: null,
          icon: null,
          id: s,
          inputMode: i,
          integrity: null,
          is: i,
          keyParams: i,
          keyType: i,
          kind: null,
          label: null,
          lang: null,
          list: i,
          loop: s | u,
          low: null,
          manifest: i,
          marginHeight: null,
          marginWidth: null,
          max: null,
          maxLength: i,
          media: i,
          mediaGroup: null,
          method: null,
          min: null,
          minLength: i,
          multiple: s | u,
          muted: s | u,
          name: null,
          nonce: i,
          noValidate: u,
          open: u,
          optimum: null,
          pattern: null,
          placeholder: null,
          poster: null,
          preload: null,
          radioGroup: null,
          readOnly: s | u,
          rel: null,
          required: u,
          reversed: u,
          role: i,
          rows: i | p,
          rowSpan: null,
          sandbox: null,
          scope: null,
          scoped: u,
          scrolling: null,
          seamless: i | u,
          selected: s | u,
          shape: null,
          size: i | p,
          sizes: i,
          span: p,
          spellCheck: null,
          src: null,
          srcDoc: s,
          srcLang: null,
          srcSet: i,
          start: c,
          step: null,
          style: null,
          summary: null,
          tabIndex: null,
          target: null,
          title: null,
          type: null,
          useMap: null,
          value: s | l,
          width: i,
          wmode: i,
          wrap: null,
          about: i,
          datatype: i,
          inlist: i,
          prefix: i,
          property: i,
          resource: i,
          typeof: i,
          vocab: i,
          autoCapitalize: i,
          autoCorrect: i,
          autoSave: null,
          color: null,
          itemProp: i,
          itemScope: i | u,
          itemType: i,
          itemID: i,
          itemRef: i,
          results: null,
          security: i,
          unselectable: i
        },
        DOMAttributeNames: {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv"
        },
        DOMPropertyNames: {
          autoComplete: "autocomplete",
          autoFocus: "autofocus",
          autoPlay: "autoplay",
          autoSave: "autosave",
          encType: "encoding",
          hrefLang: "hreflang",
          radioGroup: "radiogroup",
          spellCheck: "spellcheck",
          srcDoc: "srcdoc",
          srcSet: "srcset"
        }
      };
      module.exports = h;
    }
  });

  // src/generated/54.js
  var require__85 = __commonJS({
    "src/generated/54.js"(exports, module) {
      function r(e2) {
        if (e2 == null) {
          return null;
        } else if (e2.nodeType === 1) {
          return e2;
        } else if (o.has(e2)) {
          return a.getNodeFromInstance(e2);
        } else {
          if (e2.render != null && typeof e2.render == "function") {
            i(false);
          } else {
          }
          i(false);
          return;
        }
      }
      require__();
      var o = require__39();
      var a = require__63();
      var i = require__3();
      require__19();
      module.exports = r;
    }
  });

  // src/generated/226.js
  var require__86 = __commonJS({
    "src/generated/226.js"(exports, module) {
      require__39();
      var r = require__85();
      require__19();
      var o = "_getDOMNodeDidWarn";
      var a = {
        getDOMNode: function() {
          this.constructor[o] = true;
          return r(this);
        }
      };
      module.exports = a;
    }
  });

  // src/generated/92.js
  var require__87 = __commonJS({
    "src/generated/92.js"(exports, module) {
      function r() {
        this.reinitializeTransaction();
      }
      var o = require__48();
      var a = require__47();
      var i = require__30();
      var s = require__8();
      var u = {
        initialize: s,
        close: function() {
          d.isBatchingUpdates = false;
        }
      };
      var l = {
        initialize: s,
        close: o.flushBatchedUpdates.bind(o)
      };
      var c = [l, u];
      i(r.prototype, a.Mixin, {
        getTransactionWrappers: function() {
          return c;
        }
      });
      var p = new r();
      var d = {
        isBatchingUpdates: false,
        batchedUpdates: function(e2, t, n, r2, o2, a2) {
          var i2 = d.isBatchingUpdates;
          d.isBatchingUpdates = true;
          if (i2) {
            e2(t, n, r2, o2, a2);
          } else {
            p.perform(e2, null, t, n, r2, o2, a2);
          }
        }
      };
      module.exports = d;
    }
  });

  // src/generated/71.js
  var require__88 = __commonJS({
    "src/generated/71.js"(exports, module) {
      function n(e2) {
        try {
          e2.focus();
        } catch (e3) {
        }
      }
      module.exports = n;
    }
  });

  // src/generated/215.js
  var require__89 = __commonJS({
    "src/generated/215.js"(exports, module) {
      var r = require__63();
      var o = require__85();
      var a = require__88();
      var i = {
        componentDidMount: function() {
          if (this.props.autoFocus) {
            a(o(this));
          }
        }
      };
      var s = {
        Mixin: i,
        focusDOMComponent: function() {
          a(r.getNode(this._rootNodeID));
        }
      };
      module.exports = s;
    }
  });

  // src/generated/82.js
  var require__90 = __commonJS({
    "src/generated/82.js"(exports, module) {
      function n(e2, t) {
        return e2 + t.charAt(0).toUpperCase() + t.substring(1);
      }
      var r = {
        animationIterationCount: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        stopOpacity: true,
        strokeDashoffset: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var o = ["Webkit", "ms", "Moz", "O"];
      Object.keys(r).forEach(function(e2) {
        o.forEach(function(t) {
          r[n(t, e2)] = r[e2];
        });
      });
      var a = {
        background: {
          backgroundAttachment: true,
          backgroundColor: true,
          backgroundImage: true,
          backgroundPositionX: true,
          backgroundPositionY: true,
          backgroundRepeat: true
        },
        backgroundPosition: {
          backgroundPositionX: true,
          backgroundPositionY: true
        },
        border: {
          borderWidth: true,
          borderStyle: true,
          borderColor: true
        },
        borderBottom: {
          borderBottomWidth: true,
          borderBottomStyle: true,
          borderBottomColor: true
        },
        borderLeft: {
          borderLeftWidth: true,
          borderLeftStyle: true,
          borderLeftColor: true
        },
        borderRight: {
          borderRightWidth: true,
          borderRightStyle: true,
          borderRightColor: true
        },
        borderTop: {
          borderTopWidth: true,
          borderTopStyle: true,
          borderTopColor: true
        },
        font: {
          fontStyle: true,
          fontVariant: true,
          fontWeight: true,
          fontSize: true,
          lineHeight: true,
          fontFamily: true
        },
        outline: {
          outlineWidth: true,
          outlineStyle: true,
          outlineColor: true
        }
      };
      var i = {
        isUnitlessNumber: r,
        shorthandPropertyExpansions: a
      };
      module.exports = i;
    }
  });

  // src/generated/165.js
  var require__91 = __commonJS({
    "src/generated/165.js"(exports, module) {
      function n(e2) {
        return e2.replace(r, function(e3, t) {
          return t.toUpperCase();
        });
      }
      var r = /-(.)/g;
      module.exports = n;
    }
  });

  // src/generated/166.js
  var require__92 = __commonJS({
    "src/generated/166.js"(exports, module) {
      function r(e2) {
        return o(e2.replace(a, "ms-"));
      }
      var o = require__91();
      var a = /^-ms-/;
      module.exports = r;
    }
  });

  // src/generated/265.js
  var require__93 = __commonJS({
    "src/generated/265.js"(exports, module) {
      function r(e2, t) {
        var n = t == null || typeof t == "boolean" || t === "";
        if (n) {
          return "";
        }
        var r2 = isNaN(t);
        if (r2 || t === 0 || a.hasOwnProperty(e2) && a[e2]) {
          return "" + t;
        } else {
          if (typeof t == "string") {
            t = t.trim();
          }
          return t + "px";
        }
      }
      var o = require__90();
      var a = o.isUnitlessNumber;
      module.exports = r;
    }
  });

  // src/generated/170.js
  var require__94 = __commonJS({
    "src/generated/170.js"(exports, module) {
      function n(e2) {
        return e2.replace(r, "-$1").toLowerCase();
      }
      var r = /([A-Z])/g;
      module.exports = n;
    }
  });

  // src/generated/171.js
  var require__95 = __commonJS({
    "src/generated/171.js"(exports, module) {
      function r(e2) {
        return o(e2).replace(a, "-ms-");
      }
      var o = require__94();
      var a = /^ms-/;
      module.exports = r;
    }
  });

  // src/generated/175.js
  var require__96 = __commonJS({
    "src/generated/175.js"(exports, module) {
      function n(e2) {
        var t = {};
        return function(n2) {
          if (!t.hasOwnProperty(n2)) {
            t[n2] = e2.call(this, n2);
          }
          return t[n2];
        };
      }
      module.exports = n;
    }
  });

  // src/generated/217.js
  var require__97 = __commonJS({
    "src/generated/217.js"(exports, module) {
      var r = require__90();
      var o = require__2();
      var a = require__12();
      require__92();
      var i = require__93();
      var s = require__95();
      var u = require__96();
      require__19();
      var l = u(function(e2) {
        return s(e2);
      });
      var c = false;
      var p = "cssFloat";
      if (o.canUseDOM) {
        d = document.createElement("div").style;
        try {
          d.font = "";
        } catch (e2) {
          c = true;
        }
        if (document.documentElement.style.cssFloat === void 0) {
          p = "styleFloat";
        }
      }
      var d;
      var f = {
        createMarkupForStyles: function(e2) {
          var t = "";
          for (var n in e2) {
            if (e2.hasOwnProperty(n)) {
              var r2 = e2[n];
              if (r2 != null) {
                t += l(n) + ":";
                t += i(n, r2) + ";";
              }
            }
          }
          return t || null;
        },
        setValueForStyles: function(e2, t) {
          var n = e2.style;
          for (var o2 in t) {
            if (t.hasOwnProperty(o2)) {
              var a2 = i(o2, t[o2]);
              if (o2 === "float") {
                o2 = p;
              }
              if (a2) {
                n[o2] = a2;
              } else {
                var s2 = c && r.shorthandPropertyExpansions[o2];
                if (s2) {
                  for (var u2 in s2) {
                    n[u2] = "";
                  }
                } else {
                  n[o2] = "";
                }
              }
            }
          }
        }
      };
      a.measureMethods(f, "CSSPropertyOperations", {
        setValueForStyles: "setValueForStyles"
      });
      module.exports = f;
    }
  });

  // src/generated/231.js
  var require__98 = __commonJS({
    "src/generated/231.js"(exports, module) {
      var n = {
        onClick: true,
        onDoubleClick: true,
        onMouseDown: true,
        onMouseMove: true,
        onMouseUp: true,
        onClickCapture: true,
        onDoubleClickCapture: true,
        onMouseDownCapture: true,
        onMouseMoveCapture: true,
        onMouseUpCapture: true
      };
      var r = {
        getNativeProps: function(e2, t, r2) {
          if (!t.disabled) {
            return t;
          }
          var o = {};
          for (var a in t) {
            if (t.hasOwnProperty(a) && !n[a]) {
              o[a] = t[a];
            }
          }
          return o;
        }
      };
      module.exports = r;
    }
  });

  // src/generated/58.js
  var require__99 = __commonJS({
    "src/generated/58.js"(exports, module) {
      function n(e2) {
        var t = e2 && (r && e2[r] || e2[o]);
        if (typeof t == "function") {
          return t;
        }
      }
      var r = typeof Symbol == "function" && Symbol.iterator;
      var o = "@@iterator";
      module.exports = n;
    }
  });

  // src/generated/103.js
  var require__100 = __commonJS({
    "src/generated/103.js"(exports, module) {
      function r(e2) {
        function t(t2, n2, r2, o2, a2, i2) {
          o2 = o2 || C;
          i2 = i2 || r2;
          if (n2[r2] == null) {
            var s2 = b[a2];
            if (t2) {
              return new Error("Required " + s2 + " `" + i2 + "` was not specified in " + ("`" + o2 + "`."));
            } else {
              return null;
            }
          }
          return e2(n2, r2, o2, a2, i2);
        }
        var n = t.bind(null, false);
        n.isRequired = t.bind(null, true);
        return n;
      }
      function o(e2) {
        function t(t2, n, r2, o2, a2) {
          var i2 = t2[n];
          var s2 = m(i2);
          if (s2 !== e2) {
            var u2 = b[o2];
            var l2 = v(i2);
            return new Error("Invalid " + u2 + " `" + a2 + "` of type " + ("`" + l2 + "` supplied to `" + r2 + "`, expected ") + ("`" + e2 + "`."));
          }
          return null;
        }
        return r(t);
      }
      function a() {
        return r(E.thatReturns(null));
      }
      function i(e2) {
        function t(t2, n, r2, o2, a2) {
          var i2 = t2[n];
          if (!Array.isArray(i2)) {
            var s2 = b[o2];
            var u2 = m(i2);
            return new Error("Invalid " + s2 + " `" + a2 + "` of type " + ("`" + u2 + "` supplied to `" + r2 + "`, expected an array."));
          }
          for (var l2 = 0; l2 < i2.length; l2++) {
            var c2 = e2(i2, l2, r2, o2, a2 + "[" + l2 + "]", "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            if (c2 instanceof Error) {
              return c2;
            }
          }
          return null;
        }
        return r(t);
      }
      function s() {
        function e2(e3, t, n, r2, o2) {
          if (!g.isValidElement(e3[t])) {
            var a2 = b[r2];
            return new Error("Invalid " + a2 + " `" + o2 + "` supplied to " + ("`" + n + "`, expected a single ReactElement."));
          }
          return null;
        }
        return r(e2);
      }
      function u(e2) {
        function t(t2, n, r2, o2, a2) {
          if (!(t2[n] instanceof e2)) {
            var i2 = b[o2];
            var s2 = e2.name || C;
            var u2 = y(t2[n]);
            return new Error("Invalid " + i2 + " `" + a2 + "` of type " + ("`" + u2 + "` supplied to `" + r2 + "`, expected ") + ("instance of `" + s2 + "`."));
          }
          return null;
        }
        return r(t);
      }
      function l(e2) {
        function t(t2, n, r2, o2, a2) {
          var i2 = t2[n];
          for (var s2 = 0; s2 < e2.length; s2++) {
            if (i2 === e2[s2]) {
              return null;
            }
          }
          var u2 = b[o2];
          var l2 = JSON.stringify(e2);
          return new Error("Invalid " + u2 + " `" + a2 + "` of value `" + i2 + "` " + ("supplied to `" + r2 + "`, expected one of " + l2 + "."));
        }
        return r(Array.isArray(e2) ? t : function() {
          return new Error("Invalid argument supplied to oneOf, expected an instance of array.");
        });
      }
      function c(e2) {
        function t(t2, n, r2, o2, a2) {
          var i2 = t2[n];
          var s2 = m(i2);
          if (s2 !== "object") {
            var u2 = b[o2];
            return new Error("Invalid " + u2 + " `" + a2 + "` of type " + ("`" + s2 + "` supplied to `" + r2 + "`, expected an object."));
          }
          for (var l2 in i2) {
            if (i2.hasOwnProperty(l2)) {
              var c2 = e2(i2, l2, r2, o2, a2 + "." + l2, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              if (c2 instanceof Error) {
                return c2;
              }
            }
          }
          return null;
        }
        return r(t);
      }
      function p(e2) {
        function t(t2, n, r2, o2, a2) {
          for (var i2 = 0; i2 < e2.length; i2++) {
            var s2 = e2[i2];
            if (s2(t2, n, r2, o2, a2, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED") == null) {
              return null;
            }
          }
          var u2 = b[o2];
          return new Error("Invalid " + u2 + " `" + a2 + "` supplied to " + ("`" + r2 + "`."));
        }
        return r(Array.isArray(e2) ? t : function() {
          return new Error("Invalid argument supplied to oneOfType, expected an instance of array.");
        });
      }
      function d() {
        function e2(e3, t, n, r2, o2) {
          if (!h(e3[t])) {
            var a2 = b[r2];
            return new Error("Invalid " + a2 + " `" + o2 + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
          }
          return null;
        }
        return r(e2);
      }
      function f(e2) {
        function t(t2, n, r2, o2, a2) {
          var i2 = t2[n];
          var s2 = m(i2);
          if (s2 !== "object") {
            var u2 = b[o2];
            return new Error("Invalid " + u2 + " `" + a2 + "` of type `" + s2 + "` " + ("supplied to `" + r2 + "`, expected `object`."));
          }
          for (var l2 in e2) {
            var c2 = e2[l2];
            if (c2) {
              var p2 = c2(i2, l2, r2, o2, a2 + "." + l2, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              if (p2) {
                return p2;
              }
            }
          }
          return null;
        }
        return r(t);
      }
      function h(e2) {
        switch (typeof e2) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !e2;
          case "object":
            if (Array.isArray(e2)) {
              return e2.every(h);
            }
            if (e2 === null || g.isValidElement(e2)) {
              return true;
            }
            var t = w(e2);
            if (!t) {
              return false;
            }
            var n;
            var r2 = t.call(e2);
            if (t !== e2.entries) {
              while (!(n = r2.next()).done) {
                if (!h(n.value)) {
                  return false;
                }
              }
            } else {
              while (!(n = r2.next()).done) {
                var o2 = n.value;
                if (o2 && !h(o2[1])) {
                  return false;
                }
              }
            }
            return true;
          default:
            return false;
        }
      }
      function m(e2) {
        var t = typeof e2;
        if (Array.isArray(e2)) {
          return "array";
        } else if (e2 instanceof RegExp) {
          return "object";
        } else {
          return t;
        }
      }
      function v(e2) {
        var t = m(e2);
        if (t === "object") {
          if (e2 instanceof Date) {
            return "date";
          }
          if (e2 instanceof RegExp) {
            return "regexp";
          }
        }
        return t;
      }
      function y(e2) {
        if (e2.constructor && e2.constructor.name) {
          return e2.constructor.name;
        } else {
          return "<<anonymous>>";
        }
      }
      var g = require__35();
      var b = require__56();
      var E = require__8();
      var w = require__99();
      var C = "<<anonymous>>";
      var _ = {
        array: o("array"),
        bool: o("boolean"),
        func: o("function"),
        number: o("number"),
        object: o("object"),
        string: o("string"),
        any: a(),
        arrayOf: i,
        element: s(),
        instanceOf: u,
        node: d(),
        objectOf: c,
        oneOf: l,
        oneOfType: p,
        shape: f
      };
      module.exports = _;
    }
  });

  // src/generated/47.js
  var require__101 = __commonJS({
    "src/generated/47.js"(exports, module) {
      function r(e2) {
        if (e2.checkedLink != null && e2.valueLink != null) {
          l(false);
        } else {
        }
      }
      function o(e2) {
        r(e2);
        if (e2.value != null || e2.onChange != null) {
          l(false);
        } else {
        }
      }
      function a(e2) {
        r(e2);
        if (e2.checked != null || e2.onChange != null) {
          l(false);
        } else {
        }
      }
      function i(e2) {
        if (e2) {
          var t = e2.getName();
          if (t) {
            return " Check the render method of `" + t + "`.";
          }
        }
        return "";
      }
      var s = require__100();
      var u = require__55();
      var l = require__3();
      require__19();
      var c = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };
      var p = {
        value: function(e2, t, n) {
          if (!e2[t] || c[e2.type] || e2.onChange || e2.readOnly || e2.disabled) {
            return null;
          } else {
            return new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
          }
        },
        checked: function(e2, t, n) {
          if (!e2[t] || e2.onChange || e2.readOnly || e2.disabled) {
            return null;
          } else {
            return new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
          }
        },
        onChange: s.func
      };
      var d = {};
      var f = {
        checkPropTypes: function(e2, t, n) {
          for (var r2 in p) {
            if (p.hasOwnProperty(r2)) {
              var o2 = p[r2](t, r2, e2, u.prop, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            }
            if (o2 instanceof Error && !(o2.message in d)) {
              d[o2.message] = true;
              i(n);
            }
          }
        },
        getValue: function(e2) {
          if (e2.valueLink) {
            o(e2);
            return e2.valueLink.value;
          } else {
            return e2.value;
          }
        },
        getChecked: function(e2) {
          if (e2.checkedLink) {
            a(e2);
            return e2.checkedLink.value;
          } else {
            return e2.checked;
          }
        },
        executeOnChange: function(e2, t) {
          if (e2.valueLink) {
            o(e2);
            return e2.valueLink.requestChange(t.target.value);
          } else if (e2.checkedLink) {
            a(e2);
            return e2.checkedLink.requestChange(t.target.checked);
          } else if (e2.onChange) {
            return e2.onChange.call(void 0, t);
          } else {
            return void 0;
          }
        }
      };
      module.exports = f;
    }
  });

  // src/generated/234.js
  var require__102 = __commonJS({
    "src/generated/234.js"(exports, module) {
      function r() {
        if (this._rootNodeID) {
          d.updateWrapper(this);
        }
      }
      function o(e2) {
        var t = this._currentElement.props;
        var n = i.executeOnChange(t, e2);
        u.asap(r, this);
        var o2 = t.name;
        if (t.type === "radio" && o2 != null) {
          var a2 = s.getNode(this._rootNodeID);
          for (var l2 = a2; l2.parentNode; ) {
            l2 = l2.parentNode;
          }
          for (var d2 = l2.querySelectorAll("input[name=" + JSON.stringify("" + o2) + '][type="radio"]'), f = 0; f < d2.length; f++) {
            var h = d2[f];
            if (h !== a2 && h.form === a2.form) {
              var m = s.getID(h);
              if (m) {
              } else {
                c(false);
              }
              var v = p[m];
              if (v) {
              } else {
                c(false);
              }
              u.asap(r, v);
            }
          }
        }
        return n;
      }
      var a = require__64();
      var i = require__101();
      var s = require__63();
      var u = require__48();
      var l = require__30();
      var c = require__3();
      var p = {};
      var d = {
        getNativeProps: function(e2, t, n) {
          var r2 = i.getValue(t);
          var o2 = i.getChecked(t);
          var a2 = l({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: r2 ?? e2._wrapperState.initialValue,
            checked: o2 ?? e2._wrapperState.initialChecked,
            onChange: e2._wrapperState.onChange
          });
          return a2;
        },
        mountWrapper: function(e2, t) {
          var n = t.defaultValue;
          e2._wrapperState = {
            initialChecked: t.defaultChecked || false,
            initialValue: n ?? null,
            onChange: o.bind(e2)
          };
        },
        mountReadyWrapper: function(e2) {
          p[e2._rootNodeID] = e2;
        },
        unmountWrapper: function(e2) {
          delete p[e2._rootNodeID];
        },
        updateWrapper: function(e2) {
          var t = e2._currentElement.props;
          var n = t.checked;
          if (n != null) {
            a.updatePropertyByID(e2._rootNodeID, "checked", n || false);
          }
          var r2 = i.getValue(t);
          if (r2 != null) {
            a.updatePropertyByID(e2._rootNodeID, "value", "" + r2);
          }
        }
      };
      module.exports = d;
    }
  });

  // src/generated/63.js
  var require__103 = __commonJS({
    "src/generated/63.js"(exports, module) {
      function r(e2) {
        return m[e2];
      }
      function o(e2, t) {
        if (e2 && e2.key != null) {
          return i(e2.key);
        } else {
          return t.toString(36);
        }
      }
      function a(e2) {
        return ("" + e2).replace(v, r);
      }
      function i(e2) {
        return "$" + a(e2);
      }
      function s(e2, t, n, r2) {
        var a2 = typeof e2;
        if (a2 === "undefined" || a2 === "boolean") {
          e2 = null;
        }
        if (e2 === null || a2 === "string" || a2 === "number" || l.isValidElement(e2)) {
          n(r2, e2, t === "" ? f + o(e2, 0) : t);
          return 1;
        }
        var u2;
        var c2;
        var m2 = 0;
        var v2 = t === "" ? f : t + h;
        if (Array.isArray(e2)) {
          for (var y = 0; y < e2.length; y++) {
            u2 = e2[y];
            c2 = v2 + o(u2, y);
            m2 += s(u2, c2, n, r2);
          }
        } else {
          var g = p(e2);
          if (g) {
            var b;
            var E = g.call(e2);
            if (g !== e2.entries) {
              var w = 0;
              while (!(b = E.next()).done) {
                u2 = b.value;
                c2 = v2 + o(u2, w++);
                m2 += s(u2, c2, n, r2);
              }
            } else {
              while (!(b = E.next()).done) {
                var C = b.value;
                if (C) {
                  u2 = C[1];
                  c2 = v2 + i(C[0]) + h + o(u2, 0);
                  m2 += s(u2, c2, n, r2);
                }
              }
            }
          } else if (a2 === "object") {
            String(e2);
            d(false);
          }
        }
        return m2;
      }
      function u(e2, t, n) {
        if (e2 == null) {
          return 0;
        } else {
          return s(e2, "", t, n);
        }
      }
      require__();
      var l = require__35();
      var c = require__38();
      var p = require__99();
      var d = require__3();
      require__19();
      var f = c.SEPARATOR;
      var h = ":";
      var m = {
        "=": "=0",
        ".": "=1",
        ":": "=2"
      };
      var v = /[=.:]/g;
      module.exports = u;
    }
  });

  // src/generated/85.js
  var require__104 = __commonJS({
    "src/generated/85.js"(exports, module) {
      function r(e2) {
        return ("" + e2).replace(E, "//");
      }
      function o(e2, t) {
        this.func = e2;
        this.context = t;
        this.count = 0;
      }
      function a(e2, t, n) {
        var r2 = e2.func;
        var o2 = e2.context;
        r2.call(o2, t, e2.count++);
      }
      function i(e2, t, n) {
        if (e2 == null) {
          return e2;
        }
        var r2 = o.getPooled(t, n);
        y(e2, a, r2);
        o.release(r2);
      }
      function s(e2, t, n, r2) {
        this.result = e2;
        this.keyPrefix = t;
        this.func = n;
        this.context = r2;
        this.count = 0;
      }
      function u(e2, t, n) {
        var o2 = e2.result;
        var a2 = e2.keyPrefix;
        var i2 = e2.func;
        var s2 = e2.context;
        var u2 = i2.call(s2, t, e2.count++);
        if (Array.isArray(u2)) {
          l(u2, o2, n, v.thatReturnsArgument);
        } else if (u2 != null) {
          if (m.isValidElement(u2)) {
            u2 = m.cloneAndReplaceKey(u2, a2 + (u2 !== t ? r(u2.key || "") + "/" : "") + n);
          }
          o2.push(u2);
        }
      }
      function l(e2, t, n, o2, a2) {
        var i2 = "";
        if (n != null) {
          i2 = r(n) + "/";
        }
        var l2 = s.getPooled(t, i2, o2, a2);
        y(e2, u, l2);
        s.release(l2);
      }
      function c(e2, t, n) {
        if (e2 == null) {
          return e2;
        }
        var r2 = [];
        l(e2, r2, null, t, n);
        return r2;
      }
      function p(e2, t, n) {
        return null;
      }
      function d(e2, t) {
        return y(e2, p, null);
      }
      function f(e2) {
        var t = [];
        l(e2, t, null, v.thatReturnsArgument);
        return t;
      }
      var h = require__45();
      var m = require__35();
      var v = require__8();
      var y = require__103();
      var g = h.twoArgumentPooler;
      var b = h.fourArgumentPooler;
      var E = /\/(?!\/)/g;
      o.prototype.destructor = function() {
        this.func = null;
        this.context = null;
        this.count = 0;
      };
      h.addPoolingTo(o, g);
      s.prototype.destructor = function() {
        this.result = null;
        this.keyPrefix = null;
        this.func = null;
        this.context = null;
        this.count = 0;
      };
      h.addPoolingTo(s, b);
      var w = {
        forEach: i,
        map: c,
        mapIntoWithKeyPrefixInternal: l,
        count: d,
        toArray: f
      };
      module.exports = w;
    }
  });

  // src/generated/89.js
  var require__105 = __commonJS({
    "src/generated/89.js"(exports, module) {
      function r() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
          this._wrapperState.pendingUpdate = false;
          var e2 = this._currentElement.props;
          var t = i.getValue(e2);
          if (t != null) {
            o(this, Boolean(e2.multiple), t);
          }
        }
      }
      function o(e2, t, n) {
        var r2;
        var o2;
        var a2 = s.getNode(e2._rootNodeID).options;
        if (t) {
          r2 = {};
          o2 = 0;
          for (; o2 < n.length; o2++) {
            r2["" + n[o2]] = true;
          }
          for (o2 = 0; o2 < a2.length; o2++) {
            var i2 = r2.hasOwnProperty(a2[o2].value);
            if (a2[o2].selected !== i2) {
              a2[o2].selected = i2;
            }
          }
        } else {
          r2 = "" + n;
          o2 = 0;
          for (; o2 < a2.length; o2++) {
            if (a2[o2].value === r2) {
              a2[o2].selected = true;
              return;
            }
          }
          if (a2.length) {
            a2[0].selected = true;
          }
        }
      }
      function a(e2) {
        var t = this._currentElement.props;
        var n = i.executeOnChange(t, e2);
        this._wrapperState.pendingUpdate = true;
        u.asap(r, this);
        return n;
      }
      var i = require__101();
      var s = require__63();
      var u = require__48();
      var l = require__30();
      require__19();
      var c = "__ReactDOMSelect_value$" + Math.random().toString(36).slice(2);
      var p = {
        valueContextKey: c,
        getNativeProps: function(e2, t, n) {
          return l({}, t, {
            onChange: e2._wrapperState.onChange,
            value: void 0
          });
        },
        mountWrapper: function(e2, t) {
          var n = i.getValue(t);
          e2._wrapperState = {
            pendingUpdate: false,
            initialValue: n ?? t.defaultValue,
            onChange: a.bind(e2),
            wasMultiple: Boolean(t.multiple)
          };
        },
        processChildContext: function(e2, t, n) {
          var r2 = l({}, n);
          r2[c] = e2._wrapperState.initialValue;
          return r2;
        },
        postUpdateWrapper: function(e2) {
          var t = e2._currentElement.props;
          e2._wrapperState.initialValue = void 0;
          var n = e2._wrapperState.wasMultiple;
          e2._wrapperState.wasMultiple = Boolean(t.multiple);
          var r2 = i.getValue(t);
          if (r2 != null) {
            e2._wrapperState.pendingUpdate = false;
            o(e2, Boolean(t.multiple), r2);
          } else if (n !== Boolean(t.multiple)) {
            if (t.defaultValue != null) {
              o(e2, Boolean(t.multiple), t.defaultValue);
            } else {
              o(e2, Boolean(t.multiple), t.multiple ? [] : "");
            }
          }
        }
      };
      module.exports = p;
    }
  });

  // src/generated/235.js
  var require__106 = __commonJS({
    "src/generated/235.js"(exports, module) {
      var r = require__104();
      var o = require__105();
      var a = require__30();
      require__19();
      var i = o.valueContextKey;
      var s = {
        mountWrapper: function(e2, t, n) {
          var r2 = n[i];
          var o2 = null;
          if (r2 != null) {
            o2 = false;
            if (Array.isArray(r2)) {
              for (var a2 = 0; a2 < r2.length; a2++) {
                if ("" + r2[a2] == "" + t.value) {
                  o2 = true;
                  break;
                }
              }
            } else {
              o2 = "" + r2 == "" + t.value;
            }
          }
          e2._wrapperState = {
            selected: o2
          };
        },
        getNativeProps: function(e2, t, n) {
          var o2 = a({
            selected: void 0,
            children: void 0
          }, t);
          if (e2._wrapperState.selected != null) {
            o2.selected = e2._wrapperState.selected;
          }
          var i2 = "";
          r.forEach(t.children, function(e3) {
            if (e3 != null) {
              if (typeof e3 == "string" || typeof e3 == "number") {
                i2 += e3;
              }
            }
          });
          if (i2) {
            o2.children = i2;
          }
          return o2;
        }
      };
      module.exports = s;
    }
  });

  // src/generated/237.js
  var require__107 = __commonJS({
    "src/generated/237.js"(exports, module) {
      function r() {
        if (this._rootNodeID) {
          c.updateWrapper(this);
        }
      }
      function o(e2) {
        var t = this._currentElement.props;
        var n = a.executeOnChange(t, e2);
        s.asap(r, this);
        return n;
      }
      var a = require__101();
      var i = require__64();
      var s = require__48();
      var u = require__30();
      var l = require__3();
      require__19();
      var c = {
        getNativeProps: function(e2, t, n) {
          if (t.dangerouslySetInnerHTML != null) {
            l(false);
          } else {
          }
          var r2 = u({}, t, {
            defaultValue: void 0,
            value: void 0,
            children: e2._wrapperState.initialValue,
            onChange: e2._wrapperState.onChange
          });
          return r2;
        },
        mountWrapper: function(e2, t) {
          var n = t.defaultValue;
          var r2 = t.children;
          if (r2 != null) {
            if (n != null) {
              l(false);
            } else {
            }
            if (Array.isArray(r2)) {
              if (r2.length <= 1) {
              } else {
                l(false);
              }
              r2 = r2[0];
            }
            n = "" + r2;
          }
          if (n == null) {
            n = "";
          }
          var i2 = a.getValue(t);
          e2._wrapperState = {
            initialValue: "" + (i2 ?? n),
            onChange: o.bind(e2)
          };
        },
        updateWrapper: function(e2) {
          var t = e2._currentElement.props;
          var n = a.getValue(t);
          if (n != null) {
            i.updatePropertyByID(e2._rootNodeID, "value", "" + n);
          }
        }
      };
      module.exports = c;
    }
  });

  // src/generated/229.js
  var require__108 = __commonJS({
    "src/generated/229.js"(exports, module) {
      function r(e2, t, n) {
        var r2 = e2[n] === void 0;
        if (t != null && r2) {
          e2[n] = a(t, null);
        }
      }
      var o = require__44();
      var a = require__61();
      var i = require__57();
      var s = require__103();
      require__19();
      var u = {
        instantiateChildren: function(e2, t, n) {
          if (e2 == null) {
            return null;
          }
          var o2 = {};
          s(e2, r, o2);
          return o2;
        },
        updateChildren: function(e2, t, n, r2) {
          if (!t && !e2) {
            return null;
          }
          var s2;
          for (s2 in t) {
            if (t.hasOwnProperty(s2)) {
              var u2 = e2 && e2[s2];
              var l = u2 && u2._currentElement;
              var c = t[s2];
              if (u2 != null && i(l, c)) {
                o.receiveComponent(u2, c, n, r2);
                t[s2] = u2;
              } else {
                if (u2) {
                  o.unmountComponent(u2, s2);
                }
                var p = a(c, null);
                t[s2] = p;
              }
            }
          }
          for (s2 in e2) {
            if (!!e2.hasOwnProperty(s2) && (!t || !t.hasOwnProperty(s2))) {
              o.unmountComponent(e2[s2]);
            }
          }
          return t;
        },
        unmountChildren: function(e2) {
          for (var t in e2) {
            if (e2.hasOwnProperty(t)) {
              var n = e2[t];
              o.unmountComponent(n);
            }
          }
        }
      };
      module.exports = u;
    }
  });

  // src/generated/107.js
  var require__109 = __commonJS({
    "src/generated/107.js"(exports, module) {
      function r(e2, t, n) {
        var r2 = e2;
        var o2 = r2[n] === void 0;
        if (o2 && t != null) {
          r2[n] = t;
        }
      }
      function o(e2) {
        if (e2 == null) {
          return e2;
        }
        var t = {};
        a(e2, r, t);
        return t;
      }
      var a = require__103();
      require__19();
      module.exports = o;
    }
  });

  // src/generated/242.js
  var require__110 = __commonJS({
    "src/generated/242.js"(exports, module) {
      function r(e2, t, n) {
        v.push({
          parentID: e2,
          parentNode: null,
          type: p.INSERT_MARKUP,
          markupIndex: y.push(t) - 1,
          content: null,
          fromIndex: null,
          toIndex: n
        });
      }
      function o(e2, t, n) {
        v.push({
          parentID: e2,
          parentNode: null,
          type: p.MOVE_EXISTING,
          markupIndex: null,
          content: null,
          fromIndex: t,
          toIndex: n
        });
      }
      function a(e2, t) {
        v.push({
          parentID: e2,
          parentNode: null,
          type: p.REMOVE_NODE,
          markupIndex: null,
          content: null,
          fromIndex: t,
          toIndex: null
        });
      }
      function i(e2, t) {
        v.push({
          parentID: e2,
          parentNode: null,
          type: p.SET_MARKUP,
          markupIndex: null,
          content: t,
          fromIndex: null,
          toIndex: null
        });
      }
      function s(e2, t) {
        v.push({
          parentID: e2,
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
      var c = require__54();
      var p = require__11();
      require__();
      var d = require__44();
      var f = require__108();
      var h = require__109();
      var m = 0;
      var v = [];
      var y = [];
      var g = {
        Mixin: {
          _reconcilerInstantiateChildren: function(e2, t, n) {
            return f.instantiateChildren(e2, t, n);
          },
          _reconcilerUpdateChildren: function(e2, t, n, r2) {
            var o2;
            o2 = h(t);
            return f.updateChildren(e2, o2, n, r2);
          },
          mountChildren: function(e2, t, n) {
            var r2 = this._reconcilerInstantiateChildren(e2, t, n);
            this._renderedChildren = r2;
            var o2 = [];
            var a2 = 0;
            for (var i2 in r2) {
              if (r2.hasOwnProperty(i2)) {
                var s2 = r2[i2];
                var u2 = this._rootNodeID + i2;
                var l2 = d.mountComponent(s2, u2, t, n);
                s2._mountIndex = a2++;
                o2.push(l2);
              }
            }
            return o2;
          },
          updateTextContent: function(e2) {
            m++;
            var t = true;
            try {
              var n = this._renderedChildren;
              f.unmountChildren(n);
              for (var r2 in n) {
                if (n.hasOwnProperty(r2)) {
                  this._unmountChild(n[r2]);
                }
              }
              this.setTextContent(e2);
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
          updateMarkup: function(e2) {
            m++;
            var t = true;
            try {
              var n = this._renderedChildren;
              f.unmountChildren(n);
              for (var r2 in n) {
                if (n.hasOwnProperty(r2)) {
                  this._unmountChildByName(n[r2], r2);
                }
              }
              this.setMarkup(e2);
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
          updateChildren: function(e2, t, n) {
            m++;
            var r2 = true;
            try {
              this._updateChildren(e2, t, n);
              r2 = false;
            } finally {
              m--;
              if (!m) {
                if (r2) {
                  l();
                } else {
                  u();
                }
              }
            }
          },
          _updateChildren: function(e2, t, n) {
            var r2 = this._renderedChildren;
            var o2 = this._reconcilerUpdateChildren(r2, e2, t, n);
            this._renderedChildren = o2;
            if (o2 || r2) {
              var a2;
              var i2 = 0;
              var s2 = 0;
              for (a2 in o2) {
                if (o2.hasOwnProperty(a2)) {
                  var u2 = r2 && r2[a2];
                  var l2 = o2[a2];
                  if (u2 === l2) {
                    this.moveChild(u2, s2, i2);
                    i2 = Math.max(u2._mountIndex, i2);
                    u2._mountIndex = s2;
                  } else {
                    if (u2) {
                      i2 = Math.max(u2._mountIndex, i2);
                      this._unmountChild(u2);
                    }
                    this._mountChildByNameAtIndex(l2, a2, s2, t, n);
                  }
                  s2++;
                }
              }
              for (a2 in r2) {
                if (!!r2.hasOwnProperty(a2) && (!o2 || !o2.hasOwnProperty(a2))) {
                  this._unmountChild(r2[a2]);
                }
              }
            }
          },
          unmountChildren: function() {
            var e2 = this._renderedChildren;
            f.unmountChildren(e2);
            this._renderedChildren = null;
          },
          moveChild: function(e2, t, n) {
            if (e2._mountIndex < n) {
              o(this._rootNodeID, e2._mountIndex, t);
            }
          },
          createChild: function(e2, t) {
            r(this._rootNodeID, t, e2._mountIndex);
          },
          removeChild: function(e2) {
            a(this._rootNodeID, e2._mountIndex);
          },
          setTextContent: function(e2) {
            s(this._rootNodeID, e2);
          },
          setMarkup: function(e2) {
            i(this._rootNodeID, e2);
          },
          _mountChildByNameAtIndex: function(e2, t, n, r2, o2) {
            var a2 = this._rootNodeID + t;
            var i2 = d.mountComponent(e2, a2, r2, o2);
            e2._mountIndex = n;
            this.createChild(e2, i2);
          },
          _unmountChild: function(e2) {
            this.removeChild(e2);
            e2._mountIndex = null;
          }
        }
      };
      module.exports = g;
    }
  });

  // src/generated/74.js
  var require__111 = __commonJS({
    "src/generated/74.js"(exports, module) {
      function n(e2, t) {
        if (e2 === t) {
          return true;
        }
        if (typeof e2 != "object" || e2 === null || typeof t != "object" || t === null) {
          return false;
        }
        var n2 = Object.keys(e2);
        var o = Object.keys(t);
        if (n2.length !== o.length) {
          return false;
        }
        var a = r.bind(t);
        for (var i = 0; i < n2.length; i++) {
          if (!a(n2[i]) || e2[n2[i]] !== t[n2[i]]) {
            return false;
          }
        }
        return true;
      }
      var r = Object.prototype.hasOwnProperty;
      module.exports = n;
    }
  });

  // src/generated/232.js
  var require__112 = __commonJS({
    "src/generated/232.js"(exports, module) {
      function r() {
        return this;
      }
      function o() {
        var e2 = this._reactInternalComponent;
        return !!e2;
      }
      function a() {
      }
      function i(e2, t) {
        var n = this._reactInternalComponent;
        if (n) {
          D.enqueueSetPropsInternal(n, e2);
          if (t) {
            D.enqueueCallbackInternal(n, t);
          }
        }
      }
      function s(e2, t) {
        var n = this._reactInternalComponent;
        if (n) {
          D.enqueueReplacePropsInternal(n, e2);
          if (t) {
            D.enqueueCallbackInternal(n, t);
          }
        }
      }
      function u(e2, t) {
        if (t) {
          if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) {
              j(false);
            } else {
            }
            if (typeof t.dangerouslySetInnerHTML == "object" && z in t.dangerouslySetInnerHTML) {
            } else {
              j(false);
            }
          }
          if (t.style != null && typeof t.style != "object") {
            j(false);
          } else {
          }
        }
      }
      function l(e2, t, n, r2) {
        var o2 = T.findReactContainerForID(e2);
        if (o2) {
          var a2 = o2.nodeType === Y ? o2.ownerDocument : o2;
          V(t, a2);
        }
        r2.getReactMountReady().enqueue(c, {
          id: e2,
          registrationName: t,
          listener: n
        });
      }
      function c() {
        var e2 = this;
        C.putListener(e2.id, e2.registrationName, e2.listener);
      }
      function p() {
        var e2 = this;
        if (e2._rootNodeID) {
        } else {
          j(false);
        }
        var t = T.getNode(e2._rootNodeID);
        if (t) {
        } else {
          j(false);
        }
        switch (e2._tag) {
          case "iframe":
            e2._wrapperState.listeners = [C.trapBubbledEvent(w.topLevelTypes.topLoad, "load", t)];
            break;
          case "video":
          case "audio":
            e2._wrapperState.listeners = [];
            for (var n in G) {
              if (G.hasOwnProperty(n)) {
                e2._wrapperState.listeners.push(C.trapBubbledEvent(w.topLevelTypes[n], G[n], t));
              }
            }
            break;
          case "img":
            e2._wrapperState.listeners = [C.trapBubbledEvent(w.topLevelTypes.topError, "error", t), C.trapBubbledEvent(w.topLevelTypes.topLoad, "load", t)];
            break;
          case "form":
            e2._wrapperState.listeners = [C.trapBubbledEvent(w.topLevelTypes.topReset, "reset", t), C.trapBubbledEvent(w.topLevelTypes.topSubmit, "submit", t)];
        }
      }
      function d() {
        P.mountReadyWrapper(this);
      }
      function f() {
        S.postUpdateWrapper(this);
      }
      function h(e2) {
        if (!J.call(Z, e2)) {
          if (Q.test(e2)) {
          } else {
            j(false);
          }
          Z[e2] = true;
        }
      }
      function m(e2, t) {
        return e2.indexOf("-") >= 0 || t.is != null;
      }
      function v(e2) {
        h(e2);
        this._tag = e2.toLowerCase();
        this._renderedChildren = null;
        this._previousStyle = null;
        this._previousStyleCopy = null;
        this._rootNodeID = null;
        this._wrapperState = null;
        this._topLevelWrapper = null;
        this._nodeWithLegacyProperties = null;
      }
      var y = require__89();
      var g = require__97();
      var b = require__17();
      var E = require__20();
      var w = require__21();
      var C = require__32();
      var _ = require__65();
      var O = require__98();
      var P = require__102();
      var k = require__106();
      var S = require__105();
      var x = require__107();
      var T = require__63();
      var M = require__110();
      var N = require__12();
      var D = require__49();
      var R = require__30();
      var A = require__34();
      var I = require__14();
      var j = require__3();
      require__31();
      var L = require__73();
      var U = require__13();
      var F = require__15();
      require__111();
      require__62();
      require__19();
      var B = C.deleteListener;
      var V = C.listenTo;
      var W = C.registrationNameModules;
      var H = {
        string: true,
        number: true
      };
      var q = L({
        children: null
      });
      var K = L({
        style: null
      });
      var z = L({
        __html: null
      });
      var Y = 1;
      var G = {
        topAbort: "abort",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTimeUpdate: "timeupdate",
        topVolumeChange: "volumechange",
        topWaiting: "waiting"
      };
      var X = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      };
      var $2 = {
        listing: true,
        pre: true,
        textarea: true
      };
      R({
        menuitem: true
      }, X);
      var Q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      var Z = {};
      var J = {}.hasOwnProperty;
      v.displayName = "ReactDOMComponent";
      v.Mixin = {
        construct: function(e2) {
          this._currentElement = e2;
        },
        mountComponent: function(e2, t, n) {
          this._rootNodeID = e2;
          var r2 = this._currentElement.props;
          switch (this._tag) {
            case "iframe":
            case "img":
            case "form":
            case "video":
            case "audio":
              this._wrapperState = {
                listeners: null
              };
              t.getReactMountReady().enqueue(p, this);
              break;
            case "button":
              r2 = O.getNativeProps(this, r2, n);
              break;
            case "input":
              P.mountWrapper(this, r2, n);
              r2 = P.getNativeProps(this, r2, n);
              break;
            case "option":
              k.mountWrapper(this, r2, n);
              r2 = k.getNativeProps(this, r2, n);
              break;
            case "select":
              S.mountWrapper(this, r2, n);
              r2 = S.getNativeProps(this, r2, n);
              n = S.processChildContext(this, r2, n);
              break;
            case "textarea":
              x.mountWrapper(this, r2, n);
              r2 = x.getNativeProps(this, r2, n);
          }
          u(this, r2);
          var o2;
          if (t.useCreateElement) {
            var a2 = n[T.ownerDocumentContextKey];
            var i2 = a2.createElement(this._currentElement.type);
            E.setAttributeForID(i2, this._rootNodeID);
            T.getID(i2);
            this._updateDOMProperties({}, r2, t, i2);
            this._createInitialChildren(t, r2, n, i2);
            o2 = i2;
          } else {
            var s2 = this._createOpenTagMarkupAndPutListeners(t, r2);
            var l2 = this._createContentMarkup(t, r2, n);
            o2 = !l2 && X[this._tag] ? s2 + "/>" : s2 + ">" + l2 + "</" + this._currentElement.type + ">";
          }
          switch (this._tag) {
            case "input":
              t.getReactMountReady().enqueue(d, this);
            case "button":
            case "select":
            case "textarea":
              if (r2.autoFocus) {
                t.getReactMountReady().enqueue(y.focusDOMComponent, this);
              }
          }
          return o2;
        },
        _createOpenTagMarkupAndPutListeners: function(e2, t) {
          var n = "<" + this._currentElement.type;
          for (var r2 in t) {
            if (t.hasOwnProperty(r2)) {
              var o2 = t[r2];
              if (o2 != null) {
                if (W.hasOwnProperty(r2)) {
                  if (o2) {
                    l(this._rootNodeID, r2, o2, e2);
                  }
                } else {
                  if (r2 === K) {
                    o2 &&= this._previousStyleCopy = R({}, t.style);
                    o2 = g.createMarkupForStyles(o2);
                  }
                  var a2 = null;
                  if (this._tag != null && m(this._tag, t)) {
                    if (r2 !== q) {
                      a2 = E.createMarkupForCustomAttribute(r2, o2);
                    }
                  } else {
                    a2 = E.createMarkupForProperty(r2, o2);
                  }
                  if (a2) {
                    n += " " + a2;
                  }
                }
              }
            }
          }
          if (e2.renderToStaticMarkup) {
            return n;
          }
          var i2 = E.createMarkupForID(this._rootNodeID);
          return n + " " + i2;
        },
        _createContentMarkup: function(e2, t, n) {
          var r2 = "";
          var o2 = t.dangerouslySetInnerHTML;
          if (o2 != null) {
            if (o2.__html != null) {
              r2 = o2.__html;
            }
          } else {
            var a2 = H[typeof t.children] ? t.children : null;
            var i2 = a2 != null ? null : t.children;
            if (a2 != null) {
              r2 = I(a2);
            } else if (i2 != null) {
              var s2 = this.mountChildren(i2, e2, n);
              r2 = s2.join("");
            }
          }
          if ($2[this._tag] && r2.charAt(0) === "\n") {
            return "\n" + r2;
          } else {
            return r2;
          }
        },
        _createInitialChildren: function(e2, t, n, r2) {
          var o2 = t.dangerouslySetInnerHTML;
          if (o2 != null) {
            if (o2.__html != null) {
              U(r2, o2.__html);
            }
          } else {
            var a2 = H[typeof t.children] ? t.children : null;
            var i2 = a2 != null ? null : t.children;
            if (a2 != null) {
              F(r2, a2);
            } else if (i2 != null) {
              for (var s2 = this.mountChildren(i2, e2, n), u2 = 0; u2 < s2.length; u2++) {
                r2.appendChild(s2[u2]);
              }
            }
          }
        },
        receiveComponent: function(e2, t, n) {
          var r2 = this._currentElement;
          this._currentElement = e2;
          this.updateComponent(t, r2, e2, n);
        },
        updateComponent: function(e2, t, n, r2) {
          var o2 = t.props;
          var a2 = this._currentElement.props;
          switch (this._tag) {
            case "button":
              o2 = O.getNativeProps(this, o2);
              a2 = O.getNativeProps(this, a2);
              break;
            case "input":
              P.updateWrapper(this);
              o2 = P.getNativeProps(this, o2);
              a2 = P.getNativeProps(this, a2);
              break;
            case "option":
              o2 = k.getNativeProps(this, o2);
              a2 = k.getNativeProps(this, a2);
              break;
            case "select":
              o2 = S.getNativeProps(this, o2);
              a2 = S.getNativeProps(this, a2);
              break;
            case "textarea":
              x.updateWrapper(this);
              o2 = x.getNativeProps(this, o2);
              a2 = x.getNativeProps(this, a2);
          }
          u(this, a2);
          this._updateDOMProperties(o2, a2, e2, null);
          this._updateDOMChildren(o2, a2, e2, r2);
          if (!A && this._nodeWithLegacyProperties) {
            this._nodeWithLegacyProperties.props = a2;
          }
          if (this._tag === "select") {
            e2.getReactMountReady().enqueue(f, this);
          }
        },
        _updateDOMProperties: function(e2, t, n, r2) {
          var o2;
          var a2;
          var i2;
          for (o2 in e2) {
            if (!t.hasOwnProperty(o2) && e2.hasOwnProperty(o2)) {
              if (o2 === K) {
                var s2 = this._previousStyleCopy;
                for (a2 in s2) {
                  if (s2.hasOwnProperty(a2)) {
                    i2 = i2 || {};
                    i2[a2] = "";
                  }
                }
                this._previousStyleCopy = null;
              } else if (W.hasOwnProperty(o2)) {
                if (e2[o2]) {
                  B(this._rootNodeID, o2);
                }
              } else if (b.properties[o2] || b.isCustomAttribute(o2)) {
                r2 ||= T.getNode(this._rootNodeID);
                E.deleteValueForProperty(r2, o2);
              }
            }
          }
          for (o2 in t) {
            var u2 = t[o2];
            var c2 = o2 === K ? this._previousStyleCopy : e2[o2];
            if (t.hasOwnProperty(o2) && u2 !== c2) {
              if (o2 === K) {
                if (u2) {
                  u2 = this._previousStyleCopy = R({}, u2);
                } else {
                  this._previousStyleCopy = null;
                }
                if (c2) {
                  for (a2 in c2) {
                    if (!!c2.hasOwnProperty(a2) && (!u2 || !u2.hasOwnProperty(a2))) {
                      i2 = i2 || {};
                      i2[a2] = "";
                    }
                  }
                  for (a2 in u2) {
                    if (u2.hasOwnProperty(a2) && c2[a2] !== u2[a2]) {
                      i2 = i2 || {};
                      i2[a2] = u2[a2];
                    }
                  }
                } else {
                  i2 = u2;
                }
              } else if (W.hasOwnProperty(o2)) {
                if (u2) {
                  l(this._rootNodeID, o2, u2, n);
                } else if (c2) {
                  B(this._rootNodeID, o2);
                }
              } else if (m(this._tag, t)) {
                r2 ||= T.getNode(this._rootNodeID);
                if (o2 === q) {
                  u2 = null;
                }
                E.setValueForAttribute(r2, o2, u2);
              } else if (b.properties[o2] || b.isCustomAttribute(o2)) {
                r2 ||= T.getNode(this._rootNodeID);
                if (u2 != null) {
                  E.setValueForProperty(r2, o2, u2);
                } else {
                  E.deleteValueForProperty(r2, o2);
                }
              }
            }
          }
          if (i2) {
            r2 ||= T.getNode(this._rootNodeID);
            g.setValueForStyles(r2, i2);
          }
        },
        _updateDOMChildren: function(e2, t, n, r2) {
          var o2 = H[typeof e2.children] ? e2.children : null;
          var a2 = H[typeof t.children] ? t.children : null;
          var i2 = e2.dangerouslySetInnerHTML && e2.dangerouslySetInnerHTML.__html;
          var s2 = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html;
          var u2 = o2 != null ? null : e2.children;
          var l2 = a2 != null ? null : t.children;
          var c2 = o2 != null || i2 != null;
          var p2 = a2 != null || s2 != null;
          if (u2 != null && l2 == null) {
            this.updateChildren(null, n, r2);
          } else if (c2 && !p2) {
            this.updateTextContent("");
          }
          if (a2 != null) {
            if (o2 !== a2) {
              this.updateTextContent("" + a2);
            }
          } else if (s2 != null) {
            if (i2 !== s2) {
              this.updateMarkup("" + s2);
            }
          } else if (l2 != null) {
            this.updateChildren(l2, n, r2);
          }
        },
        unmountComponent: function() {
          switch (this._tag) {
            case "iframe":
            case "img":
            case "form":
            case "video":
            case "audio":
              var e2 = this._wrapperState.listeners;
              if (e2) {
                for (var t = 0; t < e2.length; t++) {
                  e2[t].remove();
                }
              }
              break;
            case "input":
              P.unmountWrapper(this);
              break;
            case "html":
            case "head":
            case "body":
              j(false);
          }
          this.unmountChildren();
          C.deleteAllListeners(this._rootNodeID);
          _.unmountIDFromEnvironment(this._rootNodeID);
          this._rootNodeID = null;
          this._wrapperState = null;
          if (this._nodeWithLegacyProperties) {
            var n = this._nodeWithLegacyProperties;
            n._reactInternalComponent = null;
            this._nodeWithLegacyProperties = null;
          }
        },
        getPublicInstance: function() {
          if (!this._nodeWithLegacyProperties) {
            var e2 = T.getNode(this._rootNodeID);
            e2._reactInternalComponent = this;
            e2.getDOMNode = r;
            e2.isMounted = o;
            e2.setState = a;
            e2.replaceState = a;
            e2.forceUpdate = a;
            e2.setProps = i;
            e2.replaceProps = s;
            e2.props = this._currentElement.props;
            this._nodeWithLegacyProperties = e2;
          }
          return this._nodeWithLegacyProperties;
        }
      };
      N.measureMethods(v, "ReactDOMComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent"
      });
      R(v.prototype, v.Mixin, M.Mixin);
      module.exports = v;
    }
  });

  // src/generated/69.js
  var require__113 = __commonJS({
    "src/generated/69.js"(exports, module) {
      var r = require__8();
      var o = {
        listen: function(e2, t, n) {
          if (e2.addEventListener) {
            e2.addEventListener(t, n, false);
            return {
              remove: function() {
                e2.removeEventListener(t, n, false);
              }
            };
          } else if (e2.attachEvent) {
            e2.attachEvent("on" + t, n);
            return {
              remove: function() {
                e2.detachEvent("on" + t, n);
              }
            };
          } else {
            return void 0;
          }
        },
        capture: function(e2, t, n) {
          if (e2.addEventListener) {
            e2.addEventListener(t, n, true);
            return {
              remove: function() {
                e2.removeEventListener(t, n, true);
              }
            };
          } else {
            return {
              remove: r
            };
          }
        },
        registerDefault: function() {
        }
      };
      module.exports = o;
    }
  });

  // src/generated/169.js
  var require__114 = __commonJS({
    "src/generated/169.js"(exports, module) {
      function n(e2) {
        if (e2 === window) {
          return {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
          };
        } else {
          return {
            x: e2.scrollLeft,
            y: e2.scrollTop
          };
        }
      }
      module.exports = n;
    }
  });

  // src/generated/239.js
  var require__115 = __commonJS({
    "src/generated/239.js"(exports, module) {
      function r(e2) {
        var t = d.getID(e2);
        var n = p.getReactRootIDFromNodeID(t);
        var r2 = d.findReactContainerForID(n);
        var o2 = d.getFirstReactDOM(r2);
        return o2;
      }
      function o(e2, t) {
        this.topLevelType = e2;
        this.nativeEvent = t;
        this.ancestors = [];
      }
      function a(e2) {
        i(e2);
      }
      function i(e2) {
        var t = d.getFirstReactDOM(m(e2.nativeEvent)) || window;
        for (var n = t; n; ) {
          e2.ancestors.push(n);
          n = r(n);
        }
        for (var o2 = 0; o2 < e2.ancestors.length; o2++) {
          t = e2.ancestors[o2];
          var a2 = d.getID(t) || "";
          y._handleTopLevel(e2.topLevelType, t, a2, e2.nativeEvent, m(e2.nativeEvent));
        }
      }
      function s(e2) {
        var t = v(window);
        e2(t);
      }
      var u = require__113();
      var l = require__2();
      var c = require__45();
      var p = require__38();
      var d = require__63();
      var f = require__48();
      var h = require__30();
      var m = require__75();
      var v = require__114();
      h(o.prototype, {
        destructor: function() {
          this.topLevelType = null;
          this.nativeEvent = null;
          this.ancestors.length = 0;
        }
      });
      c.addPoolingTo(o, c.twoArgumentPooler);
      var y = {
        _enabled: true,
        _handleTopLevel: null,
        WINDOW_HANDLE: l.canUseDOM ? window : null,
        setHandleTopLevel: function(e2) {
          y._handleTopLevel = e2;
        },
        setEnabled: function(e2) {
          y._enabled = !!e2;
        },
        isEnabled: function() {
          return y._enabled;
        },
        trapBubbledEvent: function(e2, t, n) {
          var r2 = n;
          if (r2) {
            return u.listen(r2, t, y.dispatchEvent.bind(null, e2));
          } else {
            return null;
          }
        },
        trapCapturedEvent: function(e2, t, n) {
          var r2 = n;
          if (r2) {
            return u.capture(r2, t, y.dispatchEvent.bind(null, e2));
          } else {
            return null;
          }
        },
        monitorScrollValue: function(e2) {
          var t = s.bind(null, e2);
          u.listen(window, "scroll", t);
        },
        dispatchEvent: function(e2, t) {
          if (y._enabled) {
            var n = o.getPooled(e2, t);
            try {
              f.batchedUpdates(a, n);
            } finally {
              o.release(n);
            }
          }
        }
      };
      module.exports = y;
    }
  });

  // src/generated/102.js
  var require__116 = __commonJS({
    "src/generated/102.js"(exports, module) {
      function r(e2, t) {
      }
      require__19();
      var o = {
        isMounted: function(e2) {
          return false;
        },
        enqueueCallback: function(e2, t) {
        },
        enqueueForceUpdate: function(e2) {
          r(e2, "forceUpdate");
        },
        enqueueReplaceState: function(e2, t) {
          r(e2, "replaceState");
        },
        enqueueSetState: function(e2, t) {
          r(e2, "setState");
        },
        enqueueSetProps: function(e2, t) {
          r(e2, "setProps");
        },
        enqueueReplaceProps: function(e2, t) {
          r(e2, "replaceProps");
        }
      };
      module.exports = o;
    }
  });

  // src/generated/87.js
  var require__117 = __commonJS({
    "src/generated/87.js"(exports, module) {
      function r(e2, t, n) {
        this.props = e2;
        this.context = t;
        this.refs = a;
        this.updater = n || o;
      }
      var o = require__116();
      require__34();
      var a = require__50();
      var i = require__3();
      require__19();
      r.prototype.isReactComponent = {};
      r.prototype.setState = function(e2, t) {
        if (typeof e2 != "object" && typeof e2 != "function" && e2 != null) {
          i(false);
        } else {
        }
        this.updater.enqueueSetState(this, e2);
        if (t) {
          this.updater.enqueueCallback(this, t);
        }
      };
      r.prototype.forceUpdate = function(e2) {
        this.updater.enqueueForceUpdate(this);
        if (e2) {
          this.updater.enqueueCallback(this, e2);
        }
      };
      module.exports = r;
    }
  });

  // src/generated/86.js
  var require__118 = __commonJS({
    "src/generated/86.js"(exports, module) {
      function r(e2, t) {
        var n = C.hasOwnProperty(t) ? C[t] : null;
        if (O.hasOwnProperty(t)) {
          if (n !== E.OVERRIDE_BASE) {
            v(false);
          } else {
          }
        }
        if (e2.hasOwnProperty(t)) {
          if (n !== E.DEFINE_MANY && n !== E.DEFINE_MANY_MERGED) {
            v(false);
          } else {
          }
        }
      }
      function o(e2, t) {
        if (t) {
          if (typeof t == "function") {
            v(false);
          } else {
          }
          if (d.isValidElement(t)) {
            v(false);
          } else {
          }
          var n = e2.prototype;
          if (t.hasOwnProperty(b)) {
            _.mixins(e2, t.mixins);
          }
          for (var o2 in t) {
            if (t.hasOwnProperty(o2) && o2 !== b) {
              var a2 = t[o2];
              r(n, o2);
              if (_.hasOwnProperty(o2)) {
                _[o2](e2, a2);
              } else {
                var i2 = C.hasOwnProperty(o2);
                var l2 = n.hasOwnProperty(o2);
                var c2 = typeof a2 == "function";
                var p2 = c2 && !i2 && !l2 && t.autobind !== false;
                if (p2) {
                  n.__reactAutoBindMap ||= {};
                  n.__reactAutoBindMap[o2] = a2;
                  n[o2] = a2;
                } else if (l2) {
                  var f2 = C[o2];
                  if (!i2 || f2 !== E.DEFINE_MANY_MERGED && f2 !== E.DEFINE_MANY) {
                    v(false);
                  } else {
                  }
                  if (f2 === E.DEFINE_MANY_MERGED) {
                    n[o2] = s(n[o2], a2);
                  } else if (f2 === E.DEFINE_MANY) {
                    n[o2] = u(n[o2], a2);
                  }
                } else {
                  n[o2] = a2;
                }
              }
            }
          }
        }
      }
      function a(e2, t) {
        if (t) {
          for (var n in t) {
            var r2 = t[n];
            if (t.hasOwnProperty(n)) {
              var o2 = n in _;
              if (o2) {
                v(false);
              } else {
              }
              var a2 = n in e2;
              if (a2) {
                v(false);
              } else {
              }
              e2[n] = r2;
            }
          }
        }
      }
      function i(e2, t) {
        if (e2 && t && typeof e2 == "object" && typeof t == "object") {
        } else {
          v(false);
        }
        for (var n in t) {
          if (t.hasOwnProperty(n)) {
            if (e2[n] !== void 0) {
              v(false);
            } else {
            }
            e2[n] = t[n];
          }
        }
        return e2;
      }
      function s(e2, t) {
        return function() {
          var n = e2.apply(this, arguments);
          var r2 = t.apply(this, arguments);
          if (n == null) {
            return r2;
          }
          if (r2 == null) {
            return n;
          }
          var o2 = {};
          i(o2, n);
          i(o2, r2);
          return o2;
        };
      }
      function u(e2, t) {
        return function() {
          e2.apply(this, arguments);
          t.apply(this, arguments);
        };
      }
      function l(e2, t) {
        var n = t.bind(e2);
        return n;
      }
      function c(e2) {
        for (var t in e2.__reactAutoBindMap) {
          if (e2.__reactAutoBindMap.hasOwnProperty(t)) {
            var n = e2.__reactAutoBindMap[t];
            e2[t] = l(e2, n);
          }
        }
      }
      var p = require__117();
      var d = require__35();
      require__55();
      require__56();
      var f = require__116();
      var h = require__30();
      var m = require__50();
      var v = require__3();
      var y = require__10();
      var g = require__73();
      require__19();
      var b = g({
        mixins: null
      });
      var E = y({
        DEFINE_ONCE: null,
        DEFINE_MANY: null,
        OVERRIDE_BASE: null,
        DEFINE_MANY_MERGED: null
      });
      var w = [];
      var C = {
        mixins: E.DEFINE_MANY,
        statics: E.DEFINE_MANY,
        propTypes: E.DEFINE_MANY,
        contextTypes: E.DEFINE_MANY,
        childContextTypes: E.DEFINE_MANY,
        getDefaultProps: E.DEFINE_MANY_MERGED,
        getInitialState: E.DEFINE_MANY_MERGED,
        getChildContext: E.DEFINE_MANY_MERGED,
        render: E.DEFINE_ONCE,
        componentWillMount: E.DEFINE_MANY,
        componentDidMount: E.DEFINE_MANY,
        componentWillReceiveProps: E.DEFINE_MANY,
        shouldComponentUpdate: E.DEFINE_ONCE,
        componentWillUpdate: E.DEFINE_MANY,
        componentDidUpdate: E.DEFINE_MANY,
        componentWillUnmount: E.DEFINE_MANY,
        updateComponent: E.OVERRIDE_BASE
      };
      var _ = {
        displayName: function(e2, t) {
          e2.displayName = t;
        },
        mixins: function(e2, t) {
          if (t) {
            for (var n = 0; n < t.length; n++) {
              o(e2, t[n]);
            }
          }
        },
        childContextTypes: function(e2, t) {
          e2.childContextTypes = h({}, e2.childContextTypes, t);
        },
        contextTypes: function(e2, t) {
          e2.contextTypes = h({}, e2.contextTypes, t);
        },
        getDefaultProps: function(e2, t) {
          if (e2.getDefaultProps) {
            e2.getDefaultProps = s(e2.getDefaultProps, t);
          } else {
            e2.getDefaultProps = t;
          }
        },
        propTypes: function(e2, t) {
          e2.propTypes = h({}, e2.propTypes, t);
        },
        statics: function(e2, t) {
          a(e2, t);
        },
        autobind: function() {
        }
      };
      var O = {
        replaceState: function(e2, t) {
          this.updater.enqueueReplaceState(this, e2);
          if (t) {
            this.updater.enqueueCallback(this, t);
          }
        },
        isMounted: function() {
          return this.updater.isMounted(this);
        },
        setProps: function(e2, t) {
          this.updater.enqueueSetProps(this, e2);
          if (t) {
            this.updater.enqueueCallback(this, t);
          }
        },
        replaceProps: function(e2, t) {
          this.updater.enqueueReplaceProps(this, e2);
          if (t) {
            this.updater.enqueueCallback(this, t);
          }
        }
      };
      function P() {
      }
      h(P.prototype, p.prototype, O);
      var k = {
        createClass: function(e2) {
          function t(e3, t2, n2) {
            if (this.__reactAutoBindMap) {
              c(this);
            }
            this.props = e3;
            this.context = t2;
            this.refs = m;
            this.updater = n2 || f;
            this.state = null;
            var r2 = this.getInitialState ? this.getInitialState() : null;
            if (typeof r2 != "object" || Array.isArray(r2)) {
              v(false);
            } else {
            }
            this.state = r2;
          }
          t.prototype = new P();
          t.prototype.constructor = t;
          w.forEach(o.bind(null, t));
          o(t, e2);
          if (t.getDefaultProps) {
            t.defaultProps = t.getDefaultProps();
          }
          if (t.prototype.render) {
          } else {
            v(false);
          }
          for (var n in C) {
            t.prototype[n] ||= null;
          }
          return t;
        },
        injection: {
          injectMixin: function(e2) {
            w.push(e2);
          }
        }
      };
      module.exports = k;
    }
  });

  // src/generated/240.js
  var require__119 = __commonJS({
    "src/generated/240.js"(exports, module) {
      var r = require__17();
      var o = require__27();
      var a = require__54();
      var i = require__118();
      var s = require__59();
      var u = require__32();
      var l = require__60();
      var c = require__12();
      var p = require__37();
      var d = require__48();
      var f = {
        Component: a.injection,
        Class: i.injection,
        DOMProperty: r.injection,
        EmptyComponent: s.injection,
        EventPluginHub: o.injection,
        EventEmitter: u.injection,
        NativeComponent: l.injection,
        Perf: c.injection,
        RootIndex: p.injection,
        Updates: d.injection
      };
      module.exports = f;
    }
  });

  // src/generated/268.js
  var require__120 = __commonJS({
    "src/generated/268.js"(exports, module) {
      function n(e2) {
        while (e2 && e2.firstChild) {
          e2 = e2.firstChild;
        }
        return e2;
      }
      function r(e2) {
        while (e2) {
          if (e2.nextSibling) {
            return e2.nextSibling;
          }
          e2 = e2.parentNode;
        }
      }
      function o(e2, t) {
        for (var o2 = n(e2), a = 0, i = 0; o2; ) {
          if (o2.nodeType === 3) {
            i = a + o2.textContent.length;
            if (a <= t && i >= t) {
              return {
                node: o2,
                offset: t - a
              };
            }
            a = i;
          }
          o2 = n(r(o2));
        }
      }
      module.exports = o;
    }
  });

  // src/generated/236.js
  var require__121 = __commonJS({
    "src/generated/236.js"(exports, module) {
      function r(e2, t, n, r2) {
        return e2 === n && t === r2;
      }
      function o(e2) {
        var t = document.selection;
        var n = t.createRange();
        var r2 = n.text.length;
        var o2 = n.duplicate();
        o2.moveToElementText(e2);
        o2.setEndPoint("EndToStart", n);
        var a2 = o2.text.length;
        var i2 = a2 + r2;
        return {
          start: a2,
          end: i2
        };
      }
      function a(e2) {
        var t = window.getSelection && window.getSelection();
        if (!t || t.rangeCount === 0) {
          return null;
        }
        var n = t.anchorNode;
        var o2 = t.anchorOffset;
        var a2 = t.focusNode;
        var i2 = t.focusOffset;
        var s2 = t.getRangeAt(0);
        try {
          s2.startContainer.nodeType;
          s2.endContainer.nodeType;
        } catch (e3) {
          return null;
        }
        var u2 = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset);
        var l2 = u2 ? 0 : s2.toString().length;
        var c2 = s2.cloneRange();
        c2.selectNodeContents(e2);
        c2.setEnd(s2.startContainer, s2.startOffset);
        var p2 = r(c2.startContainer, c2.startOffset, c2.endContainer, c2.endOffset);
        var d2 = p2 ? 0 : c2.toString().length;
        var f = d2 + l2;
        var h = document.createRange();
        h.setStart(n, o2);
        h.setEnd(a2, i2);
        var m = h.collapsed;
        return {
          start: m ? f : d2,
          end: m ? d2 : f
        };
      }
      function i(e2, t) {
        var n;
        var r2;
        var o2 = document.selection.createRange().duplicate();
        if (typeof t.end == "undefined") {
          n = t.start;
          r2 = n;
        } else if (t.start > t.end) {
          n = t.end;
          r2 = t.start;
        } else {
          n = t.start;
          r2 = t.end;
        }
        o2.moveToElementText(e2);
        o2.moveStart("character", n);
        o2.setEndPoint("EndToStart", o2);
        o2.moveEnd("character", r2 - n);
        o2.select();
      }
      function s(e2, t) {
        if (window.getSelection) {
          var n = window.getSelection();
          var r2 = e2[c()].length;
          var o2 = Math.min(t.start, r2);
          var a2 = typeof t.end == "undefined" ? o2 : Math.min(t.end, r2);
          if (!n.extend && o2 > a2) {
            var i2 = a2;
            a2 = o2;
            o2 = i2;
          }
          var s2 = l(e2, o2);
          var u2 = l(e2, a2);
          if (s2 && u2) {
            var p2 = document.createRange();
            p2.setStart(s2.node, s2.offset);
            n.removeAllRanges();
            if (o2 > a2) {
              n.addRange(p2);
              n.extend(u2.node, u2.offset);
            } else {
              p2.setEnd(u2.node, u2.offset);
              n.addRange(p2);
            }
          }
        }
      }
      var u = require__2();
      var l = require__120();
      var c = require__68();
      var p = u.canUseDOM && "selection" in document && !("getSelection" in window);
      var d = {
        getOffsets: p ? o : a,
        setOffsets: p ? i : s
      };
      module.exports = d;
    }
  });

  // src/generated/72.js
  var require__122 = __commonJS({
    "src/generated/72.js"(exports, module) {
      function n() {
        if (typeof document == "undefined") {
          return null;
        }
        try {
          return document.activeElement || document.body;
        } catch (e2) {
          return document.body;
        }
      }
      module.exports = n;
    }
  });

  // src/generated/98.js
  var require__123 = __commonJS({
    "src/generated/98.js"(exports, module) {
      function r(e2) {
        return a(document.documentElement, e2);
      }
      var o = require__121();
      var a = require__53();
      var i = require__88();
      var s = require__122();
      var u = {
        hasSelectionCapabilities: function(e2) {
          var t = e2 && e2.nodeName && e2.nodeName.toLowerCase();
          return t && (t === "input" && e2.type === "text" || t === "textarea" || e2.contentEditable === "true");
        },
        getSelectionInformation: function() {
          var e2 = s();
          return {
            focusedElem: e2,
            selectionRange: u.hasSelectionCapabilities(e2) ? u.getSelection(e2) : null
          };
        },
        restoreSelection: function(e2) {
          var t = s();
          var n = e2.focusedElem;
          var o2 = e2.selectionRange;
          if (t !== n && r(n)) {
            if (u.hasSelectionCapabilities(n)) {
              u.setSelection(n, o2);
            }
            i(n);
          }
        },
        getSelection: function(e2) {
          var t;
          if ("selectionStart" in e2) {
            t = {
              start: e2.selectionStart,
              end: e2.selectionEnd
            };
          } else if (document.selection && e2.nodeName && e2.nodeName.toLowerCase() === "input") {
            var n = document.selection.createRange();
            if (n.parentElement() === e2) {
              t = {
                start: -n.moveStart("character", -e2.value.length),
                end: -n.moveEnd("character", -e2.value.length)
              };
            }
          } else {
            t = o.getOffsets(e2);
          }
          return t || {
            start: 0,
            end: 0
          };
        },
        setSelection: function(e2, t) {
          var n = t.start;
          var r2 = t.end;
          if (typeof r2 == "undefined") {
            r2 = n;
          }
          if ("selectionStart" in e2) {
            e2.selectionStart = n;
            e2.selectionEnd = Math.min(r2, e2.value.length);
          } else if (document.selection && e2.nodeName && e2.nodeName.toLowerCase() === "input") {
            var a2 = e2.createTextRange();
            a2.collapse(true);
            a2.moveStart("character", n);
            a2.moveEnd("character", r2 - n);
            a2.select();
          } else {
            o.setOffsets(e2, t);
          }
        }
      };
      module.exports = u;
    }
  });

  // src/generated/244.js
  var require__124 = __commonJS({
    "src/generated/244.js"(exports, module) {
      function r(e2) {
        this.reinitializeTransaction();
        this.renderToStaticMarkup = false;
        this.reactMountReady = o.getPooled(null);
        this.useCreateElement = !e2 && s.useCreateElement;
      }
      var o = require__46();
      var a = require__45();
      var i = require__32();
      var s = require__33();
      var u = require__123();
      var l = require__47();
      var c = require__30();
      var p = {
        initialize: u.getSelectionInformation,
        close: u.restoreSelection
      };
      var d = {
        initialize: function() {
          var e2 = i.isEnabled();
          i.setEnabled(false);
          return e2;
        },
        close: function(e2) {
          i.setEnabled(e2);
        }
      };
      var f = {
        initialize: function() {
          this.reactMountReady.reset();
        },
        close: function() {
          this.reactMountReady.notifyAll();
        }
      };
      var h = [p, d, f];
      var m = {
        getTransactionWrappers: function() {
          return h;
        },
        getReactMountReady: function() {
          return this.reactMountReady;
        },
        destructor: function() {
          o.release(this.reactMountReady);
          this.reactMountReady = null;
        }
      };
      c(r.prototype, l.Mixin, m);
      a.addPoolingTo(r);
      module.exports = r;
    }
  });

  // src/generated/253.js
  var require__125 = __commonJS({
    "src/generated/253.js"(exports, module) {
      function r(e2) {
        if ("selectionStart" in e2 && u.hasSelectionCapabilities(e2)) {
          return {
            start: e2.selectionStart,
            end: e2.selectionEnd
          };
        }
        if (window.getSelection) {
          var t = window.getSelection();
          return {
            anchorNode: t.anchorNode,
            anchorOffset: t.anchorOffset,
            focusNode: t.focusNode,
            focusOffset: t.focusOffset
          };
        }
        if (document.selection) {
          var n = document.selection.createRange();
          return {
            parentElement: n.parentElement(),
            text: n.text,
            top: n.boundingTop,
            left: n.boundingLeft
          };
        }
      }
      function o(e2, t) {
        if (E || y == null || y !== c()) {
          return null;
        }
        var n = r(y);
        if (!b || !f(b, n)) {
          b = n;
          var o2 = l.getPooled(v.select, g, e2, t);
          o2.type = "select";
          o2.target = y;
          i.accumulateTwoPhaseDispatches(o2);
          return o2;
        }
        return null;
      }
      var a = require__21();
      var i = require__67();
      var s = require__2();
      var u = require__123();
      var l = require__70();
      var c = require__122();
      var p = require__76();
      var d = require__73();
      var f = require__111();
      var h = a.topLevelTypes;
      var m = s.canUseDOM && "documentMode" in document && document.documentMode <= 11;
      var v = {
        select: {
          phasedRegistrationNames: {
            bubbled: d({
              onSelect: null
            }),
            captured: d({
              onSelectCapture: null
            })
          },
          dependencies: [h.topBlur, h.topContextMenu, h.topFocus, h.topKeyDown, h.topMouseDown, h.topMouseUp, h.topSelectionChange]
        }
      };
      var y = null;
      var g = null;
      var b = null;
      var E = false;
      var w = false;
      var C = d({
        onSelect: null
      });
      var _ = {
        eventTypes: v,
        extractEvents: function(e2, t, n, r2, a2) {
          if (!w) {
            return null;
          }
          switch (e2) {
            case h.topFocus:
              if (p(t) || t.contentEditable === "true") {
                y = t;
                g = n;
                b = null;
              }
              break;
            case h.topBlur:
              y = null;
              g = null;
              b = null;
              break;
            case h.topMouseDown:
              E = true;
              break;
            case h.topContextMenu:
            case h.topMouseUp:
              E = false;
              return o(r2, a2);
            case h.topSelectionChange:
              if (m) {
                break;
              }
            case h.topKeyDown:
            case h.topKeyUp:
              return o(r2, a2);
          }
          return null;
        },
        didPutListener: function(e2, t, n) {
          if (t === C) {
            w = true;
          }
        }
      };
      module.exports = _;
    }
  });

  // src/generated/254.js
  var require__126 = __commonJS({
    "src/generated/254.js"(exports, module) {
      var n = Math.pow(2, 53);
      var r = {
        createReactRootIndex: function() {
          return Math.ceil(Math.random() * n);
        }
      };
      module.exports = r;
    }
  });

  // src/generated/256.js
  var require__127 = __commonJS({
    "src/generated/256.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__70();
      var a = {
        clipboardData: function(e2) {
          if ("clipboardData" in e2) {
            return e2.clipboardData;
          } else {
            return window.clipboardData;
          }
        }
      };
      o.augmentClass(r, a);
      module.exports = r;
    }
  });

  // src/generated/259.js
  var require__128 = __commonJS({
    "src/generated/259.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__80();
      var a = {
        relatedTarget: null
      };
      o.augmentClass(r, a);
      module.exports = r;
    }
  });

  // src/generated/55.js
  var require__129 = __commonJS({
    "src/generated/55.js"(exports, module) {
      function n(e2) {
        var t;
        var n2 = e2.keyCode;
        if ("charCode" in e2) {
          t = e2.charCode;
          if (t === 0 && n2 === 13) {
            t = 13;
          }
        } else {
          t = n2;
        }
        if (t >= 32 || t === 13) {
          return t;
        } else {
          return 0;
        }
      }
      module.exports = n;
    }
  });

  // src/generated/267.js
  var require__130 = __commonJS({
    "src/generated/267.js"(exports, module) {
      function r(e2) {
        if (e2.key) {
          var t = a[e2.key] || e2.key;
          if (t !== "Unidentified") {
            return t;
          }
        }
        if (e2.type === "keypress") {
          var n = o(e2);
          if (n === 13) {
            return "Enter";
          } else {
            return String.fromCharCode(n);
          }
        }
        if (e2.type === "keydown" || e2.type === "keyup") {
          return i[e2.keyCode] || "Unidentified";
        } else {
          return "";
        }
      }
      var o = require__129();
      var a = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var i = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      module.exports = r;
    }
  });

  // src/generated/261.js
  var require__131 = __commonJS({
    "src/generated/261.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__80();
      var a = require__129();
      var i = require__130();
      var s = require__81();
      var u = {
        key: i,
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: s,
        charCode: function(e2) {
          if (e2.type === "keypress") {
            return a(e2);
          } else {
            return 0;
          }
        },
        keyCode: function(e2) {
          if (e2.type === "keydown" || e2.type === "keyup") {
            return e2.keyCode;
          } else {
            return 0;
          }
        },
        which: function(e2) {
          if (e2.type === "keypress") {
            return a(e2);
          } else if (e2.type === "keydown" || e2.type === "keyup") {
            return e2.keyCode;
          } else {
            return 0;
          }
        }
      };
      o.augmentClass(r, u);
      module.exports = r;
    }
  });

  // src/generated/258.js
  var require__132 = __commonJS({
    "src/generated/258.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__82();
      var a = {
        dataTransfer: null
      };
      o.augmentClass(r, a);
      module.exports = r;
    }
  });

  // src/generated/262.js
  var require__133 = __commonJS({
    "src/generated/262.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__80();
      var a = require__81();
      var i = {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: a
      };
      o.augmentClass(r, i);
      module.exports = r;
    }
  });

  // src/generated/263.js
  var require__134 = __commonJS({
    "src/generated/263.js"(exports, module) {
      function r(e2, t, n, r2) {
        o.call(this, e2, t, n, r2);
      }
      var o = require__82();
      var a = {
        deltaX: function(e2) {
          if ("deltaX" in e2) {
            return e2.deltaX;
          } else if ("wheelDeltaX" in e2) {
            return -e2.wheelDeltaX;
          } else {
            return 0;
          }
        },
        deltaY: function(e2) {
          if ("deltaY" in e2) {
            return e2.deltaY;
          } else if ("wheelDeltaY" in e2) {
            return -e2.wheelDeltaY;
          } else if ("wheelDelta" in e2) {
            return -e2.wheelDelta;
          } else {
            return 0;
          }
        },
        deltaZ: null,
        deltaMode: null
      };
      o.augmentClass(r, a);
      module.exports = r;
    }
  });

  // src/generated/255.js
  var require__135 = __commonJS({
    "src/generated/255.js"(exports, module) {
      var r = require__21();
      var o = require__113();
      var a = require__67();
      var i = require__63();
      var s = require__127();
      var u = require__70();
      var l = require__128();
      var c = require__131();
      var p = require__82();
      var d = require__132();
      var f = require__133();
      var h = require__80();
      var m = require__134();
      var v = require__8();
      var y = require__129();
      var g = require__3();
      var b = require__73();
      var E = r.topLevelTypes;
      var w = {
        abort: {
          phasedRegistrationNames: {
            bubbled: b({
              onAbort: true
            }),
            captured: b({
              onAbortCapture: true
            })
          }
        },
        blur: {
          phasedRegistrationNames: {
            bubbled: b({
              onBlur: true
            }),
            captured: b({
              onBlurCapture: true
            })
          }
        },
        canPlay: {
          phasedRegistrationNames: {
            bubbled: b({
              onCanPlay: true
            }),
            captured: b({
              onCanPlayCapture: true
            })
          }
        },
        canPlayThrough: {
          phasedRegistrationNames: {
            bubbled: b({
              onCanPlayThrough: true
            }),
            captured: b({
              onCanPlayThroughCapture: true
            })
          }
        },
        click: {
          phasedRegistrationNames: {
            bubbled: b({
              onClick: true
            }),
            captured: b({
              onClickCapture: true
            })
          }
        },
        contextMenu: {
          phasedRegistrationNames: {
            bubbled: b({
              onContextMenu: true
            }),
            captured: b({
              onContextMenuCapture: true
            })
          }
        },
        copy: {
          phasedRegistrationNames: {
            bubbled: b({
              onCopy: true
            }),
            captured: b({
              onCopyCapture: true
            })
          }
        },
        cut: {
          phasedRegistrationNames: {
            bubbled: b({
              onCut: true
            }),
            captured: b({
              onCutCapture: true
            })
          }
        },
        doubleClick: {
          phasedRegistrationNames: {
            bubbled: b({
              onDoubleClick: true
            }),
            captured: b({
              onDoubleClickCapture: true
            })
          }
        },
        drag: {
          phasedRegistrationNames: {
            bubbled: b({
              onDrag: true
            }),
            captured: b({
              onDragCapture: true
            })
          }
        },
        dragEnd: {
          phasedRegistrationNames: {
            bubbled: b({
              onDragEnd: true
            }),
            captured: b({
              onDragEndCapture: true
            })
          }
        },
        dragEnter: {
          phasedRegistrationNames: {
            bubbled: b({
              onDragEnter: true
            }),
            captured: b({
              onDragEnterCapture: true
            })
          }
        },
        dragExit: {
          phasedRegistrationNames: {
            bubbled: b({
              onDragExit: true
            }),
            captured: b({
              onDragExitCapture: true
            })
          }
        },
        dragLeave: {
          phasedRegistrationNames: {
            bubbled: b({
              onDragLeave: true
            }),
            captured: b({
              onDragLeaveCapture: true
            })
          }
        },
        dragOver: {
          phasedRegistrationNames: {
            bubbled: b({
              onDragOver: true
            }),
            captured: b({
              onDragOverCapture: true
            })
          }
        },
        dragStart: {
          phasedRegistrationNames: {
            bubbled: b({
              onDragStart: true
            }),
            captured: b({
              onDragStartCapture: true
            })
          }
        },
        drop: {
          phasedRegistrationNames: {
            bubbled: b({
              onDrop: true
            }),
            captured: b({
              onDropCapture: true
            })
          }
        },
        durationChange: {
          phasedRegistrationNames: {
            bubbled: b({
              onDurationChange: true
            }),
            captured: b({
              onDurationChangeCapture: true
            })
          }
        },
        emptied: {
          phasedRegistrationNames: {
            bubbled: b({
              onEmptied: true
            }),
            captured: b({
              onEmptiedCapture: true
            })
          }
        },
        encrypted: {
          phasedRegistrationNames: {
            bubbled: b({
              onEncrypted: true
            }),
            captured: b({
              onEncryptedCapture: true
            })
          }
        },
        ended: {
          phasedRegistrationNames: {
            bubbled: b({
              onEnded: true
            }),
            captured: b({
              onEndedCapture: true
            })
          }
        },
        error: {
          phasedRegistrationNames: {
            bubbled: b({
              onError: true
            }),
            captured: b({
              onErrorCapture: true
            })
          }
        },
        focus: {
          phasedRegistrationNames: {
            bubbled: b({
              onFocus: true
            }),
            captured: b({
              onFocusCapture: true
            })
          }
        },
        input: {
          phasedRegistrationNames: {
            bubbled: b({
              onInput: true
            }),
            captured: b({
              onInputCapture: true
            })
          }
        },
        keyDown: {
          phasedRegistrationNames: {
            bubbled: b({
              onKeyDown: true
            }),
            captured: b({
              onKeyDownCapture: true
            })
          }
        },
        keyPress: {
          phasedRegistrationNames: {
            bubbled: b({
              onKeyPress: true
            }),
            captured: b({
              onKeyPressCapture: true
            })
          }
        },
        keyUp: {
          phasedRegistrationNames: {
            bubbled: b({
              onKeyUp: true
            }),
            captured: b({
              onKeyUpCapture: true
            })
          }
        },
        load: {
          phasedRegistrationNames: {
            bubbled: b({
              onLoad: true
            }),
            captured: b({
              onLoadCapture: true
            })
          }
        },
        loadedData: {
          phasedRegistrationNames: {
            bubbled: b({
              onLoadedData: true
            }),
            captured: b({
              onLoadedDataCapture: true
            })
          }
        },
        loadedMetadata: {
          phasedRegistrationNames: {
            bubbled: b({
              onLoadedMetadata: true
            }),
            captured: b({
              onLoadedMetadataCapture: true
            })
          }
        },
        loadStart: {
          phasedRegistrationNames: {
            bubbled: b({
              onLoadStart: true
            }),
            captured: b({
              onLoadStartCapture: true
            })
          }
        },
        mouseDown: {
          phasedRegistrationNames: {
            bubbled: b({
              onMouseDown: true
            }),
            captured: b({
              onMouseDownCapture: true
            })
          }
        },
        mouseMove: {
          phasedRegistrationNames: {
            bubbled: b({
              onMouseMove: true
            }),
            captured: b({
              onMouseMoveCapture: true
            })
          }
        },
        mouseOut: {
          phasedRegistrationNames: {
            bubbled: b({
              onMouseOut: true
            }),
            captured: b({
              onMouseOutCapture: true
            })
          }
        },
        mouseOver: {
          phasedRegistrationNames: {
            bubbled: b({
              onMouseOver: true
            }),
            captured: b({
              onMouseOverCapture: true
            })
          }
        },
        mouseUp: {
          phasedRegistrationNames: {
            bubbled: b({
              onMouseUp: true
            }),
            captured: b({
              onMouseUpCapture: true
            })
          }
        },
        paste: {
          phasedRegistrationNames: {
            bubbled: b({
              onPaste: true
            }),
            captured: b({
              onPasteCapture: true
            })
          }
        },
        pause: {
          phasedRegistrationNames: {
            bubbled: b({
              onPause: true
            }),
            captured: b({
              onPauseCapture: true
            })
          }
        },
        play: {
          phasedRegistrationNames: {
            bubbled: b({
              onPlay: true
            }),
            captured: b({
              onPlayCapture: true
            })
          }
        },
        playing: {
          phasedRegistrationNames: {
            bubbled: b({
              onPlaying: true
            }),
            captured: b({
              onPlayingCapture: true
            })
          }
        },
        progress: {
          phasedRegistrationNames: {
            bubbled: b({
              onProgress: true
            }),
            captured: b({
              onProgressCapture: true
            })
          }
        },
        rateChange: {
          phasedRegistrationNames: {
            bubbled: b({
              onRateChange: true
            }),
            captured: b({
              onRateChangeCapture: true
            })
          }
        },
        reset: {
          phasedRegistrationNames: {
            bubbled: b({
              onReset: true
            }),
            captured: b({
              onResetCapture: true
            })
          }
        },
        scroll: {
          phasedRegistrationNames: {
            bubbled: b({
              onScroll: true
            }),
            captured: b({
              onScrollCapture: true
            })
          }
        },
        seeked: {
          phasedRegistrationNames: {
            bubbled: b({
              onSeeked: true
            }),
            captured: b({
              onSeekedCapture: true
            })
          }
        },
        seeking: {
          phasedRegistrationNames: {
            bubbled: b({
              onSeeking: true
            }),
            captured: b({
              onSeekingCapture: true
            })
          }
        },
        stalled: {
          phasedRegistrationNames: {
            bubbled: b({
              onStalled: true
            }),
            captured: b({
              onStalledCapture: true
            })
          }
        },
        submit: {
          phasedRegistrationNames: {
            bubbled: b({
              onSubmit: true
            }),
            captured: b({
              onSubmitCapture: true
            })
          }
        },
        suspend: {
          phasedRegistrationNames: {
            bubbled: b({
              onSuspend: true
            }),
            captured: b({
              onSuspendCapture: true
            })
          }
        },
        timeUpdate: {
          phasedRegistrationNames: {
            bubbled: b({
              onTimeUpdate: true
            }),
            captured: b({
              onTimeUpdateCapture: true
            })
          }
        },
        touchCancel: {
          phasedRegistrationNames: {
            bubbled: b({
              onTouchCancel: true
            }),
            captured: b({
              onTouchCancelCapture: true
            })
          }
        },
        touchEnd: {
          phasedRegistrationNames: {
            bubbled: b({
              onTouchEnd: true
            }),
            captured: b({
              onTouchEndCapture: true
            })
          }
        },
        touchMove: {
          phasedRegistrationNames: {
            bubbled: b({
              onTouchMove: true
            }),
            captured: b({
              onTouchMoveCapture: true
            })
          }
        },
        touchStart: {
          phasedRegistrationNames: {
            bubbled: b({
              onTouchStart: true
            }),
            captured: b({
              onTouchStartCapture: true
            })
          }
        },
        volumeChange: {
          phasedRegistrationNames: {
            bubbled: b({
              onVolumeChange: true
            }),
            captured: b({
              onVolumeChangeCapture: true
            })
          }
        },
        waiting: {
          phasedRegistrationNames: {
            bubbled: b({
              onWaiting: true
            }),
            captured: b({
              onWaitingCapture: true
            })
          }
        },
        wheel: {
          phasedRegistrationNames: {
            bubbled: b({
              onWheel: true
            }),
            captured: b({
              onWheelCapture: true
            })
          }
        }
      };
      var C = {
        topAbort: w.abort,
        topBlur: w.blur,
        topCanPlay: w.canPlay,
        topCanPlayThrough: w.canPlayThrough,
        topClick: w.click,
        topContextMenu: w.contextMenu,
        topCopy: w.copy,
        topCut: w.cut,
        topDoubleClick: w.doubleClick,
        topDrag: w.drag,
        topDragEnd: w.dragEnd,
        topDragEnter: w.dragEnter,
        topDragExit: w.dragExit,
        topDragLeave: w.dragLeave,
        topDragOver: w.dragOver,
        topDragStart: w.dragStart,
        topDrop: w.drop,
        topDurationChange: w.durationChange,
        topEmptied: w.emptied,
        topEncrypted: w.encrypted,
        topEnded: w.ended,
        topError: w.error,
        topFocus: w.focus,
        topInput: w.input,
        topKeyDown: w.keyDown,
        topKeyPress: w.keyPress,
        topKeyUp: w.keyUp,
        topLoad: w.load,
        topLoadedData: w.loadedData,
        topLoadedMetadata: w.loadedMetadata,
        topLoadStart: w.loadStart,
        topMouseDown: w.mouseDown,
        topMouseMove: w.mouseMove,
        topMouseOut: w.mouseOut,
        topMouseOver: w.mouseOver,
        topMouseUp: w.mouseUp,
        topPaste: w.paste,
        topPause: w.pause,
        topPlay: w.play,
        topPlaying: w.playing,
        topProgress: w.progress,
        topRateChange: w.rateChange,
        topReset: w.reset,
        topScroll: w.scroll,
        topSeeked: w.seeked,
        topSeeking: w.seeking,
        topStalled: w.stalled,
        topSubmit: w.submit,
        topSuspend: w.suspend,
        topTimeUpdate: w.timeUpdate,
        topTouchCancel: w.touchCancel,
        topTouchEnd: w.touchEnd,
        topTouchMove: w.touchMove,
        topTouchStart: w.touchStart,
        topVolumeChange: w.volumeChange,
        topWaiting: w.waiting,
        topWheel: w.wheel
      };
      for (_ in C) {
        C[_].dependencies = [_];
      }
      var _;
      var O = b({
        onClick: null
      });
      var P = {};
      var k = {
        eventTypes: w,
        extractEvents: function(e2, t, n, r2, o2) {
          var i2 = C[e2];
          if (!i2) {
            return null;
          }
          var v2;
          switch (e2) {
            case E.topAbort:
            case E.topCanPlay:
            case E.topCanPlayThrough:
            case E.topDurationChange:
            case E.topEmptied:
            case E.topEncrypted:
            case E.topEnded:
            case E.topError:
            case E.topInput:
            case E.topLoad:
            case E.topLoadedData:
            case E.topLoadedMetadata:
            case E.topLoadStart:
            case E.topPause:
            case E.topPlay:
            case E.topPlaying:
            case E.topProgress:
            case E.topRateChange:
            case E.topReset:
            case E.topSeeked:
            case E.topSeeking:
            case E.topStalled:
            case E.topSubmit:
            case E.topSuspend:
            case E.topTimeUpdate:
            case E.topVolumeChange:
            case E.topWaiting:
              v2 = u;
              break;
            case E.topKeyPress:
              if (y(r2) === 0) {
                return null;
              }
            case E.topKeyDown:
            case E.topKeyUp:
              v2 = c;
              break;
            case E.topBlur:
            case E.topFocus:
              v2 = l;
              break;
            case E.topClick:
              if (r2.button === 2) {
                return null;
              }
            case E.topContextMenu:
            case E.topDoubleClick:
            case E.topMouseDown:
            case E.topMouseMove:
            case E.topMouseOut:
            case E.topMouseOver:
            case E.topMouseUp:
              v2 = p;
              break;
            case E.topDrag:
            case E.topDragEnd:
            case E.topDragEnter:
            case E.topDragExit:
            case E.topDragLeave:
            case E.topDragOver:
            case E.topDragStart:
            case E.topDrop:
              v2 = d;
              break;
            case E.topTouchCancel:
            case E.topTouchEnd:
            case E.topTouchMove:
            case E.topTouchStart:
              v2 = f;
              break;
            case E.topScroll:
              v2 = h;
              break;
            case E.topWheel:
              v2 = m;
              break;
            case E.topCopy:
            case E.topCut:
            case E.topPaste:
              v2 = s;
          }
          if (v2) {
          } else {
            g(false);
          }
          var b2 = v2.getPooled(i2, n, r2, o2);
          a.accumulateTwoPhaseDispatches(b2);
          return b2;
        },
        didPutListener: function(e2, t, n) {
          if (t === O) {
            var r2 = i.getNode(e2);
            P[e2] ||= o.listen(r2, "click", v);
          }
        },
        willDeleteListener: function(e2, t) {
          if (t === O) {
            P[e2].remove();
            delete P[e2];
          }
        }
      };
      module.exports = k;
    }
  });

  // src/generated/252.js
  var require__136 = __commonJS({
    "src/generated/252.js"(exports, module) {
      var r = require__17();
      var o = r.injection.MUST_USE_ATTRIBUTE;
      var a = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
      };
      var i = {
        Properties: {
          clipPath: o,
          cx: o,
          cy: o,
          d: o,
          dx: o,
          dy: o,
          fill: o,
          fillOpacity: o,
          fontFamily: o,
          fontSize: o,
          fx: o,
          fy: o,
          gradientTransform: o,
          gradientUnits: o,
          markerEnd: o,
          markerMid: o,
          markerStart: o,
          offset: o,
          opacity: o,
          patternContentUnits: o,
          patternUnits: o,
          points: o,
          preserveAspectRatio: o,
          r: o,
          rx: o,
          ry: o,
          spreadMethod: o,
          stopColor: o,
          stopOpacity: o,
          stroke: o,
          strokeDasharray: o,
          strokeLinecap: o,
          strokeOpacity: o,
          strokeWidth: o,
          textAnchor: o,
          transform: o,
          version: o,
          viewBox: o,
          x1: o,
          x2: o,
          x: o,
          xlinkActuate: o,
          xlinkArcrole: o,
          xlinkHref: o,
          xlinkRole: o,
          xlinkShow: o,
          xlinkTitle: o,
          xlinkType: o,
          xmlBase: o,
          xmlLang: o,
          xmlSpace: o,
          y1: o,
          y2: o,
          y: o
        },
        DOMAttributeNamespaces: {
          xlinkActuate: a.xlink,
          xlinkArcrole: a.xlink,
          xlinkHref: a.xlink,
          xlinkRole: a.xlink,
          xlinkShow: a.xlink,
          xlinkTitle: a.xlink,
          xlinkType: a.xlink,
          xmlBase: a.xml,
          xmlLang: a.xml,
          xmlSpace: a.xml
        },
        DOMAttributeNames: {
          clipPath: "clip-path",
          fillOpacity: "fill-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          gradientTransform: "gradientTransform",
          gradientUnits: "gradientUnits",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          patternContentUnits: "patternContentUnits",
          patternUnits: "patternUnits",
          preserveAspectRatio: "preserveAspectRatio",
          spreadMethod: "spreadMethod",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strokeDasharray: "stroke-dasharray",
          strokeLinecap: "stroke-linecap",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          textAnchor: "text-anchor",
          viewBox: "viewBox",
          xlinkActuate: "xlink:actuate",
          xlinkArcrole: "xlink:arcrole",
          xlinkHref: "xlink:href",
          xlinkRole: "xlink:role",
          xlinkShow: "xlink:show",
          xlinkTitle: "xlink:title",
          xlinkType: "xlink:type",
          xmlBase: "xml:base",
          xmlLang: "xml:lang",
          xmlSpace: "xml:space"
        }
      };
      module.exports = i;
    }
  });

  // src/generated/93.js
  var require__137 = __commonJS({
    "src/generated/93.js"(exports, module) {
      function r() {
        if (!P) {
          P = true;
          y.EventEmitter.injectReactEventListener(v);
          y.EventPluginHub.injectEventPluginOrder(s);
          y.EventPluginHub.injectInstanceHandle(g);
          y.EventPluginHub.injectMount(b);
          y.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: _,
            EnterLeaveEventPlugin: u,
            ChangeEventPlugin: a,
            SelectEventPlugin: w,
            BeforeInputEventPlugin: o
          });
          y.NativeComponent.injectGenericComponentClass(h);
          y.NativeComponent.injectTextComponentClass(m);
          y.Class.injectMixin(p);
          y.DOMProperty.injectDOMPropertyConfig(c);
          y.DOMProperty.injectDOMPropertyConfig(O);
          y.EmptyComponent.injectEmptyComponent("noscript");
          y.Updates.injectReconcileTransaction(E);
          y.Updates.injectBatchingStrategy(f);
          y.RootIndex.injectCreateReactRootIndex(l.canUseDOM ? i.createReactRootIndex : C.createReactRootIndex);
          y.Component.injectEnvironment(d);
        }
      }
      var o = require__74();
      var a = require__77();
      var i = require__78();
      var s = require__79();
      var u = require__83();
      var l = require__2();
      var c = require__84();
      var p = require__86();
      var d = require__65();
      var f = require__87();
      var h = require__112();
      var m = require__66();
      var v = require__115();
      var y = require__119();
      var g = require__38();
      var b = require__63();
      var E = require__124();
      var w = require__125();
      var C = require__126();
      var _ = require__135();
      var O = require__136();
      var P = false;
      module.exports = {
        inject: r
      };
    }
  });

  // src/generated/53.js
  var require__138 = __commonJS({
    "src/generated/53.js"(exports, module) {
      module.exports = "0.14.9";
    }
  });

  // src/generated/270.js
  var require__139 = __commonJS({
    "src/generated/270.js"(exports, module) {
      var r = require__63();
      module.exports = r.renderSubtreeIntoContainer;
    }
  });

  // src/generated/50.js
  var require__140 = __commonJS({
    "src/generated/50.js"(exports, module) {
      var r = require__();
      var o = require__66();
      var a = require__137();
      var i = require__38();
      var s = require__63();
      var u = require__12();
      var l = require__44();
      var c = require__48();
      var p = require__138();
      var d = require__85();
      var f = require__139();
      require__19();
      a.inject();
      var h = u.measure("React", "render", s.render);
      var m = {
        findDOMNode: d,
        render: h,
        unmountComponentAtNode: s.unmountComponentAtNode,
        version: p,
        unstable_batchedUpdates: c.batchedUpdates,
        unstable_renderSubtreeIntoContainer: f
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject == "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
          CurrentOwner: r,
          InstanceHandles: i,
          Mount: s,
          Reconciler: l,
          TextComponent: o
        });
      }
      module.exports = m;
    }
  });

  // src/generated/246.js
  var require__141 = __commonJS({
    "src/generated/246.js"(exports, module) {
      var n = {
        isBatchingUpdates: false,
        batchedUpdates: function(e2) {
        }
      };
      module.exports = n;
    }
  });

  // src/generated/248.js
  var require__142 = __commonJS({
    "src/generated/248.js"(exports, module) {
      function r(e2) {
        this.reinitializeTransaction();
        this.renderToStaticMarkup = e2;
        this.reactMountReady = a.getPooled(null);
        this.useCreateElement = false;
      }
      var o = require__45();
      var a = require__46();
      var i = require__47();
      var s = require__30();
      var u = require__8();
      var l = {
        initialize: function() {
          this.reactMountReady.reset();
        },
        close: u
      };
      var c = [l];
      var p = {
        getTransactionWrappers: function() {
          return c;
        },
        getReactMountReady: function() {
          return this.reactMountReady;
        },
        destructor: function() {
          a.release(this.reactMountReady);
          this.reactMountReady = null;
        }
      };
      s(r.prototype, i.Mixin, p);
      o.addPoolingTo(r);
      module.exports = r;
    }
  });

  // src/generated/247.js
  var require__143 = __commonJS({
    "src/generated/247.js"(exports, module) {
      function r(e2) {
        if (i.isValidElement(e2)) {
        } else {
          h(false);
        }
        var t;
        try {
          p.injection.injectBatchingStrategy(l);
          var n = s.createReactRootID();
          t = c.getPooled(false);
          return t.perform(function() {
            var r2 = f(e2, null);
            var o2 = r2.mountComponent(n, t, d);
            return u.addChecksumToMarkup(o2);
          }, null);
        } finally {
          c.release(t);
          p.injection.injectBatchingStrategy(a);
        }
      }
      function o(e2) {
        if (i.isValidElement(e2)) {
        } else {
          h(false);
        }
        var t;
        try {
          p.injection.injectBatchingStrategy(l);
          var n = s.createReactRootID();
          t = c.getPooled(true);
          return t.perform(function() {
            var r2 = f(e2, null);
            return r2.mountComponent(n, t, d);
          }, null);
        } finally {
          c.release(t);
          p.injection.injectBatchingStrategy(a);
        }
      }
      var a = require__87();
      var i = require__35();
      var s = require__38();
      var u = require__41();
      var l = require__141();
      var c = require__142();
      var p = require__48();
      var d = require__50();
      var f = require__61();
      var h = require__3();
      module.exports = {
        renderToString: r,
        renderToStaticMarkup: o
      };
    }
  });

  // src/generated/90.js
  var require__144 = __commonJS({
    "src/generated/90.js"(exports, module) {
      var r = require__137();
      var o = require__143();
      var a = require__138();
      r.inject();
      var i = {
        renderToString: o.renderToString,
        renderToStaticMarkup: o.renderToStaticMarkup,
        version: a
      };
      module.exports = i;
    }
  });

  // src/generated/94.js
  var require__145 = __commonJS({
    "src/generated/94.js"(exports, module) {
      function r() {
        if (p.current) {
          var e2 = p.current.getName();
          if (e2) {
            return " Check the render method of `" + e2 + "`.";
          }
        }
        return "";
      }
      function o(e2, t) {
        if (e2._store && !e2._store.validated && e2.key == null) {
          e2._store.validated = true;
          a("uniqueKey", e2, t);
        }
      }
      function a(e2, t, n) {
        var o2 = r();
        if (!o2) {
          var a2 = typeof n == "string" ? n : n.displayName || n.name;
          if (a2) {
            o2 = " Check the top-level render call using <" + a2 + ">.";
          }
        }
        var i2 = h[e2] ||= {};
        if (i2[o2]) {
          return null;
        }
        i2[o2] = true;
        var s2 = {
          parentOrOwner: o2,
          url: " See https://fb.me/react-warning-keys for more information.",
          childOwner: null
        };
        if (t && t._owner && t._owner !== p.current) {
          s2.childOwner = " It was passed a child from " + t._owner.getName() + ".";
        }
        return s2;
      }
      function i(e2, t) {
        if (typeof e2 == "object") {
          if (Array.isArray(e2)) {
            for (var n = 0; n < e2.length; n++) {
              var r2 = e2[n];
              if (l.isValidElement(r2)) {
                o(r2, t);
              }
            }
          } else if (l.isValidElement(e2)) {
            if (e2._store) {
              e2._store.validated = true;
            }
          } else if (e2) {
            var a2 = d(e2);
            if (a2 && a2 !== e2.entries) {
              for (var i2, s2 = a2.call(e2); !(i2 = s2.next()).done; ) {
                if (l.isValidElement(i2.value)) {
                  o(i2.value, t);
                }
              }
            }
          }
        }
      }
      function s(e2, t, n, o2) {
        for (var a2 in t) {
          if (t.hasOwnProperty(a2)) {
            var i2;
            try {
              if (typeof t[a2] != "function") {
                f(false);
              } else {
              }
              i2 = t[a2](n, a2, e2, o2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (e3) {
              i2 = e3;
            }
            if (i2 instanceof Error && !(i2.message in m)) {
              m[i2.message] = true;
              r();
            }
          }
        }
      }
      function u(e2) {
        var t = e2.type;
        if (typeof t == "function") {
          var n = t.displayName || t.name;
          if (t.propTypes) {
            s(n, t.propTypes, e2.props, c.prop);
          }
          typeof t.getDefaultProps == "function";
        }
      }
      var l = require__35();
      var c = require__55();
      require__56();
      var p = require__();
      require__34();
      var d = require__99();
      var f = require__3();
      require__19();
      var h = {};
      var m = {};
      var v = {
        createElement: function(e2, t, n) {
          var r2 = typeof e2 == "string" || typeof e2 == "function";
          var o2 = l.createElement.apply(this, arguments);
          if (o2 == null) {
            return o2;
          }
          if (r2) {
            for (var a2 = 2; a2 < arguments.length; a2++) {
              i(arguments[a2], e2);
            }
          }
          u(o2);
          return o2;
        },
        createFactory: function(e2) {
          var t = v.createElement.bind(null, e2);
          t.type = e2;
          return t;
        },
        cloneElement: function(e2, t, n) {
          var r2 = l.cloneElement.apply(this, arguments);
          for (var o2 = 2; o2 < arguments.length; o2++) {
            i(arguments[o2], r2.type);
          }
          u(r2);
          return r2;
        }
      };
      module.exports = v;
    }
  });

  // src/generated/174.js
  var require__146 = __commonJS({
    "src/generated/174.js"(exports, module) {
      function n(e2, t, n2) {
        if (!e2) {
          return null;
        }
        var o = {};
        for (var a in e2) {
          if (r.call(e2, a)) {
            o[a] = t.call(n2, e2[a], a, e2);
          }
        }
        return o;
      }
      var r = Object.prototype.hasOwnProperty;
      module.exports = n;
    }
  });

  // src/generated/233.js
  var require__147 = __commonJS({
    "src/generated/233.js"(exports, module) {
      function r(e2) {
        return o.createFactory(e2);
      }
      var o = require__35();
      require__145();
      var a = require__146();
      var i = a({
        a: "a",
        abbr: "abbr",
        address: "address",
        area: "area",
        article: "article",
        aside: "aside",
        audio: "audio",
        b: "b",
        base: "base",
        bdi: "bdi",
        bdo: "bdo",
        big: "big",
        blockquote: "blockquote",
        body: "body",
        br: "br",
        button: "button",
        canvas: "canvas",
        caption: "caption",
        cite: "cite",
        code: "code",
        col: "col",
        colgroup: "colgroup",
        data: "data",
        datalist: "datalist",
        dd: "dd",
        del: "del",
        details: "details",
        dfn: "dfn",
        dialog: "dialog",
        div: "div",
        dl: "dl",
        dt: "dt",
        em: "em",
        embed: "embed",
        fieldset: "fieldset",
        figcaption: "figcaption",
        figure: "figure",
        footer: "footer",
        form: "form",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        head: "head",
        header: "header",
        hgroup: "hgroup",
        hr: "hr",
        html: "html",
        i: "i",
        iframe: "iframe",
        img: "img",
        input: "input",
        ins: "ins",
        kbd: "kbd",
        keygen: "keygen",
        label: "label",
        legend: "legend",
        li: "li",
        link: "link",
        main: "main",
        map: "map",
        mark: "mark",
        menu: "menu",
        menuitem: "menuitem",
        meta: "meta",
        meter: "meter",
        nav: "nav",
        noscript: "noscript",
        object: "object",
        ol: "ol",
        optgroup: "optgroup",
        option: "option",
        output: "output",
        p: "p",
        param: "param",
        picture: "picture",
        pre: "pre",
        progress: "progress",
        q: "q",
        rp: "rp",
        rt: "rt",
        ruby: "ruby",
        s: "s",
        samp: "samp",
        script: "script",
        section: "section",
        select: "select",
        small: "small",
        source: "source",
        span: "span",
        strong: "strong",
        style: "style",
        sub: "sub",
        summary: "summary",
        sup: "sup",
        table: "table",
        tbody: "tbody",
        td: "td",
        textarea: "textarea",
        tfoot: "tfoot",
        th: "th",
        thead: "thead",
        time: "time",
        title: "title",
        tr: "tr",
        track: "track",
        u: "u",
        ul: "ul",
        var: "var",
        video: "video",
        wbr: "wbr",
        circle: "circle",
        clipPath: "clipPath",
        defs: "defs",
        ellipse: "ellipse",
        g: "g",
        image: "image",
        line: "line",
        linearGradient: "linearGradient",
        mask: "mask",
        path: "path",
        pattern: "pattern",
        polygon: "polygon",
        polyline: "polyline",
        radialGradient: "radialGradient",
        rect: "rect",
        stop: "stop",
        svg: "svg",
        text: "text",
        tspan: "tspan"
      }, r);
      module.exports = i;
    }
  });

  // src/generated/111.js
  var require__148 = __commonJS({
    "src/generated/111.js"(exports, module) {
      function r(e2) {
        if (o.isValidElement(e2)) {
        } else {
          a(false);
        }
        return e2;
      }
      var o = require__35();
      var a = require__3();
      module.exports = r;
    }
  });

  // src/generated/241.js
  var require__149 = __commonJS({
    "src/generated/241.js"(exports, module) {
      var r = require__104();
      var o = require__117();
      var a = require__118();
      var i = require__147();
      var s = require__35();
      require__145();
      var u = require__100();
      var l = require__138();
      var c = require__30();
      var p = require__148();
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
        createMixin: function(e2) {
          return e2;
        },
        DOM: i,
        version: l,
        __spread: c
      };
      module.exports = m;
    }
  });

  // src/generated/266.js
  var require__150 = __commonJS({
    "src/generated/266.js"(exports, module) {
      function r(e2, t, n, r2, o) {
        return o;
      }
      require__30();
      require__19();
      module.exports = r;
    }
  });

  // src/generated/35.js
  var require__151 = __commonJS({
    "src/generated/35.js"(exports, module) {
      var r = require__140();
      var o = require__144();
      var a = require__149();
      var i = require__30();
      var s = require__150();
      var u = {};
      i(u, a);
      i(u, {
        findDOMNode: s("findDOMNode", "ReactDOM", "react-dom", r, r.findDOMNode),
        render: s("render", "ReactDOM", "react-dom", r, r.render),
        unmountComponentAtNode: s("unmountComponentAtNode", "ReactDOM", "react-dom", r, r.unmountComponentAtNode),
        renderToString: s("renderToString", "ReactDOMServer", "react-dom/server", o, o.renderToString),
        renderToStaticMarkup: s("renderToStaticMarkup", "ReactDOMServer", "react-dom/server", o, o.renderToStaticMarkup)
      });
      u.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r;
      u.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o;
      module.exports = u;
    }
  });

  // src/generated/2.js
  var require__152 = __commonJS({
    "src/generated/2.js"(exports, module) {
      module.exports = require__151();
    }
  });

  // src/generated/194.js
  var require__153 = __commonJS({
    "src/generated/194.js"(exports, module) {
      var t = /* @__PURE__ */ (function() {
        return this;
      })();
      var n = typeof t == "object" && t && t.Object === Object && t;
      module.exports = n;
    }
  });

  // src/generated/199.js
  var require__154 = __commonJS({
    "src/generated/199.js"(exports, module) {
      var r = require__153();
      var o = typeof self == "object" && self && self.Object === Object && self;
      var a = r || o || Function("return this")();
      module.exports = a;
    }
  });

  // src/generated/77.js
  var require__155 = __commonJS({
    "src/generated/77.js"(exports, module) {
      var r = require__154();
      var o = r.Symbol;
      module.exports = o;
    }
  });

  // src/generated/196.js
  var require__156 = __commonJS({
    "src/generated/196.js"(exports, module) {
      function r(e2) {
        var t = i.call(e2, u);
        var n = e2[u];
        try {
          e2[u] = void 0;
          var r2 = true;
        } catch (e3) {
        }
        var o2 = s.call(e2);
        if (r2) {
          if (t) {
            e2[u] = n;
          } else {
            delete e2[u];
          }
        }
        return o2;
      }
      var o = require__155();
      var a = Object.prototype;
      var i = a.hasOwnProperty;
      var s = a.toString;
      var u = o ? o.toStringTag : void 0;
      module.exports = r;
    }
  });

  // src/generated/197.js
  var require__157 = __commonJS({
    "src/generated/197.js"(exports, module) {
      function n(e2) {
        return o.call(e2);
      }
      var r = Object.prototype;
      var o = r.toString;
      module.exports = n;
    }
  });

  // src/generated/193.js
  var require__158 = __commonJS({
    "src/generated/193.js"(exports, module) {
      function r(e2) {
        if (e2 == null) {
          if (e2 === void 0) {
            return u;
          } else {
            return s;
          }
        } else if (l && l in Object(e2)) {
          return a(e2);
        } else {
          return i(e2);
        }
      }
      var o = require__155();
      var a = require__156();
      var i = require__157();
      var s = "[object Null]";
      var u = "[object Undefined]";
      var l = o ? o.toStringTag : void 0;
      module.exports = r;
    }
  });

  // src/generated/198.js
  var require__159 = __commonJS({
    "src/generated/198.js"(exports, module) {
      function n(e2, t) {
        return function(n2) {
          return e2(t(n2));
        };
      }
      module.exports = n;
    }
  });

  // src/generated/195.js
  var require__160 = __commonJS({
    "src/generated/195.js"(exports, module) {
      var r = require__159();
      var o = r(Object.getPrototypeOf, Object);
      module.exports = o;
    }
  });

  // src/generated/200.js
  var require__161 = __commonJS({
    "src/generated/200.js"(exports, module) {
      function n(e2) {
        return e2 != null && typeof e2 == "object";
      }
      module.exports = n;
    }
  });

  // src/generated/44.js
  var require__162 = __commonJS({
    "src/generated/44.js"(exports, module) {
      function r(e2) {
        if (!i(e2) || o(e2) != s) {
          return false;
        }
        var t = a(e2);
        if (t === null) {
          return true;
        }
        var n = p.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && c.call(n) == d;
      }
      var o = require__158();
      var a = require__160();
      var i = require__161();
      var s = "[object Object]";
      var u = Function.prototype;
      var l = Object.prototype;
      var c = u.toString;
      var p = l.hasOwnProperty;
      var d = c.call(Object);
      module.exports = r;
    }
  });

  // src/generated/277.js
  var require__163 = __commonJS({
    "src/generated/277.js"(exports, module) {
      module.exports = function(e2) {
        if (!e2.webpackPolyfill) {
          e2.deprecate = function() {
          };
          e2.paths = [];
          e2.children = [];
          e2.webpackPolyfill = 1;
        }
        return e2;
      };
    }
  });

  // src/generated/276.js
  var require__164 = __commonJS({
    "src/generated/276.js"(exports) {
      function n(e2) {
        var t;
        var n2 = e2.Symbol;
        if (typeof n2 == "function") {
          if (n2.observable) {
            t = n2.observable;
          } else {
            t = n2("observable");
            n2.observable = t;
          }
        } else {
          t = "@@observable";
        }
        return t;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = n;
    }
  });

  // src/generated/275.js
  var require__165 = __commonJS({
    "src/generated/275.js"(exports, module) {
      var e2 = /* @__PURE__ */ (function() {
        return this;
      })();
      var r = require__163()(module);
      function o(e3) {
        if (e3 && e3.__esModule) {
          return e3;
        } else {
          return {
            default: e3
          };
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var a;
      var i = require__164();
      var s = o(i);
      a = typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof e2 != "undefined" ? e2 : r;
      var u = (0, s.default)(a);
      exports.default = u;
    }
  });

  // src/generated/113.js
  var require__166 = __commonJS({
    "src/generated/113.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t, n) {
        function r2() {
          if (y === v) {
            y = v.slice();
          }
        }
        function a2() {
          return m;
        }
        function s2(e3) {
          if (typeof e3 != "function") {
            throw new Error("Expected listener to be a function.");
          }
          var t2 = true;
          r2();
          y.push(e3);
          return function() {
            if (t2) {
              t2 = false;
              r2();
              var n2 = y.indexOf(e3);
              y.splice(n2, 1);
            }
          };
        }
        function c(e3) {
          if (!(0, i.default)(e3)) {
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          }
          if (typeof e3.type == "undefined") {
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          }
          if (g) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            g = true;
            m = h(m, e3);
          } finally {
            g = false;
          }
          for (var t2 = v = y, n2 = 0; n2 < t2.length; n2++) {
            var r3 = t2[n2];
            r3();
          }
          return e3;
        }
        function p(e3) {
          if (typeof e3 != "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          h = e3;
          c({
            type: l.INIT
          });
        }
        function d() {
          var e3;
          var t2 = s2;
          e3 = {
            subscribe: function(e4) {
              function n2() {
                if (e4.next) {
                  e4.next(a2());
                }
              }
              if (typeof e4 != "object") {
                throw new TypeError("Expected the observer to be an object.");
              }
              n2();
              var r3 = t2(n2);
              return {
                unsubscribe: r3
              };
            }
          };
          e3[u.default] = function() {
            return this;
          };
          return e3;
        }
        var f;
        if (typeof t == "function" && typeof n == "undefined") {
          n = t;
          t = void 0;
        }
        if (typeof n != "undefined") {
          if (typeof n != "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return n(o)(e2, t);
        }
        if (typeof e2 != "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var h = e2;
        var m = t;
        var v = [];
        var y = v;
        var g = false;
        c({
          type: l.INIT
        });
        f = {
          dispatch: c,
          subscribe: s2,
          getState: a2,
          replaceReducer: p
        };
        f[u.default] = d;
        return f;
      }
      exports.__esModule = true;
      exports.ActionTypes = void 0;
      exports.default = o;
      var a = require__162();
      var i = r(a);
      var s = require__165();
      var u = r(s);
      var l = exports.ActionTypes = {
        INIT: "@@redux/INIT"
      };
    }
  });

  // src/generated/114.js
  var require__167 = __commonJS({
    "src/generated/114.js"(exports) {
      function n(e2) {
        if (typeof console != "undefined" && typeof console.error == "function") {
          console.error(e2);
        }
        try {
          throw new Error(e2);
        } catch (e3) {
        }
      }
      exports.__esModule = true;
      exports.default = n;
    }
  });

  // src/generated/274.js
  var require__168 = __commonJS({
    "src/generated/274.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        var n = t && t.type;
        var r2 = n && '"' + n.toString() + '"' || "an action";
        return "Given action " + r2 + ', reducer "' + e2 + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
      }
      function a(e2) {
        Object.keys(e2).forEach(function(t) {
          var n = e2[t];
          var r2 = n(void 0, {
            type: s.ActionTypes.INIT
          });
          if (typeof r2 == "undefined") {
            throw new Error('Reducer "' + t + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
          }
          var o2 = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof n(void 0, {
            type: o2
          }) == "undefined") {
            throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + s.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
          }
        });
      }
      function i(e2) {
        for (var t = Object.keys(e2), n = {}, r2 = 0; r2 < t.length; r2++) {
          var i2 = t[r2];
          if (typeof e2[i2] == "function") {
            n[i2] = e2[i2];
          }
        }
        var s2 = Object.keys(n);
        var u2 = void 0;
        try {
          a(n);
        } catch (e3) {
          u2 = e3;
        }
        return function(e3 = {}) {
          var t2 = arguments[1];
          if (u2) {
            throw u2;
          }
          var r3 = false;
          var a2 = {};
          for (var i3 = 0; i3 < s2.length; i3++) {
            var l2 = s2[i3];
            var c = n[l2];
            var p = e3[l2];
            var d = c(p, t2);
            if (typeof d == "undefined") {
              var f = o(l2, t2);
              throw new Error(f);
            }
            a2[l2] = d;
            r3 = r3 || d !== p;
          }
          if (r3) {
            return a2;
          } else {
            return e3;
          }
        };
      }
      exports.__esModule = true;
      exports.default = i;
      var s = require__166();
      var u = require__162();
      r(u);
      var l = require__167();
      r(l);
    }
  });

  // src/generated/273.js
  var require__169 = __commonJS({
    "src/generated/273.js"(exports) {
      function n(e2, t) {
        return function() {
          return t(e2.apply(void 0, arguments));
        };
      }
      function r(e2, t) {
        if (typeof e2 == "function") {
          return n(e2, t);
        }
        if (typeof e2 != "object" || e2 === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (e2 === null ? "null" : typeof e2) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        for (var r2 = Object.keys(e2), o = {}, a = 0; a < r2.length; a++) {
          var i = r2[a];
          var s = e2[i];
          if (typeof s == "function") {
            o[i] = n(s, t);
          }
        }
        return o;
      }
      exports.__esModule = true;
      exports.default = r;
    }
  });

  // src/generated/112.js
  var require__170 = __commonJS({
    "src/generated/112.js"(exports) {
      function n() {
        for (var e2 = arguments.length, t = Array(e2), n2 = 0; n2 < e2; n2++) {
          t[n2] = arguments[n2];
        }
        if (t.length === 0) {
          return function(e3) {
            return e3;
          };
        } else if (t.length === 1) {
          return t[0];
        } else {
          return t.reduce(function(e3, t2) {
            return function() {
              return e3(t2.apply(void 0, arguments));
            };
          });
        }
      }
      exports.__esModule = true;
      exports.default = n;
    }
  });

  // src/generated/272.js
  var require__171 = __commonJS({
    "src/generated/272.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o() {
        for (var e2 = arguments.length, t = Array(e2), n = 0; n < e2; n++) {
          t[n] = arguments[n];
        }
        return function(e3) {
          return function(n2, r2, o2) {
            var i2 = e3(n2, r2, o2);
            var u = i2.dispatch;
            var l = [];
            var c = {
              getState: i2.getState,
              dispatch: function(e4) {
                return u(e4);
              }
            };
            l = t.map(function(e4) {
              return e4(c);
            });
            u = s.default.apply(void 0, l)(i2.dispatch);
            return a({}, i2, {
              dispatch: u
            });
          };
        };
      }
      exports.__esModule = true;
      var a = Object.assign || function(e2) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r2 in n) {
            if (Object.prototype.hasOwnProperty.call(n, r2)) {
              e2[r2] = n[r2];
            }
          }
        }
        return e2;
      };
      exports.default = o;
      var i = require__170();
      var s = r(i);
    }
  });

  // src/generated/29.js
  var require__172 = __commonJS({
    "src/generated/29.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      exports.__esModule = true;
      exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
      var o = require__166();
      var a = r(o);
      var i = require__168();
      var s = r(i);
      var u = require__169();
      var l = r(u);
      var c = require__171();
      var p = r(c);
      var d = require__170();
      var f = r(d);
      var h = require__167();
      r(h);
      exports.createStore = a.default;
      exports.combineReducers = s.default;
      exports.bindActionCreators = l.default;
      exports.applyMiddleware = p.default;
      exports.compose = f.default;
    }
  });

  // src/generated/202.js
  var require__173 = __commonJS({
    "src/generated/202.js"(exports, module) {
      var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = n;
    }
  });

  // src/generated/201.js
  var require__174 = __commonJS({
    "src/generated/201.js"(exports, module) {
      function r() {
      }
      var o = require__173();
      module.exports = function() {
        function e2(e3, t2, n2, r2, a, i) {
          if (i !== o) {
            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            s.name = "Invariant Violation";
            throw s;
          }
        }
        function t() {
          return e2;
        }
        e2.isRequired = e2;
        var n = {
          array: e2,
          bool: e2,
          func: e2,
          number: e2,
          object: e2,
          string: e2,
          symbol: e2,
          any: e2,
          arrayOf: t,
          element: e2,
          instanceOf: t,
          node: e2,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t
        };
        n.checkPropTypes = r;
        n.PropTypes = n;
        return n;
      };
    }
  });

  // src/generated/78.js
  var require__175 = __commonJS({
    "src/generated/78.js"(exports, module) {
      module.exports = require__174()();
    }
  });

  // src/generated/80.js
  var require__176 = __commonJS({
    "src/generated/80.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      exports.__esModule = true;
      var o = require__175();
      var a = r(o);
      exports.default = a.default.shape({
        subscribe: a.default.func.isRequired,
        dispatch: a.default.func.isRequired,
        getState: a.default.func.isRequired
      });
    }
  });

  // src/generated/81.js
  var require__177 = __commonJS({
    "src/generated/81.js"(exports) {
      function n(e2) {
        if (typeof console != "undefined" && typeof console.error == "function") {
          console.error(e2);
        }
        try {
          throw new Error(e2);
        } catch (e3) {
        }
      }
      exports.__esModule = true;
      exports.default = n;
    }
  });

  // src/generated/211.js
  var require__178 = __commonJS({
    "src/generated/211.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (!e2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        if (!t || typeof t != "object" && typeof t != "function") {
          return e2;
        } else {
          return t;
        }
      }
      function i(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      exports.__esModule = true;
      exports.default = void 0;
      var s = require__152();
      var u = require__175();
      var l = r(u);
      var c = require__176();
      var p = r(c);
      var d = require__177();
      r(d);
      var f = (function(e2) {
        function t(n, r2) {
          o(this, t);
          var i2 = a(this, e2.call(this, n, r2));
          i2.store = n.store;
          return i2;
        }
        i(t, e2);
        t.prototype.getChildContext = function() {
          return {
            store: this.store
          };
        };
        t.prototype.render = function() {
          return s.Children.only(this.props.children);
        };
        return t;
      })(s.Component);
      exports.default = f;
      f.propTypes = {
        store: p.default.isRequired,
        children: l.default.element.isRequired
      };
      f.childContextTypes = {
        store: p.default.isRequired
      };
    }
  });

  // src/generated/213.js
  var require__179 = __commonJS({
    "src/generated/213.js"(exports) {
      function n(e2, t) {
        if (e2 === t) {
          return true;
        }
        var n2 = Object.keys(e2);
        var r = Object.keys(t);
        if (n2.length !== r.length) {
          return false;
        }
        var o = Object.prototype.hasOwnProperty;
        for (var a = 0; a < n2.length; a++) {
          if (!o.call(t, n2[a]) || e2[n2[a]] !== t[n2[a]]) {
            return false;
          }
        }
        return true;
      }
      exports.__esModule = true;
      exports.default = n;
    }
  });

  // src/generated/214.js
  var require__180 = __commonJS({
    "src/generated/214.js"(exports) {
      function r(e2) {
        return function(t) {
          return (0, o.bindActionCreators)(e2, t);
        };
      }
      exports.__esModule = true;
      exports.default = r;
      var o = require__172();
    }
  });

  // src/generated/180.js
  var require__181 = __commonJS({
    "src/generated/180.js"(exports, module) {
      function n(e2, t, p) {
        if (typeof t != "string") {
          if (c) {
            var d = l(t);
            if (d && d !== c) {
              n(e2, d, p);
            }
          }
          var f = i(t);
          if (s) {
            f = f.concat(s(t));
          }
          for (var h = 0; h < f.length; ++h) {
            var m = f[h];
            if (!r[m] && !o[m] && (!p || !p[m])) {
              var v = u(t, m);
              try {
                a(e2, m, v);
              } catch (e3) {
              }
            }
          }
          return e2;
        }
        return e2;
      }
      var r = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var o = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var a = Object.defineProperty;
      var i = Object.getOwnPropertyNames;
      var s = Object.getOwnPropertySymbols;
      var u = Object.getOwnPropertyDescriptor;
      var l = Object.getPrototypeOf;
      var c = l && l(Object);
      module.exports = n;
    }
  });

  // src/generated/182.js
  var require__182 = __commonJS({
    "src/generated/182.js"(exports, module) {
      function r(e2, t, n, r2, o, a, i, s) {
        if (!e2) {
          var u;
          if (t === void 0) {
            u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          } else {
            var l = [n, r2, o, a, i, s];
            var c = 0;
            u = new Error(t.replace(/%s/g, function() {
              return l[c++];
            }));
            u.name = "Invariant Violation";
          }
          u.framesToPop = 1;
          throw u;
        }
      }
      module.exports = r;
    }
  });

  // src/generated/212.js
  var require__183 = __commonJS({
    "src/generated/212.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (!e2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        if (!t || typeof t != "object" && typeof t != "function") {
          return e2;
        } else {
          return t;
        }
      }
      function i(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      function s(e2) {
        return e2.displayName || e2.name || "Component";
      }
      function u(e2, t) {
        try {
          return e2.apply(t);
        } catch (e3) {
          S.value = e3;
          return S;
        }
      }
      function l(e2, t, n, r2 = {}) {
        var l2 = Boolean(e2);
        var d2 = e2 || O;
        var h2 = void 0;
        h2 = typeof t == "function" ? t : t ? (0, y.default)(t) : P;
        var v2 = n || k;
        var g2 = r2.pure;
        var b2 = g2 === void 0 || g2;
        var E2 = r2.withRef;
        var C2 = E2 !== void 0 && E2;
        var T = b2 && v2 !== k;
        var M = x++;
        return function(e3) {
          function t2(e4, t3, n3) {
            var r4 = v2(e4, t3, n3);
            return r4;
          }
          var n2 = "Connect(" + s(e3) + ")";
          var r3 = (function(r4) {
            function s2(e4, t3) {
              o(this, s2);
              var i2 = a(this, r4.call(this, e4, t3));
              i2.version = M;
              i2.store = e4.store || t3.store;
              (0, _.default)(i2.store, 'Could not find "store" in either the context or ' + ('props of "' + n2 + '". ') + "Either wrap the root component in a <Provider>, " + ('or explicitly pass "store" as a prop to "' + n2 + '".'));
              var u2 = i2.store.getState();
              i2.state = {
                storeState: u2
              };
              i2.clearCache();
              return i2;
            }
            i(s2, r4);
            s2.prototype.shouldComponentUpdate = function() {
              return !b2 || this.haveOwnPropsChanged || this.hasStoreStateChanged;
            };
            s2.prototype.computeStateProps = function(e4, t3) {
              if (!this.finalMapStateToProps) {
                return this.configureFinalMapState(e4, t3);
              }
              var n3 = e4.getState();
              var r5 = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(n3, t3) : this.finalMapStateToProps(n3);
              return r5;
            };
            s2.prototype.configureFinalMapState = function(e4, t3) {
              var n3 = d2(e4.getState(), t3);
              var r5 = typeof n3 == "function";
              this.finalMapStateToProps = r5 ? n3 : d2;
              this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
              if (r5) {
                return this.computeStateProps(e4, t3);
              } else {
                return n3;
              }
            };
            s2.prototype.computeDispatchProps = function(e4, t3) {
              if (!this.finalMapDispatchToProps) {
                return this.configureFinalMapDispatch(e4, t3);
              }
              var n3 = e4.dispatch;
              var r5 = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(n3, t3) : this.finalMapDispatchToProps(n3);
              return r5;
            };
            s2.prototype.configureFinalMapDispatch = function(e4, t3) {
              var n3 = h2(e4.dispatch, t3);
              var r5 = typeof n3 == "function";
              this.finalMapDispatchToProps = r5 ? n3 : h2;
              this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
              if (r5) {
                return this.computeDispatchProps(e4, t3);
              } else {
                return n3;
              }
            };
            s2.prototype.updateStatePropsIfNeeded = function() {
              var e4 = this.computeStateProps(this.store, this.props);
              return (!this.stateProps || !(0, m.default)(e4, this.stateProps)) && (this.stateProps = e4, true);
            };
            s2.prototype.updateDispatchPropsIfNeeded = function() {
              var e4 = this.computeDispatchProps(this.store, this.props);
              return (!this.dispatchProps || !(0, m.default)(e4, this.dispatchProps)) && (this.dispatchProps = e4, true);
            };
            s2.prototype.updateMergedPropsIfNeeded = function() {
              var e4 = t2(this.stateProps, this.dispatchProps, this.props);
              return (!this.mergedProps || !T || !(0, m.default)(e4, this.mergedProps)) && (this.mergedProps = e4, true);
            };
            s2.prototype.isSubscribed = function() {
              return typeof this.unsubscribe == "function";
            };
            s2.prototype.trySubscribe = function() {
              if (l2 && !this.unsubscribe) {
                this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
                this.handleChange();
              }
            };
            s2.prototype.tryUnsubscribe = function() {
              if (this.unsubscribe) {
                this.unsubscribe();
                this.unsubscribe = null;
              }
            };
            s2.prototype.componentDidMount = function() {
              this.trySubscribe();
            };
            s2.prototype.componentWillReceiveProps = function(e4) {
              if (!b2 || !(0, m.default)(e4, this.props)) {
                this.haveOwnPropsChanged = true;
              }
            };
            s2.prototype.componentWillUnmount = function() {
              this.tryUnsubscribe();
              this.clearCache();
            };
            s2.prototype.clearCache = function() {
              this.dispatchProps = null;
              this.stateProps = null;
              this.mergedProps = null;
              this.haveOwnPropsChanged = true;
              this.hasStoreStateChanged = true;
              this.haveStatePropsBeenPrecalculated = false;
              this.statePropsPrecalculationError = null;
              this.renderedElement = null;
              this.finalMapDispatchToProps = null;
              this.finalMapStateToProps = null;
            };
            s2.prototype.handleChange = function() {
              if (this.unsubscribe) {
                var e4 = this.store.getState();
                var t3 = this.state.storeState;
                if (!b2 || t3 !== e4) {
                  if (b2 && !this.doStatePropsDependOnOwnProps) {
                    var n3 = u(this.updateStatePropsIfNeeded, this);
                    if (!n3) {
                      return;
                    }
                    if (n3 === S) {
                      this.statePropsPrecalculationError = S.value;
                    }
                    this.haveStatePropsBeenPrecalculated = true;
                  }
                  this.hasStoreStateChanged = true;
                  this.setState({
                    storeState: e4
                  });
                }
              }
            };
            s2.prototype.getWrappedInstance = function() {
              (0, _.default)(C2, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call.");
              return this.refs.wrappedInstance;
            };
            s2.prototype.render = function() {
              var t3 = this.haveOwnPropsChanged;
              var n3 = this.hasStoreStateChanged;
              var r5 = this.haveStatePropsBeenPrecalculated;
              var o2 = this.statePropsPrecalculationError;
              var a2 = this.renderedElement;
              this.haveOwnPropsChanged = false;
              this.hasStoreStateChanged = false;
              this.haveStatePropsBeenPrecalculated = false;
              this.statePropsPrecalculationError = null;
              if (o2) {
                throw o2;
              }
              var i2 = true;
              var s3 = true;
              if (b2 && a2) {
                i2 = n3 || t3 && this.doStatePropsDependOnOwnProps;
                s3 = t3 && this.doDispatchPropsDependOnOwnProps;
              }
              var u2 = false;
              var l3 = false;
              if (r5) {
                u2 = true;
              } else if (i2) {
                u2 = this.updateStatePropsIfNeeded();
              }
              if (s3) {
                l3 = this.updateDispatchPropsIfNeeded();
              }
              var d3 = true;
              d3 = (!!u2 || !!l3 || !!t3) && this.updateMergedPropsIfNeeded();
              if (!d3 && a2) {
                return a2;
              } else {
                if (C2) {
                  this.renderedElement = (0, p.createElement)(e3, c({}, this.mergedProps, {
                    ref: "wrappedInstance"
                  }));
                } else {
                  this.renderedElement = (0, p.createElement)(e3, this.mergedProps);
                }
                return this.renderedElement;
              }
            };
            return s2;
          })(p.Component);
          r3.displayName = n2;
          r3.WrappedComponent = e3;
          r3.contextTypes = {
            store: f.default
          };
          r3.propTypes = {
            store: f.default
          };
          return (0, w.default)(r3, e3);
        };
      }
      exports.__esModule = true;
      var c = Object.assign || function(e2) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r2 in n) {
            if (Object.prototype.hasOwnProperty.call(n, r2)) {
              e2[r2] = n[r2];
            }
          }
        }
        return e2;
      };
      exports.default = l;
      var p = require__152();
      var d = require__176();
      var f = r(d);
      var h = require__179();
      var m = r(h);
      var v = require__180();
      var y = r(v);
      var g = require__177();
      r(g);
      var b = require__162();
      r(b);
      var E = require__181();
      var w = r(E);
      var C = require__182();
      var _ = r(C);
      function O(e2) {
        return {};
      }
      function P(e2) {
        return {
          dispatch: e2
        };
      }
      function k(e2, t, n) {
        return c({}, n, e2, t);
      }
      var S = {
        value: null
      };
      var x = 0;
    }
  });

  // src/generated/34.js
  var require__184 = __commonJS({
    "src/generated/34.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      exports.__esModule = true;
      exports.connect = exports.Provider = void 0;
      var o = require__178();
      var a = r(o);
      var i = require__183();
      var s = r(i);
      exports.Provider = a.default;
      exports.connect = s.default;
    }
  });

  // src/generated/160.js
  var require__185 = __commonJS({
    "src/generated/160.js"(exports, module) {
      module.exports = function() {
        "use strict";
        function e2() {
          var e3;
          var t2 = document.createElement("div");
          var n2 = {
            transition: "transitionend",
            OTransition: "otransitionend",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
          for (e3 in n2) {
            if (n2.hasOwnProperty(e3) && t2.style[e3] !== void 0) {
              return n2[e3];
            }
          }
          return false;
        }
        function t(e3) {
          var t2 = {};
          e3 = e3 || window.event;
          t2.evTarget = e3.currentTarget || e3.srcElement;
          var n2 = t2.evTarget.getAttribute("data-target");
          t2.dataTarget = !!n2 && document.querySelector(n2);
          return t2;
        }
        function n(e3) {
          var t2 = e3.style.height;
          e3.style.height = "auto";
          var n2 = getComputedStyle(e3).height;
          e3.style.height = t2;
          e3.offsetHeight;
          return n2;
        }
        function r(e3, t2) {
          if (document.createEvent) {
            var n2 = document.createEvent("HTMLEvents");
            n2.initEvent(t2, true, false);
            e3.dispatchEvent(n2);
          } else {
            e3.fireEvent("on" + t2);
          }
        }
        function o(e3, t2) {
          e3.classList.remove("collapse");
          e3.classList.add("collapsing");
          t2.classList.remove("collapsed");
          t2.setAttribute("aria-expanded", true);
          e3.style.height = n(e3);
          if (p) {
            e3.addEventListener(p, function() {
              i(e3);
            }, false);
          } else {
            i(e3);
          }
        }
        function a(e3, t2) {
          e3.classList.remove("collapse");
          e3.classList.remove("in");
          e3.classList.add("collapsing");
          t2.classList.add("collapsed");
          t2.setAttribute("aria-expanded", false);
          e3.style.height = getComputedStyle(e3).height;
          e3.offsetHeight;
          e3.style.height = "0px";
        }
        function i(e3) {
          e3.classList.remove("collapsing");
          e3.classList.add("collapse");
          e3.setAttribute("aria-expanded", false);
          if (e3.style.height !== "0px") {
            e3.classList.add("in");
            e3.style.height = "auto";
          }
        }
        function s(e3) {
          e3.preventDefault();
          var n2 = t(e3);
          var r2 = n2.dataTarget;
          if (r2.classList.contains("in")) {
            a(r2, n2.evTarget);
          } else {
            o(r2, n2.evTarget);
          }
          return false;
        }
        function u(e3) {
          function n2() {
            try {
              a2.parentNode.removeChild(a2);
              r(a2, "closed.bs.alert");
            } catch (e4) {
              window.console.error("Unable to remove alert");
            }
          }
          e3.preventDefault();
          var o2 = t(e3);
          var a2 = o2.dataTarget;
          if (!a2) {
            var i2 = o2.evTarget.parentNode;
            if (i2.classList.contains("alert")) {
              a2 = i2;
            } else if (i2.parentNode.classList.contains("alert")) {
              a2 = i2.parentNode;
            }
          }
          r(a2, "close.bs.alert");
          a2.classList.remove("in");
          if (p && a2.classList.contains("fade")) {
            a2.addEventListener(p, function() {
              n2();
            }, false);
          } else {
            n2();
          }
          return false;
        }
        function l(e3) {
          e3 = e3 || window.event;
          var t2 = e3.currentTarget || e3.srcElement;
          t2.parentElement.classList.toggle("open");
          return false;
        }
        function c(e3) {
          e3 = e3 || window.event;
          var t2 = e3.currentTarget || e3.srcElement;
          t2.parentElement.classList.remove("open");
          if (e3.relatedTarget && e3.relatedTarget.getAttribute("data-toggle") !== "dropdown") {
            e3.relatedTarget.click();
          }
          return false;
        }
        var p = e2();
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
    }
  });

  // src/generated/115.js
  var require__186 = __commonJS({
    "src/generated/115.js"() {
      (function(e2, t, n) {
        "use strict";
        function r(e3) {
          if (e3) {
            e3.setTargetAtTime ||= e3.setTargetValueAtTime;
          }
        }
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
          window.AudioContext = webkitAudioContext;
          if (!AudioContext.prototype.hasOwnProperty("createGain")) {
            AudioContext.prototype.createGain = AudioContext.prototype.createGainNode;
          }
          if (!AudioContext.prototype.hasOwnProperty("createDelay")) {
            AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode;
          }
          if (!AudioContext.prototype.hasOwnProperty("createScriptProcessor")) {
            AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode;
          }
          if (!AudioContext.prototype.hasOwnProperty("createPeriodicWave")) {
            AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable;
          }
          AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain;
          AudioContext.prototype.createGain = function() {
            var e3 = this.internal_createGain();
            r(e3.gain);
            return e3;
          };
          AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay;
          AudioContext.prototype.createDelay = function(e3) {
            var t2 = e3 ? this.internal_createDelay(e3) : this.internal_createDelay();
            r(t2.delayTime);
            return t2;
          };
          AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource;
          AudioContext.prototype.createBufferSource = function() {
            var e3 = this.internal_createBufferSource();
            if (e3.start) {
              e3.internal_start = e3.start;
              e3.start = function(t2, n2, r2) {
                if (typeof r2 != "undefined") {
                  e3.internal_start(t2 || 0, n2, r2);
                } else {
                  e3.internal_start(t2 || 0, n2);
                }
              };
            } else {
              e3.start = function(e4, t2, n2) {
                if (t2 || n2) {
                  this.noteGrainOn(e4 || 0, t2, n2);
                } else {
                  this.noteOn(e4 || 0);
                }
              };
            }
            if (e3.stop) {
              e3.internal_stop = e3.stop;
              e3.stop = function(t2) {
                e3.internal_stop(t2 || 0);
              };
            } else {
              e3.stop = function(e4) {
                this.noteOff(e4 || 0);
              };
            }
            r(e3.playbackRate);
            return e3;
          };
          AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor;
          AudioContext.prototype.createDynamicsCompressor = function() {
            var e3 = this.internal_createDynamicsCompressor();
            r(e3.threshold);
            r(e3.knee);
            r(e3.ratio);
            r(e3.reduction);
            r(e3.attack);
            r(e3.release);
            return e3;
          };
          AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter;
          AudioContext.prototype.createBiquadFilter = function() {
            var e3 = this.internal_createBiquadFilter();
            r(e3.frequency);
            r(e3.detune);
            r(e3.Q);
            r(e3.gain);
            return e3;
          };
          if (AudioContext.prototype.hasOwnProperty("createOscillator")) {
            AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator;
            AudioContext.prototype.createOscillator = function() {
              var e3 = this.internal_createOscillator();
              if (e3.start) {
                e3.internal_start = e3.start;
                e3.start = function(t2) {
                  e3.internal_start(t2 || 0);
                };
              } else {
                e3.start = function(e4) {
                  this.noteOn(e4 || 0);
                };
              }
              if (e3.stop) {
                e3.internal_stop = e3.stop;
                e3.stop = function(t2) {
                  e3.internal_stop(t2 || 0);
                };
              } else {
                e3.stop = function(e4) {
                  this.noteOff(e4 || 0);
                };
              }
              e3.setPeriodicWave ||= e3.setWaveTable;
              r(e3.frequency);
              r(e3.detune);
              return e3;
            };
          }
        }
        if (window.hasOwnProperty("webkitOfflineAudioContext") && !window.hasOwnProperty("OfflineAudioContext")) {
          window.OfflineAudioContext = webkitOfflineAudioContext;
        }
      })(window);
    }
  });

  // src/generated/181.js
  var require__187 = __commonJS({
    "src/generated/181.js"(exports, module) {
      var r = require__188();
      var o = r.shims.document;
      var a = r.shims.window;
      (function(t) {
        function n(e2, t2) {
          for (var n2 = e2.length; n2--; ) {
            if (e2[n2] === t2) {
              return n2;
            }
          }
          return -1;
        }
        function r2(e2, t2) {
          if (e2.length != t2.length) {
            return false;
          }
          for (var n2 = 0; n2 < e2.length; n2++) {
            if (e2[n2] !== t2[n2]) {
              return false;
            }
          }
          return true;
        }
        function i(e2) {
          for (C in O) {
            O[C] = e2[M[C]];
          }
        }
        function s(e2) {
          var t2;
          var r3;
          var o2;
          var a2;
          var s2;
          var u2;
          t2 = e2.keyCode;
          if (n(T, t2) == -1) {
            T.push(t2);
          }
          if (t2 == 93 || t2 == 224) {
            t2 = 91;
          }
          if (t2 in O) {
            O[t2] = true;
            for (o2 in k) {
              if (k[o2] == t2) {
                c[o2] = true;
              }
            }
          } else {
            i(e2);
            if (c.filter.call(this, e2) && t2 in _) {
              u2 = v();
              a2 = 0;
              for (; a2 < _[t2].length; a2++) {
                r3 = _[t2][a2];
                if (r3.scope == u2 || r3.scope == "all") {
                  s2 = r3.mods.length > 0;
                  for (o2 in O) {
                    if (!O[o2] && n(r3.mods, +o2) > -1 || O[o2] && n(r3.mods, +o2) == -1) {
                      s2 = false;
                    }
                  }
                  if (r3.mods.length == 0 && !O[16] && !O[18] && !O[17] && !O[91] || !!s2) {
                    if (r3.method(e2, r3) === false) {
                      if (e2.preventDefault) {
                        e2.preventDefault();
                      } else {
                        e2.returnValue = false;
                      }
                      if (e2.stopPropagation) {
                        e2.stopPropagation();
                      }
                      e2.cancelBubble &&= true;
                    }
                  }
                }
              }
            }
          }
        }
        function u(e2) {
          var t2;
          var r3 = e2.keyCode;
          var o2 = n(T, r3);
          if (o2 >= 0) {
            T.splice(o2, 1);
          }
          if (r3 == 93 || r3 == 224) {
            r3 = 91;
          }
          if (r3 in O) {
            O[r3] = false;
            for (t2 in k) {
              if (k[t2] == r3) {
                c[t2] = false;
              }
            }
          }
        }
        function l() {
          for (C in O) {
            O[C] = false;
          }
          for (C in k) {
            c[C] = false;
          }
        }
        function c(e2, t2, n2) {
          var r3;
          var o2;
          r3 = g(e2);
          if (n2 === void 0) {
            n2 = t2;
            t2 = "all";
          }
          for (var a2 = 0; a2 < r3.length; a2++) {
            o2 = [];
            e2 = r3[a2].split("+");
            if (e2.length > 1) {
              o2 = b(e2);
              e2 = [e2[e2.length - 1]];
            }
            e2 = e2[0];
            e2 = x(e2);
            if (!(e2 in _)) {
              _[e2] = [];
            }
            _[e2].push({
              shortcut: r3[a2],
              scope: t2,
              method: n2,
              key: r3[a2],
              mods: o2
            });
          }
        }
        function p(e2, t2) {
          var n2;
          var o2;
          var a2;
          var i2;
          var s2;
          var u2 = [];
          n2 = g(e2);
          i2 = 0;
          for (; i2 < n2.length; i2++) {
            o2 = n2[i2].split("+");
            if (o2.length > 1) {
              u2 = b(o2);
              e2 = o2[o2.length - 1];
            }
            e2 = x(e2);
            if (t2 === void 0) {
              t2 = v();
            }
            if (!_[e2]) {
              return;
            }
            for (a2 = 0; a2 < _[e2].length; a2++) {
              s2 = _[e2][a2];
              if (s2.scope === t2 && r2(s2.mods, u2)) {
                _[e2][a2] = {};
              }
            }
          }
        }
        function d(e2) {
          if (typeof e2 == "string") {
            e2 = x(e2);
          }
          return n(T, e2) != -1;
        }
        function f() {
          return T.slice(0);
        }
        function h(e2) {
          var t2 = (e2.target || e2.srcElement).tagName;
          return t2 != "INPUT" && t2 != "SELECT" && t2 != "TEXTAREA";
        }
        function m(e2) {
          P = e2 || "all";
        }
        function v() {
          return P || "all";
        }
        function y(e2) {
          var t2;
          var n2;
          var r3;
          for (t2 in _) {
            n2 = _[t2];
            r3 = 0;
            while (r3 < n2.length) {
              if (n2[r3].scope === e2) {
                n2.splice(r3, 1);
              } else {
                r3++;
              }
            }
          }
        }
        function g(e2) {
          var t2;
          e2 = e2.replace(/\s/g, "");
          t2 = e2.split(",");
          if (t2[t2.length - 1] == "") {
            t2[t2.length - 2] += ",";
          }
          return t2;
        }
        function b(e2) {
          for (var t2 = e2.slice(0, e2.length - 1), n2 = 0; n2 < t2.length; n2++) {
            t2[n2] = k[t2[n2]];
          }
          return t2;
        }
        function E(e2, t2, n2) {
          if (e2.addEventListener) {
            e2.addEventListener(t2, n2, false);
          } else if (e2.attachEvent) {
            e2.attachEvent("on" + t2, function() {
              n2(a.event);
            });
          }
        }
        function w() {
          var e2 = t.key;
          t.key = N;
          return e2;
        }
        var C;
        var _ = {};
        var O = {
          16: false,
          18: false,
          17: false,
          91: false
        };
        var P = "all";
        var k = {
          "\u21E7": 16,
          shift: 16,
          "\u2325": 18,
          alt: 18,
          option: 18,
          "\u2303": 17,
          ctrl: 17,
          control: 17,
          "\u2318": 91,
          command: 91
        };
        var S = {
          backspace: 8,
          tab: 9,
          clear: 12,
          enter: 13,
          return: 13,
          esc: 27,
          escape: 27,
          space: 32,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          del: 46,
          delete: 46,
          home: 36,
          end: 35,
          pageup: 33,
          pagedown: 34,
          ",": 188,
          ".": 190,
          "/": 191,
          "`": 192,
          "-": 189,
          "=": 187,
          ";": 186,
          "'": 222,
          "[": 219,
          "]": 221,
          "\\": 220
        };
        function x(e2) {
          return S[e2] || e2.toUpperCase().charCodeAt(0);
        }
        var T = [];
        for (C = 1; C < 20; C++) {
          S["f" + C] = 111 + C;
        }
        var M = {
          16: "shiftKey",
          18: "altKey",
          17: "ctrlKey",
          91: "metaKey"
        };
        for (C in k) {
          c[C] = false;
        }
        E(o, "keydown", function(e2) {
          s(e2);
        });
        E(o, "keyup", u);
        E(a, "focus", l);
        var N = t.key;
        t.key = c;
        t.key.setScope = m;
        t.key.getScope = v;
        t.key.deleteScope = y;
        t.key.filter = h;
        t.key.isPressed = d;
        t.key.getPressedKeyCodes = f;
        t.key.noConflict = w;
        t.key.unbind = p;
        module.exports = c;
      })(exports);
    }
  });

  // src/generated/6.js
  var require__188 = __commonJS({
    "src/generated/6.js"(exports) {
      function r(e2) {
        return Object.keys(e2).filter(function(t) {
          return e2[t];
        }).join(" ");
      }
      function o(e2, t) {
        var n = e2;
        var r2 = parseInt(n / 60);
        var o2 = Math.round(n % 60);
        if (t) {
          o2 = (n % 60).toFixed(2);
        }
        var a2 = r2 + ":" + (o2 < 10 ? "0" + o2 : o2);
        return a2;
      }
      function a(e2) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r2 = 1; r2 < t; r2++) {
          n[r2 - 1] = arguments[r2];
        }
        return function() {
          for (var t2 = arguments.length, r3 = Array(t2), o2 = 0; o2 < t2; o2++) {
            r3[o2] = arguments[o2];
          }
          var a2 = {
            type: e2
          };
          n.forEach(function(e3, t3) {
            a2[n[t3]] = r3[t3];
          });
          return a2;
        };
      }
      function i(e2) {
        var t = document.documentElement;
        var n = e2.target.getBoundingClientRect();
        var r2 = n.left + window.pageXOffset - t.clientLeft;
        return e2.pageX - r2;
      }
      function s(e2) {
        if (e2) {
          return "block";
        } else {
          return "none";
        }
      }
      function u() {
        m++;
        return Date.now() + m;
      }
      function l(e2, t, n) {
        var r2 = false;
        return function() {
          if (!r2) {
            e2.apply(n, arguments);
            r2 = true;
            setTimeout(function() {
              r2 = false;
            }, t);
          }
        };
      }
      function c(e2, t) {
        var n = null;
        return function() {
          var r2 = this;
          var o2 = arguments;
          clearTimeout(n);
          n = setTimeout(function() {
            e2.apply(r2, o2);
          }, t);
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.classList = r;
      exports.formatTime = o;
      exports.makeAction = a;
      exports.relX = i;
      exports.display = s;
      exports.getUnique = u;
      exports.throttle = l;
      exports.debounce = c;
      if (typeof window != "undefined") {
        require__186();
      }
      var p = (function() {
        var e2 = {};
        var t = {
          navigator: {}
        };
        if (typeof window != "undefined") {
          e2 = document;
          t = window;
        }
        return {
          document: e2,
          window: t
        };
      })();
      exports.shims = p;
      var d = typeof window != "undefined";
      exports.hasWindow = d;
      if (!Object.assign) {
        Object.defineProperty(Object, "assign", {
          enumerable: false,
          configurable: true,
          writable: true,
          value: function(e2) {
            if (e2 === void 0 || e2 === null) {
              throw new TypeError("Cannot convert first argument to object");
            }
            var t = Object(e2);
            for (var n = 1; n < arguments.length; n++) {
              var r2 = arguments[n];
              if (r2 !== void 0 && r2 !== null) {
                r2 = Object(r2);
                var o2 = Object.keys(Object(r2));
                for (var a2 = 0, i2 = o2.length; a2 < i2; a2++) {
                  var s2 = o2[a2];
                  var u2 = Object.getOwnPropertyDescriptor(r2, s2);
                  if (u2 !== void 0 && u2.enumerable) {
                    t[s2] = r2[s2];
                  }
                }
              }
            }
            return t;
          }
        });
      }
      var f = (function() {
        if (typeof window == "undefined") {
          return function() {
          };
        } else {
          return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame).bind(window);
        }
      })();
      exports.requestAnimationFrame = f;
      var h = (function() {
        if (typeof window == "undefined") {
          return function() {
          };
        } else {
          return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame).bind(window);
        }
      })();
      exports.cancelAnimationFrame = h;
      var m = 0;
      var v = require__187();
      exports.key = v;
      v.filter = function(e2) {
        var t = e2.target || e2.srcElement;
        return !t.isContentEditable && t.tagName != "INPUT" && t.tagName != "SELECT" && t.tagName != "TEXTAREA";
      };
    }
  });

  // src/app/PlaybackController.js
  var require_PlaybackController = __commonJS({
    "src/app/PlaybackController.js"(exports, module) {
      function n(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var r = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n2 = 0; n2 < t.length; n2++) {
            var r2 = t[n2];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n2, r2) {
          if (n2) {
            e2(t.prototype, n2);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      var o = (function() {
        function e2() {
          n(this, e2);
          this.delay = null;
          this.waiting = false;
          this.currentLoop = {
            start: 0,
            end: null
          };
          this.delayTimer = null;
          this.audioSystem = null;
          this.loopInterval = null;
          this._isPlaying = false;
          this._speed = 100;
          this.pitchVals = {
            octives: 0,
            semitones: 0,
            cents: 0
          };
        }
        r(e2, [{
          key: "updatePitch",
          value: function() {
            if (this.loaded && this.audioSystem.setPitch) {
              this.audioSystem.setPitch(parseInt(this.pitch));
            }
          }
        }, {
          key: "updateVolume",
          value: function() {
            if (this.loaded && this.audioSystem.setVolume) {
              this.audioSystem.setVolume(100);
            }
          }
        }, {
          key: "onCurrentTimeChanged",
          value: function() {
            var e3 = this.currentTime;
            if (this.currentLoop.end) {
              var t = this.currentLoop.start;
              var n2 = this.currentLoop.end;
              var r2 = e3 <= t && t - e3 > 0.01;
              var o2 = e3 >= n2 && e3 - n2 > 0.01;
              if (r2 || o2) {
                this.seek(this.currentLoop.start);
                if (this.delay) {
                  this.pause();
                  this.playIn();
                }
              }
            }
            if (e3 >= this.audioBuffer.duration) {
              this.pause();
            }
          }
        }, {
          key: "play",
          value: function(e3, t) {
            if (this.loaded && (this.cancelDelay(), e3 && (this.pause(), this.seek(this.currentLoop.start)), !(this.audioSystem.currentTime >= this.audioBuffer.duration))) {
              if (t) {
                this.playIn();
                return;
              }
              this.audioSystem.play();
              this.isPlaying = true;
            }
          }
        }, {
          key: "playPause",
          value: function() {
            if (this.isPlaying || this.waiting) {
              this.pause();
            } else {
              this.play(false, false);
            }
          }
        }, {
          key: "pause",
          value: function() {
            if (this.audioSystem) {
              this.cancelDelay();
              this.audioSystem.pause();
              this.isPlaying = false;
            }
          }
        }, {
          key: "seek",
          value: function(e3) {
            if (this.loaded && this.currentTime !== e3) {
              this.cancelDelay();
              var t = this.isPlaying;
              this.pause();
              this.audioSystem.seek(e3);
              if (t) {
                this.play();
              }
            }
          }
        }, {
          key: "playIn",
          value: function() {
            this.cancelDelay();
            if (this.delay) {
              this.waiting = true;
              this.delayTimer = setTimeout(function() {
                this.waiting = false;
                this.play();
              }.bind(this), this.delay * 1e3);
              return;
            } else {
              this.play(false, false);
              return;
            }
          }
        }, {
          key: "cancelDelay",
          value: function() {
            clearTimeout(this.delayTimer);
            this.waiting = false;
          }
        }, {
          key: "load",
          value: function(e3) {
            var t = this;
            this.cancelDelay();
            this.audioSystem = e3;
            e3.isPlaying = function() {
              return t.isPlaying;
            };
            e3.onAudioBufferChanged = function(e4) {
              return t.audioBuffer = e4;
            };
          }
        }, {
          key: "changePitch",
          value: function(e3, t) {
            var n2 = $(t.currentTarget);
            var r2 = n2.data("direction") === "up" ? 1 : -1;
            var o2 = parseInt(n2.data("multiplier"));
            var a = parseInt(n2.data("max"));
            var i = -a;
            var s = n2.data("property");
            var u = this.pitchVals[s]();
            var l = u + o2 * r2;
            return !(l > a) && !(l < i) && void this.pitchVals[s](l);
          }
        }, {
          key: "getDataHash",
          value: function() {
            return this.audioSystem.getDataHash();
          }
        }, {
          key: "isPlaying",
          get: function() {
            return this._isPlaying;
          },
          set: function(e3) {
            var t = this;
            if (this._isPlaying !== e3) {
              this._isPlaying = e3;
              if (!e3) {
                clearInterval(this.loopInterval);
              }
              if (e3) {
                this.loopInterval = setInterval(function() {
                  return t.onCurrentTimeChanged();
                }, 4);
              }
              if (this.onStatusChanged) {
                this.onStatusChanged(e3);
              }
            }
          }
        }, {
          key: "loaded",
          get: function() {
            return this.audioBuffer != null;
          }
        }, {
          key: "pitch",
          get: function() {
            var e3 = Math.pow(2, 1 / 12);
            var t = this.pitchVals.octives * 12;
            t += this.pitchVals.semitones;
            t += this.pitchVals.cents / 100;
            var n2 = Math.pow(e3, t);
            var r2 = parseFloat((n2 * 100).toFixed(2));
            return r2;
          }
        }, {
          key: "speed",
          get: function() {
            return this._speed;
          },
          set: function(e3) {
            if (this._speed !== e3) {
              this._speed = e3;
              this.audioSystem.speed = parseInt(e3) / 100;
            }
          }
        }, {
          key: "audioBuffer",
          get: function() {
            return this._audioBuffer;
          },
          set: function(e3) {
            this._audioBuffer = e3;
            if (this.onAudioBufferChanged) {
              this.onAudioBufferChanged(e3);
            }
          }
        }, {
          key: "currentTime",
          get: function() {
            return (this.audioSystem || {}).currentTime || 0;
          }
        }]);
        return e2;
      })();
      exports.default = new o();
      module.exports = exports.default;
    }
  });

  // src/generated/18.js
  var require__189 = __commonJS({
    "src/generated/18.js"(exports) {
      function n() {
        var e2 = arguments.length <= 0 || arguments[0] === void 0 ? "" : arguments[0];
        return a + e2;
      }
      function r() {
        f ||= new Promise(function(e2) {
          var t = document.createElement("script");
          t.type = "text/javascript";
          t.src = "https://js.stripe.com/v2/";
          t.onload = function() {
            Stripe.setPublishableKey(i);
            e2();
          };
          document.head.appendChild(t);
        });
        return f;
      }
      function o() {
        h ||= new Promise(function(e2) {
          var t = document.createElement("script");
          t.type = "text/javascript";
          t.src = "https://www.paypalobjects.com/api/checkout.js";
          t.onload = function() {
            e2();
          };
          document.head.appendChild(t);
        });
        return h;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getServerUrl = n;
      exports.loadStripe = r;
      exports.loadPaypal = o;
      var a = "https://server.tunetranscriber.com";
      var i = "pk_live_P2QoJLgz8pWaQ1CnlEBQKExF";
      exports.stripePk = i;
      var s = "production";
      exports.paypalEnvironment = s;
      var u = typeof window == "undefined";
      if (!u) {
        l = window.location.hostname.indexOf(".local") >= 0 || document.cookie.includes("istranscribertest");
        if (l) {
          c = window.location.hostname;
          p = window.location.protocol;
          d = window.location.port ? ":3000" : "";
          a = p + "//" + c + d;
          exports.stripePk = i = "pk_test_BoP97ky2AGW9x3nUBf3J0jrt";
          exports.paypalEnvironment = s = "sandbox";
        }
      }
      var l;
      var c;
      var p;
      var d;
      var f;
      var h;
      var m = {
        cents: 2500,
        hash: "5018592d5bd5b45e99938f6e3569ce54"
      };
      exports.price = m;
    }
  });

  // src/generated/144.js
  var require__190 = __commonJS({
    "src/generated/144.js"(exports, module) {
      function n() {
        var e2 = [];
        for (var t = 0; t < 264600; t++) {
          e2.push(Math.random() * 2 - 1);
        }
        e2.push(2.25);
        e2.push(-2.25);
        var n2 = new Float32Array(e2);
        var r = {
          name: "Test Data",
          getChannelData: function() {
            return n2;
          },
          sampleRate: 44100,
          length: e2.length,
          duration: e2.length / 44100,
          channels: 1,
          debug: true
        };
        return r;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = n;
      module.exports = exports.default;
    }
  });

  // src/generated/156.js
  var require__191 = __commonJS({
    "src/generated/156.js"(exports, module) {
      function n(e2, t) {
        this.buffer = e2;
        this.seekedPosition = t;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      n.prototype = {
        extract: function(e2, t, n2) {
          var r = this.buffer.numberOfChannels;
          var o = this.buffer.getChannelData(0);
          var a = r > 1 ? this.buffer.getChannelData(1) : o;
          for (var i = 0; i < t; i++) {
            e2[i * 2] = o[i + n2 + this.seekedPosition];
            e2[i * 2 + 1] = a[i + n2 + this.seekedPosition];
          }
          return Math.min(t, o.length - n2);
        }
      };
      exports.default = n;
      module.exports = exports.default;
    }
  });

  // src/app/audio/Mp3AudioSystem.js
  var require_Mp3AudioSystem = __commonJS({
    "src/app/audio/Mp3AudioSystem.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var a = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      var i = require__191();
      var s = r(i);
      var u = (function() {
        function e2(t) {
          var n = this;
          o(this, e2);
          this.pitch = 1;
          this.soundtouch = null;
          this._speed = 1;
          this.startOffset = 0;
          this.lastTime = 0;
          this.canDownloadLoop = true;
          if (t.debug) {
            setTimeout(function() {
              n.audioBuffer = t;
              n.seekTo(0);
            }, 1);
          } else {
            var r2 = new FileReader();
            r2.onload = function(t2) {
              e2.context = new AudioContext();
              var n2 = this.gainNode = e2.context.createGain();
              n2.connect(e2.context.destination);
              e2.context.decodeAudioData(t2.target.result, function(e3) {
                this.audioBuffer = e3;
                this.seekTo(0);
              }.bind(this), function(e3) {
                alert(e3);
              });
            }.bind(this);
            r2.readAsArrayBuffer(t);
          }
        }
        a(e2, [{
          key: "play",
          value: function() {
            if (this.node) {
              this.node.connect(this.gainNode);
              this.lastTime = e2.context.currentTime;
            }
          }
        }, {
          key: "pause",
          value: function() {
            this.startOffset = parseFloat(this.currentTime);
            if (this.node) {
              this.node.disconnect();
            }
          }
        }, {
          key: "seek",
          value: function(e3) {
            if (this.node) {
              this.node = null;
              this.seekTo(e3);
            }
          }
        }, {
          key: "seekTo",
          value: function(t) {
            var n = new s.default(this.audioBuffer, Math.floor(t * this.audioBuffer.sampleRate));
            this.soundtouch = new soundtouch.SoundTouch(this.audioBuffer.sampleRate);
            this.soundtouch.tempo = this.speed;
            this.soundtouch.pitch = this.pitch;
            var r2 = new soundtouch.SimpleFilter(n, this.soundtouch);
            this.node = soundtouch.getWebAudioNode(e2.context, r2);
            this.startOffset = parseFloat(t);
            this.lastTime = e2.context.currentTime;
          }
        }, {
          key: "setVolume",
          value: function(e3) {
            this.gainNode.gain.value = 1;
          }
        }, {
          key: "setPitch",
          value: function(e3) {
            this.pitch = e3 / 100;
            if (this.node) {
              this.node.disconnect();
              this.seekTo(this.currentTime);
              if (this.isPlaying()) {
                this.node.connect(this.gainNode);
              }
            }
          }
        }, {
          key: "getTempoValues",
          value: function() {
          }
        }, {
          key: "getDataHash",
          value: function() {
            var e3 = this.audioBuffer.length;
            for (var t = this.audioBuffer.getChannelData(0), n = e3, r2 = 0; r2 < t.length; r2++) {
              n += t[r2] * (r2 + 1);
            }
            return n = "m" + Math.abs(n).toString();
          }
        }, {
          key: "type",
          get: function() {
            return "mp3";
          }
        }, {
          key: "speed",
          get: function() {
            return this._speed;
          },
          set: function(e3) {
            this._speed = e3;
            if (this.node) {
              this.node.disconnect();
              this.seekTo(this.currentTime);
              if (this.isPlaying()) {
                this.node.connect(this.gainNode);
              }
            }
          }
        }, {
          key: "audioBuffer",
          get: function() {
            return this._audioBuffer;
          },
          set: function(e3) {
            this._audioBuffer = e3;
            this.onAudioBufferChanged(e3);
          }
        }, {
          key: "currentTime",
          get: function() {
            if (!this.isPlaying()) {
              return this.startOffset;
            }
            var t = e2.context.currentTime - this.lastTime;
            var n = t * this.speed + this.startOffset;
            return n;
          }
        }]);
        return e2;
      })();
      exports.default = u;
      module.exports = exports.default;
    }
  });

  // src/app/audio/YoutubeAudioSystem.js
  var require_YoutubeAudioSystem = __commonJS({
    "src/app/audio/YoutubeAudioSystem.js"(exports, module) {
      function n(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function r(e2) {
        var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var n2 = e2.match(t);
        if (n2 && n2[7].length == 11) {
          return n2[7];
        } else {
          alert("Cannot read the YouTube URL");
          return;
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var o = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n2 = 0; n2 < t.length; n2++) {
            var r2 = t[n2];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n2, r2) {
          if (n2) {
            e2(t.prototype, n2);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      var a = (function() {
        function e2(t) {
          n(this, e2);
          this.onReady = this.onReady.bind(this);
          this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
          this.type = "youtube";
          this.player = null;
          this.videoUrl = t;
          this.videoId = r(t);
          this.realTime = true;
          var o2 = document.createElement("script");
          o2.src = "https://www.youtube.com/iframe_api";
          var a2 = document.getElementsByTagName("script")[0];
          a2.parentNode.insertBefore(o2, a2);
          window.onYouTubeIframeAPIReady = this.onReady;
        }
        o(e2, [{
          key: "play",
          value: function() {
            this.player.playVideo();
          }
        }, {
          key: "pause",
          value: function() {
            this.player.pauseVideo();
          }
        }, {
          key: "seek",
          value: function(e3) {
            this.player.seekTo(e3, true);
          }
        }, {
          key: "onReady",
          value: function() {
            this.onPlayerReady;
            this.player = new YT.Player("yt-player", {
              height: "390",
              width: "640",
              videoId: this.videoId,
              playerVars: {
                html5: 1,
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
                rel: 0
              },
              events: {
                onReady: this.onPlayerReady,
                onStateChange: this.onPlayerStateChange
              }
            });
          }
        }, {
          key: "getDataHash",
          value: function() {
            var e3 = this.audioBuffer.length;
            for (var t = 0; t < this.videoUrl.length; t++) {
              e3 += this.videoUrl.charCodeAt(t) * (t + 1);
            }
            e3 += this.audioBuffer.length * 1e-8;
            return "y" + Math.abs(e3).toString();
          }
        }, {
          key: "onPlayerReady",
          value: function(e3) {
            e3.target.playVideo();
          }
        }, {
          key: "onPlayerStateChange",
          value: function(e3) {
            if (!this.audioBuffer && this.player.getDuration() > 0) {
              this.player.stopVideo();
              var t = {
                duration: this.player.getDuration(),
                sampleRate: 44100
              };
              t.length = t.duration * t.sampleRate;
              this.audioBuffer = t;
            }
          }
        }, {
          key: "setVolume",
          value: function(e3) {
            this.player.setVolume(100);
          }
        }, {
          key: "getTempoValues",
          value: function() {
            if (!this.rates) {
              var e3 = this.player.getAvailablePlaybackRates();
              e3 = e3.map(function(e4) {
                return e4 * 100;
              }).sort(function(e4, t) {
                return e4 - t;
              });
              this.rates = e3;
            }
            return this.rates;
          }
        }, {
          key: "audioBuffer",
          get: function() {
            return this._audioBuffer;
          },
          set: function(e3) {
            this._audioBuffer = e3;
            this.onAudioBufferChanged(e3);
          }
        }, {
          key: "speed",
          set: function(e3) {
            this.player.setPlaybackRate(e3);
          }
        }, {
          key: "currentTime",
          get: function() {
            return this.player.getCurrentTime();
          }
        }]);
        return e2;
      })();
      exports.default = a;
      module.exports = exports.default;
    }
  });

  // src/app/components/Landing.js
  var require_Landing = __commonJS({
    "src/app/components/Landing.js"(exports, module) {
      function o(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function a(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function i(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var s = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            if ("value" in r) {
              r.writable = true;
            }
            Object.defineProperty(e3, r.key, r);
          }
        }
        return function(t, n, r) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r) {
            e2(t, r);
          }
          return t;
        };
      })();
      function u(e2, t, n) {
        for (var r = true; r; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r = true;
          s2 = l2 = void 0;
        }
      }
      var l = require__152();
      var c = o(l);
      var p = (function(t) {
        function n(e2) {
          a(this, n);
          u(Object.getPrototypeOf(n.prototype), "constructor", this).call(this, e2);
          this.state = {
            isDragging: false
          };
        }
        i(n, t);
        s(n, [{
          key: "componentDidMount",
          value: function() {
            this.setupFileDrop();
          }
        }, {
          key: "setupFileDrop",
          value: function() {
            var t2 = this;
            var n2 = this.refs.landing;
            var r = this.refs.dropmask;
            n2.addEventListener("dragover", function(e2) {
              t2.setState({
                isDragging: true
              });
              e2.preventDefault();
            });
            r.addEventListener("dragleave", function() {
              this.setState({
                isDragging: false
              });
              e.preventDefault();
            });
            r.addEventListener("drop", function(e2, n3) {
              t2.setState({
                isDragging: false
              });
              t2.props.onDropFile(e2);
              e2.preventDefault();
            });
          }
        }, {
          key: "render",
          value: function() {
            var e2 = this.state.isDragging ? "drag" : "";
            return c.default.createElement("div", {
              ref: "landing",
              id: "landing",
              className: "hidden-audio-loaded " + e2
            }, c.default.createElement("div", {
              className: "container"
            }, c.default.createElement("div", {
              className: "hero-cont"
            }, c.default.createElement("div", {
              className: "hero"
            }, c.default.createElement("h1", {
              className: "title"
            }, c.default.createElement("span", {
              className: "bb"
            }, "Transcribe"), " music ", c.default.createElement("span", {
              style: {
                display: "block",
                paddingTop: "20px"
              }
            }, "like a pro.")), c.default.createElement("h2", {
              className: "tagline",
              style: {
                marginBottom: "1.5em"
              }
            }, "Slow down your favorite songs so you can learn how they are played."), c.default.createElement("button", {
              className: "btn btn-primary btn-lg",
              onClick: this.props.onChooseAudio
            }, "Load an MP3"), " ", c.default.createElement("button", {
              className: "btn btn-primary btn-lg",
              onClick: this.props.onChooseVideo
            }, "Load a YouTube Video")), c.default.createElement("div", {
              id: "screenshot",
              className: "main-img"
            }, c.default.createElement("img", {
              src: "screenshot.png"
            })))), c.default.createElement("div", {
              className: "lightbox visible-drag"
            }, c.default.createElement("p", {
              className: "message"
            }, "Drop file to load song..."), c.default.createElement("div", {
              ref: "dropmask",
              className: "dropmask"
            })), c.default.createElement("div", {
              className: "lightbox visible-audio-loading"
            }, c.default.createElement("div", {
              className: "message"
            }, "Loading audio...", c.default.createElement("br", null), c.default.createElement("div", {
              className: "gps_ring"
            }), c.default.createElement("div", {
              className: "gps_ring"
            }), c.default.createElement("div", {
              className: "gps_ring"
            }))));
          }
        }]);
        return n;
      })(c.default.Component);
      exports.default = p;
      module.exports = exports.default;
    }
  });

  // src/generated/129.js
  var require__192 = __commonJS({
    "src/generated/129.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2) {
        var t = e2.isLoggedIn ? i.default.createElement("a", {
          href: "#",
          onClick: function(t2) {
            t2.preventDefault();
            e2.onLogout();
          }
        }, "Log out") : i.default.createElement("a", {
          href: "#",
          onClick: function(t2) {
            t2.preventDefault();
            e2.onLogin();
          }
        }, "Log in");
        return i.default.createElement("nav", {
          className: "navbar navbar-default",
          role: "navigation"
        }, i.default.createElement("script", {
          src: "https://cdn.auth0.com/js/lock/11.0.1/lock.min.js"
        }), i.default.createElement("div", {
          className: "navbar-header"
        }, i.default.createElement("button", {
          type: "button",
          className: "navbar-toggle",
          "data-toggle": "collapse",
          "data-target": ".navbar-ex1-collapse"
        }, i.default.createElement("span", {
          className: "sr-only"
        }, "Toggle navigation"), i.default.createElement("span", null, "Menu")), i.default.createElement("a", {
          className: "navbar-brand",
          href: "#"
        }, i.default.createElement("img", {
          src: "logo-blueblock.png"
        }))), i.default.createElement("div", {
          className: "collapse navbar-collapse navbar-ex1-collapse"
        }, i.default.createElement("ul", {
          className: "nav navbar-nav navbar-right"
        }, i.default.createElement("li", {
          className: "visible-audio-loaded"
        }, i.default.createElement("input", {
          type: "file",
          className: "hidden",
          id: "files",
          name: "files",
          onChange: e2.onFileSelect
        }), i.default.createElement("a", {
          href: "#",
          onClick: function(t2) {
            t2.preventDefault();
            e2.onChooseAudio();
          }
        }, "Choose Audio")), i.default.createElement("li", null, i.default.createElement("a", {
          href: "#",
          onClick: function(t2) {
            t2.preventDefault();
            e2.onHelp();
          }
        }, "Help")), i.default.createElement("li", null, t))));
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = o;
      var a = require__152();
      var i = r(a);
      module.exports = exports.default;
    }
  });

  // src/generated/249.js
  var require__193 = __commonJS({
    "src/generated/249.js"(exports, module) {
      var r = require__109();
      var o = {
        getChildMapping: function(e2) {
          if (e2) {
            return r(e2);
          } else {
            return e2;
          }
        },
        mergeChildMappings: function(e2, t) {
          function n(n2) {
            if (t.hasOwnProperty(n2)) {
              return t[n2];
            } else {
              return e2[n2];
            }
          }
          e2 = e2 || {};
          t = t || {};
          var r2 = {};
          var o2 = [];
          for (var a in e2) {
            if (t.hasOwnProperty(a)) {
              if (o2.length) {
                r2[a] = o2;
                o2 = [];
              }
            } else {
              o2.push(a);
            }
          }
          var i;
          var s = {};
          for (var u in t) {
            if (r2.hasOwnProperty(u)) {
              for (i = 0; i < r2[u].length; i++) {
                var l = r2[u][i];
                s[r2[u][i]] = n(l);
              }
            }
            s[u] = n(u);
          }
          for (i = 0; i < o2.length; i++) {
            s[o2[i]] = n(o2[i]);
          }
          return s;
        }
      };
      module.exports = o;
    }
  });

  // src/generated/251.js
  var require__194 = __commonJS({
    "src/generated/251.js"(exports, module) {
      var r = require__151();
      var o = require__193();
      var a = require__30();
      var i = require__8();
      var s = r.createClass({
        displayName: "ReactTransitionGroup",
        propTypes: {
          component: r.PropTypes.any,
          childFactory: r.PropTypes.func
        },
        getDefaultProps: function() {
          return {
            component: "span",
            childFactory: i.thatReturnsArgument
          };
        },
        getInitialState: function() {
          return {
            children: o.getChildMapping(this.props.children)
          };
        },
        componentWillMount: function() {
          this.currentlyTransitioningKeys = {};
          this.keysToEnter = [];
          this.keysToLeave = [];
        },
        componentDidMount: function() {
          var e2 = this.state.children;
          for (var t in e2) {
            if (e2[t]) {
              this.performAppear(t);
            }
          }
        },
        componentWillReceiveProps: function(e2) {
          var t = o.getChildMapping(e2.children);
          var n = this.state.children;
          this.setState({
            children: o.mergeChildMappings(n, t)
          });
          var r2;
          for (r2 in t) {
            var a2 = n && n.hasOwnProperty(r2);
            if (!!t[r2] && !a2 && !this.currentlyTransitioningKeys[r2]) {
              this.keysToEnter.push(r2);
            }
          }
          for (r2 in n) {
            var i2 = t && t.hasOwnProperty(r2);
            if (!!n[r2] && !i2 && !this.currentlyTransitioningKeys[r2]) {
              this.keysToLeave.push(r2);
            }
          }
        },
        componentDidUpdate: function() {
          var e2 = this.keysToEnter;
          this.keysToEnter = [];
          e2.forEach(this.performEnter);
          var t = this.keysToLeave;
          this.keysToLeave = [];
          t.forEach(this.performLeave);
        },
        performAppear: function(e2) {
          this.currentlyTransitioningKeys[e2] = true;
          var t = this.refs[e2];
          if (t.componentWillAppear) {
            t.componentWillAppear(this._handleDoneAppearing.bind(this, e2));
          } else {
            this._handleDoneAppearing(e2);
          }
        },
        _handleDoneAppearing: function(e2) {
          var t = this.refs[e2];
          if (t.componentDidAppear) {
            t.componentDidAppear();
          }
          delete this.currentlyTransitioningKeys[e2];
          var n = o.getChildMapping(this.props.children);
          if (!n || !n.hasOwnProperty(e2)) {
            this.performLeave(e2);
          }
        },
        performEnter: function(e2) {
          this.currentlyTransitioningKeys[e2] = true;
          var t = this.refs[e2];
          if (t.componentWillEnter) {
            t.componentWillEnter(this._handleDoneEntering.bind(this, e2));
          } else {
            this._handleDoneEntering(e2);
          }
        },
        _handleDoneEntering: function(e2) {
          var t = this.refs[e2];
          if (t.componentDidEnter) {
            t.componentDidEnter();
          }
          delete this.currentlyTransitioningKeys[e2];
          var n = o.getChildMapping(this.props.children);
          if (!n || !n.hasOwnProperty(e2)) {
            this.performLeave(e2);
          }
        },
        performLeave: function(e2) {
          this.currentlyTransitioningKeys[e2] = true;
          var t = this.refs[e2];
          if (t.componentWillLeave) {
            t.componentWillLeave(this._handleDoneLeaving.bind(this, e2));
          } else {
            this._handleDoneLeaving(e2);
          }
        },
        _handleDoneLeaving: function(e2) {
          var t = this.refs[e2];
          if (t.componentDidLeave) {
            t.componentDidLeave();
          }
          delete this.currentlyTransitioningKeys[e2];
          var n = o.getChildMapping(this.props.children);
          if (n && n.hasOwnProperty(e2)) {
            this.performEnter(e2);
          } else {
            this.setState(function(t2) {
              var n2 = a({}, t2.children);
              delete n2[e2];
              return {
                children: n2
              };
            });
          }
        },
        render: function() {
          var e2 = [];
          for (var t in this.state.children) {
            var n = this.state.children[t];
            if (n) {
              e2.push(r.cloneElement(this.props.childFactory(n), {
                ref: t,
                key: t
              }));
            }
          }
          return r.createElement(this.props.component, this.props, e2);
        }
      });
      module.exports = s;
    }
  });

  // src/generated/164.js
  var require__195 = __commonJS({
    "src/generated/164.js"(exports, module) {
      var r = require__3();
      var o = {
        addClass: function(e2, t) {
          if (/\s/.test(t)) {
            r(false);
          } else {
          }
          if (t) {
            if (e2.classList) {
              e2.classList.add(t);
            } else if (!o.hasClass(e2, t)) {
              e2.className = e2.className + " " + t;
            }
          }
          return e2;
        },
        removeClass: function(e2, t) {
          if (/\s/.test(t)) {
            r(false);
          } else {
          }
          if (t) {
            if (e2.classList) {
              e2.classList.remove(t);
            } else if (o.hasClass(e2, t)) {
              e2.className = e2.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
            }
          }
          return e2;
        },
        conditionClass: function(e2, t, n) {
          return (n ? o.addClass : o.removeClass)(e2, t);
        },
        hasClass: function(e2, t) {
          if (/\s/.test(t)) {
            r(false);
          } else {
          }
          if (e2.classList) {
            return !!t && e2.classList.contains(t);
          } else {
            return (" " + e2.className + " ").indexOf(" " + t + " ") > -1;
          }
        }
      };
      module.exports = o;
    }
  });

  // src/generated/250.js
  var require__196 = __commonJS({
    "src/generated/250.js"(exports, module) {
      function r() {
        var e2 = document.createElement("div");
        var t = e2.style;
        if (!("AnimationEvent" in window)) {
          delete s.animationend.animation;
        }
        if (!("TransitionEvent" in window)) {
          delete s.transitionend.transition;
        }
        for (var n in s) {
          var r2 = s[n];
          for (var o2 in r2) {
            if (o2 in t) {
              u.push(r2[o2]);
              break;
            }
          }
        }
      }
      function o(e2, t, n) {
        e2.addEventListener(t, n, false);
      }
      function a(e2, t, n) {
        e2.removeEventListener(t, n, false);
      }
      var i = require__2();
      var s = {
        transitionend: {
          transition: "transitionend",
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "mozTransitionEnd",
          OTransition: "oTransitionEnd",
          msTransition: "MSTransitionEnd"
        },
        animationend: {
          animation: "animationend",
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "mozAnimationEnd",
          OAnimation: "oAnimationEnd",
          msAnimation: "MSAnimationEnd"
        }
      };
      var u = [];
      if (i.canUseDOM) {
        r();
      }
      var l = {
        addEndEventListener: function(e2, t) {
          if (u.length === 0) {
            window.setTimeout(t, 0);
            return;
          } else {
            u.forEach(function(n) {
              o(e2, n, t);
            });
            return;
          }
        },
        removeEndEventListener: function(e2, t) {
          if (u.length !== 0) {
            u.forEach(function(n) {
              a(e2, n, t);
            });
          }
        }
      };
      module.exports = l;
    }
  });

  // src/generated/228.js
  var require__197 = __commonJS({
    "src/generated/228.js"(exports, module) {
      var r = require__151();
      var o = require__140();
      var a = require__195();
      var i = require__196();
      var s = require__148();
      var u = 17;
      var l = r.createClass({
        displayName: "ReactCSSTransitionGroupChild",
        propTypes: {
          name: r.PropTypes.oneOfType([r.PropTypes.string, r.PropTypes.shape({
            enter: r.PropTypes.string,
            leave: r.PropTypes.string,
            active: r.PropTypes.string
          }), r.PropTypes.shape({
            enter: r.PropTypes.string,
            enterActive: r.PropTypes.string,
            leave: r.PropTypes.string,
            leaveActive: r.PropTypes.string,
            appear: r.PropTypes.string,
            appearActive: r.PropTypes.string
          })]).isRequired,
          appear: r.PropTypes.bool,
          enter: r.PropTypes.bool,
          leave: r.PropTypes.bool,
          appearTimeout: r.PropTypes.number,
          enterTimeout: r.PropTypes.number,
          leaveTimeout: r.PropTypes.number
        },
        transition: function(e2, t, n) {
          var r2 = o.findDOMNode(this);
          if (!r2) {
            if (t) {
              t();
            }
            return;
          }
          var s2 = this.props.name[e2] || this.props.name + "-" + e2;
          var u2 = this.props.name[e2 + "Active"] || s2 + "-active";
          var l2 = null;
          function c(e3) {
            if (!e3 || e3.target === r2) {
              clearTimeout(l2);
              a.removeClass(r2, s2);
              a.removeClass(r2, u2);
              i.removeEndEventListener(r2, c);
              if (t) {
                t();
              }
            }
          }
          a.addClass(r2, s2);
          this.queueClass(u2);
          if (n) {
            l2 = setTimeout(c, n);
            this.transitionTimeouts.push(l2);
          } else {
            i.addEndEventListener(r2, c);
          }
        },
        queueClass: function(e2) {
          this.classNameQueue.push(e2);
          this.timeout ||= setTimeout(this.flushClassNameQueue, u);
        },
        flushClassNameQueue: function() {
          if (this.isMounted()) {
            this.classNameQueue.forEach(a.addClass.bind(a, o.findDOMNode(this)));
          }
          this.classNameQueue.length = 0;
          this.timeout = null;
        },
        componentWillMount: function() {
          this.classNameQueue = [];
          this.transitionTimeouts = [];
        },
        componentWillUnmount: function() {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.transitionTimeouts.forEach(function(e2) {
            clearTimeout(e2);
          });
        },
        componentWillAppear: function(e2) {
          if (this.props.appear) {
            this.transition("appear", e2, this.props.appearTimeout);
          } else {
            e2();
          }
        },
        componentWillEnter: function(e2) {
          if (this.props.enter) {
            this.transition("enter", e2, this.props.enterTimeout);
          } else {
            e2();
          }
        },
        componentWillLeave: function(e2) {
          if (this.props.leave) {
            this.transition("leave", e2, this.props.leaveTimeout);
          } else {
            e2();
          }
        },
        render: function() {
          return s(this.props.children);
        }
      });
      module.exports = l;
    }
  });

  // src/generated/227.js
  var require__198 = __commonJS({
    "src/generated/227.js"(exports, module) {
      function r(e2) {
        var t = "transition" + e2 + "Timeout";
        var n = "transition" + e2;
        return function(e3) {
          if (e3[n]) {
            if (e3[t] == null) {
              return new Error(t + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
            }
            if (typeof e3[t] != "number") {
              return new Error(t + " must be a number (in milliseconds)");
            }
          }
        };
      }
      var o = require__151();
      var a = require__30();
      var i = require__194();
      var s = require__197();
      var u = o.createClass({
        displayName: "ReactCSSTransitionGroup",
        propTypes: {
          transitionName: s.propTypes.name,
          transitionAppear: o.PropTypes.bool,
          transitionEnter: o.PropTypes.bool,
          transitionLeave: o.PropTypes.bool,
          transitionAppearTimeout: r("Appear"),
          transitionEnterTimeout: r("Enter"),
          transitionLeaveTimeout: r("Leave")
        },
        getDefaultProps: function() {
          return {
            transitionAppear: false,
            transitionEnter: true,
            transitionLeave: true
          };
        },
        _wrapChild: function(e2) {
          return o.createElement(s, {
            name: this.props.transitionName,
            appear: this.props.transitionAppear,
            enter: this.props.transitionEnter,
            leave: this.props.transitionLeave,
            appearTimeout: this.props.transitionAppearTimeout,
            enterTimeout: this.props.transitionEnterTimeout,
            leaveTimeout: this.props.transitionLeaveTimeout
          }, e2);
        },
        render: function() {
          return o.createElement(i, a({}, this.props, {
            childFactory: this._wrapChild
          }));
        }
      });
      module.exports = u;
    }
  });

  // src/generated/203.js
  var require__199 = __commonJS({
    "src/generated/203.js"(exports, module) {
      module.exports = require__198();
    }
  });

  // src/generated/122.js
  var require__200 = __commonJS({
    "src/generated/122.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__199();
      var p = r(c);
      var d = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
        }
        a(t, e2);
        i(t, [{
          key: "shouldComponentUpdate",
          value: function(e3) {
            return this.props.items != e3.items;
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this.props.items || [];
            var t2 = e3.map(function(e4) {
              var t3 = "label label-" + e4.className;
              return l.default.createElement("li", {
                className: "card",
                onClick: function(t4) {
                  e4.select();
                  t4.preventDefault();
                },
                key: e4.key
              }, l.default.createElement("a", {
                href: "#",
                onClick: function(t4) {
                  e4.remove();
                  t4.preventDefault();
                  t4.stopPropagation();
                },
                className: "close"
              }, String.fromCharCode(215)), l.default.createElement("div", {
                className: t3
              }, e4.title), l.default.createElement("div", {
                className: "caption"
              }, e4.line1), l.default.createElement("div", {
                className: "time"
              }, e4.line2));
            });
            return l.default.createElement("ul", {
              className: "cards"
            }, l.default.createElement(p.default, {
              transitionName: "card",
              transitionEnterTimeout: 300,
              transitionLeaveTimeout: 200
            }, t2));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = d;
      module.exports = exports.default;
    }
  });

  // src/generated/123.js
  var require__201 = __commonJS({
    "src/generated/123.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__188();
      var p = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.state = {
            currentTime: 0
          };
          this.throttledSetCurrentTime = (0, c.throttle)(this.setCurrentTime, 1e3 / 15, this);
        }
        a(t, e2);
        i(t, [{
          key: "componentWillReceiveProps",
          value: function(e3) {
            this.update(e3);
            this.setCurrentTime(e3);
          }
        }, {
          key: "update",
          value: function(e3) {
            var t2 = this;
            (0, c.cancelAnimationFrame)(this.frameId);
            e3 = e3 || this.props;
            this.throttledSetCurrentTime(e3);
            if (e3.isPlaying) {
              this.frameId = (0, c.requestAnimationFrame)(function() {
                return t2.update();
              });
            }
          }
        }, {
          key: "setCurrentTime",
          value: function(e3) {
            this.setState({
              currentTime: e3.getCurrentTime()
            });
          }
        }, {
          key: "render",
          value: function() {
            var e3 = (0, c.formatTime)(this.state.currentTime, true);
            return l.default.createElement("div", {
              className: "currentTime"
            }, e3);
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = p;
      module.exports = exports.default;
    }
  });

  // src/generated/33.js
  var require__202 = __commonJS({
    "src/generated/33.js"(exports, module) {
      module.exports = require__140();
    }
  });

  // src/generated/162.js
  var require__203 = __commonJS({
    "src/generated/162.js"(exports, module) {
      var r;
      (function() {
        "use strict";
        var o = typeof window != "undefined" && !!window.document && !!window.document.createElement;
        var a = {
          canUseDOM: o,
          canUseWorkers: typeof Worker != "undefined",
          canUseEventListeners: o && (!!window.addEventListener || !!window.attachEvent),
          canUseViewport: o && !!window.screen
        };
        r = function() {
          return a;
        }.call(exports, __require, exports, module);
        if (r !== void 0) {
          module.exports = r;
        }
      })();
    }
  });

  // src/generated/79.js
  var require__204 = __commonJS({
    "src/generated/79.js"(exports, module) {
      function n(e2, t) {
        var n2 = e2.nodeName.toLowerCase();
        return (/input|select|textarea|button|object/.test(n2) ? !e2.disabled : n2 === "a" ? e2.href || t : t) && o(e2);
      }
      function r(e2) {
        return e2.offsetWidth <= 0 && e2.offsetHeight <= 0 || e2.style.display === "none";
      }
      function o(e2) {
        while (e2 && e2 !== document.body) {
          if (r(e2)) {
            return false;
          }
          e2 = e2.parentNode;
        }
        return true;
      }
      function a(e2) {
        var t = e2.getAttribute("tabindex");
        if (t === null) {
          t = void 0;
        }
        var r2 = isNaN(t);
        return (r2 || t >= 0) && n(e2, !r2);
      }
      function i(e2) {
        return [].slice.call(e2.querySelectorAll("*"), 0).filter(function(e3) {
          return a(e3);
        });
      }
      module.exports = i;
    }
  });

  // src/generated/209.js
  var require__205 = __commonJS({
    "src/generated/209.js"(exports) {
      function r(e2) {
        u = true;
      }
      function o(e2) {
        if (u) {
          u = false;
          if (!i) {
            return;
          }
          setTimeout(function() {
            if (!i.contains(document.activeElement)) {
              var e3 = a(i)[0] || i;
              e3.focus();
            }
          }, 0);
        }
      }
      var a = require__204();
      var i = null;
      var s = null;
      var u = false;
      exports.markForFocusLater = function() {
        s = document.activeElement;
      };
      exports.returnFocus = function() {
        try {
          s.focus();
        } catch (e2) {
          console.warn("You tried to return focus to " + s + " but it is not in the DOM anymore");
        }
        s = null;
      };
      exports.setupScopedFocus = function(e2) {
        i = e2;
        if (window.addEventListener) {
          window.addEventListener("blur", r, false);
          document.addEventListener("focus", o, true);
        } else {
          window.attachEvent("onBlur", r);
          document.attachEvent("onFocus", o);
        }
      };
      exports.teardownScopedFocus = function() {
        i = null;
        if (window.addEventListener) {
          window.removeEventListener("blur", r);
          document.removeEventListener("focus", o);
        } else {
          window.detachEvent("onBlur", r);
          document.detachEvent("onFocus", o);
        }
      };
    }
  });

  // src/generated/210.js
  var require__206 = __commonJS({
    "src/generated/210.js"(exports, module) {
      var r = require__204();
      module.exports = function(e2, t) {
        var n = r(e2);
        var o = n[t.shiftKey ? 0 : n.length - 1];
        var a = o === document.activeElement || e2 === document.activeElement;
        if (a) {
          t.preventDefault();
          var i = n[t.shiftKey ? n.length - 1 : 0];
          i.focus();
        }
      };
    }
  });

  // src/generated/184.js
  var require__207 = __commonJS({
    "src/generated/184.js"(exports, module) {
      function n(e2, t, n2) {
        n2 ||= {};
        for (var r = -1, o = t.length; ++r < o; ) {
          var a = t[r];
          n2[a] = e2[a];
        }
        return n2;
      }
      module.exports = n;
    }
  });

  // src/generated/187.js
  var require__208 = __commonJS({
    "src/generated/187.js"(exports, module) {
      function n(e2) {
        return !!e2 && typeof e2 == "object";
      }
      function r(e2, t) {
        var n2 = e2 == null ? void 0 : e2[t];
        if (i(n2)) {
          return n2;
        } else {
          return void 0;
        }
      }
      function o(e2) {
        return a(e2) && d.call(e2) == s;
      }
      function a(e2) {
        var t = typeof e2;
        return !!e2 && (t == "object" || t == "function");
      }
      function i(e2) {
        return e2 != null && (o(e2) ? f.test(c.call(e2)) : n(e2) && u.test(e2));
      }
      var s = "[object Function]";
      var u = /^\[object .+?Constructor\]$/;
      var l = Object.prototype;
      var c = Function.prototype.toString;
      var p = l.hasOwnProperty;
      var d = l.toString;
      var f = RegExp("^" + c.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      module.exports = r;
    }
  });

  // src/generated/190.js
  var require__209 = __commonJS({
    "src/generated/190.js"(exports, module) {
      function n(e2) {
        return o(e2) && h.call(e2, "callee") && (!v.call(e2, "callee") || m.call(e2) == c);
      }
      function r(e2) {
        return e2 != null && i(e2.length) && !a(e2);
      }
      function o(e2) {
        return u(e2) && r(e2);
      }
      function a(e2) {
        var t = s(e2) ? m.call(e2) : "";
        return t == p || t == d;
      }
      function i(e2) {
        return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= l;
      }
      function s(e2) {
        var t = typeof e2;
        return !!e2 && (t == "object" || t == "function");
      }
      function u(e2) {
        return !!e2 && typeof e2 == "object";
      }
      var l = 9007199254740991;
      var c = "[object Arguments]";
      var p = "[object Function]";
      var d = "[object GeneratorFunction]";
      var f = Object.prototype;
      var h = f.hasOwnProperty;
      var m = f.toString;
      var v = f.propertyIsEnumerable;
      module.exports = n;
    }
  });

  // src/generated/191.js
  var require__210 = __commonJS({
    "src/generated/191.js"(exports, module) {
      function n(e2) {
        return !!e2 && typeof e2 == "object";
      }
      function r(e2, t) {
        var n2 = e2 == null ? void 0 : e2[t];
        if (s(n2)) {
          return n2;
        } else {
          return void 0;
        }
      }
      function o(e2) {
        return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= y;
      }
      function a(e2) {
        return i(e2) && h.call(e2) == l;
      }
      function i(e2) {
        var t = typeof e2;
        return !!e2 && (t == "object" || t == "function");
      }
      function s(e2) {
        return e2 != null && (a(e2) ? m.test(d.call(e2)) : n(e2) && c.test(e2));
      }
      var u = "[object Array]";
      var l = "[object Function]";
      var c = /^\[object .+?Constructor\]$/;
      var p = Object.prototype;
      var d = Function.prototype.toString;
      var f = p.hasOwnProperty;
      var h = p.toString;
      var m = RegExp("^" + d.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var v = r(Array, "isArray");
      var y = 9007199254740991;
      var g = v || function(e2) {
        return n(e2) && o(e2.length) && h.call(e2) == u;
      };
      module.exports = g;
    }
  });

  // src/generated/76.js
  var require__211 = __commonJS({
    "src/generated/76.js"(exports, module) {
      function r(e2) {
        return function(t) {
          if (t == null) {
            return void 0;
          } else {
            return t[e2];
          }
        };
      }
      function o(e2) {
        return e2 != null && i(g(e2));
      }
      function a(e2, t) {
        e2 = typeof e2 == "number" || f.test(e2) ? +e2 : -1;
        t = t == null ? y : t;
        return e2 > -1 && e2 % 1 == 0 && e2 < t;
      }
      function i(e2) {
        return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= y;
      }
      function s(e2) {
        var t = l(e2);
        for (var n = t.length, r2 = n && e2.length, o2 = !!r2 && i(r2) && (d(e2) || p(e2)), s2 = -1, u2 = []; ++s2 < n; ) {
          var c2 = t[s2];
          if (o2 && a(c2, r2) || m.call(e2, c2)) {
            u2.push(c2);
          }
        }
        return u2;
      }
      function u(e2) {
        var t = typeof e2;
        return !!e2 && (t == "object" || t == "function");
      }
      function l(e2) {
        if (e2 == null) {
          return [];
        }
        if (!u(e2)) {
          e2 = Object(e2);
        }
        var t = e2.length;
        t = t && i(t) && (d(e2) || p(e2)) && t || 0;
        var n = e2.constructor;
        for (var r2 = -1, o2 = typeof n == "function" && n.prototype === e2, s2 = Array(t), l2 = t > 0; ++r2 < t; ) {
          s2[r2] = r2 + "";
        }
        for (var c2 in e2) {
          if ((!l2 || !a(c2, t)) && (c2 != "constructor" || !o2 && !!m.call(e2, c2))) {
            s2.push(c2);
          }
        }
        return s2;
      }
      var c = require__208();
      var p = require__209();
      var d = require__210();
      var f = /^\d+$/;
      var h = Object.prototype;
      var m = h.hasOwnProperty;
      var v = c(Object, "keys");
      var y = 9007199254740991;
      var g = r("length");
      var b = v ? function(e2) {
        var t = e2 == null ? void 0 : e2.constructor;
        if (typeof t == "function" && t.prototype === e2 || typeof e2 != "function" && o(e2)) {
          return s(e2);
        } else if (u(e2)) {
          return v(e2);
        } else {
          return [];
        }
      } : s;
      module.exports = b;
    }
  });

  // src/generated/183.js
  var require__212 = __commonJS({
    "src/generated/183.js"(exports, module) {
      function r(e2, t) {
        if (t == null) {
          return e2;
        } else {
          return o(t, a(t), e2);
        }
      }
      var o = require__207();
      var a = require__211();
      module.exports = r;
    }
  });

  // src/generated/185.js
  var require__213 = __commonJS({
    "src/generated/185.js"(exports, module) {
      function n(e2, t, n2) {
        if (typeof e2 != "function") {
          return r;
        }
        if (t === void 0) {
          return e2;
        }
        switch (n2) {
          case 1:
            return function(n3) {
              return e2.call(t, n3);
            };
          case 3:
            return function(n3, r2, o) {
              return e2.call(t, n3, r2, o);
            };
          case 4:
            return function(n3, r2, o, a) {
              return e2.call(t, n3, r2, o, a);
            };
          case 5:
            return function(n3, r2, o, a, i) {
              return e2.call(t, n3, r2, o, a, i);
            };
        }
        return function() {
          return e2.apply(t, arguments);
        };
      }
      function r(e2) {
        return e2;
      }
      module.exports = n;
    }
  });

  // src/generated/188.js
  var require__214 = __commonJS({
    "src/generated/188.js"(exports, module) {
      function n(e2) {
        return function(t) {
          if (t == null) {
            return void 0;
          } else {
            return t[e2];
          }
        };
      }
      function r(e2) {
        return e2 != null && i(c(e2));
      }
      function o(e2, t) {
        e2 = typeof e2 == "number" || u.test(e2) ? +e2 : -1;
        t = t == null ? l : t;
        return e2 > -1 && e2 % 1 == 0 && e2 < t;
      }
      function a(e2, t, n2) {
        if (!s(n2)) {
          return false;
        }
        var a2 = typeof t;
        if (a2 == "number" ? r(n2) && o(t, n2.length) : a2 == "string" && t in n2) {
          var i2 = n2[t];
          if (e2 === e2) {
            return e2 === i2;
          } else {
            return i2 !== i2;
          }
        }
        return false;
      }
      function i(e2) {
        return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= l;
      }
      function s(e2) {
        var t = typeof e2;
        return !!e2 && (t == "object" || t == "function");
      }
      var u = /^\d+$/;
      var l = 9007199254740991;
      var c = n("length");
      module.exports = a;
    }
  });

  // src/generated/192.js
  var require__215 = __commonJS({
    "src/generated/192.js"(exports, module) {
      function n(e2, t) {
        if (typeof e2 != "function") {
          throw new TypeError(r);
        }
        t = o(t === void 0 ? e2.length - 1 : +t || 0, 0);
        return function() {
          var n2 = arguments;
          for (var r2 = -1, a = o(n2.length - t, 0), i = Array(a); ++r2 < a; ) {
            i[r2] = n2[t + r2];
          }
          switch (t) {
            case 0:
              return e2.call(this, i);
            case 1:
              return e2.call(this, n2[0], i);
            case 2:
              return e2.call(this, n2[0], n2[1], i);
          }
          var s = Array(t + 1);
          for (r2 = -1; ++r2 < t; ) {
            s[r2] = n2[r2];
          }
          s[t] = i;
          return e2.apply(this, s);
        };
      }
      var r = "Expected a function";
      var o = Math.max;
      module.exports = n;
    }
  });

  // src/generated/186.js
  var require__216 = __commonJS({
    "src/generated/186.js"(exports, module) {
      function r(e2) {
        return i(function(t, n) {
          var r2 = -1;
          var i2 = t == null ? 0 : n.length;
          var s = i2 > 2 ? n[i2 - 2] : void 0;
          var u = i2 > 2 ? n[2] : void 0;
          var l = i2 > 1 ? n[i2 - 1] : void 0;
          if (typeof s == "function") {
            s = o(s, l, 5);
            i2 -= 2;
          } else {
            s = typeof l == "function" ? l : void 0;
            i2 -= s ? 1 : 0;
          }
          if (u && a(n[0], n[1], u)) {
            s = i2 < 3 ? void 0 : s;
            i2 = 1;
          }
          while (++r2 < i2) {
            var c = n[r2];
            if (c) {
              e2(t, c, s);
            }
          }
          return t;
        });
      }
      var o = require__213();
      var a = require__214();
      var i = require__215();
      module.exports = r;
    }
  });

  // src/generated/189.js
  var require__217 = __commonJS({
    "src/generated/189.js"(exports, module) {
      function r(e2, t, n) {
        for (var r2 = -1, o2 = i(t), a2 = o2.length; ++r2 < a2; ) {
          var s2 = o2[r2];
          var u = e2[s2];
          var l = n(u, t[s2], s2, e2, t);
          if (!(l === l ? l === u : u !== u) || u === void 0 && !(s2 in e2)) {
            e2[s2] = l;
          }
        }
        return e2;
      }
      var o = require__212();
      var a = require__216();
      var i = require__211();
      var s = a(function(e2, t, n) {
        if (n) {
          return r(e2, t, n);
        } else {
          return o(e2, t);
        }
      });
      module.exports = s;
    }
  });

  // src/generated/207.js
  var require__218 = __commonJS({
    "src/generated/207.js"(exports, module) {
      function r(e2) {
        e2.stopPropagation();
      }
      var o = require__152();
      var a = o.DOM.div;
      var i = require__205();
      var s = require__206();
      var u = require__217();
      var l = {
        overlay: {
          base: "ReactModal__Overlay",
          afterOpen: "ReactModal__Overlay--after-open",
          beforeClose: "ReactModal__Overlay--before-close"
        },
        content: {
          base: "ReactModal__Content",
          afterOpen: "ReactModal__Content--after-open",
          beforeClose: "ReactModal__Content--before-close"
        }
      };
      var c = {
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px"
        }
      };
      module.exports = o.createClass({
        displayName: "ModalPortal",
        getDefaultProps: function() {
          return {
            style: {
              overlay: {},
              content: {}
            }
          };
        },
        getInitialState: function() {
          return {
            afterOpen: false,
            beforeClose: false
          };
        },
        componentDidMount: function() {
          if (this.props.isOpen) {
            this.setFocusAfterRender(true);
            this.open();
          }
        },
        componentWillUnmount: function() {
          clearTimeout(this.closeTimer);
        },
        componentWillReceiveProps: function(e2) {
          if (!this.props.isOpen && e2.isOpen) {
            this.setFocusAfterRender(true);
            this.open();
          } else if (this.props.isOpen && !e2.isOpen) {
            this.close();
          }
        },
        componentDidUpdate: function() {
          if (this.focusAfterRender) {
            this.focusContent();
            this.setFocusAfterRender(false);
          }
        },
        setFocusAfterRender: function(e2) {
          this.focusAfterRender = e2;
        },
        open: function() {
          i.setupScopedFocus(this.node);
          i.markForFocusLater();
          this.setState({
            isOpen: true
          }, function() {
            this.setState({
              afterOpen: true
            });
          }.bind(this));
        },
        close: function() {
          if (this.ownerHandlesClose()) {
            if (this.props.closeTimeoutMS > 0) {
              this.closeWithTimeout();
            } else {
              this.closeWithoutTimeout();
            }
          }
        },
        focusContent: function() {
          this.refs.content.focus();
        },
        closeWithTimeout: function() {
          this.setState({
            beforeClose: true
          }, function() {
            this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS);
          }.bind(this));
        },
        closeWithoutTimeout: function() {
          this.setState({
            afterOpen: false,
            beforeClose: false
          }, this.afterClose);
        },
        afterClose: function() {
          i.returnFocus();
          i.teardownScopedFocus();
        },
        handleKeyDown: function(e2) {
          if (e2.keyCode == 9) {
            s(this.refs.content, e2);
          }
          if (e2.keyCode == 27) {
            this.requestClose();
          }
        },
        handleOverlayClick: function() {
          if (this.ownerHandlesClose()) {
            this.requestClose();
          } else {
            this.focusContent();
          }
        },
        requestClose: function() {
          if (this.ownerHandlesClose()) {
            this.props.onRequestClose();
          }
        },
        ownerHandlesClose: function() {
          return this.props.onRequestClose;
        },
        shouldBeClosed: function() {
          return !this.props.isOpen && !this.state.beforeClose;
        },
        buildClassName: function(e2, t) {
          var n = l[e2].base;
          if (this.state.afterOpen) {
            n += " " + l[e2].afterOpen;
          }
          if (this.state.beforeClose) {
            n += " " + l[e2].beforeClose;
          }
          if (t) {
            return n + " " + t;
          } else {
            return n;
          }
        },
        render: function() {
          if (this.shouldBeClosed()) {
            return a();
          } else {
            return a({
              ref: "overlay",
              className: this.buildClassName("overlay", this.props.overlayClassName),
              style: u({}, c.overlay, this.props.style.overlay || {}),
              onClick: this.handleOverlayClick
            }, a({
              ref: "content",
              style: u({}, c.content, this.props.style.content || {}),
              className: this.buildClassName("content", this.props.className),
              tabIndex: "-1",
              onClick: r,
              onKeyDown: this.handleKeyDown
            }, this.props.children));
          }
        }
      });
    }
  });

  // src/generated/208.js
  var require__219 = __commonJS({
    "src/generated/208.js"(exports) {
      function n(e2) {
        if (typeof e2 == "string") {
          var t = document.querySelectorAll(e2);
          e2 = "length" in t ? t[0] : t;
        }
        u = e2 || u;
      }
      function r(e2) {
        i(e2);
        (e2 || u).setAttribute("aria-hidden", "true");
      }
      function o(e2) {
        i(e2);
        (e2 || u).removeAttribute("aria-hidden");
      }
      function a(e2, t) {
        if (e2) {
          r(t);
        } else {
          o(t);
        }
      }
      function i(e2) {
        if (!e2 && !u) {
          throw new Error("react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible");
        }
      }
      function s() {
        u = document.body;
      }
      var u = typeof document != "undefined" ? document.body : null;
      exports.toggle = a;
      exports.setElement = n;
      exports.show = o;
      exports.hide = r;
      exports.resetForTesting = s;
    }
  });

  // src/generated/161.js
  var require__220 = __commonJS({
    "src/generated/161.js"(exports, module) {
      function n(e2, t) {
        if (e2.indexOf) {
          return e2.indexOf(t);
        }
        for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) {
          if (e2[n2] === t) {
            return n2;
          }
        }
        return -1;
      }
      function r(e2) {
        if (!(this instanceof r)) {
          return new r(e2);
        }
        e2 ||= {};
        if (e2.nodeType) {
          e2 = {
            el: e2
          };
        }
        this.opts = e2;
        this.el = e2.el || document.body;
        if (typeof this.el != "object") {
          this.el = document.querySelector(this.el);
        }
      }
      module.exports = function(e2) {
        return new r(e2);
      };
      r.prototype.add = function(e2) {
        var t = this.el;
        if (t) {
          if (t.className === "") {
            return t.className = e2;
          }
          var r2 = t.className.split(" ");
          if (n(r2, e2) > -1) {
            return r2;
          } else {
            r2.push(e2);
            t.className = r2.join(" ");
            return r2;
          }
        }
      };
      r.prototype.remove = function(e2) {
        var t = this.el;
        if (t && t.className !== "") {
          var r2 = t.className.split(" ");
          var o = n(r2, e2);
          if (o > -1) {
            r2.splice(o, 1);
          }
          t.className = r2.join(" ");
          return r2;
        }
      };
      r.prototype.has = function(e2) {
        var t = this.el;
        if (t) {
          var r2 = t.className.split(" ");
          return n(r2, e2) > -1;
        }
      };
      r.prototype.toggle = function(e2) {
        var t = this.el;
        if (t) {
          if (this.has(e2)) {
            this.remove(e2);
          } else {
            this.add(e2);
          }
        }
      };
    }
  });

  // src/generated/206.js
  var require__221 = __commonJS({
    "src/generated/206.js"(exports, module) {
      function r(e2) {
        delete e2.ref;
      }
      var o = require__152();
      var a = require__202();
      var i = require__203();
      var s = o.createFactory(require__218());
      var u = require__219();
      var l = require__220();
      var c = require__202().unstable_renderSubtreeIntoContainer;
      var p = i.canUseDOM ? window.HTMLElement : {};
      module.exports = o.createClass({
        displayName: "Modal",
        statics: {
          setAppElement: u.setElement,
          injectCSS: function() {
          }
        },
        propTypes: {
          isOpen: o.PropTypes.bool.isRequired,
          style: o.PropTypes.shape({
            content: o.PropTypes.object,
            overlay: o.PropTypes.object
          }),
          appElement: o.PropTypes.instanceOf(p),
          onRequestClose: o.PropTypes.func,
          closeTimeoutMS: o.PropTypes.number,
          ariaHideApp: o.PropTypes.bool
        },
        getDefaultProps: function() {
          return {
            isOpen: false,
            ariaHideApp: true,
            closeTimeoutMS: 0
          };
        },
        componentDidMount: function() {
          this.node = document.createElement("div");
          this.node.className = "ReactModalPortal";
          document.body.appendChild(this.node);
          this.renderPortal(this.props);
        },
        componentWillReceiveProps: function(e2) {
          this.renderPortal(e2);
        },
        componentWillUnmount: function() {
          a.unmountComponentAtNode(this.node);
          document.body.removeChild(this.node);
        },
        renderPortal: function(e2) {
          if (e2.isOpen) {
            l(document.body).add("ReactModal__Body--open");
          } else {
            l(document.body).remove("ReactModal__Body--open");
          }
          if (e2.ariaHideApp) {
            u.toggle(e2.isOpen, e2.appElement);
          }
          r(e2);
          this.portal = c(this, s(e2), this.node);
        },
        render: function() {
          return o.DOM.noscript();
        }
      });
    }
  });

  // src/generated/19.js
  var require__222 = __commonJS({
    "src/generated/19.js"(exports, module) {
      module.exports = require__221();
    }
  });

  // src/generated/130.js
  var require__223 = __commonJS({
    "src/generated/130.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__222();
      var p = r(c);
      var d = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.state = {
            isOpen: true
          };
        }
        a(t, e2);
        i(t, [{
          key: "close",
          value: function() {
            this.setState({
              isOpen: false
            });
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            return l.default.createElement(p.default, {
              isOpen: this.props.isOpen && this.state.isOpen,
              onRequestClose: function() {
                return e3.close();
              },
              className: "Modal__Bootstrap modal-dialog modal-sm"
            }, l.default.createElement("div", {
              className: "modal-content"
            }, l.default.createElement("div", {
              className: "modal-header"
            }, l.default.createElement("button", {
              type: "button",
              className: "close",
              onClick: function() {
                return e3.close();
              }
            }, String.fromCharCode(215)), l.default.createElement("h4", {
              className: "modal-title"
            }, "Browser not supported")), l.default.createElement("div", {
              className: "modal-body"
            }, l.default.createElement("p", null, "Unfortunately your browser doesn't support the functions needed to load music from your computer."), l.default.createElement("p", null, "Try running the latest version of Google Chrome browser or Firefox to enable all functionality. You can download it ", l.default.createElement("a", {
              href: "http://www.google.com/chrome",
              target: "blank"
            }, "here"), "."), l.default.createElement("p", null, "You can still load videos from YouTube."), l.default.createElement("p", {
              className: "text-right"
            }, l.default.createElement("button", {
              className: "btn btn-primary",
              onClick: function() {
                return e3.close();
              }
            }, "Ok")))));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = d;
      module.exports = exports.default;
    }
  });

  // src/generated/31.js
  var require__224 = __commonJS({
    "src/generated/31.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__222();
      var p = r(c);
      var d = (function(e2) {
        function t() {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        a(t, e2);
        i(t, [{
          key: "queueSelect",
          value: function() {
            var e3 = this;
            setTimeout(function() {
              e3.props.focusElement().select();
              e3.props.focusElement().focus();
            }, 1);
          }
        }, {
          key: "componentDidMount",
          value: function() {
            if (this.props.focusElement && this.props.isOpen) {
              this.queueSelect();
            }
          }
        }, {
          key: "componentDidUpdate",
          value: function(e3) {
            if (this.props.focusElement && this.props.isOpen && !e3.isOpen) {
              this.queueSelect();
            }
          }
        }, {
          key: "onSubmit",
          value: function(e3) {
            e3.preventDefault();
            this.props.onSubmit(e3);
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = l.default.createElement("button", {
              type: "button",
              className: "close",
              onClick: function() {
                return e3.props.onClose();
              }
            }, l.default.createElement("span", {
              "aria-hidden": "true"
            }, String.fromCharCode(215)), l.default.createElement("span", {
              className: "sr-only"
            }, "Close"));
            if (this.props.hasCloseX === false) {
              t2 = null;
            }
            return l.default.createElement(p.default, {
              isOpen: this.props.isOpen,
              onRequestClose: function() {
                return e3.props.onClose();
              },
              className: "Modal__Bootstrap modal-dialog modal-sm",
              style: this.props.style
            }, l.default.createElement("div", {
              className: "modal-content"
            }, l.default.createElement("div", {
              className: "modal-header"
            }, t2, this.props.header), l.default.createElement("form", {
              onSubmit: function(t3) {
                return e3.onSubmit(t3);
              }
            }, l.default.createElement("div", {
              className: "modal-body"
            }, this.props.children), this.props.footer ? l.default.createElement("div", {
              className: "modal-footer"
            }, this.props.footer) : null)));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = d;
      module.exports = exports.default;
    }
  });

  // src/generated/157.js
  var require__225 = __commonJS({
    "src/generated/157.js"(exports, module) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var r = require__189();
      exports.default = {
        fetch: (function(e2) {
          function t(t2, n) {
            return e2.apply(this, arguments);
          }
          t.toString = function() {
            return e2.toString();
          };
          return t;
        })(function(e2, t) {
          t = t || {};
          var n = Object.assign({
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include",
            method: t.body ? "POST" : "GET"
          }, t);
          if (t.body) {
            n.body = JSON.stringify(t.body);
          }
          return fetch((0, r.getServerUrl)(e2), n);
        })
      };
      module.exports = exports.default;
    }
  });

  // src/generated/30.js
  var require__226 = __commonJS({
    "src/generated/30.js"(exports, module) {
      var r = /* @__PURE__ */ (function() {
        return this;
      })();
      function o() {
        function e2(e3) {
          return fetch((0, a.getServerUrl)("/auth/callback/"), {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
              code: e3,
              redirectUri: l
            })
          }).then(function(e4) {
            return e4.json();
          }).then(function(e4) {
            console.log("data", e4);
            history.pushState("", "", i ? i.location.pathname : null);
            localStorage.setItem("tok", e4.token);
            return {
              plan: "gold",
              token: e4.token
            };
          });
        }
        return {
          getAuthStatus: function() {
            if (i) {
              var t = new URLSearchParams(i.location.search);
              var n = t.get("code");
              if (n) {
                return e2(n);
              } else if (this.getToken()) {
                return Promise.resolve(this.getToken());
              } else {
                return promise.resolve({
                  plan: null
                });
              }
            }
          },
          login: function(e3) {
            var t = "https://data.tunetranscriber.com";
            var n = "https://" + s + "/authorize?response_type=code&client_id=" + u + "&redirect_uri=" + l + "&scope=openid%20profile&audience=" + t;
            if (i && e3) {
              window.location = n;
            } else {
              r.open(n);
            }
          },
          getToken: function() {
            var e3 = localStorage.getItem("tok");
            if (e3) {
              return {
                token: e3,
                plan: "gold"
              };
            } else {
              return {
                token: null,
                plan: null
              };
            }
          },
          logout: function() {
            localStorage.removeItem("tok");
            return Promise.resolve();
          }
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = o;
      var a = require__189();
      var i = typeof window == "undefined" ? null : window;
      var s = "tunetranscriber.auth0.com";
      var u = "2nXDRzErTKkmyUcbXrU6LaKBQaKKIjDF";
      var l = i ? i.location.protocol + "//" + i.location.host + i.location.pathname : "";
      module.exports = exports.default;
    }
  });

  // src/generated/22.js
  var require__227 = __commonJS({
    "src/generated/22.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2) {
        if (!e2 || !e2.ok) {
          return "Invalid username or password";
        }
      }
      function a(e2, t, n) {
        n = n || (t ? "gold" : null);
        localStorage.setItem("token", t);
        localStorage.setItem("plan", n || "");
        return {
          type: "completeLogin",
          error: e2,
          plan: n
        };
      }
      function i(e2, t) {
        return function(n) {
          if (e2 && t) {
            n(O());
            return b.default.fetch("/login", {
              body: {
                username: e2,
                password: t
              }
            }).then(function(e3) {
              return n(a(o(e3)));
            }).catch(function(e3) {
              return n(a(o(e3)));
            });
          } else {
            return n(a("Enter a username and password"));
          }
        };
      }
      function s() {
        return function(e2) {
          return (0, _.default)().logout().then(function() {
            return e2(P());
          });
        };
      }
      function u() {
        return {
          type: "gatherCredentials"
        };
      }
      function l() {
        return {
          type: "stopGatheringCredentials"
        };
      }
      function c(e2) {
        return {
          type: "gatherRegistration",
          message: e2
        };
      }
      function p() {
        return {
          type: "beginRegistration"
        };
      }
      function d() {
        var e2 = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
        var t = e2.errors;
        if (typeof window != "undefined") {
          (0, _.default)().login(true);
        }
        return {
          type: "completeRegistration",
          errors: t
        };
      }
      function f(e2) {
        var t = e2.creditCard;
        var n = e2.expires;
        var r2 = e2.cvc;
        return new Promise(function(e3, o2) {
          Stripe.card.createToken({
            number: t,
            cvc: r2,
            exp_month: n.split("/")[0],
            exp_year: n.split("/")[1]
          }, function(t2, n2) {
            if (n2.error) {
              o2(n2.error.message);
            } else {
              e3(n2.id);
            }
          });
        });
      }
      function h(e2) {
        return function(t) {
          var n = y(Object.assign({
            paypal: true
          }, e2));
          if (n.length) {
            return t(d({
              errors: n
            }));
          } else {
            t(p());
            return paypal.rest.payment.create(e2.env, e2.client, {
              transactions: [{
                amount: {
                  total: e2.p / 100 + ".00",
                  currency: "USD"
                }
              }]
            });
          }
        };
      }
      function m(e2) {
        return function(t) {
          return e2.actions.payment.execute().then(function() {
            return b.default.fetch("/paypal/register", {
              body: {
                email: e2.email,
                password: e2.password
              }
            }).then(function(e3) {
              if (e3.ok) {
                t(d());
                t(a());
                return;
              } else {
                return e3.text().then(function(e4) {
                  return t(d({
                    errors: [e4]
                  }));
                });
              }
            }).catch(function(e3) {
              t(d({
                errors: ["An error occurred signing up"]
              }));
            });
          });
        };
      }
      function v(e2) {
        return function(t) {
          var n = y(e2);
          if (n.length) {
            return t(d({
              errors: n
            }));
          } else {
            t(p());
            (0, w.loadStripe)().then(function() {
              return f(e2);
            }).then(function(n2) {
              b.default.fetch("/register", {
                body: {
                  email: e2.email,
                  password: e2.password,
                  p: e2.p,
                  h: e2.h,
                  token: n2
                }
              }).then(function(e3) {
                if (e3.ok) {
                  return e3.json().then(function(e4) {
                    var n3 = e4.token;
                    t(d());
                    t(a(null, n3));
                  });
                } else {
                  return e3.text().then(function(e4) {
                    return t(d({
                      errors: [e4]
                    }));
                  });
                }
              }).catch(function(e3) {
                t(d({
                  errors: ["An error occurred signing up"]
                }));
              });
            }).catch(function(e3) {
              t(d({
                errors: [e3]
              }));
            });
            return;
          }
        };
      }
      function y(e2) {
        var t = e2.email;
        var n = e2.password;
        var r2 = e2.creditCard;
        var o2 = e2.expires;
        var a2 = e2.cvc;
        var i2 = e2.paypal;
        var s2 = [];
        var u2 = s2.push.bind(s2);
        if (!t || t.indexOf("@") < 0) {
          u2("Enter your email");
        }
        if (!n || n.length < 8) {
          u2("Enter a password of at least 8 characters");
        }
        if (!i2) {
          if (!r2 || !r2.length) {
            u2("Enter a credit card number");
          }
          if (!o2) {
            u2("Enter the expiration date");
          }
          if (o2 && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(o2)) {
            u2("Expiration date should be in the format of MM/YY");
          }
          if (!a2) {
            u2("Enter the security code");
          }
        }
        return s2;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.completeLogin = a;
      exports.login = i;
      exports.logout = s;
      exports.gatherCredentials = u;
      exports.stopGatheringCredentials = l;
      exports.gatherRegistration = c;
      exports.beginRegistration = p;
      exports.completeRegistration = d;
      exports.registerPaypal = h;
      exports.finishRegisterPaypal = m;
      exports.register = v;
      var g = require__225();
      var b = r(g);
      var E = require__188();
      var w = require__189();
      var C = require__226();
      var _ = r(C);
      var O = (0, E.makeAction)("beginLogin");
      exports.beginLogin = O;
      var P = (0, E.makeAction)("completeLogout");
      exports.completeLogout = P;
    }
  });

  // src/generated/134.js
  var require__228 = __commonJS({
    "src/generated/134.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        }
        var t = {};
        if (e2 != null) {
          for (var n in e2) {
            if (Object.prototype.hasOwnProperty.call(e2, n)) {
              t[n] = e2[n];
            }
          }
        }
        t.default = e2;
        return t;
      }
      function o(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function a(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function i(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var s = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function u(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var l = require__152();
      var c = o(l);
      var p = require__202();
      o(p);
      var d = require__184();
      var f = require__224();
      var h = o(f);
      var m = require__227();
      var v = r(m);
      var y = require__226();
      var g = o(y);
      var b = require__189();
      var E = (function(e2) {
        function t(e3) {
          a(this, t);
          u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.state = {
            regsitered: false,
            paymentType: "paypal"
          };
        }
        i(t, e2);
        s(t, [{
          key: "registerWithCreditCard",
          value: function(e3) {
            var t2 = this;
            e3.preventDefault();
            function n(e4) {
              return t2.refs[e4].value;
            }
            this.props.dispatch(v.register({
              email: n("email"),
              password: n("password"),
              creditCard: n("creditCard"),
              expires: n("expires"),
              cvc: n("cvc"),
              p: n("p"),
              h: n("h")
            }));
          }
        }, {
          key: "registerWithPaypal",
          value: function(e3) {
            return this.props.dispatch(v.registerPaypal(e3));
          }
        }, {
          key: "finishRegisterWithPaypal",
          value: function(e3) {
            var t2 = this;
            return this.props.dispatch(v.finishRegisterPaypal(e3)).then(function() {
              return t2.setState({
                registered: true
              });
            });
          }
        }, {
          key: "close",
          value: function() {
            this.props.dispatch(v.completeRegistration());
          }
        }, {
          key: "renderPaypalButton",
          value: function() {
            var e3 = this;
            if (!this.refs.paypalButton || !this.refs.paypalButton.firstChild) {
              let t3 = function(t4) {
                return e3.refs[t4].value;
              };
              var t2 = t3;
              this.props.dispatch;
              var n = this.registerWithPaypal.bind(this);
              var r2 = this.finishRegisterWithPaypal.bind(this);
              (0, b.loadPaypal)().then(function() {
                paypal.Button.render({
                  env: b.paypalEnvironment,
                  client: {
                    sandbox: "Abj1sspXb1ZfeNKTjVqPOfus4HwFm0_09-jWinQ_CEpp8DZ1mGerjl0OrIAyQtWyZPB_nQ294oEPVLSG",
                    production: "AWOBR9pZZ550TAA4kSckynTvDwgAgiHqj4MgLN0OORWWe92oqk3sRbsa6H2fig2N0VBuB8CMoew_CAj0"
                  },
                  payment: function(e4, r3) {
                    var o2 = this.props.env;
                    var a2 = this.props.client;
                    var i2 = t3("p");
                    var s2 = t3("email");
                    var u2 = t3("password");
                    return n({
                      email: s2,
                      password: u2,
                      env: o2,
                      client: a2,
                      p: i2
                    });
                  },
                  commit: true,
                  onAuthorize: function(e4, n2) {
                    r2({
                      actions: n2,
                      email: t3("email"),
                      password: t3("password")
                    });
                  }
                }, e3.refs.paypalButton);
              });
            }
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            this.renderPaypalButton();
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = this.props.isRegistering ? "Upgrading..." : "Upgrade";
            var n = this.props.registrationErrors.map(function(e4) {
              return c.default.createElement("li", {
                className: "text-danger",
                key: e4
              }, e4);
            });
            var r2 = this.state.regsitered;
            var o2 = c.default.createElement("h1", {
              style: {
                textAlign: "center",
                fontFamily: "Bangers"
              }
            }, r2 ? "Welcome!" : this.props.message);
            var a2 = c.default.createElement("div", null, c.default.createElement("button", {
              type: "button",
              className: "btn btn-default",
              onClick: function() {
                return e3.close();
              },
              style: {
                display: this.props.isRegistering ? "none" : "inline"
              }
            }, "Close"));
            return c.default.createElement(h.default, {
              isOpen: this.props.isGatheringRegistration,
              onClose: function() {
                return e3.close();
              },
              onSubmit: function(t3) {
                return e3.registerWithCreditCard(t3);
              },
              focusElement: function() {
                return e3.refs.email;
              },
              style: {
                content: {
                  width: 800,
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
                }
              },
              header: o2,
              footer: r2 ? null : a2
            }, r2 && c.default.createElement("div", null, c.default.createElement("h2", null, "You now have access to all features."), c.default.createElement("button", {
              type: "button",
              onClick: function() {
                return (0, g.default)().login();
              },
              className: "btn btn-primary"
            }, "Log in")), !r2 && c.default.createElement("div", {
              className: "row upgrade-container"
            }, c.default.createElement("div", {
              className: "col-md-6"
            }, c.default.createElement("div", {
              ref: "stripeContainer"
            }), c.default.createElement("h2", null, "Upgrade to Pro"), c.default.createElement("ul", null, c.default.createElement("li", null, "Save your marks, loops, and other data."), c.default.createElement("li", null, "Slow down songs to 25% tempo."), c.default.createElement("li", null, "No ads."), c.default.createElement("li", null, "Change pitch without changing tempo."), c.default.createElement("li", null, "Save MP3s with pitch and tempo changed."), c.default.createElement("li", null, "Download and play selected loops as MP3s."), c.default.createElement("li", null, "Data saves automatically to our servers.")), c.default.createElement("small", {
              style: {
                color: "#5869FC",
                fontFamily: "Bangers",
                fontSize: "25px"
              }
            }, "Only $", c.default.createElement("span", null, b.price.cents / 100))), c.default.createElement("div", {
              className: "col-md-6"
            }, c.default.createElement("ul", {
              className: "list-unstyled"
            }, n), c.default.createElement("input", {
              ref: "p",
              type: "hidden",
              value: b.price.cents
            }), c.default.createElement("input", {
              ref: "h",
              type: "hidden",
              value: b.price.hash
            }), c.default.createElement("p", null, c.default.createElement("strong", null, "1. Create a username and password")), c.default.createElement("div", {
              className: "form-group"
            }, c.default.createElement("div", {
              className: "row"
            }, c.default.createElement("div", {
              className: "col-md-6"
            }, c.default.createElement("input", {
              ref: "email",
              type: "text",
              className: "form-control",
              placeholder: "Email"
            })), c.default.createElement("div", {
              className: "col-md-6"
            }, c.default.createElement("input", {
              ref: "password",
              type: "password",
              className: "form-control",
              placeholder: "Password"
            })))), c.default.createElement("p", null, c.default.createElement("strong", null, "2. Choose your payment method")), c.default.createElement("div", {
              className: "radio"
            }, c.default.createElement("label", null, c.default.createElement("input", {
              onChange: function(t3) {
                return e3.setState({
                  paymentType: t3.target.checked ? "paypal" : "creditcard"
                });
              },
              type: "radio",
              name: "optionsRadios",
              id: "optionsRadios1",
              checked: this.state.paymentType === "paypal"
            }), "Pay with PayPal")), c.default.createElement("div", {
              className: "radio"
            }, c.default.createElement("label", null, c.default.createElement("input", {
              onChange: function(t3) {
                return e3.setState({
                  paymentType: t3.target.checked ? "creditcard" : "paypal"
                });
              },
              type: "radio",
              name: "optionsRadios",
              id: "optionsRadios2",
              checked: this.state.paymentType === "creditcard"
            }), "Secure payment with credit or debit card")), c.default.createElement("hr", {
              style: {
                marginTop: "1em"
              }
            }), c.default.createElement("div", {
              ref: "paypalButton",
              style: {
                display: this.state.paymentType === "paypal" ? "block" : "none"
              }
            }), c.default.createElement("div", {
              style: {
                display: this.state.paymentType === "creditcard" ? "block" : "none"
              }
            }, c.default.createElement("div", {
              className: "form-group"
            }, c.default.createElement("input", {
              ref: "creditCard",
              type: "text",
              className: "form-control",
              placeholder: "Credit Card #"
            })), c.default.createElement("div", {
              className: "form-group"
            }, c.default.createElement("div", {
              className: "row"
            }, c.default.createElement("div", {
              className: "col-md-9"
            }, c.default.createElement("input", {
              ref: "expires",
              type: "text",
              className: "form-control",
              placeholder: "MM / YY"
            })), c.default.createElement("div", {
              className: "col-md-3"
            }, c.default.createElement("input", {
              ref: "cvc",
              type: "text",
              className: "form-control",
              placeholder: "CVC"
            })))), c.default.createElement("button", {
              type: "submit",
              className: "btn btn-primary",
              disabled: this.props.isRegistering
            }, t2)))));
          }
        }]);
        return t;
      })(c.default.Component);
      exports.default = (0, d.connect)(function(e2) {
        return e2.auth;
      })(E);
      module.exports = exports.default;
    }
  });

  // src/generated/125.js
  var require__229 = __commonJS({
    "src/generated/125.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        }
        var t = {};
        if (e2 != null) {
          for (var n in e2) {
            if (Object.prototype.hasOwnProperty.call(e2, n)) {
              t[n] = e2[n];
            }
          }
        }
        t.default = e2;
        return t;
      }
      function o(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function a(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function i(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var s = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function u(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var l = require__152();
      var c = o(l);
      require__184();
      var p = require__224();
      var d = o(p);
      var f = require__227();
      r(f);
      function h(e2, t) {
        return c.default.createElement("div", null, c.default.createElement("h2", {
          className: "question"
        }, e2), c.default.createElement("p", {
          className: "answer"
        }, t));
      }
      var m = (function(e2) {
        function t() {
          a(this, t);
          u(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        i(t, e2);
        s(t, [{
          key: "close",
          value: function() {
            this.props.onClose();
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = ["comments", "tunetranscriber.com"].join("@");
            return c.default.createElement(d.default, {
              isOpen: this.props.isOpen,
              onClose: function() {
                return e3.close();
              },
              style: {
                content: {
                  maxWidth: "800px",
                  width: "100%"
                }
              },
              footer: c.default.createElement("button", {
                className: "btn btn-primary",
                onClick: function() {
                  return e3.close();
                }
              }, "Close")
            }, h("How can I preserve my progress?", "Unlock the ability to save your work and access additional features by upgrading to TuneTranscriber Pro. Once upgraded, simply load a song and your progress will be saved automatically."), h("I've already paid for the service, but my work isn't saving. What's wrong?", "Your work should automatically save when you're logged in, and it should reload when you open the same MP3 file or YouTube video. If this isn't functioning correctly, ensure you are signed in, indicated by the presence of 'Log out' in the top right corner."), h("I need something else.", t2));
          }
        }]);
        return t;
      })(c.default.Component);
      exports.default = m;
      module.exports = exports.default;
    }
  });

  // src/generated/124.js
  var require__230 = __commonJS({
    "src/generated/124.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__224();
      var p = r(c);
      var d = require__188();
      var f = (function(e2) {
        function t() {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        a(t, e2);
        i(t, [{
          key: "save",
          value: function() {
            this.props.onSave({
              label: this.refs.label.value
            });
          }
        }, {
          key: "removeMark",
          value: function() {
            this.props.onRemoveMark(this.props.mark.id);
            this.props.onCancel();
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = this.props.mark.type === "beat";
            var n = l.default.createElement("h4", {
              className: "modal-title",
              id: "myModalLabel"
            }, "Edit ", this.props.mark.type);
            var r2 = l.default.createElement("div", null, l.default.createElement("button", {
              type: "button",
              className: "btn btn-default",
              onClick: function() {
                return e3.removeMark();
              },
              "data-dismiss": "modal",
              "data-bind": "click:deleteMark"
            }, "Delete ", this.props.mark.type), l.default.createElement("button", {
              type: "submit",
              className: "btn btn-primary"
            }, "Save changes"));
            return l.default.createElement(p.default, {
              isOpen: this.props.isOpen,
              onClose: function() {
                return e3.props.onCancel();
              },
              onSubmit: function() {
                return e3.save();
              },
              header: n,
              footer: r2,
              focusElement: function() {
                return e3.refs.label;
              }
            }, l.default.createElement("div", {
              className: "form-group",
              style: {
                display: (0, d.display)(!t2)
              }
            }, l.default.createElement("label", null, "Label"), l.default.createElement("input", {
              ref: "label",
              type: "text",
              className: "form-control",
              defaultValue: this.props.mark.label
            })));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = f;
      module.exports = exports.default;
    }
  });

  // src/app/components/MarkPanel.js
  var require_MarkPanel = __commonJS({
    "src/app/components/MarkPanel.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__222();
      r(c);
      var p = require__230();
      var d = r(p);
      var f = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.marks = e3.marks;
          this.type = e3.type;
          this.element = e3.element;
          this.dragState = null;
          this.onMouseDown = this.onMouseDown.bind(this);
          this.onMouseMove = this.onMouseMove.bind(this);
          this.onMouseUp = this.onMouseUp.bind(this);
          this.state = {
            marks: [],
            currentMark: null,
            audioDuration: null
          };
        }
        a(t, e2);
        i(t, [{
          key: "componentDidMount",
          value: function() {
            document.addEventListener("mousemove", this.onMouseMove);
            document.addEventListener("mouseup", this.onMouseUp);
          }
        }, {
          key: "componentDidUnMount",
          value: function() {
            document.removeEventListener("mousemove", this.onMouseMove);
            document.removeEventListener("mouseup", this.onMouseUp);
          }
        }, {
          key: "onMouseDown",
          value: function(e3, t2) {
            var n = t2.time - this.pos(e3) / this.props.width;
            this.dragState = {
              isMouseDown: true,
              isDragging: false,
              markId: t2.id,
              markedForDeletion: null,
              time: null,
              markTarget: e3.target,
              originalY: e3.pageY,
              diff: n
            };
          }
        }, {
          key: "onMouseMove",
          value: function(e3) {
            var t2 = this.dragState;
            if (t2 && t2.isMouseDown) {
              t2.isDragging = true;
              t2.time = this.pos(e3) / this.props.width + t2.diff;
              t2.markedForDeletion = Math.abs(e3.pageY - this.dragState.originalY) > 100;
              this.props.onMarkChanged(t2.markId, {
                time: t2.time,
                markedForDeletion: t2.markedForDeletion
              });
            }
          }
        }, {
          key: "onMouseUp",
          value: function(e3) {
            if (this.dragState && this.dragState.isMouseDown) {
              if (this.dragState.markedForDeletion) {
                this.props.onRemoveMark(this.dragState.markId);
              }
              this.dragState = null;
            }
          }
        }, {
          key: "pos",
          value: function(e3) {
            var t2 = 0;
            var n = e3.pageX - t2 + e3.target.parentNode.scrollLeft;
            return n;
          }
        }, {
          key: "shouldComponentUpdate",
          value: function(e3, t2) {
            return this.props.width !== e3.width || this.props.marks !== e3.marks || this.state !== t2;
          }
        }, {
          key: "updateLabel",
          value: function(e3, t2) {
            this.setState({
              currentMark: null
            });
            var n = Object.assign({}, e3, {
              label: t2
            });
            this.props.onMarkChanged(e3.id, n);
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = this.props.type;
            var n = this.props.marks.filter(function(t3) {
              return t3.type === e3.props.type && !t3.markedForDeletion;
            }).map(function(n2) {
              var r3 = n2.time * e3.props.width;
              return l.default.createElement("div", {
                style: {
                  left: r3
                },
                key: n2.id,
                className: t2,
                onDoubleClick: function(t3) {
                  return e3.setState({
                    currentMark: n2
                  });
                },
                onMouseDown: function(t3) {
                  return e3.onMouseDown(t3, n2);
                }
              }, l.default.createElement("label", null, n2.label));
            }.bind(this));
            var r2 = null;
            if (this.state.currentMark) {
              var o2 = this.state.currentMark;
              if (o2) {
                o2.label;
              } else {
                null;
              }
              var a2 = o2 != null;
              r2 = l.default.createElement(d.default, {
                isOpen: a2,
                onSave: function(t3) {
                  return e3.updateLabel(o2, t3.label);
                },
                onCancel: function() {
                  return e3.setState({
                    currentMark: null
                  });
                },
                mark: o2,
                onRemoveMark: this.props.onRemoveMark
              });
            }
            return l.default.createElement("div", {
              className: this.props.className + " mark-panel",
              onselectstart: function() {
                return false;
              },
              unselectable: "on",
              style: {
                MozUserSelect: false
              }
            }, r2, n);
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = f;
      module.exports = exports.default;
    }
  });

  // src/app/components/MouseEventLayer.js
  var require_MouseEventLayer = __commonJS({
    "src/app/components/MouseEventLayer.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.state = {};
        }
        a(t, e2);
        i(t, [{
          key: "mouseEvent",
          value: function(e3, t2) {
            var n = this.refs.main;
            if (!this.mouseEventing) {
              this.mouseEventing = true;
              for (var r2 = 1; r2 < n.childNodes.length; r2++) {
                var o2 = new MouseEvent(t2.type, t2.nativeEvent);
                var a2 = n.childNodes[r2].dispatchEvent(o2);
                if (!a2) {
                  break;
                }
              }
              this.mouseEventing = false;
              t2.stopPropagation();
            }
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            return l.default.createElement("div", {
              ref: "main",
              className: "mouse-container",
              style: {
                height: this.props.height
              }
            }, l.default.createElement("div", {
              className: "overlay",
              style: {
                height: this.props.height,
                zIndex: 39,
                width: this.props.width
              },
              onClick: function(t2) {
                return e3.mouseEvent("onMouseClick", t2);
              },
              onMouseUp: function(t2) {
                return e3.mouseEvent("onMouseUp", t2);
              },
              onMouseDown: function(t2) {
                return e3.mouseEvent("onMouseDown", t2);
              },
              onDoubleClick: function(t2) {
                return e3.mouseEvent("onMouseDoubleClick", t2);
              },
              onMouseEnter: function(t2) {
                return e3.mouseEvent("onMouseEnter", t2);
              },
              onMouseLeave: function(t2) {
                return e3.mouseEvent("onMouseLeave", t2);
              },
              onMouseMove: function(t2) {
                return e3.mouseEvent("onMouseMove", t2);
              }
            }), this.props.children);
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = c;
      module.exports = exports.default;
    }
  });

  // src/generated/121.js
  var require__231 = __commonJS({
    "src/generated/121.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var o = Object.assign || function(e2) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r2 in n) {
            if (Object.prototype.hasOwnProperty.call(n, r2)) {
              e2[r2] = n[r2];
            }
          }
        }
        return e2;
      };
      var a = require__152();
      var i = r(a);
      var s = i.default.createClass({
        displayName: "BlurInput",
        propTypes: {
          onChange: i.default.PropTypes.func.isRequired
        },
        getInitialState: function() {
          return {
            value: this.props.value
          };
        },
        render: function() {
          return i.default.createElement("input", o({}, this.props, {
            type: "text",
            value: this.state.value,
            onChange: this.handleChange,
            onBlur: this.handleBlur
          }));
        },
        componentWillReceiveProps: function(e2) {
          this.setState({
            value: e2.value
          });
        },
        handleChange: function(e2) {
          this.setState({
            value: e2.target.value
          });
        },
        handleBlur: function(e2) {
          this.props.onChange(e2.target.value);
        }
      });
      exports.default = s;
      module.exports = exports.default;
    }
  });

  // src/generated/131.js
  var require__232 = __commonJS({
    "src/generated/131.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__231();
      var p = r(c);
      var d = require__188();
      var f = (function(e2) {
        function t() {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        a(t, e2);
        i(t, [{
          key: "render",
          value: function() {
            var e3 = this;
            return l.default.createElement("div", {
              className: "group",
              style: {
                paddingTop: ".5em",
                display: (0, d.display)(this.props.visible)
              }
            }, l.default.createElement("div", {
              className: "btn-spinner"
            }, l.default.createElement("p", null, "Octives"), l.default.createElement("button", {
              className: "btn btn-sm btn-default",
              onClick: function() {
                return e3.props.onChangePitch(-1, "octives");
              }
            }, "\u2212"), l.default.createElement(p.default, {
              type: "text",
              value: this.props.octives,
              onChange: function(t2) {
                return e3.props.onSetPitch(parseInt(t2), "octives");
              }
            }), l.default.createElement("button", {
              className: "btn btn-sm btn-default",
              onClick: function() {
                return e3.props.onChangePitch(1, "octives");
              }
            }, "+")), l.default.createElement("div", {
              className: "btn-spinner"
            }, l.default.createElement("p", null, "Semitones"), l.default.createElement("button", {
              className: "btn btn-sm btn-default",
              onClick: function() {
                return e3.props.onChangePitch(-1, "semitones");
              }
            }, "\u2212"), l.default.createElement(p.default, {
              type: "text",
              value: this.props.semitones,
              onChange: function(t2) {
                return e3.props.onSetPitch(parseInt(t2), "semitones");
              }
            }), l.default.createElement("button", {
              className: "btn btn-sm btn-default",
              onClick: function() {
                return e3.props.onChangePitch(1, "semitones");
              }
            }, "+")), l.default.createElement("div", {
              className: "btn-spinner"
            }, l.default.createElement("p", null, "Cents"), l.default.createElement("button", {
              className: "btn btn-sm btn-default",
              onClick: function() {
                return e3.props.onChangePitch(-1, "cents");
              }
            }, "\u2212"), l.default.createElement(p.default, {
              type: "text",
              value: this.props.cents,
              onChange: function(t2) {
                return e3.props.onSetPitch(parseInt(t2), "cents");
              }
            }), l.default.createElement("button", {
              className: "btn btn-sm btn-default",
              onClick: function() {
                return e3.props.onChangePitch(1, "cents");
              }
            }, "+")), l.default.createElement("div", {
              className: "clearfix"
            }));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = f;
      module.exports = exports.default;
    }
  });

  // src/app/components/Toolbar.js
  var require_Toolbar = __commonJS({
    "src/app/components/Toolbar.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = (function(e2) {
        function t() {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        a(t, e2);
        i(t, [{
          key: "setDelay",
          value: function(e3, t2) {
            this.props.onSetDelay(t2);
            e3.preventDefault();
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = null;
            if (this.props.showSaveNotification) {
              t2 = l.default.createElement("div", {
                className: "btn-group pull-left",
                style: {
                  marginTop: ".5em",
                  marginLeft: ".5em"
                }
              }, l.default.createElement("button", {
                onClick: this.props.onShowSaveNotification,
                className: "btn btn-default",
                title: "Save your work"
              }, "Save your work"));
            }
            return l.default.createElement("div", null, l.default.createElement("div", {
              className: "btn-group pull-left",
              style: {
                marginTop: ".5em"
              }
            }, l.default.createElement("button", {
              onClick: this.props.onPlay,
              className: "btn btn-default",
              title: "Hotkey: r"
            }, "Play"), l.default.createElement("button", {
              onClick: this.props.onPause,
              className: "btn btn-default",
              title: "Hotkey: p"
            }, "Pause"), l.default.createElement("div", {
              className: "btn-group"
            }, l.default.createElement("button", {
              type: "button",
              className: "btn btn-default dropdown-toggle",
              "data-toggle": "dropdown"
            }, "Settings"), l.default.createElement("ul", {
              className: "dropdown-menu multi-level",
              role: "menu"
            }, l.default.createElement("li", null, l.default.createElement("a", {
              href: "#",
              className: "",
              onClick: function(t3) {
                e3.props.onAdjustModeChange("tempo");
                t3.preventDefault();
              }
            }, "Adjust Tempo")), l.default.createElement("li", null, l.default.createElement("a", {
              href: "#",
              className: "youtube-hidden",
              onClick: function(t3) {
                e3.props.onAdjustModeChange("pitch");
                t3.preventDefault();
              }
            }, "Adjust Pitch")), null, l.default.createElement("li", {
              className: "divider youtube-hidden"
            }), l.default.createElement("li", {
              className: "dropdown-submenu"
            }, l.default.createElement("a", {
              tabIndex: "-1",
              href: "#"
            }, "Start/Loop Delay"), l.default.createElement("ul", {
              className: "dropdown-menu",
              role: "menu"
            }, l.default.createElement("li", null, l.default.createElement("a", {
              href: "#",
              onClick: function(t3) {
                return e3.setDelay(t3, 0.5);
              }
            }, "\xBD Second")), l.default.createElement("li", null, l.default.createElement("a", {
              href: "#",
              onClick: function(t3) {
                return e3.setDelay(t3, 1);
              }
            }, "1 Second")), l.default.createElement("li", null, l.default.createElement("a", {
              href: "#",
              onClick: function(t3) {
                return e3.setDelay(t3, 2);
              }
            }, "2 Second")), l.default.createElement("li", null, l.default.createElement("a", {
              href: "#",
              onClick: function(t3) {
                return e3.setDelay(t3, 5);
              }
            }, "5 Second")), l.default.createElement("li", {
              className: "divider"
            }), l.default.createElement("li", null, l.default.createElement("a", {
              href: "#",
              onClick: function(t3) {
                return e3.setDelay(t3, null);
              }
            }, "None"))))))), l.default.createElement("div", {
              className: "btn-group pull-left",
              style: {
                clear: "left",
                marginTop: ".25em"
              }
            }, l.default.createElement("button", {
              onClick: this.props.onJumpToStart,
              className: "btn btn-default btn-sm",
              title: "Jump to the start of the song"
            }, "Start"), l.default.createElement("button", {
              onClick: this.props.onJumpToSelectionStart,
              className: "btn btn-default btn-sm",
              disabled: null == this.props.selectionEnd,
              title: "Jump to the start of the selected loop"
            }, "Selection Start"), l.default.createElement("button", {
              onClick: this.props.onJumpToSelectionEnd,
              className: "btn btn-default btn-sm",
              disabled: null == this.props.selectionEnd,
              title: "Jump to the end of the selected loop"
            }, "Selection End")), t2);
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = c;
      module.exports = exports.default;
    }
  });

  // src/app/components/WaveformPosition.js
  var require_WaveformPosition = __commonJS({
    "src/app/components/WaveformPosition.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__188();
      var p = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.update = this.update.bind(this);
          this.state = {
            position: 0
          };
          this.throttledSetPosition = (0, c.throttle)(this.setPosition, 1e3 / 60, this);
        }
        a(t, e2);
        i(t, [{
          key: "onClick",
          value: function(e3) {
            if (this.props.onClick) {
              var t2 = (0, c.relX)(e3) / this.props.width;
              this.props.onClick(t2);
              this.setState({
                position: this.props.getPosition()
              });
              e3.preventDefault();
              e3.stopPropagation();
            }
          }
        }, {
          key: "onDblClick",
          value: function(e3) {
            if (this.props.onDoubleClick) {
              var t2 = (0, c.relX)(e3) / this.props.width;
              this.props.onDoubleClick(t2);
              this.setState({
                position: this.props.getPosition()
              });
            }
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e3) {
            this.update(e3);
          }
        }, {
          key: "update",
          value: function(e3) {
            var t2 = this;
            (0, c.cancelAnimationFrame)(this.frameId);
            this.throttledSetPosition(e3);
            if (e3.isPlaying) {
              this.frameId = (0, c.requestAnimationFrame)(function() {
                return t2.update(t2.props);
              });
            } else {
              this.frameId = null;
            }
          }
        }, {
          key: "setPosition",
          value: function(e3) {
            this.setState({
              position: e3.getPosition()
            });
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = this.state.position * this.props.width;
            return l.default.createElement("div", {
              onClick: function(t3) {
                return e3.onClick(t3);
              },
              onDoubleClick: function(t3) {
                return e3.onDblClick(t3);
              },
              style: {
                width: this.props.width
              },
              className: this.props.className,
              id: this.props.id,
              height: "224"
            }, l.default.createElement("div", {
              className: "position-line",
              style: {
                left: t2
              }
            }));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = p;
      module.exports = exports.default;
    }
  });

  // src/app/components/WaveformSelection.js
  var require_WaveformSelection = __commonJS({
    "src/app/components/WaveformSelection.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__188();
      var p = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.startX = -1;
          this.dragged = false;
          this.isMouseDown = false;
        }
        a(t, e2);
        i(t, [{
          key: "shouldComponentUpdate",
          value: function(e3, t2) {
            return this.props.start !== e3.start || this.props.end !== e3.end || this.props.width !== e3.width || this.props.height !== e3.height;
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var e3 = this;
            this.canvas = this.refs.canvas;
            this.ctx = this.canvas.getContext("2d");
            setTimeout(function() {
              e3.draw();
            }, 500);
          }
        }, {
          key: "onMouseDown",
          value: function(e3) {
            this.isMouseDown = true;
            if (this.isOnResizeElement(e3, this.props.start)) {
              this.startX = (this.props.end || this.props.start) * this.canvas.offsetWidth;
              return;
            } else if (this.isOnResizeElement(e3, this.props.end)) {
              this.startX = this.props.start * this.canvas.offsetWidth;
              return;
            } else {
              this.startX = (0, c.relX)(e3);
              return;
            }
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            this.draw();
          }
        }, {
          key: "onMouseMove",
          value: function(e3) {
            if (this.isMouseDown) {
              this.dragged = true;
              this.setCurrentSelection(e3);
            } else {
              this.hitTestResizer(e3);
            }
          }
        }, {
          key: "onMouseOut",
          value: function(e3) {
            if (!this.isMouseDown) {
              document.body.style.cursor = null;
            }
          }
        }, {
          key: "setCurrentSelection",
          value: function(e3) {
            var t2 = (0, c.relX)(e3);
            var n = Math.min(this.startX, t2);
            var r2 = Math.max(this.startX, t2);
            if (r2 - n > 2) {
              this.props.setLoop(n / this.canvas.offsetWidth, r2 / this.canvas.offsetWidth);
            }
            e3.stopPropagation();
            e3.preventDefault();
            e3.nativeEvent.stopPropagation();
            e3.nativeEvent.stopImmediatePropagation();
          }
        }, {
          key: "onClick",
          value: function(e3) {
            if (this.isMouseDown) {
              try {
                if (this.dragged) {
                  this.dragged = false;
                  this.isMouseDown = false;
                } else {
                  this.props.setLoop((0, c.relX)(e3) / this.canvas.offsetWidth, null);
                }
              } finally {
                this.isMouseDown = false;
                this.startX = -1;
              }
            }
          }
        }, {
          key: "hitTestResizer",
          value: function(e3) {
            var t2 = this.props.start;
            var n = this.props.end;
            if (t2 > 0 && this.isOnResizeElement(e3, t2)) {
              document.body.style.cursor = "col-resize";
            } else if (n != null && this.isOnResizeElement(e3, n)) {
              document.body.style.cursor = "col-resize";
            } else {
              document.body.style.cursor = null;
            }
          }
        }, {
          key: "isOnResizeElement",
          value: function(e3, t2) {
            return Math.abs((0, c.relX)(e3) - t2 * this.canvas.offsetWidth) < 3;
          }
        }, {
          key: "drawEdge",
          value: function(e3) {
            var t2 = 2;
            var n = this.ctx;
            var r2 = this.canvas.height;
            n.beginPath();
            n.moveTo(e3 + t2 + 1, 0);
            n.lineTo(e3 + 1, t2);
            n.lineTo(e3 + 1, r2 - t2);
            n.lineTo(e3 + t2 + 1, r2);
            n.lineTo(e3, r2);
            n.lineTo(e3 - t2 - 0, r2);
            n.lineTo(e3 - 0, r2 - t2);
            n.lineTo(e3 - 0, t2);
            n.lineTo(e3 - t2 - 0, 0);
            n.closePath();
            n.fillStyle = "#5869FC";
            n.shadowColor = "#333";
            n.shadowBlur = 0.5;
            n.fill();
          }
        }, {
          key: "drawBackground",
          value: function(e3, t2) {
            var n = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
            n.addColorStop(0, d.selection.color1);
            n.addColorStop(1, d.selection.color2);
            this.ctx.fillStyle = n;
            this.ctx.fillRect(e3 + 1, 0, t2 - e3 - 1, this.canvas.height);
          }
        }, {
          key: "draw",
          value: function() {
            var e3 = this.ctx;
            var t2 = this.canvas.width;
            e3.clearRect(0, 0, t2, this.canvas.height);
            var n = this.props.start * t2;
            var r2 = this.props.end * t2;
            e3.fillStyle = "#F6F6F9";
            this.drawEdge(n);
            if (this.props.end != null) {
              this.drawBackground(n, r2);
              this.drawEdge(r2);
            }
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            return l.default.createElement("canvas", {
              ref: "canvas",
              width: this.props.width,
              id: "waveform-selection",
              height: this.props.height,
              unselectable: "on",
              style: {
                MozUserSelect: "none"
              },
              onSelectStart: function() {
                return false;
              },
              onMouseDown: function(t2) {
                return e3.onMouseDown(t2);
              },
              onMouseMove: function(t2) {
                return e3.onMouseMove(t2);
              },
              onMouseOut: function(t2) {
                return e3.onMouseOut(t2);
              },
              onMouseUp: function(t2) {
                return e3.onClick(t2);
              }
            });
          }
        }]);
        return t;
      })(l.default.Component);
      var d = {
        selection: {
          color1: "rgba(246,246,249,.015)",
          color2: "rgba(246,246,249,.075)"
        }
      };
      exports.default = p;
      module.exports = exports.default;
    }
  });

  // src/generated/279.js
  var require__233 = __commonJS({
    "src/generated/279.js"(exports, module) {
      module.exports = function() {
        return new Worker(__require.p + "worker.js");
      };
    }
  });

  // src/app/components/DownloadLoopDialog.js
  var require_DownloadLoopDialog = __commonJS({
    "src/app/components/DownloadLoopDialog.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      function i(e2, t) {
        return function(n) {
          var r2 = {
            [t]: n.target.value
          };
          e2.setState(r2);
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var s = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function u(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var l = require__152();
      var c = r(l);
      var p = require__224();
      var d = r(p);
      var f = require__233();
      var h = (function(e2) {
        function t(e3) {
          o(this, t);
          u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.element = e3.element;
          this.state = {
            fileName: "loop.mp3",
            processing: false,
            progress: null,
            downloadUrl: null
          };
        }
        a(t, e2);
        s(t, [{
          key: "componentDidMount",
          value: function() {
            this.reset();
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e3) {
            var t2 = e3.isOpen && !this.props.isOpen;
            if (t2) {
              this.reset();
            }
          }
        }, {
          key: "reset",
          value: function() {
            if (this.saveLoopWorker) {
              this.saveLoopWorker.terminate();
              this.saveLoopWorker = null;
            }
            if (this.state.downloadUrl) {
              URL.revokeObjectURL(this.state.downloadUrl);
            }
            this.setState({
              downloadUrl: null,
              processing: false,
              progress: 0
            });
          }
        }, {
          key: "cancel",
          value: function() {
            this.reset();
            this.props.onClose();
          }
        }, {
          key: "submit",
          value: function() {
            if (this.state.downloadUrl) {
              this.props.onClose();
              return;
            } else {
              this.setState({
                processing: true
              });
              this.encode();
              return;
            }
          }
        }, {
          key: "encode",
          value: function() {
            var e3 = this.props.loop.start;
            var t2 = this.props.loop.end;
            if (e3 != null && t2 != null) {
              var n = this.props.audioBuffer;
              var r2 = e3 * n.duration;
              var o2 = t2 * n.duration;
              var a2 = n.sampleRate;
              var i2 = r2 * a2;
              var s2 = o2 * a2;
              var u2 = n.numberOfChannels;
              var l2 = n.getChannelData(0);
              var c2 = u2 > 1 ? n.getChannelData(1) : l2;
              this.encodeOptions = {
                pitch: this.props.pitch,
                tempo: this.props.tempo,
                sampleRate: a2,
                leftBuffer: l2.subarray(i2, s2),
                rightBuffer: c2.subarray(i2, s2)
              };
              if (this.saveLoopWorker) {
                this.saveLoopWorker.terminate();
              }
              var p2 = this.saveLoopWorker = new f();
              p2.addEventListener("message", this.onMessage.bind(this));
            }
          }
        }, {
          key: "onMessage",
          value: function(e3) {
            if (e3.data.name === "mp3EncodeProgress") {
              this.setState({
                progress: e3.data.progress
              });
            }
            if (e3.data.name === "mp3Encoded") {
              this.setState({
                processing: false,
                downloadUrl: e3.data.url
              });
            }
            if (e3.data.name === "ready") {
              this.saveLoopWorker.postMessage({
                name: "encodeMp3",
                options: this.encodeOptions
              });
              this.encodeOptions = null;
            }
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = this.props.loop;
            var n = t2 && t2.start != null && t2.end != null;
            var r2 = !n;
            var o2 = this.state.downloadUrl ? "Ready for download" : null;
            var a2 = "Save Loop";
            if (this.state.processing) {
              a2 = "Processing";
            } else if (this.state.downloadUrl) {
              a2 = "Download MP3";
            } else if (r2) {
              a2 = "Close";
            }
            var s2 = "btn btn-primary";
            if (this.state.processing) {
              s2 = "btn btn-default";
            } else if (this.state.downloadUrl) {
              s2 = "btn btn-success";
            }
            var u2 = !!this.state.processing;
            var l2 = r2 ? function() {
              return e3.props.onClose();
            } : function() {
              return e3.submit();
            };
            var p2 = c.default.createElement("h2", null, "Oops! First select the portion of the song you want to download.");
            var f2 = c.default.createElement("div", null, c.default.createElement("div", {
              className: "form-group"
            }, c.default.createElement("label", {
              htmlFor: "download-loop-filename"
            }, "Filename"), c.default.createElement("input", {
              id: "download-loop-filename",
              ref: "filename",
              type: "text",
              defaultValue: this.state.fileName,
              onChange: i(this, "fileName"),
              disabled: u2,
              className: "form-control"
            })), c.default.createElement("div", {
              className: "progress"
            }, c.default.createElement("div", {
              className: "progress-bar active",
              role: "progressbar",
              style: {
                width: this.state.progress + "%"
              }
            }, o2)));
            var h2 = c.default.createElement("h4", {
              className: "modal-title"
            }, "Download Loop as MP3");
            var m = c.default.createElement("div", null, c.default.createElement("button", {
              type: "button",
              className: "btn btn-link",
              onClick: function() {
                return e3.close();
              },
              style: {
                display: this.props.isRegistering ? "none" : "inline"
              }
            }, "Close"), c.default.createElement("button", {
              type: "submit",
              className: "btn btn-primary",
              disabled: this.props.isRegistering
            }, a2));
            var v = n ? f2 : p2;
            var m = this.state.downloadUrl ? c.default.createElement("a", {
              href: this.state.downloadUrl,
              onClick: l2,
              className: s2,
              download: this.state.fileName
            }, a2) : c.default.createElement("button", {
              className: s2,
              disabled: u2
            }, a2);
            return c.default.createElement(d.default, {
              isOpen: this.props.isOpen,
              onClose: function() {
                return e3.cancel();
              },
              onSubmit: l2,
              focusElement: function() {
                return e3.refs.filename;
              },
              header: h2,
              footer: m
            }, v);
          }
        }]);
        return t;
      })(c.default.Component);
      exports.default = h;
      module.exports = exports.default;
    }
  });

  // src/generated/75.js
  var require__234 = __commonJS({
    "src/generated/75.js"(exports, module) {
      var r;
      var o;
      var a;
      var i = require__188();
      var s = i.shims.document;
      var u = i.shims.window;
      (function(n) {
        o = [];
        r = n;
        a = typeof r == "function" ? r.apply(exports, o) : r;
        if (a !== void 0) {
          module.exports = a;
        }
      })(function() {
        "use strict";
        function e2(e3) {
          return typeof e3 == "object" && typeof e3.to == "function" && typeof e3.from == "function";
        }
        function t(e3) {
          e3.parentElement.removeChild(e3);
        }
        function n(e3) {
          return e3 !== null && e3 !== void 0;
        }
        function r2(e3) {
          e3.preventDefault();
        }
        function o2(e3) {
          return e3.filter(function(e4) {
            return !this[e4] && (this[e4] = true);
          }, {});
        }
        function a2(e3, t2) {
          return Math.round(e3 / t2) * t2;
        }
        function i2(e3, t2) {
          var n2 = e3.getBoundingClientRect();
          var r3 = e3.ownerDocument;
          var o3 = r3.documentElement;
          var a3 = y(r3);
          if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            a3.x = 0;
          }
          if (t2) {
            return n2.top + a3.y - o3.clientTop;
          } else {
            return n2.left + a3.x - o3.clientLeft;
          }
        }
        function l(e3) {
          return typeof e3 == "number" && !isNaN(e3) && isFinite(e3);
        }
        function c(e3, t2, n2) {
          if (n2 > 0) {
            h(e3, t2);
            setTimeout(function() {
              m(e3, t2);
            }, n2);
          }
        }
        function p(e3) {
          return Math.max(Math.min(e3, 100), 0);
        }
        function d(e3) {
          if (Array.isArray(e3)) {
            return e3;
          } else {
            return [e3];
          }
        }
        function f(e3) {
          e3 = String(e3);
          var t2 = e3.split(".");
          if (t2.length > 1) {
            return t2[1].length;
          } else {
            return 0;
          }
        }
        function h(e3, t2) {
          if (e3.classList) {
            e3.classList.add(t2);
          } else {
            e3.className += " " + t2;
          }
        }
        function m(e3, t2) {
          if (e3.classList) {
            e3.classList.remove(t2);
          } else {
            e3.className = e3.className.replace(new RegExp("(^|\\b)" + t2.split(" ").join("|") + "(\\b|$)", "gi"), " ");
          }
        }
        function v(e3, t2) {
          if (e3.classList) {
            return e3.classList.contains(t2);
          } else {
            return new RegExp("\\b" + t2 + "\\b").test(e3.className);
          }
        }
        function y(e3) {
          var t2 = u.pageXOffset !== void 0;
          var n2 = (e3.compatMode || "") === "CSS1Compat";
          var r3 = t2 ? u.pageXOffset : n2 ? e3.documentElement.scrollLeft : e3.body.scrollLeft;
          var o3 = t2 ? u.pageYOffset : n2 ? e3.documentElement.scrollTop : e3.body.scrollTop;
          return {
            x: r3,
            y: o3
          };
        }
        function g() {
          if (u.navigator.pointerEnabled) {
            return {
              start: "pointerdown",
              move: "pointermove",
              end: "pointerup"
            };
          } else if (u.navigator.msPointerEnabled) {
            return {
              start: "MSPointerDown",
              move: "MSPointerMove",
              end: "MSPointerUp"
            };
          } else {
            return {
              start: "mousedown touchstart",
              move: "mousemove touchmove",
              end: "mouseup touchend"
            };
          }
        }
        function b() {
          var e3 = false;
          try {
            var t2 = Object.defineProperty({}, "passive", {
              get: function() {
                e3 = true;
              }
            });
            u.addEventListener("test", null, t2);
          } catch (e4) {
          }
          return e3;
        }
        function E() {
          return u.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        function w(e3, t2) {
          return 100 / (t2 - e3);
        }
        function C(e3, t2) {
          return t2 * 100 / (e3[1] - e3[0]);
        }
        function _(e3, t2) {
          return C(e3, e3[0] < 0 ? t2 + Math.abs(e3[0]) : t2 - e3[0]);
        }
        function O(e3, t2) {
          return t2 * (e3[1] - e3[0]) / 100 + e3[0];
        }
        function P(e3, t2) {
          for (var n2 = 1; e3 >= t2[n2]; ) {
            n2 += 1;
          }
          return n2;
        }
        function k(e3, t2, n2) {
          if (n2 >= e3.slice(-1)[0]) {
            return 100;
          }
          var r3 = P(n2, e3);
          var o3 = e3[r3 - 1];
          var a3 = e3[r3];
          var i3 = t2[r3 - 1];
          var s2 = t2[r3];
          return i3 + _([o3, a3], n2) / w(i3, s2);
        }
        function S(e3, t2, n2) {
          if (n2 >= 100) {
            return e3.slice(-1)[0];
          }
          var r3 = P(n2, t2);
          var o3 = e3[r3 - 1];
          var a3 = e3[r3];
          var i3 = t2[r3 - 1];
          var s2 = t2[r3];
          return O([o3, a3], (n2 - i3) * w(i3, s2));
        }
        function x(e3, t2, n2, r3) {
          if (r3 === 100) {
            return r3;
          }
          var o3 = P(r3, e3);
          var i3 = e3[o3 - 1];
          var s2 = e3[o3];
          if (n2) {
            if (r3 - i3 > (s2 - i3) / 2) {
              return s2;
            } else {
              return i3;
            }
          } else if (t2[o3 - 1]) {
            return e3[o3 - 1] + a2(r3 - e3[o3 - 1], t2[o3 - 1]);
          } else {
            return r3;
          }
        }
        function T(e3, t2, n2) {
          var r3;
          if (typeof t2 == "number") {
            t2 = [t2];
          }
          if (!Array.isArray(t2)) {
            throw new Error("noUiSlider (" + ne + "): 'range' contains invalid value.");
          }
          r3 = e3 === "min" ? 0 : e3 === "max" ? 100 : parseFloat(e3);
          if (!l(r3) || !l(t2[0])) {
            throw new Error("noUiSlider (" + ne + "): 'range' value isn't numeric.");
          }
          n2.xPct.push(r3);
          n2.xVal.push(t2[0]);
          if (r3) {
            n2.xSteps.push(!isNaN(t2[1]) && t2[1]);
          } else if (!isNaN(t2[1])) {
            n2.xSteps[0] = t2[1];
          }
          n2.xHighestCompleteStep.push(0);
        }
        function M(e3, t2, n2) {
          if (!t2) {
            return true;
          }
          n2.xSteps[e3] = C([n2.xVal[e3], n2.xVal[e3 + 1]], t2) / w(n2.xPct[e3], n2.xPct[e3 + 1]);
          var r3 = (n2.xVal[e3 + 1] - n2.xVal[e3]) / n2.xNumSteps[e3];
          var o3 = Math.ceil(Number(r3.toFixed(3)) - 1);
          var a3 = n2.xVal[e3] + n2.xNumSteps[e3] * o3;
          n2.xHighestCompleteStep[e3] = a3;
        }
        function N(e3, t2, n2) {
          this.xPct = [];
          this.xVal = [];
          this.xSteps = [n2 || false];
          this.xNumSteps = [false];
          this.xHighestCompleteStep = [];
          this.snap = t2;
          var r3;
          var o3 = [];
          for (r3 in e3) {
            if (e3.hasOwnProperty(r3)) {
              o3.push([e3[r3], r3]);
            }
          }
          if (o3.length && typeof o3[0][0] == "object") {
            o3.sort(function(e4, t3) {
              return e4[0][0] - t3[0][0];
            });
          } else {
            o3.sort(function(e4, t3) {
              return e4[0] - t3[0];
            });
          }
          r3 = 0;
          for (; r3 < o3.length; r3++) {
            T(o3[r3][1], o3[r3][0], this);
          }
          this.xNumSteps = this.xSteps.slice(0);
          r3 = 0;
          for (; r3 < this.xNumSteps.length; r3++) {
            M(r3, this.xNumSteps[r3], this);
          }
        }
        function D(t2) {
          if (e2(t2)) {
            return true;
          }
          throw new Error("noUiSlider (" + ne + "): 'format' requires 'to' and 'from' methods.");
        }
        function R(e3, t2) {
          if (!l(t2)) {
            throw new Error("noUiSlider (" + ne + "): 'step' is not numeric.");
          }
          e3.singleStep = t2;
        }
        function A(e3, t2) {
          if (typeof t2 != "object" || Array.isArray(t2)) {
            throw new Error("noUiSlider (" + ne + "): 'range' is not an object.");
          }
          if (t2.min === void 0 || t2.max === void 0) {
            throw new Error("noUiSlider (" + ne + "): Missing 'min' or 'max' in 'range'.");
          }
          if (t2.min === t2.max) {
            throw new Error("noUiSlider (" + ne + "): 'range' 'min' and 'max' cannot be equal.");
          }
          e3.spectrum = new N(t2, e3.snap, e3.singleStep);
        }
        function I(e3, t2) {
          t2 = d(t2);
          if (!Array.isArray(t2) || !t2.length) {
            throw new Error("noUiSlider (" + ne + "): 'start' option is incorrect.");
          }
          e3.handles = t2.length;
          e3.start = t2;
        }
        function j(e3, t2) {
          e3.snap = t2;
          if (typeof t2 != "boolean") {
            throw new Error("noUiSlider (" + ne + "): 'snap' option must be a boolean.");
          }
        }
        function L(e3, t2) {
          e3.animate = t2;
          if (typeof t2 != "boolean") {
            throw new Error("noUiSlider (" + ne + "): 'animate' option must be a boolean.");
          }
        }
        function U(e3, t2) {
          e3.animationDuration = t2;
          if (typeof t2 != "number") {
            throw new Error("noUiSlider (" + ne + "): 'animationDuration' option must be a number.");
          }
        }
        function F(e3, t2) {
          var n2;
          var r3 = [false];
          if (t2 === "lower") {
            t2 = [true, false];
          } else if (t2 === "upper") {
            t2 = [false, true];
          }
          if (t2 === true || t2 === false) {
            for (n2 = 1; n2 < e3.handles; n2++) {
              r3.push(t2);
            }
            r3.push(false);
          } else {
            if (!Array.isArray(t2) || !t2.length || t2.length !== e3.handles + 1) {
              throw new Error("noUiSlider (" + ne + "): 'connect' option doesn't match handle count.");
            }
            r3 = t2;
          }
          e3.connect = r3;
        }
        function B(e3, t2) {
          switch (t2) {
            case "horizontal":
              e3.ort = 0;
              break;
            case "vertical":
              e3.ort = 1;
              break;
            default:
              throw new Error("noUiSlider (" + ne + "): 'orientation' option is invalid.");
          }
        }
        function V(e3, t2) {
          if (!l(t2)) {
            throw new Error("noUiSlider (" + ne + "): 'margin' option must be numeric.");
          }
          if (t2 !== 0 && (e3.margin = e3.spectrum.getMargin(t2), !e3.margin)) {
            throw new Error("noUiSlider (" + ne + "): 'margin' option is only supported on linear sliders.");
          }
        }
        function W(e3, t2) {
          if (!l(t2)) {
            throw new Error("noUiSlider (" + ne + "): 'limit' option must be numeric.");
          }
          e3.limit = e3.spectrum.getMargin(t2);
          if (!e3.limit || e3.handles < 2) {
            throw new Error("noUiSlider (" + ne + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
          }
        }
        function H(e3, t2) {
          if (!l(t2) && !Array.isArray(t2)) {
            throw new Error("noUiSlider (" + ne + "): 'padding' option must be numeric or array of exactly 2 numbers.");
          }
          if (Array.isArray(t2) && t2.length !== 2 && !l(t2[0]) && !l(t2[1])) {
            throw new Error("noUiSlider (" + ne + "): 'padding' option must be numeric or array of exactly 2 numbers.");
          }
          if (t2 !== 0) {
            if (!Array.isArray(t2)) {
              t2 = [t2, t2];
            }
            e3.padding = [e3.spectrum.getMargin(t2[0]), e3.spectrum.getMargin(t2[1])];
            if (e3.padding[0] === false || e3.padding[1] === false) {
              throw new Error("noUiSlider (" + ne + "): 'padding' option is only supported on linear sliders.");
            }
            if (e3.padding[0] < 0 || e3.padding[1] < 0) {
              throw new Error("noUiSlider (" + ne + "): 'padding' option must be a positive number(s).");
            }
            if (e3.padding[0] + e3.padding[1] >= 100) {
              throw new Error("noUiSlider (" + ne + "): 'padding' option must not exceed 100% of the range.");
            }
          }
        }
        function q(e3, t2) {
          switch (t2) {
            case "ltr":
              e3.dir = 0;
              break;
            case "rtl":
              e3.dir = 1;
              break;
            default:
              throw new Error("noUiSlider (" + ne + "): 'direction' option was not recognized.");
          }
        }
        function K(e3, t2) {
          if (typeof t2 != "string") {
            throw new Error("noUiSlider (" + ne + "): 'behaviour' must be a string containing options.");
          }
          var n2 = t2.indexOf("tap") >= 0;
          var r3 = t2.indexOf("drag") >= 0;
          var o3 = t2.indexOf("fixed") >= 0;
          var a3 = t2.indexOf("snap") >= 0;
          var i3 = t2.indexOf("hover") >= 0;
          if (o3) {
            if (e3.handles !== 2) {
              throw new Error("noUiSlider (" + ne + "): 'fixed' behaviour must be used with 2 handles");
            }
            V(e3, e3.start[1] - e3.start[0]);
          }
          e3.events = {
            tap: n2 || a3,
            drag: r3,
            fixed: o3,
            snap: a3,
            hover: i3
          };
        }
        function z(e3, t2) {
          if (t2 !== false) {
            if (t2 === true) {
              e3.tooltips = [];
              for (var n2 = 0; n2 < e3.handles; n2++) {
                e3.tooltips.push(true);
              }
            } else {
              e3.tooltips = d(t2);
              if (e3.tooltips.length !== e3.handles) {
                throw new Error("noUiSlider (" + ne + "): must pass a formatter for all handles.");
              }
              e3.tooltips.forEach(function(e4) {
                if (typeof e4 != "boolean" && (typeof e4 != "object" || typeof e4.to != "function")) {
                  throw new Error("noUiSlider (" + ne + "): 'tooltips' must be passed a formatter or 'false'.");
                }
              });
            }
          }
        }
        function Y(e3, t2) {
          e3.ariaFormat = t2;
          D(t2);
        }
        function G(e3, t2) {
          e3.format = t2;
          D(t2);
        }
        function X(e3, t2) {
          e3.keyboardSupport = t2;
          if (typeof t2 != "boolean") {
            throw new Error("noUiSlider (" + ne + "): 'keyboardSupport' option must be a boolean.");
          }
        }
        function $2(e3, t2) {
          e3.documentElement = t2;
        }
        function Q(e3, t2) {
          if (typeof t2 != "string" && t2 !== false) {
            throw new Error("noUiSlider (" + ne + "): 'cssPrefix' must be a string or `false`.");
          }
          e3.cssPrefix = t2;
        }
        function Z(e3, t2) {
          if (typeof t2 != "object") {
            throw new Error("noUiSlider (" + ne + "): 'cssClasses' must be an object.");
          }
          if (typeof e3.cssPrefix == "string") {
            e3.cssClasses = {};
            for (var n2 in t2) {
              if (t2.hasOwnProperty(n2)) {
                e3.cssClasses[n2] = e3.cssPrefix + t2[n2];
              }
            }
          } else {
            e3.cssClasses = t2;
          }
        }
        function J(e3) {
          var t2 = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: re,
            format: re
          };
          var r3 = {
            step: {
              r: false,
              t: R
            },
            start: {
              r: true,
              t: I
            },
            connect: {
              r: true,
              t: F
            },
            direction: {
              r: true,
              t: q
            },
            snap: {
              r: false,
              t: j
            },
            animate: {
              r: false,
              t: L
            },
            animationDuration: {
              r: false,
              t: U
            },
            range: {
              r: true,
              t: A
            },
            orientation: {
              r: false,
              t: B
            },
            margin: {
              r: false,
              t: V
            },
            limit: {
              r: false,
              t: W
            },
            padding: {
              r: false,
              t: H
            },
            behaviour: {
              r: true,
              t: K
            },
            ariaFormat: {
              r: false,
              t: Y
            },
            format: {
              r: false,
              t: G
            },
            tooltips: {
              r: false,
              t: z
            },
            keyboardSupport: {
              r: true,
              t: X
            },
            documentElement: {
              r: false,
              t: $2
            },
            cssPrefix: {
              r: true,
              t: Q
            },
            cssClasses: {
              r: true,
              t: Z
            }
          };
          var o3 = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub"
            }
          };
          if (e3.format && !e3.ariaFormat) {
            e3.ariaFormat = e3.format;
          }
          Object.keys(r3).forEach(function(a4) {
            if (!n(e3[a4]) && o3[a4] === void 0) {
              if (r3[a4].r) {
                throw new Error("noUiSlider (" + ne + "): '" + a4 + "' is required.");
              }
              return true;
            }
            r3[a4].t(t2, n(e3[a4]) ? e3[a4] : o3[a4]);
          });
          t2.pips = e3.pips;
          var a3 = s.createElement("div");
          var i3 = a3.style.msTransform !== void 0;
          var u2 = a3.style.transform !== void 0;
          t2.transformRule = u2 ? "transform" : i3 ? "msTransform" : "webkitTransform";
          var l2 = [["left", "top"], ["right", "bottom"]];
          t2.style = l2[t2.dir][t2.ort];
          return t2;
        }
        function ee(e3, n2, a3) {
          function s2(e4, t2) {
            var n3 = Oe.createElement("div");
            if (t2) {
              h(n3, t2);
            }
            e4.appendChild(n3);
            return n3;
          }
          function u2(e4, t2) {
            var r3 = s2(e4, n2.cssClasses.origin);
            var o3 = s2(r3, n2.cssClasses.handle);
            o3.setAttribute("data-handle", t2);
            if (n2.keyboardSupport) {
              o3.setAttribute("tabindex", "0");
            }
            o3.setAttribute("role", "slider");
            o3.setAttribute("aria-orientation", n2.ort ? "vertical" : "horizontal");
            if (t2 === 0) {
              h(o3, n2.cssClasses.handleLower);
            } else if (t2 === n2.handles - 1) {
              h(o3, n2.cssClasses.handleUpper);
            }
            return r3;
          }
          function l2(e4, t2) {
            return !!t2 && s2(e4, n2.cssClasses.connect);
          }
          function f2(e4, t2) {
            var r3 = s2(t2, n2.cssClasses.connects);
            ce = [];
            pe = [];
            pe.push(l2(r3, e4[0]));
            for (var o3 = 0; o3 < n2.handles; o3++) {
              ce.push(u2(t2, o3));
              be[o3] = o3;
              pe.push(l2(r3, e4[o3 + 1]));
            }
          }
          function w2(e4) {
            h(e4, n2.cssClasses.target);
            if (n2.dir === 0) {
              h(e4, n2.cssClasses.ltr);
            } else {
              h(e4, n2.cssClasses.rtl);
            }
            if (n2.ort === 0) {
              h(e4, n2.cssClasses.horizontal);
            } else {
              h(e4, n2.cssClasses.vertical);
            }
            return s2(e4, n2.cssClasses.base);
          }
          function C2(e4, t2) {
            return !!n2.tooltips[t2] && s2(e4.firstChild, n2.cssClasses.tooltip);
          }
          function _2() {
            var e4 = ce.map(C2);
            W2("update", function(t2, r3, o3) {
              if (e4[r3]) {
                var a4 = t2[r3];
                if (n2.tooltips[r3] !== true) {
                  a4 = n2.tooltips[r3].to(o3[r3]);
                }
                e4[r3].innerHTML = a4;
              }
            });
          }
          function O2() {
            W2("update", function(e4, t2, r3, o3, a4) {
              be.forEach(function(e5) {
                var t3 = ce[e5];
                var o4 = z2(ge, e5, 0, true, true, true);
                var i3 = z2(ge, e5, 100, true, true, true);
                var s3 = a4[e5];
                var u3 = n2.ariaFormat.to(r3[e5]);
                o4 = we.fromStepping(o4).toFixed(1);
                i3 = we.fromStepping(i3).toFixed(1);
                s3 = we.fromStepping(s3).toFixed(1);
                t3.children[0].setAttribute("aria-valuemin", o4);
                t3.children[0].setAttribute("aria-valuemax", i3);
                t3.children[0].setAttribute("aria-valuenow", s3);
                t3.children[0].setAttribute("aria-valuetext", u3);
              });
            });
          }
          function P2(e4, t2, n3) {
            if (e4 === "range" || e4 === "steps") {
              return we.xVal;
            }
            if (e4 === "count") {
              if (t2 < 2) {
                throw new Error("noUiSlider (" + ne + "): 'values' (>= 2) required for mode 'count'.");
              }
              var r3 = t2 - 1;
              var o3 = 100 / r3;
              for (t2 = []; r3--; ) {
                t2[r3] = r3 * o3;
              }
              t2.push(100);
              e4 = "positions";
            }
            if (e4 === "positions") {
              return t2.map(function(e5) {
                return we.fromStepping(n3 ? we.getStep(e5) : e5);
              });
            } else if (e4 === "values") {
              if (n3) {
                return t2.map(function(e5) {
                  return we.fromStepping(we.getStep(we.toStepping(e5)));
                });
              } else {
                return t2;
              }
            } else {
              return void 0;
            }
          }
          function k2(e4, t2, n3) {
            function r3(e5, t3) {
              return (e5 + t3).toFixed(7) / 1;
            }
            var a4 = {};
            var i3 = we.xVal[0];
            var s3 = we.xVal[we.xVal.length - 1];
            var u3 = false;
            var l3 = false;
            var c2 = 0;
            n3 = o2(n3.slice().sort(function(e5, t3) {
              return e5 - t3;
            }));
            if (n3[0] !== i3) {
              n3.unshift(i3);
              u3 = true;
            }
            if (n3[n3.length - 1] !== s3) {
              n3.push(s3);
              l3 = true;
            }
            n3.forEach(function(o3, i4) {
              var s4;
              var p2;
              var d2;
              var f3;
              var h2;
              var m2;
              var v2;
              var y2;
              var g2;
              var b2;
              var E2 = o3;
              var w3 = n3[i4 + 1];
              var C3 = t2 === "steps";
              if (C3) {
                s4 = we.xNumSteps[i4];
              }
              s4 ||= w3 - E2;
              if (E2 !== false && w3 !== void 0) {
                s4 = Math.max(s4, 1e-7);
                p2 = E2;
                for (; p2 <= w3; p2 = r3(p2, s4)) {
                  f3 = we.toStepping(p2);
                  h2 = f3 - c2;
                  y2 = h2 / e4;
                  g2 = Math.round(y2);
                  b2 = h2 / g2;
                  d2 = 1;
                  for (; d2 <= g2; d2 += 1) {
                    m2 = c2 + d2 * b2;
                    a4[m2.toFixed(5)] = [we.fromStepping(m2), 0];
                  }
                  v2 = n3.indexOf(p2) > -1 ? Te : C3 ? Me : xe;
                  if (!i4 && u3) {
                    v2 = 0;
                  }
                  if (p2 !== w3 || !l3) {
                    a4[f3.toFixed(5)] = [p2, v2];
                  }
                  c2 = f3;
                }
              }
            });
            return a4;
          }
          function S2(e4, t2, r3) {
            function o3(e5, t3) {
              var r4 = t3 === n2.cssClasses.value;
              var o4 = r4 ? c2 : p2;
              var a5 = r4 ? u3 : l3;
              return t3 + " " + o4[n2.ort] + " " + a5[e5];
            }
            function a4(e5, a5, u4) {
              u4 = t2 ? t2(a5, u4) : u4;
              if (u4 !== Se) {
                var l4 = s2(i3, false);
                l4.className = o3(u4, n2.cssClasses.marker);
                l4.style[n2.style] = e5 + "%";
                if (u4 > xe) {
                  l4 = s2(i3, false);
                  l4.className = o3(u4, n2.cssClasses.value);
                  l4.setAttribute("data-value", a5);
                  l4.style[n2.style] = e5 + "%";
                  l4.innerHTML = r3.to(a5);
                }
              }
            }
            var i3 = Oe.createElement("div");
            var u3 = [];
            u3[xe] = n2.cssClasses.valueNormal;
            u3[Te] = n2.cssClasses.valueLarge;
            u3[Me] = n2.cssClasses.valueSub;
            var l3 = [];
            l3[xe] = n2.cssClasses.markerNormal;
            l3[Te] = n2.cssClasses.markerLarge;
            l3[Me] = n2.cssClasses.markerSub;
            var c2 = [n2.cssClasses.valueHorizontal, n2.cssClasses.valueVertical];
            var p2 = [n2.cssClasses.markerHorizontal, n2.cssClasses.markerVertical];
            h(i3, n2.cssClasses.pips);
            h(i3, n2.ort === 0 ? n2.cssClasses.pipsHorizontal : n2.cssClasses.pipsVertical);
            Object.keys(e4).forEach(function(t3) {
              a4(t3, e4[t3][0], e4[t3][1]);
            });
            return i3;
          }
          function x2() {
            if (fe) {
              t(fe);
              fe = null;
            }
          }
          function T2(e4) {
            x2();
            var t2 = e4.mode;
            var n3 = e4.density || 1;
            var r3 = e4.filter || false;
            var o3 = e4.values || false;
            var a4 = e4.stepped || false;
            var i3 = P2(t2, o3, a4);
            var s3 = k2(n3, t2, i3);
            var u3 = e4.format || {
              to: Math.round
            };
            return fe = ye.appendChild(S2(s3, r3, u3));
          }
          function M2() {
            var e4 = le.getBoundingClientRect();
            var t2 = "offset" + ["Width", "Height"][n2.ort];
            if (n2.ort === 0) {
              return e4.width || le[t2];
            } else {
              return e4.height || le[t2];
            }
          }
          function N2(e4, t2, r3, o3) {
            function a4(a5) {
              return !!(a5 = D2(a5, o3.pageOffset, o3.target || t2)) && (!ye.hasAttribute("disabled") || !!o3.doNotReject) && (!v(ye, n2.cssClasses.tap) || !!o3.doNotReject) && (e4 !== he.start || a5.buttons === void 0 || !(a5.buttons > 1)) && (!o3.hover || !a5.buttons) && (ve || a5.preventDefault(), a5.calcPoint = a5.points[n2.ort], void r3(a5, o3));
            }
            var i3 = [];
            e4.split(" ").forEach(function(e5) {
              t2.addEventListener(e5, a4, !!ve && {
                passive: true
              });
              i3.push([e5, a4]);
            });
            return i3;
          }
          function D2(e4, t2, n3) {
            var r3;
            var o3;
            var a4 = e4.type.indexOf("touch") === 0;
            var i3 = e4.type.indexOf("mouse") === 0;
            var s3 = e4.type.indexOf("pointer") === 0;
            if (e4.type.indexOf("MSPointer") === 0) {
              s3 = true;
            }
            if (a4) {
              let u3 = function(e5) {
                return e5.target === n3 || n3.contains(e5.target);
              };
              if (e4.type === "touchstart") {
                var l3 = Array.prototype.filter.call(e4.touches, u3);
                if (l3.length > 1) {
                  return false;
                }
                r3 = l3[0].pageX;
                o3 = l3[0].pageY;
              } else {
                var c2 = Array.prototype.find.call(e4.changedTouches, u3);
                if (!c2) {
                  return false;
                }
                r3 = c2.pageX;
                o3 = c2.pageY;
              }
            }
            t2 = t2 || y(Oe);
            if (i3 || s3) {
              r3 = e4.clientX + t2.x;
              o3 = e4.clientY + t2.y;
            }
            e4.pageOffset = t2;
            e4.points = [r3, o3];
            e4.cursor = i3 || s3;
            return e4;
          }
          function R2(e4) {
            var t2 = e4 - i2(le, n2.ort);
            var r3 = t2 * 100 / M2();
            r3 = p(r3);
            if (n2.dir) {
              return 100 - r3;
            } else {
              return r3;
            }
          }
          function A2(e4) {
            var t2 = 100;
            var n3 = false;
            ce.forEach(function(r3, o3) {
              if (!r3.hasAttribute("disabled")) {
                var a4 = Math.abs(ge[o3] - e4);
                if (a4 < t2 || a4 === 100 && t2 === 100) {
                  n3 = o3;
                  t2 = a4;
                }
              }
            });
            return n3;
          }
          function I2(e4, t2) {
            if (e4.type === "mouseout" && e4.target.nodeName === "HTML" && e4.relatedTarget === null) {
              L2(e4, t2);
            }
          }
          function j2(e4, t2) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && e4.buttons === 0 && t2.buttonsProperty !== 0) {
              return L2(e4, t2);
            }
            var r3 = (n2.dir ? -1 : 1) * (e4.calcPoint - t2.startCalcPoint);
            var o3 = r3 * 100 / t2.baseSize;
            G2(r3 > 0, o3, t2.locations, t2.handleNumbers);
          }
          function L2(e4, t2) {
            if (t2.handle) {
              m(t2.handle, n2.cssClasses.active);
              Ee -= 1;
            }
            t2.listeners.forEach(function(e5) {
              Pe.removeEventListener(e5[0], e5[1]);
            });
            if (Ee === 0) {
              m(ye, n2.cssClasses.drag);
              Q2();
              if (e4.cursor) {
                ke.style.cursor = "";
                ke.removeEventListener("selectstart", r2);
              }
            }
            t2.handleNumbers.forEach(function(e5) {
              q2("change", e5);
              q2("set", e5);
              q2("end", e5);
            });
          }
          function U2(e4, t2) {
            var o3;
            if (t2.handleNumbers.length === 1) {
              var a4 = ce[t2.handleNumbers[0]];
              if (a4.hasAttribute("disabled")) {
                return false;
              }
              o3 = a4.children[0];
              Ee += 1;
              h(o3, n2.cssClasses.active);
            }
            e4.stopPropagation();
            var i3 = [];
            var s3 = N2(he.move, Pe, j2, {
              target: e4.target,
              handle: o3,
              listeners: i3,
              startCalcPoint: e4.calcPoint,
              baseSize: M2(),
              pageOffset: e4.pageOffset,
              handleNumbers: t2.handleNumbers,
              buttonsProperty: e4.buttons,
              locations: ge.slice()
            });
            var u3 = N2(he.end, Pe, L2, {
              target: e4.target,
              handle: o3,
              listeners: i3,
              doNotReject: true,
              handleNumbers: t2.handleNumbers
            });
            var l3 = N2("mouseout", Pe, I2, {
              target: e4.target,
              handle: o3,
              listeners: i3,
              doNotReject: true,
              handleNumbers: t2.handleNumbers
            });
            i3.push.apply(i3, s3.concat(u3, l3));
            if (e4.cursor) {
              ke.style.cursor = getComputedStyle(e4.target).cursor;
              if (ce.length > 1) {
                h(ye, n2.cssClasses.drag);
              }
              ke.addEventListener("selectstart", r2, false);
            }
            t2.handleNumbers.forEach(function(e5) {
              q2("start", e5);
            });
          }
          function F2(e4) {
            e4.stopPropagation();
            var t2 = R2(e4.calcPoint);
            var r3 = A2(t2);
            return r3 !== false && (n2.events.snap || c(ye, n2.cssClasses.tap, n2.animationDuration), Z2(r3, t2, true, true), Q2(), q2("slide", r3, true), q2("update", r3, true), q2("change", r3, true), q2("set", r3, true), void (n2.events.snap && U2(e4, {
              handleNumbers: [r3]
            })));
          }
          function B2(e4) {
            var t2 = R2(e4.calcPoint);
            var n3 = we.getStep(t2);
            var r3 = we.fromStepping(n3);
            Object.keys(_e).forEach(function(e5) {
              if (e5.split(".")[0] === "hover") {
                _e[e5].forEach(function(e6) {
                  e6.call(de, r3);
                });
              }
            });
          }
          function V2(e4) {
            if (!e4.fixed) {
              ce.forEach(function(e5, t2) {
                N2(he.start, e5.children[0], U2, {
                  handleNumbers: [t2]
                });
              });
            }
            if (e4.tap) {
              N2(he.start, le, F2, {});
            }
            if (e4.hover) {
              N2(he.move, le, B2, {
                hover: true
              });
            }
            if (e4.drag) {
              pe.forEach(function(t2, r3) {
                if (t2 !== false && r3 !== 0 && r3 !== pe.length - 1) {
                  var o3 = ce[r3 - 1];
                  var a4 = ce[r3];
                  var i3 = [t2];
                  h(t2, n2.cssClasses.draggable);
                  if (e4.fixed) {
                    i3.push(o3.children[0]);
                    i3.push(a4.children[0]);
                  }
                  i3.forEach(function(e5) {
                    N2(he.start, e5, U2, {
                      handles: [o3, a4],
                      handleNumbers: [r3 - 1, r3]
                    });
                  });
                }
              });
            }
          }
          function W2(e4, t2) {
            _e[e4] = _e[e4] || [];
            _e[e4].push(t2);
            if (e4.split(".")[0] === "update") {
              ce.forEach(function(e5, t3) {
                q2("update", t3);
              });
            }
          }
          function H2(e4) {
            var t2 = e4 && e4.split(".")[0];
            var n3 = t2 && e4.substring(t2.length);
            Object.keys(_e).forEach(function(e5) {
              var r3 = e5.split(".")[0];
              var o3 = e5.substring(r3.length);
              if ((!t2 || t2 === r3) && (!n3 || n3 === o3)) {
                delete _e[e5];
              }
            });
          }
          function q2(e4, t2, r3) {
            Object.keys(_e).forEach(function(o3) {
              var a4 = o3.split(".")[0];
              if (e4 === a4) {
                _e[o3].forEach(function(e5) {
                  e5.call(de, Ce.map(n2.format.to), t2, Ce.slice(), r3 || false, ge.slice());
                });
              }
            });
          }
          function K2(e4) {
            return e4 + "%";
          }
          function z2(e4, t2, r3, o3, a4, i3) {
            if (ce.length > 1) {
              if (o3 && t2 > 0) {
                r3 = Math.max(r3, e4[t2 - 1] + n2.margin);
              }
              if (a4 && t2 < ce.length - 1) {
                r3 = Math.min(r3, e4[t2 + 1] - n2.margin);
              }
            }
            if (ce.length > 1 && n2.limit) {
              if (o3 && t2 > 0) {
                r3 = Math.min(r3, e4[t2 - 1] + n2.limit);
              }
              if (a4 && t2 < ce.length - 1) {
                r3 = Math.max(r3, e4[t2 + 1] - n2.limit);
              }
            }
            if (n2.padding) {
              if (t2 === 0) {
                r3 = Math.max(r3, n2.padding[0]);
              }
              if (t2 === ce.length - 1) {
                r3 = Math.min(r3, 100 - n2.padding[1]);
              }
            }
            r3 = we.getStep(r3);
            r3 = p(r3);
            return (r3 !== e4[t2] || !!i3) && r3;
          }
          function Y2(e4, t2) {
            var r3 = n2.ort;
            return (r3 ? t2 : e4) + ", " + (r3 ? e4 : t2);
          }
          function G2(e4, t2, n3, r3) {
            var o3 = n3.slice();
            var a4 = [!e4, e4];
            var i3 = [e4, !e4];
            r3 = r3.slice();
            if (e4) {
              r3.reverse();
            }
            if (r3.length > 1) {
              r3.forEach(function(e5, n4) {
                var r4 = z2(o3, e5, o3[e5] + t2, a4[n4], i3[n4], false);
                if (r4 === false) {
                  t2 = 0;
                } else {
                  t2 = r4 - o3[e5];
                  o3[e5] = r4;
                }
              });
            } else {
              a4 = i3 = [true];
            }
            var s3 = false;
            r3.forEach(function(e5, r4) {
              s3 = Z2(e5, n3[e5] + t2, a4[r4], i3[r4]) || s3;
            });
            if (s3) {
              r3.forEach(function(e5) {
                q2("update", e5);
                q2("slide", e5);
              });
            }
          }
          function X2(e4, t2) {
            if (n2.dir) {
              return 100 - e4 - t2;
            } else {
              return e4;
            }
          }
          function $3(e4, t2) {
            ge[e4] = t2;
            Ce[e4] = we.fromStepping(t2);
            var r3 = "translate(" + Y2(K2(X2(t2, 0) - Ne), "0") + ")";
            ce[e4].style[n2.transformRule] = r3;
            ee2(e4);
            ee2(e4 + 1);
          }
          function Q2() {
            be.forEach(function(e4) {
              var t2 = ge[e4] > 50 ? -1 : 1;
              var n3 = 3 + (ce.length + t2 * e4);
              ce[e4].style.zIndex = n3;
            });
          }
          function Z2(e4, t2, n3, r3) {
            t2 = z2(ge, e4, t2, n3, r3, false);
            return t2 !== false && ($3(e4, t2), true);
          }
          function ee2(e4) {
            if (pe[e4]) {
              var t2 = 0;
              var r3 = 100;
              if (e4 !== 0) {
                t2 = ge[e4 - 1];
              }
              if (e4 !== pe.length - 1) {
                r3 = ge[e4];
              }
              var o3 = r3 - t2;
              var a4 = "translate(" + Y2(K2(X2(t2, o3)), "0") + ")";
              var i3 = "scale(" + Y2(o3 / 100, "1") + ")";
              pe[e4].style[n2.transformRule] = a4 + " " + i3;
            }
          }
          function te2(e4, t2) {
            if (e4 === null || e4 === false || e4 === void 0) {
              return ge[t2];
            } else {
              if (typeof e4 == "number") {
                e4 = String(e4);
              }
              e4 = n2.format.from(e4);
              e4 = we.toStepping(e4);
              if (e4 === false || isNaN(e4)) {
                return ge[t2];
              } else {
                return e4;
              }
            }
          }
          function re2(e4, t2) {
            var r3 = d(e4);
            var o3 = ge[0] === void 0;
            t2 = t2 === void 0 || !!t2;
            if (n2.animate && !o3) {
              c(ye, n2.cssClasses.tap, n2.animationDuration);
            }
            be.forEach(function(e5) {
              Z2(e5, te2(r3[e5], e5), true, false);
            });
            be.forEach(function(e5) {
              Z2(e5, ge[e5], true, true);
            });
            Q2();
            be.forEach(function(e5) {
              q2("update", e5);
              if (r3[e5] !== null && t2) {
                q2("set", e5);
              }
            });
          }
          function oe(e4) {
            re2(n2.start, e4);
          }
          function ae() {
            var e4 = Ce.map(n2.format.to);
            if (e4.length === 1) {
              return e4[0];
            } else {
              return e4;
            }
          }
          function ie() {
            for (var e4 in n2.cssClasses) {
              if (n2.cssClasses.hasOwnProperty(e4)) {
                m(ye, n2.cssClasses[e4]);
              }
            }
            while (ye.firstChild) {
              ye.removeChild(ye.firstChild);
            }
            delete ye.noUiSlider;
          }
          function se() {
            return ge.map(function(e4, t2) {
              var n3 = we.getNearbySteps(e4);
              var r3 = Ce[t2];
              var o3 = n3.thisStep.step;
              var a4 = null;
              if (o3 !== false && r3 + o3 > n3.stepAfter.startValue) {
                o3 = n3.stepAfter.startValue - r3;
              }
              a4 = r3 > n3.thisStep.startValue ? n3.thisStep.step : n3.stepBefore.step !== false && r3 - n3.stepBefore.highestStep;
              if (e4 === 100) {
                o3 = null;
              } else if (e4 === 0) {
                a4 = null;
              }
              var i3 = we.countStepDecimals();
              if (o3 !== null && o3 !== false) {
                o3 = Number(o3.toFixed(i3));
              }
              if (a4 !== null && a4 !== false) {
                a4 = Number(a4.toFixed(i3));
              }
              return [a4, o3];
            });
          }
          function ue(e4, t2) {
            var r3 = ae();
            var o3 = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
            o3.forEach(function(t3) {
              if (e4[t3] !== void 0) {
                a3[t3] = e4[t3];
              }
            });
            var i3 = J(a3);
            o3.forEach(function(t3) {
              if (e4[t3] !== void 0) {
                n2[t3] = i3[t3];
              }
            });
            we = i3.spectrum;
            n2.margin = i3.margin;
            n2.limit = i3.limit;
            n2.padding = i3.padding;
            if (n2.pips) {
              T2(n2.pips);
            }
            ge = [];
            re2(e4.start || r3, t2);
          }
          var le;
          var ce;
          var pe;
          var de;
          var fe;
          var he = g();
          var me = E();
          var ve = me && b();
          var ye = e3;
          var ge = [];
          var be = [];
          var Ee = 0;
          var we = n2.spectrum;
          var Ce = [];
          var _e = {};
          var Oe = e3.ownerDocument;
          var Pe = n2.documentElement || Oe.documentElement;
          var ke = Oe.body;
          var Se = -1;
          var xe = 0;
          var Te = 1;
          var Me = 2;
          var Ne = Oe.dir === "rtl" || n2.ort === 1 ? 0 : 100;
          le = w2(ye);
          f2(n2.connect, le);
          V2(n2.events);
          re2(n2.start);
          de = {
            destroy: ie,
            steps: se,
            on: W2,
            off: H2,
            get: ae,
            set: re2,
            reset: oe,
            __moveHandles: function(e4, t2, n3) {
              G2(e4, t2, ge, n3);
            },
            options: a3,
            updateOptions: ue,
            target: ye,
            removePips: x2,
            pips: T2
          };
          if (n2.pips) {
            T2(n2.pips);
          }
          if (n2.tooltips) {
            _2();
          }
          O2();
          return de;
        }
        function te(e3, t2) {
          if (!e3 || !e3.nodeName) {
            throw new Error("noUiSlider (" + ne + "): create requires a single element, got: " + e3);
          }
          if (e3.noUiSlider) {
            throw new Error("noUiSlider (" + ne + "): Slider was already initialized.");
          }
          var n2 = J(t2, e3);
          var r3 = ee(e3, n2, t2);
          e3.noUiSlider = r3;
          return r3;
        }
        var ne = "12.0.0";
        N.prototype.getMargin = function(e3) {
          var t2 = this.xNumSteps[0];
          if (t2 && e3 / t2 % 1 !== 0) {
            throw new Error("noUiSlider (" + ne + "): 'limit', 'margin' and 'padding' must be divisible by step.");
          }
          return this.xPct.length === 2 && C(this.xVal, e3);
        };
        N.prototype.toStepping = function(e3) {
          return e3 = k(this.xVal, this.xPct, e3);
        };
        N.prototype.fromStepping = function(e3) {
          return S(this.xVal, this.xPct, e3);
        };
        N.prototype.getStep = function(e3) {
          return e3 = x(this.xPct, this.xSteps, this.snap, e3);
        };
        N.prototype.getNearbySteps = function(e3) {
          var t2 = P(e3, this.xPct);
          return {
            stepBefore: {
              startValue: this.xVal[t2 - 2],
              step: this.xNumSteps[t2 - 2],
              highestStep: this.xHighestCompleteStep[t2 - 2]
            },
            thisStep: {
              startValue: this.xVal[t2 - 1],
              step: this.xNumSteps[t2 - 1],
              highestStep: this.xHighestCompleteStep[t2 - 1]
            },
            stepAfter: {
              startValue: this.xVal[t2],
              step: this.xNumSteps[t2],
              highestStep: this.xHighestCompleteStep[t2]
            }
          };
        };
        N.prototype.countStepDecimals = function() {
          var e3 = this.xNumSteps.map(f);
          return Math.max.apply(null, e3);
        };
        N.prototype.convert = function(e3) {
          return this.getStep(this.toStepping(e3));
        };
        var re = {
          to: function(e3) {
            return e3 !== void 0 && e3.toFixed(2);
          },
          from: Number
        };
        return {
          __spectrum: N,
          version: ne,
          create: te
        };
      });
    }
  });

  // src/app/components/LandingHero.js
  var require_LandingHero = __commonJS({
    "src/app/components/LandingHero.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      function i(e2) {
        if (e2) {
          var t = (function() {
            var t2 = {
              max: e2.pop(),
              min: e2.shift()
            };
            var n = t2.max - t2.min;
            e2.forEach(function(e3) {
              var r2 = Math.round(e3 / n * 100) + "%";
              t2[r2] = e3;
            });
            return {
              v: {
                start: [100],
                snap: true,
                range: t2
              }
            };
          })();
          if (typeof t == "object") {
            return t.v;
          }
        }
        return {
          start: [100],
          step: 1,
          range: {
            min: [25],
            max: [165]
          }
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var s = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function u(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var l = require__152();
      var c = r(l);
      var p = require__222();
      var d = r(p);
      var f = require__188();
      var h = require__234();
      var m = (function(e2) {
        function t(e3) {
          o(this, t);
          u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.state = {
            isModalOpen: false
          };
        }
        a(t, e2);
        s(t, [{
          key: "setupSlider",
          value: function(e3) {
            var t2 = this.refs.tempoSlider;
            if (e3 && e3.destroy && t2.noUiSlider) {
              t2.noUiSlider.destroy();
            }
            h.create(t2, i(this.props.tempoValues));
            var n = function(e4) {
              this.props.onSetSpeed(parseInt(e4));
            }.bind(this);
            t2.noUiSlider.on("slide", n);
            t2.noUiSlider.on("set", n);
          }
        }, {
          key: "componentDidMount",
          value: function() {
            this.setupSlider();
          }
        }, {
          key: "componentDidUpdate",
          value: function(e3, t2) {
            if (this.props.speed !== parseInt(this.refs.tempoSlider.noUiSlider.get())) {
              this.refs.tempoSlider.noUiSlider.set(this.props.speed);
            }
            if (e3.tempoValues !== this.props.tempoValues) {
              this.setupSlider({
                destroy: true
              });
            }
          }
        }, {
          key: "closeModal",
          value: function() {
            this.setState({
              isModalOpen: false
            });
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = this.props.speed + "%";
            return c.default.createElement("div", {
              className: "group",
              style: {
                display: (0, f.display)(this.props.visible)
              }
            }, c.default.createElement("span", {
              style: {
                marginLeft: "-1em"
              },
              className: "flashicon emboss"
            }, "Slow"), c.default.createElement("div", {
              ref: "tempoSlider",
              id: "tempo-slider"
            }), c.default.createElement("span", {
              className: "flashicon emboss",
              style: {
                marginRight: "-1em"
              }
            }, "Fast"), c.default.createElement("span", {
              className: "flashicon emboss",
              style: {
                marginRight: "-2.25em",
                float: "none"
              }
            }, "Faster"), c.default.createElement("div", {
              style: {
                paddingTop: ".25em"
              }
            }, c.default.createElement("span", null, t2), c.default.createElement("br", null), c.default.createElement("a", {
              href: "#",
              className: "youtube-visible",
              style: {
                fontSize: ".7em"
              },
              onClick: function() {
                return e3.setState({
                  isModalOpen: true
                });
              }
            }, "Why are these speeds limited?")), c.default.createElement(d.default, {
              isOpen: this.state.isModalOpen,
              onRequestClose: function() {
                return e3.closeModal();
              },
              className: "Modal__Bootstrap modal-dialog modal-sm"
            }, c.default.createElement("div", {
              className: "modal-content"
            }, c.default.createElement("div", {
              className: "modal-header"
            }, c.default.createElement("button", {
              type: "button",
              className: "close",
              onClick: function() {
                return e3.closeModal();
              }
            }, "\xD7"), c.default.createElement("h4", {
              className: "modal-title"
            }, "Why these speeds only?")), c.default.createElement("div", {
              className: "modal-body"
            }, c.default.createElement("p", null, "YouTube determines the playback speeds available for each video. Typically, videos are restricted to 50%, 100%, and 125% playback speeds."), c.default.createElement("p", null, "However, if you load an MP3, you have the flexibility to play it at much slower speeds, allowing for greater control over the playback speed. Simply load an MP3 to experience this expanded range of speeds."), c.default.createElement("p", {
              className: "text-right"
            }, c.default.createElement("button", {
              className: "btn btn-primary",
              onClick: function() {
                e3.closeModal();
                e3.props.onChooseAudio();
              }
            }, "Load an MP3"))))));
          }
        }]);
        return t;
      })(c.default.Component);
      exports.default = m;
      module.exports = exports.default;
    }
  });

  // src/generated/140.js
  var require__235 = __commonJS({
    "src/generated/140.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      function i(e2) {
        return {
          start: [100],
          step: 1,
          range: {
            min: [1],
            max: [100]
          }
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var s = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function u(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var l = require__152();
      var c = r(l);
      var p = require__222();
      r(p);
      var d = require__188();
      var f = require__234();
      var h = (function(e2) {
        function t() {
          o(this, t);
          u(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        a(t, e2);
        s(t, [{
          key: "setupSlider",
          value: function(e3) {
            var t2 = this.refs.tempoSlider;
            if (e3 && e3.destroy && t2.noUiSlider) {
              t2.noUiSlider.destroy();
            }
            f.create(t2, i());
            var n = function(e4) {
              this.props.onSetVolume(parseInt(e4));
            }.bind(this);
            t2.noUiSlider.on("slide", n);
            t2.noUiSlider.on("set", n);
          }
        }, {
          key: "componentDidMount",
          value: function() {
            this.setupSlider();
          }
        }, {
          key: "componentDidUpdate",
          value: function(e3, t2) {
            if (this.props.volume !== parseInt(this.refs.tempoSlider.noUiSlider.get())) {
              this.refs.tempoSlider.noUiSlider.set(this.props.volume);
            }
            if (e3.tempoValues !== this.props.tempoValues) {
              this.setupSlider({
                destroy: true
              });
            }
          }
        }, {
          key: "render",
          value: function() {
            return c.default.createElement("div", {
              className: "group",
              style: {
                display: (0, d.display)(this.props.visible)
              }
            }, c.default.createElement("div", {
              ref: "tempoSlider",
              id: "tempo-slider"
            }), c.default.createElement("div", {
              style: {
                paddingTop: ".25em"
              }
            }, "Volume"));
          }
        }]);
        return t;
      })(c.default.Component);
      exports.default = h;
      module.exports = exports.default;
    }
  });

  // src/generated/138.js
  var require__236 = __commonJS({
    "src/generated/138.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require__188();
      var p = (function(e2) {
        function t() {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        a(t, e2);
        i(t, [{
          key: "shouldComponentUpdate",
          value: function(e3, t2) {
            return this.props.width !== e3.width || this.props.duration !== e3.duration;
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = [];
            var n = [0.1, 0.25, 0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 1200];
            var r2 = 75;
            var o2 = this.props.width / r2;
            var a2 = null;
            if (this.props.duration) {
              a2 = n.filter(function(t3) {
                return e3.props.duration / t3 <= o2;
              })[0];
              var t2 = [];
              for (var i2 = a2; i2 < this.props.duration; i2 += a2) {
                t2.push(i2);
              }
            }
            var s2 = t2.map(function(t3) {
              var n2 = t3 * (e3.props.width / e3.props.duration);
              var r3 = (0, c.formatTime)(t3, a2 <= 1);
              return l.default.createElement("div", {
                key: t3,
                className: "time-tick",
                style: {
                  left: n2
                }
              }, l.default.createElement("label", null, r3));
            });
            return l.default.createElement("div", {
              className: this.props.className,
              id: this.props.id,
              style: {
                width: this.props.width
              }
            }, s2);
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = p;
      module.exports = exports.default;
    }
  });

  // src/generated/141.js
  var require__237 = __commonJS({
    "src/generated/141.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.averages = [];
        }
        a(t, e2);
        i(t, [{
          key: "componentDidMount",
          value: function() {
            this.canvas = this.refs.canvas;
            this.waveform = this.canvas.getContext("2d");
            this.drawBuffer();
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e3) {
            if (e3.audioBuffer !== this.props.audioBuffer) {
              this.onAudioBufferChanged(e3.audioBuffer);
            }
          }
        }, {
          key: "shouldComponentUpdate",
          value: function(e3) {
            return e3.audioBuffer !== this.props.audioBuffer || e3.width !== this.props.width || e3.height !== this.props.height;
          }
        }, {
          key: "componentDidUpdate",
          value: function(e3, t2) {
            this.drawBuffer();
          }
        }, {
          key: "shadeColor",
          value: function(e3, t2) {
            var n = parseInt(e3.slice(1), 16);
            var r2 = Math.round(t2 * 2.55);
            var o2 = (n >> 16) + r2;
            var a2 = (n >> 8 & 255) + r2;
            var i2 = (n & 255) + r2;
            return "#" + (16777216 + (o2 < 255 ? o2 < 1 ? 0 : o2 : 255) * 65536 + (a2 < 255 ? a2 < 1 ? 0 : a2 : 255) * 256 + (i2 < 255 ? i2 < 1 ? 0 : i2 : 255)).toString(16).slice(1);
          }
        }, {
          key: "waveformColor",
          value: function() {
            if (!this.gradient) {
              var e3 = this.shadeColor("#181C39", 10);
              var t2 = this.shadeColor(e3, -10);
              this.gradient = this.waveform.createLinearGradient(0, 0, 0, this.canvas.offsetHeight);
              this.gradient.addColorStop(0, e3);
              this.gradient.addColorStop(1, t2);
            }
            return this.gradient;
          }
        }, {
          key: "drawBuffer",
          value: function() {
            var e3 = this.props.audioBuffer;
            if (e3) {
              var t2 = this.canvas.offsetHeight / 2;
              var n = 1.5;
              var r2 = this.waveform;
              r2.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
              r2.fillStyle = this.waveformColor();
              r2.lineWidth = 1;
              this.reduce(this.averages, this.canvas.offsetWidth, function(e4, o2, a2) {
                var i2 = a2 * t2 * n;
                var s2 = o2 * t2 * -1 * n;
                var u2 = t2 - i2;
                var l2 = i2 + s2;
                r2.fillRect(e4, u2, 1, l2);
              });
            }
          }
        }, {
          key: "onAudioBufferChanged",
          value: function(e3) {
            if (e3 && e3.getChannelData) {
              var t2 = e3.getChannelData(0);
              var n = this.canvas.offsetWidth * 20;
              var r2 = this.averages;
              r2.length = 0;
              var o2 = 0;
              this.reduce(t2, n, function(e4, t3, n2) {
                r2.push(t3);
                r2.push(n2);
                o2 = Math.max(Math.max(o2, n2), -t3);
              }, true);
              this.maxAmp = o2;
            }
          }
        }, {
          key: "reduce2",
          value: function(e3, t2, n) {
            var r2 = Math.ceil(e3.length / t2);
            for (var o2 = Math.ceil(e3.length / r2), a2 = 0, i2 = 0; i2 < o2; i2++) {
              var s2 = 0;
              var u2 = 0;
              var l2 = 0;
              var c2 = 0;
              var p = 0;
              var d = 0;
              for (var f = 0; f < r2; f++) {
                var h = e3[a2];
                if (h < 0) {
                  s2 = h < s2 ? h : s2;
                  l2++;
                  p += h;
                } else {
                  u2 = h > u2 ? h : u2;
                  c2++;
                  d += h;
                }
                a2++;
              }
              n(i2, s2, u2);
            }
          }
        }, {
          key: "reduce",
          value: function(e3, t2, n, r2) {
            var o2 = e3.length / t2;
            for (var a2 = 0; a2 < t2; a2++) {
              var i2 = 0;
              var s2 = 0;
              var u2 = 0;
              var l2 = 0;
              var c2 = 0;
              var p = 0;
              for (var d = 0; d < o2; d++) {
                var f = e3[Math.round(a2 * o2 + d)];
                if (f < 0) {
                  i2 = f < i2 ? f : i2;
                  u2++;
                  c2 += f;
                } else {
                  s2 = f > s2 ? f : s2;
                  l2++;
                  p += f;
                }
              }
              n(a2, c2 / u2 || 0, p / l2 || 0);
            }
          }
        }, {
          key: "render",
          value: function() {
            return l.default.createElement("canvas", {
              ref: "canvas",
              width: this.props.width,
              className: this.props.className,
              style: {
                top: 0,
                bottom: "18px"
              },
              height: this.props.height,
              id: "waveform-data"
            });
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = c;
      module.exports = exports.default;
    }
  });

  // src/generated/142.js
  var require__238 = __commonJS({
    "src/generated/142.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.onZoom = e3.onZoom || function() {
          };
        }
        a(t, e2);
        i(t, [{
          key: "render",
          value: function() {
            var e3 = this;
            return l.default.createElement("div", {
              className: "btn-group btn-group-sm pull-right"
            }, l.default.createElement("button", {
              type: "button",
              onClick: function() {
                return e3.onZoom("out");
              },
              className: "btn btn-default"
            }, String.fromCharCode(8722)), l.default.createElement("button", {
              type: "button",
              className: "btn btn-default",
              onClick: function() {
                return e3.onZoom(1);
              }
            }, "Zoom"), l.default.createElement("button", {
              type: "button",
              onClick: function() {
                return e3.onZoom("in");
              },
              className: "btn btn-default"
            }, String.fromCharCode(43)));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = c;
      module.exports = exports.default;
    }
  });

  // src/generated/120.js
  var require__239 = __commonJS({
    "src/generated/120.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          this.state = {
            placementId: null
          };
        }
        a(t, e2);
        i(t, [{
          key: "componentDidMount",
          value: function() {
            if (window.CHITIKA === void 0) {
              window.CHITIKA = {
                units: []
              };
            }
            var e3 = {
              calltype: "async[2]",
              publisher: "portnine",
              width: 300,
              height: 600,
              sid: "Chitika Default"
            };
            var t2 = window.CHITIKA.units.length;
            window.CHITIKA.units.push(e3);
            this.setState({
              placementId: t2
            });
            setTimeout(function() {
              var e4 = document.createElement("script");
              e4.src = "//cdn.chitika.net/getads.js";
              e4.async = true;
              document.body.appendChild(e4);
            }, 500);
          }
        }, {
          key: "render",
          value: function() {
            if (this.state.placementId === null) {
              return l.default.createElement("div", {
                "data-blar2": "234"
              });
            } else {
              return l.default.createElement("div", null, l.default.createElement("script", {
                type: "text/javascript",
                src: "",
                async: true
              }), l.default.createElement("div", {
                "data-blar": "1234",
                id: "chitikaAdBlock-" + this.state.placementId
              }));
            }
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = c;
      module.exports = exports.default;
    }
  });

  // src/app/actions/audioActions.js
  var require_audioActions = __commonJS({
    "src/app/actions/audioActions.js"(exports) {
      function n() {
        return {
          type: "audioLoading"
        };
      }
      function r(e2) {
        return {
          type: "audioLoaded",
          dataHash: e2
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.audioLoading = n;
      exports.audioLoaded = r;
    }
  });

  // src/generated/65.js
  var require__240 = __commonJS({
    "src/generated/65.js"(exports) {
      function n() {
        return {
          type: "saveLoop"
        };
      }
      function r(e2) {
        return {
          type: "removeLoop",
          id: e2
        };
      }
      function o(e2, t) {
        return {
          type: "setLoop",
          start: e2,
          end: t
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.saveLoop = n;
      exports.removeLoop = r;
      exports.setLoop = o;
    }
  });

  // src/app/actions/markActions.js
  var require_markActions = __commonJS({
    "src/app/actions/markActions.js"(exports) {
      function n() {
        return {
          type: "addMark",
          markType: "mark"
        };
      }
      function r() {
        return {
          type: "addMark",
          markType: "beat"
        };
      }
      function o(e2) {
        return {
          type: "removeMark",
          id: e2
        };
      }
      function a(e2, t) {
        var n2 = t.markedForDeletion;
        var r2 = t.time;
        var o2 = t.label;
        return {
          type: "updateMark",
          id: e2,
          time: r2,
          label: o2,
          markedForDeletion: n2
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addMark = n;
      exports.addBeat = r;
      exports.removeMark = o;
      exports.updateMark = a;
    }
  });

  // src/app/actions/playbackActions.js
  var require_playbackActions = __commonJS({
    "src/app/actions/playbackActions.js"(exports) {
      function r(e2) {
        return function(t, n) {
          if (!["gold", "silver"].includes(n().auth.plan) && e2 < 50) {
            t(r(50));
            t((0, p.gatherRegistration)("Slow down to 25% and more!"));
            return;
          } else {
            t({
              type: "setTempo",
              tempo: e2
            });
            return;
          }
        };
      }
      function o(e2) {
        return {
          type: "changeFile",
          filename: e2
        };
      }
      function a(e2) {
        return {
          type: "setPlaybackTime",
          time: e2
        };
      }
      function i(e2, t) {
        return {
          type: "setPitch",
          amount: e2,
          value: t
        };
      }
      function s(e2) {
        return {
          type: "setVolume",
          volume: e2
        };
      }
      function u(e2, t) {
        return function(n, r2) {
          if (["gold"].includes(r2().auth.plan)) {
            n({
              type: "changePitch",
              amount: e2,
              value: t
            });
            return;
          } else {
            n((0, p.gatherRegistration)("Change pitch and more!"));
            return;
          }
        };
      }
      function l(e2) {
        return function(t, n) {
          if (["gold", "silver"].includes(n().auth.plan)) {
            t({
              type: "setDelay",
              seconds: e2
            });
            return;
          } else {
            t((0, p.gatherRegistration)("Delay start and more!"));
            return;
          }
        };
      }
      function c(e2) {
        return {
          type: "changePlayStatus",
          isPlaying: e2
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.setTempo = r;
      exports.changeFile = o;
      exports.setPlaybackTime = a;
      exports.setPitch = i;
      exports.setVolume = s;
      exports.changePitch = u;
      exports.setDelay = l;
      exports.changePlayStatus = c;
      var p = require__227();
    }
  });

  // src/app/actions/zoomActions.js
  var require_zoomActions = __commonJS({
    "src/app/actions/zoomActions.js"(exports) {
      function n(e2) {
        return {
          type: "setZoom",
          level: e2
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.zoom = n;
    }
  });

  // src/generated/66.js
  var require__241 = __commonJS({
    "src/generated/66.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2) {
        return function(t) {
          t(h(e2));
          return fetch((0, l.getServerUrl)("/workspace/" + e2), {
            credentials: "include",
            headers: {
              Authorization: "Bearer " + (0, f.default)().getToken().token
            }
          }).then(function(e3) {
            return e3.json();
          }).then(function(e3) {
            return t(y(e3.id, e3));
          });
        };
      }
      function a(e2) {
        var t = JSON.parse(JSON.stringify(e2));
        delete t.workspace;
        delete t.auth;
        delete t.audio;
        delete t.playback.isPlaying;
        return t;
      }
      function i(e2, t) {
        return function(n) {
          if (e2 && t && e2.audio && e2.audio.dataHash) {
            var r2 = a(e2);
            var o2 = a(t);
            var i2 = !t.auth.isLoggedIn && e2.auth.isLoggedIn;
            var u2 = Object.keys(r2).some(function(e3) {
              return JSON.stringify(r2[e3]) !== JSON.stringify(o2[e3]);
            });
            if (u2 || i2) {
              n(m());
              if (e2.auth.isLoggedIn) {
                s(n, e2.audio.dataHash, r2, i2);
              }
            }
          }
        };
      }
      function s(e2, t, n) {
        var r2 = !(arguments.length <= 3) && arguments[3] !== void 0 && arguments[3];
        if (r2) {
          e2(u(t, n));
        } else {
          g(e2, t, n);
        }
      }
      function u(e2, t) {
        return function(n) {
          if (e2) {
            return fetch((0, l.getServerUrl)("/workspace/" + e2), {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + (0, f.default)().getToken().token
              },
              credentials: "include",
              method: "POST",
              body: JSON.stringify(t)
            }).then(function(e3) {
              if (e3.ok) {
                n(v());
              } else {
                n((0, p.logout)());
                n((0, p.gatherCredentials)());
              }
            });
          }
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadWorkspace = o;
      exports.updateWorkspace = i;
      var l = require__189();
      var c = require__188();
      var p = require__227();
      var d = require__226();
      var f = r(d);
      var h = (0, c.makeAction)("requestWorkspace", "parent");
      exports.requestWorkspace = h;
      var m = (0, c.makeAction)("workspaceDirty");
      var v = (0, c.makeAction)("workspaceSynced");
      var y = (0, c.makeAction)("receiveWorkspace", "id", "data");
      var g = (0, c.debounce)(function(e2, t, n) {
        e2(u(t, n));
      }, 3e3);
    }
  });

  // src/app/App.js
  var require_App = __commonJS({
    "src/app/App.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        }
        var t = {};
        if (e2 != null) {
          for (var n in e2) {
            if (Object.prototype.hasOwnProperty.call(e2, n)) {
              t[n] = e2[n];
            }
          }
        }
        t.default = e2;
        return t;
      }
      function o(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function a(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function i(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      function s(e2) {
        return {
          auth: e2.auth,
          zoom: e2.zoom,
          audio: e2.audio,
          loops: e2.loops,
          workspace: e2.workspace,
          playback: e2.playback,
          marks: e2.marks.marks
        };
      }
      function u() {
        var e2 = this;
        var t = typeof window !== void 0 && l("file");
        if (t) {
          var n = decodeURIComponent(l("title")) || "Audio File";
          var r2 = l("partner");
          var o2 = l("pid");
          var a2 = l("proxy");
          var i2 = c(r2);
          var s2 = c(t, i2 * 99);
          var u2 = a2 ? (0, w.getServerUrl)("/partner?u=" + t) : t;
          if (s2 != o2) {
            console.log("Song check id is not valid", s2, o2);
            return;
          }
          window.history.pushState(null, "", window.location.href.split("?")[0]);
          fetch(u2).then(function(e3) {
            return e3.blob();
          }).then(function(t2) {
            return e2.loadFile(n, new P.default(t2));
          });
        }
      }
      function l(e2) {
        var t = new RegExp("[?&]" + e2 + "=([^&#]*)", "i");
        var n = t.exec(window.location.href);
        if (n) {
          return n[1];
        } else {
          return null;
        }
      }
      function c(e2) {
        var t = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1];
        var n = t;
        for (var r2 = 0; r2 < e2.length; r2++) {
          n += e2.charCodeAt(r2);
        }
        return n;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var p = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function d(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var f = require__152();
      var h = o(f);
      require__172();
      var m = require__184();
      var v = require__185();
      var y = o(v);
      var g = require__188();
      var b = require_PlaybackController();
      var E = o(b);
      var w = require__189();
      var C = require__190();
      var _ = o(C);
      var O = require_Mp3AudioSystem();
      var P = o(O);
      var k = require_YoutubeAudioSystem();
      var S = o(k);
      var x = require_Landing();
      var T = o(x);
      var M = require__192();
      var N = o(M);
      var D = require__200();
      var R = o(D);
      var A = require__201();
      var I = o(A);
      var j = require__223();
      var L = o(j);
      var U = require__228();
      var F = o(U);
      var B = require__229();
      var V = o(B);
      var W = require_MarkPanel();
      var H = o(W);
      var q = require_MouseEventLayer();
      var K = o(q);
      var z = require__232();
      var Y = o(z);
      var G = require_Toolbar();
      var X = o(G);
      var $2 = require_WaveformPosition();
      var Q = o($2);
      var Z = require_WaveformSelection();
      var J = o(Z);
      var ee = require_DownloadLoopDialog();
      var te = o(ee);
      var ne = require_LandingHero();
      var re = o(ne);
      var oe = require__235();
      var ae = o(oe);
      var ie = require__236();
      var se = o(ie);
      var ue = require__237();
      var le = o(ue);
      var ce = require__238();
      var pe = o(ce);
      var de = require__239();
      var fe = o(de);
      var he = require_audioActions();
      var me = r(he);
      var ve = require__240();
      var ye = r(ve);
      var ge = require_markActions();
      var be = r(ge);
      var Ee = require_playbackActions();
      var we = r(Ee);
      var Ce = require_zoomActions();
      var _e = r(Ce);
      var Oe = require__241();
      var Pe = r(Oe);
      var ke = require__227();
      var Se = r(ke);
      var xe = require__226();
      var Te = o(xe);
      var Me = (function(e2) {
        function t(e3) {
          var n = this;
          a(this, t);
          d(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          var r2 = this.props.dispatch;
          this.setupHotkeys();
          this.player = E.default;
          this.state = {
            width: 0,
            adjustMode: "tempo"
          };
          this.player.onAudioBufferChanged = function() {
            r2(me.audioLoaded(n.player.getDataHash()));
            if (n.props.auth.isLoggedIn) {
              r2(Pe.loadWorkspace(n.props.audio.dataHash));
            }
          };
          this.player.onStatusChanged = function(e4) {
            r2(we.changePlayStatus(e4));
            clearInterval(n.playInterval);
            if (e4) {
              n.playInterval = setInterval(function() {
                return n.repositionScroll();
              }, 1e3);
            }
          };
          if (typeof window != "undefined") {
            window.addEventListener("storage", function(e4) {
              var t2 = (0, Te.default)().getToken();
              var n2 = t2.token;
              var o2 = t2.plan;
              if (n2) {
                r2(Se.completeLogin(null, n2, o2));
                r2(Pe.loadWorkspace(this.props.audio.dataHash));
              }
            }, false);
          }
        }
        i(t, e2);
        p(t, [{
          key: "componentDidMount",
          value: function() {
            var e3 = this;
            (0, y.default)();
            var t2 = typeof window !== void 0 && window.location.href.indexOf("loadFake") >= 0;
            if (t2) {
              var n = new _.default();
              var r2 = new P.default(n);
              this.loadFile("Test Song", r2);
              r2.onAudioBufferChanged(n);
            }
            u.call(this);
            var o2 = typeof document != "undefined" ? document.body.offsetWidth : 0;
            this.setState({
              width: o2
            });
            (0, Te.default)().getAuthStatus().then(function(t3) {
              if (t3.plan) {
                var n2 = e3.props.dispatch;
                n2(Se.completeLogin(null, t3.token, t3.plan));
              }
            });
          }
        }, {
          key: "componentDidUpdate",
          value: function(e3, t2) {
            if (this.player.audioBuffer) {
              var n = this.props.loops.currentLoop;
              var r2 = this.player.currentLoop;
              var o2 = this.player.audioBuffer.duration;
              r2.start = n.start * o2;
              r2.end = n.end * o2 || null;
            }
            if (this.player.pitchVals !== this.props.playback.pitch) {
              this.player.pitchVals = this.props.playback.pitch;
              this.player.updatePitch();
            }
            if (this.player.volume !== this.props.playback.volume) {
              this.player.volume = this.props.playback.volume;
              this.player.updateVolume();
            }
            if (this.props.zoom.level !== e3.zoom.level) {
              this.repositionScroll();
            }
            if (this.props.auth.isGatheringCredentials && !e3.auth.isGatheringCredentials) {
              var a2 = this.props.dispatch;
              a2(Se.beginLogin());
              (0, Te.default)().login();
            }
            this.player.delay = this.props.playback.delay;
            this.player.speed = this.props.playback.tempo;
            if (this.props.audio.status === "loaded" && e3.audio.status !== "loaded") {
              ga("send", "event", "audio", "loaded", this.player.audioSystem.type);
            }
          }
        }, {
          key: "seekToPlaybackTime",
          value: function(e3) {
            var t2 = this.player.audioBuffer.duration * e3;
            this.player.seek(t2);
            this.props.dispatch(we.setPlaybackTime(t2));
          }
        }, {
          key: "setupHotkeys",
          value: function() {
            var e3 = this;
            if (typeof g.key != "undefined") {
              var t2 = this.props.dispatch;
              (0, g.key)("space", function() {
                return e3.player.playPause();
              });
              (0, g.key)("r", function() {
                return e3.player.play(true, true);
              });
              (0, g.key)("p", function() {
                return e3.player.playPause();
              });
              (0, g.key)("m", function() {
                return t2(be.addMark());
              });
              (0, g.key)("b", function() {
                return t2(be.addBeat());
              });
              (0, g.key)("l", function() {
                return t2(ye.saveLoop());
              });
            }
          }
        }, {
          key: "showLoopSaveDialog",
          value: function() {
            this.saveLoopDialog.show();
          }
        }, {
          key: "onChooseVideo",
          value: function() {
            this.player.pause();
            var e3 = window.prompt("Enter a YouTube URL", "https://www.youtube.com/watch?v=TLV4_xaYynY");
            if (e3) {
              this.player.load(new S.default(e3));
              document.body.classList.add("youtube");
              document.body.classList.remove("audio-not-loaded");
              document.body.classList.add("audio-loaded");
              ga("send", "event", "audio", "select", "youtube");
            }
          }
        }, {
          key: "onChooseAudio",
          value: function() {
            this.player.pause();
            if (this.player.loaded) {
              window.location.reload();
              return;
            } else {
              document.getElementById("files").click();
              document.body.classList.remove("youtube");
              ga("send", "event", "audio", "select", "mp3");
              return;
            }
          }
        }, {
          key: "handleFileSelect",
          value: function(e3) {
            if (this.checkSupport()) {
              var t2 = (e3.target.files || e3.dataTransfer.files)[0];
              if (t2) {
                this.loadFile(t2.name, new P.default(t2));
              }
            }
          }
        }, {
          key: "loadFile",
          value: function(e3, t2) {
            this.player.load(t2);
            this.props.dispatch(we.changeFile(e3));
            this.props.dispatch(me.audioLoading());
          }
        }, {
          key: "checkSupport",
          value: function() {
            var e3 = true;
            var t2 = window.console || {
              log: function() {
              }
            };
            if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
              t2.log("The File APIs are not fully supported in this browser.");
              e3 = false;
            }
            if (!window.AudioContext) {
              t2.log("The Audio APIs are not fully supported in this browser.");
              e3 = false;
            }
            if (!e3) {
              this.setState({
                browserSupported: false
              });
            }
            return e3;
          }
        }, {
          key: "timeFromDecimal",
          value: function(e3) {
            var t2 = (this.player.audioBuffer || {}).duration;
            var n = e3 * t2;
            return n || 0;
          }
        }, {
          key: "removeMark",
          value: function(e3) {
            this.props.dispatch(be.removeMark(e3));
          }
        }, {
          key: "getMarkCards",
          value: function(e3) {
            var t2 = this;
            if (this.props.marks.length) {
              return this.props.marks.filter(function(t3) {
                return t3.type == e3;
              }).map(function(n) {
                return {
                  title: e3 == "mark" ? "Mark" : "Beat",
                  key: n.id,
                  line1: n.label,
                  line2: (0, g.formatTime)(t2.timeFromDecimal(n.time), e3 == "beat"),
                  remove: function() {
                    return t2.removeMark(n.id);
                  },
                  select: function() {
                    return t2.seekToPlaybackTime(n.time);
                  },
                  className: e3
                };
              });
            } else {
              return [];
            }
          }
        }, {
          key: "getLoopCards",
          value: function() {
            var e3 = this;
            var t2 = this.props.dispatch;
            return this.props.loops.loops.map(function(n) {
              return {
                title: "Loop",
                key: n.id,
                line1: (0, g.formatTime)(e3.timeFromDecimal(n.start), false) + String.fromCharCode(8212) + (0, g.formatTime)(e3.timeFromDecimal(n.end), false),
                remove: function() {
                  return t2(ye.removeLoop(n.id));
                },
                select: function() {
                  t2(ye.setLoop(n.start, n.end));
                },
                className: "loop"
              };
            });
          }
        }, {
          key: "showRegister",
          value: function(e3) {
            this.props.dispatch(Se.gatherRegistration(e3));
          }
        }, {
          key: "downloadLoopOrDisplay",
          value: function() {
            if (["gold", "silver"].includes(this.props.auth.plan)) {
              this.setState({
                isSavingLoop: true
              });
              return;
            } else {
              return this.showRegister("Save to MP3 and more!");
            }
          }
        }, {
          key: "repositionScroll",
          value: function() {
            if (this.player.loaded) {
              var e3 = this.player.currentTime / this.player.audioBuffer.duration * (document.body.offsetWidth * this.props.zoom.level);
              var t2 = this.refs["scroll-container"];
              var n = t2.scrollLeft;
              var r2 = t2.offsetWidth;
              var o2 = n + r2 - 100 < e3;
              var a2 = n > e3;
              if (o2 || a2) {
                t2.scrollLeft = e3 - r2 * 0.2;
              }
            }
          }
        }, {
          key: "render",
          value: function() {
            var e3 = this;
            var t2 = this.props.dispatch;
            function n(e4) {
              return function() {
                return t2(e4.apply(void 0, arguments));
              };
            }
            var r2 = this.props.audio.status;
            var o2 = this.state.width;
            var a2 = o2 * this.props.zoom.level;
            var i2 = this.getMarkCards("mark");
            var s2 = this.getMarkCards("beat");
            var u2 = this.getLoopCards();
            var l2 = !i2.length && !s2.length && !u2.length;
            var c2 = false;
            var p2 = (0, g.classList)({
              "page-wrap": true,
              "audio-loading": r2 === "loading",
              "audio-loaded": r2 === "loaded",
              "audio-not-loaded": r2 !== "loaded"
            });
            var d2 = null;
            var f2 = 224;
            var m2 = 0;
            var v2 = 0;
            var y2 = ["gold", "silver"].includes(this.props.auth.plan);
            h.default.createElement("div", {
              className: "ad visible-audio-loaded"
            }, h.default.createElement(fe.default, null));
            if (this.player.loaded) {
              if (this.player.audioSystem.type === "youtube") {
                f2 = 56;
              }
              d2 = this.player.audioSystem.getTempoValues();
              m2 = this.player.audioBuffer.duration;
              v2 = this.player.currentTime;
              c2 = this.player.audioSystem.canDownloadLoop;
            }
            return h.default.createElement("div", {
              className: p2
            }, h.default.createElement(N.default, {
              onChooseAudio: function(t3) {
                return e3.onChooseAudio();
              },
              onFileSelect: function(t3) {
                return e3.handleFileSelect(t3);
              },
              isLoggedIn: this.props.auth.isLoggedIn,
              onLogin: function() {
                return t2(Se.gatherCredentials());
              },
              onLogout: function() {
                return t2(Se.logout());
              },
              onHelp: function() {
                return e3.setState({
                  isHelpOpen: true
                });
              }
            }), h.default.createElement(V.default, {
              isOpen: this.state.isHelpOpen === true,
              onClose: function() {
                return e3.setState({
                  isHelpOpen: false
                });
              }
            }), h.default.createElement(T.default, {
              onChooseAudio: function(t3) {
                return e3.onChooseAudio();
              },
              onChooseVideo: function(t3) {
                return e3.onChooseVideo();
              },
              onDropFile: function(t3) {
                return e3.handleFileSelect(t3);
              }
            }), h.default.createElement("div", {
              id: "player",
              className: "visible-audio-loaded",
              style: {
                marginLeft: 0
              }
            }, h.default.createElement("div", {
              className: "inner-container"
            }, h.default.createElement(pe.default, {
              onZoom: function(e4) {
                return t2(_e.zoom(e4));
              }
            }), h.default.createElement("h1", null, this.props.playback.displayFilename), h.default.createElement("div", {
              id: "yt-player"
            })), h.default.createElement("div", {
              id: "display",
              ref: "scroll-container"
            }, h.default.createElement(K.default, {
              width: a2,
              height: f2
            }, h.default.createElement(H.default, {
              className: "overlay",
              type: "mark",
              marks: this.props.marks,
              width: a2,
              onMarkChanged: n(be.updateMark),
              onEditMark: function(t3) {
                return e3.setState({
                  editingMark: t3
                });
              },
              onRemoveMark: function(t3) {
                return e3.removeMark(t3);
              }
            }), h.default.createElement(H.default, {
              className: "overlay bottom",
              type: "beat",
              marks: this.props.marks,
              width: a2,
              onMarkChanged: n(be.updateMark),
              onRemoveMark: function(t3) {
                return e3.removeMark(t3);
              }
            }), h.default.createElement(se.default, {
              className: "overlay bottom",
              id: "time-panel",
              duration: m2,
              width: a2
            }), h.default.createElement(le.default, {
              className: "overlay",
              width: a2,
              height: f2 - 18,
              tabIndex: "0",
              audioBuffer: this.player.audioBuffer
            }), h.default.createElement(Q.default, {
              width: a2,
              onClick: function(t3) {
                return e3.seekToPlaybackTime(t3);
              },
              onDoubleClick: function(t3) {
                return e3.seekToPlaybackTime(t3);
              },
              getPosition: function() {
                return e3.player.currentTime / m2 || 0;
              },
              isPlaying: this.props.playback.isPlaying,
              className: "overlay",
              id: "waveform-position",
              height: f2
            }), h.default.createElement(J.default, {
              start: this.props.loops.currentLoop.start,
              end: this.props.loops.currentLoop.end,
              setLoop: function(e4, n2) {
                return t2(ye.setLoop(e4, n2));
              },
              width: a2,
              height: f2
            }))), h.default.createElement("div", {
              id: "toolbar",
              className: "clear-group"
            }, h.default.createElement("div", {
              className: "pull-right"
            }, h.default.createElement(I.default, {
              getCurrentTime: function() {
                return e3.player.currentTime;
              },
              isPlaying: this.props.playback.isPlaying
            })), h.default.createElement(X.default, {
              onPlay: function() {
                return e3.player.play(true, true);
              },
              onPause: function() {
                return e3.player.playPause();
              },
              onJumpToStart: function() {
                return e3.seekToPlaybackTime(0);
              },
              onJumpToSelectionStart: function() {
                return null != e3.props.loops.currentLoop.end ? e3.seekToPlaybackTime(e3.props.loops.currentLoop.start) : null;
              },
              onJumpToSelectionEnd: function() {
                return null != e3.props.loops.currentLoop.end ? e3.seekToPlaybackTime(e3.props.loops.currentLoop.end) : null;
              },
              selectionStart: this.props.loops.currentLoop.start,
              selectionEnd: this.props.loops.currentLoop.end,
              onAdjustModeChange: function(t3) {
                return e3.setState({
                  adjustMode: t3
                });
              },
              onSetDelay: function(e4) {
                return t2(we.setDelay(e4));
              },
              showSaveNotification: !y2,
              onShowSaveNotification: function() {
                return e3.showRegister("Save your marks, loops, and more!");
              }
            }), h.default.createElement(Y.default, {
              visible: this.state.adjustMode === "pitch",
              onChanged: function() {
                return 1112234;
              },
              octives: this.props.playback.pitch.octives,
              semitones: this.props.playback.pitch.semitones,
              cents: this.props.playback.pitch.cents,
              onChangePitch: function(e4, n2) {
                return t2(we.changePitch(e4, n2));
              },
              onSetPitch: function(e4, n2) {
                return t2(we.setPitch(e4, n2));
              }
            }), h.default.createElement(re.default, {
              speed: this.props.playback.tempo,
              visible: this.state.adjustMode === "tempo",
              onSetSpeed: function(e4) {
                return t2(we.setTempo(e4));
              },
              tempoValues: d2,
              onChooseAudio: function(t3) {
                return e3.onChooseAudio();
              }
            }), null)), h.default.createElement("div", {
              className: "control-panel visible-audio-loaded",
              style: {
                marginLeft: 0
              }
            }, h.default.createElement("div", {
              className: "btn-group"
            }, h.default.createElement("button", {
              className: "btn btn-default btn-sm",
              title: "You can also tap 'm' to add a mark",
              onMouseDown: function() {
                return t2(be.addMark());
              }
            }, "Add Mark"), h.default.createElement("button", {
              className: "btn btn-default btn-sm",
              title: "You can also tap 'b' to add a beat",
              onMouseDown: function() {
                return t2(be.addBeat());
              }
            }, "Add Beat"), h.default.createElement("button", {
              className: "btn btn-default btn-sm",
              title: "You can also press 'l' to add a loop",
              onClick: function() {
                return t2(ye.saveLoop());
              }
            }, "Add Loop"), c2 ? h.default.createElement("button", {
              className: "btn btn-default btn-sm",
              onClick: function() {
                return e3.downloadLoopOrDisplay();
              }
            }, "Download MP3") : null), h.default.createElement("p", {
              id: "empty-mark-message",
              style: {
                display: (0, g.display)(l2)
              }
            }, "Tap 'm' while playing to add marks to the beat or to label parts of the song."), h.default.createElement(R.default, {
              items: i2
            }), h.default.createElement(R.default, {
              items: s2
            }), h.default.createElement(R.default, {
              items: u2
            })), h.default.createElement(L.default, {
              isOpen: this.state.browserSupported === false
            }), h.default.createElement(te.default, {
              isOpen: this.state.isSavingLoop,
              onClose: function() {
                return e3.setState({
                  isSavingLoop: false
                });
              },
              loop: this.props.loops.currentLoop,
              audioBuffer: this.player.audioBuffer,
              tempo: this.props.playback.tempo,
              pitch: this.player.pitch
            }), h.default.createElement(F.default, {
              isOpen: this.props.auth.isGatheringRegistration,
              message: this.props.auth.gatherRegistrationMessage
            }));
          }
        }]);
        return t;
      })(h.default.Component);
      exports.default = (0, m.connect)(s)(Me);
      module.exports = exports.default;
    }
  });

  // src/generated/23.js
  var require__242 = __commonJS({
    "src/generated/23.js"(exports, module) {
      function n(e2, t) {
        return function(n2 = e2, r) {
          return (t[r.type] || function(e3) {
            return e3;
          })(n2, r) || n2;
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = n;
      n.copyState = function(e2, t) {
        return Object.assign({}, e2, t);
      };
      module.exports = exports.default;
    }
  });

  // src/generated/153.js
  var require__243 = __commonJS({
    "src/generated/153.js"(exports) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2 = {}, t) {
        if (!e2.auth.isLoggedIn) {
          return e2;
        }
        if (t.type !== "receiveWorkspace") {
          return e2;
        }
        var n = t.data;
        if (Object.keys(n).length) {
          return Object.assign({}, e2, n);
        } else {
          return e2;
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.root = o;
      var a = require__242();
      var i = r(a);
      var s = {
        isDirty: false
      };
      var u = (0, i.default)(s, {
        workspaceDirty: function(e2, t) {
          if (!e2.isDirty) {
            return (0, a.copyState)(e2, {
              isDirty: true
            });
          }
        },
        workspaceSynced: function(e2, t) {
          return (0, a.copyState)(e2, {
            isDirty: false
          });
        }
      });
      exports.workspace = u;
    }
  });

  // src/generated/148.js
  var require__244 = __commonJS({
    "src/generated/148.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var o = require__242();
      var a = r(o);
      var i = {
        isLoggedIn: false,
        isLoggingIn: false,
        isGatheringCredentials: false,
        loginErrors: [],
        isGatheringRegistration: false,
        isRegistering: false,
        registrationErrors: []
      };
      exports.default = (0, a.default)(i, {
        gatherCredentials: function(e2, t) {
          return (0, o.copyState)(e2, {
            isGatheringCredentials: true,
            loginErrors: []
          });
        },
        stopGatheringCredentials: function(e2, t) {
          return (0, o.copyState)(e2, {
            isGatheringCredentials: false,
            loginErrors: []
          });
        },
        beginLogin: function(e2, t) {
          return (0, o.copyState)(e2, {
            isLoggingIn: true,
            loginErrors: []
          });
        },
        completeLogin: function(e2, t) {
          var n = t.error ? [t.error] : [];
          var r2 = !n.length;
          return (0, o.copyState)(e2, {
            isLoggedIn: r2,
            isLoggingIn: false,
            isGatheringCredentials: !r2,
            justRegistered: true,
            loginErrors: n,
            plan: t.plan
          });
        },
        completeLogout: function(e2) {
          return (0, o.copyState)(e2, {
            isLoggedIn: false,
            plan: null
          });
        },
        gatherRegistration: function(e2, t) {
          return (0, o.copyState)(e2, {
            isGatheringRegistration: true,
            gatherRegistrationMessage: t.message,
            registrationErrors: []
          });
        },
        beginRegistration: function(e2, t) {
          return (0, o.copyState)(e2, {
            isRegistering: true,
            registrationErrors: []
          });
        },
        completeRegistration: function(e2, t) {
          var n = t.errors || [];
          var r2 = false;
          return (0, o.copyState)(e2, {
            isGatheringRegistration: n.length > 0,
            isRegistering: false,
            isLoggedIn: r2,
            registrationErrors: n
          });
        }
      });
      module.exports = exports.default;
    }
  });

  // src/generated/154.js
  var require__245 = __commonJS({
    "src/generated/154.js"(exports, module) {
      function n(e2 = r, t) {
        switch (t.type) {
          case "setZoom":
            var n2 = e2.level;
            var o = t.level;
            if (o === "in") {
              n2++;
            } else if (o === "out") {
              n2--;
            } else {
              n2 = o;
            }
            if (n2 > 0 && n2 < 20) {
              return Object.assign({}, e2, {
                level: n2
              });
            }
        }
        return e2;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = n;
      var r = {
        level: 7
      };
      module.exports = exports.default;
    }
  });

  // src/app/state/loopsReducer.js
  var require_loopsReducer = __commonJS({
    "src/app/state/loopsReducer.js"(exports, module) {
      function r(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2 = u, t) {
        return p.reduce(e2, t);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function i(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var s = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      exports.default = a;
      require__240();
      var u = {
        currentLoop: {
          start: 0
        },
        loops: []
      };
      var l = (function() {
        function e2() {
          o(this, e2);
        }
        s(e2, [{
          key: "reduce",
          value: function(e3, t) {
            return (this[t.type] || function(e4) {
              return e4;
            })(e3, t) || e3;
          }
        }]);
        return e2;
      })();
      var c = (function(e2) {
        function t() {
          o(this, t);
          i(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        r(t, e2);
        s(t, [{
          key: "setLoop",
          value: function(e3, t2) {
            return Object.assign({}, e3, {
              currentLoop: {
                start: t2.start,
                end: t2.end
              }
            });
          }
        }, {
          key: "removeLoop",
          value: function(e3, t2) {
            var n = e3.loops.filter(function(e4) {
              return e4.id == t2.id;
            })[0];
            var r2 = e3.loops.indexOf(n);
            if (r2 >= 0) {
              e3.loops.splice(r2, 1);
              return Object.assign({}, e3, {
                loops: e3.loops.slice(0)
              });
            }
          }
        }, {
          key: "saveLoop",
          value: function(e3, t2) {
            var n = e3.currentLoop;
            if (n.start && n.end) {
              var r2 = {
                start: n.start,
                end: n.end,
                id: Date.now()
              };
              return Object.assign({}, e3, {
                loops: e3.loops.concat([r2])
              });
            }
          }
        }]);
        return t;
      })(l);
      var p = new c();
      module.exports = exports.default;
    }
  });

  // src/app/state/marksReducer.js
  var require_marksReducer = __commonJS({
    "src/app/state/marksReducer.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2) {
        if (Array.isArray(e2)) {
          for (var t = 0, n = Array(e2.length); t < e2.length; t++) {
            n[t] = e2[t];
          }
          return n;
        }
        return Array.from(e2);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var a = require_PlaybackController();
      var i = r(a);
      var s = require__188();
      var u = require__242();
      var l = r(u);
      var c = {
        marks: []
      };
      exports.default = (0, l.default)(c, {
        updateMark: function(e2, t) {
          var n = t.id;
          var r2 = t.time;
          var o2 = t.label;
          var a2 = t.markedForDeletion;
          var i2 = e2.marks.slice(0);
          var s2 = i2.find(function(e3) {
            return e3.id === n;
          });
          var l2 = i2.indexOf(s2);
          var c2 = {};
          if (r2 !== void 0) {
            c2.time = r2;
          }
          if (o2 !== void 0) {
            c2.label = o2;
          }
          if (a2 === true) {
            c2.markedForDeletion = true;
          }
          var p = Object.assign({}, s2, c2);
          i2[l2] = p;
          return (0, u.copyState)(e2, {
            marks: i2
          });
        },
        addMark: function(e2, t) {
          if (i.default.loaded) {
            var n = {
              id: (0, s.getUnique)(),
              time: i.default.currentTime / i.default.audioBuffer.duration,
              type: t.markType,
              label: ""
            };
            return (0, u.copyState)(e2, {
              marks: [].concat(o(e2.marks), [n])
            });
          }
        },
        removeMark: function(e2, t) {
          var n = e2.marks.slice(0);
          var r2 = n.find(function(e3) {
            return e3.id === t.id;
          });
          n.splice(n.indexOf(r2), 1);
          return (0, u.copyState)(e2, {
            marks: n
          });
        }
      });
      module.exports = exports.default;
    }
  });

  // src/app/state/playbackReducer.js
  var require_playbackReducer = __commonJS({
    "src/app/state/playbackReducer.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var o = require__242();
      var a = r(o);
      var i = {
        isPlaying: false,
        tempo: 100,
        volume: 100,
        playbackTime: 0,
        pitch: {
          octives: 0,
          semitones: 0,
          cents: 0
        }
      };
      exports.default = (0, a.default)(i, {
        setTempo: function(e2, t) {
          return Object.assign({}, e2, {
            tempo: t.tempo
          });
        },
        setVolume: function(e2, t) {
          return Object.assign({}, e2, {
            volume: 100
          });
        },
        changePlayStatus: function(e2, t) {
          return Object.assign({}, e2, {
            isPlaying: t.isPlaying
          });
        },
        changeFile: function(e2, t) {
          var n = t.filename.replace(/\.[^/.]+$/, "");
          return Object.assign({}, e2, {
            displayFilename: n
          });
        },
        setDelay: function(e2, t) {
          return Object.assign({}, e2, {
            delay: t.seconds
          });
        },
        setPitch: function(e2, t) {
          var n = {
            octives: e2.pitch.octives,
            semitones: e2.pitch.semitones,
            cents: e2.pitch.cents
          };
          n[t.value] = t.amount;
          return Object.assign({}, e2, {
            pitch: n
          });
        },
        changePitch: function(e2, t) {
          var n = {
            octives: {
              m: 1,
              max: 3
            },
            semitones: {
              m: 1,
              max: 12
            },
            cents: {
              m: 10,
              max: 100
            }
          }[t.value];
          var r2 = n.m;
          var o2 = n.max;
          var a2 = -o2;
          var i2 = e2.pitch[t.value];
          var s = i2 + r2 * t.amount;
          if (!(s > o2) && !(s < a2)) {
            var u = {
              octives: e2.pitch.octives,
              semitones: e2.pitch.semitones,
              cents: e2.pitch.cents
            };
            u[t.value] = s;
            return Object.assign({}, e2, {
              pitch: u
            });
          }
        },
        setPlaybackTime: function(e2, t) {
          if (e2.playbackTime !== t.time) {
            return Object.assign({}, e2, {
              playbackTime: t.time
            });
          }
        }
      });
      module.exports = exports.default;
    }
  });

  // src/app/state/audioReducer.js
  var require_audioReducer = __commonJS({
    "src/app/state/audioReducer.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var o = require__242();
      var a = r(o);
      var i = "not-loaded";
      var s = "loaded";
      var u = "loading";
      var l = {
        status: i
      };
      exports.default = (0, a.default)(l, {
        audioLoading: function(e2, t) {
          return Object.assign({}, e2, {
            status: u
          });
        },
        audioLoaded: function(e2, t) {
          return Object.assign({}, e2, {
            status: s,
            dataHash: t.dataHash
          });
        }
      });
      module.exports = exports.default;
    }
  });

  // src/app/state/rootReducer.js
  var require_rootReducer = __commonJS({
    "src/app/state/rootReducer.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2) {
        return function(t, n) {
          e2.forEach(function(e3) {
            t = e3(t, n);
          });
          return t;
        };
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var a = require__172();
      var i = require__243();
      var s = require__244();
      var u = r(s);
      var l = require__245();
      var c = r(l);
      var p = require_loopsReducer();
      var d = r(p);
      var f = require_marksReducer();
      var h = r(f);
      var m = require_playbackReducer();
      var v = r(m);
      var y = require_audioReducer();
      var g = r(y);
      var b = {
        auth: u.default,
        zoom: c.default,
        loops: d.default,
        marks: h.default,
        playback: v.default,
        workspace: i.workspace,
        audio: g.default
      };
      var E = (0, a.combineReducers)(b);
      exports.default = o([E, i.root]);
      module.exports = exports.default;
    }
  });

  // src/generated/271.js
  var require__246 = __commonJS({
    "src/generated/271.js"(exports, module) {
      function n(e2) {
        var t = e2.dispatch;
        var n2 = e2.getState;
        return function(e3) {
          return function(r) {
            if (typeof r == "function") {
              return r(t, n2);
            } else {
              return e3(r);
            }
          };
        };
      }
      module.exports = n;
    }
  });

  // src/generated/158.js
  var require__247 = __commonJS({
    "src/generated/158.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2) {
        var t = (0, a.applyMiddleware)(l.default)(a.createStore);
        return t(s.default, e2);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = o;
      var a = require__172();
      var i = require_rootReducer();
      var s = r(i);
      var u = require__246();
      var l = r(u);
      module.exports = exports.default;
    }
  });

  // src/generated/155.js
  var require__248 = __commonJS({
    "src/generated/155.js"(exports, module) {
      function r(e2) {
        var t;
        e2.subscribe(function() {
          var n = t;
          t = e2.getState();
          e2.dispatch((0, o.updateWorkspace)(e2.getState(), n));
        });
        if (typeof window != "undefined") {
          window.onbeforeunload = function(t2) {
            if (e2.getState().workspace.isDirty) {
              if (e2.getState().auth.isLoggedIn) {
                return "Data is being saved to the server, if you close now you will lose some of your work.";
              } else {
                return "You will lose all of your current data, do you want to continue?";
              }
            }
          };
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = r;
      var o = require__241();
      module.exports = exports.default;
    }
  });

  // src/app/AppProvider.js
  var require_AppProvider = __commonJS({
    "src/app/AppProvider.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require_App();
      var p = r(c);
      require__172();
      var d = require__184();
      var f = require__247();
      var h = r(f);
      var m = require__248();
      var v = r(m);
      var y = (function(e2) {
        function t() {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
        }
        a(t, e2);
        i(t, [{
          key: "render",
          value: function() {
            var e3 = (0, h.default)();
            (0, v.default)(e3);
            return l.default.createElement(d.Provider, {
              store: e3
            }, l.default.createElement(p.default, null));
          }
        }]);
        return t;
      })(u.Component);
      exports.default = y;
      module.exports = exports.default;
    }
  });

  // src/generated/205.js
  var require__249 = __commonJS({
    "src/generated/205.js"(exports, module) {
      var r;
      var o;
      var a;
      var i;
      var s;
      var u = [].slice;
      r = require__152();
      a = r.DOM.script;
      if (typeof window != "undefined" && window !== null && window.GoogleAnalyticsObject == null) {
        window.GoogleAnalyticsObject = "ga";
      }
      if (typeof window != "undefined" && window !== null && window.ga == null) {
        window.ga = o;
      }
      o = function() {
        var e2;
        e2 = arguments.length >= 1 ? u.call(arguments, 0) : [];
        if (typeof window != "undefined" && window !== null) {
          return window[window.GoogleAnalyticsObject].apply(window, e2);
        } else {
          return void 0;
        }
      };
      if (typeof window != "undefined" && window !== null && window[s = window.GoogleAnalyticsObject] == null) {
        window[s] = function() {
          var e2;
          var t;
          t = arguments.length >= 1 ? u.call(arguments, 0) : [];
          e2 = window[window.GoogleAnalyticsObject];
          e2.q || (e2.q = []);
          e2.q.push(t);
        };
      }
      i = false;
      o.Initializer = r.createClass({
        displayName: "GAInitializer",
        componentDidMount: function() {
          window[window.GoogleAnalyticsObject].l = (/* @__PURE__ */ new Date()).getTime();
          if (!i) {
            return this.addScript();
          }
        },
        addScript: function() {
          var e2;
          var t;
          i = true;
          e2 = document.createElement("script");
          e2.type = "text/javascript";
          e2.async = true;
          e2.src = "//www.google-analytics.com/analytics.js";
          t = document.getElementsByTagName("script")[0];
          return t.parentNode.insertBefore(e2, t);
        },
        render: function() {
          return a(null);
        }
      });
      module.exports = o;
    }
  });

  // src/generated/178.js
  var require__250 = __commonJS({
    "src/generated/178.js"(exports, module) {
      module.exports = __require.p + "soundtouch.js";
    }
  });

  // src/generated/177.js
  var require__251 = __commonJS({
    "src/generated/177.js"(exports, module) {
      module.exports = __require.p + "favicon.ico";
    }
  });

  // src/generated/179.js
  var require__252 = __commonJS({
    "src/generated/179.js"(exports, module) {
      module.exports = __require.p + "textlogo.png";
    }
  });

  // src/generated/163.js
  var require__253 = __commonJS({
    "src/generated/163.js"() {
    }
  });

  // src/generated/146.js
  var require__254 = __commonJS({
    "src/generated/146.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      function o(e2, t) {
        if (!(e2 instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function a(e2, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        }
        e2.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e2,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e2, t);
          } else {
            e2.__proto__ = t;
          }
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var i = /* @__PURE__ */ (function() {
        function e2(e3, t) {
          for (var n = 0; n < t.length; n++) {
            var r2 = t[n];
            r2.enumerable = r2.enumerable || false;
            r2.configurable = true;
            if ("value" in r2) {
              r2.writable = true;
            }
            Object.defineProperty(e3, r2.key, r2);
          }
        }
        return function(t, n, r2) {
          if (n) {
            e2(t.prototype, n);
          }
          if (r2) {
            e2(t, r2);
          }
          return t;
        };
      })();
      function s(e2, t, n) {
        for (var r2 = true; r2; ) {
          var o2 = e2;
          var a2 = t;
          var i2 = n;
          r2 = false;
          if (o2 === null) {
            o2 = Function.prototype;
          }
          var s2 = Object.getOwnPropertyDescriptor(o2, a2);
          if (s2 !== void 0) {
            if ("value" in s2) {
              return s2.value;
            }
            var u2 = s2.get;
            if (u2 === void 0) {
              return;
            }
            return u2.call(i2);
          }
          var l2 = Object.getPrototypeOf(o2);
          if (l2 === null) {
            return;
          }
          e2 = l2;
          t = a2;
          n = i2;
          r2 = true;
          s2 = l2 = void 0;
        }
      }
      var u = require__152();
      var l = r(u);
      var c = require_AppProvider();
      var p = r(c);
      var d = require__249();
      var f = r(d);
      var h = require__250();
      var m = r(h);
      var v = require__251();
      var y = r(v);
      require__252();
      require__253();
      var g = require__188();
      var b = f.default.Initializer;
      var E = (function(e2) {
        function t(e3) {
          o(this, t);
          s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e3);
          if (g.hasWindow) {
            window._gscq = [];
          }
        }
        a(t, e2);
        i(t, [{
          key: "componentDidMount",
          value: function() {
            (0, f.default)("create", "UA-53190126-1", "auto");
            (0, f.default)("send", "pageview");
          }
        }, {
          key: "render",
          value: function() {
            return l.default.createElement("html", null, l.default.createElement("head", null, l.default.createElement("meta", {
              charSet: "utf-8"
            }), l.default.createElement("meta", {
              property: "og:title",
              content: "Tune Transcriber"
            }), l.default.createElement("meta", {
              property: "og:type",
              content: "website"
            }), l.default.createElement("meta", {
              property: "og:image",
              content: "https://www.tunetranscriber.com/screenshot.png"
            }), l.default.createElement("meta", {
              property: "og:description",
              content: "A free online tool to slow down songs and transcribe music."
            }), l.default.createElement("meta", {
              name: "twitter:card",
              content: "summary_large_image"
            }), l.default.createElement("meta", {
              name: "twitter:site",
              content: "@tunetranscriber"
            }), l.default.createElement("meta", {
              name: "twitter:title",
              content: "Tune Transcriber"
            }), l.default.createElement("meta", {
              name: "twitter:description",
              content: "A free online tool to slow down songs and transcribe music."
            }), l.default.createElement("meta", {
              name: "twitter:image:src",
              content: "https://www.tunetranscriber.com/screenshot.png"
            }), l.default.createElement("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/apple-touch-icon.png"
            }), l.default.createElement("link", {
              rel: "icon",
              href: "favicon.ico?v2"
            }), l.default.createElement("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon-32x32.png"
            }), l.default.createElement("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon-16x16.png"
            }), l.default.createElement("link", {
              rel: "manifest",
              href: "/site.webmanifest"
            }), l.default.createElement("link", {
              rel: "mask-icon",
              href: "/safari-pinned-tab.svg",
              color: "#5bbad5"
            }), l.default.createElement("meta", {
              name: "msapplication-TileColor",
              content: "#da532c"
            }), l.default.createElement("meta", {
              name: "theme-color",
              content: "#ffffff"
            }), l.default.createElement("meta", {
              content: "width=device-width, initial-scale=1",
              name: "viewport"
            }), l.default.createElement("link", {
              rel: "icon",
              href: y.default,
              type: "image/x-icon"
            }), l.default.createElement("link", {
              rel: "stylesheet",
              href: "main.css",
              type: "text/css",
              media: "screen"
            }), l.default.createElement("title", null, "Transcribe Music Online"), l.default.createElement(b, null)), l.default.createElement("body", null, l.default.createElement(p.default, null), l.default.createElement("script", {
              src: m.default
            }), l.default.createElement("script", {
              src: "bundle.js",
              charSet: "utf-8"
            }), l.default.createElement("script", {
              src: "//widgets.getsitecontrol.com/31121/script.js"
            })));
          }
        }]);
        return t;
      })(l.default.Component);
      exports.default = E;
      module.exports = exports.default;
    }
  });

  // src/generated/204.js
  var require__255 = __commonJS({
    "src/generated/204.js"(exports, module) {
      module.exports = require__144();
    }
  });

  // src/generated/278.js
  var require__256 = __commonJS({
    "src/generated/278.js"(exports) {
      (function(e2) {
        "use strict";
        function t(e3) {
          if (typeof e3 != "string") {
            e3 = String(e3);
          }
          if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e3)) {
            throw new TypeError("Invalid character in header field name");
          }
          return e3.toLowerCase();
        }
        function n(e3) {
          if (typeof e3 != "string") {
            e3 = String(e3);
          }
          return e3;
        }
        function r(e3) {
          this.map = {};
          if (e3 instanceof r) {
            e3.forEach(function(e4, t2) {
              this.append(t2, e4);
            }, this);
          } else if (e3) {
            Object.getOwnPropertyNames(e3).forEach(function(t2) {
              this.append(t2, e3[t2]);
            }, this);
          }
        }
        function o(e3) {
          if (e3.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          } else {
            e3.bodyUsed = true;
            return;
          }
        }
        function a(e3) {
          return new Promise(function(t2, n2) {
            e3.onload = function() {
              t2(e3.result);
            };
            e3.onerror = function() {
              n2(e3.error);
            };
          });
        }
        function i(e3) {
          var t2 = new FileReader();
          t2.readAsArrayBuffer(e3);
          return a(t2);
        }
        function s(e3) {
          var t2 = new FileReader();
          t2.readAsText(e3);
          return a(t2);
        }
        function u() {
          this.bodyUsed = false;
          this._initBody = function(e3) {
            this._bodyInit = e3;
            if (typeof e3 == "string") {
              this._bodyText = e3;
            } else if (h.blob && Blob.prototype.isPrototypeOf(e3)) {
              this._bodyBlob = e3;
            } else if (h.formData && FormData.prototype.isPrototypeOf(e3)) {
              this._bodyFormData = e3;
            } else if (e3) {
              if (!h.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e3)) {
                throw new Error("unsupported BodyInit type");
              }
            } else {
              this._bodyText = "";
            }
            if (!this.headers.get("content-type")) {
              if (typeof e3 == "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              }
            }
          };
          if (h.blob) {
            this.blob = function() {
              var e3 = o(this);
              if (e3) {
                return e3;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              }
              if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              }
              return Promise.resolve(new Blob([this._bodyText]));
            };
            this.arrayBuffer = function() {
              return this.blob().then(i);
            };
            this.text = function() {
              var e3 = o(this);
              if (e3) {
                return e3;
              }
              if (this._bodyBlob) {
                return s(this._bodyBlob);
              }
              if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              }
              return Promise.resolve(this._bodyText);
            };
          } else {
            this.text = function() {
              var e3 = o(this);
              if (e3) {
                return e3;
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
          }
          if (h.formData) {
            this.formData = function() {
              return this.text().then(p);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        function l(e3) {
          var t2 = e3.toUpperCase();
          if (m.indexOf(t2) > -1) {
            return t2;
          } else {
            return e3;
          }
        }
        function c(e3, t2) {
          t2 = t2 || {};
          var n2 = t2.body;
          if (c.prototype.isPrototypeOf(e3)) {
            if (e3.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = e3.url;
            this.credentials = e3.credentials;
            if (!t2.headers) {
              this.headers = new r(e3.headers);
            }
            this.method = e3.method;
            this.mode = e3.mode;
            if (!n2) {
              n2 = e3._bodyInit;
              e3.bodyUsed = true;
            }
          } else {
            this.url = e3;
          }
          this.credentials = t2.credentials || this.credentials || "omit";
          if (!!t2.headers || !this.headers) {
            this.headers = new r(t2.headers);
          }
          this.method = l(t2.method || this.method || "GET");
          this.mode = t2.mode || this.mode || null;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && n2) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(n2);
        }
        function p(e3) {
          var t2 = new FormData();
          e3.trim().split("&").forEach(function(e4) {
            if (e4) {
              var n2 = e4.split("=");
              var r2 = n2.shift().replace(/\+/g, " ");
              var o2 = n2.join("=").replace(/\+/g, " ");
              t2.append(decodeURIComponent(r2), decodeURIComponent(o2));
            }
          });
          return t2;
        }
        function d(e3) {
          var t2 = new r();
          var n2 = (e3.getAllResponseHeaders() || "").trim().split("\n");
          n2.forEach(function(e4) {
            var n3 = e4.trim().split(":");
            var r2 = n3.shift().trim();
            var o2 = n3.join(":").trim();
            t2.append(r2, o2);
          });
          return t2;
        }
        function f(e3, t2) {
          t2 ||= {};
          this.type = "default";
          this.status = t2.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = t2.statusText;
          this.headers = t2.headers instanceof r ? t2.headers : new r(t2.headers);
          this.url = t2.url || "";
          this._initBody(e3);
        }
        if (!e2.fetch) {
          r.prototype.append = function(e3, r2) {
            e3 = t(e3);
            r2 = n(r2);
            var o2 = this.map[e3];
            if (!o2) {
              o2 = [];
              this.map[e3] = o2;
            }
            o2.push(r2);
          };
          r.prototype.delete = function(e3) {
            delete this.map[t(e3)];
          };
          r.prototype.get = function(e3) {
            var n2 = this.map[t(e3)];
            if (n2) {
              return n2[0];
            } else {
              return null;
            }
          };
          r.prototype.getAll = function(e3) {
            return this.map[t(e3)] || [];
          };
          r.prototype.has = function(e3) {
            return this.map.hasOwnProperty(t(e3));
          };
          r.prototype.set = function(e3, r2) {
            this.map[t(e3)] = [n(r2)];
          };
          r.prototype.forEach = function(e3, t2) {
            Object.getOwnPropertyNames(this.map).forEach(function(n2) {
              this.map[n2].forEach(function(r2) {
                e3.call(t2, r2, n2, this);
              }, this);
            }, this);
          };
          var h = {
            blob: "FileReader" in e2 && "Blob" in e2 && (function() {
              try {
                new Blob();
                return true;
              } catch (e3) {
                return false;
              }
            })(),
            formData: "FormData" in e2,
            arrayBuffer: "ArrayBuffer" in e2
          };
          var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          c.prototype.clone = function() {
            return new c(this);
          };
          u.call(c.prototype);
          u.call(f.prototype);
          f.prototype.clone = function() {
            return new f(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new r(this.headers),
              url: this.url
            });
          };
          f.error = function() {
            var e3 = new f(null, {
              status: 0,
              statusText: ""
            });
            e3.type = "error";
            return e3;
          };
          var v = [301, 302, 303, 307, 308];
          f.redirect = function(e3, t2) {
            if (v.indexOf(t2) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new f(null, {
              status: t2,
              headers: {
                location: e3
              }
            });
          };
          e2.Headers = r;
          e2.Request = c;
          e2.Response = f;
          e2.fetch = function(e3, t2) {
            return new Promise(function(n2, r2) {
              function o2() {
                if ("responseURL" in i2) {
                  return i2.responseURL;
                } else if (/^X-Request-URL:/m.test(i2.getAllResponseHeaders())) {
                  return i2.getResponseHeader("X-Request-URL");
                } else {
                  return void 0;
                }
              }
              var a2;
              a2 = c.prototype.isPrototypeOf(e3) && !t2 ? e3 : new c(e3, t2);
              var i2 = new XMLHttpRequest();
              i2.onload = function() {
                var e4 = i2.status === 1223 ? 204 : i2.status;
                if (e4 < 100 || e4 > 599) {
                  r2(new TypeError("Network request failed"));
                  return;
                }
                var t3 = {
                  status: e4,
                  statusText: i2.statusText,
                  headers: d(i2),
                  url: o2()
                };
                var a3 = "response" in i2 ? i2.response : i2.responseText;
                n2(new f(a3, t3));
              };
              i2.onerror = function() {
                r2(new TypeError("Network request failed"));
              };
              i2.ontimeout = function() {
                r2(new TypeError("Network request failed"));
              };
              i2.open(a2.method, a2.url, true);
              if (a2.credentials === "include") {
                i2.withCredentials = true;
              }
              if ("responseType" in i2 && h.blob) {
                i2.responseType = "blob";
              }
              a2.headers.forEach(function(e4, t3) {
                i2.setRequestHeader(t3, e4);
              });
              i2.send(typeof a2._bodyInit == "undefined" ? null : a2._bodyInit);
            });
          };
          e2.fetch.polyfill = true;
        }
      })(typeof self != "undefined" ? self : exports);
    }
  });

  // src/app/entry.js
  var require_entry = __commonJS({
    "src/app/entry.js"(exports, module) {
      function r(e2) {
        if (e2 && e2.__esModule) {
          return e2;
        } else {
          return {
            default: e2
          };
        }
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var o = require__152();
      var a = r(o);
      var i = require__254();
      var s = r(i);
      var u = require_AppProvider();
      var appProvider = r(u);
      var l = require__222();
      var c = r(l);
      var p = require__255();
      var d = r(p);
      var f = require__202();
      var h = r(f);
      require__256();
      if (typeof window != "undefined") {
        root = document.createElement("div");
        document.body.innerHTML = "";
        document.body.appendChild(root);
        c.default.setAppElement(root);
        h.default.render(a.default.createElement(appProvider.default, null), root);
      }
      var root;
      exports.default = function(e2, t) {
        var n = d.default.renderToString(a.default.createElement(s.default, e2));
        t(null, "<!DOCTYPE html>" + n);
      };
      module.exports = exports.default;
    }
  });

  // src/index.js
  var require_index = __commonJS({
    "src/index.js"(exports, module) {
      module.exports = require_entry();
    }
  });
  require_index();
})();
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
/*!
 * Bootstrap without jQuery v0.6.1 for Bootstrap 3
 * By Daniel Davis under MIT License
 * https://github.com/tagawa/bootstrap-without-jquery
 */
/*!
Copyright (c) 2015 Jed Watson.
Based on code that is Copyright 2013-2015, Facebook, Inc.
All rights reserved.
*/
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
/*! nouislider - 12.0.0 - 9/14/2018 */
