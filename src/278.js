(function (e) {
  "use strict";

  function t(e) {
    if (typeof e != "string") {
      e = String(e);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) {
      throw new TypeError("Invalid character in header field name");
    }
    return e.toLowerCase();
  }
  function n(e) {
    if (typeof e != "string") {
      e = String(e);
    }
    return e;
  }
  function r(e) {
    this.map = {};
    if (e instanceof r) {
      e.forEach(function (e, t) {
        this.append(t, e);
      }, this);
    } else if (e) {
      Object.getOwnPropertyNames(e).forEach(function (t) {
        this.append(t, e[t]);
      }, this);
    }
  }
  function o(e) {
    if (e.bodyUsed) {
      return Promise.reject(new TypeError("Already read"));
    } else {
      e.bodyUsed = true;
      return;
    }
  }
  function a(e) {
    return new Promise(function (t, n) {
      e.onload = function () {
        t(e.result);
      };
      e.onerror = function () {
        n(e.error);
      };
    });
  }
  function i(e) {
    var t = new FileReader();
    t.readAsArrayBuffer(e);
    return a(t);
  }
  function s(e) {
    var t = new FileReader();
    t.readAsText(e);
    return a(t);
  }
  function u() {
    this.bodyUsed = false;
    this._initBody = function (e) {
      this._bodyInit = e;
      if (typeof e == "string") {
        this._bodyText = e;
      } else if (h.blob && Blob.prototype.isPrototypeOf(e)) {
        this._bodyBlob = e;
      } else if (h.formData && FormData.prototype.isPrototypeOf(e)) {
        this._bodyFormData = e;
      } else if (e) {
        if (!h.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e)) {
          throw new Error("unsupported BodyInit type");
        }
      } else {
        this._bodyText = "";
      }
      if (!this.headers.get("content-type")) {
        if (typeof e == "string") {
          this.headers.set("content-type", "text/plain;charset=UTF-8");
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set("content-type", this._bodyBlob.type);
        }
      }
    };
    if (h.blob) {
      this.blob = function () {
        var e = o(this);
        if (e) {
          return e;
        }
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        }
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as blob");
        }
        return Promise.resolve(new Blob([this._bodyText]));
      };
      this.arrayBuffer = function () {
        return this.blob().then(i);
      };
      this.text = function () {
        var e = o(this);
        if (e) {
          return e;
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
      this.text = function () {
        var e = o(this);
        if (e) {
          return e;
        } else {
          return Promise.resolve(this._bodyText);
        }
      };
    }
    if (h.formData) {
      this.formData = function () {
        return this.text().then(p);
      };
    }
    this.json = function () {
      return this.text().then(JSON.parse);
    };
    return this;
  }
  function l(e) {
    var t = e.toUpperCase();
    if (m.indexOf(t) > -1) {
      return t;
    } else {
      return e;
    }
  }
  function c(e, t) {
    t = t || {};
    var n = t.body;
    if (c.prototype.isPrototypeOf(e)) {
      if (e.bodyUsed) {
        throw new TypeError("Already read");
      }
      this.url = e.url;
      this.credentials = e.credentials;
      if (!t.headers) {
        this.headers = new r(e.headers);
      }
      this.method = e.method;
      this.mode = e.mode;
      if (!n) {
        n = e._bodyInit;
        e.bodyUsed = true;
      }
    } else {
      this.url = e;
    }
    this.credentials = t.credentials || this.credentials || "omit";
    if (!!t.headers || !this.headers) {
      this.headers = new r(t.headers);
    }
    this.method = l(t.method || this.method || "GET");
    this.mode = t.mode || this.mode || null;
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && n) {
      throw new TypeError("Body not allowed for GET or HEAD requests");
    }
    this._initBody(n);
  }
  function p(e) {
    var t = new FormData();
    e.trim().split("&").forEach(function (e) {
      if (e) {
        var n = e.split("=");
        var r = n.shift().replace(/\+/g, " ");
        var o = n.join("=").replace(/\+/g, " ");
        t.append(decodeURIComponent(r), decodeURIComponent(o));
      }
    });
    return t;
  }
  function d(e) {
    var t = new r();
    var n = (e.getAllResponseHeaders() || "").trim().split("\n");
    n.forEach(function (e) {
      var n = e.trim().split(":");
      var r = n.shift().trim();
      var o = n.join(":").trim();
      t.append(r, o);
    });
    return t;
  }
  function f(e, t) {
    t ||= {};
    this.type = "default";
    this.status = t.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = t.statusText;
    this.headers = t.headers instanceof r ? t.headers : new r(t.headers);
    this.url = t.url || "";
    this._initBody(e);
  }
  if (!e.fetch) {
    r.prototype.append = function (e, r) {
      e = t(e);
      r = n(r);
      var o = this.map[e];
      if (!o) {
        o = [];
        this.map[e] = o;
      }
      o.push(r);
    };
    r.prototype.delete = function (e) {
      delete this.map[t(e)];
    };
    r.prototype.get = function (e) {
      var n = this.map[t(e)];
      if (n) {
        return n[0];
      } else {
        return null;
      }
    };
    r.prototype.getAll = function (e) {
      return this.map[t(e)] || [];
    };
    r.prototype.has = function (e) {
      return this.map.hasOwnProperty(t(e));
    };
    r.prototype.set = function (e, r) {
      this.map[t(e)] = [n(r)];
    };
    r.prototype.forEach = function (e, t) {
      Object.getOwnPropertyNames(this.map).forEach(function (n) {
        this.map[n].forEach(function (r) {
          e.call(t, r, n, this);
        }, this);
      }, this);
    };
    var h = {
      blob: "FileReader" in e && "Blob" in e && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: "FormData" in e,
      arrayBuffer: "ArrayBuffer" in e
    };
    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    c.prototype.clone = function () {
      return new c(this);
    };
    u.call(c.prototype);
    u.call(f.prototype);
    f.prototype.clone = function () {
      return new f(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new r(this.headers),
        url: this.url
      });
    };
    f.error = function () {
      var e = new f(null, {
        status: 0,
        statusText: ""
      });
      e.type = "error";
      return e;
    };
    var v = [301, 302, 303, 307, 308];
    f.redirect = function (e, t) {
      if (v.indexOf(t) === -1) {
        throw new RangeError("Invalid status code");
      }
      return new f(null, {
        status: t,
        headers: {
          location: e
        }
      });
    };
    e.Headers = r;
    e.Request = c;
    e.Response = f;
    e.fetch = function (e, t) {
      return new Promise(function (n, r) {
        function o() {
          if ("responseURL" in i) {
            return i.responseURL;
          } else if (/^X-Request-URL:/m.test(i.getAllResponseHeaders())) {
            return i.getResponseHeader("X-Request-URL");
          } else {
            return undefined;
          }
        }
        var a;
        a = c.prototype.isPrototypeOf(e) && !t ? e : new c(e, t);
        var i = new XMLHttpRequest();
        i.onload = function () {
          var e = i.status === 1223 ? 204 : i.status;
          if (e < 100 || e > 599) {
            r(new TypeError("Network request failed"));
            return;
          }
          var t = {
            status: e,
            statusText: i.statusText,
            headers: d(i),
            url: o()
          };
          var a = "response" in i ? i.response : i.responseText;
          n(new f(a, t));
        };
        i.onerror = function () {
          r(new TypeError("Network request failed"));
        };
        i.ontimeout = function () {
          r(new TypeError("Network request failed"));
        };
        i.open(a.method, a.url, true);
        if (a.credentials === "include") {
          i.withCredentials = true;
        }
        if ("responseType" in i && h.blob) {
          i.responseType = "blob";
        }
        a.headers.forEach(function (e, t) {
          i.setRequestHeader(t, e);
        });
        i.send(typeof a._bodyInit == "undefined" ? null : a._bodyInit);
      });
    };
    e.fetch.polyfill = true;
  }
})(typeof self != "undefined" ? self : this);