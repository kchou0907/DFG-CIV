(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
      0: function (t, e, n) {
        t.exports = n("zUnb")
      },
      "4R65": function (t, e, n) {
        ! function (t) {
          "use strict";
          var e = Object.freeze;

          function n(t) {
            var e, n, i, r;
            for (n = 1, i = arguments.length; n < i; n++)
              for (e in r = arguments[n]) t[e] = r[e];
            return t
          }
          Object.freeze = function (t) {
            return t
          };
          var i = Object.create || function () {
            function t() {}
            return function (e) {
              return t.prototype = e, new t
            }
          }();

          function r(t, e) {
            var n = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
            var i = n.call(arguments, 2);
            return function () {
              return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
            }
          }
          var s = 0;

          function o(t) {
            return t._leaflet_id = t._leaflet_id || ++s, t._leaflet_id
          }

          function a(t, e, n) {
            var i, r, s, o;
            return o = function () {
              i = !1, r && (s.apply(n, r), r = !1)
            }, s = function () {
              i ? r = arguments : (t.apply(n, arguments), setTimeout(o, e), i = !0)
            }
          }

          function l(t, e, n) {
            var i = e[1],
              r = e[0],
              s = i - r;
            return t === i && n ? t : ((t - r) % s + s) % s + r
          }

          function c() {
            return !1
          }

          function u(t, e) {
            var n = Math.pow(10, void 0 === e ? 6 : e);
            return Math.round(t * n) / n
          }

          function h(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
          }

          function d(t) {
            return h(t).split(/\s+/)
          }

          function p(t, e) {
            for (var n in t.hasOwnProperty("options") || (t.options = t.options ? i(t.options) : {}), e) t.options[n] = e[n];
            return t.options
          }

          function f(t, e, n) {
            var i = [];
            for (var r in t) i.push(encodeURIComponent(n ? r.toUpperCase() : r) + "=" + encodeURIComponent(t[r]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
          }
          var m = /\{ *([\w_-]+) *\}/g;

          function g(t, e) {
            return t.replace(m, (function (t, n) {
              var i = e[n];
              if (void 0 === i) throw new Error("No value provided for variable " + t);
              return "function" == typeof i && (i = i(e)), i
            }))
          }
          var _ = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          };

          function v(t, e) {
            for (var n = 0; n < t.length; n++)
              if (t[n] === e) return n;
            return -1
          }
          var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

          function b(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
          }
          var w = 0;

          function x(t) {
            var e = +new Date,
              n = Math.max(0, 16 - (e - w));
            return w = e + n, window.setTimeout(t, n)
          }
          var C = window.requestAnimationFrame || b("RequestAnimationFrame") || x,
            S = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function (t) {
              window.clearTimeout(t)
            };

          function k(t, e, n) {
            if (!n || C !== x) return C.call(window, r(t, e));
            t.call(e)
          }

          function P(t) {
            t && S.call(window, t)
          }
          var T = (Object.freeze || Object)({
            freeze: e,
            extend: n,
            create: i,
            bind: r,
            lastId: s,
            stamp: o,
            throttle: a,
            wrapNum: l,
            falseFn: c,
            formatNum: u,
            trim: h,
            splitWords: d,
            setOptions: p,
            getParamString: f,
            template: g,
            isArray: _,
            indexOf: v,
            emptyImageUrl: y,
            requestFn: C,
            cancelFn: S,
            requestAnimFrame: k,
            cancelAnimFrame: P
          });

          function E() {}
          E.extend = function (t) {
            var e = function () {
                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
              },
              r = e.__super__ = this.prototype,
              s = i(r);
            for (var o in s.constructor = e, e.prototype = s, this) this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (e[o] = this[o]);
            return t.statics && (n(e, t.statics), delete t.statics), t.includes && (function (t) {
              if ("undefined" != typeof L && L && L.Mixin) {
                t = _(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
              }
            }(t.includes), n.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = n(i(s.options), t.options)), n(s, t), s._initHooks = [], s.callInitHooks = function () {
              if (!this._initHooksCalled) {
                r.callInitHooks && r.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = s._initHooks.length; t < e; t++) s._initHooks[t].call(this)
              }
            }, e
          }, E.include = function (t) {
            return n(this.prototype, t), this
          }, E.mergeOptions = function (t) {
            return n(this.prototype.options, t), this
          }, E.addInitHook = function (t) {
            var e = Array.prototype.slice.call(arguments, 1),
              n = "function" == typeof t ? t : function () {
                this[t].apply(this, e)
              };
            return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n), this
          };
          var A = {
            on: function (t, e, n) {
              if ("object" == typeof t)
                for (var i in t) this._on(i, t[i], e);
              else
                for (var r = 0, s = (t = d(t)).length; r < s; r++) this._on(t[r], e, n);
              return this
            },
            off: function (t, e, n) {
              if (t)
                if ("object" == typeof t)
                  for (var i in t) this._off(i, t[i], e);
                else
                  for (var r = 0, s = (t = d(t)).length; r < s; r++) this._off(t[r], e, n);
              else delete this._events;
              return this
            },
            _on: function (t, e, n) {
              this._events = this._events || {};
              var i = this._events[t];
              i || (this._events[t] = i = []), n === this && (n = void 0);
              for (var r = {
                  fn: e,
                  ctx: n
                }, s = i, o = 0, a = s.length; o < a; o++)
                if (s[o].fn === e && s[o].ctx === n) return;
              s.push(r)
            },
            _off: function (t, e, n) {
              var i, r, s;
              if (this._events && (i = this._events[t]))
                if (e) {
                  if (n === this && (n = void 0), i)
                    for (r = 0, s = i.length; r < s; r++) {
                      var o = i[r];
                      if (o.ctx === n && o.fn === e) return o.fn = c, this._firingCount && (this._events[t] = i = i.slice()), void i.splice(r, 1)
                    }
                } else {
                  for (r = 0, s = i.length; r < s; r++) i[r].fn = c;
                  delete this._events[t]
                }
            },
            fire: function (t, e, i) {
              if (!this.listens(t, i)) return this;
              var r = n({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
              });
              if (this._events) {
                var s = this._events[t];
                if (s) {
                  this._firingCount = this._firingCount + 1 || 1;
                  for (var o = 0, a = s.length; o < a; o++) {
                    var l = s[o];
                    l.fn.call(l.ctx || this, r)
                  }
                  this._firingCount--
                }
              }
              return i && this._propagateEvent(r), this
            },
            listens: function (t, e) {
              var n = this._events && this._events[t];
              if (n && n.length) return !0;
              if (e)
                for (var i in this._eventParents)
                  if (this._eventParents[i].listens(t, e)) return !0;
              return !1
            },
            once: function (t, e, n) {
              if ("object" == typeof t) {
                for (var i in t) this.once(i, t[i], e);
                return this
              }
              var s = r((function () {
                this.off(t, e, n).off(t, s, n)
              }), this);
              return this.on(t, e, n).on(t, s, n)
            },
            addEventParent: function (t) {
              return this._eventParents = this._eventParents || {}, this._eventParents[o(t)] = t, this
            },
            removeEventParent: function (t) {
              return this._eventParents && delete this._eventParents[o(t)], this
            },
            _propagateEvent: function (t) {
              for (var e in this._eventParents) this._eventParents[e].fire(t.type, n({
                layer: t.target,
                propagatedFrom: t.target
              }, t), !0)
            }
          };
          A.addEventListener = A.on, A.removeEventListener = A.clearAllEventListeners = A.off, A.addOneTimeEventListener = A.once, A.fireEvent = A.fire, A.hasEventListeners = A.listens;
          var I = E.extend(A);

          function O(t, e, n) {
            this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e
          }
          var M = Math.trunc || function (t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
          };

          function R(t, e, n) {
            return t instanceof O ? t : _(t) ? new O(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new O(t.x, t.y) : new O(t, e, n)
          }

          function N(t, e) {
            if (t)
              for (var n = e ? [t, e] : t, i = 0, r = n.length; i < r; i++) this.extend(n[i])
          }

          function F(t, e) {
            return !t || t instanceof N ? t : new N(t, e)
          }

          function D(t, e) {
            if (t)
              for (var n = e ? [t, e] : t, i = 0, r = n.length; i < r; i++) this.extend(n[i])
          }

          function j(t, e) {
            return t instanceof D ? t : new D(t, e)
          }

          function z(t, e, n) {
            if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = +t, this.lng = +e, void 0 !== n && (this.alt = +n)
          }

          function V(t, e, n) {
            return t instanceof z ? t : _(t) && "object" != typeof t[0] ? 3 === t.length ? new z(t[0], t[1], t[2]) : 2 === t.length ? new z(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new z(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new z(t, e, n)
          }
          O.prototype = {
            clone: function () {
              return new O(this.x, this.y)
            },
            add: function (t) {
              return this.clone()._add(R(t))
            },
            _add: function (t) {
              return this.x += t.x, this.y += t.y, this
            },
            subtract: function (t) {
              return this.clone()._subtract(R(t))
            },
            _subtract: function (t) {
              return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function (t) {
              return this.clone()._divideBy(t)
            },
            _divideBy: function (t) {
              return this.x /= t, this.y /= t, this
            },
            multiplyBy: function (t) {
              return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function (t) {
              return this.x *= t, this.y *= t, this
            },
            scaleBy: function (t) {
              return new O(this.x * t.x, this.y * t.y)
            },
            unscaleBy: function (t) {
              return new O(this.x / t.x, this.y / t.y)
            },
            round: function () {
              return this.clone()._round()
            },
            _round: function () {
              return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function () {
              return this.clone()._floor()
            },
            _floor: function () {
              return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function () {
              return this.clone()._ceil()
            },
            _ceil: function () {
              return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            trunc: function () {
              return this.clone()._trunc()
            },
            _trunc: function () {
              return this.x = M(this.x), this.y = M(this.y), this
            },
            distanceTo: function (t) {
              var e = (t = R(t)).x - this.x,
                n = t.y - this.y;
              return Math.sqrt(e * e + n * n)
            },
            equals: function (t) {
              return (t = R(t)).x === this.x && t.y === this.y
            },
            contains: function (t) {
              return t = R(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function () {
              return "Point(" + u(this.x) + ", " + u(this.y) + ")"
            }
          }, N.prototype = {
            extend: function (t) {
              return t = R(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
            },
            getCenter: function (t) {
              return new O((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function () {
              return new O(this.min.x, this.max.y)
            },
            getTopRight: function () {
              return new O(this.max.x, this.min.y)
            },
            getTopLeft: function () {
              return this.min
            },
            getBottomRight: function () {
              return this.max
            },
            getSize: function () {
              return this.max.subtract(this.min)
            },
            contains: function (t) {
              var e, n;
              return (t = "number" == typeof t[0] || t instanceof O ? R(t) : F(t)) instanceof N ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
            },
            intersects: function (t) {
              t = F(t);
              var e = this.min,
                n = this.max,
                i = t.min,
                r = t.max;
              return r.x >= e.x && i.x <= n.x && r.y >= e.y && i.y <= n.y
            },
            overlaps: function (t) {
              t = F(t);
              var e = this.min,
                n = this.max,
                i = t.min,
                r = t.max;
              return r.x > e.x && i.x < n.x && r.y > e.y && i.y < n.y
            },
            isValid: function () {
              return !(!this.min || !this.max)
            }
          }, D.prototype = {
            extend: function (t) {
              var e, n, i = this._southWest,
                r = this._northEast;
              if (t instanceof z) e = t, n = t;
              else {
                if (!(t instanceof D)) return t ? this.extend(V(t) || j(t)) : this;
                if (n = t._northEast, !(e = t._southWest) || !n) return this
              }
              return i || r ? (i.lat = Math.min(e.lat, i.lat), i.lng = Math.min(e.lng, i.lng), r.lat = Math.max(n.lat, r.lat), r.lng = Math.max(n.lng, r.lng)) : (this._southWest = new z(e.lat, e.lng), this._northEast = new z(n.lat, n.lng)), this
            },
            pad: function (t) {
              var e = this._southWest,
                n = this._northEast,
                i = Math.abs(e.lat - n.lat) * t,
                r = Math.abs(e.lng - n.lng) * t;
              return new D(new z(e.lat - i, e.lng - r), new z(n.lat + i, n.lng + r))
            },
            getCenter: function () {
              return new z((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function () {
              return this._southWest
            },
            getNorthEast: function () {
              return this._northEast
            },
            getNorthWest: function () {
              return new z(this.getNorth(), this.getWest())
            },
            getSouthEast: function () {
              return new z(this.getSouth(), this.getEast())
            },
            getWest: function () {
              return this._southWest.lng
            },
            getSouth: function () {
              return this._southWest.lat
            },
            getEast: function () {
              return this._northEast.lng
            },
            getNorth: function () {
              return this._northEast.lat
            },
            contains: function (t) {
              t = "number" == typeof t[0] || t instanceof z || "lat" in t ? V(t) : j(t);
              var e, n, i = this._southWest,
                r = this._northEast;
              return t instanceof D ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= r.lat && e.lng >= i.lng && n.lng <= r.lng
            },
            intersects: function (t) {
              t = j(t);
              var e = this._southWest,
                n = this._northEast,
                i = t.getSouthWest(),
                r = t.getNorthEast();
              return r.lat >= e.lat && i.lat <= n.lat && r.lng >= e.lng && i.lng <= n.lng
            },
            overlaps: function (t) {
              t = j(t);
              var e = this._southWest,
                n = this._northEast,
                i = t.getSouthWest(),
                r = t.getNorthEast();
              return r.lat > e.lat && i.lat < n.lat && r.lng > e.lng && i.lng < n.lng
            },
            toBBoxString: function () {
              return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function (t, e) {
              return !!t && (t = j(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
            },
            isValid: function () {
              return !(!this._southWest || !this._northEast)
            }
          }, z.prototype = {
            equals: function (t, e) {
              return !!t && (t = V(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function (t) {
              return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
            },
            distanceTo: function (t) {
              return B.distance(this, V(t))
            },
            wrap: function () {
              return B.wrapLatLng(this)
            },
            toBounds: function (t) {
              var e = 180 * t / 40075017,
                n = e / Math.cos(Math.PI / 180 * this.lat);
              return j([this.lat - e, this.lng - n], [this.lat + e, this.lng + n])
            },
            clone: function () {
              return new z(this.lat, this.lng, this.alt)
            }
          };
          var U, H = {
              latLngToPoint: function (t, e) {
                var n = this.projection.project(t),
                  i = this.scale(e);
                return this.transformation._transform(n, i)
              },
              pointToLatLng: function (t, e) {
                var n = this.scale(e),
                  i = this.transformation.untransform(t, n);
                return this.projection.unproject(i)
              },
              project: function (t) {
                return this.projection.project(t)
              },
              unproject: function (t) {
                return this.projection.unproject(t)
              },
              scale: function (t) {
                return 256 * Math.pow(2, t)
              },
              zoom: function (t) {
                return Math.log(t / 256) / Math.LN2
              },
              getProjectedBounds: function (t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                  n = this.scale(t);
                return new N(this.transformation.transform(e.min, n), this.transformation.transform(e.max, n))
              },
              infinite: !1,
              wrapLatLng: function (t) {
                var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng;
                return new z(this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
              },
              wrapLatLngBounds: function (t) {
                var e = t.getCenter(),
                  n = this.wrapLatLng(e),
                  i = e.lat - n.lat,
                  r = e.lng - n.lng;
                if (0 === i && 0 === r) return t;
                var s = t.getSouthWest(),
                  o = t.getNorthEast();
                return new D(new z(s.lat - i, s.lng - r), new z(o.lat - i, o.lng - r))
              }
            },
            B = n({}, H, {
              wrapLng: [-180, 180],
              R: 6371e3,
              distance: function (t, e) {
                var n = Math.PI / 180,
                  i = t.lat * n,
                  r = e.lat * n,
                  s = Math.sin((e.lat - t.lat) * n / 2),
                  o = Math.sin((e.lng - t.lng) * n / 2),
                  a = s * s + Math.cos(i) * Math.cos(r) * o * o,
                  l = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * l
              }
            }),
            Z = {
              R: 6378137,
              MAX_LATITUDE: 85.0511287798,
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.MAX_LATITUDE,
                  i = Math.max(Math.min(n, t.lat), -n),
                  r = Math.sin(i * e);
                return new O(this.R * t.lng * e, this.R * Math.log((1 + r) / (1 - r)) / 2)
              },
              unproject: function (t) {
                var e = 180 / Math.PI;
                return new z((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
              },
              bounds: (U = 6378137 * Math.PI, new N([-U, -U], [U, U]))
            };

          function $(t, e, n, i) {
            if (_(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
            this._a = t, this._b = e, this._c = n, this._d = i
          }

          function q(t, e, n, i) {
            return new $(t, e, n, i)
          }
          $.prototype = {
            transform: function (t, e) {
              return this._transform(t.clone(), e)
            },
            _transform: function (t, e) {
              return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function (t, e) {
              return new O((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
          };
          var G, W = n({}, B, {
              code: "EPSG:3857",
              projection: Z,
              transformation: (G = .5 / (Math.PI * Z.R), q(G, .5, -G, .5))
            }),
            K = n({}, W, {
              code: "EPSG:900913"
            });

          function Y(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
          }

          function J(t, e) {
            var n, i, r, s, o, a, l = "";
            for (n = 0, r = t.length; n < r; n++) {
              for (i = 0, s = (o = t[n]).length; i < s; i++) l += (i ? "L" : "M") + (a = o[i]).x + " " + a.y;
              l += e ? Lt ? "z" : "x" : ""
            }
            return l || "M0 0"
          }
          var Q = document.documentElement.style,
            X = "ActiveXObject" in window,
            tt = X && !document.addEventListener,
            et = "msLaunchUri" in navigator && !("documentMode" in document),
            nt = It("webkit"),
            it = It("android"),
            rt = It("android 2") || It("android 3"),
            st = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            ot = it && It("Google") && st < 537 && !("AudioNode" in window),
            at = !!window.opera,
            lt = It("chrome"),
            ct = It("gecko") && !nt && !at && !X,
            ut = !lt && It("safari"),
            ht = It("phantom"),
            dt = "OTransition" in Q,
            pt = 0 === navigator.platform.indexOf("Win"),
            ft = X && "transition" in Q,
            mt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !rt,
            gt = "MozPerspective" in Q,
            _t = !window.L_DISABLE_3D && (ft || mt || gt) && !dt && !ht,
            vt = "undefined" != typeof orientation || It("mobile"),
            yt = vt && nt,
            bt = vt && mt,
            wt = !window.PointerEvent && window.MSPointerEvent,
            xt = !(nt || !window.PointerEvent && !wt),
            Ct = !window.L_NO_TOUCH && (xt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            St = vt && at,
            kt = vt && ct,
            Pt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            Tt = function () {
              var t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0
                  }
                });
                window.addEventListener("testPassiveEventSupport", c, e), window.removeEventListener("testPassiveEventSupport", c, e)
              } catch (n) {}
              return t
            },
            Et = !!document.createElement("canvas").getContext,
            Lt = !(!document.createElementNS || !Y("svg").createSVGRect),
            At = !Lt && function () {
              try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
              } catch (n) {
                return !1
              }
            }();

          function It(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0
          }
          var Ot = (Object.freeze || Object)({
              ie: X,
              ielt9: tt,
              edge: et,
              webkit: nt,
              android: it,
              android23: rt,
              androidStock: ot,
              opera: at,
              chrome: lt,
              gecko: ct,
              safari: ut,
              phantom: ht,
              opera12: dt,
              win: pt,
              ie3d: ft,
              webkit3d: mt,
              gecko3d: gt,
              any3d: _t,
              mobile: vt,
              mobileWebkit: yt,
              mobileWebkit3d: bt,
              msPointer: wt,
              pointer: xt,
              touch: Ct,
              mobileOpera: St,
              mobileGecko: kt,
              retina: Pt,
              passiveEvents: Tt,
              canvas: Et,
              svg: Lt,
              vml: At
            }),
            Mt = wt ? "MSPointerDown" : "pointerdown",
            Rt = wt ? "MSPointerMove" : "pointermove",
            Nt = wt ? "MSPointerUp" : "pointerup",
            Ft = wt ? "MSPointerCancel" : "pointercancel",
            Dt = ["INPUT", "SELECT", "OPTION"],
            jt = {},
            zt = !1,
            Vt = 0;

          function Ut(t) {
            jt[t.pointerId] = t, Vt++
          }

          function Ht(t) {
            jt[t.pointerId] && (jt[t.pointerId] = t)
          }

          function Bt(t) {
            delete jt[t.pointerId], Vt--
          }

          function Zt(t, e) {
            for (var n in t.touches = [], jt) t.touches.push(jt[n]);
            t.changedTouches = [t], e(t)
          }
          var $t = wt ? "MSPointerDown" : xt ? "pointerdown" : "touchstart",
            qt = wt ? "MSPointerUp" : xt ? "pointerup" : "touchend",
            Gt = "_leaflet_";

          function Wt(t, e, n) {
            var i, r, s = !1;

            function o(t) {
              var e;
              if (xt) {
                if (!et || "mouse" === t.pointerType) return;
                e = Vt
              } else e = t.touches.length;
              if (!(e > 1)) {
                var n = Date.now(),
                  o = n - (i || n);
                r = t.touches ? t.touches[0] : t, s = o > 0 && o <= 250, i = n
              }
            }

            function a(t) {
              if (s && !r.cancelBubble) {
                if (xt) {
                  if (!et || "mouse" === t.pointerType) return;
                  var n, o, a = {};
                  for (o in r) a[o] = (n = r[o]) && n.bind ? n.bind(r) : n;
                  r = a
                }
                r.type = "dblclick", r.button = 0, e(r), i = null
              }
            }
            return t[Gt + $t + n] = o, t[Gt + qt + n] = a, t[Gt + "dblclick" + n] = e, t.addEventListener($t, o, !!Tt && {
              passive: !1
            }), t.addEventListener(qt, a, !!Tt && {
              passive: !1
            }), t.addEventListener("dblclick", e, !1), this
          }

          function Kt(t, e) {
            var n = t[Gt + qt + e],
              i = t[Gt + "dblclick" + e];
            return t.removeEventListener($t, t[Gt + $t + e], !!Tt && {
              passive: !1
            }), t.removeEventListener(qt, n, !!Tt && {
              passive: !1
            }), et || t.removeEventListener("dblclick", i, !1), this
          }
          var Yt, Jt, Qt, Xt, te, ee = _e(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
            ne = _e(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
            ie = "webkitTransition" === ne || "OTransition" === ne ? ne + "End" : "transitionend";

          function re(t) {
            return "string" == typeof t ? document.getElementById(t) : t
          }

          function se(t, e) {
            var n = t.style[e] || t.currentStyle && t.currentStyle[e];
            if ((!n || "auto" === n) && document.defaultView) {
              var i = document.defaultView.getComputedStyle(t, null);
              n = i ? i[e] : null
            }
            return "auto" === n ? null : n
          }

          function oe(t, e, n) {
            var i = document.createElement(t);
            return i.className = e || "", n && n.appendChild(i), i
          }

          function ae(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
          }

          function le(t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
          }

          function ce(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t)
          }

          function ue(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
          }

          function he(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var n = me(t);
            return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
          }

          function de(t, e) {
            if (void 0 !== t.classList)
              for (var n = d(e), i = 0, r = n.length; i < r; i++) t.classList.add(n[i]);
            else if (!he(t, e)) {
              var s = me(t);
              fe(t, (s ? s + " " : "") + e)
            }
          }

          function pe(t, e) {
            void 0 !== t.classList ? t.classList.remove(e) : fe(t, h((" " + me(t) + " ").replace(" " + e + " ", " ")))
          }

          function fe(t, e) {
            void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
          }

          function me(t) {
            return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
          }

          function ge(t, e) {
            "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
              var n = !1,
                i = "DXImageTransform.Microsoft.Alpha";
              try {
                n = t.filters.item(i)
              } catch (r) {
                if (1 === e) return
              }
              e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
            }(t, e)
          }

          function _e(t) {
            for (var e = document.documentElement.style, n = 0; n < t.length; n++)
              if (t[n] in e) return t[n];
            return !1
          }

          function ve(t, e, n) {
            var i = e || new O(0, 0);
            t.style[ee] = (ft ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (n ? " scale(" + n + ")" : "")
          }

          function ye(t, e) {
            t._leaflet_pos = e, _t ? ve(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
          }

          function be(t) {
            return t._leaflet_pos || new O(0, 0)
          }
          if ("onselectstart" in document) Yt = function () {
            Le(window, "selectstart", De)
          }, Jt = function () {
            Ie(window, "selectstart", De)
          };
          else {
            var we = _e(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            Yt = function () {
              if (we) {
                var t = document.documentElement.style;
                Qt = t[we], t[we] = "none"
              }
            }, Jt = function () {
              we && (document.documentElement.style[we] = Qt, Qt = void 0)
            }
          }

          function xe() {
            Le(window, "dragstart", De)
          }

          function Ce() {
            Ie(window, "dragstart", De)
          }

          function Se(t) {
            for (; - 1 === t.tabIndex;) t = t.parentNode;
            t.style && (ke(), Xt = t, te = t.style.outline, t.style.outline = "none", Le(window, "keydown", ke))
          }

          function ke() {
            Xt && (Xt.style.outline = te, Xt = void 0, te = void 0, Ie(window, "keydown", ke))
          }

          function Pe(t) {
            do {
              t = t.parentNode
            } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
            return t
          }

          function Te(t) {
            var e = t.getBoundingClientRect();
            return {
              x: e.width / t.offsetWidth || 1,
              y: e.height / t.offsetHeight || 1,
              boundingClientRect: e
            }
          }
          var Ee = (Object.freeze || Object)({
            TRANSFORM: ee,
            TRANSITION: ne,
            TRANSITION_END: ie,
            get: re,
            getStyle: se,
            create: oe,
            remove: ae,
            empty: le,
            toFront: ce,
            toBack: ue,
            hasClass: he,
            addClass: de,
            removeClass: pe,
            setClass: fe,
            getClass: me,
            setOpacity: ge,
            testProp: _e,
            setTransform: ve,
            setPosition: ye,
            getPosition: be,
            disableTextSelection: Yt,
            enableTextSelection: Jt,
            disableImageDrag: xe,
            enableImageDrag: Ce,
            preventOutline: Se,
            restoreOutline: ke,
            getSizedParentNode: Pe,
            getScale: Te
          });

          function Le(t, e, n, i) {
            if ("object" == typeof e)
              for (var r in e) Oe(t, r, e[r], n);
            else
              for (var s = 0, o = (e = d(e)).length; s < o; s++) Oe(t, e[s], n, i);
            return this
          }
          var Ae = "_leaflet_events";

          function Ie(t, e, n, i) {
            if ("object" == typeof e)
              for (var r in e) Me(t, r, e[r], n);
            else if (e)
              for (var s = 0, o = (e = d(e)).length; s < o; s++) Me(t, e[s], n, i);
            else {
              for (var a in t[Ae]) Me(t, a, t[Ae][a]);
              delete t[Ae]
            }
            return this
          }

          function Oe(t, e, n, i) {
            var s = e + o(n) + (i ? "_" + o(i) : "");
            if (t[Ae] && t[Ae][s]) return this;
            var a = function (e) {
                return n.call(i || t, e || window.event)
              },
              l = a;
            xt && 0 === e.indexOf("touch") ? function (t, e, n, i) {
              "touchstart" === e ? function (t, e, n) {
                var i = r((function (t) {
                  if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                    if (!(Dt.indexOf(t.target.tagName) < 0)) return;
                    De(t)
                  }
                  Zt(t, e)
                }));
                t["_leaflet_touchstart" + n] = i, t.addEventListener(Mt, i, !1), zt || (document.documentElement.addEventListener(Mt, Ut, !0), document.documentElement.addEventListener(Rt, Ht, !0), document.documentElement.addEventListener(Nt, Bt, !0), document.documentElement.addEventListener(Ft, Bt, !0), zt = !0)
              }(t, n, i) : "touchmove" === e ? function (t, e, n) {
                var i = function (t) {
                  (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Zt(t, e)
                };
                t["_leaflet_touchmove" + n] = i, t.addEventListener(Rt, i, !1)
              }(t, n, i) : "touchend" === e && function (t, e, n) {
                var i = function (t) {
                  Zt(t, e)
                };
                t["_leaflet_touchend" + n] = i, t.addEventListener(Nt, i, !1), t.addEventListener(Ft, i, !1)
              }(t, n, i)
            }(t, e, a, s) : !Ct || "dblclick" !== e || !Wt || xt && lt ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !!Tt && {
              passive: !1
            }) : "mouseenter" === e || "mouseleave" === e ? t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", a = function (e) {
              e = e || window.event, qe(t, e) && l(e)
            }, !1) : ("click" === e && it && (a = function (t) {
              ! function (t, e) {
                var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                  i = He && n - He;
                i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? je(t) : (He = n, e(t))
              }(t, l)
            }), t.addEventListener(e, a, !1)) : "attachEvent" in t && t.attachEvent("on" + e, a) : Wt(t, a, s), t[Ae] = t[Ae] || {}, t[Ae][s] = a
          }

          function Me(t, e, n, i) {
            var r = e + o(n) + (i ? "_" + o(i) : ""),
              s = t[Ae] && t[Ae][r];
            if (!s) return this;
            xt && 0 === e.indexOf("touch") ? function (t, e, n) {
              var i = t["_leaflet_" + e + n];
              "touchstart" === e ? t.removeEventListener(Mt, i, !1) : "touchmove" === e ? t.removeEventListener(Rt, i, !1) : "touchend" === e && (t.removeEventListener(Nt, i, !1), t.removeEventListener(Ft, i, !1))
            }(t, e, r) : !Ct || "dblclick" !== e || !Kt || xt && lt ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !!Tt && {
              passive: !1
            }) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s) : Kt(t, r), t[Ae][r] = null
          }

          function Re(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, $e(t), this
          }

          function Ne(t) {
            return Oe(t, "mousewheel", Re), this
          }

          function Fe(t) {
            return Le(t, "mousedown touchstart dblclick", Re), Oe(t, "click", Ze), this
          }

          function De(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
          }

          function je(t) {
            return De(t), Re(t), this
          }

          function ze(t, e) {
            if (!e) return new O(t.clientX, t.clientY);
            var n = Te(e),
              i = n.boundingClientRect;
            return new O((t.clientX - i.left) / n.x - e.clientLeft, (t.clientY - i.top) / n.y - e.clientTop)
          }
          var Ve = pt && lt ? 2 * window.devicePixelRatio : ct ? window.devicePixelRatio : 1;

          function Ue(t) {
            return et ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ve : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
          }
          var He, Be = {};

          function Ze(t) {
            Be[t.type] = !0
          }

          function $e(t) {
            var e = Be[t.type];
            return Be[t.type] = !1, e
          }

          function qe(t, e) {
            var n = e.relatedTarget;
            if (!n) return !0;
            try {
              for (; n && n !== t;) n = n.parentNode
            } catch (i) {
              return !1
            }
            return n !== t
          }
          var Ge = (Object.freeze || Object)({
              on: Le,
              off: Ie,
              stopPropagation: Re,
              disableScrollPropagation: Ne,
              disableClickPropagation: Fe,
              preventDefault: De,
              stop: je,
              getMousePosition: ze,
              getWheelDelta: Ue,
              fakeStop: Ze,
              skipped: $e,
              isExternalTarget: qe,
              addListener: Le,
              removeListener: Ie
            }),
            We = I.extend({
              run: function (t, e, n, i) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = be(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
              },
              stop: function () {
                this._inProgress && (this._step(!0), this._complete())
              },
              _animate: function () {
                this._animId = k(this._animate, this), this._step()
              },
              _step: function (t) {
                var e = +new Date - this._startTime,
                  n = 1e3 * this._duration;
                e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete())
              },
              _runFrame: function (t, e) {
                var n = this._startPos.add(this._offset.multiplyBy(t));
                e && n._round(), ye(this._el, n), this.fire("step")
              },
              _complete: function () {
                P(this._animId), this._inProgress = !1, this.fire("end")
              },
              _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
              }
            }),
            Ke = I.extend({
              options: {
                crs: W,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
              },
              initialize: function (t, e) {
                e = p(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = r(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(V(e.center), e.zoom, {
                  reset: !0
                }), this.callInitHooks(), this._zoomAnimated = ne && _t && !St && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Le(this._proxy, ie, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
              },
              setView: function (t, e, i) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(V(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = n({
                  animate: i.animate
                }, i.zoom), i.pan = n({
                  animate: i.animate,
                  duration: i.duration
                }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
              },
              setZoom: function (t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                  zoom: e
                }) : (this._zoom = t, this)
              },
              zoomIn: function (t, e) {
                return this.setZoom(this._zoom + (t = t || (_t ? this.options.zoomDelta : 1)), e)
              },
              zoomOut: function (t, e) {
                return this.setZoom(this._zoom - (t = t || (_t ? this.options.zoomDelta : 1)), e)
              },
              setZoomAround: function (t, e, n) {
                var i = this.getZoomScale(e),
                  r = this.getSize().divideBy(2),
                  s = (t instanceof O ? t : this.latLngToContainerPoint(t)).subtract(r).multiplyBy(1 - 1 / i),
                  o = this.containerPointToLatLng(r.add(s));
                return this.setView(o, e, {
                  zoom: n
                })
              },
              _getBoundsCenterZoom: function (t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : j(t);
                var n = R(e.paddingTopLeft || e.padding || [0, 0]),
                  i = R(e.paddingBottomRight || e.padding || [0, 0]),
                  r = this.getBoundsZoom(t, !1, n.add(i));
                if ((r = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, r) : r) === 1 / 0) return {
                  center: t.getCenter(),
                  zoom: r
                };
                var s = i.subtract(n).divideBy(2),
                  o = this.project(t.getSouthWest(), r),
                  a = this.project(t.getNorthEast(), r);
                return {
                  center: this.unproject(o.add(a).divideBy(2).add(s), r),
                  zoom: r
                }
              },
              fitBounds: function (t, e) {
                if (!(t = j(t)).isValid()) throw new Error("Bounds are not valid.");
                var n = this._getBoundsCenterZoom(t, e);
                return this.setView(n.center, n.zoom, e)
              },
              fitWorld: function (t) {
                return this.fitBounds([
                  [-90, -180],
                  [90, 180]
                ], t)
              },
              panTo: function (t, e) {
                return this.setView(t, this._zoom, {
                  pan: e
                })
              },
              panBy: function (t, e) {
                if (e = e || {}, !(t = R(t).round()).x && !t.y) return this.fire("moveend");
                if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new We, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                  }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                  de(this._mapPane, "leaflet-pan-anim");
                  var n = this._getMapPanePos().subtract(t).round();
                  this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
              },
              flyTo: function (t, e, n) {
                if (!1 === (n = n || {}).animate || !_t) return this.setView(t, e, n);
                this._stop();
                var i = this.project(this.getCenter()),
                  r = this.project(t),
                  s = this.getSize(),
                  o = this._zoom;
                t = V(t), e = void 0 === e ? o : e;
                var a = Math.max(s.x, s.y),
                  l = a * this.getZoomScale(o, e),
                  c = r.distanceTo(i) || 1;

                function u(t) {
                  var e = (l * l - a * a + 2.0164 * (t ? -1 : 1) * 2.0164 * c * c) / (2 * (t ? l : a) * 2.0164 * c),
                    n = Math.sqrt(e * e + 1) - e;
                  return n < 1e-9 ? -18 : Math.log(n)
                }

                function h(t) {
                  return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function d(t) {
                  return (Math.exp(t) + Math.exp(-t)) / 2
                }
                var p = u(0),
                  f = Date.now(),
                  m = (u(1) - p) / 1.42,
                  g = n.duration ? 1e3 * n.duration : 1e3 * m * .8;
                return this._moveStart(!0, n.noMoveStart), (function n() {
                  var s = (Date.now() - f) / g,
                    l = function (t) {
                      return 1 - Math.pow(1 - t, 1.5)
                    }(s) * m;
                  s <= 1 ? (this._flyToFrame = k(n, this), this._move(this.unproject(i.add(r.subtract(i).multiplyBy(function (t) {
                    return a * (d(p) * (h(e = p + 1.42 * t) / d(e)) - h(p)) / 2.0164;
                    var e
                  }(l) / c)), o), this.getScaleZoom(a / function (t) {
                    return a * (d(p) / d(p + 1.42 * t))
                  }(l), o), {
                    flyTo: !0
                  })) : this._move(t, e)._moveEnd(!0)
                }).call(this), this
              },
              flyToBounds: function (t, e) {
                var n = this._getBoundsCenterZoom(t, e);
                return this.flyTo(n.center, n.zoom, e)
              },
              setMaxBounds: function (t) {
                return (t = j(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
              },
              setMinZoom: function (t) {
                var e = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
              },
              setMaxZoom: function (t) {
                var e = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
              },
              panInsideBounds: function (t, e) {
                this._enforcingBounds = !0;
                var n = this.getCenter(),
                  i = this._limitCenter(n, this._zoom, j(t));
                return n.equals(i) || this.panTo(i, e), this._enforcingBounds = !1, this
              },
              panInside: function (t, e) {
                var n = R((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                  i = R(e.paddingBottomRight || e.padding || [0, 0]),
                  r = this.getCenter(),
                  s = this.project(r),
                  o = this.project(t),
                  a = this.getPixelBounds(),
                  l = a.getSize().divideBy(2),
                  c = F([a.min.add(n), a.max.subtract(i)]);
                if (!c.contains(o)) {
                  this._enforcingBounds = !0;
                  var u = s.subtract(o),
                    h = R(o.x + u.x, o.y + u.y);
                  (o.x < c.min.x || o.x > c.max.x) && (h.x = s.x - u.x, u.x > 0 ? h.x += l.x - n.x : h.x -= l.x - i.x), (o.y < c.min.y || o.y > c.max.y) && (h.y = s.y - u.y, u.y > 0 ? h.y += l.y - n.y : h.y -= l.y - i.y), this.panTo(this.unproject(h), e), this._enforcingBounds = !1
                }
                return this
              },
              invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = n({
                  animate: !1,
                  pan: !0
                }, !0 === t ? {
                  animate: !0
                } : t);
                var e = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var i = this.getSize(),
                  s = e.divideBy(2).round(),
                  o = i.divideBy(2).round(),
                  a = s.subtract(o);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(r(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                  oldSize: e,
                  newSize: i
                })) : this
              },
              stop: function () {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
              },
              locate: function (t) {
                if (t = this._locateOptions = n({
                    timeout: 1e4,
                    watch: !1
                  }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                  code: 0,
                  message: "Geolocation not supported."
                }), this;
                var e = r(this._handleGeolocationResponse, this),
                  i = r(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
              },
              stopLocate: function () {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
              },
              _handleGeolocationError: function (t) {
                var e = t.code,
                  n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                  code: e,
                  message: "Geolocation error: " + n + "."
                })
              },
              _handleGeolocationResponse: function (t) {
                var e = new z(t.coords.latitude, t.coords.longitude),
                  n = e.toBounds(2 * t.coords.accuracy),
                  i = this._locateOptions;
                if (i.setView) {
                  var r = this.getBoundsZoom(n);
                  this.setView(e, i.maxZoom ? Math.min(r, i.maxZoom) : r)
                }
                var s = {
                  latlng: e,
                  bounds: n,
                  timestamp: t.timestamp
                };
                for (var o in t.coords) "number" == typeof t.coords[o] && (s[o] = t.coords[o]);
                this.fire("locationfound", s)
              },
              addHandler: function (t, e) {
                if (!e) return this;
                var n = this[t] = new e(this);
                return this._handlers.push(n), this.options[t] && n.enable(), this
              },
              remove: function () {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                  delete this._container._leaflet_id, delete this._containerId
                } catch (e) {
                  this._container._leaflet_id = void 0, this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ae(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (P(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                for (t in this._panes) ae(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
              },
              createPane: function (t, e) {
                var n = oe("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                return t && (this._panes[t] = n), n
              },
              getCenter: function () {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
              },
              getZoom: function () {
                return this._zoom
              },
              getBounds: function () {
                var t = this.getPixelBounds();
                return new D(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
              },
              getMinZoom: function () {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
              },
              getMaxZoom: function () {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
              },
              getBoundsZoom: function (t, e, n) {
                t = j(t), n = R(n || [0, 0]);
                var i = this.getZoom() || 0,
                  r = this.getMinZoom(),
                  s = this.getMaxZoom(),
                  o = t.getNorthWest(),
                  a = t.getSouthEast(),
                  l = this.getSize().subtract(n),
                  c = F(this.project(a, i), this.project(o, i)).getSize(),
                  u = _t ? this.options.zoomSnap : 1,
                  h = l.x / c.x,
                  d = l.y / c.y,
                  p = e ? Math.max(h, d) : Math.min(h, d);
                return i = this.getScaleZoom(p, i), u && (i = Math.round(i / (u / 100)) * (u / 100), i = e ? Math.ceil(i / u) * u : Math.floor(i / u) * u), Math.max(r, Math.min(s, i))
              },
              getSize: function () {
                return this._size && !this._sizeChanged || (this._size = new O(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
              },
              getPixelBounds: function (t, e) {
                var n = this._getTopLeftPoint(t, e);
                return new N(n, n.add(this.getSize()))
              },
              getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin
              },
              getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
              },
              getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t
              },
              getPanes: function () {
                return this._panes
              },
              getContainer: function () {
                return this._container
              },
              getZoomScale: function (t, e) {
                var n = this.options.crs;
                return e = void 0 === e ? this._zoom : e, n.scale(t) / n.scale(e)
              },
              getScaleZoom: function (t, e) {
                var n = this.options.crs,
                  i = n.zoom(t * n.scale(e = void 0 === e ? this._zoom : e));
                return isNaN(i) ? 1 / 0 : i
              },
              project: function (t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(V(t), e)
              },
              unproject: function (t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(R(t), e)
              },
              layerPointToLatLng: function (t) {
                var e = R(t).add(this.getPixelOrigin());
                return this.unproject(e)
              },
              latLngToLayerPoint: function (t) {
                return this.project(V(t))._round()._subtract(this.getPixelOrigin())
              },
              wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(V(t))
              },
              wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(j(t))
              },
              distance: function (t, e) {
                return this.options.crs.distance(V(t), V(e))
              },
              containerPointToLayerPoint: function (t) {
                return R(t).subtract(this._getMapPanePos())
              },
              layerPointToContainerPoint: function (t) {
                return R(t).add(this._getMapPanePos())
              },
              containerPointToLatLng: function (t) {
                var e = this.containerPointToLayerPoint(R(t));
                return this.layerPointToLatLng(e)
              },
              latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(t)))
              },
              mouseEventToContainerPoint: function (t) {
                return ze(t, this._container)
              },
              mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
              },
              mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
              },
              _initContainer: function (t) {
                var e = this._container = re(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet_id) throw new Error("Map container is already initialized.");
                Le(e, "scroll", this._onScroll, this), this._containerId = o(e)
              },
              _initLayout: function () {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && _t, de(t, "leaflet-container" + (Ct ? " leaflet-touch" : "") + (Pt ? " leaflet-retina" : "") + (tt ? " leaflet-oldie" : "") + (ut ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var e = se(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
              },
              _initPanes: function () {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ye(this._mapPane, new O(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (de(t.markerPane, "leaflet-zoom-hide"), de(t.shadowPane, "leaflet-zoom-hide"))
              },
              _resetView: function (t, e) {
                ye(this._mapPane, new O(0, 0));
                var n = !this._loaded;
                this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                var i = this._zoom !== e;
                this._moveStart(i, !1)._move(t, e)._moveEnd(i), this.fire("viewreset"), n && this.fire("load")
              },
              _moveStart: function (t, e) {
                return t && this.fire("zoomstart"), e || this.fire("movestart"), this
              },
              _move: function (t, e, n) {
                void 0 === e && (e = this._zoom);
                var i = this._zoom !== e;
                return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (i || n && n.pinch) && this.fire("zoom", n), this.fire("move", n)
              },
              _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend")
              },
              _stop: function () {
                return P(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
              },
              _rawPanBy: function (t) {
                ye(this._mapPane, this._getMapPanePos().subtract(t))
              },
              _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom()
              },
              _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
              },
              _checkIfLoaded: function () {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
              },
              _initEvents: function (t) {
                this._targets = {}, this._targets[o(this._container)] = this;
                var e = t ? Ie : Le;
                e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), _t && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
              },
              _onResize: function () {
                P(this._resizeRequest), this._resizeRequest = k((function () {
                  this.invalidateSize({
                    debounceMoveend: !0
                  })
                }), this)
              },
              _onScroll: function () {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
              },
              _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
              },
              _findEventTargets: function (t, e) {
                for (var n, i = [], r = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s;) {
                  if ((n = this._targets[o(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(n)) {
                    a = !0;
                    break
                  }
                  if (n && n.listens(e, !0)) {
                    if (r && !qe(s, t)) break;
                    if (i.push(n), r) break
                  }
                  if (s === this._container) break;
                  s = s.parentNode
                }
                return i.length || a || r || !qe(s, t) || (i = [this]), i
              },
              _handleDOMEvent: function (t) {
                if (this._loaded && !$e(t)) {
                  var e = t.type;
                  "mousedown" !== e && "keypress" !== e && "keyup" !== e && "keydown" !== e || Se(t.target || t.srcElement), this._fireDOMEvent(t, e)
                }
              },
              _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
              _fireDOMEvent: function (t, e, i) {
                if ("click" === t.type) {
                  var r = n({}, t);
                  r.type = "preclick", this._fireDOMEvent(r, r.type, i)
                }
                if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                  var s = i[0];
                  "contextmenu" === e && s.listens(e, !0) && De(t);
                  var o = {
                    originalEvent: t
                  };
                  if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                    var a = s.getLatLng && (!s._radius || s._radius <= 10);
                    o.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), o.layerPoint = this.containerPointToLayerPoint(o.containerPoint), o.latlng = a ? s.getLatLng() : this.layerPointToLatLng(o.layerPoint)
                  }
                  for (var l = 0; l < i.length; l++)
                    if (i[l].fire(e, o, !0), o.originalEvent._stopped || !1 === i[l].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e)) return
                }
              },
              _draggableMoved: function (t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
              },
              _clearHandlers: function () {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
              },
              whenReady: function (t, e) {
                return this._loaded ? t.call(e || this, {
                  target: this
                }) : this.on("load", t, e), this
              },
              _getMapPanePos: function () {
                return be(this._mapPane) || new O(0, 0)
              },
              _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
              },
              _getTopLeftPoint: function (t, e) {
                return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
              },
              _getNewPixelOrigin: function (t, e) {
                var n = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round()
              },
              _latLngToNewLayerPoint: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return this.project(t, e)._subtract(i)
              },
              _latLngBoundsToNewLayerBounds: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return F([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
              },
              _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
              },
              _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
              },
              _limitCenter: function (t, e, n) {
                if (!n) return t;
                var i = this.project(t, e),
                  r = this.getSize().divideBy(2),
                  s = new N(i.subtract(r), i.add(r)),
                  o = this._getBoundsOffset(s, n, e);
                return o.round().equals([0, 0]) ? t : this.unproject(i.add(o), e)
              },
              _limitOffset: function (t, e) {
                if (!e) return t;
                var n = this.getPixelBounds(),
                  i = new N(n.min.add(t), n.max.add(t));
                return t.add(this._getBoundsOffset(i, e))
              },
              _getBoundsOffset: function (t, e, n) {
                var i = F(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
                  r = i.min.subtract(t.min),
                  s = i.max.subtract(t.max);
                return new O(this._rebound(r.x, -s.x), this._rebound(r.y, -s.y))
              },
              _rebound: function (t, e) {
                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
              },
              _limitZoom: function (t) {
                var e = this.getMinZoom(),
                  n = this.getMaxZoom(),
                  i = _t ? this.options.zoomSnap : 1;
                return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t))
              },
              _onPanTransitionStep: function () {
                this.fire("move")
              },
              _onPanTransitionEnd: function () {
                pe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
              },
              _tryAnimatedPan: function (t, e) {
                var n = this._getCenterOffset(t)._trunc();
                return !(!0 !== (e && e.animate) && !this.getSize().contains(n) || (this.panBy(n, e), 0))
              },
              _createAnimProxy: function () {
                var t = this._proxy = oe("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", (function (t) {
                  var e = ee,
                    n = this._proxy.style[e];
                  ve(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
              },
              _destroyAnimProxy: function () {
                ae(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
              },
              _animMoveEnd: function () {
                var t = this.getCenter(),
                  e = this.getZoom();
                ve(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
              },
              _catchTransitionEnd: function (t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
              },
              _nothingToAnimate: function () {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
              },
              _tryAnimatedZoom: function (t, e, n) {
                if (this._animatingZoom) return !0;
                if (n = n || {}, !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var i = this.getZoomScale(e),
                  r = this._getCenterOffset(t)._divideBy(1 - 1 / i);
                return !(!0 !== n.animate && !this.getSize().contains(r) || (k((function () {
                  this._moveStart(!0, !1)._animateZoom(t, e, !0)
                }), this), 0))
              },
              _animateZoom: function (t, e, n, i) {
                this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, de(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                  center: t,
                  zoom: e,
                  noUpdate: i
                }), setTimeout(r(this._onZoomTransitionEnd, this), 250))
              },
              _onZoomTransitionEnd: function () {
                this._animatingZoom && (this._mapPane && pe(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), k((function () {
                  this._moveEnd(!0)
                }), this))
              }
            }),
            Ye = E.extend({
              options: {
                position: "topright"
              },
              initialize: function (t) {
                p(this, t)
              },
              getPosition: function () {
                return this.options.position
              },
              setPosition: function (t) {
                var e = this._map;
                return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
              },
              getContainer: function () {
                return this._container
              },
              addTo: function (t) {
                this.remove(), this._map = t;
                var e = this._container = this.onAdd(t),
                  n = this.getPosition(),
                  i = t._controlCorners[n];
                return de(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this._map.on("unload", this.remove, this), this
              },
              remove: function () {
                return this._map ? (ae(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this
              },
              _refocusOnMap: function (t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
              }
            }),
            Je = function (t) {
              return new Ye(t)
            };
          Ke.include({
            addControl: function (t) {
              return t.addTo(this), this
            },
            removeControl: function (t) {
              return t.remove(), this
            },
            _initControlPos: function () {
              var t = this._controlCorners = {},
                e = "leaflet-",
                n = this._controlContainer = oe("div", e + "control-container", this._container);

              function i(i, r) {
                t[i + r] = oe("div", e + i + " " + e + r, n)
              }
              i("top", "left"), i("top", "right"), i("bottom", "left"), i("bottom", "right")
            },
            _clearControlPos: function () {
              for (var t in this._controlCorners) ae(this._controlCorners[t]);
              ae(this._controlContainer), delete this._controlCorners, delete this._controlContainer
            }
          });
          var Qe = Ye.extend({
              options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (t, e, n, i) {
                  return n < i ? -1 : i < n ? 1 : 0
                }
              },
              initialize: function (t, e, n) {
                for (var i in p(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[i], i);
                for (i in e) this._addLayer(e[i], i, !0)
              },
              onAdd: function (t) {
                this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                return this._container
              },
              addTo: function (t) {
                return Ye.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
              },
              onRemove: function () {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
              },
              addBaseLayer: function (t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this
              },
              addOverlay: function (t, e) {
                return this._addLayer(t, e, !0), this._map ? this._update() : this
              },
              removeLayer: function (t) {
                t.off("add remove", this._onLayerChange, this);
                var e = this._getLayer(o(t));
                return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
              },
              expand: function () {
                de(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._section.clientHeight ? (de(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : pe(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
              },
              collapse: function () {
                return pe(this._container, "leaflet-control-layers-expanded"), this
              },
              _initLayout: function () {
                var t = "leaflet-control-layers",
                  e = this._container = oe("div", t),
                  n = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0), Fe(e), Ne(e);
                var i = this._section = oe("section", t + "-list");
                n && (this._map.on("click", this.collapse, this), it || Le(e, {
                  mouseenter: this.expand,
                  mouseleave: this.collapse
                }, this));
                var r = this._layersLink = oe("a", t + "-toggle", e);
                r.href = "#", r.title = "Layers", Ct ? (Le(r, "click", je), Le(r, "click", this.expand, this)) : Le(r, "focus", this.expand, this), n || this.expand(), this._baseLayersList = oe("div", t + "-base", i), this._separator = oe("div", t + "-separator", i), this._overlaysList = oe("div", t + "-overlays", i), e.appendChild(i)
              },
              _getLayer: function (t) {
                for (var e = 0; e < this._layers.length; e++)
                  if (this._layers[e] && o(this._layers[e].layer) === t) return this._layers[e]
              },
              _addLayer: function (t, e, n) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                  layer: t,
                  name: e,
                  overlay: n
                }), this.options.sortLayers && this._layers.sort(r((function (t, e) {
                  return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
              },
              _update: function () {
                if (!this._container) return this;
                le(this._baseLayersList), le(this._overlaysList), this._layerControlInputs = [];
                var t, e, n, i, r = 0;
                for (n = 0; n < this._layers.length; n++) this._addItem(i = this._layers[n]), e = e || i.overlay, t = t || !i.overlay, r += i.overlay ? 0 : 1;
                return this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && r > 1) ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
              },
              _onLayerChange: function (t) {
                this._handlingClick || this._update();
                var e = this._getLayer(o(t.target)),
                  n = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                n && this._map.fire(n, e)
              },
              _createRadioElement: function (t, e) {
                var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                  i = document.createElement("div");
                return i.innerHTML = n, i.firstChild
              },
              _addItem: function (t) {
                var e, n = document.createElement("label"),
                  i = this._map.hasLayer(t.layer);
                t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = i) : e = this._createRadioElement("leaflet-base-layers_" + o(this), i), this._layerControlInputs.push(e), e.layerId = o(t.layer), Le(e, "click", this._onInputClick, this);
                var r = document.createElement("span");
                r.innerHTML = " " + t.name;
                var s = document.createElement("div");
                return n.appendChild(s), s.appendChild(e), s.appendChild(r), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(n), this._checkDisabledLayers(), n
              },
              _onInputClick: function () {
                var t, e, n = this._layerControlInputs,
                  i = [],
                  r = [];
                this._handlingClick = !0;
                for (var s = n.length - 1; s >= 0; s--) e = this._getLayer((t = n[s]).layerId).layer, t.checked ? i.push(e) : t.checked || r.push(e);
                for (s = 0; s < r.length; s++) this._map.hasLayer(r[s]) && this._map.removeLayer(r[s]);
                for (s = 0; s < i.length; s++) this._map.hasLayer(i[s]) || this._map.addLayer(i[s]);
                this._handlingClick = !1, this._refocusOnMap()
              },
              _checkDisabledLayers: function () {
                for (var t, e, n = this._layerControlInputs, i = this._map.getZoom(), r = n.length - 1; r >= 0; r--) e = this._getLayer((t = n[r]).layerId).layer, t.disabled = void 0 !== e.options.minZoom && i < e.options.minZoom || void 0 !== e.options.maxZoom && i > e.options.maxZoom
              },
              _expandIfNotCollapsed: function () {
                return this._map && !this.options.collapsed && this.expand(), this
              },
              _expand: function () {
                return this.expand()
              },
              _collapse: function () {
                return this.collapse()
              }
            }),
            Xe = Ye.extend({
              options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
              },
              onAdd: function (t) {
                var e = "leaflet-control-zoom",
                  n = oe("div", e + " leaflet-bar"),
                  i = this.options;
                return this._zoomInButton = this._createButton(i.zoomInText, i.zoomInTitle, e + "-in", n, this._zoomIn), this._zoomOutButton = this._createButton(i.zoomOutText, i.zoomOutTitle, e + "-out", n, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n
              },
              onRemove: function (t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
              },
              disable: function () {
                return this._disabled = !0, this._updateDisabled(), this
              },
              enable: function () {
                return this._disabled = !1, this._updateDisabled(), this
              },
              _zoomIn: function (t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
              },
              _zoomOut: function (t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
              },
              _createButton: function (t, e, n, i, r) {
                var s = oe("a", n, i);
                return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), Fe(s), Le(s, "click", je), Le(s, "click", r, this), Le(s, "click", this._refocusOnMap, this), s
              },
              _updateDisabled: function () {
                var t = this._map,
                  e = "leaflet-disabled";
                pe(this._zoomInButton, e), pe(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && de(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && de(this._zoomInButton, e)
              }
            });
          Ke.mergeOptions({
            zoomControl: !0
          }), Ke.addInitHook((function () {
            this.options.zoomControl && (this.zoomControl = new Xe, this.addControl(this.zoomControl))
          }));
          var tn = Ye.extend({
              options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
              },
              onAdd: function (t) {
                var e = oe("div", "leaflet-control-scale"),
                  n = this.options;
                return this._addScales(n, "leaflet-control-scale-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
              },
              onRemove: function (t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
              },
              _addScales: function (t, e, n) {
                t.metric && (this._mScale = oe("div", e, n)), t.imperial && (this._iScale = oe("div", e, n))
              },
              _update: function () {
                var t = this._map,
                  e = t.getSize().y / 2,
                  n = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                this._updateScales(n)
              },
              _updateScales: function (t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
              },
              _updateMetric: function (t) {
                var e = this._getRoundNum(t);
                this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t)
              },
              _updateImperial: function (t) {
                var e, n, i, r = 3.2808399 * t;
                r > 5280 ? (n = this._getRoundNum(e = r / 5280), this._updateScale(this._iScale, n + " mi", n / e)) : (i = this._getRoundNum(r), this._updateScale(this._iScale, i + " ft", i / r))
              },
              _updateScale: function (t, e, n) {
                t.style.width = Math.round(this.options.maxWidth * n) + "px", t.innerHTML = e
              },
              _getRoundNum: function (t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                  n = t / e;
                return e * (n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1)
              }
            }),
            en = Ye.extend({
              options: {
                position: "bottomright",
                prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
              },
              initialize: function (t) {
                p(this, t), this._attributions = {}
              },
              onAdd: function (t) {
                for (var e in t.attributionControl = this, this._container = oe("div", "leaflet-control-attribution"), Fe(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(), this._container
              },
              setPrefix: function (t) {
                return this.options.prefix = t, this._update(), this
              },
              addAttribution: function (t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
              },
              removeAttribution: function (t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
              },
              _update: function () {
                if (this._map) {
                  var t = [];
                  for (var e in this._attributions) this._attributions[e] && t.push(e);
                  var n = [];
                  this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ")
                }
              }
            });
          Ke.mergeOptions({
            attributionControl: !0
          }), Ke.addInitHook((function () {
            this.options.attributionControl && (new en).addTo(this)
          })), Ye.Layers = Qe, Ye.Zoom = Xe, Ye.Scale = tn, Ye.Attribution = en, Je.layers = function (t, e, n) {
            return new Qe(t, e, n)
          }, Je.zoom = function (t) {
            return new Xe(t)
          }, Je.scale = function (t) {
            return new tn(t)
          }, Je.attribution = function (t) {
            return new en(t)
          };
          var nn = E.extend({
            initialize: function (t) {
              this._map = t
            },
            enable: function () {
              return this._enabled || (this._enabled = !0, this.addHooks()), this
            },
            disable: function () {
              return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            },
            enabled: function () {
              return !!this._enabled
            }
          });
          nn.addTo = function (t, e) {
            return t.addHandler(e, this), this
          };
          var rn, sn = {
              Events: A
            },
            on = Ct ? "touchstart mousedown" : "mousedown",
            an = {
              mousedown: "mouseup",
              touchstart: "touchend",
              pointerdown: "touchend",
              MSPointerDown: "touchend"
            },
            ln = {
              mousedown: "mousemove",
              touchstart: "touchmove",
              pointerdown: "touchmove",
              MSPointerDown: "touchmove"
            },
            cn = I.extend({
              options: {
                clickTolerance: 3
              },
              initialize: function (t, e, n, i) {
                p(this, i), this._element = t, this._dragStartTarget = e || t, this._preventOutline = n
              },
              enable: function () {
                this._enabled || (Le(this._dragStartTarget, on, this._onDown, this), this._enabled = !0)
              },
              disable: function () {
                this._enabled && (cn._dragging === this && this.finishDrag(), Ie(this._dragStartTarget, on, this._onDown, this), this._enabled = !1, this._moved = !1)
              },
              _onDown: function (t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !he(this._element, "leaflet-zoom-anim") && !(cn._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (cn._dragging = this, this._preventOutline && Se(this._element), xe(), Yt(), this._moving)))) {
                  this.fire("down");
                  var e = t.touches ? t.touches[0] : t,
                    n = Pe(this._element);
                  this._startPoint = new O(e.clientX, e.clientY), this._parentScale = Te(n), Le(document, ln[t.type], this._onMove, this), Le(document, an[t.type], this._onUp, this)
                }
              },
              _onMove: function (t) {
                if (!t._simulated && this._enabled)
                  if (t.touches && t.touches.length > 1) this._moved = !0;
                  else {
                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                      n = new O(e.clientX, e.clientY)._subtract(this._startPoint);
                    (n.x || n.y) && (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (n.x /= this._parentScale.x, n.y /= this._parentScale.y, De(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = be(this._element).subtract(n), de(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), de(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, P(this._animRequest), this._lastEvent = t, this._animRequest = k(this._updatePosition, this, !0)))
                  }
              },
              _updatePosition: function () {
                var t = {
                  originalEvent: this._lastEvent
                };
                this.fire("predrag", t), ye(this._element, this._newPos), this.fire("drag", t)
              },
              _onUp: function (t) {
                !t._simulated && this._enabled && this.finishDrag()
              },
              finishDrag: function () {
                for (var t in pe(document.body, "leaflet-dragging"), this._lastTarget && (pe(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ln) Ie(document, ln[t], this._onMove, this), Ie(document, an[t], this._onUp, this);
                Ce(), Jt(), this._moved && this._moving && (P(this._animRequest), this.fire("dragend", {
                  distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, cn._dragging = !1
              }
            });

          function un(t, e) {
            if (!e || !t.length) return t.slice();
            var n = e * e;
            return function (t, e) {
              var n = t.length,
                i = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
              i[0] = i[n - 1] = 1,
                function t(e, n, i, r, s) {
                  var o, a, l, c = 0;
                  for (a = r + 1; a <= s - 1; a++)(l = mn(e[a], e[r], e[s], !0)) > c && (o = a, c = l);
                  c > i && (n[o] = 1, t(e, n, i, r, o), t(e, n, i, o, s))
                }(t, i, e, 0, n - 1);
              var r, s = [];
              for (r = 0; r < n; r++) i[r] && s.push(t[r]);
              return s
            }(t = function (t, e) {
              for (var n = [t[0]], i = 1, r = 0, s = t.length; i < s; i++)(l = (a = t[r]).x - (o = t[i]).x) * l + (c = a.y - o.y) * c > e && (n.push(t[i]), r = i);
              var o, a, l, c;
              return r < s - 1 && n.push(t[s - 1]), n
            }(t, n), n)
          }

          function hn(t, e, n) {
            return Math.sqrt(mn(t, e, n, !0))
          }

          function dn(t, e, n, i, r) {
            var s, o, a, l = i ? rn : fn(t, n),
              c = fn(e, n);
            for (rn = c;;) {
              if (!(l | c)) return [t, e];
              if (l & c) return !1;
              a = fn(o = pn(t, e, s = l || c, n, r), n), s === l ? (t = o, l = a) : (e = o, c = a)
            }
          }

          function pn(t, e, n, i, r) {
            var s, o, a = e.x - t.x,
              l = e.y - t.y,
              c = i.min,
              u = i.max;
            return 8 & n ? (s = t.x + a * (u.y - t.y) / l, o = u.y) : 4 & n ? (s = t.x + a * (c.y - t.y) / l, o = c.y) : 2 & n ? (s = u.x, o = t.y + l * (u.x - t.x) / a) : 1 & n && (s = c.x, o = t.y + l * (c.x - t.x) / a), new O(s, o, r)
          }

          function fn(t, e) {
            var n = 0;
            return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n
          }

          function mn(t, e, n, i) {
            var r, s = e.x,
              o = e.y,
              a = n.x - s,
              l = n.y - o,
              c = a * a + l * l;
            return c > 0 && ((r = ((t.x - s) * a + (t.y - o) * l) / c) > 1 ? (s = n.x, o = n.y) : r > 0 && (s += a * r, o += l * r)), a = t.x - s, l = t.y - o, i ? a * a + l * l : new O(s, o)
          }

          function gn(t) {
            return !_(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
          }

          function _n(t) {
            return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), gn(t)
          }
          var vn = (Object.freeze || Object)({
            simplify: un,
            pointToSegmentDistance: hn,
            closestPointOnSegment: function (t, e, n) {
              return mn(t, e, n)
            },
            clipSegment: dn,
            _getEdgeIntersection: pn,
            _getBitCode: fn,
            _sqClosestPointOnSegment: mn,
            isFlat: gn,
            _flat: _n
          });

          function yn(t, e, n) {
            var i, r, s, o, a, l, c, u, h, d = [1, 4, 2, 8];
            for (r = 0, c = t.length; r < c; r++) t[r]._code = fn(t[r], e);
            for (o = 0; o < 4; o++) {
              for (u = d[o], i = [], r = 0, s = (c = t.length) - 1; r < c; s = r++) l = t[s], (a = t[r])._code & u ? l._code & u || ((h = pn(l, a, u, e, n))._code = fn(h, e), i.push(h)) : (l._code & u && ((h = pn(l, a, u, e, n))._code = fn(h, e), i.push(h)), i.push(a));
              t = i
            }
            return t
          }
          var bn = (Object.freeze || Object)({
              clipPolygon: yn
            }),
            wn = {
              project: function (t) {
                return new O(t.lng, t.lat)
              },
              unproject: function (t) {
                return new z(t.y, t.x)
              },
              bounds: new N([-180, -90], [180, 90])
            },
            xn = {
              R: 6378137,
              R_MINOR: 6356752.314245179,
              bounds: new N([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.R,
                  i = t.lat * e,
                  r = this.R_MINOR / n,
                  s = Math.sqrt(1 - r * r),
                  o = s * Math.sin(i),
                  a = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - o) / (1 + o), s / 2);
                return i = -n * Math.log(Math.max(a, 1e-10)), new O(t.lng * e * n, i)
              },
              unproject: function (t) {
                for (var e, n = 180 / Math.PI, i = this.R, r = this.R_MINOR / i, s = Math.sqrt(1 - r * r), o = Math.exp(-t.y / i), a = Math.PI / 2 - 2 * Math.atan(o), l = 0, c = .1; l < 15 && Math.abs(c) > 1e-7; l++) e = s * Math.sin(a), e = Math.pow((1 - e) / (1 + e), s / 2), a += c = Math.PI / 2 - 2 * Math.atan(o * e) - a;
                return new z(a * n, t.x * n / i)
              }
            },
            Cn = (Object.freeze || Object)({
              LonLat: wn,
              Mercator: xn,
              SphericalMercator: Z
            }),
            Sn = n({}, B, {
              code: "EPSG:3395",
              projection: xn,
              transformation: function () {
                var t = .5 / (Math.PI * xn.R);
                return q(t, .5, -t, .5)
              }()
            }),
            kn = n({}, B, {
              code: "EPSG:4326",
              projection: wn,
              transformation: q(1 / 180, 1, -1 / 180, .5)
            }),
            Pn = n({}, H, {
              projection: wn,
              transformation: q(1, 0, -1, 0),
              scale: function (t) {
                return Math.pow(2, t)
              },
              zoom: function (t) {
                return Math.log(t) / Math.LN2
              },
              distance: function (t, e) {
                var n = e.lng - t.lng,
                  i = e.lat - t.lat;
                return Math.sqrt(n * n + i * i)
              },
              infinite: !0
            });
          H.Earth = B, H.EPSG3395 = Sn, H.EPSG3857 = W, H.EPSG900913 = K, H.EPSG4326 = kn, H.Simple = Pn;
          var Tn = I.extend({
            options: {
              pane: "overlayPane",
              attribution: null,
              bubblingMouseEvents: !0
            },
            addTo: function (t) {
              return t.addLayer(this), this
            },
            remove: function () {
              return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function (t) {
              return t && t.removeLayer(this), this
            },
            getPane: function (t) {
              return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function (t) {
              return this._map._targets[o(t)] = this, this
            },
            removeInteractiveTarget: function (t) {
              return delete this._map._targets[o(t)], this
            },
            getAttribution: function () {
              return this.options.attribution
            },
            _layerAdd: function (t) {
              var e = t.target;
              if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                  var n = this.getEvents();
                  e.on(n, this), this.once("remove", (function () {
                    e.off(n, this)
                  }), this)
                }
                this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                  layer: this
                })
              }
            }
          });
          Ke.include({
            addLayer: function (t) {
              if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
              var e = o(t);
              return this._layers[e] || (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
            },
            removeLayer: function (t) {
              var e = o(t);
              return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
              }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
            },
            hasLayer: function (t) {
              return !!t && o(t) in this._layers
            },
            eachLayer: function (t, e) {
              for (var n in this._layers) t.call(e, this._layers[n]);
              return this
            },
            _addLayers: function (t) {
              for (var e = 0, n = (t = t ? _(t) ? t : [t] : []).length; e < n; e++) this.addLayer(t[e])
            },
            _addZoomLimit: function (t) {
              !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[o(t)] = t, this._updateZoomLevels())
            },
            _removeZoomLimit: function (t) {
              var e = o(t);
              this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
            },
            _updateZoomLevels: function () {
              var t = 1 / 0,
                e = -1 / 0,
                n = this._getZoomSpan();
              for (var i in this._zoomBoundLayers) {
                var r = this._zoomBoundLayers[i].options;
                t = void 0 === r.minZoom ? t : Math.min(t, r.minZoom), e = void 0 === r.maxZoom ? e : Math.max(e, r.maxZoom)
              }
              this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
            }
          });
          var En = Tn.extend({
              initialize: function (t, e) {
                var n, i;
                if (p(this, e), this._layers = {}, t)
                  for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n])
              },
              addLayer: function (t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t, this._map && this._map.addLayer(t), this
              },
              removeLayer: function (t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
              },
              hasLayer: function (t) {
                return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
              },
              clearLayers: function () {
                return this.eachLayer(this.removeLayer, this)
              },
              invoke: function (t) {
                var e, n, i = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers)(n = this._layers[e])[t] && n[t].apply(n, i);
                return this
              },
              onAdd: function (t) {
                this.eachLayer(t.addLayer, t)
              },
              onRemove: function (t) {
                this.eachLayer(t.removeLayer, t)
              },
              eachLayer: function (t, e) {
                for (var n in this._layers) t.call(e, this._layers[n]);
                return this
              },
              getLayer: function (t) {
                return this._layers[t]
              },
              getLayers: function () {
                var t = [];
                return this.eachLayer(t.push, t), t
              },
              setZIndex: function (t) {
                return this.invoke("setZIndex", t)
              },
              getLayerId: function (t) {
                return o(t)
              }
            }),
            Ln = En.extend({
              addLayer: function (t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), En.prototype.addLayer.call(this, t), this.fire("layeradd", {
                  layer: t
                }))
              },
              removeLayer: function (t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), En.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                  layer: t
                })) : this
              },
              setStyle: function (t) {
                return this.invoke("setStyle", t)
              },
              bringToFront: function () {
                return this.invoke("bringToFront")
              },
              bringToBack: function () {
                return this.invoke("bringToBack")
              },
              getBounds: function () {
                var t = new D;
                for (var e in this._layers) {
                  var n = this._layers[e];
                  t.extend(n.getBounds ? n.getBounds() : n.getLatLng())
                }
                return t
              }
            }),
            An = E.extend({
              options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
              },
              initialize: function (t) {
                p(this, t)
              },
              createIcon: function (t) {
                return this._createIcon("icon", t)
              },
              createShadow: function (t) {
                return this._createIcon("shadow", t)
              },
              _createIcon: function (t, e) {
                var n = this._getIconUrl(t);
                if (!n) {
                  if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                  return null
                }
                var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
                return this._setIconStyles(i, t), i
              },
              _setIconStyles: function (t, e) {
                var n = this.options,
                  i = n[e + "Size"];
                "number" == typeof i && (i = [i, i]);
                var r = R(i),
                  s = R("shadow" === e && n.shadowAnchor || n.iconAnchor || r && r.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (n.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), r && (t.style.width = r.x + "px", t.style.height = r.y + "px")
              },
              _createImg: function (t, e) {
                return (e = e || document.createElement("img")).src = t, e
              },
              _getIconUrl: function (t) {
                return Pt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
              }
            }),
            In = An.extend({
              options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
              },
              _getIconUrl: function (t) {
                return In.imagePath || (In.imagePath = this._detectIconPath()), (this.options.imagePath || In.imagePath) + An.prototype._getIconUrl.call(this, t)
              },
              _detectIconPath: function () {
                var t = oe("div", "leaflet-default-icon-path", document.body),
                  e = se(t, "background-image") || se(t, "backgroundImage");
                return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
              }
            }),
            On = nn.extend({
              initialize: function (t) {
                this._marker = t
              },
              addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new cn(t, t, !0)), this._draggable.on({
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                }, this).enable(), de(t, "leaflet-marker-draggable")
              },
              removeHooks: function () {
                this._draggable.off({
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && pe(this._marker._icon, "leaflet-marker-draggable")
              },
              moved: function () {
                return this._draggable && this._draggable._moved
              },
              _adjustPan: function (t) {
                var e = this._marker,
                  n = e._map,
                  i = this._marker.options.autoPanSpeed,
                  r = this._marker.options.autoPanPadding,
                  s = be(e._icon),
                  o = n.getPixelBounds(),
                  a = n.getPixelOrigin(),
                  l = F(o.min._subtract(a).add(r), o.max._subtract(a).subtract(r));
                if (!l.contains(s)) {
                  var c = R((Math.max(l.max.x, s.x) - l.max.x) / (o.max.x - l.max.x) - (Math.min(l.min.x, s.x) - l.min.x) / (o.min.x - l.min.x), (Math.max(l.max.y, s.y) - l.max.y) / (o.max.y - l.max.y) - (Math.min(l.min.y, s.y) - l.min.y) / (o.min.y - l.min.y)).multiplyBy(i);
                  n.panBy(c, {
                    animate: !1
                  }), this._draggable._newPos._add(c), this._draggable._startPos._add(c), ye(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = k(this._adjustPan.bind(this, t))
                }
              },
              _onDragStart: function () {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
              },
              _onPreDrag: function (t) {
                this._marker.options.autoPan && (P(this._panRequest), this._panRequest = k(this._adjustPan.bind(this, t)))
              },
              _onDrag: function (t) {
                var e = this._marker,
                  n = e._shadow,
                  i = be(e._icon),
                  r = e._map.layerPointToLatLng(i);
                n && ye(n, i), e._latlng = r, t.latlng = r, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
              },
              _onDragEnd: function (t) {
                P(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
              }
            }),
            Mn = Tn.extend({
              options: {
                icon: new In,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
              },
              initialize: function (t, e) {
                p(this, e), this._latlng = V(t)
              },
              onAdd: function (t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
              },
              onRemove: function (t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
              },
              getEvents: function () {
                return {
                  zoom: this.update,
                  viewreset: this.update
                }
              },
              getLatLng: function () {
                return this._latlng
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return this._latlng = V(t), this.update(), this.fire("move", {
                  oldLatLng: e,
                  latlng: this._latlng
                })
              },
              setZIndexOffset: function (t) {
                return this.options.zIndexOffset = t, this.update()
              },
              getIcon: function () {
                return this.options.icon
              },
              setIcon: function (t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
              },
              getElement: function () {
                return this._icon
              },
              update: function () {
                if (this._icon && this._map) {
                  var t = this._map.latLngToLayerPoint(this._latlng).round();
                  this._setPos(t)
                }
                return this
              },
              _initIcon: function () {
                var t = this.options,
                  e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                  n = t.icon.createIcon(this._icon),
                  i = !1;
                n !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (n.title = t.title), "IMG" === n.tagName && (n.alt = t.alt || "")), de(n, e), t.keyboard && (n.tabIndex = "0"), this._icon = n, t.riseOnHover && this.on({
                  mouseover: this._bringToFront,
                  mouseout: this._resetZIndex
                });
                var r = t.icon.createShadow(this._shadow),
                  s = !1;
                r !== this._shadow && (this._removeShadow(), s = !0), r && (de(r, e), r.alt = ""), this._shadow = r, t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction(), r && s && this.getPane(t.shadowPane).appendChild(this._shadow)
              },
              _removeIcon: function () {
                this.options.riseOnHover && this.off({
                  mouseover: this._bringToFront,
                  mouseout: this._resetZIndex
                }), ae(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
              },
              _removeShadow: function () {
                this._shadow && ae(this._shadow), this._shadow = null
              },
              _setPos: function (t) {
                this._icon && ye(this._icon, t), this._shadow && ye(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
              },
              _updateZIndex: function (t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t)
              },
              _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
              },
              _initInteraction: function () {
                if (this.options.interactive && (de(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), On)) {
                  var t = this.options.draggable;
                  this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new On(this), t && this.dragging.enable()
                }
              },
              setOpacity: function (t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
              },
              _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && ge(this._icon, t), this._shadow && ge(this._shadow, t)
              },
              _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset)
              },
              _resetZIndex: function () {
                this._updateZIndex(0)
              },
              _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor
              },
              _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor
              }
            }),
            Rn = Tn.extend({
              options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
              },
              beforeAdd: function (t) {
                this._renderer = t.getRenderer(this)
              },
              onAdd: function () {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
              },
              onRemove: function () {
                this._renderer._removePath(this)
              },
              redraw: function () {
                return this._map && this._renderer._updatePath(this), this
              },
              setStyle: function (t) {
                return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && t.hasOwnProperty("weight") && this._updateBounds()), this
              },
              bringToFront: function () {
                return this._renderer && this._renderer._bringToFront(this), this
              },
              bringToBack: function () {
                return this._renderer && this._renderer._bringToBack(this), this
              },
              getElement: function () {
                return this._path
              },
              _reset: function () {
                this._project(), this._update()
              },
              _clickTolerance: function () {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
              }
            }),
            Nn = Rn.extend({
              options: {
                fill: !0,
                radius: 10
              },
              initialize: function (t, e) {
                p(this, e), this._latlng = V(t), this._radius = this.options.radius
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return this._latlng = V(t), this.redraw(), this.fire("move", {
                  oldLatLng: e,
                  latlng: this._latlng
                })
              },
              getLatLng: function () {
                return this._latlng
              },
              setRadius: function (t) {
                return this.options.radius = this._radius = t, this.redraw()
              },
              getRadius: function () {
                return this._radius
              },
              setStyle: function (t) {
                var e = t && t.radius || this._radius;
                return Rn.prototype.setStyle.call(this, t), this.setRadius(e), this
              },
              _project: function () {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
              },
              _updateBounds: function () {
                var t = this._radius,
                  e = this._radiusY || t,
                  n = this._clickTolerance(),
                  i = [t + n, e + n];
                this._pxBounds = new N(this._point.subtract(i), this._point.add(i))
              },
              _update: function () {
                this._map && this._updatePath()
              },
              _updatePath: function () {
                this._renderer._updateCircle(this)
              },
              _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
              },
              _containsPoint: function (t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
              }
            }),
            Fn = Nn.extend({
              initialize: function (t, e, i) {
                if ("number" == typeof e && (e = n({}, i, {
                    radius: e
                  })), p(this, e), this._latlng = V(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
              },
              setRadius: function (t) {
                return this._mRadius = t, this.redraw()
              },
              getRadius: function () {
                return this._mRadius
              },
              getBounds: function () {
                var t = [this._radius, this._radiusY || this._radius];
                return new D(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
              },
              setStyle: Rn.prototype.setStyle,
              _project: function () {
                var t = this._latlng.lng,
                  e = this._latlng.lat,
                  n = this._map,
                  i = n.options.crs;
                if (i.distance === B.distance) {
                  var r = Math.PI / 180,
                    s = this._mRadius / B.R / r,
                    o = n.project([e + s, t]),
                    a = n.project([e - s, t]),
                    l = o.add(a).divideBy(2),
                    c = n.unproject(l).lat,
                    u = Math.acos((Math.cos(s * r) - Math.sin(e * r) * Math.sin(c * r)) / (Math.cos(e * r) * Math.cos(c * r))) / r;
                  (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(n.getPixelOrigin()), this._radius = isNaN(u) ? 0 : l.x - n.project([c, t - u]).x, this._radiusY = l.y - o.y
                } else {
                  var h = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
                  this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(h).x
                }
                this._updateBounds()
              }
            }),
            Dn = Rn.extend({
              options: {
                smoothFactor: 1,
                noClip: !1
              },
              initialize: function (t, e) {
                p(this, e), this._setLatLngs(t)
              },
              getLatLngs: function () {
                return this._latlngs
              },
              setLatLngs: function (t) {
                return this._setLatLngs(t), this.redraw()
              },
              isEmpty: function () {
                return !this._latlngs.length
              },
              closestLayerPoint: function (t) {
                for (var e, n, i = 1 / 0, r = null, s = mn, o = 0, a = this._parts.length; o < a; o++)
                  for (var l = this._parts[o], c = 1, u = l.length; c < u; c++) {
                    var h = s(t, e = l[c - 1], n = l[c], !0);
                    h < i && (i = h, r = s(t, e, n))
                  }
                return r && (r.distance = Math.sqrt(i)), r
              },
              getCenter: function () {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, n, i, r, s, o, a = this._rings[0],
                  l = a.length;
                if (!l) return null;
                for (t = 0, e = 0; t < l - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === e) return this._map.layerPointToLatLng(a[0]);
                for (t = 0, i = 0; t < l - 1; t++)
                  if ((i += n = (r = a[t]).distanceTo(s = a[t + 1])) > e) return this._map.layerPointToLatLng([s.x - (o = (i - e) / n) * (s.x - r.x), s.y - o * (s.y - r.y)])
              },
              getBounds: function () {
                return this._bounds
              },
              addLatLng: function (t, e) {
                return e = e || this._defaultShape(), t = V(t), e.push(t), this._bounds.extend(t), this.redraw()
              },
              _setLatLngs: function (t) {
                this._bounds = new D, this._latlngs = this._convertLatLngs(t)
              },
              _defaultShape: function () {
                return gn(this._latlngs) ? this._latlngs : this._latlngs[0]
              },
              _convertLatLngs: function (t) {
                for (var e = [], n = gn(t), i = 0, r = t.length; i < r; i++) n ? (e[i] = V(t[i]), this._bounds.extend(e[i])) : e[i] = this._convertLatLngs(t[i]);
                return e
              },
              _project: function () {
                var t = new N;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
              },
              _updateBounds: function () {
                var t = this._clickTolerance(),
                  e = new O(t, t);
                this._pxBounds = new N([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)])
              },
              _projectLatlngs: function (t, e, n) {
                var i, r, s = t.length;
                if (t[0] instanceof z) {
                  for (r = [], i = 0; i < s; i++) r[i] = this._map.latLngToLayerPoint(t[i]), n.extend(r[i]);
                  e.push(r)
                } else
                  for (i = 0; i < s; i++) this._projectLatlngs(t[i], e, n)
              },
              _clipPoints: function () {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                  if (this.options.noClip) this._parts = this._rings;
                  else {
                    var e, n, i, r, s, o, a, l = this._parts;
                    for (e = 0, i = 0, r = this._rings.length; e < r; e++)
                      for (n = 0, s = (a = this._rings[e]).length; n < s - 1; n++)(o = dn(a[n], a[n + 1], t, n, !0)) && (l[i] = l[i] || [], l[i].push(o[0]), o[1] === a[n + 1] && n !== s - 2 || (l[i].push(o[1]), i++))
                  }
              },
              _simplifyPoints: function () {
                for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++) t[n] = un(t[n], e)
              },
              _update: function () {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
              },
              _updatePath: function () {
                this._renderer._updatePoly(this)
              },
              _containsPoint: function (t, e) {
                var n, i, r, s, o, a, l = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (n = 0, s = this._parts.length; n < s; n++)
                  for (i = 0, r = (o = (a = this._parts[n]).length) - 1; i < o; r = i++)
                    if ((e || 0 !== i) && hn(t, a[r], a[i]) <= l) return !0;
                return !1
              }
            });
          Dn._flat = _n;
          var jn = Dn.extend({
              options: {
                fill: !0
              },
              isEmpty: function () {
                return !this._latlngs.length || !this._latlngs[0].length
              },
              getCenter: function () {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, n, i, r, s, o, a, l = this._rings[0],
                  c = l.length;
                if (!c) return null;
                for (s = o = a = 0, t = 0, e = c - 1; t < c; e = t++) o += ((n = l[t]).x + (i = l[e]).x) * (r = n.y * i.x - i.y * n.x), a += (n.y + i.y) * r, s += 3 * r;
                return this._map.layerPointToLatLng(0 === s ? l[0] : [o / s, a / s])
              },
              _convertLatLngs: function (t) {
                var e = Dn.prototype._convertLatLngs.call(this, t),
                  n = e.length;
                return n >= 2 && e[0] instanceof z && e[0].equals(e[n - 1]) && e.pop(), e
              },
              _setLatLngs: function (t) {
                Dn.prototype._setLatLngs.call(this, t), gn(this._latlngs) && (this._latlngs = [this._latlngs])
              },
              _defaultShape: function () {
                return gn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
              },
              _clipPoints: function () {
                var t = this._renderer._bounds,
                  e = this.options.weight,
                  n = new O(e, e);
                if (t = new N(t.min.subtract(n), t.max.add(n)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                  if (this.options.noClip) this._parts = this._rings;
                  else
                    for (var i, r = 0, s = this._rings.length; r < s; r++)(i = yn(this._rings[r], t, !0)).length && this._parts.push(i)
              },
              _updatePath: function () {
                this._renderer._updatePoly(this, !0)
              },
              _containsPoint: function (t) {
                var e, n, i, r, s, o, a, l, c = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (r = 0, a = this._parts.length; r < a; r++)
                  for (s = 0, o = (l = (e = this._parts[r]).length) - 1; s < l; o = s++)(n = e[s]).y > t.y != (i = e[o]).y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (c = !c);
                return c || Dn.prototype._containsPoint.call(this, t, !0)
              }
            }),
            zn = Ln.extend({
              initialize: function (t, e) {
                p(this, e), this._layers = {}, t && this.addData(t)
              },
              addData: function (t) {
                var e, n, i, r = _(t) ? t : t.features;
                if (r) {
                  for (e = 0, n = r.length; e < n; e++)((i = r[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
                  return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var o = Vn(t, s);
                return o ? (o.feature = Gn(t), o.defaultOptions = o.options, this.resetStyle(o), s.onEachFeature && s.onEachFeature(t, o), this.addLayer(o)) : this
              },
              resetStyle: function (t) {
                return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = n({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
              },
              setStyle: function (t) {
                return this.eachLayer((function (e) {
                  this._setLayerStyle(e, t)
                }), this)
              },
              _setLayerStyle: function (t, e) {
                t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e))
              }
            });

          function Vn(t, e) {
            var n, i, r, s, o = "Feature" === t.type ? t.geometry : t,
              a = o ? o.coordinates : null,
              l = [],
              c = e && e.pointToLayer,
              u = e && e.coordsToLatLng || Hn;
            if (!a && !o) return null;
            switch (o.type) {
              case "Point":
                return Un(c, t, n = u(a), e);
              case "MultiPoint":
                for (r = 0, s = a.length; r < s; r++) n = u(a[r]), l.push(Un(c, t, n, e));
                return new Ln(l);
              case "LineString":
              case "MultiLineString":
                return i = Bn(a, "LineString" === o.type ? 0 : 1, u), new Dn(i, e);
              case "Polygon":
              case "MultiPolygon":
                return i = Bn(a, "Polygon" === o.type ? 1 : 2, u), new jn(i, e);
              case "GeometryCollection":
                for (r = 0, s = o.geometries.length; r < s; r++) {
                  var h = Vn({
                    geometry: o.geometries[r],
                    type: "Feature",
                    properties: t.properties
                  }, e);
                  h && l.push(h)
                }
                return new Ln(l);
              default:
                throw new Error("Invalid GeoJSON object.")
            }
          }

          function Un(t, e, n, i) {
            return t ? t(e, n) : new Mn(n, i && i.markersInheritOptions && i)
          }

          function Hn(t) {
            return new z(t[1], t[0], t[2])
          }

          function Bn(t, e, n) {
            for (var i, r = [], s = 0, o = t.length; s < o; s++) i = e ? Bn(t[s], e - 1, n) : (n || Hn)(t[s]), r.push(i);
            return r
          }

          function Zn(t, e) {
            return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
          }

          function $n(t, e, n, i) {
            for (var r = [], s = 0, o = t.length; s < o; s++) r.push(e ? $n(t[s], e - 1, n, i) : Zn(t[s], i));
            return !e && n && r.push(r[0]), r
          }

          function qn(t, e) {
            return t.feature ? n({}, t.feature, {
              geometry: e
            }) : Gn(e)
          }

          function Gn(t) {
            return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
              type: "Feature",
              properties: {},
              geometry: t
            }
          }
          var Wn = {
            toGeoJSON: function (t) {
              return qn(this, {
                type: "Point",
                coordinates: Zn(this.getLatLng(), t)
              })
            }
          };

          function Kn(t, e) {
            return new zn(t, e)
          }
          Mn.include(Wn), Fn.include(Wn), Nn.include(Wn), Dn.include({
            toGeoJSON: function (t) {
              var e = !gn(this._latlngs);
              return qn(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: $n(this._latlngs, e ? 1 : 0, !1, t)
              })
            }
          }), jn.include({
            toGeoJSON: function (t) {
              var e = !gn(this._latlngs),
                n = e && !gn(this._latlngs[0]),
                i = $n(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
              return e || (i = [i]), qn(this, {
                type: (n ? "Multi" : "") + "Polygon",
                coordinates: i
              })
            }
          }), En.include({
            toMultiPoint: function (t) {
              var e = [];
              return this.eachLayer((function (n) {
                e.push(n.toGeoJSON(t).geometry.coordinates)
              })), qn(this, {
                type: "MultiPoint",
                coordinates: e
              })
            },
            toGeoJSON: function (t) {
              var e = this.feature && this.feature.geometry && this.feature.geometry.type;
              if ("MultiPoint" === e) return this.toMultiPoint(t);
              var n = "GeometryCollection" === e,
                i = [];
              return this.eachLayer((function (e) {
                if (e.toGeoJSON) {
                  var r = e.toGeoJSON(t);
                  if (n) i.push(r.geometry);
                  else {
                    var s = Gn(r);
                    "FeatureCollection" === s.type ? i.push.apply(i, s.features) : i.push(s)
                  }
                }
              })), n ? qn(this, {
                geometries: i,
                type: "GeometryCollection"
              }) : {
                type: "FeatureCollection",
                features: i
              }
            }
          });
          var Yn = Kn,
            Jn = Tn.extend({
              options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
              },
              initialize: function (t, e, n) {
                this._url = t, this._bounds = j(e), p(this, n)
              },
              onAdd: function () {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (de(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
              },
              onRemove: function () {
                ae(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
              },
              setOpacity: function (t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
              },
              setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this
              },
              bringToFront: function () {
                return this._map && ce(this._image), this
              },
              bringToBack: function () {
                return this._map && ue(this._image), this
              },
              setUrl: function (t) {
                return this._url = t, this._image && (this._image.src = t), this
              },
              setBounds: function (t) {
                return this._bounds = j(t), this._map && this._reset(), this
              },
              getEvents: function () {
                var t = {
                  zoom: this._reset,
                  viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
              },
              setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
              },
              getBounds: function () {
                return this._bounds
              },
              getElement: function () {
                return this._image
              },
              _initImage: function () {
                var t = "IMG" === this._url.tagName,
                  e = this._image = t ? this._url : oe("img");
                de(e, "leaflet-image-layer"), this._zoomAnimated && de(e, "leaflet-zoom-animated"), this.options.className && de(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onload = r(this.fire, this, "load"), e.onerror = r(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
              },
              _animateZoom: function (t) {
                var e = this._map.getZoomScale(t.zoom),
                  n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                ve(this._image, n, e)
              },
              _reset: function () {
                var t = this._image,
                  e = new N(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                  n = e.getSize();
                ye(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px"
              },
              _updateOpacity: function () {
                ge(this._image, this.options.opacity)
              },
              _updateZIndex: function () {
                this._image && null != this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
              },
              _overlayOnError: function () {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
              }
            }),
            Qn = Jn.extend({
              options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0
              },
              _initImage: function () {
                var t = "VIDEO" === this._url.tagName,
                  e = this._image = t ? this._url : oe("video");
                if (de(e, "leaflet-image-layer"), this._zoomAnimated && de(e, "leaflet-zoom-animated"), this.options.className && de(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onloadeddata = r(this.fire, this, "load"), t) {
                  for (var n = e.getElementsByTagName("source"), i = [], s = 0; s < n.length; s++) i.push(n[s].src);
                  this._url = n.length > 0 ? i : [e.src]
                } else {
                  _(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && e.style.hasOwnProperty("objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                  for (var o = 0; o < this._url.length; o++) {
                    var a = oe("source");
                    a.src = this._url[o], e.appendChild(a)
                  }
                }
              }
            }),
            Xn = Jn.extend({
              _initImage: function () {
                var t = this._image = this._url;
                de(t, "leaflet-image-layer"), this._zoomAnimated && de(t, "leaflet-zoom-animated"), this.options.className && de(t, this.options.className), t.onselectstart = c, t.onmousemove = c
              }
            }),
            ti = Tn.extend({
              options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
              },
              initialize: function (t, e) {
                p(this, t), this._source = e
              },
              onAdd: function (t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ge(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ge(this._container, 1), this.bringToFront()
              },
              onRemove: function (t) {
                t._fadeAnimated ? (ge(this._container, 0), this._removeTimeout = setTimeout(r(ae, void 0, this._container), 200)) : ae(this._container)
              },
              getLatLng: function () {
                return this._latlng
              },
              setLatLng: function (t) {
                return this._latlng = V(t), this._map && (this._updatePosition(), this._adjustPan()), this
              },
              getContent: function () {
                return this._content
              },
              setContent: function (t) {
                return this._content = t, this.update(), this
              },
              getElement: function () {
                return this._container
              },
              update: function () {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
              },
              getEvents: function () {
                var t = {
                  zoom: this._updatePosition,
                  viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
              },
              isOpen: function () {
                return !!this._map && this._map.hasLayer(this)
              },
              bringToFront: function () {
                return this._map && ce(this._container), this
              },
              bringToBack: function () {
                return this._map && ue(this._container), this
              },
              _prepareOpen: function (t, e, n) {
                if (e instanceof Tn || (n = e, e = t), e instanceof Ln)
                  for (var i in t._layers) {
                    e = t._layers[i];
                    break
                  }
                if (!n)
                  if (e.getCenter) n = e.getCenter();
                  else {
                    if (!e.getLatLng) throw new Error("Unable to get source layer LatLng.");
                    n = e.getLatLng()
                  } return this._source = e, this.update(), n
              },
              _updateContent: function () {
                if (this._content) {
                  var t = this._contentNode,
                    e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                  if ("string" == typeof e) t.innerHTML = e;
                  else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(e)
                  }
                  this.fire("contentupdate")
                }
              },
              _updatePosition: function () {
                if (this._map) {
                  var t = this._map.latLngToLayerPoint(this._latlng),
                    e = R(this.options.offset),
                    n = this._getAnchor();
                  this._zoomAnimated ? ye(this._container, t.add(n)) : e = e.add(t).add(n);
                  var i = this._containerBottom = -e.y,
                    r = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                  this._container.style.bottom = i + "px", this._container.style.left = r + "px"
                }
              },
              _getAnchor: function () {
                return [0, 0]
              }
            }),
            ei = ti.extend({
              options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
              },
              openOn: function (t) {
                return t.openPopup(this), this
              },
              onAdd: function (t) {
                ti.prototype.onAdd.call(this, t), t.fire("popupopen", {
                  popup: this
                }), this._source && (this._source.fire("popupopen", {
                  popup: this
                }, !0), this._source instanceof Rn || this._source.on("preclick", Re))
              },
              onRemove: function (t) {
                ti.prototype.onRemove.call(this, t), t.fire("popupclose", {
                  popup: this
                }), this._source && (this._source.fire("popupclose", {
                  popup: this
                }, !0), this._source instanceof Rn || this._source.off("preclick", Re))
              },
              getEvents: function () {
                var t = ti.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
              },
              _close: function () {
                this._map && this._map.closePopup(this)
              },
              _initLayout: function () {
                var t = "leaflet-popup",
                  e = this._container = oe("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                  n = this._wrapper = oe("div", t + "-content-wrapper", e);
                if (this._contentNode = oe("div", t + "-content", n), Fe(n), Ne(this._contentNode), Le(n, "contextmenu", Re), this._tipContainer = oe("div", t + "-tip-container", e), this._tip = oe("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                  var i = this._closeButton = oe("a", t + "-close-button", e);
                  i.href = "#close", i.innerHTML = "&#215;", Le(i, "click", this._onCloseButtonClick, this)
                }
              },
              _updateLayout: function () {
                var t = this._contentNode,
                  e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var n = t.offsetWidth;
                n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
                var i = this.options.maxHeight;
                i && t.offsetHeight > i ? (e.height = i + "px", de(t, "leaflet-popup-scrolled")) : pe(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
              },
              _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                  n = this._getAnchor();
                ye(this._container, e.add(n))
              },
              _adjustPan: function () {
                if (this.options.autoPan) {
                  this._map._panAnim && this._map._panAnim.stop();
                  var t = this._map,
                    e = parseInt(se(this._container, "marginBottom"), 10) || 0,
                    n = this._container.offsetHeight + e,
                    i = this._containerWidth,
                    r = new O(this._containerLeft, -n - this._containerBottom);
                  r._add(be(this._container));
                  var s = t.layerPointToContainerPoint(r),
                    o = R(this.options.autoPanPadding),
                    a = R(this.options.autoPanPaddingTopLeft || o),
                    l = R(this.options.autoPanPaddingBottomRight || o),
                    c = t.getSize(),
                    u = 0,
                    h = 0;
                  s.x + i + l.x > c.x && (u = s.x + i - c.x + l.x), s.x - u - a.x < 0 && (u = s.x - a.x), s.y + n + l.y > c.y && (h = s.y + n - c.y + l.y), s.y - h - a.y < 0 && (h = s.y - a.y), (u || h) && t.fire("autopanstart").panBy([u, h])
                }
              },
              _onCloseButtonClick: function (t) {
                this._close(), je(t)
              },
              _getAnchor: function () {
                return R(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
              }
            });
          Ke.mergeOptions({
            closePopupOnClick: !0
          }), Ke.include({
            openPopup: function (t, e, n) {
              return t instanceof ei || (t = new ei(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
            },
            closePopup: function (t) {
              return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
            }
          }), Tn.include({
            bindPopup: function (t, e) {
              return t instanceof ei ? (p(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new ei(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function () {
              return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }), this._popupHandlersAdded = !1, this._popup = null), this
            },
            openPopup: function (t, e) {
              return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e), this._map.openPopup(this._popup, e)), this
            },
            closePopup: function () {
              return this._popup && this._popup._close(), this
            },
            togglePopup: function (t) {
              return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
            },
            isPopupOpen: function () {
              return !!this._popup && this._popup.isOpen()
            },
            setPopupContent: function (t) {
              return this._popup && this._popup.setContent(t), this
            },
            getPopup: function () {
              return this._popup
            },
            _openPopup: function (t) {
              var e = t.layer || t.target;
              this._popup && this._map && (je(t), e instanceof Rn ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
            },
            _movePopup: function (t) {
              this._popup.setLatLng(t.latlng)
            },
            _onKeyPress: function (t) {
              13 === t.originalEvent.keyCode && this._openPopup(t)
            }
          });
          var ni = ti.extend({
            options: {
              pane: "tooltipPane",
              offset: [0, 0],
              direction: "auto",
              permanent: !1,
              sticky: !1,
              interactive: !1,
              opacity: .9
            },
            onAdd: function (t) {
              ti.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
              }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
              }, !0)
            },
            onRemove: function (t) {
              ti.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
              }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
              }, !0)
            },
            getEvents: function () {
              var t = ti.prototype.getEvents.call(this);
              return Ct && !this.options.permanent && (t.preclick = this._close), t
            },
            _close: function () {
              this._map && this._map.closeTooltip(this)
            },
            _initLayout: function () {
              this._contentNode = this._container = oe("div", "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"))
            },
            _updateLayout: function () {},
            _adjustPan: function () {},
            _setPosition: function (t) {
              var e = this._map,
                n = this._container,
                i = e.latLngToContainerPoint(e.getCenter()),
                r = e.layerPointToContainerPoint(t),
                s = this.options.direction,
                o = n.offsetWidth,
                a = n.offsetHeight,
                l = R(this.options.offset),
                c = this._getAnchor();
              "top" === s ? t = t.add(R(-o / 2 + l.x, -a + l.y + c.y, !0)) : "bottom" === s ? t = t.subtract(R(o / 2 - l.x, -l.y, !0)) : "center" === s ? t = t.subtract(R(o / 2 + l.x, a / 2 - c.y + l.y, !0)) : "right" === s || "auto" === s && r.x < i.x ? (s = "right", t = t.add(R(l.x + c.x, c.y - a / 2 + l.y, !0))) : (s = "left", t = t.subtract(R(o + c.x - l.x, a / 2 - c.y - l.y, !0))), pe(n, "leaflet-tooltip-right"), pe(n, "leaflet-tooltip-left"), pe(n, "leaflet-tooltip-top"), pe(n, "leaflet-tooltip-bottom"), de(n, "leaflet-tooltip-" + s), ye(n, t)
            },
            _updatePosition: function () {
              var t = this._map.latLngToLayerPoint(this._latlng);
              this._setPosition(t)
            },
            setOpacity: function (t) {
              this.options.opacity = t, this._container && ge(this._container, t)
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
              this._setPosition(e)
            },
            _getAnchor: function () {
              return R(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
            }
          });
          Ke.include({
            openTooltip: function (t, e, n) {
              return t instanceof ni || (t = new ni(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
            },
            closeTooltip: function (t) {
              return t && this.removeLayer(t), this
            }
          }), Tn.include({
            bindTooltip: function (t, e) {
              return t instanceof ni ? (p(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new ni(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
            },
            unbindTooltip: function () {
              return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
            },
            _initTooltipInteractions: function (t) {
              if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on",
                  n = {
                    remove: this.closeTooltip,
                    move: this._moveTooltip
                  };
                this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), Ct && (n.click = this._openTooltip)), this[e](n), this._tooltipHandlersAdded = !t
              }
            },
            openTooltip: function (t, e) {
              return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (de(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
            },
            closeTooltip: function () {
              return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (pe(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
            },
            toggleTooltip: function (t) {
              return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
            },
            isTooltipOpen: function () {
              return this._tooltip.isOpen()
            },
            setTooltipContent: function (t) {
              return this._tooltip && this._tooltip.setContent(t), this
            },
            getTooltip: function () {
              return this._tooltip
            },
            _openTooltip: function (t) {
              this._tooltip && this._map && this.openTooltip(t.layer || t.target, this._tooltip.options.sticky ? t.latlng : void 0)
            },
            _moveTooltip: function (t) {
              var e, n, i = t.latlng;
              this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(e), i = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(i)
            }
          });
          var ii = An.extend({
            options: {
              iconSize: [12, 12],
              html: !1,
              bgPos: null,
              className: "leaflet-div-icon"
            },
            createIcon: function (t) {
              var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                n = this.options;
              if (n.html instanceof Element ? (le(e), e.appendChild(n.html)) : e.innerHTML = !1 !== n.html ? n.html : "", n.bgPos) {
                var i = R(n.bgPos);
                e.style.backgroundPosition = -i.x + "px " + -i.y + "px"
              }
              return this._setIconStyles(e, "icon"), e
            },
            createShadow: function () {
              return null
            }
          });
          An.Default = In;
          var ri = Tn.extend({
              options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: vt,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
              },
              initialize: function (t) {
                p(this, t)
              },
              onAdd: function () {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
              },
              beforeAdd: function (t) {
                t._addZoomLimit(this)
              },
              onRemove: function (t) {
                this._removeAllTiles(), ae(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
              },
              bringToFront: function () {
                return this._map && (ce(this._container), this._setAutoZIndex(Math.max)), this
              },
              bringToBack: function () {
                return this._map && (ue(this._container), this._setAutoZIndex(Math.min)), this
              },
              getContainer: function () {
                return this._container
              },
              setOpacity: function (t) {
                return this.options.opacity = t, this._updateOpacity(), this
              },
              setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
              },
              isLoading: function () {
                return this._loading
              },
              redraw: function () {
                return this._map && (this._removeAllTiles(), this._update()), this
              },
              getEvents: function () {
                var t = {
                  viewprereset: this._invalidateAll,
                  viewreset: this._resetView,
                  zoom: this._resetView,
                  moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
              },
              createTile: function () {
                return document.createElement("div")
              },
              getTileSize: function () {
                var t = this.options.tileSize;
                return t instanceof O ? t : new O(t, t)
              },
              _updateZIndex: function () {
                this._container && null != this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
              },
              _setAutoZIndex: function (t) {
                for (var e, n = this.getPane().children, i = -t(-1 / 0, 1 / 0), r = 0, s = n.length; r < s; r++) e = n[r].style.zIndex, n[r] !== this._container && e && (i = t(i, +e));
                isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex())
              },
              _updateOpacity: function () {
                if (this._map && !tt) {
                  ge(this._container, this.options.opacity);
                  var t = +new Date,
                    e = !1,
                    n = !1;
                  for (var i in this._tiles) {
                    var r = this._tiles[i];
                    if (r.current && r.loaded) {
                      var s = Math.min(1, (t - r.loaded) / 200);
                      ge(r.el, s), s < 1 ? e = !0 : (r.active ? n = !0 : this._onOpaqueTile(r), r.active = !0)
                    }
                  }
                  n && !this._noPrune && this._pruneTiles(), e && (P(this._fadeFrame), this._fadeFrame = k(this._updateOpacity, this))
                }
              },
              _onOpaqueTile: c,
              _initContainer: function () {
                this._container || (this._container = oe("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
              },
              _updateLevels: function () {
                var t = this._tileZoom,
                  e = this.options.maxZoom;
                if (void 0 !== t) {
                  for (var n in this._levels) this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (ae(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
                  var i = this._levels[t],
                    r = this._map;
                  return i || ((i = this._levels[t] = {}).el = oe("div", "leaflet-tile-container leaflet-zoom-animated", this._container), i.el.style.zIndex = e, i.origin = r.project(r.unproject(r.getPixelOrigin()), t).round(), i.zoom = t, this._setZoomTransform(i, r.getCenter(), r.getZoom()), this._onCreateLevel(i)), this._level = i, i
                }
              },
              _onUpdateLevel: c,
              _onRemoveLevel: c,
              _onCreateLevel: c,
              _pruneTiles: function () {
                if (this._map) {
                  var t, e, n = this._map.getZoom();
                  if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                  else {
                    for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                    for (t in this._tiles)
                      if ((e = this._tiles[t]).current && !e.active) {
                        var i = e.coords;
                        this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2)
                      } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                  }
                }
              },
              _removeTilesAtZoom: function (t) {
                for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
              },
              _removeAllTiles: function () {
                for (var t in this._tiles) this._removeTile(t)
              },
              _invalidateAll: function () {
                for (var t in this._levels) ae(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
              },
              _retainParent: function (t, e, n, i) {
                var r = Math.floor(t / 2),
                  s = Math.floor(e / 2),
                  o = n - 1,
                  a = new O(+r, +s);
                a.z = +o;
                var l = this._tileCoordsToKey(a),
                  c = this._tiles[l];
                return c && c.active ? (c.retain = !0, !0) : (c && c.loaded && (c.retain = !0), o > i && this._retainParent(r, s, o, i))
              },
              _retainChildren: function (t, e, n, i) {
                for (var r = 2 * t; r < 2 * t + 2; r++)
                  for (var s = 2 * e; s < 2 * e + 2; s++) {
                    var o = new O(r, s);
                    o.z = n + 1;
                    var a = this._tileCoordsToKey(o),
                      l = this._tiles[a];
                    l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), n + 1 < i && this._retainChildren(r, s, n + 1, i))
                  }
              },
              _resetView: function (t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
              },
              _animateZoom: function (t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
              },
              _clampZoom: function (t) {
                var e = this.options;
                return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
              },
              _setView: function (t, e, n, i) {
                var r = this._clampZoom(Math.round(e));
                (void 0 !== this.options.maxZoom && r > this.options.maxZoom || void 0 !== this.options.minZoom && r < this.options.minZoom) && (r = void 0), i && !(this.options.updateWhenZooming && r !== this._tileZoom) || (this._tileZoom = r, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== r && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e)
              },
              _setZoomTransforms: function (t, e) {
                for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e)
              },
              _setZoomTransform: function (t, e, n) {
                var i = this._map.getZoomScale(n, t.zoom),
                  r = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
                _t ? ve(t.el, r, i) : ye(t.el, r)
              },
              _resetGrid: function () {
                var t = this._map,
                  e = t.options.crs,
                  n = this._tileSize = this.getTileSize(),
                  i = this._tileZoom,
                  r = this._map.getPixelWorldBounds(this._tileZoom);
                r && (this._globalTileRange = this._pxBoundsToTileRange(r)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x), Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x), Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y)]
              },
              _onMoveEnd: function () {
                this._map && !this._map._animatingZoom && this._update()
              },
              _getTiledPixelBounds: function (t) {
                var e = this._map,
                  n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                  i = e.getZoomScale(n, this._tileZoom),
                  r = e.project(t, this._tileZoom).floor(),
                  s = e.getSize().divideBy(2 * i);
                return new N(r.subtract(s), r.add(s))
              },
              _update: function (t) {
                var e = this._map;
                if (e) {
                  var n = this._clampZoom(e.getZoom());
                  if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                    var i = this._getTiledPixelBounds(t),
                      r = this._pxBoundsToTileRange(i),
                      s = r.getCenter(),
                      o = [],
                      a = this.options.keepBuffer,
                      l = new N(r.getBottomLeft().subtract([a, -a]), r.getTopRight().add([a, -a]));
                    if (!(isFinite(r.min.x) && isFinite(r.min.y) && isFinite(r.max.x) && isFinite(r.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for (var c in this._tiles) {
                      var u = this._tiles[c].coords;
                      u.z === this._tileZoom && l.contains(new O(u.x, u.y)) || (this._tiles[c].current = !1)
                    }
                    if (Math.abs(n - this._tileZoom) > 1) this._setView(t, n);
                    else {
                      for (var h = r.min.y; h <= r.max.y; h++)
                        for (var d = r.min.x; d <= r.max.x; d++) {
                          var p = new O(d, h);
                          if (p.z = this._tileZoom, this._isValidTile(p)) {
                            var f = this._tiles[this._tileCoordsToKey(p)];
                            f ? f.current = !0 : o.push(p)
                          }
                        }
                      if (o.sort((function (t, e) {
                          return t.distanceTo(s) - e.distanceTo(s)
                        })), 0 !== o.length) {
                        this._loading || (this._loading = !0, this.fire("loading"));
                        var m = document.createDocumentFragment();
                        for (d = 0; d < o.length; d++) this._addTile(o[d], m);
                        this._level.el.appendChild(m)
                      }
                    }
                  }
                }
              },
              _isValidTile: function (t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                  var n = this._globalTileRange;
                  if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var i = this._tileCoordsToBounds(t);
                return j(this.options.bounds).overlaps(i)
              },
              _keyToBounds: function (t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
              },
              _tileCoordsToNwSe: function (t) {
                var e = this._map,
                  n = this.getTileSize(),
                  i = t.scaleBy(n),
                  r = i.add(n);
                return [e.unproject(i, t.z), e.unproject(r, t.z)]
              },
              _tileCoordsToBounds: function (t) {
                var e = this._tileCoordsToNwSe(t),
                  n = new D(e[0], e[1]);
                return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n
              },
              _tileCoordsToKey: function (t) {
                return t.x + ":" + t.y + ":" + t.z
              },
              _keyToTileCoords: function (t) {
                var e = t.split(":"),
                  n = new O(+e[0], +e[1]);
                return n.z = +e[2], n
              },
              _removeTile: function (t) {
                var e = this._tiles[t];
                e && (ae(e.el), delete this._tiles[t], this.fire("tileunload", {
                  tile: e.el,
                  coords: this._keyToTileCoords(t)
                }))
              },
              _initTile: function (t) {
                de(t, "leaflet-tile");
                var e = this.getTileSize();
                t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = c, t.onmousemove = c, tt && this.options.opacity < 1 && ge(t, this.options.opacity), it && !rt && (t.style.WebkitBackfaceVisibility = "hidden")
              },
              _addTile: function (t, e) {
                var n = this._getTilePos(t),
                  i = this._tileCoordsToKey(t),
                  s = this.createTile(this._wrapCoords(t), r(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && k(r(this._tileReady, this, t, null, s)), ye(s, n), this._tiles[i] = {
                  el: s,
                  coords: t,
                  current: !0
                }, e.appendChild(s), this.fire("tileloadstart", {
                  tile: s,
                  coords: t
                })
              },
              _tileReady: function (t, e, n) {
                e && this.fire("tileerror", {
                  error: e,
                  tile: n,
                  coords: t
                });
                var i = this._tileCoordsToKey(t);
                (n = this._tiles[i]) && (n.loaded = +new Date, this._map._fadeAnimated ? (ge(n.el, 0), P(this._fadeFrame), this._fadeFrame = k(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (de(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                  tile: n.el,
                  coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), tt || !this._map._fadeAnimated ? k(this._pruneTiles, this) : setTimeout(r(this._pruneTiles, this), 250)))
              },
              _getTilePos: function (t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
              },
              _wrapCoords: function (t) {
                var e = new O(this._wrapX ? l(t.x, this._wrapX) : t.x, this._wrapY ? l(t.y, this._wrapY) : t.y);
                return e.z = t.z, e
              },
              _pxBoundsToTileRange: function (t) {
                var e = this.getTileSize();
                return new N(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
              },
              _noTilesToLoad: function () {
                for (var t in this._tiles)
                  if (!this._tiles[t].loaded) return !1;
                return !0
              }
            }),
            si = ri.extend({
              options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
              },
              initialize: function (t, e) {
                this._url = t, (e = p(this, e)).detectRetina && Pt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), it || this.on("tileunload", this._onTileRemove)
              },
              setUrl: function (t, e) {
                return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this
              },
              createTile: function (t, e) {
                var n = document.createElement("img");
                return Le(n, "load", r(this._tileOnLoad, this, e, n)), Le(n, "error", r(this._tileOnError, this, e, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
              },
              getTileUrl: function (t) {
                var e = {
                  r: Pt ? "@2x" : "",
                  s: this._getSubdomain(t),
                  x: t.x,
                  y: t.y,
                  z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                  var i = this._globalTileRange.max.y - t.y;
                  this.options.tms && (e.y = i), e["-y"] = i
                }
                return g(this._url, n(e, this.options))
              },
              _tileOnLoad: function (t, e) {
                tt ? setTimeout(r(t, this, null, e), 0) : t(null, e)
              },
              _tileOnError: function (t, e, n) {
                var i = this.options.errorTileUrl;
                i && e.getAttribute("src") !== i && (e.src = i), t(n, e)
              },
              _onTileRemove: function (t) {
                t.tile.onload = null
              },
              _getZoomForUrl: function () {
                var t = this._tileZoom;
                return this.options.zoomReverse && (t = this.options.maxZoom - t), t + this.options.zoomOffset
              },
              _getSubdomain: function (t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
              },
              _abortLoading: function () {
                var t, e;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = c, e.onerror = c, e.complete || (e.src = y, ae(e), delete this._tiles[t]))
              },
              _removeTile: function (t) {
                var e = this._tiles[t];
                if (e) return ot || e.el.setAttribute("src", y), ri.prototype._removeTile.call(this, t)
              },
              _tileReady: function (t, e, n) {
                if (this._map && (!n || n.getAttribute("src") !== y)) return ri.prototype._tileReady.call(this, t, e, n)
              }
            });

          function oi(t, e) {
            return new si(t, e)
          }
          var ai = si.extend({
            defaultWmsParams: {
              service: "WMS",
              request: "GetMap",
              layers: "",
              styles: "",
              format: "image/jpeg",
              transparent: !1,
              version: "1.1.1"
            },
            options: {
              crs: null,
              uppercase: !1
            },
            initialize: function (t, e) {
              this._url = t;
              var i = n({}, this.defaultWmsParams);
              for (var r in e) r in this.options || (i[r] = e[r]);
              var s = (e = p(this, e)).detectRetina && Pt ? 2 : 1,
                o = this.getTileSize();
              i.width = o.x * s, i.height = o.y * s, this.wmsParams = i
            },
            onAdd: function (t) {
              this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version), this.wmsParams[this._wmsVersion >= 1.3 ? "crs" : "srs"] = this._crs.code, si.prototype.onAdd.call(this, t)
            },
            getTileUrl: function (t) {
              var e = this._tileCoordsToNwSe(t),
                n = this._crs,
                i = F(n.project(e[0]), n.project(e[1])),
                r = i.min,
                s = i.max,
                o = (this._wmsVersion >= 1.3 && this._crs === kn ? [r.y, r.x, s.y, s.x] : [r.x, r.y, s.x, s.y]).join(","),
                a = si.prototype.getTileUrl.call(this, t);
              return a + f(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o
            },
            setParams: function (t, e) {
              return n(this.wmsParams, t), e || this.redraw(), this
            }
          });
          si.WMS = ai, oi.wms = function (t, e) {
            return new ai(t, e)
          };
          var li = Tn.extend({
              options: {
                padding: .1,
                tolerance: 0
              },
              initialize: function (t) {
                p(this, t), o(this), this._layers = this._layers || {}
              },
              onAdd: function () {
                this._container || (this._initContainer(), this._zoomAnimated && de(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
              },
              onRemove: function () {
                this.off("update", this._updatePaths, this), this._destroyContainer()
              },
              getEvents: function () {
                var t = {
                  viewreset: this._reset,
                  zoom: this._onZoom,
                  moveend: this._update,
                  zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
              },
              _onAnimZoom: function (t) {
                this._updateTransform(t.center, t.zoom)
              },
              _onZoom: function () {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
              },
              _updateTransform: function (t, e) {
                var n = this._map.getZoomScale(e, this._zoom),
                  i = be(this._container),
                  r = this._map.getSize().multiplyBy(.5 + this.options.padding),
                  s = this._map.project(this._center, e),
                  o = this._map.project(t, e).subtract(s),
                  a = r.multiplyBy(-n).add(i).add(r).subtract(o);
                _t ? ve(this._container, a, n) : ye(this._container, a)
              },
              _reset: function () {
                for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
              },
              _onZoomEnd: function () {
                for (var t in this._layers) this._layers[t]._project()
              },
              _updatePaths: function () {
                for (var t in this._layers) this._layers[t]._update()
              },
              _update: function () {
                var t = this.options.padding,
                  e = this._map.getSize(),
                  n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                this._bounds = new N(n, n.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
              }
            }),
            ci = li.extend({
              getEvents: function () {
                var t = li.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
              },
              _onViewPreReset: function () {
                this._postponeUpdatePaths = !0
              },
              onAdd: function () {
                li.prototype.onAdd.call(this), this._draw()
              },
              _initContainer: function () {
                var t = this._container = document.createElement("canvas");
                Le(t, "mousemove", this._onMouseMove, this), Le(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Le(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
              },
              _destroyContainer: function () {
                P(this._redrawRequest), delete this._ctx, ae(this._container), Ie(this._container), delete this._container
              },
              _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                  for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                  this._redraw()
                }
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  li.prototype._update.call(this);
                  var t = this._bounds,
                    e = this._container,
                    n = t.getSize(),
                    i = Pt ? 2 : 1;
                  ye(e, t.min), e.width = i * n.x, e.height = i * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", Pt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
              },
              _reset: function () {
                li.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
              },
              _initPath: function (t) {
                this._updateDashArray(t), this._layers[o(t)] = t;
                var e = t._order = {
                  layer: t,
                  prev: this._drawLast,
                  next: null
                };
                this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
              },
              _addPath: function (t) {
                this._requestRedraw(t)
              },
              _removePath: function (t) {
                var e = t._order,
                  n = e.next,
                  i = e.prev;
                n ? n.prev = i : this._drawLast = i, i ? i.next = n : this._drawFirst = n, delete t._order, delete this._layers[o(t)], this._requestRedraw(t)
              },
              _updatePath: function (t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
              },
              _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t)
              },
              _updateDashArray: function (t) {
                if ("string" == typeof t.options.dashArray) {
                  var e, n, i = t.options.dashArray.split(/[, ]+/),
                    r = [];
                  for (n = 0; n < i.length; n++) {
                    if (e = Number(i[n]), isNaN(e)) return;
                    r.push(e)
                  }
                  t.options._dashArray = r
                } else t.options._dashArray = t.options.dashArray
              },
              _requestRedraw: function (t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || k(this._redraw, this))
              },
              _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                  var e = (t.options.weight || 0) + 1;
                  this._redrawBounds = this._redrawBounds || new N, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                }
              },
              _redraw: function () {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
              },
              _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                  var e = t.getSize();
                  this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
              },
              _draw: function () {
                var t, e = this._redrawBounds;
                if (this._ctx.save(), e) {
                  var n = e.getSize();
                  this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var i = this._drawFirst; i; i = i.next) t = i.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
              },
              _updatePoly: function (t, e) {
                if (this._drawing) {
                  var n, i, r, s, o = t._parts,
                    a = o.length,
                    l = this._ctx;
                  if (a) {
                    for (l.beginPath(), n = 0; n < a; n++) {
                      for (i = 0, r = o[n].length; i < r; i++) l[i ? "lineTo" : "moveTo"]((s = o[n][i]).x, s.y);
                      e && l.closePath()
                    }
                    this._fillStroke(l, t)
                  }
                }
              },
              _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                  var e = t._point,
                    n = this._ctx,
                    i = Math.max(Math.round(t._radius), 1),
                    r = (Math.max(Math.round(t._radiusY), 1) || i) / i;
                  1 !== r && (n.save(), n.scale(1, r)), n.beginPath(), n.arc(e.x, e.y / r, i, 0, 2 * Math.PI, !1), 1 !== r && n.restore(), this._fillStroke(n, t)
                }
              },
              _fillStroke: function (t, e) {
                var n = e.options;
                n.fill && (t.globalAlpha = n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && 0 !== n.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = n.opacity, t.lineWidth = n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke())
              },
              _onClick: function (t) {
                for (var e, n, i = this._map.mouseEventToLayerPoint(t), r = this._drawFirst; r; r = r.next)(e = r.layer).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
                n && (Ze(t), this._fireEvent([n], t))
              },
              _onMouseMove: function (t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                  var e = this._map.mouseEventToLayerPoint(t);
                  this._handleMouseHover(t, e)
                }
              },
              _handleMouseOut: function (t) {
                var e = this._hoveredLayer;
                e && (pe(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
              },
              _handleMouseHover: function (t, e) {
                if (!this._mouseHoverThrottled) {
                  for (var n, i, r = this._drawFirst; r; r = r.next)(n = r.layer).options.interactive && n._containsPoint(e) && (i = n);
                  i !== this._hoveredLayer && (this._handleMouseOut(t), i && (de(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseover"), this._hoveredLayer = i)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(L.bind((function () {
                    this._mouseHoverThrottled = !1
                  }), this), 32)
                }
              },
              _fireEvent: function (t, e, n) {
                this._map._fireDOMEvent(e, n || e.type, t)
              },
              _bringToFront: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    i = e.prev;
                  n && (n.prev = i, i ? i.next = n : n && (this._drawFirst = n), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
                }
              },
              _bringToBack: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    i = e.prev;
                  i && (i.next = n, n ? n.prev = i : i && (this._drawLast = i), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
                }
              }
            });

          function ui(t) {
            return Et ? new ci(t) : null
          }
          var hi = function () {
              try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                  function (t) {
                    return document.createElement("<lvml:" + t + ' class="lvml">')
                  }
              } catch (t) {
                return function (t) {
                  return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
              }
            }(),
            di = {
              _initContainer: function () {
                this._container = oe("div", "leaflet-vml-container")
              },
              _update: function () {
                this._map._animatingZoom || (li.prototype._update.call(this), this.fire("update"))
              },
              _initPath: function (t) {
                var e = t._container = hi("shape");
                de(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = hi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[o(t)] = t
              },
              _addPath: function (t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
              },
              _removePath: function (t) {
                var e = t._container;
                ae(e), t.removeInteractiveTarget(e), delete this._layers[o(t)]
              },
              _updateStyle: function (t) {
                var e = t._stroke,
                  n = t._fill,
                  i = t.options,
                  r = t._container;
                r.stroked = !!i.stroke, r.filled = !!i.fill, i.stroke ? (e || (e = t._stroke = hi("stroke")), r.appendChild(e), e.weight = i.weight + "px", e.color = i.color, e.opacity = i.opacity, e.dashStyle = i.dashArray ? _(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", e.endcap = i.lineCap.replace("butt", "flat"), e.joinstyle = i.lineJoin) : e && (r.removeChild(e), t._stroke = null), i.fill ? (n || (n = t._fill = hi("fill")), r.appendChild(n), n.color = i.fillColor || i.color, n.opacity = i.fillOpacity) : n && (r.removeChild(n), t._fill = null)
              },
              _updateCircle: function (t) {
                var e = t._point.round(),
                  n = Math.round(t._radius),
                  i = Math.round(t._radiusY || n);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600")
              },
              _setPath: function (t, e) {
                t._path.v = e
              },
              _bringToFront: function (t) {
                ce(t._container)
              },
              _bringToBack: function (t) {
                ue(t._container)
              }
            },
            pi = At ? hi : Y,
            fi = li.extend({
              getEvents: function () {
                var t = li.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
              },
              _initContainer: function () {
                this._container = pi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = pi("g"), this._container.appendChild(this._rootGroup)
              },
              _destroyContainer: function () {
                ae(this._container), Ie(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
              },
              _onZoomStart: function () {
                this._update()
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  li.prototype._update.call(this);
                  var t = this._bounds,
                    e = t.getSize(),
                    n = this._container;
                  this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), ye(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                }
              },
              _initPath: function (t) {
                var e = t._path = pi("path");
                t.options.className && de(e, t.options.className), t.options.interactive && de(e, "leaflet-interactive"), this._updateStyle(t), this._layers[o(t)] = t
              },
              _addPath: function (t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
              },
              _removePath: function (t) {
                ae(t._path), t.removeInteractiveTarget(t._path), delete this._layers[o(t)]
              },
              _updatePath: function (t) {
                t._project(), t._update()
              },
              _updateStyle: function (t) {
                var e = t._path,
                  n = t.options;
                e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
              },
              _updatePoly: function (t, e) {
                this._setPath(t, J(t._parts, e))
              },
              _updateCircle: function (t) {
                var e = t._point,
                  n = Math.max(Math.round(t._radius), 1),
                  i = "a" + n + "," + (Math.max(Math.round(t._radiusY), 1) || n) + " 0 1,0 ",
                  r = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + i + 2 * n + ",0 " + i + 2 * -n + ",0 ";
                this._setPath(t, r)
              },
              _setPath: function (t, e) {
                t._path.setAttribute("d", e)
              },
              _bringToFront: function (t) {
                ce(t._path)
              },
              _bringToBack: function (t) {
                ue(t._path)
              }
            });

          function mi(t) {
            return Lt || At ? new fi(t) : null
          }
          At && fi.include(di), Ke.include({
            getRenderer: function (t) {
              var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
              return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e
            },
            _getPaneRenderer: function (t) {
              if ("overlayPane" === t || void 0 === t) return !1;
              var e = this._paneRenderers[t];
              return void 0 === e && (e = this._createRenderer({
                pane: t
              }), this._paneRenderers[t] = e), e
            },
            _createRenderer: function (t) {
              return this.options.preferCanvas && ui(t) || mi(t)
            }
          });
          var gi = jn.extend({
            initialize: function (t, e) {
              jn.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function (t) {
              return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function (t) {
              return [(t = j(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
          });
          fi.create = pi, fi.pointsToPath = J, zn.geometryToLayer = Vn, zn.coordsToLatLng = Hn, zn.coordsToLatLngs = Bn, zn.latLngToCoords = Zn, zn.latLngsToCoords = $n, zn.getFeature = qn, zn.asFeature = Gn, Ke.mergeOptions({
            boxZoom: !0
          });
          var _i = nn.extend({
            initialize: function (t) {
              this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
            },
            addHooks: function () {
              Le(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function () {
              Ie(this._container, "mousedown", this._onMouseDown, this)
            },
            moved: function () {
              return this._moved
            },
            _destroy: function () {
              ae(this._pane), delete this._pane
            },
            _resetState: function () {
              this._resetStateTimeout = 0, this._moved = !1
            },
            _clearDeferredResetState: function () {
              0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
            },
            _onMouseDown: function (t) {
              if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
              this._clearDeferredResetState(), this._resetState(), Yt(), xe(), this._startPoint = this._map.mouseEventToContainerPoint(t), Le(document, {
                contextmenu: je,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
              }, this)
            },
            _onMouseMove: function (t) {
              this._moved || (this._moved = !0, this._box = oe("div", "leaflet-zoom-box", this._container), de(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
              var e = new N(this._point, this._startPoint),
                n = e.getSize();
              ye(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px"
            },
            _finish: function () {
              this._moved && (ae(this._box), pe(this._container, "leaflet-crosshair")), Jt(), Ce(), Ie(document, {
                contextmenu: je,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
              }, this)
            },
            _onMouseUp: function (t) {
              if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(r(this._resetState, this), 0);
                var e = new D(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(e).fire("boxzoomend", {
                  boxZoomBounds: e
                })
              }
            },
            _onKeyDown: function (t) {
              27 === t.keyCode && this._finish()
            }
          });
          Ke.addInitHook("addHandler", "boxZoom", _i), Ke.mergeOptions({
            doubleClickZoom: !0
          });
          var vi = nn.extend({
            addHooks: function () {
              this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function () {
              this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function (t) {
              var e = this._map,
                n = e.getZoom(),
                i = e.options.zoomDelta,
                r = t.originalEvent.shiftKey ? n - i : n + i;
              "center" === e.options.doubleClickZoom ? e.setZoom(r) : e.setZoomAround(t.containerPoint, r)
            }
          });
          Ke.addInitHook("addHandler", "doubleClickZoom", vi), Ke.mergeOptions({
            dragging: !0,
            inertia: !rt,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: .2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
          });
          var yi = nn.extend({
            addHooks: function () {
              if (!this._draggable) {
                var t = this._map;
                this._draggable = new cn(t._mapPane, t._container), this._draggable.on({
                  dragstart: this._onDragStart,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
              }
              de(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
            },
            removeHooks: function () {
              pe(this._map._container, "leaflet-grab"), pe(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
            },
            moved: function () {
              return this._draggable && this._draggable._moved
            },
            moving: function () {
              return this._draggable && this._draggable._moving
            },
            _onDragStart: function () {
              var t = this._map;
              if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = j(this._map.options.maxBounds);
                this._offsetLimit = F(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
              } else this._offsetLimit = null;
              t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function (t) {
              if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                  n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(n), this._times.push(e), this._prunePositions(e)
              }
              this._map.fire("move", t).fire("drag", t)
            },
            _prunePositions: function (t) {
              for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
            },
            _onZoomEnd: function () {
              var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
              this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
            },
            _viscousLimit: function (t, e) {
              return t - (t - e) * this._viscosity
            },
            _onPreDragLimit: function () {
              if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                  e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
              }
            },
            _onPreDragWrap: function () {
              var t = this._worldWidth,
                e = Math.round(t / 2),
                n = this._initialWorldOffset,
                i = this._draggable._newPos.x,
                r = (i - e + n) % t + e - n,
                s = (i + e + n) % t - e - n,
                o = Math.abs(r + n) < Math.abs(s + n) ? r : s;
              this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = o
            },
            _onDragEnd: function (t) {
              var e = this._map,
                n = e.options,
                i = !n.inertia || this._times.length < 2;
              if (e.fire("dragend", t), i) e.fire("moveend");
              else {
                this._prunePositions(+new Date);
                var r = this._lastPos.subtract(this._positions[0]),
                  s = n.easeLinearity,
                  o = r.multiplyBy(s / ((this._lastTime - this._times[0]) / 1e3)),
                  a = o.distanceTo([0, 0]),
                  l = Math.min(n.inertiaMaxSpeed, a),
                  c = o.multiplyBy(l / a),
                  u = l / (n.inertiaDeceleration * s),
                  h = c.multiplyBy(-u / 2).round();
                h.x || h.y ? (h = e._limitOffset(h, e.options.maxBounds), k((function () {
                  e.panBy(h, {
                    duration: u,
                    easeLinearity: s,
                    noMoveStart: !0,
                    animate: !0
                  })
                }))) : e.fire("moveend")
              }
            }
          });
          Ke.addInitHook("addHandler", "dragging", yi), Ke.mergeOptions({
            keyboard: !0,
            keyboardPanDelta: 80
          });
          var bi = nn.extend({
            keyCodes: {
              left: [37],
              right: [39],
              down: [40],
              up: [38],
              zoomIn: [187, 107, 61, 171],
              zoomOut: [189, 109, 54, 173]
            },
            initialize: function (t) {
              this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
            },
            addHooks: function () {
              var t = this._map._container;
              t.tabIndex <= 0 && (t.tabIndex = "0"), Le(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
              }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
              }, this)
            },
            removeHooks: function () {
              this._removeHooks(), Ie(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
              }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
              }, this)
            },
            _onMouseDown: function () {
              if (!this._focused) {
                var t = document.body,
                  e = document.documentElement,
                  n = t.scrollTop || e.scrollTop,
                  i = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(i, n)
              }
            },
            _onFocus: function () {
              this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function () {
              this._focused = !1, this._map.fire("blur")
            },
            _setPanDelta: function (t) {
              var e, n, i = this._panKeys = {},
                r = this.keyCodes;
              for (e = 0, n = r.left.length; e < n; e++) i[r.left[e]] = [-1 * t, 0];
              for (e = 0, n = r.right.length; e < n; e++) i[r.right[e]] = [t, 0];
              for (e = 0, n = r.down.length; e < n; e++) i[r.down[e]] = [0, t];
              for (e = 0, n = r.up.length; e < n; e++) i[r.up[e]] = [0, -1 * t]
            },
            _setZoomDelta: function (t) {
              var e, n, i = this._zoomKeys = {},
                r = this.keyCodes;
              for (e = 0, n = r.zoomIn.length; e < n; e++) i[r.zoomIn[e]] = t;
              for (e = 0, n = r.zoomOut.length; e < n; e++) i[r.zoomOut[e]] = -t
            },
            _addHooks: function () {
              Le(document, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function () {
              Ie(document, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function (t) {
              if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, n = t.keyCode,
                  i = this._map;
                if (n in this._panKeys) i._panAnim && i._panAnim._inProgress || (e = this._panKeys[n], t.shiftKey && (e = R(e).multiplyBy(3)), i.panBy(e), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds));
                else if (n in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                else {
                  if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey) return;
                  i.closePopup()
                }
                je(t)
              }
            }
          });
          Ke.addInitHook("addHandler", "keyboard", bi), Ke.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60
          });
          var wi = nn.extend({
            addHooks: function () {
              Le(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
            },
            removeHooks: function () {
              Ie(this._map._container, "mousewheel", this._onWheelScroll, this)
            },
            _onWheelScroll: function (t) {
              var e = Ue(t),
                n = this._map.options.wheelDebounceTime;
              this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
              var i = Math.max(n - (+new Date - this._startTime), 0);
              clearTimeout(this._timer), this._timer = setTimeout(r(this._performZoom, this), i), je(t)
            },
            _performZoom: function () {
              var t = this._map,
                e = t.getZoom(),
                n = this._map.options.zoomSnap || 0;
              t._stop();
              var i = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(this._delta / (4 * this._map.options.wheelPxPerZoomLevel))))) / Math.LN2,
                r = n ? Math.ceil(i / n) * n : i,
                s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
              this._delta = 0, this._startTime = null, s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
            }
          });
          Ke.addInitHook("addHandler", "scrollWheelZoom", wi), Ke.mergeOptions({
            tap: !0,
            tapTolerance: 15
          });
          var xi = nn.extend({
            addHooks: function () {
              Le(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function () {
              Ie(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function (t) {
              if (t.touches) {
                if (De(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var e = t.touches[0],
                  n = e.target;
                this._startPos = this._newPos = new O(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && de(n, "leaflet-active"), this._holdTimeout = setTimeout(r((function () {
                  this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                }), this), 1e3), this._simulateEvent("mousedown", e), Le(document, {
                  touchmove: this._onMove,
                  touchend: this._onUp
                }, this)
              }
            },
            _onUp: function (t) {
              if (clearTimeout(this._holdTimeout), Ie(document, {
                  touchmove: this._onMove,
                  touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                var e = t.changedTouches[0],
                  n = e.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && pe(n, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
              }
            },
            _isTapValid: function () {
              return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function (t) {
              var e = t.touches[0];
              this._newPos = new O(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
            },
            _simulateEvent: function (t, e) {
              var n = document.createEvent("MouseEvents");
              n._simulated = !0, e.target._simulatedClick = !0, n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
            }
          });
          Ct && !xt && Ke.addInitHook("addHandler", "tap", xi), Ke.mergeOptions({
            touchZoom: Ct && !rt,
            bounceAtZoomLimits: !0
          });
          var Ci = nn.extend({
            addHooks: function () {
              de(this._map._container, "leaflet-touch-zoom"), Le(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function () {
              pe(this._map._container, "leaflet-touch-zoom"), Ie(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function (t) {
              var e = this._map;
              if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var n = e.mouseEventToContainerPoint(t.touches[0]),
                  i = e.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))), this._startDist = n.distanceTo(i), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Le(document, "touchmove", this._onTouchMove, this), Le(document, "touchend", this._onTouchEnd, this), De(t)
              }
            },
            _onTouchMove: function (t) {
              if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                  n = e.mouseEventToContainerPoint(t.touches[0]),
                  i = e.mouseEventToContainerPoint(t.touches[1]),
                  s = n.distanceTo(i) / this._startDist;
                if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                  if (this._center = this._startLatLng, 1 === s) return
                } else {
                  var o = n._add(i)._divideBy(2)._subtract(this._centerPoint);
                  if (1 === s && 0 === o.x && 0 === o.y) return;
                  this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(o), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1), this._moved = !0), P(this._animRequest);
                var a = r(e._move, e, this._center, this._zoom, {
                  pinch: !0,
                  round: !1
                });
                this._animRequest = k(a, this, !0), De(t)
              }
            },
            _onTouchEnd: function () {
              this._moved && this._zooming ? (this._zooming = !1, P(this._animRequest), Ie(document, "touchmove", this._onTouchMove), Ie(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
            }
          });
          Ke.addInitHook("addHandler", "touchZoom", Ci), Ke.BoxZoom = _i, Ke.DoubleClickZoom = vi, Ke.Drag = yi, Ke.Keyboard = bi, Ke.ScrollWheelZoom = wi, Ke.Tap = xi, Ke.TouchZoom = Ci, Object.freeze = e, t.version = "1.6.0", t.Control = Ye, t.control = Je, t.Browser = Ot, t.Evented = I, t.Mixin = sn, t.Util = T, t.Class = E, t.Handler = nn, t.extend = n, t.bind = r, t.stamp = o, t.setOptions = p, t.DomEvent = Ge, t.DomUtil = Ee, t.PosAnimation = We, t.Draggable = cn, t.LineUtil = vn, t.PolyUtil = bn, t.Point = O, t.point = R, t.Bounds = N, t.bounds = F, t.Transformation = $, t.transformation = q, t.Projection = Cn, t.LatLng = z, t.latLng = V, t.LatLngBounds = D, t.latLngBounds = j, t.CRS = H, t.GeoJSON = zn, t.geoJSON = Kn, t.geoJson = Yn, t.Layer = Tn, t.LayerGroup = En, t.layerGroup = function (t, e) {
            return new En(t, e)
          }, t.FeatureGroup = Ln, t.featureGroup = function (t) {
            return new Ln(t)
          }, t.ImageOverlay = Jn, t.imageOverlay = function (t, e, n) {
            return new Jn(t, e, n)
          }, t.VideoOverlay = Qn, t.videoOverlay = function (t, e, n) {
            return new Qn(t, e, n)
          }, t.SVGOverlay = Xn, t.svgOverlay = function (t, e, n) {
            return new Xn(t, e, n)
          }, t.DivOverlay = ti, t.Popup = ei, t.popup = function (t, e) {
            return new ei(t, e)
          }, t.Tooltip = ni, t.tooltip = function (t, e) {
            return new ni(t, e)
          }, t.Icon = An, t.icon = function (t) {
            return new An(t)
          }, t.DivIcon = ii, t.divIcon = function (t) {
            return new ii(t)
          }, t.Marker = Mn, t.marker = function (t, e) {
            return new Mn(t, e)
          }, t.TileLayer = si, t.tileLayer = oi, t.GridLayer = ri, t.gridLayer = function (t) {
            return new ri(t)
          }, t.SVG = fi, t.svg = mi, t.Renderer = li, t.Canvas = ci, t.canvas = ui, t.Path = Rn, t.CircleMarker = Nn, t.circleMarker = function (t, e) {
            return new Nn(t, e)
          }, t.Circle = Fn, t.circle = function (t, e, n) {
            return new Fn(t, e, n)
          }, t.Polyline = Dn, t.polyline = function (t, e) {
            return new Dn(t, e)
          }, t.Polygon = jn, t.polygon = function (t, e) {
            return new jn(t, e)
          }, t.Rectangle = gi, t.rectangle = function (t, e) {
            return new gi(t, e)
          }, t.Map = Ke, t.map = function (t, e) {
            return new Ke(t, e)
          };
          var Si = window.L;
          t.noConflict = function () {
            return window.L = Si, this
          }, window.L = t
        }(e)
      },
      Hfs6: function (t, e, n) {
        var i, r, s;
        ! function (o) {
          if ("object" == typeof t.exports) {
            var a = o(0, e);
            void 0 !== a && (t.exports = a)
          } else r = [n, e], void 0 === (s = "function" == typeof (i = o) ? i.apply(e, r) : i) || (t.exports = s)
        }((function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var n = void 0;
          e.default = ["fr", [
              ["AM", "PM"], n, n
            ], n, [
              ["D", "L", "M", "M", "J", "V", "S"],
              ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
              ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
              ["di", "lu", "ma", "me", "je", "ve", "sa"]
            ], n, [
              ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              ["janv.", "f\xe9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xfbt", "sept.", "oct.", "nov.", "d\xe9c."],
              ["janvier", "f\xe9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xfbt", "septembre", "octobre", "novembre", "d\xe9cembre"]
            ], n, [
              ["av. J.-C.", "ap. J.-C."], n, ["avant J\xe9sus-Christ", "apr\xe8s J\xe9sus-Christ"]
            ], 1, [6, 0],
            ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"],
            ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"],
            ["{1} {0}", "{1} '\xe0' {0}", n, n],
            [",", "\u202f", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
            ["#,##0.###", "#,##0\xa0%", "#,##0.00\xa0\xa4", "#E0"], "EUR", "\u20ac", "euro", {
              ARS: ["$AR", "$"],
              AUD: ["$AU", "$"],
              BEF: ["FB"],
              BMD: ["$BM", "$"],
              BND: ["$BN", "$"],
              BZD: ["$BZ", "$"],
              CAD: ["$CA", "$"],
              CLP: ["$CL", "$"],
              CNY: [n, "\xa5"],
              COP: ["$CO", "$"],
              CYP: ["\xa3CY"],
              EGP: [n, "\xa3E"],
              FJD: ["$FJ", "$"],
              FKP: ["\xa3FK", "\xa3"],
              FRF: ["F"],
              GBP: ["\xa3GB", "\xa3"],
              GIP: ["\xa3GI", "\xa3"],
              HKD: [n, "$"],
              IEP: ["\xa3IE"],
              ILP: ["\xa3IL"],
              ITL: ["\u20a4IT"],
              JPY: [n, "\xa5"],
              KMF: [n, "FC"],
              LBP: ["\xa3LB", "\xa3L"],
              MTP: ["\xa3MT"],
              MXN: ["$MX", "$"],
              NAD: ["$NA", "$"],
              NIO: [n, "$C"],
              NZD: ["$NZ", "$"],
              RHD: ["$RH"],
              RON: [n, "L"],
              RWF: [n, "FR"],
              SBD: ["$SB", "$"],
              SGD: ["$SG", "$"],
              SRD: ["$SR", "$"],
              TOP: [n, "$T"],
              TTD: ["$TT", "$"],
              TWD: [n, "NT$"],
              USD: ["$US", "$"],
              UYU: ["$UY", "$"],
              WST: ["$WS"],
              XCD: [n, "$"],
              XPF: ["FCFP"],
              ZMW: [n, "Kw"]
            }, "ltr",
            function (t) {
              var e = Math.floor(Math.abs(t));
              return 0 === e || 1 === e ? 1 : 5
            }
          ]
        }))
      },
      zUnb: function (t, e, n) {
        "use strict";

        function i(t) {
          return "function" == typeof t
        }
        n.r(e);
        let r = !1;
        const s = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              const t = new Error;
              console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
            } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            r = t
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r
          }
        };

        function o(t) {
          setTimeout(() => {
            throw t
          }, 0)
        }
        const a = {
            closed: !0,
            next(t) {},
            error(t) {
              if (s.useDeprecatedSynchronousErrorHandling) throw t;
              o(t)
            },
            complete() {}
          },
          l = (() => Array.isArray || (t => t && "number" == typeof t.length))();

        function c(t) {
          return null !== t && "object" == typeof t
        }
        const u = (() => {
          function t(t) {
            return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();
        let h = (() => {
          class t {
            constructor(t) {
              this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
            }
            unsubscribe() {
              let e;
              if (this.closed) return;
              let {
                _parentOrParents: n,
                _unsubscribe: r,
                _subscriptions: s
              } = this;
              if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
              else if (null !== n)
                for (let t = 0; t < n.length; ++t) n[t].remove(this);
              if (i(r)) try {
                r.call(this)
              } catch (o) {
                e = o instanceof u ? d(o.errors) : [o]
              }
              if (l(s)) {
                let t = -1,
                  n = s.length;
                for (; ++t < n;) {
                  const n = s[t];
                  if (c(n)) try {
                    n.unsubscribe()
                  } catch (o) {
                    e = e || [], o instanceof u ? e = e.concat(d(o.errors)) : e.push(o)
                  }
                }
              }
              if (e) throw new u(e)
            }
            add(e) {
              let n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    const e = n;
                    n = new t, n._subscriptions = [e]
                  }
                  break;
                default:
                  throw new Error("unrecognized teardown " + e + " added to Subscription.")
              }
              let {
                _parentOrParents: i
              } = n;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return n;
                n._parentOrParents = [i, this]
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this)
              }
              const r = this._subscriptions;
              return null === r ? this._subscriptions = [n] : r.push(n), n
            }
            remove(t) {
              const e = this._subscriptions;
              if (e) {
                const n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
              }
            }
          }
          return t.EMPTY = function (t) {
            return t.closed = !0, t
          }(new t), t
        })();

        function d(t) {
          return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), [])
        }
        const p = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
        class f extends h {
          constructor(t, e, n) {
            switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
              case 0:
                this.destination = a;
                break;
              case 1:
                if (!t) {
                  this.destination = a;
                  break
                }
                if ("object" == typeof t) {
                  t instanceof f ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new m(this, t));
                  break
                }
                default:
                  this.syncErrorThrowable = !0, this.destination = new m(this, t, e, n)
            }
          } [p]() {
            return this
          }
          static create(t, e, n) {
            const i = new f(t, e, n);
            return i.syncErrorThrowable = !1, i
          }
          next(t) {
            this.isStopped || this._next(t)
          }
          error(t) {
            this.isStopped || (this.isStopped = !0, this._error(t))
          }
          complete() {
            this.isStopped || (this.isStopped = !0, this._complete())
          }
          unsubscribe() {
            this.closed || (this.isStopped = !0, super.unsubscribe())
          }
          _next(t) {
            this.destination.next(t)
          }
          _error(t) {
            this.destination.error(t), this.unsubscribe()
          }
          _complete() {
            this.destination.complete(), this.unsubscribe()
          }
          _unsubscribeAndRecycle() {
            const {
              _parentOrParents: t
            } = this;
            return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
          }
        }
        class m extends f {
          constructor(t, e, n, r) {
            let s;
            super(), this._parentSubscriber = t;
            let o = this;
            i(e) ? s = e : e && (s = e.next, n = e.error, r = e.complete, e !== a && (o = Object.create(e), i(o.unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = s, this._error = n, this._complete = r
          }
          next(t) {
            if (!this.isStopped && this._next) {
              const {
                _parentSubscriber: e
              } = this;
              s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
            }
          }
          error(t) {
            if (!this.isStopped) {
              const {
                _parentSubscriber: e
              } = this, {
                useDeprecatedSynchronousErrorHandling: n
              } = s;
              if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
              else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : o(t), this.unsubscribe();
              else {
                if (this.unsubscribe(), n) throw t;
                o(t)
              }
            }
          }
          complete() {
            if (!this.isStopped) {
              const {
                _parentSubscriber: t
              } = this;
              if (this._complete) {
                const e = () => this._complete.call(this._context);
                s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
              } else this.unsubscribe()
            }
          }
          __tryOrUnsub(t, e) {
            try {
              t.call(this._context, e)
            } catch (n) {
              if (this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling) throw n;
              o(n)
            }
          }
          __tryOrSetError(t, e, n) {
            if (!s.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
              e.call(this._context, n)
            } catch (i) {
              return s.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = i, t.syncErrorThrown = !0, !0) : (o(i), !0)
            }
            return !1
          }
          _unsubscribe() {
            const {
              _parentSubscriber: t
            } = this;
            this._context = null, this._parentSubscriber = null, t.unsubscribe()
          }
        }
        const g = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

        function _() {}

        function v(...t) {
          return y(t)
        }

        function y(t) {
          return t ? 1 === t.length ? t[0] : function (e) {
            return t.reduce((t, e) => e(t), e)
          } : _
        }
        let b = (() => {
          class t {
            constructor(t) {
              this._isScalar = !1, t && (this._subscribe = t)
            }
            lift(e) {
              const n = new t;
              return n.source = this, n.operator = e, n
            }
            subscribe(t, e, n) {
              const {
                operator: i
              } = this, r = function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]()
                }
                return t || e || n ? new f(t, e, n) : new f(a)
              }(t, e, n);
              if (r.add(i ? i.call(r, this.source) : this.source || s.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable ? this._subscribe(r) : this._trySubscribe(r)), s.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable && (r.syncErrorThrowable = !1, r.syncErrorThrown)) throw r.syncErrorValue;
              return r
            }
            _trySubscribe(t) {
              try {
                return this._subscribe(t)
              } catch (e) {
                s.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                  function (t) {
                    for (; t;) {
                      const {
                        closed: e,
                        destination: n,
                        isStopped: i
                      } = t;
                      if (e || i) return !1;
                      t = n && n instanceof f ? n : null
                    }
                    return !0
                  }(t) ? t.error(e) : console.warn(e)
              }
            }
            forEach(t, e) {
              return new(e = w(e))((e, n) => {
                let i;
                i = this.subscribe(e => {
                  try {
                    t(e)
                  } catch (r) {
                    n(r), i && i.unsubscribe()
                  }
                }, n, e)
              })
            }
            _subscribe(t) {
              const {
                source: e
              } = this;
              return e && e.subscribe(t)
            } [g]() {
              return this
            }
            pipe(...t) {
              return 0 === t.length ? this : y(t)(this)
            }
            toPromise(t) {
              return new(t = w(t))((t, e) => {
                let n;
                this.subscribe(t => n = t, t => e(t), () => t(n))
              })
            }
          }
          return t.create = e => new t(e), t
        })();

        function w(t) {
          if (t || (t = s.Promise || Promise), !t) throw new Error("no Promise impl found");
          return t
        }
        const x = (() => {
          function t() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();
        class C extends h {
          constructor(t, e) {
            super(), this.subject = t, this.subscriber = e, this.closed = !1
          }
          unsubscribe() {
            if (this.closed) return;
            this.closed = !0;
            const t = this.subject,
              e = t.observers;
            if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
            const n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
          }
        }
        class S extends f {
          constructor(t) {
            super(t), this.destination = t
          }
        }
        let k = (() => {
          class t extends b {
            constructor() {
              super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
            } [p]() {
              return new S(this)
            }
            lift(t) {
              const e = new P(this, this);
              return e.operator = t, e
            }
            next(t) {
              if (this.closed) throw new x;
              if (!this.isStopped) {
                const {
                  observers: e
                } = this, n = e.length, i = e.slice();
                for (let r = 0; r < n; r++) i[r].next(t)
              }
            }
            error(t) {
              if (this.closed) throw new x;
              this.hasError = !0, this.thrownError = t, this.isStopped = !0;
              const {
                observers: e
              } = this, n = e.length, i = e.slice();
              for (let r = 0; r < n; r++) i[r].error(t);
              this.observers.length = 0
            }
            complete() {
              if (this.closed) throw new x;
              this.isStopped = !0;
              const {
                observers: t
              } = this, e = t.length, n = t.slice();
              for (let i = 0; i < e; i++) n[i].complete();
              this.observers.length = 0
            }
            unsubscribe() {
              this.isStopped = !0, this.closed = !0, this.observers = null
            }
            _trySubscribe(t) {
              if (this.closed) throw new x;
              return super._trySubscribe(t)
            }
            _subscribe(t) {
              if (this.closed) throw new x;
              return this.hasError ? (t.error(this.thrownError), h.EMPTY) : this.isStopped ? (t.complete(), h.EMPTY) : (this.observers.push(t), new C(this, t))
            }
            asObservable() {
              const t = new b;
              return t.source = this, t
            }
          }
          return t.create = (t, e) => new P(t, e), t
        })();
        class P extends k {
          constructor(t, e) {
            super(), this.destination = t, this.source = e
          }
          next(t) {
            const {
              destination: e
            } = this;
            e && e.next && e.next(t)
          }
          error(t) {
            const {
              destination: e
            } = this;
            e && e.error && this.destination.error(t)
          }
          complete() {
            const {
              destination: t
            } = this;
            t && t.complete && this.destination.complete()
          }
          _subscribe(t) {
            const {
              source: e
            } = this;
            return e ? this.source.subscribe(t) : h.EMPTY
          }
        }

        function T(t) {
          return t && "function" == typeof t.schedule
        }
        class E extends f {
          constructor(t, e, n) {
            super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0
          }
          _next(t) {
            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
          }
          _error(t) {
            this.parent.notifyError(t, this), this.unsubscribe()
          }
          _complete() {
            this.parent.notifyComplete(this), this.unsubscribe()
          }
        }
        const L = t => e => {
          for (let n = 0, i = t.length; n < i && !e.closed; n++) e.next(t[n]);
          e.complete()
        };

        function A() {
          return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        const I = A(),
          O = t => t && "number" == typeof t.length && "function" != typeof t;

        function M(t) {
          return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        const R = t => {
          if (t && "function" == typeof t[g]) return i = t, t => {
            const e = i[g]();
            if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return e.subscribe(t)
          };
          if (O(t)) return L(t);
          if (M(t)) return n = t, t => (n.then(e => {
            t.closed || (t.next(e), t.complete())
          }, e => t.error(e)).then(null, o), t);
          if (t && "function" == typeof t[I]) return e = t, t => {
            const n = e[I]();
            for (;;) {
              const e = n.next();
              if (e.done) {
                t.complete();
                break
              }
              if (t.next(e.value), t.closed) break
            }
            return "function" == typeof n.return && t.add(() => {
              n.return && n.return()
            }), t
          }; {
            const e = c(t) ? "an invalid object" : `'${t}'`;
            throw new TypeError(`You provided ${e} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.")
          }
          var e, n, i
        };

        function N(t, e, n, i, r = new E(t, n, i)) {
          if (!r.closed) return e instanceof b ? e.subscribe(r) : R(e)(r)
        }
        class F extends f {
          notifyNext(t, e, n, i, r) {
            this.destination.next(e)
          }
          notifyError(t, e) {
            this.destination.error(t)
          }
          notifyComplete(t) {
            this.destination.complete()
          }
        }

        function D(t, e) {
          return function (n) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new j(t, e))
          }
        }
        class j {
          constructor(t, e) {
            this.project = t, this.thisArg = e
          }
          call(t, e) {
            return e.subscribe(new z(t, this.project, this.thisArg))
          }
        }
        class z extends f {
          constructor(t, e, n) {
            super(t), this.project = e, this.count = 0, this.thisArg = n || this
          }
          _next(t) {
            let e;
            try {
              e = this.project.call(this.thisArg, t, this.count++)
            } catch (n) {
              return void this.destination.error(n)
            }
            this.destination.next(e)
          }
        }

        function V(t, e) {
          return new b(n => {
            const i = new h;
            let r = 0;
            return i.add(e.schedule((function () {
              r !== t.length ? (n.next(t[r++]), n.closed || i.add(this.schedule())) : n.complete()
            }))), i
          })
        }

        function U(t, e) {
          return e ? function (t, e) {
            if (null != t) {
              if (function (t) {
                  return t && "function" == typeof t[g]
                }(t)) return function (t, e) {
                return new b(n => {
                  const i = new h;
                  return i.add(e.schedule(() => {
                    const r = t[g]();
                    i.add(r.subscribe({
                      next(t) {
                        i.add(e.schedule(() => n.next(t)))
                      },
                      error(t) {
                        i.add(e.schedule(() => n.error(t)))
                      },
                      complete() {
                        i.add(e.schedule(() => n.complete()))
                      }
                    }))
                  })), i
                })
              }(t, e);
              if (M(t)) return function (t, e) {
                return new b(n => {
                  const i = new h;
                  return i.add(e.schedule(() => t.then(t => {
                    i.add(e.schedule(() => {
                      n.next(t), i.add(e.schedule(() => n.complete()))
                    }))
                  }, t => {
                    i.add(e.schedule(() => n.error(t)))
                  }))), i
                })
              }(t, e);
              if (O(t)) return V(t, e);
              if (function (t) {
                  return t && "function" == typeof t[I]
                }(t) || "string" == typeof t) return function (t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new b(n => {
                  const i = new h;
                  let r;
                  return i.add(() => {
                    r && "function" == typeof r.return && r.return()
                  }), i.add(e.schedule(() => {
                    r = t[I](), i.add(e.schedule((function () {
                      if (n.closed) return;
                      let t, e;
                      try {
                        const n = r.next();
                        t = n.value, e = n.done
                      } catch (i) {
                        return void n.error(i)
                      }
                      e ? n.complete() : (n.next(t), this.schedule())
                    })))
                  })), i
                })
              }(t, e)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
          }(t, e) : t instanceof b ? t : new b(R(t))
        }

        function H(t, e, n = Number.POSITIVE_INFINITY) {
          return "function" == typeof e ? i => i.pipe(H((n, i) => U(t(n, i)).pipe(D((t, r) => e(n, t, i, r))), n)) : ("number" == typeof e && (n = e), e => e.lift(new B(t, n)))
        }
        class B {
          constructor(t, e = Number.POSITIVE_INFINITY) {
            this.project = t, this.concurrent = e
          }
          call(t, e) {
            return e.subscribe(new Z(t, this.project, this.concurrent))
          }
        }
        class Z extends F {
          constructor(t, e, n = Number.POSITIVE_INFINITY) {
            super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
          }
          _next(t) {
            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
          }
          _tryNext(t) {
            let e;
            const n = this.index++;
            try {
              e = this.project(t, n)
            } catch (i) {
              return void this.destination.error(i)
            }
            this.active++, this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const i = new E(this, e, n),
              r = this.destination;
            r.add(i);
            const s = N(this, t, void 0, void 0, i);
            s !== i && r.add(s)
          }
          _complete() {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
          }
          notifyNext(t, e, n, i, r) {
            this.destination.next(e)
          }
          notifyComplete(t) {
            const e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
          }
        }

        function $(t) {
          return t
        }

        function q(t = Number.POSITIVE_INFINITY) {
          return H($, t)
        }

        function G(t, e) {
          return e ? V(t, e) : new b(L(t))
        }

        function W() {
          return function (t) {
            return t.lift(new K(t))
          }
        }
        class K {
          constructor(t) {
            this.connectable = t
          }
          call(t, e) {
            const {
              connectable: n
            } = this;
            n._refCount++;
            const i = new Y(t, n),
              r = e.subscribe(i);
            return i.closed || (i.connection = n.connect()), r
          }
        }
        class Y extends f {
          constructor(t, e) {
            super(t), this.connectable = e
          }
          _unsubscribe() {
            const {
              connectable: t
            } = this;
            if (!t) return void(this.connection = null);
            this.connectable = null;
            const e = t._refCount;
            if (e <= 0) return void(this.connection = null);
            if (t._refCount = e - 1, e > 1) return void(this.connection = null);
            const {
              connection: n
            } = this, i = t._connection;
            this.connection = null, !i || n && i !== n || i.unsubscribe()
          }
        }
        class J extends b {
          constructor(t, e) {
            super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
          }
          _subscribe(t) {
            return this.getSubject().subscribe(t)
          }
          getSubject() {
            const t = this._subject;
            return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
          }
          connect() {
            let t = this._connection;
            return t || (this._isComplete = !1, t = this._connection = new h, t.add(this.source.subscribe(new X(this.getSubject(), this))), t.closed && (this._connection = null, t = h.EMPTY)), t
          }
          refCount() {
            return W()(this)
          }
        }
        const Q = (() => {
          const t = J.prototype;
          return {
            operator: {
              value: null
            },
            _refCount: {
              value: 0,
              writable: !0
            },
            _subject: {
              value: null,
              writable: !0
            },
            _connection: {
              value: null,
              writable: !0
            },
            _subscribe: {
              value: t._subscribe
            },
            _isComplete: {
              value: t._isComplete,
              writable: !0
            },
            getSubject: {
              value: t.getSubject
            },
            connect: {
              value: t.connect
            },
            refCount: {
              value: t.refCount
            }
          }
        })();
        class X extends S {
          constructor(t, e) {
            super(t), this.connectable = e
          }
          _error(t) {
            this._unsubscribe(), super._error(t)
          }
          _complete() {
            this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
          }
          _unsubscribe() {
            const t = this.connectable;
            if (t) {
              this.connectable = null;
              const e = t._connection;
              t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
            }
          }
        }

        function tt() {
          return new k
        }

        function et(t) {
          return {
            toString: t
          }.toString()
        }

        function nt(t) {
          return function (...e) {
            if (t) {
              const n = t(...e);
              for (const t in n) this[t] = n[t]
            }
          }
        }

        function it(t, e, n) {
          return et(() => {
            const i = nt(e);

            function r(...t) {
              if (this instanceof r) return i.apply(this, t), this;
              const e = new r(...t);
              return n.annotation = e, n;

              function n(t, n, i) {
                const r = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", {
                  value: []
                }).__parameters__;
                for (; r.length <= i;) r.push(null);
                return (r[i] = r[i] || []).push(e), t
              }
            }
            return n && (r.prototype = Object.create(n.prototype)), r.prototype.ngMetadataName = t, r.annotationCls = r, r
          })
        }

        function rt(t, e, n, i) {
          return et(() => {
            const r = nt(e);

            function s(...t) {
              if (this instanceof s) return r.apply(this, t), this;
              const e = new s(...t);
              return function (n, r) {
                const s = n.constructor,
                  o = s.hasOwnProperty("__prop__metadata__") ? s.__prop__metadata__ : Object.defineProperty(s, "__prop__metadata__", {
                    value: {}
                  }).__prop__metadata__;
                o[r] = o.hasOwnProperty(r) && o[r] || [], o[r].unshift(e), i && i(n, r, ...t)
              }
            }
            return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s
          })
        }
        const st = it("Inject", t => ({
            token: t
          })),
          ot = it("Optional"),
          at = it("Self"),
          lt = it("SkipSelf");
        var ct = function (t) {
          return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
        }({});

        function ut(t) {
          for (let e in t)
            if (t[e] === ut) return e;
          throw Error("Could not find renamed property on target object.")
        }

        function ht(t, e) {
          for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
        }

        function dt(t) {
          return {
            token: t.token,
            providedIn: t.providedIn || null,
            factory: t.factory,
            value: void 0
          }
        }

        function pt(t) {
          return {
            factory: t.factory,
            providers: t.providers || [],
            imports: t.imports || []
          }
        }

        function ft(t) {
          return mt(t, t[_t]) || mt(t, t[bt])
        }

        function mt(t, e) {
          return e && e.token === t ? e : null
        }

        function gt(t) {
          return t && (t.hasOwnProperty(vt) || t.hasOwnProperty(wt)) ? t[vt] : null
        }
        const _t = ut({
            "\u0275prov": ut
          }),
          vt = ut({
            "\u0275inj": ut
          }),
          yt = ut({
            "\u0275provFallback": ut
          }),
          bt = ut({
            ngInjectableDef: ut
          }),
          wt = ut({
            ngInjectorDef: ut
          });

        function xt(t) {
          if ("string" == typeof t) return t;
          if (Array.isArray(t)) return "[" + t.map(xt).join(", ") + "]";
          if (null == t) return "" + t;
          if (t.overriddenName) return `${t.overriddenName}`;
          if (t.name) return `${t.name}`;
          const e = t.toString();
          if (null == e) return "" + e;
          const n = e.indexOf("\n");
          return -1 === n ? e : e.substring(0, n)
        }

        function Ct(t, e) {
          return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
        }
        const St = ut({
          __forward_ref__: ut
        });

        function kt(t) {
          return t.__forward_ref__ = kt, t.toString = function () {
            return xt(this())
          }, t
        }

        function Pt(t) {
          return Tt(t) ? t() : t
        }

        function Tt(t) {
          return "function" == typeof t && t.hasOwnProperty(St) && t.__forward_ref__ === kt
        }
        const Et = "undefined" != typeof globalThis && globalThis,
          Lt = "undefined" != typeof window && window,
          At = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
          It = "undefined" != typeof global && global,
          Ot = Et || It || Lt || At,
          Mt = ut({
            "\u0275cmp": ut
          }),
          Rt = ut({
            "\u0275dir": ut
          }),
          Nt = ut({
            "\u0275pipe": ut
          }),
          Ft = ut({
            "\u0275mod": ut
          }),
          Dt = ut({
            "\u0275loc": ut
          }),
          jt = ut({
            "\u0275fac": ut
          }),
          zt = ut({
            __NG_ELEMENT_ID__: ut
          });
        class Vt {
          constructor(t, e) {
            this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = dt({
              token: this,
              providedIn: e.providedIn || "root",
              factory: e.factory
            }))
          }
          toString() {
            return `InjectionToken ${this._desc}`
          }
        }
        const Ut = new Vt("INJECTOR", -1),
          Ht = {},
          Bt = /\n/gm,
          Zt = ut({
            provide: String,
            useValue: ut
          });
        let $t, qt = void 0;

        function Gt(t) {
          const e = qt;
          return qt = t, e
        }

        function Wt(t) {
          const e = $t;
          return $t = t, e
        }

        function Kt(t, e = ct.Default) {
          if (void 0 === qt) throw new Error("inject() must be called from an injection context");
          return null === qt ? Jt(t, void 0, e) : qt.get(t, e & ct.Optional ? null : void 0, e)
        }

        function Yt(t, e = ct.Default) {
          return ($t || Kt)(Pt(t), e)
        }

        function Jt(t, e, n) {
          const i = ft(t);
          if (i && "root" == i.providedIn) return void 0 === i.value ? i.value = i.factory() : i.value;
          if (n & ct.Optional) return null;
          if (void 0 !== e) return e;
          throw new Error(`Injector: NOT_FOUND [${xt(t)}]`)
        }

        function Qt(t) {
          const e = [];
          for (let n = 0; n < t.length; n++) {
            const i = Pt(t[n]);
            if (Array.isArray(i)) {
              if (0 === i.length) throw new Error("Arguments array must have arguments.");
              let t = void 0,
                n = ct.Default;
              for (let e = 0; e < i.length; e++) {
                const r = i[e];
                r instanceof ot || "Optional" === r.ngMetadataName || r === ot ? n |= ct.Optional : r instanceof lt || "SkipSelf" === r.ngMetadataName || r === lt ? n |= ct.SkipSelf : r instanceof at || "Self" === r.ngMetadataName || r === at ? n |= ct.Self : t = r instanceof st || r === st ? r.token : r
              }
              e.push(Yt(t, n))
            } else e.push(Yt(i))
          }
          return e
        }
        class Xt {
          get(t, e = Ht) {
            if (e === Ht) {
              const e = new Error(`NullInjectorError: No provider for ${xt(t)}!`);
              throw e.name = "NullInjectorError", e
            }
            return e
          }
        }
        class te {}
        class ee {}

        function ne(t, e) {
          t.forEach(t => Array.isArray(t) ? ne(t, e) : e(t))
        }

        function ie(t, e, n) {
          e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }

        function re(t, e) {
          return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
        }

        function se(t, e, n) {
          let i = ae(t, e);
          return i >= 0 ? t[1 | i] = n : (i = ~i, function (t, e, n, i) {
            let r = t.length;
            if (r == e) t.push(n, i);
            else if (1 === r) t.push(i, t[0]), t[0] = n;
            else {
              for (r--, t.push(t[r - 1], t[r]); r > e;) t[r] = t[r - 2], r--;
              t[e] = n, t[e + 1] = i
            }
          }(t, i, e, n)), i
        }

        function oe(t, e) {
          const n = ae(t, e);
          if (n >= 0) return t[1 | n]
        }

        function ae(t, e) {
          return function (t, e, n) {
            let i = 0,
              r = t.length >> 1;
            for (; r !== i;) {
              const n = i + (r - i >> 1),
                s = t[n << 1];
              if (e === s) return n << 1;
              s > e ? r = n : i = n + 1
            }
            return ~(r << 1)
          }(t, e)
        }
        const le = function () {
            var t = {
              OnPush: 0,
              Default: 1
            };
            return t[t.OnPush] = "OnPush", t[t.Default] = "Default", t
          }(),
          ce = function () {
            var t = {
              Emulated: 0,
              Native: 1,
              None: 2,
              ShadowDom: 3
            };
            return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t
          }(),
          ue = {},
          he = [];
        let de = 0;

        function pe(t) {
          return et(() => {
            const e = t.type,
              n = e.prototype,
              i = {},
              r = {
                type: e,
                providersResolver: null,
                decls: t.decls,
                vars: t.vars,
                factory: null,
                template: t.template || null,
                consts: t.consts || null,
                ngContentSelectors: t.ngContentSelectors,
                hostBindings: t.hostBindings || null,
                hostVars: t.hostVars || 0,
                hostAttrs: t.hostAttrs || null,
                contentQueries: t.contentQueries || null,
                declaredInputs: i,
                inputs: null,
                outputs: null,
                exportAs: t.exportAs || null,
                onChanges: null,
                onInit: n.ngOnInit || null,
                doCheck: n.ngDoCheck || null,
                afterContentInit: n.ngAfterContentInit || null,
                afterContentChecked: n.ngAfterContentChecked || null,
                afterViewInit: n.ngAfterViewInit || null,
                afterViewChecked: n.ngAfterViewChecked || null,
                onDestroy: n.ngOnDestroy || null,
                onPush: t.changeDetection === le.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                selectors: t.selectors || he,
                viewQuery: t.viewQuery || null,
                features: t.features || null,
                data: t.data || {},
                encapsulation: t.encapsulation || ce.Emulated,
                id: "c",
                styles: t.styles || he,
                _: null,
                setInput: null,
                schemas: t.schemas || null,
                tView: null
              },
              s = t.directives,
              o = t.features,
              a = t.pipes;
            return r.id += de++, r.inputs = ve(t.inputs, i), r.outputs = ve(t.outputs), o && o.forEach(t => t(r)), r.directiveDefs = s ? () => ("function" == typeof s ? s() : s).map(fe) : null, r.pipeDefs = a ? () => ("function" == typeof a ? a() : a).map(me) : null, r
          })
        }

        function fe(t) {
          return we(t) || function (t) {
            return t[Rt] || null
          }(t)
        }

        function me(t) {
          return function (t) {
            return t[Nt] || null
          }(t)
        }
        const ge = {};

        function _e(t) {
          const e = {
            type: t.type,
            bootstrap: t.bootstrap || he,
            declarations: t.declarations || he,
            imports: t.imports || he,
            exports: t.exports || he,
            transitiveCompileScopes: null,
            schemas: t.schemas || null,
            id: t.id || null
          };
          return null != t.id && et(() => {
            ge[t.id] = t.type
          }), e
        }

        function ve(t, e) {
          if (null == t) return ue;
          const n = {};
          for (const i in t)
            if (t.hasOwnProperty(i)) {
              let r = t[i],
                s = r;
              Array.isArray(r) && (s = r[1], r = r[0]), n[r] = i, e && (e[r] = s)
            } return n
        }
        const ye = pe;

        function be(t) {
          return {
            type: t.type,
            name: t.name,
            factory: null,
            pure: !1 !== t.pure,
            onDestroy: t.type.prototype.ngOnDestroy || null
          }
        }

        function we(t) {
          return t[Mt] || null
        }

        function xe(t, e) {
          return t.hasOwnProperty(jt) ? t[jt] : null
        }

        function Ce(t, e) {
          const n = t[Ft] || null;
          if (!n && !0 === e) throw new Error(`Type ${xt(t)} does not have '\u0275mod' property.`);
          return n
        }

        function Se(t) {
          return Array.isArray(t) && "object" == typeof t[1]
        }

        function ke(t) {
          return Array.isArray(t) && !0 === t[1]
        }

        function Pe(t) {
          return 0 != (8 & t.flags)
        }

        function Te(t) {
          return 2 == (2 & t.flags)
        }

        function Ee(t) {
          return 1 == (1 & t.flags)
        }

        function Le(t) {
          return null !== t.template
        }

        function Ae(t) {
          return 0 != (512 & t[2])
        }
        let Ie = void 0;

        function Oe(t) {
          return !!t.listen
        }
        const Me = {
          createRenderer: (t, e) => void 0 !== Ie ? Ie : "undefined" != typeof document ? document : void 0
        };

        function Re(t) {
          for (; Array.isArray(t);) t = t[0];
          return t
        }

        function Ne(t, e) {
          return Re(e[t + 19])
        }

        function Fe(t, e) {
          return Re(e[t.index])
        }

        function De(t, e) {
          return t.data[e + 19]
        }

        function je(t, e) {
          return t[e + 19]
        }

        function ze(t, e) {
          const n = e[t];
          return Se(n) ? n : n[0]
        }

        function Ve(t) {
          const e = function (t) {
            return t.__ngContext__ || null
          }(t);
          return e ? Array.isArray(e) ? e : e.lView : null
        }

        function Ue(t) {
          return 4 == (4 & t[2])
        }

        function He(t) {
          return 128 == (128 & t[2])
        }

        function Be(t, e) {
          return null === t || null == e ? null : t[e]
        }

        function Ze(t) {
          t[18] = 0
        }
        const $e = {
          lFrame: pn(null),
          bindingsEnabled: !0,
          checkNoChangesMode: !1
        };

        function qe() {
          return $e.bindingsEnabled
        }

        function Ge() {
          return $e.lFrame.lView
        }

        function We() {
          return $e.lFrame.tView
        }

        function Ke(t) {
          $e.lFrame.contextLView = t
        }

        function Ye() {
          return $e.lFrame.previousOrParentTNode
        }

        function Je(t, e) {
          $e.lFrame.previousOrParentTNode = t, $e.lFrame.isParent = e
        }

        function Qe() {
          return $e.lFrame.isParent
        }

        function Xe() {
          $e.lFrame.isParent = !1
        }

        function tn() {
          return $e.checkNoChangesMode
        }

        function en(t) {
          $e.checkNoChangesMode = t
        }

        function nn() {
          const t = $e.lFrame;
          let e = t.bindingRootIndex;
          return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        }

        function rn() {
          return $e.lFrame.bindingIndex
        }

        function sn() {
          return $e.lFrame.bindingIndex++
        }

        function on(t) {
          const e = $e.lFrame,
            n = e.bindingIndex;
          return e.bindingIndex = e.bindingIndex + t, n
        }

        function an(t, e) {
          const n = $e.lFrame;
          n.bindingIndex = n.bindingRootIndex = t, n.currentDirectiveIndex = e
        }

        function ln() {
          return $e.lFrame.currentQueryIndex
        }

        function cn(t) {
          $e.lFrame.currentQueryIndex = t
        }

        function un(t, e) {
          const n = dn();
          $e.lFrame = n, n.previousOrParentTNode = e, n.lView = t
        }

        function hn(t, e) {
          const n = dn(),
            i = t[1];
          $e.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = i, n.contextLView = t, n.bindingIndex = i.bindingStartIndex
        }

        function dn() {
          const t = $e.lFrame,
            e = null === t ? null : t.child;
          return null === e ? pn(t) : e
        }

        function pn(t) {
          const e = {
            previousOrParentTNode: null,
            isParent: !0,
            lView: null,
            tView: null,
            selectedIndex: 0,
            contextLView: null,
            elementDepthCount: 0,
            currentNamespace: null,
            currentSanitizer: null,
            currentDirectiveIndex: -1,
            bindingRootIndex: -1,
            bindingIndex: -1,
            currentQueryIndex: 0,
            parent: t,
            child: null
          };
          return null !== t && (t.child = e), e
        }

        function fn() {
          const t = $e.lFrame;
          return $e.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
        }
        const mn = fn;

        function gn() {
          const t = fn();
          t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.currentSanitizer = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
        }

        function _n() {
          return $e.lFrame.selectedIndex
        }

        function vn(t) {
          $e.lFrame.selectedIndex = t
        }

        function yn() {
          const t = $e.lFrame;
          return De(t.tView, t.selectedIndex)
        }

        function bn(t, e) {
          for (let n = e.directiveStart, i = e.directiveEnd; n < i; n++) {
            const e = t.data[n];
            e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit), e.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)), e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit), e.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)), null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy)
          }
        }

        function wn(t, e, n) {
          Sn(t, e, 3, n)
        }

        function xn(t, e, n, i) {
          (3 & t[2]) === n && Sn(t, e, n, i)
        }

        function Cn(t, e) {
          let n = t[2];
          (3 & n) === e && (n &= 1023, n += 1, t[2] = n)
        }

        function Sn(t, e, n, i) {
          const r = null != i ? i : -1;
          let s = 0;
          for (let o = void 0 !== i ? 65535 & t[18] : 0; o < e.length; o++)
            if ("number" == typeof e[o + 1]) {
              if (s = e[o], null != i && s >= i) break
            } else e[o] < 0 && (t[18] += 65536), (s < r || -1 == r) && (kn(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++
        }

        function kn(t, e, n, i) {
          const r = n[i] < 0,
            s = n[i + 1],
            o = t[r ? -n[i] : n[i]];
          r ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 1024, s.call(o)) : s.call(o)
        }
        class Pn {
          constructor(t, e, n) {
            this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
          }
        }

        function Tn(t, e, n) {
          const i = Oe(t);
          let r = 0;
          for (; r < n.length;) {
            const s = n[r];
            if ("number" == typeof s) {
              if (0 !== s) break;
              r++;
              const o = n[r++],
                a = n[r++],
                l = n[r++];
              i ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
            } else {
              const o = s,
                a = n[++r];
              Ln(o) ? i && t.setProperty(e, o, a) : i ? t.setAttribute(e, o, a) : e.setAttribute(o, a), r++
            }
          }
          return r
        }

        function En(t) {
          return 3 === t || 4 === t || 6 === t
        }

        function Ln(t) {
          return 64 === t.charCodeAt(0)
        }

        function An(t, e) {
          if (null === e || 0 === e.length);
          else if (null === t || 0 === t.length) t = e.slice();
          else {
            let n = -1;
            for (let i = 0; i < e.length; i++) {
              const r = e[i];
              "number" == typeof r ? n = r : 0 === n || In(t, n, r, null, -1 === n || 2 === n ? e[++i] : null)
            }
          }
          return t
        }

        function In(t, e, n, i, r) {
          let s = 0,
            o = t.length;
          if (-1 === e) o = -1;
          else
            for (; s < t.length;) {
              const n = t[s++];
              if ("number" == typeof n) {
                if (n === e) {
                  o = -1;
                  break
                }
                if (n > e) {
                  o = s - 1;
                  break
                }
              }
            }
          for (; s < t.length;) {
            const e = t[s];
            if ("number" == typeof e) break;
            if (e === n) {
              if (null === i) return void(null !== r && (t[s + 1] = r));
              if (i === t[s + 1]) return void(t[s + 2] = r)
            }
            s++, null !== i && s++, null !== r && s++
          } - 1 !== o && (t.splice(o, 0, e), s = o + 1), t.splice(s++, 0, n), null !== i && t.splice(s++, 0, i), null !== r && t.splice(s++, 0, r)
        }

        function On(t) {
          return -1 !== t
        }

        function Mn(t) {
          return 32767 & t
        }

        function Rn(t) {
          return t >> 16
        }

        function Nn(t, e) {
          let n = Rn(t),
            i = e;
          for (; n > 0;) i = i[15], n--;
          return i
        }

        function Fn(t) {
          return "string" == typeof t ? t : null == t ? "" : "" + t
        }

        function Dn(t) {
          return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : Fn(t)
        }
        const jn = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Ot))();

        function zn(t) {
          return t instanceof Function ? t() : t
        }
        let Vn = !0;

        function Un(t) {
          const e = Vn;
          return Vn = t, e
        }
        let Hn = 0;

        function Bn(t, e) {
          const n = $n(t, e);
          if (-1 !== n) return n;
          const i = e[1];
          i.firstCreatePass && (t.injectorIndex = e.length, Zn(i.data, t), Zn(e, null), Zn(i.blueprint, null));
          const r = qn(t, e),
            s = t.injectorIndex;
          if (On(r)) {
            const t = Mn(r),
              n = Nn(r, e),
              i = n[1].data;
            for (let r = 0; r < 8; r++) e[s + r] = n[t + r] | i[t + r]
          }
          return e[s + 8] = r, s
        }

        function Zn(t, e) {
          t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
        }

        function $n(t, e) {
          return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
        }

        function qn(t, e) {
          if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
          let n = e[6],
            i = 1;
          for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, i++;
          return n ? n.injectorIndex | i << 16 : -1
        }

        function Gn(t, e, n) {
          ! function (t, e, n) {
            let i = "string" != typeof n ? n[zt] : n.charCodeAt(0) || 0;
            null == i && (i = n[zt] = Hn++);
            const r = 255 & i,
              s = 1 << r,
              o = 64 & r,
              a = 32 & r,
              l = e.data;
            128 & r ? o ? a ? l[t + 7] |= s : l[t + 6] |= s : a ? l[t + 5] |= s : l[t + 4] |= s : o ? a ? l[t + 3] |= s : l[t + 2] |= s : a ? l[t + 1] |= s : l[t] |= s
          }(t, e, n)
        }

        function Wn(t, e, n, i = ct.Default, r) {
          if (null !== t) {
            const r = function (t) {
              if ("string" == typeof t) return t.charCodeAt(0) || 0;
              const e = t[zt];
              return "number" == typeof e && e > 0 ? 255 & e : e
            }(n);
            if ("function" == typeof r) {
              un(e, t);
              try {
                const t = r();
                if (null != t || i & ct.Optional) return t;
                throw new Error(`No provider for ${Dn(n)}!`)
              } finally {
                mn()
              }
            } else if ("number" == typeof r) {
              if (-1 === r) return new ei(t, e);
              let s = null,
                o = $n(t, e),
                a = -1,
                l = i & ct.Host ? e[16][6] : null;
              for ((-1 === o || i & ct.SkipSelf) && (a = -1 === o ? qn(t, e) : e[o + 8], ti(i, !1) ? (s = e[1], o = Mn(a), e = Nn(a, e)) : o = -1); - 1 !== o;) {
                a = e[o + 8];
                const t = e[1];
                if (Xn(r, o, t.data)) {
                  const t = Yn(o, e, n, s, i, l);
                  if (t !== Kn) return t
                }
                ti(i, e[1].data[o + 8] === l) && Xn(r, o, e) ? (s = t, o = Mn(a), e = Nn(a, e)) : o = -1
              }
            }
          }
          if (i & ct.Optional && void 0 === r && (r = null), 0 == (i & (ct.Self | ct.Host))) {
            const t = e[9],
              s = Wt(void 0);
            try {
              return t ? t.get(n, r, i & ct.Optional) : Jt(n, r, i & ct.Optional)
            } finally {
              Wt(s)
            }
          }
          if (i & ct.Optional) return r;
          throw new Error(`NodeInjector: NOT_FOUND [${Dn(n)}]`)
        }
        const Kn = {};

        function Yn(t, e, n, i, r, s) {
          const o = e[1],
            a = o.data[t + 8],
            l = Jn(a, o, n, null == i ? Te(a) && Vn : i != o && 3 === a.type, r & ct.Host && s === a);
          return null !== l ? Qn(e, o, l, a) : Kn
        }

        function Jn(t, e, n, i, r) {
          const s = t.providerIndexes,
            o = e.data,
            a = 65535 & s,
            l = t.directiveStart,
            c = s >> 16,
            u = r ? a + c : t.directiveEnd;
          for (let h = i ? a : a + c; h < u; h++) {
            const t = o[h];
            if (h < l && n === t || h >= l && t.type === n) return h
          }
          if (r) {
            const t = o[l];
            if (t && Le(t) && t.type === n) return l
          }
          return null
        }

        function Qn(t, e, n, i) {
          let r = t[n];
          const s = e.data;
          if (r instanceof Pn) {
            const o = r;
            if (o.resolving) throw new Error(`Circular dep for ${Dn(s[n])}`);
            const a = Un(o.canSeeViewProviders);
            let l;
            o.resolving = !0, o.injectImpl && (l = Wt(o.injectImpl)), un(t, i);
            try {
              r = t[n] = o.factory(void 0, s, t, i), e.firstCreatePass && n >= i.directiveStart && function (t, e, n) {
                const {
                  onChanges: i,
                  onInit: r,
                  doCheck: s
                } = e;
                i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i)), r && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, r), s && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, s), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, s))
              }(n, s[n], e)
            } finally {
              o.injectImpl && Wt(l), Un(a), o.resolving = !1, mn()
            }
          }
          return r
        }

        function Xn(t, e, n) {
          const i = 64 & t,
            r = 32 & t;
          let s;
          return s = 128 & t ? i ? r ? n[e + 7] : n[e + 6] : r ? n[e + 5] : n[e + 4] : i ? r ? n[e + 3] : n[e + 2] : r ? n[e + 1] : n[e], !!(s & 1 << t)
        }

        function ti(t, e) {
          return !(t & ct.Self || t & ct.Host && e)
        }
        class ei {
          constructor(t, e) {
            this._tNode = t, this._lView = e
          }
          get(t, e) {
            return Wn(this._tNode, this._lView, t, void 0, e)
          }
        }

        function ni(t) {
          return et(() => {
            const e = Object.getPrototypeOf(t.prototype).constructor,
              n = e[jt] || function t(e) {
                const n = e;
                if (Tt(e)) return () => {
                  const e = t(Pt(n));
                  return e ? e() : null
                };
                let i = xe(n);
                if (null === i) {
                  const t = gt(n);
                  i = t && t.factory
                }
                return i || null
              }(e);
            return null !== n ? n : t => new t
          })
        }

        function ii(t) {
          return t.ngDebugContext
        }

        function ri(t) {
          return t.ngOriginalError
        }

        function si(t, ...e) {
          t.error(...e)
        }
        class oi {
          constructor() {
            this._console = console
          }
          handleError(t) {
            const e = this._findOriginalError(t),
              n = this._findContext(t),
              i = function (t) {
                return t.ngErrorLogger || si
              }(t);
            i(this._console, "ERROR", t), e && i(this._console, "ORIGINAL ERROR", e), n && i(this._console, "ERROR CONTEXT", n)
          }
          _findContext(t) {
            return t ? ii(t) ? ii(t) : this._findContext(ri(t)) : null
          }
          _findOriginalError(t) {
            let e = ri(t);
            for (; e && ri(e);) e = ri(e);
            return e
          }
        }
        class ai {
          constructor(t) {
            this.changingThisBreaksApplicationSecurity = t
          }
          toString() {
            return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)"
          }
        }

        function li(t) {
          return t instanceof ai ? t.changingThisBreaksApplicationSecurity : t
        }
        let ci = !0,
          ui = !1;

        function hi() {
          return ui = !0, ci
        }
        const di = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
          pi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
          fi = function () {
            var t = {
              NONE: 0,
              HTML: 1,
              STYLE: 2,
              SCRIPT: 3,
              URL: 4,
              RESOURCE_URL: 5
            };
            return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t
          }();

        function mi(t) {
          const e = function () {
            const t = Ge();
            return t && t[12]
          }();
          return e ? e.sanitize(fi.URL, t) || "" : function (t, e) {
            const n = function (t) {
              return t instanceof ai && t.getTypeName() || null
            }(t);
            if (null != n && n !== e) {
              if ("ResourceURL" === n && "URL" === e) return !0;
              throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`)
            }
            return n === e
          }(t, "URL") ? li(t) : (n = Fn(t), (n = String(n)).match(di) || n.match(pi) ? n : (hi() && console.warn(`WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`), "unsafe:" + n));
          var n
        }

        function gi(t, e) {
          t.__ngContext__ = e
        }

        function _i(t) {
          throw new Error(`Multiple components match node with tagname ${t.tagName}`)
        }

        function vi() {
          throw new Error("Cannot mix multi providers and regular providers")
        }

        function yi(t, e, n) {
          let i = t.length;
          for (;;) {
            const r = t.indexOf(e, n);
            if (-1 === r) return r;
            if (0 === r || t.charCodeAt(r - 1) <= 32) {
              const n = e.length;
              if (r + n === i || t.charCodeAt(r + n) <= 32) return r
            }
            n = r + 1
          }
        }

        function bi(t, e, n) {
          let i = 0;
          for (; i < t.length;) {
            let r = t[i++];
            if (n && "class" === r) {
              if (r = t[i], -1 !== yi(r.toLowerCase(), e, 0)) return !0
            } else if (1 === r) {
              for (; i < t.length && "string" == typeof (r = t[i++]);)
                if (r.toLowerCase() === e) return !0;
              return !1
            }
          }
          return !1
        }

        function wi(t, e, n) {
          return e === (0 !== t.type || n ? t.tagName : "ng-template")
        }

        function xi(t, e, n) {
          let i = 4;
          const r = t.attrs || [],
            s = function (t) {
              for (let e = 0; e < t.length; e++)
                if (En(t[e])) return e;
              return t.length
            }(r);
          let o = !1;
          for (let a = 0; a < e.length; a++) {
            const l = e[a];
            if ("number" != typeof l) {
              if (!o)
                if (4 & i) {
                  if (i = 2 | 1 & i, "" !== l && !wi(t, l, n) || "" === l && 1 === e.length) {
                    if (Ci(i)) return !1;
                    o = !0
                  }
                } else {
                  const c = 8 & i ? l : e[++a];
                  if (8 & i && null !== t.attrs) {
                    if (!bi(t.attrs, c, n)) {
                      if (Ci(i)) return !1;
                      o = !0
                    }
                    continue
                  }
                  const u = Si(8 & i ? "class" : l, r, 0 == t.type && "ng-template" !== t.tagName, n);
                  if (-1 === u) {
                    if (Ci(i)) return !1;
                    o = !0;
                    continue
                  }
                  if ("" !== c) {
                    let t;
                    t = u > s ? "" : r[u + 1].toLowerCase();
                    const e = 8 & i ? t : null;
                    if (e && -1 !== yi(e, c, 0) || 2 & i && c !== t) {
                      if (Ci(i)) return !1;
                      o = !0
                    }
                  }
                }
            } else {
              if (!o && !Ci(i) && !Ci(l)) return !1;
              if (o && Ci(l)) continue;
              o = !1, i = l | 1 & i
            }
          }
          return Ci(i) || o
        }

        function Ci(t) {
          return 0 == (1 & t)
        }

        function Si(t, e, n, i) {
          if (null === e) return -1;
          let r = 0;
          if (i || !n) {
            let n = !1;
            for (; r < e.length;) {
              const i = e[r];
              if (i === t) return r;
              if (3 === i || 6 === i) n = !0;
              else {
                if (1 === i || 2 === i) {
                  let t = e[++r];
                  for (;
                    "string" == typeof t;) t = e[++r];
                  continue
                }
                if (4 === i) break;
                if (0 === i) {
                  r += 4;
                  continue
                }
              }
              r += n ? 1 : 2
            }
            return -1
          }
          return function (t, e) {
            let n = t.indexOf(4);
            if (n > -1)
              for (n++; n < t.length;) {
                if (t[n] === e) return n;
                n++
              }
            return -1
          }(e, t)
        }

        function ki(t, e, n = !1) {
          for (let i = 0; i < e.length; i++)
            if (xi(t, e[i], n)) return !0;
          return !1
        }

        function Pi(t, e) {
          return t ? ":not(" + e.trim() + ")" : e
        }

        function Ti(t) {
          let e = t[0],
            n = 1,
            i = 2,
            r = "",
            s = !1;
          for (; n < t.length;) {
            let o = t[n];
            if ("string" == typeof o)
              if (2 & i) {
                const e = t[++n];
                r += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
              } else 8 & i ? r += "." + o : 4 & i && (r += " " + o);
            else "" === r || Ci(o) || (e += Pi(s, r), r = ""), i = o, s = s || !Ci(i);
            n++
          }
          return "" !== r && (e += Pi(s, r)), e
        }
        const Ei = {};

        function Li(t) {
          const e = t[3];
          return ke(e) ? e[3] : e
        }

        function Ai(t) {
          Ii(We(), Ge(), _n() + t, tn())
        }

        function Ii(t, e, n, i) {
          if (!i)
            if (3 == (3 & e[2])) {
              const i = t.preOrderCheckHooks;
              null !== i && wn(e, i, n)
            } else {
              const i = t.preOrderHooks;
              null !== i && xn(e, i, 0, n)
            } vn(n)
        }

        function Oi(t, e) {
          return t << 17 | e << 2
        }

        function Mi(t) {
          return t >> 17 & 32767
        }

        function Ri(t) {
          return 2 | t
        }

        function Ni(t) {
          return (131068 & t) >> 2
        }

        function Fi(t, e) {
          return -131069 & t | e << 2
        }

        function Di(t) {
          return 1 | t
        }

        function ji(t, e) {
          const n = t.contentQueries;
          if (null !== n)
            for (let i = 0; i < n.length; i += 2) {
              const r = n[i],
                s = n[i + 1];
              if (-1 !== s) {
                const n = t.data[s];
                cn(r), n.contentQueries(2, e[s], s)
              }
            }
        }

        function zi(t, e, n) {
          return Oe(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
        }

        function Vi(t, e, n, i, r, s, o, a, l, c) {
          const u = e.blueprint.slice();
          return u[0] = r, u[2] = 140 | i, Ze(u), u[3] = u[15] = t, u[8] = n, u[10] = o || t && t[10], u[11] = a || t && t[11], u[12] = l || t && t[12] || null, u[9] = c || t && t[9] || null, u[6] = s, u[16] = 2 == e.type ? t[16] : u, u
        }

        function Ui(t, e, n, i, r, s) {
          const o = n + 19,
            a = t.data[o] || function (t, e, n, i, r, s) {
              const o = Ye(),
                a = Qe(),
                l = a ? o : o && o.parent,
                c = t.data[n] = Ji(0, l && l !== e ? l : null, i, n, r, s);
              return null === t.firstChild && (t.firstChild = c), o && (!a || null != o.child || null === c.parent && 2 !== o.type ? a || (o.next = c) : o.child = c), c
            }(t, e, o, i, r, s);
          return Je(a, !0), a
        }

        function Hi(t, e, n) {
          hn(e, e[6]);
          try {
            const i = t.viewQuery;
            null !== i && br(1, i, n);
            const r = t.template;
            null !== r && $i(t, e, r, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && ji(t, e), t.staticViewQueries && br(2, t.viewQuery, n);
            const s = t.components;
            null !== s && function (t, e) {
              for (let n = 0; n < e.length; n++) mr(t, e[n])
            }(e, s)
          } finally {
            e[2] &= -5, gn()
          }
        }

        function Bi(t, e, n, i) {
          const r = e[2];
          if (256 == (256 & r)) return;
          hn(e, e[6]);
          const s = tn();
          try {
            Ze(e), $e.lFrame.bindingIndex = t.bindingStartIndex, null !== n && $i(t, e, n, 2, i);
            const o = 3 == (3 & r);
            if (!s)
              if (o) {
                const n = t.preOrderCheckHooks;
                null !== n && wn(e, n, null)
              } else {
                const n = t.preOrderHooks;
                null !== n && xn(e, n, 0, null), Cn(e, 0)
              } if (function (t) {
                let e = t[13];
                for (; null !== e;) {
                  let n;
                  if (ke(e) && (n = e[2]) >> 1 == -1) {
                    for (let t = 9; t < e.length; t++) {
                      const n = e[t],
                        i = n[1];
                      He(n) && Bi(i, n, i.template, n[8])
                    }
                    0 != (1 & n) && pr(e, t[16])
                  }
                  e = e[4]
                }
              }(e), null !== t.contentQueries && ji(t, e), !s)
              if (o) {
                const n = t.contentCheckHooks;
                null !== n && wn(e, n)
              } else {
                const n = t.contentHooks;
                null !== n && xn(e, n, 1), Cn(e, 1)
              }!
            function (t, e) {
              try {
                const n = t.expandoInstructions;
                if (null !== n) {
                  let i = t.expandoStartIndex,
                    r = -1,
                    s = -1;
                  for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    "number" == typeof o ? o <= 0 ? (s = 0 - o, vn(s), i += 9 + n[++t], r = i) : i += o : (null !== o && (an(i, r), o(2, e[r])), r++)
                  }
                }
              } finally {
                vn(-1)
              }
            }(t, e);
            const a = t.components;
            null !== a && function (t, e) {
              for (let n = 0; n < e.length; n++) fr(t, e[n])
            }(e, a);
            const l = t.viewQuery;
            if (null !== l && br(2, l, i), !s)
              if (o) {
                const n = t.viewCheckHooks;
                null !== n && wn(e, n)
              } else {
                const n = t.viewHooks;
                null !== n && xn(e, n, 2), Cn(e, 2)
              }! 0 === t.firstUpdatePass && (t.firstUpdatePass = !1), s || (e[2] &= -73)
          } finally {
            gn()
          }
        }

        function Zi(t, e, n, i) {
          const r = e[10],
            s = !tn(),
            o = Ue(e);
          try {
            s && !o && r.begin && r.begin(), o && Hi(t, e, i), Bi(t, e, n, i)
          } finally {
            s && !o && r.end && r.end()
          }
        }

        function $i(t, e, n, i, r) {
          const s = _n();
          try {
            vn(-1), 2 & i && e.length > 19 && Ii(t, e, 0, tn()), n(i, r)
          } finally {
            vn(s)
          }
        }

        function qi(t, e, n) {
          if (Pe(e)) {
            const i = e.directiveEnd;
            for (let r = e.directiveStart; r < i; r++) {
              const e = t.data[r];
              e.contentQueries && e.contentQueries(1, n[r], r)
            }
          }
        }

        function Gi(t, e, n) {
          qe() && (function (t, e, n, i) {
            const r = n.directiveStart,
              s = n.directiveEnd;
            t.firstCreatePass || Bn(n, e), gi(i, e);
            const o = n.initialInputs;
            for (let a = r; a < s; a++) {
              const i = t.data[a],
                s = Le(i);
              s && cr(e, n, i);
              const l = Qn(e, t, a, n);
              gi(l, e), null !== o && ur(0, a - r, l, i, 0, o), s && (ze(n.index, e)[8] = l)
            }
          }(t, e, n, Fe(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
            const i = n.directiveStart,
              r = n.directiveEnd,
              s = t.expandoInstructions,
              o = t.firstCreatePass,
              a = n.index - 19;
            try {
              vn(a);
              for (let n = i; n < r; n++) {
                const i = t.data[n],
                  r = e[n];
                null !== i.hostBindings || 0 !== i.hostVars || null !== i.hostAttrs ? ir(i, r) : o && s.push(null)
              }
            } finally {
              vn(-1)
            }
          }(t, e, n))
        }

        function Wi(t, e, n = Fe) {
          const i = e.localNames;
          if (null !== i) {
            let r = e.index + 1;
            for (let s = 0; s < i.length; s += 2) {
              const o = i[s + 1],
                a = -1 === o ? n(e, t) : t[o];
              t[r++] = a
            }
          }
        }

        function Ki(t) {
          return t.tView || (t.tView = Yi(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts))
        }

        function Yi(t, e, n, i, r, s, o, a, l, c) {
          const u = 19 + i,
            h = u + r,
            d = function (t, e) {
              const n = [];
              for (let i = 0; i < e; i++) n.push(i < t ? null : Ei);
              return n
            }(u, h);
          return d[1] = {
            type: t,
            id: e,
            blueprint: d,
            template: n,
            queries: null,
            viewQuery: a,
            node: null,
            data: d.slice().fill(null, u),
            bindingStartIndex: u,
            expandoStartIndex: h,
            expandoInstructions: null,
            firstCreatePass: !0,
            firstUpdatePass: !0,
            staticViewQueries: !1,
            staticContentQueries: !1,
            preOrderHooks: null,
            preOrderCheckHooks: null,
            contentHooks: null,
            contentCheckHooks: null,
            viewHooks: null,
            viewCheckHooks: null,
            destroyHooks: null,
            cleanup: null,
            contentQueries: null,
            components: null,
            directiveRegistry: "function" == typeof s ? s() : s,
            pipeRegistry: "function" == typeof o ? o() : o,
            firstChild: null,
            schemas: l,
            consts: c
          }
        }

        function Ji(t, e, n, i, r, s) {
          return {
            type: n,
            index: i,
            injectorIndex: e ? e.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            tagName: r,
            attrs: s,
            mergedAttrs: null,
            localNames: null,
            initialInputs: void 0,
            inputs: null,
            outputs: null,
            tViews: null,
            next: null,
            projectionNext: null,
            child: null,
            parent: e,
            projection: null,
            styles: null,
            residualStyles: void 0,
            classes: null,
            residualClasses: void 0,
            classBindings: 0,
            styleBindings: 0
          }
        }

        function Qi(t, e, n) {
          for (let i in t)
            if (t.hasOwnProperty(i)) {
              const r = t[i];
              (n = null === n ? {} : n).hasOwnProperty(i) ? n[i].push(e, r) : n[i] = [e, r]
            } return n
        }

        function Xi(t, e, n, i, r, s, o, a) {
          const l = Fe(e, n);
          let c, u = e.inputs;
          var h;
          !a && null != u && (c = u[i]) ? (kr(t, n, c, i, r), Te(e) && function (t, e) {
            const n = ze(e, t);
            16 & n[2] || (n[2] |= 64)
          }(n, e.index)) : 3 === e.type && (i = "class" === (h = i) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, r = null != o ? o(r, e.tagName || "", i) : r, Oe(s) ? s.setProperty(l, i, r) : Ln(i) || (l.setProperty ? l.setProperty(i, r) : l[i] = r))
        }

        function tr(t, e, n, i) {
          let r = !1;
          if (qe()) {
            const s = function (t, e, n) {
                const i = t.directiveRegistry;
                let r = null;
                if (i)
                  for (let s = 0; s < i.length; s++) {
                    const o = i[s];
                    ki(n, o.selectors, !1) && (r || (r = []), Gn(Bn(n, e), t, o.type), Le(o) ? (2 & n.flags && _i(n), sr(t, n), r.unshift(o)) : r.push(o))
                  }
                return r
              }(t, e, n),
              o = null === i ? null : {
                "": -1
              };
            if (null !== s) {
              let i = 0;
              r = !0, ar(n, t.data.length, s.length);
              for (let t = 0; t < s.length; t++) {
                const e = s[t];
                e.providersResolver && e.providersResolver(e)
              }
              rr(t, n, s.length);
              let a = !1,
                l = !1;
              for (let r = 0; r < s.length; r++) {
                const c = s[r];
                n.mergedAttrs = An(n.mergedAttrs, c.hostAttrs), lr(t, e, c), or(t.data.length - 1, c, o), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128), !a && (c.onChanges || c.onInit || c.doCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), a = !0), l || !c.onChanges && !c.doCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), l = !0), er(t, c), i += c.hostVars
              }! function (t, e) {
                const n = e.directiveEnd,
                  i = t.data,
                  r = e.attrs,
                  s = [];
                let o = null,
                  a = null;
                for (let l = e.directiveStart; l < n; l++) {
                  const t = i[l],
                    e = t.inputs;
                  s.push(null !== r ? hr(e, r) : null), o = Qi(e, l, o), a = Qi(t.outputs, l, a)
                }
                null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = s, e.inputs = o, e.outputs = a
              }(t, n), nr(t, e, i)
            }
            o && function (t, e, n) {
              if (e) {
                const i = t.localNames = [];
                for (let t = 0; t < e.length; t += 2) {
                  const r = n[e[t + 1]];
                  if (null == r) throw new Error(`Export of name '${e[t+1]}' not found!`);
                  i.push(e[t], r)
                }
              }
            }(n, i, o)
          }
          return n.mergedAttrs = An(n.mergedAttrs, n.attrs), r
        }

        function er(t, e) {
          const n = t.expandoInstructions;
          n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
        }

        function nr(t, e, n) {
          for (let i = 0; i < n; i++) e.push(Ei), t.blueprint.push(Ei), t.data.push(null)
        }

        function ir(t, e) {
          null !== t.hostBindings && t.hostBindings(1, e)
        }

        function rr(t, e, n) {
          const i = 19 - e.index,
            r = t.data.length - (65535 & e.providerIndexes);
          (t.expandoInstructions || (t.expandoInstructions = [])).push(i, r, n)
        }

        function sr(t, e) {
          e.flags |= 2, (t.components || (t.components = [])).push(e.index)
        }

        function or(t, e, n) {
          if (n) {
            if (e.exportAs)
              for (let i = 0; i < e.exportAs.length; i++) n[e.exportAs[i]] = t;
            Le(e) && (n[""] = t)
          }
        }

        function ar(t, e, n) {
          t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
        }

        function lr(t, e, n) {
          t.data.push(n);
          const i = n.factory || (n.factory = xe(n.type)),
            r = new Pn(i, Le(n), null);
          t.blueprint.push(r), e.push(r)
        }

        function cr(t, e, n) {
          const i = Fe(e, t),
            r = Ki(n),
            s = t[10],
            o = gr(t, Vi(t, r, null, n.onPush ? 64 : 16, i, e, s, s.createRenderer(i, n)));
          t[e.index] = o
        }

        function ur(t, e, n, i, r, s) {
          const o = s[e];
          if (null !== o) {
            const t = i.setInput;
            for (let e = 0; e < o.length;) {
              const r = o[e++],
                s = o[e++],
                a = o[e++];
              null !== t ? i.setInput(n, a, r, s) : n[s] = a
            }
          }
        }

        function hr(t, e) {
          let n = null,
            i = 0;
          for (; i < e.length;) {
            const r = e[i];
            if (0 !== r)
              if (5 !== r) {
                if ("number" == typeof r) break;
                t.hasOwnProperty(r) && (null === n && (n = []), n.push(r, t[r], e[i + 1])), i += 2
              } else i += 2;
            else i += 4
          }
          return n
        }

        function dr(t, e, n, i) {
          return new Array(t, !0, -2, e, null, null, i, n, null)
        }

        function pr(t, e) {
          const n = t[5];
          for (let i = 0; i < n.length; i++) {
            const t = n[i],
              r = t[3][3][16];
            if (r !== e && 0 == (16 & r[2])) {
              const e = t[1];
              Bi(e, t, e.template, t[8])
            }
          }
        }

        function fr(t, e) {
          const n = ze(e, t);
          if (He(n) && 80 & n[2]) {
            const t = n[1];
            Bi(t, n, t.template, n[8])
          }
        }

        function mr(t, e) {
          const n = ze(e, t),
            i = n[1];
          ! function (t, e) {
            for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
          }(i, n), Hi(i, n, n[8])
        }

        function gr(t, e) {
          return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
        }

        function _r(t) {
          for (; t;) {
            t[2] |= 64;
            const e = Li(t);
            if (Ae(t) && !e) return t;
            t = e
          }
          return null
        }

        function vr(t, e, n) {
          const i = e[10];
          i.begin && i.begin();
          try {
            Bi(t, e, t.template, n)
          } catch (r) {
            throw Sr(e, r), r
          } finally {
            i.end && i.end()
          }
        }

        function yr(t) {
          ! function (t) {
            for (let e = 0; e < t.components.length; e++) {
              const n = t.components[e],
                i = Ve(n),
                r = i[1];
              Zi(r, i, r.template, n)
            }
          }(t[8])
        }

        function br(t, e, n) {
          cn(0), e(t, n)
        }
        const wr = (() => Promise.resolve(null))();

        function xr(t) {
          return t[7] || (t[7] = [])
        }

        function Cr(t) {
          return t.cleanup || (t.cleanup = [])
        }

        function Sr(t, e) {
          const n = t[9],
            i = n ? n.get(oi, null) : null;
          i && i.handleError(e)
        }

        function kr(t, e, n, i, r) {
          for (let s = 0; s < n.length;) {
            const o = n[s++],
              a = n[s++],
              l = e[o],
              c = t.data[o];
            null !== c.setInput ? c.setInput(l, r, i, a) : l[a] = r
          }
        }

        function Pr(t, e, n) {
          const i = Ne(e, t),
            r = t[11];
          Oe(r) ? r.setValue(i, n) : i.textContent = n
        }

        function Tr(t, e) {
          const n = e[3];
          return -1 === t.index ? ke(n) ? n : null : n
        }

        function Er(t, e) {
          const n = Tr(t, e);
          return n ? zr(e[11], n[7]) : null
        }

        function Lr(t, e, n, i, r) {
          if (null != i) {
            let s, o = !1;
            ke(i) ? s = i : Se(i) && (o = !0, i = i[0]);
            const a = Re(i);
            0 === t && null !== n ? null == r ? Dr(e, n, a) : Fr(e, n, a, r || null) : 1 === t && null !== n ? Fr(e, n, a, r || null) : 2 === t ? function (t, e, n) {
              const i = zr(t, e);
              i && function (t, e, n, i) {
                Oe(t) ? t.removeChild(e, n, i) : e.removeChild(n)
              }(t, i, e, n)
            }(e, a, o) : 3 === t && e.destroyNode(a), null != s && function (t, e, n, i, r) {
              const s = n[7];
              s !== Re(n) && Lr(e, t, i, s, r);
              for (let o = 9; o < n.length; o++) {
                const r = n[o];
                Br(r[1], r, t, e, i, s)
              }
            }(e, t, s, n, r)
          }
        }

        function Ar(t, e, n, i) {
          const r = Er(t.node, e);
          r && Br(t, e, e[11], n ? 1 : 2, r, i)
        }

        function Ir(t, e) {
          const n = t[5],
            i = n.indexOf(e);
          n.splice(i, 1)
        }

        function Or(t, e) {
          if (t.length <= 9) return;
          const n = 9 + e,
            i = t[n];
          if (i) {
            const r = i[17];
            null !== r && r !== t && Ir(r, i), e > 0 && (t[n - 1][4] = i[4]);
            const s = re(t, 9 + e);
            Ar(i[1], i, !1, null);
            const o = s[5];
            null !== o && o.detachView(s[1]), i[3] = null, i[4] = null, i[2] &= -129
          }
          return i
        }

        function Mr(t, e) {
          if (!(256 & e[2])) {
            const n = e[11];
            Oe(n) && n.destroyNode && Br(t, e, n, 3, null, null),
              function (t) {
                let e = t[13];
                if (!e) return Nr(t[1], t);
                for (; e;) {
                  let n = null;
                  if (Se(e)) n = e[13];
                  else {
                    const t = e[9];
                    t && (n = t)
                  }
                  if (!n) {
                    for (; e && !e[4] && e !== t;) Se(e) && Nr(e[1], e), e = Rr(e, t);
                    null === e && (e = t), Se(e) && Nr(e[1], e), n = e && e[4]
                  }
                  e = n
                }
              }(e)
          }
        }

        function Rr(t, e) {
          let n;
          return Se(t) && (n = t[6]) && 2 === n.type ? Tr(n, t) : t[3] === e ? null : t[3]
        }

        function Nr(t, e) {
          if (!(256 & e[2])) {
            e[2] &= -129, e[2] |= 256,
              function (t, e) {
                let n;
                if (null != t && null != (n = t.destroyHooks))
                  for (let i = 0; i < n.length; i += 2) {
                    const t = e[n[i]];
                    t instanceof Pn || n[i + 1].call(t)
                  }
              }(t, e),
              function (t, e) {
                const n = t.cleanup;
                if (null !== n) {
                  const t = e[7];
                  for (let i = 0; i < n.length - 1; i += 2)
                    if ("string" == typeof n[i]) {
                      const r = n[i + 1],
                        s = "function" == typeof r ? r(e) : Re(e[r]),
                        o = t[n[i + 2]],
                        a = n[i + 3];
                      "boolean" == typeof a ? s.removeEventListener(n[i], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), i += 2
                    } else n[i].call(t[n[i + 1]]);
                  e[7] = null
                }
              }(t, e);
            const n = e[6];
            n && 3 === n.type && Oe(e[11]) && e[11].destroy();
            const i = e[17];
            if (null !== i && ke(e[3])) {
              i !== e[3] && Ir(i, e);
              const n = e[5];
              null !== n && n.detachView(t)
            }
          }
        }

        function Fr(t, e, n, i) {
          Oe(t) ? t.insertBefore(e, n, i) : e.insertBefore(n, i, !0)
        }

        function Dr(t, e, n) {
          Oe(t) ? t.appendChild(e, n) : e.appendChild(n)
        }

        function jr(t, e, n, i) {
          null !== i ? Fr(t, e, n, i) : Dr(t, e, n)
        }

        function zr(t, e) {
          return Oe(t) ? t.parentNode(e) : e.parentNode
        }

        function Vr(t, e, n, i) {
          const r = function (t, e, n) {
            let i = e.parent;
            for (; null != i && (4 === i.type || 5 === i.type);) i = (e = i).parent;
            if (null == i) {
              const t = n[6];
              return 2 === t.type ? Er(t, n) : n[0]
            }
            if (e && 5 === e.type && 4 & e.flags) return Fe(e, n).parentNode;
            if (2 & i.flags) {
              const e = t.data,
                n = e[e[i.index].directiveStart].encapsulation;
              if (n !== ce.ShadowDom && n !== ce.Native) return null
            }
            return Fe(i, n)
          }(t, i, e);
          if (null != r) {
            const t = e[11],
              s = function (t, e) {
                if (2 === t.type) {
                  const n = Tr(t, e);
                  return null === n ? null : Ur(n.indexOf(e, 9) - 9, n)
                }
                return 4 === t.type || 5 === t.type ? Fe(t, e) : null
              }(i.parent || e[6], e);
            if (Array.isArray(n))
              for (let e = 0; e < n.length; e++) jr(t, r, n[e], s);
            else jr(t, r, n, s)
          }
        }

        function Ur(t, e) {
          const n = 9 + t + 1;
          if (n < e.length) {
            const t = e[n],
              i = t[1].firstChild;
            if (null !== i) return function t(e, n) {
              if (null !== n) {
                const i = n.type;
                if (3 === i) return Fe(n, e);
                if (0 === i) return Ur(-1, e[n.index]);
                if (4 === i || 5 === i) {
                  const i = n.child;
                  if (null !== i) return t(e, i); {
                    const t = e[n.index];
                    return ke(t) ? Ur(-1, t) : Re(t)
                  }
                } {
                  const i = e[16],
                    r = i[6],
                    s = Li(i),
                    o = r.projection[n.projection];
                  return null != o ? t(s, o) : t(e, n.next)
                }
              }
              return null
            }(t, i)
          }
          return e[7]
        }

        function Hr(t, e, n, i, r, s, o) {
          for (; null != n;) {
            const a = i[n.index],
              l = n.type;
            o && 0 === e && (a && gi(Re(a), i), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (Hr(t, e, n.child, i, r, s, !1), Lr(e, t, r, a, s)) : 1 === l ? Zr(t, e, i, n, r, s) : Lr(e, t, r, a, s)), n = o ? n.projectionNext : n.next
          }
        }

        function Br(t, e, n, i, r, s) {
          Hr(n, i, t.node.child, e, r, s, !1)
        }

        function Zr(t, e, n, i, r, s) {
          const o = n[16],
            a = o[6].projection[i.projection];
          if (Array.isArray(a))
            for (let l = 0; l < a.length; l++) Lr(e, t, r, a[l], s);
          else Hr(t, e, a, o[3], r, s, !0)
        }

        function $r(t, e, n) {
          Oe(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
        }

        function qr(t, e, n) {
          Oe(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
        }
        class Gr {
          constructor(t, e) {
            this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
          }
          get rootNodes() {
            const t = this._lView;
            return null == t[0] ? function t(e, n, i, r, s = !1) {
              for (; null !== i;) {
                const o = n[i.index];
                if (null !== o && r.push(Re(o)), ke(o))
                  for (let e = 9; e < o.length; e++) {
                    const n = o[e],
                      i = n[1].firstChild;
                    null !== i && t(n[1], n, i, r)
                  }
                const a = i.type;
                if (4 === a || 5 === a) t(e, n, i.child, r);
                else if (1 === a) {
                  const e = n[16],
                    s = e[6],
                    o = Li(e);
                  let a = s.projection[i.projection];
                  null !== a && null !== o && t(o[1], o, a, r, !0)
                }
                i = s ? i.projectionNext : i.next
              }
              return r
            }(t[1], t, t[6].child, []) : []
          }
          get context() {
            return this._lView[8]
          }
          get destroyed() {
            return 256 == (256 & this._lView[2])
          }
          destroy() {
            if (this._appRef) this._appRef.detachView(this);
            else if (this._viewContainerRef) {
              const t = this._viewContainerRef.indexOf(this);
              t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
            }
            Mr(this._lView[1], this._lView)
          }
          onDestroy(t) {
            var e, n, i;
            e = this._lView[1], i = t, xr(n = this._lView).push(i), e.firstCreatePass && Cr(e).push(n[7].length - 1, null)
          }
          markForCheck() {
            _r(this._cdRefInjectingView || this._lView)
          }
          detach() {
            this._lView[2] &= -129
          }
          reattach() {
            this._lView[2] |= 128
          }
          detectChanges() {
            vr(this._lView[1], this._lView, this.context)
          }
          checkNoChanges() {
            ! function (t, e, n) {
              en(!0);
              try {
                vr(t, e, n)
              } finally {
                en(!1)
              }
            }(this._lView[1], this._lView, this.context)
          }
          attachToViewContainerRef(t) {
            if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
            this._viewContainerRef = t
          }
          detachFromAppRef() {
            var t;
            this._appRef = null, Br(this._lView[1], t = this._lView, t[11], 2, null, null)
          }
          attachToAppRef(t) {
            if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
            this._appRef = t
          }
        }
        class Wr extends Gr {
          constructor(t) {
            super(t), this._view = t
          }
          detectChanges() {
            yr(this._view)
          }
          checkNoChanges() {
            ! function (t) {
              en(!0);
              try {
                yr(t)
              } finally {
                en(!1)
              }
            }(this._view)
          }
          get context() {
            return null
          }
        }
        let Kr, Yr, Jr;

        function Qr(t, e, n) {
          return Kr || (Kr = class extends t {}), new Kr(Fe(e, n))
        }

        function Xr(t, e, n, i) {
          return Yr || (Yr = class extends t {
            constructor(t, e, n) {
              super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n
            }
            createEmbeddedView(t) {
              const e = this._declarationTContainer.tViews,
                n = Vi(this._declarationView, e, t, 16, null, e.node);
              n[17] = this._declarationView[this._declarationTContainer.index];
              const i = this._declarationView[5];
              null !== i && (n[5] = i.createEmbeddedView(e)), Hi(e, n, t);
              const r = new Gr(n);
              return r._tViewNode = n[6], r
            }
          }), 0 === n.type ? new Yr(i, n, Qr(e, n, i)) : null
        }

        function ts(t, e, n, i) {
          let r;
          Jr || (Jr = class extends t {
            constructor(t, e, n) {
              super(), this._lContainer = t, this._hostTNode = e, this._hostView = n
            }
            get element() {
              return Qr(e, this._hostTNode, this._hostView)
            }
            get injector() {
              return new ei(this._hostTNode, this._hostView)
            }
            get parentInjector() {
              const t = qn(this._hostTNode, this._hostView),
                e = Nn(t, this._hostView),
                n = function (t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent;
                    return e
                  }
                  let i = Rn(t),
                    r = e,
                    s = e[6];
                  for (; i > 1;) r = r[15], s = r[6], i--;
                  return s
                }(t, this._hostView, this._hostTNode);
              return On(t) && null != n ? new ei(n, e) : new ei(null, this._hostView)
            }
            clear() {
              for (; this.length > 0;) this.remove(this.length - 1)
            }
            get(t) {
              return null !== this._lContainer[8] && this._lContainer[8][t] || null
            }
            get length() {
              return this._lContainer.length - 9
            }
            createEmbeddedView(t, e, n) {
              const i = t.createEmbeddedView(e || {});
              return this.insert(i, n), i
            }
            createComponent(t, e, n, i, r) {
              const s = n || this.parentInjector;
              if (!r && null == t.ngModule && s) {
                const t = s.get(te, null);
                t && (r = t)
              }
              const o = t.create(s, i, void 0, r);
              return this.insert(o.hostView, e), o
            }
            insert(t, e) {
              const n = t._lView,
                i = n[1];
              if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
              if (this.allocateContainerIfNeeded(), ke(n[3])) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    i = new Jr(e, e[6], e[3]);
                  i.detach(i.indexOf(t))
                }
              }
              const r = this._adjustIndex(e);
              return function (t, e, n, i) {
                const r = 9 + i,
                  s = n.length;
                i > 0 && (n[r - 1][4] = e), i < s - 9 ? (e[4] = n[r], ie(n, 9 + i, e)) : (n.push(e), e[4] = null), e[3] = n;
                const o = e[17];
                null !== o && n !== o && function (t, e) {
                  const n = t[5],
                    i = e[3][3][16];
                  16 != (16 & i[2]) && e[16] !== i && (t[2] |= 1), null === n ? t[5] = [e] : n.push(e)
                }(o, e);
                const a = e[5];
                null !== a && a.insertView(t), e[2] |= 128
              }(i, n, this._lContainer, r), Ar(i, n, !0, Ur(r, this._lContainer)), t.attachToViewContainerRef(this), ie(this._lContainer[8], r, t), t
            }
            move(t, e) {
              if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
              return this.insert(t, e)
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1);
              (function (t, e) {
                const n = Or(t, e);
                n && Mr(n[1], n)
              })(this._lContainer, e), re(this._lContainer[8], e)
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Or(this._lContainer, e);
              return n && null != re(this._lContainer[8], e) ? new Gr(n) : null
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = [])
            }
          });
          const s = i[n.index];
          if (ke(s)) r = s,
            function (t, e) {
              t[2] = -2
            }(r);
          else {
            let t;
            if (4 === n.type) t = Re(s);
            else if (t = i[11].createComment(""), Ae(i)) {
              const e = i[11],
                r = Fe(n, i);
              Fr(e, zr(e, r), t, function (t, e) {
                return Oe(t) ? t.nextSibling(e) : e.nextSibling
              }(e, r))
            } else Vr(i[1], i, t, n);
            i[n.index] = r = dr(s, i, t, n), gr(i, r)
          }
          return new Jr(r, n, i)
        }
        let es = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => ns(), t
        })();
        const ns = function (t = !1) {
            return function (t, e, n) {
              if (!n && Te(t)) {
                const n = ze(t.index, e);
                return new Gr(n, n)
              }
              return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new Gr(e[16], e) : null
            }(Ye(), Ge(), t)
          },
          is = new Vt("Set Injector scope."),
          rs = {},
          ss = {},
          os = [];
        let as = void 0;

        function ls() {
          return void 0 === as && (as = new Xt), as
        }

        function cs(t, e = null, n = null, i) {
          return new us(t, n, e || ls(), i)
        }
        class us {
          constructor(t, e, n, i = null) {
            this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
            const r = [];
            e && ne(e, n => this.processProvider(n, t, e)), ne([t], t => this.processInjectorType(t, [], r)), this.records.set(Ut, ps(void 0, this));
            const s = this.records.get(is);
            this.scope = null != s ? s.value : null, this.source = i || ("object" == typeof t ? null : xt(t))
          }
          get destroyed() {
            return this._destroyed
          }
          destroy() {
            this.assertNotDestroyed(), this._destroyed = !0;
            try {
              this.onDestroy.forEach(t => t.ngOnDestroy())
            } finally {
              this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
            }
          }
          get(t, e = Ht, n = ct.Default) {
            this.assertNotDestroyed();
            const i = Gt(this);
            try {
              if (!(n & ct.SkipSelf)) {
                let e = this.records.get(t);
                if (void 0 === e) {
                  const n = ("function" == typeof (r = t) || "object" == typeof r && r instanceof Vt) && ft(t);
                  e = n && this.injectableDefInScope(n) ? ps(hs(t), rs) : null, this.records.set(t, e)
                }
                if (null != e) return this.hydrate(t, e)
              }
              return (n & ct.Self ? ls() : this.parent).get(t, e = n & ct.Optional && e === Ht ? null : e)
            } catch (s) {
              if ("NullInjectorError" === s.name) {
                if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(xt(t)), i) throw s;
                return function (t, e, n, i) {
                  const r = t.ngTempTokenPath;
                  throw e.__source && r.unshift(e.__source), t.message = function (t, e, n, i = null) {
                    t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                    let r = xt(e);
                    if (Array.isArray(e)) r = e.map(xt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let i = e[n];
                          t.push(n + ":" + ("string" == typeof i ? JSON.stringify(i) : xt(i)))
                        } r = `{${t.join(", ")}}`
                    }
                    return `${n}${i?"("+i+")":""}[${r}]: ${t.replace(Bt,"\n  ")}`
                  }("\n" + t.message, r, n, i), t.ngTokenPath = r, t.ngTempTokenPath = null, t
                }(s, t, "R3InjectorError", this.source)
              }
              throw s
            } finally {
              Gt(i)
            }
            var r
          }
          _resolveInjectorDefTypes() {
            this.injectorDefTypes.forEach(t => this.get(t))
          }
          toString() {
            const t = [];
            return this.records.forEach((e, n) => t.push(xt(n))), `R3Injector[${t.join(", ")}]`
          }
          assertNotDestroyed() {
            if (this._destroyed) throw new Error("Injector has already been destroyed.")
          }
          processInjectorType(t, e, n) {
            if (!(t = Pt(t))) return !1;
            let i = gt(t);
            const r = null == i && t.ngModule || void 0,
              s = void 0 === r ? t : r,
              o = -1 !== n.indexOf(s);
            if (void 0 !== r && (i = gt(r)), null == i) return !1;
            if (null != i.imports && !o) {
              let t;
              n.push(s);
              try {
                ne(i.imports, i => {
                  this.processInjectorType(i, e, n) && (void 0 === t && (t = []), t.push(i))
                })
              } finally {}
              if (void 0 !== t)
                for (let e = 0; e < t.length; e++) {
                  const {
                    ngModule: n,
                    providers: i
                  } = t[e];
                  ne(i, t => this.processProvider(t, n, i || os))
                }
            }
            this.injectorDefTypes.add(s), this.records.set(s, ps(i.factory, rs));
            const a = i.providers;
            if (null != a && !o) {
              const e = t;
              ne(a, t => this.processProvider(t, e, a))
            }
            return void 0 !== r && void 0 !== t.providers
          }
          processProvider(t, e, n) {
            let i = ms(t = Pt(t)) ? t : Pt(t && t.provide);
            const r = function (t, e, n) {
              return fs(t) ? ps(void 0, t.useValue) : ps(ds(t, e, n), rs)
            }(t, e, n);
            if (ms(t) || !0 !== t.multi) {
              const t = this.records.get(i);
              t && void 0 !== t.multi && vi()
            } else {
              let e = this.records.get(i);
              e ? void 0 === e.multi && vi() : (e = ps(void 0, rs, !0), e.factory = () => Qt(e.multi), this.records.set(i, e)), i = t, e.multi.push(t)
            }
            this.records.set(i, r)
          }
          hydrate(t, e) {
            var n;
            return e.value === ss ? function (t) {
              throw new Error(`Cannot instantiate cyclic dependency! ${t}`)
            }(xt(t)) : e.value === rs && (e.value = ss, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
          }
          injectableDefInScope(t) {
            return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
          }
        }

        function hs(t) {
          const e = ft(t),
            n = null !== e ? e.factory : xe(t);
          if (null !== n) return n;
          const i = gt(t);
          if (null !== i) return i.factory;
          if (t instanceof Vt) throw new Error(`Token ${xt(t)} is missing a \u0275prov definition.`);
          if (t instanceof Function) return function (t) {
            const e = t.length;
            if (e > 0) {
              const n = function (t, e) {
                const n = [];
                for (let i = 0; i < t; i++) n.push("?");
                return n
              }(e);
              throw new Error(`Can't resolve all parameters for ${xt(t)}: (${n.join(", ")}).`)
            }
            const n = function (t) {
              const e = t && (t[_t] || t[bt] || t[yt] && t[yt]());
              if (e) {
                const n = function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1]
                }(t);
                return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in v10. Please add @Injectable() to the "${n}" class.`), e
              }
              return null
            }(t);
            return null !== n ? () => n.factory(t) : () => new t
          }(t);
          throw new Error("unreachable")
        }

        function ds(t, e, n) {
          let i = void 0;
          if (ms(t)) {
            const e = Pt(t);
            return xe(e) || hs(e)
          }
          if (fs(t)) i = () => Pt(t.useValue);
          else if ((r = t) && r.useFactory) i = () => t.useFactory(...Qt(t.deps || []));
          else if (function (t) {
              return !(!t || !t.useExisting)
            }(t)) i = () => Yt(Pt(t.useExisting));
          else {
            const r = Pt(t && (t.useClass || t.provide));
            if (r || function (t, e, n) {
                let i = "";
                throw t && e && (i = ` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${xt(t)}'` + i)
              }(e, n, t), ! function (t) {
                return !!t.deps
              }(t)) return xe(r) || hs(r);
            i = () => new r(...Qt(t.deps))
          }
          var r;
          return i
        }

        function ps(t, e, n = !1) {
          return {
            factory: t,
            value: e,
            multi: n ? [] : void 0
          }
        }

        function fs(t) {
          return null !== t && "object" == typeof t && Zt in t
        }

        function ms(t) {
          return "function" == typeof t
        }
        const gs = function (t, e, n) {
          return function (t, e = null, n = null, i) {
            const r = cs(t, e, n, i);
            return r._resolveInjectorDefTypes(), r
          }({
            name: n
          }, e, t, n)
        };
        let _s = (() => {
          class t {
            static create(t, e) {
              return Array.isArray(t) ? gs(t, e, "") : gs(t.providers, t.parent, t.name || "")
            }
          }
          return t.THROW_IF_NOT_FOUND = Ht, t.NULL = new Xt, t.\u0275prov = dt({
            token: t,
            providedIn: "any",
            factory: () => Yt(Ut)
          }), t.__NG_ELEMENT_ID__ = -1, t
        })();
        const vs = new Vt("AnalyzeForEntryComponents");
        let ys = new Map;
        const bs = new Set;

        function ws(t) {
          return "string" == typeof t ? t : t.text()
        }

        function xs(t, e) {
          let n = t.styles,
            i = t.classes,
            r = 0;
          for (let s = 0; s < e.length; s++) {
            const t = e[s];
            "number" == typeof t ? r = t : 1 == r ? i = Ct(i, t) : 2 == r && (n = Ct(n, t + ": " + e[++s] + ";"))
          }
          null !== n && (t.styles = n), null !== i && (t.classes = i)
        }
        let Cs = null;

        function Ss() {
          if (!Cs) {
            const t = Ot.Symbol;
            if (t && t.iterator) Cs = t.iterator;
            else {
              const t = Object.getOwnPropertyNames(Map.prototype);
              for (let e = 0; e < t.length; ++e) {
                const n = t[e];
                "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Cs = n)
              }
            }
          }
          return Cs
        }

        function ks(t, e) {
          return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
        }
        class Ps {
          constructor(t) {
            this.wrapped = t
          }
          static wrap(t) {
            return new Ps(t)
          }
          static unwrap(t) {
            return Ps.isWrapped(t) ? t.wrapped : t
          }
          static isWrapped(t) {
            return t instanceof Ps
          }
        }

        function Ts(t) {
          return !!Es(t) && (Array.isArray(t) || !(t instanceof Map) && Ss() in t)
        }

        function Es(t) {
          return null !== t && ("function" == typeof t || "object" == typeof t)
        }

        function Ls(t, e, n) {
          return t[e] = n
        }

        function As(t, e, n) {
          return !Object.is(t[e], n) && (t[e] = n, !0)
        }

        function Is(t, e, n, i) {
          const r = As(t, e, n);
          return As(t, e + 1, i) || r
        }

        function Os(t, e, n, i) {
          const r = Ge();
          return As(r, sn(), e) && (We(), function (t, e, n, i, r, s) {
            const o = Fe(t, e),
              a = e[11];
            if (null == i) Oe(a) ? a.removeAttribute(o, n, s) : o.removeAttribute(n);
            else {
              const e = null == r ? Fn(i) : r(i, t.tagName || "", n);
              Oe(a) ? a.setAttribute(o, n, e, s) : s ? o.setAttributeNS(s, n, e) : o.setAttribute(n, e)
            }
          }(yn(), r, t, e, n, i)), Os
        }

        function Ms(t, e, n, i) {
          return As(t, sn(), n) ? e + Fn(n) + i : Ei
        }

        function Rs(t, e, n, i, r, s, o, a) {
          const l = Ge(),
            c = We(),
            u = t + 19,
            h = c.firstCreatePass ? function (t, e, n, i, r, s, o, a, l) {
              const c = e.consts,
                u = Ui(e, n[6], t, 0, o || null, Be(c, a));
              tr(e, n, u, Be(c, l)), bn(e, u);
              const h = u.tViews = Yi(2, -1, i, r, s, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c),
                d = Ji(0, null, 2, -1, null, null);
              return d.injectorIndex = u.injectorIndex, h.node = d, null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u
            }(t, c, l, e, n, i, r, s, o) : c.data[u];
          Je(h, !1);
          const d = l[11].createComment("");
          Vr(c, l, d, h), gi(d, l), gr(l, l[u] = dr(d, l, d, h)), Ee(h) && Gi(c, l, h), null != o && Wi(l, h, a)
        }

        function Ns(t) {
          return je($e.lFrame.contextLView, t)
        }

        function Fs(t, e = ct.Default) {
          const n = Ge();
          return null == n ? Yt(t, e) : Wn(Ye(), n, Pt(t), e)
        }

        function Ds(t) {
          return function (t, e) {
            if ("class" === e) return t.classes;
            if ("style" === e) return t.styles;
            const n = t.attrs;
            if (n) {
              const t = n.length;
              let i = 0;
              for (; i < t;) {
                const r = n[i];
                if (En(r)) break;
                if (0 === r) i += 2;
                else if ("number" == typeof r)
                  for (i++; i < t && "string" == typeof n[i];) i++;
                else {
                  if (r === e) return n[i + 1];
                  i += 2
                }
              }
            }
            return null
          }(Ye(), t)
        }

        function js() {
          throw new Error("invalid")
        }

        function zs(t, e, n) {
          const i = Ge();
          return As(i, sn(), e) && Xi(We(), yn(), i, t, e, i[11], n, !1), zs
        }

        function Vs(t, e, n, i, r) {
          const s = r ? "class" : "style";
          kr(t, n, e.inputs[s], s, i)
        }

        function Us(t, e, n, i) {
          const r = Ge(),
            s = We(),
            o = 19 + t,
            a = r[11],
            l = r[o] = zi(e, a, $e.lFrame.currentNamespace),
            c = s.firstCreatePass ? function (t, e, n, i, r, s, o) {
              const a = e.consts,
                l = Be(a, s),
                c = Ui(e, n[6], t, 3, r, l);
              return tr(e, n, c, Be(a, o)), null !== c.mergedAttrs && xs(c, c.mergedAttrs), null !== e.queries && e.queries.elementStart(e, c), c
            }(t, s, r, 0, e, n, i) : s.data[o];
          Je(c, !0);
          const u = c.mergedAttrs;
          null !== u && Tn(a, l, u);
          const h = c.classes;
          null !== h && qr(a, l, h);
          const d = c.styles;
          null !== d && $r(a, l, d), Vr(s, r, l, c), 0 === $e.lFrame.elementDepthCount && gi(l, r), $e.lFrame.elementDepthCount++, Ee(c) && (Gi(s, r, c), qi(s, c, r)), null !== i && Wi(r, c)
        }

        function Hs() {
          let t = Ye();
          Qe() ? Xe() : (t = t.parent, Je(t, !1));
          const e = t;
          $e.lFrame.elementDepthCount--;
          const n = We();
          n.firstCreatePass && (bn(n, t), Pe(t) && n.queries.elementEnd(t)), null !== e.classes && function (t) {
            return 0 != (16 & t.flags)
          }(e) && Vs(n, e, Ge(), e.classes, !0), null !== e.styles && function (t) {
            return 0 != (32 & t.flags)
          }(e) && Vs(n, e, Ge(), e.styles, !1)
        }

        function Bs(t, e, n, i) {
          Us(t, e, n, i), Hs()
        }

        function Zs() {
          return Ge()
        }

        function $s(t) {
          return !!t && "function" == typeof t.then
        }

        function qs(t) {
          return !!t && "function" == typeof t.subscribe
        }

        function Gs(t, e, n = !1, i) {
          const r = Ge(),
            s = We(),
            o = Ye();
          return function (t, e, n, i, r, s, o = !1, a) {
            const l = Ee(i),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = xr(e);
            let h = !0;
            if (3 === i.type) {
              const d = Fe(i, e),
                p = a ? a(d) : ue,
                f = p.target || d,
                m = u.length,
                g = a ? t => a(Re(t[i.index])).target : i.index;
              if (Oe(n)) {
                let o = null;
                if (!a && l && (o = function (t, e, n, i) {
                    const r = t.cleanup;
                    if (null != r)
                      for (let s = 0; s < r.length - 1; s += 2) {
                        const t = r[s];
                        if (t === n && r[s + 1] === i) {
                          const t = e[7],
                            n = r[s + 2];
                          return t.length > n ? t[n] : null
                        }
                        "string" == typeof t && (s += 2)
                      }
                    return null
                  }(t, e, r, i.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = s, o.__ngLastListenerFn__ = s, h = !1;
                else {
                  s = Ks(i, e, s, !1);
                  const t = n.listen(p.name || f, r, s);
                  u.push(s, t), c && c.push(r, g, m, m + 1)
                }
              } else s = Ks(i, e, s, !0), f.addEventListener(r, s, o), u.push(s), c && c.push(r, g, m, o)
            }
            const d = i.outputs;
            let p;
            if (h && null !== d && (p = d[r])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(s),
                    o = u.length;
                  u.push(s, t), c && c.push(r, i.index, o, -(o + 1))
                }
            }
          }(s, r, r[11], o, t, e, n, i), Gs
        }

        function Ws(t, e, n) {
          try {
            return !1 !== e(n)
          } catch (i) {
            return Sr(t, i), !1
          }
        }

        function Ks(t, e, n, i) {
          return function r(s) {
            if (s === Function) return n;
            const o = 2 & t.flags ? ze(t.index, e) : e;
            0 == (32 & e[2]) && _r(o);
            let a = Ws(e, n, s),
              l = r.__ngNextListenerFn__;
            for (; l;) a = Ws(e, l, s) && a, l = l.__ngNextListenerFn__;
            return i && !1 === a && (s.preventDefault(), s.returnValue = !1), a
          }
        }

        function Ys(t = 1) {
          return function (t) {
            return ($e.lFrame.contextLView = function (t, e) {
              for (; t > 0;) e = e[15], t--;
              return e
            }(t, $e.lFrame.contextLView))[8]
          }(t)
        }

        function Js(t, e, n, i, r) {
          const s = Ge(),
            o = Ms(s, e, n, i);
          return o !== Ei && Xi(We(), yn(), s, t, o, s[11], r, !1), Js
        }
        const Qs = [];

        function Xs(t, e, n, i, r) {
          const s = t[n + 1],
            o = null === e;
          let a = i ? Mi(s) : Ni(s),
            l = !1;
          for (; 0 !== a && (!1 === l || o);) {
            const n = t[a + 1];
            to(t[a], e) && (l = !0, t[a + 1] = i ? Di(n) : Ri(n)), a = i ? Mi(n) : Ni(n)
          }
          l && (t[n + 1] = i ? Ri(s) : Di(s))
        }

        function to(t, e) {
          return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && ae(t, e) >= 0
        }

        function eo(t, e) {
          return function (t, e, n, i) {
            const r = Ge(),
              s = We(),
              o = on(2);
            if (s.firstUpdatePass && function (t, e, n, i) {
                const r = t.data;
                if (null === r[n + 1]) {
                  const i = r[_n() + 19],
                    s = function (t, e) {
                      return e >= t.expandoStartIndex
                    }(t, n);
                  (function (t, e) {
                    return 0 != (16 & t.flags)
                  })(i) && null === e && !s && (e = !1), e = function (t, e, n, i) {
                      const r = function (t) {
                        const e = $e.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e]
                      }(t);
                      let s = e.residualClasses;
                      if (null === r) 0 === e.classBindings && (n = io(n = no(null, t, e, n, !0), e.attrs, !0), s = null);
                      else {
                        const i = e.directiveStylingLast;
                        if (-1 === i || t[i] !== r)
                          if (n = no(r, t, e, n, !0), null === s) {
                            let n = function (t, e, n) {
                              const i = e.classBindings;
                              if (0 !== Ni(i)) return t[Mi(i)]
                            }(t, e);
                            void 0 !== n && Array.isArray(n) && (n = no(null, t, e, n[1], !0), n = io(n, e.attrs, !0), function (t, e, n, i) {
                              t[Mi(e.classBindings)] = i
                            }(t, e, 0, n))
                          } else s = function (t, e, n) {
                            let i = void 0;
                            const r = e.directiveEnd;
                            for (let s = 1 + e.directiveStylingLast; s < r; s++) i = io(i, t[s].hostAttrs, !0);
                            return io(i, e.attrs, !0)
                          }(t, e)
                      }
                      return void 0 !== s && (e.residualClasses = s), n
                    }(r, i, e),
                    function (t, e, n, i, r, s) {
                      let o = e.classBindings,
                        a = Mi(o),
                        l = Ni(o);
                      t[i] = n;
                      let c, u = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        c = t[1], (null === c || ae(t, c) > 0) && (u = !0)
                      } else c = n;
                      if (r)
                        if (0 !== l) {
                          const e = Mi(t[a + 1]);
                          t[i + 1] = Oi(e, a), 0 !== e && (t[e + 1] = Fi(t[e + 1], i)), t[a + 1] = 131071 & t[a + 1] | i << 17
                        } else t[i + 1] = Oi(a, 0), 0 !== a && (t[a + 1] = Fi(t[a + 1], i)), a = i;
                      else t[i + 1] = Oi(l, 0), 0 === a ? a = i : t[l + 1] = Fi(t[l + 1], i), l = i;
                      u && (t[i + 1] = Ri(t[i + 1])), Xs(t, c, i, !0), Xs(t, c, i, !1),
                        function (t, e, n, i, r) {
                          const s = t.residualClasses;
                          null != s && "string" == typeof e && ae(s, e) >= 0 && (n[i + 1] = Di(n[i + 1]))
                        }(e, c, t, i), o = Oi(a, l), e.classBindings = o
                    }(r, i, e, n, s)
                }
              }(s, t, o), e !== Ei && As(r, o, e)) {
              let i;
              null == n && (i = function () {
                  const t = $e.lFrame;
                  return null === t ? null : t.currentSanitizer
                }()) && (n = i),
                function (t, e, n, i, r, s, o, a) {
                  if (3 !== e.type) return;
                  const l = t.data,
                    c = l[a + 1];
                  so(1 == (1 & c) ? ro(l, e, n, r, Ni(c), !0) : void 0) || (so(s) || function (t) {
                    return 2 == (2 & t)
                  }(c) && (s = ro(l, null, n, r, a, !0)), function (t, e, n, i, r) {
                    const s = Oe(t);
                    r ? s ? t.addClass(n, i) : n.classList.add(i) : s ? t.removeClass(n, i) : n.classList.remove(i)
                  }(i, 0, Ne(_n(), n), r, s))
                }(s, s.data[_n() + 19], r, r[11], t, r[o + 1] = function (t, e) {
                  return null == t || ("function" == typeof e ? t = e(t) : "string" == typeof e ? t += e : "object" == typeof t && (t = xt(li(t)))), t
                }(e, n), 0, o)
            }
          }(t, e, null), eo
        }

        function no(t, e, n, i, r) {
          let s = null;
          const o = n.directiveEnd;
          let a = n.directiveStylingLast;
          for (-1 === a ? a = n.directiveStart : a++; a < o && (s = e[a], i = io(i, s.hostAttrs, r), s !== t);) a++;
          return null !== t && (n.directiveStylingLast = a), i
        }

        function io(t, e, n) {
          const i = n ? 1 : 2;
          let r = -1;
          if (null !== e)
            for (let s = 0; s < e.length; s++) {
              const o = e[s];
              "number" == typeof o ? r = o : r === i && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), se(t, o, !!n || e[++s]))
            }
          return void 0 === t ? null : t
        }

        function ro(t, e, n, i, r, s) {
          const o = null === e;
          let a = void 0;
          for (; r > 0;) {
            const e = t[r],
              s = Array.isArray(e),
              l = s ? e[1] : e,
              c = null === l;
            let u = n[r + 1];
            u === Ei && (u = c ? Qs : void 0);
            let h = c ? oe(u, i) : l === i ? u : void 0;
            if (s && !so(h) && (h = oe(e, i)), so(h) && (a = h, o)) return a;
            const d = t[r + 1];
            r = o ? Mi(d) : Ni(d)
          }
          if (null !== e) {
            let t = s ? e.residualClasses : e.residualStyles;
            null != t && (a = oe(t, i))
          }
          return a
        }

        function so(t) {
          return void 0 !== t
        }

        function oo(t, e = "") {
          const n = Ge(),
            i = We(),
            r = t + 19,
            s = i.firstCreatePass ? Ui(i, n[6], t, 3, null, null) : i.data[r],
            o = n[r] = function (t, e) {
              return Oe(e) ? e.createText(t) : e.createTextNode(t)
            }(e, n[11]);
          Vr(i, n, o, s), Je(s, !1)
        }

        function ao(t) {
          return lo("", t, ""), ao
        }

        function lo(t, e, n) {
          const i = Ge(),
            r = Ms(i, t, e, n);
          return r !== Ei && Pr(i, _n(), r), lo
        }

        function co(t, e, n, i, r) {
          const s = Ge(),
            o = function (t, e, n, i, r, s) {
              const o = Is(t, rn(), n, r);
              return on(2), o ? e + Fn(n) + i + Fn(r) + s : Ei
            }(s, t, e, n, i, r);
          return o !== Ei && Pr(s, _n(), o), co
        }

        function uo(t, e, n) {
          const i = Ge();
          return As(i, sn(), e) && Xi(We(), yn(), i, t, e, i[11], n, !0), uo
        }

        function ho(t, e) {
          const n = Ve(t)[1],
            i = n.data.length - 1;
          bn(n, {
            directiveStart: i,
            directiveEnd: i + 1
          })
        }

        function po(t) {
          let e = Object.getPrototypeOf(t.type.prototype).constructor,
            n = !0;
          const i = [t];
          for (; e;) {
            let r = void 0;
            if (Le(t)) r = e.\u0275cmp || e.\u0275dir;
            else {
              if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
              r = e.\u0275dir
            }
            if (r) {
              if (n) {
                i.push(r);
                const e = t;
                e.inputs = fo(t.inputs), e.declaredInputs = fo(t.declaredInputs), e.outputs = fo(t.outputs);
                const n = r.hostBindings;
                n && _o(t, n);
                const s = r.viewQuery,
                  o = r.contentQueries;
                if (s && mo(t, s), o && go(t, o), ht(t.inputs, r.inputs), ht(t.declaredInputs, r.declaredInputs), ht(t.outputs, r.outputs), Le(r) && r.data.animation) {
                  const e = t.data;
                  e.animation = (e.animation || []).concat(r.data.animation)
                }
                e.afterContentChecked = e.afterContentChecked || r.afterContentChecked, e.afterContentInit = t.afterContentInit || r.afterContentInit, e.afterViewChecked = t.afterViewChecked || r.afterViewChecked, e.afterViewInit = t.afterViewInit || r.afterViewInit, e.doCheck = t.doCheck || r.doCheck, e.onDestroy = t.onDestroy || r.onDestroy, e.onInit = t.onInit || r.onInit
              }
              const e = r.features;
              if (e)
                for (let i = 0; i < e.length; i++) {
                  const r = e[i];
                  r && r.ngInherit && r(t), r === po && (n = !1)
                }
            }
            e = Object.getPrototypeOf(e)
          }! function (t) {
            let e = 0,
              n = null;
            for (let i = t.length - 1; i >= 0; i--) {
              const r = t[i];
              r.hostVars = e += r.hostVars, r.hostAttrs = An(r.hostAttrs, n = An(n, r.hostAttrs))
            }
          }(i)
        }

        function fo(t) {
          return t === ue ? {} : t === he ? [] : t
        }

        function mo(t, e) {
          const n = t.viewQuery;
          t.viewQuery = n ? (t, i) => {
            e(t, i), n(t, i)
          } : e
        }

        function go(t, e) {
          const n = t.contentQueries;
          t.contentQueries = n ? (t, i, r) => {
            e(t, i, r), n(t, i, r)
          } : e
        }

        function _o(t, e) {
          const n = t.hostBindings;
          t.hostBindings = n ? (t, i) => {
            e(t, i), n(t, i)
          } : e
        }
        class vo {
          constructor(t, e, n) {
            this.previousValue = t, this.currentValue = e, this.firstChange = n
          }
          isFirstChange() {
            return this.firstChange
          }
        }

        function yo(t) {
          t.type.prototype.ngOnChanges && (t.setInput = bo, t.onChanges = function () {
            const t = wo(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === ue) t.previous = e;
              else
                for (let t in e) n[t] = e[t];
              t.current = null, this.ngOnChanges(e)
            }
          })
        }

        function bo(t, e, n, i) {
          const r = wo(t) || function (t, e) {
              return t.__ngSimpleChanges__ = e
            }(t, {
              previous: ue,
              current: null
            }),
            s = r.current || (r.current = {}),
            o = r.previous,
            a = this.declaredInputs[n],
            l = o[a];
          s[a] = new vo(l && l.currentValue, e, o === ue), t[i] = e
        }

        function wo(t) {
          return t.__ngSimpleChanges__ || null
        }

        function xo(t, e, n, i, r) {
          if (t = Pt(t), Array.isArray(t))
            for (let s = 0; s < t.length; s++) xo(t[s], e, n, i, r);
          else {
            const s = We(),
              o = Ge();
            let a = ms(t) ? t : Pt(t.provide),
              l = ds(t);
            const c = Ye(),
              u = 65535 & c.providerIndexes,
              h = c.directiveStart,
              d = c.providerIndexes >> 16;
            if (ms(t) || !t.multi) {
              const i = new Pn(l, r, Fs),
                p = ko(a, e, r ? u : u + d, h); - 1 === p ? (Gn(Bn(c, o), s, a), Co(s, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), n.push(i), o.push(i)) : (n[p] = i, o[p] = i)
            } else {
              const p = ko(a, e, u + d, h),
                f = ko(a, e, u, u + d),
                m = p >= 0 && n[p],
                g = f >= 0 && n[f];
              if (r && !g || !r && !m) {
                Gn(Bn(c, o), s, a);
                const u = function (t, e, n, i, r) {
                  const s = new Pn(t, n, Fs);
                  return s.multi = [], s.index = e, s.componentProviders = 0, So(s, r, i && !n), s
                }(r ? To : Po, n.length, r, i, l);
                !r && g && (n[f].providerFactory = u), Co(s, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), n.push(u), o.push(u)
              } else Co(s, t, p > -1 ? p : f), So(n[r ? f : p], l, !r && i);
              !r && i && g && n[f].componentProviders++
            }
          }
        }

        function Co(t, e, n) {
          if (ms(e) || e.useClass) {
            const i = (e.useClass || e).prototype.ngOnDestroy;
            i && (t.destroyHooks || (t.destroyHooks = [])).push(n, i)
          }
        }

        function So(t, e, n) {
          t.multi.push(e), n && t.componentProviders++
        }

        function ko(t, e, n, i) {
          for (let r = n; r < i; r++)
            if (e[r] === t) return r;
          return -1
        }

        function Po(t, e, n, i) {
          return Eo(this.multi, [])
        }

        function To(t, e, n, i) {
          const r = this.multi;
          let s;
          if (this.providerFactory) {
            const t = this.providerFactory.componentProviders,
              e = Qn(n, n[1], this.providerFactory.index, i);
            s = e.slice(0, t), Eo(r, s);
            for (let n = t; n < e.length; n++) s.push(e[n])
          } else s = [], Eo(r, s);
          return s
        }

        function Eo(t, e) {
          for (let n = 0; n < t.length; n++) e.push((0, t[n])());
          return e
        }

        function Lo(t, e = []) {
          return n => {
            n.providersResolver = (n, i) => function (t, e, n) {
              const i = We();
              if (i.firstCreatePass) {
                const r = Le(t);
                xo(n, i.data, i.blueprint, r, !0), xo(e, i.data, i.blueprint, r, !1)
              }
            }(n, i ? i(t) : t, e)
          }
        }
        yo.ngInherit = !0;
        class Ao {}
        class Io {
          resolveComponentFactory(t) {
            throw function (t) {
              const e = Error(`No component factory found for ${xt(t)}. Did you add it to @NgModule.entryComponents?`);
              return e.ngComponent = t, e
            }(t)
          }
        }
        let Oo = (() => {
            class t {}
            return t.NULL = new Io, t
          })(),
          Mo = (() => {
            class t {
              constructor(t) {
                this.nativeElement = t
              }
            }
            return t.__NG_ELEMENT_ID__ = () => Ro(t), t
          })();
        const Ro = function (t) {
          return Qr(t, Ye(), Ge())
        };
        class No {}
        const Fo = function () {
          var t = {
            Important: 1,
            DashCase: 2
          };
          return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t
        }();
        let Do = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => jo(), t
        })();
        const jo = function () {
          const t = Ge(),
            e = ze(Ye().index, t);
          return function (t) {
            const e = t[11];
            if (Oe(e)) return e;
            throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
          }(Se(e) ? e : t)
        };
        let zo = (() => {
          class t {}
          return t.\u0275prov = dt({
            token: t,
            providedIn: "root",
            factory: () => null
          }), t
        })();
        class Vo {
          constructor(t) {
            this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
          }
        }
        const Uo = new Vo("9.1.0");
        class Ho {
          constructor() {}
          supports(t) {
            return Ts(t)
          }
          create(t) {
            return new Zo(t)
          }
        }
        const Bo = (t, e) => e;
        class Zo {
          constructor(t) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Bo
          }
          forEachItem(t) {
            let e;
            for (e = this._itHead; null !== e; e = e._next) t(e)
          }
          forEachOperation(t) {
            let e = this._itHead,
              n = this._removalsHead,
              i = 0,
              r = null;
            for (; e || n;) {
              const s = !n || e && e.currentIndex < Wo(n, i, r) ? e : n,
                o = Wo(s, i, r),
                a = s.currentIndex;
              if (s === n) i--, n = n._nextRemoved;
              else if (e = e._next, null == s.previousIndex) i++;
              else {
                r || (r = []);
                const t = o - i,
                  e = a - i;
                if (t != e) {
                  for (let n = 0; n < t; n++) {
                    const i = n < r.length ? r[n] : r[n] = 0,
                      s = i + n;
                    e <= s && s < t && (r[n] = i + 1)
                  }
                  r[s.previousIndex] = e - t
                }
              }
              o !== a && t(s, o, a)
            }
          }
          forEachPreviousItem(t) {
            let e;
            for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
          }
          forEachAddedItem(t) {
            let e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }
          forEachMovedItem(t) {
            let e;
            for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
          }
          forEachRemovedItem(t) {
            let e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }
          forEachIdentityChange(t) {
            let e;
            for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
          }
          diff(t) {
            if (null == t && (t = []), !Ts(t)) throw new Error(`Error trying to diff '${xt(t)}'. Only arrays and iterables are allowed`);
            return this.check(t) ? this : null
          }
          onDestroy() {}
          check(t) {
            this._reset();
            let e, n, i, r = this._itHead,
              s = !1;
            if (Array.isArray(t)) {
              this.length = t.length;
              for (let e = 0; e < this.length; e++) n = t[e], i = this._trackByFn(e, n), null !== r && ks(r.trackById, i) ? (s && (r = this._verifyReinsertion(r, n, i, e)), ks(r.item, n) || this._addIdentityChange(r, n)) : (r = this._mismatch(r, n, i, e), s = !0), r = r._next
            } else e = 0,
              function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Ss()]();
                  let i;
                  for (; !(i = n.next()).done;) e(i.value)
                }
              }(t, t => {
                i = this._trackByFn(e, t), null !== r && ks(r.trackById, i) ? (s && (r = this._verifyReinsertion(r, t, i, e)), ks(r.item, t) || this._addIdentityChange(r, t)) : (r = this._mismatch(r, t, i, e), s = !0), r = r._next, e++
              }), this.length = e;
            return this._truncate(r), this.collection = t, this.isDirty
          }
          get isDirty() {
            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
          }
          _reset() {
            if (this.isDirty) {
              let t, e;
              for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
              for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
              this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
            }
          }
          _mismatch(t, e, n, i) {
            let r;
            return null === t ? r = this._itTail : (r = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, i)) ? (ks(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, r, i)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (ks(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, r, i)) : t = this._addAfter(new $o(e, n), r, i), t
          }
          _verifyReinsertion(t, e, n, i) {
            let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
            return null !== r ? t = this._reinsertAfter(r, t._prev, i) : t.currentIndex != i && (t.currentIndex = i, this._addToMoves(t, i)), t
          }
          _truncate(t) {
            for (; null !== t;) {
              const e = t._next;
              this._addToRemovals(this._unlink(t)), t = e
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
          }
          _reinsertAfter(t, e, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
            const i = t._prevRemoved,
              r = t._nextRemoved;
            return null === i ? this._removalsHead = r : i._nextRemoved = r, null === r ? this._removalsTail = i : r._prevRemoved = i, this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _moveAfter(t, e, n) {
            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _addAfter(t, e, n) {
            return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
          }
          _insertAfter(t, e, n) {
            const i = null === e ? this._itHead : e._next;
            return t._next = i, t._prev = e, null === i ? this._itTail = t : i._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Go), this._linkedRecords.put(t), t.currentIndex = n, t
          }
          _remove(t) {
            return this._addToRemovals(this._unlink(t))
          }
          _unlink(t) {
            null !== this._linkedRecords && this._linkedRecords.remove(t);
            const e = t._prev,
              n = t._next;
            return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
          }
          _addToMoves(t, e) {
            return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
          }
          _addToRemovals(t) {
            return null === this._unlinkedRecords && (this._unlinkedRecords = new Go), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
          }
          _addIdentityChange(t, e) {
            return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
          }
        }
        class $o {
          constructor(t, e) {
            this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
          }
        }
        class qo {
          constructor() {
            this._head = null, this._tail = null
          }
          add(t) {
            null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
          }
          get(t, e) {
            let n;
            for (n = this._head; null !== n; n = n._nextDup)
              if ((null === e || e <= n.currentIndex) && ks(n.trackById, t)) return n;
            return null
          }
          remove(t) {
            const e = t._prevDup,
              n = t._nextDup;
            return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
          }
        }
        class Go {
          constructor() {
            this.map = new Map
          }
          put(t) {
            const e = t.trackById;
            let n = this.map.get(e);
            n || (n = new qo, this.map.set(e, n)), n.add(t)
          }
          get(t, e) {
            const n = this.map.get(t);
            return n ? n.get(t, e) : null
          }
          remove(t) {
            const e = t.trackById;
            return this.map.get(e).remove(t) && this.map.delete(e), t
          }
          get isEmpty() {
            return 0 === this.map.size
          }
          clear() {
            this.map.clear()
          }
        }

        function Wo(t, e, n) {
          const i = t.previousIndex;
          if (null === i) return i;
          let r = 0;
          return n && i < n.length && (r = n[i]), i + e + r
        }
        class Ko {
          constructor() {}
          supports(t) {
            return t instanceof Map || Es(t)
          }
          create() {
            return new Yo
          }
        }
        class Yo {
          constructor() {
            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
          }
          get isDirty() {
            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
          }
          forEachItem(t) {
            let e;
            for (e = this._mapHead; null !== e; e = e._next) t(e)
          }
          forEachPreviousItem(t) {
            let e;
            for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
          }
          forEachChangedItem(t) {
            let e;
            for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
          }
          forEachAddedItem(t) {
            let e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }
          forEachRemovedItem(t) {
            let e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }
          diff(t) {
            if (t) {
              if (!(t instanceof Map || Es(t))) throw new Error(`Error trying to diff '${xt(t)}'. Only maps and objects are allowed`)
            } else t = new Map;
            return this.check(t) ? this : null
          }
          onDestroy() {}
          check(t) {
            this._reset();
            let e = this._mapHead;
            if (this._appendAfter = null, this._forEach(t, (t, n) => {
                if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next;
                else {
                  const i = this._getOrCreateRecordForKey(n, t);
                  e = this._insertBeforeOrAppend(e, i)
                }
              }), e) {
              e._prev && (e._prev._next = null), this._removalsHead = e;
              for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
          }
          _insertBeforeOrAppend(t, e) {
            if (t) {
              const n = t._prev;
              return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
            }
            return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
          }
          _getOrCreateRecordForKey(t, e) {
            if (this._records.has(t)) {
              const n = this._records.get(t);
              this._maybeAddToChanges(n, e);
              const i = n._prev,
                r = n._next;
              return i && (i._next = r), r && (r._prev = i), n._next = null, n._prev = null, n
            }
            const n = new Jo(t);
            return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n
          }
          _reset() {
            if (this.isDirty) {
              let t;
              for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
              for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
              this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
            }
          }
          _maybeAddToChanges(t, e) {
            ks(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
          }
          _addToAdditions(t) {
            null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
          }
          _addToChanges(t) {
            null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
          }
          _forEach(t, e) {
            t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n))
          }
        }
        class Jo {
          constructor(t) {
            this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
          }
        }
        let Qo = (() => {
            class t {
              constructor(t) {
                this.factories = t
              }
              static create(e, n) {
                if (null != n) {
                  const t = n.factories.slice();
                  e = e.concat(t)
                }
                return new t(e)
              }
              static extend(e) {
                return {
                  provide: t,
                  useFactory: n => {
                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                    return t.create(e, n)
                  },
                  deps: [
                    [t, new lt, new ot]
                  ]
                }
              }
              find(t) {
                const e = this.factories.find(e => e.supports(t));
                if (null != e) return e;
                throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);
                var n
              }
            }
            return t.\u0275prov = dt({
              token: t,
              providedIn: "root",
              factory: () => new t([new Ho])
            }), t
          })(),
          Xo = (() => {
            class t {
              constructor(t) {
                this.factories = t
              }
              static create(e, n) {
                if (n) {
                  const t = n.factories.slice();
                  e = e.concat(t)
                }
                return new t(e)
              }
              static extend(e) {
                return {
                  provide: t,
                  useFactory: n => {
                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                    return t.create(e, n)
                  },
                  deps: [
                    [t, new lt, new ot]
                  ]
                }
              }
              find(t) {
                const e = this.factories.find(e => e.supports(t));
                if (e) return e;
                throw new Error(`Cannot find a differ supporting object '${t}'`)
              }
            }
            return t.\u0275prov = dt({
              token: t,
              providedIn: "root",
              factory: () => new t([new Ko])
            }), t
          })();
        const ta = [new Ko],
          ea = new Qo([new Ho]),
          na = new Xo(ta);
        let ia = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => ra(t, Mo), t
        })();
        const ra = function (t, e) {
          return Xr(t, e, Ye(), Ge())
        };
        let sa = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => oa(t, Mo), t
        })();
        const oa = function (t, e) {
            return ts(t, e, Ye(), Ge())
          },
          aa = {};
        class la extends Oo {
          constructor(t) {
            super(), this.ngModule = t
          }
          resolveComponentFactory(t) {
            const e = we(t);
            return new ha(e, this.ngModule)
          }
        }

        function ca(t) {
          const e = [];
          for (let n in t) t.hasOwnProperty(n) && e.push({
            propName: t[n],
            templateName: n
          });
          return e
        }
        const ua = new Vt("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: () => jn
        });
        class ha extends Ao {
          constructor(t, e) {
            super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(Ti).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
          }
          get inputs() {
            return ca(this.componentDef.inputs)
          }
          get outputs() {
            return ca(this.componentDef.outputs)
          }
          create(t, e, n, i) {
            const r = (i = i || this.ngModule) ? function (t, e) {
                return {
                  get: (n, i, r) => {
                    const s = t.get(n, aa, r);
                    return s !== aa || i === aa ? s : e.get(n, i, r)
                  }
                }
              }(t, i.injector) : t,
              s = r.get(No, Me),
              o = r.get(zo, null),
              a = s.createRenderer(null, this.componentDef),
              l = this.componentDef.selectors[0][0] || "div",
              c = n ? function (t, e, n) {
                if (Oe(t)) return t.selectRootElement(e, n === ce.ShadowDom);
                let i = "string" == typeof e ? t.querySelector(e) : e;
                return i.textContent = "", i
              }(a, n, this.componentDef.encapsulation) : zi(l, s.createRenderer(null, this.componentDef), function (t) {
                const e = t.toLowerCase();
                return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
              }(l)),
              u = this.componentDef.onPush ? 576 : 528,
              h = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
              d = {
                components: [],
                scheduler: jn,
                clean: wr,
                playerHandler: null,
                flags: 0
              },
              p = Yi(0, -1, null, 1, 0, null, null, null, null, null),
              f = Vi(null, p, d, u, null, null, s, a, o, r);
            let m, g;
            hn(f, null);
            try {
              const t = function (t, e, n, i, r, s) {
                const o = n[1];
                n[19] = t;
                const a = Ui(o, null, 0, 3, null, null),
                  l = a.mergedAttrs = e.hostAttrs;
                null !== l && (xs(a, l), null !== t && (Tn(r, t, l), null !== a.classes && qr(r, t, a.classes), null !== a.styles && $r(r, t, a.styles)));
                const c = i.createRenderer(t, e),
                  u = Vi(n, Ki(e), null, e.onPush ? 64 : 16, n[19], a, i, c, void 0);
                return o.firstCreatePass && (Gn(Bn(a, n), o, e.type), sr(o, a), ar(a, n.length, 1)), gr(n, u), n[19] = u
              }(c, this.componentDef, f, s, a);
              if (c)
                if (n) Tn(a, c, ["ng-version", Uo.full]);
                else {
                  const {
                    attrs: t,
                    classes: e
                  } = function (t) {
                    const e = [],
                      n = [];
                    let i = 1,
                      r = 2;
                    for (; i < t.length;) {
                      let s = t[i];
                      if ("string" == typeof s) 2 === r ? "" !== s && e.push(s, t[++i]) : 8 === r && n.push(s);
                      else {
                        if (!Ci(r)) break;
                        r = s
                      }
                      i++
                    }
                    return {
                      attrs: e,
                      classes: n
                    }
                  }(this.componentDef.selectors[0]);
                  t && Tn(a, c, t), e && e.length > 0 && qr(a, c, e.join(" "))
                } g = De(f[1], 0), e && (g.projection = e.map(t => Array.from(t))), m = function (t, e, n, i, r) {
                const s = n[1],
                  o = function (t, e, n) {
                    const i = Ye();
                    t.firstCreatePass && (n.providersResolver && n.providersResolver(n), rr(t, i, 1), lr(t, e, n));
                    const r = Qn(e, t, e.length - 1, i);
                    gi(r, e);
                    const s = Fe(i, e);
                    return s && gi(s, e), r
                  }(s, n, e);
                i.components.push(o), t[8] = o, r && r.forEach(t => t(o, e)), e.contentQueries && e.contentQueries(1, o, n.length - 1);
                const a = Ye();
                if (s.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                  vn(a.index - 19);
                  const t = n[1];
                  er(t, e), nr(t, n, e.hostVars), ir(e, o)
                }
                return o
              }(t, this.componentDef, f, d, [ho]), Hi(p, f, null)
            } finally {
              gn()
            }
            const _ = new da(this.componentType, m, Qr(Mo, g, f), f, g);
            return n && !h || (_.hostView._tViewNode.child = g), _
          }
        }
        class da extends class {} {
          constructor(t, e, n, i, r) {
            super(), this.location = n, this._rootLView = i, this._tNode = r, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new Wr(i), this.hostView._tViewNode = function (t, e, n, i) {
              let r = t.node;
              return null == r && (t.node = r = Ji(0, null, 2, -1, null, null)), i[6] = r
            }(i[1], 0, 0, i), this.componentType = t
          }
          get injector() {
            return new ei(this._tNode, this._rootLView)
          }
          destroy() {
            this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
          }
          onDestroy(t) {
            this.destroyCbs && this.destroyCbs.push(t)
          }
        }
        const pa = void 0;
        var fa = ["en", [
            ["a", "p"],
            ["AM", "PM"], pa
          ],
          [
            ["AM", "PM"], pa, pa
          ],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
          ], pa, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          ], pa, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
          ], 0, [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", pa, "{1} 'at' {0}", pa],
          [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
          function (t) {
            let e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
          }
        ];
        let ma = {};

        function ga(t) {
          const e = function (t) {
            return t.toLowerCase().replace(/_/g, "-")
          }(t);
          let n = _a(e);
          if (n) return n;
          const i = e.split("-")[0];
          if (n = _a(i), n) return n;
          if ("en" === i) return fa;
          throw new Error(`Missing locale data for the locale "${t}".`)
        }

        function _a(t) {
          return t in ma || (ma[t] = Ot.ng && Ot.ng.common && Ot.ng.common.locales && Ot.ng.common.locales[t]), ma[t]
        }
        const va = function () {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencyCode: 15,
            CurrencySymbol: 16,
            CurrencyName: 17,
            Currencies: 18,
            Directionality: 19,
            PluralCase: 20,
            ExtraData: 21
          };
          return t[t.LocaleId] = "LocaleId", t[t.DayPeriodsFormat] = "DayPeriodsFormat", t[t.DayPeriodsStandalone] = "DayPeriodsStandalone", t[t.DaysFormat] = "DaysFormat", t[t.DaysStandalone] = "DaysStandalone", t[t.MonthsFormat] = "MonthsFormat", t[t.MonthsStandalone] = "MonthsStandalone", t[t.Eras] = "Eras", t[t.FirstDayOfWeek] = "FirstDayOfWeek", t[t.WeekendRange] = "WeekendRange", t[t.DateFormat] = "DateFormat", t[t.TimeFormat] = "TimeFormat", t[t.DateTimeFormat] = "DateTimeFormat", t[t.NumberSymbols] = "NumberSymbols", t[t.NumberFormats] = "NumberFormats", t[t.CurrencyCode] = "CurrencyCode", t[t.CurrencySymbol] = "CurrencySymbol", t[t.CurrencyName] = "CurrencyName", t[t.Currencies] = "Currencies", t[t.Directionality] = "Directionality", t[t.PluralCase] = "PluralCase", t[t.ExtraData] = "ExtraData", t
        }();
        let ya = "en-US";

        function ba(t) {
          var e, n;
          n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, i) {
            throw new Error(`ASSERTION ERROR: ${t}` + ` [Expected=> null != ${e} <=Actual]`)
          }(n, e), "string" == typeof t && (ya = t.toLowerCase().replace(/_/g, "-"))
        }
        const wa = new Map;
        class xa extends te {
          constructor(t, e) {
            super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new la(this);
            const n = Ce(t),
              i = t[Dt] || null;
            i && ba(i), this._bootstrapComponents = zn(n.bootstrap), this._r3Injector = cs(t, e, [{
              provide: te,
              useValue: this
            }, {
              provide: Oo,
              useValue: this.componentFactoryResolver
            }], xt(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
          }
          get(t, e = _s.THROW_IF_NOT_FOUND, n = ct.Default) {
            return t === _s || t === te || t === Ut ? this : this._r3Injector.get(t, e, n)
          }
          destroy() {
            const t = this._r3Injector;
            !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
          }
          onDestroy(t) {
            this.destroyCbs.push(t)
          }
        }
        class Ca extends ee {
          constructor(t) {
            super(), this.moduleType = t, null !== Ce(t) && function t(e) {
              if (null !== e.\u0275mod.id) {
                const t = e.\u0275mod.id;
                (function (t, e, n) {
                  if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${xt(e)} vs ${xt(e.name)}`)
                })(t, wa.get(t), e), wa.set(t, e)
              }
              let n = e.\u0275mod.imports;
              n instanceof Function && (n = n()), n && n.forEach(e => t(e))
            }(t)
          }
          create(t) {
            return new xa(this.moduleType, t)
          }
        }

        function Sa(t, e, n) {
          const i = nn() + t,
            r = Ge();
          return r[i] === Ei ? Ls(r, i, n ? e.call(n) : e()) : function (t, e) {
            return t[e]
          }(r, i)
        }

        function ka(t, e, n, i) {
          return Ta(Ge(), nn(), t, e, n, i)
        }

        function Pa(t, e) {
          const n = t[e];
          return n === Ei ? void 0 : n
        }

        function Ta(t, e, n, i, r, s) {
          const o = e + n;
          return As(t, o, r) ? Ls(t, o + 1, s ? i.call(s, r) : i(r)) : Pa(t, o + 1)
        }

        function Ea(t, e, n, i, r, s, o) {
          const a = e + n;
          return Is(t, a, r, s) ? Ls(t, a + 2, o ? i.call(o, r, s) : i(r, s)) : Pa(t, a + 2)
        }

        function La(t, e) {
          const n = We();
          let i;
          const r = t + 19;
          n.firstCreatePass ? (i = function (t, e) {
            if (e)
              for (let n = e.length - 1; n >= 0; n--) {
                const i = e[n];
                if (t === i.name) return i
              }
            throw new Error(`The pipe '${t}' could not be found!`)
          }(e, n.pipeRegistry), n.data[r] = i, i.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(r, i.onDestroy)) : i = n.data[r];
          const s = i.factory || (i.factory = xe(i.type)),
            o = Wt(Fs),
            a = s();
          return Wt(o),
            function (t, e, n, i) {
              const r = n + 19;
              r >= t.data.length && (t.data[r] = null, t.blueprint[r] = null), e[r] = i
            }(n, Ge(), t, a), a
        }

        function Aa(t, e, n) {
          const i = Ge(),
            r = je(i, t);
          return Ma(i, Oa(i, t) ? Ta(i, nn(), e, r.transform, n, r) : r.transform(n))
        }

        function Ia(t, e, n, i) {
          const r = Ge(),
            s = je(r, t);
          return Ma(r, Oa(r, t) ? Ea(r, nn(), e, s.transform, n, i, s) : s.transform(n, i))
        }

        function Oa(t, e) {
          return t[1].data[e + 19].pure
        }

        function Ma(t, e) {
          return Ps.isWrapped(e) && (e = Ps.unwrap(e), t[rn()] = Ei), e
        }
        class Ra extends k {
          constructor(t = !1) {
            super(), this.__isAsync = t
          }
          emit(t) {
            super.next(t)
          }
          subscribe(t, e, n) {
            let i, r = t => null,
              s = () => null;
            t && "object" == typeof t ? (i = this.__isAsync ? e => {
              setTimeout(() => t.next(e))
            } : e => {
              t.next(e)
            }, t.error && (r = this.__isAsync ? e => {
              setTimeout(() => t.error(e))
            } : e => {
              t.error(e)
            }), t.complete && (s = this.__isAsync ? () => {
              setTimeout(() => t.complete())
            } : () => {
              t.complete()
            })) : (i = this.__isAsync ? e => {
              setTimeout(() => t(e))
            } : e => {
              t(e)
            }, e && (r = this.__isAsync ? t => {
              setTimeout(() => e(t))
            } : t => {
              e(t)
            }), n && (s = this.__isAsync ? () => {
              setTimeout(() => n())
            } : () => {
              n()
            }));
            const o = super.subscribe(i, r, s);
            return t instanceof h && t.add(o), o
          }
        }

        function Na() {
          return this._results[Ss()]()
        }
        class Fa {
          constructor() {
            this.dirty = !0, this._results = [], this.changes = new Ra, this.length = 0;
            const t = Ss(),
              e = Fa.prototype;
            e[t] || (e[t] = Na)
          }
          map(t) {
            return this._results.map(t)
          }
          filter(t) {
            return this._results.filter(t)
          }
          find(t) {
            return this._results.find(t)
          }
          reduce(t, e) {
            return this._results.reduce(t, e)
          }
          forEach(t) {
            this._results.forEach(t)
          }
          some(t) {
            return this._results.some(t)
          }
          toArray() {
            return this._results.slice()
          }
          toString() {
            return this._results.toString()
          }
          reset(t) {
            this._results = function t(e, n) {
              void 0 === n && (n = e);
              for (let i = 0; i < e.length; i++) {
                let r = e[i];
                Array.isArray(r) ? (n === e && (n = e.slice(0, i)), t(r, n)) : n !== e && n.push(r)
              }
              return n
            }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
          }
          notifyOnChanges() {
            this.changes.emit(this)
          }
          setDirty() {
            this.dirty = !0
          }
          destroy() {
            this.changes.complete(), this.changes.unsubscribe()
          }
        }
        class Da {
          constructor(t) {
            this.queryList = t, this.matches = null
          }
          clone() {
            return new Da(this.queryList)
          }
          setDirty() {
            this.queryList.setDirty()
          }
        }
        class ja {
          constructor(t = []) {
            this.queries = t
          }
          createEmbeddedView(t) {
            const e = t.queries;
            if (null !== e) {
              const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
                i = [];
              for (let t = 0; t < n; t++) {
                const n = e.getByIndex(t);
                i.push(this.queries[n.indexInDeclarationView].clone())
              }
              return new ja(i)
            }
            return null
          }
          insertView(t) {
            this.dirtyQueriesWithMatches(t)
          }
          detachView(t) {
            this.dirtyQueriesWithMatches(t)
          }
          dirtyQueriesWithMatches(t) {
            for (let e = 0; e < this.queries.length; e++) null !== Wa(t, e).matches && this.queries[e].setDirty()
          }
        }
        class za {
          constructor(t, e, n, i = null) {
            this.predicate = t, this.descendants = e, this.isStatic = n, this.read = i
          }
        }
        class Va {
          constructor(t = []) {
            this.queries = t
          }
          elementStart(t, e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
          }
          elementEnd(t) {
            for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
          }
          embeddedTView(t) {
            let e = null;
            for (let n = 0; n < this.length; n++) {
              const i = null !== e ? e.length : 0,
                r = this.getByIndex(n).embeddedTView(t, i);
              r && (r.indexInDeclarationView = n, null !== e ? e.push(r) : e = [r])
            }
            return null !== e ? new Va(e) : null
          }
          template(t, e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
          }
          getByIndex(t) {
            return this.queries[t]
          }
          get length() {
            return this.queries.length
          }
          track(t) {
            this.queries.push(t)
          }
        }
        class Ua {
          constructor(t, e = -1) {
            this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
          }
          elementStart(t, e) {
            this.isApplyingToNode(e) && this.matchTNode(t, e)
          }
          elementEnd(t) {
            this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
          }
          template(t, e) {
            this.elementStart(t, e)
          }
          embeddedTView(t, e) {
            return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new Ua(this.metadata)) : null
          }
          isApplyingToNode(t) {
            if (this._appliesToNextNode && !1 === this.metadata.descendants) {
              const e = this._declarationNodeIndex;
              let n = t.parent;
              for (; null !== n && 4 === n.type && n.index !== e;) n = n.parent;
              return e === (null !== n ? n.index : -1)
            }
            return this._appliesToNextNode
          }
          matchTNode(t, e) {
            if (Array.isArray(this.metadata.predicate)) {
              const n = this.metadata.predicate;
              for (let i = 0; i < n.length; i++) this.matchTNodeWithReadOption(t, e, Ha(e, n[i]))
            } else {
              const n = this.metadata.predicate;
              n === ia ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, Jn(e, t, n, !1, !1))
            }
          }
          matchTNodeWithReadOption(t, e, n) {
            if (null !== n) {
              const i = this.metadata.read;
              if (null !== i)
                if (i === Mo || i === sa || i === ia && 0 === e.type) this.addMatch(e.index, -2);
                else {
                  const n = Jn(e, t, i, !1, !1);
                  null !== n && this.addMatch(e.index, n)
                }
              else this.addMatch(e.index, n)
            }
          }
          addMatch(t, e) {
            null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
          }
        }

        function Ha(t, e) {
          const n = t.localNames;
          if (null !== n)
            for (let i = 0; i < n.length; i += 2)
              if (n[i] === e) return n[i + 1];
          return null
        }

        function Ba(t, e, n, i) {
          return -1 === n ? function (t, e) {
            return 3 === t.type || 4 === t.type ? Qr(Mo, t, e) : 0 === t.type ? Xr(ia, Mo, t, e) : null
          }(e, t) : -2 === n ? function (t, e, n) {
            return n === Mo ? Qr(Mo, e, t) : n === ia ? Xr(ia, Mo, e, t) : n === sa ? ts(sa, Mo, e, t) : void 0
          }(t, e, i) : Qn(t, t[1], n, e)
        }

        function Za(t, e, n, i) {
          const r = e[5].queries[i];
          if (null === r.matches) {
            const i = t.data,
              s = n.matches,
              o = [];
            for (let t = 0; t < s.length; t += 2) {
              const r = s[t];
              o.push(r < 0 ? null : Ba(e, i[r], s[t + 1], n.metadata.read))
            }
            r.matches = o
          }
          return r.matches
        }

        function $a(t) {
          const e = Ge(),
            n = We(),
            i = ln();
          cn(i + 1);
          const r = Wa(n, i);
          if (t.dirty && Ue(e) === r.metadata.isStatic) {
            if (null === r.matches) t.reset([]);
            else {
              const s = r.crossesNgTemplate ? function t(e, n, i, r) {
                const s = e.queries.getByIndex(i),
                  o = s.matches;
                if (null !== o) {
                  const a = Za(e, n, s, i);
                  for (let e = 0; e < o.length; e += 2) {
                    const i = o[e];
                    if (i > 0) r.push(a[e / 2]);
                    else {
                      const s = o[e + 1],
                        a = n[-i];
                      for (let e = 9; e < a.length; e++) {
                        const n = a[e];
                        n[17] === n[3] && t(n[1], n, s, r)
                      }
                      if (null !== a[5]) {
                        const e = a[5];
                        for (let n = 0; n < e.length; n++) {
                          const i = e[n];
                          t(i[1], i, s, r)
                        }
                      }
                    }
                  }
                }
                return r
              }(n, e, i, []) : Za(n, e, r, i);
              t.reset(s), t.notifyOnChanges()
            }
            return !0
          }
          return !1
        }

        function qa(t, e, n, i) {
          ! function (t, e, n, i, r, s, o, a) {
            t.firstCreatePass && (function (t, e, n) {
                null === t.queries && (t.queries = new Va), t.queries.track(new Ua(e, n))
              }(t, new za(n, i, !1, r), o.index), function (t, e) {
                const n = t.contentQueries || (t.contentQueries = []);
                e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
              }(t, a)),
              function (t, e) {
                const n = new Fa;
                ! function (t, e, n, i) {
                  const r = xr(e);
                  r.push(n), t.firstCreatePass && Cr(t).push(i, r.length - 1)
                }(t, e, n, n.destroy), null === e[5] && (e[5] = new ja), e[5].queries.push(new Da(n))
              }(t, e)
          }(We(), Ge(), e, n, i, 0, Ye(), t)
        }

        function Ga() {
          return t = Ge(), e = ln(), t[5].queries[e].queryList;
          var t, e
        }

        function Wa(t, e) {
          return t.queries.getByIndex(e)
        }
        const Ka = rt("Input", t => ({
            bindingPropertyName: t
          })),
          Ya = rt("Output", t => ({
            bindingPropertyName: t
          })),
          Ja = new Vt("Application Initializer");
        let Qa = (() => {
          class t {
            constructor(t) {
              this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => {
                this.resolve = t, this.reject = e
              })
            }
            runInitializers() {
              if (this.initialized) return;
              const t = [],
                e = () => {
                  this.done = !0, this.resolve()
                };
              if (this.appInits)
                for (let n = 0; n < this.appInits.length; n++) {
                  const e = this.appInits[n]();
                  $s(e) && t.push(e)
                }
              Promise.all(t).then(() => {
                e()
              }).catch(t => {
                this.reject(t)
              }), 0 === t.length && e(), this.initialized = !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(Ja, 8))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Xa = new Vt("AppId"),
          tl = {
            provide: Xa,
            useFactory: function () {
              return `${el()}${el()}${el()}`
            },
            deps: []
          };

        function el() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const nl = new Vt("Platform Initializer"),
          il = new Vt("Platform ID"),
          rl = new Vt("appBootstrapListener");
        let sl = (() => {
          class t {
            log(t) {
              console.log(t)
            }
            warn(t) {
              console.warn(t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const ol = new Vt("LocaleId"),
          al = new Vt("DefaultCurrencyCode");
        class ll {
          constructor(t, e) {
            this.ngModuleFactory = t, this.componentFactories = e
          }
        }
        const cl = function (t) {
            return new Ca(t)
          },
          ul = cl,
          hl = function (t) {
            return Promise.resolve(cl(t))
          },
          dl = function (t) {
            const e = cl(t),
              n = zn(Ce(t).declarations).reduce((t, e) => {
                const n = we(e);
                return n && t.push(new ha(n)), t
              }, []);
            return new ll(e, n)
          },
          pl = dl,
          fl = function (t) {
            return Promise.resolve(dl(t))
          };
        let ml = (() => {
          class t {
            constructor() {
              this.compileModuleSync = ul, this.compileModuleAsync = hl, this.compileModuleAndAllComponentsSync = pl, this.compileModuleAndAllComponentsAsync = fl
            }
            clearCache() {}
            clearCacheFor(t) {}
            getModuleId(t) {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const gl = new Vt("compilerOptions"),
          _l = (() => Promise.resolve(0))();

        function vl(t) {
          "undefined" == typeof Zone ? _l.then(() => {
            t && t.apply(null, null)
          }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }
        class yl {
          constructor({
            enableLongStackTrace: t = !1,
            shouldCoalesceEventChangeDetection: e = !1
          }) {
            if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Ra(!1), this.onMicrotaskEmpty = new Ra(!1), this.onStable = new Ra(!1), this.onError = new Ra(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
                let t = Ot.requestAnimationFrame,
                  e = Ot.cancelAnimationFrame;
                if ("undefined" != typeof Zone && t && e) {
                  const n = t[Zone.__symbol__("OriginalDelegate")];
                  n && (t = n);
                  const i = e[Zone.__symbol__("OriginalDelegate")];
                  i && (e = i)
                }
                return {
                  nativeRequestAnimationFrame: t,
                  nativeCancelAnimationFrame: e
                }
              }().nativeRequestAnimationFrame,
              function (t) {
                const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {
                  ! function (t) {
                    -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(Ot, () => {
                      t.lastRequestAnimationFrameId = -1, Cl(t), xl(t)
                    }), Cl(t))
                  }(t)
                });
                t._inner = t._inner.fork({
                  name: "angular",
                  properties: {
                    isAngularZone: !0,
                    maybeDelayChangeDetection: e
                  },
                  onInvokeTask: (n, i, r, s, o, a) => {
                    try {
                      return Sl(t), n.invokeTask(r, s, o, a)
                    } finally {
                      e && "eventTask" === s.type && e(), kl(t)
                    }
                  },
                  onInvoke: (e, n, i, r, s, o, a) => {
                    try {
                      return Sl(t), e.invoke(i, r, s, o, a)
                    } finally {
                      kl(t)
                    }
                  },
                  onHasTask: (e, n, i, r) => {
                    e.hasTask(i, r), n === i && ("microTask" == r.change ? (t._hasPendingMicrotasks = r.microTask, Cl(t), xl(t)) : "macroTask" == r.change && (t.hasPendingMacrotasks = r.macroTask))
                  },
                  onHandleError: (e, n, i, r) => (e.handleError(i, r), t.runOutsideAngular(() => t.onError.emit(r)), !1)
                })
              }(this)
          }
          static isInAngularZone() {
            return !0 === Zone.current.get("isAngularZone")
          }
          static assertInAngularZone() {
            if (!yl.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
          }
          static assertNotInAngularZone() {
            if (yl.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
          }
          run(t, e, n) {
            return this._inner.run(t, e, n)
          }
          runTask(t, e, n, i) {
            const r = this._inner,
              s = r.scheduleEventTask("NgZoneEvent: " + i, t, wl, bl, bl);
            try {
              return r.runTask(s, e, n)
            } finally {
              r.cancelTask(s)
            }
          }
          runGuarded(t, e, n) {
            return this._inner.runGuarded(t, e, n)
          }
          runOutsideAngular(t) {
            return this._outer.run(t)
          }
        }

        function bl() {}
        const wl = {};

        function xl(t) {
          if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
            t._nesting++, t.onMicrotaskEmpty.emit(null)
          } finally {
            if (t._nesting--, !t.hasPendingMicrotasks) try {
              t.runOutsideAngular(() => t.onStable.emit(null))
            } finally {
              t.isStable = !0
            }
          }
        }

        function Cl(t) {
          t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
        }

        function Sl(t) {
          t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
        }

        function kl(t) {
          t._nesting--, xl(t)
        }
        class Pl {
          constructor() {
            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ra, this.onMicrotaskEmpty = new Ra, this.onStable = new Ra, this.onError = new Ra
          }
          run(t, e, n) {
            return t.apply(e, n)
          }
          runGuarded(t, e, n) {
            return t.apply(e, n)
          }
          runOutsideAngular(t) {
            return t()
          }
          runTask(t, e, n, i) {
            return t.apply(e, n)
          }
        }
        let Tl = (() => {
            class t {
              constructor(t) {
                this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => {
                  this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                })
              }
              _watchAngularEvents() {
                this._ngZone.onUnstable.subscribe({
                  next: () => {
                    this._didWork = !0, this._isZoneStable = !1
                  }
                }), this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      yl.assertNotInAngularZone(), vl(() => {
                        this._isZoneStable = !0, this._runCallbacksIfReady()
                      })
                    }
                  })
                })
              }
              increasePendingRequestCount() {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
              }
              decreasePendingRequestCount() {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
              }
              isStable() {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
              }
              _runCallbacksIfReady() {
                if (this.isStable()) vl(() => {
                  for (; 0 !== this._callbacks.length;) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork)
                  }
                  this._didWork = !1
                });
                else {
                  let t = this.getPendingTasks();
                  this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
                }
              }
              getPendingTasks() {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({
                  source: t.source,
                  creationLocation: t.creationLocation,
                  data: t.data
                })) : []
              }
              addCallback(t, e, n) {
                let i = -1;
                e && e > 0 && (i = setTimeout(() => {
                  this._callbacks = this._callbacks.filter(t => t.timeoutId !== i), t(this._didWork, this.getPendingTasks())
                }, e)), this._callbacks.push({
                  doneCb: t,
                  timeoutId: i,
                  updateCb: n
                })
              }
              whenStable(t, e, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                this.addCallback(t, e, n), this._runCallbacksIfReady()
              }
              getPendingRequestCount() {
                return this._pendingCount
              }
              findProviders(t, e, n) {
                return []
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(yl))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          El = (() => {
            class t {
              constructor() {
                this._applications = new Map, Il.addToWindow(this)
              }
              registerApplication(t, e) {
                this._applications.set(t, e)
              }
              unregisterApplication(t) {
                this._applications.delete(t)
              }
              unregisterAllApplications() {
                this._applications.clear()
              }
              getTestability(t) {
                return this._applications.get(t) || null
              }
              getAllTestabilities() {
                return Array.from(this._applications.values())
              }
              getAllRootElements() {
                return Array.from(this._applications.keys())
              }
              findTestabilityInTree(t, e = !0) {
                return Il.findTestabilityInTree(this, t, e)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        class Ll {
          addToWindow(t) {}
          findTestabilityInTree(t, e, n) {
            return null
          }
        }
        let Al, Il = new Ll,
          Ol = function (t, e, n) {
            const i = t.get(gl, []).concat(e),
              r = new Ca(n);
            if (0 === ys.size) return Promise.resolve(r);
            const s = function (t) {
              const e = [];
              return t.forEach(t => t && e.push(...t)), e
            }(i.map(t => t.providers));
            if (0 === s.length) return Promise.resolve(r);
            const o = function () {
                const t = Ot.ng;
                if (!t || !t.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
                return t.\u0275compilerFacade
              }(),
              a = _s.create({
                providers: s
              }).get(o.ResourceLoader);
            return function (t) {
              const e = [],
                n = new Map;

              function i(t) {
                let e = n.get(t);
                if (!e) {
                  const i = (t => Promise.resolve(a.get(t)))(t);
                  n.set(t, e = i.then(ws))
                }
                return e
              }
              return ys.forEach((t, n) => {
                const r = [];
                t.templateUrl && r.push(i(t.templateUrl).then(e => {
                  t.template = e
                }));
                const s = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                s && s.forEach((e, n) => {
                  o.push(""), r.push(i(e).then(i => {
                    o[a + n] = i, s.splice(s.indexOf(e), 1), 0 == s.length && (t.styleUrls = void 0)
                  }))
                });
                const l = Promise.all(r).then(() => function (t) {
                  bs.delete(t)
                }(n));
                e.push(l)
              }), ys = new Map, Promise.all(e).then(() => {})
            }().then(() => r)
          };
        const Ml = new Vt("AllowMultipleToken");
        class Rl {
          constructor(t, e) {
            this.name = t, this.token = e
          }
        }

        function Nl(t, e, n = []) {
          const i = `Platform: ${e}`,
            r = new Vt(i);
          return (e = []) => {
            let s = Fl();
            if (!s || s.injector.get(Ml, !1))
              if (t) t(n.concat(e).concat({
                provide: r,
                useValue: !0
              }));
              else {
                const t = n.concat(e).concat({
                  provide: r,
                  useValue: !0
                }, {
                  provide: is,
                  useValue: "platform"
                });
                ! function (t) {
                  if (Al && !Al.destroyed && !Al.injector.get(Ml, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                  Al = t.get(Dl);
                  const e = t.get(nl, null);
                  e && e.forEach(t => t())
                }(_s.create({
                  providers: t,
                  name: i
                }))
              } return function (t) {
              const e = Fl();
              if (!e) throw new Error("No platform exists!");
              if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
              return e
            }(r)
          }
        }

        function Fl() {
          return Al && !Al.destroyed ? Al : null
        }
        let Dl = (() => {
          class t {
            constructor(t) {
              this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }
            bootstrapModuleFactory(t, e) {
              const n = function (t, e) {
                  let n;
                  return n = "noop" === t ? new Pl : ("zone.js" === t ? void 0 : t) || new yl({
                    enableLongStackTrace: hi(),
                    shouldCoalesceEventChangeDetection: e
                  }), n
                }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
                i = [{
                  provide: yl,
                  useValue: n
                }];
              return n.run(() => {
                const e = _s.create({
                    providers: i,
                    parent: this.injector,
                    name: t.moduleType.name
                  }),
                  r = t.create(e),
                  s = r.injector.get(oi, null);
                if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                return r.onDestroy(() => Vl(this._modules, r)), n.runOutsideAngular(() => n.onError.subscribe({
                    next: t => {
                      s.handleError(t)
                    }
                  })),
                  function (t, e, n) {
                    try {
                      const i = n();
                      return $s(i) ? i.catch(n => {
                        throw e.runOutsideAngular(() => t.handleError(n)), n
                      }) : i
                    } catch (i) {
                      throw e.runOutsideAngular(() => t.handleError(i)), i
                    }
                  }(s, n, () => {
                    const t = r.injector.get(Qa);
                    return t.runInitializers(), t.donePromise.then(() => (ba(r.injector.get(ol, "en-US") || "en-US"), this._moduleDoBootstrap(r), r))
                  })
              })
            }
            bootstrapModule(t, e = []) {
              const n = jl({}, e);
              return Ol(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n))
            }
            _moduleDoBootstrap(t) {
              const e = t.injector.get(zl);
              if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
              else {
                if (!t.instance.ngDoBootstrap) throw new Error(`The module ${xt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
                t.instance.ngDoBootstrap(e)
              }
              this._modules.push(t)
            }
            onDestroy(t) {
              this._destroyListeners.push(t)
            }
            get injector() {
              return this._injector
            }
            destroy() {
              if (this._destroyed) throw new Error("The platform has already been destroyed!");
              this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0
            }
            get destroyed() {
              return this._destroyed
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(_s))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function jl(t, e) {
          return Array.isArray(e) ? e.reduce(jl, t) : Object.assign(Object.assign({}, t), e)
        }
        let zl = (() => {
          class t {
            constructor(t, e, n, i, r, s) {
              this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = i, this._componentFactoryResolver = r, this._initStatus = s, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = hi(), this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick()
                  })
                }
              });
              const o = new b(t => {
                  this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete()
                  })
                }),
                a = new b(t => {
                  let e;
                  this._zone.runOutsideAngular(() => {
                    e = this._zone.onStable.subscribe(() => {
                      yl.assertNotInAngularZone(), vl(() => {
                        this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                      })
                    })
                  });
                  const n = this._zone.onUnstable.subscribe(() => {
                    yl.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                      t.next(!1)
                    }))
                  });
                  return () => {
                    e.unsubscribe(), n.unsubscribe()
                  }
                });
              this.isStable = function (...t) {
                let e = Number.POSITIVE_INFINITY,
                  n = null,
                  i = t[t.length - 1];
                return T(i) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof i && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof b ? t[0] : q(e)(G(t, n))
              }(o, a.pipe(t => {
                return W()((e = tt, function (t) {
                  let n;
                  n = "function" == typeof e ? e : function () {
                    return e
                  };
                  const i = Object.create(t, Q);
                  return i.source = t, i.subjectFactory = n, i
                })(t));
                var e
              }))
            }
            bootstrap(t, e) {
              if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
              let n;
              n = t instanceof Ao ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
              const i = n.isBoundToModule ? void 0 : this._injector.get(te),
                r = n.create(_s.NULL, [], e || n.selector, i);
              r.onDestroy(() => {
                this._unloadComponent(r)
              });
              const s = r.injector.get(Tl, null);
              return s && r.injector.get(El).registerApplication(r.location.nativeElement, s), this._loadComponent(r), hi() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), r
            }
            tick() {
              if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
              try {
                this._runningTick = !0;
                for (let t of this._views) t.detectChanges();
                if (this._enforceNoNewChanges)
                  for (let t of this._views) t.checkNoChanges()
              } catch (t) {
                this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t))
              } finally {
                this._runningTick = !1
              }
            }
            attachView(t) {
              const e = t;
              this._views.push(e), e.attachToAppRef(this)
            }
            detachView(t) {
              const e = t;
              Vl(this._views, e), e.detachFromAppRef()
            }
            _loadComponent(t) {
              this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(rl, []).concat(this._bootstrapListeners).forEach(e => e(t))
            }
            _unloadComponent(t) {
              this.detachView(t.hostView), Vl(this.components, t)
            }
            ngOnDestroy() {
              this._views.slice().forEach(t => t.destroy())
            }
            get viewCount() {
              return this._views.length
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(yl), Yt(sl), Yt(_s), Yt(oi), Yt(Oo), Yt(Qa))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function Vl(t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }
        class Ul {}
        class Hl {}
        const Bl = {
          factoryPathPrefix: "",
          factoryPathSuffix: ".ngfactory"
        };
        let Zl = (() => {
          class t {
            constructor(t, e) {
              this._compiler = t, this._config = e || Bl
            }
            load(t) {
              return this.loadAndCompile(t)
            }
            loadAndCompile(t) {
              let [e, i] = t.split("#");
              return void 0 === i && (i = "default"), n("zn8P")(e).then(t => t[i]).then(t => $l(t, e, i)).then(t => this._compiler.compileModuleAsync(t))
            }
            loadFactory(t) {
              let [e, i] = t.split("#"), r = "NgFactory";
              return void 0 === i && (i = "default", r = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[i + r]).then(t => $l(t, e, i))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(ml), Yt(Hl, 8))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function $l(t, e, n) {
          if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
          return t
        }
        const ql = Nl(null, "core", [{
            provide: il,
            useValue: "unknown"
          }, {
            provide: Dl,
            deps: [_s]
          }, {
            provide: El,
            deps: []
          }, {
            provide: sl,
            deps: []
          }]),
          Gl = [{
            provide: zl,
            useClass: zl,
            deps: [yl, sl, _s, oi, Oo, Qa]
          }, {
            provide: ua,
            deps: [yl],
            useFactory: function (t) {
              let e = [];
              return t.onStable.subscribe(() => {
                  for (; e.length;) e.pop()()
                }),
                function (t) {
                  e.push(t)
                }
            }
          }, {
            provide: Qa,
            useClass: Qa,
            deps: [
              [new ot, Ja]
            ]
          }, {
            provide: ml,
            useClass: ml,
            deps: []
          }, tl, {
            provide: Qo,
            useFactory: function () {
              return ea
            },
            deps: []
          }, {
            provide: Xo,
            useFactory: function () {
              return na
            },
            deps: []
          }, {
            provide: ol,
            useFactory: function (t) {
              return ba(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t
            },
            deps: [
              [new st(ol), new ot, new lt]
            ]
          }, {
            provide: al,
            useValue: "USD"
          }];
        let Wl = (() => {
            class t {
              constructor(t) {}
            }
            return t.\u0275mod = _e({
              type: t
            }), t.\u0275inj = pt({
              factory: function (e) {
                return new(e || t)(Yt(zl))
              },
              providers: Gl
            }), t
          })(),
          Kl = null;

        function Yl() {
          return Kl
        }
        const Jl = new Vt("DocumentToken");
        let Ql = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = dt({
            factory: Xl,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function Xl() {
          return Yt(ec)
        }
        const tc = new Vt("Location Initialized");
        let ec = (() => {
          class t extends Ql {
            constructor(t) {
              super(), this._doc = t, this._init()
            }
            _init() {
              this.location = Yl().getLocation(), this._history = Yl().getHistory()
            }
            getBaseHrefFromDOM() {
              return Yl().getBaseHref(this._doc)
            }
            onPopState(t) {
              Yl().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
            }
            onHashChange(t) {
              Yl().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
            }
            get href() {
              return this.location.href
            }
            get protocol() {
              return this.location.protocol
            }
            get hostname() {
              return this.location.hostname
            }
            get port() {
              return this.location.port
            }
            get pathname() {
              return this.location.pathname
            }
            get search() {
              return this.location.search
            }
            get hash() {
              return this.location.hash
            }
            set pathname(t) {
              this.location.pathname = t
            }
            pushState(t, e, n) {
              nc() ? this._history.pushState(t, e, n) : this.location.hash = n
            }
            replaceState(t, e, n) {
              nc() ? this._history.replaceState(t, e, n) : this.location.hash = n
            }
            forward() {
              this._history.forward()
            }
            back() {
              this._history.back()
            }
            getState() {
              return this._history.state
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(Jl))
          }, t.\u0275prov = dt({
            factory: ic,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function nc() {
          return !!window.history.pushState
        }

        function ic() {
          return new ec(Yt(Jl))
        }

        function rc(t, e) {
          if (0 == t.length) return e;
          if (0 == e.length) return t;
          let n = 0;
          return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        }

        function sc(t) {
          const e = t.match(/#|\?|$/),
            n = e && e.index || t.length;
          return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
        }

        function oc(t) {
          return t && "?" !== t[0] ? "?" + t : t
        }
        let ac = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = dt({
            factory: lc,
            token: t,
            providedIn: "root"
          }), t
        })();

        function lc(t) {
          const e = Yt(Jl).location;
          return new uc(Yt(Ql), e && e.origin || "")
        }
        const cc = new Vt("appBaseHref");
        let uc = (() => {
            class t extends ac {
              constructor(t, e) {
                if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                this._baseHref = e
              }
              onPopState(t) {
                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
              }
              getBaseHref() {
                return this._baseHref
              }
              prepareExternalUrl(t) {
                return rc(this._baseHref, t)
              }
              path(t = !1) {
                const e = this._platformLocation.pathname + oc(this._platformLocation.search),
                  n = this._platformLocation.hash;
                return n && t ? `${e}${n}` : e
              }
              pushState(t, e, n, i) {
                const r = this.prepareExternalUrl(n + oc(i));
                this._platformLocation.pushState(t, e, r)
              }
              replaceState(t, e, n, i) {
                const r = this.prepareExternalUrl(n + oc(i));
                this._platformLocation.replaceState(t, e, r)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(Ql), Yt(cc, 8))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          hc = (() => {
            class t extends ac {
              constructor(t, e) {
                super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e)
              }
              onPopState(t) {
                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
              }
              getBaseHref() {
                return this._baseHref
              }
              path(t = !1) {
                let e = this._platformLocation.hash;
                return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
              }
              prepareExternalUrl(t) {
                const e = rc(this._baseHref, t);
                return e.length > 0 ? "#" + e : e
              }
              pushState(t, e, n, i) {
                let r = this.prepareExternalUrl(n + oc(i));
                0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.pushState(t, e, r)
              }
              replaceState(t, e, n, i) {
                let r = this.prepareExternalUrl(n + oc(i));
                0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, r)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(Ql), Yt(cc, 8))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          dc = (() => {
            class t {
              constructor(t, e) {
                this._subject = new Ra, this._urlChangeListeners = [], this._platformStrategy = t;
                const n = this._platformStrategy.getBaseHref();
                this._platformLocation = e, this._baseHref = sc(fc(n)), this._platformStrategy.onPopState(t => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type
                  })
                })
              }
              path(t = !1) {
                return this.normalize(this._platformStrategy.path(t))
              }
              getState() {
                return this._platformLocation.getState()
              }
              isCurrentPathEqualTo(t, e = "") {
                return this.path() == this.normalize(t + oc(e))
              }
              normalize(e) {
                return t.stripTrailingSlash(function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e
                }(this._baseHref, fc(e)))
              }
              prepareExternalUrl(t) {
                return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
              }
              go(t, e = "", n = null) {
                this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + oc(e)), n)
              }
              replaceState(t, e = "", n = null) {
                this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + oc(e)), n)
              }
              forward() {
                this._platformStrategy.forward()
              }
              back() {
                this._platformStrategy.back()
              }
              onUrlChange(t) {
                this._urlChangeListeners.push(t), this.subscribe(t => {
                  this._notifyUrlChangeListeners(t.url, t.state)
                })
              }
              _notifyUrlChangeListeners(t = "", e) {
                this._urlChangeListeners.forEach(n => n(t, e))
              }
              subscribe(t, e, n) {
                return this._subject.subscribe({
                  next: t,
                  error: e,
                  complete: n
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(ac), Yt(Ql))
            }, t.normalizeQueryParams = oc, t.joinWithSlash = rc, t.stripTrailingSlash = sc, t.\u0275prov = dt({
              factory: pc,
              token: t,
              providedIn: "root"
            }), t
          })();

        function pc() {
          return new dc(Yt(ac), Yt(Ql))
        }

        function fc(t) {
          return t.replace(/\/index.html$/, "")
        }
        const mc = function () {
            var t = {
              Decimal: 0,
              Percent: 1,
              Currency: 2,
              Scientific: 3
            };
            return t[t.Decimal] = "Decimal", t[t.Percent] = "Percent", t[t.Currency] = "Currency", t[t.Scientific] = "Scientific", t
          }(),
          gc = function () {
            var t = {
              Zero: 0,
              One: 1,
              Two: 2,
              Few: 3,
              Many: 4,
              Other: 5
            };
            return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t
          }(),
          _c = function () {
            var t = {
              Format: 0,
              Standalone: 1
            };
            return t[t.Format] = "Format", t[t.Standalone] = "Standalone", t
          }(),
          vc = function () {
            var t = {
              Narrow: 0,
              Abbreviated: 1,
              Wide: 2,
              Short: 3
            };
            return t[t.Narrow] = "Narrow", t[t.Abbreviated] = "Abbreviated", t[t.Wide] = "Wide", t[t.Short] = "Short", t
          }(),
          yc = function () {
            var t = {
              Short: 0,
              Medium: 1,
              Long: 2,
              Full: 3
            };
            return t[t.Short] = "Short", t[t.Medium] = "Medium", t[t.Long] = "Long", t[t.Full] = "Full", t
          }(),
          bc = function () {
            var t = {
              Decimal: 0,
              Group: 1,
              List: 2,
              PercentSign: 3,
              PlusSign: 4,
              MinusSign: 5,
              Exponential: 6,
              SuperscriptingExponent: 7,
              PerMille: 8,
              Infinity: 9,
              NaN: 10,
              TimeSeparator: 11,
              CurrencyDecimal: 12,
              CurrencyGroup: 13
            };
            return t[t.Decimal] = "Decimal", t[t.Group] = "Group", t[t.List] = "List", t[t.PercentSign] = "PercentSign", t[t.PlusSign] = "PlusSign", t[t.MinusSign] = "MinusSign", t[t.Exponential] = "Exponential", t[t.SuperscriptingExponent] = "SuperscriptingExponent", t[t.PerMille] = "PerMille", t[t.Infinity] = "Infinity", t[t.NaN] = "NaN", t[t.TimeSeparator] = "TimeSeparator", t[t.CurrencyDecimal] = "CurrencyDecimal", t[t.CurrencyGroup] = "CurrencyGroup", t
          }();

        function wc(t, e) {
          return Pc(ga(t)[va.DateFormat], e)
        }

        function xc(t, e) {
          return Pc(ga(t)[va.TimeFormat], e)
        }

        function Cc(t, e) {
          return Pc(ga(t)[va.DateTimeFormat], e)
        }

        function Sc(t, e) {
          const n = ga(t),
            i = n[va.NumberSymbols][e];
          if (void 0 === i) {
            if (e === bc.CurrencyDecimal) return n[va.NumberSymbols][bc.Decimal];
            if (e === bc.CurrencyGroup) return n[va.NumberSymbols][bc.Group]
          }
          return i
        }

        function kc(t) {
          if (!t[va.ExtraData]) throw new Error(`Missing extra locale data for the locale "${t[va.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
        }

        function Pc(t, e) {
          for (let n = e; n > -1; n--)
            if (void 0 !== t[n]) return t[n];
          throw new Error("Locale data API: locale data undefined")
        }

        function Tc(t) {
          const [e, n] = t.split(":");
          return {
            hours: +e,
            minutes: +n
          }
        }
        const Ec = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
          Lc = {},
          Ac = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
          Ic = function () {
            var t = {
              Short: 0,
              ShortGMT: 1,
              Long: 2,
              Extended: 3
            };
            return t[t.Short] = "Short", t[t.ShortGMT] = "ShortGMT", t[t.Long] = "Long", t[t.Extended] = "Extended", t
          }(),
          Oc = function () {
            var t = {
              FullYear: 0,
              Month: 1,
              Date: 2,
              Hours: 3,
              Minutes: 4,
              Seconds: 5,
              FractionalSeconds: 6,
              Day: 7
            };
            return t[t.FullYear] = "FullYear", t[t.Month] = "Month", t[t.Date] = "Date", t[t.Hours] = "Hours", t[t.Minutes] = "Minutes", t[t.Seconds] = "Seconds", t[t.FractionalSeconds] = "FractionalSeconds", t[t.Day] = "Day", t
          }(),
          Mc = function () {
            var t = {
              DayPeriods: 0,
              Days: 1,
              Months: 2,
              Eras: 3
            };
            return t[t.DayPeriods] = "DayPeriods", t[t.Days] = "Days", t[t.Months] = "Months", t[t.Eras] = "Eras", t
          }();

        function Rc(t, e) {
          return e && (t = t.replace(/\{([^}]+)}/g, (function (t, n) {
            return null != e && n in e ? e[n] : t
          }))), t
        }

        function Nc(t, e, n = "-", i, r) {
          let s = "";
          (t < 0 || r && t <= 0) && (r ? t = 1 - t : (t = -t, s = n));
          let o = String(t);
          for (; o.length < e;) o = "0" + o;
          return i && (o = o.substr(o.length - e)), s + o
        }

        function Fc(t, e, n = 0, i = !1, r = !1) {
          return function (s, o) {
            let a = function (t, e) {
              switch (t) {
                case Oc.FullYear:
                  return e.getFullYear();
                case Oc.Month:
                  return e.getMonth();
                case Oc.Date:
                  return e.getDate();
                case Oc.Hours:
                  return e.getHours();
                case Oc.Minutes:
                  return e.getMinutes();
                case Oc.Seconds:
                  return e.getSeconds();
                case Oc.FractionalSeconds:
                  return e.getMilliseconds();
                case Oc.Day:
                  return e.getDay();
                default:
                  throw new Error(`Unknown DateType value "${t}".`)
              }
            }(t, s);
            if ((n > 0 || a > -n) && (a += n), t === Oc.Hours) 0 === a && -12 === n && (a = 12);
            else if (t === Oc.FractionalSeconds) return l = e, Nc(a, 3).substr(0, l);
            var l;
            const c = Sc(o, bc.MinusSign);
            return Nc(a, e, c, i, r)
          }
        }

        function Dc(t, e, n = _c.Format, i = !1) {
          return function (r, s) {
            return function (t, e, n, i, r, s) {
              switch (n) {
                case Mc.Months:
                  return function (t, e, n) {
                    const i = ga(t),
                      r = Pc([i[va.MonthsFormat], i[va.MonthsStandalone]], e);
                    return Pc(r, n)
                  }(e, r, i)[t.getMonth()];
                case Mc.Days:
                  return function (t, e, n) {
                    const i = ga(t),
                      r = Pc([i[va.DaysFormat], i[va.DaysStandalone]], e);
                    return Pc(r, n)
                  }(e, r, i)[t.getDay()];
                case Mc.DayPeriods:
                  const o = t.getHours(),
                    a = t.getMinutes();
                  if (s) {
                    const t = function (t) {
                        const e = ga(t);
                        return kc(e), (e[va.ExtraData][2] || []).map(t => "string" == typeof t ? Tc(t) : [Tc(t[0]), Tc(t[1])])
                      }(e),
                      n = function (t, e, n) {
                        const i = ga(t);
                        kc(i);
                        const r = Pc([i[va.ExtraData][0], i[va.ExtraData][1]], e) || [];
                        return Pc(r, n) || []
                      }(e, r, i);
                    let s;
                    if (t.forEach((t, e) => {
                        if (Array.isArray(t)) {
                          const {
                            hours: i,
                            minutes: r
                          } = t[0], {
                            hours: l,
                            minutes: c
                          } = t[1];
                          o >= i && a >= r && (o < l || o === l && a < c) && (s = n[e])
                        } else {
                          const {
                            hours: i,
                            minutes: r
                          } = t;
                          i === o && r === a && (s = n[e])
                        }
                      }), s) return s
                  }
                  return function (t, e, n) {
                    const i = ga(t),
                      r = Pc([i[va.DayPeriodsFormat], i[va.DayPeriodsStandalone]], e);
                    return Pc(r, n)
                  }(e, r, i)[o < 12 ? 0 : 1];
                case Mc.Eras:
                  return function (t, e) {
                    return Pc(ga(t)[va.Eras], e)
                  }(e, i)[t.getFullYear() <= 0 ? 0 : 1];
                default:
                  throw new Error(`unexpected translation type ${n}`)
              }
            }(r, s, t, e, n, i)
          }
        }

        function jc(t) {
          return function (e, n, i) {
            const r = -1 * i,
              s = Sc(n, bc.MinusSign),
              o = r > 0 ? Math.floor(r / 60) : Math.ceil(r / 60);
            switch (t) {
              case Ic.Short:
                return (r >= 0 ? "+" : "") + Nc(o, 2, s) + Nc(Math.abs(r % 60), 2, s);
              case Ic.ShortGMT:
                return "GMT" + (r >= 0 ? "+" : "") + Nc(o, 1, s);
              case Ic.Long:
                return "GMT" + (r >= 0 ? "+" : "") + Nc(o, 2, s) + ":" + Nc(Math.abs(r % 60), 2, s);
              case Ic.Extended:
                return 0 === i ? "Z" : (r >= 0 ? "+" : "") + Nc(o, 2, s) + ":" + Nc(Math.abs(r % 60), 2, s);
              default:
                throw new Error(`Unknown zone width "${t}"`)
            }
          }
        }

        function zc(t, e = !1) {
          return function (n, i) {
            let r;
            if (e) {
              const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                e = n.getDate();
              r = 1 + Math.floor((e + t) / 7)
            } else {
              const t = function (t) {
                  const e = new Date(t, 0, 1).getDay();
                  return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e)
                }(n.getFullYear()),
                e = (s = n, new Date(s.getFullYear(), s.getMonth(), s.getDate() + (4 - s.getDay()))).getTime() - t.getTime();
              r = 1 + Math.round(e / 6048e5)
            }
            var s;
            return Nc(r, t, Sc(i, bc.MinusSign))
          }
        }
        const Vc = {};

        function Uc(t, e) {
          t = t.replace(/:/g, "");
          const n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
          return isNaN(n) ? e : n
        }

        function Hc(t) {
          return t instanceof Date && !isNaN(t.valueOf())
        }
        const Bc = /^(\d+)?\.((\d+)(-(\d+))?)?$/;

        function Zc(t) {
          const e = parseInt(t);
          if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t);
          return e
        }
        class $c {}
        let qc = (() => {
          class t extends $c {
            constructor(t) {
              super(), this.locale = t
            }
            getPluralCategory(t, e) {
              switch (function (t) {
                return ga(t)[va.PluralCase]
              }(e || this.locale)(t)) {
                case gc.Zero:
                  return "zero";
                case gc.One:
                  return "one";
                case gc.Two:
                  return "two";
                case gc.Few:
                  return "few";
                case gc.Many:
                  return "many";
                default:
                  return "other"
              }
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(ol))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function Gc(t, e) {
          e = encodeURIComponent(e);
          for (const n of t.split(";")) {
            const t = n.indexOf("="),
              [i, r] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
            if (i.trim() === e) return decodeURIComponent(r)
          }
          return null
        }
        let Wc = (() => {
          class t {
            constructor(t, e, n, i) {
              this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = i, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
            }
            set klass(t) {
              this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
            }
            set ngClass(t) {
              this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (Ts(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
            }
            ngDoCheck() {
              if (this._iterableDiffer) {
                const t = this._iterableDiffer.diff(this._rawClass);
                t && this._applyIterableChanges(t)
              } else if (this._keyValueDiffer) {
                const t = this._keyValueDiffer.diff(this._rawClass);
                t && this._applyKeyValueChanges(t)
              }
            }
            _applyKeyValueChanges(t) {
              t.forEachAddedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachChangedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachRemovedItem(t => {
                t.previousValue && this._toggleClass(t.key, !1)
              })
            }
            _applyIterableChanges(t) {
              t.forEachAddedItem(t => {
                if ("string" != typeof t.item) throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${xt(t.item)}`);
                this._toggleClass(t.item, !0)
              }), t.forEachRemovedItem(t => this._toggleClass(t.item, !1))
            }
            _applyClasses(t) {
              t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !0)) : Object.keys(t).forEach(e => this._toggleClass(e, !!t[e])))
            }
            _removeClasses(t) {
              t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !1)) : Object.keys(t).forEach(t => this._toggleClass(t, !1)))
            }
            _toggleClass(t, e) {
              (t = t.trim()) && t.split(/\s+/g).forEach(t => {
                e ? this._renderer.addClass(this._ngEl.nativeElement, t) : this._renderer.removeClass(this._ngEl.nativeElement, t)
              })
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Fs(Qo), Fs(Xo), Fs(Mo), Fs(Do))
          }, t.\u0275dir = ye({
            type: t,
            selectors: [
              ["", "ngClass", ""]
            ],
            inputs: {
              klass: ["class", "klass"],
              ngClass: "ngClass"
            }
          }), t
        })();
        class Kc {
          constructor(t, e, n, i) {
            this.$implicit = t, this.ngForOf = e, this.index = n, this.count = i
          }
          get first() {
            return 0 === this.index
          }
          get last() {
            return this.index === this.count - 1
          }
          get even() {
            return this.index % 2 == 0
          }
          get odd() {
            return !this.even
          }
        }
        let Yc = (() => {
          class t {
            constructor(t, e, n) {
              this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
            }
            set ngForOf(t) {
              this._ngForOf = t, this._ngForOfDirty = !0
            }
            set ngForTrackBy(t) {
              hi() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. ` + "See https://angular.io/api/common/NgForOf#change-propagation for more information."), this._trackByFn = t
            }
            get ngForTrackBy() {
              return this._trackByFn
            }
            set ngForTemplate(t) {
              t && (this._template = t)
            }
            ngDoCheck() {
              if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                const n = this._ngForOf;
                if (!this._differ && n) try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy)
                } catch (e) {
                  throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                }
              }
              var t;
              if (this._differ) {
                const t = this._differ.diff(this._ngForOf);
                t && this._applyChanges(t)
              }
            }
            _applyChanges(t) {
              const e = [];
              t.forEachOperation((t, n, i) => {
                if (null == t.previousIndex) {
                  const n = this._viewContainer.createEmbeddedView(this._template, new Kc(null, this._ngForOf, -1, -1), null === i ? void 0 : i),
                    r = new Jc(t, n);
                  e.push(r)
                } else if (null == i) this._viewContainer.remove(null === n ? void 0 : n);
                else if (null !== n) {
                  const r = this._viewContainer.get(n);
                  this._viewContainer.move(r, i);
                  const s = new Jc(t, r);
                  e.push(s)
                }
              });
              for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
              for (let n = 0, i = this._viewContainer.length; n < i; n++) {
                const t = this._viewContainer.get(n);
                t.context.index = n, t.context.count = i, t.context.ngForOf = this._ngForOf
              }
              t.forEachIdentityChange(t => {
                this._viewContainer.get(t.currentIndex).context.$implicit = t.item
              })
            }
            _perViewChange(t, e) {
              t.context.$implicit = e.item
            }
            static ngTemplateContextGuard(t, e) {
              return !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Fs(sa), Fs(ia), Fs(Qo))
          }, t.\u0275dir = ye({
            type: t,
            selectors: [
              ["", "ngFor", "", "ngForOf", ""]
            ],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate"
            }
          }), t
        })();
        class Jc {
          constructor(t, e) {
            this.record = t, this.view = e
          }
        }
        let Qc = (() => {
          class t {
            constructor(t, e) {
              this._viewContainer = t, this._context = new Xc, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
            }
            set ngIf(t) {
              this._context.$implicit = this._context.ngIf = t, this._updateView()
            }
            set ngIfThen(t) {
              tu("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
            }
            set ngIfElse(t) {
              tu("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
            }
            _updateView() {
              this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
            static ngTemplateContextGuard(t, e) {
              return !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Fs(sa), Fs(ia))
          }, t.\u0275dir = ye({
            type: t,
            selectors: [
              ["", "ngIf", ""]
            ],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse"
            }
          }), t
        })();
        class Xc {
          constructor() {
            this.$implicit = null, this.ngIf = null
          }
        }

        function tu(t, e) {
          if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${xt(e)}'.`)
        }

        function eu(t, e) {
          return Error(`InvalidPipeArgument: '${e}' for pipe '${xt(t)}'`)
        }
        let nu = (() => {
            class t {
              constructor(t) {
                this.locale = t
              }
              transform(e, n = "mediumDate", i, r) {
                if (null == e || "" === e || e != e) return null;
                try {
                  return function (t, e, n, i) {
                    let r = function (t) {
                      if (Hc(t)) return t;
                      if ("number" == typeof t && !isNaN(t)) return new Date(t);
                      if ("string" == typeof t) {
                        t = t.trim();
                        const e = parseFloat(t);
                        if (!isNaN(t - e)) return new Date(e);
                        if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                          const [e, n, i] = t.split("-").map(t => +t);
                          return new Date(e, n - 1, i)
                        }
                        let n;
                        if (n = t.match(Ec)) return function (t) {
                          const e = new Date(0);
                          let n = 0,
                            i = 0;
                          const r = t[8] ? e.setUTCFullYear : e.setFullYear,
                            s = t[8] ? e.setUTCHours : e.setHours;
                          t[9] && (n = Number(t[9] + t[10]), i = Number(t[9] + t[11])), r.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                          const o = Number(t[4] || 0) - n,
                            a = Number(t[5] || 0) - i,
                            l = Number(t[6] || 0),
                            c = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                          return s.call(e, o, a, l, c), e
                        }(n)
                      }
                      const e = new Date(t);
                      if (!Hc(e)) throw new Error(`Unable to convert "${t}" into a date`);
                      return e
                    }(t);
                    e = function t(e, n) {
                      const i = function (t) {
                        return ga(t)[va.LocaleId]
                      }(e);
                      if (Lc[i] = Lc[i] || {}, Lc[i][n]) return Lc[i][n];
                      let r = "";
                      switch (n) {
                        case "shortDate":
                          r = wc(e, yc.Short);
                          break;
                        case "mediumDate":
                          r = wc(e, yc.Medium);
                          break;
                        case "longDate":
                          r = wc(e, yc.Long);
                          break;
                        case "fullDate":
                          r = wc(e, yc.Full);
                          break;
                        case "shortTime":
                          r = xc(e, yc.Short);
                          break;
                        case "mediumTime":
                          r = xc(e, yc.Medium);
                          break;
                        case "longTime":
                          r = xc(e, yc.Long);
                          break;
                        case "fullTime":
                          r = xc(e, yc.Full);
                          break;
                        case "short":
                          const n = t(e, "shortTime"),
                            i = t(e, "shortDate");
                          r = Rc(Cc(e, yc.Short), [n, i]);
                          break;
                        case "medium":
                          const s = t(e, "mediumTime"),
                            o = t(e, "mediumDate");
                          r = Rc(Cc(e, yc.Medium), [s, o]);
                          break;
                        case "long":
                          const a = t(e, "longTime"),
                            l = t(e, "longDate");
                          r = Rc(Cc(e, yc.Long), [a, l]);
                          break;
                        case "full":
                          const c = t(e, "fullTime"),
                            u = t(e, "fullDate");
                          r = Rc(Cc(e, yc.Full), [c, u])
                      }
                      return r && (Lc[i][n] = r), r
                    }(n, e) || e;
                    let s, o = [];
                    for (; e;) {
                      if (s = Ac.exec(e), !s) {
                        o.push(e);
                        break
                      } {
                        o = o.concat(s.slice(1));
                        const t = o.pop();
                        if (!t) break;
                        e = t
                      }
                    }
                    let a = r.getTimezoneOffset();
                    i && (a = Uc(i, a), r = function (t, e, n) {
                      const i = t.getTimezoneOffset();
                      return function (t, e) {
                        return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
                      }(t, -1 * (Uc(e, i) - i))
                    }(r, i));
                    let l = "";
                    return o.forEach(t => {
                      const e = function (t) {
                        if (Vc[t]) return Vc[t];
                        let e;
                        switch (t) {
                          case "G":
                          case "GG":
                          case "GGG":
                            e = Dc(Mc.Eras, vc.Abbreviated);
                            break;
                          case "GGGG":
                            e = Dc(Mc.Eras, vc.Wide);
                            break;
                          case "GGGGG":
                            e = Dc(Mc.Eras, vc.Narrow);
                            break;
                          case "y":
                            e = Fc(Oc.FullYear, 1, 0, !1, !0);
                            break;
                          case "yy":
                            e = Fc(Oc.FullYear, 2, 0, !0, !0);
                            break;
                          case "yyy":
                            e = Fc(Oc.FullYear, 3, 0, !1, !0);
                            break;
                          case "yyyy":
                            e = Fc(Oc.FullYear, 4, 0, !1, !0);
                            break;
                          case "M":
                          case "L":
                            e = Fc(Oc.Month, 1, 1);
                            break;
                          case "MM":
                          case "LL":
                            e = Fc(Oc.Month, 2, 1);
                            break;
                          case "MMM":
                            e = Dc(Mc.Months, vc.Abbreviated);
                            break;
                          case "MMMM":
                            e = Dc(Mc.Months, vc.Wide);
                            break;
                          case "MMMMM":
                            e = Dc(Mc.Months, vc.Narrow);
                            break;
                          case "LLL":
                            e = Dc(Mc.Months, vc.Abbreviated, _c.Standalone);
                            break;
                          case "LLLL":
                            e = Dc(Mc.Months, vc.Wide, _c.Standalone);
                            break;
                          case "LLLLL":
                            e = Dc(Mc.Months, vc.Narrow, _c.Standalone);
                            break;
                          case "w":
                            e = zc(1);
                            break;
                          case "ww":
                            e = zc(2);
                            break;
                          case "W":
                            e = zc(1, !0);
                            break;
                          case "d":
                            e = Fc(Oc.Date, 1);
                            break;
                          case "dd":
                            e = Fc(Oc.Date, 2);
                            break;
                          case "E":
                          case "EE":
                          case "EEE":
                            e = Dc(Mc.Days, vc.Abbreviated);
                            break;
                          case "EEEE":
                            e = Dc(Mc.Days, vc.Wide);
                            break;
                          case "EEEEE":
                            e = Dc(Mc.Days, vc.Narrow);
                            break;
                          case "EEEEEE":
                            e = Dc(Mc.Days, vc.Short);
                            break;
                          case "a":
                          case "aa":
                          case "aaa":
                            e = Dc(Mc.DayPeriods, vc.Abbreviated);
                            break;
                          case "aaaa":
                            e = Dc(Mc.DayPeriods, vc.Wide);
                            break;
                          case "aaaaa":
                            e = Dc(Mc.DayPeriods, vc.Narrow);
                            break;
                          case "b":
                          case "bb":
                          case "bbb":
                            e = Dc(Mc.DayPeriods, vc.Abbreviated, _c.Standalone, !0);
                            break;
                          case "bbbb":
                            e = Dc(Mc.DayPeriods, vc.Wide, _c.Standalone, !0);
                            break;
                          case "bbbbb":
                            e = Dc(Mc.DayPeriods, vc.Narrow, _c.Standalone, !0);
                            break;
                          case "B":
                          case "BB":
                          case "BBB":
                            e = Dc(Mc.DayPeriods, vc.Abbreviated, _c.Format, !0);
                            break;
                          case "BBBB":
                            e = Dc(Mc.DayPeriods, vc.Wide, _c.Format, !0);
                            break;
                          case "BBBBB":
                            e = Dc(Mc.DayPeriods, vc.Narrow, _c.Format, !0);
                            break;
                          case "h":
                            e = Fc(Oc.Hours, 1, -12);
                            break;
                          case "hh":
                            e = Fc(Oc.Hours, 2, -12);
                            break;
                          case "H":
                            e = Fc(Oc.Hours, 1);
                            break;
                          case "HH":
                            e = Fc(Oc.Hours, 2);
                            break;
                          case "m":
                            e = Fc(Oc.Minutes, 1);
                            break;
                          case "mm":
                            e = Fc(Oc.Minutes, 2);
                            break;
                          case "s":
                            e = Fc(Oc.Seconds, 1);
                            break;
                          case "ss":
                            e = Fc(Oc.Seconds, 2);
                            break;
                          case "S":
                            e = Fc(Oc.FractionalSeconds, 1);
                            break;
                          case "SS":
                            e = Fc(Oc.FractionalSeconds, 2);
                            break;
                          case "SSS":
                            e = Fc(Oc.FractionalSeconds, 3);
                            break;
                          case "Z":
                          case "ZZ":
                          case "ZZZ":
                            e = jc(Ic.Short);
                            break;
                          case "ZZZZZ":
                            e = jc(Ic.Extended);
                            break;
                          case "O":
                          case "OO":
                          case "OOO":
                          case "z":
                          case "zz":
                          case "zzz":
                            e = jc(Ic.ShortGMT);
                            break;
                          case "OOOO":
                          case "ZZZZ":
                          case "zzzz":
                            e = jc(Ic.Long);
                            break;
                          default:
                            return null
                        }
                        return Vc[t] = e, e
                      }(t);
                      l += e ? e(r, n, a) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }), l
                  }(e, n, r || this.locale, i)
                } catch (s) {
                  throw eu(t, s.message)
                }
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Fs(ol))
            }, t.\u0275pipe = be({
              name: "date",
              type: t,
              pure: !0
            }), t
          })(),
          iu = (() => {
            class t {
              transform(t) {
                return JSON.stringify(t, null, 2)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275pipe = be({
              name: "json",
              type: t,
              pure: !1
            }), t
          })(),
          ru = (() => {
            class t {
              constructor(t) {
                this._locale = t
              }
              transform(e, n, i) {
                if (function (t) {
                    return null == t || "" === t || t != t
                  }(e)) return null;
                i = i || this._locale;
                try {
                  return function (t, e, n) {
                    return function (t, e, n, i, r, s, o = !1) {
                      let a = "",
                        l = !1;
                      if (isFinite(t)) {
                        let c = function (t) {
                          let e, n, i, r, s, o = Math.abs(t) + "",
                            a = 0;
                          for ((n = o.indexOf(".")) > -1 && (o = o.replace(".", "")), (i = o.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +o.slice(i + 1), o = o.substring(0, i)) : n < 0 && (n = o.length), i = 0;
                            "0" === o.charAt(i); i++);
                          if (i === (s = o.length)) e = [0], n = 1;
                          else {
                            for (s--;
                              "0" === o.charAt(s);) s--;
                            for (n -= i, e = [], r = 0; i <= s; i++, r++) e[r] = Number(o.charAt(i))
                          }
                          return n > 22 && (e = e.splice(0, 21), a = n - 1, n = 1), {
                            digits: e,
                            exponent: a,
                            integerLen: n
                          }
                        }(t);
                        o && (c = function (t) {
                          if (0 === t.digits[0]) return t;
                          const e = t.digits.length - t.integerLen;
                          return t.exponent ? t.exponent += 2 : (0 === e ? t.digits.push(0, 0) : 1 === e && t.digits.push(0), t.integerLen += 2), t
                        }(c));
                        let u = e.minInt,
                          h = e.minFrac,
                          d = e.maxFrac;
                        if (s) {
                          const t = s.match(Bc);
                          if (null === t) throw new Error(`${s} is not a valid digit info`);
                          const e = t[1],
                            n = t[3],
                            i = t[5];
                          null != e && (u = Zc(e)), null != n && (h = Zc(n)), null != i ? d = Zc(i) : null != n && h > d && (d = h)
                        }! function (t, e, n) {
                          if (e > n) throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);
                          let i = t.digits,
                            r = i.length - t.integerLen;
                          const s = Math.min(Math.max(e, r), n);
                          let o = s + t.integerLen,
                            a = i[o];
                          if (o > 0) {
                            i.splice(Math.max(t.integerLen, o));
                            for (let t = o; t < i.length; t++) i[t] = 0
                          } else {
                            r = Math.max(0, r), t.integerLen = 1, i.length = Math.max(1, o = s + 1), i[0] = 0;
                            for (let t = 1; t < o; t++) i[t] = 0
                          }
                          if (a >= 5)
                            if (o - 1 < 0) {
                              for (let e = 0; e > o; e--) i.unshift(0), t.integerLen++;
                              i.unshift(1), t.integerLen++
                            } else i[o - 1]++;
                          for (; r < Math.max(0, s); r++) i.push(0);
                          let l = 0 !== s;
                          const c = e + t.integerLen,
                            u = i.reduceRight((function (t, e, n, i) {
                              return i[n] = (e += t) < 10 ? e : e - 10, l && (0 === i[n] && n >= c ? i.pop() : l = !1), e >= 10 ? 1 : 0
                            }), 0);
                          u && (i.unshift(u), t.integerLen++)
                        }(c, h, d);
                        let p = c.digits,
                          f = c.integerLen;
                        const m = c.exponent;
                        let g = [];
                        for (l = p.every(t => !t); f < u; f++) p.unshift(0);
                        for (; f < 0; f++) p.unshift(0);
                        f > 0 ? g = p.splice(f, p.length) : (g = p, p = [0]);
                        const _ = [];
                        for (p.length >= e.lgSize && _.unshift(p.splice(-e.lgSize, p.length).join("")); p.length > e.gSize;) _.unshift(p.splice(-e.gSize, p.length).join(""));
                        p.length && _.unshift(p.join("")), a = _.join(Sc(n, i)), g.length && (a += Sc(n, r) + g.join("")), m && (a += Sc(n, bc.Exponential) + "+" + m)
                      } else a = Sc(n, bc.Infinity);
                      return a = t < 0 && !l ? e.negPre + a + e.negSuf : e.posPre + a + e.posSuf, a
                    }(t, function (t, e = "-") {
                      const n = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: "",
                          posSuf: "",
                          negPre: "",
                          negSuf: "",
                          gSize: 0,
                          lgSize: 0
                        },
                        i = t.split(";"),
                        r = i[0],
                        s = i[1],
                        o = -1 !== r.indexOf(".") ? r.split(".") : [r.substring(0, r.lastIndexOf("0") + 1), r.substring(r.lastIndexOf("0") + 1)],
                        a = o[0],
                        l = o[1] || "";
                      n.posPre = a.substr(0, a.indexOf("#"));
                      for (let u = 0; u < l.length; u++) {
                        const t = l.charAt(u);
                        "0" === t ? n.minFrac = n.maxFrac = u + 1 : "#" === t ? n.maxFrac = u + 1 : n.posSuf += t
                      }
                      const c = a.split(",");
                      if (n.gSize = c[1] ? c[1].length : 0, n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0, s) {
                        const t = r.length - n.posPre.length - n.posSuf.length,
                          e = s.indexOf("#");
                        n.negPre = s.substr(0, e).replace(/'/g, ""), n.negSuf = s.substr(e + t).replace(/'/g, "")
                      } else n.negPre = e + n.posPre, n.negSuf = n.posSuf;
                      return n
                    }(function (t, e) {
                      return ga(t)[va.NumberFormats][e]
                    }(e, mc.Decimal), Sc(e, bc.MinusSign)), e, bc.Group, bc.Decimal, n)
                  }(function (t) {
                    if ("string" == typeof t && !isNaN(Number(t) - parseFloat(t))) return Number(t);
                    if ("number" != typeof t) throw new Error(`${t} is not a number`);
                    return t
                  }(e), i, n)
                } catch (r) {
                  throw eu(t, r.message)
                }
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Fs(ol))
            }, t.\u0275pipe = be({
              name: "number",
              type: t,
              pure: !0
            }), t
          })(),
          su = (() => {
            class t {}
            return t.\u0275mod = _e({
              type: t
            }), t.\u0275inj = pt({
              factory: function (e) {
                return new(e || t)
              },
              providers: [{
                provide: $c,
                useClass: qc
              }]
            }), t
          })(),
          ou = (() => {
            class t {}
            return t.\u0275prov = dt({
              token: t,
              providedIn: "root",
              factory: () => new au(Yt(Jl), window, Yt(oi))
            }), t
          })();
        class au {
          constructor(t, e, n) {
            this.document = t, this.window = e, this.errorHandler = n, this.offset = () => [0, 0]
          }
          setOffset(t) {
            this.offset = Array.isArray(t) ? () => t : t
          }
          getScrollPosition() {
            return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
          }
          scrollToPosition(t) {
            this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
          }
          scrollToAnchor(t) {
            if (this.supportScrollRestoration()) {
              t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
              try {
                const e = this.document.querySelector(`#${t}`);
                if (e) return void this.scrollToElement(e);
                const n = this.document.querySelector(`[name='${t}']`);
                if (n) return void this.scrollToElement(n)
              } catch (e) {
                this.errorHandler.handleError(e)
              }
            }
          }
          setHistoryScrollRestoration(t) {
            if (this.supportScrollRestoration()) {
              const e = this.window.history;
              e && e.scrollRestoration && (e.scrollRestoration = t)
            }
          }
          scrollToElement(t) {
            const e = t.getBoundingClientRect(),
              n = e.left + this.window.pageXOffset,
              i = e.top + this.window.pageYOffset,
              r = this.offset();
            this.window.scrollTo(n - r[0], i - r[1])
          }
          supportScrollRestoration() {
            try {
              return !!this.window && !!this.window.scrollTo
            } catch (t) {
              return !1
            }
          }
        }
        class lu extends class extends class {} {
          constructor() {
            super()
          }
          supportsDOMEvents() {
            return !0
          }
        } {
          static makeCurrent() {
            var t;
            t = new lu, Kl || (Kl = t)
          }
          getProperty(t, e) {
            return t[e]
          }
          log(t) {
            window.console && window.console.log && window.console.log(t)
          }
          logGroup(t) {
            window.console && window.console.group && window.console.group(t)
          }
          logGroupEnd() {
            window.console && window.console.groupEnd && window.console.groupEnd()
          }
          onAndCancel(t, e, n) {
            return t.addEventListener(e, n, !1), () => {
              t.removeEventListener(e, n, !1)
            }
          }
          dispatchEvent(t, e) {
            t.dispatchEvent(e)
          }
          remove(t) {
            return t.parentNode && t.parentNode.removeChild(t), t
          }
          getValue(t) {
            return t.value
          }
          createElement(t, e) {
            return (e = e || this.getDefaultDocument()).createElement(t)
          }
          createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle")
          }
          getDefaultDocument() {
            return document
          }
          isElementNode(t) {
            return t.nodeType === Node.ELEMENT_NODE
          }
          isShadowRoot(t) {
            return t instanceof DocumentFragment
          }
          getGlobalEventTarget(t, e) {
            return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
          }
          getHistory() {
            return window.history
          }
          getLocation() {
            return window.location
          }
          getBaseHref(t) {
            const e = uu || (uu = document.querySelector("base"), uu) ? uu.getAttribute("href") : null;
            return null == e ? null : (n = e, cu || (cu = document.createElement("a")), cu.setAttribute("href", n), "/" === cu.pathname.charAt(0) ? cu.pathname : "/" + cu.pathname);
            var n
          }
          resetBaseElement() {
            uu = null
          }
          getUserAgent() {
            return window.navigator.userAgent
          }
          performanceNow() {
            return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
          }
          supportsCookies() {
            return !0
          }
          getCookie(t) {
            return Gc(document.cookie, t)
          }
        }
        let cu, uu = null;
        const hu = new Vt("TRANSITION_ID"),
          du = [{
            provide: Ja,
            useFactory: function (t, e, n) {
              return () => {
                n.get(Qa).donePromise.then(() => {
                  const n = Yl();
                  Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === t).forEach(t => n.remove(t))
                })
              }
            },
            deps: [hu, Jl, _s],
            multi: !0
          }];
        class pu {
          static init() {
            var t;
            t = new pu, Il = t
          }
          addToWindow(t) {
            Ot.getAngularTestability = (e, n = !0) => {
              const i = t.findTestabilityInTree(e, n);
              if (null == i) throw new Error("Could not find testability for element.");
              return i
            }, Ot.getAllAngularTestabilities = () => t.getAllTestabilities(), Ot.getAllAngularRootElements = () => t.getAllRootElements(), Ot.frameworkStabilizers || (Ot.frameworkStabilizers = []), Ot.frameworkStabilizers.push(t => {
              const e = Ot.getAllAngularTestabilities();
              let n = e.length,
                i = !1;
              const r = function (e) {
                i = i || e, n--, 0 == n && t(i)
              };
              e.forEach((function (t) {
                t.whenStable(r)
              }))
            })
          }
          findTestabilityInTree(t, e, n) {
            if (null == e) return null;
            const i = t.getTestability(e);
            return null != i ? i : n ? Yl().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
          }
        }
        const fu = new Vt("EventManagerPlugins");
        let mu = (() => {
          class t {
            constructor(t, e) {
              this._zone = e, this._eventNameToPlugin = new Map, t.forEach(t => t.manager = this), this._plugins = t.slice().reverse()
            }
            addEventListener(t, e, n) {
              return this._findPluginFor(e).addEventListener(t, e, n)
            }
            addGlobalEventListener(t, e, n) {
              return this._findPluginFor(e).addGlobalEventListener(t, e, n)
            }
            getZone() {
              return this._zone
            }
            _findPluginFor(t) {
              const e = this._eventNameToPlugin.get(t);
              if (e) return e;
              const n = this._plugins;
              for (let i = 0; i < n.length; i++) {
                const e = n[i];
                if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
              }
              throw new Error(`No event manager plugin found for event ${t}`)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(fu), Yt(yl))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class gu {
          constructor(t) {
            this._doc = t
          }
          addGlobalEventListener(t, e, n) {
            const i = Yl().getGlobalEventTarget(this._doc, t);
            if (!i) throw new Error(`Unsupported event target ${i} for event ${e}`);
            return this.addEventListener(i, e, n)
          }
        }
        let _u = (() => {
            class t {
              constructor() {
                this._stylesSet = new Set
              }
              addStyles(t) {
                const e = new Set;
                t.forEach(t => {
                  this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t))
                }), this.onStylesAdded(e)
              }
              onStylesAdded(t) {}
              getAllStyles() {
                return Array.from(this._stylesSet)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          vu = (() => {
            class t extends _u {
              constructor(t) {
                super(), this._doc = t, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(t.head)
              }
              _addStylesToHost(t, e) {
                t.forEach(t => {
                  const n = this._doc.createElement("style");
                  n.textContent = t, this._styleNodes.add(e.appendChild(n))
                })
              }
              addHost(t) {
                this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
              }
              removeHost(t) {
                this._hostNodes.delete(t)
              }
              onStylesAdded(t) {
                this._hostNodes.forEach(e => this._addStylesToHost(t, e))
              }
              ngOnDestroy() {
                this._styleNodes.forEach(t => Yl().remove(t))
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(Jl))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const yu = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
          },
          bu = /%COMP%/g;

        function wu(t, e, n) {
          for (let i = 0; i < e.length; i++) {
            let r = e[i];
            Array.isArray(r) ? wu(t, r, n) : (r = r.replace(bu, t), n.push(r))
          }
          return n
        }

        function xu(t) {
          return e => {
            if ("__ngUnwrap__" === e) return t;
            !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
          }
        }
        let Cu = (() => {
          class t {
            constructor(t, e, n) {
              this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new Su(t)
            }
            createRenderer(t, e) {
              if (!t || !e) return this.defaultRenderer;
              switch (e.encapsulation) {
                case ce.Emulated: {
                  let n = this.rendererByCompId.get(e.id);
                  return n || (n = new ku(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n
                }
                case ce.Native:
                case ce.ShadowDom:
                  return new Pu(this.eventManager, this.sharedStylesHost, t, e);
                default:
                  if (!this.rendererByCompId.has(e.id)) {
                    const t = wu(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer)
                  }
                  return this.defaultRenderer
              }
            }
            begin() {}
            end() {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(mu), Yt(vu), Yt(Xa))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class Su {
          constructor(t) {
            this.eventManager = t, this.data = Object.create(null)
          }
          destroy() {}
          createElement(t, e) {
            return e ? document.createElementNS(yu[e] || e, t) : document.createElement(t)
          }
          createComment(t) {
            return document.createComment(t)
          }
          createText(t) {
            return document.createTextNode(t)
          }
          appendChild(t, e) {
            t.appendChild(e)
          }
          insertBefore(t, e, n) {
            t && t.insertBefore(e, n)
          }
          removeChild(t, e) {
            t && t.removeChild(e)
          }
          selectRootElement(t, e) {
            let n = "string" == typeof t ? document.querySelector(t) : t;
            if (!n) throw new Error(`The selector "${t}" did not match any elements`);
            return e || (n.textContent = ""), n
          }
          parentNode(t) {
            return t.parentNode
          }
          nextSibling(t) {
            return t.nextSibling
          }
          setAttribute(t, e, n, i) {
            if (i) {
              e = i + ":" + e;
              const r = yu[i];
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n)
            } else t.setAttribute(e, n)
          }
          removeAttribute(t, e, n) {
            if (n) {
              const i = yu[n];
              i ? t.removeAttributeNS(i, e) : t.removeAttribute(`${n}:${e}`)
            } else t.removeAttribute(e)
          }
          addClass(t, e) {
            t.classList.add(e)
          }
          removeClass(t, e) {
            t.classList.remove(e)
          }
          setStyle(t, e, n, i) {
            i & Fo.DashCase ? t.style.setProperty(e, n, i & Fo.Important ? "important" : "") : t.style[e] = n
          }
          removeStyle(t, e, n) {
            n & Fo.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
          }
          setProperty(t, e, n) {
            t[e] = n
          }
          setValue(t, e) {
            t.nodeValue = e
          }
          listen(t, e, n) {
            return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, xu(n)) : this.eventManager.addEventListener(t, e, xu(n))
          }
        }
        class ku extends Su {
          constructor(t, e, n, i) {
            super(t), this.component = n;
            const r = wu(i + "-" + n.id, n.styles, []);
            e.addStyles(r), this.contentAttr = "_ngcontent-%COMP%".replace(bu, i + "-" + n.id), this.hostAttr = function (t) {
              return "_nghost-%COMP%".replace(bu, t)
            }(i + "-" + n.id)
          }
          applyToHost(t) {
            super.setAttribute(t, this.hostAttr, "")
          }
          createElement(t, e) {
            const n = super.createElement(t, e);
            return super.setAttribute(n, this.contentAttr, ""), n
          }
        }
        class Pu extends Su {
          constructor(t, e, n, i) {
            super(t), this.sharedStylesHost = e, this.hostEl = n, this.component = i, this.shadowRoot = i.encapsulation === ce.ShadowDom ? n.attachShadow({
              mode: "open"
            }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
            const r = wu(i.id, i.styles, []);
            for (let s = 0; s < r.length; s++) {
              const t = document.createElement("style");
              t.textContent = r[s], this.shadowRoot.appendChild(t)
            }
          }
          nodeOrShadowRoot(t) {
            return t === this.hostEl ? this.shadowRoot : t
          }
          destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot)
          }
          appendChild(t, e) {
            return super.appendChild(this.nodeOrShadowRoot(t), e)
          }
          insertBefore(t, e, n) {
            return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
          }
          removeChild(t, e) {
            return super.removeChild(this.nodeOrShadowRoot(t), e)
          }
          parentNode(t) {
            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
          }
        }
        let Tu = (() => {
          class t extends gu {
            constructor(t) {
              super(t)
            }
            supports(t) {
              return !0
            }
            addEventListener(t, e, n) {
              return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n)
            }
            removeEventListener(t, e, n) {
              return t.removeEventListener(e, n)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(Jl))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Eu = ["alt", "control", "meta", "shift"],
          Lu = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
          },
          Au = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
          },
          Iu = {
            alt: t => t.altKey,
            control: t => t.ctrlKey,
            meta: t => t.metaKey,
            shift: t => t.shiftKey
          };
        let Ou = (() => {
          class t extends gu {
            constructor(t) {
              super(t)
            }
            supports(e) {
              return null != t.parseEventName(e)
            }
            addEventListener(e, n, i) {
              const r = t.parseEventName(n),
                s = t.eventCallback(r.fullKey, i, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(() => Yl().onAndCancel(e, r.domEventName, s))
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split("."),
                i = n.shift();
              if (0 === n.length || "keydown" !== i && "keyup" !== i) return null;
              const r = t._normalizeKey(n.pop());
              let s = "";
              if (Eu.forEach(t => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), s += t + ".")
                }), s += r, 0 != n.length || 0 === r.length) return null;
              const o = {};
              return o.domEventName = i, o.fullKey = s, o
            }
            static getEventFullKey(t) {
              let e = "",
                n = function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (e = t.keyIdentifier, null == e) return "Unidentified";
                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Au.hasOwnProperty(e) && (e = Au[e]))
                  }
                  return Lu[e] || e
                }(t);
              return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), Eu.forEach(i => {
                i != n && (0, Iu[i])(t) && (e += i + ".")
              }), e += n, e
            }
            static eventCallback(e, n, i) {
              return r => {
                t.getEventFullKey(r) === e && i.runGuarded(() => n(r))
              }
            }
            static _normalizeKey(t) {
              switch (t) {
                case "esc":
                  return "escape";
                default:
                  return t
              }
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(Jl))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Mu = Nl(ql, "browser", [{
            provide: il,
            useValue: "browser"
          }, {
            provide: nl,
            useValue: function () {
              lu.makeCurrent(), pu.init()
            },
            multi: !0
          }, {
            provide: Jl,
            useFactory: function () {
              return function (t) {
                Ie = t
              }(document), document
            },
            deps: []
          }]),
          Ru = [
            [], {
              provide: is,
              useValue: "root"
            }, {
              provide: oi,
              useFactory: function () {
                return new oi
              },
              deps: []
            }, {
              provide: fu,
              useClass: Tu,
              multi: !0,
              deps: [Jl, yl, il]
            }, {
              provide: fu,
              useClass: Ou,
              multi: !0,
              deps: [Jl]
            },
            [], {
              provide: Cu,
              useClass: Cu,
              deps: [mu, vu, Xa]
            }, {
              provide: No,
              useExisting: Cu
            }, {
              provide: _u,
              useExisting: vu
            }, {
              provide: vu,
              useClass: vu,
              deps: [Jl]
            }, {
              provide: Tl,
              useClass: Tl,
              deps: [yl]
            }, {
              provide: mu,
              useClass: mu,
              deps: [fu, yl]
            },
            []
          ];
        let Nu = (() => {
          class t {
            constructor(t) {
              if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
            }
            static withServerTransition(e) {
              return {
                ngModule: t,
                providers: [{
                  provide: Xa,
                  useValue: e.appId
                }, {
                  provide: hu,
                  useExisting: Xa
                }, du]
              }
            }
          }
          return t.\u0275mod = _e({
            type: t
          }), t.\u0275inj = pt({
            factory: function (e) {
              return new(e || t)(Yt(t, 12))
            },
            providers: Ru,
            imports: [su, Wl]
          }), t
        })();

        function Fu(...t) {
          let e = t[t.length - 1];
          return T(e) ? (t.pop(), V(t, e)) : G(t)
        }

        function Du(t, e) {
          return H(t, e, 1)
        }

        function ju(t, e) {
          return function (n) {
            return n.lift(new zu(t, e))
          }
        }
        "undefined" != typeof window && window;
        class zu {
          constructor(t, e) {
            this.predicate = t, this.thisArg = e
          }
          call(t, e) {
            return e.subscribe(new Vu(t, this.predicate, this.thisArg))
          }
        }
        class Vu extends f {
          constructor(t, e, n) {
            super(t), this.predicate = e, this.thisArg = n, this.count = 0
          }
          _next(t) {
            let e;
            try {
              e = this.predicate.call(this.thisArg, t, this.count++)
            } catch (n) {
              return void this.destination.error(n)
            }
            e && this.destination.next(t)
          }
        }
        class Uu {}
        class Hu {}
        class Bu {
          constructor(t) {
            this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? () => {
              this.headers = new Map, t.split("\n").forEach(t => {
                const e = t.indexOf(":");
                if (e > 0) {
                  const n = t.slice(0, e),
                    i = n.toLowerCase(),
                    r = t.slice(e + 1).trim();
                  this.maybeSetNormalizedName(n, i), this.headers.has(i) ? this.headers.get(i).push(r) : this.headers.set(i, [r])
                }
              })
            } : () => {
              this.headers = new Map, Object.keys(t).forEach(e => {
                let n = t[e];
                const i = e.toLowerCase();
                "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(i, n), this.maybeSetNormalizedName(e, i))
              })
            } : this.headers = new Map
          }
          has(t) {
            return this.init(), this.headers.has(t.toLowerCase())
          }
          get(t) {
            this.init();
            const e = this.headers.get(t.toLowerCase());
            return e && e.length > 0 ? e[0] : null
          }
          keys() {
            return this.init(), Array.from(this.normalizedNames.values())
          }
          getAll(t) {
            return this.init(), this.headers.get(t.toLowerCase()) || null
          }
          append(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "a"
            })
          }
          set(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "s"
            })
          }
          delete(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "d"
            })
          }
          maybeSetNormalizedName(t, e) {
            this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
          }
          init() {
            this.lazyInit && (this.lazyInit instanceof Bu ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
          }
          copyFrom(t) {
            t.init(), Array.from(t.headers.keys()).forEach(e => {
              this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e))
            })
          }
          clone(t) {
            const e = new Bu;
            return e.lazyInit = this.lazyInit && this.lazyInit instanceof Bu ? this.lazyInit : this, e.lazyUpdate = (this.lazyUpdate || []).concat([t]), e
          }
          applyUpdate(t) {
            const e = t.name.toLowerCase();
            switch (t.op) {
              case "a":
              case "s":
                let n = t.value;
                if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                this.maybeSetNormalizedName(t.name, e);
                const i = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                i.push(...n), this.headers.set(e, i);
                break;
              case "d":
                const r = t.value;
                if (r) {
                  let t = this.headers.get(e);
                  if (!t) return;
                  t = t.filter(t => -1 === r.indexOf(t)), 0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t)
                } else this.headers.delete(e), this.normalizedNames.delete(e)
            }
          }
          forEach(t) {
            this.init(), Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)))
          }
        }
        class Zu {
          encodeKey(t) {
            return $u(t)
          }
          encodeValue(t) {
            return $u(t)
          }
          decodeKey(t) {
            return decodeURIComponent(t)
          }
          decodeValue(t) {
            return decodeURIComponent(t)
          }
        }

        function $u(t) {
          return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }
        class qu {
          constructor(t = {}) {
            if (this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new Zu, t.fromString) {
              if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
              this.map = function (t, e) {
                const n = new Map;
                return t.length > 0 && t.split("&").forEach(t => {
                  const i = t.indexOf("="),
                    [r, s] = -1 == i ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, i)), e.decodeValue(t.slice(i + 1))],
                    o = n.get(r) || [];
                  o.push(s), n.set(r, o)
                }), n
              }(t.fromString, this.encoder)
            } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(e => {
              const n = t.fromObject[e];
              this.map.set(e, Array.isArray(n) ? n : [n])
            })) : this.map = null
          }
          has(t) {
            return this.init(), this.map.has(t)
          }
          get(t) {
            this.init();
            const e = this.map.get(t);
            return e ? e[0] : null
          }
          getAll(t) {
            return this.init(), this.map.get(t) || null
          }
          keys() {
            return this.init(), Array.from(this.map.keys())
          }
          append(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "a"
            })
          }
          set(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "s"
            })
          }
          delete(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "d"
            })
          }
          toString() {
            return this.init(), this.keys().map(t => {
              const e = this.encoder.encodeKey(t);
              return this.map.get(t).map(t => e + "=" + this.encoder.encodeValue(t)).join("&")
            }).filter(t => "" !== t).join("&")
          }
          clone(t) {
            const e = new qu({
              encoder: this.encoder
            });
            return e.cloneFrom = this.cloneFrom || this, e.updates = (this.updates || []).concat([t]), e
          }
          init() {
            null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => {
              switch (t.op) {
                case "a":
                case "s":
                  const e = ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                  e.push(t.value), this.map.set(t.param, e);
                  break;
                case "d":
                  if (void 0 === t.value) {
                    this.map.delete(t.param);
                    break
                  } {
                    let e = this.map.get(t.param) || [];
                    const n = e.indexOf(t.value); - 1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param)
                  }
              }
            }), this.cloneFrom = this.updates = null)
          }
        }

        function Gu(t) {
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
        }

        function Wu(t) {
          return "undefined" != typeof Blob && t instanceof Blob
        }

        function Ku(t) {
          return "undefined" != typeof FormData && t instanceof FormData
        }
        class Yu {
          constructor(t, e, n, i) {
            let r;
            if (this.url = e, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (t) {
                switch (t) {
                  case "DELETE":
                  case "GET":
                  case "HEAD":
                  case "OPTIONS":
                  case "JSONP":
                    return !1;
                  default:
                    return !0
                }
              }(this.method) || i ? (this.body = void 0 !== n ? n : null, r = i) : r = n, r && (this.reportProgress = !!r.reportProgress, this.withCredentials = !!r.withCredentials, r.responseType && (this.responseType = r.responseType), r.headers && (this.headers = r.headers), r.params && (this.params = r.params)), this.headers || (this.headers = new Bu), this.params) {
              const t = this.params.toString();
              if (0 === t.length) this.urlWithParams = e;
              else {
                const n = e.indexOf("?");
                this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
              }
            } else this.params = new qu, this.urlWithParams = e
          }
          serializeBody() {
            return null === this.body ? null : Gu(this.body) || Wu(this.body) || Ku(this.body) || "string" == typeof this.body ? this.body : this.body instanceof qu ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
          }
          detectContentTypeHeader() {
            return null === this.body || Ku(this.body) ? null : Wu(this.body) ? this.body.type || null : Gu(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof qu ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
          }
          clone(t = {}) {
            const e = t.method || this.method,
              n = t.url || this.url,
              i = t.responseType || this.responseType,
              r = void 0 !== t.body ? t.body : this.body,
              s = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
              o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
            let a = t.headers || this.headers,
              l = t.params || this.params;
            return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)), t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)), new Yu(e, n, r, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: i,
              withCredentials: s
            })
          }
        }
        const Ju = function () {
          var t = {
            Sent: 0,
            UploadProgress: 1,
            ResponseHeader: 2,
            DownloadProgress: 3,
            Response: 4,
            User: 5
          };
          return t[t.Sent] = "Sent", t[t.UploadProgress] = "UploadProgress", t[t.ResponseHeader] = "ResponseHeader", t[t.DownloadProgress] = "DownloadProgress", t[t.Response] = "Response", t[t.User] = "User", t
        }();
        class Qu {
          constructor(t, e = 200, n = "OK") {
            this.headers = t.headers || new Bu, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
          }
        }
        class Xu extends Qu {
          constructor(t = {}) {
            super(t), this.type = Ju.ResponseHeader
          }
          clone(t = {}) {
            return new Xu({
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class th extends Qu {
          constructor(t = {}) {
            super(t), this.type = Ju.Response, this.body = void 0 !== t.body ? t.body : null
          }
          clone(t = {}) {
            return new th({
              body: void 0 !== t.body ? t.body : this.body,
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class eh extends Qu {
          constructor(t) {
            super(t, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${t.url||"(unknown url)"}` : `Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
          }
        }

        function nh(t, e) {
          return {
            body: e,
            headers: t.headers,
            observe: t.observe,
            params: t.params,
            reportProgress: t.reportProgress,
            responseType: t.responseType,
            withCredentials: t.withCredentials
          }
        }
        let ih = (() => {
          class t {
            constructor(t) {
              this.handler = t
            }
            request(t, e, n = {}) {
              let i;
              if (t instanceof Yu) i = t;
              else {
                let r = void 0;
                r = n.headers instanceof Bu ? n.headers : new Bu(n.headers);
                let s = void 0;
                n.params && (s = n.params instanceof qu ? n.params : new qu({
                  fromObject: n.params
                })), i = new Yu(t, e, void 0 !== n.body ? n.body : null, {
                  headers: r,
                  params: s,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials
                })
              }
              const r = Fu(i).pipe(Du(t => this.handler.handle(t)));
              if (t instanceof Yu || "events" === n.observe) return r;
              const s = r.pipe(ju(t => t instanceof th));
              switch (n.observe || "body") {
                case "body":
                  switch (i.responseType) {
                    case "arraybuffer":
                      return s.pipe(D(t => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                        return t.body
                      }));
                    case "blob":
                      return s.pipe(D(t => {
                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                        return t.body
                      }));
                    case "text":
                      return s.pipe(D(t => {
                        if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                        return t.body
                      }));
                    case "json":
                    default:
                      return s.pipe(D(t => t.body))
                  }
                  case "response":
                    return s;
                  default:
                    throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
              }
            }
            delete(t, e = {}) {
              return this.request("DELETE", t, e)
            }
            get(t, e = {}) {
              return this.request("GET", t, e)
            }
            head(t, e = {}) {
              return this.request("HEAD", t, e)
            }
            jsonp(t, e) {
              return this.request("JSONP", t, {
                params: (new qu).append(e, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
              })
            }
            options(t, e = {}) {
              return this.request("OPTIONS", t, e)
            }
            patch(t, e, n = {}) {
              return this.request("PATCH", t, nh(n, e))
            }
            post(t, e, n = {}) {
              return this.request("POST", t, nh(n, e))
            }
            put(t, e, n = {}) {
              return this.request("PUT", t, nh(n, e))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Yt(Uu))
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class rh {
          constructor(t, e) {
            this.next = t, this.interceptor = e
          }
          handle(t) {
            return this.interceptor.intercept(t, this.next)
          }
        }
        const sh = new Vt("HTTP_INTERCEPTORS");
        let oh = (() => {
          class t {
            intercept(t, e) {
              return e.handle(t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = dt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const ah = /^\)\]\}',?\n/;
        class lh {}
        let ch = (() => {
            class t {
              constructor() {}
              build() {
                return new XMLHttpRequest
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          uh = (() => {
            class t {
              constructor(t) {
                this.xhrFactory = t
              }
              handle(t) {
                if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                return new b(e => {
                  const n = this.xhrFactory.build();
                  if (n.open(t.method, t.urlWithParams), t.withCredentials && (n.withCredentials = !0), t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))), t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                    const e = t.detectContentTypeHeader();
                    null !== e && n.setRequestHeader("Content-Type", e)
                  }
                  if (t.responseType) {
                    const e = t.responseType.toLowerCase();
                    n.responseType = "json" !== e ? e : "text"
                  }
                  const i = t.serializeBody();
                  let r = null;
                  const s = () => {
                      if (null !== r) return r;
                      const e = 1223 === n.status ? 204 : n.status,
                        i = n.statusText || "OK",
                        s = new Bu(n.getAllResponseHeaders()),
                        o = function (t) {
                          return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                        }(n) || t.url;
                      return r = new Xu({
                        headers: s,
                        status: e,
                        statusText: i,
                        url: o
                      }), r
                    },
                    o = () => {
                      let {
                        headers: i,
                        status: r,
                        statusText: o,
                        url: a
                      } = s(), l = null;
                      204 !== r && (l = void 0 === n.response ? n.responseText : n.response), 0 === r && (r = l ? 200 : 0);
                      let c = r >= 200 && r < 300;
                      if ("json" === t.responseType && "string" == typeof l) {
                        const t = l;
                        l = l.replace(ah, "");
                        try {
                          l = "" !== l ? JSON.parse(l) : null
                        } catch (u) {
                          l = t, c && (c = !1, l = {
                            error: u,
                            text: l
                          })
                        }
                      }
                      c ? (e.next(new th({
                        body: l,
                        headers: i,
                        status: r,
                        statusText: o,
                        url: a || void 0
                      })), e.complete()) : e.error(new eh({
                        error: l,
                        headers: i,
                        status: r,
                        statusText: o,
                        url: a || void 0
                      }))
                    },
                    a = t => {
                      const {
                        url: i
                      } = s(), r = new eh({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: i || void 0
                      });
                      e.error(r)
                    };
                  let l = !1;
                  const c = i => {
                      l || (e.next(s()), l = !0);
                      let r = {
                        type: Ju.DownloadProgress,
                        loaded: i.loaded
                      };
                      i.lengthComputable && (r.total = i.total), "text" === t.responseType && n.responseText && (r.partialText = n.responseText), e.next(r)
                    },
                    u = t => {
                      let n = {
                        type: Ju.UploadProgress,
                        loaded: t.loaded
                      };
                      t.lengthComputable && (n.total = t.total), e.next(n)
                    };
                  return n.addEventListener("load", o), n.addEventListener("error", a), t.reportProgress && (n.addEventListener("progress", c), null !== i && n.upload && n.upload.addEventListener("progress", u)), n.send(i), e.next({
                    type: Ju.Sent
                  }), () => {
                    n.removeEventListener("error", a), n.removeEventListener("load", o), t.reportProgress && (n.removeEventListener("progress", c), null !== i && n.upload && n.upload.removeEventListener("progress", u)), n.abort()
                  }
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(lh))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const hh = new Vt("XSRF_COOKIE_NAME"),
          dh = new Vt("XSRF_HEADER_NAME");
        class ph {}
        let fh = (() => {
            class t {
              constructor(t, e, n) {
                this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
              }
              getToken() {
                if ("server" === this.platform) return null;
                const t = this.doc.cookie || "";
                return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Gc(t, this.cookieName), this.lastCookieString = t), this.lastToken
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(Jl), Yt(il), Yt(hh))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          mh = (() => {
            class t {
              constructor(t, e) {
                this.tokenService = t, this.headerName = e
              }
              intercept(t, e) {
                const n = t.url.toLowerCase();
                if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                const i = this.tokenService.getToken();
                return null === i || t.headers.has(this.headerName) || (t = t.clone({
                  headers: t.headers.set(this.headerName, i)
                })), e.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(ph), Yt(dh))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          gh = (() => {
            class t {
              constructor(t, e) {
                this.backend = t, this.injector = e, this.chain = null
              }
              handle(t) {
                if (null === this.chain) {
                  const t = this.injector.get(sh, []);
                  this.chain = t.reduceRight((t, e) => new rh(t, e), this.backend)
                }
                return this.chain.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(Hu), Yt(_s))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          _h = (() => {
            class t {
              static disable() {
                return {
                  ngModule: t,
                  providers: [{
                    provide: mh,
                    useClass: oh
                  }]
                }
              }
              static withOptions(e = {}) {
                return {
                  ngModule: t,
                  providers: [e.cookieName ? {
                    provide: hh,
                    useValue: e.cookieName
                  } : [], e.headerName ? {
                    provide: dh,
                    useValue: e.headerName
                  } : []]
                }
              }
            }
            return t.\u0275mod = _e({
              type: t
            }), t.\u0275inj = pt({
              factory: function (e) {
                return new(e || t)
              },
              providers: [mh, {
                provide: sh,
                useExisting: mh,
                multi: !0
              }, {
                provide: ph,
                useClass: fh
              }, {
                provide: hh,
                useValue: "XSRF-TOKEN"
              }, {
                provide: dh,
                useValue: "X-XSRF-TOKEN"
              }]
            }), t
          })(),
          vh = (() => {
            class t {}
            return t.\u0275mod = _e({
              type: t
            }), t.\u0275inj = pt({
              factory: function (e) {
                return new(e || t)
              },
              providers: [ih, {
                provide: Uu,
                useClass: gh
              }, uh, {
                provide: Hu,
                useExisting: uh
              }, ch, {
                provide: lh,
                useExisting: ch
              }],
              imports: [
                [_h.withOptions({
                  cookieName: "XSRF-TOKEN",
                  headerName: "X-XSRF-TOKEN"
                })]
              ]
            }), t
          })(),
          yh = (() => {
            class t {
              constructor(t) {
                this.injector = t
              }
              intercept(t, e) {
                const n = localStorage.getItem("token");
                if (n) {
                  const i = t.clone({
                    headers: t.headers.set("Authorization", `Bearer ${n}`)
                  });
                  return e.handle(i)
                }
                return e.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Yt(_s))
            }, t.\u0275prov = dt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        class bh extends k {
          constructor(t) {
            super(), this._value = t
          }
          get value() {
            return this.getValue()
          }
          _subscribe(t) {
            const e = super._subscribe(t);
            return e && !e.closed && t.next(this._value), e
          }
          getValue() {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new x;
            return this._value
          }
          next(t) {
            super.next(this._value = t)
          }
        }
        const wh = (() => {
            function t() {
              return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            return t.prototype = Object.create(Error.prototype), t
          })(),
          xh = {};
        class Ch {
          constructor(t) {
            this.resultSelector = t
          }
          call(t, e) {
            return e.subscribe(new Sh(t, this.resultSelector))
          }
        }
        class Sh extends F {
          constructor(t, e) {
            super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
          }
          _next(t) {
            this.values.push(xh), this.observables.push(t)
          }
          _complete() {
            const t = this.observables,
              e = t.length;
            if (0 === e) this.destination.complete();
            else {
              this.active = e, this.toRespond = e;
              for (let n = 0; n < e; n++) {
                const e = t[n];
                this.add(N(this, e, e, n))
              }
            }
          }
          notifyComplete(t) {
            0 == (this.active -= 1) && this.destination.complete()
          }
          notifyNext(t, e, n, i, r) {
            const s = this.values,
              o = this.toRespond ? s[n] === xh ? --this.toRespond : this.toRespond : 0;
            s[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()))
          }
          _tryResultSelector(t) {
            let e;
            try {
              e = this.resultSelector.apply(this, t)
            } catch (n) {
              return void this.destination.error(n)
            }
            this.destination.next(e)
          }
        }
        const kh = new b(t => t.complete());

        function Ph(t) {
          return t ? function (t) {
            return new b(e => t.schedule(() => e.complete()))
          }(t) : kh
        }

        function Th(t) {
          return new b(e => {
            let n;
            try {
              n = t()
            } catch (i) {
              return void e.error(i)
            }
            return (n ? U(n) : Ph()).subscribe(e)
          })
        }

        function Eh() {
          return q(1)
        }
        const Lh = (() => {
          function t() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();

        function Ah(t) {
          return function (e) {
            return 0 === t ? Ph() : e.lift(new Ih(t))
          }
        }
        class Ih {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new Lh
          }
          call(t, e) {
            return e.subscribe(new Oh(t, this.total))
          }
        }
        class Oh extends f {
          constructor(t, e) {
            super(t), this.total = e, this.ring = new Array, this.count = 0
          }
          _next(t) {
            const e = this.ring,
              n = this.total,
              i = this.count++;
            e.length < n ? e.push(t) : e[i % n] = t
          }
          _complete() {
            const t = this.destination;
            let e = this.count;
            if (e > 0) {
              const n = this.count >= this.total ? this.total : this.count,
                i = this.ring;
              for (let r = 0; r < n; r++) {
                const r = e++ % n;
                t.next(i[r])
              }
            }
            t.complete()
          }
        }

        function Mh(t = Fh) {
          return e => e.lift(new Rh(t))
        }
        class Rh {
          constructor(t) {
            this.errorFactory = t
          }
          call(t, e) {
            return e.subscribe(new Nh(t, this.errorFactory))
          }
        }
        class Nh extends f {
          constructor(t, e) {
            super(t), this.errorFactory = e, this.hasValue = !1
          }
          _next(t) {
            this.hasValue = !0, this.destination.next(t)
          }
          _complete() {
            if (this.hasValue) return this.destination.complete(); {
              let e;
              try {
                e = this.errorFactory()
              } catch (t) {
                e = t
              }
              this.destination.error(e)
            }
          }
        }

        function Fh() {
          return new wh
        }

        function Dh(t = null) {
          return e => e.lift(new jh(t))
        }
        class jh {
          constructor(t) {
            this.defaultValue = t
          }
          call(t, e) {
            return e.subscribe(new zh(t, this.defaultValue))
          }
        }
        class zh extends f {
          constructor(t, e) {
            super(t), this.defaultValue = e, this.isEmpty = !0
          }
          _next(t) {
            this.isEmpty = !1, this.destination.next(t)
          }
          _complete() {
            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
          }
        }

        function Vh(t, e) {
          const n = arguments.length >= 2;
          return i => i.pipe(t ? ju((e, n) => t(e, n, i)) : $, Ah(1), n ? Dh(e) : Mh(() => new wh))
        }

        function Uh(t) {
          return function (e) {
            const n = new Hh(t),
              i = e.lift(n);
            return n.caught = i
          }
        }
        class Hh {
          constructor(t) {
            this.selector = t
          }
          call(t, e) {
            return e.subscribe(new Bh(t, this.selector, this.caught))
          }
        }
        class Bh extends F {
          constructor(t, e, n) {
            super(t), this.selector = e, this.caught = n
          }
          error(t) {
            if (!this.isStopped) {
              let n;
              try {
                n = this.selector(t, this.caught)
              } catch (e) {
                return void super.error(e)
              }
              this._unsubscribeAndRecycle();
              const i = new E(this, void 0, void 0);
              this.add(i);
              const r = N(this, n, void 0, void 0, i);
              r !== i && this.add(r)
            }
          }
        }

        function Zh(t) {
          return e => 0 === t ? Ph() : e.lift(new $h(t))
        }
        class $h {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new Lh
          }
          call(t, e) {
            return e.subscribe(new qh(t, this.total))
          }
        }
        class qh extends f {
          constructor(t, e) {
            super(t), this.total = e, this.count = 0
          }
          _next(t) {
            const e = this.total,
              n = ++this.count;
            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
          }
        }

        function Gh(t, e) {
          const n = arguments.length >= 2;
          return i => i.pipe(t ? ju((e, n) => t(e, n, i)) : $, Zh(1), n ? Dh(e) : Mh(() => new wh))
        }
        class Wh {
          constructor(t, e, n) {
            this.predicate = t, this.thisArg = e, this.source = n
          }
          call(t, e) {
            return e.subscribe(new Kh(t, this.predicate, this.thisArg, this.source))
          }
        }
        class Kh extends f {
          constructor(t, e, n, i) {
            super(t), this.predicate = e, this.thisArg = n, this.source = i, this.index = 0, this.thisArg = n || this
          }
          notifyComplete(t) {
            this.destination.next(t), this.destination.complete()
          }
          _next(t) {
            let e = !1;
            try {
              e = this.predicate.call(this.thisArg, t, this.index++, this.source)
            } catch (n) {
              return void this.destination.error(n)
            }
            e || this.notifyComplete(!1)
          }
          _complete() {
            this.notifyComplete(!0)
          }
        }

        function Yh(t, e) {
          return "function" == typeof e ? n => n.pipe(Yh((n, i) => U(t(n, i)).pipe(D((t, r) => e(n, t, i, r))))) : e => e.lift(new Jh(t))
        }
        class Jh {
          constructor(t) {
            this.project = t
          }
          call(t, e) {
            return e.subscribe(new Qh(t, this.project))
          }
        }
        class Qh extends F {
          constructor(t, e) {
            super(t), this.project = e, this.index = 0
          }
          _next(t) {
            let e;
            const n = this.index++;
            try {
              e = this.project(t, n)
            } catch (i) {
              return void this.destination.error(i)
            }
            this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const i = this.innerSubscription;
            i && i.unsubscribe();
            const r = new E(this, e, n),
              s = this.destination;
            s.add(r), this.innerSubscription = N(this, t, void 0, void 0, r), this.innerSubscription !== r && s.add(this.innerSubscription)
          }
          _complete() {
            const {
              innerSubscription: t
            } = this;
            t && !t.closed || super._complete(), this.unsubscribe()
          }
          _unsubscribe() {
            this.innerSubscription = null
          }
          notifyComplete(t) {
            this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete()
          }
          notifyNext(t, e, n, i, r) {
            this.destination.next(e)
          }
        }

        function Xh(...t) {
          return Eh()(Fu(...t))
        }

        function td(t, e) {
          let n = !1;
          return arguments.length >= 2 && (n = !0),
            function (i) {
              return i.lift(new ed(t, e, n))
            }
        }
        class ed {
          constructor(t, e, n = !1) {
            this.accumulator = t, this.seed = e, this.hasSeed = n
          }
          call(t, e) {
            return e.subscribe(new nd(t, this.accumulator, this.seed, this.hasSeed))
          }
        }
        class nd extends f {
          constructor(t, e, n, i) {
            super(t), this.accumulator = e, this._seed = n, this.hasSeed = i, this.index = 0
          }
          get seed() {
            return this._seed
          }
          set seed(t) {
            this.hasSeed = !0, this._seed = t
          }
          _next(t) {
            if (this.hasSeed) return this._tryNext(t);
            this.seed = t, this.destination.next(t)
          }
          _tryNext(t) {
            const e = this.index++;
            let n;
            try {
              n = this.accumulator(this.seed, t, e)
            } catch (i) {
              this.destination.error(i)
            }
            this.seed = n, this.destination.next(n)
          }
        }

        function id(t, e, n) {
          return function (i) {
            return i.lift(new rd(t, e, n))
          }
        }
        class rd {
          constructor(t, e, n) {
            this.nextOrObserver = t, this.error = e, this.complete = n
          }
          call(t, e) {
            return e.subscribe(new sd(t, this.nextOrObserver, this.error, this.complete))
          }
        }
        class sd extends f {
          constructor(t, e, n, r) {
            super(t), this._tapNext = _, this._tapError = _, this._tapComplete = _, this._tapError = n || _, this._tapComplete = r || _, i(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || _, this._tapError = e.error || _, this._tapComplete = e.complete || _)
          }
          _next(t) {
            try {
              this._tapNext.call(this._context, t)
            } catch (e) {
              return void this.destination.error(e)
            }
            this.destination.next(t)
          }
          _error(t) {
            try {
              this._tapError.call(this._context, t)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.destination.error(t)
          }
          _complete() {
            try {
              this._tapComplete.call(this._context)
            } catch (t) {
              return void this.destination.error(t)
            }
            return this.destination.complete()
          }
        }
        class od {
          constructor(t) {
            this.callback = t
          }
          call(t, e) {
            return e.subscribe(new ad(t, this.callback))
          }
        }
        class ad extends f {
          constructor(t, e) {
            super(t), this.add(new h(e))
          }
        }
        class ld {
          constructor(t, e) {
            this.id = t, this.url = e
          }
        }
        class cd extends ld {
          constructor(t, e, n = "imperative", i = null) {
            super(t, e), this.navigationTrigger = n, this.restoredState = i
          }
          toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
          }
        }
        class ud extends ld {
          constructor(t, e, n) {
            super(t, e), this.urlAfterRedirects = n
          }
          toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
          }
        }
        class hd extends ld {
          constructor(t, e, n) {
            super(t, e), this.reason = n
          }
          toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
          }
        }
        class dd extends ld {
          constructor(t, e, n) {
            super(t, e), this.error = n
          }
          toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
          }
        }
        class pd extends ld {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class fd extends ld {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class md extends ld {
          constructor(t, e, n, i, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = i, this.shouldActivate = r
          }
          toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
          }
        }
        class gd extends ld {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class _d extends ld {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class vd {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
          }
        }
        class yd {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
          }
        }
        class bd {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class wd {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class xd {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Cd {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Sd {
          constructor(t, e, n) {
            this.routerEvent = t, this.position = e, this.anchor = n
          }
          toString() {
            return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
          }
        }
        let kd = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275cmp = pe({
            type: t,
            selectors: [
              ["ng-component"]
            ],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && Bs(0, "router-outlet")
            },
            directives: function () {
              return [If]
            },
            encapsulation: 2
          }), t
        })();
        class Pd {
          constructor(t) {
            this.params = t || {}
          }
          has(t) {
            return this.params.hasOwnProperty(t)
          }
          get(t) {
            if (this.has(t)) {
              const e = this.params[t];
              return Array.isArray(e) ? e[0] : e
            }
            return null
          }
          getAll(t) {
            if (this.has(t)) {
              const e = this.params[t];
              return Array.isArray(e) ? e : [e]
            }
            return []
          }
          get keys() {
            return Object.keys(this.params)
          }
        }

        function Td(t) {
          return new Pd(t)
        }

        function Ed(t) {
          const e = Error("NavigationCancelingError: " + t);
          return e.ngNavigationCancelingError = !0, e
        }

        function Ld(t, e, n) {
          const i = n.path.split("/");
          if (i.length > t.length) return null;
          if ("full" === n.pathMatch && (e.hasChildren() || i.length < t.length)) return null;
          const r = {};
          for (let s = 0; s < i.length; s++) {
            const e = i[s],
              n = t[s];
            if (e.startsWith(":")) r[e.substring(1)] = n;
            else if (e !== n.path) return null
          }
          return {
            consumed: t.slice(0, i.length),
            posParams: r
          }
        }
        class Ad {
          constructor(t, e) {
            this.routes = t, this.module = e
          }
        }

        function Id(t, e = "") {
          for (let n = 0; n < t.length; n++) {
            const i = t[n];
            Od(i, Md(e, i))
          }
        }

        function Od(t, e) {
          if (!t) throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);
          if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
          if (!t.component && !t.children && !t.loadChildren && t.outlet && "primary" !== t.outlet) throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`);
          if (t.redirectTo && t.children) throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
          if (t.redirectTo && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
          if (t.children && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
          if (t.redirectTo && t.component) throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
          if (t.path && t.matcher) throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
          if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`);
          if (void 0 === t.path && void 0 === t.matcher) throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`);
          if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
          if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);
          if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
          t.children && Id(t.children, e)
        }

        function Md(t, e) {
          return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
        }

        function Rd(t) {
          const e = t.children && t.children.map(Rd),
            n = e ? Object.assign(Object.assign({}, t), {
              children: e
            }) : Object.assign({}, t);
          return !n.component && (e || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = kd), n
        }

        function Nd(t, e) {
          const n = Object.keys(t),
            i = Object.keys(e);
          if (!n || !i || n.length != i.length) return !1;
          let r;
          for (let s = 0; s < n.length; s++)
            if (r = n[s], !Fd(t[r], e[r])) return !1;
          return !0
        }

        function Fd(t, e) {
          return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e
        }

        function Dd(t) {
          return Array.prototype.concat.apply([], t)
        }

        function jd(t) {
          return t.length > 0 ? t[t.length - 1] : null
        }

        function zd(t, e) {
          for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
        }

        function Vd(t) {
          return qs(t) ? t : $s(t) ? U(Promise.resolve(t)) : Fu(t)
        }

        function Ud(t, e, n) {
          return n ? function (t, e) {
            return Nd(t, e)
          }(t.queryParams, e.queryParams) && function t(e, n) {
            if (!$d(e.segments, n.segments)) return !1;
            if (e.numberOfChildren !== n.numberOfChildren) return !1;
            for (const i in n.children) {
              if (!e.children[i]) return !1;
              if (!t(e.children[i], n.children[i])) return !1
            }
            return !0
          }(t.root, e.root) : function (t, e) {
            return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => Fd(t[n], e[n]))
          }(t.queryParams, e.queryParams) && function t(e, n) {
            return function e(n, i, r) {
              if (n.segments.length > r.length) return !!$d(n.segments.slice(0, r.length), r) && !i.hasChildren();
              if (n.segments.length === r.length) {
                if (!$d(n.segments, r)) return !1;
                for (const e in i.children) {
                  if (!n.children[e]) return !1;
                  if (!t(n.children[e], i.children[e])) return !1
                }
                return !0
              } {
                const t = r.slice(0, n.segments.length),
                  s = r.slice(n.segments.length);
                return !!$d(n.segments, t) && !!n.children.primary && e(n.children.primary, i, s)
              }
            }(e, n, n.segments)
          }(t.root, e.root)
        }
        class Hd {
          constructor(t, e, n) {
            this.root = t, this.queryParams = e, this.fragment = n
          }
          get queryParamMap() {
            return this._queryParamMap || (this._queryParamMap = Td(this.queryParams)), this._queryParamMap
          }
          toString() {
            return Kd.serialize(this)
          }
        }
        class Bd {
          constructor(t, e) {
            this.segments = t, this.children = e, this.parent = null, zd(e, (t, e) => t.parent = this)
          }
          hasChildren() {
            return this.numberOfChildren > 0
          }
          get numberOfChildren() {
            return Object.keys(this.children).length
          }
          toString() {
            return Yd(this)
          }
        }
        class Zd {
          constructor(t, e) {
            this.path = t, this.parameters = e
          }
          get parameterMap() {
            return this._parameterMap || (this._parameterMap = Td(this.parameters)), this._parameterMap
          }
          toString() {
            return np(this)
          }
        }

        function $d(t, e) {
          return t.length === e.length && t.every((t, n) => t.path === e[n].path)
        }

        function qd(t, e) {
          let n = [];
          return zd(t.children, (t, i) => {
            "primary" === i && (n = n.concat(e(t, i)))
          }), zd(t.children, (t, i) => {
            "primary" !== i && (n = n.concat(e(t, i)))
          }), n
        }
        class Gd {}
        class Wd {
          parse(t) {
            const e = new ap(t);
            return new Hd(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
          }
          serialize(t) {
            var e;
            return `${`/${function t(e,n){if(!e.hasChildren())return Yd(e);if(n){const n=e.children.primary?t(e.children.primary,!1):"",i=[];return zd(e.children,(e,n)=>{"primary"!==n&&i.push(`${n}:${t(e,!1)}`)}),i.length>0?`${n}(${i.join("//")})`: n
          } {
            const n = qd(e, (n, i) => "primary" === i ? [t(e.children.primary, !1)] : [`${i}:${t(n,!1)}`]);
            return `${Yd(e)}/(${n.join("//")})`
          }
        }(t.root, !0)
      }
      `}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${Qd(e)}=${Qd(t)}`).join("&"):`${Qd(e)}=${Qd(n)}`});return e.length?` ? $ {
        e.join("&")
      }
      `:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}`
    }
  }
  const Kd = new Wd;

  function Yd(t) {
    return t.segments.map(t => np(t)).join("/")
  }

  function Jd(t) {
    return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
  }

  function Qd(t) {
    return Jd(t).replace(/%3B/gi, ";")
  }

  function Xd(t) {
    return Jd(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
  }

  function tp(t) {
    return decodeURIComponent(t)
  }

  function ep(t) {
    return tp(t.replace(/\+/g, "%20"))
  }

  function np(t) {
    return `${Xd(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${Xd(t)}=${Xd(e[t])}`).join("")}`;
    var e
  }
  const ip = /^[^\/()?;=#]+/;

  function rp(t) {
    const e = t.match(ip);
    return e ? e[0] : ""
  }
  const sp = /^[^=?&#]+/, op = /^[^?&#]+/; class ap {
    constructor(t) {
      this.url = t, this.remaining = t
    }
    parseRootSegment() {
      return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Bd([], {}) : new Bd([], this.parseChildren())
    }
    parseQueryParams() {
      const t = {};
      if (this.consumeOptional("?"))
        do {
          this.parseQueryParam(t)
        } while (this.consumeOptional("&"));
      return t
    }
    parseFragment() {
      return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
      if ("" === this.remaining) return {};
      this.consumeOptional("/");
      const t = [];
      for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
      let e = {};
      this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
      let n = {};
      return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Bd(t, e)), n
    }
    parseSegment() {
      const t = rp(this.remaining);
      if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
      return this.capture(t), new Zd(tp(t), this.parseMatrixParams())
    }
    parseMatrixParams() {
      const t = {};
      for (; this.consumeOptional(";");) this.parseParam(t);
      return t
    }
    parseParam(t) {
      const e = rp(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = rp(this.remaining);
        t && (n = t, this.capture(n))
      }
      t[tp(e)] = tp(n)
    }
    parseQueryParam(t) {
      const e = function (t) {
        const e = t.match(sp);
        return e ? e[0] : ""
      }(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = function (t) {
          const e = t.match(op);
          return e ? e[0] : ""
        }(this.remaining);
        t && (n = t, this.capture(n))
      }
      const i = ep(e),
        r = ep(n);
      if (t.hasOwnProperty(i)) {
        let e = t[i];
        Array.isArray(e) || (e = [e], t[i] = e), e.push(r)
      } else t[i] = r
    }
    parseParens(t) {
      const e = {};
      for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        const n = rp(this.remaining),
          i = this.remaining[n.length];
        if ("/" !== i && ")" !== i && ";" !== i) throw new Error(`Cannot parse url '${this.url}'`);
        let r = void 0;
        n.indexOf(":") > -1 ? (r = n.substr(0, n.indexOf(":")), this.capture(r), this.capture(":")) : t && (r = "primary");
        const s = this.parseChildren();
        e[r] = 1 === Object.keys(s).length ? s.primary : new Bd([], s), this.consumeOptional("//")
      }
      return e
    }
    peekStartsWith(t) {
      return this.remaining.startsWith(t)
    }
    consumeOptional(t) {
      return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
    }
    capture(t) {
      if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`)
    }
  }
  class lp {
    constructor(t) {
      this._root = t
    }
    get root() {
      return this._root.value
    }
    parent(t) {
      const e = this.pathFromRoot(t);
      return e.length > 1 ? e[e.length - 2] : null
    }
    children(t) {
      const e = cp(t, this._root);
      return e ? e.children.map(t => t.value) : []
    }
    firstChild(t) {
      const e = cp(t, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null
    }
    siblings(t) {
      const e = up(t, this._root);
      return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t)
    }
    pathFromRoot(t) {
      return up(t, this._root).map(t => t.value)
    }
  }

  function cp(t, e) {
    if (t === e.value) return e;
    for (const n of e.children) {
      const e = cp(t, n);
      if (e) return e
    }
    return null
  }

  function up(t, e) {
    if (t === e.value) return [e];
    for (const n of e.children) {
      const i = up(t, n);
      if (i.length) return i.unshift(e), i
    }
    return []
  }
  class hp {
    constructor(t, e) {
      this.value = t, this.children = e
    }
    toString() {
      return `TreeNode(${this.value})`
    }
  }

  function dp(t) {
    const e = {};
    return t && t.children.forEach(t => e[t.value.outlet] = t), e
  }
  class pp extends lp {
    constructor(t, e) {
      super(t), this.snapshot = e, yp(this, t)
    }
    toString() {
      return this.snapshot.toString()
    }
  }

  function fp(t, e) {
    const n = function (t, e) {
        const n = new _p([], {}, {}, "", {}, "primary", e, null, t.root, -1, {});
        return new vp("", new hp(n, []))
      }(t, e),
      i = new bh([new Zd("", {})]),
      r = new bh({}),
      s = new bh({}),
      o = new bh({}),
      a = new bh(""),
      l = new mp(i, r, o, a, s, "primary", e, n.root);
    return l.snapshot = n.root, new pp(new hp(l, []), n)
  }
  class mp {
    constructor(t, e, n, i, r, s, o, a) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = r, this.outlet = s, this.component = o, this._futureSnapshot = a
    }
    get routeConfig() {
      return this._futureSnapshot.routeConfig
    }
    get root() {
      return this._routerState.root
    }
    get parent() {
      return this._routerState.parent(this)
    }
    get firstChild() {
      return this._routerState.firstChild(this)
    }
    get children() {
      return this._routerState.children(this)
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = this.params.pipe(D(t => Td(t)))), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(D(t => Td(t)))), this._queryParamMap
    }
    toString() {
      return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
  }

  function gp(t, e = "emptyOnly") {
    const n = t.pathFromRoot;
    let i = 0;
    if ("always" !== e)
      for (i = n.length - 1; i >= 1;) {
        const t = n[i],
          e = n[i - 1];
        if (t.routeConfig && "" === t.routeConfig.path) i--;
        else {
          if (e.component) break;
          i--
        }
      }
    return function (t) {
      return t.reduce((t, e) => ({
        params: Object.assign(Object.assign({}, t.params), e.params),
        data: Object.assign(Object.assign({}, t.data), e.data),
        resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
      }), {
        params: {},
        data: {},
        resolve: {}
      })
    }(n.slice(i))
  }
  class _p {
    constructor(t, e, n, i, r, s, o, a, l, c, u) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = r, this.outlet = s, this.component = o, this.routeConfig = a, this._urlSegment = l, this._lastPathIndex = c, this._resolve = u
    }
    get root() {
      return this._routerState.root
    }
    get parent() {
      return this._routerState.parent(this)
    }
    get firstChild() {
      return this._routerState.firstChild(this)
    }
    get children() {
      return this._routerState.children(this)
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = Td(this.params)), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = Td(this.queryParams)), this._queryParamMap
    }
    toString() {
      return `Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
    }
  }
  class vp extends lp {
    constructor(t, e) {
      super(e), this.url = t, yp(this, e)
    }
    toString() {
      return bp(this._root)
    }
  }

  function yp(t, e) {
    e.value._routerState = t, e.children.forEach(e => yp(t, e))
  }

  function bp(t) {
    const e = t.children.length > 0 ? ` { ${t.children.map(bp).join(", ")} } ` : "";
    return `${t.value}${e}`
  }

  function wp(t) {
    if (t.snapshot) {
      const e = t.snapshot,
        n = t._futureSnapshot;
      t.snapshot = n, Nd(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), Nd(e.params, n.params) || t.params.next(n.params),
        function (t, e) {
          if (t.length !== e.length) return !1;
          for (let n = 0; n < t.length; ++n)
            if (!Nd(t[n], e[n])) return !1;
          return !0
        }(e.url, n.url) || t.url.next(n.url), Nd(e.data, n.data) || t.data.next(n.data)
    } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
  }

  function xp(t, e) {
    var n, i;
    return Nd(t.params, e.params) && $d(n = t.url, i = e.url) && n.every((t, e) => Nd(t.parameters, i[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || xp(t.parent, e.parent))
  }

  function Cp(t) {
    return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
  }

  function Sp(t, e, n, i, r) {
    let s = {};
    return i && zd(i, (t, e) => {
      s[e] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}`
    }), new Hd(n.root === t ? e : function t(e, n, i) {
      const r = {};
      return zd(e.children, (e, s) => {
        r[s] = e === n ? i : t(e, n, i)
      }), new Bd(e.segments, r)
    }(n.root, t, e), s, r)
  }
  class kp {
    constructor(t, e, n) {
      if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && Cp(n[0])) throw new Error("Root segment cannot have matrix parameters");
      const i = n.find(t => "object" == typeof t && null != t && t.outlets);
      if (i && i !== jd(n)) throw new Error("{outlets:{}} has to be the last command")
    }
    toRoot() {
      return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
    }
  }
  class Pp {
    constructor(t, e, n) {
      this.segmentGroup = t, this.processChildren = e, this.index = n
    }
  }

  function Tp(t) {
    return "object" == typeof t && null != t && t.outlets ? t.outlets.primary : `${t}`
  }

  function Ep(t, e, n) {
    if (t || (t = new Bd([], {})), 0 === t.segments.length && t.hasChildren()) return Lp(t, e, n);
    const i = function (t, e, n) {
        let i = 0,
          r = e;
        const s = {
          match: !1,
          pathIndex: 0,
          commandIndex: 0
        };
        for (; r < t.segments.length;) {
          if (i >= n.length) return s;
          const e = t.segments[r],
            o = Tp(n[i]),
            a = i < n.length - 1 ? n[i + 1] : null;
          if (r > 0 && void 0 === o) break;
          if (o && a && "object" == typeof a && void 0 === a.outlets) {
            if (!Mp(o, a, e)) return s;
            i += 2
          } else {
            if (!Mp(o, {}, e)) return s;
            i++
          }
          r++
        }
        return {
          match: !0,
          pathIndex: r,
          commandIndex: i
        }
      }(t, e, n),
      r = n.slice(i.commandIndex);
    if (i.match && i.pathIndex < t.segments.length) {
      const e = new Bd(t.segments.slice(0, i.pathIndex), {});
      return e.children.primary = new Bd(t.segments.slice(i.pathIndex), t.children), Lp(e, 0, r)
    }
    return i.match && 0 === r.length ? new Bd(t.segments, {}) : i.match && !t.hasChildren() ? Ap(t, e, n) : i.match ? Lp(t, 0, r) : Ap(t, e, n)
  }

  function Lp(t, e, n) {
    if (0 === n.length) return new Bd(t.segments, {}); {
      const i = function (t) {
          return "object" != typeof t[0] || void 0 === t[0].outlets ? {
            primary: t
          } : t[0].outlets
        }(n),
        r = {};
      return zd(i, (n, i) => {
        null !== n && (r[i] = Ep(t.children[i], e, n))
      }), zd(t.children, (t, e) => {
        void 0 === i[e] && (r[e] = t)
      }), new Bd(t.segments, r)
    }
  }

  function Ap(t, e, n) {
    const i = t.segments.slice(0, e);
    let r = 0;
    for (; r < n.length;) {
      if ("object" == typeof n[r] && void 0 !== n[r].outlets) {
        const t = Ip(n[r].outlets);
        return new Bd(i, t)
      }
      if (0 === r && Cp(n[0])) {
        i.push(new Zd(t.segments[e].path, n[0])), r++;
        continue
      }
      const s = Tp(n[r]),
        o = r < n.length - 1 ? n[r + 1] : null;
      s && o && Cp(o) ? (i.push(new Zd(s, Op(o))), r += 2) : (i.push(new Zd(s, {})), r++)
    }
    return new Bd(i, {})
  }

  function Ip(t) {
    const e = {};
    return zd(t, (t, n) => {
      null !== t && (e[n] = Ap(new Bd([], {}), 0, t))
    }), e
  }

  function Op(t) {
    const e = {};
    return zd(t, (t, n) => e[n] = `${t}`), e
  }

  function Mp(t, e, n) {
    return t == n.path && Nd(e, n.parameters)
  }
  class Rp {
    constructor(t, e, n, i) {
      this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = i
    }
    activate(t) {
      const e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, t), wp(this.futureState.root), this.activateChildRoutes(e, n, t)
    }
    deactivateChildRoutes(t, e, n) {
      const i = dp(e);
      t.children.forEach(t => {
        const e = t.value.outlet;
        this.deactivateRoutes(t, i[e], n), delete i[e]
      }), zd(i, (t, e) => {
        this.deactivateRouteAndItsChildren(t, n)
      })
    }
    deactivateRoutes(t, e, n) {
      const i = t.value,
        r = e ? e.value : null;
      if (i === r)
        if (i.component) {
          const r = n.getContext(i.outlet);
          r && this.deactivateChildRoutes(t, e, r.children)
        } else this.deactivateChildRoutes(t, e, n);
      else r && this.deactivateRouteAndItsChildren(e, n)
    }
    deactivateRouteAndItsChildren(t, e) {
      this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
    }
    detachAndStoreRouteSubtree(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n && n.outlet) {
        const e = n.outlet.detach(),
          i = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: e,
          route: t,
          contexts: i
        })
      }
    }
    deactivateRouteAndOutlet(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n) {
        const i = dp(t),
          r = t.value.component ? n.children : e;
        zd(i, (t, e) => this.deactivateRouteAndItsChildren(t, r)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated())
      }
    }
    activateChildRoutes(t, e, n) {
      const i = dp(e);
      t.children.forEach(t => {
        this.activateRoutes(t, i[t.value.outlet], n), this.forwardEvent(new Cd(t.value.snapshot))
      }), t.children.length && this.forwardEvent(new wd(t.value.snapshot))
    }
    activateRoutes(t, e, n) {
      const i = t.value,
        r = e ? e.value : null;
      if (wp(i), i === r)
        if (i.component) {
          const r = n.getOrCreateContext(i.outlet);
          this.activateChildRoutes(t, e, r.children)
        } else this.activateChildRoutes(t, e, n);
      else if (i.component) {
        const e = n.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          const t = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null), e.children.onOutletReAttached(t.contexts), e.attachRef = t.componentRef, e.route = t.route.value, e.outlet && e.outlet.attach(t.componentRef, t.route.value), Np(t.route)
        } else {
          const n = function (t) {
              for (let e = t.parent; e; e = e.parent) {
                const t = e.routeConfig;
                if (t && t._loadedConfig) return t._loadedConfig;
                if (t && t.component) return null
              }
              return null
            }(i.snapshot),
            r = n ? n.module.componentFactoryResolver : null;
          e.attachRef = null, e.route = i, e.resolver = r, e.outlet && e.outlet.activateWith(i, r), this.activateChildRoutes(t, null, e.children)
        }
      } else this.activateChildRoutes(t, null, n)
    }
  }

  function Np(t) {
    wp(t.value), t.children.forEach(Np)
  }

  function Fp(t) {
    return "function" == typeof t
  }

  function Dp(t) {
    return t instanceof Hd
  }
  class jp {
    constructor(t) {
      this.segmentGroup = t || null
    }
  }
  class zp {
    constructor(t) {
      this.urlTree = t
    }
  }

  function Vp(t) {
    return new b(e => e.error(new jp(t)))
  }

  function Up(t) {
    return new b(e => e.error(new zp(t)))
  }

  function Hp(t) {
    return new b(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
  }
  class Bp {
    constructor(t, e, n, i, r) {
      this.configLoader = e, this.urlSerializer = n, this.urlTree = i, this.config = r, this.allowRedirects = !0, this.ngModule = t.get(te)
    }
    apply() {
      return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(D(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment))).pipe(Uh(t => {
        if (t instanceof zp) return this.allowRedirects = !1, this.match(t.urlTree);
        if (t instanceof jp) throw this.noMatchError(t);
        throw t
      }))
    }
    match(t) {
      return this.expandSegmentGroup(this.ngModule, this.config, t.root, "primary").pipe(D(e => this.createUrlTree(e, t.queryParams, t.fragment))).pipe(Uh(t => {
        if (t instanceof jp) throw this.noMatchError(t);
        throw t
      }))
    }
    noMatchError(t) {
      return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
    }
    createUrlTree(t, e, n) {
      const i = t.segments.length > 0 ? new Bd([], {
        primary: t
      }) : t;
      return new Hd(i, e, n)
    }
    expandSegmentGroup(t, e, n, i) {
      return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(D(t => new Bd([], t))) : this.expandSegment(t, n, e, n.segments, i, !0)
    }
    expandChildren(t, e, n) {
      return function (t, e) {
        if (0 === Object.keys(t).length) return Fu({});
        const n = [],
          i = [],
          r = {};
        return zd(t, (t, s) => {
          const o = e(s, t).pipe(D(t => r[s] = t));
          "primary" === s ? n.push(o) : i.push(o)
        }), Fu.apply(null, n.concat(i)).pipe(Eh(), Vh(), D(() => r))
      }(n.children, (n, i) => this.expandSegmentGroup(t, e, i, n))
    }
    expandSegment(t, e, n, i, r, s) {
      return Fu(...n).pipe(D(o => this.expandSegmentAgainstRoute(t, e, n, o, i, r, s).pipe(Uh(t => {
        if (t instanceof jp) return Fu(null);
        throw t
      }))), Eh(), Gh(t => !!t), Uh((t, n) => {
        if (t instanceof wh || "EmptyError" === t.name) {
          if (this.noLeftoversInUrl(e, i, r)) return Fu(new Bd([], {}));
          throw new jp(e)
        }
        throw t
      }))
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    expandSegmentAgainstRoute(t, e, n, i, r, s, o) {
      return Gp(i) !== s ? Vp(e) : void 0 === i.redirectTo ? this.matchSegmentAgainstRoute(t, e, i, r) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) : Vp(e)
    }
    expandSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) {
      return "**" === i.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, i, s) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s)
    }
    expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, i) {
      const r = this.applyRedirectCommands([], n.redirectTo, {});
      return n.redirectTo.startsWith("/") ? Up(r) : this.lineralizeSegments(n, r).pipe(H(n => {
        const r = new Bd(n, {});
        return this.expandSegment(t, r, e, n, i, !1)
      }))
    }
    expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) {
      const {
        matched: o,
        consumedSegments: a,
        lastChild: l,
        positionalParamSegments: c
      } = Zp(e, i, r);
      if (!o) return Vp(e);
      const u = this.applyRedirectCommands(a, i.redirectTo, c);
      return i.redirectTo.startsWith("/") ? Up(u) : this.lineralizeSegments(i, u).pipe(H(i => this.expandSegment(t, e, n, i.concat(r.slice(l)), s, !1)))
    }
    matchSegmentAgainstRoute(t, e, n, i) {
      if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(D(t => (n._loadedConfig = t, new Bd(i, {})))) : Fu(new Bd(i, {}));
      const {
        matched: r,
        consumedSegments: s,
        lastChild: o
      } = Zp(e, n, i);
      if (!r) return Vp(e);
      const a = i.slice(o);
      return this.getChildConfig(t, n, i).pipe(H(t => {
        const n = t.module,
          i = t.routes,
          {
            segmentGroup: r,
            slicedSegments: o
          } = function (t, e, n, i) {
            return n.length > 0 && function (t, e, n) {
              return n.some(n => qp(t, e, n) && "primary" !== Gp(n))
            }(t, n, i) ? {
              segmentGroup: $p(new Bd(e, function (t, e) {
                const n = {};
                n.primary = e;
                for (const i of t) "" === i.path && "primary" !== Gp(i) && (n[Gp(i)] = new Bd([], {}));
                return n
              }(i, new Bd(n, t.children)))),
              slicedSegments: []
            } : 0 === n.length && function (t, e, n) {
              return n.some(n => qp(t, e, n))
            }(t, n, i) ? {
              segmentGroup: $p(new Bd(t.segments, function (t, e, n, i) {
                const r = {};
                for (const s of n) qp(t, e, s) && !i[Gp(s)] && (r[Gp(s)] = new Bd([], {}));
                return Object.assign(Object.assign({}, i), r)
              }(t, n, i, t.children))),
              slicedSegments: n
            } : {
              segmentGroup: t,
              slicedSegments: n
            }
          }(e, s, a, i);
        return 0 === o.length && r.hasChildren() ? this.expandChildren(n, i, r).pipe(D(t => new Bd(s, t))) : 0 === i.length && 0 === o.length ? Fu(new Bd(s, {})) : this.expandSegment(n, r, i, o, "primary", !0).pipe(D(t => new Bd(s.concat(t.segments), t.children)))
      }))
    }
    getChildConfig(t, e, n) {
      return e.children ? Fu(new Ad(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Fu(e._loadedConfig) : function (t, e, n) {
        const i = e.canLoad;
        return i && 0 !== i.length ? U(i).pipe(D(i => {
          const r = t.get(i);
          let s;
          if (function (t) {
              return t && Fp(t.canLoad)
            }(r)) s = r.canLoad(e, n);
          else {
            if (!Fp(r)) throw new Error("Invalid CanLoad guard");
            s = r(e, n)
          }
          return Vd(s)
        })).pipe(Eh(), (r = t => !0 === t, t => t.lift(new Wh(r, void 0, t)))) : Fu(!0);
        var r
      }(t.injector, e, n).pipe(H(n => n ? this.configLoader.load(t.injector, e).pipe(D(t => (e._loadedConfig = t, t))) : function (t) {
        return new b(e => e.error(Ed(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
      }(e))) : Fu(new Ad([], t))
    }
    lineralizeSegments(t, e) {
      let n = [],
        i = e.root;
      for (;;) {
        if (n = n.concat(i.segments), 0 === i.numberOfChildren) return Fu(n);
        if (i.numberOfChildren > 1 || !i.children.primary) return Hp(t.redirectTo);
        i = i.children.primary
      }
    }
    applyRedirectCommands(t, e, n) {
      return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
    }
    applyRedirectCreatreUrlTree(t, e, n, i) {
      const r = this.createSegmentGroup(t, e.root, n, i);
      return new Hd(r, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
    }
    createQueryParams(t, e) {
      const n = {};
      return zd(t, (t, i) => {
        if ("string" == typeof t && t.startsWith(":")) {
          const r = t.substring(1);
          n[i] = e[r]
        } else n[i] = t
      }), n
    }
    createSegmentGroup(t, e, n, i) {
      const r = this.createSegments(t, e.segments, n, i);
      let s = {};
      return zd(e.children, (e, r) => {
        s[r] = this.createSegmentGroup(t, e, n, i)
      }), new Bd(r, s)
    }
    createSegments(t, e, n, i) {
      return e.map(e => e.path.startsWith(":") ? this.findPosParam(t, e, i) : this.findOrReturn(e, n))
    }
    findPosParam(t, e, n) {
      const i = n[e.path.substring(1)];
      if (!i) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
      return i
    }
    findOrReturn(t, e) {
      let n = 0;
      for (const i of e) {
        if (i.path === t.path) return e.splice(n), i;
        n++
      }
      return t
    }
  }

  function Zp(t, e, n) {
    if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
      matched: !1,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    } : {
      matched: !0,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    };
    const i = (e.matcher || Ld)(n, t, e);
    return i ? {
      matched: !0,
      consumedSegments: i.consumed,
      lastChild: i.consumed.length,
      positionalParamSegments: i.posParams
    } : {
      matched: !1,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    }
  }

  function $p(t) {
    if (1 === t.numberOfChildren && t.children.primary) {
      const e = t.children.primary;
      return new Bd(t.segments.concat(e.segments), e.children)
    }
    return t
  }

  function qp(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
  }

  function Gp(t) {
    return t.outlet || "primary"
  }
  class Wp {
    constructor(t) {
      this.path = t, this.route = this.path[this.path.length - 1]
    }
  }
  class Kp {
    constructor(t, e) {
      this.component = t, this.route = e
    }
  }

  function Yp(t, e, n) {
    const i = t._root;
    return function t(e, n, i, r, s = {
      canDeactivateChecks: [],
      canActivateChecks: []
    }) {
      const o = dp(n);
      return e.children.forEach(e => {
        ! function (e, n, i, r, s = {
          canDeactivateChecks: [],
          canActivateChecks: []
        }) {
          const o = e.value,
            a = n ? n.value : null,
            l = i ? i.getContext(e.value.outlet) : null;
          if (a && o.routeConfig === a.routeConfig) {
            const c = function (t, e, n) {
              if ("function" == typeof n) return n(t, e);
              switch (n) {
                case "pathParamsChange":
                  return !$d(t.url, e.url);
                case "pathParamsOrQueryParamsChange":
                  return !$d(t.url, e.url) || !Nd(t.queryParams, e.queryParams);
                case "always":
                  return !0;
                case "paramsOrQueryParamsChange":
                  return !xp(t, e) || !Nd(t.queryParams, e.queryParams);
                case "paramsChange":
                default:
                  return !xp(t, e)
              }
            }(a, o, o.routeConfig.runGuardsAndResolvers);
            c ? s.canActivateChecks.push(new Wp(r)) : (o.data = a.data, o._resolvedData = a._resolvedData), t(e, n, o.component ? l ? l.children : null : i, r, s), c && s.canDeactivateChecks.push(new Kp(l && l.outlet && l.outlet.component || null, a))
          } else a && Qp(n, l, s), s.canActivateChecks.push(new Wp(r)), t(e, null, o.component ? l ? l.children : null : i, r, s)
        }(e, o[e.value.outlet], i, r.concat([e.value]), s), delete o[e.value.outlet]
      }), zd(o, (t, e) => Qp(t, i.getContext(e), s)), s
    }(i, e ? e._root : null, n, [i.value])
  }

  function Jp(t, e, n) {
    const i = function (t) {
      if (!t) return null;
      for (let e = t.parent; e; e = e.parent) {
        const t = e.routeConfig;
        if (t && t._loadedConfig) return t._loadedConfig
      }
      return null
    }(e);
    return (i ? i.module.injector : n).get(t)
  }

  function Qp(t, e, n) {
    const i = dp(t),
      r = t.value;
    zd(i, (t, i) => {
      Qp(t, r.component ? e ? e.children.getContext(i) : null : e, n)
    }), n.canDeactivateChecks.push(new Kp(r.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, r))
  }
  const Xp = Symbol("INITIAL_VALUE");

  function tf() {
    return Yh(t => function (...t) {
      let e = null,
        n = null;
      return T(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && l(t[0]) && (t = t[0]), G(t, n).lift(new Ch(e))
    }(...t.map(t => t.pipe(Zh(1), function (...t) {
      const e = t[t.length - 1];
      return T(e) ? (t.pop(), n => Xh(t, n, e)) : e => Xh(t, e)
    }(Xp)))).pipe(td((t, e) => {
      let n = !1;
      return e.reduce((t, i, r) => {
        if (t !== Xp) return t;
        if (i === Xp && (n = !0), !n) {
          if (!1 === i) return i;
          if (r === e.length - 1 || Dp(i)) return i
        }
        return t
      }, t)
    }, Xp), ju(t => t !== Xp), D(t => Dp(t) ? t : !0 === t), Zh(1)))
  }

  function ef(t, e) {
    return null !== t && e && e(new xd(t)), Fu(!0)
  }

  function nf(t, e) {
    return null !== t && e && e(new bd(t)), Fu(!0)
  }

  function rf(t, e, n) {
    const i = e.routeConfig ? e.routeConfig.canActivate : null;
    return i && 0 !== i.length ? Fu(i.map(i => Th(() => {
      const r = Jp(i, e, n);
      let s;
      if (function (t) {
          return t && Fp(t.canActivate)
        }(r)) s = Vd(r.canActivate(e, t));
      else {
        if (!Fp(r)) throw new Error("Invalid CanActivate guard");
        s = Vd(r(e, t))
      }
      return s.pipe(Gh())
    }))).pipe(tf()) : Fu(!0)
  }

  function sf(t, e, n) {
    const i = e[e.length - 1],
      r = e.slice(0, e.length - 1).reverse().map(t => function (t) {
        const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
        return e && 0 !== e.length ? {
          node: t,
          guards: e
        } : null
      }(t)).filter(t => null !== t).map(e => Th(() => Fu(e.guards.map(r => {
        const s = Jp(r, e.node, n);
        let o;
        if (function (t) {
            return t && Fp(t.canActivateChild)
          }(s)) o = Vd(s.canActivateChild(i, t));
        else {
          if (!Fp(s)) throw new Error("Invalid CanActivateChild guard");
          o = Vd(s(i, t))
        }
        return o.pipe(Gh())
      })).pipe(tf())));
    return Fu(r).pipe(tf())
  }
  class of {}
  class af {
    constructor(t, e, n, i, r, s) {
      this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = i, this.paramsInheritanceStrategy = r, this.relativeLinkResolution = s
    }
    recognize() {
      try {
        const t = uf(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
          e = this.processSegmentGroup(this.config, t, "primary"),
          n = new _p([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
          i = new hp(n, e),
          r = new vp(this.url, i);
        return this.inheritParamsAndData(r._root), Fu(r)
      } catch (t) {
        return new b(e => e.error(t))
      }
    }
    inheritParamsAndData(t) {
      const e = t.value,
        n = gp(e, this.paramsInheritanceStrategy);
      e.params = Object.freeze(n.params), e.data = Object.freeze(n.data), t.children.forEach(t => this.inheritParamsAndData(t))
    }
    processSegmentGroup(t, e, n) {
      return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
    }
    processChildren(t, e) {
      const n = qd(e, (e, n) => this.processSegmentGroup(t, e, n));
      return function (t) {
        const e = {};
        t.forEach(t => {
          const n = e[t.value.outlet];
          if (n) {
            const e = n.url.map(t => t.toString()).join("/"),
              i = t.value.url.map(t => t.toString()).join("/");
            throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${i}'.`)
          }
          e[t.value.outlet] = t.value
        })
      }(n), n.sort((t, e) => "primary" === t.value.outlet ? -1 : "primary" === e.value.outlet ? 1 : t.value.outlet.localeCompare(e.value.outlet)), n
    }
    processSegment(t, e, n, i) {
      for (const s of t) try {
        return this.processSegmentAgainstRoute(s, e, n, i)
      } catch (r) {
        if (!(r instanceof of )) throw r
      }
      if (this.noLeftoversInUrl(e, n, i)) return [];
      throw new of
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    processSegmentAgainstRoute(t, e, n, i) {
      if (t.redirectTo) throw new of ;
      if ((t.outlet || "primary") !== i) throw new of ;
      let r, s = [],
        o = [];
      if ("**" === t.path) {
        const s = n.length > 0 ? jd(n).parameters : {};
        r = new _p(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, pf(t), i, t.component, t, lf(e), cf(e) + n.length, ff(t))
      } else {
        const a = function (t, e, n) {
          if ("" === e.path) {
            if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new of ;
            return {
              consumedSegments: [],
              lastChild: 0,
              parameters: {}
            }
          }
          const i = (e.matcher || Ld)(n, t, e);
          if (!i) throw new of ;
          const r = {};
          zd(i.posParams, (t, e) => {
            r[e] = t.path
          });
          const s = i.consumed.length > 0 ? Object.assign(Object.assign({}, r), i.consumed[i.consumed.length - 1].parameters) : r;
          return {
            consumedSegments: i.consumed,
            lastChild: i.consumed.length,
            parameters: s
          }
        }(e, t, n);
        s = a.consumedSegments, o = n.slice(a.lastChild), r = new _p(s, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, pf(t), i, t.component, t, lf(e), cf(e) + s.length, ff(t))
      }
      const a = function (t) {
          return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
        }(t),
        {
          segmentGroup: l,
          slicedSegments: c
        } = uf(e, s, o, a, this.relativeLinkResolution);
      if (0 === c.length && l.hasChildren()) {
        const t = this.processChildren(a, l);
        return [new hp(r, t)]
      }
      if (0 === a.length && 0 === c.length) return [new hp(r, [])];
      const u = this.processSegment(a, l, c, "primary");
      return [new hp(r, u)]
    }
  }

  function lf(t) {
    let e = t;
    for (; e._sourceSegment;) e = e._sourceSegment;
    return e
  }

  function cf(t) {
    let e = t,
      n = e._segmentIndexShift ? e._segmentIndexShift : 0;
    for (; e._sourceSegment;) e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0;
    return n - 1
  }

  function uf(t, e, n, i, r) {
    if (n.length > 0 && function (t, e, n) {
        return n.some(n => hf(t, e, n) && "primary" !== df(n))
      }(t, n, i)) {
      const r = new Bd(e, function (t, e, n, i) {
        const r = {};
        r.primary = i, i._sourceSegment = t, i._segmentIndexShift = e.length;
        for (const s of n)
          if ("" === s.path && "primary" !== df(s)) {
            const n = new Bd([], {});
            n._sourceSegment = t, n._segmentIndexShift = e.length, r[df(s)] = n
          } return r
      }(t, e, i, new Bd(n, t.children)));
      return r._sourceSegment = t, r._segmentIndexShift = e.length, {
        segmentGroup: r,
        slicedSegments: []
      }
    }
    if (0 === n.length && function (t, e, n) {
        return n.some(n => hf(t, e, n))
      }(t, n, i)) {
      const s = new Bd(t.segments, function (t, e, n, i, r, s) {
        const o = {};
        for (const a of i)
          if (hf(t, n, a) && !r[df(a)]) {
            const n = new Bd([], {});
            n._sourceSegment = t, n._segmentIndexShift = "legacy" === s ? t.segments.length : e.length, o[df(a)] = n
          } return Object.assign(Object.assign({}, r), o)
      }(t, e, n, i, t.children, r));
      return s._sourceSegment = t, s._segmentIndexShift = e.length, {
        segmentGroup: s,
        slicedSegments: n
      }
    }
    const s = new Bd(t.segments, t.children);
    return s._sourceSegment = t, s._segmentIndexShift = e.length, {
      segmentGroup: s,
      slicedSegments: n
    }
  }

  function hf(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
  }

  function df(t) {
    return t.outlet || "primary"
  }

  function pf(t) {
    return t.data || {}
  }

  function ff(t) {
    return t.resolve || {}
  }

  function mf(t, e, n, i) {
    const r = Jp(t, e, i);
    return Vd(r.resolve ? r.resolve(e, n) : r(e, n))
  }

  function gf(t) {
    return function (e) {
      return e.pipe(Yh(e => {
        const n = t(e);
        return n ? U(n).pipe(D(() => e)) : U([e])
      }))
    }
  }
  class _f {
    shouldDetach(t) {
      return !1
    }
    store(t, e) {}
    shouldAttach(t) {
      return !1
    }
    retrieve(t) {
      return null
    }
    shouldReuseRoute(t, e) {
      return t.routeConfig === e.routeConfig
    }
  }
  const vf = new Vt("ROUTES"); class yf {
    constructor(t, e, n, i) {
      this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = i
    }
    load(t, e) {
      return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(D(n => {
        this.onLoadEndListener && this.onLoadEndListener(e);
        const i = n.create(t);
        return new Ad(Dd(i.injector.get(vf)).map(Rd), i)
      }))
    }
    loadModuleFactory(t) {
      return "string" == typeof t ? U(this.loader.load(t)) : Vd(t()).pipe(H(t => t instanceof ee ? Fu(t) : U(this.compiler.compileModuleAsync(t))))
    }
  }
  class bf {
    shouldProcessUrl(t) {
      return !0
    }
    extract(t) {
      return t
    }
    merge(t, e) {
      return t
    }
  }

  function wf(t) {
    throw t
  }

  function xf(t, e, n) {
    return e.parse("/")
  }

  function Cf(t, e) {
    return Fu(null)
  }
  let Sf = (() => {
    class t {
      constructor(t, e, n, i, r, s, o, a) {
        this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = i, this.config = a, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new k, this.errorHandler = wf, this.malformedUriErrorHandler = xf, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
          beforePreactivation: Cf,
          afterPreactivation: Cf
        }, this.urlHandlingStrategy = new bf, this.routeReuseStrategy = new _f, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = r.get(te), this.console = r.get(sl);
        const l = r.get(yl);
        this.isNgZoneEnabled = l instanceof yl, this.resetConfig(a), this.currentUrlTree = new Hd(new Bd([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new yf(s, o, t => this.triggerEvent(new vd(t)), t => this.triggerEvent(new yd(t))), this.routerState = fp(this.currentUrlTree, this.rootComponentType), this.transitions = new bh({
          id: 0,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.currentUrlTree,
          extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
          urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
          rawUrl: this.currentUrlTree,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: "imperative",
          restoredState: null,
          currentSnapshot: this.routerState.snapshot,
          targetSnapshot: null,
          currentRouterState: this.routerState,
          targetRouterState: null,
          guards: {
            canActivateChecks: [],
            canDeactivateChecks: []
          },
          guardsResult: null
        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
      }
      setupNavigations(t) {
        const e = this.events;
        return t.pipe(ju(t => 0 !== t.id), D(t => Object.assign(Object.assign({}, t), {
          extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
        })), Yh(t => {
          let n = !1,
            i = !1;
          return Fu(t).pipe(id(t => {
            this.currentNavigation = {
              id: t.id,
              initialUrl: t.currentRawUrl,
              extractedUrl: t.extractedUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              }) : null
            }
          }), Yh(t => {
            const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
            if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Fu(t).pipe(Yh(t => {
              const n = this.transitions.getValue();
              return e.next(new cd(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), n !== this.transitions.getValue() ? kh : [t]
            }), Yh(t => Promise.resolve(t)), (i = this.ngModule.injector, r = this.configLoader, s = this.urlSerializer, o = this.config, function (t) {
              return t.pipe(Yh(t => function (t, e, n, i, r) {
                return new Bp(t, e, n, i, r).apply()
              }(i, r, s, t.extractedUrl, o).pipe(D(e => Object.assign(Object.assign({}, t), {
                urlAfterRedirects: e
              })))))
            }), id(t => {
              this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                finalUrl: t.urlAfterRedirects
              })
            }), function (t, e, n, i, r) {
              return function (s) {
                return s.pipe(H(s => function (t, e, n, i, r = "emptyOnly", s = "legacy") {
                  return new af(t, e, n, i, r, s).recognize()
                }(t, e, s.urlAfterRedirects, n(s.urlAfterRedirects), i, r).pipe(D(t => Object.assign(Object.assign({}, s), {
                  targetSnapshot: t
                })))))
              }
            }(this.rootComponentType, this.config, t => this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), id(t => {
              "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
            }), id(t => {
              const n = new pd(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              e.next(n)
            }));
            var i, r, s, o;
            if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
              const {
                id: n,
                extractedUrl: i,
                source: r,
                restoredState: s,
                extras: o
              } = t, a = new cd(n, this.serializeUrl(i), r, s);
              e.next(a);
              const l = fp(i, this.rootComponentType).snapshot;
              return Fu(Object.assign(Object.assign({}, t), {
                targetSnapshot: l,
                urlAfterRedirects: i,
                extras: Object.assign(Object.assign({}, o), {
                  skipLocationChange: !1,
                  replaceUrl: !1
                })
              }))
            }
            return this.rawUrlTree = t.rawUrl, this.browserUrlTree = t.urlAfterRedirects, t.resolve(null), kh
          }), gf(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: i,
              rawUrl: r,
              extras: {
                skipLocationChange: s,
                replaceUrl: o
              }
            } = t;
            return this.hooks.beforePreactivation(e, {
              navigationId: n,
              appliedUrlTree: i,
              rawUrlTree: r,
              skipLocationChange: !!s,
              replaceUrl: !!o
            })
          }), id(t => {
            const e = new fd(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
            this.triggerEvent(e)
          }), D(t => Object.assign(Object.assign({}, t), {
            guards: Yp(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
          })), function (t, e) {
            return function (n) {
              return n.pipe(H(n => {
                const {
                  targetSnapshot: i,
                  currentSnapshot: r,
                  guards: {
                    canActivateChecks: s,
                    canDeactivateChecks: o
                  }
                } = n;
                return 0 === o.length && 0 === s.length ? Fu(Object.assign(Object.assign({}, n), {
                  guardsResult: !0
                })) : function (t, e, n, i) {
                  return U(t).pipe(H(t => function (t, e, n, i, r) {
                    const s = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                    return s && 0 !== s.length ? Fu(s.map(s => {
                      const o = Jp(s, e, r);
                      let a;
                      if (function (t) {
                          return t && Fp(t.canDeactivate)
                        }(o)) a = Vd(o.canDeactivate(t, e, n, i));
                      else {
                        if (!Fp(o)) throw new Error("Invalid CanDeactivate guard");
                        a = Vd(o(t, e, n, i))
                      }
                      return a.pipe(Gh())
                    })).pipe(tf()) : Fu(!0)
                  }(t.component, t.route, n, e, i)), Gh(t => !0 !== t, !0))
                }(o, i, r, t).pipe(H(n => n && "boolean" == typeof n ? function (t, e, n, i) {
                  return U(e).pipe(Du(e => U([nf(e.route.parent, i), ef(e.route, i), sf(t, e.path, n), rf(t, e.route, n)]).pipe(Eh(), Gh(t => !0 !== t, !0))), Gh(t => !0 !== t, !0))
                }(i, s, t, e) : Fu(n)), D(t => Object.assign(Object.assign({}, n), {
                  guardsResult: t
                })))
              }))
            }
          }(this.ngModule.injector, t => this.triggerEvent(t)), id(t => {
            if (Dp(t.guardsResult)) {
              const e = Ed(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
              throw e.url = t.guardsResult, e
            }
          }), id(t => {
            const e = new md(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.triggerEvent(e)
          }), ju(t => {
            if (!t.guardsResult) {
              this.resetUrlToCurrentUrlTree();
              const n = new hd(t.id, this.serializeUrl(t.extractedUrl), "");
              return e.next(n), t.resolve(!1), !1
            }
            return !0
          }), gf(t => {
            if (t.guards.canActivateChecks.length) return Fu(t).pipe(id(t => {
              const e = new gd(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }), (e = this.paramsInheritanceStrategy, n = this.ngModule.injector, function (t) {
              return t.pipe(H(t => {
                const {
                  targetSnapshot: i,
                  guards: {
                    canActivateChecks: r
                  }
                } = t;
                return r.length ? U(r).pipe(Du(t => function (t, e, n, i) {
                  return function (t, e, n, i) {
                    const r = Object.keys(t);
                    if (0 === r.length) return Fu({});
                    if (1 === r.length) {
                      const s = r[0];
                      return mf(t[s], e, n, i).pipe(D(t => ({
                        [s]: t
                      })))
                    }
                    const s = {};
                    return U(r).pipe(H(r => mf(t[r], e, n, i).pipe(D(t => (s[r] = t, t))))).pipe(Vh(), D(() => s))
                  }(t._resolve, t, e, i).pipe(D(e => (t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), gp(t, n).resolve), null)))
                }(t.route, i, e, n)), function (t, e) {
                  return arguments.length >= 2 ? function (n) {
                    return v(td(t, e), Ah(1), Dh(e))(n)
                  } : function (e) {
                    return v(td((e, n, i) => t(e, n, i + 1)), Ah(1))(e)
                  }
                }((t, e) => t), D(e => t)) : Fu(t)
              }))
            }), id(t => {
              const e = new _d(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }));
            var e, n
          }), gf(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: i,
              rawUrl: r,
              extras: {
                skipLocationChange: s,
                replaceUrl: o
              }
            } = t;
            return this.hooks.afterPreactivation(e, {
              navigationId: n,
              appliedUrlTree: i,
              rawUrlTree: r,
              skipLocationChange: !!s,
              replaceUrl: !!o
            })
          }), D(t => {
            const e = function (t, e, n) {
              const i = function t(e, n, i) {
                if (i && e.shouldReuseRoute(n.value, i.value.snapshot)) {
                  const r = i.value;
                  r._futureSnapshot = n.value;
                  const s = function (e, n, i) {
                    return n.children.map(n => {
                      for (const r of i.children)
                        if (e.shouldReuseRoute(r.value.snapshot, n.value)) return t(e, n, r);
                      return t(e, n)
                    })
                  }(e, n, i);
                  return new hp(r, s)
                } {
                  const i = e.retrieve(n.value);
                  if (i) {
                    const t = i.route;
                    return function t(e, n) {
                      if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                      if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                      n.value._futureSnapshot = e.value;
                      for (let i = 0; i < e.children.length; ++i) t(e.children[i], n.children[i])
                    }(n, t), t
                  } {
                    const i = new mp(new bh((r = n.value).url), new bh(r.params), new bh(r.queryParams), new bh(r.fragment), new bh(r.data), r.outlet, r.component, r),
                      s = n.children.map(n => t(e, n));
                    return new hp(i, s)
                  }
                }
                var r
              }(t, e._root, n ? n._root : void 0);
              return new pp(i, e)
            }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            return Object.assign(Object.assign({}, t), {
              targetRouterState: e
            })
          }), id(t => {
            this.currentUrlTree = t.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl), this.routerState = t.targetRouterState, "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
          }), (s = this.rootContexts, o = this.routeReuseStrategy, a = t => this.triggerEvent(t), D(t => (new Rp(o, t.targetRouterState, t.currentRouterState, a).activate(s), t))), id({
            next() {
              n = !0
            },
            complete() {
              n = !0
            }
          }), (r = () => {
            if (!n && !i) {
              this.resetUrlToCurrentUrlTree();
              const n = new hd(t.id, this.serializeUrl(t.extractedUrl), `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);
              e.next(n), t.resolve(!1)
            }
            this.currentNavigation = null
          }, t => t.lift(new od(r))), Uh(n => {
            if (i = !0, (r = n) && r.ngNavigationCancelingError) {
              const i = Dp(n.url);
              i || (this.navigated = !0, this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
              const r = new hd(t.id, this.serializeUrl(t.extractedUrl), n.message);
              e.next(r), i ? setTimeout(() => {
                const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                return this.scheduleNavigation(e, "imperative", null, {
                  skipLocationChange: t.extras.skipLocationChange,
                  replaceUrl: "eager" === this.urlUpdateStrategy
                }, {
                  resolve: t.resolve,
                  reject: t.reject,
                  promise: t.promise
                })
              }, 0) : t.resolve(!1)
            } else {
              this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
              const i = new dd(t.id, this.serializeUrl(t.extractedUrl), n);
              e.next(i);
              try {
                t.resolve(this.errorHandler(n))
              } catch (s) {
                t.reject(s)
              }
            }
            var r;
            return kh
          }));
          var r, s, o, a
        }))
      }
      resetRootComponentType(t) {
        this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
      }
      getTransition() {
        const t = this.transitions.value;
        return t.urlAfterRedirects = this.browserUrlTree, t
      }
      setTransition(t) {
        this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t))
      }
      initialNavigation() {
        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
          replaceUrl: !0
        })
      }
      setUpLocationChangeListener() {
        this.locationSubscription || (this.locationSubscription = this.location.subscribe(t => {
          let e = this.parseUrl(t.url);
          const n = "popstate" === t.type ? "popstate" : "hashchange",
            i = t.state && t.state.navigationId ? t.state : null;
          setTimeout(() => {
            this.scheduleNavigation(e, n, i, {
              replaceUrl: !0
            })
          }, 0)
        }))
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree)
      }
      getCurrentNavigation() {
        return this.currentNavigation
      }
      triggerEvent(t) {
        this.events.next(t)
      }
      resetConfig(t) {
        Id(t), this.config = t.map(Rd), this.navigated = !1, this.lastSuccessfulId = -1
      }
      ngOnDestroy() {
        this.dispose()
      }
      dispose() {
        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
      }
      createUrlTree(t, e = {}) {
        const {
          relativeTo: n,
          queryParams: i,
          fragment: r,
          preserveQueryParams: s,
          queryParamsHandling: o,
          preserveFragment: a
        } = e;
        hi() && s && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
        const l = n || this.routerState.root,
          c = a ? this.currentUrlTree.fragment : r;
        let u = null;
        if (o) switch (o) {
          case "merge":
            u = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), i);
            break;
          case "preserve":
            u = this.currentUrlTree.queryParams;
            break;
          default:
            u = i || null
        } else u = s ? this.currentUrlTree.queryParams : i || null;
        return null !== u && (u = this.removeEmptyProps(u)),
          function (t, e, n, i, r) {
            if (0 === n.length) return Sp(e.root, e.root, e, i, r);
            const s = function (t) {
              if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new kp(!0, 0, t);
              let e = 0,
                n = !1;
              const i = t.reduce((t, i, r) => {
                if ("object" == typeof i && null != i) {
                  if (i.outlets) {
                    const e = {};
                    return zd(i.outlets, (t, n) => {
                      e[n] = "string" == typeof t ? t.split("/") : t
                    }), [...t, {
                      outlets: e
                    }]
                  }
                  if (i.segmentPath) return [...t, i.segmentPath]
                }
                return "string" != typeof i ? [...t, i] : 0 === r ? (i.split("/").forEach((i, r) => {
                  0 == r && "." === i || (0 == r && "" === i ? n = !0 : ".." === i ? e++ : "" != i && t.push(i))
                }), t) : [...t, i]
              }, []);
              return new kp(n, e, i)
            }(n);
            if (s.toRoot()) return Sp(e.root, new Bd([], {}), e, i, r);
            const o = function (t, e, n) {
                if (t.isAbsolute) return new Pp(e.root, !0, 0);
                if (-1 === n.snapshot._lastPathIndex) return new Pp(n.snapshot._urlSegment, !0, 0);
                const i = Cp(t.commands[0]) ? 0 : 1;
                return function (t, e, n) {
                  let i = t,
                    r = e,
                    s = n;
                  for (; s > r;) {
                    if (s -= r, i = i.parent, !i) throw new Error("Invalid number of '../'");
                    r = i.segments.length
                  }
                  return new Pp(i, !1, r - s)
                }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + i, t.numberOfDoubleDots)
              }(s, e, t),
              a = o.processChildren ? Lp(o.segmentGroup, o.index, s.commands) : Ep(o.segmentGroup, o.index, s.commands);
            return Sp(o.segmentGroup, a, e, i, r)
          }(l, this.currentUrlTree, t, u, c)
      }
      navigateByUrl(t, e = {
        skipLocationChange: !1
      }) {
        hi() && this.isNgZoneEnabled && !yl.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
        const n = Dp(t) ? t : this.parseUrl(t),
          i = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
        return this.scheduleNavigation(i, "imperative", null, e)
      }
      navigate(t, e = {
        skipLocationChange: !1
      }) {
        return function (t) {
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`)
          }
        }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t)
      }
      parseUrl(t) {
        let e;
        try {
          e = this.urlSerializer.parse(t)
        } catch (n) {
          e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
        }
        return e
      }
      isActive(t, e) {
        if (Dp(t)) return Ud(this.currentUrlTree, t, e);
        const n = this.parseUrl(t);
        return Ud(this.currentUrlTree, n, e)
      }
      removeEmptyProps(t) {
        return Object.keys(t).reduce((e, n) => {
          const i = t[n];
          return null != i && (e[n] = i), e
        }, {})
      }
      processNavigations() {
        this.navigations.subscribe(t => {
          this.navigated = !0, this.lastSuccessfulId = t.id, this.events.next(new ud(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, this.currentNavigation = null, t.resolve(!0)
        }, t => {
          this.console.warn("Unhandled Navigation Error: ")
        })
      }
      scheduleNavigation(t, e, n, i, r) {
        const s = this.getTransition();
        if (s && "imperative" !== e && "imperative" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (s && "hashchange" == e && "popstate" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (s && "popstate" == e && "hashchange" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        let o, a, l;
        r ? (o = r.resolve, a = r.reject, l = r.promise) : l = new Promise((t, e) => {
          o = t, a = e
        });
        const c = ++this.navigationId;
        return this.setTransition({
          id: c,
          source: e,
          restoredState: n,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.rawUrlTree,
          rawUrl: t,
          extras: i,
          resolve: o,
          reject: a,
          promise: l,
          currentSnapshot: this.routerState.snapshot,
          currentRouterState: this.routerState
        }), l.catch(t => Promise.reject(t))
      }
      setBrowserUrl(t, e, n, i) {
        const r = this.urlSerializer.serialize(t);
        i = i || {}, this.location.isCurrentPathEqualTo(r) || e ? this.location.replaceState(r, "", Object.assign(Object.assign({}, i), {
          navigationId: n
        })) : this.location.go(r, "", Object.assign(Object.assign({}, i), {
          navigationId: n
        }))
      }
      resetStateAndUrl(t, e, n) {
        this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
          navigationId: this.lastSuccessfulId
        })
      }
    }
    return t.\u0275fac = function (t) {
      js()
    }, t.\u0275dir = ye({
      type: t
    }), t
  })(), kf = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.router = t, this.route = e, this.commands = [], null == n && i.setAttribute(r.nativeElement, "tabindex", "0")
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        hi() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t
      }
      onClick() {
        const t = {
          skipLocationChange: Tf(this.skipLocationChange),
          replaceUrl: Tf(this.replaceUrl)
        };
        return this.router.navigateByUrl(this.urlTree, t), !0
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: Tf(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: Tf(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Sf), Fs(mp), Ds("tabindex"), Fs(Do), Fs(Mo))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "routerLink", "", 5, "a", 5, "area"]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("click", (function () {
          return e.onClick()
        }))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      }
    }), t
  })(), Pf = (() => {
    class t {
      constructor(t, e, n) {
        this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(t => {
          t instanceof ud && this.updateTargetUrlAndHref()
        })
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        hi() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
      }
      ngOnChanges(t) {
        this.updateTargetUrlAndHref()
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      onClick(t, e, n, i) {
        if (0 !== t || e || n || i) return !0;
        if ("string" == typeof this.target && "_self" != this.target) return !0;
        const r = {
          skipLocationChange: Tf(this.skipLocationChange),
          replaceUrl: Tf(this.replaceUrl),
          state: this.state
        };
        return this.router.navigateByUrl(this.urlTree, r), !1
      }
      updateTargetUrlAndHref() {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: Tf(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: Tf(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Sf), Fs(mp), Fs(ac))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["a", "routerLink", ""],
        ["area", "routerLink", ""]
      ],
      hostVars: 2,
      hostBindings: function (t, e) {
        1 & t && Gs("click", (function (t) {
          return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey)
        })), 2 & t && (uo("href", e.href, mi), Os("target", e.target))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      },
      features: [yo]
    }), t
  })();

  function Tf(t) {
    return "" === t || !!t
  }
  let Ef = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.router = t, this.element = e, this.renderer = n, this.link = i, this.linkWithHref = r, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
          exact: !1
        }, this.subscription = t.events.subscribe(t => {
          t instanceof ud && this.update()
        })
      }
      ngAfterContentInit() {
        this.links.changes.subscribe(t => this.update()), this.linksWithHrefs.changes.subscribe(t => this.update()), this.update()
      }
      set routerLinkActive(t) {
        const e = Array.isArray(t) ? t : t.split(" ");
        this.classes = e.filter(t => !!t)
      }
      ngOnChanges(t) {
        this.update()
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      update() {
        this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then(() => {
          const t = this.hasActiveLinks();
          this.isActive !== t && (this.isActive = t, this.classes.forEach(e => {
            t ? this.renderer.addClass(this.element.nativeElement, e) : this.renderer.removeClass(this.element.nativeElement, e)
          }))
        })
      }
      isLinkActive(t) {
        return e => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact)
      }
      hasActiveLinks() {
        const t = this.isLinkActive(this.router);
        return this.link && t(this.link) || this.linkWithHref && t(this.linkWithHref) || this.links.some(t) || this.linksWithHrefs.some(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Sf), Fs(Mo), Fs(Do), Fs(kf, 8), Fs(Pf, 8))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "routerLinkActive", ""]
      ],
      contentQueries: function (t, e, n) {
        var i;
        1 & t && (qa(n, kf, !0), qa(n, Pf, !0)), 2 & t && ($a(i = Ga()) && (e.links = i), $a(i = Ga()) && (e.linksWithHrefs = i))
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        routerLinkActive: "routerLinkActive"
      },
      exportAs: ["routerLinkActive"],
      features: [yo]
    }), t
  })(); class Lf {
    constructor() {
      this.outlet = null, this.route = null, this.resolver = null, this.children = new Af, this.attachRef = null
    }
  }
  class Af {
    constructor() {
      this.contexts = new Map
    }
    onChildOutletCreated(t, e) {
      const n = this.getOrCreateContext(t);
      n.outlet = e, this.contexts.set(t, n)
    }
    onChildOutletDestroyed(t) {
      const e = this.getContext(t);
      e && (e.outlet = null)
    }
    onOutletDeactivated() {
      const t = this.contexts;
      return this.contexts = new Map, t
    }
    onOutletReAttached(t) {
      this.contexts = t
    }
    getOrCreateContext(t) {
      let e = this.getContext(t);
      return e || (e = new Lf, this.contexts.set(t, e)), e
    }
    getContext(t) {
      return this.contexts.get(t) || null
    }
  }
  let If = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = r, this.activated = null, this._activatedRoute = null, this.activateEvents = new Ra, this.deactivateEvents = new Ra, this.name = i || "primary", t.onChildOutletCreated(this.name, this)
      }
      ngOnDestroy() {
        this.parentContexts.onChildOutletDestroyed(this.name)
      }
      ngOnInit() {
        if (!this.activated) {
          const t = this.parentContexts.getContext(this.name);
          t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
        }
      }
      get isActivated() {
        return !!this.activated
      }
      get component() {
        if (!this.activated) throw new Error("Outlet is not activated");
        return this.activated.instance
      }
      get activatedRoute() {
        if (!this.activated) throw new Error("Outlet is not activated");
        return this._activatedRoute
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
      }
      detach() {
        if (!this.activated) throw new Error("Outlet is not activated");
        this.location.detach();
        const t = this.activated;
        return this.activated = null, this._activatedRoute = null, t
      }
      attach(t, e) {
        this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
      }
      deactivate() {
        if (this.activated) {
          const t = this.component;
          this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
        }
      }
      activateWith(t, e) {
        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
        this._activatedRoute = t;
        const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
          i = this.parentContexts.getOrCreateContext(this.name).children,
          r = new Of(t, i, this.location.injector);
        this.activated = this.location.createComponent(n, this.location.length, r), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Af), Fs(sa), Fs(Oo), Ds("name"), Fs(es))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["router-outlet"]
      ],
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate"
      },
      exportAs: ["outlet"]
    }), t
  })(); class Of {
    constructor(t, e, n) {
      this.route = t, this.childContexts = e, this.parent = n
    }
    get(t, e) {
      return t === mp ? this.route : t === Af ? this.childContexts : this.parent.get(t, e)
    }
  }
  class Mf {}
  class Rf {
    preload(t, e) {
      return Fu(null)
    }
  }
  let Nf = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.router = t, this.injector = i, this.preloadingStrategy = r, this.loader = new yf(e, n, e => t.triggerEvent(new vd(e)), e => t.triggerEvent(new yd(e)))
      }
      setUpPreloading() {
        this.subscription = this.router.events.pipe(ju(t => t instanceof ud), Du(() => this.preload())).subscribe(() => {})
      }
      preload() {
        const t = this.injector.get(te);
        return this.processRoutes(t, this.router.config)
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      processRoutes(t, e) {
        const n = [];
        for (const i of e)
          if (i.loadChildren && !i.canLoad && i._loadedConfig) {
            const t = i._loadedConfig;
            n.push(this.processRoutes(t.module, t.routes))
          } else i.loadChildren && !i.canLoad ? n.push(this.preloadConfig(t, i)) : i.children && n.push(this.processRoutes(t, i.children));
        return U(n).pipe(q(), D(t => {}))
      }
      preloadConfig(t, e) {
        return this.preloadingStrategy.preload(e, () => this.loader.load(t.injector, e).pipe(H(t => (e._loadedConfig = t, this.processRoutes(t.module, t.routes)))))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(Sf), Yt(Ul), Yt(ml), Yt(_s), Yt(Mf))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), Ff = (() => {
    class t {
      constructor(t, e, n = {}) {
        this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
      }
      init() {
        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
      }
      createScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof cd ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = t.navigationTrigger, this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof ud && (this.lastId = t.id, this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment))
        })
      }
      consumeScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof Sd && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
        })
      }
      scheduleScrollEvent(t, e) {
        this.router.triggerEvent(new Sd(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
      }
      ngOnDestroy() {
        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
      }
    }
    return t.\u0275fac = function (t) {
      js()
    }, t.\u0275dir = ye({
      type: t
    }), t
  })();
  const Df = new Vt("ROUTER_CONFIGURATION"), jf = new Vt("ROUTER_FORROOT_GUARD"), zf = [dc, {
    provide: Gd,
    useClass: Wd
  }, {
    provide: Sf,
    useFactory: function (t, e, n, i, r, s, o, a = {}, l, c) {
      const u = new Sf(null, t, e, n, i, r, s, Dd(o));
      if (l && (u.urlHandlingStrategy = l), c && (u.routeReuseStrategy = c), a.errorHandler && (u.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (u.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) {
        const t = Yl();
        u.events.subscribe(e => {
          t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd()
        })
      }
      return a.onSameUrlNavigation && (u.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (u.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (u.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (u.relativeLinkResolution = a.relativeLinkResolution), u
    },
    deps: [Gd, Af, dc, _s, Ul, ml, vf, Df, [class {}, new ot],
      [class {}, new ot]
    ]
  }, Af, {
    provide: mp,
    useFactory: function (t) {
      return t.routerState.root
    },
    deps: [Sf]
  }, {
    provide: Ul,
    useClass: Zl
  }, Nf, Rf, class {
    preload(t, e) {
      return e().pipe(Uh(() => Fu(null)))
    }
  }, {
    provide: Df,
    useValue: {
      enableTracing: !1
    }
  }];

  function Vf() {
    return new Rl("Router", Sf)
  }
  let Uf = (() => {
    class t {
      constructor(t, e) {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [zf, $f(e), {
              provide: jf,
              useFactory: Zf,
              deps: [
                [Sf, new ot, new lt]
              ]
            }, {
              provide: Df,
              useValue: n || {}
            }, {
              provide: ac,
              useFactory: Bf,
              deps: [Ql, [new st(cc), new ot], Df]
            }, {
              provide: Ff,
              useFactory: Hf,
              deps: [Sf, ou, Df]
            }, {
              provide: Mf,
              useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Rf
            }, {
              provide: Rl,
              multi: !0,
              useFactory: Vf
            },
            [qf, {
              provide: Ja,
              multi: !0,
              useFactory: Gf,
              deps: [qf]
            }, {
              provide: Kf,
              useFactory: Wf,
              deps: [qf]
            }, {
              provide: rl,
              multi: !0,
              useExisting: Kf
            }]
          ]
        }
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [$f(e)]
        }
      }
    }
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)(Yt(jf, 8), Yt(Sf, 8))
      }
    }), t
  })();

  function Hf(t, e, n) {
    return n.scrollOffset && e.setOffset(n.scrollOffset), new Ff(t, e, n)
  }

  function Bf(t, e, n = {}) {
    return n.useHash ? new hc(t, e) : new uc(t, e)
  }

  function Zf(t) {
    if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    return "guarded"
  }

  function $f(t) {
    return [{
      provide: vs,
      multi: !0,
      useValue: t
    }, {
      provide: vf,
      multi: !0,
      useValue: t
    }]
  }
  let qf = (() => {
    class t {
      constructor(t) {
        this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new k
      }
      appInitializer() {
        return this.injector.get(tc, Promise.resolve(null)).then(() => {
          let t = null;
          const e = new Promise(e => t = e),
            n = this.injector.get(Sf),
            i = this.injector.get(Df);
          if (this.isLegacyDisabled(i) || this.isLegacyEnabled(i)) t(!0);
          else if ("disabled" === i.initialNavigation) n.setUpLocationChangeListener(), t(!0);
          else {
            if ("enabled" !== i.initialNavigation) throw new Error(`Invalid initialNavigation options: '${i.initialNavigation}'`);
            n.hooks.afterPreactivation = () => this.initNavigation ? Fu(null) : (this.initNavigation = !0, t(!0), this.resultOfPreactivationDone), n.initialNavigation()
          }
          return e
        })
      }
      bootstrapListener(t) {
        const e = this.injector.get(Df),
          n = this.injector.get(Nf),
          i = this.injector.get(Ff),
          r = this.injector.get(Sf),
          s = this.injector.get(zl);
        t === s.components[0] && (this.isLegacyEnabled(e) ? r.initialNavigation() : this.isLegacyDisabled(e) && r.setUpLocationChangeListener(), n.setUpPreloading(), i.init(), r.resetRootComponentType(s.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
      }
      isLegacyEnabled(t) {
        return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
      }
      isLegacyDisabled(t) {
        return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(_s))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac
    }), t
  })();

  function Gf(t) {
    return t.appInitializer.bind(t)
  }

  function Wf(t) {
    return t.bootstrapListener.bind(t)
  }
  const Kf = new Vt("Router Initializer"), Yf = [{
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }];
  let Jf = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Uf.forRoot(Yf)], Uf
      ]
    }), t
  })(), Qf = (() => {
    class t {
      constructor() {
        this.title = "csss"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-root"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Bs(0, "router-outlet")
      },
      directives: [If],
      styles: [""]
    }), t
  })();
  var Xf = n("Hfs6"), tm = n.n(Xf), em = n("4R65"), nm = function () {
    function t() {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      }
    }), t
  }();

  function im(t, e) {
    return new b(n => {
      const i = t.length;
      if (0 === i) return void n.complete();
      const r = new Array(i);
      let s = 0,
        o = 0;
      for (let a = 0; a < i; a++) {
        const l = U(t[a]);
        let c = !1;
        n.add(l.subscribe({
          next: t => {
            c || (c = !0, o++), r[a] = t
          },
          error: t => n.error(t),
          complete: () => {
            s++, s !== i && c || (o === i && n.next(e ? e.reduce((t, e, n) => (t[e] = r[n], t), {}) : r), n.complete())
          }
        }))
      }
    })
  }
  const rm = new Vt("NgValueAccessor"), sm = {
    provide: rm,
    useExisting: kt(() => om),
    multi: !0
  };
  let om = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "checked", t)
      }
      registerOnChange(t) {
        this.onChange = t
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Do), Fs(Mo))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["input", "type", "checkbox", "formControlName", ""],
        ["input", "type", "checkbox", "formControl", ""],
        ["input", "type", "checkbox", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("change", (function (t) {
          return e.onChange(t.target.checked)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [Lo([sm])]
    }), t
  })();
  const am = {
    provide: rm,
    useExisting: kt(() => cm),
    multi: !0
  }, lm = new Vt("CompositionEventMode");
  let cm = (() => {
    class t {
      constructor(t, e, n) {
        this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = t => {}, this.onTouched = () => {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function () {
          const t = Yl() ? Yl().getUserAgent() : "";
          return /android (\d+)/.test(t.toLowerCase())
        }())
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
      }
      registerOnChange(t) {
        this.onChange = t
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _handleInput(t) {
        (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
      }
      _compositionStart() {
        this._composing = !0
      }
      _compositionEnd(t) {
        this._composing = !1, this._compositionMode && this.onChange(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Do), Fs(Mo), Fs(lm, 8))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["input", "formControlName", "", 3, "type", "checkbox"],
        ["textarea", "formControlName", ""],
        ["input", "formControl", "", 3, "type", "checkbox"],
        ["textarea", "formControl", ""],
        ["input", "ngModel", "", 3, "type", "checkbox"],
        ["textarea", "ngModel", ""],
        ["", "ngDefaultControl", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("input", (function (t) {
          return e._handleInput(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))("compositionstart", (function () {
          return e._compositionStart()
        }))("compositionend", (function (t) {
          return e._compositionEnd(t.target.value)
        }))
      },
      features: [Lo([am])]
    }), t
  })(), um = (() => {
    class t {
      get value() {
        return this.control ? this.control.value : null
      }
      get valid() {
        return this.control ? this.control.valid : null
      }
      get invalid() {
        return this.control ? this.control.invalid : null
      }
      get pending() {
        return this.control ? this.control.pending : null
      }
      get disabled() {
        return this.control ? this.control.disabled : null
      }
      get enabled() {
        return this.control ? this.control.enabled : null
      }
      get errors() {
        return this.control ? this.control.errors : null
      }
      get pristine() {
        return this.control ? this.control.pristine : null
      }
      get dirty() {
        return this.control ? this.control.dirty : null
      }
      get touched() {
        return this.control ? this.control.touched : null
      }
      get status() {
        return this.control ? this.control.status : null
      }
      get untouched() {
        return this.control ? this.control.untouched : null
      }
      get statusChanges() {
        return this.control ? this.control.statusChanges : null
      }
      get valueChanges() {
        return this.control ? this.control.valueChanges : null
      }
      get path() {
        return null
      }
      reset(t) {
        this.control && this.control.reset(t)
      }
      hasError(t, e) {
        return !!this.control && this.control.hasError(t, e)
      }
      getError(t, e) {
        return this.control ? this.control.getError(t, e) : null
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ye({
      type: t
    }), t
  })(), hm = (() => {
    class t extends um {
      get formDirective() {
        return null
      }
      get path() {
        return null
      }
    }
    return t.\u0275fac = function (e) {
      return dm(e || t)
    }, t.\u0275dir = ye({
      type: t,
      features: [po]
    }), t
  })();
  const dm = ni(hm);

  function pm() {
    throw new Error("unimplemented")
  }
  class fm extends um {
    constructor() {
      super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null, this._rawValidators = [], this._rawAsyncValidators = []
    }
    get validator() {
      return pm()
    }
    get asyncValidator() {
      return pm()
    }
  }
  class mm {
    constructor(t) {
      this._cd = t
    }
    get ngClassUntouched() {
      return !!this._cd.control && this._cd.control.untouched
    }
    get ngClassTouched() {
      return !!this._cd.control && this._cd.control.touched
    }
    get ngClassPristine() {
      return !!this._cd.control && this._cd.control.pristine
    }
    get ngClassDirty() {
      return !!this._cd.control && this._cd.control.dirty
    }
    get ngClassValid() {
      return !!this._cd.control && this._cd.control.valid
    }
    get ngClassInvalid() {
      return !!this._cd.control && this._cd.control.invalid
    }
    get ngClassPending() {
      return !!this._cd.control && this._cd.control.pending
    }
  }
  let gm = (() => {
    class t extends mm {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(fm, 2))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "formControlName", ""],
        ["", "ngModel", ""],
        ["", "formControl", ""]
      ],
      hostVars: 14,
      hostBindings: function (t, e) {
        2 & t && eo("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [po]
    }), t
  })(), _m = (() => {
    class t extends mm {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(hm, 2))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "formGroupName", ""],
        ["", "formArrayName", ""],
        ["", "ngModelGroup", ""],
        ["", "formGroup", ""],
        ["form", 3, "ngNoForm", ""],
        ["", "ngForm", ""]
      ],
      hostVars: 14,
      hostBindings: function (t, e) {
        2 & t && eo("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [po]
    }), t
  })();

  function vm(t) {
    return null == t || 0 === t.length
  }
  const ym = new Vt("NgValidators"), bm = new Vt("NgAsyncValidators"), wm = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; class xm {
    static min(t) {
      return e => {
        if (vm(e.value) || vm(t)) return null;
        const n = parseFloat(e.value);
        return !isNaN(n) && n < t ? {
          min: {
            min: t,
            actual: e.value
          }
        } : null
      }
    }
    static max(t) {
      return e => {
        if (vm(e.value) || vm(t)) return null;
        const n = parseFloat(e.value);
        return !isNaN(n) && n > t ? {
          max: {
            max: t,
            actual: e.value
          }
        } : null
      }
    }
    static required(t) {
      return vm(t.value) ? {
        required: !0
      } : null
    }
    static requiredTrue(t) {
      return !0 === t.value ? null : {
        required: !0
      }
    }
    static email(t) {
      return vm(t.value) || wm.test(t.value) ? null : {
        email: !0
      }
    }
    static minLength(t) {
      return e => {
        if (vm(e.value)) return null;
        const n = e.value ? e.value.length : 0;
        return n < t ? {
          minlength: {
            requiredLength: t,
            actualLength: n
          }
        } : null
      }
    }
    static maxLength(t) {
      return e => {
        const n = e.value ? e.value.length : 0;
        return n > t ? {
          maxlength: {
            requiredLength: t,
            actualLength: n
          }
        } : null
      }
    }
    static pattern(t) {
      if (!t) return xm.nullValidator;
      let e, n;
      return "string" == typeof t ? (n = "", "^" !== t.charAt(0) && (n += "^"), n += t, "$" !== t.charAt(t.length - 1) && (n += "$"), e = new RegExp(n)) : (n = t.toString(), e = t), t => {
        if (vm(t.value)) return null;
        const i = t.value;
        return e.test(i) ? null : {
          pattern: {
            requiredPattern: n,
            actualValue: i
          }
        }
      }
    }
    static nullValidator(t) {
      return null
    }
    static compose(t) {
      if (!t) return null;
      const e = t.filter(Cm);
      return 0 == e.length ? null : function (t) {
        return km(function (t, e) {
          return e.map(e => e(t))
        }(t, e))
      }
    }
    static composeAsync(t) {
      if (!t) return null;
      const e = t.filter(Cm);
      return 0 == e.length ? null : function (t) {
        return function (...t) {
          if (1 === t.length) {
            const e = t[0];
            if (l(e)) return im(e, null);
            if (c(e) && Object.getPrototypeOf(e) === Object.prototype) {
              const t = Object.keys(e);
              return im(t.map(t => e[t]), t)
            }
          }
          if ("function" == typeof t[t.length - 1]) {
            const e = t.pop();
            return im(t = 1 === t.length && l(t[0]) ? t[0] : t, null).pipe(D(t => e(...t)))
          }
          return im(t, null)
        }(function (t, e) {
          return e.map(e => e(t))
        }(t, e).map(Sm)).pipe(D(km))
      }
    }
  }

  function Cm(t) {
    return null != t
  }

  function Sm(t) {
    const e = $s(t) ? U(t) : t;
    if (!qs(e)) throw new Error("Expected validator to return Promise or Observable.");
    return e
  }

  function km(t) {
    let e = {};
    return t.forEach(t => {
      e = null != t ? Object.assign(Object.assign({}, e), t) : e
    }), 0 === Object.keys(e).length ? null : e
  }

  function Pm(t) {
    return t.validate ? e => t.validate(e) : t
  }

  function Tm(t) {
    return t.validate ? e => t.validate(e) : t
  }
  const Em = {
    provide: rm,
    useExisting: kt(() => Lm),
    multi: !0
  };
  let Lm = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
      }
      registerOnChange(t) {
        this.onChange = e => {
          t("" == e ? null : parseFloat(e))
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Do), Fs(Mo))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["input", "type", "number", "formControlName", ""],
        ["input", "type", "number", "formControl", ""],
        ["input", "type", "number", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [Lo([Em])]
    }), t
  })();
  const Am = {
    provide: rm,
    useExisting: kt(() => Om),
    multi: !0
  };
  let Im = (() => {
    class t {
      constructor() {
        this._accessors = []
      }
      add(t, e) {
        this._accessors.push([t, e])
      }
      remove(t) {
        for (let e = this._accessors.length - 1; e >= 0; --e)
          if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
      }
      select(t) {
        this._accessors.forEach(e => {
          this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value)
        })
      }
      _isSameGroup(t, e) {
        return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), Om = (() => {
    class t {
      constructor(t, e, n, i) {
        this._renderer = t, this._elementRef = e, this._registry = n, this._injector = i, this.onChange = () => {}, this.onTouched = () => {}
      }
      ngOnInit() {
        this._control = this._injector.get(fm), this._checkName(), this._registry.add(this._control, this)
      }
      ngOnDestroy() {
        this._registry.remove(this)
      }
      writeValue(t) {
        this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
      }
      registerOnChange(t) {
        this._fn = t, this.onChange = () => {
          t(this.value), this._registry.select(this)
        }
      }
      fireUncheck(t) {
        this.writeValue(t)
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _checkName() {
        this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
      }
      _throwNameError() {
        throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Do), Fs(Mo), Fs(Im), Fs(_s))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["input", "type", "radio", "formControlName", ""],
        ["input", "type", "radio", "formControl", ""],
        ["input", "type", "radio", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("change", (function () {
          return e.onChange()
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [Lo([Am])]
    }), t
  })();
  const Mm = {
    provide: rm,
    useExisting: kt(() => Rm),
    multi: !0
  };
  let Rm = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t))
      }
      registerOnChange(t) {
        this.onChange = e => {
          t("" == e ? null : parseFloat(e))
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Do), Fs(Mo))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["input", "type", "range", "formControlName", ""],
        ["input", "type", "range", "formControl", ""],
        ["input", "type", "range", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [Lo([Mm])]
    }), t
  })();
  const Nm = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });', Fm = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });'; class Dm {
    static controlParentException() {
      throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${Nm}`)
    }
    static ngModelGroupException() {
      throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${Fm}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`)
    }
    static missingFormException() {
      throw new Error(`formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${Nm}`)
    }
    static groupParentException() {
      throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${Fm}`)
    }
    static arrayParentException() {
      throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });')
    }
    static disabledAttrWarning() {
      console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
    }
    static ngModelWarning(t) {
      console.warn(`\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${"formControl"===t?"FormControlDirective":"FormControlName"}#use-with-ngmodel\n    `)
    }
  }
  const jm = {
    provide: rm,
    useExisting: kt(() => Vm),
    multi: !0
  };

  function zm(t, e) {
    return null == t ? `${e}` : (e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let Vm = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = ks
      }
      set compareWith(t) {
        if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
        this._compareWith = t
      }
      writeValue(t) {
        this.value = t;
        const e = this._getOptionId(t);
        null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
        const n = zm(e, t);
        this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
      }
      registerOnChange(t) {
        this.onChange = e => {
          this.value = this._getOptionValue(e), t(this.value)
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _registerOption() {
        return (this._idCounter++).toString()
      }
      _getOptionId(t) {
        for (const e of Array.from(this._optionMap.keys()))
          if (this._compareWith(this._optionMap.get(e), t)) return e;
        return null
      }
      _getOptionValue(t) {
        const e = function (t) {
          return t.split(":")[0]
        }(t);
        return this._optionMap.has(e) ? this._optionMap.get(e) : t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Do), Fs(Mo))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["select", "formControlName", "", 3, "multiple", ""],
        ["select", "formControl", "", 3, "multiple", ""],
        ["select", "ngModel", "", 3, "multiple", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("change", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [Lo([jm])]
    }), t
  })(), Um = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption())
      }
      set ngValue(t) {
        null != this._select && (this._select._optionMap.set(this.id, t), this._setElementValue(zm(this.id, t)), this._select.writeValue(this._select.value))
      }
      set value(t) {
        this._setElementValue(t), this._select && this._select.writeValue(this._select.value)
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t)
      }
      ngOnDestroy() {
        this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Mo), Fs(Do), Fs(Vm, 9))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["option"]
      ],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    }), t
  })();
  const Hm = {
    provide: rm,
    useExisting: kt(() => Zm),
    multi: !0
  };

  function Bm(t, e) {
    return null == t ? `${e}` : ("string" == typeof e && (e = `'${e}'`), e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let Zm = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = ks
      }
      set compareWith(t) {
        if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
        this._compareWith = t
      }
      writeValue(t) {
        let e;
        if (this.value = t, Array.isArray(t)) {
          const n = t.map(t => this._getOptionId(t));
          e = (t, e) => {
            t._setSelected(n.indexOf(e.toString()) > -1)
          }
        } else e = (t, e) => {
          t._setSelected(!1)
        };
        this._optionMap.forEach(e)
      }
      registerOnChange(t) {
        this.onChange = e => {
          const n = [];
          if (e.hasOwnProperty("selectedOptions")) {
            const t = e.selectedOptions;
            for (let e = 0; e < t.length; e++) {
              const i = t.item(e),
                r = this._getOptionValue(i.value);
              n.push(r)
            }
          } else {
            const t = e.options;
            for (let e = 0; e < t.length; e++) {
              const i = t.item(e);
              if (i.selected) {
                const t = this._getOptionValue(i.value);
                n.push(t)
              }
            }
          }
          this.value = n, t(n)
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _registerOption(t) {
        const e = (this._idCounter++).toString();
        return this._optionMap.set(e, t), e
      }
      _getOptionId(t) {
        for (const e of Array.from(this._optionMap.keys()))
          if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
        return null
      }
      _getOptionValue(t) {
        const e = function (t) {
          return t.split(":")[0]
        }(t);
        return this._optionMap.has(e) ? this._optionMap.get(e)._value : t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Do), Fs(Mo))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["select", "multiple", "", "formControlName", ""],
        ["select", "multiple", "", "formControl", ""],
        ["select", "multiple", "", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("change", (function (t) {
          return e.onChange(t.target)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [Lo([Hm])]
    }), t
  })(), $m = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption(this))
      }
      set ngValue(t) {
        null != this._select && (this._value = t, this._setElementValue(Bm(this.id, t)), this._select.writeValue(this._select.value))
      }
      set value(t) {
        this._select ? (this._value = t, this._setElementValue(Bm(this.id, t)), this._select.writeValue(this._select.value)) : this._setElementValue(t)
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t)
      }
      _setSelected(t) {
        this._renderer.setProperty(this._element.nativeElement, "selected", t)
      }
      ngOnDestroy() {
        this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Mo), Fs(Do), Fs(Zm, 9))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["option"]
      ],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    }), t
  })();

  function qm(t, e) {
    return [...e.path, t]
  }

  function Gm(t, e) {
    t || Jm(e, "Cannot find control with"), e.valueAccessor || Jm(e, "No value accessor for form control with"), t.validator = xm.compose([t.validator, e.validator]), t.asyncValidator = xm.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
      function (t, e) {
        e.valueAccessor.registerOnChange(n => {
          t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && Wm(t, e)
        })
      }(t, e),
      function (t, e) {
        t.registerOnChange((t, n) => {
          e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t)
        })
      }(t, e),
      function (t, e) {
        e.valueAccessor.registerOnTouched(() => {
          t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && Wm(t, e), "submit" !== t.updateOn && t.markAsTouched()
        })
      }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(t => {
        e.valueAccessor.setDisabledState(t)
      }), e._rawValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      }), e._rawAsyncValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      })
  }

  function Wm(t, e) {
    t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {
      emitModelToViewChange: !1
    }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1
  }

  function Km(t, e) {
    null == t && Jm(e, "Cannot find control with"), t.validator = xm.compose([t.validator, e.validator]), t.asyncValidator = xm.composeAsync([t.asyncValidator, e.asyncValidator])
  }

  function Ym(t) {
    return Jm(t, "There is no FormControl instance attached to form control element with")
  }

  function Jm(t, e) {
    let n;
    throw n = t.path.length > 1 ? `path: '${t.path.join(" -> ")}'` : t.path[0] ? `name: '${t.path}'` : "unspecified name attribute", new Error(`${e} ${n}`)
  }

  function Qm(t) {
    return null != t ? xm.compose(t.map(Pm)) : null
  }

  function Xm(t) {
    return null != t ? xm.composeAsync(t.map(Tm)) : null
  }
  const tg = [om, Rm, Lm, Vm, Zm, Om];

  function eg(t) {
    const e = ig(t) ? t.validators : t;
    return Array.isArray(e) ? Qm(e) : e || null
  }

  function ng(t, e) {
    const n = ig(e) ? e.asyncValidators : t;
    return Array.isArray(n) ? Xm(n) : n || null
  }

  function ig(t) {
    return null != t && !Array.isArray(t) && "object" == typeof t
  }
  class rg {
    constructor(t, e) {
      this.validator = t, this.asyncValidator = e, this._onCollectionChange = () => {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
    }
    get parent() {
      return this._parent
    }
    get valid() {
      return "VALID" === this.status
    }
    get invalid() {
      return "INVALID" === this.status
    }
    get pending() {
      return "PENDING" == this.status
    }
    get disabled() {
      return "DISABLED" === this.status
    }
    get enabled() {
      return "DISABLED" !== this.status
    }
    get dirty() {
      return !this.pristine
    }
    get untouched() {
      return !this.touched
    }
    get updateOn() {
      return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
    }
    setValidators(t) {
      this.validator = eg(t)
    }
    setAsyncValidators(t) {
      this.asyncValidator = ng(t)
    }
    clearValidators() {
      this.validator = null
    }
    clearAsyncValidators() {
      this.asyncValidator = null
    }
    markAsTouched(t = {}) {
      this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t)
    }
    markAllAsTouched() {
      this.markAsTouched({
        onlySelf: !0
      }), this._forEachChild(t => t.markAllAsTouched())
    }
    markAsUntouched(t = {}) {
      this.touched = !1, this._pendingTouched = !1, this._forEachChild(t => {
        t.markAsUntouched({
          onlySelf: !0
        })
      }), this._parent && !t.onlySelf && this._parent._updateTouched(t)
    }
    markAsDirty(t = {}) {
      this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t)
    }
    markAsPristine(t = {}) {
      this.pristine = !0, this._pendingDirty = !1, this._forEachChild(t => {
        t.markAsPristine({
          onlySelf: !0
        })
      }), this._parent && !t.onlySelf && this._parent._updatePristine(t)
    }
    markAsPending(t = {}) {
      this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t)
    }
    disable(t = {}) {
      const e = this._parentMarkedDirty(t.onlySelf);
      this.status = "DISABLED", this.errors = null, this._forEachChild(e => {
        e.disable(Object.assign(Object.assign({}, t), {
          onlySelf: !0
        }))
      }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, t), {
        skipPristineCheck: e
      })), this._onDisabledChange.forEach(t => t(!0))
    }
    enable(t = {}) {
      const e = this._parentMarkedDirty(t.onlySelf);
      this.status = "VALID", this._forEachChild(e => {
        e.enable(Object.assign(Object.assign({}, t), {
          onlySelf: !0
        }))
      }), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: t.emitEvent
      }), this._updateAncestors(Object.assign(Object.assign({}, t), {
        skipPristineCheck: e
      })), this._onDisabledChange.forEach(t => t(!1))
    }
    _updateAncestors(t) {
      this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
    }
    setParent(t) {
      this._parent = t
    }
    updateValueAndValidity(t = {}) {
      this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
    }
    _updateTreeValidity(t = {
      emitEvent: !0
    }) {
      this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: t.emitEvent
      })
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null
    }
    _runAsyncValidator(t) {
      if (this.asyncValidator) {
        this.status = "PENDING";
        const e = Sm(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, {
          emitEvent: t
        }))
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
    }
    setErrors(t, e = {}) {
      this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent)
    }
    get(t) {
      return function (t, e, n) {
        if (null == e) return null;
        if (Array.isArray(e) || (e = e.split(".")), Array.isArray(e) && 0 === e.length) return null;
        let i = t;
        return e.forEach(t => {
          i = i instanceof og ? i.controls.hasOwnProperty(t) ? i.controls[t] : null : i instanceof ag && i.at(t) || null
        }), i
      }(this, t)
    }
    getError(t, e) {
      const n = e ? this.get(e) : this;
      return n && n.errors ? n.errors[t] : null
    }
    hasError(t, e) {
      return !!this.getError(t, e)
    }
    get root() {
      let t = this;
      for (; t._parent;) t = t._parent;
      return t
    }
    _updateControlsErrors(t) {
      this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t)
    }
    _initObservables() {
      this.valueChanges = new Ra, this.statusChanges = new Ra
    }
    _calculateStatus() {
      return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls(e => e.status === t)
    }
    _anyControlsDirty() {
      return this._anyControls(t => t.dirty)
    }
    _anyControlsTouched() {
      return this._anyControls(t => t.touched)
    }
    _updatePristine(t = {}) {
      this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t)
    }
    _updateTouched(t = {}) {
      this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t)
    }
    _isBoxedValue(t) {
      return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t
    }
    _setUpdateStrategy(t) {
      ig(t) && null != t.updateOn && (this._updateOn = t.updateOn)
    }
    _parentMarkedDirty(t) {
      return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
    }
  }
  class sg extends rg {
    constructor(t = null, e, n) {
      super(eg(e), ng(n, e)), this._onChange = [], this._applyFormState(t), this._setUpdateStrategy(e), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      }), this._initObservables()
    }
    setValue(t, e = {}) {
      this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(t => t(this.value, !1 !== e.emitViewToModelChange)), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      this.setValue(t, e)
    }
    reset(t = null, e = {}) {
      this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(t) {
      return !1
    }
    _allControlsDisabled() {
      return this.disabled
    }
    registerOnChange(t) {
      this._onChange.push(t)
    }
    _clearChangeFns() {
      this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = () => {}
    }
    registerOnDisabledChange(t) {
      this._onDisabledChange.push(t)
    }
    _forEachChild(t) {}
    _syncPendingControls() {
      return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
        onlySelf: !0,
        emitModelToViewChange: !1
      }), 0))
    }
    _applyFormState(t) {
      this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
        onlySelf: !0,
        emitEvent: !1
      }) : this.enable({
        onlySelf: !0,
        emitEvent: !1
      })) : this.value = this._pendingValue = t
    }
  }
  class og extends rg {
    constructor(t, e, n) {
      super(eg(e), ng(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      })
    }
    registerControl(t, e) {
      return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e)
    }
    addControl(t, e) {
      this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
    }
    removeControl(t) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange()
    }
    setControl(t, e) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled
    }
    setValue(t, e = {}) {
      this._checkAllValuesPresent(t), Object.keys(t).forEach(n => {
        this._throwIfControlMissing(n), this.controls[n].setValue(t[n], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      Object.keys(t).forEach(n => {
        this.controls[n] && this.controls[n].patchValue(t[n], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    reset(t = {}, e = {}) {
      this._forEachChild((n, i) => {
        n.reset(t[i], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this._reduceChildren({}, (t, e, n) => (t[n] = e instanceof sg ? e.value : e.getRawValue(), t))
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t);
      return t && this.updateValueAndValidity({
        onlySelf: !0
      }), t
    }
    _throwIfControlMissing(t) {
      if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`)
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach(e => t(this.controls[e], e))
    }
    _setUpControls() {
      this._forEachChild(t => {
        t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
      })
    }
    _updateValue() {
      this.value = this._reduceValue()
    }
    _anyControls(t) {
      let e = !1;
      return this._forEachChild((n, i) => {
        e = e || this.contains(i) && t(n)
      }), e
    }
    _reduceValue() {
      return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t))
    }
    _reduceChildren(t, e) {
      let n = t;
      return this._forEachChild((t, i) => {
        n = e(n, t, i)
      }), n
    }
    _allControlsDisabled() {
      for (const t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled
    }
    _checkAllValuesPresent(t) {
      this._forEachChild((e, n) => {
        if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`)
      })
    }
  }
  class ag extends rg {
    constructor(t, e, n) {
      super(eg(e), ng(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      })
    }
    at(t) {
      return this.controls[t]
    }
    push(t) {
      this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange()
    }
    insert(t, e) {
      this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity()
    }
    removeAt(t) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), this.updateValueAndValidity()
    }
    setControl(t, e) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange()
    }
    get length() {
      return this.controls.length
    }
    setValue(t, e = {}) {
      this._checkAllValuesPresent(t), t.forEach((t, n) => {
        this._throwIfControlMissing(n), this.at(n).setValue(t, {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      t.forEach((t, n) => {
        this.at(n) && this.at(n).patchValue(t, {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    reset(t = [], e = {}) {
      this._forEachChild((n, i) => {
        n.reset(t[i], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this.controls.map(t => t instanceof sg ? t.value : t.getRawValue())
    }
    clear() {
      this.controls.length < 1 || (this._forEachChild(t => t._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity())
    }
    _syncPendingControls() {
      let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1);
      return t && this.updateValueAndValidity({
        onlySelf: !0
      }), t
    }
    _throwIfControlMissing(t) {
      if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`)
    }
    _forEachChild(t) {
      this.controls.forEach((e, n) => {
        t(e, n)
      })
    }
    _updateValue() {
      this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value)
    }
    _anyControls(t) {
      return this.controls.some(e => e.enabled && t(e))
    }
    _setUpControls() {
      this._forEachChild(t => this._registerControl(t))
    }
    _checkAllValuesPresent(t) {
      this._forEachChild((e, n) => {
        if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`)
      })
    }
    _allControlsDisabled() {
      for (const t of this.controls)
        if (t.enabled) return !1;
      return this.controls.length > 0 || this.disabled
    }
    _registerControl(t) {
      t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
    }
  }
  let lg = (() => {
    class t extends hm {
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormGroup(this)
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormGroup(this)
      }
      get control() {
        return this.formDirective.getFormGroup(this)
      }
      get path() {
        return qm(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return Qm(this._validators)
      }
      get asyncValidator() {
        return Xm(this._asyncValidators)
      }
      _checkParentType() {}
    }
    return t.\u0275fac = function (e) {
      return cg(e || t)
    }, t.\u0275dir = ye({
      type: t,
      features: [po]
    }), t
  })();
  const cg = ni(lg);
  let ug = (() => {
    class t {}
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
      ],
      hostAttrs: ["novalidate", ""]
    }), t
  })();
  const hg = new Vt("NgModelWithFormControlWarning"), dg = {
    provide: hm,
    useExisting: kt(() => pg)
  };
  let pg = (() => {
    class t extends hm {
      constructor(t, e) {
        super(), this._validators = t, this._asyncValidators = e, this.submitted = !1, this.directives = [], this.form = null, this.ngSubmit = new Ra
      }
      ngOnChanges(t) {
        this._checkFormPresent(), t.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations())
      }
      get formDirective() {
        return this
      }
      get control() {
        return this.form
      }
      get path() {
        return []
      }
      addControl(t) {
        const e = this.form.get(t.path);
        return Gm(e, t), e.updateValueAndValidity({
          emitEvent: !1
        }), this.directives.push(t), e
      }
      getControl(t) {
        return this.form.get(t.path)
      }
      removeControl(t) {
        ! function (t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }(this.directives, t)
      }
      addFormGroup(t) {
        const e = this.form.get(t.path);
        Km(e, t), e.updateValueAndValidity({
          emitEvent: !1
        })
      }
      removeFormGroup(t) {}
      getFormGroup(t) {
        return this.form.get(t.path)
      }
      addFormArray(t) {
        const e = this.form.get(t.path);
        Km(e, t), e.updateValueAndValidity({
          emitEvent: !1
        })
      }
      removeFormArray(t) {}
      getFormArray(t) {
        return this.form.get(t.path)
      }
      updateModel(t, e) {
        this.form.get(t.path).setValue(e)
      }
      onSubmit(t) {
        return this.submitted = !0, e = this.directives, this.form._syncPendingControls(), e.forEach(t => {
          const e = t.control;
          "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1)
        }), this.ngSubmit.emit(t), !1;
        var e
      }
      onReset() {
        this.resetForm()
      }
      resetForm(t) {
        this.form.reset(t), this.submitted = !1
      }
      _updateDomValue() {
        this.directives.forEach(t => {
          const e = this.form.get(t.path);
          t.control !== e && (function (t, e) {
            e.valueAccessor.registerOnChange(() => Ym(e)), e.valueAccessor.registerOnTouched(() => Ym(e)), e._rawValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), e._rawAsyncValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), t && t._clearChangeFns()
          }(t.control, t), e && Gm(e, t), t.control = e)
        }), this.form._updateTreeValidity({
          emitEvent: !1
        })
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(() => this._updateDomValue()), this._oldForm && this._oldForm._registerOnCollectionChange(() => {}), this._oldForm = this.form
      }
      _updateValidators() {
        const t = Qm(this._validators);
        this.form.validator = xm.compose([this.form.validator, t]);
        const e = Xm(this._asyncValidators);
        this.form.asyncValidator = xm.composeAsync([this.form.asyncValidator, e])
      }
      _checkFormPresent() {
        this.form || Dm.missingFormException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(ym, 10), Fs(bm, 10))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "formGroup", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Gs("submit", (function (t) {
          return e.onSubmit(t)
        }))("reset", (function () {
          return e.onReset()
        }))
      },
      inputs: {
        form: ["formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [Lo([dg]), po, yo]
    }), t
  })();
  const fg = {
    provide: hm,
    useExisting: kt(() => mg)
  };
  let mg = (() => {
    class t extends lg {
      constructor(t, e, n) {
        super(), this._parent = t, this._validators = e, this._asyncValidators = n
      }
      _checkParentType() {
        vg(this._parent) && Dm.groupParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(hm, 13), Fs(ym, 10), Fs(bm, 10))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "formGroupName", ""]
      ],
      inputs: {
        name: ["formGroupName", "name"]
      },
      features: [Lo([fg]), po]
    }), t
  })();
  const gg = {
    provide: hm,
    useExisting: kt(() => _g)
  };
  let _g = (() => {
    class t extends hm {
      constructor(t, e, n) {
        super(), this._parent = t, this._validators = e, this._asyncValidators = n
      }
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormArray(this)
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormArray(this)
      }
      get control() {
        return this.formDirective.getFormArray(this)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get path() {
        return qm(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get validator() {
        return Qm(this._validators)
      }
      get asyncValidator() {
        return Xm(this._asyncValidators)
      }
      _checkParentType() {
        vg(this._parent) && Dm.arrayParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(hm, 13), Fs(ym, 10), Fs(bm, 10))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "formArrayName", ""]
      ],
      inputs: {
        name: ["formArrayName", "name"]
      },
      features: [Lo([gg]), po]
    }), t
  })();

  function vg(t) {
    return !(t instanceof mg || t instanceof pg || t instanceof _g)
  }
  const yg = {
    provide: fm,
    useExisting: kt(() => bg)
  };
  let bg = (() => {
    class t extends fm {
      constructor(t, e, n, i, r) {
        super(), this._ngModelWarningConfig = r, this._added = !1, this.update = new Ra, this._ngModelWarningSent = !1, this._parent = t, this._rawValidators = e || [], this._rawAsyncValidators = n || [], this.valueAccessor = function (t, e) {
          if (!e) return null;
          Array.isArray(e) || Jm(t, "Value accessor was not provided as an array for form control with");
          let n = void 0,
            i = void 0,
            r = void 0;
          return e.forEach(e => {
            var s;
            e.constructor === cm ? n = e : (s = e, tg.some(t => s.constructor === t) ? (i && Jm(t, "More than one built-in value accessor matches form control with"), i = e) : (r && Jm(t, "More than one custom value accessor matches form control with"), r = e))
          }), r || i || n || (Jm(t, "No valid value accessor for form control with"), null)
        }(this, i)
      }
      set isDisabled(t) {
        Dm.disabledAttrWarning()
      }
      ngOnChanges(e) {
        var n, i;
        this._added || this._setUpControl(),
          function (t, e) {
            if (!t.hasOwnProperty("model")) return !1;
            const n = t.model;
            return !!n.isFirstChange() || !ks(e, n.currentValue)
          }(e, this.viewModel) && ("formControlName", n = t, this, i = this._ngModelWarningConfig, hi() && "never" !== i && ((null !== i && "once" !== i || n._ngModelWarningSentOnce) && ("always" !== i || this._ngModelWarningSent) || (Dm.ngModelWarning("formControlName"), n._ngModelWarningSentOnce = !0, this._ngModelWarningSent = !0)), this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this)
      }
      viewToModelUpdate(t) {
        this.viewModel = t, this.update.emit(t)
      }
      get path() {
        return qm(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return Qm(this._rawValidators)
      }
      get asyncValidator() {
        return Xm(this._rawAsyncValidators)
      }
      _checkParentType() {
        !(this._parent instanceof mg) && this._parent instanceof lg ? Dm.ngModelGroupException() : this._parent instanceof mg || this._parent instanceof pg || this._parent instanceof _g || Dm.controlParentException()
      }
      _setUpControl() {
        this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(hm, 13), Fs(ym, 10), Fs(bm, 10), Fs(rm, 10), Fs(hg, 8))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "formControlName", ""]
      ],
      inputs: {
        isDisabled: ["disabled", "isDisabled"],
        name: ["formControlName", "name"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [Lo([yg]), po, yo]
    }), t._ngModelWarningSentOnce = !1, t
  })();
  const wg = {
    provide: ym,
    useExisting: kt(() => xg),
    multi: !0
  };
  let xg = (() => {
    class t {
      get required() {
        return this._required
      }
      set required(t) {
        this._required = null != t && !1 !== t && "false" !== `${t}`, this._onChange && this._onChange()
      }
      validate(t) {
        return this.required ? xm.required(t) : null
      }
      registerOnValidatorChange(t) {
        this._onChange = t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"]
      ],
      hostVars: 1,
      hostBindings: function (t, e) {
        2 & t && Os("required", e.required ? "" : null)
      },
      inputs: {
        required: "required"
      },
      features: [Lo([wg])]
    }), t
  })(), Cg = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      }
    }), t
  })(), Sg = (() => {
    class t {
      group(t, e = null) {
        const n = this._reduceControls(t);
        let i = null,
          r = null,
          s = void 0;
        return null != e && (function (t) {
          return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn
        }(e) ? (i = null != e.validators ? e.validators : null, r = null != e.asyncValidators ? e.asyncValidators : null, s = null != e.updateOn ? e.updateOn : void 0) : (i = null != e.validator ? e.validator : null, r = null != e.asyncValidator ? e.asyncValidator : null)), new og(n, {
          asyncValidators: r,
          updateOn: s,
          validators: i
        })
      }
      control(t, e, n) {
        return new sg(t, e, n)
      }
      array(t, e, n) {
        const i = t.map(t => this._createControl(t));
        return new ag(i, e, n)
      }
      _reduceControls(t) {
        const e = {};
        return Object.keys(t).forEach(n => {
          e[n] = this._createControl(t[n])
        }), e
      }
      _createControl(t) {
        return t instanceof sg || t instanceof og || t instanceof ag ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), kg = (() => {
    class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [{
            provide: hg,
            useValue: e.warnOnNgModelWithFormControl
          }]
        }
      }
    }
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      providers: [Sg, Im],
      imports: [Cg]
    }), t
  })(), Pg = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-authentications-main"]
      ],
      decls: 4,
      vars: 0,
      consts: [
        [1, "authentication"],
        [1, "form-login"],
        [1, "col-md-auto"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "div", 0), Us(1, "div", 1), Us(2, "div", 2), Bs(3, "router-outlet"), Hs(), Hs(), Hs())
      },
      directives: [If],
      styles: [".authentication[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#5d6d00;color:#eceff1}.authentication[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.form-login[_ngcontent-%COMP%]{margin:3% auto;width:500px}"]
    }), t
  })(), Tg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.router = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/authentication/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.getToken()
          })
        }
      }
      login(t) {
        return this.http.post(this.baseUrl, t)
      }
      user() {
        return this.http.get(this.baseUrl + "user", this.options)
      }
      validity() {
        return this.http.get(this.baseUrl + "validity", this.options)
      }
      loggedIn() {
        return !!localStorage.getItem("token")
      }
      getToken() {
        return localStorage.getItem("token")
      }
      logoutUser() {
        localStorage.clear(), this.router.navigate(["/login"])
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Sf))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Eg(t, e) {
    if (1 & t && (Us(0, "div", 12), oo(1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), ao(t.errorMessage)
    }
  }

  function Lg(t, e) {
    1 & t && (Us(0, "small", 14), oo(1, "E-mail obligatoire"), Hs())
  }

  function Ag(t, e) {
    1 & t && (Us(0, "small", 14), oo(1, "E-mail invalide"), Hs())
  }

  function Ig(t, e) {
    if (1 & t && (Us(0, "div"), Rs(1, Lg, 2, 0, "small", 13), Rs(2, Ag, 2, 0, "small", 13), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), zs("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.required), Ai(1), zs("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.email)
    }
  }

  function Og(t, e) {
    1 & t && (Us(0, "small", 14), oo(1, "Mot de passe obligatoire"), Hs())
  }

  function Mg(t, e) {
    if (1 & t && (Us(0, "div"), Rs(1, Og, 2, 0, "small", 13), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), zs("ngIf", null == t.loginForm.get("password").errors ? null : t.loginForm.get("password").errors.required)
    }
  }
  const Rg = [{
    path: "",
    component: Pg,
    children: [{
      path: "login",
      component: (() => {
        class t {
          constructor(t, e, n) {
            this.fb = t, this.authenticationService = e, this.router = n
          }
          ngOnInit() {
            this.createForm()
          }
          createForm() {
            this.loginForm = this.fb.group({
              email: ["", [xm.required, xm.email]],
              password: ["", xm.required]
            })
          }
          onSubmit() {
            this.authenticationService.login(this.loginForm.value).subscribe(t => {
              localStorage.setItem("token", t.token), "admin" === t.role ? this.router.navigate(["/administrator/dashboard"]) : "officer" === t.role ? this.router.navigate(["/townhalls/dashboard"]) : "avec" === t.role ? this.router.navigate(["/association/dashboard"]) : "supplier" === t.role ? this.router.navigate(["/supplier/dashboard"]) : "banker" === t.role && this.router.navigate(["/bank/dashboard"])
            }, t => {
              t instanceof eh && 404 === t.status && (this.errorMessage = "E-mail ou mot de passe incorrect")
            })
          }
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(Fs(Sg), Fs(Tg), Fs(Sf))
        }, t.\u0275cmp = pe({
          type: t,
          selectors: [
            ["app-authentications-login"]
          ],
          decls: 20,
          vars: 9,
          consts: [
            [1, "text-center"],
            ["src", "../../../assets/images/logo.png", "alt", "logo CSSS", 1, "logo"],
            ["class", "alert alert-danger", 4, "ngIf"],
            [3, "formGroup", "ngSubmit"],
            [1, "form-group"],
            ["for", "email"],
            ["type", "email", "name", "email", "formControlName", "email", "id", "email", "placeholder", "ADRESSE E-MAIL", 1, "form-control"],
            [4, "ngIf"],
            ["for", "password"],
            ["type", "password", "name", "password", "formControlName", "password", "id", "password", "placeholder", "MOT DE PASSE", 1, "form-control"],
            ["type", "submit", 1, "button-login", 3, "disabled"],
            ["routerLinkActive", "active", "href", "http://sms.csss-ci.com", 1, "nav-link"],
            [1, "alert", "alert-danger"],
            ["class", "text-danger", 4, "ngIf"],
            [1, "text-danger"]
          ],
          template: function (t, e) {
            1 & t && (Us(0, "div", 0), Bs(1, "img", 1), Hs(), Rs(2, Eg, 2, 1, "div", 2), Us(3, "form", 3), Gs("ngSubmit", (function () {
              return e.onSubmit()
            })), Us(4, "div", 4), Us(5, "label", 5), oo(6, "Adresse e-mail :"), Hs(), Bs(7, "input", 6), Rs(8, Ig, 3, 2, "div", 7), Hs(), Us(9, "div", 4), Us(10, "label", 8), oo(11, "Mot de passe :"), Hs(), Bs(12, "input", 9), Rs(13, Mg, 2, 1, "div", 7), Hs(), Us(14, "div", 4), Us(15, "button", 10), oo(16, " CONNEXION "), Hs(), Us(17, "div", 0), Us(18, "a", 11), oo(19, " Acc\xe8s aux comptes SMS "), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(2), zs("ngIf", e.errorMessage), Ai(1), zs("formGroup", e.loginForm), Ai(4), eo("is-invalid", e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Ai(1), zs("ngIf", e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Ai(4), eo("is-invalid", e.loginForm.get("password").invalid && e.loginForm.get("password").touched), Ai(1), zs("ngIf", e.loginForm.get("password").invalid && e.loginForm.get("password").touched), Ai(2), zs("disabled", !e.loginForm.valid))
          },
          directives: [Qc, ug, _m, pg, cm, gm, bg, Ef],
          styles: ["h1[_ngcontent-%COMP%]{margin-bottom:20px}.button-login[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}.button-login[_ngcontent-%COMP%]{display:block;border-radius:0;border:none;background-color:#d4e157;color:#fff;width:100%;padding:10px 0;font-weight:700}a[_ngcontent-%COMP%]{color:#fff}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#f9fbe7}"]
        }), t
      })()
    }]
  }];
  let Ng = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Uf.forRoot(Rg)], Uf
      ]
    }), t
  })(), Fg = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg, Ng]
      ]
    }), t
  })();
  const Dg = function () {
    return ["/administrator/dashboard"]
  }, jg = function () {
    return {}
  }, zg = function () {
    return ["/administrator/townhalls"]
  }, Vg = function () {
    return ["/administrator/associations"]
  }, Ug = function () {
    return ["/administrator/households"]
  }, Hg = function () {
    return ["/administrator/needs"]
  }, Bg = function () {
    return ["/administrator/suppliers"]
  }, Zg = function () {
    return ["/administrator/sensitization/sms"]
  }, $g = function () {
    return ["/administrator/banks"]
  };
  let qg = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {
        this.getUser()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof eh && 401 === t.status && this.authService.logoutUser()
        })
      }
      sidebar() {
        this.status = !this.status
      }
      responsive() {
        this.mobile = !this.mobile
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-admins-main"]
      ],
      decls: 60,
      vars: 20,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "float-right", "btn-close", 3, "click"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "ngClass"],
        ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"],
        ["data-feather", "users"],
        ["data-feather", "bar-chart-2"],
        ["data-feather", "layers"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["href", "#", 1, "nav-link"],
        ["data-feather", "file-text"],
        ["routerLink", "/administrator/administrators", "routerLinkActive", "active", 1, "nav-link"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "header", 0), Us(1, "div", 1), Gs("click", (function () {
          return e.sidebar()
        })), Bs(2, "span"), Bs(3, "span"), Bs(4, "span"), Hs(), Hs(), Us(5, "div", 2), Us(6, "button", 3), Gs("click", (function () {
          return e.sidebar()
        })), oo(7, "X"), Hs(), Us(8, "nav"), Us(9, "div", 4), Us(10, "ul", 5), Us(11, "li", 6), Us(12, "a", 7), oo(13, " Tableau de Bord "), Hs(), Hs(), Us(14, "li", 6), Us(15, "a", 8), oo(16, " Municipalit\xe9 "), Hs(), Hs(), Us(17, "li", 6), Us(18, "a", 8), oo(19, " Associations "), Hs(), Hs(), Us(20, "li", 6), Us(21, "a", 8), Bs(22, "span", 9), oo(23, " M\xe9nages "), Hs(), Hs(), Us(24, "li", 6), Us(25, "a", 8), Bs(26, "span", 10), oo(27, " Appels d'offre "), Hs(), Hs(), Us(28, "li", 6), Us(29, "a", 8), Bs(30, "span", 10), oo(31, " Fournisseurs "), Hs(), Hs(), Us(32, "li", 6), Us(33, "a", 8), Bs(34, "span", 11), oo(35, " Sensibilisations "), Hs(), Hs(), Us(36, "li", 6), Us(37, "a", 8), oo(38, " Banques "), Hs(), Hs(), Hs(), Us(39, "h6", 12), Us(40, "span"), oo(41, "Param\xe8trages"), Hs(), Us(42, "a", 13), Bs(43, "span", 14), Hs(), Hs(), Us(44, "ul", 15), Us(45, "li", 6), Us(46, "a", 16), Bs(47, "span", 17), oo(48, " Changer de mot de passe "), Hs(), Hs(), Us(49, "li", 6), Us(50, "a", 18), Bs(51, "span", 17), oo(52, " Administrateurs "), Hs(), Hs(), Us(53, "li", 6), Us(54, "a", 19), Gs("click", (function () {
          return e.authService.logoutUser()
        })), oo(55, "D\xe9connexion"), Hs(), Hs(), Hs(), Hs(), Hs(), Hs(), Us(56, "div", 20), Us(57, "div", 21), Us(58, "main", 22), Bs(59, "router-outlet"), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Ai(7), zs("routerLink", Sa(11, Dg))("ngClass", Sa(12, jg)), Ai(3), zs("routerLink", Sa(13, zg)), Ai(3), zs("routerLink", Sa(14, Vg)), Ai(3), zs("routerLink", Sa(15, Ug)), Ai(4), zs("routerLink", Sa(16, Hg)), Ai(4), zs("routerLink", Sa(17, Bg)), Ai(4), zs("routerLink", Sa(18, Zg)), Ai(4), zs("routerLink", Sa(19, $g)), Ai(19), zs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Wc, Pf, Ef, If],
      styles: [".logo[_ngcontent-%COMP%]{width:50%;margin-bottom:20px}"]
    }), t
  })(), Gg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/townHalls/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      getTownhalls() {
        return this.http.get(this.baseUrl, this.options)
      }
      getTownhall(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setTownhall(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      putTownhall(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Wg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/associations/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      getAssociation(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setAssociation(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      putAssociation(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      delAssociation(t) {
        return this.http.delete(this.baseUrl + t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Kg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationsService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/households/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationsService.getToken()
          })
        }
      }
      getHouseHolds() {
        return this.http.get(this.baseUrl, this.options)
      }
      getHouseHold(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setHouseHold(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      putHouseHold(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      delHouseHold(t) {
        return this.http.delete(this.baseUrl + t, this.options)
      }
      address(t) {
        return this.http.put(this.baseUrl + "address", t, this.options)
      }
      association() {
        return this.http.get(this.baseUrl + "association", this.options)
      }
      associationById(t) {
        return this.http.get(this.baseUrl + "association/" + t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Yg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/suppliers/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      getSuppliers() {
        return this.http.get(this.baseUrl, this.options)
      }
      getSupplier(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setSupplier(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      getDomains() {
        return this.http.get(this.baseUrl + "services", this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Jg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/needs/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      household(t) {
        return this.http.get(this.baseUrl + "household/" + t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
      supplier() {
        return this.http.get(this.baseUrl + "supplier", this.options)
      }
      supplierById(t) {
        return this.http.get(this.baseUrl + "supplier/" + t, this.options)
      }
      association() {
        return this.http.get(this.baseUrl + "association", this.options)
      }
      associationById(t) {
        return this.http.get(this.baseUrl + "association/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Qg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/complaints/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
      association() {
        return this.http.get(this.baseUrl + "association", this.options)
      }
      household(t) {
        return this.http.get(this.baseUrl + "household/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Xg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/proposals/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      need(t) {
        return this.http.get(this.baseUrl + "need/" + t, this.options)
      }
      myProposals() {
        return this.http.get(this.baseUrl + "myProposals/", this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function t_(t, e) {
    if (1 & t && (Us(0, "p", 9), Us(1, "span"), oo(2, "Salut, "), Us(3, "b"), oo(4), Hs(), Hs(), Us(5, "span"), oo(6, "Voici ce qui se passe aujourd'hui."), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(4), ao(t.user.name)
    }
  }
  let e_ = (() => {
    class t {
      constructor(t, e, n, i, r, s, o, a, l) {
        this.authService = t, this.townhallsService = e, this.associationsService = n, this.householdsService = i, this.suppliersService = r, this.needsService = s, this.complaintsService = o, this.proposalsService = a, this.router = l
      }
      ngOnInit() {
        this.getUser(), this.getTownHalls(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          console.log(t)
        })
      }
      getComplaints() {
        this.complaintsService.gets().subscribe(t => this.complaints = t, t => {
          console.log(t)
        })
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.townhalls = t, t => {
          console.log(t)
        })
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => this.associations = t, t => {
          console.log(t)
        })
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => this.households = t, t => {
          console.log(t)
        })
      }
      getSuppliers() {
        this.suppliersService.getSuppliers().subscribe(t => this.suppliers = t, t => {
          console.log(t)
        })
      }
      getNeeds() {
        this.needsService.gets().subscribe(t => this.needs = t, t => {
          console.log(t)
        })
      }
      getProposals() {
        this.proposalsService.gets().subscribe(t => this.proposals = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg), Fs(Gg), Fs(Wg), Fs(Kg), Fs(Yg), Fs(Jg), Fs(Qg), Fs(Xg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-admins-dashboard"]
      ],
      decls: 55,
      vars: 8,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        [1, "row"],
        [1, "col-lg-4", "title-middle"],
        [1, "col-lg-6", "title-middle"],
        [1, "connected"]
      ],
      template: function (t, e) {
        1 & t && (Rs(0, t_, 7, 1, "p", 0), Us(1, "section", 1), Us(2, "div", 2), Us(3, "div", 3), Us(4, "p", 4), oo(5, "Municipalit\xe9s"), Hs(), Us(6, "p", 5), oo(7), Hs(), Hs(), Hs(), Us(8, "div", 2), Us(9, "div", 3), Us(10, "p", 4), oo(11, "A.V.E.Cs"), Hs(), Us(12, "p", 5), oo(13), Hs(), Hs(), Hs(), Us(14, "div", 2), Us(15, "div", 3), Us(16, "p", 4), oo(17, "M\xe9nages"), Hs(), Us(18, "p", 5), oo(19), Hs(), Hs(), Hs(), Us(20, "div", 2), Us(21, "div", 3), Us(22, "p", 4), oo(23, "Fournisseurs"), Hs(), Us(24, "p", 5), oo(25), Hs(), Hs(), Hs(), Hs(), Us(26, "section"), Us(27, "h2"), oo(28, "Besoins et Appels d'offres"), Hs(), Us(29, "div", 6), Us(30, "div", 7), Us(31, "p"), oo(32), Bs(33, "br"), oo(34, " Besoins exprim\xe9s "), Hs(), Hs(), Us(35, "div", 7), Us(36, "p"), oo(37), Bs(38, "br"), oo(39, " Propositions "), Hs(), Hs(), Us(40, "div", 7), Us(41, "p"), oo(42), Bs(43, "br"), oo(44, " Plaintes "), Hs(), Hs(), Hs(), Hs(), Us(45, "section"), Us(46, "h2"), oo(47, "Bilan financiers"), Hs(), Us(48, "div", 6), Us(49, "div", 8), Us(50, "p"), oo(51, "Projets financ\xe9s : 0"), Hs(), Hs(), Us(52, "div", 8), Us(53, "p"), oo(54, "0% de financement "), Hs(), Hs(), Hs(), Hs()), 2 & t && (zs("ngIf", e.user), Ai(7), ao(e.townhalls ? e.townhalls.length : 0), Ai(6), ao(e.associations ? e.associations.length : 0), Ai(6), ao(e.households ? e.households.length : 0), Ai(6), ao(e.suppliers ? e.suppliers.length : 0), Ai(7), lo(" ", e.needs ? e.needs.length : 0, " "), Ai(5), lo(" ", e.proposals ? e.proposals.length : 0, " "), Ai(5), lo(" ", e.complaints ? e.complaints.length : 0, " "))
      },
      directives: [Qc],
      styles: [".enumeration[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin-bottom:40px}.enumeration[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;display:block;text-align:center;color:#827717;font-weight:600}.enumeration[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-family:Roboto Condensed,sans-serif;font-weight:600;font-size:21px;color:#000}.enumeration[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]{border:1px solid #e0e0e0;padding:20px}"]
    }), t
  })(), n_ = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/admins/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      setAdmin(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      getAdmins() {
        return this.http.get(this.baseUrl, this.options)
      }
      getAdmin(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      putAdmin(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), i_ = (() => {
    class t {
      constructor(t, e, n) {
        this.adminsService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.adminForm = this.fb.group({
          admin: ["", xm.required],
          email: ["", [xm.required, xm.email]]
        })
      }
      onSubmit() {
        this.adminsService.setAdmin(this.adminForm.value).subscribe(t => {
          this.router.navigate(["/adminstrator/list"])
        }, t => {
          this.errorMessage = t.message
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(n_), Fs(Sg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-admins-add"]
      ],
      decls: 18,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "admin"],
        ["type", "text", "formControlName", "admin", "id", "admin", "required", "", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", "required", "", 1, "form-control"],
        ["type", "submit", 1, "button", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Administrateur"), Hs(), Bs(2, "hr"), Us(3, "div", 0), Us(4, "h2"), oo(5, "Ajouter Administrateur"), Hs(), Us(6, "form", 1), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(7, "div", 2), Us(8, "label", 3), oo(9, "Nom et prenoms"), Hs(), Bs(10, "input", 4), Hs(), Us(11, "div", 2), Us(12, "label", 5), oo(13, "Adresse e-mail"), Hs(), Bs(14, "input", 6), Hs(), Us(15, "div", 2), Us(16, "button", 7), oo(17, "ENREGISTRER"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(6), zs("formGroup", e.adminForm), Ai(10), zs("disabled", !e.adminForm.valid))
      },
      directives: [ug, _m, pg, cm, gm, bg, xg],
      styles: [""]
    }), t
  })();

  function r_(t, e) {
    if (1 & t && (Us(0, "div", 9), oo(1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), ao(t.errorMessage)
    }
  }

  function s_(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.admin), Ai(2), ao(t.email)
    }
  }
  let o_ = (() => {
    class t {
      constructor(t) {
        this.adminsService = t
      }
      ngOnInit() {
        this.getAdmins()
      }
      getAdmins() {
        this.adminsService.getAdmins().subscribe(t => {
          this.admins = t
        }, t => {
          this.errorMessage = t.message
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(n_))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-admins-list"]
      ],
      decls: 21,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/add", 1, "bouton", "float-right"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "alert", "alert-danger"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Administrateurs"), Hs(), Us(2, "h3"), Us(3, "a", 0), oo(4, "AJOUTER"), Hs(), Hs(), Us(5, "nav", 1), Us(6, "ol", 2), Us(7, "li", 3), Us(8, "a", 4), oo(9, "Tableau de bord"), Hs(), Hs(), Us(10, "li", 5), oo(11, "Administrateurs"), Hs(), Hs(), Hs(), Rs(12, r_, 2, 1, "div", 6), Us(13, "table", 7), Us(14, "thead"), Us(15, "th"), oo(16, "Admin"), Hs(), Us(17, "th"), oo(18, "E-mail"), Hs(), Hs(), Us(19, "tbody"), Rs(20, s_, 5, 2, "tr", 8), Hs(), Hs()), 2 & t && (Ai(12), zs("ngIf", e.errorMessage), Ai(8), zs("ngForOf", e.admins))
      },
      directives: [Pf, Qc, Yc],
      styles: [""]
    }), t
  })(), a_ = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-sensitization-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Sensibilisations"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })(), l_ = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-sms-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Bs(0, "router-outlet")
      },
      directives: [If],
      styles: [""]
    }), t
  })(), c_ = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/sensitizations", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      setAll(t) {
        return this.http.post(this.baseUrl + "/all", t, this.options)
      }
      setChiefs(t) {
        return this.http.post(this.baseUrl + "/chiefs", t, this.options)
      }
      setAssociation(t) {
        return this.http.post(this.baseUrl + "/association", t, this.options)
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function u_(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.message), Ai(2), ao(t.recipient), Ai(2), ao(t.messageDate)
    }
  }
  let h_ = (() => {
    class t {
      constructor(t) {
        this.messagesService = t
      }
      ngOnInit() {
        this.getSms()
      }
      getSms() {
        this.messagesService.gets().subscribe(t => {
          this.messages = t
        }, t => {
          console.error()
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(c_))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-sms-list"]
      ],
      decls: 16,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/sensitization/voice/send", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/send", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/association", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/everyone", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/chiefs", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1, " SMS envoy\xe9s\n"), Hs(), Us(2, "div"), Us(3, "a", 0), oo(4, "Envoyer Message Vocal"), Hs(), Us(5, "a", 1), oo(6, "Envoyer sms"), Hs(), Us(7, "a", 2), oo(8, "Envoyer sms une AVEC"), Hs(), Us(9, "a", 3), oo(10, "Envoyer sms \xe0 toutes les AVECs"), Hs(), Us(11, "a", 4), oo(12, "Envoyer SMS aux presidents d'AVEC"), Hs(), Hs(), Us(13, "table", 5), Us(14, "tbody"), Rs(15, u_, 7, 3, "tr", 6), Hs(), Hs()), 2 & t && (Ai(15), zs("ngForOf", e.messages))
      },
      directives: [Pf, Yc],
      styles: [""]
    }), t
  })();

  function d_(t, e) {
    if (1 & t && (Us(0, "div", 10), oo(1), La(2, "json"), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), ao(Aa(2, 1, t.errorMessage))
    }
  }

  function p_(t, e) {
    if (1 & t && (Us(0, "div", 11), oo(1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), ao(t.successMessage)
    }
  }
  let f_ = (() => {
    class t {
      constructor(t, e) {
        this.messagesService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", xm.required],
          recipient: ["", [xm.required, xm.minLength(11)]]
        })
      }
      onSubmit() {
        this.messagesService.set(this.smsForm.value).subscribe(t => {
          this.successMessage = "Message envoy\xe9 avec succ\xe8s"
        }, t => {
          this.errorMessage = "Une erreur s'est produite, message non envoy\xe9"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(c_), Fs(Sg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-sms-send"]
      ],
      decls: 19,
      vars: 4,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        ["class", "alert alert-danger", 4, "ngIf"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "recipient"],
        ["type", "text", "name", "recipient", "formControlName", "recipient", "id", "recipient", 1, "form-control"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [1, "alert", "alert-danger"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), Us(1, "a", 0), oo(2, "Retour"), Hs(), oo(3, " Envoi de SMS\n"), Hs(), Us(4, "div", 1), Rs(5, d_, 3, 3, "div", 2), Rs(6, p_, 2, 1, "div", 3), Us(7, "form", 4), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(8, "div", 5), Us(9, "label", 6), oo(10, "Destinataires"), Hs(), Bs(11, "input", 7), Hs(), Us(12, "div", 5), Us(13, "label", 6), oo(14, "Message"), Hs(), Bs(15, "textarea", 8), Hs(), Us(16, "div", 5), Us(17, "button", 9), oo(18, "Envoyer"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("ngIf", e.errorMessage), Ai(1), zs("ngIf", e.successMessage), Ai(1), zs("formGroup", e.smsForm), Ai(10), zs("disabled", !e.smsForm.valid))
      },
      directives: [Pf, Qc, ug, _m, pg, cm, gm, bg],
      pipes: [iu],
      styles: [""]
    }), t
  })(), m_ = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", xm.required]
        })
      }
      onSubmit() {
        this.messagesService.setAll(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(c_), Fs(Sg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-sms-everyone"]
      ],
      decls: 13,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), Us(1, "a", 0), oo(2, "Retour"), Hs(), oo(3, " Envoi de SMS \xe0 toutes les AVEC\n"), Hs(), Us(4, "div", 1), Us(5, "form", 2), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(6, "div", 3), Us(7, "label", 4), oo(8, "Message"), Hs(), Bs(9, "textarea", 5), Hs(), Us(10, "div", 3), Us(11, "button", 6), oo(12, "Envoyer"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("formGroup", e.smsForm), Ai(6), zs("disabled", !e.smsForm.valid))
      },
      directives: [Pf, ug, _m, pg, cm, gm, bg],
      styles: [""]
    }), t
  })(), g_ = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", xm.required]
        })
      }
      onSubmit() {
        this.messagesService.setChiefs(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(c_), Fs(Sg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-sms-chiefs"]
      ],
      decls: 13,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), Us(1, "a", 0), oo(2, "Retour"), Hs(), oo(3, " Envoi de SMS aux pr\xe9sidents d'AVEC\n"), Hs(), Us(4, "div", 1), Us(5, "form", 2), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(6, "div", 3), Us(7, "label", 4), oo(8, "Message"), Hs(), Bs(9, "textarea", 5), Hs(), Us(10, "div", 3), Us(11, "button", 6), oo(12, "Envoyer"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("formGroup", e.smsForm), Ai(6), zs("disabled", !e.smsForm.valid))
      },
      directives: [Pf, ug, _m, pg, cm, gm, bg],
      styles: [""]
    }), t
  })();

  function __(t, e) {
    if (1 & t && (Us(0, "option", 10), oo(1), Hs()), 2 & t) {
      const t = e.$implicit;
      zs("value", t.idassociation), Ai(1), ao(t.association)
    }
  }
  let v_ = (() => {
    class t {
      constructor(t, e, n, i) {
        this.messagesService = t, this.associationsService = e, this.fb = n, this.router = i
      }
      ngOnInit() {
        this.createForm(), this.getAssociations()
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => {
          this.associations = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.smsForm = this.fb.group({
          recipient: ["", xm.required],
          message: ["", xm.required]
        })
      }
      onSubmit() {
        this.messagesService.setAssociation(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(c_), Fs(Wg), Fs(Sg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-sms-association"]
      ],
      decls: 20,
      vars: 3,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "recipient", "id", "recipient", "formControlName", "recipient", 1, "form-control"],
        ["value", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [3, "value"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), Us(1, "a", 0), oo(2, "Retour"), Hs(), oo(3, " Envoi de SMS \xe0 un AVEC\n"), Hs(), Us(4, "div", 1), Us(5, "form", 2), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(6, "div", 3), Us(7, "label", 4), oo(8, "AVEC"), Hs(), Us(9, "select", 5), Us(10, "option", 6), oo(11, "Choisir"), Hs(), Rs(12, __, 2, 2, "option", 7), Hs(), Hs(), Us(13, "div", 3), Us(14, "label", 4), oo(15, "Message"), Hs(), Bs(16, "textarea", 8), Hs(), Us(17, "div", 3), Us(18, "button", 9), oo(19, "Envoyer"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("formGroup", e.smsForm), Ai(7), zs("ngForOf", e.associations), Ai(6), zs("disabled", !e.smsForm.valid))
      },
      directives: [Pf, ug, _m, pg, Vm, gm, bg, Um, $m, Yc, cm],
      styles: [""]
    }), t
  })();

  function y_(t, e) {
    if (1 & t) {
      var n = Zs();
      Us(0, "a", 11), Gs("keyup.enter", (function () {
        return Ke(n), Ys(3), Ns(1).previous()
      }))("click", (function () {
        return Ke(n), Ys(3), Ns(1).previous()
      })), oo(1), Us(2, "span", 12), oo(3), Hs(), Hs()
    }
    if (2 & t) {
      var i = Ys(3);
      Os("aria-label", i.previousLabel + " " + i.screenReaderPageLabel), Ai(1), lo(" ", i.previousLabel, " "), Ai(2), ao(i.screenReaderPageLabel)
    }
  }

  function b_(t, e) {
    if (1 & t && (Us(0, "span"), oo(1), Us(2, "span", 12), oo(3), Hs(), Hs()), 2 & t) {
      var n = Ys(3);
      Ai(1), lo(" ", n.previousLabel, " "), Ai(2), ao(n.screenReaderPageLabel)
    }
  }

  function w_(t, e) {
    if (1 & t && (Us(0, "li", 8), Rs(1, y_, 4, 3, "a", 9), Rs(2, b_, 4, 2, "span", 10), Hs()), 2 & t) {
      Ys(2);
      var n = Ns(1);
      eo("disabled", n.isFirstPage()), Ai(1), zs("ngIf", 1 < n.getCurrent()), Ai(1), zs("ngIf", n.isFirstPage())
    }
  }

  function x_(t, e) {
    if (1 & t) {
      var n = Zs();
      Us(0, "a", 11), Gs("keyup.enter", (function () {
        Ke(n);
        var t = Ys().$implicit;
        return Ys(2), Ns(1).setCurrent(t.value)
      }))("click", (function () {
        Ke(n);
        var t = Ys().$implicit;
        return Ys(2), Ns(1).setCurrent(t.value)
      })), Us(1, "span", 12), oo(2), Hs(), Us(3, "span"), oo(4), La(5, "number"), Hs(), Hs()
    }
    if (2 & t) {
      var i = Ys().$implicit,
        r = Ys(2);
      Ai(2), lo("", r.screenReaderPageLabel, " "), Ai(2), ao("..." === i.label ? i.label : Ia(5, 2, i.label, ""))
    }
  }

  function C_(t, e) {
    if (1 & t && (function (t, e, n) {
        const i = Ge(),
          r = We(),
          s = r.firstCreatePass ? function (t, e, n, i, r) {
            const s = e.consts,
              o = Be(s, void 0),
              a = Ui(e, n[6], 0, 4, "ng-container", o);
            return null !== o && xs(a, o), tr(e, n, a, Be(s, void 0)), null !== e.queries && e.queries.elementStart(e, a), a
          }(0, r, i) : r.data[19];
        Je(s, !0);
        const o = i[19] = i[11].createComment("");
        Vr(r, i, o, s), gi(o, i), Ee(s) && (Gi(r, i, s), qi(r, s, i))
      }(), Us(1, "span", 12), oo(2), Hs(), Us(3, "span"), oo(4), La(5, "number"), Hs(), function () {
        let t = Ye();
        const e = We();
        Qe() ? Xe() : (t = t.parent, Je(t, !1)), e.firstCreatePass && (bn(e, t), Pe(t) && e.queries.elementEnd(t))
      }()), 2 & t) {
      var n = Ys().$implicit,
        i = Ys(2);
      Ai(2), lo("", i.screenReaderCurrentLabel, " "), Ai(2), ao("..." === n.label ? n.label : Ia(5, 2, n.label, ""))
    }
  }

  function S_(t, e) {
    if (1 & t && (Us(0, "li"), Rs(1, x_, 6, 5, "a", 9), Rs(2, C_, 6, 5, "ng-container", 10), Hs()), 2 & t) {
      var n = e.$implicit;
      Ys(2);
      var i = Ns(1);
      eo("current", i.getCurrent() === n.value)("ellipsis", "..." === n.label), Ai(1), zs("ngIf", i.getCurrent() !== n.value), Ai(1), zs("ngIf", i.getCurrent() === n.value)
    }
  }

  function k_(t, e) {
    if (1 & t) {
      var n = Zs();
      Us(0, "a", 11), Gs("keyup.enter", (function () {
        return Ke(n), Ys(3), Ns(1).next()
      }))("click", (function () {
        return Ke(n), Ys(3), Ns(1).next()
      })), oo(1), Us(2, "span", 12), oo(3), Hs(), Hs()
    }
    if (2 & t) {
      var i = Ys(3);
      Os("aria-label", i.nextLabel + " " + i.screenReaderPageLabel), Ai(1), lo(" ", i.nextLabel, " "), Ai(2), ao(i.screenReaderPageLabel)
    }
  }

  function P_(t, e) {
    if (1 & t && (Us(0, "span"), oo(1), Us(2, "span", 12), oo(3), Hs(), Hs()), 2 & t) {
      var n = Ys(3);
      Ai(1), lo(" ", n.nextLabel, " "), Ai(2), ao(n.screenReaderPageLabel)
    }
  }

  function T_(t, e) {
    if (1 & t && (Us(0, "li", 13), Rs(1, k_, 4, 3, "a", 9), Rs(2, P_, 4, 2, "span", 10), Hs()), 2 & t) {
      Ys(2);
      var n = Ns(1);
      eo("disabled", n.isLastPage()), Ai(1), zs("ngIf", !n.isLastPage()), Ai(1), zs("ngIf", n.isLastPage())
    }
  }

  function E_(t, e) {
    if (1 & t && (Us(0, "ul", 3), Rs(1, w_, 3, 4, "li", 4), Us(2, "li", 5), oo(3), Hs(), Rs(4, S_, 3, 6, "li", 6), Rs(5, T_, 3, 4, "li", 7), Hs()), 2 & t) {
      var n = Ys(),
        i = Ns(1);
      eo("responsive", n.responsive), Os("aria-label", n.screenReaderPaginationLabel), Ai(1), zs("ngIf", n.directionLinks), Ai(2), co(" ", i.getCurrent(), " / ", i.getLastPage(), " "), Ai(1), zs("ngForOf", i.pages), Ai(1), zs("ngIf", n.directionLinks)
    }
  }
  var L_ = function () {
    function t() {
      this.change = new Ra, this.instances = {}, this.DEFAULT_ID = "DEFAULT_PAGINATION_ID"
    }
    return t.prototype.defaultId = function () {
      return this.DEFAULT_ID
    }, t.prototype.register = function (t) {
      return null == t.id && (t.id = this.DEFAULT_ID), this.instances[t.id] ? this.updateInstance(t) : (this.instances[t.id] = t, !0)
    }, t.prototype.updateInstance = function (t) {
      var e = !1;
      for (var n in this.instances[t.id]) t[n] !== this.instances[t.id][n] && (this.instances[t.id][n] = t[n], e = !0);
      return e
    }, t.prototype.getCurrentPage = function (t) {
      if (this.instances[t]) return this.instances[t].currentPage
    }, t.prototype.setCurrentPage = function (t, e) {
      if (this.instances[t]) {
        var n = this.instances[t];
        e <= Math.ceil(n.totalItems / n.itemsPerPage) && 1 <= e && (this.instances[t].currentPage = e, this.change.emit(t))
      }
    }, t.prototype.setTotalItems = function (t, e) {
      this.instances[t] && 0 <= e && (this.instances[t].totalItems = e, this.change.emit(t))
    }, t.prototype.setItemsPerPage = function (t, e) {
      this.instances[t] && (this.instances[t].itemsPerPage = e, this.change.emit(t))
    }, t.prototype.getInstance = function (t) {
      return void 0 === t && (t = this.DEFAULT_ID), this.instances[t] ? this.clone(this.instances[t]) : {}
    }, t.prototype.clone = function (t) {
      var e = {};
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return e
    }, t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = dt({
      token: t,
      factory: function (e) {
        return t.\u0275fac(e)
      }
    }), t
  }(), A_ = function (t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
  }, I_ = Number.MAX_SAFE_INTEGER, O_ = function () {
    function t(t) {
      this.service = t, this.state = {}
    }
    return t.prototype.transform = function (t, e) {
      if (!(t instanceof Array)) {
        var n = e.id || this.service.defaultId();
        return this.state[n] ? this.state[n].slice : t
      }
      var i, r, s = e.totalItems && e.totalItems !== t.length,
        o = this.createInstance(t, e),
        a = o.id,
        l = o.itemsPerPage,
        c = this.service.register(o);
      if (!s && t instanceof Array) {
        if (this.stateIsIdentical(a, t, i = (o.currentPage - 1) * (l = +l || I_), r = i + l)) return this.state[a].slice;
        var u = t.slice(i, r);
        return this.saveState(a, t, u, i, r), this.service.change.emit(a), u
      }
      return c && this.service.change.emit(a), this.saveState(a, t, t, i, r), t
    }, t.prototype.createInstance = function (t, e) {
      return this.checkConfig(e), {
        id: null != e.id ? e.id : this.service.defaultId(),
        itemsPerPage: +e.itemsPerPage || 0,
        currentPage: +e.currentPage || 1,
        totalItems: +e.totalItems || t.length
      }
    }, t.prototype.checkConfig = function (t) {
      var e = ["itemsPerPage", "currentPage"].filter((function (e) {
        return !(e in t)
      }));
      if (0 < e.length) throw new Error("PaginatePipe: Argument is missing the following required properties: " + e.join(", "))
    }, t.prototype.saveState = function (t, e, n, i, r) {
      this.state[t] = {
        collection: e,
        size: e.length,
        slice: n,
        start: i,
        end: r
      }
    }, t.prototype.stateIsIdentical = function (t, e, n, i) {
      var r = this.state[t];
      return !!r && !(r.size !== e.length || r.start !== n || r.end !== i) && r.slice.every((function (t, i) {
        return t === e[n + i]
      }))
    }, (t = function (t, e, n, i) {
      var r, s = arguments.length,
        o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
      else
        for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
      return s > 3 && o && Object.defineProperty(e, n, o), o
    }([A_("design:paramtypes", [L_])], t)).\u0275fac = function (e) {
      return new(e || t)(Fs(L_))
    }, t.\u0275pipe = be({
      name: "paginate",
      type: t,
      pure: !1
    }), t
  }(), M_ = function (t, e, n, i) {
    var r, s = arguments.length,
      o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
    else
      for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }, R_ = function (t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
  };

  function N_(t) {
    return !!t && "false" !== t
  }
  var F_ = function () {
    function t() {
      this.maxSize = 7, this.previousLabel = "Previous", this.nextLabel = "Next", this.screenReaderPaginationLabel = "Pagination", this.screenReaderPageLabel = "page", this.screenReaderCurrentLabel = "You're on page", this.pageChange = new Ra, this.pageBoundsCorrection = new Ra, this._directionLinks = !0, this._autoHide = !1, this._responsive = !1
    }
    return Object.defineProperty(t.prototype, "directionLinks", {
      get: function () {
        return this._directionLinks
      },
      set: function (t) {
        this._directionLinks = N_(t)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "autoHide", {
      get: function () {
        return this._autoHide
      },
      set: function (t) {
        this._autoHide = N_(t)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "responsive", {
      get: function () {
        return this._responsive
      },
      set: function (t) {
        this._responsive = N_(t)
      },
      enumerable: !0,
      configurable: !0
    }), M_([Ka(), R_("design:type", String)], t.prototype, "id", void 0), M_([Ka(), R_("design:type", Number)], t.prototype, "maxSize", void 0), M_([Ka(), R_("design:type", Boolean), R_("design:paramtypes", [Boolean])], t.prototype, "directionLinks", null), M_([Ka(), R_("design:type", Boolean), R_("design:paramtypes", [Boolean])], t.prototype, "autoHide", null), M_([Ka(), R_("design:type", Boolean), R_("design:paramtypes", [Boolean])], t.prototype, "responsive", null), M_([Ka(), R_("design:type", String)], t.prototype, "previousLabel", void 0), M_([Ka(), R_("design:type", String)], t.prototype, "nextLabel", void 0), M_([Ka(), R_("design:type", String)], t.prototype, "screenReaderPaginationLabel", void 0), M_([Ka(), R_("design:type", String)], t.prototype, "screenReaderPageLabel", void 0), M_([Ka(), R_("design:type", String)], t.prototype, "screenReaderCurrentLabel", void 0), M_([Ya(), R_("design:type", Ra)], t.prototype, "pageChange", void 0), M_([Ya(), R_("design:type", Ra)], t.prototype, "pageBoundsCorrection", void 0), t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["pagination-controls"]
      ],
      inputs: {
        maxSize: "maxSize",
        previousLabel: "previousLabel",
        nextLabel: "nextLabel",
        screenReaderPaginationLabel: "screenReaderPaginationLabel",
        screenReaderPageLabel: "screenReaderPageLabel",
        screenReaderCurrentLabel: "screenReaderCurrentLabel",
        directionLinks: "directionLinks",
        autoHide: "autoHide",
        responsive: "responsive",
        id: "id"
      },
      outputs: {
        pageChange: "pageChange",
        pageBoundsCorrection: "pageBoundsCorrection"
      },
      decls: 3,
      vars: 3,
      consts: [
        [3, "id", "maxSize", "pageChange", "pageBoundsCorrection"],
        ["p", "paginationApi"],
        ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"],
        ["role", "navigation", 1, "ngx-pagination"],
        ["class", "pagination-previous", 3, "disabled", 4, "ngIf"],
        [1, "small-screen"],
        [3, "current", "ellipsis", 4, "ngFor", "ngForOf"],
        ["class", "pagination-next", 3, "disabled", 4, "ngIf"],
        [1, "pagination-previous"],
        ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"],
        [4, "ngIf"],
        ["tabindex", "0", 3, "keyup.enter", "click"],
        [1, "show-for-sr"],
        [1, "pagination-next"]
      ],
      template: function (t, e) {
        if (1 & t && (Us(0, "pagination-template", 0, 1), Gs("pageChange", (function (t) {
            return e.pageChange.emit(t)
          }))("pageBoundsCorrection", (function (t) {
            return e.pageBoundsCorrection.emit(t)
          })), Rs(2, E_, 6, 8, "ul", 2), Hs()), 2 & t) {
          var n = Ns(1);
          zs("id", e.id)("maxSize", e.maxSize), Ai(2), zs("ngIf", !(e.autoHide && n.pages.length <= 1))
        }
      },
      directives: function () {
        return [z_, Qc, Yc]
      },
      pipes: function () {
        return [ru]
      },
      styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
      encapsulation: 2,
      changeDetection: 0
    }), t
  }(), D_ = function (t, e, n, i) {
    var r, s = arguments.length,
      o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
    else
      for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }, j_ = function (t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
  }, z_ = function () {
    function t(t, e) {
      var n = this;
      this.service = t, this.changeDetectorRef = e, this.maxSize = 7, this.pageChange = new Ra, this.pageBoundsCorrection = new Ra, this.pages = [], this.changeSub = this.service.change.subscribe((function (t) {
        n.id === t && (n.updatePageLinks(), n.changeDetectorRef.markForCheck(), n.changeDetectorRef.detectChanges())
      }))
    }
    return t.prototype.ngOnInit = function () {
      void 0 === this.id && (this.id = this.service.defaultId()), this.updatePageLinks()
    }, t.prototype.ngOnChanges = function (t) {
      this.updatePageLinks()
    }, t.prototype.ngOnDestroy = function () {
      this.changeSub.unsubscribe()
    }, t.prototype.previous = function () {
      this.checkValidId(), this.setCurrent(this.getCurrent() - 1)
    }, t.prototype.next = function () {
      this.checkValidId(), this.setCurrent(this.getCurrent() + 1)
    }, t.prototype.isFirstPage = function () {
      return 1 === this.getCurrent()
    }, t.prototype.isLastPage = function () {
      return this.getLastPage() === this.getCurrent()
    }, t.prototype.setCurrent = function (t) {
      this.pageChange.emit(t)
    }, t.prototype.getCurrent = function () {
      return this.service.getCurrentPage(this.id)
    }, t.prototype.getLastPage = function () {
      var t = this.service.getInstance(this.id);
      return t.totalItems < 1 ? 1 : Math.ceil(t.totalItems / t.itemsPerPage)
    }, t.prototype.getTotalItems = function () {
      return this.service.getInstance(this.id).totalItems
    }, t.prototype.checkValidId = function () {
      null == this.service.getInstance(this.id).id && console.warn('PaginationControlsDirective: the specified id "' + this.id + '" does not match any registered PaginationInstance')
    }, t.prototype.updatePageLinks = function () {
      var t = this,
        e = this.service.getInstance(this.id),
        n = this.outOfBoundCorrection(e);
      n !== e.currentPage ? setTimeout((function () {
        t.pageBoundsCorrection.emit(n), t.pages = t.createPageArray(e.currentPage, e.itemsPerPage, e.totalItems, t.maxSize)
      })) : this.pages = this.createPageArray(e.currentPage, e.itemsPerPage, e.totalItems, this.maxSize)
    }, t.prototype.outOfBoundCorrection = function (t) {
      var e = Math.ceil(t.totalItems / t.itemsPerPage);
      return e < t.currentPage && 0 < e ? e : t.currentPage < 1 ? 1 : t.currentPage
    }, t.prototype.createPageArray = function (t, e, n, i) {
      i = +i;
      for (var r = [], s = Math.ceil(n / e), o = Math.ceil(i / 2), a = t <= o, l = s - o < t, c = !a && !l, u = i < s, h = 1; h <= s && h <= i;) {
        var d = this.calculatePageNumber(h, t, i, s);
        r.push({
          label: u && (2 === h && (c || l) || h === i - 1 && (c || a)) ? "..." : d,
          value: d
        }), h++
      }
      return r
    }, t.prototype.calculatePageNumber = function (t, e, n, i) {
      var r = Math.ceil(n / 2);
      return t === n ? i : 1 === t ? t : n < i ? i - r < e ? i - n + t : r < e ? e - r + t : t : t
    }, D_([Ka(), j_("design:type", String)], t.prototype, "id", void 0), D_([Ka(), j_("design:type", Number)], t.prototype, "maxSize", void 0), D_([Ya(), j_("design:type", Ra)], t.prototype, "pageChange", void 0), D_([Ya(), j_("design:type", Ra)], t.prototype, "pageBoundsCorrection", void 0), (t = D_([j_("design:paramtypes", [L_, es])], t)).\u0275fac = function (e) {
      return new(e || t)(Fs(L_), Fs(es))
    }, t.\u0275dir = ye({
      type: t,
      selectors: [
        ["pagination-template"],
        ["", "pagination-template", ""]
      ],
      inputs: {
        maxSize: "maxSize",
        id: "id"
      },
      outputs: {
        pageChange: "pageChange",
        pageBoundsCorrection: "pageBoundsCorrection"
      },
      exportAs: ["paginationApi"],
      features: [yo]
    }), t
  }(), V_ = function () {
    function t() {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      providers: [L_],
      imports: [
        [su]
      ]
    }), t
  }();

  function U_(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), Us(6, "a", 10), oo(7, "Voir detail"), Hs(), Hs(), Us(8, "td"), Us(9, "a", 11), Gs("click", (function () {
        Ke(t);
        const n = e.$implicit;
        return Ys().delAssociation(n.idassociation)
      })), oo(10, "Supprimer"), Hs(), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.association), Ai(2), ao(t.townHall), Ai(2), Js("routerLink", "/administrator/associations/view/", t.idassociation, "")
    }
  }
  const H_ = function (t) {
    return {
      itemsPerPage: 10,
      currentPage: t
    }
  };
  let B_ = (() => {
    class t {
      constructor(t) {
        this.associationsService = t, this.p = 1
      }
      ngOnInit() {
        this.getAssociations()
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => {
          this.associations = t
        }, t => {
          console.log(t)
        })
      }
      delAssociation(t) {
        this.associationsService.delAssociation(t).subscribe(t => this.getAssociations())
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Wg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-list"]
      ],
      decls: 17,
      vars: 6,
      consts: [
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        ["routerLink", "/administrator/associations/add", 1, "bouton", "float-right"],
        ["previousLabel", "Pr\xe9c\xe9dent", "nextLabel", "Suivant", 3, "pageChange"],
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "bouton", 3, "routerLink"],
        [1, "bouton-del", 3, "click"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "nav", 0), Us(1, "ol", 1), Us(2, "li", 2), Us(3, "a", 3), oo(4, "Tableau de bord"), Hs(), Hs(), Us(5, "li", 4), oo(6, "Associations"), Hs(), Hs(), Hs(), Us(7, "h3"), Us(8, "a", 5), oo(9, "Ajouter"), Hs(), oo(10, " Liste des associations\n"), Hs(), Us(11, "pagination-controls", 6), Gs("pageChange", (function (t) {
          return e.p = t
        })), Hs(), Us(12, "div", 7), Us(13, "table", 8), Us(14, "tbody"), Rs(15, U_, 11, 3, "tr", 9), La(16, "paginate"), Hs(), Hs(), Hs()), 2 & t && (Ai(15), zs("ngForOf", Ia(16, 1, e.associations, ka(4, H_, e.p))))
      },
      directives: [Pf, F_, Yc],
      pipes: [O_],
      styles: [""]
    }), t
  })();

  function Z_(t, e) {
    if (1 & t && (Us(0, "div", 20), oo(1), La(2, "json"), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), ao(Aa(2, 1, t.errorMessage))
    }
  }

  function $_(t, e) {
    if (1 & t && (Us(0, "option", 21), oo(1), Hs()), 2 & t) {
      const t = e.$implicit;
      zs("value", t.idtownHall), Ai(1), ao(t.townHall)
    }
  }

  function q_(t, e) {
    1 & t && (Us(0, "small", 23), oo(1, "Municipalit\xe9 obligatoire"), Hs())
  }

  function G_(t, e) {
    if (1 & t && (Us(0, "div"), Rs(1, q_, 2, 0, "small", 22), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), zs("ngIf", null == t.associationForm.get("townHallId").errors ? null : t.associationForm.get("townHallId").errors.required)
    }
  }

  function W_(t, e) {
    1 & t && (Us(0, "small", 23), oo(1, "AVEC obligatoire"), Hs())
  }

  function K_(t, e) {
    if (1 & t && (Us(0, "div"), Rs(1, W_, 2, 0, "small", 22), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), zs("ngIf", null == t.associationForm.get("association").errors ? null : t.associationForm.get("association").errors.required)
    }
  }

  function Y_(t, e) {
    1 & t && (Us(0, "small", 23), oo(1, "E-mail obligatoire"), Hs())
  }

  function J_(t, e) {
    1 & t && (Us(0, "small", 23), oo(1, "E-mail invalide"), Hs())
  }

  function Q_(t, e) {
    if (1 & t && (Us(0, "div"), Rs(1, Y_, 2, 0, "small", 22), Rs(2, J_, 2, 0, "small", 22), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), zs("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.required), Ai(1), zs("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.email)
    }
  }
  let X_ = (() => {
    class t {
      constructor(t, e, n, i) {
        this.associationsService = t, this.townhallsService = e, this.fb = n, this.router = i
      }
      ngOnInit() {
        this.createForm(), this.getTownHalls()
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.towns = t)
      }
      createForm() {
        this.associationForm = this.fb.group({
          townHallId: ["", xm.required],
          association: ["", xm.required],
          receipt: [""],
          email: ["", [xm.required, xm.email]]
        })
      }
      onSubmit() {
        this.associationsService.setAssociation(this.associationForm.value).subscribe(t => {
          this.router.navigate(["/administrator/households/add/" + t])
        }, t => {
          this.errorMessage = t
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Wg), Fs(Gg), Fs(Sg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-add"]
      ],
      decls: 31,
      vars: 13,
      consts: [
        [1, "row", "align-items-center"],
        [1, "row", "justify-content-center"],
        [1, "col-lg-8"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "townhallId"],
        ["name", "townhallId", "id", "townHallId", "formControlName", "townHallId", "required", "", 1, "form-control"],
        [3, "value", 4, "ngFor", "ngForOf"],
        [4, "ngIf"],
        [1, "form-row"],
        [1, "form-group", "col-lg-8"],
        ["for", "association"],
        ["type", "text", "name", "association", "formControlName", "association", "id", "association", 1, "form-control"],
        [1, "form-group", "col-lg-4"],
        ["for", "receipt"],
        ["type", "text", "name", "receipt", "formControlName", "receipt", "id", "receipt", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "name", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
        [1, "alert", "alert-danger"],
        [3, "value"],
        ["class", "text-danger", 4, "ngIf"],
        [1, "text-danger"]
      ],
      template: function (t, e) {
        1 & t && (Bs(0, "div", 0), Us(1, "div", 1), Us(2, "div", 2), Us(3, "h3"), oo(4, "Ajouter une association"), Hs(), Rs(5, Z_, 3, 3, "div", 3), Us(6, "form", 4), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(7, "div", 5), Us(8, "label", 6), oo(9, "Municipalit\xe9"), Hs(), Us(10, "select", 7), Rs(11, $_, 2, 2, "option", 8), Hs(), Rs(12, G_, 2, 1, "div", 9), Hs(), Us(13, "div", 10), Us(14, "div", 11), Us(15, "label", 12), oo(16, "Nom de l'association :"), Hs(), Bs(17, "input", 13), Rs(18, K_, 2, 1, "div", 9), Hs(), Us(19, "div", 14), Us(20, "label", 15), oo(21, "Num\xe9ro de r\xe9c\xe9piss\xe9 :"), Hs(), Bs(22, "input", 16), Hs(), Hs(), Us(23, "div", 5), Us(24, "label", 17), oo(25, "Adresse e-mail de connexion:"), Hs(), Bs(26, "input", 18), Rs(27, Q_, 3, 2, "div", 9), Hs(), Us(28, "div", 5), Us(29, "button", 19), oo(30, " ENR\xc9GISTRER "), Hs(), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("ngIf", e.errorMessage), Ai(1), zs("formGroup", e.associationForm), Ai(5), zs("ngForOf", e.towns), Ai(1), zs("ngIf", e.associationForm.get("townHallId").invalid && e.associationForm.get("townHallId").touched), Ai(5), eo("is-invalid", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Ai(1), zs("ngIf", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Ai(4), eo("is-invalid", e.associationForm.get("receipt").invalid && e.associationForm.get("receipt").touched), Ai(4), eo("is-invalid", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Ai(1), zs("ngIf", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Ai(2), zs("disabled", !e.associationForm.valid))
      },
      directives: [Qc, ug, _m, pg, Vm, gm, bg, xg, Yc, cm, Um, $m],
      pipes: [iu],
      styles: [""]
    }), t
  })();

  function tv(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 20), oo(9, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.household), Ai(2), ao(t.role), Ai(2), ao(t.cellPhone), Ai(2), Js("routerLink", "/administrator/households/view/", t.idhousehold, "")
    }
  }

  function ev(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "nav", 1), Us(2, "ol", 2), Us(3, "li", 3), Us(4, "a", 4), oo(5, "Tableau de bord"), Hs(), Hs(), Us(6, "li", 3), Us(7, "a", 5), oo(8, "Associations"), Hs(), Hs(), Us(9, "li", 6), oo(10), Hs(), Hs(), Hs(), Us(11, "section", 7), Us(12, "div", 8), Us(13, "h3"), oo(14), Bs(15, "br"), Us(16, "small"), oo(17), Hs(), Hs(), Hs(), Us(18, "div", 9), Us(19, "div", 7), Us(20, "div", 10), Us(21, "h4", 11), oo(22), Hs(), Hs(), Us(23, "div", 12), oo(24, " Projets : "), Us(25, "strong"), oo(26, "2"), Hs(), Bs(27, "br"), oo(28, " Propri\xe9taire : "), Us(29, "strong"), oo(30, "10"), Hs(), Hs(), Us(31, "div", 12), oo(32, " Hommes: "), Us(33, "strong"), oo(34, "10"), Hs(), Bs(35, "br"), oo(36, "Femme: "), Us(37, "strong"), oo(38, "12"), Hs(), Hs(), Hs(), Hs(), Hs(), Us(39, "section"), Us(40, "div", 7), Us(41, "div", 8), Us(42, "h4"), oo(43, " Liste de M\xe9nages "), Hs(), Hs(), Us(44, "div", 13), Us(45, "div", 14), Bs(46, "input", 15), Hs(), Hs(), Us(47, "div", 16), Us(48, "div", 14), Us(49, "a", 17), oo(50, "Ajouter"), Hs(), Hs(), Hs(), Hs(), Us(51, "div", 18), Us(52, "table", 19), Us(53, "tbody"), Rs(54, tv, 10, 4, "tr", 0), Hs(), Hs(), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(10), lo("Association ", t.association, ""), Ai(4), lo("", t.association, " "), Ai(3), lo("Municipalit\xe9 de ", t.townHall, ""), Ai(5), lo("", n.households ? n.households.length : 0, " Membres"), Ai(27), Js("routerLink", "/administrator/households/add/", t.idassociation, ""), Ai(5), zs("ngForOf", n.households)
    }
  }
  let nv = (() => {
    class t {
      constructor(t, e, n) {
        this.activatedRoute = t, this.associationsService = e, this.householdsService = n
      }
      ngOnInit() {
        this.idAssociation = this.activatedRoute.snapshot.params.id, this.getAssociation(this.idAssociation), this.getHouseholds(this.idAssociation)
      }
      getAssociation(t) {
        this.associationsService.getAssociation(t).subscribe(t => this.association = t)
      }
      getHouseholds(t) {
        this.householdsService.associationById(t).subscribe(t => this.households = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(mp), Fs(Wg), Fs(Kg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["routerLink", "/administrator/associations"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        [1, "row"],
        [1, "col-lg-7"],
        [1, "col-lg-5"],
        [1, "col-lg-12"],
        [1, "text-center"],
        [1, "col-lg-6"],
        [1, "col-lg-3"],
        [1, "form-group"],
        ["type", "search", "name", "", "id", "", "placeholder", "RECHERCHE", 1, "form-control"],
        [1, "col-lg-2"],
        [1, "bouton", "btn-block", 3, "routerLink"],
        [1, "table-responsive"],
        [1, "table"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, ev, 55, 6, "div", 0), 2 & t && zs("ngForOf", e.association)
      },
      directives: [Yc, Pf],
      styles: [""]
    }), t
  })(), iv = (() => {
    class t {
      constructor(t, e) {
        this.authService = t, this.router = e
      }
      canActivate(t, e) {
        return !!this.authService.loggedIn() || (this.router.navigate(["/login"]), !1)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(Tg), Yt(Sf))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), rv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-banks-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Banques"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })(), sv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/banks/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function ov(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), Us(4, "a", 3), oo(5, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.bank)
    }
  }
  let av = (() => {
    class t {
      constructor(t) {
        this.banksService = t
      }
      ngOnInit() {
        this.getBanks()
      }
      getBanks() {
        this.banksService.gets().subscribe(t => this.banks = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(sv))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-banks-list"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/banks/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        ["href", ""]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1, " Liste des banques "), Us(2, "a", 0), oo(3, "Ajouter"), Hs(), Hs(), Us(4, "table", 1), Us(5, "tbody"), Rs(6, ov, 6, 1, "tr", 2), Hs(), Hs()), 2 & t && (Ai(6), zs("ngForOf", e.banks))
      },
      directives: [Pf, Yc],
      styles: [""]
    }), t
  })(), lv = (() => {
    class t {
      constructor(t, e, n) {
        this.banksService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.bankForm = this.fb.group({
          bank: ["", xm.required],
          banker: ["", xm.required],
          email: ["", [xm.required, xm.email]],
          phone: ["", xm.required]
        })
      }
      onSubmit() {
        this.banksService.set(this.bankForm.value).subscribe(t => this.router.navigate(["/administrator/banks"]))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(sv), Fs(Sg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-banks-add"]
      ],
      decls: 23,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "bank"],
        ["type", "text", "formControlName", "bank", "id", "bank", 1, "form-control"],
        ["for", "banker"],
        ["type", "text", "formControlName", "banker", "id", "banker", 1, "form-control"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "id", "phone", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1, "Ajouter une banque"), Hs(), Us(2, "div", 0), Us(3, "form", 1), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(4, "div", 2), Us(5, "label", 3), oo(6, "Banque"), Hs(), Bs(7, "input", 4), Hs(), Us(8, "div", 2), Us(9, "label", 5), oo(10, "Agent de banque"), Hs(), Bs(11, "input", 6), Hs(), Us(12, "div", 2), Us(13, "label", 7), oo(14, "T\xe9l\xe9phone"), Hs(), Bs(15, "input", 8), Hs(), Us(16, "div", 2), Us(17, "label", 9), oo(18, "E-mail"), Hs(), Bs(19, "input", 10), Hs(), Us(20, "div", 2), Us(21, "button", 11), oo(22, " Enr\xe9gistrer "), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(3), zs("formGroup", e.bankForm), Ai(18), zs("disabled", !e.bankForm.valid))
      },
      directives: [ug, _m, pg, cm, gm, bg],
      styles: [""]
    }), t
  })(), cv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-complaints-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Plaintes"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })();

  function uv(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "tr", 7), Gs("click", (function () {
        Ke(t);
        const n = e.$implicit;
        return Ys(2).onSelected(n)
      })), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Ys(2);
      Ai(2), lo("", n.textLimit(t.complaint), "..."), Ai(2), ao(t.household), Ai(2), ao(t.complaintDate)
    }
  }

  function hv(t, e) {
    if (1 & t && (Us(0, "div", 1), Us(1, "div", 2), Us(2, "h3"), oo(3, "Liste de plaintes"), Hs(), Us(4, "div", 3), oo(5, " Clique sur la ligne de la plainte pour voir les details "), Hs(), Bs(6, "br"), Us(7, "table", 4), Us(8, "tbody"), Rs(9, uv, 7, 3, "tr", 5), Hs(), Hs(), Hs(), Us(10, "div", 6), Bs(11, "router-outlet"), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(9), zs("ngForOf", t.complaints)
    }
  }
  let dv = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.gets().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Qg), Fs(mp), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-complaints-list"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, hv, 12, 1, "div", 0), 2 & t && zs("ngIf", e.complaints)
      },
      directives: [Qc, Yc, If],
      styles: [""]
    }), t
  })();

  function pv(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "h3"), oo(2, " Detail de Plainte"), Hs(), Us(3, "h4"), oo(4), Hs(), Us(5, "p"), oo(6), Hs(), Bs(7, "hr"), Us(8, "small"), oo(9), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(4), lo(" Plainte de ", t.household, ""), Ai(2), ao(t.complaint), Ai(3), lo("Date: ", t.complaintDate, "")
    }
  }

  function fv(t, e) {
    if (1 & t && (Us(0, "div"), Rs(1, pv, 10, 3, "div", 1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), zs("ngForOf", t.complaint)
    }
  }
  let mv = (() => {
    class t {
      constructor(t, e) {
        this.complaintsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.activatedRoute.params.subscribe(t => this.getComplaint(t.id))
      }
      getComplaint(t) {
        this.complaintsService.get(t).subscribe(t => this.complaint = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Qg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-complaints-detail"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngIf"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, fv, 2, 1, "div", 0), 2 & t && zs("ngIf", e.complaint)
      },
      directives: [Qc, Yc],
      styles: [""]
    }), t
  })(), gv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-voice-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Bs(0, "router-outlet")
      },
      directives: [If],
      styles: [""]
    }), t
  })();

  function _v(t, e) {
    if (1 & t && (Us(0, "div", 10), oo(1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), ao(t.successMessage)
    }
  }
  let vv = (() => {
    class t {
      constructor(t, e) {
        this.messagesService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", xm.required],
          recipient: ["", [xm.required, xm.minLength(11)]]
        })
      }
      onSubmit() {
        this.messagesService.set(this.smsForm.value).subscribe(t => {}, t => {
          this.errorMessage = "Service momentanement indisponible"
        }, () => {
          this.errorMessage = "Service momentanement indisponible"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(c_), Fs(Sg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-voice-send"]
      ],
      decls: 20,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [1, "alert", "alert-danger"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "recipient"],
        ["type", "text", "name", "recipient", "formControlName", "recipient", "id", "recipient", 1, "form-control"],
        ["type", "file", "name", "message", "formControlName", "message", "id", "message", "accept", "audio/mp3,audio/wav;capture=microphone", 1, "form-control-file"],
        ["type", "submit", "disabled", "", 1, "bouton"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), Us(1, "a", 0), oo(2, "Retour"), Hs(), oo(3, " Envoi de SMS\n"), Hs(), Us(4, "div", 1), Us(5, "div", 2), oo(6, "Service momentanement indisponible"), Hs(), Rs(7, _v, 2, 1, "div", 3), Us(8, "form", 4), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(9, "div", 5), Us(10, "label", 6), oo(11, "Destinataires"), Hs(), Bs(12, "input", 7), Hs(), Us(13, "div", 5), Us(14, "label", 6), oo(15, "T\xe9l\xe9charger message"), Hs(), Bs(16, "input", 8), Hs(), Us(17, "div", 5), Us(18, "button", 9), oo(19, "Envoyer"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(7), zs("ngIf", e.successMessage), Ai(1), zs("formGroup", e.smsForm))
      },
      directives: [Pf, Qc, ug, _m, pg, cm, gm, bg],
      styles: [""]
    }), t
  })();

  function yv(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), Us(4, "a", 3), oo(5, "voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.townHall), Ai(2), Js("routerLink", "/administrator/townhalls/view/", t.idtownHall, "")
    }
  }
  let bv = (() => {
    class t {
      constructor(t) {
        this.townhallsService = t
      }
      ngOnInit() {
        this.getTownHalls()
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.towns = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Gg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-townhalls-list"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/townhalls/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1, " Liste des municipalit\xe9s "), Us(2, "a", 0), oo(3, "Ajouter"), Hs(), Hs(), Us(4, "table", 1), Us(5, "tbody"), Rs(6, yv, 6, 2, "tr", 2), Hs(), Hs()), 2 & t && (Ai(6), zs("ngForOf", e.towns))
      },
      directives: [Pf, Yc],
      styles: [""]
    }), t
  })(), wv = (() => {
    class t {
      constructor(t, e) {
        this.townService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.townForm = this.fb.group({
          townHall: ["", xm.required],
          officer: ["", xm.required],
          email: ["", [xm.required, xm.email]],
          phone: ["", xm.required]
        })
      }
      onSubmit() {
        this.townService.setTownhall(this.townForm.value).subscribe(t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Gg), Fs(Sg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-townhalls-add"]
      ],
      decls: 20,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "townHall"],
        ["type", "text", "formControlName", "townHall", "id", "townHall", 1, "form-control"],
        ["for", "officer"],
        ["type", "text", "formControlName", "officer", "id", "townHall", 1, "form-control"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "id", "phone", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "div", 0), Us(1, "form", 1), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(2, "div", 2), Us(3, "label", 3), oo(4, "Municipalit\xe9"), Hs(), Bs(5, "input", 4), Hs(), Us(6, "div", 2), Us(7, "label", 5), oo(8, "Agent de mairie"), Hs(), Bs(9, "input", 6), Hs(), Us(10, "div", 2), Us(11, "label", 7), oo(12, "T\xe9l\xe9phone"), Hs(), Bs(13, "input", 8), Hs(), Us(14, "div", 2), Us(15, "label", 9), oo(16, "E-mail"), Hs(), Bs(17, "input", 10), Hs(), Us(18, "button", 11), oo(19, "Enr\xe9gistrer"), Hs(), Hs(), Hs()), 2 & t && (Ai(1), zs("formGroup", e.townForm), Ai(17), zs("disabled", !e.townForm.valid))
      },
      directives: [ug, _m, pg, cm, gm, bg],
      styles: [""]
    }), t
  })(), xv = (() => {
    class t {
      constructor(t, e, n) {
        this.townHallsService = t, this.householdsService = e, this.activatedRoute = n, this.options = {
          layers: [Object(em.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
          })],
          zoom: 7,
          center: Object(em.latLng)([7.6906058, -5.0298408])
        }, this.smallIcon = new em.Icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          shadowSize: [41, 41]
        })
      }
      ngAfterViewInit() {
        this.id = this.activatedRoute.snapshot.params.id, this.createMap()
      }
      createMap() {
        this.map = em.map("town-map", {
          center: [this.town.lat, this.town.lng],
          zoom: 12
        }), em.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 12,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        for (const t of this.households) em.marker([t.lat, t.lng], {
          icon: this.smallIcon
        }).addTo(this.map).bindPopup(t.household).openPopup()
      }
      addMarker(t) {
        em.marker([t.lat, t.lng], {
          icon: this.smallIcon
        }).addTo(this.map).bindPopup(t.household).openPopup()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Gg), Fs(Kg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-townhalls-map"]
      ],
      inputs: {
        town: "town",
        households: "households"
      },
      decls: 3,
      vars: 0,
      consts: [
        [1, "map-wrapper"],
        [1, "map-border"],
        ["id", "town-map"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "div", 0), Us(1, "div", 1), Bs(2, "div", 2), Hs(), Hs())
      },
      styles: [""]
    }), t
  })();

  function Cv(t, e) {
    if (1 & t && (Us(0, "p", 6), oo(1), Hs()), 2 & t) {
      const t = Ys(2);
      Ai(1), ao(t.suppliers ? t.suppliers.length : 0)
    }
  }

  function Sv(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), La(7, "date"), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys(2);
      Ai(2), lo("", n.textLimit(t.complaint), "..."), Ai(2), ao(t.household), Ai(2), ao(Ia(7, 3, t.complaintDate, "medium"))
    }
  }

  function kv(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "h3"), oo(2), Hs(), Us(3, "section"), Bs(4, "app-townhalls-map", 1), Hs(), Us(5, "section", 2), Us(6, "div", 3), Us(7, "div", 4), Us(8, "p", 5), oo(9, "A.V.E.Cs"), Hs(), Us(10, "p", 6), oo(11), Hs(), Hs(), Hs(), Us(12, "div", 3), Us(13, "div", 4), Us(14, "p", 5), oo(15, "M\xe9nages"), Hs(), Us(16, "p", 6), oo(17), Hs(), Hs(), Hs(), Us(18, "div", 3), Us(19, "div", 4), Us(20, "p", 5), oo(21, "Appels d'offre"), Hs(), Us(22, "p", 6), oo(23), Hs(), Hs(), Hs(), Us(24, "div", 3), Us(25, "div", 4), Us(26, "p", 5), oo(27, "Fournisseurs"), Hs(), Rs(28, Cv, 2, 1, "p", 7), Hs(), Hs(), Hs(), Us(29, "section", 8), Us(30, "h2"), oo(31, "Plaintes"), Hs(), Us(32, "table", 9), Us(33, "tbody"), Rs(34, Sv, 8, 6, "tr", 0), Hs(), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(2), lo("Municipalit\xe9 de ", t.townHall, ""), Ai(2), zs("town", t)("households", n.getHouseholds(t.idtownHall)), Ai(7), ao(n.associations ? n.associations.length : 0), Ai(6), ao(n.households ? n.households.length : 0), Ai(6), ao(n.needs ? n.needs.length : 0), Ai(5), zs("ngIf", n.suppliers), Ai(6), zs("ngForOf", n.complaints)
    }
  }
  let Pv = (() => {
    class t {
      constructor(t, e, n, i, r, s, o) {
        this.townhallsService = t, this.activatedRoute = e, this.associationsService = n, this.householdsService = i, this.suppliersService = r, this.needsService = s, this.complaintsService = o
      }
      ngOnInit() {
        this.idTownHall = this.activatedRoute.snapshot.params.id, this.getTownHall(this.idTownHall), this.getAssociations(this.idTownHall), this.getHouseholds(this.idTownHall), this.getSuppliers(this.idTownHall), this.getNeeds(this.idTownHall), this.getComplaints(this.idTownHall)
      }
      getTownHall(t) {
        this.townhallsService.getTownhall(t).subscribe(t => this.townHall = t)
      }
      getComplaints(t) {
        this.complaintsService.townById(t).subscribe(t => this.complaints = t)
      }
      getAssociations(t) {
        this.associationsService.townById(t).subscribe(t => this.associations = t)
      }
      getHouseholds(t) {
        this.householdsService.townById(t).subscribe(t => this.households = t)
      }
      getSuppliers(t) {
        this.suppliersService.townById(t).subscribe(t => this.suppliers = t)
      }
      getNeeds(t) {
        this.needsService.townById(t).subscribe(t => this.needs = t)
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Gg), Fs(mp), Fs(Wg), Fs(Kg), Fs(Yg), Fs(Jg), Fs(Qg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-townhalls-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [3, "town", "households"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "table-responsive"],
        [1, "table"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, kv, 35, 8, "div", 0), 2 & t && zs("ngForOf", e.townHall)
      },
      directives: [Yc, xv, Qc],
      pipes: [nu],
      styles: [""]
    }), t
  })(), Tv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-households-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "M\xe9nages"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })();

  function Ev(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 9), oo(9, "Voir detail"), Hs(), Hs(), Us(10, "td"), Us(11, "a", 10), Gs("click", (function () {
        Ke(t);
        const n = e.$implicit;
        return Ys().delHousehold(n.idhousehold)
      })), oo(12, "Supprimer"), Hs(), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.household), Ai(2), ao(t.association), Ai(2), ao(t.role), Ai(2), Js("routerLink", "/administrator/households/view/", t.idhousehold, "")
    }
  }
  const Lv = function (t) {
    return {
      itemsPerPage: 10,
      currentPage: t
    }
  };
  let Av = (() => {
    class t {
      constructor(t) {
        this.householdsService = t, this.p = 1
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => {
          this.households = t
        }, t => {})
      }
      delHousehold(t) {
        this.householdsService.delHouseHold(t).subscribe(t => this.getHouseholds())
      }
      getOwner(t) {
        return 1 === t ? "Propri\xe9taire" : "Locataire"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Kg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-households-list"]
      ],
      decls: 15,
      vars: 6,
      consts: [
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        ["previousLabel", "Pr\xe9c\xe9dent", "nextLabel", "Suivant", 3, "pageChange"],
        [1, "table-responsive"],
        [1, "table", "table-striped"],
        [4, "ngFor", "ngForOf"],
        [1, "bouton", "btn-sm", 3, "routerLink"],
        [1, "bouton-del", "btn-sm", 3, "click"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "nav", 0), Us(1, "ol", 1), Us(2, "li", 2), Us(3, "a", 3), oo(4, "Tableau de bord"), Hs(), Hs(), Us(5, "li", 4), oo(6, "Tous les m\xe9nages"), Hs(), Hs(), Hs(), Us(7, "h3"), oo(8, "M\xe9nages Enr\xe9gistr\xe9s"), Hs(), Us(9, "pagination-controls", 5), Gs("pageChange", (function (t) {
          return e.p = t
        })), Hs(), Us(10, "div", 6), Us(11, "table", 7), Us(12, "tbody"), Rs(13, Ev, 13, 4, "tr", 8), La(14, "paginate"), Hs(), Hs(), Hs()), 2 & t && (Ai(13), zs("ngForOf", Ia(14, 1, e.households, ka(4, Lv, e.p))))
      },
      directives: [Pf, F_, Yc],
      pipes: [O_],
      styles: [""]
    }), t
  })();
  const Iv = function (t, e) {
    return {
      "alert-success": t,
      "alert-danger": e
    }
  };

  function Ov(t, e) {
    if (1 & t && (Us(0, "div", 32), oo(1), Hs()), 2 & t) {
      const t = Ys(2);
      zs("ngClass", (3, n = Iv, i = t.successMessage, r = t.errorMessage, Ea(Ge(), nn(), 3, n, i, r, void 0))), Ai(1), co(" ", t.errorMessage, " ", t.successMessage, " ")
    }
    var n, i, r
  }

  function Mv(t, e) {
    if (1 & t && (Us(0, "option", 33), oo(1), Hs()), 2 & t) {
      const t = e.$implicit;
      zs("value", t), Ai(1), ao(t)
    }
  }

  function Rv(t, e) {
    if (1 & t && (Us(0, "option", 33), oo(1), Hs()), 2 & t) {
      const t = e.$implicit;
      zs("value", t), Ai(1), ao(t)
    }
  }

  function Nv(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "div"), Us(1, "div", 1), Us(2, "div", 2), Us(3, "h3", 3), Us(4, "small"), oo(5, "Ajouter un nouveau m\xe9nage pour l'AVEC"), Hs(), Bs(6, "br"), oo(7), Hs(), Rs(8, Ov, 2, 6, "div", 4), Us(9, "form", 5), Gs("ngSubmit", (function () {
        return Ke(t), Ys().onSubmit()
      })), Us(10, "div", 6), Us(11, "div", 7), Us(12, "label", 8), oo(13, "Nom et Pr\xe9noms"), Hs(), Bs(14, "input", 9), Hs(), Us(15, "div", 10), Us(16, "label", 8), oo(17, "Date de naissance"), Hs(), Bs(18, "input", 11), Hs(), Hs(), Us(19, "div", 6), Us(20, "div", 10), Us(21, "label", 8), oo(22, "Taille de la famille"), Hs(), Bs(23, "input", 12), Hs(), Us(24, "div", 7), Us(25, "label", 8), oo(26, "Etes-vous propri\xe9taire ?"), Hs(), Us(27, "select", 13), Us(28, "option", 14), oo(29, "Votre statut"), Hs(), Rs(30, Mv, 2, 2, "option", 15), Hs(), Hs(), Hs(), Us(31, "h5"), oo(32, "Vous \xeates :"), Hs(), Us(33, "div", 6), Us(34, "div", 16), Us(35, "div", 17), Bs(36, "input", 18), Us(37, "label", 19), oo(38, "Homme"), Hs(), Hs(), Us(39, "div", 17), Bs(40, "input", 20), Us(41, "label", 21), oo(42, "Femme"), Hs(), Hs(), Hs(), Us(43, "div", 16), Us(44, "div", 22), Bs(45, "input", 23), Us(46, "label", 24), oo(47, "Chef de famille ?"), Hs(), Hs(), Hs(), Hs(), Us(48, "div", 25), Us(49, "label", 8), oo(50, "Poste dans l'association"), Hs(), Us(51, "select", 26), Us(52, "option", 14), oo(53, "Choisir le poste"), Hs(), Rs(54, Rv, 2, 2, "option", 15), Hs(), Hs(), Us(55, "div", 6), Us(56, "div", 10), Us(57, "label", 27), oo(58, "T\xe9l\xe9phone Mobile"), Hs(), Bs(59, "input", 28), Hs(), Us(60, "div", 7), Us(61, "label", 29), oo(62, "E-mail (Facultative)"), Hs(), Bs(63, "input", 30), Hs(), Hs(), Us(64, "div", 25), Us(65, "button", 31), oo(66, "SUIVANT"), Hs(), Hs(), Hs(), Hs(), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(7), lo(" ", t.association, " "), Ai(1), zs("ngIf", n.successMessage && !n.errorMessage || n.errorMessage && !n.successMessage), Ai(1), zs("formGroup", n.houseForm), Ai(21), zs("ngForOf", n.owners), Ai(6), zs("value", 1), Ai(4), zs("value", 0), Ai(5), zs("value", 1), Ai(9), zs("ngForOf", n.roles), Ai(11), zs("disabled", !n.houseForm.valid)
    }
  }
  let Fv = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.householdsService = t, this.associationsService = e, this.fb = n, this.activatedRoute = i, this.router = r, this.roles = ["Pr\xe9sident", " Vice-pr\xe9sident", "S\xe9cr\xe9taire", "S\xe9cr\xe9taire-adjoint", "Tr\xe9sorier", "Tr\xe9sorier-adjoint", "Contr\xf4leur", "Membre"], this.owners = ["Propri\xe9taire", "Locataire", "Autre"]
      }
      ngOnInit() {
        this.idAssociation = this.activatedRoute.snapshot.params.id, this.getAssociation(this.idAssociation), this.createForm()
      }
      getAssociation(t) {
        this.associationsService.getAssociation(t).subscribe(t => this.association = t)
      }
      createForm() {
        this.houseForm = this.fb.group({
          associationId: [this.idAssociation, xm.required],
          household: ["", xm.required],
          birthDate: ["", xm.required],
          sex: ["", xm.required],
          familyChief: [""],
          familySize: ["", xm.required],
          role: ["", xm.required],
          owner: ["", xm.required],
          cellPhone: ["", xm.required],
          mail: [""]
        })
      }
      onSubmit() {
        this.householdsService.setHouseHold(this.houseForm.value).subscribe(t => this.router.navigate(["/association/households/address/" + t]), t => this.errorMessage = t.message)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Kg), Fs(Wg), Fs(Sg), Fs(mp), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-households-add"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row", "justify-content-center"],
        [1, "col-lg-7"],
        [1, "text-center"],
        ["class", "alert", 3, "ngClass", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-row"],
        [1, "form-group", "col-lg-7"],
        ["for", ""],
        ["type", "text", "formControlName", "household", "name", "household", 1, "form-control"],
        [1, "form-group", "col-lg-5"],
        ["type", "date", "formControlName", "birthDate", "name", "birthDay", 1, "form-control"],
        ["type", "number", "formControlName", "familySize", "name", "familySize", 1, "form-control"],
        ["name", "owner", "id", "owner", "formControlName", "owner", 1, "form-control"],
        ["value", "", "selected", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        [1, "form-group", "col-lg-6"],
        [1, "form-check", "form-check-inline"],
        ["type", "radio", "formControlName", "sex", "name", "sex", "id", "sex1", "checked", "", 1, "form-check-input", 3, "value"],
        ["for", "sex1", 1, "form-check-label"],
        ["type", "radio", "formControlName", "sex", "name", "sex", "id", "sex2", "checked", "", 1, "form-check-input", 3, "value"],
        ["for", "sex2", 1, "form-check-label"],
        [1, "form-check"],
        ["type", "checkbox", "id", "familyChief", "formControlName", "familyChief", 1, "form-check-input", 3, "value"],
        ["for", "familyChief", 1, "form-check-label"],
        [1, "form-group"],
        ["name", "role", "id", "role", "formControlName", "role", 1, "form-control"],
        ["for", "cellPhone"],
        ["type", "tel", "formControlName", "cellPhone", "name", "cellPhone", 1, "form-control"],
        ["for", "mail"],
        ["type", "email", "formControlName", "mail", "name", "mail", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
        [1, "alert", 3, "ngClass"],
        [3, "value"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, Nv, 67, 9, "div", 0), 2 & t && zs("ngForOf", e.association)
      },
      directives: [Yc, Qc, ug, _m, pg, cm, gm, bg, Lm, Vm, Um, $m, Om, om, Wc],
      styles: [""]
    }), t
  })();

  function Dv(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "div", 1), Us(2, "div", 2), Us(3, "h3"), oo(4), Bs(5, "br"), Us(6, "small"), oo(7), Hs(), Hs(), Hs(), Us(8, "div", 3), Us(9, "div", 1), Us(10, "div", 4), Us(11, "p"), oo(12, " Chef de famille: "), Us(13, "strong"), oo(14), Hs(), Bs(15, "br"), oo(16, " Propri\xe9taire : "), Us(17, "strong"), oo(18), Hs(), Bs(19, "br"), oo(20, " Sexe: "), Us(21, "strong"), oo(22), Hs(), Hs(), Hs(), Us(23, "div", 4), Us(24, "p"), Us(25, "strong"), oo(26), Hs(), oo(27, " Membres "), Bs(28, "br"), oo(29, " T\xe9l\xe9phone: "), Us(30, "strong"), oo(31), Hs(), Bs(32, "br"), oo(33, " E-mail: "), Us(34, "strong"), oo(35), Hs(), Hs(), Hs(), Hs(), Us(36, "a", 5), oo(37, "Ajouter besoin"), Hs(), Hs(), Hs(), Bs(38, "br"), Bs(39, "br"), Us(40, "section", 6), Us(41, "div", 4), Us(42, "div", 7), Us(43, "p", 8), oo(44, "Besoins exprim\xe9s"), Hs(), Us(45, "p", 9), oo(46), Hs(), Us(47, "p"), Us(48, "a", 10), oo(49, "Voir la liste"), Hs(), Hs(), Hs(), Hs(), Us(50, "div", 4), Us(51, "div", 7), Us(52, "p", 8), oo(53, "Plaintes"), Hs(), Us(54, "p", 9), oo(55), Hs(), Us(56, "p", 11), Us(57, "a", 10), oo(58, "Voir la liste"), Hs(), Hs(), Hs(), Hs(), Hs(), Us(59, "section"), Bs(60, "router-outlet", 12), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(4), co("", t.household, " (", n.getAge(t.birthDate), " ans) "), Ai(3), lo("Association ", t.association, ""), Ai(7), ao(n.getOwner(t.familyChief)), Ai(4), ao(n.getOwner(t.owner)), Ai(4), ao(n.getSex(t.sex)), Ai(4), ao(t.familySize), Ai(5), lo(" (225) ", t.cellPhone, ""), Ai(4), lo(" ", t.mail, " "), Ai(1), Js("routerLink", "/association/needs/add/", t.idhousehold, ""), Ai(10), ao(n.needs ? n.needs.length : 0), Ai(2), Js("routerLink", "/association/needs/household/", t.idhousehold, ""), Ai(7), ao(n.complaints ? n.complaints.length : 0), Ai(2), Js("routerLink", "/association/needs/household/", t.idhousehold, "")
    }
  }
  let jv = (() => {
    class t {
      constructor(t, e, n, i) {
        this.householdsService = t, this.complaintsService = e, this.needsService = n, this.activatedRoute = i
      }
      ngOnInit() {
        this.idHousehold = this.activatedRoute.snapshot.params.id, this.getHousehold(this.idHousehold), this.getComplaints(this.idHousehold), this.getNeeds(this.idHousehold)
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
      }
      getComplaints(t) {
        this.complaintsService.household(t).subscribe(t => this.complaints = t)
      }
      getNeeds(t) {
        this.needsService.household(t).subscribe(t => this.needs = t)
      }
      getOwner(t) {
        return 1 === t ? "OUI" : "NON"
      }
      getAge(t) {
        const e = new Date(t),
          n = Math.abs(Date.now() - e.getTime());
        return Math.floor(n / 864e5 / 365)
      }
      getSex(t) {
        return 1 === t ? "Masculin" : "F\xe9minin"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Kg), Fs(Qg), Fs(Jg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-households-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row"],
        [1, "col-lg-5"],
        [1, "col-lg-7"],
        [1, "col-lg-6"],
        [1, "float-right", "bouton", 3, "routerLink"],
        [1, "row", "enumeration"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        [3, "routerLink"],
        [1, "text-center"],
        ["name", "needOutlet"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, Dv, 61, 14, "div", 0), 2 & t && zs("ngForOf", e.household)
      },
      directives: [Yc, Pf, If],
      styles: [""]
    }), t
  })(), zv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Appels d'offres"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })();

  function Vv(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), La(7, "date"), Hs(), Us(8, "td"), Us(9, "a", 3), oo(10, "voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(2), ao(t.need), Ai(2), ao(n.getStatus(t.status)), Ai(2), ao(Ia(7, 4, t.needDate, "medium")), Ai(3), Js("routerLink", "/administrator/needs/view/", t.idneed, "")
    }
  }
  let Uv = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {
        this.getNeeds()
      }
      getNeeds() {
        this.needsService.gets().subscribe(t => {
          this.needs = t
        }, t => {
          console.log(t)
        })
      }
      getStatus(t) {
        return {
          0: "NON PUBLI\xc9",
          1: "PUBLI\xc9",
          2: "ANNUL\xc9E"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Jg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-list"]
      ],
      decls: 7,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/needs/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1), Us(2, "a", 0), oo(3, "Ajouter"), Hs(), Hs(), Us(4, "table", 1), Us(5, "tbody"), Rs(6, Vv, 11, 7, "tr", 2), Hs(), Hs()), 2 & t && (Ai(1), lo(" Liste des besoins (", e.needs.length, ") "), Ai(5), zs("ngForOf", e.needs))
      },
      directives: [Pf, Yc],
      pipes: [nu],
      styles: [""]
    }), t
  })();

  function Hv(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "div", 1), Us(1, "h3"), oo(2), Hs(), Us(3, "form", 2), Gs("ngSubmit", (function () {
        return Ke(t), Ys().onSubmit()
      })), Us(4, "div", 3), Us(5, "label", 4), oo(6, "Titre de besoin"), Hs(), Bs(7, "input", 5), Hs(), Us(8, "div", 3), Us(9, "label", 6), oo(10, "Description"), Hs(), Bs(11, "textarea", 7), Hs(), Us(12, "div", 3), Us(13, "button", 8), oo(14, "Enr\xe9gistrer"), Hs(), Hs(), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(2), lo("D\xe9claration de besoin ", t.household, ""), Ai(1), zs("formGroup", n.needForm), Ai(10), zs("disabled", !n.needForm.valid)
    }
  }
  let Bv = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.needsService = t, this.householdsService = e, this.fb = n, this.activatedRoute = i, this.router = r
      }
      ngOnInit() {
        this.householdId = this.activatedRoute.snapshot.params.id, this.getHousehold(this.householdId), this.createForm()
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => {
          this.household = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.needForm = this.fb.group({
          householdId: [this.householdId, xm.required],
          need: ["", xm.required],
          description: ["", xm.required]
        })
      }
      onSubmit() {
        this.needsService.set(this.needForm.value).subscribe(t => {
          this.router.navigate(["/association/households/view/" + this.householdId])
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Jg), Fs(Kg), Fs(Sg), Fs(mp), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-add"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "col-lg-7", 4, "ngFor", "ngForOf"],
        [1, "col-lg-7"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "need"],
        ["type", "text", "formControlName", "need", "name", "need", 1, "form-control"],
        ["for", "description"],
        ["formControlName", "description", "name", "description", "id", "description", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, Hv, 15, 3, "div", 0), 2 & t && zs("ngForOf", e.household)
      },
      directives: [Yc, ug, _m, pg, cm, gm, bg],
      styles: [""]
    }), t
  })();

  function Zv(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "div", 2), Us(2, "div", 7), Us(3, "h4"), oo(4, "M\xe9nage"), Hs(), Us(5, "div"), Us(6, "h5"), oo(7), Hs(), Us(8, "p"), oo(9), Bs(10, "br"), oo(11), Hs(), Hs(), Hs(), Us(12, "div", 8), Us(13, "h4"), oo(14, "Appel d'offre"), Hs(), Us(15, "ul", 9), Us(16, "li", 10), oo(17), La(18, "date"), Hs(), oo(19, "- "), Us(20, "li", 10), oo(21, "Non Financ\xe9"), Hs(), oo(22, "- "), Us(23, "li", 10), oo(24, "Non Ex\xe9cution"), Hs(), Hs(), Us(25, "h5"), oo(26), Hs(), Us(27, "p"), oo(28), Hs(), Hs(), Us(29, "div", 6), Us(30, "h4"), oo(31, "Suivi"), Hs(), oo(32), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(7), co(" ", t.household, ", ", n.getOwner(t.owner), ""), Ai(2), lo(" ", t.familySize, " Membres "), Ai(2), lo(" (225) ", t.cellPhone, " "), Ai(6), lo("", Aa(18, 8, t.needDate), " "), Ai(9), lo(" ", t.need, ""), Ai(2), lo("", t.description, " "), Ai(4), lo(" ", t.address, " ")
    }
  }

  function $v(t, e) {
    if (1 & t && (Us(0, "div", 11), Us(1, "div", 12), Bs(2, "img", 13), Hs(), Us(3, "div", 14), Us(4, "h3"), oo(5), Us(6, "span", 15), oo(7), Bs(8, "br"), oo(9), Hs(), Hs(), Us(10, "p"), oo(11), Hs(), Us(12, "p"), Us(13, "a", 16), oo(14, "Choisir cette offre"), Hs(), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(5), lo(" ", t.supplier, " "), Ai(2), lo("Co\xfbt: ", t.price, " CFA "), Ai(2), lo("D\xe9lai d'\xe9x\xe9cution: ", t.timeLimit, " Jours"), Ai(2), lo(" ", t.detail, " ")
    }
  }
  let qv = (() => {
    class t {
      constructor(t, e, n) {
        this.needsService = t, this.proposalsService = e, this.activatedRoute = n
      }
      ngOnInit() {
        this.idNeed = this.activatedRoute.snapshot.params.id, this.getNeed(this.idNeed), this.getProposals(this.idNeed)
      }
      getNeed(t) {
        this.needsService.get(t).subscribe(t => {
          this.need = t
        }, t => {
          console.log(t)
        })
      }
      getProposals(t) {
        this.proposalsService.need(t).subscribe(t => this.proposals = t)
      }
      getOwner(t) {
        return {
          0: "Locataire",
          1: "Propri\xe9taire"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Jg), Fs(Xg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-view"]
      ],
      decls: 10,
      vars: 2,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "chats"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "text-center"],
        ["class", "chat-suppliers", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [1, "col-lg-3"],
        [1, "col-lg-5"],
        [1, "list-inline"],
        [1, "list-inline-item", "bar-right"],
        [1, "chat-suppliers"],
        [1, "chat-user"],
        ["src", "../../../assets/images/chateur.png", "alt", "Fournisseur", 1, "logo"],
        [1, "chat-message"],
        [1, "float-right"],
        [1, "bouton"]
      ],
      template: function (t, e) {
        1 & t && (Rs(0, Zv, 33, 10, "div", 0), Us(1, "div", 1), Us(2, "div", 2), Us(3, "div", 3), Us(4, "h2", 4), oo(5, "Propositions des fournisseurs"), Hs(), Rs(6, $v, 15, 4, "div", 5), Hs(), Us(7, "div", 6), Us(8, "h2", 4), oo(9, "Ex\xe9cution des travaux"), Hs(), Hs(), Hs(), Hs()), 2 & t && (zs("ngForOf", e.need), Ai(6), zs("ngForOf", e.proposals))
      },
      directives: [Yc],
      pipes: [nu],
      styles: [""]
    }), t
  })(), Gv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-officers-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Agent de Municipalit\xe9"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })(), Wv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/officers/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      password(t) {
        return this.http.put(this.baseUrl + "password", t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Kv(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 2), oo(9, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.officer), Ai(2), ao(t.phone), Ai(2), ao(t.email), Ai(2), Js("routerLink", "/administrator/officers/view/", t.idofficer, "")
    }
  }
  let Yv = (() => {
    class t {
      constructor(t) {
        this.officersService = t
      }
      ngOnInit() {
        this.getOfficers()
      }
      getOfficers() {
        this.officersService.gets().subscribe(t => this.officers = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Wv))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-officers-list"]
      ],
      decls: 5,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1, "Liste des agents municipaux"), Hs(), Us(2, "table", 0), Us(3, "tbody"), Rs(4, Kv, 10, 4, "tr", 1), Hs(), Hs()), 2 & t && (Ai(4), zs("ngForOf", e.officers))
      },
      directives: [Yc, Pf],
      styles: [""]
    }), t
  })();

  function Jv(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "div", 1), Us(1, "h3"), oo(2, "Info Agent Municipal"), Hs(), Us(3, "form", 2), Gs("ngSubmit", (function () {
        return Ke(t), Ys().onSubmit()
      })), Us(4, "div", 3), Us(5, "label", 4), oo(6, "Nom et prenom"), Hs(), Us(7, "input", 5), Gs("ngModelChange", (function (n) {
        return Ke(t), e.$implicit.officer = n
      })), Hs(), Hs(), Us(8, "div", 3), Us(9, "label", 6), oo(10, "Adresse e-mail"), Hs(), Us(11, "input", 7), Gs("ngModelChange", (function (n) {
        return Ke(t), e.$implicit.email = n
      })), Hs(), Hs(), Us(12, "div", 3), Us(13, "label", 8), oo(14, "T\xe9l\xe9phone"), Hs(), Us(15, "input", 9), Gs("ngModelChange", (function (n) {
        return Ke(t), e.$implicit.phone = n
      })), Hs(), Hs(), Us(16, "div", 3), Us(17, "button", 10), oo(18, "Valider"), Hs(), Hs(), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(3), zs("formGroup", n.officerForm), Ai(4), zs("ngModel", t.officer), Ai(4), zs("ngModel", t.email), Ai(4), zs("ngModel", t.phone), Ai(2), zs("disabled", !n.officerForm.valid)
    }
  }
  let Qv = (() => {
    class t {
      constructor(t, e, n) {
        this.officesService = t, this.fb = e, this.activatedRoute = n
      }
      ngOnInit() {
        this.idOfficer = this.activatedRoute.snapshot.params.id, this.getOfficer(this.idOfficer), this.createForm()
      }
      getOfficer(t) {
        this.officesService.get(t).subscribe(t => this.officer = t)
      }
      createForm() {
        this.officerForm = this.fb.group({
          officer: ["", xm.required],
          email: ["", xm.required],
          phone: ["", xm.required]
        })
      }
      onSubmit() {
        this.officesService.put(this.officerForm.value).subscribe(t => {
          this.successMessage = "Mise \xe0 jour \xe9ffectu\xe9e avec succ\xe8s"
        }, t => {
          this.errorMessage = "Erreur"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Wv), Fs(Sg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-officers-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "col-lg-8", 4, "ngFor", "ngForOf"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "officer"],
        ["type", "text", "formControlName", "officer", "name", "officer", "id", "officer", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "name", "email", "id", "email", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "name", "phone", "id", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, Jv, 19, 5, "div", 0), 2 & t && zs("ngForOf", e.officer)
      },
      directives: [Yc, ug, _m, pg, cm, gm, bg],
      styles: [""]
    }), t
  })(), Xv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Associations"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })(), ty = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-townhalls-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Municipalit\xe9"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })();

  function ey(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 2), oo(9, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.supplier), Ai(2), ao(t.service), Ai(2), ao(t.phone), Ai(2), Js("routerLink", "/suppliers/view/", t.idsupplier, "")
    }
  }
  let ny = (() => {
    class t {
      constructor(t) {
        this.suppliersService = t
      }
      ngOnInit() {
        this.getSuppliers()
      }
      getSuppliers() {
        this.suppliersService.getSuppliers().subscribe(t => {
          this.suppliers = t
        }, t => {})
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Yg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-suppliers-list"]
      ],
      decls: 3,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "table", 0), Us(1, "tbody"), Rs(2, ey, 10, 4, "tr", 1), Hs(), Hs()), 2 & t && (Ai(2), zs("ngForOf", e.suppliers))
      },
      directives: [Yc, Pf],
      styles: [""]
    }), t
  })(), iy = (() => {
    class t {
      constructor(t, e) {
        this.suppliersService = t, this.ar = e
      }
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Yg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-suppliers-view"]
      ],
      decls: 2,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "p"), oo(1, "suppliers-view works!"), Hs())
      },
      styles: [""]
    }), t
  })(), ry = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-suppliers-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Us(0, "h1"), oo(1, "Fournisseurs"), Hs(), Bs(2, "router-outlet"))
      },
      directives: [If],
      styles: [""]
    }), t
  })(), sy = (() => {
    class t {
      constructor() {
        this.smallIcon = new em.Icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          shadowSize: [41, 41]
        })
      }
      ngAfterViewInit() {
        this.createMap()
      }
      createMap() {
        const t = {
          lat: 5.324388151020659,
          lng: -4.076144442074325
        };
        this.map = em.map("map", {
          center: [t.lat, t.lng],
          zoom: 12
        }), em.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 12,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map), this.addMarker({
          coords: t,
          text: "",
          open: !1
        })
      }
      addMarker({
        coords: t,
        text: e,
        open: n
      }) {
        const i = em.marker([t.lat, t.lng], {
          icon: this.smallIcon
        });
        n ? i.addTo(this.map).bindPopup(e).openPopup() : i.addTo(this.map).bindPopup(e)
      }
      onMapClick() {
        console.log(em.latLng)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-map"]
      ],
      decls: 3,
      vars: 0,
      consts: [
        [1, "map-wrapper"],
        [1, "map-border"],
        ["id", "map", 3, "click"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "div", 0), Us(1, "div", 1), Us(2, "div", 2), Gs("click", (function () {
          return e.onMapClick()
        })), Hs(), Hs(), Hs())
      },
      styles: [""]
    }), t
  })();

  function oy(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "h3", 16), Us(2, "small"), oo(3, " Coordonn\xe9es g\xe9ographique de"), Hs(), Bs(4, "br"), oo(5), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(5), lo(" ", t.household, " ")
    }
  }
  const ay = [{
    path: "administrator",
    component: qg,
    canActivate: [iv],
    children: [{
      path: "dashboard",
      component: e_
    }, {
      path: "add",
      component: i_
    }, {
      path: "administrators",
      component: o_
    }, {
      path: "townhalls",
      component: ty,
      children: [{
        path: "",
        component: bv
      }, {
        path: "add",
        component: wv
      }, {
        path: "view/:id",
        component: Pv,
        children: [{
          path: "",
          component: xv,
          outlet: "townMap"
        }]
      }]
    }, {
      path: "suppliers",
      component: ry,
      children: [{
        path: "",
        component: ny
      }, {
        path: "view/:id",
        component: iy
      }]
    }, {
      path: "officers",
      component: Gv,
      children: [{
        path: "",
        component: Yv
      }, {
        path: "view/:id",
        component: Qv
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: dv,
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }, {
      path: "banks",
      component: rv,
      children: [{
        path: "",
        component: av
      }, {
        path: "add",
        component: lv
      }]
    }, {
      path: "sensitization",
      component: a_,
      children: [{
        path: "sms",
        component: l_,
        children: [{
          path: "",
          component: h_
        }, {
          path: "send",
          component: f_
        }, {
          path: "chiefs",
          component: g_
        }, {
          path: "association",
          component: v_
        }, {
          path: "everyone",
          component: m_
        }]
      }, {
        path: "voice",
        component: gv,
        children: [{
          path: "send",
          component: vv
        }]
      }]
    }, {
      path: "needs",
      component: zv,
      children: [{
        path: "",
        component: Uv
      }, {
        path: "add/:id",
        component: Bv
      }, {
        path: "view/:id",
        component: qv
      }]
    }, {
      path: "households",
      component: Tv,
      children: [{
        path: "",
        component: Av
      }, {
        path: "view/:id",
        component: jv
      }, {
        path: "add/:id",
        component: Fv
      }, {
        path: "address/:id",
        component: (() => {
          class t {
            constructor(t, e, n, i) {
              this.fb = t, this.ar = e, this.router = n, this.householdsService = i, this.options = {
                layers: [Object(em.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  attribution: "&copy; OpenStreetMap contributors"
                })],
                zoom: 7,
                center: Object(em.latLng)([46.879966, -121.726909])
              }, this.smallIcon = new em.Icon({
                iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
                iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                shadowSize: [41, 41]
              })
            }
            ngAfterViewInit() {
              this.createMap()
            }
            ngOnInit() {
              this.idHousehold = this.ar.snapshot.params.id, this.getHousehold(this.idHousehold), this.createForm()
            }
            createMap() {
              this.map = em.map("map", {
                center: [5.324388151020659, -4.076144442074325],
                zoom: 12
              }), em.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                minZoom: 12,
                maxZoom: 17,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }).addTo(this.map), this.map.on("click", t => {
                this.gpsForm.controls.lat.setValue(t.latlng.lat), this.gpsForm.controls.lng.setValue(t.latlng.lng), em.marker([t.latlng.lat, t.latlng.lng], {
                  icon: this.smallIcon
                }).addTo(this.map)
              })
            }
            getHousehold(t) {
              this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
            }
            createForm() {
              this.gpsForm = this.fb.group({
                idhousehold: [this.idHousehold, xm.required],
                lat: ["", xm.required],
                lng: ["", xm.required]
              })
            }
            onSubmit() {
              this.householdsService.address(this.gpsForm.value).subscribe(t => this.router.navigate(["/association/households/view/" + this.idHousehold]))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Fs(Sg), Fs(mp), Fs(Sf), Fs(Kg))
          }, t.\u0275cmp = pe({
            type: t,
            selectors: [
              ["app-households-address"]
            ],
            decls: 24,
            vars: 3,
            consts: [
              [4, "ngFor", "ngForOf"],
              [1, "row", "justify-content-center"],
              [1, "col-lg-5"],
              [1, "map-wrapper"],
              [1, "map-border"],
              ["id", "map"],
              [3, "formGroup", "ngSubmit"],
              [1, "alert", "alert-warning"],
              [1, "form-group", "row"],
              [1, "form-group", "col-lg-6"],
              ["for", "lat"],
              ["type", "text", "formControlName", "lat", "name", "lat", 1, "form-control"],
              ["for", "lng"],
              ["type", "text", "formControlName", "lng", "name", "lng", 1, "form-control"],
              [1, "form-group"],
              ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
              [1, "text-center"]
            ],
            template: function (t, e) {
              1 & t && (Rs(0, oy, 6, 1, "div", 0), Us(1, "div", 1), Us(2, "div", 2), Us(3, "div", 3), Us(4, "div", 4), Bs(5, "div", 5), Hs(), Hs(), Hs(), Us(6, "div", 2), Us(7, "form", 6), Gs("ngSubmit", (function () {
                return e.onSubmit()
              })), Us(8, "h5"), oo(9, "Coordonn\xe9es G\xe9ographique"), Hs(), Us(10, "div", 7), oo(11, "Cliquer sur la carte pour avoir la position"), Hs(), Us(12, "div", 8), Us(13, "div", 9), Us(14, "label", 10), oo(15, "Latitude"), Hs(), Bs(16, "input", 11), Hs(), Us(17, "div", 9), Us(18, "label", 12), oo(19, "Longitude"), Hs(), Bs(20, "input", 13), Hs(), Hs(), Us(21, "div", 14), Us(22, "button", 15), oo(23, "Enr\xe9gistrer"), Hs(), Hs(), Hs(), Hs(), Hs()), 2 & t && (zs("ngForOf", e.household), Ai(7), zs("formGroup", e.gpsForm), Ai(15), zs("disabled", !e.gpsForm.valid))
            },
            directives: [Yc, ug, _m, pg, cm, gm, bg],
            styles: ["#map[_ngcontent-%COMP%]{height:350px;width:100%;z-index:1}"]
          }), t
        })()
      }]
    }, {
      path: "associations",
      component: Xv,
      children: [{
        path: "",
        component: B_
      }, {
        path: "add",
        component: X_,
        children: [{
          path: "",
          component: sy,
          outlet: "associationMap"
        }]
      }, {
        path: "view/:id",
        component: nv
      }]
    }]
  }];
  let ly = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Uf.forRoot(ay)], Uf
      ]
    }), t
  })();
  const cy = [{
    path: "sensitization",
    component: a_,
    canActivate: [iv],
    children: [{
      path: "sms",
      component: l_,
      children: [{
        path: "",
        component: h_
      }, {
        path: "send",
        component: f_
      }, {
        path: "everyone",
        component: m_
      }]
    }]
  }];
  let uy = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Uf.forRoot(cy)], Uf
      ]
    }), t
  })(), hy = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg]
      ]
    }), t
  })(), dy = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg]
      ]
    }), t
  })(), py = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg, hy, uy, dy]
      ]
    }), t
  })(), fy = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, kg, vh, ly, py]
      ]
    }), t
  })();
  const my = function () {
    return ["/townhalls/dashboard"]
  }, gy = function () {
    return ["/townhalls/associations"]
  };
  let _y = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {}
      sidebar() {
        this.status = !this.status
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-townhalls-main"]
      ],
      decls: 51,
      vars: 6,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "float-right", "btn-close", 3, "click"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "click"],
        ["routerLink", "/townhalls/households", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "users"],
        ["routerLink", "/townhalls/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/townhalls/complaints", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/townhalls/suppliers", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "layers"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["routerLink", "/townhalls/officers/password", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "header", 0), Us(1, "div", 1), Gs("click", (function () {
          return e.sidebar()
        })), Bs(2, "span"), Bs(3, "span"), Bs(4, "span"), Hs(), Hs(), Us(5, "div", 2), Us(6, "button", 3), Gs("click", (function () {
          return e.sidebar()
        })), oo(7, "X"), Hs(), Us(8, "nav"), Us(9, "div", 4), Us(10, "ul", 5), Us(11, "li", 6), Us(12, "a", 7), Gs("click", (function () {
          return e.sidebar()
        })), oo(13, " Tableau de Bord "), Hs(), Hs(), Us(14, "li", 6), Us(15, "a", 7), Gs("click", (function () {
          return e.sidebar()
        })), oo(16, " Asoociations "), Hs(), Hs(), Us(17, "li", 6), Us(18, "a", 8), Bs(19, "span", 9), oo(20, " M\xe9nages "), Hs(), Hs(), Us(21, "li", 6), Us(22, "a", 10), Bs(23, "span", 11), oo(24, " Appels d'offre "), Hs(), Hs(), Us(25, "li", 6), Us(26, "a", 12), Bs(27, "span", 11), oo(28, " R\xe9actions "), Hs(), Hs(), Us(29, "li", 6), Us(30, "a", 13), Bs(31, "span", 14), oo(32, " Fournisseurs "), Hs(), Hs(), Hs(), Us(33, "h6", 15), Us(34, "span"), oo(35, "Param\xe8trages"), Hs(), Us(36, "a", 16), Bs(37, "span", 17), Hs(), Hs(), Us(38, "ul", 18), Us(39, "li", 6), Us(40, "a", 19), Bs(41, "span", 20), oo(42, " Changer de mot de passe "), Hs(), Hs(), Us(43, "li", 6), Us(44, "a", 21), Gs("click", (function () {
          return e.authService.logoutUser()
        })), Bs(45, "span", 20), oo(46, " Deconnexion "), Hs(), Hs(), Hs(), Hs(), Hs(), Hs(), Us(47, "div", 22), Us(48, "div", 23), Us(49, "main", 24), Bs(50, "router-outlet"), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Ai(7), zs("routerLink", Sa(4, my)), Ai(3), zs("routerLink", Sa(5, gy)), Ai(32), zs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Wc, Pf, Ef, If],
      styles: [""]
    }), t
  })();

  function vy(t, e) {
    if (1 & t && (Us(0, "p", 13), Us(1, "span"), oo(2, "Salut, "), Us(3, "b"), oo(4), Hs(), Hs(), Us(5, "span"), oo(6, "Voici ce qui se passe aujourd'hui."), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(4), ao(t.user.name)
    }
  }

  function yy(t, e) {
    if (1 & t && (Us(0, "div", 14), Us(1, "p", 15), oo(2, "A.V.E.Cs"), Hs(), Us(3, "p", 16), oo(4), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(4), ao(t.associations.length)
    }
  }

  function by(t, e) {
    if (1 & t && (Us(0, "div", 14), Us(1, "p", 15), oo(2, "M\xe9nages"), Hs(), Us(3, "p", 16), oo(4), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(4), ao(t.households.length)
    }
  }

  function wy(t, e) {
    if (1 & t && (Us(0, "p", 16), oo(1), Hs()), 2 & t) {
      const t = Ys(2);
      Ai(1), ao(t.suppliers.length)
    }
  }

  function xy(t, e) {
    1 & t && (Us(0, "p", 16), oo(1, "0"), Hs())
  }

  function Cy(t, e) {
    if (1 & t && (Us(0, "div", 14), Us(1, "p", 15), oo(2, "Appels d'offre"), Hs(), Rs(3, wy, 2, 1, "p", 17), Rs(4, xy, 2, 0, "p", 17), Hs()), 2 & t) {
      const t = Ys();
      Ai(3), zs("ngIf", t.suppliers), Ai(1), zs("ngIf", !t.suppliers)
    }
  }

  function Sy(t, e) {
    if (1 & t && (Us(0, "p", 16), oo(1), Hs()), 2 & t) {
      const t = Ys(2);
      Ai(1), ao(t.suppliers.length)
    }
  }

  function ky(t, e) {
    1 & t && (Us(0, "p", 16), oo(1, "0"), Hs())
  }

  function Py(t, e) {
    if (1 & t && (Us(0, "div", 14), Us(1, "p", 15), oo(2, "Fournisseurs"), Hs(), Rs(3, Sy, 2, 1, "p", 17), Rs(4, ky, 2, 0, "p", 17), Hs()), 2 & t) {
      const t = Ys();
      Ai(3), zs("ngIf", t.suppliers), Ai(1), zs("ngIf", !t.suppliers)
    }
  }

  function Ty(t, e) {
    if (1 & t && (Us(0, "div", 18), Us(1, "p", 19), oo(2), Bs(3, "br"), oo(4, " Besoins exprim\xe9s "), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(2), lo("", t.needs.length, " ")
    }
  }

  function Ey(t, e) {
    if (1 & t && (Us(0, "p", 20), oo(1), Bs(2, "br"), oo(3, " Plaintes "), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), lo(" ", t.complaints.length, " ")
    }
  }
  let Ly = (() => {
    class t {
      constructor(t, e, n, i, r, s, o) {
        this.authService = t, this.associationsService = e, this.householdsService = n, this.suppliersService = i, this.needsService = r, this.complaintsService = s, this.router = o
      }
      ngOnInit() {
        this.getUser(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof eh && 401 === t.status && this.router.navigate(["/login"])
        })
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      getAssociations() {
        this.associationsService.town().subscribe(t => this.associations = t)
      }
      getHouseholds() {
        this.householdsService.town().subscribe(t => this.households = t)
      }
      getSuppliers() {
        this.suppliersService.town().subscribe(t => this.suppliers = t)
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg), Fs(Wg), Fs(Kg), Fs(Yg), Fs(Jg), Fs(Qg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-townhalls-dashboard"]
      ],
      decls: 29,
      vars: 7,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        ["class", "cadre", 4, "ngIf"],
        [1, "needs"],
        [1, "row"],
        [1, "col-lg-8"],
        ["class", "col-lg-4", 4, "ngIf"],
        [1, "col-lg-5"],
        [1, "btn", "btn-success"],
        [1, "col-lg-4", "text-center"],
        ["class", "big-title-green", 4, "ngIf"],
        ["routerLink", "/administrator/complaints"],
        [1, "connected"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "col-lg-4"],
        [1, "big-title"],
        [1, "big-title-green"]
      ],
      template: function (t, e) {
        1 & t && (Rs(0, vy, 7, 1, "p", 0), Us(1, "section", 1), Us(2, "div", 2), Rs(3, yy, 5, 1, "div", 3), Hs(), Us(4, "div", 2), Rs(5, by, 5, 1, "div", 3), Hs(), Us(6, "div", 2), Rs(7, Cy, 5, 2, "div", 3), Hs(), Us(8, "div", 2), Rs(9, Py, 5, 2, "div", 3), Hs(), Hs(), Us(10, "section", 4), Us(11, "div", 5), Us(12, "div", 6), Us(13, "h2"), oo(14, "Expressions des besoins"), Hs(), Us(15, "div", 5), Rs(16, Ty, 5, 1, "div", 7), Us(17, "div", 8), Us(18, "p"), oo(19, " Besoins Trait\xe9s: 0"), Hs(), Us(20, "p"), oo(21, " Sans r\xe9actions: 0"), Hs(), Hs(), Us(22, "div", 2), Us(23, "a", 9), oo(24, "Voir les besoins"), Hs(), Hs(), Hs(), Hs(), Us(25, "div", 10), Rs(26, Ey, 4, 1, "p", 11), Us(27, "a", 12), oo(28, "Voir toutes les plaintes"), Hs(), Hs(), Hs(), Hs()), 2 & t && (zs("ngIf", e.user), Ai(3), zs("ngIf", e.associations), Ai(2), zs("ngIf", e.households), Ai(2), zs("ngIf", e.suppliers), Ai(2), zs("ngIf", e.suppliers), Ai(7), zs("ngIf", e.needs), Ai(10), zs("ngIf", e.complaints))
      },
      directives: [Qc, Pf],
      styles: [""]
    }), t
  })();

  function Ay(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "tr", 7), Gs("click", (function () {
        Ke(t);
        const n = e.$implicit;
        return Ys(2).onSelected(n)
      })), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Ys(2);
      Ai(2), lo("", n.textLimit(t.complaint), "..."), Ai(2), ao(t.household), Ai(2), ao(t.complaintDate)
    }
  }

  function Iy(t, e) {
    if (1 & t && (Us(0, "div", 1), Us(1, "div", 2), Us(2, "h3"), oo(3, "Liste de plaintes"), Hs(), Us(4, "div", 3), oo(5, " Clique sur la ligne de la plainte pour voir les details "), Hs(), Bs(6, "br"), Us(7, "table", 4), Us(8, "tbody"), Rs(9, Ay, 7, 3, "tr", 5), Hs(), Hs(), Hs(), Us(10, "div", 6), Bs(11, "router-outlet"), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(9), zs("ngForOf", t.complaints)
    }
  }
  let Oy = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Qg), Fs(mp), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-complaints-town"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, Iy, 12, 1, "div", 0), 2 & t && zs("ngIf", e.complaints)
      },
      directives: [Qc, Yc, If],
      styles: [""]
    }), t
  })();

  function My(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), Us(6, "a", 3), oo(7, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.association), Ai(2), ao(t.chief), Ai(2), Js("routerLink", "/administrator/associations/view/", t.idassociation, "")
    }
  }
  let Ry = (() => {
    class t {
      constructor(t, e) {
        this.townService = t, this.associationsService = e
      }
      ngOnInit() {
        this.getAssociation()
      }
      getAssociation() {
        this.associationsService.town().subscribe(t => this.associations = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Gg), Fs(Wg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-town"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "/townhalls/associations/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1, " Liste des associations "), Us(2, "a", 0), oo(3, "Ajouter"), Hs(), Hs(), Us(4, "table", 1), Us(5, "tbody"), Rs(6, My, 8, 3, "tr", 2), Hs(), Hs()), 2 & t && (Ai(6), zs("ngForOf", e.associations))
      },
      directives: [Pf, Yc],
      styles: [""]
    }), t
  })();

  function Ny(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 2), oo(9, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.household), Ai(2), ao(t.association), Ai(2), ao(t.cellPhone), Ai(2), Js("routerLink", "/townhalls/households/view/", t.idhousehold, "")
    }
  }
  let Fy = (() => {
    class t {
      constructor(t) {
        this.householdsService = t
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.town().subscribe(t => this.households = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Kg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-households-town"]
      ],
      decls: 6,
      vars: 2,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1), Hs(), Us(2, "table", 0), Bs(3, "thead"), Us(4, "tbody"), Rs(5, Ny, 10, 4, "tr", 1), Hs(), Hs()), 2 & t && (Ai(1), lo(" Liste des M\xe9nages(", e.households ? e.households.length : 0, ")"), Ai(4), zs("ngForOf", e.households))
      },
      directives: [Yc, Pf],
      styles: [""]
    }), t
  })();

  function Dy(t, e) {
    if (1 & t && (Us(0, "h3"), oo(1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), lo(" Liste des besoins (", t.needs.length, ")")
    }
  }

  function jy(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), La(5, "date"), Hs(), Us(6, "td"), Us(7, "a", 3), oo(8, "voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.need), Ai(2), ao(Ia(5, 3, t.needDate, "medium")), Ai(3), Js("routerLink", "/townhalls/needs/view/", t.idneed, "")
    }
  }
  let zy = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {
        this.getNeeds()
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
      getStatus(t) {
        return ["NON PUBLI\xc9", "PUBLI\xc9", "ANNUL\xc9E"][t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Jg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-town"]
      ],
      decls: 4,
      vars: 2,
      consts: [
        [4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Rs(0, Dy, 2, 1, "h3", 0), Us(1, "table", 1), Us(2, "tbody"), Rs(3, jy, 9, 6, "tr", 2), Hs(), Hs()), 2 & t && (zs("ngIf", e.needs), Ai(3), zs("ngForOf", e.needs))
      },
      directives: [Qc, Yc, Pf],
      pipes: [nu],
      styles: [""]
    }), t
  })();

  function Vy(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 4), oo(9, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.supplier), Ai(2), ao(t.service), Ai(2), ao(t.phone), Ai(2), Js("routerLink", "/townhalls/suppliers/view/", t.idsupplier, "")
    }
  }
  let Uy = (() => {
    class t {
      constructor(t) {
        this.suppliersService = t
      }
      ngOnInit() {
        this.getSuppliers()
      }
      getSuppliers() {
        this.suppliersService.town().subscribe(t => this.suppliers = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Yg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-suppliers-town"]
      ],
      decls: 8,
      vars: 1,
      consts: [
        ["routerLink", "add", 1, "bouton", "float-right"],
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1, "\nFournisseurs de la municipalit\xe9 "), Us(2, "a", 0), oo(3, "Ajouter"), Hs(), Hs(), Us(4, "div", 1), Us(5, "table", 2), Us(6, "tbody"), Rs(7, Vy, 10, 4, "tr", 3), Hs(), Hs(), Hs()), 2 & t && (Ai(7), zs("ngForOf", e.suppliers))
      },
      directives: [Pf, Yc],
      styles: [""]
    }), t
  })(), Hy = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/services", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function By(t, e) {
    if (1 & t && (Us(0, "div", 27), oo(1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), ao(t.successMessage)
    }
  }

  function Zy(t, e) {
    if (1 & t && (Us(0, "option", 28), oo(1), Hs()), 2 & t) {
      const t = e.$implicit;
      zs("value", t.idservice), Ai(1), ao(t.service)
    }
  }
  let $y = (() => {
    class t {
      constructor(t, e, n) {
        this.suppliersService = t, this.servicesService = e, this.fb = n, this.successMessage = ""
      }
      ngOnInit() {
        this.getDomains(), this.createForm()
      }
      getDomains() {
        this.servicesService.gets().subscribe(t => {
          this.services = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.supplierForm = this.fb.group({
          serviceId: ["", xm.required],
          supplier: ["", xm.required],
          legalForm: ["", xm.required],
          tradeRegister: ["", xm.required],
          taxpayer: ["", xm.required],
          address: ["", xm.required],
          phone: ["", xm.required],
          email: ["", [xm.required, xm.email]]
        })
      }
      onSubmit() {
        this.suppliersService.setSupplier(this.supplierForm.value).subscribe(t => {
          this.successMessage = "Fournisseur enr\xe9gistr\xe9 avec succ\xe8s"
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Yg), Fs(Hy), Fs(Sg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-suppliers-add"]
      ],
      decls: 45,
      vars: 4,
      consts: [
        [1, "col-lg-8"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "supplier"],
        ["type", "text", "formControlName", "supplier", "name", "supplier", 1, "form-control"],
        ["for", "serviceId"],
        ["name", "serviceId", "id", "serviceId", "formControlName", "serviceId", 1, "form-control"],
        ["value", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        [1, "form-row"],
        [1, "form-group", "col-md-4"],
        ["for", "legalForm"],
        ["type", "text", "formControlName", "legalForm", "name", "legalForm", 1, "form-control"],
        ["for", "tradeRegister"],
        ["type", "text", "formControlName", "tradeRegister", "name", "tradeRegister", 1, "form-control"],
        ["for", "taxpayer"],
        ["type", "text", "formControlName", "taxpayer", "name", "taxpayer", 1, "form-control"],
        [1, "form-group", "col-md-5"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "name", "phone", 1, "form-control"],
        [1, "form-group", "col-md-7"],
        ["for", "mail"],
        ["type", "email", "formControlName", "email", "name", "email", 1, "form-control"],
        ["for", "address"],
        ["type", "text", "formControlName", "address", "name", "address", 1, "form-control"],
        ["type", "submit", 1, "button", 3, "disabled"],
        [1, "alert", "alert-success"],
        [3, "value"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "div", 0), Us(1, "h3"), oo(2, "Ajouter un fournisseur"), Hs(), Rs(3, By, 2, 1, "div", 1), Us(4, "form", 2), Gs("ngSubmit", (function () {
          return e.onSubmit()
        })), Us(5, "div", 3), Us(6, "label", 4), oo(7, "Nom du fournisseur"), Hs(), Bs(8, "input", 5), Hs(), Us(9, "div", 3), Us(10, "label", 6), oo(11, "Service"), Hs(), Us(12, "select", 7), Us(13, "option", 8), oo(14, "Choisir"), Hs(), Rs(15, Zy, 2, 2, "option", 9), Hs(), Hs(), Us(16, "div", 10), Us(17, "div", 11), Us(18, "label", 12), oo(19, "Forme Juridique"), Hs(), Bs(20, "input", 13), Hs(), Us(21, "div", 11), Us(22, "label", 14), oo(23, "R\xe9gistre de commerce"), Hs(), Bs(24, "input", 15), Hs(), Us(25, "div", 11), Us(26, "label", 16), oo(27, "Num\xe9ro contribuable"), Hs(), Bs(28, "input", 17), Hs(), Hs(), Us(29, "div", 10), Us(30, "div", 18), Us(31, "label", 19), oo(32, "T\xe9l\xe9phone"), Hs(), Bs(33, "input", 20), Hs(), Us(34, "div", 21), Us(35, "label", 22), oo(36, "E-mail"), Hs(), Bs(37, "input", 23), Hs(), Hs(), Us(38, "div", 3), Us(39, "label", 24), oo(40, "Adresse"), Hs(), Bs(41, "input", 25), Hs(), Us(42, "div", 3), Us(43, "button", 26), oo(44, "Enr\xe9gistrer"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(3), zs("ngIf", e.successMessage), Ai(1), zs("formGroup", e.supplierForm), Ai(11), zs("ngForOf", e.services), Ai(28), zs("disabled", !e.supplierForm.valid))
      },
      directives: [Qc, ug, _m, pg, cm, gm, bg, Vm, Um, $m, Yc],
      styles: [""]
    }), t
  })();
  const qy = [{
    path: "townhalls",
    component: _y,
    canActivate: [iv],
    children: [{
      path: "dashboard",
      component: Ly
    }, {
      path: "associations",
      component: Xv,
      children: [{
        path: "",
        component: Ry
      }, {
        path: "add",
        component: X_
      }, {
        path: "view/:id",
        component: nv
      }]
    }, {
      path: "officers",
      component: Gv,
      children: [{
        path: "password",
        component: (() => {
          class t {
            constructor(t, e, n) {
              this.officesService = t, this.fb = e, this.router = n
            }
            ngOnInit() {
              this.createForm()
            }
            createForm() {
              this.officerForm = this.fb.group({
                password: ["", xm.required],
                newPassword: ["", xm.required],
                confirmPassword: ["", [xm.required]]
              })
            }
            onSubmit() {
              this.officesService.password(this.officerForm.value).subscribe(t => {
                this.successMessage = "Mot de passe modifi\xe9", this.router.navigate(["/login"])
              }, t => {
                this.errorMessage = "Erreur"
              })
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Fs(Wv), Fs(Sg), Fs(Sf))
          }, t.\u0275cmp = pe({
            type: t,
            selectors: [
              ["app-officers-password"]
            ],
            decls: 19,
            vars: 2,
            consts: [
              [1, "col-lg-8"],
              [3, "formGroup", "ngSubmit"],
              [1, "form-group"],
              ["for", "password"],
              ["type", "password", "formControlName", "password", "name", "password", "id", "password", 1, "form-control"],
              ["for", "newPassword"],
              ["type", "password", "formControlName", "newPassword", "name", "newPassword", "id", "newPassword", 1, "form-control"],
              ["for", "confirmPassword"],
              ["type", "password", "formControlName", "confirmPassword", "name", "confirmPassword", "id", "confirmPassword", 1, "form-control"],
              ["type", "submit", 1, "bouton", 3, "disabled"]
            ],
            template: function (t, e) {
              1 & t && (Us(0, "div", 0), Us(1, "h3"), oo(2, "Changer de mot de passe"), Hs(), Us(3, "form", 1), Gs("ngSubmit", (function () {
                return e.onSubmit()
              })), Us(4, "div", 2), Us(5, "label", 3), oo(6, "Ancien Mot de passe"), Hs(), Bs(7, "input", 4), Hs(), Us(8, "div", 2), Us(9, "label", 5), oo(10, "Ancien Mot de passe"), Hs(), Bs(11, "input", 6), Hs(), Us(12, "div", 2), Us(13, "label", 7), oo(14, "Ancien Mot de passe"), Hs(), Bs(15, "input", 8), Hs(), Us(16, "div", 2), Us(17, "button", 9), oo(18, "Valider"), Hs(), Hs(), Hs(), Hs()), 2 & t && (Ai(3), zs("formGroup", e.officerForm), Ai(14), zs("disabled", !e.officerForm.valid))
            },
            directives: [ug, _m, pg, cm, gm, bg],
            styles: [""]
          }), t
        })()
      }, {
        path: "view",
        component: Qv
      }]
    }, {
      path: "suppliers",
      component: ry,
      children: [{
        path: "",
        component: Uy
      }, {
        path: "add",
        component: $y
      }, {
        path: "view/:id",
        component: iy
      }]
    }, {
      path: "households",
      component: Tv,
      children: [{
        path: "",
        component: Fy
      }, {
        path: "add",
        component: Fv
      }, {
        path: "view/:id",
        component: Fv
      }]
    }, {
      path: "needs",
      component: zv,
      children: [{
        path: "",
        component: zy
      }, {
        path: "view/:id",
        component: qv
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: Oy,
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }]
  }];
  let Gy = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Uf.forRoot(qy)], Uf
      ]
    }), t
  })(), Wy = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, kg, vh, Gy]
      ]
    }), t
  })(), Ky = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {}
      sidebar() {
        this.status = !this.status
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-main"]
      ],
      decls: 42,
      vars: 2,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLink", "/association/dashboard", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/association/households", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "users"],
        ["routerLink", "/association/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/association/complaints", "routerLinkActive", "active", 1, "nav-link"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["routerLink", "/townhalls/officers/password", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "header", 0), Us(1, "div", 1), Gs("click", (function () {
          return e.sidebar()
        })), Bs(2, "span"), Bs(3, "span"), Bs(4, "span"), Hs(), Hs(), Us(5, "div", 2), Us(6, "nav"), Us(7, "div", 3), Us(8, "ul", 4), Us(9, "li", 5), Us(10, "a", 6), oo(11, " Tableau de Bord "), Hs(), Hs(), Us(12, "li", 5), Us(13, "a", 7), Bs(14, "span", 8), oo(15, " M\xe9nages "), Hs(), Hs(), Us(16, "li", 5), Us(17, "a", 9), Bs(18, "span", 10), oo(19, " Appels d'offre "), Hs(), Hs(), Us(20, "li", 5), Us(21, "a", 11), Bs(22, "span", 10), oo(23, " R\xe9actions "), Hs(), Hs(), Hs(), Us(24, "h6", 12), Us(25, "span"), oo(26, "Param\xe8trages"), Hs(), Us(27, "a", 13), Bs(28, "span", 14), Hs(), Hs(), Us(29, "ul", 15), Us(30, "li", 5), Us(31, "a", 16), Bs(32, "span", 17), oo(33, " Changer de mot de passe "), Hs(), Hs(), Us(34, "li", 5), Us(35, "a", 18), Gs("click", (function () {
          return e.authService.logoutUser()
        })), Bs(36, "span", 17), oo(37, " Deconnexion "), Hs(), Hs(), Hs(), Hs(), Hs(), Hs(), Us(38, "div", 19), Us(39, "div", 20), Us(40, "main", 21), Bs(41, "router-outlet"), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Ai(33), zs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Wc, Pf, Ef, If],
      styles: [""]
    }), t
  })();

  function Yy(t, e) {
    if (1 & t && (Us(0, "p", 13), Us(1, "span"), oo(2, "Salut, "), Us(3, "b"), oo(4), Hs(), Hs(), Us(5, "span"), oo(6, "Voici ce qui se passe aujourd'hui."), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(4), ao(t.user.name)
    }
  }

  function Jy(t, e) {
    if (1 & t && (Us(0, "div", 14), Us(1, "p", 15), oo(2, "M\xe9nages"), Hs(), Us(3, "p", 16), oo(4), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(4), ao(t.households.length)
    }
  }

  function Qy(t, e) {
    if (1 & t && (Us(0, "p", 16), oo(1), Hs()), 2 & t) {
      const t = Ys(2);
      Ai(1), ao(t.complaints.length)
    }
  }

  function Xy(t, e) {
    if (1 & t && (Us(0, "div", 14), Us(1, "p", 15), oo(2, "Plaintes"), Hs(), Rs(3, Qy, 2, 1, "p", 17), Hs()), 2 & t) {
      const t = Ys();
      Ai(3), zs("ngIf", t.complaints)
    }
  }

  function tb(t, e) {
    if (1 & t && (Us(0, "div", 18), Us(1, "p", 19), oo(2), Bs(3, "br"), oo(4, " Besoins exprim\xe9s "), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(2), lo("", t.needs.length, " ")
    }
  }

  function eb(t, e) {
    if (1 & t && (Us(0, "p", 20), oo(1), Bs(2, "br"), oo(3, " Plaintes "), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), lo(" ", t.complaints.length, " ")
    }
  }
  let nb = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.authService = t, this.householdsService = e, this.needsService = n, this.complaintsService = i, this.router = r
      }
      ngOnInit() {
        this.getUser(), this.getHouseholds(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t)
      }
      getComplaints() {
        this.complaintsService.association().subscribe(t => this.complaints = t)
      }
      getHouseholds() {
        this.householdsService.association().subscribe(t => this.households = t)
      }
      getNeeds() {
        this.needsService.association().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg), Fs(Kg), Fs(Jg), Fs(Qg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-associations-dashboard"]
      ],
      decls: 25,
      vars: 5,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        ["class", "cadre", 4, "ngIf"],
        [1, "needs"],
        [1, "row"],
        [1, "col-lg-6"],
        ["class", "col-lg-4", 4, "ngIf"],
        [1, "col-lg-5"],
        [1, "btn", "btn-success"],
        [1, "col-lg-6", "text-center"],
        ["class", "big-title-green", 4, "ngIf"],
        ["routerLink", "/administrator/complaints"],
        [1, "connected"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "col-lg-4"],
        [1, "big-title"],
        [1, "big-title-green"]
      ],
      template: function (t, e) {
        1 & t && (Rs(0, Yy, 7, 1, "p", 0), Us(1, "section", 1), Us(2, "div", 2), Rs(3, Jy, 5, 1, "div", 3), Hs(), Us(4, "div", 2), Rs(5, Xy, 4, 1, "div", 3), Hs(), Hs(), Us(6, "section", 4), Us(7, "div", 5), Us(8, "div", 6), Us(9, "h2"), oo(10, "Expressions des besoins"), Hs(), Us(11, "div", 5), Rs(12, tb, 5, 1, "div", 7), Us(13, "div", 8), Us(14, "p"), oo(15, " Besoins Trait\xe9s: 0"), Hs(), Us(16, "p"), oo(17, " Sans r\xe9actions: 0"), Hs(), Hs(), Us(18, "div", 2), Us(19, "a", 9), oo(20, "Voir les besoins"), Hs(), Hs(), Hs(), Hs(), Us(21, "div", 10), Rs(22, eb, 4, 1, "p", 11), Us(23, "a", 12), oo(24, "Voir toutes les plaintes"), Hs(), Hs(), Hs(), Hs()), 2 & t && (zs("ngIf", e.user), Ai(3), zs("ngIf", e.households), Ai(2), zs("ngIf", e.complaints), Ai(7), zs("ngIf", e.needs), Ai(10), zs("ngIf", e.complaints))
      },
      directives: [Qc, Pf],
      styles: [""]
    }), t
  })();

  function ib(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 2), oo(9, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.household), Ai(2), ao(t.association), Ai(2), ao(t.cellPhone), Ai(2), Js("routerLink", "/townhalls/households/view/", t.idhousehold, "")
    }
  }
  let rb = (() => {
    class t {
      constructor(t) {
        this.householdsService = t
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.association().subscribe(t => this.households = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Kg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-households-association"]
      ],
      decls: 6,
      vars: 2,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1), Hs(), Us(2, "table", 0), Bs(3, "thead"), Us(4, "tbody"), Rs(5, ib, 10, 4, "tr", 1), Hs(), Hs()), 2 & t && (Ai(1), lo(" Liste des M\xe9nages(", e.households ? e.households.length : 0, ")"), Ai(4), zs("ngForOf", e.households))
      },
      directives: [Yc, Pf],
      styles: [""]
    }), t
  })();

  function sb(t, e) {
    if (1 & t && (Us(0, "h3"), oo(1), Hs()), 2 & t) {
      const t = Ys();
      Ai(1), lo(" Liste des besoins (", t.needs.length, ")")
    }
  }

  function ob(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Us(7, "td"), Us(8, "a", 3), oo(9, "voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(2), ao(t.need), Ai(2), ao(n.getStatus(t.status)), Ai(2), ao(t.needDate), Ai(2), Js("routerLink", "/townhalls/needs/view/", t.idneed, "")
    }
  }
  let ab = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {}
      getNeeds() {
        this.needsService.association().subscribe(t => this.needs = t)
      }
      getStatus(t) {
        return {
          0: "NON PUBLI\xc9",
          1: "PUBLI\xc9",
          2: "ANNUL\xc9E"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Jg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-association"]
      ],
      decls: 4,
      vars: 2,
      consts: [
        [4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Rs(0, sb, 2, 1, "h3", 0), Us(1, "table", 1), Us(2, "tbody"), Rs(3, ob, 10, 4, "tr", 2), Hs(), Hs()), 2 & t && (zs("ngIf", e.needs), Ai(3), zs("ngForOf", e.needs))
      },
      directives: [Qc, Yc, Pf],
      styles: [""]
    }), t
  })();

  function lb(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "tr", 7), Gs("click", (function () {
        Ke(t);
        const n = e.$implicit;
        return Ys(2).onSelected(n)
      })), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), Hs(), Hs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Ys(2);
      Ai(2), lo("", n.textLimit(t.complaint), "..."), Ai(2), ao(t.household), Ai(2), ao(t.complaintDate)
    }
  }

  function cb(t, e) {
    if (1 & t && (Us(0, "div", 1), Us(1, "div", 2), Us(2, "h3"), oo(3, "Liste de plaintes"), Hs(), Us(4, "div", 3), oo(5, " Clique sur la ligne de la plainte pour voir les details "), Hs(), Bs(6, "br"), Us(7, "table", 4), Us(8, "tbody"), Rs(9, lb, 7, 3, "tr", 5), Hs(), Hs(), Hs(), Us(10, "div", 6), Bs(11, "router-outlet"), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(9), zs("ngForOf", t.complaints)
    }
  }
  let ub = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.association().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Qg), Fs(mp), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-complaints-association"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, cb, 12, 1, "div", 0), 2 & t && zs("ngIf", e.complaints)
      },
      directives: [Qc, Yc, If],
      styles: [""]
    }), t
  })();

  function hb(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), La(5, "date"), Hs(), Us(6, "td"), Us(7, "a", 6), oo(8, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.need), Ai(2), lo(" ", Ia(5, 3, t.needDate, "medium"), " "), Ai(3), Js("routerLink", "/association/needs/view/", t.idneed, "")
    }
  }

  function db(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "h3"), oo(2), Hs(), Us(3, "nav", 1), Us(4, "ol", 2), Us(5, "li", 3), Us(6, "a", 4), oo(7, "Tableau de bord"), Hs(), Hs(), Us(8, "li", 3), Us(9, "a", 5), oo(10, "M\xe9nages"), Hs(), Hs(), Us(11, "li", 3), Us(12, "a", 6), oo(13), Hs(), Hs(), Us(14, "li", 7), oo(15, "Appels d'offre"), Hs(), Hs(), Hs(), Us(16, "div", 8), Us(17, "table", 9), Us(18, "tbody"), Rs(19, hb, 9, 6, "tr", 0), Hs(), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(2), lo("Besoins de ", t.household, ""), Ai(10), Js("routerLink", "/association/household/view/", t.idhousehold, ""), Ai(1), ao(t.household), Ai(6), zs("ngForOf", n.needs)
    }
  }
  let pb = (() => {
    class t {
      constructor(t, e, n) {
        this.householdsService = t, this.needsService = e, this.ar = n
      }
      ngOnInit() {
        this.id = this.ar.snapshot.params.id, this.getHousehold(this.id), this.getNeeds(this.id)
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
      }
      getNeeds(t) {
        this.needsService.household(t).subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Kg), Fs(Jg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-household"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/association/dashboard"],
        ["routerLink", "/association/households"],
        [3, "routerLink"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        [1, "table-responsive"],
        [1, "table", "table-striped"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, db, 20, 4, "div", 0), 2 & t && zs("ngForOf", e.household)
      },
      directives: [Yc, Pf],
      pipes: [nu],
      styles: [""]
    }), t
  })();
  const fb = [{
    path: "association",
    component: Ky,
    canActivate: [iv],
    children: [{
      path: "dashboard",
      component: nb
    }, {
      path: "households",
      component: Tv,
      children: [{
        path: "",
        component: rb
      }, {
        path: "add",
        component: Fv
      }, {
        path: "view/:id",
        component: jv,
        children: [{
          path: "",
          component: pb,
          outlet: "needOutlet"
        }]
      }]
    }, {
      path: "needs",
      component: zv,
      children: [{
        path: "",
        component: ab
      }, {
        path: "add/:id",
        component: Bv
      }, {
        path: "household/:id",
        component: pb
      }, {
        path: "view/:id",
        component: qv
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: ub,
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }]
  }];
  let mb = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Uf.forRoot(fb)], Uf
      ]
    }), t
  })(), gb = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, kg, vh, mb, V_]
      ]
    }), t
  })(), _b = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {}
      sidebar() {
        this.status = !this.status
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-suppliers-main"]
      ],
      decls: 42,
      vars: 2,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLink", "/supplier/dashboard", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/supplier/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/supplier/proposals", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/supplier/complaints", "routerLinkActive", "active", 1, "nav-link"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["routerLink", "/suppliers/password", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "header", 0), Us(1, "div", 1), Gs("click", (function () {
          return e.sidebar()
        })), Bs(2, "span"), Bs(3, "span"), Bs(4, "span"), Hs(), Hs(), Us(5, "div", 2), Us(6, "nav"), Us(7, "div", 3), Us(8, "ul", 4), Us(9, "li", 5), Us(10, "a", 6), oo(11, " Tableau de Bord "), Hs(), Hs(), Us(12, "li", 5), Us(13, "a", 7), Bs(14, "span", 8), oo(15, " Appels d'offre "), Hs(), Hs(), Us(16, "li", 5), Us(17, "a", 9), Bs(18, "span", 8), oo(19, " Mes propositions "), Hs(), Hs(), Us(20, "li", 5), Us(21, "a", 10), Bs(22, "span", 8), oo(23, " R\xe9actions "), Hs(), Hs(), Hs(), Us(24, "h6", 11), Us(25, "span"), oo(26, "Param\xe8trages"), Hs(), Us(27, "a", 12), Bs(28, "span", 13), Hs(), Hs(), Us(29, "ul", 14), Us(30, "li", 5), Us(31, "a", 15), Bs(32, "span", 16), oo(33, " Changer de mot de passe "), Hs(), Hs(), Us(34, "li", 5), Us(35, "a", 17), Gs("click", (function () {
          return e.authService.logoutUser()
        })), Bs(36, "span", 16), oo(37, " Deconnexion "), Hs(), Hs(), Hs(), Hs(), Hs(), Hs(), Us(38, "div", 18), Us(39, "div", 19), Us(40, "main", 20), Bs(41, "router-outlet"), Hs(), Hs(), Hs()), 2 & t && (Ai(5), zs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Ai(33), zs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Wc, Pf, Ef, If],
      styles: [""]
    }), t
  })();

  function vb(t, e) {
    if (1 & t && (Us(0, "p", 9), Us(1, "span"), oo(2, "Salut, "), Us(3, "b"), oo(4), Hs(), Hs(), Us(5, "span"), oo(6, "Voici ce qui se passe aujourd'hui."), Hs(), Hs()), 2 & t) {
      const t = Ys();
      Ai(4), ao(t.user.name)
    }
  }

  function yb(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), Us(6, "a", 10), oo(7, "voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.need), Ai(2), ao(t.needDate), Ai(2), Js("routerLink", "/supplier/needs/proposal/", t.idneed, "")
    }
  }
  let bb = (() => {
    class t {
      constructor(t, e, n, i, r, s, o, a) {
        this.authService = t, this.associationsService = e, this.householdsService = n, this.suppliersService = i, this.needsService = r, this.complaintsService = s, this.proposalsService = o, this.router = a
      }
      ngOnInit() {
        this.getUser(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof eh && 401 === t.status && this.router.navigate(["/login"])
        })
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      getNeeds() {
        this.needsService.supplier().subscribe(t => this.needs = t)
      }
      getProposals() {
        this.proposalsService.myProposals().subscribe(t => this.proposals = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Tg), Fs(Wg), Fs(Kg), Fs(Yg), Fs(Jg), Fs(Qg), Fs(Xg), Fs(Sf))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-suppliers-dashboard"]
      ],
      decls: 26,
      vars: 5,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-4"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "connected"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Rs(0, vb, 7, 1, "p", 0), Us(1, "section", 1), Us(2, "div", 2), Us(3, "div", 3), Us(4, "p", 4), oo(5, "Appels d'offres"), Hs(), Us(6, "p", 5), oo(7), Hs(), Hs(), Hs(), Us(8, "div", 2), Us(9, "div", 3), Us(10, "p", 4), oo(11, "es Propositions"), Hs(), Us(12, "p", 5), oo(13), Hs(), Hs(), Hs(), Us(14, "div", 2), Us(15, "div", 3), Us(16, "p", 4), oo(17, "Plaintes"), Hs(), Us(18, "p", 5), oo(19), Hs(), Hs(), Hs(), Hs(), Us(20, "section", 6), Us(21, "h3"), oo(22, " Liste des besoins"), Hs(), Us(23, "table", 7), Us(24, "tbody"), Rs(25, yb, 8, 3, "tr", 8), Hs(), Hs(), Hs()), 2 & t && (zs("ngIf", e.user), Ai(7), ao(e.needs ? e.needs.length : 0), Ai(6), ao(e.proposals ? e.proposals.length : 0), Ai(6), ao(e.complaints ? e.complaints.length : 0), Ai(6), zs("ngForOf", e.needs))
      },
      directives: [Qc, Yc, Pf],
      styles: [""]
    }), t
  })();

  function wb(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "h4"), oo(2), Hs(), Us(3, "p"), oo(4), Hs(), Bs(5, "hr"), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.need), Ai(2), ao(t.description)
    }
  }

  function xb(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), La(5, "date"), Hs(), Us(6, "td"), Us(7, "a", 3), oo(8, "Faire une proposition"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(2), ao(t.need), Ai(2), ao(Ia(5, 3, t.needDate, "medium")), Ai(3), Js("routerLink", "/supplier/proposals/view/", t.idneed, "")
    }
  }
  let Cb = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {
        this.getNeeds()
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Jg))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-needs-supplier"]
      ],
      decls: 7,
      vars: 3,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "table-responsive"],
        [1, "table", "table-striped"],
        [1, "bouton", 3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Us(0, "h3"), oo(1), Hs(), Rs(2, wb, 6, 2, "div", 0), Us(3, "div", 1), Us(4, "table", 2), Us(5, "tbody"), Rs(6, xb, 9, 6, "tr", 0), Hs(), Hs(), Hs()), 2 & t && (Ai(1), lo("Liste des besoins (", e.needs ? e.needs.length : 0, ")"), Ai(1), zs("ngForOf", e.needs), Ai(4), zs("ngForOf", e.needs))
      },
      directives: [Yc, Pf],
      pipes: [nu],
      styles: [""]
    }), t
  })();

  function Sb(t, e) {
    if (1 & t && (Us(0, "div", 9), Us(1, "div", 10), Us(2, "h3"), oo(3), Us(4, "span", 11), oo(5), Bs(6, "br"), oo(7), Hs(), Hs(), Us(8, "p"), oo(9), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit;
      Ai(3), lo(" ", t.supplier, " "), Ai(2), lo("Co\xfbt: ", t.price, " CFA "), Ai(2), lo("D\xe9lai d'\xe9x\xe9cution: ", t.timeLimit, " Jours"), Ai(2), lo(" ", t.detail, " ")
    }
  }

  function kb(t, e) {
    if (1 & t && (Us(0, "div", 7), Rs(1, Sb, 10, 4, "div", 8), Hs()), 2 & t) {
      const t = Ys(2);
      Ai(1), zs("ngForOf", t.proposals)
    }
  }

  function Pb(t, e) {
    if (1 & t) {
      const t = Zs();
      Us(0, "div"), Us(1, "form", 12), Gs("ngSubmit", (function () {
        return Ke(t), Ys(2).onSubmit()
      })), Bs(2, "input", 13), Us(3, "div", 14), Us(4, "label", 15), oo(5, "Cout des travaux"), Hs(), Bs(6, "input", 16), Hs(), Us(7, "div", 14), Us(8, "label", 17), oo(9, "Duree des travaux"), Hs(), Bs(10, "input", 18), Hs(), Us(11, "div", 14), Us(12, "label", 19), oo(13, "Detail des travaux"), Hs(), Bs(14, "textarea", 20), Hs(), Us(15, "div", 14), Us(16, "button", 21), oo(17, "Enregistrer"), Hs(), Hs(), Hs(), Hs()
    }
    if (2 & t) {
      const t = Ys().$implicit,
        e = Ys();
      Ai(1), zs("formGroup", e.proposalForm), Ai(1), zs("value", t.idneed), Ai(14), zs("disabled", !e.proposalForm.valid)
    }
  }

  function Tb(t, e) {
    if (1 & t && (Us(0, "div"), Us(1, "div", 1), Us(2, "div", 2), Us(3, "h3"), oo(4, "Description du besoin"), Hs(), Us(5, "h5"), oo(6), Hs(), Us(7, "p"), oo(8), Hs(), Bs(9, "br"), Us(10, "h5"), oo(11), Hs(), Us(12, "p"), oo(13), Bs(14, "br"), oo(15), Hs(), Bs(16, "br"), Us(17, "h5"), oo(18, "Localisation"), Hs(), oo(19), Hs(), Us(20, "div", 3), Us(21, "h3", 4), oo(22, "Propositions des fournisseurs"), Hs(), Rs(23, kb, 2, 1, "div", 5), Rs(24, Pb, 18, 3, "div", 6), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = Ys();
      Ai(6), lo(" ", t.need, ""), Ai(2), lo("", t.description, " "), Ai(3), co(" ", t.household, ", ", n.getOwner(t.owner), ""), Ai(2), lo(" ", t.familySize, " Membres "), Ai(2), lo(" (225) ", t.cellPhone, " "), Ai(4), lo(" ", t.address, " "), Ai(4), zs("ngIf", n.proposals), Ai(1), zs("ngIf", !n.proposals)
    }
  }
  let Eb = (() => {
    class t {
      constructor(t, e, n, i) {
        this.needsService = t, this.proposalsService = e, this.fb = n, this.ar = i
      }
      ngOnInit() {
        this.id = this.ar.snapshot.params.id, this.getNeed(this.id), this.getProposals(this.id), this.createForm()
      }
      getNeed(t) {
        this.needsService.get(t).subscribe(t => this.need = t)
      }
      getProposals(t) {
        this.proposalsService.need(t).subscribe(t => this.proposals = t)
      }
      createForm() {
        this.proposalForm = this.fb.group({
          needId: [this.id, xm.required],
          price: ["", xm.required],
          timeLimit: ["", xm.required],
          detail: ["", xm.required]
        })
      }
      onSubmit() {
        this.proposalsService.set(this.proposalForm.value).subscribe(t => t)
      }
      getOwner(t) {
        return {
          0: "Locataire",
          1: "Propri\xe9taire"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Fs(Jg), Fs(Xg), Fs(Sg), Fs(mp))
    }, t.\u0275cmp = pe({
      type: t,
      selectors: [
        ["app-proposals-add"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row"],
        [1, "col-lg-5"],
        [1, "col-lg-7"],
        [1, "text-center"],
        ["class", "chats", 4, "ngIf"],
        [4, "ngIf"],
        [1, "chats"],
        ["class", "chat-suppliers", 4, "ngFor", "ngForOf"],
        [1, "chat-suppliers"],
        [1, "chat-message"],
        [1, "float-right"],
        [3, "formGroup", "ngSubmit"],
        ["type", "hidden", "formControlName", "needId", "name", "needId", 3, "value"],
        [1, "form-group"],
        ["for", "price"],
        ["type", "number", "formControlName", "price", "name", "price", "id", "price", 1, "form-control"],
        ["for", "timeLimit"],
        ["type", "number", "formControlName", "timeLimit", "name", "timeLimit", "id", "timeLimit", 1, "form-control"],
        ["for", "detail"],
        ["formControlName", "detail", "name", "detail", "id", "detail", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && Rs(0, Tb, 25, 9, "div", 0), 2 & t && zs("ngForOf", e.need)
      },
      directives: [Yc, Qc, ug, _m, pg, cm, gm, bg, Lm],
      styles: [""]
    }), t
  })();

  function Lb(t, e) {
    if (1 & t && (Us(0, "tr"), Us(1, "td"), oo(2), Hs(), Us(3, "td"), oo(4), Hs(), Us(5, "td"), oo(6), La(7, "date"), Hs(), Us(8, "td"), Us(9, "a"), oo(10, "Voir detail"), Hs(), Hs(), Hs()), 2 & t) {
      const t = e.$implicit,
        n = e.index;
      Ai(2), ao(n + 1), Ai(2), ao(t.need), Ai(2), ao(Ia(7, 3, t.proposalDate, "medium"))
    }
  }
  const Ab = [{
    path: "supplier",
    component: _b,
    canActivate: [iv],
    children: [{
      path: "dashboard",
      component: bb
    }, {
      path: "add",
      component: $y
    }, {
      path: "view",
      component: iy
    }, {
      path: "needs",
      component: zv,
      children: [{
        path: "",
        component: Cb
      }]
    }, {
      path: "proposals",
      component: (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return t.\u0275fac = function (e) {
          return new(e || t)
        }, t.\u0275cmp = pe({
          type: t,
          selectors: [
            ["app-proposals-main"]
          ],
          decls: 3,
          vars: 0,
          template: function (t, e) {
            1 & t && (Us(0, "h1"), oo(1, "Proposition de fournisseur"), Hs(), Bs(2, "router-outlet"))
          },
          directives: [If],
          styles: [""]
        }), t
      })(),
      children: [{
        path: "",
        component: (() => {
          class t {
            constructor(t) {
              this.proposalsService = t
            }
            ngOnInit() {
              this.getProposals()
            }
            getProposals() {
              this.proposalsService.myProposals().subscribe(t => this.proposals = t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Fs(Xg))
          }, t.\u0275cmp = pe({
            type: t,
            selectors: [
              ["app-proposals-supplier"]
            ],
            decls: 5,
            vars: 1,
            consts: [
              [1, "table-responsive"],
              [1, "table", "table-striped"],
              [4, "ngFor", "ngForOf"]
            ],
            template: function (t, e) {
              1 & t && (Us(0, "h3"), oo(1, "Mes propositions"), Hs(), Us(2, "div", 0), Us(3, "table", 1), Rs(4, Lb, 11, 6, "tr", 2), Hs(), Hs()), 2 & t && (Ai(4), zs("ngForOf", e.proposals))
            },
            directives: [Yc],
            pipes: [nu],
            styles: [""]
          }), t
        })()
      }, {
        path: "view/:id",
        component: Eb
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: Oy,
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }]
  }];
  let Ib = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Uf.forRoot(Ab)], Uf
      ]
    }), t
  })(), Ob = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, kg, vh, Ib]
      ]
    }), t
  })(), Mb = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg]
      ]
    }), t
  })(), Rb = (() => {
    class t {
      constructor(t, e) {
        this.authService = t, this.router = e
      }
      canActivate(t, e) {
        return !(!this.authService.loggedIn() || !this.authService.validity() || (this.router.navigate(["/administrator/dashboard"]), 0))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(Tg), Yt(Sf))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Nb = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg]
      ]
    }), t
  })(), Fb = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, kg, vh, V_]
      ]
    }), t
  })(), Db = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg]
      ]
    }), t
  })(), jb = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg]
      ]
    }), t
  })(), zb = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [su, Uf, vh, kg]
      ]
    }), t
  })(), Vb = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/roadmaps/", this.options = {
          params: new qu({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Yt(ih), Yt(Tg))
    }, t.\u0275prov = dt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(); ! function (t, e, n) {
    "string" != typeof e && (n = e, e = t[va.LocaleId]), e = e.toLowerCase().replace(/_/g, "-"), ma[e] = t, n && (ma[e][va.ExtraData] = n)
  }(tm.a, void 0, void 0);
  let Ub = (() => {
    class t {}
    return t.\u0275mod = _e({
      type: t,
      bootstrap: [Qf]
    }), t.\u0275inj = pt({
      factory: function (e) {
        return new(e || t)
      },
      providers: [{
        provide: sh,
        useClass: yh,
        multi: !0
      }, {
        provide: ol,
        useValue: "fr-FR"
      }, Tg, Gg, Wg, Kg, Yg, Jg, c_, sv, Qg, Hy, Vb, iv, Rb],
      imports: [
        [Nu, nm, Jf, Fg, fy, Wy, gb, Fb, Db, Ob, py, Mb, Nb, jb, zb]
      ]
    }), t
  })();
  (function () {
    if (ui) throw new Error("Cannot enable prod mode after platform setup.");
    ci = !1
  })(), Mu().bootstrapModule(Ub).catch(t => console.error(t))
}, zn8P: function (t, e) {
  function n(t) {
    return Promise.resolve().then((function () {
      var e = new Error("Cannot find module '" + t + "'");
      throw e.code = "MODULE_NOT_FOUND", e
    }))
  }
  n.keys = function () {
    return []
  }, n.resolve = n, t.exports = n, n.id = "zn8P"
}
}, [
  [0, 0]
]]);