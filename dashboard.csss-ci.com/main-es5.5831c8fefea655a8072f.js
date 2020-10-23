function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArrayLimit(e, t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [],
      r = !0,
      i = !1,
      o = void 0;
    try {
      for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
    } catch (u) {
      i = !0, o = u
    } finally {
      try {
        r || null == s.return || s.return()
      } finally {
        if (i) throw o
      }
    }
    return n
  }
}

function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e
}

function _createForOfIteratorHelper(e) {
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = _unsupportedIterableToArray(e))) {
      var t = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return t >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[t++]
          }
        },
        e: function (e) {
          throw e
        },
        f: n
      }
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  var r, i, o = !0,
    a = !1;
  return {
    s: function () {
      r = e[Symbol.iterator]()
    },
    n: function () {
      var e = r.next();
      return o = e.done, e
    },
    e: function (e) {
      a = !0, i = e
    },
    f: function () {
      try {
        o || null == r.return || r.return()
      } finally {
        if (a) throw i
      }
    }
  }
}

function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
  }
}

function _iterableToArray(e) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
}

function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r
}

function _construct(e, t, n) {
  return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function (e, t, n) {
    var r = [null];
    r.push.apply(r, t);
    var i = new(Function.bind.apply(e, r));
    return n && _setPrototypeOf(i, n.prototype), i
  }).apply(null, arguments)
}

function _get(e, t, n) {
  return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
    var r = _superPropBase(e, t);
    if (r) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      return i.get ? i.get.call(n) : i.value
    }
  })(e, t, n || e)
}

function _superPropBase(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)););
  return e
}

function _createSuper(e) {
  return function () {
    var t, n = _getPrototypeOf(e);
    if (_isNativeReflectConstruct()) {
      var r = _getPrototypeOf(this).constructor;
      t = Reflect.construct(n, arguments, r)
    } else t = n.apply(this, arguments);
    return _possibleConstructorReturn(this, t)
  }
}

function _possibleConstructorReturn(e, t) {
  return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
  } catch (e) {
    return !1
  }
}

function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && _setPrototypeOf(e, t)
}

function _setPrototypeOf(e, t) {
  return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}(window.webpackJsonp = window.webpackJsonp || []).push([
  [1], {
    0: function (e, t, n) {
      e.exports = n("zUnb")
    },
    Hfs6: function (e, t, n) {
      var r, i, o;
      ! function (a) {
        if ("object" == typeof e.exports) {
          var s = a(0, t);
          void 0 !== s && (e.exports = s)
        } else i = [n, t], void 0 === (o = "function" == typeof (r = a) ? r.apply(t, i) : r) || (e.exports = o)
      }((function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = void 0;
        t.default = ["fr", [
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
          function (e) {
            var t = Math.floor(Math.abs(e));
            return 0 === t || 1 === t ? 1 : 5
          }
        ]
      }))
    },
    zUnb: function (e, t, n) {
      "use strict";

      function r(e) {
        return "function" == typeof e
      }
      n.r(t);
      var i = !1,
        o = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            if (e) {
              var t = new Error;
              console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
            } else i && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            i = e
          },
          get useDeprecatedSynchronousErrorHandling() {
            return i
          }
        };

      function a(e) {
        setTimeout((function () {
          throw e
        }), 0)
      }
      var s = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (o.useDeprecatedSynchronousErrorHandling) throw e;
            a(e)
          },
          complete: function () {}
        },
        u = Array.isArray || function (e) {
          return e && "number" == typeof e.length
        };

      function l(e) {
        return null !== e && "object" == typeof e
      }
      var c, h = function () {
          function e(e) {
            return Error.call(this), this.message = e ? "".concat(e.length, " errors occurred during unsubscription:\n").concat(e.map((function (e, t) {
              return "".concat(t + 1, ") ").concat(e.toString())
            })).join("\n  ")) : "", this.name = "UnsubscriptionError", this.errors = e, this
          }
          return e.prototype = Object.create(Error.prototype), e
        }(),
        f = ((c = function () {
          function e(t) {
            _classCallCheck(this, e), this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
          }
          return _createClass(e, [{
            key: "unsubscribe",
            value: function () {
              var t;
              if (!this.closed) {
                var n = this._parentOrParents,
                  i = this._unsubscribe,
                  o = this._subscriptions;
                if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this);
                else if (null !== n)
                  for (var a = 0; a < n.length; ++a) n[a].remove(this);
                if (r(i)) try {
                  i.call(this)
                } catch (p) {
                  t = p instanceof h ? d(p.errors) : [p]
                }
                if (u(o))
                  for (var s = -1, c = o.length; ++s < c;) {
                    var f = o[s];
                    if (l(f)) try {
                      f.unsubscribe()
                    } catch (p) {
                      t = t || [], p instanceof h ? t = t.concat(d(p.errors)) : t.push(p)
                    }
                  }
                if (t) throw new h(t)
              }
            }
          }, {
            key: "add",
            value: function (t) {
              var n = t;
              if (!t) return e.EMPTY;
              switch (typeof t) {
                case "function":
                  n = new e(t);
                case "object":
                  if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof e)) {
                    var r = n;
                    (n = new e)._subscriptions = [r]
                  }
                  break;
                default:
                  throw new Error("unrecognized teardown " + t + " added to Subscription.")
              }
              var i = n._parentOrParents;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof e) {
                if (i === this) return n;
                n._parentOrParents = [i, this]
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this)
              }
              var o = this._subscriptions;
              return null === o ? this._subscriptions = [n] : o.push(n), n
            }
          }, {
            key: "remove",
            value: function (e) {
              var t = this._subscriptions;
              if (t) {
                var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
              }
            }
          }]), e
        }()).EMPTY = function (e) {
          return e.closed = !0, e
        }(new c), c);

      function d(e) {
        return e.reduce((function (e, t) {
          return e.concat(t instanceof h ? t.errors : t)
        }), [])
      }
      var p = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
        v = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            switch (_classCallCheck(this, n), (o = t.call(this)).syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
              case 0:
                o.destination = s;
                break;
              case 1:
                if (!e) {
                  o.destination = s;
                  break
                }
                if ("object" == typeof e) {
                  e instanceof n ? (o.syncErrorThrowable = e.syncErrorThrowable, o.destination = e, e.add(_assertThisInitialized(o))) : (o.syncErrorThrowable = !0, o.destination = new m(_assertThisInitialized(o), e));
                  break
                }
                default:
                  o.syncErrorThrowable = !0, o.destination = new m(_assertThisInitialized(o), e, r, i)
            }
            return o
          }
          return _createClass(n, [{
            key: p,
            value: function () {
              return this
            }
          }, {
            key: "next",
            value: function (e) {
              this.isStopped || this._next(e)
            }
          }, {
            key: "error",
            value: function (e) {
              this.isStopped || (this.isStopped = !0, this._error(e))
            }
          }, {
            key: "complete",
            value: function () {
              this.isStopped || (this.isStopped = !0, this._complete())
            }
          }, {
            key: "unsubscribe",
            value: function () {
              this.closed || (this.isStopped = !0, _get(_getPrototypeOf(n.prototype), "unsubscribe", this).call(this))
            }
          }, {
            key: "_next",
            value: function (e) {
              this.destination.next(e)
            }
          }, {
            key: "_error",
            value: function (e) {
              this.destination.error(e), this.unsubscribe()
            }
          }, {
            key: "_complete",
            value: function () {
              this.destination.complete(), this.unsubscribe()
            }
          }, {
            key: "_unsubscribeAndRecycle",
            value: function () {
              var e = this._parentOrParents;
              return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
            }
          }], [{
            key: "create",
            value: function (e, t, r) {
              var i = new n(e, t, r);
              return i.syncErrorThrowable = !1, i
            }
          }]), n
        }(f),
        m = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, i, o, a) {
            var u, l;
            _classCallCheck(this, n), (u = t.call(this))._parentSubscriber = e;
            var c = _assertThisInitialized(u);
            return r(i) ? l = i : i && (l = i.next, o = i.error, a = i.complete, i !== s && (r((c = Object.create(i)).unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(_assertThisInitialized(u)))), u._context = c, u._next = l, u._error = o, u._complete = a, u
          }
          return _createClass(n, [{
            key: "next",
            value: function (e) {
              if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
              }
            }
          }, {
            key: "error",
            value: function (e) {
              if (!this.isStopped) {
                var t = this._parentSubscriber,
                  n = o.useDeprecatedSynchronousErrorHandling;
                if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : a(e), this.unsubscribe();
                else {
                  if (this.unsubscribe(), n) throw e;
                  a(e)
                }
              }
            }
          }, {
            key: "complete",
            value: function () {
              var e = this;
              if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return e._complete.call(e._context)
                  };
                  o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                } else this.unsubscribe()
              }
            }
          }, {
            key: "__tryOrUnsub",
            value: function (e, t) {
              try {
                e.call(this._context, t)
              } catch (n) {
                if (this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling) throw n;
                a(n)
              }
            }
          }, {
            key: "__tryOrSetError",
            value: function (e, t, n) {
              if (!o.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
              try {
                t.call(this._context, n)
              } catch (r) {
                return o.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (a(r), !0)
              }
              return !1
            }
          }, {
            key: "_unsubscribe",
            value: function () {
              var e = this._parentSubscriber;
              this._context = null, this._parentSubscriber = null, e.unsubscribe()
            }
          }]), n
        }(v),
        g = "function" == typeof Symbol && Symbol.observable || "@@observable";

      function y() {}

      function _() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return k(t)
      }

      function k(e) {
        return e ? 1 === e.length ? e[0] : function (t) {
          return e.reduce((function (e, t) {
            return t(e)
          }), t)
        } : y
      }
      var C, b = ((C = function () {
        function e(t) {
          _classCallCheck(this, e), this._isScalar = !1, t && (this._subscribe = t)
        }
        return _createClass(e, [{
          key: "lift",
          value: function (t) {
            var n = new e;
            return n.source = this, n.operator = t, n
          }
        }, {
          key: "subscribe",
          value: function (e, t, n) {
            var r = this.operator,
              i = function (e, t, n) {
                if (e) {
                  if (e instanceof v) return e;
                  if (e[p]) return e[p]()
                }
                return e || t || n ? new v(e, t, n) : new v(s)
              }(e, t, n);
            if (i.add(r ? r.call(i, this.source) : this.source || o.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), o.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
            return i
          }
        }, {
          key: "_trySubscribe",
          value: function (e) {
            try {
              return this._subscribe(e)
            } catch (t) {
              o.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                function (e) {
                  for (; e;) {
                    var t = e,
                      n = t.closed,
                      r = t.destination,
                      i = t.isStopped;
                    if (n || i) return !1;
                    e = r && r instanceof v ? r : null
                  }
                  return !0
                }(e) ? e.error(t) : console.warn(t)
            }
          }
        }, {
          key: "forEach",
          value: function (e, t) {
            var n = this;
            return new(t = w(t))((function (t, r) {
              var i;
              i = n.subscribe((function (t) {
                try {
                  e(t)
                } catch (n) {
                  r(n), i && i.unsubscribe()
                }
              }), r, t)
            }))
          }
        }, {
          key: "_subscribe",
          value: function (e) {
            var t = this.source;
            return t && t.subscribe(e)
          }
        }, {
          key: g,
          value: function () {
            return this
          }
        }, {
          key: "pipe",
          value: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return 0 === t.length ? this : k(t)(this)
          }
        }, {
          key: "toPromise",
          value: function (e) {
            var t = this;
            return new(e = w(e))((function (e, n) {
              var r;
              t.subscribe((function (e) {
                return r = e
              }), (function (e) {
                return n(e)
              }), (function () {
                return e(r)
              }))
            }))
          }
        }]), e
      }()).create = function (e) {
        return new C(e)
      }, C);

      function w(e) {
        if (e || (e = o.Promise || Promise), !e) throw new Error("no Promise impl found");
        return e
      }
      var S, E = function () {
          function e() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
          }
          return e.prototype = Object.create(Error.prototype), e
        }(),
        x = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this)).subject = e, i.subscriber = r, i.closed = !1, i
          }
          return _createClass(n, [{
            key: "unsubscribe",
            value: function () {
              if (!this.closed) {
                this.closed = !0;
                var e = this.subject,
                  t = e.observers;
                if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                  var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                }
              }
            }
          }]), n
        }(f),
        A = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this, e)).destination = e, r
          }
          return n
        }(v),
        O = ((S = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            var e;
            return _classCallCheck(this, n), (e = t.call(this)).observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
          }
          return _createClass(n, [{
            key: p,
            value: function () {
              return new A(this)
            }
          }, {
            key: "lift",
            value: function (e) {
              var t = new T(this, this);
              return t.operator = e, t
            }
          }, {
            key: "next",
            value: function (e) {
              if (this.closed) throw new E;
              if (!this.isStopped)
                for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].next(e)
            }
          }, {
            key: "error",
            value: function (e) {
              if (this.closed) throw new E;
              this.hasError = !0, this.thrownError = e, this.isStopped = !0;
              for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++) r[i].error(e);
              this.observers.length = 0
            }
          }, {
            key: "complete",
            value: function () {
              if (this.closed) throw new E;
              this.isStopped = !0;
              for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
              this.observers.length = 0
            }
          }, {
            key: "unsubscribe",
            value: function () {
              this.isStopped = !0, this.closed = !0, this.observers = null
            }
          }, {
            key: "_trySubscribe",
            value: function (e) {
              if (this.closed) throw new E;
              return _get(_getPrototypeOf(n.prototype), "_trySubscribe", this).call(this, e)
            }
          }, {
            key: "_subscribe",
            value: function (e) {
              if (this.closed) throw new E;
              return this.hasError ? (e.error(this.thrownError), f.EMPTY) : this.isStopped ? (e.complete(), f.EMPTY) : (this.observers.push(e), new x(this, e))
            }
          }, {
            key: "asObservable",
            value: function () {
              var e = new b;
              return e.source = this, e
            }
          }]), n
        }(b)).create = function (e, t) {
          return new T(e, t)
        }, S),
        T = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this)).destination = e, i.source = r, i
          }
          return _createClass(n, [{
            key: "next",
            value: function (e) {
              var t = this.destination;
              t && t.next && t.next(e)
            }
          }, {
            key: "error",
            value: function (e) {
              var t = this.destination;
              t && t.error && this.destination.error(e)
            }
          }, {
            key: "complete",
            value: function () {
              var e = this.destination;
              e && e.complete && this.destination.complete()
            }
          }, {
            key: "_subscribe",
            value: function (e) {
              return this.source ? this.source.subscribe(e) : f.EMPTY
            }
          }]), n
        }(O);

      function I(e) {
        return e && "function" == typeof e.schedule
      }
      var P = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this)).parent = e, o.outerValue = r, o.outerIndex = i, o.index = 0, o
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
            }
          }, {
            key: "_error",
            value: function (e) {
              this.parent.notifyError(e, this), this.unsubscribe()
            }
          }, {
            key: "_complete",
            value: function () {
              this.parent.notifyComplete(this), this.unsubscribe()
            }
          }]), n
        }(v),
        F = function (e) {
          return function (t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.complete()
          }
        };
      var R = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
        N = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e
        };

      function M(e) {
        return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
      }
      var D = function (e) {
        if (e && "function" == typeof e[g]) return r = e,
          function (e) {
            var t = r[g]();
            if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return t.subscribe(e)
          };
        if (N(e)) return F(e);
        if (M(e)) return n = e,
          function (e) {
            return n.then((function (t) {
              e.closed || (e.next(t), e.complete())
            }), (function (t) {
              return e.error(t)
            })).then(null, a), e
          };
        if (e && "function" == typeof e[R]) return t = e,
          function (e) {
            for (var n = t[R]();;) {
              var r = n.next();
              if (r.done) {
                e.complete();
                break
              }
              if (e.next(r.value), e.closed) break
            }
            return "function" == typeof n.return && e.add((function () {
              n.return && n.return()
            })), e
          };
        var t, n, r, i = l(e) ? "an invalid object" : "'".concat(e, "'");
        throw new TypeError("You provided ".concat(i, " where a stream was expected.") + " You can provide an Observable, Promise, Array, or Iterable.")
      };

      function V(e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new P(e, n, r);
        if (!i.closed) return t instanceof b ? t.subscribe(i) : D(t)(i)
      }
      var L = function (e) {
        _inherits(n, e);
        var t = _createSuper(n);

        function n() {
          return _classCallCheck(this, n), t.apply(this, arguments)
        }
        return _createClass(n, [{
          key: "notifyNext",
          value: function (e, t, n, r, i) {
            this.destination.next(t)
          }
        }, {
          key: "notifyError",
          value: function (e, t) {
            this.destination.error(e)
          }
        }, {
          key: "notifyComplete",
          value: function (e) {
            this.destination.complete()
          }
        }]), n
      }(v);

      function j(e, t) {
        return function (n) {
          if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
          return n.lift(new U(e, t))
        }
      }
      var U = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.project = t, this.thisArg = n
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new H(e, this.project, this.thisArg))
            }
          }]), e
        }(),
        H = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, e)).project = r, o.count = 0, o.thisArg = i || _assertThisInitialized(o), o
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              var t;
              try {
                t = this.project.call(this.thisArg, e, this.count++)
              } catch (n) {
                return void this.destination.error(n)
              }
              this.destination.next(t)
            }
          }]), n
        }(v);

      function q(e, t) {
        return new b((function (n) {
          var r = new f,
            i = 0;
          return r.add(t.schedule((function () {
            i !== e.length ? (n.next(e[i++]), n.closed || r.add(this.schedule())) : n.complete()
          }))), r
        }))
      }

      function z(e, t) {
        return t ? function (e, t) {
          if (null != e) {
            if (function (e) {
                return e && "function" == typeof e[g]
              }(e)) return function (e, t) {
              return new b((function (n) {
                var r = new f;
                return r.add(t.schedule((function () {
                  var i = e[g]();
                  r.add(i.subscribe({
                    next: function (e) {
                      r.add(t.schedule((function () {
                        return n.next(e)
                      })))
                    },
                    error: function (e) {
                      r.add(t.schedule((function () {
                        return n.error(e)
                      })))
                    },
                    complete: function () {
                      r.add(t.schedule((function () {
                        return n.complete()
                      })))
                    }
                  }))
                }))), r
              }))
            }(e, t);
            if (M(e)) return function (e, t) {
              return new b((function (n) {
                var r = new f;
                return r.add(t.schedule((function () {
                  return e.then((function (e) {
                    r.add(t.schedule((function () {
                      n.next(e), r.add(t.schedule((function () {
                        return n.complete()
                      })))
                    })))
                  }), (function (e) {
                    r.add(t.schedule((function () {
                      return n.error(e)
                    })))
                  }))
                }))), r
              }))
            }(e, t);
            if (N(e)) return q(e, t);
            if (function (e) {
                return e && "function" == typeof e[R]
              }(e) || "string" == typeof e) return function (e, t) {
              if (!e) throw new Error("Iterable cannot be null");
              return new b((function (n) {
                var r, i = new f;
                return i.add((function () {
                  r && "function" == typeof r.return && r.return()
                })), i.add(t.schedule((function () {
                  r = e[R](), i.add(t.schedule((function () {
                    if (!n.closed) {
                      var e, t;
                      try {
                        var i = r.next();
                        e = i.value, t = i.done
                      } catch (o) {
                        return void n.error(o)
                      }
                      t ? n.complete() : (n.next(e), this.schedule())
                    }
                  })))
                }))), i
              }))
            }(e, t)
          }
          throw new TypeError((null !== e && typeof e || e) + " is not observable")
        }(e, t) : e instanceof b ? e : new b(D(e))
      }

      function G(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
        return "function" == typeof t ? function (r) {
          return r.pipe(G((function (n, r) {
            return z(e(n, r)).pipe(j((function (e, i) {
              return t(n, e, r, i)
            })))
          }), n))
        } : ("number" == typeof t && (n = t), function (t) {
          return t.lift(new B(e, n))
        })
      }
      var B = function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.POSITIVE_INFINITY;
            _classCallCheck(this, e), this.project = t, this.concurrent = n
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new W(e, this.project, this.concurrent))
            }
          }]), e
        }(),
        W = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.POSITIVE_INFINITY;
            return _classCallCheck(this, n), (i = t.call(this, e)).project = r, i.concurrent = o, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
            }
          }, {
            key: "_tryNext",
            value: function (e) {
              var t, n = this.index++;
              try {
                t = this.project(e, n)
              } catch (r) {
                return void this.destination.error(r)
              }
              this.active++, this._innerSub(t, e, n)
            }
          }, {
            key: "_innerSub",
            value: function (e, t, n) {
              var r = new P(this, t, n),
                i = this.destination;
              i.add(r);
              var o = V(this, e, void 0, void 0, r);
              o !== r && i.add(o)
            }
          }, {
            key: "_complete",
            value: function () {
              this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }
          }, {
            key: "notifyNext",
            value: function (e, t, n, r, i) {
              this.destination.next(t)
            }
          }, {
            key: "notifyComplete",
            value: function (e) {
              var t = this.buffer;
              this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }
          }]), n
        }(L);

      function $(e) {
        return e
      }

      function Z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.POSITIVE_INFINITY;
        return G($, e)
      }

      function Q(e, t) {
        return t ? q(e, t) : new b(F(e))
      }

      function J() {
        return function (e) {
          return e.lift(new K(e))
        }
      }
      var Y, K = function () {
          function e(t) {
            _classCallCheck(this, e), this.connectable = t
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              var n = this.connectable;
              n._refCount++;
              var r = new X(e, n),
                i = t.subscribe(r);
              return r.closed || (r.connection = n.connect()), i
            }
          }]), e
        }(),
        X = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).connectable = r, i
          }
          return _createClass(n, [{
            key: "_unsubscribe",
            value: function () {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var t = e._refCount;
                if (t <= 0) this.connection = null;
                else if (e._refCount = t - 1, t > 1) this.connection = null;
                else {
                  var n = this.connection,
                    r = e._connection;
                  this.connection = null, !r || n && r !== n || r.unsubscribe()
                }
              } else this.connection = null
            }
          }]), n
        }(v),
        ee = {
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
            value: (Y = function (e) {
              _inherits(n, e);
              var t = _createSuper(n);

              function n(e, r) {
                var i;
                return _classCallCheck(this, n), (i = t.call(this)).source = e, i.subjectFactory = r, i._refCount = 0, i._isComplete = !1, i
              }
              return _createClass(n, [{
                key: "_subscribe",
                value: function (e) {
                  return this.getSubject().subscribe(e)
                }
              }, {
                key: "getSubject",
                value: function () {
                  var e = this._subject;
                  return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
                }
              }, {
                key: "connect",
                value: function () {
                  var e = this._connection;
                  return e || (this._isComplete = !1, (e = this._connection = new f).add(this.source.subscribe(new te(this.getSubject(), this))), e.closed && (this._connection = null, e = f.EMPTY)), e
                }
              }, {
                key: "refCount",
                value: function () {
                  return J()(this)
                }
              }]), n
            }(b).prototype)._subscribe
          },
          _isComplete: {
            value: Y._isComplete,
            writable: !0
          },
          getSubject: {
            value: Y.getSubject
          },
          connect: {
            value: Y.connect
          },
          refCount: {
            value: Y.refCount
          }
        },
        te = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).connectable = r, i
          }
          return _createClass(n, [{
            key: "_error",
            value: function (e) {
              this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_error", this).call(this, e)
            }
          }, {
            key: "_complete",
            value: function () {
              this.connectable._isComplete = !0, this._unsubscribe(), _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
            }
          }, {
            key: "_unsubscribe",
            value: function () {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var t = e._connection;
                e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
              }
            }
          }]), n
        }(A);

      function ne() {
        return new O
      }

      function re(e) {
        return {
          toString: e
        }.toString()
      }

      function ie(e, t, n) {
        return re((function () {
          var r = function (e) {
            return function () {
              if (e) {
                var t = e.apply(void 0, arguments);
                for (var n in t) this[n] = t[n]
              }
            }
          }(t);

          function i() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (this instanceof i) return r.apply(this, t), this;
            var o = _construct(i, t);
            return a.annotation = o, a;

            function a(e, t, n) {
              for (var r = e.hasOwnProperty("__parameters__") ? e.__parameters__ : Object.defineProperty(e, "__parameters__", {
                  value: []
                }).__parameters__; r.length <= n;) r.push(null);
              return (r[n] = r[n] || []).push(o), e
            }
          }
          return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i
        }))
      }
      var oe = ie("Inject", (function (e) {
          return {
            token: e
          }
        })),
        ae = ie("Optional"),
        se = ie("Self"),
        ue = ie("SkipSelf"),
        le = function (e) {
          return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
        }({});

      function ce(e) {
        for (var t in e)
          if (e[t] === ce) return t;
        throw Error("Could not find renamed property on target object.")
      }

      function he(e, t) {
        for (var n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
      }

      function fe(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0
        }
      }

      function de(e) {
        return {
          factory: e.factory,
          providers: e.providers || [],
          imports: e.imports || []
        }
      }

      function pe(e) {
        return ve(e, e[ge]) || ve(e, e[ke])
      }

      function ve(e, t) {
        return t && t.token === e ? t : null
      }

      function me(e) {
        return e && (e.hasOwnProperty(ye) || e.hasOwnProperty(Ce)) ? e[ye] : null
      }
      var ge = ce({
          "\u0275prov": ce
        }),
        ye = ce({
          "\u0275inj": ce
        }),
        _e = ce({
          "\u0275provFallback": ce
        }),
        ke = ce({
          ngInjectableDef: ce
        }),
        Ce = ce({
          ngInjectorDef: ce
        });

      function be(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(be).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return "".concat(e.overriddenName);
        if (e.name) return "".concat(e.name);
        var t = e.toString();
        if (null == t) return "" + t;
        var n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n)
      }

      function we(e, t) {
        return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
      }
      var Se = ce({
        __forward_ref__: ce
      });

      function Ee(e) {
        return e.__forward_ref__ = Ee, e.toString = function () {
          return be(this())
        }, e
      }

      function xe(e) {
        return Ae(e) ? e() : e
      }

      function Ae(e) {
        return "function" == typeof e && e.hasOwnProperty(Se) && e.__forward_ref__ === Ee
      }
      var Oe, Te = "undefined" != typeof globalThis && globalThis,
        Ie = "undefined" != typeof window && window,
        Pe = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        Fe = "undefined" != typeof global && global,
        Re = Te || Fe || Ie || Pe,
        Ne = ce({
          "\u0275cmp": ce
        }),
        Me = ce({
          "\u0275dir": ce
        }),
        De = ce({
          "\u0275pipe": ce
        }),
        Ve = ce({
          "\u0275mod": ce
        }),
        Le = ce({
          "\u0275loc": ce
        }),
        je = ce({
          "\u0275fac": ce
        }),
        Ue = ce({
          __NG_ELEMENT_ID__: ce
        }),
        He = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = fe({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory
            }))
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "InjectionToken ".concat(this._desc)
            }
          }]), e
        }(),
        qe = new He("INJECTOR", -1),
        ze = {},
        Ge = /\n/gm,
        Be = ce({
          provide: String,
          useValue: ce
        }),
        We = void 0;

      function $e(e) {
        var t = We;
        return We = e, t
      }

      function Ze(e) {
        var t = Oe;
        return Oe = e, t
      }

      function Qe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le.Default;
        if (void 0 === We) throw new Error("inject() must be called from an injection context");
        return null === We ? Ye(e, void 0, t) : We.get(e, t & le.Optional ? null : void 0, t)
      }

      function Je(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le.Default;
        return (Oe || Qe)(xe(e), t)
      }

      function Ye(e, t, n) {
        var r = pe(e);
        if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
        if (n & le.Optional) return null;
        if (void 0 !== t) return t;
        throw new Error("Injector: NOT_FOUND [".concat(be(e), "]"))
      }

      function Ke(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = xe(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Error("Arguments array must have arguments.");
            for (var i = void 0, o = le.Default, a = 0; a < r.length; a++) {
              var s = r[a];
              s instanceof ae || "Optional" === s.ngMetadataName || s === ae ? o |= le.Optional : s instanceof ue || "SkipSelf" === s.ngMetadataName || s === ue ? o |= le.SkipSelf : s instanceof se || "Self" === s.ngMetadataName || s === se ? o |= le.Self : i = s instanceof oe || s === oe ? s.token : s
            }
            t.push(Je(i, o))
          } else t.push(Je(r))
        }
        return t
      }
      var Xe = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "get",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze;
              if (t === ze) {
                var n = new Error("NullInjectorError: No provider for ".concat(be(e), "!"));
                throw n.name = "NullInjectorError", n
              }
              return t
            }
          }]), e
        }(),
        et = function e() {
          _classCallCheck(this, e)
        },
        tt = function e() {
          _classCallCheck(this, e)
        };

      function nt(e, t) {
        e.forEach((function (e) {
          return Array.isArray(e) ? nt(e, t) : t(e)
        }))
      }

      function rt(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n)
      }

      function it(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
      }

      function ot(e, t) {
        var n = at(e, t);
        if (n >= 0) return e[1 | n]
      }

      function at(e, t) {
        return function (e, t, n) {
          for (var r = 0, i = e.length >> 1; i !== r;) {
            var o = r + (i - r >> 1),
              a = e[o << 1];
            if (t === a) return o << 1;
            a > t ? i = o : r = o + 1
          }
          return ~(i << 1)
        }(e, t)
      }
      var st = function () {
          var e = {
            OnPush: 0,
            Default: 1
          };
          return e[e.OnPush] = "OnPush", e[e.Default] = "Default", e
        }(),
        ut = function () {
          var e = {
            Emulated: 0,
            Native: 1,
            None: 2,
            ShadowDom: 3
          };
          return e[e.Emulated] = "Emulated", e[e.Native] = "Native", e[e.None] = "None", e[e.ShadowDom] = "ShadowDom", e
        }(),
        lt = {},
        ct = [],
        ht = 0;

      function ft(e) {
        return re((function () {
          var t = e.type,
            n = t.prototype,
            r = {},
            i = {
              type: t,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: r,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onChanges: null,
              onInit: n.ngOnInit || null,
              doCheck: n.ngDoCheck || null,
              afterContentInit: n.ngAfterContentInit || null,
              afterContentChecked: n.ngAfterContentChecked || null,
              afterViewInit: n.ngAfterViewInit || null,
              afterViewChecked: n.ngAfterViewChecked || null,
              onDestroy: n.ngOnDestroy || null,
              onPush: e.changeDetection === st.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || ct,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || ut.Emulated,
              id: "c",
              styles: e.styles || ct,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null
            },
            o = e.directives,
            a = e.features,
            s = e.pipes;
          return i.id += ht++, i.inputs = gt(e.inputs, r), i.outputs = gt(e.outputs), a && a.forEach((function (e) {
            return e(i)
          })), i.directiveDefs = o ? function () {
            return ("function" == typeof o ? o() : o).map(dt)
          } : null, i.pipeDefs = s ? function () {
            return ("function" == typeof s ? s() : s).map(pt)
          } : null, i
        }))
      }

      function dt(e) {
        return kt(e) || function (e) {
          return e[Me] || null
        }(e)
      }

      function pt(e) {
        return function (e) {
          return e[De] || null
        }(e)
      }
      var vt = {};

      function mt(e) {
        var t = {
          type: e.type,
          bootstrap: e.bootstrap || ct,
          declarations: e.declarations || ct,
          imports: e.imports || ct,
          exports: e.exports || ct,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null
        };
        return null != e.id && re((function () {
          vt[e.id] = e.type
        })), t
      }

      function gt(e, t) {
        if (null == e) return lt;
        var n = {};
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var i = e[r],
              o = i;
            Array.isArray(i) && (o = i[1], i = i[0]), n[i] = r, t && (t[i] = o)
          } return n
      }
      var yt = ft;

      function _t(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null
        }
      }

      function kt(e) {
        return e[Ne] || null
      }

      function Ct(e, t) {
        return e.hasOwnProperty(je) ? e[je] : null
      }

      function bt(e, t) {
        var n = e[Ve] || null;
        if (!n && !0 === t) throw new Error("Type ".concat(be(e), " does not have '\u0275mod' property."));
        return n
      }

      function wt(e) {
        return Array.isArray(e) && "object" == typeof e[1]
      }

      function St(e) {
        return Array.isArray(e) && !0 === e[1]
      }

      function Et(e) {
        return 0 != (8 & e.flags)
      }

      function xt(e) {
        return 2 == (2 & e.flags)
      }

      function At(e) {
        return 1 == (1 & e.flags)
      }

      function Ot(e) {
        return null !== e.template
      }

      function Tt(e) {
        return 0 != (512 & e[2])
      }
      var It = void 0;

      function Pt(e) {
        return !!e.listen
      }
      var Ft = {
        createRenderer: function (e, t) {
          return void 0 !== It ? It : "undefined" != typeof document ? document : void 0
        }
      };

      function Rt(e) {
        for (; Array.isArray(e);) e = e[0];
        return e
      }

      function Nt(e, t) {
        return Rt(t[e + 19])
      }

      function Mt(e, t) {
        return Rt(t[e.index])
      }

      function Dt(e, t) {
        return e.data[t + 19]
      }

      function Vt(e, t) {
        var n = t[e];
        return wt(n) ? n : n[0]
      }

      function Lt(e) {
        var t = function (e) {
          return e.__ngContext__ || null
        }(e);
        return t ? Array.isArray(t) ? t : t.lView : null
      }

      function jt(e) {
        return 4 == (4 & e[2])
      }

      function Ut(e) {
        return 128 == (128 & e[2])
      }

      function Ht(e, t) {
        return null === e || null == t ? null : e[t]
      }

      function qt(e) {
        e[18] = 0
      }
      var zt = {
        lFrame: un(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1
      };

      function Gt() {
        return zt.bindingsEnabled
      }

      function Bt() {
        return zt.lFrame.lView
      }

      function Wt() {
        return zt.lFrame.tView
      }

      function $t(e) {
        zt.lFrame.contextLView = e
      }

      function Zt() {
        return zt.lFrame.previousOrParentTNode
      }

      function Qt(e, t) {
        zt.lFrame.previousOrParentTNode = e, zt.lFrame.isParent = t
      }

      function Jt() {
        return zt.lFrame.isParent
      }

      function Yt() {
        return zt.checkNoChangesMode
      }

      function Kt(e) {
        zt.checkNoChangesMode = e
      }

      function Xt() {
        var e = zt.lFrame,
          t = e.bindingRootIndex;
        return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
      }

      function en() {
        return zt.lFrame.bindingIndex++
      }

      function tn(e, t) {
        var n = zt.lFrame;
        n.bindingIndex = n.bindingRootIndex = e, n.currentDirectiveIndex = t
      }

      function nn() {
        return zt.lFrame.currentQueryIndex
      }

      function rn(e) {
        zt.lFrame.currentQueryIndex = e
      }

      function on(e, t) {
        var n = sn();
        zt.lFrame = n, n.previousOrParentTNode = t, n.lView = e
      }

      function an(e, t) {
        var n = sn(),
          r = e[1];
        zt.lFrame = n, n.previousOrParentTNode = t, n.lView = e, n.tView = r, n.contextLView = e, n.bindingIndex = r.bindingStartIndex
      }

      function sn() {
        var e = zt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? un(e) : t
      }

      function un(e) {
        var t = {
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
          parent: e,
          child: null
        };
        return null !== e && (e.child = t), t
      }

      function ln() {
        var e = zt.lFrame;
        return zt.lFrame = e.parent, e.previousOrParentTNode = null, e.lView = null, e
      }
      var cn = ln;

      function hn() {
        var e = ln();
        e.isParent = !0, e.tView = null, e.selectedIndex = 0, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.currentSanitizer = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
      }

      function fn() {
        return zt.lFrame.selectedIndex
      }

      function dn(e) {
        zt.lFrame.selectedIndex = e
      }

      function pn() {
        var e = zt.lFrame;
        return Dt(e.tView, e.selectedIndex)
      }

      function vn(e, t) {
        for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          var i = e.data[n];
          i.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(-n, i.afterContentInit), i.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, i.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, i.afterContentChecked)), i.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(-n, i.afterViewInit), i.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, i.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, i.afterViewChecked)), null != i.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, i.onDestroy)
        }
      }

      function mn(e, t, n) {
        _n(e, t, 3, n)
      }

      function gn(e, t, n, r) {
        (3 & e[2]) === n && _n(e, t, n, r)
      }

      function yn(e, t) {
        var n = e[2];
        (3 & n) === t && (n &= 1023, n += 1, e[2] = n)
      }

      function _n(e, t, n, r) {
        for (var i = null != r ? r : -1, o = 0, a = void 0 !== r ? 65535 & e[18] : 0; a < t.length; a++)
          if ("number" == typeof t[a + 1]) {
            if (o = t[a], null != r && o >= r) break
          } else t[a] < 0 && (e[18] += 65536), (o < i || -1 == i) && (kn(e, n, t, a), e[18] = (4294901760 & e[18]) + a + 2), a++
      }

      function kn(e, t, n, r) {
        var i = n[r] < 0,
          o = n[r + 1],
          a = e[i ? -n[r] : n[r]];
        i ? e[2] >> 10 < e[18] >> 16 && (3 & e[2]) === t && (e[2] += 1024, o.call(a)) : o.call(a)
      }
      var Cn = function e(t, n, r) {
        _classCallCheck(this, e), this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
      };

      function bn(e, t, n) {
        for (var r = Pt(e), i = 0; i < n.length;) {
          var o = n[i];
          if ("number" == typeof o) {
            if (0 !== o) break;
            i++;
            var a = n[i++],
              s = n[i++],
              u = n[i++];
            r ? e.setAttribute(t, s, u, a) : t.setAttributeNS(a, s, u)
          } else {
            var l = o,
              c = n[++i];
            Sn(l) ? r && e.setProperty(t, l, c) : r ? e.setAttribute(t, l, c) : t.setAttribute(l, c), i++
          }
        }
        return i
      }

      function wn(e) {
        return 3 === e || 4 === e || 6 === e
      }

      function Sn(e) {
        return 64 === e.charCodeAt(0)
      }

      function En(e, t) {
        if (null === t || 0 === t.length);
        else if (null === e || 0 === e.length) e = t.slice();
        else
          for (var n = -1, r = 0; r < t.length; r++) {
            var i = t[r];
            "number" == typeof i ? n = i : 0 === n || xn(e, n, i, null, -1 === n || 2 === n ? t[++r] : null)
          }
        return e
      }

      function xn(e, t, n, r, i) {
        var o = 0,
          a = e.length;
        if (-1 === t) a = -1;
        else
          for (; o < e.length;) {
            var s = e[o++];
            if ("number" == typeof s) {
              if (s === t) {
                a = -1;
                break
              }
              if (s > t) {
                a = o - 1;
                break
              }
            }
          }
        for (; o < e.length;) {
          var u = e[o];
          if ("number" == typeof u) break;
          if (u === n) {
            if (null === r) return void(null !== i && (e[o + 1] = i));
            if (r === e[o + 1]) return void(e[o + 2] = i)
          }
          o++, null !== r && o++, null !== i && o++
        } - 1 !== a && (e.splice(a, 0, t), o = a + 1), e.splice(o++, 0, n), null !== r && e.splice(o++, 0, r), null !== i && e.splice(o++, 0, i)
      }

      function An(e) {
        return -1 !== e
      }

      function On(e) {
        return 32767 & e
      }

      function Tn(e) {
        return e >> 16
      }

      function In(e, t) {
        for (var n = Tn(e), r = t; n > 0;) r = r[15], n--;
        return r
      }

      function Pn(e) {
        return "string" == typeof e ? e : null == e ? "" : "" + e
      }

      function Fn(e) {
        return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : Pn(e)
      }
      var Rn = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Re);

      function Nn(e) {
        return e instanceof Function ? e() : e
      }
      var Mn = !0;

      function Dn(e) {
        var t = Mn;
        return Mn = e, t
      }
      var Vn = 0;

      function Ln(e, t) {
        var n = Un(e, t);
        if (-1 !== n) return n;
        var r = t[1];
        r.firstCreatePass && (e.injectorIndex = t.length, jn(r.data, e), jn(t, null), jn(r.blueprint, null));
        var i = Hn(e, t),
          o = e.injectorIndex;
        if (An(i))
          for (var a = On(i), s = In(i, t), u = s[1].data, l = 0; l < 8; l++) t[o + l] = s[a + l] | u[a + l];
        return t[o + 8] = i, o
      }

      function jn(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
      }

      function Un(e, t) {
        return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null == t[e.injectorIndex + 8] ? -1 : e.injectorIndex
      }

      function Hn(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        for (var n = t[6], r = 1; n && -1 === n.injectorIndex;) n = (t = t[15]) ? t[6] : null, r++;
        return n ? n.injectorIndex | r << 16 : -1
      }

      function qn(e, t, n) {
        ! function (e, t, n) {
          var r = "string" != typeof n ? n[Ue] : n.charCodeAt(0) || 0;
          null == r && (r = n[Ue] = Vn++);
          var i = 255 & r,
            o = 1 << i,
            a = 64 & i,
            s = 32 & i,
            u = t.data;
          128 & i ? a ? s ? u[e + 7] |= o : u[e + 6] |= o : s ? u[e + 5] |= o : u[e + 4] |= o : a ? s ? u[e + 3] |= o : u[e + 2] |= o : s ? u[e + 1] |= o : u[e] |= o
        }(e, t, n)
      }

      function zn(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : le.Default,
          i = arguments.length > 4 ? arguments[4] : void 0;
        if (null !== e) {
          var o = function (e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            var t = e[Ue];
            return "number" == typeof t && t > 0 ? 255 & t : t
          }(n);
          if ("function" == typeof o) {
            on(t, e);
            try {
              var a = o();
              if (null != a || r & le.Optional) return a;
              throw new Error("No provider for ".concat(Fn(n), "!"))
            } finally {
              cn()
            }
          } else if ("number" == typeof o) {
            if (-1 === o) return new Jn(e, t);
            var s = null,
              u = Un(e, t),
              l = -1,
              c = r & le.Host ? t[16][6] : null;
            for ((-1 === u || r & le.SkipSelf) && (l = -1 === u ? Hn(e, t) : t[u + 8], Qn(r, !1) ? (s = t[1], u = On(l), t = In(l, t)) : u = -1); - 1 !== u;) {
              l = t[u + 8];
              var h = t[1];
              if (Zn(o, u, h.data)) {
                var f = Bn(u, t, n, s, r, c);
                if (f !== Gn) return f
              }
              Qn(r, t[1].data[u + 8] === c) && Zn(o, u, t) ? (s = h, u = On(l), t = In(l, t)) : u = -1
            }
          }
        }
        if (r & le.Optional && void 0 === i && (i = null), 0 == (r & (le.Self | le.Host))) {
          var d = t[9],
            p = Ze(void 0);
          try {
            return d ? d.get(n, i, r & le.Optional) : Ye(n, i, r & le.Optional)
          } finally {
            Ze(p)
          }
        }
        if (r & le.Optional) return i;
        throw new Error("NodeInjector: NOT_FOUND [".concat(Fn(n), "]"))
      }
      var Gn = {};

      function Bn(e, t, n, r, i, o) {
        var a = t[1],
          s = a.data[e + 8],
          u = Wn(s, a, n, null == r ? xt(s) && Mn : r != a && 3 === s.type, i & le.Host && o === s);
        return null !== u ? $n(t, a, u, s) : Gn
      }

      function Wn(e, t, n, r, i) {
        for (var o = e.providerIndexes, a = t.data, s = 65535 & o, u = e.directiveStart, l = o >> 16, c = i ? s + l : e.directiveEnd, h = r ? s : s + l; h < c; h++) {
          var f = a[h];
          if (h < u && n === f || h >= u && f.type === n) return h
        }
        if (i) {
          var d = a[u];
          if (d && Ot(d) && d.type === n) return u
        }
        return null
      }

      function $n(e, t, n, r) {
        var i = e[n],
          o = t.data;
        if (i instanceof Cn) {
          var a = i;
          if (a.resolving) throw new Error("Circular dep for ".concat(Fn(o[n])));
          var s, u = Dn(a.canSeeViewProviders);
          a.resolving = !0, a.injectImpl && (s = Ze(a.injectImpl)), on(e, r);
          try {
            i = e[n] = a.factory(void 0, o, e, r), t.firstCreatePass && n >= r.directiveStart && function (e, t, n) {
              var r = t.onChanges,
                i = t.onInit,
                o = t.doCheck;
              r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, r)), i && (n.preOrderHooks || (n.preOrderHooks = [])).push(-e, i), o && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, o), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, o))
            }(n, o[n], t)
          } finally {
            a.injectImpl && Ze(s), Dn(u), a.resolving = !1, cn()
          }
        }
        return i
      }

      function Zn(e, t, n) {
        var r = 64 & e,
          i = 32 & e;
        return !!((128 & e ? r ? i ? n[t + 7] : n[t + 6] : i ? n[t + 5] : n[t + 4] : r ? i ? n[t + 3] : n[t + 2] : i ? n[t + 1] : n[t]) & 1 << e)
      }

      function Qn(e, t) {
        return !(e & le.Self || e & le.Host && t)
      }
      var Jn = function () {
        function e(t, n) {
          _classCallCheck(this, e), this._tNode = t, this._lView = n
        }
        return _createClass(e, [{
          key: "get",
          value: function (e, t) {
            return zn(this._tNode, this._lView, e, void 0, t)
          }
        }]), e
      }();

      function Yn(e) {
        return re((function () {
          var t = Object.getPrototypeOf(e.prototype).constructor,
            n = t[je] || function e(t) {
              var n = t;
              if (Ae(t)) return function () {
                var t = e(xe(n));
                return t ? t() : null
              };
              var r = Ct(n);
              if (null === r) {
                var i = me(n);
                r = i && i.factory
              }
              return r || null
            }(t);
          return null !== n ? n : function (e) {
            return new e
          }
        }))
      }

      function Kn(e) {
        return e.ngDebugContext
      }

      function Xn(e) {
        return e.ngOriginalError
      }

      function er(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        e.error.apply(e, n)
      }
      var tr = function () {
          function e() {
            _classCallCheck(this, e), this._console = console
          }
          return _createClass(e, [{
            key: "handleError",
            value: function (e) {
              var t = this._findOriginalError(e),
                n = this._findContext(e),
                r = function (e) {
                  return e.ngErrorLogger || er
                }(e);
              r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
            }
          }, {
            key: "_findContext",
            value: function (e) {
              return e ? Kn(e) ? Kn(e) : this._findContext(Xn(e)) : null
            }
          }, {
            key: "_findOriginalError",
            value: function (e) {
              for (var t = Xn(e); t && Xn(t);) t = Xn(t);
              return t
            }
          }]), e
        }(),
        nr = function () {
          function e(t) {
            _classCallCheck(this, e), this.changingThisBreaksApplicationSecurity = t
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity) + " (see http://g.co/ng/security#xss)"
            }
          }]), e
        }();

      function rr(e) {
        return e instanceof nr ? e.changingThisBreaksApplicationSecurity : e
      }
      var ir = !0,
        or = !1;

      function ar() {
        return or = !0, ir
      }
      var sr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        ur = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        lr = function () {
          var e = {
            NONE: 0,
            HTML: 1,
            STYLE: 2,
            SCRIPT: 3,
            URL: 4,
            RESOURCE_URL: 5
          };
          return e[e.NONE] = "NONE", e[e.HTML] = "HTML", e[e.STYLE] = "STYLE", e[e.SCRIPT] = "SCRIPT", e[e.URL] = "URL", e[e.RESOURCE_URL] = "RESOURCE_URL", e
        }();

      function cr(e) {
        var t, n, r = (t = Bt()) && t[12];
        return r ? r.sanitize(lr.URL, e) || "" : function (e, t) {
          var n = function (e) {
            return e instanceof nr && e.getTypeName() || null
          }(e);
          if (null != n && "URL" !== n) {
            if ("ResourceURL" === n) return !0;
            throw new Error("Required a safe ".concat("URL", ", got a ").concat(n, " (see http://g.co/ng/security#xss)"))
          }
          return "URL" === n
        }(e) ? rr(e) : (n = Pn(e), (n = String(n)).match(sr) || n.match(ur) ? n : (ar() && console.warn("WARNING: sanitizing unsafe URL value ".concat(n, " (see http://g.co/ng/security#xss)")), "unsafe:" + n))
      }

      function hr(e, t) {
        e.__ngContext__ = t
      }

      function fr(e) {
        throw new Error("Multiple components match node with tagname ".concat(e.tagName))
      }

      function dr() {
        throw new Error("Cannot mix multi providers and regular providers")
      }

      function pr(e, t, n) {
        for (var r = e.length;;) {
          var i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            var o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32) return i
          }
          n = i + 1
        }
      }

      function vr(e, t, n) {
        for (var r = 0; r < e.length;) {
          var i = e[r++];
          if (n && "class" === i) {
            if (-1 !== pr((i = e[r]).toLowerCase(), t, 0)) return !0
          } else if (1 === i) {
            for (; r < e.length && "string" == typeof (i = e[r++]);)
              if (i.toLowerCase() === t) return !0;
            return !1
          }
        }
        return !1
      }

      function mr(e, t, n) {
        return t === (0 !== e.type || n ? e.tagName : "ng-template")
      }

      function gr(e, t, n) {
        for (var r = 4, i = e.attrs || [], o = function (e) {
            for (var t = 0; t < e.length; t++)
              if (wn(e[t])) return t;
            return e.length
          }(i), a = !1, s = 0; s < t.length; s++) {
          var u = t[s];
          if ("number" != typeof u) {
            if (!a)
              if (4 & r) {
                if (r = 2 | 1 & r, "" !== u && !mr(e, u, n) || "" === u && 1 === t.length) {
                  if (yr(r)) return !1;
                  a = !0
                }
              } else {
                var l = 8 & r ? u : t[++s];
                if (8 & r && null !== e.attrs) {
                  if (!vr(e.attrs, l, n)) {
                    if (yr(r)) return !1;
                    a = !0
                  }
                  continue
                }
                var c = _r(8 & r ? "class" : u, i, 0 == e.type && "ng-template" !== e.tagName, n);
                if (-1 === c) {
                  if (yr(r)) return !1;
                  a = !0;
                  continue
                }
                if ("" !== l) {
                  var h;
                  h = c > o ? "" : i[c + 1].toLowerCase();
                  var f = 8 & r ? h : null;
                  if (f && -1 !== pr(f, l, 0) || 2 & r && l !== h) {
                    if (yr(r)) return !1;
                    a = !0
                  }
                }
              }
          } else {
            if (!a && !yr(r) && !yr(u)) return !1;
            if (a && yr(u)) continue;
            a = !1, r = u | 1 & r
          }
        }
        return yr(r) || a
      }

      function yr(e) {
        return 0 == (1 & e)
      }

      function _r(e, t, n, r) {
        if (null === t) return -1;
        var i = 0;
        if (r || !n) {
          for (var o = !1; i < t.length;) {
            var a = t[i];
            if (a === e) return i;
            if (3 === a || 6 === a) o = !0;
            else {
              if (1 === a || 2 === a) {
                for (var s = t[++i];
                  "string" == typeof s;) s = t[++i];
                continue
              }
              if (4 === a) break;
              if (0 === a) {
                i += 4;
                continue
              }
            }
            i += o ? 1 : 2
          }
          return -1
        }
        return function (e, t) {
          var n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length;) {
              if (e[n] === t) return n;
              n++
            }
          return -1
        }(t, e)
      }

      function kr(e, t) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = 0; r < t.length; r++)
          if (gr(e, t[r], n)) return !0;
        return !1
      }

      function Cr(e, t) {
        return e ? ":not(" + t.trim() + ")" : t
      }

      function br(e) {
        for (var t = e[0], n = 1, r = 2, i = "", o = !1; n < e.length;) {
          var a = e[n];
          if ("string" == typeof a)
            if (2 & r) {
              var s = e[++n];
              i += "[" + a + (s.length > 0 ? '="' + s + '"' : "") + "]"
            } else 8 & r ? i += "." + a : 4 & r && (i += " " + a);
          else "" === i || yr(a) || (t += Cr(o, i), i = ""), r = a, o = o || !yr(r);
          n++
        }
        return "" !== i && (t += Cr(o, i)), t
      }
      var wr = {};

      function Sr(e) {
        var t = e[3];
        return St(t) ? t[3] : t
      }

      function Er(e) {
        xr(Wt(), Bt(), fn() + e, Yt())
      }

      function xr(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            var i = e.preOrderCheckHooks;
            null !== i && mn(t, i, n)
          } else {
            var o = e.preOrderHooks;
            null !== o && gn(t, o, 0, n)
          } dn(n)
      }

      function Ar(e, t) {
        return e << 17 | t << 2
      }

      function Or(e) {
        return e >> 17 & 32767
      }

      function Tr(e) {
        return 2 | e
      }

      function Ir(e) {
        return (131068 & e) >> 2
      }

      function Pr(e, t) {
        return -131069 & e | t << 2
      }

      function Fr(e) {
        return 1 | e
      }

      function Rr(e, t) {
        var n = e.contentQueries;
        if (null !== n)
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              o = n[r + 1];
            if (-1 !== o) {
              var a = e.data[o];
              rn(i), a.contentQueries(2, t[o], o)
            }
          }
      }

      function Nr(e, t, n) {
        return Pt(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
      }

      function Mr(e, t, n, r, i, o, a, s, u, l) {
        var c = t.blueprint.slice();
        return c[0] = i, c[2] = 140 | r, qt(c), c[3] = c[15] = e, c[8] = n, c[10] = a || e && e[10], c[11] = s || e && e[11], c[12] = u || e && e[12] || null, c[9] = l || e && e[9] || null, c[6] = o, c[16] = 2 == t.type ? e[16] : c, c
      }

      function Dr(e, t, n, r, i, o) {
        var a = n + 19,
          s = e.data[a] || function (e, t, n, r, i, o) {
            var a = Zt(),
              s = Jt(),
              u = s ? a : a && a.parent,
              l = e.data[n] = Br(0, u && u !== t ? u : null, r, n, i, o);
            return null === e.firstChild && (e.firstChild = l), a && (!s || null != a.child || null === l.parent && 2 !== a.type ? s || (a.next = l) : a.child = l), l
          }(e, t, a, r, i, o);
        return Qt(s, !0), s
      }

      function Vr(e, t, n) {
        an(t, t[6]);
        try {
          var r = e.viewQuery;
          null !== r && pi(1, r, n);
          var i = e.template;
          null !== i && Ur(e, t, i, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && Rr(e, t), e.staticViewQueries && pi(2, e.viewQuery, n);
          var o = e.components;
          null !== o && function (e, t) {
            for (var n = 0; n < t.length; n++) li(e, t[n])
          }(t, o)
        } finally {
          t[2] &= -5, hn()
        }
      }

      function Lr(e, t, n, r) {
        var i = t[2];
        if (256 != (256 & i)) {
          an(t, t[6]);
          var o = Yt();
          try {
            qt(t), zt.lFrame.bindingIndex = e.bindingStartIndex, null !== n && Ur(e, t, n, 2, r);
            var a = 3 == (3 & i);
            if (!o)
              if (a) {
                var s = e.preOrderCheckHooks;
                null !== s && mn(t, s, null)
              } else {
                var u = e.preOrderHooks;
                null !== u && gn(t, u, 0, null), yn(t, 0)
              } if (function (e) {
                for (var t = e[13]; null !== t;) {
                  var n = void 0;
                  if (St(t) && (n = t[2]) >> 1 == -1) {
                    for (var r = 9; r < t.length; r++) {
                      var i = t[r],
                        o = i[1];
                      Ut(i) && Lr(o, i, o.template, i[8])
                    }
                    0 != (1 & n) && si(t, e[16])
                  }
                  t = t[4]
                }
              }(t), null !== e.contentQueries && Rr(e, t), !o)
              if (a) {
                var l = e.contentCheckHooks;
                null !== l && mn(t, l)
              } else {
                var c = e.contentHooks;
                null !== c && gn(t, c, 1), yn(t, 1)
              }!
            function (e, t) {
              try {
                var n = e.expandoInstructions;
                if (null !== n)
                  for (var r = e.expandoStartIndex, i = -1, o = 0; o < n.length; o++) {
                    var a = n[o];
                    "number" == typeof a ? a <= 0 ? (dn(0 - a), i = r += 9 + n[++o]) : r += a : (null !== a && (tn(r, i), a(2, t[i])), i++)
                  }
              } finally {
                dn(-1)
              }
            }(e, t);
            var h = e.components;
            null !== h && function (e, t) {
              for (var n = 0; n < t.length; n++) ui(e, t[n])
            }(t, h);
            var f = e.viewQuery;
            if (null !== f && pi(2, f, r), !o)
              if (a) {
                var d = e.viewCheckHooks;
                null !== d && mn(t, d)
              } else {
                var p = e.viewHooks;
                null !== p && gn(t, p, 2), yn(t, 2)
              }! 0 === e.firstUpdatePass && (e.firstUpdatePass = !1), o || (t[2] &= -73)
          } finally {
            hn()
          }
        }
      }

      function jr(e, t, n, r) {
        var i = t[10],
          o = !Yt(),
          a = jt(t);
        try {
          o && !a && i.begin && i.begin(), a && Vr(e, t, r), Lr(e, t, n, r)
        } finally {
          o && !a && i.end && i.end()
        }
      }

      function Ur(e, t, n, r, i) {
        var o = fn();
        try {
          dn(-1), 2 & r && t.length > 19 && xr(e, t, 0, Yt()), n(r, i)
        } finally {
          dn(o)
        }
      }

      function Hr(e, t, n) {
        Gt() && (function (e, t, n, r) {
          var i = n.directiveStart,
            o = n.directiveEnd;
          e.firstCreatePass || Ln(n, t), hr(r, t);
          for (var a = n.initialInputs, s = i; s < o; s++) {
            var u = e.data[s],
              l = Ot(u);
            l && ri(t, n, u);
            var c = $n(t, e, s, n);
            hr(c, t), null !== a && ii(0, s - i, c, u, 0, a), l && (Vt(n.index, t)[8] = c)
          }
        }(e, t, n, Mt(n, t)), 128 == (128 & n.flags) && function (e, t, n) {
          var r = n.directiveStart,
            i = n.directiveEnd,
            o = e.expandoInstructions,
            a = e.firstCreatePass,
            s = n.index - 19;
          try {
            dn(s);
            for (var u = r; u < i; u++) {
              var l = e.data[u],
                c = t[u];
              null !== l.hostBindings || 0 !== l.hostVars || null !== l.hostAttrs ? Yr(l, c) : a && o.push(null)
            }
          } finally {
            dn(-1)
          }
        }(e, t, n))
      }

      function qr(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mt,
          r = t.localNames;
        if (null !== r)
          for (var i = t.index + 1, o = 0; o < r.length; o += 2) {
            var a = r[o + 1],
              s = -1 === a ? n(t, e) : e[a];
            e[i++] = s
          }
      }

      function zr(e) {
        return e.tView || (e.tView = Gr(1, -1, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts))
      }

      function Gr(e, t, n, r, i, o, a, s, u, l) {
        var c = 19 + r,
          h = c + i,
          f = function (e, t) {
            for (var n = [], r = 0; r < t; r++) n.push(r < e ? null : wr);
            return n
          }(c, h);
        return f[1] = {
          type: e,
          id: t,
          blueprint: f,
          template: n,
          queries: null,
          viewQuery: s,
          node: null,
          data: f.slice().fill(null, c),
          bindingStartIndex: c,
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
          directiveRegistry: "function" == typeof o ? o() : o,
          pipeRegistry: "function" == typeof a ? a() : a,
          firstChild: null,
          schemas: u,
          consts: l
        }
      }

      function Br(e, t, n, r, i, o) {
        return {
          type: n,
          index: r,
          injectorIndex: t ? t.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: i,
          attrs: o,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: t,
          projection: null,
          styles: null,
          residualStyles: void 0,
          classes: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0
        }
      }

      function Wr(e, t, n) {
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var i = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, i) : n[r] = [t, i]
          } return n
      }

      function $r(e, t, n, r, i, o, a, s) {
        var u, l, c = Mt(t, n),
          h = t.inputs;
        !s && null != h && (u = h[r]) ? (_i(e, n, u, r, i), xt(t) && function (e, t) {
          var n = Vt(t, e);
          16 & n[2] || (n[2] |= 64)
        }(n, t.index)) : 3 === t.type && (r = "class" === (l = r) ? "className" : "for" === l ? "htmlFor" : "formaction" === l ? "formAction" : "innerHtml" === l ? "innerHTML" : "readonly" === l ? "readOnly" : "tabindex" === l ? "tabIndex" : l, i = null != a ? a(i, t.tagName || "", r) : i, Pt(o) ? o.setProperty(c, r, i) : Sn(r) || (c.setProperty ? c.setProperty(r, i) : c[r] = i))
      }

      function Zr(e, t, n, r) {
        var i = !1;
        if (Gt()) {
          var o = function (e, t, n) {
              var r = e.directiveRegistry,
                i = null;
              if (r)
                for (var o = 0; o < r.length; o++) {
                  var a = r[o];
                  kr(n, a.selectors, !1) && (i || (i = []), qn(Ln(n, t), e, a.type), Ot(a) ? (2 & n.flags && fr(n), Xr(e, n), i.unshift(a)) : i.push(a))
                }
              return i
            }(e, t, n),
            a = null === r ? null : {
              "": -1
            };
          if (null !== o) {
            var s = 0;
            i = !0, ti(n, e.data.length, o.length);
            for (var u = 0; u < o.length; u++) {
              var l = o[u];
              l.providersResolver && l.providersResolver(l)
            }
            Kr(e, n, o.length);
            for (var c = !1, h = !1, f = 0; f < o.length; f++) {
              var d = o[f];
              n.mergedAttrs = En(n.mergedAttrs, d.hostAttrs), ni(e, t, d), ei(e.data.length - 1, d, a), null !== d.contentQueries && (n.flags |= 8), null === d.hostBindings && null === d.hostAttrs && 0 === d.hostVars || (n.flags |= 128), !c && (d.onChanges || d.onInit || d.doCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index - 19), c = !0), h || !d.onChanges && !d.doCheck || ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index - 19), h = !0), Qr(e, d), s += d.hostVars
            }! function (e, t) {
              for (var n = t.directiveEnd, r = e.data, i = t.attrs, o = [], a = null, s = null, u = t.directiveStart; u < n; u++) {
                var l = r[u],
                  c = l.inputs;
                o.push(null !== i ? oi(c, i) : null), a = Wr(c, u, a), s = Wr(l.outputs, u, s)
              }
              null !== a && (a.hasOwnProperty("class") && (t.flags |= 16), a.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = o, t.inputs = a, t.outputs = s
            }(e, n), Jr(e, t, s)
          }
          a && function (e, t, n) {
            if (t)
              for (var r = e.localNames = [], i = 0; i < t.length; i += 2) {
                var o = n[t[i + 1]];
                if (null == o) throw new Error("Export of name '".concat(t[i + 1], "' not found!"));
                r.push(t[i], o)
              }
          }(n, r, a)
        }
        return n.mergedAttrs = En(n.mergedAttrs, n.attrs), i
      }

      function Qr(e, t) {
        var n = e.expandoInstructions;
        n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars)
      }

      function Jr(e, t, n) {
        for (var r = 0; r < n; r++) t.push(wr), e.blueprint.push(wr), e.data.push(null)
      }

      function Yr(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t)
      }

      function Kr(e, t, n) {
        var r = 19 - t.index,
          i = e.data.length - (65535 & t.providerIndexes);
        (e.expandoInstructions || (e.expandoInstructions = [])).push(r, i, n)
      }

      function Xr(e, t) {
        t.flags |= 2, (e.components || (e.components = [])).push(t.index)
      }

      function ei(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (var r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Ot(t) && (n[""] = e)
        }
      }

      function ti(e, t, n) {
        e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
      }

      function ni(e, t, n) {
        e.data.push(n);
        var r = n.factory || (n.factory = Ct(n.type)),
          i = new Cn(r, Ot(n), null);
        e.blueprint.push(i), t.push(i)
      }

      function ri(e, t, n) {
        var r = Mt(t, e),
          i = zr(n),
          o = e[10],
          a = ci(e, Mr(e, i, null, n.onPush ? 64 : 16, r, t, o, o.createRenderer(r, n)));
        e[t.index] = a
      }

      function ii(e, t, n, r, i, o) {
        var a = o[t];
        if (null !== a)
          for (var s = r.setInput, u = 0; u < a.length;) {
            var l = a[u++],
              c = a[u++],
              h = a[u++];
            null !== s ? r.setInput(n, h, l, c) : n[c] = h
          }
      }

      function oi(e, t) {
        for (var n = null, r = 0; r < t.length;) {
          var i = t[r];
          if (0 !== i)
            if (5 !== i) {
              if ("number" == typeof i) break;
              e.hasOwnProperty(i) && (null === n && (n = []), n.push(i, e[i], t[r + 1])), r += 2
            } else r += 2;
          else r += 4
        }
        return n
      }

      function ai(e, t, n, r) {
        return new Array(e, !0, -2, t, null, null, r, n, null)
      }

      function si(e, t) {
        for (var n = e[5], r = 0; r < n.length; r++) {
          var i = n[r],
            o = i[3][3][16];
          if (o !== t && 0 == (16 & o[2])) {
            var a = i[1];
            Lr(a, i, a.template, i[8])
          }
        }
      }

      function ui(e, t) {
        var n = Vt(t, e);
        if (Ut(n) && 80 & n[2]) {
          var r = n[1];
          Lr(r, n, r.template, n[8])
        }
      }

      function li(e, t) {
        var n = Vt(t, e),
          r = n[1];
        ! function (e, t) {
          for (var n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
        }(r, n), Vr(r, n, n[8])
      }

      function ci(e, t) {
        return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
      }

      function hi(e) {
        for (; e;) {
          e[2] |= 64;
          var t = Sr(e);
          if (Tt(e) && !t) return e;
          e = t
        }
        return null
      }

      function fi(e, t, n) {
        var r = t[10];
        r.begin && r.begin();
        try {
          Lr(e, t, e.template, n)
        } catch (i) {
          throw yi(t, i), i
        } finally {
          r.end && r.end()
        }
      }

      function di(e) {
        ! function (e) {
          for (var t = 0; t < e.components.length; t++) {
            var n = e.components[t],
              r = Lt(n),
              i = r[1];
            jr(i, r, i.template, n)
          }
        }(e[8])
      }

      function pi(e, t, n) {
        rn(0), t(e, n)
      }
      var vi = Promise.resolve(null);

      function mi(e) {
        return e[7] || (e[7] = [])
      }

      function gi(e) {
        return e.cleanup || (e.cleanup = [])
      }

      function yi(e, t) {
        var n = e[9],
          r = n ? n.get(tr, null) : null;
        r && r.handleError(t)
      }

      function _i(e, t, n, r, i) {
        for (var o = 0; o < n.length;) {
          var a = n[o++],
            s = n[o++],
            u = t[a],
            l = e.data[a];
          null !== l.setInput ? l.setInput(u, i, r, s) : u[s] = i
        }
      }

      function ki(e, t) {
        var n = t[3];
        return -1 === e.index ? St(n) ? n : null : n
      }

      function Ci(e, t) {
        var n = ki(e, t);
        return n ? Fi(t[11], n[7]) : null
      }

      function bi(e, t, n, r, i) {
        if (null != r) {
          var o, a = !1;
          St(r) ? o = r : wt(r) && (a = !0, r = r[0]);
          var s = Rt(r);
          0 === e && null !== n ? null == i ? Ii(t, n, s) : Ti(t, n, s, i || null) : 1 === e && null !== n ? Ti(t, n, s, i || null) : 2 === e ? function (e, t, n) {
            var r = Fi(e, t);
            r && function (e, t, n, r) {
              Pt(e) ? e.removeChild(t, n, r) : t.removeChild(n)
            }(e, r, t, n)
          }(t, s, a) : 3 === e && t.destroyNode(s), null != o && function (e, t, n, r, i) {
            var o = n[7];
            o !== Rt(n) && bi(t, e, r, o, i);
            for (var a = 9; a < n.length; a++) {
              var s = n[a];
              Di(s[1], s, e, t, r, o)
            }
          }(t, e, o, n, i)
        }
      }

      function wi(e, t, n, r) {
        var i = Ci(e.node, t);
        i && Di(e, t, t[11], n ? 1 : 2, i, r)
      }

      function Si(e, t) {
        var n = e[5],
          r = n.indexOf(t);
        n.splice(r, 1)
      }

      function Ei(e, t) {
        if (!(e.length <= 9)) {
          var n = 9 + t,
            r = e[n];
          if (r) {
            var i = r[17];
            null !== i && i !== e && Si(i, r), t > 0 && (e[n - 1][4] = r[4]);
            var o = it(e, 9 + t);
            wi(r[1], r, !1, null);
            var a = o[5];
            null !== a && a.detachView(o[1]), r[3] = null, r[4] = null, r[2] &= -129
          }
          return r
        }
      }

      function xi(e, t) {
        if (!(256 & t[2])) {
          var n = t[11];
          Pt(n) && n.destroyNode && Di(e, t, n, 3, null, null),
            function (e) {
              var t = e[13];
              if (!t) return Oi(e[1], e);
              for (; t;) {
                var n = null;
                if (wt(t)) n = t[13];
                else {
                  var r = t[9];
                  r && (n = r)
                }
                if (!n) {
                  for (; t && !t[4] && t !== e;) wt(t) && Oi(t[1], t), t = Ai(t, e);
                  null === t && (t = e), wt(t) && Oi(t[1], t), n = t && t[4]
                }
                t = n
              }
            }(t)
        }
      }

      function Ai(e, t) {
        var n;
        return wt(e) && (n = e[6]) && 2 === n.type ? ki(n, e) : e[3] === t ? null : e[3]
      }

      function Oi(e, t) {
        if (!(256 & t[2])) {
          t[2] &= -129, t[2] |= 256,
            function (e, t) {
              var n;
              if (null != e && null != (n = e.destroyHooks))
                for (var r = 0; r < n.length; r += 2) {
                  var i = t[n[r]];
                  i instanceof Cn || n[r + 1].call(i)
                }
            }(e, t),
            function (e, t) {
              var n = e.cleanup;
              if (null !== n) {
                for (var r = t[7], i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    var o = n[i + 1],
                      a = "function" == typeof o ? o(t) : Rt(t[o]),
                      s = r[n[i + 2]],
                      u = n[i + 3];
                    "boolean" == typeof u ? a.removeEventListener(n[i], s, u) : u >= 0 ? r[u]() : r[-u].unsubscribe(), i += 2
                  } else n[i].call(r[n[i + 1]]);
                t[7] = null
              }
            }(e, t);
          var n = t[6];
          n && 3 === n.type && Pt(t[11]) && t[11].destroy();
          var r = t[17];
          if (null !== r && St(t[3])) {
            r !== t[3] && Si(r, t);
            var i = t[5];
            null !== i && i.detachView(e)
          }
        }
      }

      function Ti(e, t, n, r) {
        Pt(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0)
      }

      function Ii(e, t, n) {
        Pt(e) ? e.appendChild(t, n) : t.appendChild(n)
      }

      function Pi(e, t, n, r) {
        null !== r ? Ti(e, t, n, r) : Ii(e, t, n)
      }

      function Fi(e, t) {
        return Pt(e) ? e.parentNode(t) : t.parentNode
      }

      function Ri(e, t, n, r) {
        var i = function (e, t, n) {
          for (var r = t.parent; null != r && (4 === r.type || 5 === r.type);) r = (t = r).parent;
          if (null == r) {
            var i = n[6];
            return 2 === i.type ? Ci(i, n) : n[0]
          }
          if (t && 5 === t.type && 4 & t.flags) return Mt(t, n).parentNode;
          if (2 & r.flags) {
            var o = e.data,
              a = o[o[r.index].directiveStart].encapsulation;
            if (a !== ut.ShadowDom && a !== ut.Native) return null
          }
          return Mt(r, n)
        }(e, r, t);
        if (null != i) {
          var o = t[11],
            a = function (e, t) {
              if (2 === e.type) {
                var n = ki(e, t);
                return null === n ? null : Ni(n.indexOf(t, 9) - 9, n)
              }
              return 4 === e.type || 5 === e.type ? Mt(e, t) : null
            }(r.parent || t[6], t);
          if (Array.isArray(n))
            for (var s = 0; s < n.length; s++) Pi(o, i, n[s], a);
          else Pi(o, i, n, a)
        }
      }

      function Ni(e, t) {
        var n = 9 + e + 1;
        if (n < t.length) {
          var r = t[n],
            i = r[1].firstChild;
          if (null !== i) return function e(t, n) {
            if (null !== n) {
              var r = n.type;
              if (3 === r) return Mt(n, t);
              if (0 === r) return Ni(-1, t[n.index]);
              if (4 === r || 5 === r) {
                var i = n.child;
                if (null !== i) return e(t, i);
                var o = t[n.index];
                return St(o) ? Ni(-1, o) : Rt(o)
              }
              var a = t[16],
                s = a[6],
                u = Sr(a),
                l = s.projection[n.projection];
              return null != l ? e(u, l) : e(t, n.next)
            }
            return null
          }(r, i)
        }
        return t[7]
      }

      function Mi(e, t, n, r, i, o, a) {
        for (; null != n;) {
          var s = r[n.index],
            u = n.type;
          a && 0 === t && (s && hr(Rt(s), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === u || 5 === u ? (Mi(e, t, n.child, r, i, o, !1), bi(t, e, i, s, o)) : 1 === u ? Vi(e, t, r, n, i, o) : bi(t, e, i, s, o)), n = a ? n.projectionNext : n.next
        }
      }

      function Di(e, t, n, r, i, o) {
        Mi(n, r, e.node.child, t, i, o, !1)
      }

      function Vi(e, t, n, r, i, o) {
        var a = n[16],
          s = a[6].projection[r.projection];
        if (Array.isArray(s))
          for (var u = 0; u < s.length; u++) bi(t, e, i, s[u], o);
        else Mi(e, t, s, a[3], i, o, !0)
      }

      function Li(e, t, n) {
        Pt(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
      }

      function ji(e, t, n) {
        Pt(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
      }
      var Ui, Hi, qi, zi = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
          }
          return _createClass(e, [{
            key: "destroy",
            value: function () {
              if (this._appRef) this._appRef.detachView(this);
              else if (this._viewContainerRef) {
                var e = this._viewContainerRef.indexOf(this);
                e > -1 && this._viewContainerRef.detach(e), this._viewContainerRef = null
              }
              xi(this._lView[1], this._lView)
            }
          }, {
            key: "onDestroy",
            value: function (e) {
              var t, n, r;
              t = this._lView[1], r = e, mi(n = this._lView).push(r), t.firstCreatePass && gi(t).push(n[7].length - 1, null)
            }
          }, {
            key: "markForCheck",
            value: function () {
              hi(this._cdRefInjectingView || this._lView)
            }
          }, {
            key: "detach",
            value: function () {
              this._lView[2] &= -129
            }
          }, {
            key: "reattach",
            value: function () {
              this._lView[2] |= 128
            }
          }, {
            key: "detectChanges",
            value: function () {
              fi(this._lView[1], this._lView, this.context)
            }
          }, {
            key: "checkNoChanges",
            value: function () {
              ! function (e, t, n) {
                Kt(!0);
                try {
                  fi(e, t, n)
                } finally {
                  Kt(!1)
                }
              }(this._lView[1], this._lView, this.context)
            }
          }, {
            key: "attachToViewContainerRef",
            value: function (e) {
              if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
              this._viewContainerRef = e
            }
          }, {
            key: "detachFromAppRef",
            value: function () {
              var e;
              this._appRef = null, Di(this._lView[1], e = this._lView, e[11], 2, null, null)
            }
          }, {
            key: "attachToAppRef",
            value: function (e) {
              if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
              this._appRef = e
            }
          }, {
            key: "rootNodes",
            get: function () {
              var e = this._lView;
              return null == e[0] ? function e(t, n, r, i) {
                for (var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]; null !== r;) {
                  var a = n[r.index];
                  if (null !== a && i.push(Rt(a)), St(a))
                    for (var s = 9; s < a.length; s++) {
                      var u = a[s],
                        l = u[1].firstChild;
                      null !== l && e(u[1], u, l, i)
                    }
                  var c = r.type;
                  if (4 === c || 5 === c) e(t, n, r.child, i);
                  else if (1 === c) {
                    var h = n[16],
                      f = h[6],
                      d = Sr(h),
                      p = f.projection[r.projection];
                    null !== p && null !== d && e(d[1], d, p, i, !0)
                  }
                  r = o ? r.projectionNext : r.next
                }
                return i
              }(e[1], e, e[6].child, []) : []
            }
          }, {
            key: "context",
            get: function () {
              return this._lView[8]
            }
          }, {
            key: "destroyed",
            get: function () {
              return 256 == (256 & this._lView[2])
            }
          }]), e
        }(),
        Gi = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this, e))._view = e, r
          }
          return _createClass(n, [{
            key: "detectChanges",
            value: function () {
              di(this._view)
            }
          }, {
            key: "checkNoChanges",
            value: function () {
              ! function (e) {
                Kt(!0);
                try {
                  di(e)
                } finally {
                  Kt(!1)
                }
              }(this._view)
            }
          }, {
            key: "context",
            get: function () {
              return null
            }
          }]), n
        }(zi);

      function Bi(e, t, n) {
        return Ui || (Ui = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments)
          }
          return n
        }(e)), new Ui(Mt(t, n))
      }

      function Wi(e, t, n, r) {
        return Hi || (Hi = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this))._declarationView = e, o._declarationTContainer = r, o.elementRef = i, o
          }
          return _createClass(n, [{
            key: "createEmbeddedView",
            value: function (e) {
              var t = this._declarationTContainer.tViews,
                n = Mr(this._declarationView, t, e, 16, null, t.node);
              n[17] = this._declarationView[this._declarationTContainer.index];
              var r = this._declarationView[5];
              null !== r && (n[5] = r.createEmbeddedView(t)), Vr(t, n, e);
              var i = new zi(n);
              return i._tViewNode = n[6], i
            }
          }]), n
        }(e)), 0 === n.type ? new Hi(r, n, Bi(t, n, r)) : null
      }

      function $i(e, t, n, r) {
        var i;
        qi || (qi = function (e) {
          _inherits(r, e);
          var n = _createSuper(r);

          function r(e, t, i) {
            var o;
            return _classCallCheck(this, r), (o = n.call(this))._lContainer = e, o._hostTNode = t, o._hostView = i, o
          }
          return _createClass(r, [{
            key: "clear",
            value: function () {
              for (; this.length > 0;) this.remove(this.length - 1)
            }
          }, {
            key: "get",
            value: function (e) {
              return null !== this._lContainer[8] && this._lContainer[8][e] || null
            }
          }, {
            key: "createEmbeddedView",
            value: function (e, t, n) {
              var r = e.createEmbeddedView(t || {});
              return this.insert(r, n), r
            }
          }, {
            key: "createComponent",
            value: function (e, t, n, r, i) {
              var o = n || this.parentInjector;
              if (!i && null == e.ngModule && o) {
                var a = o.get(et, null);
                a && (i = a)
              }
              var s = e.create(o, r, void 0, i);
              return this.insert(s.hostView, t), s
            }
          }, {
            key: "insert",
            value: function (e, t) {
              var n = e._lView,
                r = n[1];
              if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
              if (this.allocateContainerIfNeeded(), St(n[3])) {
                var i = this.indexOf(e);
                if (-1 !== i) this.detach(i);
                else {
                  var o = n[3],
                    a = new qi(o, o[6], o[3]);
                  a.detach(a.indexOf(e))
                }
              }
              var s = this._adjustIndex(t);
              return function (e, t, n, r) {
                var i = 9 + r,
                  o = n.length;
                r > 0 && (n[i - 1][4] = t), r < o - 9 ? (t[4] = n[i], rt(n, 9 + r, t)) : (n.push(t), t[4] = null), t[3] = n;
                var a = t[17];
                null !== a && n !== a && function (e, t) {
                  var n = e[5],
                    r = t[3][3][16];
                  16 != (16 & r[2]) && t[16] !== r && (e[2] |= 1), null === n ? e[5] = [t] : n.push(t)
                }(a, t);
                var s = t[5];
                null !== s && s.insertView(e), t[2] |= 128
              }(r, n, this._lContainer, s), wi(r, n, !0, Ni(s, this._lContainer)), e.attachToViewContainerRef(this), rt(this._lContainer[8], s, e), e
            }
          }, {
            key: "move",
            value: function (e, t) {
              if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
              return this.insert(e, t)
            }
          }, {
            key: "indexOf",
            value: function (e) {
              var t = this._lContainer[8];
              return null !== t ? t.indexOf(e) : -1
            }
          }, {
            key: "remove",
            value: function (e) {
              this.allocateContainerIfNeeded();
              var t = this._adjustIndex(e, -1);
              (function (e, t) {
                var n = Ei(e, t);
                n && xi(n[1], n)
              })(this._lContainer, t), it(this._lContainer[8], t)
            }
          }, {
            key: "detach",
            value: function (e) {
              this.allocateContainerIfNeeded();
              var t = this._adjustIndex(e, -1),
                n = Ei(this._lContainer, t);
              return n && null != it(this._lContainer[8], t) ? new zi(n) : null
            }
          }, {
            key: "_adjustIndex",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return null == e ? this.length + t : e
            }
          }, {
            key: "allocateContainerIfNeeded",
            value: function () {
              null === this._lContainer[8] && (this._lContainer[8] = [])
            }
          }, {
            key: "element",
            get: function () {
              return Bi(t, this._hostTNode, this._hostView)
            }
          }, {
            key: "injector",
            get: function () {
              return new Jn(this._hostTNode, this._hostView)
            }
          }, {
            key: "parentInjector",
            get: function () {
              var e = Hn(this._hostTNode, this._hostView),
                t = In(e, this._hostView),
                n = function (e, t, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    for (var r = n.parent.injectorIndex, i = n.parent; null != i.parent && r == i.parent.injectorIndex;) i = i.parent;
                    return i
                  }
                  for (var o = Tn(e), a = t, s = t[6]; o > 1;) s = (a = a[15])[6], o--;
                  return s
                }(e, this._hostView, this._hostTNode);
              return An(e) && null != n ? new Jn(n, t) : new Jn(null, this._hostView)
            }
          }, {
            key: "length",
            get: function () {
              return this._lContainer.length - 9
            }
          }]), r
        }(e));
        var o = r[n.index];
        if (St(o))(function (e, t) {
          e[2] = -2
        })(i = o);
        else {
          var a;
          if (4 === n.type) a = Rt(o);
          else if (a = r[11].createComment(""), Tt(r)) {
            var s = r[11],
              u = Mt(n, r);
            Ti(s, Fi(s, u), a, function (e, t) {
              return Pt(e) ? e.nextSibling(t) : t.nextSibling
            }(s, u))
          } else Ri(r[1], r, a, n);
          r[n.index] = i = ai(o, r, a, n), ci(r, i)
        }
        return new qi(i, n, r)
      }
      var Zi = function () {
          var e = function e() {
            _classCallCheck(this, e)
          };
          return e.__NG_ELEMENT_ID__ = function () {
            return Qi()
          }, e
        }(),
        Qi = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return function (e, t, n) {
            if (!n && xt(e)) {
              var r = Vt(e.index, t);
              return new zi(r, r)
            }
            return 3 === e.type || 0 === e.type || 4 === e.type || 5 === e.type ? new zi(t[16], t) : null
          }(Zt(), Bt(), e)
        },
        Ji = new He("Set Injector scope."),
        Yi = {},
        Ki = {},
        Xi = [],
        eo = void 0;

      function to() {
        return void 0 === eo && (eo = new Xe), eo
      }

      function no(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = arguments.length > 3 ? arguments[3] : void 0;
        return new ro(e, n, t || to(), r)
      }
      var ro = function () {
        function e(t, n, r) {
          var i = this,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          _classCallCheck(this, e), this.parent = r, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
          var a = [];
          n && nt(n, (function (e) {
            return i.processProvider(e, t, n)
          })), nt([t], (function (e) {
            return i.processInjectorType(e, [], a)
          })), this.records.set(qe, ao(void 0, this));
          var s = this.records.get(Ji);
          this.scope = null != s ? s.value : null, this.source = o || ("object" == typeof t ? null : be(t))
        }
        return _createClass(e, [{
          key: "destroy",
          value: function () {
            this.assertNotDestroyed(), this._destroyed = !0;
            try {
              this.onDestroy.forEach((function (e) {
                return e.ngOnDestroy()
              }))
            } finally {
              this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
            }
          }
        }, {
          key: "get",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : le.Default;
            this.assertNotDestroyed();
            var r, i = $e(this);
            try {
              if (!(n & le.SkipSelf)) {
                var o = this.records.get(e);
                if (void 0 === o) {
                  var a = ("function" == typeof (r = e) || "object" == typeof r && r instanceof He) && pe(e);
                  o = a && this.injectableDefInScope(a) ? ao(io(e), Yi) : null, this.records.set(e, o)
                }
                if (null != o) return this.hydrate(e, o)
              }
              return (n & le.Self ? to() : this.parent).get(e, t = n & le.Optional && t === ze ? null : t)
            } catch (s) {
              if ("NullInjectorError" === s.name) {
                if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(be(e)), i) throw s;
                return function (e, t, n, r) {
                  var i = e.ngTempTokenPath;
                  throw t.__source && i.unshift(t.__source), e.message = function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                    var i = be(t);
                    if (Array.isArray(t)) i = t.map(be).join(" -> ");
                    else if ("object" == typeof t) {
                      var o = [];
                      for (var a in t)
                        if (t.hasOwnProperty(a)) {
                          var s = t[a];
                          o.push(a + ":" + ("string" == typeof s ? JSON.stringify(s) : be(s)))
                        } i = "{".concat(o.join(", "), "}")
                    }
                    return "".concat(n).concat(r ? "(" + r + ")" : "", "[").concat(i, "]: ").concat(e.replace(Ge, "\n  "))
                  }("\n" + e.message, i, "R3InjectorError", r), e.ngTokenPath = i, e.ngTempTokenPath = null, e
                }(s, e, 0, this.source)
              }
              throw s
            } finally {
              $e(i)
            }
          }
        }, {
          key: "_resolveInjectorDefTypes",
          value: function () {
            var e = this;
            this.injectorDefTypes.forEach((function (t) {
              return e.get(t)
            }))
          }
        }, {
          key: "toString",
          value: function () {
            var e = [];
            return this.records.forEach((function (t, n) {
              return e.push(be(n))
            })), "R3Injector[".concat(e.join(", "), "]")
          }
        }, {
          key: "assertNotDestroyed",
          value: function () {
            if (this._destroyed) throw new Error("Injector has already been destroyed.")
          }
        }, {
          key: "processInjectorType",
          value: function (e, t, n) {
            var r = this;
            if (!(e = xe(e))) return !1;
            var i = me(e),
              o = null == i && e.ngModule || void 0,
              a = void 0 === o ? e : o,
              s = -1 !== n.indexOf(a);
            if (void 0 !== o && (i = me(o)), null == i) return !1;
            if (null != i.imports && !s) {
              var u;
              n.push(a);
              try {
                nt(i.imports, (function (e) {
                  r.processInjectorType(e, t, n) && (void 0 === u && (u = []), u.push(e))
                }))
              } finally {}
              if (void 0 !== u)
                for (var l = function (e) {
                    var t = u[e],
                      n = t.ngModule,
                      i = t.providers;
                    nt(i, (function (e) {
                      return r.processProvider(e, n, i || Xi)
                    }))
                  }, c = 0; c < u.length; c++) l(c)
            }
            this.injectorDefTypes.add(a), this.records.set(a, ao(i.factory, Yi));
            var h = i.providers;
            if (null != h && !s) {
              var f = e;
              nt(h, (function (e) {
                return r.processProvider(e, f, h)
              }))
            }
            return void 0 !== o && void 0 !== e.providers
          }
        }, {
          key: "processProvider",
          value: function (e, t, n) {
            var r = uo(e = xe(e)) ? e : xe(e && e.provide),
              i = function (e, t, n) {
                return so(e) ? ao(void 0, e.useValue) : ao(oo(e, t, n), Yi)
              }(e, t, n);
            if (uo(e) || !0 !== e.multi) {
              var o = this.records.get(r);
              o && void 0 !== o.multi && dr()
            } else {
              var a = this.records.get(r);
              a ? void 0 === a.multi && dr() : ((a = ao(void 0, Yi, !0)).factory = function () {
                return Ke(a.multi)
              }, this.records.set(r, a)), r = e, a.multi.push(e)
            }
            this.records.set(r, i)
          }
        }, {
          key: "hydrate",
          value: function (e, t) {
            var n;
            return t.value === Ki ? function (e) {
              throw new Error("Cannot instantiate cyclic dependency! ".concat(e))
            }(be(e)) : t.value === Yi && (t.value = Ki, t.value = t.factory()), "object" == typeof t.value && t.value && null !== (n = t.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(t.value), t.value
          }
        }, {
          key: "injectableDefInScope",
          value: function (e) {
            return !!e.providedIn && ("string" == typeof e.providedIn ? "any" === e.providedIn || e.providedIn === this.scope : this.injectorDefTypes.has(e.providedIn))
          }
        }, {
          key: "destroyed",
          get: function () {
            return this._destroyed
          }
        }]), e
      }();

      function io(e) {
        var t = pe(e),
          n = null !== t ? t.factory : Ct(e);
        if (null !== n) return n;
        var r = me(e);
        if (null !== r) return r.factory;
        if (e instanceof He) throw new Error("Token ".concat(be(e), " is missing a \u0275prov definition."));
        if (e instanceof Function) return function (e) {
          var t = e.length;
          if (t > 0) {
            var n = function (e, t) {
              for (var n = [], r = 0; r < e; r++) n.push("?");
              return n
            }(t);
            throw new Error("Can't resolve all parameters for ".concat(be(e), ": (").concat(n.join(", "), ")."))
          }
          var r = function (e) {
            var t = e && (e[ge] || e[ke] || e[_e] && e[_e]());
            if (t) {
              var n = function (e) {
                if (e.hasOwnProperty("name")) return e.name;
                var t = ("" + e).match(/^function\s*([^\s(]+)/);
                return null === t ? "" : t[1]
              }(e);
              return console.warn('DEPRECATED: DI is instantiating a token "'.concat(n, '" that inherits its @Injectable decorator but does not provide one itself.\n') + 'This will become an error in v10. Please add @Injectable() to the "'.concat(n, '" class.')), t
            }
            return null
          }(e);
          return null !== r ? function () {
            return r.factory(e)
          } : function () {
            return new e
          }
        }(e);
        throw new Error("unreachable")
      }

      function oo(e, t, n) {
        var r, i = void 0;
        if (uo(e)) {
          var o = xe(e);
          return Ct(o) || io(o)
        }
        if (so(e)) i = function () {
          return xe(e.useValue)
        };
        else if ((r = e) && r.useFactory) i = function () {
          return e.useFactory.apply(e, _toConsumableArray(Ke(e.deps || [])))
        };
        else if (function (e) {
            return !(!e || !e.useExisting)
          }(e)) i = function () {
          return Je(xe(e.useExisting))
        };
        else {
          var a = xe(e && (e.useClass || e.provide));
          if (a || function (e, t, n) {
              var r = "";
              throw e && t && (r = " - only instances of Provider and Type are allowed, got: [".concat(t.map((function (e) {
                return e == n ? "?" + n + "?" : "..."
              })).join(", "), "]")), new Error("Invalid provider for the NgModule '".concat(be(e), "'") + r)
            }(t, n, e), ! function (e) {
              return !!e.deps
            }(e)) return Ct(a) || io(a);
          i = function () {
            return _construct(a, _toConsumableArray(Ke(e.deps)))
          }
        }
        return i
      }

      function ao(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return {
          factory: e,
          value: t,
          multi: n ? [] : void 0
        }
      }

      function so(e) {
        return null !== e && "object" == typeof e && Be in e
      }

      function uo(e) {
        return "function" == typeof e
      }
      var lo = function (e, t, n) {
          return function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = no(e, t, n, r);
            return i._resolveInjectorDefTypes(), i
          }({
            name: n
          }, t, e, n)
        },
        co = function () {
          var e = function () {
            function e() {
              _classCallCheck(this, e)
            }
            return _createClass(e, null, [{
              key: "create",
              value: function (e, t) {
                return Array.isArray(e) ? lo(e, t, "") : lo(e.providers, e.parent, e.name || "")
              }
            }]), e
          }();
          return e.THROW_IF_NOT_FOUND = ze, e.NULL = new Xe, e.\u0275prov = fe({
            token: e,
            providedIn: "any",
            factory: function () {
              return Je(qe)
            }
          }), e.__NG_ELEMENT_ID__ = -1, e
        }(),
        ho = new He("AnalyzeForEntryComponents"),
        fo = new Map,
        po = new Set;

      function vo(e) {
        return "string" == typeof e ? e : e.text()
      }

      function mo(e, t) {
        for (var n = e.styles, r = e.classes, i = 0, o = 0; o < t.length; o++) {
          var a = t[o];
          "number" == typeof a ? i = a : 1 == i ? r = we(r, a) : 2 == i && (n = we(n, a + ": " + t[++o] + ";"))
        }
        null !== n && (e.styles = n), null !== r && (e.classes = r)
      }
      var go = null;

      function yo() {
        if (!go) {
          var e = Re.Symbol;
          if (e && e.iterator) go = e.iterator;
          else
            for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) {
              var r = t[n];
              "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (go = r)
            }
        }
        return go
      }

      function _o(e, t) {
        return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
      }
      var ko = function () {
        function e(t) {
          _classCallCheck(this, e), this.wrapped = t
        }
        return _createClass(e, null, [{
          key: "wrap",
          value: function (t) {
            return new e(t)
          }
        }, {
          key: "unwrap",
          value: function (t) {
            return e.isWrapped(t) ? t.wrapped : t
          }
        }, {
          key: "isWrapped",
          value: function (t) {
            return t instanceof e
          }
        }]), e
      }();

      function Co(e) {
        return !!bo(e) && (Array.isArray(e) || !(e instanceof Map) && yo() in e)
      }

      function bo(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e)
      }

      function wo(e, t, n) {
        return e[t] = n
      }

      function So(e, t, n) {
        return !Object.is(e[t], n) && (e[t] = n, !0)
      }

      function Eo(e, t, n, r) {
        var i = Bt();
        return So(i, en(), t) && (Wt(), function (e, t, n, r, i, o) {
          var a = Mt(e, t),
            s = t[11];
          if (null == r) Pt(s) ? s.removeAttribute(a, n, o) : a.removeAttribute(n);
          else {
            var u = null == i ? Pn(r) : i(r, e.tagName || "", n);
            Pt(s) ? s.setAttribute(a, n, u, o) : o ? a.setAttributeNS(o, n, u) : a.setAttribute(n, u)
          }
        }(pn(), i, e, t, n, r)), Eo
      }

      function xo(e, t, n, r) {
        return So(e, en(), n) ? t + Pn(n) + r : wr
      }

      function Ao(e, t, n, r, i, o, a, s) {
        var u = Bt(),
          l = Wt(),
          c = e + 19,
          h = l.firstCreatePass ? function (e, t, n, r, i, o, a, s, u) {
            var l = t.consts,
              c = Dr(t, n[6], e, 0, a || null, Ht(l, s));
            Zr(t, n, c, Ht(l, u)), vn(t, c);
            var h = c.tViews = Gr(2, -1, r, i, o, t.directiveRegistry, t.pipeRegistry, null, t.schemas, l),
              f = Br(0, null, 2, -1, null, null);
            return f.injectorIndex = c.injectorIndex, h.node = f, null !== t.queries && (t.queries.template(t, c), h.queries = t.queries.embeddedTView(c)), c
          }(e, l, u, t, n, r, i, o, a) : l.data[c];
        Qt(h, !1);
        var f = u[11].createComment("");
        Ri(l, u, f, h), hr(f, u), ci(u, u[c] = ai(f, u, f, h)), At(h) && Hr(l, u, h), null != a && qr(u, h, s)
      }

      function Oo(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le.Default,
          n = Bt();
        return null == n ? Je(e, t) : zn(Zt(), n, xe(e), t)
      }

      function To(e) {
        return function (e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          var n = e.attrs;
          if (n)
            for (var r = n.length, i = 0; i < r;) {
              var o = n[i];
              if (wn(o)) break;
              if (0 === o) i += 2;
              else if ("number" == typeof o)
                for (i++; i < r && "string" == typeof n[i];) i++;
              else {
                if (o === t) return n[i + 1];
                i += 2
              }
            }
          return null
        }(Zt(), e)
      }

      function Io() {
        throw new Error("invalid")
      }

      function Po(e, t, n) {
        var r = Bt();
        return So(r, en(), t) && $r(Wt(), pn(), r, e, t, r[11], n, !1), Po
      }

      function Fo(e, t, n, r, i) {
        var o = i ? "class" : "style";
        _i(e, n, t.inputs[o], o, r)
      }

      function Ro(e, t, n, r) {
        var i = Bt(),
          o = Wt(),
          a = 19 + e,
          s = i[11],
          u = i[a] = Nr(t, s, zt.lFrame.currentNamespace),
          l = o.firstCreatePass ? function (e, t, n, r, i, o, a) {
            var s = t.consts,
              u = Ht(s, o),
              l = Dr(t, n[6], e, 3, i, u);
            return Zr(t, n, l, Ht(s, a)), null !== l.mergedAttrs && mo(l, l.mergedAttrs), null !== t.queries && t.queries.elementStart(t, l), l
          }(e, o, i, 0, t, n, r) : o.data[a];
        Qt(l, !0);
        var c = l.mergedAttrs;
        null !== c && bn(s, u, c);
        var h = l.classes;
        null !== h && ji(s, u, h);
        var f = l.styles;
        null !== f && Li(s, u, f), Ri(o, i, u, l), 0 === zt.lFrame.elementDepthCount && hr(u, i), zt.lFrame.elementDepthCount++, At(l) && (Hr(o, i, l), function (e, t, n) {
          if (Et(t))
            for (var r = t.directiveEnd, i = t.directiveStart; i < r; i++) {
              var o = e.data[i];
              o.contentQueries && o.contentQueries(1, n[i], i)
            }
        }(o, l, i)), null !== r && qr(i, l)
      }

      function No() {
        var e = Zt();
        Jt() ? zt.lFrame.isParent = !1 : Qt(e = e.parent, !1);
        var t = e;
        zt.lFrame.elementDepthCount--;
        var n = Wt();
        n.firstCreatePass && (vn(n, e), Et(e) && n.queries.elementEnd(e)), null !== t.classes && function (e) {
          return 0 != (16 & e.flags)
        }(t) && Fo(n, t, Bt(), t.classes, !0), null !== t.styles && function (e) {
          return 0 != (32 & e.flags)
        }(t) && Fo(n, t, Bt(), t.styles, !1)
      }

      function Mo(e, t, n, r) {
        Ro(e, t, n, r), No()
      }

      function Do() {
        return Bt()
      }

      function Vo(e) {
        return !!e && "function" == typeof e.then
      }

      function Lo(e) {
        return !!e && "function" == typeof e.subscribe
      }

      function jo(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = Bt(),
          o = Wt(),
          a = Zt();
        return function (e, t, n, r, i, o) {
          var a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            s = arguments.length > 7 ? arguments[7] : void 0,
            u = At(r),
            l = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
            c = mi(t),
            h = !0;
          if (3 === r.type) {
            var f = Mt(r, t),
              d = s ? s(f) : lt,
              p = d.target || f,
              v = c.length,
              m = s ? function (e) {
                return s(Rt(e[r.index])).target
              } : r.index;
            if (Pt(n)) {
              var g = null;
              if (!s && u && (g = function (e, t, n, r) {
                  var i = e.cleanup;
                  if (null != i)
                    for (var o = 0; o < i.length - 1; o += 2) {
                      var a = i[o];
                      if (a === n && i[o + 1] === r) {
                        var s = t[7],
                          u = i[o + 2];
                        return s.length > u ? s[u] : null
                      }
                      "string" == typeof a && (o += 2)
                    }
                  return null
                }(e, t, i, r.index)), null !== g)(g.__ngLastListenerFn__ || g).__ngNextListenerFn__ = o, g.__ngLastListenerFn__ = o, h = !1;
              else {
                o = Ho(r, t, o, !1);
                var y = n.listen(d.name || p, i, o);
                c.push(o, y), l && l.push(i, m, v, v + 1)
              }
            } else o = Ho(r, t, o, !0), p.addEventListener(i, o, a), c.push(o), l && l.push(i, m, v, a)
          }
          var _, k = r.outputs;
          if (h && null !== k && (_ = k[i])) {
            var C = _.length;
            if (C)
              for (var b = 0; b < C; b += 2) {
                var w = t[_[b]][_[b + 1]].subscribe(o),
                  S = c.length;
                c.push(o, w), l && l.push(i, r.index, S, -(S + 1))
              }
          }
        }(o, i, i[11], a, e, t, n, r), jo
      }

      function Uo(e, t, n) {
        try {
          return !1 !== t(n)
        } catch (r) {
          return yi(e, r), !1
        }
      }

      function Ho(e, t, n, r) {
        return function i(o) {
          if (o === Function) return n;
          var a = 2 & e.flags ? Vt(e.index, t) : t;
          0 == (32 & t[2]) && hi(a);
          for (var s = Uo(t, n, o), u = i.__ngNextListenerFn__; u;) s = Uo(t, u, o) && s, u = u.__ngNextListenerFn__;
          return r && !1 === s && (o.preventDefault(), o.returnValue = !1), s
        }
      }

      function qo() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return function (e) {
          return (zt.lFrame.contextLView = function (e, t) {
            for (; e > 0;) t = t[15], e--;
            return t
          }(e, zt.lFrame.contextLView))[8]
        }(e)
      }

      function zo(e, t, n, r, i) {
        var o = Bt(),
          a = xo(o, t, n, r);
        return a !== wr && $r(Wt(), pn(), o, e, a, o[11], i, !1), zo
      }
      var Go = [];

      function Bo(e, t, n, r, i) {
        for (var o = e[n + 1], a = null === t, s = r ? Or(o) : Ir(o), u = !1; 0 !== s && (!1 === u || a);) {
          var l = e[s + 1];
          Wo(e[s], t) && (u = !0, e[s + 1] = r ? Fr(l) : Tr(l)), s = r ? Or(l) : Ir(l)
        }
        u && (e[n + 1] = r ? Tr(o) : Fr(o))
      }

      function Wo(e, t) {
        return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && at(e, t) >= 0
      }

      function $o(e, t) {
        return function (e, t, n, r) {
          var i, o, a, s = Bt(),
            u = Wt(),
            l = (i = zt.lFrame, o = i.bindingIndex, i.bindingIndex = i.bindingIndex + 2, o);
          (u.firstUpdatePass && function (e, t, n, r) {
            var i = e.data;
            if (null === i[n + 1]) {
              var o = i[fn() + 19],
                a = function (e, t) {
                  return t >= e.expandoStartIndex
                }(e, n);
              (function (e, t) {
                return 0 != (16 & e.flags)
              })(o) && null === t && !a && (t = !1), t = function (e, t, n, r) {
                  var i = function (e) {
                      var t = zt.lFrame.currentDirectiveIndex;
                      return -1 === t ? null : e[t]
                    }(e),
                    o = t.residualClasses;
                  if (null === i) 0 === t.classBindings && (n = Qo(n = Zo(null, e, t, n, !0), t.attrs, !0), o = null);
                  else {
                    var a = t.directiveStylingLast;
                    if (-1 === a || e[a] !== i)
                      if (n = Zo(i, e, t, n, !0), null === o) {
                        var s = function (e, t, n) {
                          var r = t.classBindings;
                          if (0 !== Ir(r)) return e[Or(r)]
                        }(e, t);
                        void 0 !== s && Array.isArray(s) && function (e, t, n, r) {
                          e[Or(t.classBindings)] = r
                        }(e, t, 0, s = Qo(s = Zo(null, e, t, s[1], !0), t.attrs, !0))
                      } else o = function (e, t, n) {
                        for (var r = void 0, i = t.directiveEnd, o = 1 + t.directiveStylingLast; o < i; o++) r = Qo(r, e[o].hostAttrs, !0);
                        return Qo(r, t.attrs, !0)
                      }(e, t)
                  }
                  return void 0 !== o && (t.residualClasses = o), n
                }(i, o, t),
                function (e, t, n, r, i, o) {
                  var a = t.classBindings,
                    s = Or(a),
                    u = Ir(a);
                  e[r] = n;
                  var l, c = !1;
                  if (Array.isArray(n)) {
                    var h = n;
                    (null === (l = h[1]) || at(h, l) > 0) && (c = !0)
                  } else l = n;
                  if (i)
                    if (0 !== u) {
                      var f = Or(e[s + 1]);
                      e[r + 1] = Ar(f, s), 0 !== f && (e[f + 1] = Pr(e[f + 1], r)), e[s + 1] = 131071 & e[s + 1] | r << 17
                    } else e[r + 1] = Ar(s, 0), 0 !== s && (e[s + 1] = Pr(e[s + 1], r)), s = r;
                  else e[r + 1] = Ar(u, 0), 0 === s ? s = r : e[u + 1] = Pr(e[u + 1], r), u = r;
                  c && (e[r + 1] = Tr(e[r + 1])), Bo(e, l, r, !0), Bo(e, l, r, !1),
                    function (e, t, n, r, i) {
                      var o = e.residualClasses;
                      null != o && "string" == typeof t && at(o, t) >= 0 && (n[r + 1] = Fr(n[r + 1]))
                    }(t, l, e, r), a = Ar(s, u), t.classBindings = a
                }(i, o, t, n, a)
            }
          }(u, e, l), t !== wr && So(s, l, t)) && (null == n && (a = function () {
            var e = zt.lFrame;
            return null === e ? null : e.currentSanitizer
          }()) && (n = a), function (e, t, n, r, i, o, a, s) {
            if (3 === t.type) {
              var u = e.data,
                l = u[s + 1];
              Yo(1 == (1 & l) ? Jo(u, t, n, i, Ir(l), !0) : void 0) || (Yo(o) || 2 == (2 & l) && (o = Jo(u, null, n, i, s, !0)), function (e, t, n, r, i) {
                var o = Pt(e);
                i ? o ? e.addClass(n, r) : n.classList.add(r) : o ? e.removeClass(n, r) : n.classList.remove(r)
              }(r, 0, Nt(fn(), n), i, o))
            }
          }(u, u.data[fn() + 19], s, s[11], e, s[l + 1] = function (e, t) {
            return null == e || ("function" == typeof t ? e = t(e) : "string" == typeof t ? e += t : "object" == typeof e && (e = be(rr(e)))), e
          }(t, n), 0, l))
        }(e, t, null), $o
      }

      function Zo(e, t, n, r, i) {
        var o = null,
          a = n.directiveEnd,
          s = n.directiveStylingLast;
        for (-1 === s ? s = n.directiveStart : s++; s < a && (r = Qo(r, (o = t[s]).hostAttrs, i), o !== e);) s++;
        return null !== e && (n.directiveStylingLast = s), r
      }

      function Qo(e, t, n) {
        var r, i, o, a, s = n ? 1 : 2,
          u = -1;
        if (null !== t)
          for (var l = 0; l < t.length; l++) {
            var c = t[l];
            "number" == typeof c ? u = c : u === s && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), r = e, i = c, o = !!n || t[++l], a = void 0, (a = at(r, i)) >= 0 ? r[1 | a] = o : function (e, t, n, r) {
              var i = e.length;
              if (i == t) e.push(n, r);
              else if (1 === i) e.push(r, e[0]), e[0] = n;
              else {
                for (i--, e.push(e[i - 1], e[i]); i > t;) e[i] = e[i - 2], i--;
                e[t] = n, e[t + 1] = r
              }
            }(r, a = ~a, i, o))
          }
        return void 0 === e ? null : e
      }

      function Jo(e, t, n, r, i, o) {
        for (var a = null === t, s = void 0; i > 0;) {
          var u = e[i],
            l = Array.isArray(u),
            c = l ? u[1] : u,
            h = null === c,
            f = n[i + 1];
          f === wr && (f = h ? Go : void 0);
          var d = h ? ot(f, r) : c === r ? f : void 0;
          if (l && !Yo(d) && (d = ot(u, r)), Yo(d) && (s = d, a)) return s;
          var p = e[i + 1];
          i = a ? Or(p) : Ir(p)
        }
        if (null !== t) {
          var v = o ? t.residualClasses : t.residualStyles;
          null != v && (s = ot(v, r))
        }
        return s
      }

      function Yo(e) {
        return void 0 !== e
      }

      function Ko(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = Bt(),
          r = Wt(),
          i = e + 19,
          o = r.firstCreatePass ? Dr(r, n[6], e, 3, null, null) : r.data[i],
          a = n[i] = function (e, t) {
            return Pt(t) ? t.createText(e) : t.createTextNode(e)
          }(t, n[11]);
        Ri(r, n, a, o), Qt(o, !1)
      }

      function Xo(e) {
        return ea("", e, ""), Xo
      }

      function ea(e, t, n) {
        var r = Bt(),
          i = xo(r, e, t, n);
        return i !== wr && function (e, t, n) {
          var r = Nt(t, e),
            i = e[11];
          Pt(i) ? i.setValue(r, n) : r.textContent = n
        }(r, fn(), i), ea
      }

      function ta(e, t, n) {
        var r = Bt();
        return So(r, en(), t) && $r(Wt(), pn(), r, e, t, r[11], n, !0), ta
      }

      function na(e, t) {
        var n = Lt(e)[1],
          r = n.data.length - 1;
        vn(n, {
          directiveStart: r,
          directiveEnd: r + 1
        })
      }

      function ra(e) {
        for (var t = Object.getPrototypeOf(e.type.prototype).constructor, n = !0, r = [e]; t;) {
          var i = void 0;
          if (Ot(e)) i = t.\u0275cmp || t.\u0275dir;
          else {
            if (t.\u0275cmp) throw new Error("Directives cannot inherit Components");
            i = t.\u0275dir
          }
          if (i) {
            if (n) {
              r.push(i);
              var o = e;
              o.inputs = ia(e.inputs), o.declaredInputs = ia(e.declaredInputs), o.outputs = ia(e.outputs);
              var a = i.hostBindings;
              a && sa(e, a);
              var s = i.viewQuery,
                u = i.contentQueries;
              if (s && oa(e, s), u && aa(e, u), he(e.inputs, i.inputs), he(e.declaredInputs, i.declaredInputs), he(e.outputs, i.outputs), Ot(i) && i.data.animation) {
                var l = e.data;
                l.animation = (l.animation || []).concat(i.data.animation)
              }
              o.afterContentChecked = o.afterContentChecked || i.afterContentChecked, o.afterContentInit = e.afterContentInit || i.afterContentInit, o.afterViewChecked = e.afterViewChecked || i.afterViewChecked, o.afterViewInit = e.afterViewInit || i.afterViewInit, o.doCheck = e.doCheck || i.doCheck, o.onDestroy = e.onDestroy || i.onDestroy, o.onInit = e.onInit || i.onInit
            }
            var c = i.features;
            if (c)
              for (var h = 0; h < c.length; h++) {
                var f = c[h];
                f && f.ngInherit && f(e), f === ra && (n = !1)
              }
          }
          t = Object.getPrototypeOf(t)
        }! function (e) {
          for (var t = 0, n = null, r = e.length - 1; r >= 0; r--) {
            var i = e[r];
            i.hostVars = t += i.hostVars, i.hostAttrs = En(i.hostAttrs, n = En(n, i.hostAttrs))
          }
        }(r)
      }

      function ia(e) {
        return e === lt ? {} : e === ct ? [] : e
      }

      function oa(e, t) {
        var n = e.viewQuery;
        e.viewQuery = n ? function (e, r) {
          t(e, r), n(e, r)
        } : t
      }

      function aa(e, t) {
        var n = e.contentQueries;
        e.contentQueries = n ? function (e, r, i) {
          t(e, r, i), n(e, r, i)
        } : t
      }

      function sa(e, t) {
        var n = e.hostBindings;
        e.hostBindings = n ? function (e, r) {
          t(e, r), n(e, r)
        } : t
      }
      var ua = function () {
        function e(t, n, r) {
          _classCallCheck(this, e), this.previousValue = t, this.currentValue = n, this.firstChange = r
        }
        return _createClass(e, [{
          key: "isFirstChange",
          value: function () {
            return this.firstChange
          }
        }]), e
      }();

      function la(e) {
        e.type.prototype.ngOnChanges && (e.setInput = ca, e.onChanges = function () {
          var e = ha(this),
            t = e && e.current;
          if (t) {
            var n = e.previous;
            if (n === lt) e.previous = t;
            else
              for (var r in t) n[r] = t[r];
            e.current = null, this.ngOnChanges(t)
          }
        })
      }

      function ca(e, t, n, r) {
        var i = ha(e) || function (e, t) {
            return e.__ngSimpleChanges__ = t
          }(e, {
            previous: lt,
            current: null
          }),
          o = i.current || (i.current = {}),
          a = i.previous,
          s = this.declaredInputs[n],
          u = a[s];
        o[s] = new ua(u && u.currentValue, t, a === lt), e[r] = t
      }

      function ha(e) {
        return e.__ngSimpleChanges__ || null
      }

      function fa(e, t, n, r, i) {
        if (e = xe(e), Array.isArray(e))
          for (var o = 0; o < e.length; o++) fa(e[o], t, n, r, i);
        else {
          var a = Wt(),
            s = Bt(),
            u = uo(e) ? e : xe(e.provide),
            l = oo(e),
            c = Zt(),
            h = 65535 & c.providerIndexes,
            f = c.directiveStart,
            d = c.providerIndexes >> 16;
          if (uo(e) || !e.multi) {
            var p = new Cn(l, i, Oo),
              v = va(u, t, i ? h : h + d, f); - 1 === v ? (qn(Ln(c, s), a, u), da(a, e, t.length), t.push(u), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(p), s.push(p)) : (n[v] = p, s[v] = p)
          } else {
            var m = va(u, t, h + d, f),
              g = va(u, t, h, h + d),
              y = m >= 0 && n[m],
              _ = g >= 0 && n[g];
            if (i && !_ || !i && !y) {
              qn(Ln(c, s), a, u);
              var k = function (e, t, n, r, i) {
                var o = new Cn(e, n, Oo);
                return o.multi = [], o.index = t, o.componentProviders = 0, pa(o, i, r && !n), o
              }(i ? ga : ma, n.length, i, r, l);
              !i && _ && (n[g].providerFactory = k), da(a, e, t.length), t.push(u), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 65536), n.push(k), s.push(k)
            } else da(a, e, m > -1 ? m : g), pa(n[i ? g : m], l, !i && r);
            !i && r && _ && n[g].componentProviders++
          }
        }
      }

      function da(e, t, n) {
        if (uo(t) || t.useClass) {
          var r = (t.useClass || t).prototype.ngOnDestroy;
          r && (e.destroyHooks || (e.destroyHooks = [])).push(n, r)
        }
      }

      function pa(e, t, n) {
        e.multi.push(t), n && e.componentProviders++
      }

      function va(e, t, n, r) {
        for (var i = n; i < r; i++)
          if (t[i] === e) return i;
        return -1
      }

      function ma(e, t, n, r) {
        return ya(this.multi, [])
      }

      function ga(e, t, n, r) {
        var i, o = this.multi;
        if (this.providerFactory) {
          var a = this.providerFactory.componentProviders,
            s = $n(n, n[1], this.providerFactory.index, r);
          ya(o, i = s.slice(0, a));
          for (var u = a; u < s.length; u++) i.push(s[u])
        } else ya(o, i = []);
        return i
      }

      function ya(e, t) {
        for (var n = 0; n < e.length; n++) t.push((0, e[n])());
        return t
      }

      function _a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return function (n) {
          n.providersResolver = function (n, r) {
            return function (e, t, n) {
              var r = Wt();
              if (r.firstCreatePass) {
                var i = Ot(e);
                fa(n, r.data, r.blueprint, i, !0), fa(t, r.data, r.blueprint, i, !1)
              }
            }(n, r ? r(e) : e, t)
          }
        }
      }
      la.ngInherit = !0;
      var ka = function e() {
          _classCallCheck(this, e)
        },
        Ca = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "resolveComponentFactory",
            value: function (e) {
              throw function (e) {
                var t = Error("No component factory found for ".concat(be(e), ". Did you add it to @NgModule.entryComponents?"));
                return t.ngComponent = e, t
              }(e)
            }
          }]), e
        }(),
        ba = function () {
          var e = function e() {
            _classCallCheck(this, e)
          };
          return e.NULL = new Ca, e
        }(),
        wa = function () {
          var e = function e(t) {
            _classCallCheck(this, e), this.nativeElement = t
          };
          return e.__NG_ELEMENT_ID__ = function () {
            return Sa(e)
          }, e
        }(),
        Sa = function (e) {
          return Bi(e, Zt(), Bt())
        },
        Ea = function e() {
          _classCallCheck(this, e)
        },
        xa = function () {
          var e = {
            Important: 1,
            DashCase: 2
          };
          return e[e.Important] = "Important", e[e.DashCase] = "DashCase", e
        }(),
        Aa = function () {
          var e = function e() {
            _classCallCheck(this, e)
          };
          return e.__NG_ELEMENT_ID__ = function () {
            return Oa()
          }, e
        }(),
        Oa = function () {
          var e = Bt(),
            t = Vt(Zt().index, e);
          return function (e) {
            var t = e[11];
            if (Pt(t)) return t;
            throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
          }(wt(t) ? t : e)
        },
        Ta = function () {
          var e = function e() {
            _classCallCheck(this, e)
          };
          return e.\u0275prov = fe({
            token: e,
            providedIn: "root",
            factory: function () {
              return null
            }
          }), e
        }(),
        Ia = new function e(t) {
          _classCallCheck(this, e), this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
        }("9.1.0"),
        Pa = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "supports",
            value: function (e) {
              return Co(e)
            }
          }, {
            key: "create",
            value: function (e) {
              return new Ra(e)
            }
          }]), e
        }(),
        Fa = function (e, t) {
          return t
        },
        Ra = function () {
          function e(t) {
            _classCallCheck(this, e), this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Fa
          }
          return _createClass(e, [{
            key: "forEachItem",
            value: function (e) {
              var t;
              for (t = this._itHead; null !== t; t = t._next) e(t)
            }
          }, {
            key: "forEachOperation",
            value: function (e) {
              for (var t = this._itHead, n = this._removalsHead, r = 0, i = null; t || n;) {
                var o = !n || t && t.currentIndex < Va(n, r, i) ? t : n,
                  a = Va(o, r, i),
                  s = o.currentIndex;
                if (o === n) r--, n = n._nextRemoved;
                else if (t = t._next, null == o.previousIndex) r++;
                else {
                  i || (i = []);
                  var u = a - r,
                    l = s - r;
                  if (u != l) {
                    for (var c = 0; c < u; c++) {
                      var h = c < i.length ? i[c] : i[c] = 0,
                        f = h + c;
                      l <= f && f < u && (i[c] = h + 1)
                    }
                    i[o.previousIndex] = l - u
                  }
                }
                a !== s && e(o, a, s)
              }
            }
          }, {
            key: "forEachPreviousItem",
            value: function (e) {
              var t;
              for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
            }
          }, {
            key: "forEachAddedItem",
            value: function (e) {
              var t;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
            }
          }, {
            key: "forEachMovedItem",
            value: function (e) {
              var t;
              for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
            }
          }, {
            key: "forEachRemovedItem",
            value: function (e) {
              var t;
              for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
            }
          }, {
            key: "forEachIdentityChange",
            value: function (e) {
              var t;
              for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
            }
          }, {
            key: "diff",
            value: function (e) {
              if (null == e && (e = []), !Co(e)) throw new Error("Error trying to diff '".concat(be(e), "'. Only arrays and iterables are allowed"));
              return this.check(e) ? this : null
            }
          }, {
            key: "onDestroy",
            value: function () {}
          }, {
            key: "check",
            value: function (e) {
              var t = this;
              this._reset();
              var n, r, i, o = this._itHead,
                a = !1;
              if (Array.isArray(e)) {
                this.length = e.length;
                for (var s = 0; s < this.length; s++) r = e[s], i = this._trackByFn(s, r), null !== o && _o(o.trackById, i) ? (a && (o = this._verifyReinsertion(o, r, i, s)), _o(o.item, r) || this._addIdentityChange(o, r)) : (o = this._mismatch(o, r, i, s), a = !0), o = o._next
              } else n = 0,
                function (e, t) {
                  if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++) t(e[n]);
                  else
                    for (var r, i = e[yo()](); !(r = i.next()).done;) t(r.value)
                }(e, (function (e) {
                  i = t._trackByFn(n, e), null !== o && _o(o.trackById, i) ? (a && (o = t._verifyReinsertion(o, e, i, n)), _o(o.item, e) || t._addIdentityChange(o, e)) : (o = t._mismatch(o, e, i, n), a = !0), o = o._next, n++
                })), this.length = n;
              return this._truncate(o), this.collection = e, this.isDirty
            }
          }, {
            key: "_reset",
            value: function () {
              if (this.isDirty) {
                var e, t;
                for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
              }
            }
          }, {
            key: "_mismatch",
            value: function (e, t, n, r) {
              var i;
              return null === e ? i = this._itTail : (i = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (_o(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, i, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (_o(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, i, r)) : e = this._addAfter(new Na(t, n), i, r), e
            }
          }, {
            key: "_verifyReinsertion",
            value: function (e, t, n, r) {
              var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
              return null !== i ? e = this._reinsertAfter(i, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
            }
          }, {
            key: "_truncate",
            value: function (e) {
              for (; null !== e;) {
                var t = e._next;
                this._addToRemovals(this._unlink(e)), e = t
              }
              null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }
          }, {
            key: "_reinsertAfter",
            value: function (e, t, n) {
              null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
              var r = e._prevRemoved,
                i = e._nextRemoved;
              return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
            }
          }, {
            key: "_moveAfter",
            value: function (e, t, n) {
              return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
            }
          }, {
            key: "_addAfter",
            value: function (e, t, n) {
              return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
            }
          }, {
            key: "_insertAfter",
            value: function (e, t, n) {
              var r = null === t ? this._itHead : t._next;
              return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new Da), this._linkedRecords.put(e), e.currentIndex = n, e
            }
          }, {
            key: "_remove",
            value: function (e) {
              return this._addToRemovals(this._unlink(e))
            }
          }, {
            key: "_unlink",
            value: function (e) {
              null !== this._linkedRecords && this._linkedRecords.remove(e);
              var t = e._prev,
                n = e._next;
              return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
            }
          }, {
            key: "_addToMoves",
            value: function (e, t) {
              return e.previousIndex === t || (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e), e
            }
          }, {
            key: "_addToRemovals",
            value: function (e) {
              return null === this._unlinkedRecords && (this._unlinkedRecords = new Da), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
            }
          }, {
            key: "_addIdentityChange",
            value: function (e, t) {
              return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
            }
          }, {
            key: "isDirty",
            get: function () {
              return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }
          }]), e
        }(),
        Na = function e(t, n) {
          _classCallCheck(this, e), this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
        },
        Ma = function () {
          function e() {
            _classCallCheck(this, e), this._head = null, this._tail = null
          }
          return _createClass(e, [{
            key: "add",
            value: function (e) {
              null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
            }
          }, {
            key: "get",
            value: function (e, t) {
              var n;
              for (n = this._head; null !== n; n = n._nextDup)
                if ((null === t || t <= n.currentIndex) && _o(n.trackById, e)) return n;
              return null
            }
          }, {
            key: "remove",
            value: function (e) {
              var t = e._prevDup,
                n = e._nextDup;
              return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
            }
          }]), e
        }(),
        Da = function () {
          function e() {
            _classCallCheck(this, e), this.map = new Map
          }
          return _createClass(e, [{
            key: "put",
            value: function (e) {
              var t = e.trackById,
                n = this.map.get(t);
              n || (n = new Ma, this.map.set(t, n)), n.add(e)
            }
          }, {
            key: "get",
            value: function (e, t) {
              var n = this.map.get(e);
              return n ? n.get(e, t) : null
            }
          }, {
            key: "remove",
            value: function (e) {
              var t = e.trackById;
              return this.map.get(t).remove(e) && this.map.delete(t), e
            }
          }, {
            key: "clear",
            value: function () {
              this.map.clear()
            }
          }, {
            key: "isEmpty",
            get: function () {
              return 0 === this.map.size
            }
          }]), e
        }();

      function Va(e, t, n) {
        var r = e.previousIndex;
        if (null === r) return r;
        var i = 0;
        return n && r < n.length && (i = n[r]), r + t + i
      }
      var La = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "supports",
            value: function (e) {
              return e instanceof Map || bo(e)
            }
          }, {
            key: "create",
            value: function () {
              return new ja
            }
          }]), e
        }(),
        ja = function () {
          function e() {
            _classCallCheck(this, e), this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
          }
          return _createClass(e, [{
            key: "forEachItem",
            value: function (e) {
              var t;
              for (t = this._mapHead; null !== t; t = t._next) e(t)
            }
          }, {
            key: "forEachPreviousItem",
            value: function (e) {
              var t;
              for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
            }
          }, {
            key: "forEachChangedItem",
            value: function (e) {
              var t;
              for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
            }
          }, {
            key: "forEachAddedItem",
            value: function (e) {
              var t;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
            }
          }, {
            key: "forEachRemovedItem",
            value: function (e) {
              var t;
              for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
            }
          }, {
            key: "diff",
            value: function (e) {
              if (e) {
                if (!(e instanceof Map || bo(e))) throw new Error("Error trying to diff '".concat(be(e), "'. Only maps and objects are allowed"))
              } else e = new Map;
              return this.check(e) ? this : null
            }
          }, {
            key: "onDestroy",
            value: function () {}
          }, {
            key: "check",
            value: function (e) {
              var t = this;
              this._reset();
              var n = this._mapHead;
              if (this._appendAfter = null, this._forEach(e, (function (e, r) {
                  if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next;
                  else {
                    var i = t._getOrCreateRecordForKey(r, e);
                    n = t._insertBeforeOrAppend(n, i)
                  }
                })), n) {
                n._prev && (n._prev._next = null), this._removalsHead = n;
                for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
              }
              return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
            }
          }, {
            key: "_insertBeforeOrAppend",
            value: function (e, t) {
              if (e) {
                var n = e._prev;
                return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
              }
              return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
            }
          }, {
            key: "_getOrCreateRecordForKey",
            value: function (e, t) {
              if (this._records.has(e)) {
                var n = this._records.get(e);
                this._maybeAddToChanges(n, t);
                var r = n._prev,
                  i = n._next;
                return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
              }
              var o = new Ua(e);
              return this._records.set(e, o), o.currentValue = t, this._addToAdditions(o), o
            }
          }, {
            key: "_reset",
            value: function () {
              if (this.isDirty) {
                var e;
                for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
              }
            }
          }, {
            key: "_maybeAddToChanges",
            value: function (e, t) {
              _o(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
            }
          }, {
            key: "_addToAdditions",
            value: function (e) {
              null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
            }
          }, {
            key: "_addToChanges",
            value: function (e) {
              null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
            }
          }, {
            key: "_forEach",
            value: function (e, t) {
              e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((function (n) {
                return t(e[n], n)
              }))
            }
          }, {
            key: "isDirty",
            get: function () {
              return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }
          }]), e
        }(),
        Ua = function e(t) {
          _classCallCheck(this, e), this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
        },
        Ha = function () {
          var e = function () {
            function e(t) {
              _classCallCheck(this, e), this.factories = t
            }
            return _createClass(e, [{
              key: "find",
              value: function (e) {
                var t, n = this.factories.find((function (t) {
                  return t.supports(e)
                }));
                if (null != n) return n;
                throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'"))
              }
            }], [{
              key: "create",
              value: function (t, n) {
                if (null != n) {
                  var r = n.factories.slice();
                  t = t.concat(r)
                }
                return new e(t)
              }
            }, {
              key: "extend",
              value: function (t) {
                return {
                  provide: e,
                  useFactory: function (n) {
                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                    return e.create(t, n)
                  },
                  deps: [
                    [e, new ue, new ae]
                  ]
                }
              }
            }]), e
          }();
          return e.\u0275prov = fe({
            token: e,
            providedIn: "root",
            factory: function () {
              return new e([new Pa])
            }
          }), e
        }(),
        qa = function () {
          var e = function () {
            function e(t) {
              _classCallCheck(this, e), this.factories = t
            }
            return _createClass(e, [{
              key: "find",
              value: function (e) {
                var t = this.factories.find((function (t) {
                  return t.supports(e)
                }));
                if (t) return t;
                throw new Error("Cannot find a differ supporting object '".concat(e, "'"))
              }
            }], [{
              key: "create",
              value: function (t, n) {
                if (n) {
                  var r = n.factories.slice();
                  t = t.concat(r)
                }
                return new e(t)
              }
            }, {
              key: "extend",
              value: function (t) {
                return {
                  provide: e,
                  useFactory: function (n) {
                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                    return e.create(t, n)
                  },
                  deps: [
                    [e, new ue, new ae]
                  ]
                }
              }
            }]), e
          }();
          return e.\u0275prov = fe({
            token: e,
            providedIn: "root",
            factory: function () {
              return new e([new La])
            }
          }), e
        }(),
        za = [new La],
        Ga = new Ha([new Pa]),
        Ba = new qa(za),
        Wa = function () {
          var e = function e() {
            _classCallCheck(this, e)
          };
          return e.__NG_ELEMENT_ID__ = function () {
            return $a(e, wa)
          }, e
        }(),
        $a = function (e, t) {
          return Wi(e, t, Zt(), Bt())
        },
        Za = function () {
          var e = function e() {
            _classCallCheck(this, e)
          };
          return e.__NG_ELEMENT_ID__ = function () {
            return Qa(e, wa)
          }, e
        }(),
        Qa = function (e, t) {
          return $i(e, t, Zt(), Bt())
        },
        Ja = {},
        Ya = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this)).ngModule = e, r
          }
          return _createClass(n, [{
            key: "resolveComponentFactory",
            value: function (e) {
              var t = kt(e);
              return new es(t, this.ngModule)
            }
          }]), n
        }(ba);

      function Ka(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push({
          propName: e[n],
          templateName: n
        });
        return t
      }
      var Xa = new He("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: function () {
            return Rn
          }
        }),
        es = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this)).componentDef = e, i.ngModule = r, i.componentType = e.type, i.selector = e.selectors.map(br).join(","), i.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], i.isBoundToModule = !!r, i
          }
          return _createClass(n, [{
            key: "create",
            value: function (e, t, n, r) {
              var i, o, a = (r = r || this.ngModule) ? function (e, t) {
                  return {
                    get: function (n, r, i) {
                      var o = e.get(n, Ja, i);
                      return o !== Ja || r === Ja ? o : t.get(n, r, i)
                    }
                  }
                }(e, r.injector) : e,
                s = a.get(Ea, Ft),
                u = a.get(Ta, null),
                l = s.createRenderer(null, this.componentDef),
                c = this.componentDef.selectors[0][0] || "div",
                h = n ? function (e, t, n) {
                  if (Pt(e)) return e.selectRootElement(t, n === ut.ShadowDom);
                  var r = "string" == typeof t ? e.querySelector(t) : t;
                  return r.textContent = "", r
                }(l, n, this.componentDef.encapsulation) : Nr(c, s.createRenderer(null, this.componentDef), function (e) {
                  var t = e.toLowerCase();
                  return "svg" === t ? "http://www.w3.org/2000/svg" : "math" === t ? "http://www.w3.org/1998/MathML/" : null
                }(c)),
                f = this.componentDef.onPush ? 576 : 528,
                d = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
                p = {
                  components: [],
                  scheduler: Rn,
                  clean: vi,
                  playerHandler: null,
                  flags: 0
                },
                v = Gr(0, -1, null, 1, 0, null, null, null, null, null),
                m = Mr(null, v, p, f, null, null, s, l, u, a);
              an(m, null);
              try {
                var g = function (e, t, n, r, i, o) {
                  var a = n[1];
                  n[19] = e;
                  var s = Dr(a, null, 0, 3, null, null),
                    u = s.mergedAttrs = t.hostAttrs;
                  null !== u && (mo(s, u), null !== e && (bn(i, e, u), null !== s.classes && ji(i, e, s.classes), null !== s.styles && Li(i, e, s.styles)));
                  var l = r.createRenderer(e, t),
                    c = Mr(n, zr(t), null, t.onPush ? 64 : 16, n[19], s, r, l, void 0);
                  return a.firstCreatePass && (qn(Ln(s, n), a, t.type), Xr(a, s), ti(s, n.length, 1)), ci(n, c), n[19] = c
                }(h, this.componentDef, m, s, l);
                if (h)
                  if (n) bn(l, h, ["ng-version", Ia.full]);
                  else {
                    var y = function (e) {
                        for (var t = [], n = [], r = 1, i = 2; r < e.length;) {
                          var o = e[r];
                          if ("string" == typeof o) 2 === i ? "" !== o && t.push(o, e[++r]) : 8 === i && n.push(o);
                          else {
                            if (!yr(i)) break;
                            i = o
                          }
                          r++
                        }
                        return {
                          attrs: t,
                          classes: n
                        }
                      }(this.componentDef.selectors[0]),
                      _ = y.attrs,
                      k = y.classes;
                    _ && bn(l, h, _), k && k.length > 0 && ji(l, h, k.join(" "))
                  } o = Dt(m[1], 0), t && (o.projection = t.map((function (e) {
                  return Array.from(e)
                }))), i = function (e, t, n, r, i) {
                  var o = n[1],
                    a = function (e, t, n) {
                      var r = Zt();
                      e.firstCreatePass && (n.providersResolver && n.providersResolver(n), Kr(e, r, 1), ni(e, t, n));
                      var i = $n(t, e, t.length - 1, r);
                      hr(i, t);
                      var o = Mt(r, t);
                      return o && hr(o, t), i
                    }(o, n, t);
                  r.components.push(a), e[8] = a, i && i.forEach((function (e) {
                    return e(a, t)
                  })), t.contentQueries && t.contentQueries(1, a, n.length - 1);
                  var s = Zt();
                  if (o.firstCreatePass && (null !== t.hostBindings || null !== t.hostAttrs)) {
                    dn(s.index - 19);
                    var u = n[1];
                    Qr(u, t), Jr(u, n, t.hostVars), Yr(t, a)
                  }
                  return a
                }(g, this.componentDef, m, p, [na]), Vr(v, m, null)
              } finally {
                hn()
              }
              var C = new ts(this.componentType, i, Bi(wa, o, m), m, o);
              return n && !d || (C.hostView._tViewNode.child = o), C
            }
          }, {
            key: "inputs",
            get: function () {
              return Ka(this.componentDef.inputs)
            }
          }, {
            key: "outputs",
            get: function () {
              return Ka(this.componentDef.outputs)
            }
          }]), n
        }(ka),
        ts = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o, a) {
            var s, u, l, c;
            return _classCallCheck(this, n), (s = t.call(this)).location = i, s._rootLView = o, s._tNode = a, s.destroyCbs = [], s.instance = r, s.hostView = s.changeDetectorRef = new Gi(o), s.hostView._tViewNode = (u = o[1], l = o, null == (c = u.node) && (u.node = c = Br(0, null, 2, -1, null, null)), l[6] = c), s.componentType = e, s
          }
          return _createClass(n, [{
            key: "destroy",
            value: function () {
              this.destroyCbs && (this.destroyCbs.forEach((function (e) {
                return e()
              })), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
            }
          }, {
            key: "onDestroy",
            value: function (e) {
              this.destroyCbs && this.destroyCbs.push(e)
            }
          }, {
            key: "injector",
            get: function () {
              return new Jn(this._tNode, this._rootLView)
            }
          }]), n
        }(function () {
          return function e() {
            _classCallCheck(this, e)
          }
        }()),
        ns = void 0,
        rs = ["en", [
            ["a", "p"],
            ["AM", "PM"], ns
          ],
          [
            ["AM", "PM"], ns, ns
          ],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
          ], ns, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          ], ns, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
          ], 0, [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", ns, "{1} 'at' {0}", ns],
          [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
          function (e) {
            var t = Math.floor(Math.abs(e)),
              n = e.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === t && 0 === n ? 1 : 5
          }
        ],
        is = {};

      function os(e) {
        var t = function (e) {
            return e.toLowerCase().replace(/_/g, "-")
          }(e),
          n = as(t);
        if (n) return n;
        var r = t.split("-")[0];
        if (n = as(r)) return n;
        if ("en" === r) return rs;
        throw new Error('Missing locale data for the locale "'.concat(e, '".'))
      }

      function as(e) {
        return e in is || (is[e] = Re.ng && Re.ng.common && Re.ng.common.locales && Re.ng.common.locales[e]), is[e]
      }
      var ss = function () {
        var e = {
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
        return e[e.LocaleId] = "LocaleId", e[e.DayPeriodsFormat] = "DayPeriodsFormat", e[e.DayPeriodsStandalone] = "DayPeriodsStandalone", e[e.DaysFormat] = "DaysFormat", e[e.DaysStandalone] = "DaysStandalone", e[e.MonthsFormat] = "MonthsFormat", e[e.MonthsStandalone] = "MonthsStandalone", e[e.Eras] = "Eras", e[e.FirstDayOfWeek] = "FirstDayOfWeek", e[e.WeekendRange] = "WeekendRange", e[e.DateFormat] = "DateFormat", e[e.TimeFormat] = "TimeFormat", e[e.DateTimeFormat] = "DateTimeFormat", e[e.NumberSymbols] = "NumberSymbols", e[e.NumberFormats] = "NumberFormats", e[e.CurrencyCode] = "CurrencyCode", e[e.CurrencySymbol] = "CurrencySymbol", e[e.CurrencyName] = "CurrencyName", e[e.Currencies] = "Currencies", e[e.Directionality] = "Directionality", e[e.PluralCase] = "PluralCase", e[e.ExtraData] = "ExtraData", e
      }();

      function us(e) {
        var t;
        null == (t = e) && function (e, t, n, r) {
          throw new Error("ASSERTION ERROR: ".concat("Expected localeId to be defined") + " [Expected=> null != ".concat(t, " <=Actual]"))
        }(0, t), "string" == typeof e && e.toLowerCase().replace(/_/g, "-")
      }
      var ls = new Map,
        cs = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            _classCallCheck(this, n), (i = t.call(this))._parent = r, i._bootstrapComponents = [], i.injector = _assertThisInitialized(i), i.destroyCbs = [], i.componentFactoryResolver = new Ya(_assertThisInitialized(i));
            var o = bt(e),
              a = e[Le] || null;
            return a && us(a), i._bootstrapComponents = Nn(o.bootstrap), i._r3Injector = no(e, r, [{
              provide: et,
              useValue: _assertThisInitialized(i)
            }, {
              provide: ba,
              useValue: i.componentFactoryResolver
            }], be(e)), i._r3Injector._resolveInjectorDefTypes(), i.instance = i.get(e), i
          }
          return _createClass(n, [{
            key: "get",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : co.THROW_IF_NOT_FOUND,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : le.Default;
              return e === co || e === et || e === qe ? this : this._r3Injector.get(e, t, n)
            }
          }, {
            key: "destroy",
            value: function () {
              var e = this._r3Injector;
              !e.destroyed && e.destroy(), this.destroyCbs.forEach((function (e) {
                return e()
              })), this.destroyCbs = null
            }
          }, {
            key: "onDestroy",
            value: function (e) {
              this.destroyCbs.push(e)
            }
          }]), n
        }(et),
        hs = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this)).moduleType = e, null !== bt(e) && function e(t) {
              if (null !== t.\u0275mod.id) {
                var n = t.\u0275mod.id;
                (function (e, t, n) {
                  if (t && t !== n) throw new Error("Duplicate module registered for ".concat(e, " - ").concat(be(t), " vs ").concat(be(t.name)))
                })(n, ls.get(n), t), ls.set(n, t)
              }
              var r = t.\u0275mod.imports;
              r instanceof Function && (r = r()), r && r.forEach((function (t) {
                return e(t)
              }))
            }(e), r
          }
          return _createClass(n, [{
            key: "create",
            value: function (e) {
              return new cs(this.moduleType, e)
            }
          }]), n
        }(tt);

      function fs(e, t) {
        var n, r = Wt(),
          i = e + 19;
        r.firstCreatePass ? (n = function (e, t) {
          if (t)
            for (var n = t.length - 1; n >= 0; n--) {
              var r = t[n];
              if (e === r.name) return r
            }
          throw new Error("The pipe '".concat(e, "' could not be found!"))
        }(t, r.pipeRegistry), r.data[i] = n, n.onDestroy && (r.destroyHooks || (r.destroyHooks = [])).push(i, n.onDestroy)) : n = r.data[i];
        var o = n.factory || (n.factory = Ct(n.type)),
          a = Ze(Oo),
          s = o();
        return Ze(a),
          function (e, t, n, r) {
            var i = n + 19;
            i >= e.data.length && (e.data[i] = null, e.blueprint[i] = null), t[i] = r
          }(r, Bt(), e, s), s
      }

      function ds(e, t, n) {
        var r = Bt(),
          i = function (e, t) {
            return e[t + 19]
          }(r, e);
        return function (e, t) {
          return ko.isWrapped(t) && (t = ko.unwrap(t), e[zt.lFrame.bindingIndex] = wr), t
        }(r, function (e, t) {
          return e[1].data[t + 19].pure
        }(r, e) ? function (e, t, n, r, i, o) {
          var a = t + n;
          return So(e, a, i) ? wo(e, a + 1, o ? r.call(o, i) : r(i)) : function (e, t) {
            var n = e[t];
            return n === wr ? void 0 : n
          }(e, a + 1)
        }(r, Xt(), t, i.transform, n, i) : i.transform(n))
      }
      var ps = function (e) {
        _inherits(n, e);
        var t = _createSuper(n);

        function n() {
          var e, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return _classCallCheck(this, n), (e = t.call(this)).__isAsync = r, e
        }
        return _createClass(n, [{
          key: "emit",
          value: function (e) {
            _get(_getPrototypeOf(n.prototype), "next", this).call(this, e)
          }
        }, {
          key: "subscribe",
          value: function (e, t, r) {
            var i, o = function (e) {
                return null
              },
              a = function () {
                return null
              };
            e && "object" == typeof e ? (i = this.__isAsync ? function (t) {
              setTimeout((function () {
                return e.next(t)
              }))
            } : function (t) {
              e.next(t)
            }, e.error && (o = this.__isAsync ? function (t) {
              setTimeout((function () {
                return e.error(t)
              }))
            } : function (t) {
              e.error(t)
            }), e.complete && (a = this.__isAsync ? function () {
              setTimeout((function () {
                return e.complete()
              }))
            } : function () {
              e.complete()
            })) : (i = this.__isAsync ? function (t) {
              setTimeout((function () {
                return e(t)
              }))
            } : function (t) {
              e(t)
            }, t && (o = this.__isAsync ? function (e) {
              setTimeout((function () {
                return t(e)
              }))
            } : function (e) {
              t(e)
            }), r && (a = this.__isAsync ? function () {
              setTimeout((function () {
                return r()
              }))
            } : function () {
              r()
            }));
            var s = _get(_getPrototypeOf(n.prototype), "subscribe", this).call(this, i, o, a);
            return e instanceof f && e.add(s), s
          }
        }]), n
      }(O);

      function vs() {
        return this._results[yo()]()
      }
      var ms = function () {
          function e() {
            _classCallCheck(this, e), this.dirty = !0, this._results = [], this.changes = new ps, this.length = 0;
            var t = yo(),
              n = e.prototype;
            n[t] || (n[t] = vs)
          }
          return _createClass(e, [{
            key: "map",
            value: function (e) {
              return this._results.map(e)
            }
          }, {
            key: "filter",
            value: function (e) {
              return this._results.filter(e)
            }
          }, {
            key: "find",
            value: function (e) {
              return this._results.find(e)
            }
          }, {
            key: "reduce",
            value: function (e, t) {
              return this._results.reduce(e, t)
            }
          }, {
            key: "forEach",
            value: function (e) {
              this._results.forEach(e)
            }
          }, {
            key: "some",
            value: function (e) {
              return this._results.some(e)
            }
          }, {
            key: "toArray",
            value: function () {
              return this._results.slice()
            }
          }, {
            key: "toString",
            value: function () {
              return this._results.toString()
            }
          }, {
            key: "reset",
            value: function (e) {
              this._results = function e(t, n) {
                void 0 === n && (n = t);
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  Array.isArray(i) ? (n === t && (n = t.slice(0, r)), e(i, n)) : n !== t && n.push(i)
                }
                return n
              }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
            }
          }, {
            key: "notifyOnChanges",
            value: function () {
              this.changes.emit(this)
            }
          }, {
            key: "setDirty",
            value: function () {
              this.dirty = !0
            }
          }, {
            key: "destroy",
            value: function () {
              this.changes.complete(), this.changes.unsubscribe()
            }
          }]), e
        }(),
        gs = function () {
          function e(t) {
            _classCallCheck(this, e), this.queryList = t, this.matches = null
          }
          return _createClass(e, [{
            key: "clone",
            value: function () {
              return new e(this.queryList)
            }
          }, {
            key: "setDirty",
            value: function () {
              this.queryList.setDirty()
            }
          }]), e
        }(),
        ys = function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            _classCallCheck(this, e), this.queries = t
          }
          return _createClass(e, [{
            key: "createEmbeddedView",
            value: function (t) {
              var n = t.queries;
              if (null !== n) {
                for (var r = null !== t.contentQueries ? t.contentQueries[0] : n.length, i = [], o = 0; o < r; o++) {
                  var a = n.getByIndex(o);
                  i.push(this.queries[a.indexInDeclarationView].clone())
                }
                return new e(i)
              }
              return null
            }
          }, {
            key: "insertView",
            value: function (e) {
              this.dirtyQueriesWithMatches(e)
            }
          }, {
            key: "detachView",
            value: function (e) {
              this.dirtyQueriesWithMatches(e)
            }
          }, {
            key: "dirtyQueriesWithMatches",
            value: function (e) {
              for (var t = 0; t < this.queries.length; t++) null !== Os(e, t).matches && this.queries[t].setDirty()
            }
          }]), e
        }(),
        _s = function e(t, n, r) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          _classCallCheck(this, e), this.predicate = t, this.descendants = n, this.isStatic = r, this.read = i
        },
        ks = function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            _classCallCheck(this, e), this.queries = t
          }
          return _createClass(e, [{
            key: "elementStart",
            value: function (e, t) {
              for (var n = 0; n < this.queries.length; n++) this.queries[n].elementStart(e, t)
            }
          }, {
            key: "elementEnd",
            value: function (e) {
              for (var t = 0; t < this.queries.length; t++) this.queries[t].elementEnd(e)
            }
          }, {
            key: "embeddedTView",
            value: function (t) {
              for (var n = null, r = 0; r < this.length; r++) {
                var i = null !== n ? n.length : 0,
                  o = this.getByIndex(r).embeddedTView(t, i);
                o && (o.indexInDeclarationView = r, null !== n ? n.push(o) : n = [o])
              }
              return null !== n ? new e(n) : null
            }
          }, {
            key: "template",
            value: function (e, t) {
              for (var n = 0; n < this.queries.length; n++) this.queries[n].template(e, t)
            }
          }, {
            key: "getByIndex",
            value: function (e) {
              return this.queries[e]
            }
          }, {
            key: "track",
            value: function (e) {
              this.queries.push(e)
            }
          }, {
            key: "length",
            get: function () {
              return this.queries.length
            }
          }]), e
        }(),
        Cs = function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            _classCallCheck(this, e), this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
          }
          return _createClass(e, [{
            key: "elementStart",
            value: function (e, t) {
              this.isApplyingToNode(t) && this.matchTNode(e, t)
            }
          }, {
            key: "elementEnd",
            value: function (e) {
              this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1)
            }
          }, {
            key: "template",
            value: function (e, t) {
              this.elementStart(e, t)
            }
          }, {
            key: "embeddedTView",
            value: function (t, n) {
              return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null
            }
          }, {
            key: "isApplyingToNode",
            value: function (e) {
              if (this._appliesToNextNode && !1 === this.metadata.descendants) {
                for (var t = this._declarationNodeIndex, n = e.parent; null !== n && 4 === n.type && n.index !== t;) n = n.parent;
                return t === (null !== n ? n.index : -1)
              }
              return this._appliesToNextNode
            }
          }, {
            key: "matchTNode",
            value: function (e, t) {
              if (Array.isArray(this.metadata.predicate))
                for (var n = this.metadata.predicate, r = 0; r < n.length; r++) this.matchTNodeWithReadOption(e, t, bs(t, n[r]));
              else {
                var i = this.metadata.predicate;
                i === Wa ? 0 === t.type && this.matchTNodeWithReadOption(e, t, -1) : this.matchTNodeWithReadOption(e, t, Wn(t, e, i, !1, !1))
              }
            }
          }, {
            key: "matchTNodeWithReadOption",
            value: function (e, t, n) {
              if (null !== n) {
                var r = this.metadata.read;
                if (null !== r)
                  if (r === wa || r === Za || r === Wa && 0 === t.type) this.addMatch(t.index, -2);
                  else {
                    var i = Wn(t, e, r, !1, !1);
                    null !== i && this.addMatch(t.index, i)
                  }
                else this.addMatch(t.index, n)
              }
            }
          }, {
            key: "addMatch",
            value: function (e, t) {
              null === this.matches ? this.matches = [e, t] : this.matches.push(e, t)
            }
          }]), e
        }();

      function bs(e, t) {
        var n = e.localNames;
        if (null !== n)
          for (var r = 0; r < n.length; r += 2)
            if (n[r] === t) return n[r + 1];
        return null
      }

      function ws(e, t, n, r) {
        return -1 === n ? function (e, t) {
          return 3 === e.type || 4 === e.type ? Bi(wa, e, t) : 0 === e.type ? Wi(Wa, wa, e, t) : null
        }(t, e) : -2 === n ? function (e, t, n) {
          return n === wa ? Bi(wa, t, e) : n === Wa ? Wi(Wa, wa, t, e) : n === Za ? $i(Za, wa, t, e) : void 0
        }(e, t, r) : $n(e, e[1], n, t)
      }

      function Ss(e, t, n, r) {
        var i = t[5].queries[r];
        if (null === i.matches) {
          for (var o = e.data, a = n.matches, s = [], u = 0; u < a.length; u += 2) {
            var l = a[u];
            s.push(l < 0 ? null : ws(t, o[l], a[u + 1], n.metadata.read))
          }
          i.matches = s
        }
        return i.matches
      }

      function Es(e) {
        var t = Bt(),
          n = Wt(),
          r = nn();
        rn(r + 1);
        var i = Os(n, r);
        if (e.dirty && jt(t) === i.metadata.isStatic) {
          if (null === i.matches) e.reset([]);
          else {
            var o = i.crossesNgTemplate ? function e(t, n, r, i) {
              var o = t.queries.getByIndex(r),
                a = o.matches;
              if (null !== a)
                for (var s = Ss(t, n, o, r), u = 0; u < a.length; u += 2) {
                  var l = a[u];
                  if (l > 0) i.push(s[u / 2]);
                  else {
                    for (var c = a[u + 1], h = n[-l], f = 9; f < h.length; f++) {
                      var d = h[f];
                      d[17] === d[3] && e(d[1], d, c, i)
                    }
                    if (null !== h[5])
                      for (var p = h[5], v = 0; v < p.length; v++) {
                        var m = p[v];
                        e(m[1], m, c, i)
                      }
                  }
                }
              return i
            }(n, t, r, []) : Ss(n, t, i, r);
            e.reset(o), e.notifyOnChanges()
          }
          return !0
        }
        return !1
      }

      function xs(e, t, n, r) {
        ! function (e, t, n, r, i, o, a, s) {
          e.firstCreatePass && (function (e, t, n) {
              null === e.queries && (e.queries = new ks), e.queries.track(new Cs(t, n))
            }(e, new _s(n, r, !1, i), a.index), function (e, t) {
              var n = e.contentQueries || (e.contentQueries = []);
              t !== (e.contentQueries.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
            }(e, s)),
            function (e, t) {
              var n = new ms;
              ! function (e, t, n, r) {
                var i = mi(t);
                i.push(n), e.firstCreatePass && gi(e).push(r, i.length - 1)
              }(e, t, n, n.destroy), null === t[5] && (t[5] = new ys), t[5].queries.push(new gs(n))
            }(e, t)
        }(Wt(), Bt(), t, n, r, 0, Zt(), e)
      }

      function As() {
        return e = Bt(), t = nn(), e[5].queries[t].queryList;
        var e, t
      }

      function Os(e, t) {
        return e.queries.getByIndex(t)
      }
      var Ts = new He("Application Initializer"),
        Is = function () {
          var e = function () {
            function e(t) {
              var n = this;
              _classCallCheck(this, e), this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((function (e, t) {
                n.resolve = e, n.reject = t
              }))
            }
            return _createClass(e, [{
              key: "runInitializers",
              value: function () {
                var e = this;
                if (!this.initialized) {
                  var t = [],
                    n = function () {
                      e.done = !0, e.resolve()
                    };
                  if (this.appInits)
                    for (var r = 0; r < this.appInits.length; r++) {
                      var i = this.appInits[r]();
                      Vo(i) && t.push(i)
                    }
                  Promise.all(t).then((function () {
                    n()
                  })).catch((function (t) {
                    e.reject(t)
                  })), 0 === t.length && n(), this.initialized = !0
                }
              }
            }]), e
          }();
          return e.\u0275fac = function (t) {
            return new(t || e)(Je(Ts, 8))
          }, e.\u0275prov = fe({
            token: e,
            factory: e.\u0275fac
          }), e
        }(),
        Ps = new He("AppId"),
        Fs = {
          provide: Ps,
          useFactory: function () {
            return "".concat(Rs()).concat(Rs()).concat(Rs())
          },
          deps: []
        };

      function Rs() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()))
      }
      var Ns = new He("Platform Initializer"),
        Ms = new He("Platform ID"),
        Ds = new He("appBootstrapListener"),
        Vs = function () {
          var e = function () {
            function e() {
              _classCallCheck(this, e)
            }
            return _createClass(e, [{
              key: "log",
              value: function (e) {
                console.log(e)
              }
            }, {
              key: "warn",
              value: function (e) {
                console.warn(e)
              }
            }]), e
          }();
          return e.\u0275fac = function (t) {
            return new(t || e)
          }, e.\u0275prov = fe({
            token: e,
            factory: e.\u0275fac
          }), e
        }(),
        Ls = new He("LocaleId"),
        js = new He("DefaultCurrencyCode"),
        Us = function e(t, n) {
          _classCallCheck(this, e), this.ngModuleFactory = t, this.componentFactories = n
        },
        Hs = function (e) {
          return new hs(e)
        },
        qs = Hs,
        zs = function (e) {
          return Promise.resolve(Hs(e))
        },
        Gs = function (e) {
          var t = Hs(e),
            n = Nn(bt(e).declarations).reduce((function (e, t) {
              var n = kt(t);
              return n && e.push(new es(n)), e
            }), []);
          return new Us(t, n)
        },
        Bs = Gs,
        Ws = function (e) {
          return Promise.resolve(Gs(e))
        },
        $s = function () {
          var e = function () {
            function e() {
              _classCallCheck(this, e), this.compileModuleSync = qs, this.compileModuleAsync = zs, this.compileModuleAndAllComponentsSync = Bs, this.compileModuleAndAllComponentsAsync = Ws
            }
            return _createClass(e, [{
              key: "clearCache",
              value: function () {}
            }, {
              key: "clearCacheFor",
              value: function (e) {}
            }, {
              key: "getModuleId",
              value: function (e) {}
            }]), e
          }();
          return e.\u0275fac = function (t) {
            return new(t || e)
          }, e.\u0275prov = fe({
            token: e,
            factory: e.\u0275fac
          }), e
        }(),
        Zs = new He("compilerOptions"),
        Qs = Promise.resolve(0);

      function Js(e) {
        "undefined" == typeof Zone ? Qs.then((function () {
          e && e.apply(null, null)
        })) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
      }
      var Ys = function () {
        function e(t) {
          var n, r, i = t.enableLongStackTrace,
            o = void 0 !== i && i,
            a = t.shouldCoalesceEventChangeDetection,
            s = void 0 !== a && a;
          if (_classCallCheck(this, e), this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ps(!1), this.onMicrotaskEmpty = new ps(!1), this.onStable = new ps(!1), this.onError = new ps(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), o && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = s, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
            var e = Re.requestAnimationFrame,
              t = Re.cancelAnimationFrame;
            if ("undefined" != typeof Zone && e && t) {
              var n = e[Zone.__symbol__("OriginalDelegate")];
              n && (e = n);
              var r = t[Zone.__symbol__("OriginalDelegate")];
              r && (t = r)
            }
            return {
              nativeRequestAnimationFrame: e,
              nativeCancelAnimationFrame: t
            }
          }().nativeRequestAnimationFrame, r = !!(n = this).shouldCoalesceEventChangeDetection && n.nativeRequestAnimationFrame && function () {
            ! function (e) {
              -1 === e.lastRequestAnimationFrameId && (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(Re, (function () {
                e.lastRequestAnimationFrameId = -1, tu(e), eu(e)
              })), tu(e))
            }(n)
          }, n._inner = n._inner.fork({
            name: "angular",
            properties: {
              isAngularZone: !0,
              maybeDelayChangeDetection: r
            },
            onInvokeTask: function (e, t, i, o, a, s) {
              try {
                return nu(n), e.invokeTask(i, o, a, s)
              } finally {
                r && "eventTask" === o.type && r(), ru(n)
              }
            },
            onInvoke: function (e, t, r, i, o, a, s) {
              try {
                return nu(n), e.invoke(r, i, o, a, s)
              } finally {
                ru(n)
              }
            },
            onHasTask: function (e, t, r, i) {
              e.hasTask(r, i), t === r && ("microTask" == i.change ? (n._hasPendingMicrotasks = i.microTask, tu(n), eu(n)) : "macroTask" == i.change && (n.hasPendingMacrotasks = i.macroTask))
            },
            onHandleError: function (e, t, r, i) {
              return e.handleError(r, i), n.runOutsideAngular((function () {
                return n.onError.emit(i)
              })), !1
            }
          })
        }
        return _createClass(e, [{
          key: "run",
          value: function (e, t, n) {
            return this._inner.run(e, t, n)
          }
        }, {
          key: "runTask",
          value: function (e, t, n, r) {
            var i = this._inner,
              o = i.scheduleEventTask("NgZoneEvent: " + r, e, Xs, Ks, Ks);
            try {
              return i.runTask(o, t, n)
            } finally {
              i.cancelTask(o)
            }
          }
        }, {
          key: "runGuarded",
          value: function (e, t, n) {
            return this._inner.runGuarded(e, t, n)
          }
        }, {
          key: "runOutsideAngular",
          value: function (e) {
            return this._outer.run(e)
          }
        }], [{
          key: "isInAngularZone",
          value: function () {
            return !0 === Zone.current.get("isAngularZone")
          }
        }, {
          key: "assertInAngularZone",
          value: function () {
            if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
          }
        }, {
          key: "assertNotInAngularZone",
          value: function () {
            if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
          }
        }]), e
      }();

      function Ks() {}
      var Xs = {};

      function eu(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
          e._nesting++, e.onMicrotaskEmpty.emit(null)
        } finally {
          if (e._nesting--, !e.hasPendingMicrotasks) try {
            e.runOutsideAngular((function () {
              return e.onStable.emit(null)
            }))
          } finally {
            e.isStable = !0
          }
        }
      }

      function tu(e) {
        e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || e.shouldCoalesceEventChangeDetection && -1 !== e.lastRequestAnimationFrameId)
      }

      function nu(e) {
        e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
      }

      function ru(e) {
        e._nesting--, eu(e)
      }
      var iu, ou = function () {
          function e() {
            _classCallCheck(this, e), this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ps, this.onMicrotaskEmpty = new ps, this.onStable = new ps, this.onError = new ps
          }
          return _createClass(e, [{
            key: "run",
            value: function (e, t, n) {
              return e.apply(t, n)
            }
          }, {
            key: "runGuarded",
            value: function (e, t, n) {
              return e.apply(t, n)
            }
          }, {
            key: "runOutsideAngular",
            value: function (e) {
              return e()
            }
          }, {
            key: "runTask",
            value: function (e, t, n, r) {
              return e.apply(t, n)
            }
          }]), e
        }(),
        au = function () {
          var e = function () {
            function e(t) {
              var n = this;
              _classCallCheck(this, e), this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run((function () {
                n.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
              }))
            }
            return _createClass(e, [{
              key: "_watchAngularEvents",
              value: function () {
                var e = this;
                this._ngZone.onUnstable.subscribe({
                  next: function () {
                    e._didWork = !0, e._isZoneStable = !1
                  }
                }), this._ngZone.runOutsideAngular((function () {
                  e._ngZone.onStable.subscribe({
                    next: function () {
                      Ys.assertNotInAngularZone(), Js((function () {
                        e._isZoneStable = !0, e._runCallbacksIfReady()
                      }))
                    }
                  })
                }))
              }
            }, {
              key: "increasePendingRequestCount",
              value: function () {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
              }
            }, {
              key: "decreasePendingRequestCount",
              value: function () {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
              }
            }, {
              key: "isStable",
              value: function () {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
              }
            }, {
              key: "_runCallbacksIfReady",
              value: function () {
                var e = this;
                if (this.isStable()) Js((function () {
                  for (; 0 !== e._callbacks.length;) {
                    var t = e._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(e._didWork)
                  }
                  e._didWork = !1
                }));
                else {
                  var t = this.getPendingTasks();
                  this._callbacks = this._callbacks.filter((function (e) {
                    return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
                  })), this._didWork = !0
                }
              }
            }, {
              key: "getPendingTasks",
              value: function () {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((function (e) {
                  return {
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data
                  }
                })) : []
              }
            }, {
              key: "addCallback",
              value: function (e, t, n) {
                var r = this,
                  i = -1;
                t && t > 0 && (i = setTimeout((function () {
                  r._callbacks = r._callbacks.filter((function (e) {
                    return e.timeoutId !== i
                  })), e(r._didWork, r.getPendingTasks())
                }), t)), this._callbacks.push({
                  doneCb: e,
                  timeoutId: i,
                  updateCb: n
                })
              }
            }, {
              key: "whenStable",
              value: function (e, t, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                this.addCallback(e, t, n), this._runCallbacksIfReady()
              }
            }, {
              key: "getPendingRequestCount",
              value: function () {
                return this._pendingCount
              }
            }, {
              key: "findProviders",
              value: function (e, t, n) {
                return []
              }
            }]), e
          }();
          return e.\u0275fac = function (t) {
            return new(t || e)(Je(Ys))
          }, e.\u0275prov = fe({
            token: e,
            factory: e.\u0275fac
          }), e
        }(),
        su = function () {
          var e = function () {
            function e() {
              _classCallCheck(this, e), this._applications = new Map, uu.addToWindow(this)
            }
            return _createClass(e, [{
              key: "registerApplication",
              value: function (e, t) {
                this._applications.set(e, t)
              }
            }, {
              key: "unregisterApplication",
              value: function (e) {
                this._applications.delete(e)
              }
            }, {
              key: "unregisterAllApplications",
              value: function () {
                this._applications.clear()
              }
            }, {
              key: "getTestability",
              value: function (e) {
                return this._applications.get(e) || null
              }
            }, {
              key: "getAllTestabilities",
              value: function () {
                return Array.from(this._applications.values())
              }
            }, {
              key: "getAllRootElements",
              value: function () {
                return Array.from(this._applications.keys())
              }
            }, {
              key: "findTestabilityInTree",
              value: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return uu.findTestabilityInTree(this, e, t)
              }
            }]), e
          }();
          return e.\u0275fac = function (t) {
            return new(t || e)
          }, e.\u0275prov = fe({
            token: e,
            factory: e.\u0275fac
          }), e
        }(),
        uu = new(function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "addToWindow",
            value: function (e) {}
          }, {
            key: "findTestabilityInTree",
            value: function (e, t, n) {
              return null
            }
          }]), e
        }()),
        lu = function (e, t, n) {
          var r = e.get(Zs, []).concat(t),
            i = new hs(n);
          if (0 === fo.size) return Promise.resolve(i);
          var o, a, s = (o = r.map((function (e) {
            return e.providers
          })), a = [], o.forEach((function (e) {
            return e && a.push.apply(a, _toConsumableArray(e))
          })), a);
          if (0 === s.length) return Promise.resolve(i);
          var u = function () {
              var e = Re.ng;
              if (!e || !e.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
              return e.\u0275compilerFacade
            }(),
            l = co.create({
              providers: s
            }).get(u.ResourceLoader);
          return function (e) {
            var t = [],
              n = new Map;

            function r(e) {
              var t = n.get(e);
              if (!t) {
                var r = function (e) {
                  return Promise.resolve(l.get(e))
                }(e);
                n.set(e, t = r.then(vo))
              }
              return t
            }
            return fo.forEach((function (e, n) {
              var i = [];
              e.templateUrl && i.push(r(e.templateUrl).then((function (t) {
                e.template = t
              })));
              var o = e.styleUrls,
                a = e.styles || (e.styles = []),
                s = e.styles.length;
              o && o.forEach((function (t, n) {
                a.push(""), i.push(r(t).then((function (r) {
                  a[s + n] = r, o.splice(o.indexOf(t), 1), 0 == o.length && (e.styleUrls = void 0)
                })))
              }));
              var u = Promise.all(i).then((function () {
                return function (e) {
                  po.delete(e)
                }(n)
              }));
              t.push(u)
            })), fo = new Map, Promise.all(t).then((function () {}))
          }().then((function () {
            return i
          }))
        },
        cu = new He("AllowMultipleToken"),
        hu = function e(t, n) {
          _classCallCheck(this, e), this.name = t, this.token = n
        };

      function fu(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = "Platform: ".concat(t),
          i = new He(r);
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            o = du();
          if (!o || o.injector.get(cu, !1))
            if (e) e(n.concat(t).concat({
              provide: i,
              useValue: !0
            }));
            else {
              var a = n.concat(t).concat({
                provide: i,
                useValue: !0
              }, {
                provide: Ji,
                useValue: "platform"
              });
              ! function (e) {
                if (iu && !iu.destroyed && !iu.injector.get(cu, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                iu = e.get(pu);
                var t = e.get(Ns, null);
                t && t.forEach((function (e) {
                  return e()
                }))
              }(co.create({
                providers: a,
                name: r
              }))
            } return function (e) {
            var t = du();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
            return t
          }(i)
        }
      }

      function du() {
        return iu && !iu.destroyed ? iu : null
      }
      var pu = function () {
        var e = function () {
          function e(t) {
            _classCallCheck(this, e), this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
          }
          return _createClass(e, [{
            key: "bootstrapModuleFactory",
            value: function (e, t) {
              var n, r, i = this,
                o = (n = t ? t.ngZone : void 0, r = t && t.ngZoneEventCoalescing || !1, "noop" === n ? new ou : ("zone.js" === n ? void 0 : n) || new Ys({
                  enableLongStackTrace: ar(),
                  shouldCoalesceEventChangeDetection: r
                })),
                a = [{
                  provide: Ys,
                  useValue: o
                }];
              return o.run((function () {
                var t = co.create({
                    providers: a,
                    parent: i.injector,
                    name: e.moduleType.name
                  }),
                  n = e.create(t),
                  r = n.injector.get(tr, null);
                if (!r) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                return n.onDestroy((function () {
                    return yu(i._modules, n)
                  })), o.runOutsideAngular((function () {
                    return o.onError.subscribe({
                      next: function (e) {
                        r.handleError(e)
                      }
                    })
                  })),
                  function (e, t, r) {
                    try {
                      var o = ((a = n.injector.get(Is)).runInitializers(), a.donePromise.then((function () {
                        return us(n.injector.get(Ls, "en-US") || "en-US"), i._moduleDoBootstrap(n), n
                      })));
                      return Vo(o) ? o.catch((function (n) {
                        throw t.runOutsideAngular((function () {
                          return e.handleError(n)
                        })), n
                      })) : o
                    } catch (s) {
                      throw t.runOutsideAngular((function () {
                        return e.handleError(s)
                      })), s
                    }
                    var a
                  }(r, o)
              }))
            }
          }, {
            key: "bootstrapModule",
            value: function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = vu({}, n);
              return lu(this.injector, r, e).then((function (e) {
                return t.bootstrapModuleFactory(e, r)
              }))
            }
          }, {
            key: "_moduleDoBootstrap",
            value: function (e) {
              var t = e.injector.get(gu);
              if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach((function (e) {
                return t.bootstrap(e)
              }));
              else {
                if (!e.instance.ngDoBootstrap) throw new Error("The module ".concat(be(e.instance.constructor), ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ') + "Please define one of these.");
                e.instance.ngDoBootstrap(t)
              }
              this._modules.push(e)
            }
          }, {
            key: "onDestroy",
            value: function (e) {
              this._destroyListeners.push(e)
            }
          }, {
            key: "destroy",
            value: function () {
              if (this._destroyed) throw new Error("The platform has already been destroyed!");
              this._modules.slice().forEach((function (e) {
                return e.destroy()
              })), this._destroyListeners.forEach((function (e) {
                return e()
              })), this._destroyed = !0
            }
          }, {
            key: "injector",
            get: function () {
              return this._injector
            }
          }, {
            key: "destroyed",
            get: function () {
              return this._destroyed
            }
          }]), e
        }();
        return e.\u0275fac = function (t) {
          return new(t || e)(Je(co))
        }, e.\u0275prov = fe({
          token: e,
          factory: e.\u0275fac
        }), e
      }();

      function vu(e, t) {
        return Array.isArray(t) ? t.reduce(vu, e) : Object.assign(Object.assign({}, e), t)
      }
      var mu, gu = ((mu = function () {
        function e(t, n, r, i, o, a) {
          var s = this;
          _classCallCheck(this, e), this._zone = t, this._console = n, this._injector = r, this._exceptionHandler = i, this._componentFactoryResolver = o, this._initStatus = a, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = ar(), this._zone.onMicrotaskEmpty.subscribe({
            next: function () {
              s._zone.run((function () {
                s.tick()
              }))
            }
          });
          var u = new b((function (e) {
              s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks, s._zone.runOutsideAngular((function () {
                e.next(s._stable), e.complete()
              }))
            })),
            l = new b((function (e) {
              var t;
              s._zone.runOutsideAngular((function () {
                t = s._zone.onStable.subscribe((function () {
                  Ys.assertNotInAngularZone(), Js((function () {
                    s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || (s._stable = !0, e.next(!0))
                  }))
                }))
              }));
              var n = s._zone.onUnstable.subscribe((function () {
                Ys.assertInAngularZone(), s._stable && (s._stable = !1, s._zone.runOutsideAngular((function () {
                  e.next(!1)
                })))
              }));
              return function () {
                t.unsubscribe(), n.unsubscribe()
              }
            }));
          this.isStable = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = Number.POSITIVE_INFINITY,
              i = null,
              o = t[t.length - 1];
            return I(o) ? (i = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (r = t.pop())) : "number" == typeof o && (r = t.pop()), null === i && 1 === t.length && t[0] instanceof b ? t[0] : Z(r)(Q(t, i))
          }(u, l.pipe((function (e) {
            return J()((t = ne, function (e) {
              var n;
              n = "function" == typeof t ? t : function () {
                return t
              };
              var r = Object.create(e, ee);
              return r.source = e, r.subjectFactory = n, r
            })(e));
            var t
          })))
        }
        return _createClass(e, [{
          key: "bootstrap",
          value: function (e, t) {
            var n, r = this;
            if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
            n = e instanceof ka ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
            var i = n.isBoundToModule ? void 0 : this._injector.get(et),
              o = n.create(co.NULL, [], t || n.selector, i);
            o.onDestroy((function () {
              r._unloadComponent(o)
            }));
            var a = o.injector.get(au, null);
            return a && o.injector.get(su).registerApplication(o.location.nativeElement, a), this._loadComponent(o), ar() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), o
          }
        }, {
          key: "tick",
          value: function () {
            var e = this;
            if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              var t, n = _createForOfIteratorHelper(this._views);
              try {
                for (n.s(); !(t = n.n()).done;) t.value.detectChanges()
              } catch (o) {
                n.e(o)
              } finally {
                n.f()
              }
              if (this._enforceNoNewChanges) {
                var r, i = _createForOfIteratorHelper(this._views);
                try {
                  for (i.s(); !(r = i.n()).done;) r.value.checkNoChanges()
                } catch (o) {
                  i.e(o)
                } finally {
                  i.f()
                }
              }
            } catch (a) {
              this._zone.runOutsideAngular((function () {
                return e._exceptionHandler.handleError(a)
              }))
            } finally {
              this._runningTick = !1
            }
          }
        }, {
          key: "attachView",
          value: function (e) {
            var t = e;
            this._views.push(t), t.attachToAppRef(this)
          }
        }, {
          key: "detachView",
          value: function (e) {
            var t = e;
            yu(this._views, t), t.detachFromAppRef()
          }
        }, {
          key: "_loadComponent",
          value: function (e) {
            this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(Ds, []).concat(this._bootstrapListeners).forEach((function (t) {
              return t(e)
            }))
          }
        }, {
          key: "_unloadComponent",
          value: function (e) {
            this.detachView(e.hostView), yu(this.components, e)
          }
        }, {
          key: "ngOnDestroy",
          value: function () {
            this._views.slice().forEach((function (e) {
              return e.destroy()
            }))
          }
        }, {
          key: "viewCount",
          get: function () {
            return this._views.length
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || mu)(Je(Ys), Je(Vs), Je(co), Je(tr), Je(ba), Je(Is))
      }, mu.\u0275prov = fe({
        token: mu,
        factory: mu.\u0275fac
      }), mu);

      function yu(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      var _u = function e() {
          _classCallCheck(this, e)
        },
        ku = function e() {
          _classCallCheck(this, e)
        },
        Cu = {
          factoryPathPrefix: "",
          factoryPathSuffix: ".ngfactory"
        },
        bu = function () {
          var e = function () {
            function e(t, n) {
              _classCallCheck(this, e), this._compiler = t, this._config = n || Cu
            }
            return _createClass(e, [{
              key: "load",
              value: function (e) {
                return this.loadAndCompile(e)
              }
            }, {
              key: "loadAndCompile",
              value: function (e) {
                var t = this,
                  r = _slicedToArray(e.split("#"), 2),
                  i = r[0],
                  o = r[1];
                return void 0 === o && (o = "default"), n("zn8P")(i).then((function (e) {
                  return e[o]
                })).then((function (e) {
                  return wu(e, i, o)
                })).then((function (e) {
                  return t._compiler.compileModuleAsync(e)
                }))
              }
            }, {
              key: "loadFactory",
              value: function (e) {
                var t = _slicedToArray(e.split("#"), 2),
                  r = t[0],
                  i = t[1],
                  o = "NgFactory";
                return void 0 === i && (i = "default", o = ""), n("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then((function (e) {
                  return e[i + o]
                })).then((function (e) {
                  return wu(e, r, i)
                }))
              }
            }]), e
          }();
          return e.\u0275fac = function (t) {
            return new(t || e)(Je($s), Je(ku, 8))
          }, e.\u0275prov = fe({
            token: e,
            factory: e.\u0275fac
          }), e
        }();

      function wu(e, t, n) {
        if (!e) throw new Error("Cannot find '".concat(n, "' in '").concat(t, "'"));
        return e
      }
      var Su = fu(null, "core", [{
          provide: Ms,
          useValue: "unknown"
        }, {
          provide: pu,
          deps: [co]
        }, {
          provide: su,
          deps: []
        }, {
          provide: Vs,
          deps: []
        }]),
        Eu = [{
          provide: gu,
          useClass: gu,
          deps: [Ys, Vs, co, tr, ba, Is]
        }, {
          provide: Xa,
          deps: [Ys],
          useFactory: function (e) {
            var t = [];
            return e.onStable.subscribe((function () {
                for (; t.length;) t.pop()()
              })),
              function (e) {
                t.push(e)
              }
          }
        }, {
          provide: Is,
          useClass: Is,
          deps: [
            [new ae, Ts]
          ]
        }, {
          provide: $s,
          useClass: $s,
          deps: []
        }, Fs, {
          provide: Ha,
          useFactory: function () {
            return Ga
          },
          deps: []
        }, {
          provide: qa,
          useFactory: function () {
            return Ba
          },
          deps: []
        }, {
          provide: Ls,
          useFactory: function (e) {
            return us(e = e || "undefined" != typeof $localize && $localize.locale || "en-US"), e
          },
          deps: [
            [new oe(Ls), new ae, new ue]
          ]
        }, {
          provide: js,
          useValue: "USD"
        }],
        xu = function () {
          var e = function e(t) {
            _classCallCheck(this, e)
          };
          return e.\u0275mod = mt({
            type: e
          }), e.\u0275inj = de({
            factory: function (t) {
              return new(t || e)(Je(gu))
            },
            providers: Eu
          }), e
        }(),
        Au = null;

      function Ou() {
        return Au
      }
      var Tu, Iu = new He("DocumentToken"),
        Pu = ((Tu = function e() {
          _classCallCheck(this, e)
        }).\u0275fac = function (e) {
          return new(e || Tu)
        }, Tu.\u0275prov = fe({
          factory: Fu,
          token: Tu,
          providedIn: "platform"
        }), Tu);

      function Fu() {
        return Je(Mu)
      }
      var Ru, Nu = new He("Location Initialized"),
        Mu = ((Ru = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this))._doc = e, r._init(), r
          }
          return _createClass(n, [{
            key: "_init",
            value: function () {
              this.location = Ou().getLocation(), this._history = Ou().getHistory()
            }
          }, {
            key: "getBaseHrefFromDOM",
            value: function () {
              return Ou().getBaseHref(this._doc)
            }
          }, {
            key: "onPopState",
            value: function (e) {
              Ou().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1)
            }
          }, {
            key: "onHashChange",
            value: function (e) {
              Ou().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1)
            }
          }, {
            key: "pushState",
            value: function (e, t, n) {
              Du() ? this._history.pushState(e, t, n) : this.location.hash = n
            }
          }, {
            key: "replaceState",
            value: function (e, t, n) {
              Du() ? this._history.replaceState(e, t, n) : this.location.hash = n
            }
          }, {
            key: "forward",
            value: function () {
              this._history.forward()
            }
          }, {
            key: "back",
            value: function () {
              this._history.back()
            }
          }, {
            key: "getState",
            value: function () {
              return this._history.state
            }
          }, {
            key: "href",
            get: function () {
              return this.location.href
            }
          }, {
            key: "protocol",
            get: function () {
              return this.location.protocol
            }
          }, {
            key: "hostname",
            get: function () {
              return this.location.hostname
            }
          }, {
            key: "port",
            get: function () {
              return this.location.port
            }
          }, {
            key: "pathname",
            get: function () {
              return this.location.pathname
            },
            set: function (e) {
              this.location.pathname = e
            }
          }, {
            key: "search",
            get: function () {
              return this.location.search
            }
          }, {
            key: "hash",
            get: function () {
              return this.location.hash
            }
          }]), n
        }(Pu)).\u0275fac = function (e) {
          return new(e || Ru)(Je(Iu))
        }, Ru.\u0275prov = fe({
          factory: Vu,
          token: Ru,
          providedIn: "platform"
        }), Ru);

      function Du() {
        return !!window.history.pushState
      }

      function Vu() {
        return new Mu(Je(Iu))
      }

      function Lu(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        var n = 0;
        return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
      }

      function ju(e) {
        var t = e.match(/#|\?|$/),
          n = t && t.index || e.length;
        return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
      }

      function Uu(e) {
        return e && "?" !== e[0] ? "?" + e : e
      }
      var Hu, qu = ((Hu = function e() {
        _classCallCheck(this, e)
      }).\u0275fac = function (e) {
        return new(e || Hu)
      }, Hu.\u0275prov = fe({
        factory: zu,
        token: Hu,
        providedIn: "root"
      }), Hu);

      function zu(e) {
        var t = Je(Iu).location;
        return new Zu(Je(Pu), t && t.origin || "")
      }
      var Gu, Bu, Wu, $u = new He("appBaseHref"),
        Zu = ((Wu = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            if (_classCallCheck(this, n), (i = t.call(this))._platformLocation = e, null == r && (r = i._platformLocation.getBaseHrefFromDOM()), null == r) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            return i._baseHref = r, _possibleConstructorReturn(i)
          }
          return _createClass(n, [{
            key: "onPopState",
            value: function (e) {
              this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
            }
          }, {
            key: "getBaseHref",
            value: function () {
              return this._baseHref
            }
          }, {
            key: "prepareExternalUrl",
            value: function (e) {
              return Lu(this._baseHref, e)
            }
          }, {
            key: "path",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = this._platformLocation.pathname + Uu(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && e ? "".concat(t).concat(n) : t
            }
          }, {
            key: "pushState",
            value: function (e, t, n, r) {
              var i = this.prepareExternalUrl(n + Uu(r));
              this._platformLocation.pushState(e, t, i)
            }
          }, {
            key: "replaceState",
            value: function (e, t, n, r) {
              var i = this.prepareExternalUrl(n + Uu(r));
              this._platformLocation.replaceState(e, t, i)
            }
          }, {
            key: "forward",
            value: function () {
              this._platformLocation.forward()
            }
          }, {
            key: "back",
            value: function () {
              this._platformLocation.back()
            }
          }]), n
        }(qu)).\u0275fac = function (e) {
          return new(e || Wu)(Je(Pu), Je($u, 8))
        }, Wu.\u0275prov = fe({
          token: Wu,
          factory: Wu.\u0275fac
        }), Wu),
        Qu = ((Bu = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this))._platformLocation = e, i._baseHref = "", null != r && (i._baseHref = r), i
          }
          return _createClass(n, [{
            key: "onPopState",
            value: function (e) {
              this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
            }
          }, {
            key: "getBaseHref",
            value: function () {
              return this._baseHref
            }
          }, {
            key: "path",
            value: function () {
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              var e = this._platformLocation.hash;
              return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
            }
          }, {
            key: "prepareExternalUrl",
            value: function (e) {
              var t = Lu(this._baseHref, e);
              return t.length > 0 ? "#" + t : t
            }
          }, {
            key: "pushState",
            value: function (e, t, n, r) {
              var i = this.prepareExternalUrl(n + Uu(r));
              0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(e, t, i)
            }
          }, {
            key: "replaceState",
            value: function (e, t, n, r) {
              var i = this.prepareExternalUrl(n + Uu(r));
              0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, i)
            }
          }, {
            key: "forward",
            value: function () {
              this._platformLocation.forward()
            }
          }, {
            key: "back",
            value: function () {
              this._platformLocation.back()
            }
          }]), n
        }(qu)).\u0275fac = function (e) {
          return new(e || Bu)(Je(Pu), Je($u, 8))
        }, Bu.\u0275prov = fe({
          token: Bu,
          factory: Bu.\u0275fac
        }), Bu),
        Ju = ((Gu = function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e), this._subject = new ps, this._urlChangeListeners = [], this._platformStrategy = t;
            var i = this._platformStrategy.getBaseHref();
            this._platformLocation = n, this._baseHref = ju(Ku(i)), this._platformStrategy.onPopState((function (e) {
              r._subject.emit({
                url: r.path(!0),
                pop: !0,
                state: e.state,
                type: e.type
              })
            }))
          }
          return _createClass(e, [{
            key: "path",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return this.normalize(this._platformStrategy.path(e))
            }
          }, {
            key: "getState",
            value: function () {
              return this._platformLocation.getState()
            }
          }, {
            key: "isCurrentPathEqualTo",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              return this.path() == this.normalize(e + Uu(t))
            }
          }, {
            key: "normalize",
            value: function (t) {
              return e.stripTrailingSlash(function (e, t) {
                return e && t.startsWith(e) ? t.substring(e.length) : t
              }(this._baseHref, Ku(t)))
            }
          }, {
            key: "prepareExternalUrl",
            value: function (e) {
              return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e)
            }
          }, {
            key: "go",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              this._platformStrategy.pushState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + Uu(t)), n)
            }
          }, {
            key: "replaceState",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              this._platformStrategy.replaceState(n, "", e, t), this._notifyUrlChangeListeners(this.prepareExternalUrl(e + Uu(t)), n)
            }
          }, {
            key: "forward",
            value: function () {
              this._platformStrategy.forward()
            }
          }, {
            key: "back",
            value: function () {
              this._platformStrategy.back()
            }
          }, {
            key: "onUrlChange",
            value: function (e) {
              var t = this;
              this._urlChangeListeners.push(e), this.subscribe((function (e) {
                t._notifyUrlChangeListeners(e.url, e.state)
              }))
            }
          }, {
            key: "_notifyUrlChangeListeners",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0;
              this._urlChangeListeners.forEach((function (n) {
                return n(e, t)
              }))
            }
          }, {
            key: "subscribe",
            value: function (e, t, n) {
              return this._subject.subscribe({
                next: e,
                error: t,
                complete: n
              })
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Gu)(Je(qu), Je(Pu))
        }, Gu.normalizeQueryParams = Uu, Gu.joinWithSlash = Lu, Gu.stripTrailingSlash = ju, Gu.\u0275prov = fe({
          factory: Yu,
          token: Gu,
          providedIn: "root"
        }), Gu);

      function Yu() {
        return new Ju(Je(qu), Je(Pu))
      }

      function Ku(e) {
        return e.replace(/\/index.html$/, "")
      }
      var Xu = function () {
          var e = {
            Zero: 0,
            One: 1,
            Two: 2,
            Few: 3,
            Many: 4,
            Other: 5
          };
          return e[e.Zero] = "Zero", e[e.One] = "One", e[e.Two] = "Two", e[e.Few] = "Few", e[e.Many] = "Many", e[e.Other] = "Other", e
        }(),
        el = function () {
          var e = {
            Format: 0,
            Standalone: 1
          };
          return e[e.Format] = "Format", e[e.Standalone] = "Standalone", e
        }(),
        tl = function () {
          var e = {
            Narrow: 0,
            Abbreviated: 1,
            Wide: 2,
            Short: 3
          };
          return e[e.Narrow] = "Narrow", e[e.Abbreviated] = "Abbreviated", e[e.Wide] = "Wide", e[e.Short] = "Short", e
        }(),
        nl = function () {
          var e = {
            Short: 0,
            Medium: 1,
            Long: 2,
            Full: 3
          };
          return e[e.Short] = "Short", e[e.Medium] = "Medium", e[e.Long] = "Long", e[e.Full] = "Full", e
        }(),
        rl = function () {
          var e = {
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
          return e[e.Decimal] = "Decimal", e[e.Group] = "Group", e[e.List] = "List", e[e.PercentSign] = "PercentSign", e[e.PlusSign] = "PlusSign", e[e.MinusSign] = "MinusSign", e[e.Exponential] = "Exponential", e[e.SuperscriptingExponent] = "SuperscriptingExponent", e[e.PerMille] = "PerMille", e[e.Infinity] = "Infinity", e[e.NaN] = "NaN", e[e.TimeSeparator] = "TimeSeparator", e[e.CurrencyDecimal] = "CurrencyDecimal", e[e.CurrencyGroup] = "CurrencyGroup", e
        }();

      function il(e, t) {
        return ll(os(e)[ss.DateFormat], t)
      }

      function ol(e, t) {
        return ll(os(e)[ss.TimeFormat], t)
      }

      function al(e, t) {
        return ll(os(e)[ss.DateTimeFormat], t)
      }

      function sl(e, t) {
        var n = os(e),
          r = n[ss.NumberSymbols][t];
        if (void 0 === r) {
          if (t === rl.CurrencyDecimal) return n[ss.NumberSymbols][rl.Decimal];
          if (t === rl.CurrencyGroup) return n[ss.NumberSymbols][rl.Group]
        }
        return r
      }

      function ul(e) {
        if (!e[ss.ExtraData]) throw new Error('Missing extra locale data for the locale "'.concat(e[ss.LocaleId], '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.'))
      }

      function ll(e, t) {
        for (var n = t; n > -1; n--)
          if (void 0 !== e[n]) return e[n];
        throw new Error("Locale data API: locale data undefined")
      }

      function cl(e) {
        var t = _slicedToArray(e.split(":"), 2);
        return {
          hours: +t[0],
          minutes: +t[1]
        }
      }
      var hl = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        fl = {},
        dl = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        pl = function () {
          var e = {
            Short: 0,
            ShortGMT: 1,
            Long: 2,
            Extended: 3
          };
          return e[e.Short] = "Short", e[e.ShortGMT] = "ShortGMT", e[e.Long] = "Long", e[e.Extended] = "Extended", e
        }(),
        vl = function () {
          var e = {
            FullYear: 0,
            Month: 1,
            Date: 2,
            Hours: 3,
            Minutes: 4,
            Seconds: 5,
            FractionalSeconds: 6,
            Day: 7
          };
          return e[e.FullYear] = "FullYear", e[e.Month] = "Month", e[e.Date] = "Date", e[e.Hours] = "Hours", e[e.Minutes] = "Minutes", e[e.Seconds] = "Seconds", e[e.FractionalSeconds] = "FractionalSeconds", e[e.Day] = "Day", e
        }(),
        ml = function () {
          var e = {
            DayPeriods: 0,
            Days: 1,
            Months: 2,
            Eras: 3
          };
          return e[e.DayPeriods] = "DayPeriods", e[e.Days] = "Days", e[e.Months] = "Months", e[e.Eras] = "Eras", e
        }();

      function gl(e, t) {
        return t && (e = e.replace(/\{([^}]+)}/g, (function (e, n) {
          return null != t && n in t ? t[n] : e
        }))), e
      }

      function yl(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "-",
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0,
          o = "";
        (e < 0 || i && e <= 0) && (i ? e = 1 - e : (e = -e, o = n));
        for (var a = String(e); a.length < t;) a = "0" + a;
        return r && (a = a.substr(a.length - t)), o + a
      }

      function _l(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        return function (o, a) {
          var s, u = function (e, t) {
            switch (e) {
              case vl.FullYear:
                return t.getFullYear();
              case vl.Month:
                return t.getMonth();
              case vl.Date:
                return t.getDate();
              case vl.Hours:
                return t.getHours();
              case vl.Minutes:
                return t.getMinutes();
              case vl.Seconds:
                return t.getSeconds();
              case vl.FractionalSeconds:
                return t.getMilliseconds();
              case vl.Day:
                return t.getDay();
              default:
                throw new Error('Unknown DateType value "'.concat(e, '".'))
            }
          }(e, o);
          if ((n > 0 || u > -n) && (u += n), e === vl.Hours) 0 === u && -12 === n && (u = 12);
          else if (e === vl.FractionalSeconds) return s = t, yl(u, 3).substr(0, s);
          var l = sl(a, rl.MinusSign);
          return yl(u, t, l, r, i)
        }
      }

      function kl(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : el.Format,
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return function (i, o) {
          return function (e, t, n, r, i, o) {
            switch (n) {
              case ml.Months:
                return function (e, t, n) {
                  var r = os(e),
                    i = ll([r[ss.MonthsFormat], r[ss.MonthsStandalone]], t);
                  return ll(i, n)
                }(t, i, r)[e.getMonth()];
              case ml.Days:
                return function (e, t, n) {
                  var r = os(e),
                    i = ll([r[ss.DaysFormat], r[ss.DaysStandalone]], t);
                  return ll(i, n)
                }(t, i, r)[e.getDay()];
              case ml.DayPeriods:
                var a = e.getHours(),
                  s = e.getMinutes();
                if (o) {
                  var u, l = function (e) {
                      var t = os(e);
                      return ul(t), (t[ss.ExtraData][2] || []).map((function (e) {
                        return "string" == typeof e ? cl(e) : [cl(e[0]), cl(e[1])]
                      }))
                    }(t),
                    c = function (e, t, n) {
                      var r = os(e);
                      ul(r);
                      var i = ll([r[ss.ExtraData][0], r[ss.ExtraData][1]], t) || [];
                      return ll(i, n) || []
                    }(t, i, r);
                  if (l.forEach((function (e, t) {
                      if (Array.isArray(e)) {
                        var n = e[0],
                          r = n.hours,
                          i = n.minutes,
                          o = e[1],
                          l = o.hours,
                          h = o.minutes;
                        a >= r && s >= i && (a < l || a === l && s < h) && (u = c[t])
                      } else {
                        var f = e.hours,
                          d = e.minutes;
                        f === a && d === s && (u = c[t])
                      }
                    })), u) return u
                }
                return function (e, t, n) {
                  var r = os(e),
                    i = ll([r[ss.DayPeriodsFormat], r[ss.DayPeriodsStandalone]], t);
                  return ll(i, n)
                }(t, i, r)[a < 12 ? 0 : 1];
              case ml.Eras:
                return function (e, t) {
                  return ll(os(e)[ss.Eras], t)
                }(t, r)[e.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error("unexpected translation type ".concat(n))
            }
          }(i, o, e, t, n, r)
        }
      }

      function Cl(e) {
        return function (t, n, r) {
          var i = -1 * r,
            o = sl(n, rl.MinusSign),
            a = i > 0 ? Math.floor(i / 60) : Math.ceil(i / 60);
          switch (e) {
            case pl.Short:
              return (i >= 0 ? "+" : "") + yl(a, 2, o) + yl(Math.abs(i % 60), 2, o);
            case pl.ShortGMT:
              return "GMT" + (i >= 0 ? "+" : "") + yl(a, 1, o);
            case pl.Long:
              return "GMT" + (i >= 0 ? "+" : "") + yl(a, 2, o) + ":" + yl(Math.abs(i % 60), 2, o);
            case pl.Extended:
              return 0 === r ? "Z" : (i >= 0 ? "+" : "") + yl(a, 2, o) + ":" + yl(Math.abs(i % 60), 2, o);
            default:
              throw new Error('Unknown zone width "'.concat(e, '"'))
          }
        }
      }

      function bl(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return function (n, r) {
          var i, o, a, s;
          if (t) {
            var u = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              l = n.getDate();
            i = 1 + Math.floor((l + u) / 7)
          } else {
            var c = (o = n.getFullYear(), a = new Date(o, 0, 1).getDay(), new Date(o, 0, 1 + (a <= 4 ? 4 : 11) - a)),
              h = (s = n, new Date(s.getFullYear(), s.getMonth(), s.getDate() + (4 - s.getDay()))).getTime() - c.getTime();
            i = 1 + Math.round(h / 6048e5)
          }
          return yl(i, e, sl(r, rl.MinusSign))
        }
      }
      var wl = {};

      function Sl(e, t) {
        e = e.replace(/:/g, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n
      }

      function El(e) {
        return e instanceof Date && !isNaN(e.valueOf())
      }
      var xl, Al = function e() {
          _classCallCheck(this, e)
        },
        Ol = ((xl = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this)).locale = e, r
          }
          return _createClass(n, [{
            key: "getPluralCategory",
            value: function (e, t) {
              switch (function (e) {
                return os(e)[ss.PluralCase]
              }(t || this.locale)(e)) {
                case Xu.Zero:
                  return "zero";
                case Xu.One:
                  return "one";
                case Xu.Two:
                  return "two";
                case Xu.Few:
                  return "few";
                case Xu.Many:
                  return "many";
                default:
                  return "other"
              }
            }
          }]), n
        }(Al)).\u0275fac = function (e) {
          return new(e || xl)(Je(Ls))
        }, xl.\u0275prov = fe({
          token: xl,
          factory: xl.\u0275fac
        }), xl);

      function Tl(e, t) {
        t = encodeURIComponent(t);
        var n, r = _createForOfIteratorHelper(e.split(";"));
        try {
          for (r.s(); !(n = r.n()).done;) {
            var i = n.value,
              o = i.indexOf("="),
              a = _slicedToArray(-1 == o ? [i, ""] : [i.slice(0, o), i.slice(o + 1)], 2),
              s = a[0],
              u = a[1];
            if (s.trim() === t) return decodeURIComponent(u)
          }
        } catch (l) {
          r.e(l)
        } finally {
          r.f()
        }
        return null
      }
      var Il, Pl, Fl, Rl = ((Il = function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e), this._iterableDiffers = t, this._keyValueDiffers = n, this._ngEl = r, this._renderer = i, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
          }
          return _createClass(e, [{
            key: "ngDoCheck",
            value: function () {
              if (this._iterableDiffer) {
                var e = this._iterableDiffer.diff(this._rawClass);
                e && this._applyIterableChanges(e)
              } else if (this._keyValueDiffer) {
                var t = this._keyValueDiffer.diff(this._rawClass);
                t && this._applyKeyValueChanges(t)
              }
            }
          }, {
            key: "_applyKeyValueChanges",
            value: function (e) {
              var t = this;
              e.forEachAddedItem((function (e) {
                return t._toggleClass(e.key, e.currentValue)
              })), e.forEachChangedItem((function (e) {
                return t._toggleClass(e.key, e.currentValue)
              })), e.forEachRemovedItem((function (e) {
                e.previousValue && t._toggleClass(e.key, !1)
              }))
            }
          }, {
            key: "_applyIterableChanges",
            value: function (e) {
              var t = this;
              e.forEachAddedItem((function (e) {
                if ("string" != typeof e.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got ".concat(be(e.item)));
                t._toggleClass(e.item, !0)
              })), e.forEachRemovedItem((function (e) {
                return t._toggleClass(e.item, !1)
              }))
            }
          }, {
            key: "_applyClasses",
            value: function (e) {
              var t = this;
              e && (Array.isArray(e) || e instanceof Set ? e.forEach((function (e) {
                return t._toggleClass(e, !0)
              })) : Object.keys(e).forEach((function (n) {
                return t._toggleClass(n, !!e[n])
              })))
            }
          }, {
            key: "_removeClasses",
            value: function (e) {
              var t = this;
              e && (Array.isArray(e) || e instanceof Set ? e.forEach((function (e) {
                return t._toggleClass(e, !1)
              })) : Object.keys(e).forEach((function (e) {
                return t._toggleClass(e, !1)
              })))
            }
          }, {
            key: "_toggleClass",
            value: function (e, t) {
              var n = this;
              (e = e.trim()) && e.split(/\s+/g).forEach((function (e) {
                t ? n._renderer.addClass(n._ngEl.nativeElement, e) : n._renderer.removeClass(n._ngEl.nativeElement, e)
              }))
            }
          }, {
            key: "klass",
            set: function (e) {
              this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof e ? e.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
            }
          }, {
            key: "ngClass",
            set: function (e) {
              this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof e ? e.split(/\s+/) : e, this._rawClass && (Co(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Il)(Oo(Ha), Oo(qa), Oo(wa), Oo(Aa))
        }, Il.\u0275dir = yt({
          type: Il,
          selectors: [
            ["", "ngClass", ""]
          ],
          inputs: {
            klass: ["class", "klass"],
            ngClass: "ngClass"
          }
        }), Il),
        Nl = function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e), this.$implicit = t, this.ngForOf = n, this.index = r, this.count = i
          }
          return _createClass(e, [{
            key: "first",
            get: function () {
              return 0 === this.index
            }
          }, {
            key: "last",
            get: function () {
              return this.index === this.count - 1
            }
          }, {
            key: "even",
            get: function () {
              return this.index % 2 == 0
            }
          }, {
            key: "odd",
            get: function () {
              return !this.even
            }
          }]), e
        }(),
        Ml = ((Pl = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this._viewContainer = t, this._template = n, this._differs = r, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
          }
          return _createClass(e, [{
            key: "ngDoCheck",
            value: function () {
              if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                var e = this._ngForOf;
                if (!this._differ && e) try {
                  this._differ = this._differs.find(e).create(this.ngForTrackBy)
                } catch (r) {
                  throw new Error("Cannot find a differ supporting object '".concat(e, "' of type '").concat((t = e).name || typeof t, "'. NgFor only supports binding to Iterables such as Arrays."))
                }
              }
              var t;
              if (this._differ) {
                var n = this._differ.diff(this._ngForOf);
                n && this._applyChanges(n)
              }
            }
          }, {
            key: "_applyChanges",
            value: function (e) {
              var t = this,
                n = [];
              e.forEachOperation((function (e, r, i) {
                if (null == e.previousIndex) {
                  var o = t._viewContainer.createEmbeddedView(t._template, new Nl(null, t._ngForOf, -1, -1), null === i ? void 0 : i),
                    a = new Dl(e, o);
                  n.push(a)
                } else if (null == i) t._viewContainer.remove(null === r ? void 0 : r);
                else if (null !== r) {
                  var s = t._viewContainer.get(r);
                  t._viewContainer.move(s, i);
                  var u = new Dl(e, s);
                  n.push(u)
                }
              }));
              for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
              for (var i = 0, o = this._viewContainer.length; i < o; i++) {
                var a = this._viewContainer.get(i);
                a.context.index = i, a.context.count = o, a.context.ngForOf = this._ngForOf
              }
              e.forEachIdentityChange((function (e) {
                t._viewContainer.get(e.currentIndex).context.$implicit = e.item
              }))
            }
          }, {
            key: "_perViewChange",
            value: function (e, t) {
              e.context.$implicit = t.item
            }
          }, {
            key: "ngForOf",
            set: function (e) {
              this._ngForOf = e, this._ngForOfDirty = !0
            }
          }, {
            key: "ngForTrackBy",
            set: function (e) {
              ar() && null != e && "function" != typeof e && console && console.warn && console.warn("trackBy must be a function, but received ".concat(JSON.stringify(e), ". ") + "See https://angular.io/api/common/NgForOf#change-propagation for more information."), this._trackByFn = e
            },
            get: function () {
              return this._trackByFn
            }
          }, {
            key: "ngForTemplate",
            set: function (e) {
              e && (this._template = e)
            }
          }], [{
            key: "ngTemplateContextGuard",
            value: function (e, t) {
              return !0
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Pl)(Oo(Za), Oo(Wa), Oo(Ha))
        }, Pl.\u0275dir = yt({
          type: Pl,
          selectors: [
            ["", "ngFor", "", "ngForOf", ""]
          ],
          inputs: {
            ngForOf: "ngForOf",
            ngForTrackBy: "ngForTrackBy",
            ngForTemplate: "ngForTemplate"
          }
        }), Pl),
        Dl = function e(t, n) {
          _classCallCheck(this, e), this.record = t, this.view = n
        },
        Vl = ((Fl = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._viewContainer = t, this._context = new Ll, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = n
          }
          return _createClass(e, [{
            key: "_updateView",
            value: function () {
              this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
          }, {
            key: "ngIf",
            set: function (e) {
              this._context.$implicit = this._context.ngIf = e, this._updateView()
            }
          }, {
            key: "ngIfThen",
            set: function (e) {
              jl("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView()
            }
          }, {
            key: "ngIfElse",
            set: function (e) {
              jl("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView()
            }
          }], [{
            key: "ngTemplateContextGuard",
            value: function (e, t) {
              return !0
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Fl)(Oo(Za), Oo(Wa))
        }, Fl.\u0275dir = yt({
          type: Fl,
          selectors: [
            ["", "ngIf", ""]
          ],
          inputs: {
            ngIf: "ngIf",
            ngIfThen: "ngIfThen",
            ngIfElse: "ngIfElse"
          }
        }), Fl),
        Ll = function e() {
          _classCallCheck(this, e), this.$implicit = null, this.ngIf = null
        };

      function jl(e, t) {
        if (t && !t.createEmbeddedView) throw new Error("".concat(e, " must be a TemplateRef, but received '").concat(be(t), "'."))
      }
      var Ul, Hl, ql, zl, Gl, Bl, Wl, $l, Zl = ((zl = function () {
          function e(t) {
            _classCallCheck(this, e), this.locale = t
          }
          return _createClass(e, [{
            key: "transform",
            value: function (t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mediumDate",
                r = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 ? arguments[3] : void 0;
              if (null == t || "" === t || t != t) return null;
              try {
                return function (e, t, n, r) {
                  var i = function (e) {
                    if (El(e)) return e;
                    if ("number" == typeof e && !isNaN(e)) return new Date(e);
                    if ("string" == typeof e) {
                      e = e.trim();
                      var t, n = parseFloat(e);
                      if (!isNaN(e - n)) return new Date(n);
                      if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                        var r = _slicedToArray(e.split("-").map((function (e) {
                            return +e
                          })), 3),
                          i = r[0],
                          o = r[1],
                          a = r[2];
                        return new Date(i, o - 1, a)
                      }
                      if (t = e.match(hl)) return function (e) {
                        var t = new Date(0),
                          n = 0,
                          r = 0,
                          i = e[8] ? t.setUTCFullYear : t.setFullYear,
                          o = e[8] ? t.setUTCHours : t.setHours;
                        e[9] && (n = Number(e[9] + e[10]), r = Number(e[9] + e[11])), i.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
                        var a = Number(e[4] || 0) - n,
                          s = Number(e[5] || 0) - r,
                          u = Number(e[6] || 0),
                          l = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                        return o.call(t, a, s, u, l), t
                      }(t)
                    }
                    var s = new Date(e);
                    if (!El(s)) throw new Error('Unable to convert "'.concat(e, '" into a date'));
                    return s
                  }(e);
                  t = function e(t, n) {
                    var r = function (e) {
                      return os(e)[ss.LocaleId]
                    }(t);
                    if (fl[r] = fl[r] || {}, fl[r][n]) return fl[r][n];
                    var i = "";
                    switch (n) {
                      case "shortDate":
                        i = il(t, nl.Short);
                        break;
                      case "mediumDate":
                        i = il(t, nl.Medium);
                        break;
                      case "longDate":
                        i = il(t, nl.Long);
                        break;
                      case "fullDate":
                        i = il(t, nl.Full);
                        break;
                      case "shortTime":
                        i = ol(t, nl.Short);
                        break;
                      case "mediumTime":
                        i = ol(t, nl.Medium);
                        break;
                      case "longTime":
                        i = ol(t, nl.Long);
                        break;
                      case "fullTime":
                        i = ol(t, nl.Full);
                        break;
                      case "short":
                        var o = e(t, "shortTime"),
                          a = e(t, "shortDate");
                        i = gl(al(t, nl.Short), [o, a]);
                        break;
                      case "medium":
                        var s = e(t, "mediumTime"),
                          u = e(t, "mediumDate");
                        i = gl(al(t, nl.Medium), [s, u]);
                        break;
                      case "long":
                        var l = e(t, "longTime"),
                          c = e(t, "longDate");
                        i = gl(al(t, nl.Long), [l, c]);
                        break;
                      case "full":
                        var h = e(t, "fullTime"),
                          f = e(t, "fullDate");
                        i = gl(al(t, nl.Full), [h, f])
                    }
                    return i && (fl[r][n] = i), i
                  }(n, t) || t;
                  for (var o, a = []; t;) {
                    if (!(o = dl.exec(t))) {
                      a.push(t);
                      break
                    }
                    var s = (a = a.concat(o.slice(1))).pop();
                    if (!s) break;
                    t = s
                  }
                  var u = i.getTimezoneOffset();
                  r && (u = Sl(r, u), i = function (e, t, n) {
                    var r = e.getTimezoneOffset();
                    return function (e, t) {
                      return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e
                    }(e, -1 * (Sl(t, r) - r))
                  }(i, r));
                  var l = "";
                  return a.forEach((function (e) {
                    var t = function (e) {
                      if (wl[e]) return wl[e];
                      var t;
                      switch (e) {
                        case "G":
                        case "GG":
                        case "GGG":
                          t = kl(ml.Eras, tl.Abbreviated);
                          break;
                        case "GGGG":
                          t = kl(ml.Eras, tl.Wide);
                          break;
                        case "GGGGG":
                          t = kl(ml.Eras, tl.Narrow);
                          break;
                        case "y":
                          t = _l(vl.FullYear, 1, 0, !1, !0);
                          break;
                        case "yy":
                          t = _l(vl.FullYear, 2, 0, !0, !0);
                          break;
                        case "yyy":
                          t = _l(vl.FullYear, 3, 0, !1, !0);
                          break;
                        case "yyyy":
                          t = _l(vl.FullYear, 4, 0, !1, !0);
                          break;
                        case "M":
                        case "L":
                          t = _l(vl.Month, 1, 1);
                          break;
                        case "MM":
                        case "LL":
                          t = _l(vl.Month, 2, 1);
                          break;
                        case "MMM":
                          t = kl(ml.Months, tl.Abbreviated);
                          break;
                        case "MMMM":
                          t = kl(ml.Months, tl.Wide);
                          break;
                        case "MMMMM":
                          t = kl(ml.Months, tl.Narrow);
                          break;
                        case "LLL":
                          t = kl(ml.Months, tl.Abbreviated, el.Standalone);
                          break;
                        case "LLLL":
                          t = kl(ml.Months, tl.Wide, el.Standalone);
                          break;
                        case "LLLLL":
                          t = kl(ml.Months, tl.Narrow, el.Standalone);
                          break;
                        case "w":
                          t = bl(1);
                          break;
                        case "ww":
                          t = bl(2);
                          break;
                        case "W":
                          t = bl(1, !0);
                          break;
                        case "d":
                          t = _l(vl.Date, 1);
                          break;
                        case "dd":
                          t = _l(vl.Date, 2);
                          break;
                        case "E":
                        case "EE":
                        case "EEE":
                          t = kl(ml.Days, tl.Abbreviated);
                          break;
                        case "EEEE":
                          t = kl(ml.Days, tl.Wide);
                          break;
                        case "EEEEE":
                          t = kl(ml.Days, tl.Narrow);
                          break;
                        case "EEEEEE":
                          t = kl(ml.Days, tl.Short);
                          break;
                        case "a":
                        case "aa":
                        case "aaa":
                          t = kl(ml.DayPeriods, tl.Abbreviated);
                          break;
                        case "aaaa":
                          t = kl(ml.DayPeriods, tl.Wide);
                          break;
                        case "aaaaa":
                          t = kl(ml.DayPeriods, tl.Narrow);
                          break;
                        case "b":
                        case "bb":
                        case "bbb":
                          t = kl(ml.DayPeriods, tl.Abbreviated, el.Standalone, !0);
                          break;
                        case "bbbb":
                          t = kl(ml.DayPeriods, tl.Wide, el.Standalone, !0);
                          break;
                        case "bbbbb":
                          t = kl(ml.DayPeriods, tl.Narrow, el.Standalone, !0);
                          break;
                        case "B":
                        case "BB":
                        case "BBB":
                          t = kl(ml.DayPeriods, tl.Abbreviated, el.Format, !0);
                          break;
                        case "BBBB":
                          t = kl(ml.DayPeriods, tl.Wide, el.Format, !0);
                          break;
                        case "BBBBB":
                          t = kl(ml.DayPeriods, tl.Narrow, el.Format, !0);
                          break;
                        case "h":
                          t = _l(vl.Hours, 1, -12);
                          break;
                        case "hh":
                          t = _l(vl.Hours, 2, -12);
                          break;
                        case "H":
                          t = _l(vl.Hours, 1);
                          break;
                        case "HH":
                          t = _l(vl.Hours, 2);
                          break;
                        case "m":
                          t = _l(vl.Minutes, 1);
                          break;
                        case "mm":
                          t = _l(vl.Minutes, 2);
                          break;
                        case "s":
                          t = _l(vl.Seconds, 1);
                          break;
                        case "ss":
                          t = _l(vl.Seconds, 2);
                          break;
                        case "S":
                          t = _l(vl.FractionalSeconds, 1);
                          break;
                        case "SS":
                          t = _l(vl.FractionalSeconds, 2);
                          break;
                        case "SSS":
                          t = _l(vl.FractionalSeconds, 3);
                          break;
                        case "Z":
                        case "ZZ":
                        case "ZZZ":
                          t = Cl(pl.Short);
                          break;
                        case "ZZZZZ":
                          t = Cl(pl.Extended);
                          break;
                        case "O":
                        case "OO":
                        case "OOO":
                        case "z":
                        case "zz":
                        case "zzz":
                          t = Cl(pl.ShortGMT);
                          break;
                        case "OOOO":
                        case "ZZZZ":
                        case "zzzz":
                          t = Cl(pl.Long);
                          break;
                        default:
                          return null
                      }
                      return wl[e] = t, t
                    }(e);
                    l += t ? t(i, n, u) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                  })), l
                }(t, n, i || this.locale, r)
              } catch (o) {
                throw function (e, t) {
                  return Error("InvalidPipeArgument: '".concat(t, "' for pipe '").concat(be(e), "'"))
                }(e, o.message)
              }
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || zl)(Oo(Ls))
        }, zl.\u0275pipe = _t({
          name: "date",
          type: zl,
          pure: !0
        }), zl),
        Ql = ((ql = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "transform",
            value: function (e) {
              return JSON.stringify(e, null, 2)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ql)
        }, ql.\u0275pipe = _t({
          name: "json",
          type: ql,
          pure: !1
        }), ql),
        Jl = ((Hl = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: Hl
        }), Hl.\u0275inj = de({
          factory: function (e) {
            return new(e || Hl)
          },
          providers: [{
            provide: Al,
            useClass: Ol
          }]
        }), Hl),
        Yl = ((Ul = function e() {
          _classCallCheck(this, e)
        }).\u0275prov = fe({
          token: Ul,
          providedIn: "root",
          factory: function () {
            return new Kl(Je(Iu), window, Je(tr))
          }
        }), Ul),
        Kl = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.document = t, this.window = n, this.errorHandler = r, this.offset = function () {
              return [0, 0]
            }
          }
          return _createClass(e, [{
            key: "setOffset",
            value: function (e) {
              this.offset = Array.isArray(e) ? function () {
                return e
              } : e
            }
          }, {
            key: "getScrollPosition",
            value: function () {
              return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
            }
          }, {
            key: "scrollToPosition",
            value: function (e) {
              this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1])
            }
          }, {
            key: "scrollToAnchor",
            value: function (e) {
              if (this.supportScrollRestoration()) {
                e = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(e) : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                try {
                  var t = this.document.querySelector("#".concat(e));
                  if (t) return void this.scrollToElement(t);
                  var n = this.document.querySelector("[name='".concat(e, "']"));
                  if (n) return void this.scrollToElement(n)
                } catch (r) {
                  this.errorHandler.handleError(r)
                }
              }
            }
          }, {
            key: "setHistoryScrollRestoration",
            value: function (e) {
              if (this.supportScrollRestoration()) {
                var t = this.window.history;
                t && t.scrollRestoration && (t.scrollRestoration = e)
              }
            }
          }, {
            key: "scrollToElement",
            value: function (e) {
              var t = e.getBoundingClientRect(),
                n = t.left + this.window.pageXOffset,
                r = t.top + this.window.pageYOffset,
                i = this.offset();
              this.window.scrollTo(n - i[0], r - i[1])
            }
          }, {
            key: "supportScrollRestoration",
            value: function () {
              try {
                return !!this.window && !!this.window.scrollTo
              } catch (e) {
                return !1
              }
            }
          }]), e
        }(),
        Xl = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments)
          }
          return _createClass(n, [{
            key: "getProperty",
            value: function (e, t) {
              return e[t]
            }
          }, {
            key: "log",
            value: function (e) {
              window.console && window.console.log && window.console.log(e)
            }
          }, {
            key: "logGroup",
            value: function (e) {
              window.console && window.console.group && window.console.group(e)
            }
          }, {
            key: "logGroupEnd",
            value: function () {
              window.console && window.console.groupEnd && window.console.groupEnd()
            }
          }, {
            key: "onAndCancel",
            value: function (e, t, n) {
              return e.addEventListener(t, n, !1),
                function () {
                  e.removeEventListener(t, n, !1)
                }
            }
          }, {
            key: "dispatchEvent",
            value: function (e, t) {
              e.dispatchEvent(t)
            }
          }, {
            key: "remove",
            value: function (e) {
              return e.parentNode && e.parentNode.removeChild(e), e
            }
          }, {
            key: "getValue",
            value: function (e) {
              return e.value
            }
          }, {
            key: "createElement",
            value: function (e, t) {
              return (t = t || this.getDefaultDocument()).createElement(e)
            }
          }, {
            key: "createHtmlDocument",
            value: function () {
              return document.implementation.createHTMLDocument("fakeTitle")
            }
          }, {
            key: "getDefaultDocument",
            value: function () {
              return document
            }
          }, {
            key: "isElementNode",
            value: function (e) {
              return e.nodeType === Node.ELEMENT_NODE
            }
          }, {
            key: "isShadowRoot",
            value: function (e) {
              return e instanceof DocumentFragment
            }
          }, {
            key: "getGlobalEventTarget",
            value: function (e, t) {
              return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
            }
          }, {
            key: "getHistory",
            value: function () {
              return window.history
            }
          }, {
            key: "getLocation",
            value: function () {
              return window.location
            }
          }, {
            key: "getBaseHref",
            value: function (e) {
              var t, n = ec || (ec = document.querySelector("base")) ? ec.getAttribute("href") : null;
              return null == n ? null : (t = n, Gl || (Gl = document.createElement("a")), Gl.setAttribute("href", t), "/" === Gl.pathname.charAt(0) ? Gl.pathname : "/" + Gl.pathname)
            }
          }, {
            key: "resetBaseElement",
            value: function () {
              ec = null
            }
          }, {
            key: "getUserAgent",
            value: function () {
              return window.navigator.userAgent
            }
          }, {
            key: "performanceNow",
            value: function () {
              return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
            }
          }, {
            key: "supportsCookies",
            value: function () {
              return !0
            }
          }, {
            key: "getCookie",
            value: function (e) {
              return Tl(document.cookie, e)
            }
          }], [{
            key: "makeCurrent",
            value: function () {
              var e;
              e = new n, Au || (Au = e)
            }
          }]), n
        }(function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            return _classCallCheck(this, n), t.call(this)
          }
          return _createClass(n, [{
            key: "supportsDOMEvents",
            value: function () {
              return !0
            }
          }]), n
        }(function () {
          return function e() {
            _classCallCheck(this, e)
          }
        }())),
        ec = null,
        tc = new He("TRANSITION_ID"),
        nc = [{
          provide: Ts,
          useFactory: function (e, t, n) {
            return function () {
              n.get(Is).donePromise.then((function () {
                var n = Ou();
                Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter((function (t) {
                  return t.getAttribute("ng-transition") === e
                })).forEach((function (e) {
                  return n.remove(e)
                }))
              }))
            }
          },
          deps: [tc, Iu, co],
          multi: !0
        }],
        rc = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "addToWindow",
            value: function (e) {
              Re.getAngularTestability = function (t) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  r = e.findTestabilityInTree(t, n);
                if (null == r) throw new Error("Could not find testability for element.");
                return r
              }, Re.getAllAngularTestabilities = function () {
                return e.getAllTestabilities()
              }, Re.getAllAngularRootElements = function () {
                return e.getAllRootElements()
              }, Re.frameworkStabilizers || (Re.frameworkStabilizers = []), Re.frameworkStabilizers.push((function (e) {
                var t = Re.getAllAngularTestabilities(),
                  n = t.length,
                  r = !1,
                  i = function (t) {
                    r = r || t, 0 == --n && e(r)
                  };
                t.forEach((function (e) {
                  e.whenStable(i)
                }))
              }))
            }
          }, {
            key: "findTestabilityInTree",
            value: function (e, t, n) {
              if (null == t) return null;
              var r = e.getTestability(t);
              return null != r ? r : n ? Ou().isShadowRoot(t) ? this.findTestabilityInTree(e, t.host, !0) : this.findTestabilityInTree(e, t.parentElement, !0) : null
            }
          }], [{
            key: "init",
            value: function () {
              var t;
              t = new e, uu = t
            }
          }]), e
        }(),
        ic = new He("EventManagerPlugins"),
        oc = ((Bl = function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e), this._zone = n, this._eventNameToPlugin = new Map, t.forEach((function (e) {
              return e.manager = r
            })), this._plugins = t.slice().reverse()
          }
          return _createClass(e, [{
            key: "addEventListener",
            value: function (e, t, n) {
              return this._findPluginFor(t).addEventListener(e, t, n)
            }
          }, {
            key: "addGlobalEventListener",
            value: function (e, t, n) {
              return this._findPluginFor(t).addGlobalEventListener(e, t, n)
            }
          }, {
            key: "getZone",
            value: function () {
              return this._zone
            }
          }, {
            key: "_findPluginFor",
            value: function (e) {
              var t = this._eventNameToPlugin.get(e);
              if (t) return t;
              for (var n = this._plugins, r = 0; r < n.length; r++) {
                var i = n[r];
                if (i.supports(e)) return this._eventNameToPlugin.set(e, i), i
              }
              throw new Error("No event manager plugin found for event ".concat(e))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Bl)(Je(ic), Je(Ys))
        }, Bl.\u0275prov = fe({
          token: Bl,
          factory: Bl.\u0275fac
        }), Bl),
        ac = function () {
          function e(t) {
            _classCallCheck(this, e), this._doc = t
          }
          return _createClass(e, [{
            key: "addGlobalEventListener",
            value: function (e, t, n) {
              var r = Ou().getGlobalEventTarget(this._doc, e);
              if (!r) throw new Error("Unsupported event target ".concat(r, " for event ").concat(t));
              return this.addEventListener(r, t, n)
            }
          }]), e
        }(),
        sc = (($l = function () {
          function e() {
            _classCallCheck(this, e), this._stylesSet = new Set
          }
          return _createClass(e, [{
            key: "addStyles",
            value: function (e) {
              var t = this,
                n = new Set;
              e.forEach((function (e) {
                t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e))
              })), this.onStylesAdded(n)
            }
          }, {
            key: "onStylesAdded",
            value: function (e) {}
          }, {
            key: "getAllStyles",
            value: function () {
              return Array.from(this._stylesSet)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || $l)
        }, $l.\u0275prov = fe({
          token: $l,
          factory: $l.\u0275fac
        }), $l),
        uc = ((Wl = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this))._doc = e, r._hostNodes = new Set, r._styleNodes = new Set, r._hostNodes.add(e.head), r
          }
          return _createClass(n, [{
            key: "_addStylesToHost",
            value: function (e, t) {
              var n = this;
              e.forEach((function (e) {
                var r = n._doc.createElement("style");
                r.textContent = e, n._styleNodes.add(t.appendChild(r))
              }))
            }
          }, {
            key: "addHost",
            value: function (e) {
              this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
            }
          }, {
            key: "removeHost",
            value: function (e) {
              this._hostNodes.delete(e)
            }
          }, {
            key: "onStylesAdded",
            value: function (e) {
              var t = this;
              this._hostNodes.forEach((function (n) {
                return t._addStylesToHost(e, n)
              }))
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this._styleNodes.forEach((function (e) {
                return Ou().remove(e)
              }))
            }
          }]), n
        }(sc)).\u0275fac = function (e) {
          return new(e || Wl)(Je(Iu))
        }, Wl.\u0275prov = fe({
          token: Wl,
          factory: Wl.\u0275fac
        }), Wl),
        lc = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
        },
        cc = /%COMP%/g;

      function hc(e, t, n) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          Array.isArray(i) ? hc(e, i, n) : (i = i.replace(cc, e), n.push(i))
        }
        return n
      }

      function fc(e) {
        return function (t) {
          if ("__ngUnwrap__" === t) return e;
          !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
        }
      }
      var dc, pc, vc, mc, gc = ((dc = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.eventManager = t, this.sharedStylesHost = n, this.appId = r, this.rendererByCompId = new Map, this.defaultRenderer = new yc(t)
          }
          return _createClass(e, [{
            key: "createRenderer",
            value: function (e, t) {
              if (!e || !t) return this.defaultRenderer;
              switch (t.encapsulation) {
                case ut.Emulated:
                  var n = this.rendererByCompId.get(t.id);
                  return n || (n = new _c(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
                case ut.Native:
                case ut.ShadowDom:
                  return new kc(this.eventManager, this.sharedStylesHost, e, t);
                default:
                  if (!this.rendererByCompId.has(t.id)) {
                    var r = hc(t.id, t.styles, []);
                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer)
                  }
                  return this.defaultRenderer
              }
            }
          }, {
            key: "begin",
            value: function () {}
          }, {
            key: "end",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || dc)(Je(oc), Je(uc), Je(Ps))
        }, dc.\u0275prov = fe({
          token: dc,
          factory: dc.\u0275fac
        }), dc),
        yc = function () {
          function e(t) {
            _classCallCheck(this, e), this.eventManager = t, this.data = Object.create(null)
          }
          return _createClass(e, [{
            key: "destroy",
            value: function () {}
          }, {
            key: "createElement",
            value: function (e, t) {
              return t ? document.createElementNS(lc[t] || t, e) : document.createElement(e)
            }
          }, {
            key: "createComment",
            value: function (e) {
              return document.createComment(e)
            }
          }, {
            key: "createText",
            value: function (e) {
              return document.createTextNode(e)
            }
          }, {
            key: "appendChild",
            value: function (e, t) {
              e.appendChild(t)
            }
          }, {
            key: "insertBefore",
            value: function (e, t, n) {
              e && e.insertBefore(t, n)
            }
          }, {
            key: "removeChild",
            value: function (e, t) {
              e && e.removeChild(t)
            }
          }, {
            key: "selectRootElement",
            value: function (e, t) {
              var n = "string" == typeof e ? document.querySelector(e) : e;
              if (!n) throw new Error('The selector "'.concat(e, '" did not match any elements'));
              return t || (n.textContent = ""), n
            }
          }, {
            key: "parentNode",
            value: function (e) {
              return e.parentNode
            }
          }, {
            key: "nextSibling",
            value: function (e) {
              return e.nextSibling
            }
          }, {
            key: "setAttribute",
            value: function (e, t, n, r) {
              if (r) {
                t = r + ":" + t;
                var i = lc[r];
                i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n)
              } else e.setAttribute(t, n)
            }
          }, {
            key: "removeAttribute",
            value: function (e, t, n) {
              if (n) {
                var r = lc[n];
                r ? e.removeAttributeNS(r, t) : e.removeAttribute("".concat(n, ":").concat(t))
              } else e.removeAttribute(t)
            }
          }, {
            key: "addClass",
            value: function (e, t) {
              e.classList.add(t)
            }
          }, {
            key: "removeClass",
            value: function (e, t) {
              e.classList.remove(t)
            }
          }, {
            key: "setStyle",
            value: function (e, t, n, r) {
              r & xa.DashCase ? e.style.setProperty(t, n, r & xa.Important ? "important" : "") : e.style[t] = n
            }
          }, {
            key: "removeStyle",
            value: function (e, t, n) {
              n & xa.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
            }
          }, {
            key: "setProperty",
            value: function (e, t, n) {
              e[t] = n
            }
          }, {
            key: "setValue",
            value: function (e, t) {
              e.nodeValue = t
            }
          }, {
            key: "listen",
            value: function (e, t, n) {
              return "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, fc(n)) : this.eventManager.addEventListener(e, t, fc(n))
            }
          }]), e
        }(),
        _c = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            _classCallCheck(this, n), (a = t.call(this, e)).component = i;
            var s, u = hc(o + "-" + i.id, i.styles, []);
            return r.addStyles(u), a.contentAttr = "_ngcontent-%COMP%".replace(cc, o + "-" + i.id), a.hostAttr = (s = o + "-" + i.id, "_nghost-%COMP%".replace(cc, s)), a
          }
          return _createClass(n, [{
            key: "applyToHost",
            value: function (e) {
              _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, e, this.hostAttr, "")
            }
          }, {
            key: "createElement",
            value: function (e, t) {
              var r = _get(_getPrototypeOf(n.prototype), "createElement", this).call(this, e, t);
              return _get(_getPrototypeOf(n.prototype), "setAttribute", this).call(this, r, this.contentAttr, ""), r
            }
          }]), n
        }(yc),
        kc = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            _classCallCheck(this, n), (a = t.call(this, e)).sharedStylesHost = r, a.hostEl = i, a.component = o, a.shadowRoot = o.encapsulation === ut.ShadowDom ? i.attachShadow({
              mode: "open"
            }) : i.createShadowRoot(), a.sharedStylesHost.addHost(a.shadowRoot);
            for (var s = hc(o.id, o.styles, []), u = 0; u < s.length; u++) {
              var l = document.createElement("style");
              l.textContent = s[u], a.shadowRoot.appendChild(l)
            }
            return a
          }
          return _createClass(n, [{
            key: "nodeOrShadowRoot",
            value: function (e) {
              return e === this.hostEl ? this.shadowRoot : e
            }
          }, {
            key: "destroy",
            value: function () {
              this.sharedStylesHost.removeHost(this.shadowRoot)
            }
          }, {
            key: "appendChild",
            value: function (e, t) {
              return _get(_getPrototypeOf(n.prototype), "appendChild", this).call(this, this.nodeOrShadowRoot(e), t)
            }
          }, {
            key: "insertBefore",
            value: function (e, t, r) {
              return _get(_getPrototypeOf(n.prototype), "insertBefore", this).call(this, this.nodeOrShadowRoot(e), t, r)
            }
          }, {
            key: "removeChild",
            value: function (e, t) {
              return _get(_getPrototypeOf(n.prototype), "removeChild", this).call(this, this.nodeOrShadowRoot(e), t)
            }
          }, {
            key: "parentNode",
            value: function (e) {
              return this.nodeOrShadowRoot(_get(_getPrototypeOf(n.prototype), "parentNode", this).call(this, this.nodeOrShadowRoot(e)))
            }
          }]), n
        }(yc),
        Cc = ((pc = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            return _classCallCheck(this, n), t.call(this, e)
          }
          return _createClass(n, [{
            key: "supports",
            value: function (e) {
              return !0
            }
          }, {
            key: "addEventListener",
            value: function (e, t, n) {
              var r = this;
              return e.addEventListener(t, n, !1),
                function () {
                  return r.removeEventListener(e, t, n)
                }
            }
          }, {
            key: "removeEventListener",
            value: function (e, t, n) {
              return e.removeEventListener(t, n)
            }
          }]), n
        }(ac)).\u0275fac = function (e) {
          return new(e || pc)(Je(Iu))
        }, pc.\u0275prov = fe({
          token: pc,
          factory: pc.\u0275fac
        }), pc),
        bc = ["alt", "control", "meta", "shift"],
        wc = {
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
        Sc = {
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
        Ec = {
          alt: function (e) {
            return e.altKey
          },
          control: function (e) {
            return e.ctrlKey
          },
          meta: function (e) {
            return e.metaKey
          },
          shift: function (e) {
            return e.shiftKey
          }
        },
        xc = ((vc = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            return _classCallCheck(this, n), t.call(this, e)
          }
          return _createClass(n, [{
            key: "supports",
            value: function (e) {
              return null != n.parseEventName(e)
            }
          }, {
            key: "addEventListener",
            value: function (e, t, r) {
              var i = n.parseEventName(t),
                o = n.eventCallback(i.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular((function () {
                return Ou().onAndCancel(e, i.domEventName, o)
              }))
            }
          }], [{
            key: "parseEventName",
            value: function (e) {
              var t = e.toLowerCase().split("."),
                r = t.shift();
              if (0 === t.length || "keydown" !== r && "keyup" !== r) return null;
              var i = n._normalizeKey(t.pop()),
                o = "";
              if (bc.forEach((function (e) {
                  var n = t.indexOf(e);
                  n > -1 && (t.splice(n, 1), o += e + ".")
                })), o += i, 0 != t.length || 0 === i.length) return null;
              var a = {};
              return a.domEventName = r, a.fullKey = o, a
            }
          }, {
            key: "getEventFullKey",
            value: function (e) {
              var t = "",
                n = function (e) {
                  var t = e.key;
                  if (null == t) {
                    if (null == (t = e.keyIdentifier)) return "Unidentified";
                    t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && Sc.hasOwnProperty(t) && (t = Sc[t]))
                  }
                  return wc[t] || t
                }(e);
              return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), bc.forEach((function (r) {
                r != n && (0, Ec[r])(e) && (t += r + ".")
              })), t += n
            }
          }, {
            key: "eventCallback",
            value: function (e, t, r) {
              return function (i) {
                n.getEventFullKey(i) === e && r.runGuarded((function () {
                  return t(i)
                }))
              }
            }
          }, {
            key: "_normalizeKey",
            value: function (e) {
              switch (e) {
                case "esc":
                  return "escape";
                default:
                  return e
              }
            }
          }]), n
        }(ac)).\u0275fac = function (e) {
          return new(e || vc)(Je(Iu))
        }, vc.\u0275prov = fe({
          token: vc,
          factory: vc.\u0275fac
        }), vc),
        Ac = fu(Su, "browser", [{
          provide: Ms,
          useValue: "browser"
        }, {
          provide: Ns,
          useValue: function () {
            Xl.makeCurrent(), rc.init()
          },
          multi: !0
        }, {
          provide: Iu,
          useFactory: function () {
            return function (e) {
              It = e
            }(document), document
          },
          deps: []
        }]),
        Oc = [
          [], {
            provide: Ji,
            useValue: "root"
          }, {
            provide: tr,
            useFactory: function () {
              return new tr
            },
            deps: []
          }, {
            provide: ic,
            useClass: Cc,
            multi: !0,
            deps: [Iu, Ys, Ms]
          }, {
            provide: ic,
            useClass: xc,
            multi: !0,
            deps: [Iu]
          },
          [], {
            provide: gc,
            useClass: gc,
            deps: [oc, uc, Ps]
          }, {
            provide: Ea,
            useExisting: gc
          }, {
            provide: sc,
            useExisting: uc
          }, {
            provide: uc,
            useClass: uc,
            deps: [Iu]
          }, {
            provide: au,
            useClass: au,
            deps: [Ys]
          }, {
            provide: oc,
            useClass: oc,
            deps: [ic, Ys]
          },
          []
        ],
        Tc = ((mc = function () {
          function e(t) {
            if (_classCallCheck(this, e), t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
          }
          return _createClass(e, null, [{
            key: "withServerTransition",
            value: function (t) {
              return {
                ngModule: e,
                providers: [{
                  provide: Ps,
                  useValue: t.appId
                }, {
                  provide: tc,
                  useExisting: Ps
                }, nc]
              }
            }
          }]), e
        }()).\u0275mod = mt({
          type: mc
        }), mc.\u0275inj = de({
          factory: function (e) {
            return new(e || mc)(Je(mc, 12))
          },
          providers: Oc,
          imports: [Jl, xu]
        }), mc);

      function Ic() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t[t.length - 1];
        return I(r) ? (t.pop(), q(t, r)) : Q(t)
      }

      function Pc(e, t) {
        return G(e, t, 1)
      }

      function Fc(e, t) {
        return function (n) {
          return n.lift(new Rc(e, t))
        }
      }
      "undefined" != typeof window && window;
      var Rc = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.predicate = t, this.thisArg = n
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new Nc(e, this.predicate, this.thisArg))
            }
          }]), e
        }(),
        Nc = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, e)).predicate = r, o.thisArg = i, o.count = 0, o
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              var t;
              try {
                t = this.predicate.call(this.thisArg, e, this.count++)
              } catch (n) {
                return void this.destination.error(n)
              }
              t && this.destination.next(e)
            }
          }]), n
        }(v),
        Mc = function e() {
          _classCallCheck(this, e)
        },
        Dc = function e() {
          _classCallCheck(this, e)
        },
        Vc = function () {
          function e(t) {
            var n = this;
            _classCallCheck(this, e), this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? function () {
              n.headers = new Map, t.split("\n").forEach((function (e) {
                var t = e.indexOf(":");
                if (t > 0) {
                  var r = e.slice(0, t),
                    i = r.toLowerCase(),
                    o = e.slice(t + 1).trim();
                  n.maybeSetNormalizedName(r, i), n.headers.has(i) ? n.headers.get(i).push(o) : n.headers.set(i, [o])
                }
              }))
            } : function () {
              n.headers = new Map, Object.keys(t).forEach((function (e) {
                var r = t[e],
                  i = e.toLowerCase();
                "string" == typeof r && (r = [r]), r.length > 0 && (n.headers.set(i, r), n.maybeSetNormalizedName(e, i))
              }))
            } : this.headers = new Map
          }
          return _createClass(e, [{
            key: "has",
            value: function (e) {
              return this.init(), this.headers.has(e.toLowerCase())
            }
          }, {
            key: "get",
            value: function (e) {
              this.init();
              var t = this.headers.get(e.toLowerCase());
              return t && t.length > 0 ? t[0] : null
            }
          }, {
            key: "keys",
            value: function () {
              return this.init(), Array.from(this.normalizedNames.values())
            }
          }, {
            key: "getAll",
            value: function (e) {
              return this.init(), this.headers.get(e.toLowerCase()) || null
            }
          }, {
            key: "append",
            value: function (e, t) {
              return this.clone({
                name: e,
                value: t,
                op: "a"
              })
            }
          }, {
            key: "set",
            value: function (e, t) {
              return this.clone({
                name: e,
                value: t,
                op: "s"
              })
            }
          }, {
            key: "delete",
            value: function (e, t) {
              return this.clone({
                name: e,
                value: t,
                op: "d"
              })
            }
          }, {
            key: "maybeSetNormalizedName",
            value: function (e, t) {
              this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
            }
          }, {
            key: "init",
            value: function () {
              var t = this;
              this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach((function (e) {
                return t.applyUpdate(e)
              })), this.lazyUpdate = null))
            }
          }, {
            key: "copyFrom",
            value: function (e) {
              var t = this;
              e.init(), Array.from(e.headers.keys()).forEach((function (n) {
                t.headers.set(n, e.headers.get(n)), t.normalizedNames.set(n, e.normalizedNames.get(n))
              }))
            }
          }, {
            key: "clone",
            value: function (t) {
              var n = new e;
              return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([t]), n
            }
          }, {
            key: "applyUpdate",
            value: function (e) {
              var t = e.name.toLowerCase();
              switch (e.op) {
                case "a":
                case "s":
                  var n = e.value;
                  if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                  this.maybeSetNormalizedName(e.name, t);
                  var r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
                  r.push.apply(r, _toConsumableArray(n)), this.headers.set(t, r);
                  break;
                case "d":
                  var i = e.value;
                  if (i) {
                    var o = this.headers.get(t);
                    if (!o) return;
                    0 === (o = o.filter((function (e) {
                      return -1 === i.indexOf(e)
                    }))).length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, o)
                  } else this.headers.delete(t), this.normalizedNames.delete(t)
              }
            }
          }, {
            key: "forEach",
            value: function (e) {
              var t = this;
              this.init(), Array.from(this.normalizedNames.keys()).forEach((function (n) {
                return e(t.normalizedNames.get(n), t.headers.get(n))
              }))
            }
          }]), e
        }(),
        Lc = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "encodeKey",
            value: function (e) {
              return jc(e)
            }
          }, {
            key: "encodeValue",
            value: function (e) {
              return jc(e)
            }
          }, {
            key: "decodeKey",
            value: function (e) {
              return decodeURIComponent(e)
            }
          }, {
            key: "decodeValue",
            value: function (e) {
              return decodeURIComponent(e)
            }
          }]), e
        }();

      function jc(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
      }
      var Uc = function () {
        function e() {
          var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (_classCallCheck(this, e), this.updates = null, this.cloneFrom = null, this.encoder = n.encoder || new Lc, n.fromString) {
            if (n.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
            this.map = function (e, t) {
              var n = new Map;
              return e.length > 0 && e.split("&").forEach((function (e) {
                var r = e.indexOf("="),
                  i = _slicedToArray(-1 == r ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, r)), t.decodeValue(e.slice(r + 1))], 2),
                  o = i[0],
                  a = i[1],
                  s = n.get(o) || [];
                s.push(a), n.set(o, s)
              })), n
            }(n.fromString, this.encoder)
          } else n.fromObject ? (this.map = new Map, Object.keys(n.fromObject).forEach((function (e) {
            var r = n.fromObject[e];
            t.map.set(e, Array.isArray(r) ? r : [r])
          }))) : this.map = null
        }
        return _createClass(e, [{
          key: "has",
          value: function (e) {
            return this.init(), this.map.has(e)
          }
        }, {
          key: "get",
          value: function (e) {
            this.init();
            var t = this.map.get(e);
            return t ? t[0] : null
          }
        }, {
          key: "getAll",
          value: function (e) {
            return this.init(), this.map.get(e) || null
          }
        }, {
          key: "keys",
          value: function () {
            return this.init(), Array.from(this.map.keys())
          }
        }, {
          key: "append",
          value: function (e, t) {
            return this.clone({
              param: e,
              value: t,
              op: "a"
            })
          }
        }, {
          key: "set",
          value: function (e, t) {
            return this.clone({
              param: e,
              value: t,
              op: "s"
            })
          }
        }, {
          key: "delete",
          value: function (e, t) {
            return this.clone({
              param: e,
              value: t,
              op: "d"
            })
          }
        }, {
          key: "toString",
          value: function () {
            var e = this;
            return this.init(), this.keys().map((function (t) {
              var n = e.encoder.encodeKey(t);
              return e.map.get(t).map((function (t) {
                return n + "=" + e.encoder.encodeValue(t)
              })).join("&")
            })).filter((function (e) {
              return "" !== e
            })).join("&")
          }
        }, {
          key: "clone",
          value: function (t) {
            var n = new e({
              encoder: this.encoder
            });
            return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat([t]), n
          }
        }, {
          key: "init",
          value: function () {
            var e = this;
            null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach((function (t) {
              return e.map.set(t, e.cloneFrom.map.get(t))
            })), this.updates.forEach((function (t) {
              switch (t.op) {
                case "a":
                case "s":
                  var n = ("a" === t.op ? e.map.get(t.param) : void 0) || [];
                  n.push(t.value), e.map.set(t.param, n);
                  break;
                case "d":
                  if (void 0 === t.value) {
                    e.map.delete(t.param);
                    break
                  }
                  var r = e.map.get(t.param) || [],
                    i = r.indexOf(t.value); - 1 !== i && r.splice(i, 1), r.length > 0 ? e.map.set(t.param, r) : e.map.delete(t.param)
              }
            })), this.cloneFrom = this.updates = null)
          }
        }]), e
      }();

      function Hc(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
      }

      function qc(e) {
        return "undefined" != typeof Blob && e instanceof Blob
      }

      function zc(e) {
        return "undefined" != typeof FormData && e instanceof FormData
      }
      var Gc = function () {
          function e(t, n, r, i) {
            var o;
            if (_classCallCheck(this, e), this.url = n, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (e) {
                switch (e) {
                  case "DELETE":
                  case "GET":
                  case "HEAD":
                  case "OPTIONS":
                  case "JSONP":
                    return !1;
                  default:
                    return !0
                }
              }(this.method) || i ? (this.body = void 0 !== r ? r : null, o = i) : o = r, o && (this.reportProgress = !!o.reportProgress, this.withCredentials = !!o.withCredentials, o.responseType && (this.responseType = o.responseType), o.headers && (this.headers = o.headers), o.params && (this.params = o.params)), this.headers || (this.headers = new Vc), this.params) {
              var a = this.params.toString();
              if (0 === a.length) this.urlWithParams = n;
              else {
                var s = n.indexOf("?");
                this.urlWithParams = n + (-1 === s ? "?" : s < n.length - 1 ? "&" : "") + a
              }
            } else this.params = new Uc, this.urlWithParams = n
          }
          return _createClass(e, [{
            key: "serializeBody",
            value: function () {
              return null === this.body ? null : Hc(this.body) || qc(this.body) || zc(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Uc ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
            }
          }, {
            key: "detectContentTypeHeader",
            value: function () {
              return null === this.body || zc(this.body) ? null : qc(this.body) ? this.body.type || null : Hc(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Uc ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
            }
          }, {
            key: "clone",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.method || this.method,
                r = t.url || this.url,
                i = t.responseType || this.responseType,
                o = void 0 !== t.body ? t.body : this.body,
                a = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
                s = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress,
                u = t.headers || this.headers,
                l = t.params || this.params;
              return void 0 !== t.setHeaders && (u = Object.keys(t.setHeaders).reduce((function (e, n) {
                return e.set(n, t.setHeaders[n])
              }), u)), t.setParams && (l = Object.keys(t.setParams).reduce((function (e, n) {
                return e.set(n, t.setParams[n])
              }), l)), new e(n, r, o, {
                params: l,
                headers: u,
                reportProgress: s,
                responseType: i,
                withCredentials: a
              })
            }
          }]), e
        }(),
        Bc = function () {
          var e = {
            Sent: 0,
            UploadProgress: 1,
            ResponseHeader: 2,
            DownloadProgress: 3,
            Response: 4,
            User: 5
          };
          return e[e.Sent] = "Sent", e[e.UploadProgress] = "UploadProgress", e[e.ResponseHeader] = "ResponseHeader", e[e.DownloadProgress] = "DownloadProgress", e[e.Response] = "Response", e[e.User] = "User", e
        }(),
        Wc = function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "OK";
          _classCallCheck(this, e), this.headers = t.headers || new Vc, this.status = void 0 !== t.status ? t.status : n, this.statusText = t.statusText || r, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
        },
        $c = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return _classCallCheck(this, n), (e = t.call(this, r)).type = Bc.ResponseHeader, e
          }
          return _createClass(n, [{
            key: "clone",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new n({
                headers: e.headers || this.headers,
                status: void 0 !== e.status ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
              })
            }
          }]), n
        }(Wc),
        Zc = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return _classCallCheck(this, n), (e = t.call(this, r)).type = Bc.Response, e.body = void 0 !== r.body ? r.body : null, e
          }
          return _createClass(n, [{
            key: "clone",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return new n({
                body: void 0 !== e.body ? e.body : this.body,
                headers: e.headers || this.headers,
                status: void 0 !== e.status ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
              })
            }
          }]), n
        }(Wc),
        Qc = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this, e, 0, "Unknown Error")).name = "HttpErrorResponse", r.ok = !1, r.message = r.status >= 200 && r.status < 300 ? "Http failure during parsing for ".concat(e.url || "(unknown url)") : "Http failure response for ".concat(e.url || "(unknown url)", ": ").concat(e.status, " ").concat(e.statusText), r.error = e.error || null, r
          }
          return n
        }(Wc);

      function Jc(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials
        }
      }
      var Yc, Kc, Xc, eh, th, nh, rh, ih, oh, ah = ((Yc = function () {
          function e(t) {
            _classCallCheck(this, e), this.handler = t
          }
          return _createClass(e, [{
            key: "request",
            value: function (e, t) {
              var n, r = this,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if (e instanceof Gc) n = e;
              else {
                var o = void 0;
                o = i.headers instanceof Vc ? i.headers : new Vc(i.headers);
                var a = void 0;
                i.params && (a = i.params instanceof Uc ? i.params : new Uc({
                  fromObject: i.params
                })), n = new Gc(e, t, void 0 !== i.body ? i.body : null, {
                  headers: o,
                  params: a,
                  reportProgress: i.reportProgress,
                  responseType: i.responseType || "json",
                  withCredentials: i.withCredentials
                })
              }
              var s = Ic(n).pipe(Pc((function (e) {
                return r.handler.handle(e)
              })));
              if (e instanceof Gc || "events" === i.observe) return s;
              var u = s.pipe(Fc((function (e) {
                return e instanceof Zc
              })));
              switch (i.observe || "body") {
                case "body":
                  switch (n.responseType) {
                    case "arraybuffer":
                      return u.pipe(j((function (e) {
                        if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                        return e.body
                      })));
                    case "blob":
                      return u.pipe(j((function (e) {
                        if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                        return e.body
                      })));
                    case "text":
                      return u.pipe(j((function (e) {
                        if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                        return e.body
                      })));
                    case "json":
                    default:
                      return u.pipe(j((function (e) {
                        return e.body
                      })))
                  }
                  case "response":
                    return u;
                  default:
                    throw new Error("Unreachable: unhandled observe type ".concat(i.observe, "}"))
              }
            }
          }, {
            key: "delete",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.request("DELETE", e, t)
            }
          }, {
            key: "get",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.request("GET", e, t)
            }
          }, {
            key: "head",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.request("HEAD", e, t)
            }
          }, {
            key: "jsonp",
            value: function (e, t) {
              return this.request("JSONP", e, {
                params: (new Uc).append(t, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
              })
            }
          }, {
            key: "options",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.request("OPTIONS", e, t)
            }
          }, {
            key: "patch",
            value: function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return this.request("PATCH", e, Jc(n, t))
            }
          }, {
            key: "post",
            value: function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return this.request("POST", e, Jc(n, t))
            }
          }, {
            key: "put",
            value: function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return this.request("PUT", e, Jc(n, t))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Yc)(Je(Mc))
        }, Yc.\u0275prov = fe({
          token: Yc,
          factory: Yc.\u0275fac
        }), Yc),
        sh = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.next = t, this.interceptor = n
          }
          return _createClass(e, [{
            key: "handle",
            value: function (e) {
              return this.interceptor.intercept(e, this.next)
            }
          }]), e
        }(),
        uh = new He("HTTP_INTERCEPTORS"),
        lh = ((Kc = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "intercept",
            value: function (e, t) {
              return t.handle(e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Kc)
        }, Kc.\u0275prov = fe({
          token: Kc,
          factory: Kc.\u0275fac
        }), Kc),
        ch = /^\)\]\}',?\n/,
        hh = function e() {
          _classCallCheck(this, e)
        },
        fh = ((eh = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "build",
            value: function () {
              return new XMLHttpRequest
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || eh)
        }, eh.\u0275prov = fe({
          token: eh,
          factory: eh.\u0275fac
        }), eh),
        dh = ((Xc = function () {
          function e(t) {
            _classCallCheck(this, e), this.xhrFactory = t
          }
          return _createClass(e, [{
            key: "handle",
            value: function (e) {
              var t = this;
              if ("JSONP" === e.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
              return new b((function (n) {
                var r = t.xhrFactory.build();
                if (r.open(e.method, e.urlWithParams), e.withCredentials && (r.withCredentials = !0), e.headers.forEach((function (e, t) {
                    return r.setRequestHeader(e, t.join(","))
                  })), e.headers.has("Accept") || r.setRequestHeader("Accept", "application/json, text/plain, */*"), !e.headers.has("Content-Type")) {
                  var i = e.detectContentTypeHeader();
                  null !== i && r.setRequestHeader("Content-Type", i)
                }
                if (e.responseType) {
                  var o = e.responseType.toLowerCase();
                  r.responseType = "json" !== o ? o : "text"
                }
                var a = e.serializeBody(),
                  s = null,
                  u = function () {
                    if (null !== s) return s;
                    var t = 1223 === r.status ? 204 : r.status,
                      n = r.statusText || "OK",
                      i = new Vc(r.getAllResponseHeaders()),
                      o = function (e) {
                        return "responseURL" in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null
                      }(r) || e.url;
                    return s = new $c({
                      headers: i,
                      status: t,
                      statusText: n,
                      url: o
                    })
                  },
                  l = function () {
                    var t = u(),
                      i = t.headers,
                      o = t.status,
                      a = t.statusText,
                      s = t.url,
                      l = null;
                    204 !== o && (l = void 0 === r.response ? r.responseText : r.response), 0 === o && (o = l ? 200 : 0);
                    var c = o >= 200 && o < 300;
                    if ("json" === e.responseType && "string" == typeof l) {
                      var h = l;
                      l = l.replace(ch, "");
                      try {
                        l = "" !== l ? JSON.parse(l) : null
                      } catch (f) {
                        l = h, c && (c = !1, l = {
                          error: f,
                          text: l
                        })
                      }
                    }
                    c ? (n.next(new Zc({
                      body: l,
                      headers: i,
                      status: o,
                      statusText: a,
                      url: s || void 0
                    })), n.complete()) : n.error(new Qc({
                      error: l,
                      headers: i,
                      status: o,
                      statusText: a,
                      url: s || void 0
                    }))
                  },
                  c = function (e) {
                    var t = u().url,
                      i = new Qc({
                        error: e,
                        status: r.status || 0,
                        statusText: r.statusText || "Unknown Error",
                        url: t || void 0
                      });
                    n.error(i)
                  },
                  h = !1,
                  f = function (t) {
                    h || (n.next(u()), h = !0);
                    var i = {
                      type: Bc.DownloadProgress,
                      loaded: t.loaded
                    };
                    t.lengthComputable && (i.total = t.total), "text" === e.responseType && r.responseText && (i.partialText = r.responseText), n.next(i)
                  },
                  d = function (e) {
                    var t = {
                      type: Bc.UploadProgress,
                      loaded: e.loaded
                    };
                    e.lengthComputable && (t.total = e.total), n.next(t)
                  };
                return r.addEventListener("load", l), r.addEventListener("error", c), e.reportProgress && (r.addEventListener("progress", f), null !== a && r.upload && r.upload.addEventListener("progress", d)), r.send(a), n.next({
                    type: Bc.Sent
                  }),
                  function () {
                    r.removeEventListener("error", c), r.removeEventListener("load", l), e.reportProgress && (r.removeEventListener("progress", f), null !== a && r.upload && r.upload.removeEventListener("progress", d)), r.abort()
                  }
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Xc)(Je(hh))
        }, Xc.\u0275prov = fe({
          token: Xc,
          factory: Xc.\u0275fac
        }), Xc),
        ph = new He("XSRF_COOKIE_NAME"),
        vh = new He("XSRF_HEADER_NAME"),
        mh = function e() {
          _classCallCheck(this, e)
        },
        gh = ((oh = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.doc = t, this.platform = n, this.cookieName = r, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
          }
          return _createClass(e, [{
            key: "getToken",
            value: function () {
              if ("server" === this.platform) return null;
              var e = this.doc.cookie || "";
              return e !== this.lastCookieString && (this.parseCount++, this.lastToken = Tl(e, this.cookieName), this.lastCookieString = e), this.lastToken
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || oh)(Je(Iu), Je(Ms), Je(ph))
        }, oh.\u0275prov = fe({
          token: oh,
          factory: oh.\u0275fac
        }), oh),
        yh = ((ih = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.tokenService = t, this.headerName = n
          }
          return _createClass(e, [{
            key: "intercept",
            value: function (e, t) {
              var n = e.url.toLowerCase();
              if ("GET" === e.method || "HEAD" === e.method || n.startsWith("http://") || n.startsWith("https://")) return t.handle(e);
              var r = this.tokenService.getToken();
              return null === r || e.headers.has(this.headerName) || (e = e.clone({
                headers: e.headers.set(this.headerName, r)
              })), t.handle(e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ih)(Je(mh), Je(vh))
        }, ih.\u0275prov = fe({
          token: ih,
          factory: ih.\u0275fac
        }), ih),
        _h = ((rh = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.backend = t, this.injector = n, this.chain = null
          }
          return _createClass(e, [{
            key: "handle",
            value: function (e) {
              if (null === this.chain) {
                var t = this.injector.get(uh, []);
                this.chain = t.reduceRight((function (e, t) {
                  return new sh(e, t)
                }), this.backend)
              }
              return this.chain.handle(e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || rh)(Je(Dc), Je(co))
        }, rh.\u0275prov = fe({
          token: rh,
          factory: rh.\u0275fac
        }), rh),
        kh = ((nh = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, null, [{
            key: "disable",
            value: function () {
              return {
                ngModule: e,
                providers: [{
                  provide: yh,
                  useClass: lh
                }]
              }
            }
          }, {
            key: "withOptions",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return {
                ngModule: e,
                providers: [t.cookieName ? {
                  provide: ph,
                  useValue: t.cookieName
                } : [], t.headerName ? {
                  provide: vh,
                  useValue: t.headerName
                } : []]
              }
            }
          }]), e
        }()).\u0275mod = mt({
          type: nh
        }), nh.\u0275inj = de({
          factory: function (e) {
            return new(e || nh)
          },
          providers: [yh, {
            provide: uh,
            useExisting: yh,
            multi: !0
          }, {
            provide: mh,
            useClass: gh
          }, {
            provide: ph,
            useValue: "XSRF-TOKEN"
          }, {
            provide: vh,
            useValue: "X-XSRF-TOKEN"
          }]
        }), nh),
        Ch = ((th = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: th
        }), th.\u0275inj = de({
          factory: function (e) {
            return new(e || th)
          },
          providers: [ah, {
            provide: Mc,
            useClass: _h
          }, dh, {
            provide: Dc,
            useExisting: dh
          }, fh, {
            provide: hh,
            useExisting: fh
          }],
          imports: [
            [kh.withOptions({
              cookieName: "XSRF-TOKEN",
              headerName: "X-XSRF-TOKEN"
            })]
          ]
        }), th),
        bh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            var r;
            return _classCallCheck(this, n), (r = t.call(this))._value = e, r
          }
          return _createClass(n, [{
            key: "_subscribe",
            value: function (e) {
              var t = _get(_getPrototypeOf(n.prototype), "_subscribe", this).call(this, e);
              return t && !t.closed && e.next(this._value), t
            }
          }, {
            key: "getValue",
            value: function () {
              if (this.hasError) throw this.thrownError;
              if (this.closed) throw new E;
              return this._value
            }
          }, {
            key: "next",
            value: function (e) {
              _get(_getPrototypeOf(n.prototype), "next", this).call(this, this._value = e)
            }
          }, {
            key: "value",
            get: function () {
              return this.getValue()
            }
          }]), n
        }(O),
        wh = function () {
          function e() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
          }
          return e.prototype = Object.create(Error.prototype), e
        }(),
        Sh = {},
        Eh = function () {
          function e(t) {
            _classCallCheck(this, e), this.resultSelector = t
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new xh(e, this.resultSelector))
            }
          }]), e
        }(),
        xh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).resultSelector = r, i.active = 0, i.values = [], i.observables = [], i
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              this.values.push(Sh), this.observables.push(e)
            }
          }, {
            key: "_complete",
            value: function () {
              var e = this.observables,
                t = e.length;
              if (0 === t) this.destination.complete();
              else {
                this.active = t, this.toRespond = t;
                for (var n = 0; n < t; n++) {
                  var r = e[n];
                  this.add(V(this, r, r, n))
                }
              }
            }
          }, {
            key: "notifyComplete",
            value: function (e) {
              0 == (this.active -= 1) && this.destination.complete()
            }
          }, {
            key: "notifyNext",
            value: function (e, t, n, r, i) {
              var o = this.values,
                a = this.toRespond ? o[n] === Sh ? --this.toRespond : this.toRespond : 0;
              o[n] = t, 0 === a && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
            }
          }, {
            key: "_tryResultSelector",
            value: function (e) {
              var t;
              try {
                t = this.resultSelector.apply(this, e)
              } catch (n) {
                return void this.destination.error(n)
              }
              this.destination.next(t)
            }
          }]), n
        }(L),
        Ah = new b((function (e) {
          return e.complete()
        }));

      function Oh(e) {
        return e ? function (e) {
          return new b((function (t) {
            return e.schedule((function () {
              return t.complete()
            }))
          }))
        }(e) : Ah
      }

      function Th(e) {
        return new b((function (t) {
          var n;
          try {
            n = e()
          } catch (r) {
            return void t.error(r)
          }
          return (n ? z(n) : Oh()).subscribe(t)
        }))
      }

      function Ih() {
        return Z(1)
      }
      var Ph = function () {
        function e() {
          return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
        }
        return e.prototype = Object.create(Error.prototype), e
      }();

      function Fh(e) {
        return function (t) {
          return 0 === e ? Oh() : t.lift(new Rh(e))
        }
      }
      var Rh = function () {
          function e(t) {
            if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new Ph
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new Nh(e, this.total))
            }
          }]), e
        }(),
        Nh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).total = r, i.ring = new Array, i.count = 0, i
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              var t = this.ring,
                n = this.total,
                r = this.count++;
              t.length < n ? t.push(e) : t[r % n] = e
            }
          }, {
            key: "_complete",
            value: function () {
              var e = this.destination,
                t = this.count;
              if (t > 0)
                for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                  var o = t++ % n;
                  e.next(r[o])
                }
              e.complete()
            }
          }]), n
        }(v);

      function Mh() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lh;
        return function (t) {
          return t.lift(new Dh(e))
        }
      }
      var Dh = function () {
          function e(t) {
            _classCallCheck(this, e), this.errorFactory = t
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new Vh(e, this.errorFactory))
            }
          }]), e
        }(),
        Vh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).errorFactory = r, i.hasValue = !1, i
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              this.hasValue = !0, this.destination.next(e)
            }
          }, {
            key: "_complete",
            value: function () {
              if (this.hasValue) return this.destination.complete();
              var e;
              try {
                e = this.errorFactory()
              } catch (t) {
                e = t
              }
              this.destination.error(e)
            }
          }]), n
        }(v);

      function Lh() {
        return new wh
      }

      function jh() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return function (t) {
          return t.lift(new Uh(e))
        }
      }
      var Uh = function () {
          function e(t) {
            _classCallCheck(this, e), this.defaultValue = t
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new Hh(e, this.defaultValue))
            }
          }]), e
        }(),
        Hh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).defaultValue = r, i.isEmpty = !0, i
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              this.isEmpty = !1, this.destination.next(e)
            }
          }, {
            key: "_complete",
            value: function () {
              this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }
          }]), n
        }(v);

      function qh(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(e ? Fc((function (t, n) {
            return e(t, n, r)
          })) : $, Fh(1), n ? jh(t) : Mh((function () {
            return new wh
          })))
        }
      }

      function zh(e) {
        return function (t) {
          var n = new Gh(e),
            r = t.lift(n);
          return n.caught = r
        }
      }
      var Gh = function () {
          function e(t) {
            _classCallCheck(this, e), this.selector = t
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new Bh(e, this.selector, this.caught))
            }
          }]), e
        }(),
        Bh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, e)).selector = r, o.caught = i, o
          }
          return _createClass(n, [{
            key: "error",
            value: function (e) {
              if (!this.isStopped) {
                var t;
                try {
                  t = this.selector(e, this.caught)
                } catch (o) {
                  return void _get(_getPrototypeOf(n.prototype), "error", this).call(this, o)
                }
                this._unsubscribeAndRecycle();
                var r = new P(this, void 0, void 0);
                this.add(r);
                var i = V(this, t, void 0, void 0, r);
                i !== r && this.add(i)
              }
            }
          }]), n
        }(L);

      function Wh(e) {
        return function (t) {
          return 0 === e ? Oh() : t.lift(new $h(e))
        }
      }
      var $h = function () {
          function e(t) {
            if (_classCallCheck(this, e), this.total = t, this.total < 0) throw new Ph
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new Zh(e, this.total))
            }
          }]), e
        }(),
        Zh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).total = r, i.count = 0, i
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              var t = this.total,
                n = ++this.count;
              n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
            }
          }]), n
        }(v);

      function Qh(e, t) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(e ? Fc((function (t, n) {
            return e(t, n, r)
          })) : $, Wh(1), n ? jh(t) : Mh((function () {
            return new wh
          })))
        }
      }
      var Jh = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.predicate = t, this.thisArg = n, this.source = r
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new Yh(e, this.predicate, this.thisArg, this.source))
            }
          }]), e
        }(),
        Yh = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            return _classCallCheck(this, n), (a = t.call(this, e)).predicate = r, a.thisArg = i, a.source = o, a.index = 0, a.thisArg = i || _assertThisInitialized(a), a
          }
          return _createClass(n, [{
            key: "notifyComplete",
            value: function (e) {
              this.destination.next(e), this.destination.complete()
            }
          }, {
            key: "_next",
            value: function (e) {
              var t = !1;
              try {
                t = this.predicate.call(this.thisArg, e, this.index++, this.source)
              } catch (n) {
                return void this.destination.error(n)
              }
              t || this.notifyComplete(!1)
            }
          }, {
            key: "_complete",
            value: function () {
              this.notifyComplete(!0)
            }
          }]), n
        }(v);

      function Kh(e, t) {
        return "function" == typeof t ? function (n) {
          return n.pipe(Kh((function (n, r) {
            return z(e(n, r)).pipe(j((function (e, i) {
              return t(n, e, r, i)
            })))
          })))
        } : function (t) {
          return t.lift(new Xh(e))
        }
      }
      var Xh = function () {
          function e(t) {
            _classCallCheck(this, e), this.project = t
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new ef(e, this.project))
            }
          }]), e
        }(),
        ef = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).project = r, i.index = 0, i
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              var t, n = this.index++;
              try {
                t = this.project(e, n)
              } catch (r) {
                return void this.destination.error(r)
              }
              this._innerSub(t, e, n)
            }
          }, {
            key: "_innerSub",
            value: function (e, t, n) {
              var r = this.innerSubscription;
              r && r.unsubscribe();
              var i = new P(this, t, n),
                o = this.destination;
              o.add(i), this.innerSubscription = V(this, e, void 0, void 0, i), this.innerSubscription !== i && o.add(this.innerSubscription)
            }
          }, {
            key: "_complete",
            value: function () {
              var e = this.innerSubscription;
              e && !e.closed || _get(_getPrototypeOf(n.prototype), "_complete", this).call(this), this.unsubscribe()
            }
          }, {
            key: "_unsubscribe",
            value: function () {
              this.innerSubscription = null
            }
          }, {
            key: "notifyComplete",
            value: function (e) {
              this.destination.remove(e), this.innerSubscription = null, this.isStopped && _get(_getPrototypeOf(n.prototype), "_complete", this).call(this)
            }
          }, {
            key: "notifyNext",
            value: function (e, t, n, r, i) {
              this.destination.next(t)
            }
          }]), n
        }(L);

      function tf() {
        return Ih()(Ic.apply(void 0, arguments))
      }

      function nf(e, t) {
        var n = !1;
        return arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new rf(e, t, n))
          }
      }
      var rf = function () {
          function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            _classCallCheck(this, e), this.accumulator = t, this.seed = n, this.hasSeed = r
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new of (e, this.accumulator, this.seed, this.hasSeed))
            }
          }]), e
        }(),
        of = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            return _classCallCheck(this, n), (a = t.call(this, e)).accumulator = r, a._seed = i, a.hasSeed = o, a.index = 0, a
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              if (this.hasSeed) return this._tryNext(e);
              this.seed = e, this.destination.next(e)
            }
          }, {
            key: "_tryNext",
            value: function (e) {
              var t, n = this.index++;
              try {
                t = this.accumulator(this.seed, e, n)
              } catch (r) {
                this.destination.error(r)
              }
              this.seed = t, this.destination.next(t)
            }
          }, {
            key: "seed",
            get: function () {
              return this._seed
            },
            set: function (e) {
              this.hasSeed = !0, this._seed = e
            }
          }]), n
        }(v);

      function af(e, t, n) {
        return function (r) {
          return r.lift(new uf(e, t, n))
        }
      }
      var sf, uf = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.nextOrObserver = t, this.error = n, this.complete = r
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new lf(e, this.nextOrObserver, this.error, this.complete))
            }
          }]), e
        }(),
        lf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, i, o, a) {
            var s;
            return _classCallCheck(this, n), (s = t.call(this, e))._tapNext = y, s._tapError = y, s._tapComplete = y, s._tapError = o || y, s._tapComplete = a || y, r(i) ? (s._context = _assertThisInitialized(s), s._tapNext = i) : i && (s._context = i, s._tapNext = i.next || y, s._tapError = i.error || y, s._tapComplete = i.complete || y), s
          }
          return _createClass(n, [{
            key: "_next",
            value: function (e) {
              try {
                this._tapNext.call(this._context, e)
              } catch (t) {
                return void this.destination.error(t)
              }
              this.destination.next(e)
            }
          }, {
            key: "_error",
            value: function (e) {
              try {
                this._tapError.call(this._context, e)
              } catch (e) {
                return void this.destination.error(e)
              }
              this.destination.error(e)
            }
          }, {
            key: "_complete",
            value: function () {
              try {
                this._tapComplete.call(this._context)
              } catch (e) {
                return void this.destination.error(e)
              }
              return this.destination.complete()
            }
          }]), n
        }(v),
        cf = function () {
          function e(t) {
            _classCallCheck(this, e), this.callback = t
          }
          return _createClass(e, [{
            key: "call",
            value: function (e, t) {
              return t.subscribe(new hf(e, this.callback))
            }
          }]), e
        }(),
        hf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, e)).add(new f(r)), i
          }
          return n
        }(v),
        ff = function e(t, n) {
          _classCallCheck(this, e), this.id = t, this.url = n
        },
        df = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "imperative",
              a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return _classCallCheck(this, n), (i = t.call(this, e, r)).navigationTrigger = o, i.restoredState = a, i
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "NavigationStart(id: ".concat(this.id, ", url: '").concat(this.url, "')")
            }
          }]), n
        }(ff),
        pf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, e, r)).urlAfterRedirects = i, o
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "NavigationEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "')")
            }
          }]), n
        }(ff),
        vf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, e, r)).reason = i, o
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "NavigationCancel(id: ".concat(this.id, ", url: '").concat(this.url, "')")
            }
          }]), n
        }(ff),
        mf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, e, r)).error = i, o
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "NavigationError(id: ".concat(this.id, ", url: '").concat(this.url, "', error: ").concat(this.error, ")")
            }
          }]), n
        }(ff),
        gf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "RoutesRecognized(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
            }
          }]), n
        }(ff),
        yf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "GuardsCheckStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
            }
          }]), n
        }(ff),
        _f = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o, a) {
            var s;
            return _classCallCheck(this, n), (s = t.call(this, e, r)).urlAfterRedirects = i, s.state = o, s.shouldActivate = a, s
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "GuardsCheckEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ", shouldActivate: ").concat(this.shouldActivate, ")")
            }
          }]), n
        }(ff),
        kf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "ResolveStart(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
            }
          }]), n
        }(ff),
        Cf = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o) {
            var a;
            return _classCallCheck(this, n), (a = t.call(this, e, r)).urlAfterRedirects = i, a.state = o, a
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return "ResolveEnd(id: ".concat(this.id, ", url: '").concat(this.url, "', urlAfterRedirects: '").concat(this.urlAfterRedirects, "', state: ").concat(this.state, ")")
            }
          }]), n
        }(ff),
        bf = function () {
          function e(t) {
            _classCallCheck(this, e), this.route = t
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "RouteConfigLoadStart(path: ".concat(this.route.path, ")")
            }
          }]), e
        }(),
        wf = function () {
          function e(t) {
            _classCallCheck(this, e), this.route = t
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "RouteConfigLoadEnd(path: ".concat(this.route.path, ")")
            }
          }]), e
        }(),
        Sf = function () {
          function e(t) {
            _classCallCheck(this, e), this.snapshot = t
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "ChildActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
            }
          }]), e
        }(),
        Ef = function () {
          function e(t) {
            _classCallCheck(this, e), this.snapshot = t
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "ChildActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
            }
          }]), e
        }(),
        xf = function () {
          function e(t) {
            _classCallCheck(this, e), this.snapshot = t
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "ActivationStart(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
            }
          }]), e
        }(),
        Af = function () {
          function e(t) {
            _classCallCheck(this, e), this.snapshot = t
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "ActivationEnd(path: '".concat(this.snapshot.routeConfig && this.snapshot.routeConfig.path || "", "')")
            }
          }]), e
        }(),
        Of = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.routerEvent = t, this.position = n, this.anchor = r
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "Scroll(anchor: '".concat(this.anchor, "', position: '").concat(this.position ? "".concat(this.position[0], ", ").concat(this.position[1]) : null, "')")
            }
          }]), e
        }(),
        Tf = ((sf = function e() {
          _classCallCheck(this, e)
        }).\u0275fac = function (e) {
          return new(e || sf)
        }, sf.\u0275cmp = ft({
          type: sf,
          selectors: [
            ["ng-component"]
          ],
          decls: 1,
          vars: 0,
          template: function (e, t) {
            1 & e && Mo(0, "router-outlet")
          },
          directives: function () {
            return [Up]
          },
          encapsulation: 2
        }), sf),
        If = function () {
          function e(t) {
            _classCallCheck(this, e), this.params = t || {}
          }
          return _createClass(e, [{
            key: "has",
            value: function (e) {
              return this.params.hasOwnProperty(e)
            }
          }, {
            key: "get",
            value: function (e) {
              if (this.has(e)) {
                var t = this.params[e];
                return Array.isArray(t) ? t[0] : t
              }
              return null
            }
          }, {
            key: "getAll",
            value: function (e) {
              if (this.has(e)) {
                var t = this.params[e];
                return Array.isArray(t) ? t : [t]
              }
              return []
            }
          }, {
            key: "keys",
            get: function () {
              return Object.keys(this.params)
            }
          }]), e
        }();

      function Pf(e) {
        return new If(e)
      }

      function Ff(e) {
        var t = Error("NavigationCancelingError: " + e);
        return t.ngNavigationCancelingError = !0, t
      }

      function Rf(e, t, n) {
        var r = n.path.split("/");
        if (r.length > e.length) return null;
        if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
        for (var i = {}, o = 0; o < r.length; o++) {
          var a = r[o],
            s = e[o];
          if (a.startsWith(":")) i[a.substring(1)] = s;
          else if (a !== s.path) return null
        }
        return {
          consumed: e.slice(0, r.length),
          posParams: i
        }
      }
      var Nf = function e(t, n) {
        _classCallCheck(this, e), this.routes = t, this.module = n
      };

      function Mf(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = 0; n < e.length; n++) {
          var r = e[n];
          Df(r, Vf(t, r))
        }
      }

      function Df(e, t) {
        if (!e) throw new Error("\n      Invalid configuration of route '".concat(t, "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "));
        if (Array.isArray(e)) throw new Error("Invalid configuration of route '".concat(t, "': Array cannot be specified"));
        if (!e.component && !e.children && !e.loadChildren && e.outlet && "primary" !== e.outlet) throw new Error("Invalid configuration of route '".concat(t, "': a componentless route without children or loadChildren cannot have a named outlet set"));
        if (e.redirectTo && e.children) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and children cannot be used together"));
        if (e.redirectTo && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and loadChildren cannot be used together"));
        if (e.children && e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "': children and loadChildren cannot be used together"));
        if (e.redirectTo && e.component) throw new Error("Invalid configuration of route '".concat(t, "': redirectTo and component cannot be used together"));
        if (e.path && e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': path and matcher cannot be used together"));
        if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren) throw new Error("Invalid configuration of route '".concat(t, "'. One of the following must be provided: component, redirectTo, children or loadChildren"));
        if (void 0 === e.path && void 0 === e.matcher) throw new Error("Invalid configuration of route '".concat(t, "': routes must have either a path or a matcher specified"));
        if ("string" == typeof e.path && "/" === e.path.charAt(0)) throw new Error("Invalid configuration of route '".concat(t, "': path cannot start with a slash"));
        if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) throw new Error("Invalid configuration of route '{path: \"".concat(t, '", redirectTo: "').concat(e.redirectTo, "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."));
        if (void 0 !== e.pathMatch && "full" !== e.pathMatch && "prefix" !== e.pathMatch) throw new Error("Invalid configuration of route '".concat(t, "': pathMatch can only be set to 'prefix' or 'full'"));
        e.children && Mf(e.children, t)
      }

      function Vf(e, t) {
        return t ? e || t.path ? e && !t.path ? "".concat(e, "/") : !e && t.path ? t.path : "".concat(e, "/").concat(t.path) : "" : e
      }

      function Lf(e) {
        var t = e.children && e.children.map(Lf),
          n = t ? Object.assign(Object.assign({}, e), {
            children: t
          }) : Object.assign({}, e);
        return !n.component && (t || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = Tf), n
      }

      function jf(e, t) {
        var n, r = Object.keys(e),
          i = Object.keys(t);
        if (!r || !i || r.length != i.length) return !1;
        for (var o = 0; o < r.length; o++)
          if (!Uf(e[n = r[o]], t[n])) return !1;
        return !0
      }

      function Uf(e, t) {
        return Array.isArray(e) && Array.isArray(t) ? e.length == t.length && e.every((function (e) {
          return t.indexOf(e) > -1
        })) : e === t
      }

      function Hf(e) {
        return Array.prototype.concat.apply([], e)
      }

      function qf(e) {
        return e.length > 0 ? e[e.length - 1] : null
      }

      function zf(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
      }

      function Gf(e) {
        return Lo(e) ? e : Vo(e) ? z(Promise.resolve(e)) : Ic(e)
      }

      function Bf(e, t, n) {
        return n ? function (e, t) {
          return jf(e, t)
        }(e.queryParams, t.queryParams) && function e(t, n) {
          if (!Qf(t.segments, n.segments)) return !1;
          if (t.numberOfChildren !== n.numberOfChildren) return !1;
          for (var r in n.children) {
            if (!t.children[r]) return !1;
            if (!e(t.children[r], n.children[r])) return !1
          }
          return !0
        }(e.root, t.root) : function (e, t) {
          return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every((function (n) {
            return Uf(e[n], t[n])
          }))
        }(e.queryParams, t.queryParams) && function e(t, n) {
          return function t(n, r, i) {
            if (n.segments.length > i.length) return !!Qf(n.segments.slice(0, i.length), i) && !r.hasChildren();
            if (n.segments.length === i.length) {
              if (!Qf(n.segments, i)) return !1;
              for (var o in r.children) {
                if (!n.children[o]) return !1;
                if (!e(n.children[o], r.children[o])) return !1
              }
              return !0
            }
            var a = i.slice(0, n.segments.length),
              s = i.slice(n.segments.length);
            return !!Qf(n.segments, a) && !!n.children.primary && t(n.children.primary, r, s)
          }(t, n, n.segments)
        }(e.root, t.root)
      }
      var Wf = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.root = t, this.queryParams = n, this.fragment = r
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return Xf.serialize(this)
            }
          }, {
            key: "queryParamMap",
            get: function () {
              return this._queryParamMap || (this._queryParamMap = Pf(this.queryParams)), this._queryParamMap
            }
          }]), e
        }(),
        $f = function () {
          function e(t, n) {
            var r = this;
            _classCallCheck(this, e), this.segments = t, this.children = n, this.parent = null, zf(n, (function (e, t) {
              return e.parent = r
            }))
          }
          return _createClass(e, [{
            key: "hasChildren",
            value: function () {
              return this.numberOfChildren > 0
            }
          }, {
            key: "toString",
            value: function () {
              return ed(this)
            }
          }, {
            key: "numberOfChildren",
            get: function () {
              return Object.keys(this.children).length
            }
          }]), e
        }(),
        Zf = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.path = t, this.parameters = n
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return ad(this)
            }
          }, {
            key: "parameterMap",
            get: function () {
              return this._parameterMap || (this._parameterMap = Pf(this.parameters)), this._parameterMap
            }
          }]), e
        }();

      function Qf(e, t) {
        return e.length === t.length && e.every((function (e, n) {
          return e.path === t[n].path
        }))
      }

      function Jf(e, t) {
        var n = [];
        return zf(e.children, (function (e, r) {
          "primary" === r && (n = n.concat(t(e, r)))
        })), zf(e.children, (function (e, r) {
          "primary" !== r && (n = n.concat(t(e, r)))
        })), n
      }
      var Yf = function e() {
          _classCallCheck(this, e)
        },
        Kf = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "parse",
            value: function (e) {
              var t = new hd(e);
              return new Wf(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment())
            }
          }, {
            key: "serialize",
            value: function (e) {
              var t, n, r;
              return "".concat("/".concat(function e(t, n) {
                if (!t.hasChildren()) return ed(t);
                if (n) {
                  var r = t.children.primary ? e(t.children.primary, !1) : "",
                    i = [];
                  return zf(t.children, (function (t, n) {
                    "primary" !== n && i.push("".concat(n, ":").concat(e(t, !1)))
                  })), i.length > 0 ? "".concat(r, "(").concat(i.join("//"), ")") : r
                }
                var o = Jf(t, (function (n, r) {
                  return "primary" === r ? [e(t.children.primary, !1)] : ["".concat(r, ":").concat(e(n, !1))]
                }));
                return "".concat(ed(t), "/(").concat(o.join("//"), ")")
              }(e.root, !0)), (n = e.queryParams, r = Object.keys(n).map((function (e) {
                var t = n[e];
                return Array.isArray(t) ? t.map((function (t) {
                  return "".concat(nd(e), "=").concat(nd(t))
                })).join("&") : "".concat(nd(e), "=").concat(nd(t))
              })), r.length ? "?".concat(r.join("&")) : "")).concat("string" == typeof e.fragment ? "#".concat((t = e.fragment, encodeURI(t))) : "")
            }
          }]), e
        }(),
        Xf = new Kf;

      function ed(e) {
        return e.segments.map((function (e) {
          return ad(e)
        })).join("/")
      }

      function td(e) {
        return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
      }

      function nd(e) {
        return td(e).replace(/%3B/gi, ";")
      }

      function rd(e) {
        return td(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
      }

      function id(e) {
        return decodeURIComponent(e)
      }

      function od(e) {
        return id(e.replace(/\+/g, "%20"))
      }

      function ad(e) {
        return "".concat(rd(e.path)).concat((t = e.parameters, Object.keys(t).map((function (e) {
          return ";".concat(rd(e), "=").concat(rd(t[e]))
        })).join("")));
        var t
      }
      var sd = /^[^\/()?;=#]+/;

      function ud(e) {
        var t = e.match(sd);
        return t ? t[0] : ""
      }
      var ld = /^[^=?&#]+/,
        cd = /^[^?&#]+/,
        hd = function () {
          function e(t) {
            _classCallCheck(this, e), this.url = t, this.remaining = t
          }
          return _createClass(e, [{
            key: "parseRootSegment",
            value: function () {
              return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new $f([], {}) : new $f([], this.parseChildren())
            }
          }, {
            key: "parseQueryParams",
            value: function () {
              var e = {};
              if (this.consumeOptional("?"))
                do {
                  this.parseQueryParam(e)
                } while (this.consumeOptional("&"));
              return e
            }
          }, {
            key: "parseFragment",
            value: function () {
              return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }
          }, {
            key: "parseChildren",
            value: function () {
              if ("" === this.remaining) return {};
              this.consumeOptional("/");
              var e = [];
              for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
              var t = {};
              this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0));
              var n = {};
              return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n.primary = new $f(e, t)), n
            }
          }, {
            key: "parseSegment",
            value: function () {
              var e = ud(this.remaining);
              if ("" === e && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '".concat(this.remaining, "'."));
              return this.capture(e), new Zf(id(e), this.parseMatrixParams())
            }
          }, {
            key: "parseMatrixParams",
            value: function () {
              for (var e = {}; this.consumeOptional(";");) this.parseParam(e);
              return e
            }
          }, {
            key: "parseParam",
            value: function (e) {
              var t = ud(this.remaining);
              if (t) {
                this.capture(t);
                var n = "";
                if (this.consumeOptional("=")) {
                  var r = ud(this.remaining);
                  r && (n = r, this.capture(n))
                }
                e[id(t)] = id(n)
              }
            }
          }, {
            key: "parseQueryParam",
            value: function (e) {
              var t = function (e) {
                var t = e.match(ld);
                return t ? t[0] : ""
              }(this.remaining);
              if (t) {
                this.capture(t);
                var n = "";
                if (this.consumeOptional("=")) {
                  var r = function (e) {
                    var t = e.match(cd);
                    return t ? t[0] : ""
                  }(this.remaining);
                  r && (n = r, this.capture(n))
                }
                var i = od(t),
                  o = od(n);
                if (e.hasOwnProperty(i)) {
                  var a = e[i];
                  Array.isArray(a) || (a = [a], e[i] = a), a.push(o)
                } else e[i] = o
              }
            }
          }, {
            key: "parseParens",
            value: function (e) {
              var t = {};
              for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                var n = ud(this.remaining),
                  r = this.remaining[n.length];
                if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '".concat(this.url, "'"));
                var i = void 0;
                n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : e && (i = "primary");
                var o = this.parseChildren();
                t[i] = 1 === Object.keys(o).length ? o.primary : new $f([], o), this.consumeOptional("//")
              }
              return t
            }
          }, {
            key: "peekStartsWith",
            value: function (e) {
              return this.remaining.startsWith(e)
            }
          }, {
            key: "consumeOptional",
            value: function (e) {
              return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0)
            }
          }, {
            key: "capture",
            value: function (e) {
              if (!this.consumeOptional(e)) throw new Error('Expected "'.concat(e, '".'))
            }
          }]), e
        }(),
        fd = function () {
          function e(t) {
            _classCallCheck(this, e), this._root = t
          }
          return _createClass(e, [{
            key: "parent",
            value: function (e) {
              var t = this.pathFromRoot(e);
              return t.length > 1 ? t[t.length - 2] : null
            }
          }, {
            key: "children",
            value: function (e) {
              var t = dd(e, this._root);
              return t ? t.children.map((function (e) {
                return e.value
              })) : []
            }
          }, {
            key: "firstChild",
            value: function (e) {
              var t = dd(e, this._root);
              return t && t.children.length > 0 ? t.children[0].value : null
            }
          }, {
            key: "siblings",
            value: function (e) {
              var t = pd(e, this._root);
              return t.length < 2 ? [] : t[t.length - 2].children.map((function (e) {
                return e.value
              })).filter((function (t) {
                return t !== e
              }))
            }
          }, {
            key: "pathFromRoot",
            value: function (e) {
              return pd(e, this._root).map((function (e) {
                return e.value
              }))
            }
          }, {
            key: "root",
            get: function () {
              return this._root.value
            }
          }]), e
        }();

      function dd(e, t) {
        if (e === t.value) return t;
        var n, r = _createForOfIteratorHelper(t.children);
        try {
          for (r.s(); !(n = r.n()).done;) {
            var i = dd(e, n.value);
            if (i) return i
          }
        } catch (o) {
          r.e(o)
        } finally {
          r.f()
        }
        return null
      }

      function pd(e, t) {
        if (e === t.value) return [t];
        var n, r = _createForOfIteratorHelper(t.children);
        try {
          for (r.s(); !(n = r.n()).done;) {
            var i = pd(e, n.value);
            if (i.length) return i.unshift(t), i
          }
        } catch (o) {
          r.e(o)
        } finally {
          r.f()
        }
        return []
      }
      var vd = function () {
        function e(t, n) {
          _classCallCheck(this, e), this.value = t, this.children = n
        }
        return _createClass(e, [{
          key: "toString",
          value: function () {
            return "TreeNode(".concat(this.value, ")")
          }
        }]), e
      }();

      function md(e) {
        var t = {};
        return e && e.children.forEach((function (e) {
          return t[e.value.outlet] = e
        })), t
      }
      var gd = function (e) {
        _inherits(n, e);
        var t = _createSuper(n);

        function n(e, r) {
          var i;
          return _classCallCheck(this, n), (i = t.call(this, e)).snapshot = r, wd(_assertThisInitialized(i), e), i
        }
        return _createClass(n, [{
          key: "toString",
          value: function () {
            return this.snapshot.toString()
          }
        }]), n
      }(fd);

      function yd(e, t) {
        var n = function (e, t) {
            var n = new Cd([], {}, {}, "", {}, "primary", t, null, e.root, -1, {});
            return new bd("", new vd(n, []))
          }(e, t),
          r = new bh([new Zf("", {})]),
          i = new bh({}),
          o = new bh({}),
          a = new bh({}),
          s = new bh(""),
          u = new _d(r, i, a, s, o, "primary", t, n.root);
        return u.snapshot = n.root, new gd(new vd(u, []), n)
      }
      var _d = function () {
        function e(t, n, r, i, o, a, s, u) {
          _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = s, this._futureSnapshot = u
        }
        return _createClass(e, [{
          key: "toString",
          value: function () {
            return this.snapshot ? this.snapshot.toString() : "Future(".concat(this._futureSnapshot, ")")
          }
        }, {
          key: "routeConfig",
          get: function () {
            return this._futureSnapshot.routeConfig
          }
        }, {
          key: "root",
          get: function () {
            return this._routerState.root
          }
        }, {
          key: "parent",
          get: function () {
            return this._routerState.parent(this)
          }
        }, {
          key: "firstChild",
          get: function () {
            return this._routerState.firstChild(this)
          }
        }, {
          key: "children",
          get: function () {
            return this._routerState.children(this)
          }
        }, {
          key: "pathFromRoot",
          get: function () {
            return this._routerState.pathFromRoot(this)
          }
        }, {
          key: "paramMap",
          get: function () {
            return this._paramMap || (this._paramMap = this.params.pipe(j((function (e) {
              return Pf(e)
            })))), this._paramMap
          }
        }, {
          key: "queryParamMap",
          get: function () {
            return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(j((function (e) {
              return Pf(e)
            })))), this._queryParamMap
          }
        }]), e
      }();

      function kd(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "emptyOnly",
          n = e.pathFromRoot,
          r = 0;
        if ("always" !== t)
          for (r = n.length - 1; r >= 1;) {
            var i = n[r],
              o = n[r - 1];
            if (i.routeConfig && "" === i.routeConfig.path) r--;
            else {
              if (o.component) break;
              r--
            }
          }
        return function (e) {
          return e.reduce((function (e, t) {
            return {
              params: Object.assign(Object.assign({}, e.params), t.params),
              data: Object.assign(Object.assign({}, e.data), t.data),
              resolve: Object.assign(Object.assign({}, e.resolve), t._resolvedData)
            }
          }), {
            params: {},
            data: {},
            resolve: {}
          })
        }(n.slice(r))
      }
      var Cd = function () {
          function e(t, n, r, i, o, a, s, u, l, c, h) {
            _classCallCheck(this, e), this.url = t, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = s, this.routeConfig = u, this._urlSegment = l, this._lastPathIndex = c, this._resolve = h
          }
          return _createClass(e, [{
            key: "toString",
            value: function () {
              return "Route(url:'".concat(this.url.map((function (e) {
                return e.toString()
              })).join("/"), "', path:'").concat(this.routeConfig ? this.routeConfig.path : "", "')")
            }
          }, {
            key: "root",
            get: function () {
              return this._routerState.root
            }
          }, {
            key: "parent",
            get: function () {
              return this._routerState.parent(this)
            }
          }, {
            key: "firstChild",
            get: function () {
              return this._routerState.firstChild(this)
            }
          }, {
            key: "children",
            get: function () {
              return this._routerState.children(this)
            }
          }, {
            key: "pathFromRoot",
            get: function () {
              return this._routerState.pathFromRoot(this)
            }
          }, {
            key: "paramMap",
            get: function () {
              return this._paramMap || (this._paramMap = Pf(this.params)), this._paramMap
            }
          }, {
            key: "queryParamMap",
            get: function () {
              return this._queryParamMap || (this._queryParamMap = Pf(this.queryParams)), this._queryParamMap
            }
          }]), e
        }(),
        bd = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this, r)).url = e, wd(_assertThisInitialized(i), r), i
          }
          return _createClass(n, [{
            key: "toString",
            value: function () {
              return Sd(this._root)
            }
          }]), n
        }(fd);

      function wd(e, t) {
        t.value._routerState = e, t.children.forEach((function (t) {
          return wd(e, t)
        }))
      }

      function Sd(e) {
        var t = e.children.length > 0 ? " { ".concat(e.children.map(Sd).join(", "), " } ") : "";
        return "".concat(e.value).concat(t)
      }

      function Ed(e) {
        if (e.snapshot) {
          var t = e.snapshot,
            n = e._futureSnapshot;
          e.snapshot = n, jf(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), jf(t.params, n.params) || e.params.next(n.params),
            function (e, t) {
              if (e.length !== t.length) return !1;
              for (var n = 0; n < e.length; ++n)
                if (!jf(e[n], t[n])) return !1;
              return !0
            }(t.url, n.url) || e.url.next(n.url), jf(t.data, n.data) || e.data.next(n.data)
        } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data)
      }

      function xd(e, t) {
        var n, r;
        return jf(e.params, t.params) && Qf(n = e.url, r = t.url) && n.every((function (e, t) {
          return jf(e.parameters, r[t].parameters)
        })) && !(!e.parent != !t.parent) && (!e.parent || xd(e.parent, t.parent))
      }

      function Ad(e) {
        return "object" == typeof e && null != e && !e.outlets && !e.segmentPath
      }

      function Od(e, t, n, r, i) {
        var o = {};
        return r && zf(r, (function (e, t) {
          o[t] = Array.isArray(e) ? e.map((function (e) {
            return "".concat(e)
          })) : "".concat(e)
        })), new Wf(n.root === e ? t : function e(t, n, r) {
          var i = {};
          return zf(t.children, (function (t, o) {
            i[o] = t === n ? r : e(t, n, r)
          })), new $f(t.segments, i)
        }(n.root, e, t), o, i)
      }
      var Td = function () {
          function e(t, n, r) {
            if (_classCallCheck(this, e), this.isAbsolute = t, this.numberOfDoubleDots = n, this.commands = r, t && r.length > 0 && Ad(r[0])) throw new Error("Root segment cannot have matrix parameters");
            var i = r.find((function (e) {
              return "object" == typeof e && null != e && e.outlets
            }));
            if (i && i !== qf(r)) throw new Error("{outlets:{}} has to be the last command")
          }
          return _createClass(e, [{
            key: "toRoot",
            value: function () {
              return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }
          }]), e
        }(),
        Id = function e(t, n, r) {
          _classCallCheck(this, e), this.segmentGroup = t, this.processChildren = n, this.index = r
        };

      function Pd(e) {
        return "object" == typeof e && null != e && e.outlets ? e.outlets.primary : "".concat(e)
      }

      function Fd(e, t, n) {
        if (e || (e = new $f([], {})), 0 === e.segments.length && e.hasChildren()) return Rd(e, t, n);
        var r = function (e, t, n) {
            for (var r = 0, i = t, o = {
                match: !1,
                pathIndex: 0,
                commandIndex: 0
              }; i < e.segments.length;) {
              if (r >= n.length) return o;
              var a = e.segments[i],
                s = Pd(n[r]),
                u = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === s) break;
              if (s && u && "object" == typeof u && void 0 === u.outlets) {
                if (!Vd(s, u, a)) return o;
                r += 2
              } else {
                if (!Vd(s, {}, a)) return o;
                r++
              }
              i++
            }
            return {
              match: !0,
              pathIndex: i,
              commandIndex: r
            }
          }(e, t, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          var o = new $f(e.segments.slice(0, r.pathIndex), {});
          return o.children.primary = new $f(e.segments.slice(r.pathIndex), e.children), Rd(o, 0, i)
        }
        return r.match && 0 === i.length ? new $f(e.segments, {}) : r.match && !e.hasChildren() ? Nd(e, t, n) : r.match ? Rd(e, 0, i) : Nd(e, t, n)
      }

      function Rd(e, t, n) {
        if (0 === n.length) return new $f(e.segments, {});
        var r = function (e) {
            return "object" != typeof e[0] || void 0 === e[0].outlets ? {
              primary: e
            } : e[0].outlets
          }(n),
          i = {};
        return zf(r, (function (n, r) {
          null !== n && (i[r] = Fd(e.children[r], t, n))
        })), zf(e.children, (function (e, t) {
          void 0 === r[t] && (i[t] = e)
        })), new $f(e.segments, i)
      }

      function Nd(e, t, n) {
        for (var r = e.segments.slice(0, t), i = 0; i < n.length;) {
          if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
            var o = Md(n[i].outlets);
            return new $f(r, o)
          }
          if (0 === i && Ad(n[0])) r.push(new Zf(e.segments[t].path, n[0])), i++;
          else {
            var a = Pd(n[i]),
              s = i < n.length - 1 ? n[i + 1] : null;
            a && s && Ad(s) ? (r.push(new Zf(a, Dd(s))), i += 2) : (r.push(new Zf(a, {})), i++)
          }
        }
        return new $f(r, {})
      }

      function Md(e) {
        var t = {};
        return zf(e, (function (e, n) {
          null !== e && (t[n] = Nd(new $f([], {}), 0, e))
        })), t
      }

      function Dd(e) {
        var t = {};
        return zf(e, (function (e, n) {
          return t[n] = "".concat(e)
        })), t
      }

      function Vd(e, t, n) {
        return e == n.path && jf(t, n.parameters)
      }
      var Ld = function () {
        function e(t, n, r, i) {
          _classCallCheck(this, e), this.routeReuseStrategy = t, this.futureState = n, this.currState = r, this.forwardEvent = i
        }
        return _createClass(e, [{
          key: "activate",
          value: function (e) {
            var t = this.futureState._root,
              n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(t, n, e), Ed(this.futureState.root), this.activateChildRoutes(t, n, e)
          }
        }, {
          key: "deactivateChildRoutes",
          value: function (e, t, n) {
            var r = this,
              i = md(t);
            e.children.forEach((function (e) {
              var t = e.value.outlet;
              r.deactivateRoutes(e, i[t], n), delete i[t]
            })), zf(i, (function (e, t) {
              r.deactivateRouteAndItsChildren(e, n)
            }))
          }
        }, {
          key: "deactivateRoutes",
          value: function (e, t, n) {
            var r = e.value,
              i = t ? t.value : null;
            if (r === i)
              if (r.component) {
                var o = n.getContext(r.outlet);
                o && this.deactivateChildRoutes(e, t, o.children)
              } else this.deactivateChildRoutes(e, t, n);
            else i && this.deactivateRouteAndItsChildren(t, n)
          }
        }, {
          key: "deactivateRouteAndItsChildren",
          value: function (e, t) {
            this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t)
          }
        }, {
          key: "detachAndStoreRouteSubtree",
          value: function (e, t) {
            var n = t.getContext(e.value.outlet);
            if (n && n.outlet) {
              var r = n.outlet.detach(),
                i = n.children.onOutletDeactivated();
              this.routeReuseStrategy.store(e.value.snapshot, {
                componentRef: r,
                route: e,
                contexts: i
              })
            }
          }
        }, {
          key: "deactivateRouteAndOutlet",
          value: function (e, t) {
            var n = this,
              r = t.getContext(e.value.outlet);
            if (r) {
              var i = md(e),
                o = e.value.component ? r.children : t;
              zf(i, (function (e, t) {
                return n.deactivateRouteAndItsChildren(e, o)
              })), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
            }
          }
        }, {
          key: "activateChildRoutes",
          value: function (e, t, n) {
            var r = this,
              i = md(t);
            e.children.forEach((function (e) {
              r.activateRoutes(e, i[e.value.outlet], n), r.forwardEvent(new Af(e.value.snapshot))
            })), e.children.length && this.forwardEvent(new Ef(e.value.snapshot))
          }
        }, {
          key: "activateRoutes",
          value: function (e, t, n) {
            var r = e.value,
              i = t ? t.value : null;
            if (Ed(r), r === i)
              if (r.component) {
                var o = n.getOrCreateContext(r.outlet);
                this.activateChildRoutes(e, t, o.children)
              } else this.activateChildRoutes(e, t, n);
            else if (r.component) {
              var a = n.getOrCreateContext(r.outlet);
              if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                var s = this.routeReuseStrategy.retrieve(r.snapshot);
                this.routeReuseStrategy.store(r.snapshot, null), a.children.onOutletReAttached(s.contexts), a.attachRef = s.componentRef, a.route = s.route.value, a.outlet && a.outlet.attach(s.componentRef, s.route.value), jd(s.route)
              } else {
                var u = function (e) {
                    for (var t = e.parent; t; t = t.parent) {
                      var n = t.routeConfig;
                      if (n && n._loadedConfig) return n._loadedConfig;
                      if (n && n.component) return null
                    }
                    return null
                  }(r.snapshot),
                  l = u ? u.module.componentFactoryResolver : null;
                a.attachRef = null, a.route = r, a.resolver = l, a.outlet && a.outlet.activateWith(r, l), this.activateChildRoutes(e, null, a.children)
              }
            } else this.activateChildRoutes(e, null, n)
          }
        }]), e
      }();

      function jd(e) {
        Ed(e.value), e.children.forEach(jd)
      }

      function Ud(e) {
        return "function" == typeof e
      }

      function Hd(e) {
        return e instanceof Wf
      }
      var qd = function e(t) {
          _classCallCheck(this, e), this.segmentGroup = t || null
        },
        zd = function e(t) {
          _classCallCheck(this, e), this.urlTree = t
        };

      function Gd(e) {
        return new b((function (t) {
          return t.error(new qd(e))
        }))
      }

      function Bd(e) {
        return new b((function (t) {
          return t.error(new zd(e))
        }))
      }

      function Wd(e) {
        return new b((function (t) {
          return t.error(new Error("Only absolute redirects can have named outlets. redirectTo: '".concat(e, "'")))
        }))
      }
      var $d = function () {
        function e(t, n, r, i, o) {
          _classCallCheck(this, e), this.configLoader = n, this.urlSerializer = r, this.urlTree = i, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(et)
        }
        return _createClass(e, [{
          key: "apply",
          value: function () {
            var e = this;
            return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(j((function (t) {
              return e.createUrlTree(t, e.urlTree.queryParams, e.urlTree.fragment)
            }))).pipe(zh((function (t) {
              if (t instanceof zd) return e.allowRedirects = !1, e.match(t.urlTree);
              if (t instanceof qd) throw e.noMatchError(t);
              throw t
            })))
          }
        }, {
          key: "match",
          value: function (e) {
            var t = this;
            return this.expandSegmentGroup(this.ngModule, this.config, e.root, "primary").pipe(j((function (n) {
              return t.createUrlTree(n, e.queryParams, e.fragment)
            }))).pipe(zh((function (e) {
              if (e instanceof qd) throw t.noMatchError(e);
              throw e
            })))
          }
        }, {
          key: "noMatchError",
          value: function (e) {
            return new Error("Cannot match any routes. URL Segment: '".concat(e.segmentGroup, "'"))
          }
        }, {
          key: "createUrlTree",
          value: function (e, t, n) {
            var r = e.segments.length > 0 ? new $f([], {
              primary: e
            }) : e;
            return new Wf(r, t, n)
          }
        }, {
          key: "expandSegmentGroup",
          value: function (e, t, n, r) {
            return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(j((function (e) {
              return new $f([], e)
            }))) : this.expandSegment(e, n, t, n.segments, r, !0)
          }
        }, {
          key: "expandChildren",
          value: function (e, t, n) {
            var r = this;
            return function (n, i) {
              if (0 === Object.keys(n).length) return Ic({});
              var o = [],
                a = [],
                s = {};
              return zf(n, (function (n, i) {
                var u, l, c = (u = i, l = n, r.expandSegmentGroup(e, t, l, u)).pipe(j((function (e) {
                  return s[i] = e
                })));
                "primary" === i ? o.push(c) : a.push(c)
              })), Ic.apply(null, o.concat(a)).pipe(Ih(), qh(), j((function () {
                return s
              })))
            }(n.children)
          }
        }, {
          key: "expandSegment",
          value: function (e, t, n, r, i, o) {
            var a = this;
            return Ic.apply(void 0, _toConsumableArray(n)).pipe(j((function (s) {
              return a.expandSegmentAgainstRoute(e, t, n, s, r, i, o).pipe(zh((function (e) {
                if (e instanceof qd) return Ic(null);
                throw e
              })))
            })), Ih(), Qh((function (e) {
              return !!e
            })), zh((function (e, n) {
              if (e instanceof wh || "EmptyError" === e.name) {
                if (a.noLeftoversInUrl(t, r, i)) return Ic(new $f([], {}));
                throw new qd(t)
              }
              throw e
            })))
          }
        }, {
          key: "noLeftoversInUrl",
          value: function (e, t, n) {
            return 0 === t.length && !e.children[n]
          }
        }, {
          key: "expandSegmentAgainstRoute",
          value: function (e, t, n, r, i, o, a) {
            return Yd(r) !== o ? Gd(t) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(e, t, r, i) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o) : Gd(t)
          }
        }, {
          key: "expandSegmentAgainstRouteUsingRedirect",
          value: function (e, t, n, r, i, o) {
            return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, o) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, i, o)
          }
        }, {
          key: "expandWildCardWithParamsAgainstRouteUsingRedirect",
          value: function (e, t, n, r) {
            var i = this,
              o = this.applyRedirectCommands([], n.redirectTo, {});
            return n.redirectTo.startsWith("/") ? Bd(o) : this.lineralizeSegments(n, o).pipe(G((function (n) {
              var o = new $f(n, {});
              return i.expandSegment(e, o, t, n, r, !1)
            })))
          }
        }, {
          key: "expandRegularSegmentAgainstRouteUsingRedirect",
          value: function (e, t, n, r, i, o) {
            var a = this,
              s = Zd(t, r, i),
              u = s.matched,
              l = s.consumedSegments,
              c = s.lastChild,
              h = s.positionalParamSegments;
            if (!u) return Gd(t);
            var f = this.applyRedirectCommands(l, r.redirectTo, h);
            return r.redirectTo.startsWith("/") ? Bd(f) : this.lineralizeSegments(r, f).pipe(G((function (r) {
              return a.expandSegment(e, t, n, r.concat(i.slice(c)), o, !1)
            })))
          }
        }, {
          key: "matchSegmentAgainstRoute",
          value: function (e, t, n, r) {
            var i = this;
            if ("**" === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(j((function (e) {
              return n._loadedConfig = e, new $f(r, {})
            }))) : Ic(new $f(r, {}));
            var o = Zd(t, n, r),
              a = o.matched,
              s = o.consumedSegments,
              u = o.lastChild;
            if (!a) return Gd(t);
            var l = r.slice(u);
            return this.getChildConfig(e, n, r).pipe(G((function (e) {
              var n = e.module,
                r = e.routes,
                o = function (e, t, n, r) {
                  return n.length > 0 && function (e, t, n) {
                    return n.some((function (n) {
                      return Jd(e, t, n) && "primary" !== Yd(n)
                    }))
                  }(e, n, r) ? {
                    segmentGroup: Qd(new $f(t, function (e, t) {
                      var n = {};
                      n.primary = t;
                      var r, i = _createForOfIteratorHelper(e);
                      try {
                        for (i.s(); !(r = i.n()).done;) {
                          var o = r.value;
                          "" === o.path && "primary" !== Yd(o) && (n[Yd(o)] = new $f([], {}))
                        }
                      } catch (a) {
                        i.e(a)
                      } finally {
                        i.f()
                      }
                      return n
                    }(r, new $f(n, e.children)))),
                    slicedSegments: []
                  } : 0 === n.length && function (e, t, n) {
                    return n.some((function (n) {
                      return Jd(e, t, n)
                    }))
                  }(e, n, r) ? {
                    segmentGroup: Qd(new $f(e.segments, function (e, t, n, r) {
                      var i, o = {},
                        a = _createForOfIteratorHelper(n);
                      try {
                        for (a.s(); !(i = a.n()).done;) {
                          var s = i.value;
                          Jd(e, t, s) && !r[Yd(s)] && (o[Yd(s)] = new $f([], {}))
                        }
                      } catch (u) {
                        a.e(u)
                      } finally {
                        a.f()
                      }
                      return Object.assign(Object.assign({}, r), o)
                    }(e, n, r, e.children))),
                    slicedSegments: n
                  } : {
                    segmentGroup: e,
                    slicedSegments: n
                  }
                }(t, s, l, r),
                a = o.segmentGroup,
                u = o.slicedSegments;
              return 0 === u.length && a.hasChildren() ? i.expandChildren(n, r, a).pipe(j((function (e) {
                return new $f(s, e)
              }))) : 0 === r.length && 0 === u.length ? Ic(new $f(s, {})) : i.expandSegment(n, a, r, u, "primary", !0).pipe(j((function (e) {
                return new $f(s.concat(e.segments), e.children)
              })))
            })))
          }
        }, {
          key: "getChildConfig",
          value: function (e, t, n) {
            var r = this;
            return t.children ? Ic(new Nf(t.children, e)) : t.loadChildren ? void 0 !== t._loadedConfig ? Ic(t._loadedConfig) : function (e, t, n) {
              var r, i = t.canLoad;
              return i && 0 !== i.length ? z(i).pipe(j((function (r) {
                var i, o = e.get(r);
                if (function (e) {
                    return e && Ud(e.canLoad)
                  }(o)) i = o.canLoad(t, n);
                else {
                  if (!Ud(o)) throw new Error("Invalid CanLoad guard");
                  i = o(t, n)
                }
                return Gf(i)
              }))).pipe(Ih(), (r = function (e) {
                return !0 === e
              }, function (e) {
                return e.lift(new Jh(r, void 0, e))
              })) : Ic(!0)
            }(e.injector, t, n).pipe(G((function (n) {
              return n ? r.configLoader.load(e.injector, t).pipe(j((function (e) {
                return t._loadedConfig = e, e
              }))) : function (e) {
                return new b((function (t) {
                  return t.error(Ff("Cannot load children because the guard of the route \"path: '".concat(e.path, "'\" returned false")))
                }))
              }(t)
            }))) : Ic(new Nf([], e))
          }
        }, {
          key: "lineralizeSegments",
          value: function (e, t) {
            for (var n = [], r = t.root;;) {
              if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Ic(n);
              if (r.numberOfChildren > 1 || !r.children.primary) return Wd(e.redirectTo);
              r = r.children.primary
            }
          }
        }, {
          key: "applyRedirectCommands",
          value: function (e, t, n) {
            return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n)
          }
        }, {
          key: "applyRedirectCreatreUrlTree",
          value: function (e, t, n, r) {
            var i = this.createSegmentGroup(e, t.root, n, r);
            return new Wf(i, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment)
          }
        }, {
          key: "createQueryParams",
          value: function (e, t) {
            var n = {};
            return zf(e, (function (e, r) {
              if ("string" == typeof e && e.startsWith(":")) {
                var i = e.substring(1);
                n[r] = t[i]
              } else n[r] = e
            })), n
          }
        }, {
          key: "createSegmentGroup",
          value: function (e, t, n, r) {
            var i = this,
              o = this.createSegments(e, t.segments, n, r),
              a = {};
            return zf(t.children, (function (t, o) {
              a[o] = i.createSegmentGroup(e, t, n, r)
            })), new $f(o, a)
          }
        }, {
          key: "createSegments",
          value: function (e, t, n, r) {
            var i = this;
            return t.map((function (t) {
              return t.path.startsWith(":") ? i.findPosParam(e, t, r) : i.findOrReturn(t, n)
            }))
          }
        }, {
          key: "findPosParam",
          value: function (e, t, n) {
            var r = n[t.path.substring(1)];
            if (!r) throw new Error("Cannot redirect to '".concat(e, "'. Cannot find '").concat(t.path, "'."));
            return r
          }
        }, {
          key: "findOrReturn",
          value: function (e, t) {
            var n, r = 0,
              i = _createForOfIteratorHelper(t);
            try {
              for (i.s(); !(n = i.n()).done;) {
                var o = n.value;
                if (o.path === e.path) return t.splice(r), o;
                r++
              }
            } catch (a) {
              i.e(a)
            } finally {
              i.f()
            }
            return e
          }
        }]), e
      }();

      function Zd(e, t, n) {
        if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? {
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
        var r = (t.matcher || Rf)(n, e, t);
        return r ? {
          matched: !0,
          consumedSegments: r.consumed,
          lastChild: r.consumed.length,
          positionalParamSegments: r.posParams
        } : {
          matched: !1,
          consumedSegments: [],
          lastChild: 0,
          positionalParamSegments: {}
        }
      }

      function Qd(e) {
        if (1 === e.numberOfChildren && e.children.primary) {
          var t = e.children.primary;
          return new $f(e.segments.concat(t.segments), t.children)
        }
        return e
      }

      function Jd(e, t, n) {
        return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
      }

      function Yd(e) {
        return e.outlet || "primary"
      }
      var Kd = function e(t) {
          _classCallCheck(this, e), this.path = t, this.route = this.path[this.path.length - 1]
        },
        Xd = function e(t, n) {
          _classCallCheck(this, e), this.component = t, this.route = n
        };

      function ep(e, t, n) {
        var r = function (e) {
          if (!e) return null;
          for (var t = e.parent; t; t = t.parent) {
            var n = t.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig
          }
          return null
        }(t);
        return (r ? r.module.injector : n).get(e)
      }

      function tp(e, t, n) {
        var r = md(e),
          i = e.value;
        zf(r, (function (e, r) {
          tp(e, i.component ? t ? t.children.getContext(r) : null : t, n)
        })), n.canDeactivateChecks.push(new Xd(i.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, i))
      }
      var np = Symbol("INITIAL_VALUE");

      function rp() {
        return Kh((function (e) {
          return (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = null,
              i = null;
            return I(t[t.length - 1]) && (i = t.pop()), "function" == typeof t[t.length - 1] && (r = t.pop()), 1 === t.length && u(t[0]) && (t = t[0]), Q(t, i).lift(new Eh(r))
          }).apply(void 0, _toConsumableArray(e.map((function (e) {
            return e.pipe(Wh(1), function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              var r = t[t.length - 1];
              return I(r) ? (t.pop(), function (e) {
                return tf(t, e, r)
              }) : function (e) {
                return tf(t, e)
              }
            }(np))
          })))).pipe(nf((function (e, t) {
            var n = !1;
            return t.reduce((function (e, r, i) {
              if (e !== np) return e;
              if (r === np && (n = !0), !n) {
                if (!1 === r) return r;
                if (i === t.length - 1 || Hd(r)) return r
              }
              return e
            }), e)
          }), np), Fc((function (e) {
            return e !== np
          })), j((function (e) {
            return Hd(e) ? e : !0 === e
          })), Wh(1))
        }))
      }

      function ip(e, t) {
        return null !== e && t && t(new xf(e)), Ic(!0)
      }

      function op(e, t) {
        return null !== e && t && t(new Sf(e)), Ic(!0)
      }

      function ap(e, t, n) {
        var r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length ? Ic(r.map((function (r) {
          return Th((function () {
            var i, o = ep(r, t, n);
            if (function (e) {
                return e && Ud(e.canActivate)
              }(o)) i = Gf(o.canActivate(t, e));
            else {
              if (!Ud(o)) throw new Error("Invalid CanActivate guard");
              i = Gf(o(t, e))
            }
            return i.pipe(Qh())
          }))
        }))).pipe(rp()) : Ic(!0)
      }

      function sp(e, t, n) {
        var r = t[t.length - 1],
          i = t.slice(0, t.length - 1).reverse().map((function (e) {
            return function (e) {
              var t = e.routeConfig ? e.routeConfig.canActivateChild : null;
              return t && 0 !== t.length ? {
                node: e,
                guards: t
              } : null
            }(e)
          })).filter((function (e) {
            return null !== e
          })).map((function (t) {
            return Th((function () {
              return Ic(t.guards.map((function (i) {
                var o, a = ep(i, t.node, n);
                if (function (e) {
                    return e && Ud(e.canActivateChild)
                  }(a)) o = Gf(a.canActivateChild(r, e));
                else {
                  if (!Ud(a)) throw new Error("Invalid CanActivateChild guard");
                  o = Gf(a(r, e))
                }
                return o.pipe(Qh())
              }))).pipe(rp())
            }))
          }));
        return Ic(i).pipe(rp())
      }
      var up = function e() {
          _classCallCheck(this, e)
        },
        lp = function () {
          function e(t, n, r, i, o, a) {
            _classCallCheck(this, e), this.rootComponentType = t, this.config = n, this.urlTree = r, this.url = i, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = a
          }
          return _createClass(e, [{
            key: "recognize",
            value: function () {
              try {
                var e = fp(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                  t = this.processSegmentGroup(this.config, e, "primary"),
                  n = new Cd([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
                  r = new vd(n, t),
                  i = new bd(this.url, r);
                return this.inheritParamsAndData(i._root), Ic(i)
              } catch (o) {
                return new b((function (e) {
                  return e.error(o)
                }))
              }
            }
          }, {
            key: "inheritParamsAndData",
            value: function (e) {
              var t = this,
                n = e.value,
                r = kd(n, this.paramsInheritanceStrategy);
              n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), e.children.forEach((function (e) {
                return t.inheritParamsAndData(e)
              }))
            }
          }, {
            key: "processSegmentGroup",
            value: function (e, t, n) {
              return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n)
            }
          }, {
            key: "processChildren",
            value: function (e, t) {
              var n, r = this,
                i = Jf(t, (function (t, n) {
                  return r.processSegmentGroup(e, t, n)
                }));
              return n = {}, i.forEach((function (e) {
                var t = n[e.value.outlet];
                if (t) {
                  var r = t.url.map((function (e) {
                      return e.toString()
                    })).join("/"),
                    i = e.value.url.map((function (e) {
                      return e.toString()
                    })).join("/");
                  throw new Error("Two segments cannot have the same outlet name: '".concat(r, "' and '").concat(i, "'."))
                }
                n[e.value.outlet] = e.value
              })), i.sort((function (e, t) {
                return "primary" === e.value.outlet ? -1 : "primary" === t.value.outlet ? 1 : e.value.outlet.localeCompare(t.value.outlet)
              })), i
            }
          }, {
            key: "processSegment",
            value: function (e, t, n, r) {
              var i, o = _createForOfIteratorHelper(e);
              try {
                for (o.s(); !(i = o.n()).done;) {
                  var a = i.value;
                  try {
                    return this.processSegmentAgainstRoute(a, t, n, r)
                  } catch (s) {
                    if (!(s instanceof up)) throw s
                  }
                }
              } catch (u) {
                o.e(u)
              } finally {
                o.f()
              }
              if (this.noLeftoversInUrl(t, n, r)) return [];
              throw new up
            }
          }, {
            key: "noLeftoversInUrl",
            value: function (e, t, n) {
              return 0 === t.length && !e.children[n]
            }
          }, {
            key: "processSegmentAgainstRoute",
            value: function (e, t, n, r) {
              if (e.redirectTo) throw new up;
              if ((e.outlet || "primary") !== r) throw new up;
              var i, o = [],
                a = [];
              if ("**" === e.path) {
                var s = n.length > 0 ? qf(n).parameters : {};
                i = new Cd(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, vp(e), r, e.component, e, cp(t), hp(t) + n.length, mp(e))
              } else {
                var u = function (e, t, n) {
                  if ("" === t.path) {
                    if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new up;
                    return {
                      consumedSegments: [],
                      lastChild: 0,
                      parameters: {}
                    }
                  }
                  var r = (t.matcher || Rf)(n, e, t);
                  if (!r) throw new up;
                  var i = {};
                  zf(r.posParams, (function (e, t) {
                    i[t] = e.path
                  }));
                  var o = r.consumed.length > 0 ? Object.assign(Object.assign({}, i), r.consumed[r.consumed.length - 1].parameters) : i;
                  return {
                    consumedSegments: r.consumed,
                    lastChild: r.consumed.length,
                    parameters: o
                  }
                }(t, e, n);
                o = u.consumedSegments, a = n.slice(u.lastChild), i = new Cd(o, u.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, vp(e), r, e.component, e, cp(t), hp(t) + o.length, mp(e))
              }
              var l = function (e) {
                  return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : []
                }(e),
                c = fp(t, o, a, l, this.relativeLinkResolution),
                h = c.segmentGroup,
                f = c.slicedSegments;
              if (0 === f.length && h.hasChildren()) {
                var d = this.processChildren(l, h);
                return [new vd(i, d)]
              }
              if (0 === l.length && 0 === f.length) return [new vd(i, [])];
              var p = this.processSegment(l, h, f, "primary");
              return [new vd(i, p)]
            }
          }]), e
        }();

      function cp(e) {
        for (var t = e; t._sourceSegment;) t = t._sourceSegment;
        return t
      }

      function hp(e) {
        for (var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0; t._sourceSegment;) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0;
        return n - 1
      }

      function fp(e, t, n, r, i) {
        if (n.length > 0 && function (e, t, n) {
            return n.some((function (n) {
              return dp(e, t, n) && "primary" !== pp(n)
            }))
          }(e, n, r)) {
          var o = new $f(t, function (e, t, n, r) {
            var i = {};
            i.primary = r, r._sourceSegment = e, r._segmentIndexShift = t.length;
            var o, a = _createForOfIteratorHelper(n);
            try {
              for (a.s(); !(o = a.n()).done;) {
                var s = o.value;
                if ("" === s.path && "primary" !== pp(s)) {
                  var u = new $f([], {});
                  u._sourceSegment = e, u._segmentIndexShift = t.length, i[pp(s)] = u
                }
              }
            } catch (l) {
              a.e(l)
            } finally {
              a.f()
            }
            return i
          }(e, t, r, new $f(n, e.children)));
          return o._sourceSegment = e, o._segmentIndexShift = t.length, {
            segmentGroup: o,
            slicedSegments: []
          }
        }
        if (0 === n.length && function (e, t, n) {
            return n.some((function (n) {
              return dp(e, t, n)
            }))
          }(e, n, r)) {
          var a = new $f(e.segments, function (e, t, n, r, i, o) {
            var a, s = {},
              u = _createForOfIteratorHelper(r);
            try {
              for (u.s(); !(a = u.n()).done;) {
                var l = a.value;
                if (dp(e, n, l) && !i[pp(l)]) {
                  var c = new $f([], {});
                  c._sourceSegment = e, c._segmentIndexShift = "legacy" === o ? e.segments.length : t.length, s[pp(l)] = c
                }
              }
            } catch (h) {
              u.e(h)
            } finally {
              u.f()
            }
            return Object.assign(Object.assign({}, i), s)
          }(e, t, n, r, e.children, i));
          return a._sourceSegment = e, a._segmentIndexShift = t.length, {
            segmentGroup: a,
            slicedSegments: n
          }
        }
        var s = new $f(e.segments, e.children);
        return s._sourceSegment = e, s._segmentIndexShift = t.length, {
          segmentGroup: s,
          slicedSegments: n
        }
      }

      function dp(e, t, n) {
        return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
      }

      function pp(e) {
        return e.outlet || "primary"
      }

      function vp(e) {
        return e.data || {}
      }

      function mp(e) {
        return e.resolve || {}
      }

      function gp(e, t, n, r) {
        var i = ep(e, t, r);
        return Gf(i.resolve ? i.resolve(t, n) : i(t, n))
      }

      function yp(e) {
        return function (t) {
          return t.pipe(Kh((function (t) {
            var n = e(t);
            return n ? z(n).pipe(j((function () {
              return t
            }))) : z([t])
          })))
        }
      }
      var _p = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "shouldDetach",
            value: function (e) {
              return !1
            }
          }, {
            key: "store",
            value: function (e, t) {}
          }, {
            key: "shouldAttach",
            value: function (e) {
              return !1
            }
          }, {
            key: "retrieve",
            value: function (e) {
              return null
            }
          }, {
            key: "shouldReuseRoute",
            value: function (e, t) {
              return e.routeConfig === t.routeConfig
            }
          }]), e
        }(),
        kp = new He("ROUTES"),
        Cp = function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e), this.loader = t, this.compiler = n, this.onLoadStartListener = r, this.onLoadEndListener = i
          }
          return _createClass(e, [{
            key: "load",
            value: function (e, t) {
              var n = this;
              return this.onLoadStartListener && this.onLoadStartListener(t), this.loadModuleFactory(t.loadChildren).pipe(j((function (r) {
                n.onLoadEndListener && n.onLoadEndListener(t);
                var i = r.create(e);
                return new Nf(Hf(i.injector.get(kp)).map(Lf), i)
              })))
            }
          }, {
            key: "loadModuleFactory",
            value: function (e) {
              var t = this;
              return "string" == typeof e ? z(this.loader.load(e)) : Gf(e()).pipe(G((function (e) {
                return e instanceof tt ? Ic(e) : z(t.compiler.compileModuleAsync(e))
              })))
            }
          }]), e
        }(),
        bp = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "shouldProcessUrl",
            value: function (e) {
              return !0
            }
          }, {
            key: "extract",
            value: function (e) {
              return e
            }
          }, {
            key: "merge",
            value: function (e, t) {
              return e
            }
          }]), e
        }();

      function wp(e) {
        throw e
      }

      function Sp(e, t, n) {
        return t.parse("/")
      }

      function Ep(e, t) {
        return Ic(null)
      }
      var xp, Ap, Op, Tp = ((Op = function () {
          function e(t, n, r, i, o, a, s, u) {
            var l = this;
            _classCallCheck(this, e), this.rootComponentType = t, this.urlSerializer = n, this.rootContexts = r, this.location = i, this.config = u, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new O, this.errorHandler = wp, this.malformedUriErrorHandler = Sp, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
              beforePreactivation: Ep,
              afterPreactivation: Ep
            }, this.urlHandlingStrategy = new bp, this.routeReuseStrategy = new _p, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(et), this.console = o.get(Vs);
            var c = o.get(Ys);
            this.isNgZoneEnabled = c instanceof Ys, this.resetConfig(u), this.currentUrlTree = new Wf(new $f([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Cp(a, s, (function (e) {
              return l.triggerEvent(new bf(e))
            }), (function (e) {
              return l.triggerEvent(new wf(e))
            })), this.routerState = yd(this.currentUrlTree, this.rootComponentType), this.transitions = new bh({
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
          return _createClass(e, [{
            key: "setupNavigations",
            value: function (e) {
              var t = this,
                n = this.events;
              return e.pipe(Fc((function (e) {
                return 0 !== e.id
              })), j((function (e) {
                return Object.assign(Object.assign({}, e), {
                  extractedUrl: t.urlHandlingStrategy.extract(e.rawUrl)
                })
              })), Kh((function (e) {
                var r, i, o, a, s = !1,
                  u = !1;
                return Ic(e).pipe(af((function (e) {
                  t.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: t.lastSuccessfulNavigation ? Object.assign(Object.assign({}, t.lastSuccessfulNavigation), {
                      previousNavigation: null
                    }) : null
                  }
                })), Kh((function (e) {
                  var r, i, o, a, s = !t.navigated || e.extractedUrl.toString() !== t.browserUrlTree.toString();
                  if (("reload" === t.onSameUrlNavigation || s) && t.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)) return Ic(e).pipe(Kh((function (e) {
                    var r = t.transitions.getValue();
                    return n.next(new df(e.id, t.serializeUrl(e.extractedUrl), e.source, e.restoredState)), r !== t.transitions.getValue() ? Ah : [e]
                  })), Kh((function (e) {
                    return Promise.resolve(e)
                  })), (r = t.ngModule.injector, i = t.configLoader, o = t.urlSerializer, a = t.config, function (e) {
                    return e.pipe(Kh((function (e) {
                      return function (e, t, n, r, i) {
                        return new $d(e, t, n, r, i).apply()
                      }(r, i, o, e.extractedUrl, a).pipe(j((function (t) {
                        return Object.assign(Object.assign({}, e), {
                          urlAfterRedirects: t
                        })
                      })))
                    })))
                  }), af((function (e) {
                    t.currentNavigation = Object.assign(Object.assign({}, t.currentNavigation), {
                      finalUrl: e.urlAfterRedirects
                    })
                  })), function (e, n, r, i, o) {
                    return function (r) {
                      return r.pipe(G((function (r) {
                        return function (e, t, n, r) {
                          var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "emptyOnly",
                            o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "legacy";
                          return new lp(e, t, n, r, i, o).recognize()
                        }(e, n, r.urlAfterRedirects, (a = r.urlAfterRedirects, t.serializeUrl(a)), i, o).pipe(j((function (e) {
                          return Object.assign(Object.assign({}, r), {
                            targetSnapshot: e
                          })
                        })));
                        var a
                      })))
                    }
                  }(t.rootComponentType, t.config, 0, t.paramsInheritanceStrategy, t.relativeLinkResolution), af((function (e) {
                    "eager" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects)
                  })), af((function (e) {
                    var r = new gf(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                    n.next(r)
                  })));
                  if (s && t.rawUrlTree && t.urlHandlingStrategy.shouldProcessUrl(t.rawUrlTree)) {
                    var u = e.id,
                      l = e.extractedUrl,
                      c = e.source,
                      h = e.restoredState,
                      f = e.extras,
                      d = new df(u, t.serializeUrl(l), c, h);
                    n.next(d);
                    var p = yd(l, t.rootComponentType).snapshot;
                    return Ic(Object.assign(Object.assign({}, e), {
                      targetSnapshot: p,
                      urlAfterRedirects: l,
                      extras: Object.assign(Object.assign({}, f), {
                        skipLocationChange: !1,
                        replaceUrl: !1
                      })
                    }))
                  }
                  return t.rawUrlTree = e.rawUrl, t.browserUrlTree = e.urlAfterRedirects, e.resolve(null), Ah
                })), yp((function (e) {
                  var n = e.targetSnapshot,
                    r = e.id,
                    i = e.extractedUrl,
                    o = e.rawUrl,
                    a = e.extras,
                    s = a.skipLocationChange,
                    u = a.replaceUrl;
                  return t.hooks.beforePreactivation(n, {
                    navigationId: r,
                    appliedUrlTree: i,
                    rawUrlTree: o,
                    skipLocationChange: !!s,
                    replaceUrl: !!u
                  })
                })), af((function (e) {
                  var n = new yf(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                  t.triggerEvent(n)
                })), j((function (e) {
                  return Object.assign(Object.assign({}, e), {
                    guards: (n = e.targetSnapshot, r = e.currentSnapshot, i = t.rootContexts, o = n._root, function e(t, n, r, i) {
                      var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                          canDeactivateChecks: [],
                          canActivateChecks: []
                        },
                        a = md(n);
                      return t.children.forEach((function (t) {
                        ! function (t, n, r, i) {
                          var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                              canDeactivateChecks: [],
                              canActivateChecks: []
                            },
                            a = t.value,
                            s = n ? n.value : null,
                            u = r ? r.getContext(t.value.outlet) : null;
                          if (s && a.routeConfig === s.routeConfig) {
                            var l = function (e, t, n) {
                              if ("function" == typeof n) return n(e, t);
                              switch (n) {
                                case "pathParamsChange":
                                  return !Qf(e.url, t.url);
                                case "pathParamsOrQueryParamsChange":
                                  return !Qf(e.url, t.url) || !jf(e.queryParams, t.queryParams);
                                case "always":
                                  return !0;
                                case "paramsOrQueryParamsChange":
                                  return !xd(e, t) || !jf(e.queryParams, t.queryParams);
                                case "paramsChange":
                                default:
                                  return !xd(e, t)
                              }
                            }(s, a, a.routeConfig.runGuardsAndResolvers);
                            l ? o.canActivateChecks.push(new Kd(i)) : (a.data = s.data, a._resolvedData = s._resolvedData), e(t, n, a.component ? u ? u.children : null : r, i, o), l && o.canDeactivateChecks.push(new Xd(u && u.outlet && u.outlet.component || null, s))
                          } else s && tp(n, u, o), o.canActivateChecks.push(new Kd(i)), e(t, null, a.component ? u ? u.children : null : r, i, o)
                        }(t, a[t.value.outlet], r, i.concat([t.value]), o), delete a[t.value.outlet]
                      })), zf(a, (function (e, t) {
                        return tp(e, r.getContext(t), o)
                      })), o
                    }(o, r ? r._root : null, i, [o.value]))
                  });
                  var n, r, i, o
                })), function (e, t) {
                  return function (n) {
                    return n.pipe(G((function (n) {
                      var r = n.targetSnapshot,
                        i = n.currentSnapshot,
                        o = n.guards,
                        a = o.canActivateChecks,
                        s = o.canDeactivateChecks;
                      return 0 === s.length && 0 === a.length ? Ic(Object.assign(Object.assign({}, n), {
                        guardsResult: !0
                      })) : function (e, t, n, r) {
                        return z(e).pipe(G((function (e) {
                          return function (e, t, n, r, i) {
                            var o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                            return o && 0 !== o.length ? Ic(o.map((function (o) {
                              var a, s = ep(o, t, i);
                              if (function (e) {
                                  return e && Ud(e.canDeactivate)
                                }(s)) a = Gf(s.canDeactivate(e, t, n, r));
                              else {
                                if (!Ud(s)) throw new Error("Invalid CanDeactivate guard");
                                a = Gf(s(e, t, n, r))
                              }
                              return a.pipe(Qh())
                            }))).pipe(rp()) : Ic(!0)
                          }(e.component, e.route, n, t, r)
                        })), Qh((function (e) {
                          return !0 !== e
                        }), !0))
                      }(s, r, i, e).pipe(G((function (n) {
                        return n && "boolean" == typeof n ? function (e, t, n, r) {
                          return z(t).pipe(Pc((function (t) {
                            return z([op(t.route.parent, r), ip(t.route, r), sp(e, t.path, n), ap(e, t.route, n)]).pipe(Ih(), Qh((function (e) {
                              return !0 !== e
                            }), !0))
                          })), Qh((function (e) {
                            return !0 !== e
                          }), !0))
                        }(r, a, e, t) : Ic(n)
                      })), j((function (e) {
                        return Object.assign(Object.assign({}, n), {
                          guardsResult: e
                        })
                      })))
                    })))
                  }
                }(t.ngModule.injector, (function (e) {
                  return t.triggerEvent(e)
                })), af((function (e) {
                  if (Hd(e.guardsResult)) {
                    var n = Ff('Redirecting to "'.concat(t.serializeUrl(e.guardsResult), '"'));
                    throw n.url = e.guardsResult, n
                  }
                })), af((function (e) {
                  var n = new _f(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot, !!e.guardsResult);
                  t.triggerEvent(n)
                })), Fc((function (e) {
                  if (!e.guardsResult) {
                    t.resetUrlToCurrentUrlTree();
                    var r = new vf(e.id, t.serializeUrl(e.extractedUrl), "");
                    return n.next(r), e.resolve(!1), !1
                  }
                  return !0
                })), yp((function (e) {
                  if (e.guards.canActivateChecks.length) return Ic(e).pipe(af((function (e) {
                    var n = new kf(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                    t.triggerEvent(n)
                  })), (n = t.paramsInheritanceStrategy, r = t.ngModule.injector, function (e) {
                    return e.pipe(G((function (e) {
                      var t = e.targetSnapshot,
                        i = e.guards.canActivateChecks;
                      return i.length ? z(i).pipe(Pc((function (e) {
                        return function (e, t, n, r) {
                          return function (e, t, n, r) {
                            var i = Object.keys(e);
                            if (0 === i.length) return Ic({});
                            if (1 === i.length) {
                              var o = i[0];
                              return gp(e[o], t, n, r).pipe(j((function (e) {
                                return _defineProperty({}, o, e)
                              })))
                            }
                            var a = {};
                            return z(i).pipe(G((function (i) {
                              return gp(e[i], t, n, r).pipe(j((function (e) {
                                return a[i] = e, e
                              })))
                            }))).pipe(qh(), j((function () {
                              return a
                            })))
                          }(e._resolve, e, t, r).pipe(j((function (t) {
                            return e._resolvedData = t, e.data = Object.assign(Object.assign({}, e.data), kd(e, n).resolve), null
                          })))
                        }(e.route, t, n, r)
                      })), function (e, t) {
                        return arguments.length >= 2 ? function (n) {
                          return _(nf(e, t), Fh(1), jh(t))(n)
                        } : function (t) {
                          return _(nf((function (t, n, r) {
                            return e(t, n, r + 1)
                          })), Fh(1))(t)
                        }
                      }((function (e, t) {
                        return e
                      })), j((function (t) {
                        return e
                      }))) : Ic(e)
                    })))
                  }), af((function (e) {
                    var n = new Cf(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
                    t.triggerEvent(n)
                  })));
                  var n, r
                })), yp((function (e) {
                  var n = e.targetSnapshot,
                    r = e.id,
                    i = e.extractedUrl,
                    o = e.rawUrl,
                    a = e.extras,
                    s = a.skipLocationChange,
                    u = a.replaceUrl;
                  return t.hooks.afterPreactivation(n, {
                    navigationId: r,
                    appliedUrlTree: i,
                    rawUrlTree: o,
                    skipLocationChange: !!s,
                    replaceUrl: !!u
                  })
                })), j((function (e) {
                  var n = function (e, t, n) {
                    var r = function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        var i = r.value;
                        i._futureSnapshot = n.value;
                        var o = function (t, n, r) {
                          return n.children.map((function (n) {
                            var i, o = _createForOfIteratorHelper(r.children);
                            try {
                              for (o.s(); !(i = o.n()).done;) {
                                var a = i.value;
                                if (t.shouldReuseRoute(a.value.snapshot, n.value)) return e(t, n, a)
                              }
                            } catch (s) {
                              o.e(s)
                            } finally {
                              o.f()
                            }
                            return e(t, n)
                          }))
                        }(t, n, r);
                        return new vd(i, o)
                      }
                      var a = t.retrieve(n.value);
                      if (a) {
                        var s = a.route;
                        return function e(t, n) {
                          if (t.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                          if (t.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                          n.value._futureSnapshot = t.value;
                          for (var r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r])
                        }(n, s), s
                      }
                      var u, l = new _d(new bh((u = n.value).url), new bh(u.params), new bh(u.queryParams), new bh(u.fragment), new bh(u.data), u.outlet, u.component, u),
                        c = n.children.map((function (n) {
                          return e(t, n)
                        }));
                      return new vd(l, c)
                    }(e, t._root, n ? n._root : void 0);
                    return new gd(r, t)
                  }(t.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
                  return Object.assign(Object.assign({}, e), {
                    targetRouterState: n
                  })
                })), af((function (e) {
                  t.currentUrlTree = e.urlAfterRedirects, t.rawUrlTree = t.urlHandlingStrategy.merge(t.currentUrlTree, e.rawUrl), t.routerState = e.targetRouterState, "deferred" === t.urlUpdateStrategy && (e.extras.skipLocationChange || t.setBrowserUrl(t.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state), t.browserUrlTree = e.urlAfterRedirects)
                })), (i = t.rootContexts, o = t.routeReuseStrategy, a = function (e) {
                  return t.triggerEvent(e)
                }, j((function (e) {
                  return new Ld(o, e.targetRouterState, e.currentRouterState, a).activate(i), e
                }))), af({
                  next: function () {
                    s = !0
                  },
                  complete: function () {
                    s = !0
                  }
                }), (r = function () {
                  if (!s && !u) {
                    t.resetUrlToCurrentUrlTree();
                    var r = new vf(e.id, t.serializeUrl(e.extractedUrl), "Navigation ID ".concat(e.id, " is not equal to the current navigation id ").concat(t.navigationId));
                    n.next(r), e.resolve(!1)
                  }
                  t.currentNavigation = null
                }, function (e) {
                  return e.lift(new cf(r))
                }), zh((function (r) {
                  if (u = !0, (s = r) && s.ngNavigationCancelingError) {
                    var i = Hd(r.url);
                    i || (t.navigated = !0, t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
                    var o = new vf(e.id, t.serializeUrl(e.extractedUrl), r.message);
                    n.next(o), i ? setTimeout((function () {
                      var n = t.urlHandlingStrategy.merge(r.url, t.rawUrlTree);
                      return t.scheduleNavigation(n, "imperative", null, {
                        skipLocationChange: e.extras.skipLocationChange,
                        replaceUrl: "eager" === t.urlUpdateStrategy
                      }, {
                        resolve: e.resolve,
                        reject: e.reject,
                        promise: e.promise
                      })
                    }), 0) : e.resolve(!1)
                  } else {
                    t.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
                    var a = new mf(e.id, t.serializeUrl(e.extractedUrl), r);
                    n.next(a);
                    try {
                      e.resolve(t.errorHandler(r))
                    } catch (l) {
                      e.reject(l)
                    }
                  }
                  var s;
                  return Ah
                })))
              })))
            }
          }, {
            key: "resetRootComponentType",
            value: function (e) {
              this.rootComponentType = e, this.routerState.root.component = this.rootComponentType
            }
          }, {
            key: "getTransition",
            value: function () {
              var e = this.transitions.value;
              return e.urlAfterRedirects = this.browserUrlTree, e
            }
          }, {
            key: "setTransition",
            value: function (e) {
              this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), e))
            }
          }, {
            key: "initialNavigation",
            value: function () {
              this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                replaceUrl: !0
              })
            }
          }, {
            key: "setUpLocationChangeListener",
            value: function () {
              var e = this;
              this.locationSubscription || (this.locationSubscription = this.location.subscribe((function (t) {
                var n = e.parseUrl(t.url),
                  r = "popstate" === t.type ? "popstate" : "hashchange",
                  i = t.state && t.state.navigationId ? t.state : null;
                setTimeout((function () {
                  e.scheduleNavigation(n, r, i, {
                    replaceUrl: !0
                  })
                }), 0)
              })))
            }
          }, {
            key: "getCurrentNavigation",
            value: function () {
              return this.currentNavigation
            }
          }, {
            key: "triggerEvent",
            value: function (e) {
              this.events.next(e)
            }
          }, {
            key: "resetConfig",
            value: function (e) {
              Mf(e), this.config = e.map(Lf), this.navigated = !1, this.lastSuccessfulId = -1
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.dispose()
            }
          }, {
            key: "dispose",
            value: function () {
              this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
            }
          }, {
            key: "createUrlTree",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.relativeTo,
                r = t.queryParams,
                i = t.fragment,
                o = t.preserveQueryParams,
                a = t.queryParamsHandling,
                s = t.preserveFragment;
              ar() && o && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
              var u = n || this.routerState.root,
                l = s ? this.currentUrlTree.fragment : i,
                c = null;
              if (a) switch (a) {
                case "merge":
                  c = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
                  break;
                case "preserve":
                  c = this.currentUrlTree.queryParams;
                  break;
                default:
                  c = r || null
              } else c = o ? this.currentUrlTree.queryParams : r || null;
              return null !== c && (c = this.removeEmptyProps(c)),
                function (e, t, n, r, i) {
                  if (0 === n.length) return Od(t.root, t.root, t, r, i);
                  var o = function (e) {
                    if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new Td(!0, 0, e);
                    var t = 0,
                      n = !1,
                      r = e.reduce((function (e, r, i) {
                        if ("object" == typeof r && null != r) {
                          if (r.outlets) {
                            var o = {};
                            return zf(r.outlets, (function (e, t) {
                              o[t] = "string" == typeof e ? e.split("/") : e
                            })), [].concat(_toConsumableArray(e), [{
                              outlets: o
                            }])
                          }
                          if (r.segmentPath) return [].concat(_toConsumableArray(e), [r.segmentPath])
                        }
                        return "string" != typeof r ? [].concat(_toConsumableArray(e), [r]) : 0 === i ? (r.split("/").forEach((function (r, i) {
                          0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? t++ : "" != r && e.push(r))
                        })), e) : [].concat(_toConsumableArray(e), [r])
                      }), []);
                    return new Td(n, t, r)
                  }(n);
                  if (o.toRoot()) return Od(t.root, new $f([], {}), t, r, i);
                  var a = function (e, t, n) {
                      if (e.isAbsolute) return new Id(t.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) return new Id(n.snapshot._urlSegment, !0, 0);
                      var r = Ad(e.commands[0]) ? 0 : 1;
                      return function (e, t, n) {
                        for (var r = e, i = t, o = n; o > i;) {
                          if (o -= i, !(r = r.parent)) throw new Error("Invalid number of '../'");
                          i = r.segments.length
                        }
                        return new Id(r, !1, i - o)
                      }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, e.numberOfDoubleDots)
                    }(o, t, e),
                    s = a.processChildren ? Rd(a.segmentGroup, a.index, o.commands) : Fd(a.segmentGroup, a.index, o.commands);
                  return Od(a.segmentGroup, s, t, r, i)
                }(u, this.currentUrlTree, e, c, l)
            }
          }, {
            key: "navigateByUrl",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                skipLocationChange: !1
              };
              ar() && this.isNgZoneEnabled && !Ys.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
              var n = Hd(e) ? e : this.parseUrl(e),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, t)
            }
          }, {
            key: "navigate",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                skipLocationChange: !1
              };
              return function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  if (null == n) throw new Error("The requested path contains ".concat(n, " segment at index ").concat(t))
                }
              }(e), this.navigateByUrl(this.createUrlTree(e, t), t)
            }
          }, {
            key: "serializeUrl",
            value: function (e) {
              return this.urlSerializer.serialize(e)
            }
          }, {
            key: "parseUrl",
            value: function (e) {
              var t;
              try {
                t = this.urlSerializer.parse(e)
              } catch (n) {
                t = this.malformedUriErrorHandler(n, this.urlSerializer, e)
              }
              return t
            }
          }, {
            key: "isActive",
            value: function (e, t) {
              if (Hd(e)) return Bf(this.currentUrlTree, e, t);
              var n = this.parseUrl(e);
              return Bf(this.currentUrlTree, n, t)
            }
          }, {
            key: "removeEmptyProps",
            value: function (e) {
              return Object.keys(e).reduce((function (t, n) {
                var r = e[n];
                return null != r && (t[n] = r), t
              }), {})
            }
          }, {
            key: "processNavigations",
            value: function () {
              var e = this;
              this.navigations.subscribe((function (t) {
                e.navigated = !0, e.lastSuccessfulId = t.id, e.events.next(new pf(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(e.currentUrlTree))), e.lastSuccessfulNavigation = e.currentNavigation, e.currentNavigation = null, t.resolve(!0)
              }), (function (t) {
                e.console.warn("Unhandled Navigation Error: ")
              }))
            }
          }, {
            key: "scheduleNavigation",
            value: function (e, t, n, r, i) {
              var o, a, s, u = this.getTransition();
              if (u && "imperative" !== t && "imperative" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
              if (u && "hashchange" == t && "popstate" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
              if (u && "popstate" == t && "hashchange" === u.source && u.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
              i ? (o = i.resolve, a = i.reject, s = i.promise) : s = new Promise((function (e, t) {
                o = e, a = t
              }));
              var l = ++this.navigationId;
              return this.setTransition({
                id: l,
                source: t,
                restoredState: n,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: e,
                extras: r,
                resolve: o,
                reject: a,
                promise: s,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
              }), s.catch((function (e) {
                return Promise.reject(e)
              }))
            }
          }, {
            key: "setBrowserUrl",
            value: function (e, t, n, r) {
              var i = this.urlSerializer.serialize(e);
              r = r || {}, this.location.isCurrentPathEqualTo(i) || t ? this.location.replaceState(i, "", Object.assign(Object.assign({}, r), {
                navigationId: n
              })) : this.location.go(i, "", Object.assign(Object.assign({}, r), {
                navigationId: n
              }))
            }
          }, {
            key: "resetStateAndUrl",
            value: function (e, t, n) {
              this.routerState = e, this.currentUrlTree = t, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
            }
          }, {
            key: "resetUrlToCurrentUrlTree",
            value: function () {
              this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
                navigationId: this.lastSuccessfulId
              })
            }
          }, {
            key: "url",
            get: function () {
              return this.serializeUrl(this.currentUrlTree)
            }
          }]), e
        }()).\u0275fac = function (e) {
          Io()
        }, Op.\u0275dir = yt({
          type: Op
        }), Op),
        Ip = ((Ap = function () {
          function e(t, n, r, i, o) {
            _classCallCheck(this, e), this.router = t, this.route = n, this.commands = [], null == r && i.setAttribute(o.nativeElement, "tabindex", "0")
          }
          return _createClass(e, [{
            key: "onClick",
            value: function () {
              var e = {
                skipLocationChange: Fp(this.skipLocationChange),
                replaceUrl: Fp(this.replaceUrl)
              };
              return this.router.navigateByUrl(this.urlTree, e), !0
            }
          }, {
            key: "routerLink",
            set: function (e) {
              this.commands = null != e ? Array.isArray(e) ? e : [e] : []
            }
          }, {
            key: "preserveQueryParams",
            set: function (e) {
              ar() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = e
            }
          }, {
            key: "urlTree",
            get: function () {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Fp(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Fp(this.preserveFragment)
              })
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Ap)(Oo(Tp), Oo(_d), To("tabindex"), Oo(Aa), Oo(wa))
        }, Ap.\u0275dir = yt({
          type: Ap,
          selectors: [
            ["", "routerLink", "", 5, "a", 5, "area"]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("click", (function () {
              return t.onClick()
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
        }), Ap),
        Pp = ((xp = function () {
          function e(t, n, r) {
            var i = this;
            _classCallCheck(this, e), this.router = t, this.route = n, this.locationStrategy = r, this.commands = [], this.subscription = t.events.subscribe((function (e) {
              e instanceof pf && i.updateTargetUrlAndHref()
            }))
          }
          return _createClass(e, [{
            key: "ngOnChanges",
            value: function (e) {
              this.updateTargetUrlAndHref()
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.subscription.unsubscribe()
            }
          }, {
            key: "onClick",
            value: function (e, t, n, r) {
              if (0 !== e || t || n || r) return !0;
              if ("string" == typeof this.target && "_self" != this.target) return !0;
              var i = {
                skipLocationChange: Fp(this.skipLocationChange),
                replaceUrl: Fp(this.replaceUrl),
                state: this.state
              };
              return this.router.navigateByUrl(this.urlTree, i), !1
            }
          }, {
            key: "updateTargetUrlAndHref",
            value: function () {
              this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
            }
          }, {
            key: "routerLink",
            set: function (e) {
              this.commands = null != e ? Array.isArray(e) ? e : [e] : []
            }
          }, {
            key: "preserveQueryParams",
            set: function (e) {
              ar() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = e
            }
          }, {
            key: "urlTree",
            get: function () {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Fp(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Fp(this.preserveFragment)
              })
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || xp)(Oo(Tp), Oo(_d), Oo(qu))
        }, xp.\u0275dir = yt({
          type: xp,
          selectors: [
            ["a", "routerLink", ""],
            ["area", "routerLink", ""]
          ],
          hostVars: 2,
          hostBindings: function (e, t) {
            1 & e && jo("click", (function (e) {
              return t.onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey)
            })), 2 & e && (ta("href", t.href, cr), Eo("target", t.target))
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
          features: [la]
        }), xp);

      function Fp(e) {
        return "" === e || !!e
      }
      var Rp, Np, Mp, Dp, Vp = ((Rp = function () {
          function e(t, n, r, i, o) {
            var a = this;
            _classCallCheck(this, e), this.router = t, this.element = n, this.renderer = r, this.link = i, this.linkWithHref = o, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
              exact: !1
            }, this.subscription = t.events.subscribe((function (e) {
              e instanceof pf && a.update()
            }))
          }
          return _createClass(e, [{
            key: "ngAfterContentInit",
            value: function () {
              var e = this;
              this.links.changes.subscribe((function (t) {
                return e.update()
              })), this.linksWithHrefs.changes.subscribe((function (t) {
                return e.update()
              })), this.update()
            }
          }, {
            key: "ngOnChanges",
            value: function (e) {
              this.update()
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.subscription.unsubscribe()
            }
          }, {
            key: "update",
            value: function () {
              var e = this;
              this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then((function () {
                var t = e.hasActiveLinks();
                e.isActive !== t && (e.isActive = t, e.classes.forEach((function (n) {
                  t ? e.renderer.addClass(e.element.nativeElement, n) : e.renderer.removeClass(e.element.nativeElement, n)
                })))
              }))
            }
          }, {
            key: "isLinkActive",
            value: function (e) {
              var t = this;
              return function (n) {
                return e.isActive(n.urlTree, t.routerLinkActiveOptions.exact)
              }
            }
          }, {
            key: "hasActiveLinks",
            value: function () {
              var e = this.isLinkActive(this.router);
              return this.link && e(this.link) || this.linkWithHref && e(this.linkWithHref) || this.links.some(e) || this.linksWithHrefs.some(e)
            }
          }, {
            key: "routerLinkActive",
            set: function (e) {
              var t = Array.isArray(e) ? e : e.split(" ");
              this.classes = t.filter((function (e) {
                return !!e
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Rp)(Oo(Tp), Oo(wa), Oo(Aa), Oo(Ip, 8), Oo(Pp, 8))
        }, Rp.\u0275dir = yt({
          type: Rp,
          selectors: [
            ["", "routerLinkActive", ""]
          ],
          contentQueries: function (e, t, n) {
            var r;
            1 & e && (xs(n, Ip, !0), xs(n, Pp, !0)), 2 & e && (Es(r = As()) && (t.links = r), Es(r = As()) && (t.linksWithHrefs = r))
          },
          inputs: {
            routerLinkActiveOptions: "routerLinkActiveOptions",
            routerLinkActive: "routerLinkActive"
          },
          exportAs: ["routerLinkActive"],
          features: [la]
        }), Rp),
        Lp = function e() {
          _classCallCheck(this, e), this.outlet = null, this.route = null, this.resolver = null, this.children = new jp, this.attachRef = null
        },
        jp = function () {
          function e() {
            _classCallCheck(this, e), this.contexts = new Map
          }
          return _createClass(e, [{
            key: "onChildOutletCreated",
            value: function (e, t) {
              var n = this.getOrCreateContext(e);
              n.outlet = t, this.contexts.set(e, n)
            }
          }, {
            key: "onChildOutletDestroyed",
            value: function (e) {
              var t = this.getContext(e);
              t && (t.outlet = null)
            }
          }, {
            key: "onOutletDeactivated",
            value: function () {
              var e = this.contexts;
              return this.contexts = new Map, e
            }
          }, {
            key: "onOutletReAttached",
            value: function (e) {
              this.contexts = e
            }
          }, {
            key: "getOrCreateContext",
            value: function (e) {
              var t = this.getContext(e);
              return t || (t = new Lp, this.contexts.set(e, t)), t
            }
          }, {
            key: "getContext",
            value: function (e) {
              return this.contexts.get(e) || null
            }
          }]), e
        }(),
        Up = ((Np = function () {
          function e(t, n, r, i, o) {
            _classCallCheck(this, e), this.parentContexts = t, this.location = n, this.resolver = r, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new ps, this.deactivateEvents = new ps, this.name = i || "primary", t.onChildOutletCreated(this.name, this)
          }
          return _createClass(e, [{
            key: "ngOnDestroy",
            value: function () {
              this.parentContexts.onChildOutletDestroyed(this.name)
            }
          }, {
            key: "ngOnInit",
            value: function () {
              if (!this.activated) {
                var e = this.parentContexts.getContext(this.name);
                e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null))
              }
            }
          }, {
            key: "detach",
            value: function () {
              if (!this.activated) throw new Error("Outlet is not activated");
              this.location.detach();
              var e = this.activated;
              return this.activated = null, this._activatedRoute = null, e
            }
          }, {
            key: "attach",
            value: function (e, t) {
              this.activated = e, this._activatedRoute = t, this.location.insert(e.hostView)
            }
          }, {
            key: "deactivate",
            value: function () {
              if (this.activated) {
                var e = this.component;
                this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
              }
            }
          }, {
            key: "activateWith",
            value: function (e, t) {
              if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
              this._activatedRoute = e;
              var n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                i = new Hp(e, r, this.location.injector);
              this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
            }
          }, {
            key: "isActivated",
            get: function () {
              return !!this.activated
            }
          }, {
            key: "component",
            get: function () {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this.activated.instance
            }
          }, {
            key: "activatedRoute",
            get: function () {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this._activatedRoute
            }
          }, {
            key: "activatedRouteData",
            get: function () {
              return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Np)(Oo(jp), Oo(Za), Oo(ba), To("name"), Oo(Zi))
        }, Np.\u0275dir = yt({
          type: Np,
          selectors: [
            ["router-outlet"]
          ],
          outputs: {
            activateEvents: "activate",
            deactivateEvents: "deactivate"
          },
          exportAs: ["outlet"]
        }), Np),
        Hp = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.route = t, this.childContexts = n, this.parent = r
          }
          return _createClass(e, [{
            key: "get",
            value: function (e, t) {
              return e === _d ? this.route : e === jp ? this.childContexts : this.parent.get(e, t)
            }
          }]), e
        }(),
        qp = function e() {
          _classCallCheck(this, e)
        },
        zp = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "preload",
            value: function (e, t) {
              return Ic(null)
            }
          }]), e
        }(),
        Gp = ((Dp = function () {
          function e(t, n, r, i, o) {
            _classCallCheck(this, e), this.router = t, this.injector = i, this.preloadingStrategy = o, this.loader = new Cp(n, r, (function (e) {
              return t.triggerEvent(new bf(e))
            }), (function (e) {
              return t.triggerEvent(new wf(e))
            }))
          }
          return _createClass(e, [{
            key: "setUpPreloading",
            value: function () {
              var e = this;
              this.subscription = this.router.events.pipe(Fc((function (e) {
                return e instanceof pf
              })), Pc((function () {
                return e.preload()
              }))).subscribe((function () {}))
            }
          }, {
            key: "preload",
            value: function () {
              var e = this.injector.get(et);
              return this.processRoutes(e, this.router.config)
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.subscription.unsubscribe()
            }
          }, {
            key: "processRoutes",
            value: function (e, t) {
              var n, r = [],
                i = _createForOfIteratorHelper(t);
              try {
                for (i.s(); !(n = i.n()).done;) {
                  var o = n.value;
                  if (o.loadChildren && !o.canLoad && o._loadedConfig) {
                    var a = o._loadedConfig;
                    r.push(this.processRoutes(a.module, a.routes))
                  } else o.loadChildren && !o.canLoad ? r.push(this.preloadConfig(e, o)) : o.children && r.push(this.processRoutes(e, o.children))
                }
              } catch (s) {
                i.e(s)
              } finally {
                i.f()
              }
              return z(r).pipe(Z(), j((function (e) {})))
            }
          }, {
            key: "preloadConfig",
            value: function (e, t) {
              var n = this;
              return this.preloadingStrategy.preload(t, (function () {
                return n.loader.load(e.injector, t).pipe(G((function (e) {
                  return t._loadedConfig = e, n.processRoutes(e.module, e.routes)
                })))
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Dp)(Je(Tp), Je(_u), Je($s), Je(co), Je(qp))
        }, Dp.\u0275prov = fe({
          token: Dp,
          factory: Dp.\u0275fac
        }), Dp),
        Bp = ((Mp = function () {
          function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            _classCallCheck(this, e), this.router = t, this.viewportScroller = n, this.options = r, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, r.scrollPositionRestoration = r.scrollPositionRestoration || "disabled", r.anchorScrolling = r.anchorScrolling || "disabled"
          }
          return _createClass(e, [{
            key: "init",
            value: function () {
              "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
            }
          }, {
            key: "createScrollEvents",
            value: function () {
              var e = this;
              return this.router.events.subscribe((function (t) {
                t instanceof df ? (e.store[e.lastId] = e.viewportScroller.getScrollPosition(), e.lastSource = t.navigationTrigger, e.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof pf && (e.lastId = t.id, e.scheduleScrollEvent(t, e.router.parseUrl(t.urlAfterRedirects).fragment))
              }))
            }
          }, {
            key: "consumeScrollEvents",
            value: function () {
              var e = this;
              return this.router.events.subscribe((function (t) {
                t instanceof Of && (t.position ? "top" === e.options.scrollPositionRestoration ? e.viewportScroller.scrollToPosition([0, 0]) : "enabled" === e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === e.options.anchorScrolling ? e.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition([0, 0]))
              }))
            }
          }, {
            key: "scheduleScrollEvent",
            value: function (e, t) {
              this.router.triggerEvent(new Of(e, "popstate" === this.lastSource ? this.store[this.restoredId] : null, t))
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
            }
          }]), e
        }()).\u0275fac = function (e) {
          Io()
        }, Mp.\u0275dir = yt({
          type: Mp
        }), Mp),
        Wp = new He("ROUTER_CONFIGURATION"),
        $p = new He("ROUTER_FORROOT_GUARD"),
        Zp = [Ju, {
          provide: Yf,
          useClass: Kf
        }, {
          provide: Tp,
          useFactory: function (e, t, n, r, i, o, a) {
            var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
              u = arguments.length > 8 ? arguments[8] : void 0,
              l = arguments.length > 9 ? arguments[9] : void 0,
              c = new Tp(null, e, t, n, r, i, o, Hf(a));
            if (u && (c.urlHandlingStrategy = u), l && (c.routeReuseStrategy = l), s.errorHandler && (c.errorHandler = s.errorHandler), s.malformedUriErrorHandler && (c.malformedUriErrorHandler = s.malformedUriErrorHandler), s.enableTracing) {
              var h = Ou();
              c.events.subscribe((function (e) {
                h.logGroup("Router Event: ".concat(e.constructor.name)), h.log(e.toString()), h.log(e), h.logGroupEnd()
              }))
            }
            return s.onSameUrlNavigation && (c.onSameUrlNavigation = s.onSameUrlNavigation), s.paramsInheritanceStrategy && (c.paramsInheritanceStrategy = s.paramsInheritanceStrategy), s.urlUpdateStrategy && (c.urlUpdateStrategy = s.urlUpdateStrategy), s.relativeLinkResolution && (c.relativeLinkResolution = s.relativeLinkResolution), c
          },
          deps: [Yf, jp, Ju, co, _u, $s, kp, Wp, [function () {
              return function e() {
                _classCallCheck(this, e)
              }
            }(), new ae],
            [function () {
              return function e() {
                _classCallCheck(this, e)
              }
            }(), new ae]
          ]
        }, jp, {
          provide: _d,
          useFactory: function (e) {
            return e.routerState.root
          },
          deps: [Tp]
        }, {
          provide: _u,
          useClass: bu
        }, Gp, zp, function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "preload",
            value: function (e, t) {
              return t().pipe(zh((function () {
                return Ic(null)
              })))
            }
          }]), e
        }(), {
          provide: Wp,
          useValue: {
            enableTracing: !1
          }
        }];

      function Qp() {
        return new hu("Router", Tp)
      }
      var Jp, Yp = ((Jp = function () {
        function e(t, n) {
          _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
          key: "forRoot",
          value: function (t, n) {
            return {
              ngModule: e,
              providers: [Zp, tv(t), {
                  provide: $p,
                  useFactory: ev,
                  deps: [
                    [Tp, new ae, new ue]
                  ]
                }, {
                  provide: Wp,
                  useValue: n || {}
                }, {
                  provide: qu,
                  useFactory: Xp,
                  deps: [Pu, [new oe($u), new ae], Wp]
                }, {
                  provide: Bp,
                  useFactory: Kp,
                  deps: [Tp, Yl, Wp]
                }, {
                  provide: qp,
                  useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : zp
                }, {
                  provide: hu,
                  multi: !0,
                  useFactory: Qp
                },
                [rv, {
                  provide: Ts,
                  multi: !0,
                  useFactory: iv,
                  deps: [rv]
                }, {
                  provide: cv,
                  useFactory: ov,
                  deps: [rv]
                }, {
                  provide: Ds,
                  multi: !0,
                  useExisting: cv
                }]
              ]
            }
          }
        }, {
          key: "forChild",
          value: function (t) {
            return {
              ngModule: e,
              providers: [tv(t)]
            }
          }
        }]), e
      }()).\u0275mod = mt({
        type: Jp
      }), Jp.\u0275inj = de({
        factory: function (e) {
          return new(e || Jp)(Je($p, 8), Je(Tp, 8))
        }
      }), Jp);

      function Kp(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new Bp(e, t, n)
      }

      function Xp(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.useHash ? new Qu(e, t) : new Zu(e, t)
      }

      function ev(e) {
        if (e) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
        return "guarded"
      }

      function tv(e) {
        return [{
          provide: ho,
          multi: !0,
          useValue: e
        }, {
          provide: kp,
          multi: !0,
          useValue: e
        }]
      }
      var nv, rv = ((nv = function () {
        function e(t) {
          _classCallCheck(this, e), this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new O
        }
        return _createClass(e, [{
          key: "appInitializer",
          value: function () {
            var e = this;
            return this.injector.get(Nu, Promise.resolve(null)).then((function () {
              var t = null,
                n = new Promise((function (e) {
                  return t = e
                })),
                r = e.injector.get(Tp),
                i = e.injector.get(Wp);
              if (e.isLegacyDisabled(i) || e.isLegacyEnabled(i)) t(!0);
              else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), t(!0);
              else {
                if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '".concat(i.initialNavigation, "'"));
                r.hooks.afterPreactivation = function () {
                  return e.initNavigation ? Ic(null) : (e.initNavigation = !0, t(!0), e.resultOfPreactivationDone)
                }, r.initialNavigation()
              }
              return n
            }))
          }
        }, {
          key: "bootstrapListener",
          value: function (e) {
            var t = this.injector.get(Wp),
              n = this.injector.get(Gp),
              r = this.injector.get(Bp),
              i = this.injector.get(Tp),
              o = this.injector.get(gu);
            e === o.components[0] && (this.isLegacyEnabled(t) ? i.initialNavigation() : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
          }
        }, {
          key: "isLegacyEnabled",
          value: function (e) {
            return "legacy_enabled" === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation
          }
        }, {
          key: "isLegacyDisabled",
          value: function (e) {
            return "legacy_disabled" === e.initialNavigation || !1 === e.initialNavigation
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || nv)(Je(co))
      }, nv.\u0275prov = fe({
        token: nv,
        factory: nv.\u0275fac
      }), nv);

      function iv(e) {
        return e.appInitializer.bind(e)
      }

      function ov(e) {
        return e.bootstrapListener.bind(e)
      }
      var av, sv, uv, lv, cv = new He("Router Initializer"),
        hv = ((sv = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.http = t, this.router = n, this.baseUrl = "https://api.csss-ci.com/rest/v1/authentication/"
          }
          return _createClass(e, [{
            key: "login",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "user",
            value: function () {
              return this.http.get(this.baseUrl + "user")
            }
          }, {
            key: "validity",
            value: function () {
              return this.http.get(this.baseUrl + "validity")
            }
          }, {
            key: "loggedIn",
            value: function () {
              return !!localStorage.getItem("token")
            }
          }, {
            key: "getToken",
            value: function () {
              return localStorage.getItem("token")
            }
          }, {
            key: "logoutUser",
            value: function () {
              localStorage.clear(), this.router.navigate(["/login"])
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || sv)(Je(ah), Je(Tp))
        }, sv.\u0275prov = fe({
          token: sv,
          factory: sv.\u0275fac,
          providedIn: "root"
        }), sv),
        fv = ((av = function () {
          function e(t) {
            _classCallCheck(this, e), this.injector = t
          }
          return _createClass(e, [{
            key: "intercept",
            value: function (e, t) {
              var n = this.injector.get(hv),
                r = e.clone({
                  setHeaders: {
                    Authorization: "Bearer ".concat(n.getToken())
                  }
                });
              return t.handle(r)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || av)(Je(co))
        }, av.\u0275prov = fe({
          token: av,
          factory: av.\u0275fac
        }), av),
        dv = [{
          path: "",
          redirectTo: "/login",
          pathMatch: "full"
        }],
        pv = ((lv = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: lv
        }), lv.\u0275inj = de({
          factory: function (e) {
            return new(e || lv)
          },
          imports: [
            [Yp.forRoot(dv)], Yp
          ]
        }), lv),
        vv = ((uv = function e() {
          _classCallCheck(this, e), this.title = "csss"
        }).\u0275fac = function (e) {
          return new(e || uv)
        }, uv.\u0275cmp = ft({
          type: uv,
          selectors: [
            ["app-root"]
          ],
          decls: 1,
          vars: 0,
          template: function (e, t) {
            1 & e && Mo(0, "router-outlet")
          },
          directives: [Up],
          styles: [""]
        }), uv),
        mv = n("Hfs6"),
        gv = n.n(mv);

      function yv(e, t) {
        return new b((function (n) {
          var r = e.length;
          if (0 !== r)
            for (var i = new Array(r), o = 0, a = 0, s = function (s) {
                var u = z(e[s]),
                  l = !1;
                n.add(u.subscribe({
                  next: function (e) {
                    l || (l = !0, a++), i[s] = e
                  },
                  error: function (e) {
                    return n.error(e)
                  },
                  complete: function () {
                    ++o !== r && l || (a === r && n.next(t ? t.reduce((function (e, t, n) {
                      return e[t] = i[n], e
                    }), {}) : i), n.complete())
                  }
                }))
              }, u = 0; u < r; u++) s(u);
          else n.complete()
        }))
      }
      var _v, kv, Cv, bv, wv = new He("NgValueAccessor"),
        Sv = {
          provide: wv,
          useExisting: Ee((function () {
            return Ev
          })),
          multi: !0
        },
        Ev = ((_v = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this.onChange = function (e) {}, this.onTouched = function () {}
          }
          return _createClass(e, [{
            key: "writeValue",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "checked", e)
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              this.onChange = e
            }
          }, {
            key: "registerOnTouched",
            value: function (e) {
              this.onTouched = e
            }
          }, {
            key: "setDisabledState",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || _v)(Oo(Aa), Oo(wa))
        }, _v.\u0275dir = yt({
          type: _v,
          selectors: [
            ["input", "type", "checkbox", "formControlName", ""],
            ["input", "type", "checkbox", "formControl", ""],
            ["input", "type", "checkbox", "ngModel", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("change", (function (e) {
              return t.onChange(e.target.checked)
            }))("blur", (function () {
              return t.onTouched()
            }))
          },
          features: [_a([Sv])]
        }), _v),
        xv = {
          provide: wv,
          useExisting: Ee((function () {
            return Ov
          })),
          multi: !0
        },
        Av = new He("CompositionEventMode"),
        Ov = ((bv = function () {
          function e(t, n, r) {
            var i;
            _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._compositionMode = r, this.onChange = function (e) {}, this.onTouched = function () {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = (i = Ou() ? Ou().getUserAgent() : "", !/android (\d+)/.test(i.toLowerCase())))
          }
          return _createClass(e, [{
            key: "writeValue",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "value", null == e ? "" : e)
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              this.onChange = e
            }
          }, {
            key: "registerOnTouched",
            value: function (e) {
              this.onTouched = e
            }
          }, {
            key: "setDisabledState",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
            }
          }, {
            key: "_handleInput",
            value: function (e) {
              (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e)
            }
          }, {
            key: "_compositionStart",
            value: function () {
              this._composing = !0
            }
          }, {
            key: "_compositionEnd",
            value: function (e) {
              this._composing = !1, this._compositionMode && this.onChange(e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || bv)(Oo(Aa), Oo(wa), Oo(Av, 8))
        }, bv.\u0275dir = yt({
          type: bv,
          selectors: [
            ["input", "formControlName", "", 3, "type", "checkbox"],
            ["textarea", "formControlName", ""],
            ["input", "formControl", "", 3, "type", "checkbox"],
            ["textarea", "formControl", ""],
            ["input", "ngModel", "", 3, "type", "checkbox"],
            ["textarea", "ngModel", ""],
            ["", "ngDefaultControl", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("input", (function (e) {
              return t._handleInput(e.target.value)
            }))("blur", (function () {
              return t.onTouched()
            }))("compositionstart", (function () {
              return t._compositionStart()
            }))("compositionend", (function (e) {
              return t._compositionEnd(e.target.value)
            }))
          },
          features: [_a([xv])]
        }), bv),
        Tv = ((Cv = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "reset",
            value: function (e) {
              this.control && this.control.reset(e)
            }
          }, {
            key: "hasError",
            value: function (e, t) {
              return !!this.control && this.control.hasError(e, t)
            }
          }, {
            key: "getError",
            value: function (e, t) {
              return this.control ? this.control.getError(e, t) : null
            }
          }, {
            key: "value",
            get: function () {
              return this.control ? this.control.value : null
            }
          }, {
            key: "valid",
            get: function () {
              return this.control ? this.control.valid : null
            }
          }, {
            key: "invalid",
            get: function () {
              return this.control ? this.control.invalid : null
            }
          }, {
            key: "pending",
            get: function () {
              return this.control ? this.control.pending : null
            }
          }, {
            key: "disabled",
            get: function () {
              return this.control ? this.control.disabled : null
            }
          }, {
            key: "enabled",
            get: function () {
              return this.control ? this.control.enabled : null
            }
          }, {
            key: "errors",
            get: function () {
              return this.control ? this.control.errors : null
            }
          }, {
            key: "pristine",
            get: function () {
              return this.control ? this.control.pristine : null
            }
          }, {
            key: "dirty",
            get: function () {
              return this.control ? this.control.dirty : null
            }
          }, {
            key: "touched",
            get: function () {
              return this.control ? this.control.touched : null
            }
          }, {
            key: "status",
            get: function () {
              return this.control ? this.control.status : null
            }
          }, {
            key: "untouched",
            get: function () {
              return this.control ? this.control.untouched : null
            }
          }, {
            key: "statusChanges",
            get: function () {
              return this.control ? this.control.statusChanges : null
            }
          }, {
            key: "valueChanges",
            get: function () {
              return this.control ? this.control.valueChanges : null
            }
          }, {
            key: "path",
            get: function () {
              return null
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Cv)
        }, Cv.\u0275dir = yt({
          type: Cv
        }), Cv),
        Iv = ((kv = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments)
          }
          return _createClass(n, [{
            key: "formDirective",
            get: function () {
              return null
            }
          }, {
            key: "path",
            get: function () {
              return null
            }
          }]), n
        }(Tv)).\u0275fac = function (e) {
          return Pv(e || kv)
        }, kv.\u0275dir = yt({
          type: kv,
          features: [ra]
        }), kv),
        Pv = Yn(Iv);

      function Fv() {
        throw new Error("unimplemented")
      }
      var Rv, Nv, Mv = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            var e;
            return _classCallCheck(this, n), (e = t.apply(this, arguments))._parent = null, e.name = null, e.valueAccessor = null, e._rawValidators = [], e._rawAsyncValidators = [], e
          }
          return _createClass(n, [{
            key: "validator",
            get: function () {
              return Fv()
            }
          }, {
            key: "asyncValidator",
            get: function () {
              return Fv()
            }
          }]), n
        }(Tv),
        Dv = function () {
          function e(t) {
            _classCallCheck(this, e), this._cd = t
          }
          return _createClass(e, [{
            key: "ngClassUntouched",
            get: function () {
              return !!this._cd.control && this._cd.control.untouched
            }
          }, {
            key: "ngClassTouched",
            get: function () {
              return !!this._cd.control && this._cd.control.touched
            }
          }, {
            key: "ngClassPristine",
            get: function () {
              return !!this._cd.control && this._cd.control.pristine
            }
          }, {
            key: "ngClassDirty",
            get: function () {
              return !!this._cd.control && this._cd.control.dirty
            }
          }, {
            key: "ngClassValid",
            get: function () {
              return !!this._cd.control && this._cd.control.valid
            }
          }, {
            key: "ngClassInvalid",
            get: function () {
              return !!this._cd.control && this._cd.control.invalid
            }
          }, {
            key: "ngClassPending",
            get: function () {
              return !!this._cd.control && this._cd.control.pending
            }
          }]), e
        }(),
        Vv = ((Nv = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            return _classCallCheck(this, n), t.call(this, e)
          }
          return n
        }(Dv)).\u0275fac = function (e) {
          return new(e || Nv)(Oo(Mv, 2))
        }, Nv.\u0275dir = yt({
          type: Nv,
          selectors: [
            ["", "formControlName", ""],
            ["", "ngModel", ""],
            ["", "formControl", ""]
          ],
          hostVars: 14,
          hostBindings: function (e, t) {
            2 & e && $o("ng-untouched", t.ngClassUntouched)("ng-touched", t.ngClassTouched)("ng-pristine", t.ngClassPristine)("ng-dirty", t.ngClassDirty)("ng-valid", t.ngClassValid)("ng-invalid", t.ngClassInvalid)("ng-pending", t.ngClassPending)
          },
          features: [ra]
        }), Nv),
        Lv = ((Rv = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e) {
            return _classCallCheck(this, n), t.call(this, e)
          }
          return n
        }(Dv)).\u0275fac = function (e) {
          return new(e || Rv)(Oo(Iv, 2))
        }, Rv.\u0275dir = yt({
          type: Rv,
          selectors: [
            ["", "formGroupName", ""],
            ["", "formArrayName", ""],
            ["", "ngModelGroup", ""],
            ["", "formGroup", ""],
            ["form", 3, "ngNoForm", ""],
            ["", "ngForm", ""]
          ],
          hostVars: 14,
          hostBindings: function (e, t) {
            2 & e && $o("ng-untouched", t.ngClassUntouched)("ng-touched", t.ngClassTouched)("ng-pristine", t.ngClassPristine)("ng-dirty", t.ngClassDirty)("ng-valid", t.ngClassValid)("ng-invalid", t.ngClassInvalid)("ng-pending", t.ngClassPending)
          },
          features: [ra]
        }), Rv);

      function jv(e) {
        return null == e || 0 === e.length
      }
      var Uv = new He("NgValidators"),
        Hv = new He("NgAsyncValidators"),
        qv = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        zv = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, null, [{
            key: "min",
            value: function (e) {
              return function (t) {
                if (jv(t.value) || jv(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n < e ? {
                  min: {
                    min: e,
                    actual: t.value
                  }
                } : null
              }
            }
          }, {
            key: "max",
            value: function (e) {
              return function (t) {
                if (jv(t.value) || jv(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n > e ? {
                  max: {
                    max: e,
                    actual: t.value
                  }
                } : null
              }
            }
          }, {
            key: "required",
            value: function (e) {
              return jv(e.value) ? {
                required: !0
              } : null
            }
          }, {
            key: "requiredTrue",
            value: function (e) {
              return !0 === e.value ? null : {
                required: !0
              }
            }
          }, {
            key: "email",
            value: function (e) {
              return jv(e.value) || qv.test(e.value) ? null : {
                email: !0
              }
            }
          }, {
            key: "minLength",
            value: function (e) {
              return function (t) {
                if (jv(t.value)) return null;
                var n = t.value ? t.value.length : 0;
                return n < e ? {
                  minlength: {
                    requiredLength: e,
                    actualLength: n
                  }
                } : null
              }
            }
          }, {
            key: "maxLength",
            value: function (e) {
              return function (t) {
                var n = t.value ? t.value.length : 0;
                return n > e ? {
                  maxlength: {
                    requiredLength: e,
                    actualLength: n
                  }
                } : null
              }
            }
          }, {
            key: "pattern",
            value: function (t) {
              return t ? ("string" == typeof t ? (r = "", "^" !== t.charAt(0) && (r += "^"), r += t, "$" !== t.charAt(t.length - 1) && (r += "$"), n = new RegExp(r)) : (r = t.toString(), n = t), function (e) {
                if (jv(e.value)) return null;
                var t = e.value;
                return n.test(t) ? null : {
                  pattern: {
                    requiredPattern: r,
                    actualValue: t
                  }
                }
              }) : e.nullValidator;
              var n, r
            }
          }, {
            key: "nullValidator",
            value: function (e) {
              return null
            }
          }, {
            key: "compose",
            value: function (e) {
              if (!e) return null;
              var t = e.filter(Gv);
              return 0 == t.length ? null : function (e) {
                return Wv(function (e, t) {
                  return t.map((function (t) {
                    return t(e)
                  }))
                }(e, t))
              }
            }
          }, {
            key: "composeAsync",
            value: function (e) {
              if (!e) return null;
              var t = e.filter(Gv);
              return 0 == t.length ? null : function (e) {
                return function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  if (1 === t.length) {
                    var r = t[0];
                    if (u(r)) return yv(r, null);
                    if (l(r) && Object.getPrototypeOf(r) === Object.prototype) {
                      var i = Object.keys(r);
                      return yv(i.map((function (e) {
                        return r[e]
                      })), i)
                    }
                  }
                  if ("function" == typeof t[t.length - 1]) {
                    var o = t.pop();
                    return yv(t = 1 === t.length && u(t[0]) ? t[0] : t, null).pipe(j((function (e) {
                      return o.apply(void 0, _toConsumableArray(e))
                    })))
                  }
                  return yv(t, null)
                }(function (e, t) {
                  return t.map((function (t) {
                    return t(e)
                  }))
                }(e, t).map(Bv)).pipe(j(Wv))
              }
            }
          }]), e
        }();

      function Gv(e) {
        return null != e
      }

      function Bv(e) {
        var t = Vo(e) ? z(e) : e;
        if (!Lo(t)) throw new Error("Expected validator to return Promise or Observable.");
        return t
      }

      function Wv(e) {
        var t = {};
        return e.forEach((function (e) {
          t = null != e ? Object.assign(Object.assign({}, t), e) : t
        })), 0 === Object.keys(t).length ? null : t
      }

      function $v(e) {
        return e.validate ? function (t) {
          return e.validate(t)
        } : e
      }

      function Zv(e) {
        return e.validate ? function (t) {
          return e.validate(t)
        } : e
      }
      var Qv, Jv, Yv, Kv, Xv = {
          provide: wv,
          useExisting: Ee((function () {
            return em
          })),
          multi: !0
        },
        em = ((Qv = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this.onChange = function (e) {}, this.onTouched = function () {}
          }
          return _createClass(e, [{
            key: "writeValue",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "value", null == e ? "" : e)
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              this.onChange = function (t) {
                e("" == t ? null : parseFloat(t))
              }
            }
          }, {
            key: "registerOnTouched",
            value: function (e) {
              this.onTouched = e
            }
          }, {
            key: "setDisabledState",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Qv)(Oo(Aa), Oo(wa))
        }, Qv.\u0275dir = yt({
          type: Qv,
          selectors: [
            ["input", "type", "number", "formControlName", ""],
            ["input", "type", "number", "formControl", ""],
            ["input", "type", "number", "ngModel", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("change", (function (e) {
              return t.onChange(e.target.value)
            }))("input", (function (e) {
              return t.onChange(e.target.value)
            }))("blur", (function () {
              return t.onTouched()
            }))
          },
          features: [_a([Xv])]
        }), Qv),
        tm = {
          provide: wv,
          useExisting: Ee((function () {
            return rm
          })),
          multi: !0
        },
        nm = ((Yv = function () {
          function e() {
            _classCallCheck(this, e), this._accessors = []
          }
          return _createClass(e, [{
            key: "add",
            value: function (e, t) {
              this._accessors.push([e, t])
            }
          }, {
            key: "remove",
            value: function (e) {
              for (var t = this._accessors.length - 1; t >= 0; --t)
                if (this._accessors[t][1] === e) return void this._accessors.splice(t, 1)
            }
          }, {
            key: "select",
            value: function (e) {
              var t = this;
              this._accessors.forEach((function (n) {
                t._isSameGroup(n, e) && n[1] !== e && n[1].fireUncheck(e.value)
              }))
            }
          }, {
            key: "_isSameGroup",
            value: function (e, t) {
              return !!e[0].control && e[0]._parent === t._control._parent && e[1].name === t.name
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Yv)
        }, Yv.\u0275prov = fe({
          token: Yv,
          factory: Yv.\u0275fac
        }), Yv),
        rm = ((Jv = function () {
          function e(t, n, r, i) {
            _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._registry = r, this._injector = i, this.onChange = function () {}, this.onTouched = function () {}
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this._control = this._injector.get(Mv), this._checkName(), this._registry.add(this._control, this)
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this._registry.remove(this)
            }
          }, {
            key: "writeValue",
            value: function (e) {
              this._state = e === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              var t = this;
              this._fn = e, this.onChange = function () {
                e(t.value), t._registry.select(t)
              }
            }
          }, {
            key: "fireUncheck",
            value: function (e) {
              this.writeValue(e)
            }
          }, {
            key: "registerOnTouched",
            value: function (e) {
              this.onTouched = e
            }
          }, {
            key: "setDisabledState",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
            }
          }, {
            key: "_checkName",
            value: function () {
              this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
            }
          }, {
            key: "_throwNameError",
            value: function () {
              throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Jv)(Oo(Aa), Oo(wa), Oo(nm), Oo(co))
        }, Jv.\u0275dir = yt({
          type: Jv,
          selectors: [
            ["input", "type", "radio", "formControlName", ""],
            ["input", "type", "radio", "formControl", ""],
            ["input", "type", "radio", "ngModel", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("change", (function () {
              return t.onChange()
            }))("blur", (function () {
              return t.onTouched()
            }))
          },
          inputs: {
            name: "name",
            formControlName: "formControlName",
            value: "value"
          },
          features: [_a([tm])]
        }), Jv),
        im = {
          provide: wv,
          useExisting: Ee((function () {
            return om
          })),
          multi: !0
        },
        om = ((Kv = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this.onChange = function (e) {}, this.onTouched = function () {}
          }
          return _createClass(e, [{
            key: "writeValue",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(e))
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              this.onChange = function (t) {
                e("" == t ? null : parseFloat(t))
              }
            }
          }, {
            key: "registerOnTouched",
            value: function (e) {
              this.onTouched = e
            }
          }, {
            key: "setDisabledState",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Kv)(Oo(Aa), Oo(wa))
        }, Kv.\u0275dir = yt({
          type: Kv,
          selectors: [
            ["input", "type", "range", "formControlName", ""],
            ["input", "type", "range", "formControl", ""],
            ["input", "type", "range", "ngModel", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("change", (function (e) {
              return t.onChange(e.target.value)
            }))("input", (function (e) {
              return t.onChange(e.target.value)
            }))("blur", (function () {
              return t.onTouched()
            }))
          },
          features: [_a([im])]
        }), Kv),
        am = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        sm = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        um = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, null, [{
            key: "controlParentException",
            value: function () {
              throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(am))
            }
          }, {
            key: "ngModelGroupException",
            value: function () {
              throw new Error('formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        '.concat(sm, '\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>'))
            }
          }, {
            key: "missingFormException",
            value: function () {
              throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(am))
            }
          }, {
            key: "groupParentException",
            value: function () {
              throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(sm))
            }
          }, {
            key: "arrayParentException",
            value: function () {
              throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });')
            }
          }, {
            key: "disabledAttrWarning",
            value: function () {
              console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
            }
          }, {
            key: "ngModelWarning",
            value: function (e) {
              console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(e, ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat("formControl" === e ? "FormControlDirective" : "FormControlName", "#use-with-ngmodel\n    "))
            }
          }]), e
        }(),
        lm = {
          provide: wv,
          useExisting: Ee((function () {
            return dm
          })),
          multi: !0
        };

      function cm(e, t) {
        return null == e ? "".concat(t) : (t && "object" == typeof t && (t = "Object"), "".concat(e, ": ").concat(t).slice(0, 50))
      }
      var hm, fm, dm = ((fm = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (e) {}, this.onTouched = function () {}, this._compareWith = _o
          }
          return _createClass(e, [{
            key: "writeValue",
            value: function (e) {
              this.value = e;
              var t = this._getOptionId(e);
              null == t && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
              var n = cm(t, e);
              this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              var t = this;
              this.onChange = function (n) {
                t.value = t._getOptionValue(n), e(t.value)
              }
            }
          }, {
            key: "registerOnTouched",
            value: function (e) {
              this.onTouched = e
            }
          }, {
            key: "setDisabledState",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
            }
          }, {
            key: "_registerOption",
            value: function () {
              return (this._idCounter++).toString()
            }
          }, {
            key: "_getOptionId",
            value: function (e) {
              for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                var r = n[t];
                if (this._compareWith(this._optionMap.get(r), e)) return r
              }
              return null
            }
          }, {
            key: "_getOptionValue",
            value: function (e) {
              var t = function (e) {
                return e.split(":")[0]
              }(e);
              return this._optionMap.has(t) ? this._optionMap.get(t) : e
            }
          }, {
            key: "compareWith",
            set: function (e) {
              if ("function" != typeof e) throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(e)));
              this._compareWith = e
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || fm)(Oo(Aa), Oo(wa))
        }, fm.\u0275dir = yt({
          type: fm,
          selectors: [
            ["select", "formControlName", "", 3, "multiple", ""],
            ["select", "formControl", "", 3, "multiple", ""],
            ["select", "ngModel", "", 3, "multiple", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("change", (function (e) {
              return t.onChange(e.target.value)
            }))("blur", (function () {
              return t.onTouched()
            }))
          },
          inputs: {
            compareWith: "compareWith"
          },
          features: [_a([lm])]
        }), fm),
        pm = ((hm = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this._element = t, this._renderer = n, this._select = r, this._select && (this.id = this._select._registerOption())
          }
          return _createClass(e, [{
            key: "_setElementValue",
            value: function (e) {
              this._renderer.setProperty(this._element.nativeElement, "value", e)
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
            }
          }, {
            key: "ngValue",
            set: function (e) {
              null != this._select && (this._select._optionMap.set(this.id, e), this._setElementValue(cm(this.id, e)), this._select.writeValue(this._select.value))
            }
          }, {
            key: "value",
            set: function (e) {
              this._setElementValue(e), this._select && this._select.writeValue(this._select.value)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || hm)(Oo(wa), Oo(Aa), Oo(dm, 9))
        }, hm.\u0275dir = yt({
          type: hm,
          selectors: [
            ["option"]
          ],
          inputs: {
            ngValue: "ngValue",
            value: "value"
          }
        }), hm),
        vm = {
          provide: wv,
          useExisting: Ee((function () {
            return _m
          })),
          multi: !0
        };

      function mm(e, t) {
        return null == e ? "".concat(t) : ("string" == typeof t && (t = "'".concat(t, "'")), t && "object" == typeof t && (t = "Object"), "".concat(e, ": ").concat(t).slice(0, 50))
      }
      var gm, ym, _m = ((ym = function () {
          function e(t, n) {
            _classCallCheck(this, e), this._renderer = t, this._elementRef = n, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (e) {}, this.onTouched = function () {}, this._compareWith = _o
          }
          return _createClass(e, [{
            key: "writeValue",
            value: function (e) {
              var t, n = this;
              if (this.value = e, Array.isArray(e)) {
                var r = e.map((function (e) {
                  return n._getOptionId(e)
                }));
                t = function (e, t) {
                  e._setSelected(r.indexOf(t.toString()) > -1)
                }
              } else t = function (e, t) {
                e._setSelected(!1)
              };
              this._optionMap.forEach(t)
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              var t = this;
              this.onChange = function (n) {
                var r = [];
                if (n.hasOwnProperty("selectedOptions"))
                  for (var i = n.selectedOptions, o = 0; o < i.length; o++) {
                    var a = i.item(o),
                      s = t._getOptionValue(a.value);
                    r.push(s)
                  } else
                    for (var u = n.options, l = 0; l < u.length; l++) {
                      var c = u.item(l);
                      if (c.selected) {
                        var h = t._getOptionValue(c.value);
                        r.push(h)
                      }
                    }
                t.value = r, e(r)
              }
            }
          }, {
            key: "registerOnTouched",
            value: function (e) {
              this.onTouched = e
            }
          }, {
            key: "setDisabledState",
            value: function (e) {
              this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
            }
          }, {
            key: "_registerOption",
            value: function (e) {
              var t = (this._idCounter++).toString();
              return this._optionMap.set(t, e), t
            }
          }, {
            key: "_getOptionId",
            value: function (e) {
              for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                var r = n[t];
                if (this._compareWith(this._optionMap.get(r)._value, e)) return r
              }
              return null
            }
          }, {
            key: "_getOptionValue",
            value: function (e) {
              var t = function (e) {
                return e.split(":")[0]
              }(e);
              return this._optionMap.has(t) ? this._optionMap.get(t)._value : e
            }
          }, {
            key: "compareWith",
            set: function (e) {
              if ("function" != typeof e) throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(e)));
              this._compareWith = e
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ym)(Oo(Aa), Oo(wa))
        }, ym.\u0275dir = yt({
          type: ym,
          selectors: [
            ["select", "multiple", "", "formControlName", ""],
            ["select", "multiple", "", "formControl", ""],
            ["select", "multiple", "", "ngModel", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("change", (function (e) {
              return t.onChange(e.target)
            }))("blur", (function () {
              return t.onTouched()
            }))
          },
          inputs: {
            compareWith: "compareWith"
          },
          features: [_a([vm])]
        }), ym),
        km = ((gm = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this._element = t, this._renderer = n, this._select = r, this._select && (this.id = this._select._registerOption(this))
          }
          return _createClass(e, [{
            key: "_setElementValue",
            value: function (e) {
              this._renderer.setProperty(this._element.nativeElement, "value", e)
            }
          }, {
            key: "_setSelected",
            value: function (e) {
              this._renderer.setProperty(this._element.nativeElement, "selected", e)
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
            }
          }, {
            key: "ngValue",
            set: function (e) {
              null != this._select && (this._value = e, this._setElementValue(mm(this.id, e)), this._select.writeValue(this._select.value))
            }
          }, {
            key: "value",
            set: function (e) {
              this._select ? (this._value = e, this._setElementValue(mm(this.id, e)), this._select.writeValue(this._select.value)) : this._setElementValue(e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || gm)(Oo(wa), Oo(Aa), Oo(_m, 9))
        }, gm.\u0275dir = yt({
          type: gm,
          selectors: [
            ["option"]
          ],
          inputs: {
            ngValue: "ngValue",
            value: "value"
          }
        }), gm);

      function Cm(e, t) {
        return [].concat(_toConsumableArray(t.path), [e])
      }

      function bm(e, t) {
        e || xm(t, "Cannot find control with"), t.valueAccessor || xm(t, "No value accessor for form control with"), e.validator = zv.compose([e.validator, t.validator]), e.asyncValidator = zv.composeAsync([e.asyncValidator, t.asyncValidator]), t.valueAccessor.writeValue(e.value),
          function (e, t) {
            t.valueAccessor.registerOnChange((function (n) {
              e._pendingValue = n, e._pendingChange = !0, e._pendingDirty = !0, "change" === e.updateOn && wm(e, t)
            }))
          }(e, t),
          function (e, t) {
            e.registerOnChange((function (e, n) {
              t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e)
            }))
          }(e, t),
          function (e, t) {
            t.valueAccessor.registerOnTouched((function () {
              e._pendingTouched = !0, "blur" === e.updateOn && e._pendingChange && wm(e, t), "submit" !== e.updateOn && e.markAsTouched()
            }))
          }(e, t), t.valueAccessor.setDisabledState && e.registerOnDisabledChange((function (e) {
            t.valueAccessor.setDisabledState(e)
          })), t._rawValidators.forEach((function (t) {
            t.registerOnValidatorChange && t.registerOnValidatorChange((function () {
              return e.updateValueAndValidity()
            }))
          })), t._rawAsyncValidators.forEach((function (t) {
            t.registerOnValidatorChange && t.registerOnValidatorChange((function () {
              return e.updateValueAndValidity()
            }))
          }))
      }

      function wm(e, t) {
        e._pendingDirty && e.markAsDirty(), e.setValue(e._pendingValue, {
          emitModelToViewChange: !1
        }), t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1
      }

      function Sm(e, t) {
        null == e && xm(t, "Cannot find control with"), e.validator = zv.compose([e.validator, t.validator]), e.asyncValidator = zv.composeAsync([e.asyncValidator, t.asyncValidator])
      }

      function Em(e) {
        return xm(e, "There is no FormControl instance attached to form control element with")
      }

      function xm(e, t) {
        var n;
        throw n = e.path.length > 1 ? "path: '".concat(e.path.join(" -> "), "'") : e.path[0] ? "name: '".concat(e.path, "'") : "unspecified name attribute", new Error("".concat(t, " ").concat(n))
      }

      function Am(e) {
        return null != e ? zv.compose(e.map($v)) : null
      }

      function Om(e) {
        return null != e ? zv.composeAsync(e.map(Zv)) : null
      }
      var Tm = [Ev, om, em, dm, _m, rm];

      function Im(e) {
        var t = Fm(e) ? e.validators : e;
        return Array.isArray(t) ? Am(t) : t || null
      }

      function Pm(e, t) {
        var n = Fm(t) ? t.asyncValidators : e;
        return Array.isArray(n) ? Om(n) : n || null
      }

      function Fm(e) {
        return null != e && !Array.isArray(e) && "object" == typeof e
      }
      var Rm, Nm, Mm, Dm, Vm, Lm = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.validator = t, this.asyncValidator = n, this._onCollectionChange = function () {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
          }
          return _createClass(e, [{
            key: "setValidators",
            value: function (e) {
              this.validator = Im(e)
            }
          }, {
            key: "setAsyncValidators",
            value: function (e) {
              this.asyncValidator = Pm(e)
            }
          }, {
            key: "clearValidators",
            value: function () {
              this.validator = null
            }
          }, {
            key: "clearAsyncValidators",
            value: function () {
              this.asyncValidator = null
            }
          }, {
            key: "markAsTouched",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.touched = !0, this._parent && !e.onlySelf && this._parent.markAsTouched(e)
            }
          }, {
            key: "markAllAsTouched",
            value: function () {
              this.markAsTouched({
                onlySelf: !0
              }), this._forEachChild((function (e) {
                return e.markAllAsTouched()
              }))
            }
          }, {
            key: "markAsUntouched",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.touched = !1, this._pendingTouched = !1, this._forEachChild((function (e) {
                e.markAsUntouched({
                  onlySelf: !0
                })
              })), this._parent && !e.onlySelf && this._parent._updateTouched(e)
            }
          }, {
            key: "markAsDirty",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.pristine = !1, this._parent && !e.onlySelf && this._parent.markAsDirty(e)
            }
          }, {
            key: "markAsPristine",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.pristine = !0, this._pendingDirty = !1, this._forEachChild((function (e) {
                e.markAsPristine({
                  onlySelf: !0
                })
              })), this._parent && !e.onlySelf && this._parent._updatePristine(e)
            }
          }, {
            key: "markAsPending",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.status = "PENDING", !1 !== e.emitEvent && this.statusChanges.emit(this.status), this._parent && !e.onlySelf && this._parent.markAsPending(e)
            }
          }, {
            key: "disable",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = this._parentMarkedDirty(e.onlySelf);
              this.status = "DISABLED", this.errors = null, this._forEachChild((function (t) {
                t.disable(Object.assign(Object.assign({}, e), {
                  onlySelf: !0
                }))
              })), this._updateValue(), !1 !== e.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, e), {
                skipPristineCheck: t
              })), this._onDisabledChange.forEach((function (e) {
                return e(!0)
              }))
            }
          }, {
            key: "enable",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = this._parentMarkedDirty(e.onlySelf);
              this.status = "VALID", this._forEachChild((function (t) {
                t.enable(Object.assign(Object.assign({}, e), {
                  onlySelf: !0
                }))
              })), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: e.emitEvent
              }), this._updateAncestors(Object.assign(Object.assign({}, e), {
                skipPristineCheck: t
              })), this._onDisabledChange.forEach((function (e) {
                return e(!1)
              }))
            }
          }, {
            key: "_updateAncestors",
            value: function (e) {
              this._parent && !e.onlySelf && (this._parent.updateValueAndValidity(e), e.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
            }
          }, {
            key: "setParent",
            value: function (e) {
              this._parent = e
            }
          }, {
            key: "updateValueAndValidity",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(e.emitEvent)), !1 !== e.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !e.onlySelf && this._parent.updateValueAndValidity(e)
            }
          }, {
            key: "_updateTreeValidity",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                emitEvent: !0
              };
              this._forEachChild((function (t) {
                return t._updateTreeValidity(e)
              })), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: e.emitEvent
              })
            }
          }, {
            key: "_setInitialStatus",
            value: function () {
              this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
            }
          }, {
            key: "_runValidator",
            value: function () {
              return this.validator ? this.validator(this) : null
            }
          }, {
            key: "_runAsyncValidator",
            value: function (e) {
              var t = this;
              if (this.asyncValidator) {
                this.status = "PENDING";
                var n = Bv(this.asyncValidator(this));
                this._asyncValidationSubscription = n.subscribe((function (n) {
                  return t.setErrors(n, {
                    emitEvent: e
                  })
                }))
              }
            }
          }, {
            key: "_cancelExistingSubscription",
            value: function () {
              this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
            }
          }, {
            key: "setErrors",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this.errors = e, this._updateControlsErrors(!1 !== t.emitEvent)
            }
          }, {
            key: "get",
            value: function (e) {
              return function (e, t, n) {
                if (null == t) return null;
                if (Array.isArray(t) || (t = t.split(".")), Array.isArray(t) && 0 === t.length) return null;
                var r = e;
                return t.forEach((function (e) {
                  r = r instanceof Um ? r.controls.hasOwnProperty(e) ? r.controls[e] : null : r instanceof Hm && r.at(e) || null
                })), r
              }(this, e)
            }
          }, {
            key: "getError",
            value: function (e, t) {
              var n = t ? this.get(t) : this;
              return n && n.errors ? n.errors[e] : null
            }
          }, {
            key: "hasError",
            value: function (e, t) {
              return !!this.getError(e, t)
            }
          }, {
            key: "_updateControlsErrors",
            value: function (e) {
              this.status = this._calculateStatus(), e && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(e)
            }
          }, {
            key: "_initObservables",
            value: function () {
              this.valueChanges = new ps, this.statusChanges = new ps
            }
          }, {
            key: "_calculateStatus",
            value: function () {
              return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
            }
          }, {
            key: "_anyControlsHaveStatus",
            value: function (e) {
              return this._anyControls((function (t) {
                return t.status === e
              }))
            }
          }, {
            key: "_anyControlsDirty",
            value: function () {
              return this._anyControls((function (e) {
                return e.dirty
              }))
            }
          }, {
            key: "_anyControlsTouched",
            value: function () {
              return this._anyControls((function (e) {
                return e.touched
              }))
            }
          }, {
            key: "_updatePristine",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.pristine = !this._anyControlsDirty(), this._parent && !e.onlySelf && this._parent._updatePristine(e)
            }
          }, {
            key: "_updateTouched",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.touched = this._anyControlsTouched(), this._parent && !e.onlySelf && this._parent._updateTouched(e)
            }
          }, {
            key: "_isBoxedValue",
            value: function (e) {
              return "object" == typeof e && null !== e && 2 === Object.keys(e).length && "value" in e && "disabled" in e
            }
          }, {
            key: "_registerOnCollectionChange",
            value: function (e) {
              this._onCollectionChange = e
            }
          }, {
            key: "_setUpdateStrategy",
            value: function (e) {
              Fm(e) && null != e.updateOn && (this._updateOn = e.updateOn)
            }
          }, {
            key: "_parentMarkedDirty",
            value: function (e) {
              return !e && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
            }
          }, {
            key: "parent",
            get: function () {
              return this._parent
            }
          }, {
            key: "valid",
            get: function () {
              return "VALID" === this.status
            }
          }, {
            key: "invalid",
            get: function () {
              return "INVALID" === this.status
            }
          }, {
            key: "pending",
            get: function () {
              return "PENDING" == this.status
            }
          }, {
            key: "disabled",
            get: function () {
              return "DISABLED" === this.status
            }
          }, {
            key: "enabled",
            get: function () {
              return "DISABLED" !== this.status
            }
          }, {
            key: "dirty",
            get: function () {
              return !this.pristine
            }
          }, {
            key: "untouched",
            get: function () {
              return !this.touched
            }
          }, {
            key: "updateOn",
            get: function () {
              return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
            }
          }, {
            key: "root",
            get: function () {
              for (var e = this; e._parent;) e = e._parent;
              return e
            }
          }]), e
        }(),
        jm = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              i = arguments.length > 1 ? arguments[1] : void 0,
              o = arguments.length > 2 ? arguments[2] : void 0;
            return _classCallCheck(this, n), (e = t.call(this, Im(i), Pm(o, i)))._onChange = [], e._applyFormState(r), e._setUpdateStrategy(i), e.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !1
            }), e._initObservables(), e
          }
          return _createClass(n, [{
            key: "setValue",
            value: function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this.value = this._pendingValue = e, this._onChange.length && !1 !== n.emitModelToViewChange && this._onChange.forEach((function (e) {
                return e(t.value, !1 !== n.emitViewToModelChange)
              })), this.updateValueAndValidity(n)
            }
          }, {
            key: "patchValue",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this.setValue(e, t)
            }
          }, {
            key: "reset",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this._applyFormState(e), this.markAsPristine(t), this.markAsUntouched(t), this.setValue(this.value, t), this._pendingChange = !1
            }
          }, {
            key: "_updateValue",
            value: function () {}
          }, {
            key: "_anyControls",
            value: function (e) {
              return !1
            }
          }, {
            key: "_allControlsDisabled",
            value: function () {
              return this.disabled
            }
          }, {
            key: "registerOnChange",
            value: function (e) {
              this._onChange.push(e)
            }
          }, {
            key: "_clearChangeFns",
            value: function () {
              this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function () {}
            }
          }, {
            key: "registerOnDisabledChange",
            value: function (e) {
              this._onDisabledChange.push(e)
            }
          }, {
            key: "_forEachChild",
            value: function (e) {}
          }, {
            key: "_syncPendingControls",
            value: function () {
              return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
                onlySelf: !0,
                emitModelToViewChange: !1
              }), 0))
            }
          }, {
            key: "_applyFormState",
            value: function (e) {
              this._isBoxedValue(e) ? (this.value = this._pendingValue = e.value, e.disabled ? this.disable({
                onlySelf: !0,
                emitEvent: !1
              }) : this.enable({
                onlySelf: !0,
                emitEvent: !1
              })) : this.value = this._pendingValue = e
            }
          }]), n
        }(Lm),
        Um = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, Im(r), Pm(i, r))).controls = e, o._initObservables(), o._setUpdateStrategy(r), o._setUpControls(), o.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !1
            }), o
          }
          return _createClass(n, [{
            key: "registerControl",
            value: function (e, t) {
              return this.controls[e] ? this.controls[e] : (this.controls[e] = t, t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange), t)
            }
          }, {
            key: "addControl",
            value: function (e, t) {
              this.registerControl(e, t), this.updateValueAndValidity(), this._onCollectionChange()
            }
          }, {
            key: "removeControl",
            value: function (e) {
              this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {})), delete this.controls[e], this.updateValueAndValidity(), this._onCollectionChange()
            }
          }, {
            key: "setControl",
            value: function (e, t) {
              this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {})), delete this.controls[e], t && this.registerControl(e, t), this.updateValueAndValidity(), this._onCollectionChange()
            }
          }, {
            key: "contains",
            value: function (e) {
              return this.controls.hasOwnProperty(e) && this.controls[e].enabled
            }
          }, {
            key: "setValue",
            value: function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this._checkAllValuesPresent(e), Object.keys(e).forEach((function (r) {
                t._throwIfControlMissing(r), t.controls[r].setValue(e[r], {
                  onlySelf: !0,
                  emitEvent: n.emitEvent
                })
              })), this.updateValueAndValidity(n)
            }
          }, {
            key: "patchValue",
            value: function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              Object.keys(e).forEach((function (r) {
                t.controls[r] && t.controls[r].patchValue(e[r], {
                  onlySelf: !0,
                  emitEvent: n.emitEvent
                })
              })), this.updateValueAndValidity(n)
            }
          }, {
            key: "reset",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this._forEachChild((function (n, r) {
                n.reset(e[r], {
                  onlySelf: !0,
                  emitEvent: t.emitEvent
                })
              })), this._updatePristine(t), this._updateTouched(t), this.updateValueAndValidity(t)
            }
          }, {
            key: "getRawValue",
            value: function () {
              return this._reduceChildren({}, (function (e, t, n) {
                return e[n] = t instanceof jm ? t.value : t.getRawValue(), e
              }))
            }
          }, {
            key: "_syncPendingControls",
            value: function () {
              var e = this._reduceChildren(!1, (function (e, t) {
                return !!t._syncPendingControls() || e
              }));
              return e && this.updateValueAndValidity({
                onlySelf: !0
              }), e
            }
          }, {
            key: "_throwIfControlMissing",
            value: function (e) {
              if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
              if (!this.controls[e]) throw new Error("Cannot find form control with name: ".concat(e, "."))
            }
          }, {
            key: "_forEachChild",
            value: function (e) {
              var t = this;
              Object.keys(this.controls).forEach((function (n) {
                return e(t.controls[n], n)
              }))
            }
          }, {
            key: "_setUpControls",
            value: function () {
              var e = this;
              this._forEachChild((function (t) {
                t.setParent(e), t._registerOnCollectionChange(e._onCollectionChange)
              }))
            }
          }, {
            key: "_updateValue",
            value: function () {
              this.value = this._reduceValue()
            }
          }, {
            key: "_anyControls",
            value: function (e) {
              var t = this,
                n = !1;
              return this._forEachChild((function (r, i) {
                n = n || t.contains(i) && e(r)
              })), n
            }
          }, {
            key: "_reduceValue",
            value: function () {
              var e = this;
              return this._reduceChildren({}, (function (t, n, r) {
                return (n.enabled || e.disabled) && (t[r] = n.value), t
              }))
            }
          }, {
            key: "_reduceChildren",
            value: function (e, t) {
              var n = e;
              return this._forEachChild((function (e, r) {
                n = t(n, e, r)
              })), n
            }
          }, {
            key: "_allControlsDisabled",
            value: function () {
              for (var e = 0, t = Object.keys(this.controls); e < t.length; e++) {
                var n = t[e];
                if (this.controls[n].enabled) return !1
              }
              return Object.keys(this.controls).length > 0 || this.disabled
            }
          }, {
            key: "_checkAllValuesPresent",
            value: function (e) {
              this._forEachChild((function (t, n) {
                if (void 0 === e[n]) throw new Error("Must supply a value for form control with name: '".concat(n, "'."))
              }))
            }
          }]), n
        }(Lm),
        Hm = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this, Im(r), Pm(i, r))).controls = e, o._initObservables(), o._setUpdateStrategy(r), o._setUpControls(), o.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !1
            }), o
          }
          return _createClass(n, [{
            key: "at",
            value: function (e) {
              return this.controls[e]
            }
          }, {
            key: "push",
            value: function (e) {
              this.controls.push(e), this._registerControl(e), this.updateValueAndValidity(), this._onCollectionChange()
            }
          }, {
            key: "insert",
            value: function (e, t) {
              this.controls.splice(e, 0, t), this._registerControl(t), this.updateValueAndValidity()
            }
          }, {
            key: "removeAt",
            value: function (e) {
              this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {})), this.controls.splice(e, 1), this.updateValueAndValidity()
            }
          }, {
            key: "setControl",
            value: function (e, t) {
              this.controls[e] && this.controls[e]._registerOnCollectionChange((function () {})), this.controls.splice(e, 1), t && (this.controls.splice(e, 0, t), this._registerControl(t)), this.updateValueAndValidity(), this._onCollectionChange()
            }
          }, {
            key: "setValue",
            value: function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this._checkAllValuesPresent(e), e.forEach((function (e, r) {
                t._throwIfControlMissing(r), t.at(r).setValue(e, {
                  onlySelf: !0,
                  emitEvent: n.emitEvent
                })
              })), this.updateValueAndValidity(n)
            }
          }, {
            key: "patchValue",
            value: function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              e.forEach((function (e, r) {
                t.at(r) && t.at(r).patchValue(e, {
                  onlySelf: !0,
                  emitEvent: n.emitEvent
                })
              })), this.updateValueAndValidity(n)
            }
          }, {
            key: "reset",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this._forEachChild((function (n, r) {
                n.reset(e[r], {
                  onlySelf: !0,
                  emitEvent: t.emitEvent
                })
              })), this._updatePristine(t), this._updateTouched(t), this.updateValueAndValidity(t)
            }
          }, {
            key: "getRawValue",
            value: function () {
              return this.controls.map((function (e) {
                return e instanceof jm ? e.value : e.getRawValue()
              }))
            }
          }, {
            key: "clear",
            value: function () {
              this.controls.length < 1 || (this._forEachChild((function (e) {
                return e._registerOnCollectionChange((function () {}))
              })), this.controls.splice(0), this.updateValueAndValidity())
            }
          }, {
            key: "_syncPendingControls",
            value: function () {
              var e = this.controls.reduce((function (e, t) {
                return !!t._syncPendingControls() || e
              }), !1);
              return e && this.updateValueAndValidity({
                onlySelf: !0
              }), e
            }
          }, {
            key: "_throwIfControlMissing",
            value: function (e) {
              if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
              if (!this.at(e)) throw new Error("Cannot find form control at index ".concat(e))
            }
          }, {
            key: "_forEachChild",
            value: function (e) {
              this.controls.forEach((function (t, n) {
                e(t, n)
              }))
            }
          }, {
            key: "_updateValue",
            value: function () {
              var e = this;
              this.value = this.controls.filter((function (t) {
                return t.enabled || e.disabled
              })).map((function (e) {
                return e.value
              }))
            }
          }, {
            key: "_anyControls",
            value: function (e) {
              return this.controls.some((function (t) {
                return t.enabled && e(t)
              }))
            }
          }, {
            key: "_setUpControls",
            value: function () {
              var e = this;
              this._forEachChild((function (t) {
                return e._registerControl(t)
              }))
            }
          }, {
            key: "_checkAllValuesPresent",
            value: function (e) {
              this._forEachChild((function (t, n) {
                if (void 0 === e[n]) throw new Error("Must supply a value for form control at index: ".concat(n, "."))
              }))
            }
          }, {
            key: "_allControlsDisabled",
            value: function () {
              var e, t = _createForOfIteratorHelper(this.controls);
              try {
                for (t.s(); !(e = t.n()).done;) {
                  if (e.value.enabled) return !1
                }
              } catch (n) {
                t.e(n)
              } finally {
                t.f()
              }
              return this.controls.length > 0 || this.disabled
            }
          }, {
            key: "_registerControl",
            value: function (e) {
              e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange)
            }
          }, {
            key: "length",
            get: function () {
              return this.controls.length
            }
          }]), n
        }(Lm),
        qm = ((Rm = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n() {
            return _classCallCheck(this, n), t.apply(this, arguments)
          }
          return _createClass(n, [{
            key: "ngOnInit",
            value: function () {
              this._checkParentType(), this.formDirective.addFormGroup(this)
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.formDirective && this.formDirective.removeFormGroup(this)
            }
          }, {
            key: "_checkParentType",
            value: function () {}
          }, {
            key: "control",
            get: function () {
              return this.formDirective.getFormGroup(this)
            }
          }, {
            key: "path",
            get: function () {
              return Cm(null == this.name ? this.name : this.name.toString(), this._parent)
            }
          }, {
            key: "formDirective",
            get: function () {
              return this._parent ? this._parent.formDirective : null
            }
          }, {
            key: "validator",
            get: function () {
              return Am(this._validators)
            }
          }, {
            key: "asyncValidator",
            get: function () {
              return Om(this._asyncValidators)
            }
          }]), n
        }(Iv)).\u0275fac = function (e) {
          return zm(e || Rm)
        }, Rm.\u0275dir = yt({
          type: Rm,
          features: [ra]
        }), Rm),
        zm = Yn(qm),
        Gm = ((Nm = function e() {
          _classCallCheck(this, e)
        }).\u0275fac = function (e) {
          return new(e || Nm)
        }, Nm.\u0275dir = yt({
          type: Nm,
          selectors: [
            ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
          ],
          hostAttrs: ["novalidate", ""]
        }), Nm),
        Bm = new He("NgModelWithFormControlWarning"),
        Wm = {
          provide: Iv,
          useExisting: Ee((function () {
            return $m
          }))
        },
        $m = ((Mm = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r) {
            var i;
            return _classCallCheck(this, n), (i = t.call(this))._validators = e, i._asyncValidators = r, i.submitted = !1, i.directives = [], i.form = null, i.ngSubmit = new ps, i
          }
          return _createClass(n, [{
            key: "ngOnChanges",
            value: function (e) {
              this._checkFormPresent(), e.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations())
            }
          }, {
            key: "addControl",
            value: function (e) {
              var t = this.form.get(e.path);
              return bm(t, e), t.updateValueAndValidity({
                emitEvent: !1
              }), this.directives.push(e), t
            }
          }, {
            key: "getControl",
            value: function (e) {
              return this.form.get(e.path)
            }
          }, {
            key: "removeControl",
            value: function (e) {
              var t, n, r;
              t = this.directives, n = e, (r = t.indexOf(n)) > -1 && t.splice(r, 1)
            }
          }, {
            key: "addFormGroup",
            value: function (e) {
              var t = this.form.get(e.path);
              Sm(t, e), t.updateValueAndValidity({
                emitEvent: !1
              })
            }
          }, {
            key: "removeFormGroup",
            value: function (e) {}
          }, {
            key: "getFormGroup",
            value: function (e) {
              return this.form.get(e.path)
            }
          }, {
            key: "addFormArray",
            value: function (e) {
              var t = this.form.get(e.path);
              Sm(t, e), t.updateValueAndValidity({
                emitEvent: !1
              })
            }
          }, {
            key: "removeFormArray",
            value: function (e) {}
          }, {
            key: "getFormArray",
            value: function (e) {
              return this.form.get(e.path)
            }
          }, {
            key: "updateModel",
            value: function (e, t) {
              this.form.get(e.path).setValue(t)
            }
          }, {
            key: "onSubmit",
            value: function (e) {
              return this.submitted = !0, t = this.directives, this.form._syncPendingControls(), t.forEach((function (e) {
                var t = e.control;
                "submit" === t.updateOn && t._pendingChange && (e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1)
              })), this.ngSubmit.emit(e), !1;
              var t
            }
          }, {
            key: "onReset",
            value: function () {
              this.resetForm()
            }
          }, {
            key: "resetForm",
            value: function (e) {
              this.form.reset(e), this.submitted = !1
            }
          }, {
            key: "_updateDomValue",
            value: function () {
              var e = this;
              this.directives.forEach((function (t) {
                var n = e.form.get(t.path);
                t.control !== n && (function (e, t) {
                  t.valueAccessor.registerOnChange((function () {
                    return Em(t)
                  })), t.valueAccessor.registerOnTouched((function () {
                    return Em(t)
                  })), t._rawValidators.forEach((function (e) {
                    e.registerOnValidatorChange && e.registerOnValidatorChange(null)
                  })), t._rawAsyncValidators.forEach((function (e) {
                    e.registerOnValidatorChange && e.registerOnValidatorChange(null)
                  })), e && e._clearChangeFns()
                }(t.control, t), n && bm(n, t), t.control = n)
              })), this.form._updateTreeValidity({
                emitEvent: !1
              })
            }
          }, {
            key: "_updateRegistrations",
            value: function () {
              var e = this;
              this.form._registerOnCollectionChange((function () {
                return e._updateDomValue()
              })), this._oldForm && this._oldForm._registerOnCollectionChange((function () {})), this._oldForm = this.form
            }
          }, {
            key: "_updateValidators",
            value: function () {
              var e = Am(this._validators);
              this.form.validator = zv.compose([this.form.validator, e]);
              var t = Om(this._asyncValidators);
              this.form.asyncValidator = zv.composeAsync([this.form.asyncValidator, t])
            }
          }, {
            key: "_checkFormPresent",
            value: function () {
              this.form || um.missingFormException()
            }
          }, {
            key: "formDirective",
            get: function () {
              return this
            }
          }, {
            key: "control",
            get: function () {
              return this.form
            }
          }, {
            key: "path",
            get: function () {
              return []
            }
          }]), n
        }(Iv)).\u0275fac = function (e) {
          return new(e || Mm)(Oo(Uv, 10), Oo(Hv, 10))
        }, Mm.\u0275dir = yt({
          type: Mm,
          selectors: [
            ["", "formGroup", ""]
          ],
          hostBindings: function (e, t) {
            1 & e && jo("submit", (function (e) {
              return t.onSubmit(e)
            }))("reset", (function () {
              return t.onReset()
            }))
          },
          inputs: {
            form: ["formGroup", "form"]
          },
          outputs: {
            ngSubmit: "ngSubmit"
          },
          exportAs: ["ngForm"],
          features: [_a([Wm]), ra, la]
        }), Mm),
        Zm = {
          provide: Iv,
          useExisting: Ee((function () {
            return Qm
          }))
        },
        Qm = ((Dm = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this))._parent = e, o._validators = r, o._asyncValidators = i, o
          }
          return _createClass(n, [{
            key: "_checkParentType",
            value: function () {
              Km(this._parent) && um.groupParentException()
            }
          }]), n
        }(qm)).\u0275fac = function (e) {
          return new(e || Dm)(Oo(Iv, 13), Oo(Uv, 10), Oo(Hv, 10))
        }, Dm.\u0275dir = yt({
          type: Dm,
          selectors: [
            ["", "formGroupName", ""]
          ],
          inputs: {
            name: ["formGroupName", "name"]
          },
          features: [_a([Zm]), ra]
        }), Dm),
        Jm = {
          provide: Iv,
          useExisting: Ee((function () {
            return Ym
          }))
        },
        Ym = ((Vm = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i) {
            var o;
            return _classCallCheck(this, n), (o = t.call(this))._parent = e, o._validators = r, o._asyncValidators = i, o
          }
          return _createClass(n, [{
            key: "ngOnInit",
            value: function () {
              this._checkParentType(), this.formDirective.addFormArray(this)
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.formDirective && this.formDirective.removeFormArray(this)
            }
          }, {
            key: "_checkParentType",
            value: function () {
              Km(this._parent) && um.arrayParentException()
            }
          }, {
            key: "control",
            get: function () {
              return this.formDirective.getFormArray(this)
            }
          }, {
            key: "formDirective",
            get: function () {
              return this._parent ? this._parent.formDirective : null
            }
          }, {
            key: "path",
            get: function () {
              return Cm(null == this.name ? this.name : this.name.toString(), this._parent)
            }
          }, {
            key: "validator",
            get: function () {
              return Am(this._validators)
            }
          }, {
            key: "asyncValidator",
            get: function () {
              return Om(this._asyncValidators)
            }
          }]), n
        }(Iv)).\u0275fac = function (e) {
          return new(e || Vm)(Oo(Iv, 13), Oo(Uv, 10), Oo(Hv, 10))
        }, Vm.\u0275dir = yt({
          type: Vm,
          selectors: [
            ["", "formArrayName", ""]
          ],
          inputs: {
            name: ["formArrayName", "name"]
          },
          features: [_a([Jm]), ra]
        }), Vm);

      function Km(e) {
        return !(e instanceof Qm || e instanceof $m || e instanceof Ym)
      }
      var Xm, eg, tg, ng, rg, ig = {
          provide: Mv,
          useExisting: Ee((function () {
            return og
          }))
        },
        og = ((Xm = function (e) {
          _inherits(n, e);
          var t = _createSuper(n);

          function n(e, r, i, o, a) {
            var s;
            return _classCallCheck(this, n), (s = t.call(this))._ngModelWarningConfig = a, s._added = !1, s.update = new ps, s._ngModelWarningSent = !1, s._parent = e, s._rawValidators = r || [], s._rawAsyncValidators = i || [], s.valueAccessor = function (e, t) {
              if (!t) return null;
              Array.isArray(t) || xm(e, "Value accessor was not provided as an array for form control with");
              var n = void 0,
                r = void 0,
                i = void 0;
              return t.forEach((function (t) {
                var o;
                t.constructor === Ov ? n = t : (o = t, Tm.some((function (e) {
                  return o.constructor === e
                })) ? (r && xm(e, "More than one built-in value accessor matches form control with"), r = t) : (i && xm(e, "More than one custom value accessor matches form control with"), i = t))
              })), i || r || n || (xm(e, "No valid value accessor for form control with"), null)
            }(_assertThisInitialized(s), o), s
          }
          return _createClass(n, [{
            key: "ngOnChanges",
            value: function (e) {
              var t, r;
              this._added || this._setUpControl(),
                function (e, t) {
                  if (!e.hasOwnProperty("model")) return !1;
                  var n = e.model;
                  return !!n.isFirstChange() || !_o(t, n.currentValue)
                }(e, this.viewModel) && (t = n, r = this._ngModelWarningConfig, ar() && "never" !== r && ((null !== r && "once" !== r || t._ngModelWarningSentOnce) && ("always" !== r || this._ngModelWarningSent) || (um.ngModelWarning("formControlName"), t._ngModelWarningSentOnce = !0, this._ngModelWarningSent = !0)), this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
            }
          }, {
            key: "ngOnDestroy",
            value: function () {
              this.formDirective && this.formDirective.removeControl(this)
            }
          }, {
            key: "viewToModelUpdate",
            value: function (e) {
              this.viewModel = e, this.update.emit(e)
            }
          }, {
            key: "_checkParentType",
            value: function () {
              !(this._parent instanceof Qm) && this._parent instanceof qm ? um.ngModelGroupException() : this._parent instanceof Qm || this._parent instanceof $m || this._parent instanceof Ym || um.controlParentException()
            }
          }, {
            key: "_setUpControl",
            value: function () {
              this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0
            }
          }, {
            key: "isDisabled",
            set: function (e) {
              um.disabledAttrWarning()
            }
          }, {
            key: "path",
            get: function () {
              return Cm(null == this.name ? this.name : this.name.toString(), this._parent)
            }
          }, {
            key: "formDirective",
            get: function () {
              return this._parent ? this._parent.formDirective : null
            }
          }, {
            key: "validator",
            get: function () {
              return Am(this._rawValidators)
            }
          }, {
            key: "asyncValidator",
            get: function () {
              return Om(this._rawAsyncValidators)
            }
          }]), n
        }(Mv)).\u0275fac = function (e) {
          return new(e || Xm)(Oo(Iv, 13), Oo(Uv, 10), Oo(Hv, 10), Oo(wv, 10), Oo(Bm, 8))
        }, Xm.\u0275dir = yt({
          type: Xm,
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
          features: [_a([ig]), ra, la]
        }), Xm._ngModelWarningSentOnce = !1, Xm),
        ag = {
          provide: Uv,
          useExisting: Ee((function () {
            return sg
          })),
          multi: !0
        },
        sg = ((rg = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "validate",
            value: function (e) {
              return this.required ? zv.required(e) : null
            }
          }, {
            key: "registerOnValidatorChange",
            value: function (e) {
              this._onChange = e
            }
          }, {
            key: "required",
            get: function () {
              return this._required
            },
            set: function (e) {
              this._required = null != e && !1 !== e && "false" !== "".concat(e), this._onChange && this._onChange()
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || rg)
        }, rg.\u0275dir = yt({
          type: rg,
          selectors: [
            ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
            ["", "required", "", "formControl", "", 3, "type", "checkbox"],
            ["", "required", "", "ngModel", "", 3, "type", "checkbox"]
          ],
          hostVars: 1,
          hostBindings: function (e, t) {
            2 & e && Eo("required", t.required ? "" : null)
          },
          inputs: {
            required: "required"
          },
          features: [_a([ag])]
        }), rg),
        ug = ((ng = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: ng
        }), ng.\u0275inj = de({
          factory: function (e) {
            return new(e || ng)
          }
        }), ng),
        lg = ((tg = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "group",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = this._reduceControls(e),
                r = null,
                i = null,
                o = void 0;
              return null != t && (function (e) {
                return void 0 !== e.asyncValidators || void 0 !== e.validators || void 0 !== e.updateOn
              }(t) ? (r = null != t.validators ? t.validators : null, i = null != t.asyncValidators ? t.asyncValidators : null, o = null != t.updateOn ? t.updateOn : void 0) : (r = null != t.validator ? t.validator : null, i = null != t.asyncValidator ? t.asyncValidator : null)), new Um(n, {
                asyncValidators: i,
                updateOn: o,
                validators: r
              })
            }
          }, {
            key: "control",
            value: function (e, t, n) {
              return new jm(e, t, n)
            }
          }, {
            key: "array",
            value: function (e, t, n) {
              var r = this,
                i = e.map((function (e) {
                  return r._createControl(e)
                }));
              return new Hm(i, t, n)
            }
          }, {
            key: "_reduceControls",
            value: function (e) {
              var t = this,
                n = {};
              return Object.keys(e).forEach((function (r) {
                n[r] = t._createControl(e[r])
              })), n
            }
          }, {
            key: "_createControl",
            value: function (e) {
              return e instanceof jm || e instanceof Um || e instanceof Hm ? e : Array.isArray(e) ? this.control(e[0], e.length > 1 ? e[1] : null, e.length > 2 ? e[2] : null) : this.control(e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || tg)
        }, tg.\u0275prov = fe({
          token: tg,
          factory: tg.\u0275fac
        }), tg),
        cg = ((eg = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, null, [{
            key: "withConfig",
            value: function (t) {
              return {
                ngModule: e,
                providers: [{
                  provide: Bm,
                  useValue: t.warnOnNgModelWithFormControl
                }]
              }
            }
          }]), e
        }()).\u0275mod = mt({
          type: eg
        }), eg.\u0275inj = de({
          factory: function (e) {
            return new(e || eg)
          },
          providers: [lg, nm],
          imports: [ug]
        }), eg);

      function hg(e, t) {
        if (1 & e && (Ro(0, "div", 11), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), Xo(n.errorMessage)
        }
      }

      function fg(e, t) {
        1 & e && (Ro(0, "small", 13), Ko(1, "E-mail obligatoire"), No())
      }

      function dg(e, t) {
        1 & e && (Ro(0, "small", 13), Ko(1, "E-mail invalide"), No())
      }

      function pg(e, t) {
        if (1 & e && (Ro(0, "div"), Ao(1, fg, 2, 0, "small", 12), Ao(2, dg, 2, 0, "small", 12), No()), 2 & e) {
          var n = qo();
          Er(1), Po("ngIf", null == n.loginForm.get("email").errors ? null : n.loginForm.get("email").errors.required), Er(1), Po("ngIf", null == n.loginForm.get("email").errors ? null : n.loginForm.get("email").errors.email)
        }
      }

      function vg(e, t) {
        1 & e && (Ro(0, "small", 13), Ko(1, "Mot de passe obligatoire"), No())
      }

      function mg(e, t) {
        if (1 & e && (Ro(0, "div"), Ao(1, vg, 2, 0, "small", 12), No()), 2 & e) {
          var n = qo();
          Er(1), Po("ngIf", null == n.loginForm.get("password").errors ? null : n.loginForm.get("password").errors.required)
        }
      }
      var gg, yg, _g, kg, Cg, bg, wg, Sg, Eg, xg, Ag, Og = [{
          path: "",
          component: (yg = function () {
            function e() {
              _classCallCheck(this, e)
            }
            return _createClass(e, [{
              key: "ngOnInit",
              value: function () {}
            }]), e
          }(), yg.\u0275fac = function (e) {
            return new(e || yg)
          }, yg.\u0275cmp = ft({
            type: yg,
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
            template: function (e, t) {
              1 & e && (Ro(0, "div", 0), Ro(1, "div", 1), Ro(2, "div", 2), Mo(3, "router-outlet"), No(), No(), No())
            },
            directives: [Up],
            styles: [".authentication[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#5d6d00;color:#eceff1}.authentication[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.form-login[_ngcontent-%COMP%]{margin:3% auto;width:500px}"]
          }), yg),
          children: [{
            path: "login",
            component: (gg = function () {
              function e(t, n, r) {
                _classCallCheck(this, e), this.fb = t, this.authenticationService = n, this.router = r
              }
              return _createClass(e, [{
                key: "ngOnInit",
                value: function () {
                  this.createForm()
                }
              }, {
                key: "createForm",
                value: function () {
                  this.loginForm = this.fb.group({
                    email: ["", [zv.required, zv.email]],
                    password: ["", zv.required]
                  })
                }
              }, {
                key: "onSubmit",
                value: function () {
                  var e = this;
                  this.authenticationService.login(this.loginForm.value).subscribe((function (t) {
                    localStorage.setItem("token", t.token), "admin" === t.role ? e.router.navigate(["/administrator/dashboard"]) : "officer" === t.role ? e.router.navigate(["/townhalls/dashboard"]) : "avec" === t.role ? e.router.navigate(["/association/dashboard"]) : "supplier" === t.role ? e.router.navigate(["/supplier/dashboard"]) : "banker" === t.role && e.router.navigate(["/bank/dashboard"])
                  }), (function (t) {
                    t instanceof Qc && 404 === t.status && (e.errorMessage = "E-mail ou mot de passe incorrect")
                  }))
                }
              }]), e
            }(), gg.\u0275fac = function (e) {
              return new(e || gg)(Oo(lg), Oo(hv), Oo(Tp))
            }, gg.\u0275cmp = ft({
              type: gg,
              selectors: [
                ["app-authentications-login"]
              ],
              decls: 17,
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
                [1, "alert", "alert-danger"],
                ["class", "text-danger", 4, "ngIf"],
                [1, "text-danger"]
              ],
              template: function (e, t) {
                1 & e && (Ro(0, "div", 0), Mo(1, "img", 1), No(), Ao(2, hg, 2, 1, "div", 2), Ro(3, "form", 3), jo("ngSubmit", (function () {
                  return t.onSubmit()
                })), Ro(4, "div", 4), Ro(5, "label", 5), Ko(6, "Adresse e-mail :"), No(), Mo(7, "input", 6), Ao(8, pg, 3, 2, "div", 7), No(), Ro(9, "div", 4), Ro(10, "label", 8), Ko(11, "Mot de passe :"), No(), Mo(12, "input", 9), Ao(13, mg, 2, 1, "div", 7), No(), Ro(14, "div", 4), Ro(15, "button", 10), Ko(16, " CONNEXION "), No(), No(), No()), 2 & e && (Er(2), Po("ngIf", t.errorMessage), Er(1), Po("formGroup", t.loginForm), Er(4), $o("is-invalid", t.loginForm.get("email").invalid && t.loginForm.get("email").touched), Er(1), Po("ngIf", t.loginForm.get("email").invalid && t.loginForm.get("email").touched), Er(4), $o("is-invalid", t.loginForm.get("password").invalid && t.loginForm.get("password").touched), Er(1), Po("ngIf", t.loginForm.get("password").invalid && t.loginForm.get("password").touched), Er(2), Po("disabled", !t.loginForm.valid))
              },
              directives: [Vl, Gm, Lv, $m, Ov, Vv, og],
              styles: ["h1[_ngcontent-%COMP%]{margin-bottom:20px}.button-login[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}.button-login[_ngcontent-%COMP%]{display:block;border-radius:0;border:none;background-color:#d4e157;color:#fff;width:100%;padding:10px 0;font-weight:700}"]
            }), gg)
          }]
        }],
        Tg = ((kg = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: kg
        }), kg.\u0275inj = de({
          factory: function (e) {
            return new(e || kg)
          },
          imports: [
            [Yp.forRoot(Og)], Yp
          ]
        }), kg),
        Ig = ((_g = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: _g
        }), _g.\u0275inj = de({
          factory: function (e) {
            return new(e || _g)
          },
          imports: [
            [Jl, Yp, Ch, cg, Tg]
          ]
        }), _g),
        Pg = function () {
          return {}
        },
        Fg = ((Ag = function () {
          function e(t) {
            _classCallCheck(this, e), this.authService = t, this.navbarOpen = !1
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.getUser()
            }
          }, {
            key: "getUser",
            value: function () {
              var e = this;
              this.authService.user().subscribe((function (t) {
                return e.user = t
              }), (function (t) {
                t instanceof Qc && 401 === t.status && e.authService.logoutUser()
              }))
            }
          }, {
            key: "sidebar",
            value: function () {
              this.status = !this.status
            }
          }, {
            key: "toggleNavbar",
            value: function () {
              this.navbarOpen = !this.navbarOpen
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Ag)(Oo(hv))
        }, Ag.\u0275cmp = ft({
          type: Ag,
          selectors: [
            ["app-admins-main"]
          ],
          decls: 60,
          vars: 4,
          consts: [
            [1, "header"],
            [1, "toggle-btn", 3, "click"],
            ["id", "sidebar", 3, "ngClass"],
            [1, "float-right", "btn-close", 3, "click"],
            [1, "sidebar-sticky"],
            [1, "nav", "flex-column"],
            [1, "nav-item"],
            ["routerLink", "/administrator/dashboard", "routerLinkActive", "active", 1, "nav-link", 3, "ngClass"],
            ["routerLink", "/administrator/banks", "routerLinkActive", "active", 1, "nav-link"],
            ["routerLink", "/administrator/townhalls", "routerLinkActive", "active", 1, "nav-link"],
            ["routerLink", "/administrator/associations", "routerLinkActive", "active", 1, "nav-link"],
            ["routerLink", "/administrator/households", "routerLinkActive", "active", 1, "nav-link"],
            ["data-feather", "users"],
            ["routerLink", "/administrator/needs", "routerLinkActive", "active", 1, "nav-link"],
            ["data-feather", "bar-chart-2"],
            ["routerLink", "/administrator/suppliers", "routerLinkActive", "active", 1, "nav-link"],
            ["routerLink", "/administrator/sensitization/sms", "routerLinkActive", "active", 1, "nav-link"],
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
          template: function (e, t) {
            var n, r, i;
            1 & e && (Ro(0, "header", 0), Ro(1, "div", 1), jo("click", (function () {
              return t.sidebar()
            })), Mo(2, "span"), Mo(3, "span"), Mo(4, "span"), No(), No(), Ro(5, "div", 2), Ro(6, "button", 3), jo("click", (function () {
              return t.sidebar()
            })), Ko(7, "X"), No(), Ro(8, "nav"), Ro(9, "div", 4), Ro(10, "ul", 5), Ro(11, "li", 6), Ro(12, "a", 7), Ko(13, " Tableau de Bord "), No(), No(), Ro(14, "li", 6), Ro(15, "a", 8), Ko(16, " Banques "), No(), No(), Ro(17, "li", 6), Ro(18, "a", 9), Ko(19, " Municipalit\xe9 "), No(), No(), Ro(20, "li", 6), Ro(21, "a", 10), Ko(22, " AVEC "), No(), No(), Ro(23, "li", 6), Ro(24, "a", 11), Mo(25, "span", 12), Ko(26, " M\xe9nages "), No(), No(), Ro(27, "li", 6), Ro(28, "a", 13), Mo(29, "span", 14), Ko(30, " Appels d'offre "), No(), No(), Ro(31, "li", 6), Ro(32, "a", 15), Mo(33, "span", 14), Ko(34, " Fournisseurs "), No(), No(), Ro(35, "li", 6), Ro(36, "a", 16), Mo(37, "span", 17), Ko(38, " Sensibilisations "), No(), No(), No(), Ro(39, "h6", 18), Ro(40, "span"), Ko(41, "Param\xe8trages"), No(), Ro(42, "a", 19), Mo(43, "span", 20), No(), No(), Ro(44, "ul", 21), Ro(45, "li", 6), Ro(46, "a", 22), Mo(47, "span", 23), Ko(48, " Changer de mot de passe "), No(), No(), Ro(49, "li", 6), Ro(50, "a", 24), Mo(51, "span", 23), Ko(52, " Administrateurs "), No(), No(), Ro(53, "li", 6), Ro(54, "a", 25), jo("click", (function () {
              return t.authService.logoutUser()
            })), Ko(55, "D\xe9connexion"), No(), No(), No(), No(), No(), No(), Ro(56, "div", 26), Ro(57, "div", 27), Ro(58, "main", 28), Mo(59, "router-outlet"), No(), No(), No()), 2 & e && (Er(5), Po("ngClass", t.status ? "sidebar-close" : "sidebar-open"), Er(7), Po("ngClass", (n = Pg, r = Xt() + 3, (i = Bt())[r] === wr ? wo(i, r, n()) : function (e, t) {
              return e[t]
            }(i, r))), Er(44), Po("ngClass", t.status ? "main-yes" : "main-no"))
          },
          directives: [Rl, Pp, Vp, Up],
          styles: [".logo[_ngcontent-%COMP%]{width:50%;margin-bottom:20px}"]
        }), Ag),
        Rg = ((xg = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/townHalls/"
          }
          return _createClass(e, [{
            key: "getTownhalls",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "getTownhall",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "setTownhall",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "putTownhall",
            value: function (e) {
              return this.http.put(this.baseUrl, e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || xg)(Je(ah))
        }, xg.\u0275prov = fe({
          token: xg,
          factory: xg.\u0275fac,
          providedIn: "root"
        }), xg),
        Ng = ((Eg = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.url = "https://api.csss-ci.com/rest/v1/associations/"
          }
          return _createClass(e, [{
            key: "gets",
            value: function () {
              return this.http.get(this.url)
            }
          }, {
            key: "getAssociation",
            value: function (e) {
              return this.http.get(this.url + e)
            }
          }, {
            key: "setAssociation",
            value: function (e) {
              return this.http.post(this.url, e)
            }
          }, {
            key: "putAssociation",
            value: function (e) {
              return this.http.put(this.url, e)
            }
          }, {
            key: "town",
            value: function () {
              return this.http.get(this.url + "town")
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Eg)(Je(ah))
        }, Eg.\u0275prov = fe({
          token: Eg,
          factory: Eg.\u0275fac,
          providedIn: "root"
        }), Eg),
        Mg = ((Sg = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/households/"
          }
          return _createClass(e, [{
            key: "getHouseHolds",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "getHouseHold",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "setHouseHold",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "town",
            value: function () {
              return this.http.get(this.baseUrl + "town")
            }
          }, {
            key: "association",
            value: function () {
              return this.http.get(this.baseUrl + "association")
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Sg)(Je(ah))
        }, Sg.\u0275prov = fe({
          token: Sg,
          factory: Sg.\u0275fac,
          providedIn: "root"
        }), Sg),
        Dg = ((wg = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/suppliers/"
          }
          return _createClass(e, [{
            key: "getSuppliers",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "getSupplier",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "setSupplier",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "getDomains",
            value: function () {
              return this.http.get(this.baseUrl + "services")
            }
          }, {
            key: "town",
            value: function () {
              return this.http.get(this.baseUrl + "town")
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || wg)(Je(ah))
        }, wg.\u0275prov = fe({
          token: wg,
          factory: wg.\u0275fac,
          providedIn: "root"
        }), wg),
        Vg = ((bg = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/needs/"
          }
          return _createClass(e, [{
            key: "get",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "gets",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "set",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "put",
            value: function (e) {
              return this.http.put(this.baseUrl, e)
            }
          }, {
            key: "town",
            value: function () {
              return this.http.get(this.baseUrl + "town")
            }
          }, {
            key: "association",
            value: function () {
              return this.http.get(this.baseUrl + "association")
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || bg)(Je(ah))
        }, bg.\u0275prov = fe({
          token: bg,
          factory: bg.\u0275fac,
          providedIn: "root"
        }), bg),
        Lg = ((Cg = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/complaints/"
          }
          return _createClass(e, [{
            key: "gets",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "get",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "set",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "put",
            value: function (e) {
              return this.http.put(this.baseUrl, e)
            }
          }, {
            key: "town",
            value: function () {
              return this.http.get(this.baseUrl + "town")
            }
          }, {
            key: "association",
            value: function () {
              return this.http.get(this.baseUrl + "association")
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Cg)(Je(ah))
        }, Cg.\u0275prov = fe({
          token: Cg,
          factory: Cg.\u0275fac,
          providedIn: "root"
        }), Cg);

      function jg(e, t) {
        if (1 & e && (Ro(0, "p", 15), Ro(1, "span"), Ko(2, "Salut, "), Ro(3, "b"), Ko(4), No(), No(), Ro(5, "span"), Ko(6, "Voici ce qui se passe aujourd'hui."), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.user.name)
        }
      }

      function Ug(e, t) {
        if (1 & e && (Ro(0, "div", 16), Ro(1, "p", 17), Ko(2, "Municipalit\xe9s"), No(), Ro(3, "p", 18), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.townhalls.length)
        }
      }

      function Hg(e, t) {
        if (1 & e && (Ro(0, "div", 16), Ro(1, "p", 17), Ko(2, "A.V.E.Cs"), No(), Ro(3, "p", 18), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.associations.length)
        }
      }

      function qg(e, t) {
        if (1 & e && (Ro(0, "div", 16), Ro(1, "p", 17), Ko(2, "M\xe9nages"), No(), Ro(3, "p", 18), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.households.length)
        }
      }

      function zg(e, t) {
        if (1 & e && (Ro(0, "p", 18), Ko(1), No()), 2 & e) {
          var n = qo(2);
          Er(1), Xo(n.suppliers.length)
        }
      }

      function Gg(e, t) {
        1 & e && (Ro(0, "p", 18), Ko(1, "0"), No())
      }

      function Bg(e, t) {
        if (1 & e && (Ro(0, "div", 16), Ro(1, "p", 17), Ko(2, "Fournisseurs"), No(), Ao(3, zg, 2, 1, "p", 19), Ao(4, Gg, 2, 0, "p", 19), No()), 2 & e) {
          var n = qo();
          Er(3), Po("ngIf", n.suppliers), Er(1), Po("ngIf", !n.suppliers)
        }
      }

      function Wg(e, t) {
        if (1 & e && (Ro(0, "div", 14), Ro(1, "p", 20), Ko(2), Mo(3, "br"), Ko(4, " Besoins exprim\xe9s "), No(), No()), 2 & e) {
          var n = qo();
          Er(2), ea("", n.needs.length, " ")
        }
      }

      function $g(e, t) {
        if (1 & e && (Ro(0, "p", 21), Ko(1), Mo(2, "br"), Ko(3, " Plaintes "), No()), 2 & e) {
          var n = qo();
          Er(1), ea(" ", n.complaints.length, " ")
        }
      }
      var Zg, Qg, Jg, Yg = ((Jg = function () {
          function e(t, n, r, i, o, a, s, u) {
            _classCallCheck(this, e), this.authService = t, this.townhallsService = n, this.associationsService = r, this.householdsService = i, this.suppliersService = o, this.needsService = a, this.complaintsService = s, this.router = u
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.getUser(), this.getTownHalls(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
            }
          }, {
            key: "getUser",
            value: function () {
              var e = this;
              this.authService.user().subscribe((function (t) {
                return e.user = t
              }), (function (t) {
                t instanceof Qc && 401 === t.status && e.router.navigate(["/login"])
              }))
            }
          }, {
            key: "getComplaints",
            value: function () {
              var e = this;
              this.complaintsService.gets().subscribe((function (t) {
                return e.complaints = t
              }))
            }
          }, {
            key: "getTownHalls",
            value: function () {
              var e = this;
              this.townhallsService.getTownhalls().subscribe((function (t) {
                return e.townhalls = t
              }))
            }
          }, {
            key: "getAssociations",
            value: function () {
              var e = this;
              this.associationsService.gets().subscribe((function (t) {
                return e.associations = t
              }))
            }
          }, {
            key: "getHouseholds",
            value: function () {
              var e = this;
              this.householdsService.getHouseHolds().subscribe((function (t) {
                return e.households = t
              }))
            }
          }, {
            key: "getSuppliers",
            value: function () {
              var e = this;
              this.suppliersService.getSuppliers().subscribe((function (t) {
                return e.suppliers = t
              }))
            }
          }, {
            key: "getNeeds",
            value: function () {
              var e = this;
              this.needsService.gets().subscribe((function (t) {
                return e.needs = t
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Jg)(Oo(hv), Oo(Rg), Oo(Ng), Oo(Mg), Oo(Dg), Oo(Vg), Oo(Lg), Oo(Tp))
        }, Jg.\u0275cmp = ft({
          type: Jg,
          selectors: [
            ["app-admins-dashboard"]
          ],
          decls: 43,
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
            ["routerLink", "/administrator/needs", 1, "bouton"],
            [1, "col-lg-4", "text-center"],
            ["class", "big-title-green", 4, "ngIf"],
            [1, "text-center"],
            ["routerLink", "/administrator/complaints"],
            [1, "col-lg-4"],
            [1, "connected"],
            [1, "cadre"],
            [1, "title"],
            [1, "value"],
            ["class", "value", 4, "ngIf"],
            [1, "big-title"],
            [1, "big-title-green"]
          ],
          template: function (e, t) {
            1 & e && (Ao(0, jg, 7, 1, "p", 0), Ro(1, "section", 1), Ro(2, "div", 2), Ao(3, Ug, 5, 1, "div", 3), No(), Ro(4, "div", 2), Ao(5, Hg, 5, 1, "div", 3), No(), Ro(6, "div", 2), Ao(7, qg, 5, 1, "div", 3), No(), Ro(8, "div", 2), Ao(9, Bg, 5, 2, "div", 3), No(), No(), Ro(10, "section", 4), Ro(11, "div", 5), Ro(12, "div", 6), Ro(13, "h2"), Ko(14, "Expressions des besoins"), No(), Ro(15, "div", 5), Ao(16, Wg, 5, 1, "div", 7), Ro(17, "div", 8), Ro(18, "p"), Ko(19, " Besoins Trait\xe9s: 0"), No(), Ro(20, "p"), Ko(21, " Sans r\xe9actions: 1"), No(), No(), Ro(22, "div", 2), Ro(23, "a", 9), Ko(24, "Voir plus"), No(), No(), No(), No(), Ro(25, "div", 10), Ao(26, $g, 4, 1, "p", 11), Ro(27, "p", 12), Ro(28, "a", 13), Ko(29, "Voir toutes les plaintes"), No(), No(), No(), No(), No(), Ro(30, "section", 4), Ro(31, "h2"), Ko(32, "Bilan financiers"), No(), Ro(33, "div", 5), Ro(34, "div", 14), Ro(35, "p"), Ko(36, " Besoins exprim\xe9s: 45"), No(), No(), Ro(37, "div", 14), Ro(38, "p"), Ko(39, " Besoins Trait\xe9s: 45"), No(), No(), Ro(40, "div", 14), Ro(41, "p"), Ko(42, " Nombre de plaintes: 86"), No(), No(), No(), No()), 2 & e && (Po("ngIf", t.user), Er(3), Po("ngIf", t.townhalls), Er(2), Po("ngIf", t.associations), Er(2), Po("ngIf", t.households), Er(2), Po("ngIf", t.suppliers), Er(7), Po("ngIf", t.needs), Er(10), Po("ngIf", t.complaints))
          },
          directives: [Vl, Pp],
          styles: [".enumeration[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin-bottom:40px}.enumeration[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;display:block;text-align:center;color:#827717;font-weight:600}.enumeration[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-family:Roboto Condensed,sans-serif;font-weight:600;font-size:21px;color:#000}.enumeration[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]{border:1px solid #e0e0e0;padding:20px}"]
        }), Jg),
        Kg = ((Qg = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/admins/"
          }
          return _createClass(e, [{
            key: "setAdmin",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "getAdmins",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "getAdmin",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "putAdmin",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Qg)(Je(ah))
        }, Qg.\u0275prov = fe({
          token: Qg,
          factory: Qg.\u0275fac,
          providedIn: "root"
        }), Qg),
        Xg = ((Zg = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.adminsService = t, this.fb = n, this.router = r
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.createForm()
            }
          }, {
            key: "createForm",
            value: function () {
              this.adminForm = this.fb.group({
                admin: ["", zv.required],
                email: ["", [zv.required, zv.email]]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.adminsService.setAdmin(this.adminForm.value).subscribe((function (t) {
                e.router.navigate(["/adminstrator/list"])
              }), (function (t) {
                e.errorMessage = t.message
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Zg)(Oo(Kg), Oo(lg), Oo(Tp))
        }, Zg.\u0275cmp = ft({
          type: Zg,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Administrateur"), No(), Mo(2, "hr"), Ro(3, "div", 0), Ro(4, "h2"), Ko(5, "Ajouter Administrateur"), No(), Ro(6, "form", 1), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(7, "div", 2), Ro(8, "label", 3), Ko(9, "Nom et prenoms"), No(), Mo(10, "input", 4), No(), Ro(11, "div", 2), Ro(12, "label", 5), Ko(13, "Adresse e-mail"), No(), Mo(14, "input", 6), No(), Ro(15, "div", 2), Ro(16, "button", 7), Ko(17, "ENREGISTRER"), No(), No(), No(), No()), 2 & e && (Er(6), Po("formGroup", t.adminForm), Er(10), Po("disabled", !t.adminForm.valid))
          },
          directives: [Gm, Lv, $m, Ov, Vv, og, sg],
          styles: [""]
        }), Zg);

      function ey(e, t) {
        if (1 & e && (Ro(0, "div", 9), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), Xo(n.errorMessage)
        }
      }

      function ty(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.admin), Er(2), Xo(n.email)
        }
      }
      var ny, ry, iy, oy, ay = ((oy = function () {
          function e(t) {
            _classCallCheck(this, e), this.adminsService = t
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.getAdmins()
            }
          }, {
            key: "getAdmins",
            value: function () {
              var e = this;
              this.adminsService.getAdmins().subscribe((function (t) {
                e.admins = t
              }), (function (t) {
                e.errorMessage = t.message
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || oy)(Oo(Kg))
        }, oy.\u0275cmp = ft({
          type: oy,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Administrateurs"), No(), Ro(2, "h3"), Ro(3, "a", 0), Ko(4, "AJOUTER"), No(), No(), Ro(5, "nav", 1), Ro(6, "ol", 2), Ro(7, "li", 3), Ro(8, "a", 4), Ko(9, "Tableau de bord"), No(), No(), Ro(10, "li", 5), Ko(11, "Administrateurs"), No(), No(), No(), Ao(12, ey, 2, 1, "div", 6), Ro(13, "table", 7), Ro(14, "thead"), Ro(15, "th"), Ko(16, "Admin"), No(), Ro(17, "th"), Ko(18, "E-mail"), No(), No(), Ro(19, "tbody"), Ao(20, ty, 5, 2, "tr", 8), No(), No()), 2 & e && (Er(12), Po("ngIf", t.errorMessage), Er(8), Po("ngForOf", t.admins))
          },
          directives: [Pp, Vl, Ml],
          styles: [""]
        }), oy),
        sy = ((iy = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || iy)
        }, iy.\u0275cmp = ft({
          type: iy,
          selectors: [
            ["app-sensitization-main"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Sensibilisations"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), iy),
        uy = ((ry = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ry)
        }, ry.\u0275cmp = ft({
          type: ry,
          selectors: [
            ["app-sms-main"]
          ],
          decls: 1,
          vars: 0,
          template: function (e, t) {
            1 & e && Mo(0, "router-outlet")
          },
          directives: [Up],
          styles: [""]
        }), ry),
        ly = ((ny = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/sensitizations"
          }
          return _createClass(e, [{
            key: "set",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "setAll",
            value: function (e) {
              return this.http.post(this.baseUrl + "/all", e)
            }
          }, {
            key: "setChiefs",
            value: function (e) {
              return this.http.post(this.baseUrl + "/chiefs", e)
            }
          }, {
            key: "setAssociation",
            value: function (e) {
              return this.http.post(this.baseUrl + "/association", e)
            }
          }, {
            key: "gets",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "get",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ny)(Je(ah))
        }, ny.\u0275prov = fe({
          token: ny,
          factory: ny.\u0275fac,
          providedIn: "root"
        }), ny);

      function cy(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.message), Er(2), Xo(n.recipient), Er(2), Xo(n.messageDate)
        }
      }
      var hy, fy = ((hy = function () {
        function e(t) {
          _classCallCheck(this, e), this.messagesService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getSms()
          }
        }, {
          key: "getSms",
          value: function () {
            var e = this;
            this.messagesService.gets().subscribe((function (t) {
              e.messages = t
            }), (function (e) {
              console.error()
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || hy)(Oo(ly))
      }, hy.\u0275cmp = ft({
        type: hy,
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
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ko(1, " SMS envoy\xe9s\n"), No(), Ro(2, "div"), Ro(3, "a", 0), Ko(4, "Envoyer Message Vocal"), No(), Ro(5, "a", 1), Ko(6, "Envoyer sms"), No(), Ro(7, "a", 2), Ko(8, "Envoyer sms une AVEC"), No(), Ro(9, "a", 3), Ko(10, "Envoyer sms \xe0 toutes les AVECs"), No(), Ro(11, "a", 4), Ko(12, "Envoyer SMS aux presidents d'AVEC"), No(), No(), Ro(13, "table", 5), Ro(14, "tbody"), Ao(15, cy, 7, 3, "tr", 6), No(), No()), 2 & e && (Er(15), Po("ngForOf", t.messages))
        },
        directives: [Pp, Ml],
        styles: [""]
      }), hy);

      function dy(e, t) {
        if (1 & e && (Ro(0, "div", 10), Ko(1), fs(2, "json"), No()), 2 & e) {
          var n = qo();
          Er(1), Xo(ds(2, 1, n.errorMessage))
        }
      }

      function py(e, t) {
        if (1 & e && (Ro(0, "div", 11), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), Xo(n.successMessage)
        }
      }
      var vy, my, gy, yy = ((gy = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.messagesService = t, this.fb = n
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.createForm()
            }
          }, {
            key: "createForm",
            value: function () {
              this.smsForm = this.fb.group({
                message: ["", zv.required],
                recipient: ["", [zv.required, zv.minLength(11)]]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.messagesService.set(this.smsForm.value).subscribe((function (t) {
                e.successMessage = "Message envoy\xe9 avec succ\xe8s"
              }), (function (t) {
                e.errorMessage = "Une erreur s'est produite, message non envoy\xe9"
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || gy)(Oo(ly), Oo(lg))
        }, gy.\u0275cmp = ft({
          type: gy,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h3"), Ro(1, "a", 0), Ko(2, "Retour"), No(), Ko(3, " Envoi de SMS\n"), No(), Ro(4, "div", 1), Ao(5, dy, 3, 3, "div", 2), Ao(6, py, 2, 1, "div", 3), Ro(7, "form", 4), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(8, "div", 5), Ro(9, "label", 6), Ko(10, "Destinataires"), No(), Mo(11, "input", 7), No(), Ro(12, "div", 5), Ro(13, "label", 6), Ko(14, "Message"), No(), Mo(15, "textarea", 8), No(), Ro(16, "div", 5), Ro(17, "button", 9), Ko(18, "Envoyer"), No(), No(), No(), No()), 2 & e && (Er(5), Po("ngIf", t.errorMessage), Er(1), Po("ngIf", t.successMessage), Er(1), Po("formGroup", t.smsForm), Er(10), Po("disabled", !t.smsForm.valid))
          },
          directives: [Pp, Vl, Gm, Lv, $m, Ov, Vv, og],
          pipes: [Ql],
          styles: [""]
        }), gy),
        _y = ((my = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.messagesService = t, this.fb = n, this.router = r
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.createForm()
            }
          }, {
            key: "createForm",
            value: function () {
              this.smsForm = this.fb.group({
                message: ["", zv.required]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.messagesService.setAll(this.smsForm.value).subscribe((function (t) {
                e.router.navigate(["/administrator/sensitization/sms"])
              }), (function (e) {
                return console.log(e)
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || my)(Oo(ly), Oo(lg), Oo(Tp))
        }, my.\u0275cmp = ft({
          type: my,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h3"), Ro(1, "a", 0), Ko(2, "Retour"), No(), Ko(3, " Envoi de SMS \xe0 toutes les AVEC\n"), No(), Ro(4, "div", 1), Ro(5, "form", 2), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(6, "div", 3), Ro(7, "label", 4), Ko(8, "Message"), No(), Mo(9, "textarea", 5), No(), Ro(10, "div", 3), Ro(11, "button", 6), Ko(12, "Envoyer"), No(), No(), No(), No()), 2 & e && (Er(5), Po("formGroup", t.smsForm), Er(6), Po("disabled", !t.smsForm.valid))
          },
          directives: [Pp, Gm, Lv, $m, Ov, Vv, og],
          styles: [""]
        }), my),
        ky = ((vy = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.messagesService = t, this.fb = n, this.router = r
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.createForm()
            }
          }, {
            key: "createForm",
            value: function () {
              this.smsForm = this.fb.group({
                message: ["", zv.required]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.messagesService.setChiefs(this.smsForm.value).subscribe((function (t) {
                e.router.navigate(["/administrator/sensitization/sms"])
              }), (function (e) {
                return console.log(e)
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || vy)(Oo(ly), Oo(lg), Oo(Tp))
        }, vy.\u0275cmp = ft({
          type: vy,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h3"), Ro(1, "a", 0), Ko(2, "Retour"), No(), Ko(3, " Envoi de SMS aux pr\xe9sidents d'AVEC\n"), No(), Ro(4, "div", 1), Ro(5, "form", 2), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(6, "div", 3), Ro(7, "label", 4), Ko(8, "Message"), No(), Mo(9, "textarea", 5), No(), Ro(10, "div", 3), Ro(11, "button", 6), Ko(12, "Envoyer"), No(), No(), No(), No()), 2 & e && (Er(5), Po("formGroup", t.smsForm), Er(6), Po("disabled", !t.smsForm.valid))
          },
          directives: [Pp, Gm, Lv, $m, Ov, Vv, og],
          styles: [""]
        }), vy);

      function Cy(e, t) {
        if (1 & e && (Ro(0, "option", 10), Ko(1), No()), 2 & e) {
          var n = t.$implicit;
          Po("value", n.idassociation), Er(1), Xo(n.association)
        }
      }
      var by, wy = ((by = function () {
        function e(t, n, r, i) {
          _classCallCheck(this, e), this.messagesService = t, this.associationsService = n, this.fb = r, this.router = i
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.createForm(), this.getAssociations()
          }
        }, {
          key: "getAssociations",
          value: function () {
            var e = this;
            this.associationsService.gets().subscribe((function (t) {
              e.associations = t
            }), (function (e) {
              console.log(e)
            }))
          }
        }, {
          key: "createForm",
          value: function () {
            this.smsForm = this.fb.group({
              recipient: ["", zv.required],
              message: ["", zv.required]
            })
          }
        }, {
          key: "onSubmit",
          value: function () {
            var e = this;
            this.messagesService.setAssociation(this.smsForm.value).subscribe((function (t) {
              e.router.navigate(["/administrator/sensitization/sms"])
            }), (function (e) {
              return console.log(e)
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || by)(Oo(ly), Oo(Ng), Oo(lg), Oo(Tp))
      }, by.\u0275cmp = ft({
        type: by,
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
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ro(1, "a", 0), Ko(2, "Retour"), No(), Ko(3, " Envoi de SMS \xe0 un AVEC\n"), No(), Ro(4, "div", 1), Ro(5, "form", 2), jo("ngSubmit", (function () {
            return t.onSubmit()
          })), Ro(6, "div", 3), Ro(7, "label", 4), Ko(8, "AVEC"), No(), Ro(9, "select", 5), Ro(10, "option", 6), Ko(11, "Choisir"), No(), Ao(12, Cy, 2, 2, "option", 7), No(), No(), Ro(13, "div", 3), Ro(14, "label", 4), Ko(15, "Message"), No(), Mo(16, "textarea", 8), No(), Ro(17, "div", 3), Ro(18, "button", 9), Ko(19, "Envoyer"), No(), No(), No(), No()), 2 & e && (Er(5), Po("formGroup", t.smsForm), Er(7), Po("ngForOf", t.associations), Er(6), Po("disabled", !t.smsForm.valid))
        },
        directives: [Pp, Gm, Lv, $m, dm, Vv, og, pm, km, Ml, Ov],
        styles: [""]
      }), by);

      function Sy(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ro(6, "a", 3), Ko(7, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.association), Er(2), Xo(n.chief), Er(2), zo("routerLink", "/administrator/associations/view/", n.idassociation, "")
        }
      }
      var Ey, xy = ((Ey = function () {
        function e(t) {
          _classCallCheck(this, e), this.associationsService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getAssociations()
          }
        }, {
          key: "getAssociations",
          value: function () {
            var e = this;
            this.associationsService.gets().subscribe((function (t) {
              e.associations = t
            }), (function (e) {
              console.log(e)
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || Ey)(Oo(Ng))
      }, Ey.\u0275cmp = ft({
        type: Ey,
        selectors: [
          ["app-associations-list"]
        ],
        decls: 7,
        vars: 1,
        consts: [
          ["routerLink", "/administrator/associations/add", 1, "bouton", "float-right"],
          [1, "table"],
          [4, "ngFor", "ngForOf"],
          [3, "routerLink"]
        ],
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ko(1, " Liste des associations "), Ro(2, "a", 0), Ko(3, "Ajouter"), No(), No(), Ro(4, "table", 1), Ro(5, "tbody"), Ao(6, Sy, 8, 3, "tr", 2), No(), No()), 2 & e && (Er(6), Po("ngForOf", t.associations))
        },
        directives: [Pp, Ml],
        styles: [""]
      }), Ey);

      function Ay(e, t) {
        if (1 & e && (Ro(0, "div", 16), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), Xo(n.errorMessage)
        }
      }

      function Oy(e, t) {
        1 & e && (Ro(0, "small", 18), Ko(1, "AVEC obligatoire"), No())
      }

      function Ty(e, t) {
        if (1 & e && (Ro(0, "div"), Ao(1, Oy, 2, 0, "small", 17), No()), 2 & e) {
          var n = qo();
          Er(1), Po("ngIf", null == n.associationForm.get("association").errors ? null : n.associationForm.get("association").errors.required)
        }
      }

      function Iy(e, t) {
        1 & e && (Ro(0, "small", 18), Ko(1, "Pr\xe9sident obligatoire"), No())
      }

      function Py(e, t) {
        if (1 & e && (Ro(0, "div"), Ao(1, Iy, 2, 0, "small", 17), No()), 2 & e) {
          var n = qo();
          Er(1), Po("ngIf", null == n.associationForm.get("chief").errors ? null : n.associationForm.get("chief").errors.required)
        }
      }

      function Fy(e, t) {
        1 & e && (Ro(0, "small", 18), Ko(1, "E-mail obligatoire"), No())
      }

      function Ry(e, t) {
        1 & e && (Ro(0, "small", 18), Ko(1, "E-mail invalide"), No())
      }

      function Ny(e, t) {
        if (1 & e && (Ro(0, "div"), Ao(1, Fy, 2, 0, "small", 17), Ao(2, Ry, 2, 0, "small", 17), No()), 2 & e) {
          var n = qo();
          Er(1), Po("ngIf", null == n.associationForm.get("email").errors ? null : n.associationForm.get("email").errors.required), Er(1), Po("ngIf", null == n.associationForm.get("email").errors ? null : n.associationForm.get("email").errors.email)
        }
      }

      function My(e, t) {
        1 & e && (Ro(0, "small", 18), Ko(1, "T\xe9l\xe9phone obligatoire"), No())
      }

      function Dy(e, t) {
        if (1 & e && (Ro(0, "div"), Ao(1, My, 2, 0, "small", 17), No()), 2 & e) {
          var n = qo();
          Er(1), Po("ngIf", null == n.associationForm.get("phone").errors ? null : n.associationForm.get("phone").errors.required)
        }
      }
      var Vy, Ly, jy, Uy, Hy, qy = ((Hy = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.associationsService = t, this.fb = n
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.createForm()
            }
          }, {
            key: "createForm",
            value: function () {
              this.associationForm = this.fb.group({
                association: ["", zv.required],
                receipt: [""],
                chief: ["", zv.required],
                phone: ["", zv.required],
                email: ["", [zv.required, zv.email]]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.associationsService.setAssociation(this.associationForm.value).subscribe((function (e) {}), (function (t) {
                t instanceof Qc && (500 === t.status && (e.errorMessage = "Vous devriez \xeatre un agent de mairie"), 401 === t.status && (e.errorMessage = "Session invalide, veuillez vous connecter"))
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Hy)(Oo(Ng), Oo(lg))
        }, Hy.\u0275cmp = ft({
          type: Hy,
          selectors: [
            ["app-associations-add"]
          ],
          decls: 34,
          vars: 17,
          consts: [
            [1, "col-lg-8"],
            ["class", "alert alert-danger", 4, "ngIf"],
            [3, "formGroup", "ngSubmit"],
            [1, "form-group"],
            ["for", "association"],
            ["type", "text", "name", "association", "formControlName", "association", "id", "association", "placeholder", "AVEC", 1, "form-control"],
            [4, "ngIf"],
            ["for", "chief"],
            ["type", "text", "name", "chief", "formControlName", "chief", "id", "chief", 1, "form-control"],
            ["for", "receipt"],
            ["type", "text", "name", "receipt", "formControlName", "receipt", "id", "receipt", 1, "form-control"],
            ["for", "email"],
            ["type", "email", "name", "email", "formControlName", "email", "id", "email", "placeholder", "ADRESSE E-MAIL", 1, "form-control"],
            ["for", "phone"],
            ["type", "tel", "name", "phone", "formControlName", "phone", "id", "phone", "placeholder", "01020102", 1, "form-control"],
            ["type", "submit", 1, "bouton", 3, "disabled"],
            [1, "alert", "alert-danger"],
            ["class", "text-danger", 4, "ngIf"],
            [1, "text-danger"]
          ],
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Associations"), No(), Ro(2, "div", 0), Ro(3, "h3"), Ko(4, "Ajouter une association"), No(), Ao(5, Ay, 2, 1, "div", 1), Ro(6, "form", 2), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(7, "div", 3), Ro(8, "label", 4), Ko(9, "Nom d'AVEC :"), No(), Mo(10, "input", 5), Ao(11, Ty, 2, 1, "div", 6), No(), Ro(12, "div", 3), Ro(13, "label", 7), Ko(14, "Pr\xe9sident d'AVEC :"), No(), Mo(15, "input", 8), Ao(16, Py, 2, 1, "div", 6), No(), Ro(17, "div", 3), Ro(18, "label", 9), Ko(19, "Num\xe9ro de r\xe9c\xe9piss\xe9 :"), No(), Mo(20, "input", 10), No(), Ro(21, "div", 3), Ro(22, "label", 11), Ko(23, "Adresse e-mail :"), No(), Mo(24, "input", 12), Ao(25, Ny, 3, 2, "div", 6), No(), Ro(26, "div", 3), Ro(27, "label", 13), Ko(28, "T\xe9l\xe9phone :"), No(), Mo(29, "input", 14), Ao(30, Dy, 2, 1, "div", 6), No(), Ro(31, "div", 3), Ro(32, "button", 15), Ko(33, " CONNEXION "), No(), No(), No(), No()), 2 & e && (Er(5), Po("ngIf", t.errorMessage), Er(1), Po("formGroup", t.associationForm), Er(4), $o("is-invalid", t.associationForm.get("association").invalid && t.associationForm.get("association").touched), Er(1), Po("ngIf", t.associationForm.get("association").invalid && t.associationForm.get("association").touched), Er(4), $o("is-invalid", t.associationForm.get("chief").invalid && t.associationForm.get("chief").touched), Er(1), Po("ngIf", t.associationForm.get("chief").invalid && t.associationForm.get("chief").touched), Er(4), $o("is-invalid", t.associationForm.get("receipt").invalid && t.associationForm.get("receipt").touched), Er(4), $o("is-invalid", t.associationForm.get("email").invalid && t.associationForm.get("email").touched), Er(1), Po("ngIf", t.associationForm.get("email").invalid && t.associationForm.get("email").touched), Er(4), $o("is-invalid", t.associationForm.get("phone").invalid && t.associationForm.get("phone").touched), Er(1), Po("ngIf", t.associationForm.get("phone").invalid && t.associationForm.get("phone").touched), Er(2), Po("disabled", !t.associationForm.valid))
          },
          directives: [Vl, Gm, Lv, $m, Ov, Vv, og],
          styles: [""]
        }), Hy),
        zy = ((Uy = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Uy)
        }, Uy.\u0275cmp = ft({
          type: Uy,
          selectors: [
            ["app-associations-view"]
          ],
          decls: 2,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h3"), Ko(1, "En d\xe9v\xe9loppement"), No())
          },
          styles: [""]
        }), Uy),
        Gy = ((jy = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.authService = t, this.router = n
          }
          return _createClass(e, [{
            key: "canActivate",
            value: function (e, t) {
              return !!this.authService.loggedIn() || (this.router.navigate(["/login"]), !1)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || jy)(Je(hv), Je(Tp))
        }, jy.\u0275prov = fe({
          token: jy,
          factory: jy.\u0275fac,
          providedIn: "root"
        }), jy),
        By = ((Ly = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Ly)
        }, Ly.\u0275cmp = ft({
          type: Ly,
          selectors: [
            ["app-banks-main"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Banques"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), Ly),
        Wy = ((Vy = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/banks/"
          }
          return _createClass(e, [{
            key: "gets",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "get",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "set",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "put",
            value: function (e) {
              return this.http.put(this.baseUrl, e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Vy)(Je(ah))
        }, Vy.\u0275prov = fe({
          token: Vy,
          factory: Vy.\u0275fac,
          providedIn: "root"
        }), Vy);

      function $y(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ro(4, "a", 3), Ko(5, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.bank)
        }
      }
      var Zy, Qy, Jy, Yy = ((Jy = function () {
          function e(t) {
            _classCallCheck(this, e), this.banksService = t
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.getBanks()
            }
          }, {
            key: "getBanks",
            value: function () {
              var e = this;
              this.banksService.gets().subscribe((function (t) {
                return e.banks = t
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Jy)(Oo(Wy))
        }, Jy.\u0275cmp = ft({
          type: Jy,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h3"), Ko(1, " Liste des banques "), Ro(2, "a", 0), Ko(3, "Ajouter"), No(), No(), Ro(4, "table", 1), Ro(5, "tbody"), Ao(6, $y, 6, 1, "tr", 2), No(), No()), 2 & e && (Er(6), Po("ngForOf", t.banks))
          },
          directives: [Pp, Ml],
          styles: [""]
        }), Jy),
        Ky = ((Qy = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.banksService = t, this.fb = n, this.router = r
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.createForm()
            }
          }, {
            key: "createForm",
            value: function () {
              this.bankForm = this.fb.group({
                bank: ["", zv.required],
                banker: ["", zv.required],
                email: ["", [zv.required, zv.email]],
                phone: ["", zv.required]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.banksService.set(this.bankForm.value).subscribe((function (t) {
                return e.router.navigate(["/administrator/banks"])
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Qy)(Oo(Wy), Oo(lg), Oo(Tp))
        }, Qy.\u0275cmp = ft({
          type: Qy,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h3"), Ko(1, "Ajouter une banque"), No(), Ro(2, "div", 0), Ro(3, "form", 1), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(4, "div", 2), Ro(5, "label", 3), Ko(6, "Banque"), No(), Mo(7, "input", 4), No(), Ro(8, "div", 2), Ro(9, "label", 5), Ko(10, "Agent de banque"), No(), Mo(11, "input", 6), No(), Ro(12, "div", 2), Ro(13, "label", 7), Ko(14, "T\xe9l\xe9phone"), No(), Mo(15, "input", 8), No(), Ro(16, "div", 2), Ro(17, "label", 9), Ko(18, "E-mail"), No(), Mo(19, "input", 10), No(), Ro(20, "div", 2), Ro(21, "button", 11), Ko(22, " Enr\xe9gistrer "), No(), No(), No(), No()), 2 & e && (Er(3), Po("formGroup", t.bankForm), Er(18), Po("disabled", !t.bankForm.valid))
          },
          directives: [Gm, Lv, $m, Ov, Vv, og],
          styles: [""]
        }), Qy),
        Xy = ((Zy = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Zy)
        }, Zy.\u0275cmp = ft({
          type: Zy,
          selectors: [
            ["app-complaints-main"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Plaintes"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), Zy);

      function e_(e, t) {
        if (1 & e) {
          var n = Do();
          Ro(0, "tr", 7), jo("click", (function () {
            $t(n);
            var e = t.$implicit;
            return qo(2).onSelected(e)
          })), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), No()
        }
        if (2 & e) {
          var r = t.$implicit,
            i = qo(2);
          Er(2), ea("", i.textLimit(r.complaint), "..."), Er(2), Xo(r.household), Er(2), Xo(r.complaintDate)
        }
      }

      function t_(e, t) {
        if (1 & e && (Ro(0, "div", 1), Ro(1, "div", 2), Ro(2, "h3"), Ko(3, "Liste de plaintes"), No(), Ro(4, "div", 3), Ko(5, " Clique sur la ligne de la plainte pour voir les details "), No(), Mo(6, "br"), Ro(7, "table", 4), Ro(8, "tbody"), Ao(9, e_, 7, 3, "tr", 5), No(), No(), No(), Ro(10, "div", 6), Mo(11, "router-outlet"), No(), No()), 2 & e) {
          var n = qo();
          Er(9), Po("ngForOf", n.complaints)
        }
      }
      var n_, r_ = ((n_ = function () {
        function e(t, n, r) {
          _classCallCheck(this, e), this.complaintsService = t, this.activatedRoute = n, this.router = r
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getComplaints()
          }
        }, {
          key: "getComplaints",
          value: function () {
            var e = this;
            this.complaintsService.gets().subscribe((function (t) {
              return e.complaints = t
            }))
          }
        }, {
          key: "onSelected",
          value: function (e) {
            this.router.navigate([e.idcomplaint], {
              relativeTo: this.activatedRoute
            })
          }
        }, {
          key: "textLimit",
          value: function (e) {
            return e.substr(0, 20)
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || n_)(Oo(Lg), Oo(_d), Oo(Tp))
      }, n_.\u0275cmp = ft({
        type: n_,
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
        template: function (e, t) {
          1 & e && Ao(0, t_, 12, 1, "div", 0), 2 & e && Po("ngIf", t.complaints)
        },
        directives: [Vl, Ml, Up],
        styles: [""]
      }), n_);

      function i_(e, t) {
        if (1 & e && (Ro(0, "div"), Ro(1, "h3"), Ko(2, " Detail de Plainte"), No(), Ro(3, "h4"), Ko(4), No(), Ro(5, "p"), Ko(6), No(), Mo(7, "hr"), Ro(8, "small"), Ko(9), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(4), ea(" Plainte de ", n.household, ""), Er(2), Xo(n.complaint), Er(3), ea("Date: ", n.complaintDate, "")
        }
      }

      function o_(e, t) {
        if (1 & e && (Ro(0, "div"), Ao(1, i_, 10, 3, "div", 1), No()), 2 & e) {
          var n = qo();
          Er(1), Po("ngForOf", n.complaint)
        }
      }
      var a_, s_, u_ = ((s_ = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.complaintsService = t, this.activatedRoute = n
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              var e = this;
              this.activatedRoute.params.subscribe((function (t) {
                return e.getComplaint(t.id)
              }))
            }
          }, {
            key: "getComplaint",
            value: function (e) {
              var t = this;
              this.complaintsService.get(e).subscribe((function (e) {
                return t.complaint = e
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || s_)(Oo(Lg), Oo(_d))
        }, s_.\u0275cmp = ft({
          type: s_,
          selectors: [
            ["app-complaints-detail"]
          ],
          decls: 1,
          vars: 1,
          consts: [
            [4, "ngIf"],
            [4, "ngFor", "ngForOf"]
          ],
          template: function (e, t) {
            1 & e && Ao(0, o_, 2, 1, "div", 0), 2 & e && Po("ngIf", t.complaint)
          },
          directives: [Vl, Ml],
          styles: [""]
        }), s_),
        l_ = ((a_ = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || a_)
        }, a_.\u0275cmp = ft({
          type: a_,
          selectors: [
            ["app-voice-main"]
          ],
          decls: 1,
          vars: 0,
          template: function (e, t) {
            1 & e && Mo(0, "router-outlet")
          },
          directives: [Up],
          styles: [""]
        }), a_);

      function c_(e, t) {
        if (1 & e && (Ro(0, "div", 10), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), Xo(n.successMessage)
        }
      }
      var h_, f_ = ((h_ = function () {
        function e(t, n) {
          _classCallCheck(this, e), this.messagesService = t, this.fb = n
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.createForm()
          }
        }, {
          key: "createForm",
          value: function () {
            this.smsForm = this.fb.group({
              message: ["", zv.required],
              recipient: ["", [zv.required, zv.minLength(11)]]
            })
          }
        }, {
          key: "onSubmit",
          value: function () {
            var e = this;
            this.messagesService.set(this.smsForm.value).subscribe((function (e) {}), (function (t) {
              e.errorMessage = "Service momentanement indisponible"
            }), (function () {
              e.errorMessage = "Service momentanement indisponible"
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || h_)(Oo(ly), Oo(lg))
      }, h_.\u0275cmp = ft({
        type: h_,
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
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ro(1, "a", 0), Ko(2, "Retour"), No(), Ko(3, " Envoi de SMS\n"), No(), Ro(4, "div", 1), Ro(5, "div", 2), Ko(6, "Service momentanement indisponible"), No(), Ao(7, c_, 2, 1, "div", 3), Ro(8, "form", 4), jo("ngSubmit", (function () {
            return t.onSubmit()
          })), Ro(9, "div", 5), Ro(10, "label", 6), Ko(11, "Destinataires"), No(), Mo(12, "input", 7), No(), Ro(13, "div", 5), Ro(14, "label", 6), Ko(15, "T\xe9l\xe9charger message"), No(), Mo(16, "input", 8), No(), Ro(17, "div", 5), Ro(18, "button", 9), Ko(19, "Envoyer"), No(), No(), No(), No()), 2 & e && (Er(7), Po("ngIf", t.successMessage), Er(1), Po("formGroup", t.smsForm))
        },
        directives: [Pp, Vl, Gm, Lv, $m, Ov, Vv, og],
        styles: [""]
      }), h_);

      function d_(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ro(4, "a", 3), Ko(5, "voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.townHall), Er(2), zo("routerLink", "/administrator/townhalls/view/", n.idtownHall, "")
        }
      }
      var p_, v_, m_ = ((v_ = function () {
          function e(t) {
            _classCallCheck(this, e), this.townhallsService = t
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.getTownHalls()
            }
          }, {
            key: "getTownHalls",
            value: function () {
              var e = this;
              this.townhallsService.getTownhalls().subscribe((function (t) {
                return e.towns = t
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || v_)(Oo(Rg))
        }, v_.\u0275cmp = ft({
          type: v_,
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
          template: function (e, t) {
            1 & e && (Ro(0, "h3"), Ko(1, " Liste des municipalit\xe9s "), Ro(2, "a", 0), Ko(3, "Ajouter"), No(), No(), Ro(4, "table", 1), Ro(5, "tbody"), Ao(6, d_, 6, 2, "tr", 2), No(), No()), 2 & e && (Er(6), Po("ngForOf", t.towns))
          },
          directives: [Pp, Ml],
          styles: [""]
        }), v_),
        g_ = ((p_ = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.townService = t, this.fb = n
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.createForm()
            }
          }, {
            key: "createForm",
            value: function () {
              this.townForm = this.fb.group({
                townHall: ["", zv.required],
                officer: ["", zv.required],
                email: ["", [zv.required, zv.email]],
                phone: ["", zv.required]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              this.townService.setTownhall(this.townForm.value).subscribe((function (e) {
                return console.log(e)
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || p_)(Oo(Rg), Oo(lg))
        }, p_.\u0275cmp = ft({
          type: p_,
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
          template: function (e, t) {
            1 & e && (Ro(0, "div", 0), Ro(1, "form", 1), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(2, "div", 2), Ro(3, "label", 3), Ko(4, "Municipalit\xe9"), No(), Mo(5, "input", 4), No(), Ro(6, "div", 2), Ro(7, "label", 5), Ko(8, "Agent de mairie"), No(), Mo(9, "input", 6), No(), Ro(10, "div", 2), Ro(11, "label", 7), Ko(12, "T\xe9l\xe9phone"), No(), Mo(13, "input", 8), No(), Ro(14, "div", 2), Ro(15, "label", 9), Ko(16, "E-mail"), No(), Mo(17, "input", 10), No(), Ro(18, "button", 11), Ko(19, "Enr\xe9gistrer"), No(), No(), No()), 2 & e && (Er(1), Po("formGroup", t.townForm), Er(17), Po("disabled", !t.townForm.valid))
          },
          directives: [Gm, Lv, $m, Ov, Vv, og],
          styles: [""]
        }), p_);

      function y_(e, t) {
        if (1 & e && (Ro(0, "div"), Ro(1, "h3"), Ko(2), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.townHall)
        }
      }
      var __, k_, C_ = ((k_ = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.townhallsService = t, this.activatedRoute = n
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.idTownHall = this.activatedRoute.snapshot.params.id, this.getTownHall(this.idTownHall)
            }
          }, {
            key: "getTownHall",
            value: function (e) {
              var t = this;
              this.townhallsService.getTownhall(e).subscribe((function (e) {
                return t.townHall = e
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || k_)(Oo(Rg), Oo(_d))
        }, k_.\u0275cmp = ft({
          type: k_,
          selectors: [
            ["app-townhalls-view"]
          ],
          decls: 1,
          vars: 1,
          consts: [
            [4, "ngFor", "ngForOf"]
          ],
          template: function (e, t) {
            1 & e && Ao(0, y_, 3, 1, "div", 0), 2 & e && Po("ngForOf", t.townHall)
          },
          directives: [Ml],
          styles: [""]
        }), k_),
        b_ = ((__ = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || __)
        }, __.\u0275cmp = ft({
          type: __,
          selectors: [
            ["app-households-main"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "M\xe9nages"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), __);

      function w_(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 3), Ko(9, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.household), Er(2), Xo(n.association), Er(2), Xo(n.cellPhone), Er(2), zo("routerLink", "/administrator/households/view/", n.idhousehold, "")
        }
      }
      var S_, E_ = ((S_ = function () {
        function e(t) {
          _classCallCheck(this, e), this.householdsService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getHouseholds()
          }
        }, {
          key: "getHouseholds",
          value: function () {
            var e = this;
            this.householdsService.getHouseHolds().subscribe((function (t) {
              e.households = t
            }), (function (e) {}))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || S_)(Oo(Mg))
      }, S_.\u0275cmp = ft({
        type: S_,
        selectors: [
          ["app-households-list"]
        ],
        decls: 8,
        vars: 2,
        consts: [
          ["routerLink", "/administrator/households/add", 1, "bouton", "float-right"],
          [1, "table"],
          [4, "ngFor", "ngForOf"],
          [3, "routerLink"]
        ],
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ko(1), Ro(2, "a", 0), Ko(3, " Ajouter "), No(), No(), Ro(4, "table", 1), Mo(5, "thead"), Ro(6, "tbody"), Ao(7, w_, 10, 4, "tr", 2), No(), No()), 2 & e && (Er(1), ea(" Liste des M\xe9nages(", t.households.length, ") "), Er(6), Po("ngForOf", t.households))
        },
        directives: [Pp, Ml],
        styles: [""]
      }), S_);

      function x_(e, t) {
        if (1 & e && (Ro(0, "div", 16), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), ea(" ", n.errorMessage, " ")
        }
      }
      var A_, O_ = ((A_ = function () {
        function e(t, n, r) {
          _classCallCheck(this, e), this.householdsService = t, this.fb = n, this.router = r
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.createForm()
          }
        }, {
          key: "createForm",
          value: function () {
            this.houseForm = this.fb.group({
              household: ["", zv.required],
              familySize: ["", zv.required],
              owner: ["", zv.required],
              address: ["", zv.required],
              cellPhone: ["", zv.required],
              mail: ["", zv.required]
            })
          }
        }, {
          key: "onSubmit",
          value: function () {
            var e = this;
            this.householdsService.setHouseHold(this.houseForm.value).subscribe((function (t) {
              return e.router.navigate(["/associations/households/"])
            }), (function (t) {
              t instanceof Qc && (500 === t.status && (e.errorMessage = "Vous devriez \xeatre president d'association"), 401 === t.status && (e.errorMessage = "Veuillez vous reconnecter"))
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || A_)(Oo(Mg), Oo(lg), Oo(Tp))
      }, A_.\u0275cmp = ft({
        type: A_,
        selectors: [
          ["app-households-add"]
        ],
        decls: 38,
        vars: 5,
        consts: [
          [1, "col-lg-8"],
          ["class", "alert alert-danger", 4, "ngIf"],
          [3, "formGroup", "ngSubmit"],
          [1, "form-group"],
          ["for", ""],
          ["type", "text", "formControlName", "household", "name", "household", 1, "form-control"],
          ["type", "number", "formControlName", "familySize", "name", "familySize", 1, "form-control"],
          ["name", "owner", "id", "owner", "formControlName", "owner", 1, "form-control"],
          ["value", ""],
          [3, "value"],
          ["type", "text", "formControlName", "address", "name", "address", 1, "form-control"],
          ["for", "cellPhone"],
          ["type", "tel", "formControlName", "cellPhone", "name", "cellPhone", 1, "form-control"],
          ["for", "mail"],
          ["type", "email", "formControlName", "mail", "name", "mail", 1, "form-control"],
          ["type", "submit", 1, "bouton", 3, "disabled"],
          [1, "alert", "alert-danger"]
        ],
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ko(1, "Ajouter M\xe9nage"), No(), Ro(2, "div", 0), Ao(3, x_, 2, 1, "div", 1), Ro(4, "form", 2), jo("ngSubmit", (function () {
            return t.onSubmit()
          })), Ro(5, "div", 3), Ro(6, "label", 4), Ko(7, "Nom de la famille"), No(), Mo(8, "input", 5), No(), Ro(9, "div", 3), Ro(10, "label", 4), Ko(11, "Taille de la famille"), No(), Mo(12, "input", 6), No(), Ro(13, "div", 3), Ro(14, "label", 4), Ko(15, "Etes-vous propri\xe9taire ?"), No(), Ro(16, "select", 7), Ro(17, "option", 8), Ko(18, "Choisir"), No(), Ro(19, "option", 9), Ko(20, "Propri\xe9taire"), No(), Ro(21, "option", 9), Ko(22, "Locataire"), No(), No(), No(), Ro(23, "div", 3), Ro(24, "label", 4), Ko(25, "Lieu d'habitation"), No(), Mo(26, "input", 10), No(), Ro(27, "div", 3), Ro(28, "label", 11), Ko(29, "T\xe9l\xe9phone Mobile"), No(), Mo(30, "input", 12), No(), Ro(31, "div", 3), Ro(32, "label", 13), Ko(33, "E-mail"), No(), Mo(34, "input", 14), No(), Ro(35, "div", 3), Ro(36, "button", 15), Ko(37, "Enr\xe9gistrer"), No(), No(), No(), No()), 2 & e && (Er(3), Po("ngIf", t.errorMessage), Er(1), Po("formGroup", t.houseForm), Er(15), Po("value", 1), Er(2), Po("value", 0), Er(15), Po("disabled", !t.houseForm.valid))
        },
        directives: [Vl, Gm, Lv, $m, Ov, Vv, og, em, dm, pm, km],
        styles: [""]
      }), A_);

      function T_(e, t) {
        if (1 & e && (Ro(0, "div"), Ro(1, "h3"), Ko(2), No(), Ro(3, "div", 1), Ro(4, "div", 2), Ro(5, "h4"), Ko(6, "Appels d'offre"), No(), No(), Ro(7, "div", 2), Ro(8, "h4"), Ko(9, "Plaintes"), No(), No(), Mo(10, "div", 2), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.household)
        }
      }
      var I_, P_, F_ = ((P_ = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.householdsService = t, this.activatedRoute = n
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.idHousehold = this.activatedRoute.snapshot.params.id, this.getHousehold(this.idHousehold)
            }
          }, {
            key: "getHousehold",
            value: function (e) {
              var t = this;
              this.householdsService.getHouseHold(e).subscribe((function (e) {
                return t.household = e
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || P_)(Oo(Mg), Oo(_d))
        }, P_.\u0275cmp = ft({
          type: P_,
          selectors: [
            ["app-households-view"]
          ],
          decls: 1,
          vars: 1,
          consts: [
            [4, "ngFor", "ngForOf"],
            [1, "row"],
            [1, "col-lg-4"]
          ],
          template: function (e, t) {
            1 & e && Ao(0, T_, 11, 1, "div", 0), 2 & e && Po("ngForOf", t.household)
          },
          directives: [Ml],
          styles: [""]
        }), P_),
        R_ = ((I_ = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || I_)
        }, I_.\u0275cmp = ft({
          type: I_,
          selectors: [
            ["app-needs-main"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Appels d'offres"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), I_);

      function N_(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 3), Ko(9, "voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit,
            r = qo();
          Er(2), Xo(n.need), Er(2), Xo(r.getStatus(n.status)), Er(2), Xo(n.needDate), Er(2), zo("routerLink", "/administrator/needs/view/", n.idneed, "")
        }
      }
      var M_, D_ = ((M_ = function () {
        function e(t) {
          _classCallCheck(this, e), this.needsService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getNeeds()
          }
        }, {
          key: "getNeeds",
          value: function () {
            var e = this;
            this.needsService.gets().subscribe((function (t) {
              e.needs = t
            }), (function (e) {
              console.log(e)
            }))
          }
        }, {
          key: "getStatus",
          value: function (e) {
            return {
              0: "NON PUBLI\xc9",
              1: "PUBLI\xc9",
              2: "ANNUL\xc9E"
            } [e]
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || M_)(Oo(Vg))
      }, M_.\u0275cmp = ft({
        type: M_,
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
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ko(1), Ro(2, "a", 0), Ko(3, "Ajouter"), No(), No(), Ro(4, "table", 1), Ro(5, "tbody"), Ao(6, N_, 10, 4, "tr", 2), No(), No()), 2 & e && (Er(1), ea(" Liste des besoins (", t.needs.length, ") "), Er(5), Po("ngForOf", t.needs))
        },
        directives: [Pp, Ml],
        styles: [""]
      }), M_);

      function V_(e, t) {
        if (1 & e && (Ro(0, "div", 1), Ro(1, "h3"), Ko(2), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.household)
        }
      }
      var L_, j_ = ((L_ = function () {
        function e(t, n, r, i) {
          _classCallCheck(this, e), this.needsService = t, this.householdsService = n, this.fb = r, this.activatedRoute = i
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.householdId = this.activatedRoute.snapshot.params.id, this.getHousehold(this.householdId), this.createForm()
          }
        }, {
          key: "getHousehold",
          value: function (e) {
            var t = this;
            this.householdsService.getHouseHold(e).subscribe((function (e) {
              t.household = e
            }), (function (e) {
              console.log(e)
            }))
          }
        }, {
          key: "createForm",
          value: function () {
            this.needForm = this.fb.group({
              householdId: [this.householdId, zv.required],
              need: ["", zv.required],
              description: ["", zv.required]
            })
          }
        }, {
          key: "onSubmit",
          value: function () {
            this.needsService.set(this.needForm.value).subscribe((function (e) {
              console.log(e)
            }), (function (e) {
              console.log(e)
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || L_)(Oo(Vg), Oo(Mg), Oo(lg), Oo(_d))
      }, L_.\u0275cmp = ft({
        type: L_,
        selectors: [
          ["app-needs-add"]
        ],
        decls: 1,
        vars: 1,
        consts: [
          ["class", "col-lg-8", 4, "ngFor", "ngForOf"],
          [1, "col-lg-8"]
        ],
        template: function (e, t) {
          1 & e && Ao(0, V_, 3, 1, "div", 0), 2 & e && Po("ngForOf", t.household)
        },
        directives: [Ml],
        styles: [""]
      }), L_);

      function U_(e, t) {
        if (1 & e && (Ro(0, "div"), Ro(1, "div", 2), Ro(2, "div", 10), Ro(3, "h4"), Ko(4, "M\xe9nage"), No(), Ro(5, "div"), Ro(6, "h5"), Ko(7), No(), Ro(8, "p"), Ko(9), Mo(10, "br"), Ko(11), Mo(12, "br"), Ko(13), Mo(14, "br"), Ko(15), No(), No(), No(), Ro(16, "div", 11), Ro(17, "h4"), Ko(18, "Appel d'offre"), No(), Ro(19, "h5"), Ko(20), No(), Ro(21, "p"), Ko(22), No(), No(), Ro(23, "div", 12), Ro(24, "h4"), Ko(25, "Suivi"), No(), Ro(26, "p"), Ko(27), fs(28, "date"), Mo(29, "br"), Ko(30, " R\xe9actions: 0 "), Mo(31, "br"), Ko(32, "Financ\xe9:Pas encore "), Mo(33, "br"), Ko(34, "Ex\xe9cution: Pas encore "), No(), No(), No(), No()), 2 & e) {
          var n = t.$implicit,
            r = qo();
          Er(7), ea(" ", n.household, ""), Er(2), ea(" ", r.getOwner(n.owner), " "), Er(2), ea(" ", n.familySize, " Personnes "), Er(2), ea("", n.cellPhone, " "), Er(2), ea(" ", n.address, " "), Er(5), ea(" ", n.need, ""), Er(2), ea("", n.description, " "), Er(5), ea(" Cr\xe9\xe9 le ", ds(28, 8, n.needDate), " ")
        }
      }
      var H_, q_, z_, G_ = ((z_ = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.needsService = t, this.activatedRoute = n
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.idNeed = this.activatedRoute.snapshot.params.id, this.getNeed(this.idNeed)
            }
          }, {
            key: "getNeed",
            value: function (e) {
              var t = this;
              this.needsService.get(e).subscribe((function (e) {
                t.need = e
              }), (function (e) {
                console.log(e)
              }))
            }
          }, {
            key: "getOwner",
            value: function (e) {
              return {
                0: "Locataire",
                1: "Propri\xe9taire"
              } [e]
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || z_)(Oo(Vg), Oo(_d))
        }, z_.\u0275cmp = ft({
          type: z_,
          selectors: [
            ["app-needs-view"]
          ],
          decls: 21,
          vars: 1,
          consts: [
            [4, "ngFor", "ngForOf"],
            [1, "chats"],
            [1, "row"],
            [1, "col-lg-8"],
            [1, "text-center"],
            [1, "chat-suppliers"],
            [1, "chat-user"],
            ["src", "../../../assets/images/chateur.png", "alt", "Fournisseur", 1, "logo"],
            [1, "chat-message"],
            [1, "float-right"],
            [1, "col-lg-4"],
            [1, "col-lg-5"],
            [1, "col-lg-3"]
          ],
          template: function (e, t) {
            1 & e && (Ao(0, U_, 35, 10, "div", 0), Ro(1, "div", 1), Ro(2, "div", 2), Ro(3, "div", 3), Ro(4, "h2", 4), Ko(5, "Propositions des fournisseurs"), No(), Ro(6, "div", 5), Ro(7, "div", 6), Mo(8, "img", 7), No(), Ro(9, "div", 8), Ro(10, "h3"), Ko(11, " Nom du fournisseur "), Ro(12, "span", 9), Ko(13, "Co\xfbt: 500 000 CFA "), Mo(14, "br"), Ko(15, "D\xe9lai d'\xe9x\xe9cution: 2 Mois"), No(), No(), Ro(16, "p"), Ko(17, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), No(), No(), No(), No(), Ro(18, "div", 10), Ro(19, "h2", 4), Ko(20, "Ex\xe9cution des travaux"), No(), No(), No(), No()), 2 & e && Po("ngForOf", t.need)
          },
          directives: [Ml],
          pipes: [Zl],
          styles: [""]
        }), z_),
        B_ = ((q_ = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || q_)
        }, q_.\u0275cmp = ft({
          type: q_,
          selectors: [
            ["app-officers-main"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Agent de Municipalit\xe9"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), q_),
        W_ = ((H_ = function () {
          function e(t) {
            _classCallCheck(this, e), this.http = t, this.baseUrl = "http://localhost/CSSS/api/index.php/rest/v1/officers/"
          }
          return _createClass(e, [{
            key: "gets",
            value: function () {
              return this.http.get(this.baseUrl)
            }
          }, {
            key: "get",
            value: function (e) {
              return this.http.get(this.baseUrl + e)
            }
          }, {
            key: "set",
            value: function (e) {
              return this.http.post(this.baseUrl, e)
            }
          }, {
            key: "put",
            value: function (e) {
              return this.http.put(this.baseUrl, e)
            }
          }, {
            key: "password",
            value: function (e) {
              return this.http.put(this.baseUrl + "password", e)
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || H_)(Je(ah))
        }, H_.\u0275prov = fe({
          token: H_,
          factory: H_.\u0275fac,
          providedIn: "root"
        }), H_);

      function $_(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 2), Ko(9, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.officer), Er(2), Xo(n.phone), Er(2), Xo(n.email), Er(2), zo("routerLink", "/administrator/officers/view/", n.idofficer, "")
        }
      }
      var Z_, Q_ = ((Z_ = function () {
        function e(t) {
          _classCallCheck(this, e), this.officersService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getOfficers()
          }
        }, {
          key: "getOfficers",
          value: function () {
            var e = this;
            this.officersService.gets().subscribe((function (t) {
              return e.officers = t
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || Z_)(Oo(W_))
      }, Z_.\u0275cmp = ft({
        type: Z_,
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
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ko(1, "Liste des agents municipaux"), No(), Ro(2, "table", 0), Ro(3, "tbody"), Ao(4, $_, 10, 4, "tr", 1), No(), No()), 2 & e && (Er(4), Po("ngForOf", t.officers))
        },
        directives: [Ml, Pp],
        styles: [""]
      }), Z_);

      function J_(e, t) {
        if (1 & e) {
          var n = Do();
          Ro(0, "div", 1), Ro(1, "h3"), Ko(2, "Info Agent Municipal"), No(), Ro(3, "form", 2), jo("ngSubmit", (function () {
            return $t(n), qo().onSubmit()
          })), Ro(4, "div", 3), Ro(5, "label", 4), Ko(6, "Nom et prenom"), No(), Ro(7, "input", 5), jo("ngModelChange", (function (e) {
            return $t(n), t.$implicit.officer = e
          })), No(), No(), Ro(8, "div", 3), Ro(9, "label", 6), Ko(10, "Adresse e-mail"), No(), Ro(11, "input", 7), jo("ngModelChange", (function (e) {
            return $t(n), t.$implicit.email = e
          })), No(), No(), Ro(12, "div", 3), Ro(13, "label", 8), Ko(14, "T\xe9l\xe9phone"), No(), Ro(15, "input", 9), jo("ngModelChange", (function (e) {
            return $t(n), t.$implicit.phone = e
          })), No(), No(), Ro(16, "div", 3), Ro(17, "button", 10), Ko(18, "Valider"), No(), No(), No(), No()
        }
        if (2 & e) {
          var r = t.$implicit,
            i = qo();
          Er(3), Po("formGroup", i.officerForm), Er(4), Po("ngModel", r.officer), Er(4), Po("ngModel", r.email), Er(4), Po("ngModel", r.phone), Er(2), Po("disabled", !i.officerForm.valid)
        }
      }
      var Y_, K_, X_, ek = ((X_ = function () {
          function e(t, n, r) {
            _classCallCheck(this, e), this.officesService = t, this.fb = n, this.activatedRoute = r
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.idOfficer = this.activatedRoute.snapshot.params.id, this.getOfficer(this.idOfficer), this.createForm()
            }
          }, {
            key: "getOfficer",
            value: function (e) {
              var t = this;
              this.officesService.get(e).subscribe((function (e) {
                return t.officer = e
              }))
            }
          }, {
            key: "createForm",
            value: function () {
              this.officerForm = this.fb.group({
                officer: ["", zv.required],
                email: ["", zv.required],
                phone: ["", zv.required]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.officesService.put(this.officerForm.value).subscribe((function (t) {
                e.successMessage = "Mise \xe0 jour \xe9ffectu\xe9e avec succ\xe8s"
              }), (function (t) {
                e.errorMessage = "Erreur"
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || X_)(Oo(W_), Oo(lg), Oo(_d))
        }, X_.\u0275cmp = ft({
          type: X_,
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
          template: function (e, t) {
            1 & e && Ao(0, J_, 19, 5, "div", 0), 2 & e && Po("ngForOf", t.officer)
          },
          directives: [Ml, Gm, Lv, $m, Ov, Vv, og],
          styles: [""]
        }), X_),
        tk = ((K_ = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || K_)
        }, K_.\u0275cmp = ft({
          type: K_,
          selectors: [
            ["app-associations-container"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Associations"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), K_),
        nk = ((Y_ = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || Y_)
        }, Y_.\u0275cmp = ft({
          type: Y_,
          selectors: [
            ["app-townhalls-container"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Municipalit\xe9"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), Y_);

      function rk(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 2), Ko(9, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.supplier), Er(2), Xo(n.service), Er(2), Xo(n.phone), Er(2), zo("routerLink", "/suppliers/view/", n.idsupplier, "")
        }
      }
      var ik, ok, ak, sk, uk, lk, ck, hk, fk, dk, pk = ((ak = function () {
          function e(t) {
            _classCallCheck(this, e), this.suppliersService = t
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.getSuppliers()
            }
          }, {
            key: "getSuppliers",
            value: function () {
              var e = this;
              this.suppliersService.getSuppliers().subscribe((function (t) {
                e.suppliers = t
              }), (function (e) {}))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ak)(Oo(Dg))
        }, ak.\u0275cmp = ft({
          type: ak,
          selectors: [
            ["app-suppliers-list"]
          ],
          decls: 4,
          vars: 1,
          consts: [
            [1, "table"],
            [4, "ngFor", "ngForOf"],
            [3, "routerLink"]
          ],
          template: function (e, t) {
            1 & e && (Ro(0, "table", 0), Mo(1, "thead"), Ro(2, "tbody"), Ao(3, rk, 10, 4, "tr", 1), No(), No()), 2 & e && (Er(3), Po("ngForOf", t.suppliers))
          },
          directives: [Ml, Pp],
          styles: [""]
        }), ak),
        vk = ((ok = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ok)
        }, ok.\u0275cmp = ft({
          type: ok,
          selectors: [
            ["app-suppliers-view"]
          ],
          decls: 2,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "p"), Ko(1, "suppliers-view works!"), No())
          },
          styles: [""]
        }), ok),
        mk = ((ik = function () {
          function e() {
            _classCallCheck(this, e)
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || ik)
        }, ik.\u0275cmp = ft({
          type: ik,
          selectors: [
            ["app-suppliers-container"]
          ],
          decls: 3,
          vars: 0,
          template: function (e, t) {
            1 & e && (Ro(0, "h1"), Ko(1, "Fournisseurs"), No(), Mo(2, "router-outlet"))
          },
          directives: [Up],
          styles: [""]
        }), ik),
        gk = [{
          path: "administrator",
          component: Fg,
          canActivate: [Gy],
          children: [{
            path: "dashboard",
            component: Yg
          }, {
            path: "add",
            component: Xg
          }, {
            path: "administrators",
            component: ay
          }, {
            path: "townhalls",
            component: nk,
            children: [{
              path: "",
              component: m_
            }, {
              path: "add",
              component: g_
            }, {
              path: "view/:id",
              component: C_
            }]
          }, {
            path: "suppliers",
            component: mk,
            children: [{
              path: "",
              component: pk
            }, {
              path: "view/:id",
              component: vk
            }]
          }, {
            path: "officers",
            component: B_,
            children: [{
              path: "",
              component: Q_
            }, {
              path: "view/:id",
              component: ek
            }]
          }, {
            path: "complaints",
            component: Xy,
            children: [{
              path: "",
              component: r_,
              children: [{
                path: ":id",
                component: u_
              }]
            }]
          }, {
            path: "banks",
            component: By,
            children: [{
              path: "",
              component: Yy
            }, {
              path: "add",
              component: Ky
            }]
          }, {
            path: "sensitization",
            component: sy,
            children: [{
              path: "sms",
              component: uy,
              children: [{
                path: "",
                component: fy
              }, {
                path: "send",
                component: yy
              }, {
                path: "chiefs",
                component: ky
              }, {
                path: "association",
                component: wy
              }, {
                path: "everyone",
                component: _y
              }]
            }, {
              path: "voice",
              component: l_,
              children: [{
                path: "send",
                component: f_
              }]
            }]
          }, {
            path: "needs",
            component: R_,
            children: [{
              path: "",
              component: D_
            }, {
              path: "add/:id",
              component: j_
            }, {
              path: "view/:id",
              component: G_
            }]
          }, {
            path: "households",
            component: b_,
            children: [{
              path: "",
              component: E_
            }, {
              path: "add",
              component: O_
            }, {
              path: "view",
              component: F_
            }]
          }, {
            path: "associations",
            component: tk,
            children: [{
              path: "",
              component: xy
            }, {
              path: "add",
              component: qy
            }, {
              path: "view/:id",
              component: zy
            }]
          }]
        }],
        yk = ((sk = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: sk
        }), sk.\u0275inj = de({
          factory: function (e) {
            return new(e || sk)
          },
          imports: [
            [Yp.forRoot(gk)], Yp
          ]
        }), sk),
        _k = [{
          path: "sensitization",
          component: sy,
          canActivate: [Gy],
          children: [{
            path: "sms",
            component: uy,
            children: [{
              path: "",
              component: fy
            }, {
              path: "send",
              component: yy
            }, {
              path: "everyone",
              component: _y
            }]
          }]
        }],
        kk = ((dk = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: dk
        }), dk.\u0275inj = de({
          factory: function (e) {
            return new(e || dk)
          },
          imports: [
            [Yp.forRoot(_k)], Yp
          ]
        }), dk),
        Ck = ((fk = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: fk
        }), fk.\u0275inj = de({
          factory: function (e) {
            return new(e || fk)
          },
          imports: [
            [Jl, Yp, Ch, cg]
          ]
        }), fk),
        bk = ((hk = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: hk
        }), hk.\u0275inj = de({
          factory: function (e) {
            return new(e || hk)
          },
          imports: [
            [Jl, Yp, Ch, cg]
          ]
        }), hk),
        wk = ((ck = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: ck
        }), ck.\u0275inj = de({
          factory: function (e) {
            return new(e || ck)
          },
          imports: [
            [Jl, Yp, Ch, cg, Ck, kk, bk]
          ]
        }), ck),
        Sk = ((lk = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: lk
        }), lk.\u0275inj = de({
          factory: function (e) {
            return new(e || lk)
          },
          imports: [
            [Jl, Yp, cg, Ch, yk, wk]
          ]
        }), lk),
        Ek = ((uk = function () {
          function e(t) {
            _classCallCheck(this, e), this.authService = t
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {}
          }, {
            key: "sidebar",
            value: function () {
              this.status = !this.status
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || uk)(Oo(hv))
        }, uk.\u0275cmp = ft({
          type: uk,
          selectors: [
            ["app-townhalls-main"]
          ],
          decls: 51,
          vars: 2,
          consts: [
            [1, "header"],
            [1, "toggle-btn", 3, "click"],
            ["id", "sidebar", 3, "ngClass"],
            [1, "sidebar-sticky"],
            [1, "text-center"],
            ["src", "../../../assets/images/logo.png", "alt", "logo CSSS", 1, "logo"],
            [1, "nav", "flex-column"],
            [1, "nav-item"],
            ["routerLink", "/townhalls/dashboard", "routerLinkActive", "active", 1, "nav-link"],
            ["routerLink", "/townhalls/associations", "routerLinkActive", "active", 1, "nav-link"],
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
          template: function (e, t) {
            1 & e && (Ro(0, "header", 0), Ro(1, "div", 1), jo("click", (function () {
              return t.sidebar()
            })), Mo(2, "span"), Mo(3, "span"), Mo(4, "span"), No(), No(), Ro(5, "div", 2), Ro(6, "nav"), Ro(7, "div", 3), Ro(8, "div", 4), Mo(9, "img", 5), No(), Ro(10, "ul", 6), Ro(11, "li", 7), Ro(12, "a", 8), Ko(13, " Tableau de Bord "), No(), No(), Ro(14, "li", 7), Ro(15, "a", 9), Ko(16, " Asoociations "), No(), No(), Ro(17, "li", 7), Ro(18, "a", 10), Mo(19, "span", 11), Ko(20, " M\xe9nages "), No(), No(), Ro(21, "li", 7), Ro(22, "a", 12), Mo(23, "span", 13), Ko(24, " Appels d'offre "), No(), No(), Ro(25, "li", 7), Ro(26, "a", 14), Mo(27, "span", 13), Ko(28, " R\xe9actions "), No(), No(), Ro(29, "li", 7), Ro(30, "a", 15), Mo(31, "span", 16), Ko(32, " Fournisseurs "), No(), No(), No(), Ro(33, "h6", 17), Ro(34, "span"), Ko(35, "Param\xe8trages"), No(), Ro(36, "a", 18), Mo(37, "span", 19), No(), No(), Ro(38, "ul", 20), Ro(39, "li", 7), Ro(40, "a", 21), Mo(41, "span", 22), Ko(42, " Changer de mot de passe "), No(), No(), Ro(43, "li", 7), Ro(44, "a", 23), jo("click", (function () {
              return t.authService.logoutUser()
            })), Mo(45, "span", 22), Ko(46, " Deconnexion "), No(), No(), No(), No(), No(), No(), Ro(47, "div", 24), Ro(48, "div", 25), Ro(49, "main", 26), Mo(50, "router-outlet"), No(), No(), No()), 2 & e && (Er(5), Po("ngClass", t.status ? "sidebar-close" : "sidebar-open"), Er(42), Po("ngClass", t.status ? "main-yes" : "main-no"))
          },
          directives: [Rl, Pp, Vp, Up],
          styles: [""]
        }), uk);

      function xk(e, t) {
        if (1 & e && (Ro(0, "p", 13), Ro(1, "span"), Ko(2, "Salut, "), Ro(3, "b"), Ko(4), No(), No(), Ro(5, "span"), Ko(6, "Voici ce qui se passe aujourd'hui."), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.user.name)
        }
      }

      function Ak(e, t) {
        if (1 & e && (Ro(0, "div", 14), Ro(1, "p", 15), Ko(2, "A.V.E.Cs"), No(), Ro(3, "p", 16), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.associations.length)
        }
      }

      function Ok(e, t) {
        if (1 & e && (Ro(0, "div", 14), Ro(1, "p", 15), Ko(2, "M\xe9nages"), No(), Ro(3, "p", 16), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.households.length)
        }
      }

      function Tk(e, t) {
        if (1 & e && (Ro(0, "p", 16), Ko(1), No()), 2 & e) {
          var n = qo(2);
          Er(1), Xo(n.suppliers.length)
        }
      }

      function Ik(e, t) {
        1 & e && (Ro(0, "p", 16), Ko(1, "0"), No())
      }

      function Pk(e, t) {
        if (1 & e && (Ro(0, "div", 14), Ro(1, "p", 15), Ko(2, "Appels d'offre"), No(), Ao(3, Tk, 2, 1, "p", 17), Ao(4, Ik, 2, 0, "p", 17), No()), 2 & e) {
          var n = qo();
          Er(3), Po("ngIf", n.suppliers), Er(1), Po("ngIf", !n.suppliers)
        }
      }

      function Fk(e, t) {
        if (1 & e && (Ro(0, "p", 16), Ko(1), No()), 2 & e) {
          var n = qo(2);
          Er(1), Xo(n.suppliers.length)
        }
      }

      function Rk(e, t) {
        1 & e && (Ro(0, "p", 16), Ko(1, "0"), No())
      }

      function Nk(e, t) {
        if (1 & e && (Ro(0, "div", 14), Ro(1, "p", 15), Ko(2, "Fournisseurs"), No(), Ao(3, Fk, 2, 1, "p", 17), Ao(4, Rk, 2, 0, "p", 17), No()), 2 & e) {
          var n = qo();
          Er(3), Po("ngIf", n.suppliers), Er(1), Po("ngIf", !n.suppliers)
        }
      }

      function Mk(e, t) {
        if (1 & e && (Ro(0, "div", 18), Ro(1, "p", 19), Ko(2), Mo(3, "br"), Ko(4, " Besoins exprim\xe9s "), No(), No()), 2 & e) {
          var n = qo();
          Er(2), ea("", n.needs.length, " ")
        }
      }

      function Dk(e, t) {
        if (1 & e && (Ro(0, "p", 20), Ko(1), Mo(2, "br"), Ko(3, " Plaintes "), No()), 2 & e) {
          var n = qo();
          Er(1), ea(" ", n.complaints.length, " ")
        }
      }
      var Vk, Lk = ((Vk = function () {
        function e(t, n, r, i, o, a, s) {
          _classCallCheck(this, e), this.authService = t, this.associationsService = n, this.householdsService = r, this.suppliersService = i, this.needsService = o, this.complaintsService = a, this.router = s
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getUser(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
          }
        }, {
          key: "getUser",
          value: function () {
            var e = this;
            this.authService.user().subscribe((function (t) {
              return e.user = t
            }), (function (t) {
              t instanceof Qc && 401 === t.status && e.router.navigate(["/login"])
            }))
          }
        }, {
          key: "getComplaints",
          value: function () {
            var e = this;
            this.complaintsService.town().subscribe((function (t) {
              return e.complaints = t
            }))
          }
        }, {
          key: "getAssociations",
          value: function () {
            var e = this;
            this.associationsService.town().subscribe((function (t) {
              return e.associations = t
            }))
          }
        }, {
          key: "getHouseholds",
          value: function () {
            var e = this;
            this.householdsService.town().subscribe((function (t) {
              return e.households = t
            }))
          }
        }, {
          key: "getSuppliers",
          value: function () {
            var e = this;
            this.suppliersService.town().subscribe((function (t) {
              return e.suppliers = t
            }))
          }
        }, {
          key: "getNeeds",
          value: function () {
            var e = this;
            this.needsService.town().subscribe((function (t) {
              return e.needs = t
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || Vk)(Oo(hv), Oo(Ng), Oo(Mg), Oo(Dg), Oo(Vg), Oo(Lg), Oo(Tp))
      }, Vk.\u0275cmp = ft({
        type: Vk,
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
        template: function (e, t) {
          1 & e && (Ao(0, xk, 7, 1, "p", 0), Ro(1, "section", 1), Ro(2, "div", 2), Ao(3, Ak, 5, 1, "div", 3), No(), Ro(4, "div", 2), Ao(5, Ok, 5, 1, "div", 3), No(), Ro(6, "div", 2), Ao(7, Pk, 5, 2, "div", 3), No(), Ro(8, "div", 2), Ao(9, Nk, 5, 2, "div", 3), No(), No(), Ro(10, "section", 4), Ro(11, "div", 5), Ro(12, "div", 6), Ro(13, "h2"), Ko(14, "Expressions des besoins"), No(), Ro(15, "div", 5), Ao(16, Mk, 5, 1, "div", 7), Ro(17, "div", 8), Ro(18, "p"), Ko(19, " Besoins Trait\xe9s: 0"), No(), Ro(20, "p"), Ko(21, " Sans r\xe9actions: 0"), No(), No(), Ro(22, "div", 2), Ro(23, "a", 9), Ko(24, "Voir les besoins"), No(), No(), No(), No(), Ro(25, "div", 10), Ao(26, Dk, 4, 1, "p", 11), Ro(27, "a", 12), Ko(28, "Voir toutes les plaintes"), No(), No(), No(), No()), 2 & e && (Po("ngIf", t.user), Er(3), Po("ngIf", t.associations), Er(2), Po("ngIf", t.households), Er(2), Po("ngIf", t.suppliers), Er(2), Po("ngIf", t.suppliers), Er(7), Po("ngIf", t.needs), Er(10), Po("ngIf", t.complaints))
        },
        directives: [Vl, Pp],
        styles: [""]
      }), Vk);

      function jk(e, t) {
        if (1 & e) {
          var n = Do();
          Ro(0, "tr", 7), jo("click", (function () {
            $t(n);
            var e = t.$implicit;
            return qo(2).onSelected(e)
          })), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), No()
        }
        if (2 & e) {
          var r = t.$implicit,
            i = qo(2);
          Er(2), ea("", i.textLimit(r.complaint), "..."), Er(2), Xo(r.household), Er(2), Xo(r.complaintDate)
        }
      }

      function Uk(e, t) {
        if (1 & e && (Ro(0, "div", 1), Ro(1, "div", 2), Ro(2, "h3"), Ko(3, "Liste de plaintes"), No(), Ro(4, "div", 3), Ko(5, " Clique sur la ligne de la plainte pour voir les details "), No(), Mo(6, "br"), Ro(7, "table", 4), Ro(8, "tbody"), Ao(9, jk, 7, 3, "tr", 5), No(), No(), No(), Ro(10, "div", 6), Mo(11, "router-outlet"), No(), No()), 2 & e) {
          var n = qo();
          Er(9), Po("ngForOf", n.complaints)
        }
      }
      var Hk, qk = ((Hk = function () {
        function e(t, n, r) {
          _classCallCheck(this, e), this.complaintsService = t, this.activatedRoute = n, this.router = r
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getComplaints()
          }
        }, {
          key: "getComplaints",
          value: function () {
            var e = this;
            this.complaintsService.town().subscribe((function (t) {
              return e.complaints = t
            }))
          }
        }, {
          key: "onSelected",
          value: function (e) {
            this.router.navigate([e.idcomplaint], {
              relativeTo: this.activatedRoute
            })
          }
        }, {
          key: "textLimit",
          value: function (e) {
            return e.substr(0, 20)
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || Hk)(Oo(Lg), Oo(_d), Oo(Tp))
      }, Hk.\u0275cmp = ft({
        type: Hk,
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
        template: function (e, t) {
          1 & e && Ao(0, Uk, 12, 1, "div", 0), 2 & e && Po("ngIf", t.complaints)
        },
        directives: [Vl, Ml, Up],
        styles: [""]
      }), Hk);

      function zk(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ro(6, "a", 3), Ko(7, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.association), Er(2), Xo(n.chief), Er(2), zo("routerLink", "/administrator/associations/view/", n.idassociation, "")
        }
      }
      var Gk, Bk = ((Gk = function () {
        function e(t, n) {
          _classCallCheck(this, e), this.townService = t, this.associationsService = n
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {}
        }, {
          key: "getAssociation",
          value: function () {
            var e = this;
            this.associationsService.town().subscribe((function (t) {
              return e.associations = t
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || Gk)(Oo(Rg), Oo(Ng))
      }, Gk.\u0275cmp = ft({
        type: Gk,
        selectors: [
          ["app-associations-town"]
        ],
        decls: 9,
        vars: 1,
        consts: [
          ["routerLink", "/townhalls/associations/add", 1, "bouton", "float-right"],
          [1, "table"],
          [4, "ngFor", "ngForOf"],
          [3, "routerLink"]
        ],
        template: function (e, t) {
          1 & e && (Ro(0, "h1"), Ko(1, "Associations"), No(), Ro(2, "h3"), Ko(3, " Liste des associations "), Ro(4, "a", 0), Ko(5, "Ajouter"), No(), No(), Ro(6, "table", 1), Ro(7, "tbody"), Ao(8, zk, 8, 3, "tr", 2), No(), No()), 2 & e && (Er(8), Po("ngForOf", t.associations))
        },
        directives: [Pp, Ml],
        styles: [""]
      }), Gk);

      function Wk(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 2), Ko(9, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.household), Er(2), Xo(n.association), Er(2), Xo(n.cellPhone), Er(2), zo("routerLink", "/townhalls/households/view/", n.idhousehold, "")
        }
      }
      var $k, Zk = (($k = function () {
        function e(t) {
          _classCallCheck(this, e), this.householdsService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getHouseholds()
          }
        }, {
          key: "getHouseholds",
          value: function () {
            var e = this;
            this.householdsService.town().subscribe((function (t) {
              return e.households = t
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || $k)(Oo(Mg))
      }, $k.\u0275cmp = ft({
        type: $k,
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
        template: function (e, t) {
          1 & e && (Ro(0, "h3"), Ko(1), No(), Ro(2, "table", 0), Mo(3, "thead"), Ro(4, "tbody"), Ao(5, Wk, 10, 4, "tr", 1), No(), No()), 2 & e && (Er(1), ea(" Liste des M\xe9nages(", t.households.length, ")"), Er(4), Po("ngForOf", t.households))
        },
        directives: [Ml, Pp],
        styles: [""]
      }), $k);

      function Qk(e, t) {
        if (1 & e && (Ro(0, "h3"), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), ea(" Liste des besoins (", n.needs.length, ")")
        }
      }

      function Jk(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 3), Ko(9, "voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit,
            r = qo();
          Er(2), Xo(n.need), Er(2), Xo(r.getStatus(n.status)), Er(2), Xo(n.needDate), Er(2), zo("routerLink", "/townhalls/needs/view/", n.idneed, "")
        }
      }
      var Yk, Kk = ((Yk = function () {
        function e(t) {
          _classCallCheck(this, e), this.needsService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {}
        }, {
          key: "getNeeds",
          value: function () {
            var e = this;
            this.needsService.town().subscribe((function (t) {
              return e.needs = t
            }))
          }
        }, {
          key: "getStatus",
          value: function (e) {
            return {
              0: "NON PUBLI\xc9",
              1: "PUBLI\xc9",
              2: "ANNUL\xc9E"
            } [e]
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || Yk)(Oo(Vg))
      }, Yk.\u0275cmp = ft({
        type: Yk,
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
        template: function (e, t) {
          1 & e && (Ao(0, Qk, 2, 1, "h3", 0), Ro(1, "table", 1), Ro(2, "tbody"), Ao(3, Jk, 10, 4, "tr", 2), No(), No()), 2 & e && (Po("ngIf", t.needs), Er(3), Po("ngForOf", t.needs))
        },
        directives: [Vl, Ml, Pp],
        styles: [""]
      }), Yk);

      function Xk(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 2), Ko(9, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.supplier), Er(2), Xo(n.service), Er(2), Xo(n.phone), Er(2), zo("routerLink", "/suppliers/view/", n.idsupplier, "")
        }
      }
      var eC, tC = ((eC = function () {
        function e(t) {
          _classCallCheck(this, e), this.suppliersService = t
        }
        return _createClass(e, [{
          key: "ngOnInit",
          value: function () {
            this.getSuppliers()
          }
        }, {
          key: "getSuppliers",
          value: function () {
            var e = this;
            this.suppliersService.town().subscribe((function (t) {
              return e.suppliers = t
            }))
          }
        }]), e
      }()).\u0275fac = function (e) {
        return new(e || eC)(Oo(Dg))
      }, eC.\u0275cmp = ft({
        type: eC,
        selectors: [
          ["app-suppliers-town"]
        ],
        decls: 4,
        vars: 1,
        consts: [
          [1, "table"],
          [4, "ngFor", "ngForOf"],
          [3, "routerLink"]
        ],
        template: function (e, t) {
          1 & e && (Ro(0, "table", 0), Mo(1, "thead"), Ro(2, "tbody"), Ao(3, Xk, 10, 4, "tr", 1), No(), No()), 2 & e && (Er(3), Po("ngForOf", t.suppliers))
        },
        directives: [Ml, Pp],
        styles: [""]
      }), eC);

      function nC(e, t) {
        if (1 & e && (Ro(0, "div", 27), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), Xo(n.successMessage)
        }
      }

      function rC(e, t) {
        if (1 & e && (Ro(0, "option", 28), Ko(1), No()), 2 & e) {
          var n = t.$implicit;
          Po("value", n.idservice), Er(1), Xo(n.service)
        }
      }
      var iC, oC, aC, sC, uC = ((iC = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.suppliersService = t, this.fb = n, this.successMessage = ""
          }
          return _createClass(e, [{
            key: "ngOnInit",
            value: function () {
              this.getDomains(), this.createForm()
            }
          }, {
            key: "getDomains",
            value: function () {
              var e = this;
              this.suppliersService.getDomains().subscribe((function (t) {
                e.services = t
              }), (function (e) {
                console.log(e)
              }))
            }
          }, {
            key: "createForm",
            value: function () {
              this.supplierForm = this.fb.group({
                serviceId: ["", zv.required],
                supplier: ["", zv.required],
                legalForm: ["", zv.required],
                tradeRegister: ["", zv.required],
                taxpayer: ["", zv.required],
                address: ["", zv.required],
                phone: ["", zv.required],
                email: ["", [zv.required, zv.email]]
              })
            }
          }, {
            key: "onSubmit",
            value: function () {
              var e = this;
              this.suppliersService.setSupplier(this.supplierForm.value).subscribe((function (t) {
                e.successMessage = "Fournisseur enr\xe9gistr\xe9 avec succ\xe8s"
              }), (function (e) {
                console.log(e)
              }))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || iC)(Oo(Dg), Oo(lg))
        }, iC.\u0275cmp = ft({
          type: iC,
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
          template: function (e, t) {
            1 & e && (Ro(0, "div", 0), Ro(1, "h3"), Ko(2, "Ajouter un fournisseur"), No(), Ao(3, nC, 2, 1, "div", 1), Ro(4, "form", 2), jo("ngSubmit", (function () {
              return t.onSubmit()
            })), Ro(5, "div", 3), Ro(6, "label", 4), Ko(7, "Nom du fournisseur"), No(), Mo(8, "input", 5), No(), Ro(9, "div", 3), Ro(10, "label", 6), Ko(11, "Service"), No(), Ro(12, "select", 7), Ro(13, "option", 8), Ko(14, "Choisir"), No(), Ao(15, rC, 2, 2, "option", 9), No(), No(), Ro(16, "div", 10), Ro(17, "div", 11), Ro(18, "label", 12), Ko(19, "Forme Juridique"), No(), Mo(20, "input", 13), No(), Ro(21, "div", 11), Ro(22, "label", 14), Ko(23, "R\xe9gistre de commerce"), No(), Mo(24, "input", 15), No(), Ro(25, "div", 11), Ro(26, "label", 16), Ko(27, "Num\xe9ro contribuable"), No(), Mo(28, "input", 17), No(), No(), Ro(29, "div", 10), Ro(30, "div", 18), Ro(31, "label", 19), Ko(32, "T\xe9l\xe9phone"), No(), Mo(33, "input", 20), No(), Ro(34, "div", 21), Ro(35, "label", 22), Ko(36, "E-mail"), No(), Mo(37, "input", 23), No(), No(), Ro(38, "div", 3), Ro(39, "label", 24), Ko(40, "Adresse"), No(), Mo(41, "input", 25), No(), Ro(42, "div", 3), Ro(43, "button", 26), Ko(44, "Enr\xe9gistrer"), No(), No(), No(), No()), 2 & e && (Er(3), Po("ngIf", t.successMessage), Er(1), Po("formGroup", t.supplierForm), Er(11), Po("ngForOf", t.services), Er(28), Po("disabled", !t.supplierForm.valid))
          },
          directives: [Vl, Gm, Lv, $m, Ov, Vv, og, dm, pm, km, Ml],
          styles: [""]
        }), iC),
        lC = [{
          path: "townhalls",
          component: Ek,
          canActivate: [Gy],
          children: [{
            path: "dashboard",
            component: Lk
          }, {
            path: "associations",
            component: tk,
            children: [{
              path: "",
              component: Bk
            }, {
              path: "add",
              component: qy
            }, {
              path: "view/:id",
              component: zy
            }]
          }, {
            path: "officers",
            component: B_,
            children: [{
              path: "password",
              component: (oC = function () {
                function e(t, n, r) {
                  _classCallCheck(this, e), this.officesService = t, this.fb = n, this.router = r
                }
                return _createClass(e, [{
                  key: "ngOnInit",
                  value: function () {
                    this.createForm()
                  }
                }, {
                  key: "createForm",
                  value: function () {
                    this.officerForm = this.fb.group({
                      password: ["", zv.required],
                      newPassword: ["", zv.required],
                      confirmPassword: ["", [zv.required]]
                    })
                  }
                }, {
                  key: "onSubmit",
                  value: function () {
                    var e = this;
                    this.officesService.password(this.officerForm.value).subscribe((function (t) {
                      e.successMessage = "Mot de passe modifi\xe9", e.router.navigate(["/login"])
                    }), (function (t) {
                      e.errorMessage = "Erreur"
                    }))
                  }
                }]), e
              }(), oC.\u0275fac = function (e) {
                return new(e || oC)(Oo(W_), Oo(lg), Oo(Tp))
              }, oC.\u0275cmp = ft({
                type: oC,
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
                template: function (e, t) {
                  1 & e && (Ro(0, "div", 0), Ro(1, "h3"), Ko(2, "Changer de mot de passe"), No(), Ro(3, "form", 1), jo("ngSubmit", (function () {
                    return t.onSubmit()
                  })), Ro(4, "div", 2), Ro(5, "label", 3), Ko(6, "Ancien Mot de passe"), No(), Mo(7, "input", 4), No(), Ro(8, "div", 2), Ro(9, "label", 5), Ko(10, "Ancien Mot de passe"), No(), Mo(11, "input", 6), No(), Ro(12, "div", 2), Ro(13, "label", 7), Ko(14, "Ancien Mot de passe"), No(), Mo(15, "input", 8), No(), Ro(16, "div", 2), Ro(17, "button", 9), Ko(18, "Valider"), No(), No(), No(), No()), 2 & e && (Er(3), Po("formGroup", t.officerForm), Er(14), Po("disabled", !t.officerForm.valid))
                },
                directives: [Gm, Lv, $m, Ov, Vv, og],
                styles: [""]
              }), oC)
            }, {
              path: "view",
              component: ek
            }]
          }, {
            path: "suppliers",
            component: mk,
            children: [{
              path: "",
              component: tC
            }, {
              path: "add",
              component: uC
            }, {
              path: "view/:id",
              component: vk
            }]
          }, {
            path: "households",
            component: b_,
            children: [{
              path: "",
              component: Zk
            }, {
              path: "add",
              component: O_
            }, {
              path: "view/:id",
              component: O_
            }]
          }, {
            path: "needs",
            component: R_,
            children: [{
              path: "",
              component: Kk
            }, {
              path: "view/:id",
              component: G_
            }]
          }, {
            path: "complaints",
            component: Xy,
            children: [{
              path: "",
              component: qk,
              children: [{
                path: ":id",
                component: u_
              }]
            }]
          }]
        }],
        cC = ((sC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: sC
        }), sC.\u0275inj = de({
          factory: function (e) {
            return new(e || sC)
          },
          imports: [
            [Yp.forRoot(lC)], Yp
          ]
        }), sC),
        hC = ((aC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: aC
        }), aC.\u0275inj = de({
          factory: function (e) {
            return new(e || aC)
          },
          imports: [
            [Jl, Yp, cg, Ch, cC]
          ]
        }), aC);

      function fC(e, t) {
        if (1 & e && (Ro(0, "p", 13), Ro(1, "span"), Ko(2, "Salut, "), Ro(3, "b"), Ko(4), No(), No(), Ro(5, "span"), Ko(6, "Voici ce qui se passe aujourd'hui."), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.user.name)
        }
      }

      function dC(e, t) {
        if (1 & e && (Ro(0, "div", 14), Ro(1, "p", 15), Ko(2, "M\xe9nages"), No(), Ro(3, "p", 16), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.households.length)
        }
      }

      function pC(e, t) {
        if (1 & e && (Ro(0, "p", 16), Ko(1), No()), 2 & e) {
          var n = qo(2);
          Er(1), Xo(n.complaints.length)
        }
      }

      function vC(e, t) {
        if (1 & e && (Ro(0, "div", 14), Ro(1, "p", 15), Ko(2, "Plaintes"), No(), Ao(3, pC, 2, 1, "p", 17), No()), 2 & e) {
          var n = qo();
          Er(3), Po("ngIf", n.complaints)
        }
      }

      function mC(e, t) {
        if (1 & e && (Ro(0, "div", 18), Ro(1, "p", 19), Ko(2), Mo(3, "br"), Ko(4, " Besoins exprim\xe9s "), No(), No()), 2 & e) {
          var n = qo();
          Er(2), ea("", n.needs.length, " ")
        }
      }

      function gC(e, t) {
        if (1 & e && (Ro(0, "p", 20), Ko(1), Mo(2, "br"), Ko(3, " Plaintes "), No()), 2 & e) {
          var n = qo();
          Er(1), ea(" ", n.complaints.length, " ")
        }
      }

      function yC(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 2), Ko(9, "Voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.household), Er(2), Xo(n.association), Er(2), Xo(n.cellPhone), Er(2), zo("routerLink", "/townhalls/households/view/", n.idhousehold, "")
        }
      }

      function _C(e, t) {
        if (1 & e && (Ro(0, "h3"), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), ea(" Liste des besoins (", n.needs.length, ")")
        }
      }

      function kC(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), Ro(7, "td"), Ro(8, "a", 3), Ko(9, "voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit,
            r = qo();
          Er(2), Xo(n.need), Er(2), Xo(r.getStatus(n.status)), Er(2), Xo(n.needDate), Er(2), zo("routerLink", "/townhalls/needs/view/", n.idneed, "")
        }
      }

      function CC(e, t) {
        if (1 & e) {
          var n = Do();
          Ro(0, "tr", 7), jo("click", (function () {
            $t(n);
            var e = t.$implicit;
            return qo(2).onSelected(e)
          })), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ko(6), No(), No()
        }
        if (2 & e) {
          var r = t.$implicit,
            i = qo(2);
          Er(2), ea("", i.textLimit(r.complaint), "..."), Er(2), Xo(r.household), Er(2), Xo(r.complaintDate)
        }
      }

      function bC(e, t) {
        if (1 & e && (Ro(0, "div", 1), Ro(1, "div", 2), Ro(2, "h3"), Ko(3, "Liste de plaintes"), No(), Ro(4, "div", 3), Ko(5, " Clique sur la ligne de la plainte pour voir les details "), No(), Mo(6, "br"), Ro(7, "table", 4), Ro(8, "tbody"), Ao(9, CC, 7, 3, "tr", 5), No(), No(), No(), Ro(10, "div", 6), Mo(11, "router-outlet"), No(), No()), 2 & e) {
          var n = qo();
          Er(9), Po("ngForOf", n.complaints)
        }
      }
      var wC, SC, EC, xC, AC, OC, TC, IC = [{
          path: "association",
          component: (AC = function () {
            function e(t) {
              _classCallCheck(this, e), this.authService = t
            }
            return _createClass(e, [{
              key: "ngOnInit",
              value: function () {}
            }, {
              key: "sidebar",
              value: function () {
                this.status = !this.status
              }
            }]), e
          }(), AC.\u0275fac = function (e) {
            return new(e || AC)(Oo(hv))
          }, AC.\u0275cmp = ft({
            type: AC,
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
            template: function (e, t) {
              1 & e && (Ro(0, "header", 0), Ro(1, "div", 1), jo("click", (function () {
                return t.sidebar()
              })), Mo(2, "span"), Mo(3, "span"), Mo(4, "span"), No(), No(), Ro(5, "div", 2), Ro(6, "nav"), Ro(7, "div", 3), Ro(8, "ul", 4), Ro(9, "li", 5), Ro(10, "a", 6), Ko(11, " Tableau de Bord "), No(), No(), Ro(12, "li", 5), Ro(13, "a", 7), Mo(14, "span", 8), Ko(15, " M\xe9nages "), No(), No(), Ro(16, "li", 5), Ro(17, "a", 9), Mo(18, "span", 10), Ko(19, " Appels d'offre "), No(), No(), Ro(20, "li", 5), Ro(21, "a", 11), Mo(22, "span", 10), Ko(23, " R\xe9actions "), No(), No(), No(), Ro(24, "h6", 12), Ro(25, "span"), Ko(26, "Param\xe8trages"), No(), Ro(27, "a", 13), Mo(28, "span", 14), No(), No(), Ro(29, "ul", 15), Ro(30, "li", 5), Ro(31, "a", 16), Mo(32, "span", 17), Ko(33, " Changer de mot de passe "), No(), No(), Ro(34, "li", 5), Ro(35, "a", 18), jo("click", (function () {
                return t.authService.logoutUser()
              })), Mo(36, "span", 17), Ko(37, " Deconnexion "), No(), No(), No(), No(), No(), No(), Ro(38, "div", 19), Ro(39, "div", 20), Ro(40, "main", 21), Mo(41, "router-outlet"), No(), No(), No()), 2 & e && (Er(5), Po("ngClass", t.status ? "sidebar-close" : "sidebar-open"), Er(33), Po("ngClass", t.status ? "main-yes" : "main-no"))
            },
            directives: [Rl, Pp, Vp, Up],
            styles: [""]
          }), AC),
          canActivate: [Gy],
          children: [{
            path: "dashboard",
            component: (xC = function () {
              function e(t, n, r, i, o) {
                _classCallCheck(this, e), this.authService = t, this.householdsService = n, this.needsService = r, this.complaintsService = i, this.router = o
              }
              return _createClass(e, [{
                key: "ngOnInit",
                value: function () {
                  this.getUser(), this.getHouseholds(), this.getNeeds(), this.getComplaints()
                }
              }, {
                key: "getUser",
                value: function () {
                  var e = this;
                  this.authService.user().subscribe((function (t) {
                    return e.user = t
                  }))
                }
              }, {
                key: "getComplaints",
                value: function () {
                  var e = this;
                  this.complaintsService.association().subscribe((function (t) {
                    return e.complaints = t
                  }))
                }
              }, {
                key: "getHouseholds",
                value: function () {
                  var e = this;
                  this.householdsService.association().subscribe((function (t) {
                    return e.households = t
                  }))
                }
              }, {
                key: "getNeeds",
                value: function () {
                  var e = this;
                  this.needsService.association().subscribe((function (t) {
                    return e.needs = t
                  }))
                }
              }]), e
            }(), xC.\u0275fac = function (e) {
              return new(e || xC)(Oo(hv), Oo(Mg), Oo(Vg), Oo(Lg), Oo(Tp))
            }, xC.\u0275cmp = ft({
              type: xC,
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
              template: function (e, t) {
                1 & e && (Ao(0, fC, 7, 1, "p", 0), Ro(1, "section", 1), Ro(2, "div", 2), Ao(3, dC, 5, 1, "div", 3), No(), Ro(4, "div", 2), Ao(5, vC, 4, 1, "div", 3), No(), No(), Ro(6, "section", 4), Ro(7, "div", 5), Ro(8, "div", 6), Ro(9, "h2"), Ko(10, "Expressions des besoins"), No(), Ro(11, "div", 5), Ao(12, mC, 5, 1, "div", 7), Ro(13, "div", 8), Ro(14, "p"), Ko(15, " Besoins Trait\xe9s: 0"), No(), Ro(16, "p"), Ko(17, " Sans r\xe9actions: 0"), No(), No(), Ro(18, "div", 2), Ro(19, "a", 9), Ko(20, "Voir les besoins"), No(), No(), No(), No(), Ro(21, "div", 10), Ao(22, gC, 4, 1, "p", 11), Ro(23, "a", 12), Ko(24, "Voir toutes les plaintes"), No(), No(), No(), No()), 2 & e && (Po("ngIf", t.user), Er(3), Po("ngIf", t.households), Er(2), Po("ngIf", t.complaints), Er(7), Po("ngIf", t.needs), Er(10), Po("ngIf", t.complaints))
              },
              directives: [Vl, Pp],
              styles: [""]
            }), xC)
          }, {
            path: "households",
            component: b_,
            children: [{
              path: "",
              component: (EC = function () {
                function e(t) {
                  _classCallCheck(this, e), this.householdsService = t
                }
                return _createClass(e, [{
                  key: "ngOnInit",
                  value: function () {
                    this.getHouseholds()
                  }
                }, {
                  key: "getHouseholds",
                  value: function () {
                    var e = this;
                    this.householdsService.association().subscribe((function (t) {
                      return e.households = t
                    }))
                  }
                }]), e
              }(), EC.\u0275fac = function (e) {
                return new(e || EC)(Oo(Mg))
              }, EC.\u0275cmp = ft({
                type: EC,
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
                template: function (e, t) {
                  1 & e && (Ro(0, "h3"), Ko(1), No(), Ro(2, "table", 0), Mo(3, "thead"), Ro(4, "tbody"), Ao(5, yC, 10, 4, "tr", 1), No(), No()), 2 & e && (Er(1), ea(" Liste des M\xe9nages(", t.households.length, ")"), Er(4), Po("ngForOf", t.households))
                },
                directives: [Ml, Pp],
                styles: [""]
              }), EC)
            }, {
              path: "add",
              component: O_
            }, {
              path: "view/:id",
              component: F_
            }]
          }, {
            path: "needs",
            component: R_,
            children: [{
              path: "",
              component: (SC = function () {
                function e(t) {
                  _classCallCheck(this, e), this.needsService = t
                }
                return _createClass(e, [{
                  key: "ngOnInit",
                  value: function () {}
                }, {
                  key: "getNeeds",
                  value: function () {
                    var e = this;
                    this.needsService.association().subscribe((function (t) {
                      return e.needs = t
                    }))
                  }
                }, {
                  key: "getStatus",
                  value: function (e) {
                    return {
                      0: "NON PUBLI\xc9",
                      1: "PUBLI\xc9",
                      2: "ANNUL\xc9E"
                    } [e]
                  }
                }]), e
              }(), SC.\u0275fac = function (e) {
                return new(e || SC)(Oo(Vg))
              }, SC.\u0275cmp = ft({
                type: SC,
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
                template: function (e, t) {
                  1 & e && (Ao(0, _C, 2, 1, "h3", 0), Ro(1, "table", 1), Ro(2, "tbody"), Ao(3, kC, 10, 4, "tr", 2), No(), No()), 2 & e && (Po("ngIf", t.needs), Er(3), Po("ngForOf", t.needs))
                },
                directives: [Vl, Ml, Pp],
                styles: [""]
              }), SC)
            }, {
              path: "add/:id",
              component: j_
            }, {
              path: "view/:id",
              component: G_
            }]
          }, {
            path: "complaints",
            component: Xy,
            children: [{
              path: "",
              component: (wC = function () {
                function e(t, n, r) {
                  _classCallCheck(this, e), this.complaintsService = t, this.activatedRoute = n, this.router = r
                }
                return _createClass(e, [{
                  key: "ngOnInit",
                  value: function () {
                    this.getComplaints()
                  }
                }, {
                  key: "getComplaints",
                  value: function () {
                    var e = this;
                    this.complaintsService.association().subscribe((function (t) {
                      return e.complaints = t
                    }))
                  }
                }, {
                  key: "onSelected",
                  value: function (e) {
                    this.router.navigate([e.idcomplaint], {
                      relativeTo: this.activatedRoute
                    })
                  }
                }, {
                  key: "textLimit",
                  value: function (e) {
                    return e.substr(0, 20)
                  }
                }]), e
              }(), wC.\u0275fac = function (e) {
                return new(e || wC)(Oo(Lg), Oo(_d), Oo(Tp))
              }, wC.\u0275cmp = ft({
                type: wC,
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
                template: function (e, t) {
                  1 & e && Ao(0, bC, 12, 1, "div", 0), 2 & e && Po("ngIf", t.complaints)
                },
                directives: [Vl, Ml, Up],
                styles: [""]
              }), wC),
              children: [{
                path: ":id",
                component: u_
              }]
            }]
          }]
        }],
        PC = ((TC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: TC
        }), TC.\u0275inj = de({
          factory: function (e) {
            return new(e || TC)
          },
          imports: [
            [Yp.forRoot(IC)], Yp
          ]
        }), TC),
        FC = ((OC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: OC
        }), OC.\u0275inj = de({
          factory: function (e) {
            return new(e || OC)
          },
          imports: [
            [Jl, Yp, cg, Ch, PC]
          ]
        }), OC);

      function RC(e, t) {
        if (1 & e && (Ro(0, "p", 8), Ro(1, "span"), Ko(2, "Salut, "), Ro(3, "b"), Ko(4), No(), No(), Ro(5, "span"), Ko(6, "Voici ce qui se passe aujourd'hui."), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.user.name)
        }
      }

      function NC(e, t) {
        if (1 & e && (Ro(0, "div", 9), Ro(1, "p", 10), Ko(2, "Nouvels appels d'offres"), No(), Ro(3, "p", 11), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.needs.length)
        }
      }

      function MC(e, t) {
        if (1 & e && (Ro(0, "div", 9), Ro(1, "p", 10), Ko(2, "Plaintes"), No(), Ro(3, "p", 11), Ko(4), No(), No()), 2 & e) {
          var n = qo();
          Er(4), Xo(n.complaints.length)
        }
      }

      function DC(e, t) {
        if (1 & e && (Ro(0, "h3"), Ko(1), No()), 2 & e) {
          var n = qo();
          Er(1), ea(" Liste des besoins (", n.needs.length, ")")
        }
      }

      function VC(e, t) {
        if (1 & e && (Ro(0, "tr"), Ro(1, "td"), Ko(2), No(), Ro(3, "td"), Ko(4), No(), Ro(5, "td"), Ro(6, "a", 12), Ko(7, "voir detail"), No(), No(), No()), 2 & e) {
          var n = t.$implicit;
          Er(2), Xo(n.need), Er(2), Xo(n.needDate), Er(2), zo("routerLink", "/suppliers/needs/view/", n.idneed, "")
        }
      }
      var LC, jC, UC, HC, qC, zC, GC, BC, WC, $C, ZC, QC, JC, YC, KC, XC = [{
          path: "supplier",
          component: (jC = function () {
            function e(t) {
              _classCallCheck(this, e), this.authService = t
            }
            return _createClass(e, [{
              key: "ngOnInit",
              value: function () {}
            }, {
              key: "sidebar",
              value: function () {
                this.status = !this.status
              }
            }]), e
          }(), jC.\u0275fac = function (e) {
            return new(e || jC)(Oo(hv))
          }, jC.\u0275cmp = ft({
            type: jC,
            selectors: [
              ["app-suppliers-main"]
            ],
            decls: 38,
            vars: 2,
            consts: [
              [1, "header"],
              [1, "toggle-btn", 3, "click"],
              ["id", "sidebar", 3, "ngClass"],
              [1, "sidebar-sticky"],
              [1, "nav", "flex-column"],
              [1, "nav-item"],
              ["routerLink", "/suppliers/dashboard", "routerLinkActive", "active", 1, "nav-link"],
              ["routerLink", "/townhalls/needs", "routerLinkActive", "active", 1, "nav-link"],
              ["data-feather", "bar-chart-2"],
              ["routerLink", "/townhalls/complaints", "routerLinkActive", "active", 1, "nav-link"],
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
            template: function (e, t) {
              1 & e && (Ro(0, "header", 0), Ro(1, "div", 1), jo("click", (function () {
                return t.sidebar()
              })), Mo(2, "span"), Mo(3, "span"), Mo(4, "span"), No(), No(), Ro(5, "div", 2), Ro(6, "nav"), Ro(7, "div", 3), Ro(8, "ul", 4), Ro(9, "li", 5), Ro(10, "a", 6), Ko(11, " Tableau de Bord "), No(), No(), Ro(12, "li", 5), Ro(13, "a", 7), Mo(14, "span", 8), Ko(15, " Appels d'offre "), No(), No(), Ro(16, "li", 5), Ro(17, "a", 9), Mo(18, "span", 8), Ko(19, " R\xe9actions "), No(), No(), No(), Ro(20, "h6", 10), Ro(21, "span"), Ko(22, "Param\xe8trages"), No(), Ro(23, "a", 11), Mo(24, "span", 12), No(), No(), Ro(25, "ul", 13), Ro(26, "li", 5), Ro(27, "a", 14), Mo(28, "span", 15), Ko(29, " Changer de mot de passe "), No(), No(), Ro(30, "li", 5), Ro(31, "a", 16), jo("click", (function () {
                return t.authService.logoutUser()
              })), Mo(32, "span", 15), Ko(33, " Deconnexion "), No(), No(), No(), No(), No(), No(), Ro(34, "div", 17), Ro(35, "div", 18), Ro(36, "main", 19), Mo(37, "router-outlet"), No(), No(), No()), 2 & e && (Er(5), Po("ngClass", t.status ? "sidebar-close" : "sidebar-open"), Er(29), Po("ngClass", t.status ? "main-yes" : "main-no"))
            },
            directives: [Rl, Pp, Vp, Up],
            styles: [""]
          }), jC),
          canActivate: [Gy],
          children: [{
            path: "dashboard",
            component: (LC = function () {
              function e(t, n, r, i, o, a, s) {
                _classCallCheck(this, e), this.authService = t, this.associationsService = n, this.householdsService = r, this.suppliersService = i, this.needsService = o, this.complaintsService = a, this.router = s
              }
              return _createClass(e, [{
                key: "ngOnInit",
                value: function () {
                  this.getUser(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
                }
              }, {
                key: "getUser",
                value: function () {
                  var e = this;
                  this.authService.user().subscribe((function (t) {
                    return e.user = t
                  }), (function (t) {
                    t instanceof Qc && 401 === t.status && e.router.navigate(["/login"])
                  }))
                }
              }, {
                key: "getComplaints",
                value: function () {
                  var e = this;
                  this.complaintsService.town().subscribe((function (t) {
                    return e.complaints = t
                  }))
                }
              }, {
                key: "getAssociations",
                value: function () {
                  var e = this;
                  this.associationsService.town().subscribe((function (t) {
                    return e.associations = t
                  }))
                }
              }, {
                key: "getHouseholds",
                value: function () {
                  var e = this;
                  this.householdsService.town().subscribe((function (t) {
                    return e.households = t
                  }))
                }
              }, {
                key: "getSuppliers",
                value: function () {
                  var e = this;
                  this.suppliersService.town().subscribe((function (t) {
                    return e.suppliers = t
                  }))
                }
              }, {
                key: "getNeeds",
                value: function () {
                  var e = this;
                  this.needsService.town().subscribe((function (t) {
                    return e.needs = t
                  }))
                }
              }]), e
            }(), LC.\u0275fac = function (e) {
              return new(e || LC)(Oo(hv), Oo(Ng), Oo(Mg), Oo(Dg), Oo(Vg), Oo(Lg), Oo(Tp))
            }, LC.\u0275cmp = ft({
              type: LC,
              selectors: [
                ["app-suppliers-dashboard"]
              ],
              decls: 11,
              vars: 5,
              consts: [
                ["class", "connected", 4, "ngIf"],
                [1, "row", "enumeration"],
                [1, "col-lg-4"],
                ["class", "cadre", 4, "ngIf"],
                [1, "needs"],
                [4, "ngIf"],
                [1, "table"],
                [4, "ngFor", "ngForOf"],
                [1, "connected"],
                [1, "cadre"],
                [1, "title"],
                [1, "value"],
                [3, "routerLink"]
              ],
              template: function (e, t) {
                1 & e && (Ao(0, RC, 7, 1, "p", 0), Ro(1, "section", 1), Ro(2, "div", 2), Ao(3, NC, 5, 1, "div", 3), No(), Ro(4, "div", 2), Ao(5, MC, 5, 1, "div", 3), No(), No(), Ro(6, "section", 4), Ao(7, DC, 2, 1, "h3", 5), Ro(8, "table", 6), Ro(9, "tbody"), Ao(10, VC, 8, 3, "tr", 7), No(), No(), No()), 2 & e && (Po("ngIf", t.user), Er(3), Po("ngIf", t.associations), Er(2), Po("ngIf", t.complaints), Er(2), Po("ngIf", t.needs), Er(3), Po("ngForOf", t.needs))
              },
              directives: [Vl, Ml, Pp],
              styles: [""]
            }), LC)
          }, {
            path: "add",
            component: uC
          }, {
            path: "view",
            component: vk
          }, {
            path: "needs",
            component: R_,
            children: [{
              path: "",
              component: Kk
            }, {
              path: "view/:id",
              component: G_
            }]
          }, {
            path: "complaints",
            component: Xy,
            children: [{
              path: "",
              component: qk,
              children: [{
                path: ":id",
                component: u_
              }]
            }]
          }]
        }],
        eb = ((GC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: GC
        }), GC.\u0275inj = de({
          factory: function (e) {
            return new(e || GC)
          },
          imports: [
            [Yp.forRoot(XC)], Yp
          ]
        }), GC),
        tb = ((zC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: zC
        }), zC.\u0275inj = de({
          factory: function (e) {
            return new(e || zC)
          },
          imports: [
            [Jl, Yp, cg, Ch, eb]
          ]
        }), zC),
        nb = ((qC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: qC
        }), qC.\u0275inj = de({
          factory: function (e) {
            return new(e || qC)
          },
          imports: [
            [Jl, Yp, Ch, cg]
          ]
        }), qC),
        rb = ((HC = function () {
          function e(t, n) {
            _classCallCheck(this, e), this.authService = t, this.router = n
          }
          return _createClass(e, [{
            key: "canActivate",
            value: function (e, t) {
              return !(!this.authService.loggedIn() || !this.authService.validity() || (this.router.navigate(["/administrator/dashboard"]), 0))
            }
          }]), e
        }()).\u0275fac = function (e) {
          return new(e || HC)(Je(hv), Je(Tp))
        }, HC.\u0275prov = fe({
          token: HC,
          factory: HC.\u0275fac,
          providedIn: "root"
        }), HC),
        ib = ((UC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: UC
        }), UC.\u0275inj = de({
          factory: function (e) {
            return new(e || UC)
          },
          imports: [
            [Jl, Yp, Ch, cg]
          ]
        }), UC),
        ob = [],
        ab = ((QC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: QC
        }), QC.\u0275inj = de({
          factory: function (e) {
            return new(e || QC)
          },
          imports: [
            [Yp.forRoot(ob)], Yp
          ]
        }), QC),
        sb = ((ZC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: ZC
        }), ZC.\u0275inj = de({
          factory: function (e) {
            return new(e || ZC)
          },
          imports: [
            [Jl, Yp, Ch, cg, ab]
          ]
        }), ZC),
        ub = (($C = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: $C
        }), $C.\u0275inj = de({
          factory: function (e) {
            return new(e || $C)
          },
          imports: [
            [Jl, Yp, cg, Ch]
          ]
        }), $C),
        lb = ((WC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: WC
        }), WC.\u0275inj = de({
          factory: function (e) {
            return new(e || WC)
          },
          imports: [
            [Jl, Yp, Ch, cg]
          ]
        }), WC),
        cb = ((BC = function e() {
          _classCallCheck(this, e)
        }).\u0275mod = mt({
          type: BC
        }), BC.\u0275inj = de({
          factory: function (e) {
            return new(e || BC)
          },
          imports: [
            [Jl, Yp, Ch, cg]
          ]
        }), BC);
      JC = gv.a, KC = void 0, "string" != typeof (YC = void 0) && (KC = YC, YC = JC[ss.LocaleId]), YC = YC.toLowerCase().replace(/_/g, "-"), is[YC] = JC, KC && (is[YC][ss.ExtraData] = KC);
      var hb, fb = ((hb = function e() {
        _classCallCheck(this, e)
      }).\u0275mod = mt({
        type: hb,
        bootstrap: [vv]
      }), hb.\u0275inj = de({
        factory: function (e) {
          return new(e || hb)
        },
        providers: [{
          provide: Ls,
          useValue: "fr-FR"
        }, {
          provide: uh,
          useClass: fv,
          multi: !0
        }, hv, Rg, Ng, Mg, Dg, Vg, ly, Wy, Lg, Gy, rb],
        imports: [
          [Tc, pv, Ig, Sk, hC, FC, ub, lb, tb, wk, nb, ib, sb, cb]
        ]
      }), hb);
      (function () {
        if (or) throw new Error("Cannot enable prod mode after platform setup.");
        ir = !1
      })(), Ac().bootstrapModule(fb).catch((function (e) {
        return console.error(e)
      }))
    },
    zn8P: function (e, t) {
      function n(e) {
        return Promise.resolve().then((function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }))
      }
      n.keys = function () {
        return []
      }, n.resolve = n, e.exports = n, n.id = "zn8P"
    }
  },
  [
    [0, 0]
  ]
]);