var mp_xhr = function () {
  var a = function (a) {
    if (-1 != a.indexOf(";base64,")) {
      var b = a.indexOf(";base64,") + 8;
      return a.slice(b).match(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/) ? a.slice(b) : !1
    }
    return !1
  }, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = function (a) {
      var c = b.indexOf(a.charAt(a.length - 1));
      return 64 == c ? a.substring(0, a.length - 1) : a
    },
    d = function (a) {
      var d = a.length / 4 * 3, e = new ArrayBuffer(d);
      a = c(c(a));
      var g, h, i, j, k, l, m, n, f = parseInt(a.length / 4 * 3, 10), o = 0, p = 0;
      for (g = new Uint8Array(e), a = a.replace(/[^A-Za-z0-9+/=]/g, ""), o = 0; f > o; o += 3)
        k = b.indexOf(a.charAt(p++)), l = b.indexOf(a.charAt(p++)), m = b.indexOf(a.charAt(p++)), n = b.indexOf(a.charAt(p++)), h = k << 2 | l >> 4, i = (15 & l) << 4 | m >> 2, j = (3 & m) << 6 | n, g[o] = h, 64 != m && (g[o + 1] = i), 64 != n && (g[o + 2] = j);
      return e
    },
    e = window.XMLHttpRequest;
  window.XMLHttpRequest = function () {
    this._orig = e,
      this.xhr = new this._orig,
      this.is_b64 = !1, this.responseURL = "",
      this.response = null, this.responseXML = "",
      this.responseType = "", this.withCredentials = !1,
      this.status = 0, this.statusText = "",
      this.readyState = 0, this.timeout = 0,
      this.upload = { onloadstart: null, onloadend: null, onprogress: null },
      this.onreadystatechange = null, this.onprogress = null,
      this.onload = null,
      this.upload = {}
  },
    window.XMLHttpRequest.prototype.open = function (b, c, e, f, g) {
      var h = a(c); h ? (this.is_b64 = !0, console.log("overriding XHR open"),
        this.responseURL = "monkeypatched://base64", this.response = d(h),
        console.log(this.response)) : (console.log("using normal xhr"),
          this.is_b64 = !1, this.xhr.open.apply(this.xhr, arguments))
    },
    window.XMLHttpRequest.prototype.send = function () {
      if (this.is_b64) {
        console.log("overriding XHR send");
        var a = new CustomEvent("load", { target: this }),
          b = new CustomEvent("readystatechange", { target: this }); this.readyState = 4, this.status = 200, this.statusText = "OK", this.onreadystatechange && this.onreadystatechange(b), this.onload && this.onload(a)
      } else { this.upload = this.xhr.upload, this.xhr.withCredentials = this.withCredentials, this.xhr.responseType = this.responseType; var c = this; this.xhr.onload = function (a) { c.readyState = c.xhr.readyState, ("" == c.responseType || "document" == c.responseType) && (c.responseXML = c.xhr.responseXML), c.response = c.xhr.response, ("" == c.responseType || "text" == c.responseType) && (c.responseText = c.xhr.responseText), c.status = c.xhr.status, c.statusText = c.xhr.statusText, c.onload && c.onload(a) }, this.xhr.onreadystatechange = function (a) { c.readyState = c.xhr.readyState, c.status = c.xhr.status, c.statusText = c.xhr.statusText, c.onreadystatechange && c.onreadystatechange(a) }, this.xhr.send.apply(this.xhr, arguments) }
    }, window.XMLHttpRequest.prototype.abort = function () { this.xhr.abort.apply(this.xhr, arguments) }, window.XMLHttpRequest.prototype.setRequestHeader = function () { this.xhr.setRequestHeader.apply(this.xhr, arguments) }, window.XMLHttpRequest.prototype.getAllResponseHeaders = function () { return this.xhr.getAllResponseHeaders.apply(this.xhr, arguments) }, window.XMLHttpRequest.prototype.getResponseHeader = function () { return this.xhr.getResponseHeader.apply(this.xhr, arguments) }, window.XMLHttpRequest.prototype.addEventListener = function (a, b) { this["on" + a] = b }
};

mp_xhr();
window.parent = null;
document.onkeydown = function (e) {
  if (e.which === 8 && !(e.target.tagName == 'INPUT') && !(e.target.tagName == 'TEXTAREA') && !(e.target.getAttribute('contenteditable'))) { e.preventDefault(); }
};