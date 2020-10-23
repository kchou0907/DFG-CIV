(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
      0: function (t, e, n) {
        t.exports = n("zUnb")
      },
      zUnb: function (t, e, n) {
        "use strict";

        function r(t) {
          return "function" == typeof t
        }
        n.r(e);
        let s = !1;
        const i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              const t = new Error;
              console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
            } else s && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            s = t
          },
          get useDeprecatedSynchronousErrorHandling() {
            return s
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
              if (i.useDeprecatedSynchronousErrorHandling) throw t;
              o(t)
            },
            complete() {}
          },
          l = (() => Array.isArray || (t => t && "number" == typeof t.length))();

        function u(t) {
          return null !== t && "object" == typeof t
        }
        const c = (() => {
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
                _unsubscribe: s,
                _subscriptions: i
              } = this;
              if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
              else if (null !== n)
                for (let t = 0; t < n.length; ++t) n[t].remove(this);
              if (r(s)) try {
                s.call(this)
              } catch (o) {
                e = o instanceof c ? d(o.errors) : [o]
              }
              if (l(i)) {
                let t = -1,
                  n = i.length;
                for (; ++t < n;) {
                  const n = i[t];
                  if (u(n)) try {
                    n.unsubscribe()
                  } catch (o) {
                    e = e || [], o instanceof c ? e = e.concat(d(o.errors)) : e.push(o)
                  }
                }
              }
              if (e) throw new c(e)
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
                _parentOrParents: r
              } = n;
              if (null === r) n._parentOrParents = this;
              else if (r instanceof t) {
                if (r === this) return n;
                n._parentOrParents = [r, this]
              } else {
                if (-1 !== r.indexOf(this)) return n;
                r.push(this)
              }
              const s = this._subscriptions;
              return null === s ? this._subscriptions = [n] : s.push(n), n
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
          return t.reduce((t, e) => t.concat(e instanceof c ? e.errors : e), [])
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
            const r = new f(t, e, n);
            return r.syncErrorThrowable = !1, r
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
          constructor(t, e, n, s) {
            let i;
            super(), this._parentSubscriber = t;
            let o = this;
            r(e) ? i = e : e && (i = e.next, n = e.error, s = e.complete, e !== a && (o = Object.create(e), r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = i, this._error = n, this._complete = s
          }
          next(t) {
            if (!this.isStopped && this._next) {
              const {
                _parentSubscriber: e
              } = this;
              i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
            }
          }
          error(t) {
            if (!this.isStopped) {
              const {
                _parentSubscriber: e
              } = this, {
                useDeprecatedSynchronousErrorHandling: n
              } = i;
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
                i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
              } else this.unsubscribe()
            }
          }
          __tryOrUnsub(t, e) {
            try {
              t.call(this._context, e)
            } catch (n) {
              if (this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling) throw n;
              o(n)
            }
          }
          __tryOrSetError(t, e, n) {
            if (!i.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
              e.call(this._context, n)
            } catch (r) {
              return i.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (o(r), !0)
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

        function v() {}

        function y(...t) {
          return _(t)
        }

        function _(t) {
          return t ? 1 === t.length ? t[0] : function (e) {
            return t.reduce((t, e) => e(t), e)
          } : v
        }
        let w = (() => {
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
                operator: r
              } = this, s = function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]()
                }
                return t || e || n ? new f(t, e, n) : new f(a)
              }(t, e, n);
              if (s.add(r ? r.call(s, this.source) : this.source || i.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), i.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
              return s
            }
            _trySubscribe(t) {
              try {
                return this._subscribe(t)
              } catch (e) {
                i.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                  function (t) {
                    for (; t;) {
                      const {
                        closed: e,
                        destination: n,
                        isStopped: r
                      } = t;
                      if (e || r) return !1;
                      t = n && n instanceof f ? n : null
                    }
                    return !0
                  }(t) ? t.error(e) : console.warn(e)
              }
            }
            forEach(t, e) {
              return new(e = b(e))((e, n) => {
                let r;
                r = this.subscribe(e => {
                  try {
                    t(e)
                  } catch (s) {
                    n(s), r && r.unsubscribe()
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
              return 0 === t.length ? this : _(t)(this)
            }
            toPromise(t) {
              return new(t = b(t))((t, e) => {
                let n;
                this.subscribe(t => n = t, t => e(t), () => t(n))
              })
            }
          }
          return t.create = e => new t(e), t
        })();

        function b(t) {
          if (t || (t = i.Promise || Promise), !t) throw new Error("no Promise impl found");
          return t
        }
        const C = (() => {
          function t() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();
        class S extends h {
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
        class x extends f {
          constructor(t) {
            super(t), this.destination = t
          }
        }
        let E = (() => {
          class t extends w {
            constructor() {
              super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
            } [p]() {
              return new x(this)
            }
            lift(t) {
              const e = new A(this, this);
              return e.operator = t, e
            }
            next(t) {
              if (this.closed) throw new C;
              if (!this.isStopped) {
                const {
                  observers: e
                } = this, n = e.length, r = e.slice();
                for (let s = 0; s < n; s++) r[s].next(t)
              }
            }
            error(t) {
              if (this.closed) throw new C;
              this.hasError = !0, this.thrownError = t, this.isStopped = !0;
              const {
                observers: e
              } = this, n = e.length, r = e.slice();
              for (let s = 0; s < n; s++) r[s].error(t);
              this.observers.length = 0
            }
            complete() {
              if (this.closed) throw new C;
              this.isStopped = !0;
              const {
                observers: t
              } = this, e = t.length, n = t.slice();
              for (let r = 0; r < e; r++) n[r].complete();
              this.observers.length = 0
            }
            unsubscribe() {
              this.isStopped = !0, this.closed = !0, this.observers = null
            }
            _trySubscribe(t) {
              if (this.closed) throw new C;
              return super._trySubscribe(t)
            }
            _subscribe(t) {
              if (this.closed) throw new C;
              return this.hasError ? (t.error(this.thrownError), h.EMPTY) : this.isStopped ? (t.complete(), h.EMPTY) : (this.observers.push(t), new S(this, t))
            }
            asObservable() {
              const t = new w;
              return t.source = this, t
            }
          }
          return t.create = (t, e) => new A(t, e), t
        })();
        class A extends E {
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

        function k(t) {
          return t && "function" == typeof t.schedule
        }
        class T extends f {
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
        const O = t => e => {
          for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
          e.complete()
        };

        function I() {
          return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        const R = I(),
          P = t => t && "number" == typeof t.length && "function" != typeof t;

        function N(t) {
          return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        const V = t => {
          if (t && "function" == typeof t[g]) return r = t, t => {
            const e = r[g]();
            if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return e.subscribe(t)
          };
          if (P(t)) return O(t);
          if (N(t)) return n = t, t => (n.then(e => {
            t.closed || (t.next(e), t.complete())
          }, e => t.error(e)).then(null, o), t);
          if (t && "function" == typeof t[R]) return e = t, t => {
            const n = e[R]();
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
            const e = u(t) ? "an invalid object" : `'${t}'`;
            throw new TypeError(`You provided ${e} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.")
          }
          var e, n, r
        };

        function F(t, e, n, r, s = new T(t, n, r)) {
          if (!s.closed) return e instanceof w ? e.subscribe(s) : V(e)(s)
        }
        class D extends f {
          notifyNext(t, e, n, r, s) {
            this.destination.next(e)
          }
          notifyError(t, e) {
            this.destination.error(t)
          }
          notifyComplete(t) {
            this.destination.complete()
          }
        }

        function M(t, e) {
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
            return e.subscribe(new U(t, this.project, this.thisArg))
          }
        }
        class U extends f {
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

        function L(t, e) {
          return new w(n => {
            const r = new h;
            let s = 0;
            return r.add(e.schedule((function () {
              s !== t.length ? (n.next(t[s++]), n.closed || r.add(this.schedule())) : n.complete()
            }))), r
          })
        }

        function H(t, e) {
          return e ? function (t, e) {
            if (null != t) {
              if (function (t) {
                  return t && "function" == typeof t[g]
                }(t)) return function (t, e) {
                return new w(n => {
                  const r = new h;
                  return r.add(e.schedule(() => {
                    const s = t[g]();
                    r.add(s.subscribe({
                      next(t) {
                        r.add(e.schedule(() => n.next(t)))
                      },
                      error(t) {
                        r.add(e.schedule(() => n.error(t)))
                      },
                      complete() {
                        r.add(e.schedule(() => n.complete()))
                      }
                    }))
                  })), r
                })
              }(t, e);
              if (N(t)) return function (t, e) {
                return new w(n => {
                  const r = new h;
                  return r.add(e.schedule(() => t.then(t => {
                    r.add(e.schedule(() => {
                      n.next(t), r.add(e.schedule(() => n.complete()))
                    }))
                  }, t => {
                    r.add(e.schedule(() => n.error(t)))
                  }))), r
                })
              }(t, e);
              if (P(t)) return L(t, e);
              if (function (t) {
                  return t && "function" == typeof t[R]
                }(t) || "string" == typeof t) return function (t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new w(n => {
                  const r = new h;
                  let s;
                  return r.add(() => {
                    s && "function" == typeof s.return && s.return()
                  }), r.add(e.schedule(() => {
                    s = t[R](), r.add(e.schedule((function () {
                      if (n.closed) return;
                      let t, e;
                      try {
                        const n = s.next();
                        t = n.value, e = n.done
                      } catch (r) {
                        return void n.error(r)
                      }
                      e ? n.complete() : (n.next(t), this.schedule())
                    })))
                  })), r
                })
              }(t, e)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
          }(t, e) : t instanceof w ? t : new w(V(t))
        }

        function $(t, e, n = Number.POSITIVE_INFINITY) {
          return "function" == typeof e ? r => r.pipe($((n, r) => H(t(n, r)).pipe(M((t, s) => e(n, t, r, s))), n)) : ("number" == typeof e && (n = e), e => e.lift(new q(t, n)))
        }
        class q {
          constructor(t, e = Number.POSITIVE_INFINITY) {
            this.project = t, this.concurrent = e
          }
          call(t, e) {
            return e.subscribe(new z(t, this.project, this.concurrent))
          }
        }
        class z extends D {
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
            } catch (r) {
              return void this.destination.error(r)
            }
            this.active++, this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const r = new T(this, e, n),
              s = this.destination;
            s.add(r);
            const i = F(this, t, void 0, void 0, r);
            i !== r && s.add(i)
          }
          _complete() {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
          }
          notifyNext(t, e, n, r, s) {
            this.destination.next(e)
          }
          notifyComplete(t) {
            const e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
          }
        }

        function G(t) {
          return t
        }

        function B(t = Number.POSITIVE_INFINITY) {
          return $(G, t)
        }

        function W(t, e) {
          return e ? L(t, e) : new w(O(t))
        }

        function Z() {
          return function (t) {
            return t.lift(new Q(t))
          }
        }
        class Q {
          constructor(t) {
            this.connectable = t
          }
          call(t, e) {
            const {
              connectable: n
            } = this;
            n._refCount++;
            const r = new J(t, n),
              s = e.subscribe(r);
            return r.closed || (r.connection = n.connect()), s
          }
        }
        class J extends f {
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
            } = this, r = t._connection;
            this.connection = null, !r || n && r !== n || r.unsubscribe()
          }
        }
        class K extends w {
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
            return Z()(this)
          }
        }
        const Y = (() => {
          const t = K.prototype;
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
        class X extends x {
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
          return new E
        }

        function et(t) {
          return {
            toString: t
          }.toString()
        }

        function nt(t, e, n) {
          return et(() => {
            const r = function (t) {
              return function (...e) {
                if (t) {
                  const n = t(...e);
                  for (const t in n) this[t] = n[t]
                }
              }
            }(e);

            function s(...t) {
              if (this instanceof s) return r.apply(this, t), this;
              const e = new s(...t);
              return n.annotation = e, n;

              function n(t, n, r) {
                const s = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", {
                  value: []
                }).__parameters__;
                for (; s.length <= r;) s.push(null);
                return (s[r] = s[r] || []).push(e), t
              }
            }
            return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s
          })
        }
        const rt = nt("Inject", t => ({
            token: t
          })),
          st = nt("Optional"),
          it = nt("Self"),
          ot = nt("SkipSelf");
        var at = function (t) {
          return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
        }({});

        function lt(t) {
          for (let e in t)
            if (t[e] === lt) return e;
          throw Error("Could not find renamed property on target object.")
        }

        function ut(t, e) {
          for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
        }

        function ct(t) {
          return {
            token: t.token,
            providedIn: t.providedIn || null,
            factory: t.factory,
            value: void 0
          }
        }

        function ht(t) {
          return {
            factory: t.factory,
            providers: t.providers || [],
            imports: t.imports || []
          }
        }

        function dt(t) {
          return pt(t, t[mt]) || pt(t, t[yt])
        }

        function pt(t, e) {
          return e && e.token === t ? e : null
        }

        function ft(t) {
          return t && (t.hasOwnProperty(gt) || t.hasOwnProperty(_t)) ? t[gt] : null
        }
        const mt = lt({
            "\u0275prov": lt
          }),
          gt = lt({
            "\u0275inj": lt
          }),
          vt = lt({
            "\u0275provFallback": lt
          }),
          yt = lt({
            ngInjectableDef: lt
          }),
          _t = lt({
            ngInjectorDef: lt
          });

        function wt(t) {
          if ("string" == typeof t) return t;
          if (Array.isArray(t)) return "[" + t.map(wt).join(", ") + "]";
          if (null == t) return "" + t;
          if (t.overriddenName) return `${t.overriddenName}`;
          if (t.name) return `${t.name}`;
          const e = t.toString();
          if (null == e) return "" + e;
          const n = e.indexOf("\n");
          return -1 === n ? e : e.substring(0, n)
        }

        function bt(t, e) {
          return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
        }
        const Ct = lt({
          __forward_ref__: lt
        });

        function St(t) {
          return t.__forward_ref__ = St, t.toString = function () {
            return wt(this())
          }, t
        }

        function xt(t) {
          return Et(t) ? t() : t
        }

        function Et(t) {
          return "function" == typeof t && t.hasOwnProperty(Ct) && t.__forward_ref__ === St
        }
        const At = "undefined" != typeof globalThis && globalThis,
          kt = "undefined" != typeof window && window,
          Tt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
          Ot = "undefined" != typeof global && global,
          It = At || Ot || kt || Tt,
          Rt = lt({
            "\u0275cmp": lt
          }),
          Pt = lt({
            "\u0275dir": lt
          }),
          Nt = lt({
            "\u0275pipe": lt
          }),
          Vt = lt({
            "\u0275mod": lt
          }),
          Ft = lt({
            "\u0275loc": lt
          }),
          Dt = lt({
            "\u0275fac": lt
          }),
          Mt = lt({
            __NG_ELEMENT_ID__: lt
          });
        class jt {
          constructor(t, e) {
            this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = ct({
              token: this,
              providedIn: e.providedIn || "root",
              factory: e.factory
            }))
          }
          toString() {
            return `InjectionToken ${this._desc}`
          }
        }
        const Ut = new jt("INJECTOR", -1),
          Lt = {},
          Ht = /\n/gm,
          $t = lt({
            provide: String,
            useValue: lt
          });
        let qt, zt = void 0;

        function Gt(t) {
          const e = zt;
          return zt = t, e
        }

        function Bt(t) {
          const e = qt;
          return qt = t, e
        }

        function Wt(t, e = at.Default) {
          if (void 0 === zt) throw new Error("inject() must be called from an injection context");
          return null === zt ? Qt(t, void 0, e) : zt.get(t, e & at.Optional ? null : void 0, e)
        }

        function Zt(t, e = at.Default) {
          return (qt || Wt)(xt(t), e)
        }

        function Qt(t, e, n) {
          const r = dt(t);
          if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
          if (n & at.Optional) return null;
          if (void 0 !== e) return e;
          throw new Error(`Injector: NOT_FOUND [${wt(t)}]`)
        }

        function Jt(t) {
          const e = [];
          for (let n = 0; n < t.length; n++) {
            const r = xt(t[n]);
            if (Array.isArray(r)) {
              if (0 === r.length) throw new Error("Arguments array must have arguments.");
              let t = void 0,
                n = at.Default;
              for (let e = 0; e < r.length; e++) {
                const s = r[e];
                s instanceof st || "Optional" === s.ngMetadataName || s === st ? n |= at.Optional : s instanceof ot || "SkipSelf" === s.ngMetadataName || s === ot ? n |= at.SkipSelf : s instanceof it || "Self" === s.ngMetadataName || s === it ? n |= at.Self : t = s instanceof rt || s === rt ? s.token : s
              }
              e.push(Zt(t, n))
            } else e.push(Zt(r))
          }
          return e
        }
        class Kt {
          get(t, e = Lt) {
            if (e === Lt) {
              const e = new Error(`NullInjectorError: No provider for ${wt(t)}!`);
              throw e.name = "NullInjectorError", e
            }
            return e
          }
        }
        class Yt {}
        class Xt {}

        function te(t, e) {
          t.forEach(t => Array.isArray(t) ? te(t, e) : e(t))
        }

        function ee(t, e, n) {
          e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }

        function ne(t, e) {
          return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
        }

        function re(t, e, n) {
          let r = ie(t, e);
          return r >= 0 ? t[1 | r] = n : (r = ~r, function (t, e, n, r) {
            let s = t.length;
            if (s == e) t.push(n, r);
            else if (1 === s) t.push(r, t[0]), t[0] = n;
            else {
              for (s--, t.push(t[s - 1], t[s]); s > e;) t[s] = t[s - 2], s--;
              t[e] = n, t[e + 1] = r
            }
          }(t, r, e, n)), r
        }

        function se(t, e) {
          const n = ie(t, e);
          if (n >= 0) return t[1 | n]
        }

        function ie(t, e) {
          return function (t, e, n) {
            let r = 0,
              s = t.length >> 1;
            for (; s !== r;) {
              const n = r + (s - r >> 1),
                i = t[n << 1];
              if (e === i) return n << 1;
              i > e ? s = n : r = n + 1
            }
            return ~(s << 1)
          }(t, e)
        }
        const oe = function () {
            var t = {
              OnPush: 0,
              Default: 1
            };
            return t[t.OnPush] = "OnPush", t[t.Default] = "Default", t
          }(),
          ae = function () {
            var t = {
              Emulated: 0,
              Native: 1,
              None: 2,
              ShadowDom: 3
            };
            return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t
          }(),
          le = {},
          ue = [];
        let ce = 0;

        function he(t) {
          return et(() => {
            const e = t.type,
              n = e.prototype,
              r = {},
              s = {
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
                declaredInputs: r,
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
                onPush: t.changeDetection === oe.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                selectors: t.selectors || ue,
                viewQuery: t.viewQuery || null,
                features: t.features || null,
                data: t.data || {},
                encapsulation: t.encapsulation || ae.Emulated,
                id: "c",
                styles: t.styles || ue,
                _: null,
                setInput: null,
                schemas: t.schemas || null,
                tView: null
              },
              i = t.directives,
              o = t.features,
              a = t.pipes;
            return s.id += ce++, s.inputs = ge(t.inputs, r), s.outputs = ge(t.outputs), o && o.forEach(t => t(s)), s.directiveDefs = i ? () => ("function" == typeof i ? i() : i).map(de) : null, s.pipeDefs = a ? () => ("function" == typeof a ? a() : a).map(pe) : null, s
          })
        }

        function de(t) {
          return _e(t) || function (t) {
            return t[Pt] || null
          }(t)
        }

        function pe(t) {
          return function (t) {
            return t[Nt] || null
          }(t)
        }
        const fe = {};

        function me(t) {
          const e = {
            type: t.type,
            bootstrap: t.bootstrap || ue,
            declarations: t.declarations || ue,
            imports: t.imports || ue,
            exports: t.exports || ue,
            transitiveCompileScopes: null,
            schemas: t.schemas || null,
            id: t.id || null
          };
          return null != t.id && et(() => {
            fe[t.id] = t.type
          }), e
        }

        function ge(t, e) {
          if (null == t) return le;
          const n = {};
          for (const r in t)
            if (t.hasOwnProperty(r)) {
              let s = t[r],
                i = s;
              Array.isArray(s) && (i = s[1], s = s[0]), n[s] = r, e && (e[s] = i)
            } return n
        }
        const ve = he;

        function ye(t) {
          return {
            type: t.type,
            name: t.name,
            factory: null,
            pure: !1 !== t.pure,
            onDestroy: t.type.prototype.ngOnDestroy || null
          }
        }

        function _e(t) {
          return t[Rt] || null
        }

        function we(t, e) {
          return t.hasOwnProperty(Dt) ? t[Dt] : null
        }

        function be(t, e) {
          const n = t[Vt] || null;
          if (!n && !0 === e) throw new Error(`Type ${wt(t)} does not have '\u0275mod' property.`);
          return n
        }

        function Ce(t) {
          return Array.isArray(t) && "object" == typeof t[1]
        }

        function Se(t) {
          return Array.isArray(t) && !0 === t[1]
        }

        function xe(t) {
          return 0 != (8 & t.flags)
        }

        function Ee(t) {
          return 2 == (2 & t.flags)
        }

        function Ae(t) {
          return 1 == (1 & t.flags)
        }

        function ke(t) {
          return null !== t.template
        }

        function Te(t) {
          return 0 != (512 & t[2])
        }
        let Oe = void 0;

        function Ie(t) {
          return !!t.listen
        }
        const Re = {
          createRenderer: (t, e) => void 0 !== Oe ? Oe : "undefined" != typeof document ? document : void 0
        };

        function Pe(t) {
          for (; Array.isArray(t);) t = t[0];
          return t
        }

        function Ne(t, e) {
          return Pe(e[t + 19])
        }

        function Ve(t, e) {
          return Pe(e[t.index])
        }

        function Fe(t, e) {
          return t.data[e + 19]
        }

        function De(t, e) {
          const n = e[t];
          return Ce(n) ? n : n[0]
        }

        function Me(t) {
          const e = function (t) {
            return t.__ngContext__ || null
          }(t);
          return e ? Array.isArray(e) ? e : e.lView : null
        }

        function je(t) {
          return 4 == (4 & t[2])
        }

        function Ue(t) {
          return 128 == (128 & t[2])
        }

        function Le(t, e) {
          return null === t || null == e ? null : t[e]
        }

        function He(t) {
          t[18] = 0
        }
        const $e = {
          lFrame: sn(null),
          bindingsEnabled: !0,
          checkNoChangesMode: !1
        };

        function qe() {
          return $e.bindingsEnabled
        }

        function ze() {
          return $e.lFrame.lView
        }

        function Ge() {
          return $e.lFrame.tView
        }

        function Be() {
          return $e.lFrame.previousOrParentTNode
        }

        function We(t, e) {
          $e.lFrame.previousOrParentTNode = t, $e.lFrame.isParent = e
        }

        function Ze() {
          return $e.lFrame.isParent
        }

        function Qe() {
          return $e.checkNoChangesMode
        }

        function Je(t) {
          $e.checkNoChangesMode = t
        }

        function Ke() {
          return $e.lFrame.bindingIndex++
        }

        function Ye(t, e) {
          const n = $e.lFrame;
          n.bindingIndex = n.bindingRootIndex = t, n.currentDirectiveIndex = e
        }

        function Xe() {
          return $e.lFrame.currentQueryIndex
        }

        function tn(t) {
          $e.lFrame.currentQueryIndex = t
        }

        function en(t, e) {
          const n = rn();
          $e.lFrame = n, n.previousOrParentTNode = e, n.lView = t
        }

        function nn(t, e) {
          const n = rn(),
            r = t[1];
          $e.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = r, n.contextLView = t, n.bindingIndex = r.bindingStartIndex
        }

        function rn() {
          const t = $e.lFrame,
            e = null === t ? null : t.child;
          return null === e ? sn(t) : e
        }

        function sn(t) {
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

        function on() {
          const t = $e.lFrame;
          return $e.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
        }
        const an = on;

        function ln() {
          const t = on();
          t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.currentSanitizer = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
        }

        function un() {
          return $e.lFrame.selectedIndex
        }

        function cn(t) {
          $e.lFrame.selectedIndex = t
        }

        function hn() {
          const t = $e.lFrame;
          return Fe(t.tView, t.selectedIndex)
        }

        function dn(t, e) {
          for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
            const e = t.data[n];
            e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit), e.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)), e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit), e.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)), null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy)
          }
        }

        function pn(t, e, n) {
          gn(t, e, 3, n)
        }

        function fn(t, e, n, r) {
          (3 & t[2]) === n && gn(t, e, n, r)
        }

        function mn(t, e) {
          let n = t[2];
          (3 & n) === e && (n &= 1023, n += 1, t[2] = n)
        }

        function gn(t, e, n, r) {
          const s = null != r ? r : -1;
          let i = 0;
          for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
            if ("number" == typeof e[o + 1]) {
              if (i = e[o], null != r && i >= r) break
            } else e[o] < 0 && (t[18] += 65536), (i < s || -1 == s) && (vn(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++
        }

        function vn(t, e, n, r) {
          const s = n[r] < 0,
            i = n[r + 1],
            o = t[s ? -n[r] : n[r]];
          s ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 1024, i.call(o)) : i.call(o)
        }
        class yn {
          constructor(t, e, n) {
            this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
          }
        }

        function _n(t, e, n) {
          const r = Ie(t);
          let s = 0;
          for (; s < n.length;) {
            const i = n[s];
            if ("number" == typeof i) {
              if (0 !== i) break;
              s++;
              const o = n[s++],
                a = n[s++],
                l = n[s++];
              r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
            } else {
              const o = i,
                a = n[++s];
              bn(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++
            }
          }
          return s
        }

        function wn(t) {
          return 3 === t || 4 === t || 6 === t
        }

        function bn(t) {
          return 64 === t.charCodeAt(0)
        }

        function Cn(t, e) {
          if (null === e || 0 === e.length);
          else if (null === t || 0 === t.length) t = e.slice();
          else {
            let n = -1;
            for (let r = 0; r < e.length; r++) {
              const s = e[r];
              "number" == typeof s ? n = s : 0 === n || Sn(t, n, s, null, -1 === n || 2 === n ? e[++r] : null)
            }
          }
          return t
        }

        function Sn(t, e, n, r, s) {
          let i = 0,
            o = t.length;
          if (-1 === e) o = -1;
          else
            for (; i < t.length;) {
              const n = t[i++];
              if ("number" == typeof n) {
                if (n === e) {
                  o = -1;
                  break
                }
                if (n > e) {
                  o = i - 1;
                  break
                }
              }
            }
          for (; i < t.length;) {
            const e = t[i];
            if ("number" == typeof e) break;
            if (e === n) {
              if (null === r) return void(null !== s && (t[i + 1] = s));
              if (r === t[i + 1]) return void(t[i + 2] = s)
            }
            i++, null !== r && i++, null !== s && i++
          } - 1 !== o && (t.splice(o, 0, e), i = o + 1), t.splice(i++, 0, n), null !== r && t.splice(i++, 0, r), null !== s && t.splice(i++, 0, s)
        }

        function xn(t) {
          return -1 !== t
        }

        function En(t) {
          return 32767 & t
        }

        function An(t) {
          return t >> 16
        }

        function kn(t, e) {
          let n = An(t),
            r = e;
          for (; n > 0;) r = r[15], n--;
          return r
        }

        function Tn(t) {
          return "string" == typeof t ? t : null == t ? "" : "" + t
        }

        function On(t) {
          return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : Tn(t)
        }
        const In = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(It))();

        function Rn(t) {
          return t instanceof Function ? t() : t
        }
        let Pn = !0;

        function Nn(t) {
          const e = Pn;
          return Pn = t, e
        }
        let Vn = 0;

        function Fn(t, e) {
          const n = Mn(t, e);
          if (-1 !== n) return n;
          const r = e[1];
          r.firstCreatePass && (t.injectorIndex = e.length, Dn(r.data, t), Dn(e, null), Dn(r.blueprint, null));
          const s = jn(t, e),
            i = t.injectorIndex;
          if (xn(s)) {
            const t = En(s),
              n = kn(s, e),
              r = n[1].data;
            for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s]
          }
          return e[i + 8] = s, i
        }

        function Dn(t, e) {
          t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
        }

        function Mn(t, e) {
          return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
        }

        function jn(t, e) {
          if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
          let n = e[6],
            r = 1;
          for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, r++;
          return n ? n.injectorIndex | r << 16 : -1
        }

        function Un(t, e, n) {
          ! function (t, e, n) {
            let r = "string" != typeof n ? n[Mt] : n.charCodeAt(0) || 0;
            null == r && (r = n[Mt] = Vn++);
            const s = 255 & r,
              i = 1 << s,
              o = 64 & s,
              a = 32 & s,
              l = e.data;
            128 & s ? o ? a ? l[t + 7] |= i : l[t + 6] |= i : a ? l[t + 5] |= i : l[t + 4] |= i : o ? a ? l[t + 3] |= i : l[t + 2] |= i : a ? l[t + 1] |= i : l[t] |= i
          }(t, e, n)
        }

        function Ln(t, e, n, r = at.Default, s) {
          if (null !== t) {
            const s = function (t) {
              if ("string" == typeof t) return t.charCodeAt(0) || 0;
              const e = t[Mt];
              return "number" == typeof e && e > 0 ? 255 & e : e
            }(n);
            if ("function" == typeof s) {
              en(e, t);
              try {
                const t = s();
                if (null != t || r & at.Optional) return t;
                throw new Error(`No provider for ${On(n)}!`)
              } finally {
                an()
              }
            } else if ("number" == typeof s) {
              if (-1 === s) return new Wn(t, e);
              let i = null,
                o = Mn(t, e),
                a = -1,
                l = r & at.Host ? e[16][6] : null;
              for ((-1 === o || r & at.SkipSelf) && (a = -1 === o ? jn(t, e) : e[o + 8], Bn(r, !1) ? (i = e[1], o = En(a), e = kn(a, e)) : o = -1); - 1 !== o;) {
                a = e[o + 8];
                const t = e[1];
                if (Gn(s, o, t.data)) {
                  const t = $n(o, e, n, i, r, l);
                  if (t !== Hn) return t
                }
                Bn(r, e[1].data[o + 8] === l) && Gn(s, o, e) ? (i = t, o = En(a), e = kn(a, e)) : o = -1
              }
            }
          }
          if (r & at.Optional && void 0 === s && (s = null), 0 == (r & (at.Self | at.Host))) {
            const t = e[9],
              i = Bt(void 0);
            try {
              return t ? t.get(n, s, r & at.Optional) : Qt(n, s, r & at.Optional)
            } finally {
              Bt(i)
            }
          }
          if (r & at.Optional) return s;
          throw new Error(`NodeInjector: NOT_FOUND [${On(n)}]`)
        }
        const Hn = {};

        function $n(t, e, n, r, s, i) {
          const o = e[1],
            a = o.data[t + 8],
            l = qn(a, o, n, null == r ? Ee(a) && Pn : r != o && 3 === a.type, s & at.Host && i === a);
          return null !== l ? zn(e, o, l, a) : Hn
        }

        function qn(t, e, n, r, s) {
          const i = t.providerIndexes,
            o = e.data,
            a = 65535 & i,
            l = t.directiveStart,
            u = i >> 16,
            c = s ? a + u : t.directiveEnd;
          for (let h = r ? a : a + u; h < c; h++) {
            const t = o[h];
            if (h < l && n === t || h >= l && t.type === n) return h
          }
          if (s) {
            const t = o[l];
            if (t && ke(t) && t.type === n) return l
          }
          return null
        }

        function zn(t, e, n, r) {
          let s = t[n];
          const i = e.data;
          if (s instanceof yn) {
            const o = s;
            if (o.resolving) throw new Error(`Circular dep for ${On(i[n])}`);
            const a = Nn(o.canSeeViewProviders);
            let l;
            o.resolving = !0, o.injectImpl && (l = Bt(o.injectImpl)), en(t, r);
            try {
              s = t[n] = o.factory(void 0, i, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
                const {
                  onChanges: r,
                  onInit: s,
                  doCheck: i
                } = e;
                r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)), s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i))
              }(n, i[n], e)
            } finally {
              o.injectImpl && Bt(l), Nn(a), o.resolving = !1, an()
            }
          }
          return s
        }

        function Gn(t, e, n) {
          const r = 64 & t,
            s = 32 & t;
          let i;
          return i = 128 & t ? r ? s ? n[e + 7] : n[e + 6] : s ? n[e + 5] : n[e + 4] : r ? s ? n[e + 3] : n[e + 2] : s ? n[e + 1] : n[e], !!(i & 1 << t)
        }

        function Bn(t, e) {
          return !(t & at.Self || t & at.Host && e)
        }
        class Wn {
          constructor(t, e) {
            this._tNode = t, this._lView = e
          }
          get(t, e) {
            return Ln(this._tNode, this._lView, t, void 0, e)
          }
        }

        function Zn(t) {
          return et(() => {
            const e = Object.getPrototypeOf(t.prototype).constructor,
              n = e[Dt] || function t(e) {
                const n = e;
                if (Et(e)) return () => {
                  const e = t(xt(n));
                  return e ? e() : null
                };
                let r = we(n);
                if (null === r) {
                  const t = ft(n);
                  r = t && t.factory
                }
                return r || null
              }(e);
            return null !== n ? n : t => new t
          })
        }

        function Qn(t) {
          return t.ngDebugContext
        }

        function Jn(t) {
          return t.ngOriginalError
        }

        function Kn(t, ...e) {
          t.error(...e)
        }
        class Yn {
          constructor() {
            this._console = console
          }
          handleError(t) {
            const e = this._findOriginalError(t),
              n = this._findContext(t),
              r = function (t) {
                return t.ngErrorLogger || Kn
              }(t);
            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
          }
          _findContext(t) {
            return t ? Qn(t) ? Qn(t) : this._findContext(Jn(t)) : null
          }
          _findOriginalError(t) {
            let e = Jn(t);
            for (; e && Jn(e);) e = Jn(e);
            return e
          }
        }
        class Xn {
          constructor(t) {
            this.changingThisBreaksApplicationSecurity = t
          }
          toString() {
            return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)"
          }
        }

        function tr(t) {
          return t instanceof Xn ? t.changingThisBreaksApplicationSecurity : t
        }
        let er = !0,
          nr = !1;

        function rr() {
          return nr = !0, er
        }
        const sr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
          ir = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
          or = function () {
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

        function ar(t) {
          const e = function () {
            const t = ze();
            return t && t[12]
          }();
          return e ? e.sanitize(or.URL, t) || "" : function (t, e) {
            const n = function (t) {
              return t instanceof Xn && t.getTypeName() || null
            }(t);
            if (null != n && n !== e) {
              if ("ResourceURL" === n && "URL" === e) return !0;
              throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`)
            }
            return n === e
          }(t, "URL") ? tr(t) : (n = Tn(t), (n = String(n)).match(sr) || n.match(ir) ? n : (rr() && console.warn(`WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`), "unsafe:" + n));
          var n
        }

        function lr(t, e) {
          t.__ngContext__ = e
        }

        function ur(t) {
          throw new Error(`Multiple components match node with tagname ${t.tagName}`)
        }

        function cr() {
          throw new Error("Cannot mix multi providers and regular providers")
        }

        function hr(t, e, n) {
          let r = t.length;
          for (;;) {
            const s = t.indexOf(e, n);
            if (-1 === s) return s;
            if (0 === s || t.charCodeAt(s - 1) <= 32) {
              const n = e.length;
              if (s + n === r || t.charCodeAt(s + n) <= 32) return s
            }
            n = s + 1
          }
        }

        function dr(t, e, n) {
          let r = 0;
          for (; r < t.length;) {
            let s = t[r++];
            if (n && "class" === s) {
              if (s = t[r], -1 !== hr(s.toLowerCase(), e, 0)) return !0
            } else if (1 === s) {
              for (; r < t.length && "string" == typeof (s = t[r++]);)
                if (s.toLowerCase() === e) return !0;
              return !1
            }
          }
          return !1
        }

        function pr(t, e, n) {
          return e === (0 !== t.type || n ? t.tagName : "ng-template")
        }

        function fr(t, e, n) {
          let r = 4;
          const s = t.attrs || [],
            i = function (t) {
              for (let e = 0; e < t.length; e++)
                if (wn(t[e])) return e;
              return t.length
            }(s);
          let o = !1;
          for (let a = 0; a < e.length; a++) {
            const l = e[a];
            if ("number" != typeof l) {
              if (!o)
                if (4 & r) {
                  if (r = 2 | 1 & r, "" !== l && !pr(t, l, n) || "" === l && 1 === e.length) {
                    if (mr(r)) return !1;
                    o = !0
                  }
                } else {
                  const u = 8 & r ? l : e[++a];
                  if (8 & r && null !== t.attrs) {
                    if (!dr(t.attrs, u, n)) {
                      if (mr(r)) return !1;
                      o = !0
                    }
                    continue
                  }
                  const c = gr(8 & r ? "class" : l, s, 0 == t.type && "ng-template" !== t.tagName, n);
                  if (-1 === c) {
                    if (mr(r)) return !1;
                    o = !0;
                    continue
                  }
                  if ("" !== u) {
                    let t;
                    t = c > i ? "" : s[c + 1].toLowerCase();
                    const e = 8 & r ? t : null;
                    if (e && -1 !== hr(e, u, 0) || 2 & r && u !== t) {
                      if (mr(r)) return !1;
                      o = !0
                    }
                  }
                }
            } else {
              if (!o && !mr(r) && !mr(l)) return !1;
              if (o && mr(l)) continue;
              o = !1, r = l | 1 & r
            }
          }
          return mr(r) || o
        }

        function mr(t) {
          return 0 == (1 & t)
        }

        function gr(t, e, n, r) {
          if (null === e) return -1;
          let s = 0;
          if (r || !n) {
            let n = !1;
            for (; s < e.length;) {
              const r = e[s];
              if (r === t) return s;
              if (3 === r || 6 === r) n = !0;
              else {
                if (1 === r || 2 === r) {
                  let t = e[++s];
                  for (;
                    "string" == typeof t;) t = e[++s];
                  continue
                }
                if (4 === r) break;
                if (0 === r) {
                  s += 4;
                  continue
                }
              }
              s += n ? 1 : 2
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

        function vr(t, e, n = !1) {
          for (let r = 0; r < e.length; r++)
            if (fr(t, e[r], n)) return !0;
          return !1
        }

        function yr(t, e) {
          return t ? ":not(" + e.trim() + ")" : e
        }

        function _r(t) {
          let e = t[0],
            n = 1,
            r = 2,
            s = "",
            i = !1;
          for (; n < t.length;) {
            let o = t[n];
            if ("string" == typeof o)
              if (2 & r) {
                const e = t[++n];
                s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
              } else 8 & r ? s += "." + o : 4 & r && (s += " " + o);
            else "" === s || mr(o) || (e += yr(i, s), s = ""), r = o, i = i || !mr(r);
            n++
          }
          return "" !== s && (e += yr(i, s)), e
        }
        const wr = {};

        function br(t) {
          const e = t[3];
          return Se(e) ? e[3] : e
        }

        function Cr(t) {
          Sr(Ge(), ze(), un() + t, Qe())
        }

        function Sr(t, e, n, r) {
          if (!r)
            if (3 == (3 & e[2])) {
              const r = t.preOrderCheckHooks;
              null !== r && pn(e, r, n)
            } else {
              const r = t.preOrderHooks;
              null !== r && fn(e, r, 0, n)
            } cn(n)
        }

        function xr(t, e) {
          return t << 17 | e << 2
        }

        function Er(t) {
          return t >> 17 & 32767
        }

        function Ar(t) {
          return 2 | t
        }

        function kr(t) {
          return (131068 & t) >> 2
        }

        function Tr(t, e) {
          return -131069 & t | e << 2
        }

        function Or(t) {
          return 1 | t
        }

        function Ir(t, e) {
          const n = t.contentQueries;
          if (null !== n)
            for (let r = 0; r < n.length; r += 2) {
              const s = n[r],
                i = n[r + 1];
              if (-1 !== i) {
                const n = t.data[i];
                tn(s), n.contentQueries(2, e[i], i)
              }
            }
        }

        function Rr(t, e, n) {
          return Ie(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
        }

        function Pr(t, e, n, r, s, i, o, a, l, u) {
          const c = e.blueprint.slice();
          return c[0] = s, c[2] = 140 | r, He(c), c[3] = c[15] = t, c[8] = n, c[10] = o || t && t[10], c[11] = a || t && t[11], c[12] = l || t && t[12] || null, c[9] = u || t && t[9] || null, c[6] = i, c[16] = 2 == e.type ? t[16] : c, c
        }

        function Nr(t, e, n, r, s, i) {
          const o = n + 19,
            a = t.data[o] || function (t, e, n, r, s, i) {
              const o = Be(),
                a = Ze(),
                l = a ? o : o && o.parent,
                u = t.data[n] = $r(0, l && l !== e ? l : null, r, n, s, i);
              return null === t.firstChild && (t.firstChild = u), o && (!a || null != o.child || null === u.parent && 2 !== o.type ? a || (o.next = u) : o.child = u), u
            }(t, e, o, r, s, i);
          return We(a, !0), a
        }

        function Vr(t, e, n) {
          nn(e, e[6]);
          try {
            const r = t.viewQuery;
            null !== r && hs(1, r, n);
            const s = t.template;
            null !== s && Mr(t, e, s, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Ir(t, e), t.staticViewQueries && hs(2, t.viewQuery, n);
            const i = t.components;
            null !== i && function (t, e) {
              for (let n = 0; n < e.length; n++) os(t, e[n])
            }(e, i)
          } finally {
            e[2] &= -5, ln()
          }
        }

        function Fr(t, e, n, r) {
          const s = e[2];
          if (256 == (256 & s)) return;
          nn(e, e[6]);
          const i = Qe();
          try {
            He(e), $e.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Mr(t, e, n, 2, r);
            const o = 3 == (3 & s);
            if (!i)
              if (o) {
                const n = t.preOrderCheckHooks;
                null !== n && pn(e, n, null)
              } else {
                const n = t.preOrderHooks;
                null !== n && fn(e, n, 0, null), mn(e, 0)
              } if (function (t) {
                let e = t[13];
                for (; null !== e;) {
                  let n;
                  if (Se(e) && (n = e[2]) >> 1 == -1) {
                    for (let t = 9; t < e.length; t++) {
                      const n = e[t],
                        r = n[1];
                      Ue(n) && Fr(r, n, r.template, n[8])
                    }
                    0 != (1 & n) && ss(e, t[16])
                  }
                  e = e[4]
                }
              }(e), null !== t.contentQueries && Ir(t, e), !i)
              if (o) {
                const n = t.contentCheckHooks;
                null !== n && pn(e, n)
              } else {
                const n = t.contentHooks;
                null !== n && fn(e, n, 1), mn(e, 1)
              }!
            function (t, e) {
              try {
                const n = t.expandoInstructions;
                if (null !== n) {
                  let r = t.expandoStartIndex,
                    s = -1,
                    i = -1;
                  for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    "number" == typeof o ? o <= 0 ? (i = 0 - o, cn(i), r += 9 + n[++t], s = r) : r += o : (null !== o && (Ye(r, s), o(2, e[s])), s++)
                  }
                }
              } finally {
                cn(-1)
              }
            }(t, e);
            const a = t.components;
            null !== a && function (t, e) {
              for (let n = 0; n < e.length; n++) is(t, e[n])
            }(e, a);
            const l = t.viewQuery;
            if (null !== l && hs(2, l, r), !i)
              if (o) {
                const n = t.viewCheckHooks;
                null !== n && pn(e, n)
              } else {
                const n = t.viewHooks;
                null !== n && fn(e, n, 2), mn(e, 2)
              }! 0 === t.firstUpdatePass && (t.firstUpdatePass = !1), i || (e[2] &= -73)
          } finally {
            ln()
          }
        }

        function Dr(t, e, n, r) {
          const s = e[10],
            i = !Qe(),
            o = je(e);
          try {
            i && !o && s.begin && s.begin(), o && Vr(t, e, r), Fr(t, e, n, r)
          } finally {
            i && !o && s.end && s.end()
          }
        }

        function Mr(t, e, n, r, s) {
          const i = un();
          try {
            cn(-1), 2 & r && e.length > 19 && Sr(t, e, 0, Qe()), n(r, s)
          } finally {
            cn(i)
          }
        }

        function jr(t, e, n) {
          qe() && (function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || Fn(n, e), lr(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = ke(r);
              i && ts(e, n, r);
              const l = zn(e, t, a, n);
              lr(l, e), null !== o && es(0, a - s, l, r, 0, o), i && (De(n.index, e)[8] = l)
            }
          }(t, e, n, Ve(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
            const r = n.directiveStart,
              s = n.directiveEnd,
              i = t.expandoInstructions,
              o = t.firstCreatePass,
              a = n.index - 19;
            try {
              cn(a);
              for (let n = r; n < s; n++) {
                const r = t.data[n],
                  s = e[n];
                null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? Zr(r, s) : o && i.push(null)
              }
            } finally {
              cn(-1)
            }
          }(t, e, n))
        }

        function Ur(t, e, n = Ve) {
          const r = e.localNames;
          if (null !== r) {
            let s = e.index + 1;
            for (let i = 0; i < r.length; i += 2) {
              const o = r[i + 1],
                a = -1 === o ? n(e, t) : t[o];
              t[s++] = a
            }
          }
        }

        function Lr(t) {
          return t.tView || (t.tView = Hr(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts))
        }

        function Hr(t, e, n, r, s, i, o, a, l, u) {
          const c = 19 + r,
            h = c + s,
            d = function (t, e) {
              const n = [];
              for (let r = 0; r < e; r++) n.push(r < t ? null : wr);
              return n
            }(c, h);
          return d[1] = {
            type: t,
            id: e,
            blueprint: d,
            template: n,
            queries: null,
            viewQuery: a,
            node: null,
            data: d.slice().fill(null, c),
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
            directiveRegistry: "function" == typeof i ? i() : i,
            pipeRegistry: "function" == typeof o ? o() : o,
            firstChild: null,
            schemas: l,
            consts: u
          }
        }

        function $r(t, e, n, r, s, i) {
          return {
            type: n,
            index: r,
            injectorIndex: e ? e.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            tagName: s,
            attrs: i,
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

        function qr(t, e, n) {
          for (let r in t)
            if (t.hasOwnProperty(r)) {
              const s = t[r];
              (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : n[r] = [e, s]
            } return n
        }

        function zr(t, e, n, r, s, i, o, a) {
          const l = Ve(e, n);
          let u, c = e.inputs;
          var h;
          !a && null != c && (u = c[r]) ? (gs(t, n, u, r, s), Ee(e) && function (t, e) {
            const n = De(e, t);
            16 & n[2] || (n[2] |= 64)
          }(n, e.index)) : 3 === e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != o ? o(s, e.tagName || "", r) : s, Ie(i) ? i.setProperty(l, r, s) : bn(r) || (l.setProperty ? l.setProperty(r, s) : l[r] = s))
        }

        function Gr(t, e, n, r) {
          let s = !1;
          if (qe()) {
            const i = function (t, e, n) {
                const r = t.directiveRegistry;
                let s = null;
                if (r)
                  for (let i = 0; i < r.length; i++) {
                    const o = r[i];
                    vr(n, o.selectors, !1) && (s || (s = []), Un(Fn(n, e), t, o.type), ke(o) ? (2 & n.flags && ur(n), Jr(t, n), s.unshift(o)) : s.push(o))
                  }
                return s
              }(t, e, n),
              o = null === r ? null : {
                "": -1
              };
            if (null !== i) {
              let r = 0;
              s = !0, Yr(n, t.data.length, i.length);
              for (let t = 0; t < i.length; t++) {
                const e = i[t];
                e.providersResolver && e.providersResolver(e)
              }
              Qr(t, n, i.length);
              let a = !1,
                l = !1;
              for (let s = 0; s < i.length; s++) {
                const u = i[s];
                n.mergedAttrs = Cn(n.mergedAttrs, u.hostAttrs), Xr(t, e, u), Kr(t.data.length - 1, u, o), null !== u.contentQueries && (n.flags |= 8), null === u.hostBindings && null === u.hostAttrs && 0 === u.hostVars || (n.flags |= 128), !a && (u.onChanges || u.onInit || u.doCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), a = !0), l || !u.onChanges && !u.doCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), l = !0), Br(t, u), r += u.hostVars
              }! function (t, e) {
                const n = e.directiveEnd,
                  r = t.data,
                  s = e.attrs,
                  i = [];
                let o = null,
                  a = null;
                for (let l = e.directiveStart; l < n; l++) {
                  const t = r[l],
                    e = t.inputs;
                  i.push(null !== s ? ns(e, s) : null), o = qr(e, l, o), a = qr(t.outputs, l, a)
                }
                null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = i, e.inputs = o, e.outputs = a
              }(t, n), Wr(t, e, r)
            }
            o && function (t, e, n) {
              if (e) {
                const r = t.localNames = [];
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s) throw new Error(`Export of name '${e[t+1]}' not found!`);
                  r.push(e[t], s)
                }
              }
            }(n, r, o)
          }
          return n.mergedAttrs = Cn(n.mergedAttrs, n.attrs), s
        }

        function Br(t, e) {
          const n = t.expandoInstructions;
          n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
        }

        function Wr(t, e, n) {
          for (let r = 0; r < n; r++) e.push(wr), t.blueprint.push(wr), t.data.push(null)
        }

        function Zr(t, e) {
          null !== t.hostBindings && t.hostBindings(1, e)
        }

        function Qr(t, e, n) {
          const r = 19 - e.index,
            s = t.data.length - (65535 & e.providerIndexes);
          (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n)
        }

        function Jr(t, e) {
          e.flags |= 2, (t.components || (t.components = [])).push(e.index)
        }

        function Kr(t, e, n) {
          if (n) {
            if (e.exportAs)
              for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
            ke(e) && (n[""] = t)
          }
        }

        function Yr(t, e, n) {
          t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
        }

        function Xr(t, e, n) {
          t.data.push(n);
          const r = n.factory || (n.factory = we(n.type)),
            s = new yn(r, ke(n), null);
          t.blueprint.push(s), e.push(s)
        }

        function ts(t, e, n) {
          const r = Ve(e, t),
            s = Lr(n),
            i = t[10],
            o = as(t, Pr(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n)));
          t[e.index] = o
        }

        function es(t, e, n, r, s, i) {
          const o = i[e];
          if (null !== o) {
            const t = r.setInput;
            for (let e = 0; e < o.length;) {
              const s = o[e++],
                i = o[e++],
                a = o[e++];
              null !== t ? r.setInput(n, a, s, i) : n[i] = a
            }
          }
        }

        function ns(t, e) {
          let n = null,
            r = 0;
          for (; r < e.length;) {
            const s = e[r];
            if (0 !== s)
              if (5 !== s) {
                if ("number" == typeof s) break;
                t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), r += 2
              } else r += 2;
            else r += 4
          }
          return n
        }

        function rs(t, e, n, r) {
          return new Array(t, !0, -2, e, null, null, r, n, null)
        }

        function ss(t, e) {
          const n = t[5];
          for (let r = 0; r < n.length; r++) {
            const t = n[r],
              s = t[3][3][16];
            if (s !== e && 0 == (16 & s[2])) {
              const e = t[1];
              Fr(e, t, e.template, t[8])
            }
          }
        }

        function is(t, e) {
          const n = De(e, t);
          if (Ue(n) && 80 & n[2]) {
            const t = n[1];
            Fr(t, n, t.template, n[8])
          }
        }

        function os(t, e) {
          const n = De(e, t),
            r = n[1];
          ! function (t, e) {
            for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
          }(r, n), Vr(r, n, n[8])
        }

        function as(t, e) {
          return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
        }

        function ls(t) {
          for (; t;) {
            t[2] |= 64;
            const e = br(t);
            if (Te(t) && !e) return t;
            t = e
          }
          return null
        }

        function us(t, e, n) {
          const r = e[10];
          r.begin && r.begin();
          try {
            Fr(t, e, t.template, n)
          } catch (s) {
            throw ms(e, s), s
          } finally {
            r.end && r.end()
          }
        }

        function cs(t) {
          ! function (t) {
            for (let e = 0; e < t.components.length; e++) {
              const n = t.components[e],
                r = Me(n),
                s = r[1];
              Dr(s, r, s.template, n)
            }
          }(t[8])
        }

        function hs(t, e, n) {
          tn(0), e(t, n)
        }
        const ds = (() => Promise.resolve(null))();

        function ps(t) {
          return t[7] || (t[7] = [])
        }

        function fs(t) {
          return t.cleanup || (t.cleanup = [])
        }

        function ms(t, e) {
          const n = t[9],
            r = n ? n.get(Yn, null) : null;
          r && r.handleError(e)
        }

        function gs(t, e, n, r, s) {
          for (let i = 0; i < n.length;) {
            const o = n[i++],
              a = n[i++],
              l = e[o],
              u = t.data[o];
            null !== u.setInput ? u.setInput(l, s, r, a) : l[a] = s
          }
        }

        function vs(t, e) {
          const n = e[3];
          return -1 === t.index ? Se(n) ? n : null : n
        }

        function ys(t, e) {
          const n = vs(t, e);
          return n ? Os(e[11], n[7]) : null
        }

        function _s(t, e, n, r, s) {
          if (null != r) {
            let i, o = !1;
            Se(r) ? i = r : Ce(r) && (o = !0, r = r[0]);
            const a = Pe(r);
            0 === t && null !== n ? null == s ? ks(e, n, a) : As(e, n, a, s || null) : 1 === t && null !== n ? As(e, n, a, s || null) : 2 === t ? function (t, e, n) {
              const r = Os(t, e);
              r && function (t, e, n, r) {
                Ie(t) ? t.removeChild(e, n, r) : e.removeChild(n)
              }(t, r, e, n)
            }(e, a, o) : 3 === t && e.destroyNode(a), null != i && function (t, e, n, r, s) {
              const i = n[7];
              i !== Pe(n) && _s(e, t, r, i, s);
              for (let o = 9; o < n.length; o++) {
                const s = n[o];
                Ns(s[1], s, t, e, r, i)
              }
            }(e, t, i, n, s)
          }
        }

        function ws(t, e, n, r) {
          const s = ys(t.node, e);
          s && Ns(t, e, e[11], n ? 1 : 2, s, r)
        }

        function bs(t, e) {
          const n = t[5],
            r = n.indexOf(e);
          n.splice(r, 1)
        }

        function Cs(t, e) {
          if (t.length <= 9) return;
          const n = 9 + e,
            r = t[n];
          if (r) {
            const s = r[17];
            null !== s && s !== t && bs(s, r), e > 0 && (t[n - 1][4] = r[4]);
            const i = ne(t, 9 + e);
            ws(r[1], r, !1, null);
            const o = i[5];
            null !== o && o.detachView(i[1]), r[3] = null, r[4] = null, r[2] &= -129
          }
          return r
        }

        function Ss(t, e) {
          if (!(256 & e[2])) {
            const n = e[11];
            Ie(n) && n.destroyNode && Ns(t, e, n, 3, null, null),
              function (t) {
                let e = t[13];
                if (!e) return Es(t[1], t);
                for (; e;) {
                  let n = null;
                  if (Ce(e)) n = e[13];
                  else {
                    const t = e[9];
                    t && (n = t)
                  }
                  if (!n) {
                    for (; e && !e[4] && e !== t;) Ce(e) && Es(e[1], e), e = xs(e, t);
                    null === e && (e = t), Ce(e) && Es(e[1], e), n = e && e[4]
                  }
                  e = n
                }
              }(e)
          }
        }

        function xs(t, e) {
          let n;
          return Ce(t) && (n = t[6]) && 2 === n.type ? vs(n, t) : t[3] === e ? null : t[3]
        }

        function Es(t, e) {
          if (!(256 & e[2])) {
            e[2] &= -129, e[2] |= 256,
              function (t, e) {
                let n;
                if (null != t && null != (n = t.destroyHooks))
                  for (let r = 0; r < n.length; r += 2) {
                    const t = e[n[r]];
                    t instanceof yn || n[r + 1].call(t)
                  }
              }(t, e),
              function (t, e) {
                const n = t.cleanup;
                if (null !== n) {
                  const t = e[7];
                  for (let r = 0; r < n.length - 1; r += 2)
                    if ("string" == typeof n[r]) {
                      const s = n[r + 1],
                        i = "function" == typeof s ? s(e) : Pe(e[s]),
                        o = t[n[r + 2]],
                        a = n[r + 3];
                      "boolean" == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), r += 2
                    } else n[r].call(t[n[r + 1]]);
                  e[7] = null
                }
              }(t, e);
            const n = e[6];
            n && 3 === n.type && Ie(e[11]) && e[11].destroy();
            const r = e[17];
            if (null !== r && Se(e[3])) {
              r !== e[3] && bs(r, e);
              const n = e[5];
              null !== n && n.detachView(t)
            }
          }
        }

        function As(t, e, n, r) {
          Ie(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0)
        }

        function ks(t, e, n) {
          Ie(t) ? t.appendChild(e, n) : e.appendChild(n)
        }

        function Ts(t, e, n, r) {
          null !== r ? As(t, e, n, r) : ks(t, e, n)
        }

        function Os(t, e) {
          return Ie(t) ? t.parentNode(e) : e.parentNode
        }

        function Is(t, e, n, r) {
          const s = function (t, e, n) {
            let r = e.parent;
            for (; null != r && (4 === r.type || 5 === r.type);) r = (e = r).parent;
            if (null == r) {
              const t = n[6];
              return 2 === t.type ? ys(t, n) : n[0]
            }
            if (e && 5 === e.type && 4 & e.flags) return Ve(e, n).parentNode;
            if (2 & r.flags) {
              const e = t.data,
                n = e[e[r.index].directiveStart].encapsulation;
              if (n !== ae.ShadowDom && n !== ae.Native) return null
            }
            return Ve(r, n)
          }(t, r, e);
          if (null != s) {
            const t = e[11],
              i = function (t, e) {
                if (2 === t.type) {
                  const n = vs(t, e);
                  return null === n ? null : Rs(n.indexOf(e, 9) - 9, n)
                }
                return 4 === t.type || 5 === t.type ? Ve(t, e) : null
              }(r.parent || e[6], e);
            if (Array.isArray(n))
              for (let e = 0; e < n.length; e++) Ts(t, s, n[e], i);
            else Ts(t, s, n, i)
          }
        }

        function Rs(t, e) {
          const n = 9 + t + 1;
          if (n < e.length) {
            const t = e[n],
              r = t[1].firstChild;
            if (null !== r) return function t(e, n) {
              if (null !== n) {
                const r = n.type;
                if (3 === r) return Ve(n, e);
                if (0 === r) return Rs(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  const r = n.child;
                  if (null !== r) return t(e, r); {
                    const t = e[n.index];
                    return Se(t) ? Rs(-1, t) : Pe(t)
                  }
                } {
                  const r = e[16],
                    s = r[6],
                    i = br(r),
                    o = s.projection[n.projection];
                  return null != o ? t(i, o) : t(e, n.next)
                }
              }
              return null
            }(t, r)
          }
          return e[7]
        }

        function Ps(t, e, n, r, s, i, o) {
          for (; null != n;) {
            const a = r[n.index],
              l = n.type;
            o && 0 === e && (a && lr(Pe(a), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (Ps(t, e, n.child, r, s, i, !1), _s(e, t, s, a, i)) : 1 === l ? Vs(t, e, r, n, s, i) : _s(e, t, s, a, i)), n = o ? n.projectionNext : n.next
          }
        }

        function Ns(t, e, n, r, s, i) {
          Ps(n, r, t.node.child, e, s, i, !1)
        }

        function Vs(t, e, n, r, s, i) {
          const o = n[16],
            a = o[6].projection[r.projection];
          if (Array.isArray(a))
            for (let l = 0; l < a.length; l++) _s(e, t, s, a[l], i);
          else Ps(t, e, a, o[3], s, i, !0)
        }

        function Fs(t, e, n) {
          Ie(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
        }

        function Ds(t, e, n) {
          Ie(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
        }
        class Ms {
          constructor(t, e) {
            this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
          }
          get rootNodes() {
            const t = this._lView;
            return null == t[0] ? function t(e, n, r, s, i = !1) {
              for (; null !== r;) {
                const o = n[r.index];
                if (null !== o && s.push(Pe(o)), Se(o))
                  for (let e = 9; e < o.length; e++) {
                    const n = o[e],
                      r = n[1].firstChild;
                    null !== r && t(n[1], n, r, s)
                  }
                const a = r.type;
                if (4 === a || 5 === a) t(e, n, r.child, s);
                else if (1 === a) {
                  const e = n[16],
                    i = e[6],
                    o = br(e);
                  let a = i.projection[r.projection];
                  null !== a && null !== o && t(o[1], o, a, s, !0)
                }
                r = i ? r.projectionNext : r.next
              }
              return s
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
            Ss(this._lView[1], this._lView)
          }
          onDestroy(t) {
            var e, n, r;
            e = this._lView[1], r = t, ps(n = this._lView).push(r), e.firstCreatePass && fs(e).push(n[7].length - 1, null)
          }
          markForCheck() {
            ls(this._cdRefInjectingView || this._lView)
          }
          detach() {
            this._lView[2] &= -129
          }
          reattach() {
            this._lView[2] |= 128
          }
          detectChanges() {
            us(this._lView[1], this._lView, this.context)
          }
          checkNoChanges() {
            ! function (t, e, n) {
              Je(!0);
              try {
                us(t, e, n)
              } finally {
                Je(!1)
              }
            }(this._lView[1], this._lView, this.context)
          }
          attachToViewContainerRef(t) {
            if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
            this._viewContainerRef = t
          }
          detachFromAppRef() {
            var t;
            this._appRef = null, Ns(this._lView[1], t = this._lView, t[11], 2, null, null)
          }
          attachToAppRef(t) {
            if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
            this._appRef = t
          }
        }
        class js extends Ms {
          constructor(t) {
            super(t), this._view = t
          }
          detectChanges() {
            cs(this._view)
          }
          checkNoChanges() {
            ! function (t) {
              Je(!0);
              try {
                cs(t)
              } finally {
                Je(!1)
              }
            }(this._view)
          }
          get context() {
            return null
          }
        }
        let Us, Ls, Hs;

        function $s(t, e, n) {
          return Us || (Us = class extends t {}), new Us(Ve(e, n))
        }

        function qs(t, e, n, r) {
          return Ls || (Ls = class extends t {
            constructor(t, e, n) {
              super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n
            }
            createEmbeddedView(t) {
              const e = this._declarationTContainer.tViews,
                n = Pr(this._declarationView, e, t, 16, null, e.node);
              n[17] = this._declarationView[this._declarationTContainer.index];
              const r = this._declarationView[5];
              null !== r && (n[5] = r.createEmbeddedView(e)), Vr(e, n, t);
              const s = new Ms(n);
              return s._tViewNode = n[6], s
            }
          }), 0 === n.type ? new Ls(r, n, $s(e, n, r)) : null
        }

        function zs(t, e, n, r) {
          let s;
          Hs || (Hs = class extends t {
            constructor(t, e, n) {
              super(), this._lContainer = t, this._hostTNode = e, this._hostView = n
            }
            get element() {
              return $s(e, this._hostTNode, this._hostView)
            }
            get injector() {
              return new Wn(this._hostTNode, this._hostView)
            }
            get parentInjector() {
              const t = jn(this._hostTNode, this._hostView),
                e = kn(t, this._hostView),
                n = function (t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent;
                    return e
                  }
                  let r = An(t),
                    s = e,
                    i = e[6];
                  for (; r > 1;) s = s[15], i = s[6], r--;
                  return i
                }(t, this._hostView, this._hostTNode);
              return xn(t) && null != n ? new Wn(n, e) : new Wn(null, this._hostView)
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
              const r = t.createEmbeddedView(e || {});
              return this.insert(r, n), r
            }
            createComponent(t, e, n, r, s) {
              const i = n || this.parentInjector;
              if (!s && null == t.ngModule && i) {
                const t = i.get(Yt, null);
                t && (s = t)
              }
              const o = t.create(i, r, void 0, s);
              return this.insert(o.hostView, e), o
            }
            insert(t, e) {
              const n = t._lView,
                r = n[1];
              if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
              if (this.allocateContainerIfNeeded(), Se(n[3])) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    r = new Hs(e, e[6], e[3]);
                  r.detach(r.indexOf(t))
                }
              }
              const s = this._adjustIndex(e);
              return function (t, e, n, r) {
                const s = 9 + r,
                  i = n.length;
                r > 0 && (n[s - 1][4] = e), r < i - 9 ? (e[4] = n[s], ee(n, 9 + r, e)) : (n.push(e), e[4] = null), e[3] = n;
                const o = e[17];
                null !== o && n !== o && function (t, e) {
                  const n = t[5],
                    r = e[3][3][16];
                  16 != (16 & r[2]) && e[16] !== r && (t[2] |= 1), null === n ? t[5] = [e] : n.push(e)
                }(o, e);
                const a = e[5];
                null !== a && a.insertView(t), e[2] |= 128
              }(r, n, this._lContainer, s), ws(r, n, !0, Rs(s, this._lContainer)), t.attachToViewContainerRef(this), ee(this._lContainer[8], s, t), t
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
                const n = Cs(t, e);
                n && Ss(n[1], n)
              })(this._lContainer, e), ne(this._lContainer[8], e)
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Cs(this._lContainer, e);
              return n && null != ne(this._lContainer[8], e) ? new Ms(n) : null
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = [])
            }
          });
          const i = r[n.index];
          if (Se(i)) s = i,
            function (t, e) {
              t[2] = -2
            }(s);
          else {
            let t;
            if (4 === n.type) t = Pe(i);
            else if (t = r[11].createComment(""), Te(r)) {
              const e = r[11],
                s = Ve(n, r);
              As(e, Os(e, s), t, function (t, e) {
                return Ie(t) ? t.nextSibling(e) : e.nextSibling
              }(e, s))
            } else Is(r[1], r, t, n);
            r[n.index] = s = rs(i, r, t, n), as(r, s)
          }
          return new Hs(s, n, r)
        }
        let Gs = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => Bs(), t
        })();
        const Bs = function (t = !1) {
            return function (t, e, n) {
              if (!n && Ee(t)) {
                const n = De(t.index, e);
                return new Ms(n, n)
              }
              return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new Ms(e[16], e) : null
            }(Be(), ze(), t)
          },
          Ws = new jt("Set Injector scope."),
          Zs = {},
          Qs = {},
          Js = [];
        let Ks = void 0;

        function Ys() {
          return void 0 === Ks && (Ks = new Kt), Ks
        }

        function Xs(t, e = null, n = null, r) {
          return new ti(t, n, e || Ys(), r)
        }
        class ti {
          constructor(t, e, n, r = null) {
            this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
            const s = [];
            e && te(e, n => this.processProvider(n, t, e)), te([t], t => this.processInjectorType(t, [], s)), this.records.set(Ut, ri(void 0, this));
            const i = this.records.get(Ws);
            this.scope = null != i ? i.value : null, this.source = r || ("object" == typeof t ? null : wt(t))
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
          get(t, e = Lt, n = at.Default) {
            this.assertNotDestroyed();
            const r = Gt(this);
            try {
              if (!(n & at.SkipSelf)) {
                let e = this.records.get(t);
                if (void 0 === e) {
                  const n = ("function" == typeof (s = t) || "object" == typeof s && s instanceof jt) && dt(t);
                  e = n && this.injectableDefInScope(n) ? ri(ei(t), Zs) : null, this.records.set(t, e)
                }
                if (null != e) return this.hydrate(t, e)
              }
              return (n & at.Self ? Ys() : this.parent).get(t, e = n & at.Optional && e === Lt ? null : e)
            } catch (i) {
              if ("NullInjectorError" === i.name) {
                if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(wt(t)), r) throw i;
                return function (t, e, n, r) {
                  const s = t.ngTempTokenPath;
                  throw e.__source && s.unshift(e.__source), t.message = function (t, e, n, r = null) {
                    t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                    let s = wt(e);
                    if (Array.isArray(e)) s = e.map(wt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : wt(r)))
                        } s = `{${t.join(", ")}}`
                    }
                    return `${n}${r?"("+r+")":""}[${s}]: ${t.replace(Ht,"\n  ")}`
                  }("\n" + t.message, s, n, r), t.ngTokenPath = s, t.ngTempTokenPath = null, t
                }(i, t, "R3InjectorError", this.source)
              }
              throw i
            } finally {
              Gt(r)
            }
            var s
          }
          _resolveInjectorDefTypes() {
            this.injectorDefTypes.forEach(t => this.get(t))
          }
          toString() {
            const t = [];
            return this.records.forEach((e, n) => t.push(wt(n))), `R3Injector[${t.join(", ")}]`
          }
          assertNotDestroyed() {
            if (this._destroyed) throw new Error("Injector has already been destroyed.")
          }
          processInjectorType(t, e, n) {
            if (!(t = xt(t))) return !1;
            let r = ft(t);
            const s = null == r && t.ngModule || void 0,
              i = void 0 === s ? t : s,
              o = -1 !== n.indexOf(i);
            if (void 0 !== s && (r = ft(s)), null == r) return !1;
            if (null != r.imports && !o) {
              let t;
              n.push(i);
              try {
                te(r.imports, r => {
                  this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r))
                })
              } finally {}
              if (void 0 !== t)
                for (let e = 0; e < t.length; e++) {
                  const {
                    ngModule: n,
                    providers: r
                  } = t[e];
                  te(r, t => this.processProvider(t, n, r || Js))
                }
            }
            this.injectorDefTypes.add(i), this.records.set(i, ri(r.factory, Zs));
            const a = r.providers;
            if (null != a && !o) {
              const e = t;
              te(a, t => this.processProvider(t, e, a))
            }
            return void 0 !== s && void 0 !== t.providers
          }
          processProvider(t, e, n) {
            let r = ii(t = xt(t)) ? t : xt(t && t.provide);
            const s = function (t, e, n) {
              return si(t) ? ri(void 0, t.useValue) : ri(ni(t, e, n), Zs)
            }(t, e, n);
            if (ii(t) || !0 !== t.multi) {
              const t = this.records.get(r);
              t && void 0 !== t.multi && cr()
            } else {
              let e = this.records.get(r);
              e ? void 0 === e.multi && cr() : (e = ri(void 0, Zs, !0), e.factory = () => Jt(e.multi), this.records.set(r, e)), r = t, e.multi.push(t)
            }
            this.records.set(r, s)
          }
          hydrate(t, e) {
            var n;
            return e.value === Qs ? function (t) {
              throw new Error(`Cannot instantiate cyclic dependency! ${t}`)
            }(wt(t)) : e.value === Zs && (e.value = Qs, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
          }
          injectableDefInScope(t) {
            return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
          }
        }

        function ei(t) {
          const e = dt(t),
            n = null !== e ? e.factory : we(t);
          if (null !== n) return n;
          const r = ft(t);
          if (null !== r) return r.factory;
          if (t instanceof jt) throw new Error(`Token ${wt(t)} is missing a \u0275prov definition.`);
          if (t instanceof Function) return function (t) {
            const e = t.length;
            if (e > 0) {
              const n = function (t, e) {
                const n = [];
                for (let r = 0; r < t; r++) n.push("?");
                return n
              }(e);
              throw new Error(`Can't resolve all parameters for ${wt(t)}: (${n.join(", ")}).`)
            }
            const n = function (t) {
              const e = t && (t[mt] || t[yt] || t[vt] && t[vt]());
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

        function ni(t, e, n) {
          let r = void 0;
          if (ii(t)) {
            const e = xt(t);
            return we(e) || ei(e)
          }
          if (si(t)) r = () => xt(t.useValue);
          else if ((s = t) && s.useFactory) r = () => t.useFactory(...Jt(t.deps || []));
          else if (function (t) {
              return !(!t || !t.useExisting)
            }(t)) r = () => Zt(xt(t.useExisting));
          else {
            const s = xt(t && (t.useClass || t.provide));
            if (s || function (t, e, n) {
                let r = "";
                throw t && e && (r = ` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${wt(t)}'` + r)
              }(e, n, t), ! function (t) {
                return !!t.deps
              }(t)) return we(s) || ei(s);
            r = () => new s(...Jt(t.deps))
          }
          var s;
          return r
        }

        function ri(t, e, n = !1) {
          return {
            factory: t,
            value: e,
            multi: n ? [] : void 0
          }
        }

        function si(t) {
          return null !== t && "object" == typeof t && $t in t
        }

        function ii(t) {
          return "function" == typeof t
        }
        const oi = function (t, e, n) {
          return function (t, e = null, n = null, r) {
            const s = Xs(t, e, n, r);
            return s._resolveInjectorDefTypes(), s
          }({
            name: n
          }, e, t, n)
        };
        let ai = (() => {
          class t {
            static create(t, e) {
              return Array.isArray(t) ? oi(t, e, "") : oi(t.providers, t.parent, t.name || "")
            }
          }
          return t.THROW_IF_NOT_FOUND = Lt, t.NULL = new Kt, t.\u0275prov = ct({
            token: t,
            providedIn: "any",
            factory: () => Zt(Ut)
          }), t.__NG_ELEMENT_ID__ = -1, t
        })();
        const li = new jt("AnalyzeForEntryComponents");
        let ui = new Map;
        const ci = new Set;

        function hi(t) {
          return "string" == typeof t ? t : t.text()
        }

        function di(t, e) {
          let n = t.styles,
            r = t.classes,
            s = 0;
          for (let i = 0; i < e.length; i++) {
            const t = e[i];
            "number" == typeof t ? s = t : 1 == s ? r = bt(r, t) : 2 == s && (n = bt(n, t + ": " + e[++i] + ";"))
          }
          null !== n && (t.styles = n), null !== r && (t.classes = r)
        }
        let pi = null;

        function fi() {
          if (!pi) {
            const t = It.Symbol;
            if (t && t.iterator) pi = t.iterator;
            else {
              const t = Object.getOwnPropertyNames(Map.prototype);
              for (let e = 0; e < t.length; ++e) {
                const n = t[e];
                "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (pi = n)
              }
            }
          }
          return pi
        }

        function mi(t, e) {
          return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
        }
        class gi {
          constructor(t) {
            this.wrapped = t
          }
          static wrap(t) {
            return new gi(t)
          }
          static unwrap(t) {
            return gi.isWrapped(t) ? t.wrapped : t
          }
          static isWrapped(t) {
            return t instanceof gi
          }
        }

        function vi(t) {
          return !!yi(t) && (Array.isArray(t) || !(t instanceof Map) && fi() in t)
        }

        function yi(t) {
          return null !== t && ("function" == typeof t || "object" == typeof t)
        }

        function _i(t, e, n) {
          return !Object.is(t[e], n) && (t[e] = n, !0)
        }

        function wi(t, e, n, r) {
          const s = ze();
          return _i(s, Ke(), e) && (Ge(), function (t, e, n, r, s, i) {
            const o = Ve(t, e),
              a = e[11];
            if (null == r) Ie(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
            else {
              const e = null == s ? Tn(r) : s(r, t.tagName || "", n);
              Ie(a) ? a.setAttribute(o, n, e, i) : i ? o.setAttributeNS(i, n, e) : o.setAttribute(n, e)
            }
          }(hn(), s, t, e, n, r)), wi
        }

        function bi(t, e, n, r) {
          return _i(t, Ke(), n) ? e + Tn(n) + r : wr
        }

        function Ci(t, e, n, r, s, i, o, a) {
          const l = ze(),
            u = Ge(),
            c = t + 19,
            h = u.firstCreatePass ? function (t, e, n, r, s, i, o, a, l) {
              const u = e.consts,
                c = Nr(e, n[6], t, 0, o || null, Le(u, a));
              Gr(e, n, c, Le(u, l)), dn(e, c);
              const h = c.tViews = Hr(2, -1, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, u),
                d = $r(0, null, 2, -1, null, null);
              return d.injectorIndex = c.injectorIndex, h.node = d, null !== e.queries && (e.queries.template(e, c), h.queries = e.queries.embeddedTView(c)), c
            }(t, u, l, e, n, r, s, i, o) : u.data[c];
          We(h, !1);
          const d = l[11].createComment("");
          Is(u, l, d, h), lr(d, l), as(l, l[c] = rs(d, l, d, h)), Ae(h) && jr(u, l, h), null != o && Ur(l, h, a)
        }

        function Si(t, e = at.Default) {
          const n = ze();
          return null == n ? Zt(t, e) : Ln(Be(), n, xt(t), e)
        }

        function xi(t) {
          return function (t, e) {
            if ("class" === e) return t.classes;
            if ("style" === e) return t.styles;
            const n = t.attrs;
            if (n) {
              const t = n.length;
              let r = 0;
              for (; r < t;) {
                const s = n[r];
                if (wn(s)) break;
                if (0 === s) r += 2;
                else if ("number" == typeof s)
                  for (r++; r < t && "string" == typeof n[r];) r++;
                else {
                  if (s === e) return n[r + 1];
                  r += 2
                }
              }
            }
            return null
          }(Be(), t)
        }

        function Ei() {
          throw new Error("invalid")
        }

        function Ai(t, e, n) {
          const r = ze();
          return _i(r, Ke(), e) && zr(Ge(), hn(), r, t, e, r[11], n, !1), Ai
        }

        function ki(t, e, n, r, s) {
          const i = s ? "class" : "style";
          gs(t, n, e.inputs[i], i, r)
        }

        function Ti(t, e, n, r) {
          const s = ze(),
            i = Ge(),
            o = 19 + t,
            a = s[11],
            l = s[o] = Rr(e, a, $e.lFrame.currentNamespace),
            u = i.firstCreatePass ? function (t, e, n, r, s, i, o) {
              const a = e.consts,
                l = Le(a, i),
                u = Nr(e, n[6], t, 3, s, l);
              return Gr(e, n, u, Le(a, o)), null !== u.mergedAttrs && di(u, u.mergedAttrs), null !== e.queries && e.queries.elementStart(e, u), u
            }(t, i, s, 0, e, n, r) : i.data[o];
          We(u, !0);
          const c = u.mergedAttrs;
          null !== c && _n(a, l, c);
          const h = u.classes;
          null !== h && Ds(a, l, h);
          const d = u.styles;
          null !== d && Fs(a, l, d), Is(i, s, l, u), 0 === $e.lFrame.elementDepthCount && lr(l, s), $e.lFrame.elementDepthCount++, Ae(u) && (jr(i, s, u), function (t, e, n) {
            if (xe(e)) {
              const r = e.directiveEnd;
              for (let s = e.directiveStart; s < r; s++) {
                const e = t.data[s];
                e.contentQueries && e.contentQueries(1, n[s], s)
              }
            }
          }(i, u, s)), null !== r && Ur(s, u)
        }

        function Oi() {
          let t = Be();
          Ze() ? $e.lFrame.isParent = !1 : (t = t.parent, We(t, !1));
          const e = t;
          $e.lFrame.elementDepthCount--;
          const n = Ge();
          n.firstCreatePass && (dn(n, t), xe(t) && n.queries.elementEnd(t)), null !== e.classes && function (t) {
            return 0 != (16 & t.flags)
          }(e) && ki(n, e, ze(), e.classes, !0), null !== e.styles && function (t) {
            return 0 != (32 & t.flags)
          }(e) && ki(n, e, ze(), e.styles, !1)
        }

        function Ii(t, e, n, r) {
          Ti(t, e, n, r), Oi()
        }

        function Ri(t) {
          return !!t && "function" == typeof t.then
        }

        function Pi(t) {
          return !!t && "function" == typeof t.subscribe
        }

        function Ni(t, e, n = !1, r) {
          const s = ze(),
            i = Ge(),
            o = Be();
          return function (t, e, n, r, s, i, o = !1, a) {
            const l = Ae(r),
              u = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              c = ps(e);
            let h = !0;
            if (3 === r.type) {
              const d = Ve(r, e),
                p = a ? a(d) : le,
                f = p.target || d,
                m = c.length,
                g = a ? t => a(Pe(t[r.index])).target : r.index;
              if (Ie(n)) {
                let o = null;
                if (!a && l && (o = function (t, e, n, r) {
                    const s = t.cleanup;
                    if (null != s)
                      for (let i = 0; i < s.length - 1; i += 2) {
                        const t = s[i];
                        if (t === n && s[i + 1] === r) {
                          const t = e[7],
                            n = s[i + 2];
                          return t.length > n ? t[n] : null
                        }
                        "string" == typeof t && (i += 2)
                      }
                    return null
                  }(t, e, s, r.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i, o.__ngLastListenerFn__ = i, h = !1;
                else {
                  i = Fi(r, e, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  c.push(i, t), u && u.push(s, g, m, m + 1)
                }
              } else i = Fi(r, e, i, !0), f.addEventListener(s, i, o), c.push(i), u && u.push(s, g, m, o)
            }
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = c.length;
                  c.push(i, t), u && u.push(s, r.index, o, -(o + 1))
                }
            }
          }(i, s, s[11], o, t, e, n, r), Ni
        }

        function Vi(t, e, n) {
          try {
            return !1 !== e(n)
          } catch (r) {
            return ms(t, r), !1
          }
        }

        function Fi(t, e, n, r) {
          return function s(i) {
            if (i === Function) return n;
            const o = 2 & t.flags ? De(t.index, e) : e;
            0 == (32 & e[2]) && ls(o);
            let a = Vi(e, n, i),
              l = s.__ngNextListenerFn__;
            for (; l;) a = Vi(e, l, i) && a, l = l.__ngNextListenerFn__;
            return r && !1 === a && (i.preventDefault(), i.returnValue = !1), a
          }
        }

        function Di(t = 1) {
          return function (t) {
            return ($e.lFrame.contextLView = function (t, e) {
              for (; t > 0;) e = e[15], t--;
              return e
            }(t, $e.lFrame.contextLView))[8]
          }(t)
        }

        function Mi(t, e, n, r, s) {
          const i = ze(),
            o = bi(i, e, n, r);
          return o !== wr && zr(Ge(), hn(), i, t, o, i[11], s, !1), Mi
        }
        const ji = [];

        function Ui(t, e, n, r, s) {
          const i = t[n + 1],
            o = null === e;
          let a = r ? Er(i) : kr(i),
            l = !1;
          for (; 0 !== a && (!1 === l || o);) {
            const n = t[a + 1];
            Li(t[a], e) && (l = !0, t[a + 1] = r ? Or(n) : Ar(n)), a = r ? Er(n) : kr(n)
          }
          l && (t[n + 1] = r ? Ar(i) : Or(i))
        }

        function Li(t, e) {
          return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && ie(t, e) >= 0
        }

        function Hi(t, e) {
          return function (t, e, n, r) {
            const s = ze(),
              i = Ge(),
              o = function (t) {
                const e = $e.lFrame,
                  n = e.bindingIndex;
                return e.bindingIndex = e.bindingIndex + 2, n
              }();
            if (i.firstUpdatePass && function (t, e, n, r) {
                const s = t.data;
                if (null === s[n + 1]) {
                  const r = s[un() + 19],
                    i = function (t, e) {
                      return e >= t.expandoStartIndex
                    }(t, n);
                  (function (t, e) {
                    return 0 != (16 & t.flags)
                  })(r) && null === e && !i && (e = !1), e = function (t, e, n, r) {
                      const s = function (t) {
                        const e = $e.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e]
                      }(t);
                      let i = e.residualClasses;
                      if (null === s) 0 === e.classBindings && (n = qi(n = $i(null, t, e, n, !0), e.attrs, !0), i = null);
                      else {
                        const r = e.directiveStylingLast;
                        if (-1 === r || t[r] !== s)
                          if (n = $i(s, t, e, n, !0), null === i) {
                            let n = function (t, e, n) {
                              const r = e.classBindings;
                              if (0 !== kr(r)) return t[Er(r)]
                            }(t, e);
                            void 0 !== n && Array.isArray(n) && (n = $i(null, t, e, n[1], !0), n = qi(n, e.attrs, !0), function (t, e, n, r) {
                              t[Er(e.classBindings)] = r
                            }(t, e, 0, n))
                          } else i = function (t, e, n) {
                            let r = void 0;
                            const s = e.directiveEnd;
                            for (let i = 1 + e.directiveStylingLast; i < s; i++) r = qi(r, t[i].hostAttrs, !0);
                            return qi(r, e.attrs, !0)
                          }(t, e)
                      }
                      return void 0 !== i && (e.residualClasses = i), n
                    }(s, r, e),
                    function (t, e, n, r, s, i) {
                      let o = e.classBindings,
                        a = Er(o),
                        l = kr(o);
                      t[r] = n;
                      let u, c = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        u = t[1], (null === u || ie(t, u) > 0) && (c = !0)
                      } else u = n;
                      if (s)
                        if (0 !== l) {
                          const e = Er(t[a + 1]);
                          t[r + 1] = xr(e, a), 0 !== e && (t[e + 1] = Tr(t[e + 1], r)), t[a + 1] = 131071 & t[a + 1] | r << 17
                        } else t[r + 1] = xr(a, 0), 0 !== a && (t[a + 1] = Tr(t[a + 1], r)), a = r;
                      else t[r + 1] = xr(l, 0), 0 === a ? a = r : t[l + 1] = Tr(t[l + 1], r), l = r;
                      c && (t[r + 1] = Ar(t[r + 1])), Ui(t, u, r, !0), Ui(t, u, r, !1),
                        function (t, e, n, r, s) {
                          const i = t.residualClasses;
                          null != i && "string" == typeof e && ie(i, e) >= 0 && (n[r + 1] = Or(n[r + 1]))
                        }(e, u, t, r), o = xr(a, l), e.classBindings = o
                    }(s, r, e, n, i)
                }
              }(i, t, o), e !== wr && _i(s, o, e)) {
              let r;
              null == n && (r = function () {
                  const t = $e.lFrame;
                  return null === t ? null : t.currentSanitizer
                }()) && (n = r),
                function (t, e, n, r, s, i, o, a) {
                  if (3 !== e.type) return;
                  const l = t.data,
                    u = l[a + 1];
                  Gi(1 == (1 & u) ? zi(l, e, n, s, kr(u), !0) : void 0) || (Gi(i) || function (t) {
                    return 2 == (2 & t)
                  }(u) && (i = zi(l, null, n, s, a, !0)), function (t, e, n, r, s) {
                    const i = Ie(t);
                    s ? i ? t.addClass(n, r) : n.classList.add(r) : i ? t.removeClass(n, r) : n.classList.remove(r)
                  }(r, 0, Ne(un(), n), s, i))
                }(i, i.data[un() + 19], s, s[11], t, s[o + 1] = function (t, e) {
                  return null == t || ("function" == typeof e ? t = e(t) : "string" == typeof e ? t += e : "object" == typeof t && (t = wt(tr(t)))), t
                }(e, n), 0, o)
            }
          }(t, e, null), Hi
        }

        function $i(t, e, n, r, s) {
          let i = null;
          const o = n.directiveEnd;
          let a = n.directiveStylingLast;
          for (-1 === a ? a = n.directiveStart : a++; a < o && (i = e[a], r = qi(r, i.hostAttrs, s), i !== t);) a++;
          return null !== t && (n.directiveStylingLast = a), r
        }

        function qi(t, e, n) {
          const r = n ? 1 : 2;
          let s = -1;
          if (null !== e)
            for (let i = 0; i < e.length; i++) {
              const o = e[i];
              "number" == typeof o ? s = o : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), re(t, o, !!n || e[++i]))
            }
          return void 0 === t ? null : t
        }

        function zi(t, e, n, r, s, i) {
          const o = null === e;
          let a = void 0;
          for (; s > 0;) {
            const e = t[s],
              i = Array.isArray(e),
              l = i ? e[1] : e,
              u = null === l;
            let c = n[s + 1];
            c === wr && (c = u ? ji : void 0);
            let h = u ? se(c, r) : l === r ? c : void 0;
            if (i && !Gi(h) && (h = se(e, r)), Gi(h) && (a = h, o)) return a;
            const d = t[s + 1];
            s = o ? Er(d) : kr(d)
          }
          if (null !== e) {
            let t = i ? e.residualClasses : e.residualStyles;
            null != t && (a = se(t, r))
          }
          return a
        }

        function Gi(t) {
          return void 0 !== t
        }

        function Bi(t, e = "") {
          const n = ze(),
            r = Ge(),
            s = t + 19,
            i = r.firstCreatePass ? Nr(r, n[6], t, 3, null, null) : r.data[s],
            o = n[s] = function (t, e) {
              return Ie(e) ? e.createText(t) : e.createTextNode(t)
            }(e, n[11]);
          Is(r, n, o, i), We(i, !1)
        }

        function Wi(t) {
          return Zi("", t, ""), Wi
        }

        function Zi(t, e, n) {
          const r = ze(),
            s = bi(r, t, e, n);
          return s !== wr && function (t, e, n) {
            const r = Ne(e, t),
              s = t[11];
            Ie(s) ? s.setValue(r, n) : r.textContent = n
          }(r, un(), s), Zi
        }

        function Qi(t, e, n) {
          const r = ze();
          return _i(r, Ke(), e) && zr(Ge(), hn(), r, t, e, r[11], n, !0), Qi
        }

        function Ji(t, e) {
          const n = Me(t)[1],
            r = n.data.length - 1;
          dn(n, {
            directiveStart: r,
            directiveEnd: r + 1
          })
        }

        function Ki(t) {
          let e = Object.getPrototypeOf(t.type.prototype).constructor,
            n = !0;
          const r = [t];
          for (; e;) {
            let s = void 0;
            if (ke(t)) s = e.\u0275cmp || e.\u0275dir;
            else {
              if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
              s = e.\u0275dir
            }
            if (s) {
              if (n) {
                r.push(s);
                const e = t;
                e.inputs = Yi(t.inputs), e.declaredInputs = Yi(t.declaredInputs), e.outputs = Yi(t.outputs);
                const n = s.hostBindings;
                n && eo(t, n);
                const i = s.viewQuery,
                  o = s.contentQueries;
                if (i && Xi(t, i), o && to(t, o), ut(t.inputs, s.inputs), ut(t.declaredInputs, s.declaredInputs), ut(t.outputs, s.outputs), ke(s) && s.data.animation) {
                  const e = t.data;
                  e.animation = (e.animation || []).concat(s.data.animation)
                }
                e.afterContentChecked = e.afterContentChecked || s.afterContentChecked, e.afterContentInit = t.afterContentInit || s.afterContentInit, e.afterViewChecked = t.afterViewChecked || s.afterViewChecked, e.afterViewInit = t.afterViewInit || s.afterViewInit, e.doCheck = t.doCheck || s.doCheck, e.onDestroy = t.onDestroy || s.onDestroy, e.onInit = t.onInit || s.onInit
              }
              const e = s.features;
              if (e)
                for (let r = 0; r < e.length; r++) {
                  const s = e[r];
                  s && s.ngInherit && s(t), s === Ki && (n = !1)
                }
            }
            e = Object.getPrototypeOf(e)
          }! function (t) {
            let e = 0,
              n = null;
            for (let r = t.length - 1; r >= 0; r--) {
              const s = t[r];
              s.hostVars = e += s.hostVars, s.hostAttrs = Cn(s.hostAttrs, n = Cn(n, s.hostAttrs))
            }
          }(r)
        }

        function Yi(t) {
          return t === le ? {} : t === ue ? [] : t
        }

        function Xi(t, e) {
          const n = t.viewQuery;
          t.viewQuery = n ? (t, r) => {
            e(t, r), n(t, r)
          } : e
        }

        function to(t, e) {
          const n = t.contentQueries;
          t.contentQueries = n ? (t, r, s) => {
            e(t, r, s), n(t, r, s)
          } : e
        }

        function eo(t, e) {
          const n = t.hostBindings;
          t.hostBindings = n ? (t, r) => {
            e(t, r), n(t, r)
          } : e
        }
        class no {
          constructor(t, e, n) {
            this.previousValue = t, this.currentValue = e, this.firstChange = n
          }
          isFirstChange() {
            return this.firstChange
          }
        }

        function ro(t) {
          t.type.prototype.ngOnChanges && (t.setInput = so, t.onChanges = function () {
            const t = io(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === le) t.previous = e;
              else
                for (let t in e) n[t] = e[t];
              t.current = null, this.ngOnChanges(e)
            }
          })
        }

        function so(t, e, n, r) {
          const s = io(t) || function (t, e) {
              return t.__ngSimpleChanges__ = e
            }(t, {
              previous: le,
              current: null
            }),
            i = s.current || (s.current = {}),
            o = s.previous,
            a = this.declaredInputs[n],
            l = o[a];
          i[a] = new no(l && l.currentValue, e, o === le), t[r] = e
        }

        function io(t) {
          return t.__ngSimpleChanges__ || null
        }

        function oo(t, e, n, r, s) {
          if (t = xt(t), Array.isArray(t))
            for (let i = 0; i < t.length; i++) oo(t[i], e, n, r, s);
          else {
            const i = Ge(),
              o = ze();
            let a = ii(t) ? t : xt(t.provide),
              l = ni(t);
            const u = Be(),
              c = 65535 & u.providerIndexes,
              h = u.directiveStart,
              d = u.providerIndexes >> 16;
            if (ii(t) || !t.multi) {
              const r = new yn(l, s, Si),
                p = uo(a, e, s ? c : c + d, h); - 1 === p ? (Un(Fn(u, o), i, a), ao(i, t, e.length), e.push(a), u.directiveStart++, u.directiveEnd++, s && (u.providerIndexes += 65536), n.push(r), o.push(r)) : (n[p] = r, o[p] = r)
            } else {
              const p = uo(a, e, c + d, h),
                f = uo(a, e, c, c + d),
                m = p >= 0 && n[p],
                g = f >= 0 && n[f];
              if (s && !g || !s && !m) {
                Un(Fn(u, o), i, a);
                const c = function (t, e, n, r, s) {
                  const i = new yn(t, n, Si);
                  return i.multi = [], i.index = e, i.componentProviders = 0, lo(i, s, r && !n), i
                }(s ? ho : co, n.length, s, r, l);
                !s && g && (n[f].providerFactory = c), ao(i, t, e.length), e.push(a), u.directiveStart++, u.directiveEnd++, s && (u.providerIndexes += 65536), n.push(c), o.push(c)
              } else ao(i, t, p > -1 ? p : f), lo(n[s ? f : p], l, !s && r);
              !s && r && g && n[f].componentProviders++
            }
          }
        }

        function ao(t, e, n) {
          if (ii(e) || e.useClass) {
            const r = (e.useClass || e).prototype.ngOnDestroy;
            r && (t.destroyHooks || (t.destroyHooks = [])).push(n, r)
          }
        }

        function lo(t, e, n) {
          t.multi.push(e), n && t.componentProviders++
        }

        function uo(t, e, n, r) {
          for (let s = n; s < r; s++)
            if (e[s] === t) return s;
          return -1
        }

        function co(t, e, n, r) {
          return po(this.multi, [])
        }

        function ho(t, e, n, r) {
          const s = this.multi;
          let i;
          if (this.providerFactory) {
            const t = this.providerFactory.componentProviders,
              e = zn(n, n[1], this.providerFactory.index, r);
            i = e.slice(0, t), po(s, i);
            for (let n = t; n < e.length; n++) i.push(e[n])
          } else i = [], po(s, i);
          return i
        }

        function po(t, e) {
          for (let n = 0; n < t.length; n++) e.push((0, t[n])());
          return e
        }

        function fo(t, e = []) {
          return n => {
            n.providersResolver = (n, r) => function (t, e, n) {
              const r = Ge();
              if (r.firstCreatePass) {
                const s = ke(t);
                oo(n, r.data, r.blueprint, s, !0), oo(e, r.data, r.blueprint, s, !1)
              }
            }(n, r ? r(t) : t, e)
          }
        }
        ro.ngInherit = !0;
        class mo {}
        class go {
          resolveComponentFactory(t) {
            throw function (t) {
              const e = Error(`No component factory found for ${wt(t)}. Did you add it to @NgModule.entryComponents?`);
              return e.ngComponent = t, e
            }(t)
          }
        }
        let vo = (() => {
            class t {}
            return t.NULL = new go, t
          })(),
          yo = (() => {
            class t {
              constructor(t) {
                this.nativeElement = t
              }
            }
            return t.__NG_ELEMENT_ID__ = () => _o(t), t
          })();
        const _o = function (t) {
          return $s(t, Be(), ze())
        };
        class wo {}
        const bo = function () {
          var t = {
            Important: 1,
            DashCase: 2
          };
          return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t
        }();
        let Co = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => So(), t
        })();
        const So = function () {
          const t = ze(),
            e = De(Be().index, t);
          return function (t) {
            const e = t[11];
            if (Ie(e)) return e;
            throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
          }(Ce(e) ? e : t)
        };
        let xo = (() => {
          class t {}
          return t.\u0275prov = ct({
            token: t,
            providedIn: "root",
            factory: () => null
          }), t
        })();
        class Eo {
          constructor(t) {
            this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
          }
        }
        const Ao = new Eo("9.1.0");
        class ko {
          constructor() {}
          supports(t) {
            return vi(t)
          }
          create(t) {
            return new Oo(t)
          }
        }
        const To = (t, e) => e;
        class Oo {
          constructor(t) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || To
          }
          forEachItem(t) {
            let e;
            for (e = this._itHead; null !== e; e = e._next) t(e)
          }
          forEachOperation(t) {
            let e = this._itHead,
              n = this._removalsHead,
              r = 0,
              s = null;
            for (; e || n;) {
              const i = !n || e && e.currentIndex < No(n, r, s) ? e : n,
                o = No(i, r, s),
                a = i.currentIndex;
              if (i === n) r--, n = n._nextRemoved;
              else if (e = e._next, null == i.previousIndex) r++;
              else {
                s || (s = []);
                const t = o - r,
                  e = a - r;
                if (t != e) {
                  for (let n = 0; n < t; n++) {
                    const r = n < s.length ? s[n] : s[n] = 0,
                      i = r + n;
                    e <= i && i < t && (s[n] = r + 1)
                  }
                  s[i.previousIndex] = e - t
                }
              }
              o !== a && t(i, o, a)
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
            if (null == t && (t = []), !vi(t)) throw new Error(`Error trying to diff '${wt(t)}'. Only arrays and iterables are allowed`);
            return this.check(t) ? this : null
          }
          onDestroy() {}
          check(t) {
            this._reset();
            let e, n, r, s = this._itHead,
              i = !1;
            if (Array.isArray(t)) {
              this.length = t.length;
              for (let e = 0; e < this.length; e++) n = t[e], r = this._trackByFn(e, n), null !== s && mi(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, e)), mi(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, e), i = !0), s = s._next
            } else e = 0,
              function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[fi()]();
                  let r;
                  for (; !(r = n.next()).done;) e(r.value)
                }
              }(t, t => {
                r = this._trackByFn(e, t), null !== s && mi(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, t, r, e)), mi(s.item, t) || this._addIdentityChange(s, t)) : (s = this._mismatch(s, t, r, e), i = !0), s = s._next, e++
              }), this.length = e;
            return this._truncate(s), this.collection = t, this.isDirty
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
          _mismatch(t, e, n, r) {
            let s;
            return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (mi(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (mi(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r)) : t = this._addAfter(new Io(e, n), s, r), t
          }
          _verifyReinsertion(t, e, n, r) {
            let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
            return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
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
            const r = t._prevRemoved,
              s = t._nextRemoved;
            return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _moveAfter(t, e, n) {
            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _addAfter(t, e, n) {
            return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
          }
          _insertAfter(t, e, n) {
            const r = null === e ? this._itHead : e._next;
            return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Po), this._linkedRecords.put(t), t.currentIndex = n, t
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
            return null === this._unlinkedRecords && (this._unlinkedRecords = new Po), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
          }
          _addIdentityChange(t, e) {
            return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
          }
        }
        class Io {
          constructor(t, e) {
            this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
          }
        }
        class Ro {
          constructor() {
            this._head = null, this._tail = null
          }
          add(t) {
            null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
          }
          get(t, e) {
            let n;
            for (n = this._head; null !== n; n = n._nextDup)
              if ((null === e || e <= n.currentIndex) && mi(n.trackById, t)) return n;
            return null
          }
          remove(t) {
            const e = t._prevDup,
              n = t._nextDup;
            return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
          }
        }
        class Po {
          constructor() {
            this.map = new Map
          }
          put(t) {
            const e = t.trackById;
            let n = this.map.get(e);
            n || (n = new Ro, this.map.set(e, n)), n.add(t)
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

        function No(t, e, n) {
          const r = t.previousIndex;
          if (null === r) return r;
          let s = 0;
          return n && r < n.length && (s = n[r]), r + e + s
        }
        class Vo {
          constructor() {}
          supports(t) {
            return t instanceof Map || yi(t)
          }
          create() {
            return new Fo
          }
        }
        class Fo {
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
              if (!(t instanceof Map || yi(t))) throw new Error(`Error trying to diff '${wt(t)}'. Only maps and objects are allowed`)
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
                  const r = this._getOrCreateRecordForKey(n, t);
                  e = this._insertBeforeOrAppend(e, r)
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
              const r = n._prev,
                s = n._next;
              return r && (r._next = s), s && (s._prev = r), n._next = null, n._prev = null, n
            }
            const n = new Do(t);
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
            mi(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
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
        class Do {
          constructor(t) {
            this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
          }
        }
        let Mo = (() => {
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
                    [t, new ot, new st]
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
            return t.\u0275prov = ct({
              token: t,
              providedIn: "root",
              factory: () => new t([new ko])
            }), t
          })(),
          jo = (() => {
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
                    [t, new ot, new st]
                  ]
                }
              }
              find(t) {
                const e = this.factories.find(e => e.supports(t));
                if (e) return e;
                throw new Error(`Cannot find a differ supporting object '${t}'`)
              }
            }
            return t.\u0275prov = ct({
              token: t,
              providedIn: "root",
              factory: () => new t([new Vo])
            }), t
          })();
        const Uo = [new Vo],
          Lo = new Mo([new ko]),
          Ho = new jo(Uo);
        let $o = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => qo(t, yo), t
        })();
        const qo = function (t, e) {
          return qs(t, e, Be(), ze())
        };
        let zo = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => Go(t, yo), t
        })();
        const Go = function (t, e) {
            return zs(t, e, Be(), ze())
          },
          Bo = {};
        class Wo extends vo {
          constructor(t) {
            super(), this.ngModule = t
          }
          resolveComponentFactory(t) {
            const e = _e(t);
            return new Jo(e, this.ngModule)
          }
        }

        function Zo(t) {
          const e = [];
          for (let n in t) t.hasOwnProperty(n) && e.push({
            propName: t[n],
            templateName: n
          });
          return e
        }
        const Qo = new jt("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: () => In
        });
        class Jo extends mo {
          constructor(t, e) {
            super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(_r).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
          }
          get inputs() {
            return Zo(this.componentDef.inputs)
          }
          get outputs() {
            return Zo(this.componentDef.outputs)
          }
          create(t, e, n, r) {
            const s = (r = r || this.ngModule) ? function (t, e) {
                return {
                  get: (n, r, s) => {
                    const i = t.get(n, Bo, s);
                    return i !== Bo || r === Bo ? i : e.get(n, r, s)
                  }
                }
              }(t, r.injector) : t,
              i = s.get(wo, Re),
              o = s.get(xo, null),
              a = i.createRenderer(null, this.componentDef),
              l = this.componentDef.selectors[0][0] || "div",
              u = n ? function (t, e, n) {
                if (Ie(t)) return t.selectRootElement(e, n === ae.ShadowDom);
                let r = "string" == typeof e ? t.querySelector(e) : e;
                return r.textContent = "", r
              }(a, n, this.componentDef.encapsulation) : Rr(l, i.createRenderer(null, this.componentDef), function (t) {
                const e = t.toLowerCase();
                return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
              }(l)),
              c = this.componentDef.onPush ? 576 : 528,
              h = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
              d = {
                components: [],
                scheduler: In,
                clean: ds,
                playerHandler: null,
                flags: 0
              },
              p = Hr(0, -1, null, 1, 0, null, null, null, null, null),
              f = Pr(null, p, d, c, null, null, i, a, o, s);
            let m, g;
            nn(f, null);
            try {
              const t = function (t, e, n, r, s, i) {
                const o = n[1];
                n[19] = t;
                const a = Nr(o, null, 0, 3, null, null),
                  l = a.mergedAttrs = e.hostAttrs;
                null !== l && (di(a, l), null !== t && (_n(s, t, l), null !== a.classes && Ds(s, t, a.classes), null !== a.styles && Fs(s, t, a.styles)));
                const u = r.createRenderer(t, e),
                  c = Pr(n, Lr(e), null, e.onPush ? 64 : 16, n[19], a, r, u, void 0);
                return o.firstCreatePass && (Un(Fn(a, n), o, e.type), Jr(o, a), Yr(a, n.length, 1)), as(n, c), n[19] = c
              }(u, this.componentDef, f, i, a);
              if (u)
                if (n) _n(a, u, ["ng-version", Ao.full]);
                else {
                  const {
                    attrs: t,
                    classes: e
                  } = function (t) {
                    const e = [],
                      n = [];
                    let r = 1,
                      s = 2;
                    for (; r < t.length;) {
                      let i = t[r];
                      if ("string" == typeof i) 2 === s ? "" !== i && e.push(i, t[++r]) : 8 === s && n.push(i);
                      else {
                        if (!mr(s)) break;
                        s = i
                      }
                      r++
                    }
                    return {
                      attrs: e,
                      classes: n
                    }
                  }(this.componentDef.selectors[0]);
                  t && _n(a, u, t), e && e.length > 0 && Ds(a, u, e.join(" "))
                } g = Fe(f[1], 0), e && (g.projection = e.map(t => Array.from(t))), m = function (t, e, n, r, s) {
                const i = n[1],
                  o = function (t, e, n) {
                    const r = Be();
                    t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Qr(t, r, 1), Xr(t, e, n));
                    const s = zn(e, t, e.length - 1, r);
                    lr(s, e);
                    const i = Ve(r, e);
                    return i && lr(i, e), s
                  }(i, n, e);
                r.components.push(o), t[8] = o, s && s.forEach(t => t(o, e)), e.contentQueries && e.contentQueries(1, o, n.length - 1);
                const a = Be();
                if (i.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                  cn(a.index - 19);
                  const t = n[1];
                  Br(t, e), Wr(t, n, e.hostVars), Zr(e, o)
                }
                return o
              }(t, this.componentDef, f, d, [Ji]), Vr(p, f, null)
            } finally {
              ln()
            }
            const v = new Ko(this.componentType, m, $s(yo, g, f), f, g);
            return n && !h || (v.hostView._tViewNode.child = g), v
          }
        }
        class Ko extends class {} {
          constructor(t, e, n, r, s) {
            super(), this.location = n, this._rootLView = r, this._tNode = s, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new js(r), this.hostView._tViewNode = function (t, e, n, r) {
              let s = t.node;
              return null == s && (t.node = s = $r(0, null, 2, -1, null, null)), r[6] = s
            }(r[1], 0, 0, r), this.componentType = t
          }
          get injector() {
            return new Wn(this._tNode, this._rootLView)
          }
          destroy() {
            this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
          }
          onDestroy(t) {
            this.destroyCbs && this.destroyCbs.push(t)
          }
        }
        const Yo = void 0;
        var Xo = ["en", [
            ["a", "p"],
            ["AM", "PM"], Yo
          ],
          [
            ["AM", "PM"], Yo, Yo
          ],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
          ], Yo, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          ], Yo, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
          ], 0, [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", Yo, "{1} 'at' {0}", Yo],
          [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
          function (t) {
            let e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
          }
        ];
        let ta = {};

        function ea(t) {
          return t in ta || (ta[t] = It.ng && It.ng.common && It.ng.common.locales && It.ng.common.locales[t]), ta[t]
        }
        const na = function () {
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
        let ra = "en-US";

        function sa(t) {
          var e, n;
          n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, r) {
            throw new Error(`ASSERTION ERROR: ${t}` + ` [Expected=> null != ${e} <=Actual]`)
          }(n, e), "string" == typeof t && (ra = t.toLowerCase().replace(/_/g, "-"))
        }
        const ia = new Map;
        class oa extends Yt {
          constructor(t, e) {
            super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Wo(this);
            const n = be(t),
              r = t[Ft] || null;
            r && sa(r), this._bootstrapComponents = Rn(n.bootstrap), this._r3Injector = Xs(t, e, [{
              provide: Yt,
              useValue: this
            }, {
              provide: vo,
              useValue: this.componentFactoryResolver
            }], wt(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
          }
          get(t, e = ai.THROW_IF_NOT_FOUND, n = at.Default) {
            return t === ai || t === Yt || t === Ut ? this : this._r3Injector.get(t, e, n)
          }
          destroy() {
            const t = this._r3Injector;
            !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
          }
          onDestroy(t) {
            this.destroyCbs.push(t)
          }
        }
        class aa extends Xt {
          constructor(t) {
            super(), this.moduleType = t, null !== be(t) && function t(e) {
              if (null !== e.\u0275mod.id) {
                const t = e.\u0275mod.id;
                (function (t, e, n) {
                  if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${wt(e)} vs ${wt(e.name)}`)
                })(t, ia.get(t), e), ia.set(t, e)
              }
              let n = e.\u0275mod.imports;
              n instanceof Function && (n = n()), n && n.forEach(e => t(e))
            }(t)
          }
          create(t) {
            return new oa(this.moduleType, t)
          }
        }

        function la(t, e, n) {
          const r = ze(),
            s = function (t, e) {
              return t[e + 19]
            }(r, t);
          return function (t, e) {
            return gi.isWrapped(e) && (e = gi.unwrap(e), t[$e.lFrame.bindingIndex] = wr), e
          }(r, function (t, e) {
            return t[1].data[e + 19].pure
          }(r, t) ? function (t, e, n, r, s, i) {
            const o = e + n;
            return _i(t, o, s) ? function (t, e, n) {
              return t[e] = n
            }(t, o + 1, i ? r.call(i, s) : r(s)) : function (t, e) {
              const n = t[e];
              return n === wr ? void 0 : n
            }(t, o + 1)
          }(r, function () {
            const t = $e.lFrame;
            let e = t.bindingRootIndex;
            return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
          }(), e, s.transform, n, s) : s.transform(n))
        }
        class ua extends E {
          constructor(t = !1) {
            super(), this.__isAsync = t
          }
          emit(t) {
            super.next(t)
          }
          subscribe(t, e, n) {
            let r, s = t => null,
              i = () => null;
            t && "object" == typeof t ? (r = this.__isAsync ? e => {
              setTimeout(() => t.next(e))
            } : e => {
              t.next(e)
            }, t.error && (s = this.__isAsync ? e => {
              setTimeout(() => t.error(e))
            } : e => {
              t.error(e)
            }), t.complete && (i = this.__isAsync ? () => {
              setTimeout(() => t.complete())
            } : () => {
              t.complete()
            })) : (r = this.__isAsync ? e => {
              setTimeout(() => t(e))
            } : e => {
              t(e)
            }, e && (s = this.__isAsync ? t => {
              setTimeout(() => e(t))
            } : t => {
              e(t)
            }), n && (i = this.__isAsync ? () => {
              setTimeout(() => n())
            } : () => {
              n()
            }));
            const o = super.subscribe(r, s, i);
            return t instanceof h && t.add(o), o
          }
        }

        function ca() {
          return this._results[fi()]()
        }
        class ha {
          constructor() {
            this.dirty = !0, this._results = [], this.changes = new ua, this.length = 0;
            const t = fi(),
              e = ha.prototype;
            e[t] || (e[t] = ca)
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
              for (let r = 0; r < e.length; r++) {
                let s = e[r];
                Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s)
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
        class da {
          constructor(t) {
            this.queryList = t, this.matches = null
          }
          clone() {
            return new da(this.queryList)
          }
          setDirty() {
            this.queryList.setDirty()
          }
        }
        class pa {
          constructor(t = []) {
            this.queries = t
          }
          createEmbeddedView(t) {
            const e = t.queries;
            if (null !== e) {
              const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
                r = [];
              for (let t = 0; t < n; t++) {
                const n = e.getByIndex(t);
                r.push(this.queries[n.indexInDeclarationView].clone())
              }
              return new pa(r)
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
            for (let e = 0; e < this.queries.length; e++) null !== Sa(t, e).matches && this.queries[e].setDirty()
          }
        }
        class fa {
          constructor(t, e, n, r = null) {
            this.predicate = t, this.descendants = e, this.isStatic = n, this.read = r
          }
        }
        class ma {
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
              const r = null !== e ? e.length : 0,
                s = this.getByIndex(n).embeddedTView(t, r);
              s && (s.indexInDeclarationView = n, null !== e ? e.push(s) : e = [s])
            }
            return null !== e ? new ma(e) : null
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
        class ga {
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
            return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new ga(this.metadata)) : null
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
              for (let r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, va(e, n[r]))
            } else {
              const n = this.metadata.predicate;
              n === $o ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, qn(e, t, n, !1, !1))
            }
          }
          matchTNodeWithReadOption(t, e, n) {
            if (null !== n) {
              const r = this.metadata.read;
              if (null !== r)
                if (r === yo || r === zo || r === $o && 0 === e.type) this.addMatch(e.index, -2);
                else {
                  const n = qn(e, t, r, !1, !1);
                  null !== n && this.addMatch(e.index, n)
                }
              else this.addMatch(e.index, n)
            }
          }
          addMatch(t, e) {
            null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
          }
        }

        function va(t, e) {
          const n = t.localNames;
          if (null !== n)
            for (let r = 0; r < n.length; r += 2)
              if (n[r] === e) return n[r + 1];
          return null
        }

        function ya(t, e, n, r) {
          return -1 === n ? function (t, e) {
            return 3 === t.type || 4 === t.type ? $s(yo, t, e) : 0 === t.type ? qs($o, yo, t, e) : null
          }(e, t) : -2 === n ? function (t, e, n) {
            return n === yo ? $s(yo, e, t) : n === $o ? qs($o, yo, e, t) : n === zo ? zs(zo, yo, e, t) : void 0
          }(t, e, r) : zn(t, t[1], n, e)
        }

        function _a(t, e, n, r) {
          const s = e[5].queries[r];
          if (null === s.matches) {
            const r = t.data,
              i = n.matches,
              o = [];
            for (let t = 0; t < i.length; t += 2) {
              const s = i[t];
              o.push(s < 0 ? null : ya(e, r[s], i[t + 1], n.metadata.read))
            }
            s.matches = o
          }
          return s.matches
        }

        function wa(t) {
          const e = ze(),
            n = Ge(),
            r = Xe();
          tn(r + 1);
          const s = Sa(n, r);
          if (t.dirty && je(e) === s.metadata.isStatic) {
            if (null === s.matches) t.reset([]);
            else {
              const i = s.crossesNgTemplate ? function t(e, n, r, s) {
                const i = e.queries.getByIndex(r),
                  o = i.matches;
                if (null !== o) {
                  const a = _a(e, n, i, r);
                  for (let e = 0; e < o.length; e += 2) {
                    const r = o[e];
                    if (r > 0) s.push(a[e / 2]);
                    else {
                      const i = o[e + 1],
                        a = n[-r];
                      for (let e = 9; e < a.length; e++) {
                        const n = a[e];
                        n[17] === n[3] && t(n[1], n, i, s)
                      }
                      if (null !== a[5]) {
                        const e = a[5];
                        for (let n = 0; n < e.length; n++) {
                          const r = e[n];
                          t(r[1], r, i, s)
                        }
                      }
                    }
                  }
                }
                return s
              }(n, e, r, []) : _a(n, e, s, r);
              t.reset(i), t.notifyOnChanges()
            }
            return !0
          }
          return !1
        }

        function ba(t, e, n, r) {
          ! function (t, e, n, r, s, i, o, a) {
            t.firstCreatePass && (function (t, e, n) {
                null === t.queries && (t.queries = new ma), t.queries.track(new ga(e, n))
              }(t, new fa(n, r, !1, s), o.index), function (t, e) {
                const n = t.contentQueries || (t.contentQueries = []);
                e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
              }(t, a)),
              function (t, e) {
                const n = new ha;
                ! function (t, e, n, r) {
                  const s = ps(e);
                  s.push(n), t.firstCreatePass && fs(t).push(r, s.length - 1)
                }(t, e, n, n.destroy), null === e[5] && (e[5] = new pa), e[5].queries.push(new da(n))
              }(t, e)
          }(Ge(), ze(), e, n, r, 0, Be(), t)
        }

        function Ca() {
          return t = ze(), e = Xe(), t[5].queries[e].queryList;
          var t, e
        }

        function Sa(t, e) {
          return t.queries.getByIndex(e)
        }
        const xa = new jt("Application Initializer");
        let Ea = (() => {
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
                  Ri(e) && t.push(e)
                }
              Promise.all(t).then(() => {
                e()
              }).catch(t => {
                this.reject(t)
              }), 0 === t.length && e(), this.initialized = !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(xa, 8))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Aa = new jt("AppId"),
          ka = {
            provide: Aa,
            useFactory: function () {
              return `${Ta()}${Ta()}${Ta()}`
            },
            deps: []
          };

        function Ta() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const Oa = new jt("Platform Initializer"),
          Ia = new jt("Platform ID"),
          Ra = new jt("appBootstrapListener");
        let Pa = (() => {
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
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Na = new jt("LocaleId"),
          Va = new jt("DefaultCurrencyCode");
        class Fa {
          constructor(t, e) {
            this.ngModuleFactory = t, this.componentFactories = e
          }
        }
        const Da = function (t) {
            return new aa(t)
          },
          Ma = Da,
          ja = function (t) {
            return Promise.resolve(Da(t))
          },
          Ua = function (t) {
            const e = Da(t),
              n = Rn(be(t).declarations).reduce((t, e) => {
                const n = _e(e);
                return n && t.push(new Jo(n)), t
              }, []);
            return new Fa(e, n)
          },
          La = Ua,
          Ha = function (t) {
            return Promise.resolve(Ua(t))
          };
        let $a = (() => {
          class t {
            constructor() {
              this.compileModuleSync = Ma, this.compileModuleAsync = ja, this.compileModuleAndAllComponentsSync = La, this.compileModuleAndAllComponentsAsync = Ha
            }
            clearCache() {}
            clearCacheFor(t) {}
            getModuleId(t) {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const qa = new jt("compilerOptions"),
          za = (() => Promise.resolve(0))();

        function Ga(t) {
          "undefined" == typeof Zone ? za.then(() => {
            t && t.apply(null, null)
          }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }
        class Ba {
          constructor({
            enableLongStackTrace: t = !1,
            shouldCoalesceEventChangeDetection: e = !1
          }) {
            if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ua(!1), this.onMicrotaskEmpty = new ua(!1), this.onStable = new ua(!1), this.onError = new ua(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
                let t = It.requestAnimationFrame,
                  e = It.cancelAnimationFrame;
                if ("undefined" != typeof Zone && t && e) {
                  const n = t[Zone.__symbol__("OriginalDelegate")];
                  n && (t = n);
                  const r = e[Zone.__symbol__("OriginalDelegate")];
                  r && (e = r)
                }
                return {
                  nativeRequestAnimationFrame: t,
                  nativeCancelAnimationFrame: e
                }
              }().nativeRequestAnimationFrame,
              function (t) {
                const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {
                  ! function (t) {
                    -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(It, () => {
                      t.lastRequestAnimationFrameId = -1, Ja(t), Qa(t)
                    }), Ja(t))
                  }(t)
                });
                t._inner = t._inner.fork({
                  name: "angular",
                  properties: {
                    isAngularZone: !0,
                    maybeDelayChangeDetection: e
                  },
                  onInvokeTask: (n, r, s, i, o, a) => {
                    try {
                      return Ka(t), n.invokeTask(s, i, o, a)
                    } finally {
                      e && "eventTask" === i.type && e(), Ya(t)
                    }
                  },
                  onInvoke: (e, n, r, s, i, o, a) => {
                    try {
                      return Ka(t), e.invoke(r, s, i, o, a)
                    } finally {
                      Ya(t)
                    }
                  },
                  onHasTask: (e, n, r, s) => {
                    e.hasTask(r, s), n === r && ("microTask" == s.change ? (t._hasPendingMicrotasks = s.microTask, Ja(t), Qa(t)) : "macroTask" == s.change && (t.hasPendingMacrotasks = s.macroTask))
                  },
                  onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
                })
              }(this)
          }
          static isInAngularZone() {
            return !0 === Zone.current.get("isAngularZone")
          }
          static assertInAngularZone() {
            if (!Ba.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
          }
          static assertNotInAngularZone() {
            if (Ba.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
          }
          run(t, e, n) {
            return this._inner.run(t, e, n)
          }
          runTask(t, e, n, r) {
            const s = this._inner,
              i = s.scheduleEventTask("NgZoneEvent: " + r, t, Za, Wa, Wa);
            try {
              return s.runTask(i, e, n)
            } finally {
              s.cancelTask(i)
            }
          }
          runGuarded(t, e, n) {
            return this._inner.runGuarded(t, e, n)
          }
          runOutsideAngular(t) {
            return this._outer.run(t)
          }
        }

        function Wa() {}
        const Za = {};

        function Qa(t) {
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

        function Ja(t) {
          t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
        }

        function Ka(t) {
          t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
        }

        function Ya(t) {
          t._nesting--, Qa(t)
        }
        class Xa {
          constructor() {
            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ua, this.onMicrotaskEmpty = new ua, this.onStable = new ua, this.onError = new ua
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
          runTask(t, e, n, r) {
            return t.apply(e, n)
          }
        }
        let tl = (() => {
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
                      Ba.assertNotInAngularZone(), Ga(() => {
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
                if (this.isStable()) Ga(() => {
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
                let r = -1;
                e && e > 0 && (r = setTimeout(() => {
                  this._callbacks = this._callbacks.filter(t => t.timeoutId !== r), t(this._didWork, this.getPendingTasks())
                }, e)), this._callbacks.push({
                  doneCb: t,
                  timeoutId: r,
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
              return new(e || t)(Zt(Ba))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          el = (() => {
            class t {
              constructor() {
                this._applications = new Map, sl.addToWindow(this)
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
                return sl.findTestabilityInTree(this, t, e)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        class nl {
          addToWindow(t) {}
          findTestabilityInTree(t, e, n) {
            return null
          }
        }
        let rl, sl = new nl,
          il = function (t, e, n) {
            const r = t.get(qa, []).concat(e),
              s = new aa(n);
            if (0 === ui.size) return Promise.resolve(s);
            const i = function (t) {
              const e = [];
              return t.forEach(t => t && e.push(...t)), e
            }(r.map(t => t.providers));
            if (0 === i.length) return Promise.resolve(s);
            const o = function () {
                const t = It.ng;
                if (!t || !t.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
                return t.\u0275compilerFacade
              }(),
              a = ai.create({
                providers: i
              }).get(o.ResourceLoader);
            return function (t) {
              const e = [],
                n = new Map;

              function r(t) {
                let e = n.get(t);
                if (!e) {
                  const r = (t => Promise.resolve(a.get(t)))(t);
                  n.set(t, e = r.then(hi))
                }
                return e
              }
              return ui.forEach((t, n) => {
                const s = [];
                t.templateUrl && s.push(r(t.templateUrl).then(e => {
                  t.template = e
                }));
                const i = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                i && i.forEach((e, n) => {
                  o.push(""), s.push(r(e).then(r => {
                    o[a + n] = r, i.splice(i.indexOf(e), 1), 0 == i.length && (t.styleUrls = void 0)
                  }))
                });
                const l = Promise.all(s).then(() => function (t) {
                  ci.delete(t)
                }(n));
                e.push(l)
              }), ui = new Map, Promise.all(e).then(() => {})
            }().then(() => s)
          };
        const ol = new jt("AllowMultipleToken");
        class al {
          constructor(t, e) {
            this.name = t, this.token = e
          }
        }

        function ll(t, e, n = []) {
          const r = `Platform: ${e}`,
            s = new jt(r);
          return (e = []) => {
            let i = ul();
            if (!i || i.injector.get(ol, !1))
              if (t) t(n.concat(e).concat({
                provide: s,
                useValue: !0
              }));
              else {
                const t = n.concat(e).concat({
                  provide: s,
                  useValue: !0
                }, {
                  provide: Ws,
                  useValue: "platform"
                });
                ! function (t) {
                  if (rl && !rl.destroyed && !rl.injector.get(ol, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                  rl = t.get(cl);
                  const e = t.get(Oa, null);
                  e && e.forEach(t => t())
                }(ai.create({
                  providers: t,
                  name: r
                }))
              } return function (t) {
              const e = ul();
              if (!e) throw new Error("No platform exists!");
              if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
              return e
            }(s)
          }
        }

        function ul() {
          return rl && !rl.destroyed ? rl : null
        }
        let cl = (() => {
          class t {
            constructor(t) {
              this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }
            bootstrapModuleFactory(t, e) {
              const n = function (t, e) {
                  let n;
                  return n = "noop" === t ? new Xa : ("zone.js" === t ? void 0 : t) || new Ba({
                    enableLongStackTrace: rr(),
                    shouldCoalesceEventChangeDetection: e
                  }), n
                }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
                r = [{
                  provide: Ba,
                  useValue: n
                }];
              return n.run(() => {
                const e = ai.create({
                    providers: r,
                    parent: this.injector,
                    name: t.moduleType.name
                  }),
                  s = t.create(e),
                  i = s.injector.get(Yn, null);
                if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                return s.onDestroy(() => pl(this._modules, s)), n.runOutsideAngular(() => n.onError.subscribe({
                    next: t => {
                      i.handleError(t)
                    }
                  })),
                  function (t, e, n) {
                    try {
                      const r = n();
                      return Ri(r) ? r.catch(n => {
                        throw e.runOutsideAngular(() => t.handleError(n)), n
                      }) : r
                    } catch (r) {
                      throw e.runOutsideAngular(() => t.handleError(r)), r
                    }
                  }(i, n, () => {
                    const t = s.injector.get(Ea);
                    return t.runInitializers(), t.donePromise.then(() => (sa(s.injector.get(Na, "en-US") || "en-US"), this._moduleDoBootstrap(s), s))
                  })
              })
            }
            bootstrapModule(t, e = []) {
              const n = hl({}, e);
              return il(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n))
            }
            _moduleDoBootstrap(t) {
              const e = t.injector.get(dl);
              if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
              else {
                if (!t.instance.ngDoBootstrap) throw new Error(`The module ${wt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
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
            return new(e || t)(Zt(ai))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function hl(t, e) {
          return Array.isArray(e) ? e.reduce(hl, t) : Object.assign(Object.assign({}, t), e)
        }
        let dl = (() => {
          class t {
            constructor(t, e, n, r, s, i) {
              this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = s, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = rr(), this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick()
                  })
                }
              });
              const o = new w(t => {
                  this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete()
                  })
                }),
                a = new w(t => {
                  let e;
                  this._zone.runOutsideAngular(() => {
                    e = this._zone.onStable.subscribe(() => {
                      Ba.assertNotInAngularZone(), Ga(() => {
                        this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                      })
                    })
                  });
                  const n = this._zone.onUnstable.subscribe(() => {
                    Ba.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
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
                  r = t[t.length - 1];
                return k(r) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof r && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof w ? t[0] : B(e)(W(t, n))
              }(o, a.pipe(t => {
                return Z()((e = tt, function (t) {
                  let n;
                  n = "function" == typeof e ? e : function () {
                    return e
                  };
                  const r = Object.create(t, Y);
                  return r.source = t, r.subjectFactory = n, r
                })(t));
                var e
              }))
            }
            bootstrap(t, e) {
              if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
              let n;
              n = t instanceof mo ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
              const r = n.isBoundToModule ? void 0 : this._injector.get(Yt),
                s = n.create(ai.NULL, [], e || n.selector, r);
              s.onDestroy(() => {
                this._unloadComponent(s)
              });
              const i = s.injector.get(tl, null);
              return i && s.injector.get(el).registerApplication(s.location.nativeElement, i), this._loadComponent(s), rr() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), s
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
              pl(this._views, e), e.detachFromAppRef()
            }
            _loadComponent(t) {
              this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(Ra, []).concat(this._bootstrapListeners).forEach(e => e(t))
            }
            _unloadComponent(t) {
              this.detachView(t.hostView), pl(this.components, t)
            }
            ngOnDestroy() {
              this._views.slice().forEach(t => t.destroy())
            }
            get viewCount() {
              return this._views.length
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Ba), Zt(Pa), Zt(ai), Zt(Yn), Zt(vo), Zt(Ea))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function pl(t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }
        class fl {}
        class ml {}
        const gl = {
          factoryPathPrefix: "",
          factoryPathSuffix: ".ngfactory"
        };
        let vl = (() => {
          class t {
            constructor(t, e) {
              this._compiler = t, this._config = e || gl
            }
            load(t) {
              return this.loadAndCompile(t)
            }
            loadAndCompile(t) {
              let [e, r] = t.split("#");
              return void 0 === r && (r = "default"), n("zn8P")(e).then(t => t[r]).then(t => yl(t, e, r)).then(t => this._compiler.compileModuleAsync(t))
            }
            loadFactory(t) {
              let [e, r] = t.split("#"), s = "NgFactory";
              return void 0 === r && (r = "default", s = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[r + s]).then(t => yl(t, e, r))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt($a), Zt(ml, 8))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function yl(t, e, n) {
          if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
          return t
        }
        const _l = ll(null, "core", [{
            provide: Ia,
            useValue: "unknown"
          }, {
            provide: cl,
            deps: [ai]
          }, {
            provide: el,
            deps: []
          }, {
            provide: Pa,
            deps: []
          }]),
          wl = [{
            provide: dl,
            useClass: dl,
            deps: [Ba, Pa, ai, Yn, vo, Ea]
          }, {
            provide: Qo,
            deps: [Ba],
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
            provide: Ea,
            useClass: Ea,
            deps: [
              [new st, xa]
            ]
          }, {
            provide: $a,
            useClass: $a,
            deps: []
          }, ka, {
            provide: Mo,
            useFactory: function () {
              return Lo
            },
            deps: []
          }, {
            provide: jo,
            useFactory: function () {
              return Ho
            },
            deps: []
          }, {
            provide: Na,
            useFactory: function (t) {
              return sa(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t
            },
            deps: [
              [new rt(Na), new st, new ot]
            ]
          }, {
            provide: Va,
            useValue: "USD"
          }];
        let bl = (() => {
            class t {
              constructor(t) {}
            }
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)(Zt(dl))
              },
              providers: wl
            }), t
          })(),
          Cl = null;

        function Sl() {
          return Cl
        }
        const xl = new jt("DocumentToken");
        let El = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ct({
            factory: Al,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function Al() {
          return Zt(Tl)
        }
        const kl = new jt("Location Initialized");
        let Tl = (() => {
          class t extends El {
            constructor(t) {
              super(), this._doc = t, this._init()
            }
            _init() {
              this.location = Sl().getLocation(), this._history = Sl().getHistory()
            }
            getBaseHrefFromDOM() {
              return Sl().getBaseHref(this._doc)
            }
            onPopState(t) {
              Sl().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
            }
            onHashChange(t) {
              Sl().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
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
              Ol() ? this._history.pushState(t, e, n) : this.location.hash = n
            }
            replaceState(t, e, n) {
              Ol() ? this._history.replaceState(t, e, n) : this.location.hash = n
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
            return new(e || t)(Zt(xl))
          }, t.\u0275prov = ct({
            factory: Il,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function Ol() {
          return !!window.history.pushState
        }

        function Il() {
          return new Tl(Zt(xl))
        }

        function Rl(t, e) {
          if (0 == t.length) return e;
          if (0 == e.length) return t;
          let n = 0;
          return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        }

        function Pl(t) {
          const e = t.match(/#|\?|$/),
            n = e && e.index || t.length;
          return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
        }

        function Nl(t) {
          return t && "?" !== t[0] ? "?" + t : t
        }
        let Vl = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ct({
            factory: Fl,
            token: t,
            providedIn: "root"
          }), t
        })();

        function Fl(t) {
          const e = Zt(xl).location;
          return new Ml(Zt(El), e && e.origin || "")
        }
        const Dl = new jt("appBaseHref");
        let Ml = (() => {
            class t extends Vl {
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
                return Rl(this._baseHref, t)
              }
              path(t = !1) {
                const e = this._platformLocation.pathname + Nl(this._platformLocation.search),
                  n = this._platformLocation.hash;
                return n && t ? `${e}${n}` : e
              }
              pushState(t, e, n, r) {
                const s = this.prepareExternalUrl(n + Nl(r));
                this._platformLocation.pushState(t, e, s)
              }
              replaceState(t, e, n, r) {
                const s = this.prepareExternalUrl(n + Nl(r));
                this._platformLocation.replaceState(t, e, s)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(El), Zt(Dl, 8))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          jl = (() => {
            class t extends Vl {
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
                const e = Rl(this._baseHref, t);
                return e.length > 0 ? "#" + e : e
              }
              pushState(t, e, n, r) {
                let s = this.prepareExternalUrl(n + Nl(r));
                0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s)
              }
              replaceState(t, e, n, r) {
                let s = this.prepareExternalUrl(n + Nl(r));
                0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(El), Zt(Dl, 8))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          Ul = (() => {
            class t {
              constructor(t, e) {
                this._subject = new ua, this._urlChangeListeners = [], this._platformStrategy = t;
                const n = this._platformStrategy.getBaseHref();
                this._platformLocation = e, this._baseHref = Pl(Hl(n)), this._platformStrategy.onPopState(t => {
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
                return this.path() == this.normalize(t + Nl(e))
              }
              normalize(e) {
                return t.stripTrailingSlash(function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e
                }(this._baseHref, Hl(e)))
              }
              prepareExternalUrl(t) {
                return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
              }
              go(t, e = "", n = null) {
                this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Nl(e)), n)
              }
              replaceState(t, e = "", n = null) {
                this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Nl(e)), n)
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
              return new(e || t)(Zt(Vl), Zt(El))
            }, t.normalizeQueryParams = Nl, t.joinWithSlash = Rl, t.stripTrailingSlash = Pl, t.\u0275prov = ct({
              factory: Ll,
              token: t,
              providedIn: "root"
            }), t
          })();

        function Ll() {
          return new Ul(Zt(Vl), Zt(El))
        }

        function Hl(t) {
          return t.replace(/\/index.html$/, "")
        }
        const $l = function () {
          var t = {
            Zero: 0,
            One: 1,
            Two: 2,
            Few: 3,
            Many: 4,
            Other: 5
          };
          return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t
        }();
        class ql {}
        let zl = (() => {
          class t extends ql {
            constructor(t) {
              super(), this.locale = t
            }
            getPluralCategory(t, e) {
              switch (function (t) {
                return function (t) {
                  const e = function (t) {
                    return t.toLowerCase().replace(/_/g, "-")
                  }(t);
                  let n = ea(e);
                  if (n) return n;
                  const r = e.split("-")[0];
                  if (n = ea(r), n) return n;
                  if ("en" === r) return Xo;
                  throw new Error(`Missing locale data for the locale "${t}".`)
                }(t)[na.PluralCase]
              }(e || this.locale)(t)) {
                case $l.Zero:
                  return "zero";
                case $l.One:
                  return "one";
                case $l.Two:
                  return "two";
                case $l.Few:
                  return "few";
                case $l.Many:
                  return "many";
                default:
                  return "other"
              }
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Na))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function Gl(t, e) {
          e = encodeURIComponent(e);
          for (const n of t.split(";")) {
            const t = n.indexOf("="),
              [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
            if (r.trim() === e) return decodeURIComponent(s)
          }
          return null
        }
        class Bl {
          constructor(t, e, n, r) {
            this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
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
        let Wl = (() => {
          class t {
            constructor(t, e, n) {
              this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
            }
            set ngForOf(t) {
              this._ngForOf = t, this._ngForOfDirty = !0
            }
            set ngForTrackBy(t) {
              rr() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. ` + "See https://angular.io/api/common/NgForOf#change-propagation for more information."), this._trackByFn = t
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
              t.forEachOperation((t, n, r) => {
                if (null == t.previousIndex) {
                  const n = this._viewContainer.createEmbeddedView(this._template, new Bl(null, this._ngForOf, -1, -1), null === r ? void 0 : r),
                    s = new Zl(t, n);
                  e.push(s)
                } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
                else if (null !== n) {
                  const s = this._viewContainer.get(n);
                  this._viewContainer.move(s, r);
                  const i = new Zl(t, s);
                  e.push(i)
                }
              });
              for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
              for (let n = 0, r = this._viewContainer.length; n < r; n++) {
                const t = this._viewContainer.get(n);
                t.context.index = n, t.context.count = r, t.context.ngForOf = this._ngForOf
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
            return new(e || t)(Si(zo), Si($o), Si(Mo))
          }, t.\u0275dir = ve({
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
        class Zl {
          constructor(t, e) {
            this.record = t, this.view = e
          }
        }
        let Ql = (() => {
          class t {
            constructor(t, e) {
              this._viewContainer = t, this._context = new Jl, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
            }
            set ngIf(t) {
              this._context.$implicit = this._context.ngIf = t, this._updateView()
            }
            set ngIfThen(t) {
              Kl("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
            }
            set ngIfElse(t) {
              Kl("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
            }
            _updateView() {
              this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
            static ngTemplateContextGuard(t, e) {
              return !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Si(zo), Si($o))
          }, t.\u0275dir = ve({
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
        class Jl {
          constructor() {
            this.$implicit = null, this.ngIf = null
          }
        }

        function Kl(t, e) {
          if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${wt(e)}'.`)
        }
        let Yl = (() => {
            class t {
              transform(t) {
                return JSON.stringify(t, null, 2)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275pipe = ye({
              name: "json",
              type: t,
              pure: !1
            }), t
          })(),
          Xl = (() => {
            class t {}
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)
              },
              providers: [{
                provide: ql,
                useClass: zl
              }]
            }), t
          })(),
          tu = (() => {
            class t {}
            return t.\u0275prov = ct({
              token: t,
              providedIn: "root",
              factory: () => new eu(Zt(xl), window, Zt(Yn))
            }), t
          })();
        class eu {
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
              r = e.top + this.window.pageYOffset,
              s = this.offset();
            this.window.scrollTo(n - s[0], r - s[1])
          }
          supportScrollRestoration() {
            try {
              return !!this.window && !!this.window.scrollTo
            } catch (t) {
              return !1
            }
          }
        }
        class nu extends class extends class {} {
          constructor() {
            super()
          }
          supportsDOMEvents() {
            return !0
          }
        } {
          static makeCurrent() {
            var t;
            t = new nu, Cl || (Cl = t)
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
            const e = su || (su = document.querySelector("base"), su) ? su.getAttribute("href") : null;
            return null == e ? null : (n = e, ru || (ru = document.createElement("a")), ru.setAttribute("href", n), "/" === ru.pathname.charAt(0) ? ru.pathname : "/" + ru.pathname);
            var n
          }
          resetBaseElement() {
            su = null
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
            return Gl(document.cookie, t)
          }
        }
        let ru, su = null;
        const iu = new jt("TRANSITION_ID"),
          ou = [{
            provide: xa,
            useFactory: function (t, e, n) {
              return () => {
                n.get(Ea).donePromise.then(() => {
                  const n = Sl();
                  Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === t).forEach(t => n.remove(t))
                })
              }
            },
            deps: [iu, xl, ai],
            multi: !0
          }];
        class au {
          static init() {
            var t;
            t = new au, sl = t
          }
          addToWindow(t) {
            It.getAngularTestability = (e, n = !0) => {
              const r = t.findTestabilityInTree(e, n);
              if (null == r) throw new Error("Could not find testability for element.");
              return r
            }, It.getAllAngularTestabilities = () => t.getAllTestabilities(), It.getAllAngularRootElements = () => t.getAllRootElements(), It.frameworkStabilizers || (It.frameworkStabilizers = []), It.frameworkStabilizers.push(t => {
              const e = It.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                r = r || e, n--, 0 == n && t(r)
              };
              e.forEach((function (t) {
                t.whenStable(s)
              }))
            })
          }
          findTestabilityInTree(t, e, n) {
            if (null == e) return null;
            const r = t.getTestability(e);
            return null != r ? r : n ? Sl().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
          }
        }
        const lu = new jt("EventManagerPlugins");
        let uu = (() => {
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
              for (let r = 0; r < n.length; r++) {
                const e = n[r];
                if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
              }
              throw new Error(`No event manager plugin found for event ${t}`)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(lu), Zt(Ba))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class cu {
          constructor(t) {
            this._doc = t
          }
          addGlobalEventListener(t, e, n) {
            const r = Sl().getGlobalEventTarget(this._doc, t);
            if (!r) throw new Error(`Unsupported event target ${r} for event ${e}`);
            return this.addEventListener(r, e, n)
          }
        }
        let hu = (() => {
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
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          du = (() => {
            class t extends hu {
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
                this._styleNodes.forEach(t => Sl().remove(t))
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(xl))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const pu = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
          },
          fu = /%COMP%/g;

        function mu(t, e, n) {
          for (let r = 0; r < e.length; r++) {
            let s = e[r];
            Array.isArray(s) ? mu(t, s, n) : (s = s.replace(fu, t), n.push(s))
          }
          return n
        }

        function gu(t) {
          return e => {
            if ("__ngUnwrap__" === e) return t;
            !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
          }
        }
        let vu = (() => {
          class t {
            constructor(t, e, n) {
              this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new yu(t)
            }
            createRenderer(t, e) {
              if (!t || !e) return this.defaultRenderer;
              switch (e.encapsulation) {
                case ae.Emulated: {
                  let n = this.rendererByCompId.get(e.id);
                  return n || (n = new _u(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n
                }
                case ae.Native:
                case ae.ShadowDom:
                  return new wu(this.eventManager, this.sharedStylesHost, t, e);
                default:
                  if (!this.rendererByCompId.has(e.id)) {
                    const t = mu(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer)
                  }
                  return this.defaultRenderer
              }
            }
            begin() {}
            end() {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(uu), Zt(du), Zt(Aa))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class yu {
          constructor(t) {
            this.eventManager = t, this.data = Object.create(null)
          }
          destroy() {}
          createElement(t, e) {
            return e ? document.createElementNS(pu[e] || e, t) : document.createElement(t)
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
          setAttribute(t, e, n, r) {
            if (r) {
              e = r + ":" + e;
              const s = pu[r];
              s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n)
            } else t.setAttribute(e, n)
          }
          removeAttribute(t, e, n) {
            if (n) {
              const r = pu[n];
              r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`)
            } else t.removeAttribute(e)
          }
          addClass(t, e) {
            t.classList.add(e)
          }
          removeClass(t, e) {
            t.classList.remove(e)
          }
          setStyle(t, e, n, r) {
            r & bo.DashCase ? t.style.setProperty(e, n, r & bo.Important ? "important" : "") : t.style[e] = n
          }
          removeStyle(t, e, n) {
            n & bo.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
          }
          setProperty(t, e, n) {
            t[e] = n
          }
          setValue(t, e) {
            t.nodeValue = e
          }
          listen(t, e, n) {
            return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, gu(n)) : this.eventManager.addEventListener(t, e, gu(n))
          }
        }
        class _u extends yu {
          constructor(t, e, n, r) {
            super(t), this.component = n;
            const s = mu(r + "-" + n.id, n.styles, []);
            e.addStyles(s), this.contentAttr = "_ngcontent-%COMP%".replace(fu, r + "-" + n.id), this.hostAttr = function (t) {
              return "_nghost-%COMP%".replace(fu, t)
            }(r + "-" + n.id)
          }
          applyToHost(t) {
            super.setAttribute(t, this.hostAttr, "")
          }
          createElement(t, e) {
            const n = super.createElement(t, e);
            return super.setAttribute(n, this.contentAttr, ""), n
          }
        }
        class wu extends yu {
          constructor(t, e, n, r) {
            super(t), this.sharedStylesHost = e, this.hostEl = n, this.component = r, this.shadowRoot = r.encapsulation === ae.ShadowDom ? n.attachShadow({
              mode: "open"
            }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
            const s = mu(r.id, r.styles, []);
            for (let i = 0; i < s.length; i++) {
              const t = document.createElement("style");
              t.textContent = s[i], this.shadowRoot.appendChild(t)
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
        let bu = (() => {
          class t extends cu {
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
            return new(e || t)(Zt(xl))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Cu = ["alt", "control", "meta", "shift"],
          Su = {
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
          xu = {
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
          Eu = {
            alt: t => t.altKey,
            control: t => t.ctrlKey,
            meta: t => t.metaKey,
            shift: t => t.shiftKey
          };
        let Au = (() => {
          class t extends cu {
            constructor(t) {
              super(t)
            }
            supports(e) {
              return null != t.parseEventName(e)
            }
            addEventListener(e, n, r) {
              const s = t.parseEventName(n),
                i = t.eventCallback(s.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(() => Sl().onAndCancel(e, s.domEventName, i))
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split("."),
                r = n.shift();
              if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
              const s = t._normalizeKey(n.pop());
              let i = "";
              if (Cu.forEach(t => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), i += t + ".")
                }), i += s, 0 != n.length || 0 === s.length) return null;
              const o = {};
              return o.domEventName = r, o.fullKey = i, o
            }
            static getEventFullKey(t) {
              let e = "",
                n = function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (e = t.keyIdentifier, null == e) return "Unidentified";
                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && xu.hasOwnProperty(e) && (e = xu[e]))
                  }
                  return Su[e] || e
                }(t);
              return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), Cu.forEach(r => {
                r != n && (0, Eu[r])(t) && (e += r + ".")
              }), e += n, e
            }
            static eventCallback(e, n, r) {
              return s => {
                t.getEventFullKey(s) === e && r.runGuarded(() => n(s))
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
            return new(e || t)(Zt(xl))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const ku = ll(_l, "browser", [{
            provide: Ia,
            useValue: "browser"
          }, {
            provide: Oa,
            useValue: function () {
              nu.makeCurrent(), au.init()
            },
            multi: !0
          }, {
            provide: xl,
            useFactory: function () {
              return function (t) {
                Oe = t
              }(document), document
            },
            deps: []
          }]),
          Tu = [
            [], {
              provide: Ws,
              useValue: "root"
            }, {
              provide: Yn,
              useFactory: function () {
                return new Yn
              },
              deps: []
            }, {
              provide: lu,
              useClass: bu,
              multi: !0,
              deps: [xl, Ba, Ia]
            }, {
              provide: lu,
              useClass: Au,
              multi: !0,
              deps: [xl]
            },
            [], {
              provide: vu,
              useClass: vu,
              deps: [uu, du, Aa]
            }, {
              provide: wo,
              useExisting: vu
            }, {
              provide: hu,
              useExisting: du
            }, {
              provide: du,
              useClass: du,
              deps: [xl]
            }, {
              provide: tl,
              useClass: tl,
              deps: [Ba]
            }, {
              provide: uu,
              useClass: uu,
              deps: [lu, Ba]
            },
            []
          ];
        let Ou = (() => {
          class t {
            constructor(t) {
              if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
            }
            static withServerTransition(e) {
              return {
                ngModule: t,
                providers: [{
                  provide: Aa,
                  useValue: e.appId
                }, {
                  provide: iu,
                  useExisting: Aa
                }, ou]
              }
            }
          }
          return t.\u0275mod = me({
            type: t
          }), t.\u0275inj = ht({
            factory: function (e) {
              return new(e || t)(Zt(t, 12))
            },
            providers: Tu,
            imports: [Xl, bl]
          }), t
        })();

        function Iu(...t) {
          let e = t[t.length - 1];
          return k(e) ? (t.pop(), L(t, e)) : W(t)
        }

        function Ru(t, e) {
          return $(t, e, 1)
        }

        function Pu(t, e) {
          return function (n) {
            return n.lift(new Nu(t, e))
          }
        }
        "undefined" != typeof window && window;
        class Nu {
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
        class Fu {}
        class Du {}
        class Mu {
          constructor(t) {
            this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? () => {
              this.headers = new Map, t.split("\n").forEach(t => {
                const e = t.indexOf(":");
                if (e > 0) {
                  const n = t.slice(0, e),
                    r = n.toLowerCase(),
                    s = t.slice(e + 1).trim();
                  this.maybeSetNormalizedName(n, r), this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s])
                }
              })
            } : () => {
              this.headers = new Map, Object.keys(t).forEach(e => {
                let n = t[e];
                const r = e.toLowerCase();
                "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r))
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
            this.lazyInit && (this.lazyInit instanceof Mu ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
          }
          copyFrom(t) {
            t.init(), Array.from(t.headers.keys()).forEach(e => {
              this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e))
            })
          }
          clone(t) {
            const e = new Mu;
            return e.lazyInit = this.lazyInit && this.lazyInit instanceof Mu ? this.lazyInit : this, e.lazyUpdate = (this.lazyUpdate || []).concat([t]), e
          }
          applyUpdate(t) {
            const e = t.name.toLowerCase();
            switch (t.op) {
              case "a":
              case "s":
                let n = t.value;
                if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                this.maybeSetNormalizedName(t.name, e);
                const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                r.push(...n), this.headers.set(e, r);
                break;
              case "d":
                const s = t.value;
                if (s) {
                  let t = this.headers.get(e);
                  if (!t) return;
                  t = t.filter(t => -1 === s.indexOf(t)), 0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t)
                } else this.headers.delete(e), this.normalizedNames.delete(e)
            }
          }
          forEach(t) {
            this.init(), Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)))
          }
        }
        class ju {
          encodeKey(t) {
            return Uu(t)
          }
          encodeValue(t) {
            return Uu(t)
          }
          decodeKey(t) {
            return decodeURIComponent(t)
          }
          decodeValue(t) {
            return decodeURIComponent(t)
          }
        }

        function Uu(t) {
          return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }
        class Lu {
          constructor(t = {}) {
            if (this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new ju, t.fromString) {
              if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
              this.map = function (t, e) {
                const n = new Map;
                return t.length > 0 && t.split("&").forEach(t => {
                  const r = t.indexOf("="),
                    [s, i] = -1 == r ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                    o = n.get(s) || [];
                  o.push(i), n.set(s, o)
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
            const e = new Lu({
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

        function Hu(t) {
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
        }

        function $u(t) {
          return "undefined" != typeof Blob && t instanceof Blob
        }

        function qu(t) {
          return "undefined" != typeof FormData && t instanceof FormData
        }
        class zu {
          constructor(t, e, n, r) {
            let s;
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
              }(this.method) || r ? (this.body = void 0 !== n ? n : null, s = r) : s = n, s && (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.params && (this.params = s.params)), this.headers || (this.headers = new Mu), this.params) {
              const t = this.params.toString();
              if (0 === t.length) this.urlWithParams = e;
              else {
                const n = e.indexOf("?");
                this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
              }
            } else this.params = new Lu, this.urlWithParams = e
          }
          serializeBody() {
            return null === this.body ? null : Hu(this.body) || $u(this.body) || qu(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Lu ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
          }
          detectContentTypeHeader() {
            return null === this.body || qu(this.body) ? null : $u(this.body) ? this.body.type || null : Hu(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Lu ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
          }
          clone(t = {}) {
            const e = t.method || this.method,
              n = t.url || this.url,
              r = t.responseType || this.responseType,
              s = void 0 !== t.body ? t.body : this.body,
              i = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
              o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
            let a = t.headers || this.headers,
              l = t.params || this.params;
            return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)), t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)), new zu(e, n, s, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i
            })
          }
        }
        const Gu = function () {
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
        class Bu {
          constructor(t, e = 200, n = "OK") {
            this.headers = t.headers || new Mu, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
          }
        }
        class Wu extends Bu {
          constructor(t = {}) {
            super(t), this.type = Gu.ResponseHeader
          }
          clone(t = {}) {
            return new Wu({
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class Zu extends Bu {
          constructor(t = {}) {
            super(t), this.type = Gu.Response, this.body = void 0 !== t.body ? t.body : null
          }
          clone(t = {}) {
            return new Zu({
              body: void 0 !== t.body ? t.body : this.body,
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class Qu extends Bu {
          constructor(t) {
            super(t, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${t.url||"(unknown url)"}` : `Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
          }
        }

        function Ju(t, e) {
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
        let Ku = (() => {
          class t {
            constructor(t) {
              this.handler = t
            }
            request(t, e, n = {}) {
              let r;
              if (t instanceof zu) r = t;
              else {
                let s = void 0;
                s = n.headers instanceof Mu ? n.headers : new Mu(n.headers);
                let i = void 0;
                n.params && (i = n.params instanceof Lu ? n.params : new Lu({
                  fromObject: n.params
                })), r = new zu(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials
                })
              }
              const s = Iu(r).pipe(Ru(t => this.handler.handle(t)));
              if (t instanceof zu || "events" === n.observe) return s;
              const i = s.pipe(Pu(t => t instanceof Zu));
              switch (n.observe || "body") {
                case "body":
                  switch (r.responseType) {
                    case "arraybuffer":
                      return i.pipe(M(t => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                        return t.body
                      }));
                    case "blob":
                      return i.pipe(M(t => {
                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                        return t.body
                      }));
                    case "text":
                      return i.pipe(M(t => {
                        if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                        return t.body
                      }));
                    case "json":
                    default:
                      return i.pipe(M(t => t.body))
                  }
                  case "response":
                    return i;
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
                params: (new Lu).append(e, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
              })
            }
            options(t, e = {}) {
              return this.request("OPTIONS", t, e)
            }
            patch(t, e, n = {}) {
              return this.request("PATCH", t, Ju(n, e))
            }
            post(t, e, n = {}) {
              return this.request("POST", t, Ju(n, e))
            }
            put(t, e, n = {}) {
              return this.request("PUT", t, Ju(n, e))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Fu))
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class Yu {
          constructor(t, e) {
            this.next = t, this.interceptor = e
          }
          handle(t) {
            return this.interceptor.intercept(t, this.next)
          }
        }
        const Xu = new jt("HTTP_INTERCEPTORS");
        let tc = (() => {
          class t {
            intercept(t, e) {
              return e.handle(t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ct({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const ec = /^\)\]\}',?\n/;
        class nc {}
        let rc = (() => {
            class t {
              constructor() {}
              build() {
                return new XMLHttpRequest
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          sc = (() => {
            class t {
              constructor(t) {
                this.xhrFactory = t
              }
              handle(t) {
                if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                return new w(e => {
                  const n = this.xhrFactory.build();
                  if (n.open(t.method, t.urlWithParams), t.withCredentials && (n.withCredentials = !0), t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))), t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                    const e = t.detectContentTypeHeader();
                    null !== e && n.setRequestHeader("Content-Type", e)
                  }
                  if (t.responseType) {
                    const e = t.responseType.toLowerCase();
                    n.responseType = "json" !== e ? e : "text"
                  }
                  const r = t.serializeBody();
                  let s = null;
                  const i = () => {
                      if (null !== s) return s;
                      const e = 1223 === n.status ? 204 : n.status,
                        r = n.statusText || "OK",
                        i = new Mu(n.getAllResponseHeaders()),
                        o = function (t) {
                          return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                        }(n) || t.url;
                      return s = new Wu({
                        headers: i,
                        status: e,
                        statusText: r,
                        url: o
                      }), s
                    },
                    o = () => {
                      let {
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a
                      } = i(), l = null;
                      204 !== s && (l = void 0 === n.response ? n.responseText : n.response), 0 === s && (s = l ? 200 : 0);
                      let u = s >= 200 && s < 300;
                      if ("json" === t.responseType && "string" == typeof l) {
                        const t = l;
                        l = l.replace(ec, "");
                        try {
                          l = "" !== l ? JSON.parse(l) : null
                        } catch (c) {
                          l = t, u && (u = !1, l = {
                            error: c,
                            text: l
                          })
                        }
                      }
                      u ? (e.next(new Zu({
                        body: l,
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a || void 0
                      })), e.complete()) : e.error(new Qu({
                        error: l,
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a || void 0
                      }))
                    },
                    a = t => {
                      const {
                        url: r
                      } = i(), s = new Qu({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: r || void 0
                      });
                      e.error(s)
                    };
                  let l = !1;
                  const u = r => {
                      l || (e.next(i()), l = !0);
                      let s = {
                        type: Gu.DownloadProgress,
                        loaded: r.loaded
                      };
                      r.lengthComputable && (s.total = r.total), "text" === t.responseType && n.responseText && (s.partialText = n.responseText), e.next(s)
                    },
                    c = t => {
                      let n = {
                        type: Gu.UploadProgress,
                        loaded: t.loaded
                      };
                      t.lengthComputable && (n.total = t.total), e.next(n)
                    };
                  return n.addEventListener("load", o), n.addEventListener("error", a), t.reportProgress && (n.addEventListener("progress", u), null !== r && n.upload && n.upload.addEventListener("progress", c)), n.send(r), e.next({
                    type: Gu.Sent
                  }), () => {
                    n.removeEventListener("error", a), n.removeEventListener("load", o), t.reportProgress && (n.removeEventListener("progress", u), null !== r && n.upload && n.upload.removeEventListener("progress", c)), n.abort()
                  }
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(nc))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const ic = new jt("XSRF_COOKIE_NAME"),
          oc = new jt("XSRF_HEADER_NAME");
        class ac {}
        let lc = (() => {
            class t {
              constructor(t, e, n) {
                this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
              }
              getToken() {
                if ("server" === this.platform) return null;
                const t = this.doc.cookie || "";
                return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Gl(t, this.cookieName), this.lastCookieString = t), this.lastToken
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(xl), Zt(Ia), Zt(ic))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          uc = (() => {
            class t {
              constructor(t, e) {
                this.tokenService = t, this.headerName = e
              }
              intercept(t, e) {
                const n = t.url.toLowerCase();
                if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                const r = this.tokenService.getToken();
                return null === r || t.headers.has(this.headerName) || (t = t.clone({
                  headers: t.headers.set(this.headerName, r)
                })), e.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(ac), Zt(oc))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          cc = (() => {
            class t {
              constructor(t, e) {
                this.backend = t, this.injector = e, this.chain = null
              }
              handle(t) {
                if (null === this.chain) {
                  const t = this.injector.get(Xu, []);
                  this.chain = t.reduceRight((t, e) => new Yu(t, e), this.backend)
                }
                return this.chain.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Du), Zt(ai))
            }, t.\u0275prov = ct({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          hc = (() => {
            class t {
              static disable() {
                return {
                  ngModule: t,
                  providers: [{
                    provide: uc,
                    useClass: tc
                  }]
                }
              }
              static withOptions(e = {}) {
                return {
                  ngModule: t,
                  providers: [e.cookieName ? {
                    provide: ic,
                    useValue: e.cookieName
                  } : [], e.headerName ? {
                    provide: oc,
                    useValue: e.headerName
                  } : []]
                }
              }
            }
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)
              },
              providers: [uc, {
                provide: Xu,
                useExisting: uc,
                multi: !0
              }, {
                provide: ac,
                useClass: lc
              }, {
                provide: ic,
                useValue: "XSRF-TOKEN"
              }, {
                provide: oc,
                useValue: "X-XSRF-TOKEN"
              }]
            }), t
          })(),
          dc = (() => {
            class t {}
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)
              },
              providers: [Ku, {
                provide: Fu,
                useClass: cc
              }, sc, {
                provide: Du,
                useExisting: sc
              }, rc, {
                provide: nc,
                useExisting: rc
              }],
              imports: [
                [hc.withOptions({
                  cookieName: "XSRF-TOKEN",
                  headerName: "X-XSRF-TOKEN"
                })]
              ]
            }), t
          })();
        class pc extends E {
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
            if (this.closed) throw new C;
            return this._value
          }
          next(t) {
            super.next(this._value = t)
          }
        }
        const fc = (() => {
            function t() {
              return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            return t.prototype = Object.create(Error.prototype), t
          })(),
          mc = {};
        class gc {
          constructor(t) {
            this.resultSelector = t
          }
          call(t, e) {
            return e.subscribe(new vc(t, this.resultSelector))
          }
        }
        class vc extends D {
          constructor(t, e) {
            super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
          }
          _next(t) {
            this.values.push(mc), this.observables.push(t)
          }
          _complete() {
            const t = this.observables,
              e = t.length;
            if (0 === e) this.destination.complete();
            else {
              this.active = e, this.toRespond = e;
              for (let n = 0; n < e; n++) {
                const e = t[n];
                this.add(F(this, e, e, n))
              }
            }
          }
          notifyComplete(t) {
            0 == (this.active -= 1) && this.destination.complete()
          }
          notifyNext(t, e, n, r, s) {
            const i = this.values,
              o = this.toRespond ? i[n] === mc ? --this.toRespond : this.toRespond : 0;
            i[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
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
        const yc = new w(t => t.complete());

        function _c(t) {
          return t ? function (t) {
            return new w(e => t.schedule(() => e.complete()))
          }(t) : yc
        }

        function wc(t) {
          return new w(e => {
            let n;
            try {
              n = t()
            } catch (r) {
              return void e.error(r)
            }
            return (n ? H(n) : _c()).subscribe(e)
          })
        }

        function bc() {
          return B(1)
        }
        const Cc = (() => {
          function t() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();

        function Sc(t) {
          return function (e) {
            return 0 === t ? _c() : e.lift(new xc(t))
          }
        }
        class xc {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new Cc
          }
          call(t, e) {
            return e.subscribe(new Ec(t, this.total))
          }
        }
        class Ec extends f {
          constructor(t, e) {
            super(t), this.total = e, this.ring = new Array, this.count = 0
          }
          _next(t) {
            const e = this.ring,
              n = this.total,
              r = this.count++;
            e.length < n ? e.push(t) : e[r % n] = t
          }
          _complete() {
            const t = this.destination;
            let e = this.count;
            if (e > 0) {
              const n = this.count >= this.total ? this.total : this.count,
                r = this.ring;
              for (let s = 0; s < n; s++) {
                const s = e++ % n;
                t.next(r[s])
              }
            }
            t.complete()
          }
        }

        function Ac(t = Oc) {
          return e => e.lift(new kc(t))
        }
        class kc {
          constructor(t) {
            this.errorFactory = t
          }
          call(t, e) {
            return e.subscribe(new Tc(t, this.errorFactory))
          }
        }
        class Tc extends f {
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

        function Oc() {
          return new fc
        }

        function Ic(t = null) {
          return e => e.lift(new Rc(t))
        }
        class Rc {
          constructor(t) {
            this.defaultValue = t
          }
          call(t, e) {
            return e.subscribe(new Pc(t, this.defaultValue))
          }
        }
        class Pc extends f {
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

        function Nc(t, e) {
          const n = arguments.length >= 2;
          return r => r.pipe(t ? Pu((e, n) => t(e, n, r)) : G, Sc(1), n ? Ic(e) : Ac(() => new fc))
        }

        function Vc(t) {
          return function (e) {
            const n = new Fc(t),
              r = e.lift(n);
            return n.caught = r
          }
        }
        class Fc {
          constructor(t) {
            this.selector = t
          }
          call(t, e) {
            return e.subscribe(new Dc(t, this.selector, this.caught))
          }
        }
        class Dc extends D {
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
              const r = new T(this, void 0, void 0);
              this.add(r);
              const s = F(this, n, void 0, void 0, r);
              s !== r && this.add(s)
            }
          }
        }

        function Mc(t) {
          return e => 0 === t ? _c() : e.lift(new jc(t))
        }
        class jc {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new Cc
          }
          call(t, e) {
            return e.subscribe(new Uc(t, this.total))
          }
        }
        class Uc extends f {
          constructor(t, e) {
            super(t), this.total = e, this.count = 0
          }
          _next(t) {
            const e = this.total,
              n = ++this.count;
            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
          }
        }

        function Lc(t, e) {
          const n = arguments.length >= 2;
          return r => r.pipe(t ? Pu((e, n) => t(e, n, r)) : G, Mc(1), n ? Ic(e) : Ac(() => new fc))
        }
        class Hc {
          constructor(t, e, n) {
            this.predicate = t, this.thisArg = e, this.source = n
          }
          call(t, e) {
            return e.subscribe(new $c(t, this.predicate, this.thisArg, this.source))
          }
        }
        class $c extends f {
          constructor(t, e, n, r) {
            super(t), this.predicate = e, this.thisArg = n, this.source = r, this.index = 0, this.thisArg = n || this
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

        function qc(t, e) {
          return "function" == typeof e ? n => n.pipe(qc((n, r) => H(t(n, r)).pipe(M((t, s) => e(n, t, r, s))))) : e => e.lift(new zc(t))
        }
        class zc {
          constructor(t) {
            this.project = t
          }
          call(t, e) {
            return e.subscribe(new Gc(t, this.project))
          }
        }
        class Gc extends D {
          constructor(t, e) {
            super(t), this.project = e, this.index = 0
          }
          _next(t) {
            let e;
            const n = this.index++;
            try {
              e = this.project(t, n)
            } catch (r) {
              return void this.destination.error(r)
            }
            this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const r = this.innerSubscription;
            r && r.unsubscribe();
            const s = new T(this, e, n),
              i = this.destination;
            i.add(s), this.innerSubscription = F(this, t, void 0, void 0, s), this.innerSubscription !== s && i.add(this.innerSubscription)
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
          notifyNext(t, e, n, r, s) {
            this.destination.next(e)
          }
        }

        function Bc(...t) {
          return bc()(Iu(...t))
        }

        function Wc(t, e) {
          let n = !1;
          return arguments.length >= 2 && (n = !0),
            function (r) {
              return r.lift(new Zc(t, e, n))
            }
        }
        class Zc {
          constructor(t, e, n = !1) {
            this.accumulator = t, this.seed = e, this.hasSeed = n
          }
          call(t, e) {
            return e.subscribe(new Qc(t, this.accumulator, this.seed, this.hasSeed))
          }
        }
        class Qc extends f {
          constructor(t, e, n, r) {
            super(t), this.accumulator = e, this._seed = n, this.hasSeed = r, this.index = 0
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
            } catch (r) {
              this.destination.error(r)
            }
            this.seed = n, this.destination.next(n)
          }
        }

        function Jc(t, e, n) {
          return function (r) {
            return r.lift(new Kc(t, e, n))
          }
        }
        class Kc {
          constructor(t, e, n) {
            this.nextOrObserver = t, this.error = e, this.complete = n
          }
          call(t, e) {
            return e.subscribe(new Yc(t, this.nextOrObserver, this.error, this.complete))
          }
        }
        class Yc extends f {
          constructor(t, e, n, s) {
            super(t), this._tapNext = v, this._tapError = v, this._tapComplete = v, this._tapError = n || v, this._tapComplete = s || v, r(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || v, this._tapError = e.error || v, this._tapComplete = e.complete || v)
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
        class Xc {
          constructor(t) {
            this.callback = t
          }
          call(t, e) {
            return e.subscribe(new th(t, this.callback))
          }
        }
        class th extends f {
          constructor(t, e) {
            super(t), this.add(new h(e))
          }
        }
        class eh {
          constructor(t, e) {
            this.id = t, this.url = e
          }
        }
        class nh extends eh {
          constructor(t, e, n = "imperative", r = null) {
            super(t, e), this.navigationTrigger = n, this.restoredState = r
          }
          toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
          }
        }
        class rh extends eh {
          constructor(t, e, n) {
            super(t, e), this.urlAfterRedirects = n
          }
          toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
          }
        }
        class sh extends eh {
          constructor(t, e, n) {
            super(t, e), this.reason = n
          }
          toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
          }
        }
        class ih extends eh {
          constructor(t, e, n) {
            super(t, e), this.error = n
          }
          toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
          }
        }
        class oh extends eh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class ah extends eh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class lh extends eh {
          constructor(t, e, n, r, s) {
            super(t, e), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = s
          }
          toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
          }
        }
        class uh extends eh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class ch extends eh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class hh {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
          }
        }
        class dh {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
          }
        }
        class ph {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class fh {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class mh {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class gh {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class vh {
          constructor(t, e, n) {
            this.routerEvent = t, this.position = e, this.anchor = n
          }
          toString() {
            return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
          }
        }
        let yh = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275cmp = he({
            type: t,
            selectors: [
              ["ng-component"]
            ],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && Ii(0, "router-outlet")
            },
            directives: function () {
              return [Sp]
            },
            encapsulation: 2
          }), t
        })();
        class _h {
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

        function wh(t) {
          return new _h(t)
        }

        function bh(t) {
          const e = Error("NavigationCancelingError: " + t);
          return e.ngNavigationCancelingError = !0, e
        }

        function Ch(t, e, n) {
          const r = n.path.split("/");
          if (r.length > t.length) return null;
          if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
          const s = {};
          for (let i = 0; i < r.length; i++) {
            const e = r[i],
              n = t[i];
            if (e.startsWith(":")) s[e.substring(1)] = n;
            else if (e !== n.path) return null
          }
          return {
            consumed: t.slice(0, r.length),
            posParams: s
          }
        }
        class Sh {
          constructor(t, e) {
            this.routes = t, this.module = e
          }
        }

        function xh(t, e = "") {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            Eh(r, Ah(e, r))
          }
        }

        function Eh(t, e) {
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
          t.children && xh(t.children, e)
        }

        function Ah(t, e) {
          return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
        }

        function kh(t) {
          const e = t.children && t.children.map(kh),
            n = e ? Object.assign(Object.assign({}, t), {
              children: e
            }) : Object.assign({}, t);
          return !n.component && (e || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = yh), n
        }

        function Th(t, e) {
          const n = Object.keys(t),
            r = Object.keys(e);
          if (!n || !r || n.length != r.length) return !1;
          let s;
          for (let i = 0; i < n.length; i++)
            if (s = n[i], !Oh(t[s], e[s])) return !1;
          return !0
        }

        function Oh(t, e) {
          return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e
        }

        function Ih(t) {
          return Array.prototype.concat.apply([], t)
        }

        function Rh(t) {
          return t.length > 0 ? t[t.length - 1] : null
        }

        function Ph(t, e) {
          for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
        }

        function Nh(t) {
          return Pi(t) ? t : Ri(t) ? H(Promise.resolve(t)) : Iu(t)
        }

        function Vh(t, e, n) {
          return n ? function (t, e) {
            return Th(t, e)
          }(t.queryParams, e.queryParams) && function t(e, n) {
            if (!jh(e.segments, n.segments)) return !1;
            if (e.numberOfChildren !== n.numberOfChildren) return !1;
            for (const r in n.children) {
              if (!e.children[r]) return !1;
              if (!t(e.children[r], n.children[r])) return !1
            }
            return !0
          }(t.root, e.root) : function (t, e) {
            return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => Oh(t[n], e[n]))
          }(t.queryParams, e.queryParams) && function t(e, n) {
            return function e(n, r, s) {
              if (n.segments.length > s.length) return !!jh(n.segments.slice(0, s.length), s) && !r.hasChildren();
              if (n.segments.length === s.length) {
                if (!jh(n.segments, s)) return !1;
                for (const e in r.children) {
                  if (!n.children[e]) return !1;
                  if (!t(n.children[e], r.children[e])) return !1
                }
                return !0
              } {
                const t = s.slice(0, n.segments.length),
                  i = s.slice(n.segments.length);
                return !!jh(n.segments, t) && !!n.children.primary && e(n.children.primary, r, i)
              }
            }(e, n, n.segments)
          }(t.root, e.root)
        }
        class Fh {
          constructor(t, e, n) {
            this.root = t, this.queryParams = e, this.fragment = n
          }
          get queryParamMap() {
            return this._queryParamMap || (this._queryParamMap = wh(this.queryParams)), this._queryParamMap
          }
          toString() {
            return $h.serialize(this)
          }
        }
        class Dh {
          constructor(t, e) {
            this.segments = t, this.children = e, this.parent = null, Ph(e, (t, e) => t.parent = this)
          }
          hasChildren() {
            return this.numberOfChildren > 0
          }
          get numberOfChildren() {
            return Object.keys(this.children).length
          }
          toString() {
            return qh(this)
          }
        }
        class Mh {
          constructor(t, e) {
            this.path = t, this.parameters = e
          }
          get parameterMap() {
            return this._parameterMap || (this._parameterMap = wh(this.parameters)), this._parameterMap
          }
          toString() {
            return Qh(this)
          }
        }

        function jh(t, e) {
          return t.length === e.length && t.every((t, n) => t.path === e[n].path)
        }

        function Uh(t, e) {
          let n = [];
          return Ph(t.children, (t, r) => {
            "primary" === r && (n = n.concat(e(t, r)))
          }), Ph(t.children, (t, r) => {
            "primary" !== r && (n = n.concat(e(t, r)))
          }), n
        }
        class Lh {}
        class Hh {
          parse(t) {
            const e = new td(t);
            return new Fh(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
          }
          serialize(t) {
            var e;
            return `${`/${function t(e,n){if(!e.hasChildren())return qh(e);if(n){const n=e.children.primary?t(e.children.primary,!1):"",r=[];return Ph(e.children,(e,n)=>{"primary"!==n&&r.push(`${n}:${t(e,!1)}`)}),r.length>0?`${n}(${r.join("//")})`: n
          } {
            const n = Uh(e, (n, r) => "primary" === r ? [t(e.children.primary, !1)] : [`${r}:${t(n,!1)}`]);
            return `${qh(e)}/(${n.join("//")})`
          }
        }(t.root, !0)
      }
      `}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${Gh(e)}=${Gh(t)}`).join("&"):`${Gh(e)}=${Gh(n)}`});return e.length?` ? $ {
        e.join("&")
      }
      `:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}`
    }
  }
  const $h = new Hh;

  function qh(t) {
    return t.segments.map(t => Qh(t)).join("/")
  }

  function zh(t) {
    return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
  }

  function Gh(t) {
    return zh(t).replace(/%3B/gi, ";")
  }

  function Bh(t) {
    return zh(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
  }

  function Wh(t) {
    return decodeURIComponent(t)
  }

  function Zh(t) {
    return Wh(t.replace(/\+/g, "%20"))
  }

  function Qh(t) {
    return `${Bh(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${Bh(t)}=${Bh(e[t])}`).join("")}`;
    var e
  }
  const Jh = /^[^\/()?;=#]+/;

  function Kh(t) {
    const e = t.match(Jh);
    return e ? e[0] : ""
  }
  const Yh = /^[^=?&#]+/, Xh = /^[^?&#]+/; class td {
    constructor(t) {
      this.url = t, this.remaining = t
    }
    parseRootSegment() {
      return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Dh([], {}) : new Dh([], this.parseChildren())
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
      return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Dh(t, e)), n
    }
    parseSegment() {
      const t = Kh(this.remaining);
      if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
      return this.capture(t), new Mh(Wh(t), this.parseMatrixParams())
    }
    parseMatrixParams() {
      const t = {};
      for (; this.consumeOptional(";");) this.parseParam(t);
      return t
    }
    parseParam(t) {
      const e = Kh(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = Kh(this.remaining);
        t && (n = t, this.capture(n))
      }
      t[Wh(e)] = Wh(n)
    }
    parseQueryParam(t) {
      const e = function (t) {
        const e = t.match(Yh);
        return e ? e[0] : ""
      }(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = function (t) {
          const e = t.match(Xh);
          return e ? e[0] : ""
        }(this.remaining);
        t && (n = t, this.capture(n))
      }
      const r = Zh(e),
        s = Zh(n);
      if (t.hasOwnProperty(r)) {
        let e = t[r];
        Array.isArray(e) || (e = [e], t[r] = e), e.push(s)
      } else t[r] = s
    }
    parseParens(t) {
      const e = {};
      for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        const n = Kh(this.remaining),
          r = this.remaining[n.length];
        if ("/" !== r && ")" !== r && ";" !== r) throw new Error(`Cannot parse url '${this.url}'`);
        let s = void 0;
        n.indexOf(":") > -1 ? (s = n.substr(0, n.indexOf(":")), this.capture(s), this.capture(":")) : t && (s = "primary");
        const i = this.parseChildren();
        e[s] = 1 === Object.keys(i).length ? i.primary : new Dh([], i), this.consumeOptional("//")
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
  class ed {
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
      const e = nd(t, this._root);
      return e ? e.children.map(t => t.value) : []
    }
    firstChild(t) {
      const e = nd(t, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null
    }
    siblings(t) {
      const e = rd(t, this._root);
      return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t)
    }
    pathFromRoot(t) {
      return rd(t, this._root).map(t => t.value)
    }
  }

  function nd(t, e) {
    if (t === e.value) return e;
    for (const n of e.children) {
      const e = nd(t, n);
      if (e) return e
    }
    return null
  }

  function rd(t, e) {
    if (t === e.value) return [e];
    for (const n of e.children) {
      const r = rd(t, n);
      if (r.length) return r.unshift(e), r
    }
    return []
  }
  class sd {
    constructor(t, e) {
      this.value = t, this.children = e
    }
    toString() {
      return `TreeNode(${this.value})`
    }
  }

  function id(t) {
    const e = {};
    return t && t.children.forEach(t => e[t.value.outlet] = t), e
  }
  class od extends ed {
    constructor(t, e) {
      super(t), this.snapshot = e, dd(this, t)
    }
    toString() {
      return this.snapshot.toString()
    }
  }

  function ad(t, e) {
    const n = function (t, e) {
        const n = new cd([], {}, {}, "", {}, "primary", e, null, t.root, -1, {});
        return new hd("", new sd(n, []))
      }(t, e),
      r = new pc([new Mh("", {})]),
      s = new pc({}),
      i = new pc({}),
      o = new pc({}),
      a = new pc(""),
      l = new ld(r, s, o, a, i, "primary", e, n.root);
    return l.snapshot = n.root, new od(new sd(l, []), n)
  }
  class ld {
    constructor(t, e, n, r, s, i, o, a) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this._futureSnapshot = a
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
      return this._paramMap || (this._paramMap = this.params.pipe(M(t => wh(t)))), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(M(t => wh(t)))), this._queryParamMap
    }
    toString() {
      return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
  }

  function ud(t, e = "emptyOnly") {
    const n = t.pathFromRoot;
    let r = 0;
    if ("always" !== e)
      for (r = n.length - 1; r >= 1;) {
        const t = n[r],
          e = n[r - 1];
        if (t.routeConfig && "" === t.routeConfig.path) r--;
        else {
          if (e.component) break;
          r--
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
    }(n.slice(r))
  }
  class cd {
    constructor(t, e, n, r, s, i, o, a, l, u, c) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this.routeConfig = a, this._urlSegment = l, this._lastPathIndex = u, this._resolve = c
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
      return this._paramMap || (this._paramMap = wh(this.params)), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = wh(this.queryParams)), this._queryParamMap
    }
    toString() {
      return `Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
    }
  }
  class hd extends ed {
    constructor(t, e) {
      super(e), this.url = t, dd(this, e)
    }
    toString() {
      return pd(this._root)
    }
  }

  function dd(t, e) {
    e.value._routerState = t, e.children.forEach(e => dd(t, e))
  }

  function pd(t) {
    const e = t.children.length > 0 ? ` { ${t.children.map(pd).join(", ")} } ` : "";
    return `${t.value}${e}`
  }

  function fd(t) {
    if (t.snapshot) {
      const e = t.snapshot,
        n = t._futureSnapshot;
      t.snapshot = n, Th(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), Th(e.params, n.params) || t.params.next(n.params),
        function (t, e) {
          if (t.length !== e.length) return !1;
          for (let n = 0; n < t.length; ++n)
            if (!Th(t[n], e[n])) return !1;
          return !0
        }(e.url, n.url) || t.url.next(n.url), Th(e.data, n.data) || t.data.next(n.data)
    } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
  }

  function md(t, e) {
    var n, r;
    return Th(t.params, e.params) && jh(n = t.url, r = e.url) && n.every((t, e) => Th(t.parameters, r[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || md(t.parent, e.parent))
  }

  function gd(t) {
    return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
  }

  function vd(t, e, n, r, s) {
    let i = {};
    return r && Ph(r, (t, e) => {
      i[e] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}`
    }), new Fh(n.root === t ? e : function t(e, n, r) {
      const s = {};
      return Ph(e.children, (e, i) => {
        s[i] = e === n ? r : t(e, n, r)
      }), new Dh(e.segments, s)
    }(n.root, t, e), i, s)
  }
  class yd {
    constructor(t, e, n) {
      if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && gd(n[0])) throw new Error("Root segment cannot have matrix parameters");
      const r = n.find(t => "object" == typeof t && null != t && t.outlets);
      if (r && r !== Rh(n)) throw new Error("{outlets:{}} has to be the last command")
    }
    toRoot() {
      return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
    }
  }
  class _d {
    constructor(t, e, n) {
      this.segmentGroup = t, this.processChildren = e, this.index = n
    }
  }

  function wd(t) {
    return "object" == typeof t && null != t && t.outlets ? t.outlets.primary : `${t}`
  }

  function bd(t, e, n) {
    if (t || (t = new Dh([], {})), 0 === t.segments.length && t.hasChildren()) return Cd(t, e, n);
    const r = function (t, e, n) {
        let r = 0,
          s = e;
        const i = {
          match: !1,
          pathIndex: 0,
          commandIndex: 0
        };
        for (; s < t.segments.length;) {
          if (r >= n.length) return i;
          const e = t.segments[s],
            o = wd(n[r]),
            a = r < n.length - 1 ? n[r + 1] : null;
          if (s > 0 && void 0 === o) break;
          if (o && a && "object" == typeof a && void 0 === a.outlets) {
            if (!Ad(o, a, e)) return i;
            r += 2
          } else {
            if (!Ad(o, {}, e)) return i;
            r++
          }
          s++
        }
        return {
          match: !0,
          pathIndex: s,
          commandIndex: r
        }
      }(t, e, n),
      s = n.slice(r.commandIndex);
    if (r.match && r.pathIndex < t.segments.length) {
      const e = new Dh(t.segments.slice(0, r.pathIndex), {});
      return e.children.primary = new Dh(t.segments.slice(r.pathIndex), t.children), Cd(e, 0, s)
    }
    return r.match && 0 === s.length ? new Dh(t.segments, {}) : r.match && !t.hasChildren() ? Sd(t, e, n) : r.match ? Cd(t, 0, s) : Sd(t, e, n)
  }

  function Cd(t, e, n) {
    if (0 === n.length) return new Dh(t.segments, {}); {
      const r = function (t) {
          return "object" != typeof t[0] || void 0 === t[0].outlets ? {
            primary: t
          } : t[0].outlets
        }(n),
        s = {};
      return Ph(r, (n, r) => {
        null !== n && (s[r] = bd(t.children[r], e, n))
      }), Ph(t.children, (t, e) => {
        void 0 === r[e] && (s[e] = t)
      }), new Dh(t.segments, s)
    }
  }

  function Sd(t, e, n) {
    const r = t.segments.slice(0, e);
    let s = 0;
    for (; s < n.length;) {
      if ("object" == typeof n[s] && void 0 !== n[s].outlets) {
        const t = xd(n[s].outlets);
        return new Dh(r, t)
      }
      if (0 === s && gd(n[0])) {
        r.push(new Mh(t.segments[e].path, n[0])), s++;
        continue
      }
      const i = wd(n[s]),
        o = s < n.length - 1 ? n[s + 1] : null;
      i && o && gd(o) ? (r.push(new Mh(i, Ed(o))), s += 2) : (r.push(new Mh(i, {})), s++)
    }
    return new Dh(r, {})
  }

  function xd(t) {
    const e = {};
    return Ph(t, (t, n) => {
      null !== t && (e[n] = Sd(new Dh([], {}), 0, t))
    }), e
  }

  function Ed(t) {
    const e = {};
    return Ph(t, (t, n) => e[n] = `${t}`), e
  }

  function Ad(t, e, n) {
    return t == n.path && Th(e, n.parameters)
  }
  class kd {
    constructor(t, e, n, r) {
      this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
    }
    activate(t) {
      const e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, t), fd(this.futureState.root), this.activateChildRoutes(e, n, t)
    }
    deactivateChildRoutes(t, e, n) {
      const r = id(e);
      t.children.forEach(t => {
        const e = t.value.outlet;
        this.deactivateRoutes(t, r[e], n), delete r[e]
      }), Ph(r, (t, e) => {
        this.deactivateRouteAndItsChildren(t, n)
      })
    }
    deactivateRoutes(t, e, n) {
      const r = t.value,
        s = e ? e.value : null;
      if (r === s)
        if (r.component) {
          const s = n.getContext(r.outlet);
          s && this.deactivateChildRoutes(t, e, s.children)
        } else this.deactivateChildRoutes(t, e, n);
      else s && this.deactivateRouteAndItsChildren(e, n)
    }
    deactivateRouteAndItsChildren(t, e) {
      this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
    }
    detachAndStoreRouteSubtree(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n && n.outlet) {
        const e = n.outlet.detach(),
          r = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: e,
          route: t,
          contexts: r
        })
      }
    }
    deactivateRouteAndOutlet(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n) {
        const r = id(t),
          s = t.value.component ? n.children : e;
        Ph(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated())
      }
    }
    activateChildRoutes(t, e, n) {
      const r = id(e);
      t.children.forEach(t => {
        this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new gh(t.value.snapshot))
      }), t.children.length && this.forwardEvent(new fh(t.value.snapshot))
    }
    activateRoutes(t, e, n) {
      const r = t.value,
        s = e ? e.value : null;
      if (fd(r), r === s)
        if (r.component) {
          const s = n.getOrCreateContext(r.outlet);
          this.activateChildRoutes(t, e, s.children)
        } else this.activateChildRoutes(t, e, n);
      else if (r.component) {
        const e = n.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          const t = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null), e.children.onOutletReAttached(t.contexts), e.attachRef = t.componentRef, e.route = t.route.value, e.outlet && e.outlet.attach(t.componentRef, t.route.value), Td(t.route)
        } else {
          const n = function (t) {
              for (let e = t.parent; e; e = e.parent) {
                const t = e.routeConfig;
                if (t && t._loadedConfig) return t._loadedConfig;
                if (t && t.component) return null
              }
              return null
            }(r.snapshot),
            s = n ? n.module.componentFactoryResolver : null;
          e.attachRef = null, e.route = r, e.resolver = s, e.outlet && e.outlet.activateWith(r, s), this.activateChildRoutes(t, null, e.children)
        }
      } else this.activateChildRoutes(t, null, n)
    }
  }

  function Td(t) {
    fd(t.value), t.children.forEach(Td)
  }

  function Od(t) {
    return "function" == typeof t
  }

  function Id(t) {
    return t instanceof Fh
  }
  class Rd {
    constructor(t) {
      this.segmentGroup = t || null
    }
  }
  class Pd {
    constructor(t) {
      this.urlTree = t
    }
  }

  function Nd(t) {
    return new w(e => e.error(new Rd(t)))
  }

  function Vd(t) {
    return new w(e => e.error(new Pd(t)))
  }

  function Fd(t) {
    return new w(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
  }
  class Dd {
    constructor(t, e, n, r, s) {
      this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = s, this.allowRedirects = !0, this.ngModule = t.get(Yt)
    }
    apply() {
      return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(M(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment))).pipe(Vc(t => {
        if (t instanceof Pd) return this.allowRedirects = !1, this.match(t.urlTree);
        if (t instanceof Rd) throw this.noMatchError(t);
        throw t
      }))
    }
    match(t) {
      return this.expandSegmentGroup(this.ngModule, this.config, t.root, "primary").pipe(M(e => this.createUrlTree(e, t.queryParams, t.fragment))).pipe(Vc(t => {
        if (t instanceof Rd) throw this.noMatchError(t);
        throw t
      }))
    }
    noMatchError(t) {
      return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
    }
    createUrlTree(t, e, n) {
      const r = t.segments.length > 0 ? new Dh([], {
        primary: t
      }) : t;
      return new Fh(r, e, n)
    }
    expandSegmentGroup(t, e, n, r) {
      return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(M(t => new Dh([], t))) : this.expandSegment(t, n, e, n.segments, r, !0)
    }
    expandChildren(t, e, n) {
      return function (t, e) {
        if (0 === Object.keys(t).length) return Iu({});
        const n = [],
          r = [],
          s = {};
        return Ph(t, (t, i) => {
          const o = e(i, t).pipe(M(t => s[i] = t));
          "primary" === i ? n.push(o) : r.push(o)
        }), Iu.apply(null, n.concat(r)).pipe(bc(), Nc(), M(() => s))
      }(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n))
    }
    expandSegment(t, e, n, r, s, i) {
      return Iu(...n).pipe(M(o => this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(Vc(t => {
        if (t instanceof Rd) return Iu(null);
        throw t
      }))), bc(), Lc(t => !!t), Vc((t, n) => {
        if (t instanceof fc || "EmptyError" === t.name) {
          if (this.noLeftoversInUrl(e, r, s)) return Iu(new Dh([], {}));
          throw new Rd(e)
        }
        throw t
      }))
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
      return Ld(r) !== i ? Nd(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, s) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) : Nd(e)
    }
    expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
      return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
    }
    expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
      const s = this.applyRedirectCommands([], n.redirectTo, {});
      return n.redirectTo.startsWith("/") ? Vd(s) : this.lineralizeSegments(n, s).pipe($(n => {
        const s = new Dh(n, {});
        return this.expandSegment(t, s, e, n, r, !1)
      }))
    }
    expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
      const {
        matched: o,
        consumedSegments: a,
        lastChild: l,
        positionalParamSegments: u
      } = Md(e, r, s);
      if (!o) return Nd(e);
      const c = this.applyRedirectCommands(a, r.redirectTo, u);
      return r.redirectTo.startsWith("/") ? Vd(c) : this.lineralizeSegments(r, c).pipe($(r => this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)))
    }
    matchSegmentAgainstRoute(t, e, n, r) {
      if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(M(t => (n._loadedConfig = t, new Dh(r, {})))) : Iu(new Dh(r, {}));
      const {
        matched: s,
        consumedSegments: i,
        lastChild: o
      } = Md(e, n, r);
      if (!s) return Nd(e);
      const a = r.slice(o);
      return this.getChildConfig(t, n, r).pipe($(t => {
        const n = t.module,
          r = t.routes,
          {
            segmentGroup: s,
            slicedSegments: o
          } = function (t, e, n, r) {
            return n.length > 0 && function (t, e, n) {
              return n.some(n => Ud(t, e, n) && "primary" !== Ld(n))
            }(t, n, r) ? {
              segmentGroup: jd(new Dh(e, function (t, e) {
                const n = {};
                n.primary = e;
                for (const r of t) "" === r.path && "primary" !== Ld(r) && (n[Ld(r)] = new Dh([], {}));
                return n
              }(r, new Dh(n, t.children)))),
              slicedSegments: []
            } : 0 === n.length && function (t, e, n) {
              return n.some(n => Ud(t, e, n))
            }(t, n, r) ? {
              segmentGroup: jd(new Dh(t.segments, function (t, e, n, r) {
                const s = {};
                for (const i of n) Ud(t, e, i) && !r[Ld(i)] && (s[Ld(i)] = new Dh([], {}));
                return Object.assign(Object.assign({}, r), s)
              }(t, n, r, t.children))),
              slicedSegments: n
            } : {
              segmentGroup: t,
              slicedSegments: n
            }
          }(e, i, a, r);
        return 0 === o.length && s.hasChildren() ? this.expandChildren(n, r, s).pipe(M(t => new Dh(i, t))) : 0 === r.length && 0 === o.length ? Iu(new Dh(i, {})) : this.expandSegment(n, s, r, o, "primary", !0).pipe(M(t => new Dh(i.concat(t.segments), t.children)))
      }))
    }
    getChildConfig(t, e, n) {
      return e.children ? Iu(new Sh(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Iu(e._loadedConfig) : function (t, e, n) {
        const r = e.canLoad;
        return r && 0 !== r.length ? H(r).pipe(M(r => {
          const s = t.get(r);
          let i;
          if (function (t) {
              return t && Od(t.canLoad)
            }(s)) i = s.canLoad(e, n);
          else {
            if (!Od(s)) throw new Error("Invalid CanLoad guard");
            i = s(e, n)
          }
          return Nh(i)
        })).pipe(bc(), (s = t => !0 === t, t => t.lift(new Hc(s, void 0, t)))) : Iu(!0);
        var s
      }(t.injector, e, n).pipe($(n => n ? this.configLoader.load(t.injector, e).pipe(M(t => (e._loadedConfig = t, t))) : function (t) {
        return new w(e => e.error(bh(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
      }(e))) : Iu(new Sh([], t))
    }
    lineralizeSegments(t, e) {
      let n = [],
        r = e.root;
      for (;;) {
        if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Iu(n);
        if (r.numberOfChildren > 1 || !r.children.primary) return Fd(t.redirectTo);
        r = r.children.primary
      }
    }
    applyRedirectCommands(t, e, n) {
      return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
    }
    applyRedirectCreatreUrlTree(t, e, n, r) {
      const s = this.createSegmentGroup(t, e.root, n, r);
      return new Fh(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
    }
    createQueryParams(t, e) {
      const n = {};
      return Ph(t, (t, r) => {
        if ("string" == typeof t && t.startsWith(":")) {
          const s = t.substring(1);
          n[r] = e[s]
        } else n[r] = t
      }), n
    }
    createSegmentGroup(t, e, n, r) {
      const s = this.createSegments(t, e.segments, n, r);
      let i = {};
      return Ph(e.children, (e, s) => {
        i[s] = this.createSegmentGroup(t, e, n, r)
      }), new Dh(s, i)
    }
    createSegments(t, e, n, r) {
      return e.map(e => e.path.startsWith(":") ? this.findPosParam(t, e, r) : this.findOrReturn(e, n))
    }
    findPosParam(t, e, n) {
      const r = n[e.path.substring(1)];
      if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
      return r
    }
    findOrReturn(t, e) {
      let n = 0;
      for (const r of e) {
        if (r.path === t.path) return e.splice(n), r;
        n++
      }
      return t
    }
  }

  function Md(t, e, n) {
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
    const r = (e.matcher || Ch)(n, t, e);
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

  function jd(t) {
    if (1 === t.numberOfChildren && t.children.primary) {
      const e = t.children.primary;
      return new Dh(t.segments.concat(e.segments), e.children)
    }
    return t
  }

  function Ud(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
  }

  function Ld(t) {
    return t.outlet || "primary"
  }
  class Hd {
    constructor(t) {
      this.path = t, this.route = this.path[this.path.length - 1]
    }
  }
  class $d {
    constructor(t, e) {
      this.component = t, this.route = e
    }
  }

  function qd(t, e, n) {
    const r = t._root;
    return function t(e, n, r, s, i = {
      canDeactivateChecks: [],
      canActivateChecks: []
    }) {
      const o = id(n);
      return e.children.forEach(e => {
        ! function (e, n, r, s, i = {
          canDeactivateChecks: [],
          canActivateChecks: []
        }) {
          const o = e.value,
            a = n ? n.value : null,
            l = r ? r.getContext(e.value.outlet) : null;
          if (a && o.routeConfig === a.routeConfig) {
            const u = function (t, e, n) {
              if ("function" == typeof n) return n(t, e);
              switch (n) {
                case "pathParamsChange":
                  return !jh(t.url, e.url);
                case "pathParamsOrQueryParamsChange":
                  return !jh(t.url, e.url) || !Th(t.queryParams, e.queryParams);
                case "always":
                  return !0;
                case "paramsOrQueryParamsChange":
                  return !md(t, e) || !Th(t.queryParams, e.queryParams);
                case "paramsChange":
                default:
                  return !md(t, e)
              }
            }(a, o, o.routeConfig.runGuardsAndResolvers);
            u ? i.canActivateChecks.push(new Hd(s)) : (o.data = a.data, o._resolvedData = a._resolvedData), t(e, n, o.component ? l ? l.children : null : r, s, i), u && i.canDeactivateChecks.push(new $d(l && l.outlet && l.outlet.component || null, a))
          } else a && Gd(n, l, i), i.canActivateChecks.push(new Hd(s)), t(e, null, o.component ? l ? l.children : null : r, s, i)
        }(e, o[e.value.outlet], r, s.concat([e.value]), i), delete o[e.value.outlet]
      }), Ph(o, (t, e) => Gd(t, r.getContext(e), i)), i
    }(r, e ? e._root : null, n, [r.value])
  }

  function zd(t, e, n) {
    const r = function (t) {
      if (!t) return null;
      for (let e = t.parent; e; e = e.parent) {
        const t = e.routeConfig;
        if (t && t._loadedConfig) return t._loadedConfig
      }
      return null
    }(e);
    return (r ? r.module.injector : n).get(t)
  }

  function Gd(t, e, n) {
    const r = id(t),
      s = t.value;
    Ph(r, (t, r) => {
      Gd(t, s.component ? e ? e.children.getContext(r) : null : e, n)
    }), n.canDeactivateChecks.push(new $d(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, s))
  }
  const Bd = Symbol("INITIAL_VALUE");

  function Wd() {
    return qc(t => function (...t) {
      let e = null,
        n = null;
      return k(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && l(t[0]) && (t = t[0]), W(t, n).lift(new gc(e))
    }(...t.map(t => t.pipe(Mc(1), function (...t) {
      const e = t[t.length - 1];
      return k(e) ? (t.pop(), n => Bc(t, n, e)) : e => Bc(t, e)
    }(Bd)))).pipe(Wc((t, e) => {
      let n = !1;
      return e.reduce((t, r, s) => {
        if (t !== Bd) return t;
        if (r === Bd && (n = !0), !n) {
          if (!1 === r) return r;
          if (s === e.length - 1 || Id(r)) return r
        }
        return t
      }, t)
    }, Bd), Pu(t => t !== Bd), M(t => Id(t) ? t : !0 === t), Mc(1)))
  }

  function Zd(t, e) {
    return null !== t && e && e(new mh(t)), Iu(!0)
  }

  function Qd(t, e) {
    return null !== t && e && e(new ph(t)), Iu(!0)
  }

  function Jd(t, e, n) {
    const r = e.routeConfig ? e.routeConfig.canActivate : null;
    return r && 0 !== r.length ? Iu(r.map(r => wc(() => {
      const s = zd(r, e, n);
      let i;
      if (function (t) {
          return t && Od(t.canActivate)
        }(s)) i = Nh(s.canActivate(e, t));
      else {
        if (!Od(s)) throw new Error("Invalid CanActivate guard");
        i = Nh(s(e, t))
      }
      return i.pipe(Lc())
    }))).pipe(Wd()) : Iu(!0)
  }

  function Kd(t, e, n) {
    const r = e[e.length - 1],
      s = e.slice(0, e.length - 1).reverse().map(t => function (t) {
        const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
        return e && 0 !== e.length ? {
          node: t,
          guards: e
        } : null
      }(t)).filter(t => null !== t).map(e => wc(() => Iu(e.guards.map(s => {
        const i = zd(s, e.node, n);
        let o;
        if (function (t) {
            return t && Od(t.canActivateChild)
          }(i)) o = Nh(i.canActivateChild(r, t));
        else {
          if (!Od(i)) throw new Error("Invalid CanActivateChild guard");
          o = Nh(i(r, t))
        }
        return o.pipe(Lc())
      })).pipe(Wd())));
    return Iu(s).pipe(Wd())
  }
  class Yd {}
  class Xd {
    constructor(t, e, n, r, s, i) {
      this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = s, this.relativeLinkResolution = i
    }
    recognize() {
      try {
        const t = np(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
          e = this.processSegmentGroup(this.config, t, "primary"),
          n = new cd([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
          r = new sd(n, e),
          s = new hd(this.url, r);
        return this.inheritParamsAndData(s._root), Iu(s)
      } catch (t) {
        return new w(e => e.error(t))
      }
    }
    inheritParamsAndData(t) {
      const e = t.value,
        n = ud(e, this.paramsInheritanceStrategy);
      e.params = Object.freeze(n.params), e.data = Object.freeze(n.data), t.children.forEach(t => this.inheritParamsAndData(t))
    }
    processSegmentGroup(t, e, n) {
      return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
    }
    processChildren(t, e) {
      const n = Uh(e, (e, n) => this.processSegmentGroup(t, e, n));
      return function (t) {
        const e = {};
        t.forEach(t => {
          const n = e[t.value.outlet];
          if (n) {
            const e = n.url.map(t => t.toString()).join("/"),
              r = t.value.url.map(t => t.toString()).join("/");
            throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`)
          }
          e[t.value.outlet] = t.value
        })
      }(n), n.sort((t, e) => "primary" === t.value.outlet ? -1 : "primary" === e.value.outlet ? 1 : t.value.outlet.localeCompare(e.value.outlet)), n
    }
    processSegment(t, e, n, r) {
      for (const i of t) try {
        return this.processSegmentAgainstRoute(i, e, n, r)
      } catch (s) {
        if (!(s instanceof Yd)) throw s
      }
      if (this.noLeftoversInUrl(e, n, r)) return [];
      throw new Yd
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    processSegmentAgainstRoute(t, e, n, r) {
      if (t.redirectTo) throw new Yd;
      if ((t.outlet || "primary") !== r) throw new Yd;
      let s, i = [],
        o = [];
      if ("**" === t.path) {
        const i = n.length > 0 ? Rh(n).parameters : {};
        s = new cd(n, i, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, ip(t), r, t.component, t, tp(e), ep(e) + n.length, op(t))
      } else {
        const a = function (t, e, n) {
          if ("" === e.path) {
            if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Yd;
            return {
              consumedSegments: [],
              lastChild: 0,
              parameters: {}
            }
          }
          const r = (e.matcher || Ch)(n, t, e);
          if (!r) throw new Yd;
          const s = {};
          Ph(r.posParams, (t, e) => {
            s[e] = t.path
          });
          const i = r.consumed.length > 0 ? Object.assign(Object.assign({}, s), r.consumed[r.consumed.length - 1].parameters) : s;
          return {
            consumedSegments: r.consumed,
            lastChild: r.consumed.length,
            parameters: i
          }
        }(e, t, n);
        i = a.consumedSegments, o = n.slice(a.lastChild), s = new cd(i, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, ip(t), r, t.component, t, tp(e), ep(e) + i.length, op(t))
      }
      const a = function (t) {
          return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
        }(t),
        {
          segmentGroup: l,
          slicedSegments: u
        } = np(e, i, o, a, this.relativeLinkResolution);
      if (0 === u.length && l.hasChildren()) {
        const t = this.processChildren(a, l);
        return [new sd(s, t)]
      }
      if (0 === a.length && 0 === u.length) return [new sd(s, [])];
      const c = this.processSegment(a, l, u, "primary");
      return [new sd(s, c)]
    }
  }

  function tp(t) {
    let e = t;
    for (; e._sourceSegment;) e = e._sourceSegment;
    return e
  }

  function ep(t) {
    let e = t,
      n = e._segmentIndexShift ? e._segmentIndexShift : 0;
    for (; e._sourceSegment;) e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0;
    return n - 1
  }

  function np(t, e, n, r, s) {
    if (n.length > 0 && function (t, e, n) {
        return n.some(n => rp(t, e, n) && "primary" !== sp(n))
      }(t, n, r)) {
      const s = new Dh(e, function (t, e, n, r) {
        const s = {};
        s.primary = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
        for (const i of n)
          if ("" === i.path && "primary" !== sp(i)) {
            const n = new Dh([], {});
            n._sourceSegment = t, n._segmentIndexShift = e.length, s[sp(i)] = n
          } return s
      }(t, e, r, new Dh(n, t.children)));
      return s._sourceSegment = t, s._segmentIndexShift = e.length, {
        segmentGroup: s,
        slicedSegments: []
      }
    }
    if (0 === n.length && function (t, e, n) {
        return n.some(n => rp(t, e, n))
      }(t, n, r)) {
      const i = new Dh(t.segments, function (t, e, n, r, s, i) {
        const o = {};
        for (const a of r)
          if (rp(t, n, a) && !s[sp(a)]) {
            const n = new Dh([], {});
            n._sourceSegment = t, n._segmentIndexShift = "legacy" === i ? t.segments.length : e.length, o[sp(a)] = n
          } return Object.assign(Object.assign({}, s), o)
      }(t, e, n, r, t.children, s));
      return i._sourceSegment = t, i._segmentIndexShift = e.length, {
        segmentGroup: i,
        slicedSegments: n
      }
    }
    const i = new Dh(t.segments, t.children);
    return i._sourceSegment = t, i._segmentIndexShift = e.length, {
      segmentGroup: i,
      slicedSegments: n
    }
  }

  function rp(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
  }

  function sp(t) {
    return t.outlet || "primary"
  }

  function ip(t) {
    return t.data || {}
  }

  function op(t) {
    return t.resolve || {}
  }

  function ap(t, e, n, r) {
    const s = zd(t, e, r);
    return Nh(s.resolve ? s.resolve(e, n) : s(e, n))
  }

  function lp(t) {
    return function (e) {
      return e.pipe(qc(e => {
        const n = t(e);
        return n ? H(n).pipe(M(() => e)) : H([e])
      }))
    }
  }
  class up {
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
  const cp = new jt("ROUTES"); class hp {
    constructor(t, e, n, r) {
      this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
    }
    load(t, e) {
      return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(M(n => {
        this.onLoadEndListener && this.onLoadEndListener(e);
        const r = n.create(t);
        return new Sh(Ih(r.injector.get(cp)).map(kh), r)
      }))
    }
    loadModuleFactory(t) {
      return "string" == typeof t ? H(this.loader.load(t)) : Nh(t()).pipe($(t => t instanceof Xt ? Iu(t) : H(this.compiler.compileModuleAsync(t))))
    }
  }
  class dp {
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

  function pp(t) {
    throw t
  }

  function fp(t, e, n) {
    return e.parse("/")
  }

  function mp(t, e) {
    return Iu(null)
  }
  let gp = (() => {
    class t {
      constructor(t, e, n, r, s, i, o, a) {
        this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = a, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new E, this.errorHandler = pp, this.malformedUriErrorHandler = fp, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
          beforePreactivation: mp,
          afterPreactivation: mp
        }, this.urlHandlingStrategy = new dp, this.routeReuseStrategy = new up, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = s.get(Yt), this.console = s.get(Pa);
        const l = s.get(Ba);
        this.isNgZoneEnabled = l instanceof Ba, this.resetConfig(a), this.currentUrlTree = new Fh(new Dh([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new hp(i, o, t => this.triggerEvent(new hh(t)), t => this.triggerEvent(new dh(t))), this.routerState = ad(this.currentUrlTree, this.rootComponentType), this.transitions = new pc({
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
        return t.pipe(Pu(t => 0 !== t.id), M(t => Object.assign(Object.assign({}, t), {
          extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
        })), qc(t => {
          let n = !1,
            r = !1;
          return Iu(t).pipe(Jc(t => {
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
          }), qc(t => {
            const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
            if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Iu(t).pipe(qc(t => {
              const n = this.transitions.getValue();
              return e.next(new nh(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), n !== this.transitions.getValue() ? yc : [t]
            }), qc(t => Promise.resolve(t)), (r = this.ngModule.injector, s = this.configLoader, i = this.urlSerializer, o = this.config, function (t) {
              return t.pipe(qc(t => function (t, e, n, r, s) {
                return new Dd(t, e, n, r, s).apply()
              }(r, s, i, t.extractedUrl, o).pipe(M(e => Object.assign(Object.assign({}, t), {
                urlAfterRedirects: e
              })))))
            }), Jc(t => {
              this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                finalUrl: t.urlAfterRedirects
              })
            }), function (t, e, n, r, s) {
              return function (i) {
                return i.pipe($(i => function (t, e, n, r, s = "emptyOnly", i = "legacy") {
                  return new Xd(t, e, n, r, s, i).recognize()
                }(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe(M(t => Object.assign(Object.assign({}, i), {
                  targetSnapshot: t
                })))))
              }
            }(this.rootComponentType, this.config, t => this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), Jc(t => {
              "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
            }), Jc(t => {
              const n = new oh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              e.next(n)
            }));
            var r, s, i, o;
            if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
              const {
                id: n,
                extractedUrl: r,
                source: s,
                restoredState: i,
                extras: o
              } = t, a = new nh(n, this.serializeUrl(r), s, i);
              e.next(a);
              const l = ad(r, this.rootComponentType).snapshot;
              return Iu(Object.assign(Object.assign({}, t), {
                targetSnapshot: l,
                urlAfterRedirects: r,
                extras: Object.assign(Object.assign({}, o), {
                  skipLocationChange: !1,
                  replaceUrl: !1
                })
              }))
            }
            return this.rawUrlTree = t.rawUrl, this.browserUrlTree = t.urlAfterRedirects, t.resolve(null), yc
          }), lp(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: r,
              rawUrl: s,
              extras: {
                skipLocationChange: i,
                replaceUrl: o
              }
            } = t;
            return this.hooks.beforePreactivation(e, {
              navigationId: n,
              appliedUrlTree: r,
              rawUrlTree: s,
              skipLocationChange: !!i,
              replaceUrl: !!o
            })
          }), Jc(t => {
            const e = new ah(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
            this.triggerEvent(e)
          }), M(t => Object.assign(Object.assign({}, t), {
            guards: qd(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
          })), function (t, e) {
            return function (n) {
              return n.pipe($(n => {
                const {
                  targetSnapshot: r,
                  currentSnapshot: s,
                  guards: {
                    canActivateChecks: i,
                    canDeactivateChecks: o
                  }
                } = n;
                return 0 === o.length && 0 === i.length ? Iu(Object.assign(Object.assign({}, n), {
                  guardsResult: !0
                })) : function (t, e, n, r) {
                  return H(t).pipe($(t => function (t, e, n, r, s) {
                    const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                    return i && 0 !== i.length ? Iu(i.map(i => {
                      const o = zd(i, e, s);
                      let a;
                      if (function (t) {
                          return t && Od(t.canDeactivate)
                        }(o)) a = Nh(o.canDeactivate(t, e, n, r));
                      else {
                        if (!Od(o)) throw new Error("Invalid CanDeactivate guard");
                        a = Nh(o(t, e, n, r))
                      }
                      return a.pipe(Lc())
                    })).pipe(Wd()) : Iu(!0)
                  }(t.component, t.route, n, e, r)), Lc(t => !0 !== t, !0))
                }(o, r, s, t).pipe($(n => n && "boolean" == typeof n ? function (t, e, n, r) {
                  return H(e).pipe(Ru(e => H([Qd(e.route.parent, r), Zd(e.route, r), Kd(t, e.path, n), Jd(t, e.route, n)]).pipe(bc(), Lc(t => !0 !== t, !0))), Lc(t => !0 !== t, !0))
                }(r, i, t, e) : Iu(n)), M(t => Object.assign(Object.assign({}, n), {
                  guardsResult: t
                })))
              }))
            }
          }(this.ngModule.injector, t => this.triggerEvent(t)), Jc(t => {
            if (Id(t.guardsResult)) {
              const e = bh(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
              throw e.url = t.guardsResult, e
            }
          }), Jc(t => {
            const e = new lh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.triggerEvent(e)
          }), Pu(t => {
            if (!t.guardsResult) {
              this.resetUrlToCurrentUrlTree();
              const n = new sh(t.id, this.serializeUrl(t.extractedUrl), "");
              return e.next(n), t.resolve(!1), !1
            }
            return !0
          }), lp(t => {
            if (t.guards.canActivateChecks.length) return Iu(t).pipe(Jc(t => {
              const e = new uh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }), (e = this.paramsInheritanceStrategy, n = this.ngModule.injector, function (t) {
              return t.pipe($(t => {
                const {
                  targetSnapshot: r,
                  guards: {
                    canActivateChecks: s
                  }
                } = t;
                return s.length ? H(s).pipe(Ru(t => function (t, e, n, r) {
                  return function (t, e, n, r) {
                    const s = Object.keys(t);
                    if (0 === s.length) return Iu({});
                    if (1 === s.length) {
                      const i = s[0];
                      return ap(t[i], e, n, r).pipe(M(t => ({
                        [i]: t
                      })))
                    }
                    const i = {};
                    return H(s).pipe($(s => ap(t[s], e, n, r).pipe(M(t => (i[s] = t, t))))).pipe(Nc(), M(() => i))
                  }(t._resolve, t, e, r).pipe(M(e => (t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), ud(t, n).resolve), null)))
                }(t.route, r, e, n)), function (t, e) {
                  return arguments.length >= 2 ? function (n) {
                    return y(Wc(t, e), Sc(1), Ic(e))(n)
                  } : function (e) {
                    return y(Wc((e, n, r) => t(e, n, r + 1)), Sc(1))(e)
                  }
                }((t, e) => t), M(e => t)) : Iu(t)
              }))
            }), Jc(t => {
              const e = new ch(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }));
            var e, n
          }), lp(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: r,
              rawUrl: s,
              extras: {
                skipLocationChange: i,
                replaceUrl: o
              }
            } = t;
            return this.hooks.afterPreactivation(e, {
              navigationId: n,
              appliedUrlTree: r,
              rawUrlTree: s,
              skipLocationChange: !!i,
              replaceUrl: !!o
            })
          }), M(t => {
            const e = function (t, e, n) {
              const r = function t(e, n, r) {
                if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                  const s = r.value;
                  s._futureSnapshot = n.value;
                  const i = function (e, n, r) {
                    return n.children.map(n => {
                      for (const s of r.children)
                        if (e.shouldReuseRoute(s.value.snapshot, n.value)) return t(e, n, s);
                      return t(e, n)
                    })
                  }(e, n, r);
                  return new sd(s, i)
                } {
                  const r = e.retrieve(n.value);
                  if (r) {
                    const t = r.route;
                    return function t(e, n) {
                      if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                      if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                      n.value._futureSnapshot = e.value;
                      for (let r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                    }(n, t), t
                  } {
                    const r = new ld(new pc((s = n.value).url), new pc(s.params), new pc(s.queryParams), new pc(s.fragment), new pc(s.data), s.outlet, s.component, s),
                      i = n.children.map(n => t(e, n));
                    return new sd(r, i)
                  }
                }
                var s
              }(t, e._root, n ? n._root : void 0);
              return new od(r, e)
            }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            return Object.assign(Object.assign({}, t), {
              targetRouterState: e
            })
          }), Jc(t => {
            this.currentUrlTree = t.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl), this.routerState = t.targetRouterState, "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
          }), (i = this.rootContexts, o = this.routeReuseStrategy, a = t => this.triggerEvent(t), M(t => (new kd(o, t.targetRouterState, t.currentRouterState, a).activate(i), t))), Jc({
            next() {
              n = !0
            },
            complete() {
              n = !0
            }
          }), (s = () => {
            if (!n && !r) {
              this.resetUrlToCurrentUrlTree();
              const n = new sh(t.id, this.serializeUrl(t.extractedUrl), `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);
              e.next(n), t.resolve(!1)
            }
            this.currentNavigation = null
          }, t => t.lift(new Xc(s))), Vc(n => {
            if (r = !0, (s = n) && s.ngNavigationCancelingError) {
              const r = Id(n.url);
              r || (this.navigated = !0, this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
              const s = new sh(t.id, this.serializeUrl(t.extractedUrl), n.message);
              e.next(s), r ? setTimeout(() => {
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
              const r = new ih(t.id, this.serializeUrl(t.extractedUrl), n);
              e.next(r);
              try {
                t.resolve(this.errorHandler(n))
              } catch (i) {
                t.reject(i)
              }
            }
            var s;
            return yc
          }));
          var s, i, o, a
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
            r = t.state && t.state.navigationId ? t.state : null;
          setTimeout(() => {
            this.scheduleNavigation(e, n, r, {
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
        xh(t), this.config = t.map(kh), this.navigated = !1, this.lastSuccessfulId = -1
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
          queryParams: r,
          fragment: s,
          preserveQueryParams: i,
          queryParamsHandling: o,
          preserveFragment: a
        } = e;
        rr() && i && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
        const l = n || this.routerState.root,
          u = a ? this.currentUrlTree.fragment : s;
        let c = null;
        if (o) switch (o) {
          case "merge":
            c = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
            break;
          case "preserve":
            c = this.currentUrlTree.queryParams;
            break;
          default:
            c = r || null
        } else c = i ? this.currentUrlTree.queryParams : r || null;
        return null !== c && (c = this.removeEmptyProps(c)),
          function (t, e, n, r, s) {
            if (0 === n.length) return vd(e.root, e.root, e, r, s);
            const i = function (t) {
              if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new yd(!0, 0, t);
              let e = 0,
                n = !1;
              const r = t.reduce((t, r, s) => {
                if ("object" == typeof r && null != r) {
                  if (r.outlets) {
                    const e = {};
                    return Ph(r.outlets, (t, n) => {
                      e[n] = "string" == typeof t ? t.split("/") : t
                    }), [...t, {
                      outlets: e
                    }]
                  }
                  if (r.segmentPath) return [...t, r.segmentPath]
                }
                return "string" != typeof r ? [...t, r] : 0 === s ? (r.split("/").forEach((r, s) => {
                  0 == s && "." === r || (0 == s && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                }), t) : [...t, r]
              }, []);
              return new yd(n, e, r)
            }(n);
            if (i.toRoot()) return vd(e.root, new Dh([], {}), e, r, s);
            const o = function (t, e, n) {
                if (t.isAbsolute) return new _d(e.root, !0, 0);
                if (-1 === n.snapshot._lastPathIndex) return new _d(n.snapshot._urlSegment, !0, 0);
                const r = gd(t.commands[0]) ? 0 : 1;
                return function (t, e, n) {
                  let r = t,
                    s = e,
                    i = n;
                  for (; i > s;) {
                    if (i -= s, r = r.parent, !r) throw new Error("Invalid number of '../'");
                    s = r.segments.length
                  }
                  return new _d(r, !1, s - i)
                }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots)
              }(i, e, t),
              a = o.processChildren ? Cd(o.segmentGroup, o.index, i.commands) : bd(o.segmentGroup, o.index, i.commands);
            return vd(o.segmentGroup, a, e, r, s)
          }(l, this.currentUrlTree, t, c, u)
      }
      navigateByUrl(t, e = {
        skipLocationChange: !1
      }) {
        rr() && this.isNgZoneEnabled && !Ba.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
        const n = Id(t) ? t : this.parseUrl(t),
          r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
        return this.scheduleNavigation(r, "imperative", null, e)
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
        if (Id(t)) return Vh(this.currentUrlTree, t, e);
        const n = this.parseUrl(t);
        return Vh(this.currentUrlTree, n, e)
      }
      removeEmptyProps(t) {
        return Object.keys(t).reduce((e, n) => {
          const r = t[n];
          return null != r && (e[n] = r), e
        }, {})
      }
      processNavigations() {
        this.navigations.subscribe(t => {
          this.navigated = !0, this.lastSuccessfulId = t.id, this.events.next(new rh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, this.currentNavigation = null, t.resolve(!0)
        }, t => {
          this.console.warn("Unhandled Navigation Error: ")
        })
      }
      scheduleNavigation(t, e, n, r, s) {
        const i = this.getTransition();
        if (i && "imperative" !== e && "imperative" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (i && "hashchange" == e && "popstate" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (i && "popstate" == e && "hashchange" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        let o, a, l;
        s ? (o = s.resolve, a = s.reject, l = s.promise) : l = new Promise((t, e) => {
          o = t, a = e
        });
        const u = ++this.navigationId;
        return this.setTransition({
          id: u,
          source: e,
          restoredState: n,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.rawUrlTree,
          rawUrl: t,
          extras: r,
          resolve: o,
          reject: a,
          promise: l,
          currentSnapshot: this.routerState.snapshot,
          currentRouterState: this.routerState
        }), l.catch(t => Promise.reject(t))
      }
      setBrowserUrl(t, e, n, r) {
        const s = this.urlSerializer.serialize(t);
        r = r || {}, this.location.isCurrentPathEqualTo(s) || e ? this.location.replaceState(s, "", Object.assign(Object.assign({}, r), {
          navigationId: n
        })) : this.location.go(s, "", Object.assign(Object.assign({}, r), {
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
      Ei()
    }, t.\u0275dir = ve({
      type: t
    }), t
  })(), vp = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.router = t, this.route = e, this.commands = [], null == n && r.setAttribute(s.nativeElement, "tabindex", "0")
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        rr() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t
      }
      onClick() {
        const t = {
          skipLocationChange: _p(this.skipLocationChange),
          replaceUrl: _p(this.replaceUrl)
        };
        return this.router.navigateByUrl(this.urlTree, t), !0
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: _p(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: _p(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(gp), Si(ld), xi("tabindex"), Si(Co), Si(yo))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "routerLink", "", 5, "a", 5, "area"]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("click", (function () {
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
  })(), yp = (() => {
    class t {
      constructor(t, e, n) {
        this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(t => {
          t instanceof rh && this.updateTargetUrlAndHref()
        })
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        rr() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
      }
      ngOnChanges(t) {
        this.updateTargetUrlAndHref()
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      onClick(t, e, n, r) {
        if (0 !== t || e || n || r) return !0;
        if ("string" == typeof this.target && "_self" != this.target) return !0;
        const s = {
          skipLocationChange: _p(this.skipLocationChange),
          replaceUrl: _p(this.replaceUrl),
          state: this.state
        };
        return this.router.navigateByUrl(this.urlTree, s), !1
      }
      updateTargetUrlAndHref() {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: _p(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: _p(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(gp), Si(ld), Si(Vl))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["a", "routerLink", ""],
        ["area", "routerLink", ""]
      ],
      hostVars: 2,
      hostBindings: function (t, e) {
        1 & t && Ni("click", (function (t) {
          return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey)
        })), 2 & t && (Qi("href", e.href, ar), wi("target", e.target))
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
      features: [ro]
    }), t
  })();

  function _p(t) {
    return "" === t || !!t
  }
  let wp = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.router = t, this.element = e, this.renderer = n, this.link = r, this.linkWithHref = s, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
          exact: !1
        }, this.subscription = t.events.subscribe(t => {
          t instanceof rh && this.update()
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
      return new(e || t)(Si(gp), Si(yo), Si(Co), Si(vp, 8), Si(yp, 8))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "routerLinkActive", ""]
      ],
      contentQueries: function (t, e, n) {
        var r;
        1 & t && (ba(n, vp, !0), ba(n, yp, !0)), 2 & t && (wa(r = Ca()) && (e.links = r), wa(r = Ca()) && (e.linksWithHrefs = r))
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        routerLinkActive: "routerLinkActive"
      },
      exportAs: ["routerLinkActive"],
      features: [ro]
    }), t
  })(); class bp {
    constructor() {
      this.outlet = null, this.route = null, this.resolver = null, this.children = new Cp, this.attachRef = null
    }
  }
  class Cp {
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
      return e || (e = new bp, this.contexts.set(t, e)), e
    }
    getContext(t) {
      return this.contexts.get(t) || null
    }
  }
  let Sp = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = s, this.activated = null, this._activatedRoute = null, this.activateEvents = new ua, this.deactivateEvents = new ua, this.name = r || "primary", t.onChildOutletCreated(this.name, this)
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
          r = this.parentContexts.getOrCreateContext(this.name).children,
          s = new xp(t, r, this.location.injector);
        this.activated = this.location.createComponent(n, this.location.length, s), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Cp), Si(zo), Si(vo), xi("name"), Si(Gs))
    }, t.\u0275dir = ve({
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
  })(); class xp {
    constructor(t, e, n) {
      this.route = t, this.childContexts = e, this.parent = n
    }
    get(t, e) {
      return t === ld ? this.route : t === Cp ? this.childContexts : this.parent.get(t, e)
    }
  }
  class Ep {}
  class Ap {
    preload(t, e) {
      return Iu(null)
    }
  }
  let kp = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.router = t, this.injector = r, this.preloadingStrategy = s, this.loader = new hp(e, n, e => t.triggerEvent(new hh(e)), e => t.triggerEvent(new dh(e)))
      }
      setUpPreloading() {
        this.subscription = this.router.events.pipe(Pu(t => t instanceof rh), Ru(() => this.preload())).subscribe(() => {})
      }
      preload() {
        const t = this.injector.get(Yt);
        return this.processRoutes(t, this.router.config)
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      processRoutes(t, e) {
        const n = [];
        for (const r of e)
          if (r.loadChildren && !r.canLoad && r._loadedConfig) {
            const t = r._loadedConfig;
            n.push(this.processRoutes(t.module, t.routes))
          } else r.loadChildren && !r.canLoad ? n.push(this.preloadConfig(t, r)) : r.children && n.push(this.processRoutes(t, r.children));
        return H(n).pipe(B(), M(t => {}))
      }
      preloadConfig(t, e) {
        return this.preloadingStrategy.preload(e, () => this.loader.load(t.injector, e).pipe($(t => (e._loadedConfig = t, this.processRoutes(t.module, t.routes)))))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(gp), Zt(fl), Zt($a), Zt(ai), Zt(Ep))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), Tp = (() => {
    class t {
      constructor(t, e, n = {}) {
        this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
      }
      init() {
        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
      }
      createScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof nh ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = t.navigationTrigger, this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof rh && (this.lastId = t.id, this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment))
        })
      }
      consumeScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof vh && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
        })
      }
      scheduleScrollEvent(t, e) {
        this.router.triggerEvent(new vh(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
      }
      ngOnDestroy() {
        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
      }
    }
    return t.\u0275fac = function (t) {
      Ei()
    }, t.\u0275dir = ve({
      type: t
    }), t
  })();
  const Op = new jt("ROUTER_CONFIGURATION"), Ip = new jt("ROUTER_FORROOT_GUARD"), Rp = [Ul, {
    provide: Lh,
    useClass: Hh
  }, {
    provide: gp,
    useFactory: function (t, e, n, r, s, i, o, a = {}, l, u) {
      const c = new gp(null, t, e, n, r, s, i, Ih(o));
      if (l && (c.urlHandlingStrategy = l), u && (c.routeReuseStrategy = u), a.errorHandler && (c.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (c.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) {
        const t = Sl();
        c.events.subscribe(e => {
          t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd()
        })
      }
      return a.onSameUrlNavigation && (c.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (c.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (c.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (c.relativeLinkResolution = a.relativeLinkResolution), c
    },
    deps: [Lh, Cp, Ul, ai, fl, $a, cp, Op, [class {}, new st],
      [class {}, new st]
    ]
  }, Cp, {
    provide: ld,
    useFactory: function (t) {
      return t.routerState.root
    },
    deps: [gp]
  }, {
    provide: fl,
    useClass: vl
  }, kp, Ap, class {
    preload(t, e) {
      return e().pipe(Vc(() => Iu(null)))
    }
  }, {
    provide: Op,
    useValue: {
      enableTracing: !1
    }
  }];

  function Pp() {
    return new al("Router", gp)
  }
  let Np = (() => {
    class t {
      constructor(t, e) {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [Rp, Mp(e), {
              provide: Ip,
              useFactory: Dp,
              deps: [
                [gp, new st, new ot]
              ]
            }, {
              provide: Op,
              useValue: n || {}
            }, {
              provide: Vl,
              useFactory: Fp,
              deps: [El, [new rt(Dl), new st], Op]
            }, {
              provide: Tp,
              useFactory: Vp,
              deps: [gp, tu, Op]
            }, {
              provide: Ep,
              useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Ap
            }, {
              provide: al,
              multi: !0,
              useFactory: Pp
            },
            [jp, {
              provide: xa,
              multi: !0,
              useFactory: Up,
              deps: [jp]
            }, {
              provide: Hp,
              useFactory: Lp,
              deps: [jp]
            }, {
              provide: Ra,
              multi: !0,
              useExisting: Hp
            }]
          ]
        }
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [Mp(e)]
        }
      }
    }
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)(Zt(Ip, 8), Zt(gp, 8))
      }
    }), t
  })();

  function Vp(t, e, n) {
    return n.scrollOffset && e.setOffset(n.scrollOffset), new Tp(t, e, n)
  }

  function Fp(t, e, n = {}) {
    return n.useHash ? new jl(t, e) : new Ml(t, e)
  }

  function Dp(t) {
    if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    return "guarded"
  }

  function Mp(t) {
    return [{
      provide: li,
      multi: !0,
      useValue: t
    }, {
      provide: cp,
      multi: !0,
      useValue: t
    }]
  }
  let jp = (() => {
    class t {
      constructor(t) {
        this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new E
      }
      appInitializer() {
        return this.injector.get(kl, Promise.resolve(null)).then(() => {
          let t = null;
          const e = new Promise(e => t = e),
            n = this.injector.get(gp),
            r = this.injector.get(Op);
          if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
          else if ("disabled" === r.initialNavigation) n.setUpLocationChangeListener(), t(!0);
          else {
            if ("enabled" !== r.initialNavigation) throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
            n.hooks.afterPreactivation = () => this.initNavigation ? Iu(null) : (this.initNavigation = !0, t(!0), this.resultOfPreactivationDone), n.initialNavigation()
          }
          return e
        })
      }
      bootstrapListener(t) {
        const e = this.injector.get(Op),
          n = this.injector.get(kp),
          r = this.injector.get(Tp),
          s = this.injector.get(gp),
          i = this.injector.get(dl);
        t === i.components[0] && (this.isLegacyEnabled(e) ? s.initialNavigation() : this.isLegacyDisabled(e) && s.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), s.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
      }
      isLegacyEnabled(t) {
        return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
      }
      isLegacyDisabled(t) {
        return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(ai))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac
    }), t
  })();

  function Up(t) {
    return t.appInitializer.bind(t)
  }

  function Lp(t) {
    return t.bootstrapListener.bind(t)
  }
  const Hp = new jt("Router Initializer");
  let $p = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.router = e, this.baseUrl = "https://api.csss-ci.com/rest/v1/authentication/"
      }
      login(t) {
        return this.http.post(this.baseUrl, t)
      }
      user() {
        return this.http.get(this.baseUrl + "user")
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
      return new(e || t)(Zt(Ku), Zt(gp))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), qp = (() => {
    class t {
      constructor(t) {
        this.injector = t
      }
      intercept(t, e) {
        let n = this.injector.get($p);
        const r = t.clone({
          setHeaders: {
            Authorization: `Bearer ${n.getToken()}`
          }
        });
        return e.handle(r)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(ai))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac
    }), t
  })();
  const zp = [{
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }];
  let Gp = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Np.forRoot(zp)], Np
      ]
    }), t
  })(), Bp = (() => {
    class t {
      constructor() {
        this.title = "csss"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-root"]
      ],
      decls: 2,
      vars: 0,
      consts: [
        [1, "container-fluid"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "div", 0), Ii(1, "router-outlet"), Oi())
      },
      directives: [Sp],
      styles: [""]
    }), t
  })();

  function Wp(t, e) {
    return new w(n => {
      const r = t.length;
      if (0 === r) return void n.complete();
      const s = new Array(r);
      let i = 0,
        o = 0;
      for (let a = 0; a < r; a++) {
        const l = H(t[a]);
        let u = !1;
        n.add(l.subscribe({
          next: t => {
            u || (u = !0, o++), s[a] = t
          },
          error: t => n.error(t),
          complete: () => {
            i++, i !== r && u || (o === r && n.next(e ? e.reduce((t, e, n) => (t[e] = s[n], t), {}) : s), n.complete())
          }
        }))
      }
    })
  }
  const Zp = new jt("NgValueAccessor"), Qp = {
    provide: Zp,
    useExisting: St(() => Jp),
    multi: !0
  };
  let Jp = (() => {
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
      return new(e || t)(Si(Co), Si(yo))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "checkbox", "formControlName", ""],
        ["input", "type", "checkbox", "formControl", ""],
        ["input", "type", "checkbox", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("change", (function (t) {
          return e.onChange(t.target.checked)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [fo([Qp])]
    }), t
  })();
  const Kp = {
    provide: Zp,
    useExisting: St(() => Xp),
    multi: !0
  }, Yp = new jt("CompositionEventMode");
  let Xp = (() => {
    class t {
      constructor(t, e, n) {
        this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = t => {}, this.onTouched = () => {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function () {
          const t = Sl() ? Sl().getUserAgent() : "";
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
      return new(e || t)(Si(Co), Si(yo), Si(Yp, 8))
    }, t.\u0275dir = ve({
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
        1 & t && Ni("input", (function (t) {
          return e._handleInput(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))("compositionstart", (function () {
          return e._compositionStart()
        }))("compositionend", (function (t) {
          return e._compositionEnd(t.target.value)
        }))
      },
      features: [fo([Kp])]
    }), t
  })(), tf = (() => {
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
    }, t.\u0275dir = ve({
      type: t
    }), t
  })(), ef = (() => {
    class t extends tf {
      get formDirective() {
        return null
      }
      get path() {
        return null
      }
    }
    return t.\u0275fac = function (e) {
      return nf(e || t)
    }, t.\u0275dir = ve({
      type: t,
      features: [Ki]
    }), t
  })();
  const nf = Zn(ef);

  function rf() {
    throw new Error("unimplemented")
  }
  class sf extends tf {
    constructor() {
      super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null, this._rawValidators = [], this._rawAsyncValidators = []
    }
    get validator() {
      return rf()
    }
    get asyncValidator() {
      return rf()
    }
  }
  class of {
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
  let af = (() => {
    class t extends of {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(sf, 2))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formControlName", ""],
        ["", "ngModel", ""],
        ["", "formControl", ""]
      ],
      hostVars: 14,
      hostBindings: function (t, e) {
        2 & t && Hi("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [Ki]
    }), t
  })(), lf = (() => {
    class t extends of {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(ef, 2))
    }, t.\u0275dir = ve({
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
        2 & t && Hi("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [Ki]
    }), t
  })();

  function uf(t) {
    return null == t || 0 === t.length
  }
  const cf = new jt("NgValidators"), hf = new jt("NgAsyncValidators"), df = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; class pf {
    static min(t) {
      return e => {
        if (uf(e.value) || uf(t)) return null;
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
        if (uf(e.value) || uf(t)) return null;
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
      return uf(t.value) ? {
        required: !0
      } : null
    }
    static requiredTrue(t) {
      return !0 === t.value ? null : {
        required: !0
      }
    }
    static email(t) {
      return uf(t.value) || df.test(t.value) ? null : {
        email: !0
      }
    }
    static minLength(t) {
      return e => {
        if (uf(e.value)) return null;
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
      if (!t) return pf.nullValidator;
      let e, n;
      return "string" == typeof t ? (n = "", "^" !== t.charAt(0) && (n += "^"), n += t, "$" !== t.charAt(t.length - 1) && (n += "$"), e = new RegExp(n)) : (n = t.toString(), e = t), t => {
        if (uf(t.value)) return null;
        const r = t.value;
        return e.test(r) ? null : {
          pattern: {
            requiredPattern: n,
            actualValue: r
          }
        }
      }
    }
    static nullValidator(t) {
      return null
    }
    static compose(t) {
      if (!t) return null;
      const e = t.filter(ff);
      return 0 == e.length ? null : function (t) {
        return gf(function (t, e) {
          return e.map(e => e(t))
        }(t, e))
      }
    }
    static composeAsync(t) {
      if (!t) return null;
      const e = t.filter(ff);
      return 0 == e.length ? null : function (t) {
        return function (...t) {
          if (1 === t.length) {
            const e = t[0];
            if (l(e)) return Wp(e, null);
            if (u(e) && Object.getPrototypeOf(e) === Object.prototype) {
              const t = Object.keys(e);
              return Wp(t.map(t => e[t]), t)
            }
          }
          if ("function" == typeof t[t.length - 1]) {
            const e = t.pop();
            return Wp(t = 1 === t.length && l(t[0]) ? t[0] : t, null).pipe(M(t => e(...t)))
          }
          return Wp(t, null)
        }(function (t, e) {
          return e.map(e => e(t))
        }(t, e).map(mf)).pipe(M(gf))
      }
    }
  }

  function ff(t) {
    return null != t
  }

  function mf(t) {
    const e = Ri(t) ? H(t) : t;
    if (!Pi(e)) throw new Error("Expected validator to return Promise or Observable.");
    return e
  }

  function gf(t) {
    let e = {};
    return t.forEach(t => {
      e = null != t ? Object.assign(Object.assign({}, e), t) : e
    }), 0 === Object.keys(e).length ? null : e
  }

  function vf(t) {
    return t.validate ? e => t.validate(e) : t
  }

  function yf(t) {
    return t.validate ? e => t.validate(e) : t
  }
  const _f = {
    provide: Zp,
    useExisting: St(() => wf),
    multi: !0
  };
  let wf = (() => {
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
      return new(e || t)(Si(Co), Si(yo))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "number", "formControlName", ""],
        ["input", "type", "number", "formControl", ""],
        ["input", "type", "number", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [fo([_f])]
    }), t
  })();
  const bf = {
    provide: Zp,
    useExisting: St(() => Sf),
    multi: !0
  };
  let Cf = (() => {
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
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), Sf = (() => {
    class t {
      constructor(t, e, n, r) {
        this._renderer = t, this._elementRef = e, this._registry = n, this._injector = r, this.onChange = () => {}, this.onTouched = () => {}
      }
      ngOnInit() {
        this._control = this._injector.get(sf), this._checkName(), this._registry.add(this._control, this)
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
      return new(e || t)(Si(Co), Si(yo), Si(Cf), Si(ai))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "radio", "formControlName", ""],
        ["input", "type", "radio", "formControl", ""],
        ["input", "type", "radio", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("change", (function () {
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
      features: [fo([bf])]
    }), t
  })();
  const xf = {
    provide: Zp,
    useExisting: St(() => Ef),
    multi: !0
  };
  let Ef = (() => {
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
      return new(e || t)(Si(Co), Si(yo))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "range", "formControlName", ""],
        ["input", "type", "range", "formControl", ""],
        ["input", "type", "range", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [fo([xf])]
    }), t
  })();
  const Af = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });', kf = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });'; class Tf {
    static controlParentException() {
      throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${Af}`)
    }
    static ngModelGroupException() {
      throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${kf}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`)
    }
    static missingFormException() {
      throw new Error(`formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${Af}`)
    }
    static groupParentException() {
      throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${kf}`)
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
  const Of = {
    provide: Zp,
    useExisting: St(() => Rf),
    multi: !0
  };

  function If(t, e) {
    return null == t ? `${e}` : (e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let Rf = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = mi
      }
      set compareWith(t) {
        if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
        this._compareWith = t
      }
      writeValue(t) {
        this.value = t;
        const e = this._getOptionId(t);
        null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
        const n = If(e, t);
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
      return new(e || t)(Si(Co), Si(yo))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["select", "formControlName", "", 3, "multiple", ""],
        ["select", "formControl", "", 3, "multiple", ""],
        ["select", "ngModel", "", 3, "multiple", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("change", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [fo([Of])]
    }), t
  })(), Pf = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption())
      }
      set ngValue(t) {
        null != this._select && (this._select._optionMap.set(this.id, t), this._setElementValue(If(this.id, t)), this._select.writeValue(this._select.value))
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
      return new(e || t)(Si(yo), Si(Co), Si(Rf, 9))
    }, t.\u0275dir = ve({
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
  const Nf = {
    provide: Zp,
    useExisting: St(() => Ff),
    multi: !0
  };

  function Vf(t, e) {
    return null == t ? `${e}` : ("string" == typeof e && (e = `'${e}'`), e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let Ff = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = mi
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
              const r = t.item(e),
                s = this._getOptionValue(r.value);
              n.push(s)
            }
          } else {
            const t = e.options;
            for (let e = 0; e < t.length; e++) {
              const r = t.item(e);
              if (r.selected) {
                const t = this._getOptionValue(r.value);
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
      return new(e || t)(Si(Co), Si(yo))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["select", "multiple", "", "formControlName", ""],
        ["select", "multiple", "", "formControl", ""],
        ["select", "multiple", "", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("change", (function (t) {
          return e.onChange(t.target)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [fo([Nf])]
    }), t
  })(), Df = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption(this))
      }
      set ngValue(t) {
        null != this._select && (this._value = t, this._setElementValue(Vf(this.id, t)), this._select.writeValue(this._select.value))
      }
      set value(t) {
        this._select ? (this._value = t, this._setElementValue(Vf(this.id, t)), this._select.writeValue(this._select.value)) : this._setElementValue(t)
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
      return new(e || t)(Si(yo), Si(Co), Si(Ff, 9))
    }, t.\u0275dir = ve({
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

  function Mf(t, e) {
    return [...e.path, t]
  }

  function jf(t, e) {
    t || $f(e, "Cannot find control with"), e.valueAccessor || $f(e, "No value accessor for form control with"), t.validator = pf.compose([t.validator, e.validator]), t.asyncValidator = pf.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
      function (t, e) {
        e.valueAccessor.registerOnChange(n => {
          t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && Uf(t, e)
        })
      }(t, e),
      function (t, e) {
        t.registerOnChange((t, n) => {
          e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t)
        })
      }(t, e),
      function (t, e) {
        e.valueAccessor.registerOnTouched(() => {
          t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && Uf(t, e), "submit" !== t.updateOn && t.markAsTouched()
        })
      }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(t => {
        e.valueAccessor.setDisabledState(t)
      }), e._rawValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      }), e._rawAsyncValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      })
  }

  function Uf(t, e) {
    t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {
      emitModelToViewChange: !1
    }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1
  }

  function Lf(t, e) {
    null == t && $f(e, "Cannot find control with"), t.validator = pf.compose([t.validator, e.validator]), t.asyncValidator = pf.composeAsync([t.asyncValidator, e.asyncValidator])
  }

  function Hf(t) {
    return $f(t, "There is no FormControl instance attached to form control element with")
  }

  function $f(t, e) {
    let n;
    throw n = t.path.length > 1 ? `path: '${t.path.join(" -> ")}'` : t.path[0] ? `name: '${t.path}'` : "unspecified name attribute", new Error(`${e} ${n}`)
  }

  function qf(t) {
    return null != t ? pf.compose(t.map(vf)) : null
  }

  function zf(t) {
    return null != t ? pf.composeAsync(t.map(yf)) : null
  }
  const Gf = [Jp, Ef, wf, Rf, Ff, Sf];

  function Bf(t) {
    const e = Zf(t) ? t.validators : t;
    return Array.isArray(e) ? qf(e) : e || null
  }

  function Wf(t, e) {
    const n = Zf(e) ? e.asyncValidators : t;
    return Array.isArray(n) ? zf(n) : n || null
  }

  function Zf(t) {
    return null != t && !Array.isArray(t) && "object" == typeof t
  }
  class Qf {
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
      this.validator = Bf(t)
    }
    setAsyncValidators(t) {
      this.asyncValidator = Wf(t)
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
        const e = mf(this.asyncValidator(this));
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
        let r = t;
        return e.forEach(t => {
          r = r instanceof Kf ? r.controls.hasOwnProperty(t) ? r.controls[t] : null : r instanceof Yf && r.at(t) || null
        }), r
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
      this.valueChanges = new ua, this.statusChanges = new ua
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
      Zf(t) && null != t.updateOn && (this._updateOn = t.updateOn)
    }
    _parentMarkedDirty(t) {
      return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
    }
  }
  class Jf extends Qf {
    constructor(t = null, e, n) {
      super(Bf(e), Wf(n, e)), this._onChange = [], this._applyFormState(t), this._setUpdateStrategy(e), this.updateValueAndValidity({
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
  class Kf extends Qf {
    constructor(t, e, n) {
      super(Bf(e), Wf(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
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
      this._forEachChild((n, r) => {
        n.reset(t[r], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this._reduceChildren({}, (t, e, n) => (t[n] = e instanceof Jf ? e.value : e.getRawValue(), t))
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
      return this._forEachChild((n, r) => {
        e = e || this.contains(r) && t(n)
      }), e
    }
    _reduceValue() {
      return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t))
    }
    _reduceChildren(t, e) {
      let n = t;
      return this._forEachChild((t, r) => {
        n = e(n, t, r)
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
  class Yf extends Qf {
    constructor(t, e, n) {
      super(Bf(e), Wf(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
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
      this._forEachChild((n, r) => {
        n.reset(t[r], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this.controls.map(t => t instanceof Jf ? t.value : t.getRawValue())
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
  let Xf = (() => {
    class t extends ef {
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
        return Mf(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return qf(this._validators)
      }
      get asyncValidator() {
        return zf(this._asyncValidators)
      }
      _checkParentType() {}
    }
    return t.\u0275fac = function (e) {
      return tm(e || t)
    }, t.\u0275dir = ve({
      type: t,
      features: [Ki]
    }), t
  })();
  const tm = Zn(Xf);
  let em = (() => {
    class t {}
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
      ],
      hostAttrs: ["novalidate", ""]
    }), t
  })();
  const nm = new jt("NgModelWithFormControlWarning"), rm = {
    provide: ef,
    useExisting: St(() => sm)
  };
  let sm = (() => {
    class t extends ef {
      constructor(t, e) {
        super(), this._validators = t, this._asyncValidators = e, this.submitted = !1, this.directives = [], this.form = null, this.ngSubmit = new ua
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
        return jf(e, t), e.updateValueAndValidity({
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
        Lf(e, t), e.updateValueAndValidity({
          emitEvent: !1
        })
      }
      removeFormGroup(t) {}
      getFormGroup(t) {
        return this.form.get(t.path)
      }
      addFormArray(t) {
        const e = this.form.get(t.path);
        Lf(e, t), e.updateValueAndValidity({
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
            e.valueAccessor.registerOnChange(() => Hf(e)), e.valueAccessor.registerOnTouched(() => Hf(e)), e._rawValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), e._rawAsyncValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), t && t._clearChangeFns()
          }(t.control, t), e && jf(e, t), t.control = e)
        }), this.form._updateTreeValidity({
          emitEvent: !1
        })
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(() => this._updateDomValue()), this._oldForm && this._oldForm._registerOnCollectionChange(() => {}), this._oldForm = this.form
      }
      _updateValidators() {
        const t = qf(this._validators);
        this.form.validator = pf.compose([this.form.validator, t]);
        const e = zf(this._asyncValidators);
        this.form.asyncValidator = pf.composeAsync([this.form.asyncValidator, e])
      }
      _checkFormPresent() {
        this.form || Tf.missingFormException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(cf, 10), Si(hf, 10))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formGroup", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ni("submit", (function (t) {
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
      features: [fo([rm]), Ki, ro]
    }), t
  })();
  const im = {
    provide: ef,
    useExisting: St(() => om)
  };
  let om = (() => {
    class t extends Xf {
      constructor(t, e, n) {
        super(), this._parent = t, this._validators = e, this._asyncValidators = n
      }
      _checkParentType() {
        um(this._parent) && Tf.groupParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(ef, 13), Si(cf, 10), Si(hf, 10))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formGroupName", ""]
      ],
      inputs: {
        name: ["formGroupName", "name"]
      },
      features: [fo([im]), Ki]
    }), t
  })();
  const am = {
    provide: ef,
    useExisting: St(() => lm)
  };
  let lm = (() => {
    class t extends ef {
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
        return Mf(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get validator() {
        return qf(this._validators)
      }
      get asyncValidator() {
        return zf(this._asyncValidators)
      }
      _checkParentType() {
        um(this._parent) && Tf.arrayParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(ef, 13), Si(cf, 10), Si(hf, 10))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formArrayName", ""]
      ],
      inputs: {
        name: ["formArrayName", "name"]
      },
      features: [fo([am]), Ki]
    }), t
  })();

  function um(t) {
    return !(t instanceof om || t instanceof sm || t instanceof lm)
  }
  const cm = {
    provide: sf,
    useExisting: St(() => hm)
  };
  let hm = (() => {
    class t extends sf {
      constructor(t, e, n, r, s) {
        super(), this._ngModelWarningConfig = s, this._added = !1, this.update = new ua, this._ngModelWarningSent = !1, this._parent = t, this._rawValidators = e || [], this._rawAsyncValidators = n || [], this.valueAccessor = function (t, e) {
          if (!e) return null;
          Array.isArray(e) || $f(t, "Value accessor was not provided as an array for form control with");
          let n = void 0,
            r = void 0,
            s = void 0;
          return e.forEach(e => {
            var i;
            e.constructor === Xp ? n = e : (i = e, Gf.some(t => i.constructor === t) ? (r && $f(t, "More than one built-in value accessor matches form control with"), r = e) : (s && $f(t, "More than one custom value accessor matches form control with"), s = e))
          }), s || r || n || ($f(t, "No valid value accessor for form control with"), null)
        }(this, r)
      }
      set isDisabled(t) {
        Tf.disabledAttrWarning()
      }
      ngOnChanges(e) {
        var n, r;
        this._added || this._setUpControl(),
          function (t, e) {
            if (!t.hasOwnProperty("model")) return !1;
            const n = t.model;
            return !!n.isFirstChange() || !mi(e, n.currentValue)
          }(e, this.viewModel) && ("formControlName", n = t, this, r = this._ngModelWarningConfig, rr() && "never" !== r && ((null !== r && "once" !== r || n._ngModelWarningSentOnce) && ("always" !== r || this._ngModelWarningSent) || (Tf.ngModelWarning("formControlName"), n._ngModelWarningSentOnce = !0, this._ngModelWarningSent = !0)), this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this)
      }
      viewToModelUpdate(t) {
        this.viewModel = t, this.update.emit(t)
      }
      get path() {
        return Mf(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return qf(this._rawValidators)
      }
      get asyncValidator() {
        return zf(this._rawAsyncValidators)
      }
      _checkParentType() {
        !(this._parent instanceof om) && this._parent instanceof Xf ? Tf.ngModelGroupException() : this._parent instanceof om || this._parent instanceof sm || this._parent instanceof lm || Tf.controlParentException()
      }
      _setUpControl() {
        this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(ef, 13), Si(cf, 10), Si(hf, 10), Si(Zp, 10), Si(nm, 8))
    }, t.\u0275dir = ve({
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
      features: [fo([cm]), Ki, ro]
    }), t._ngModelWarningSentOnce = !1, t
  })();
  const dm = {
    provide: cf,
    useExisting: St(() => pm),
    multi: !0
  };
  let pm = (() => {
    class t {
      get required() {
        return this._required
      }
      set required(t) {
        this._required = null != t && !1 !== t && "false" !== `${t}`, this._onChange && this._onChange()
      }
      validate(t) {
        return this.required ? pf.required(t) : null
      }
      registerOnValidatorChange(t) {
        this._onChange = t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"]
      ],
      hostVars: 1,
      hostBindings: function (t, e) {
        2 & t && wi("required", e.required ? "" : null)
      },
      inputs: {
        required: "required"
      },
      features: [fo([dm])]
    }), t
  })(), fm = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      }
    }), t
  })(), mm = (() => {
    class t {
      group(t, e = null) {
        const n = this._reduceControls(t);
        let r = null,
          s = null,
          i = void 0;
        return null != e && (function (t) {
          return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn
        }(e) ? (r = null != e.validators ? e.validators : null, s = null != e.asyncValidators ? e.asyncValidators : null, i = null != e.updateOn ? e.updateOn : void 0) : (r = null != e.validator ? e.validator : null, s = null != e.asyncValidator ? e.asyncValidator : null)), new Kf(n, {
          asyncValidators: s,
          updateOn: i,
          validators: r
        })
      }
      control(t, e, n) {
        return new Jf(t, e, n)
      }
      array(t, e, n) {
        const r = t.map(t => this._createControl(t));
        return new Yf(r, e, n)
      }
      _reduceControls(t) {
        const e = {};
        return Object.keys(t).forEach(n => {
          e[n] = this._createControl(t[n])
        }), e
      }
      _createControl(t) {
        return t instanceof Jf || t instanceof Kf || t instanceof Yf ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), gm = (() => {
    class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [{
            provide: nm,
            useValue: e.warnOnNgModelWithFormControl
          }]
        }
      }
    }
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      providers: [mm, Cf],
      imports: [fm]
    }), t
  })();

  function vm(t, e) {
    if (1 & t && (Ti(0, "div", 11), Bi(1), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Wi(t.errorMessage)
    }
  }

  function ym(t, e) {
    1 & t && (Ti(0, "small", 13), Bi(1, "E-mail obligatoire"), Oi())
  }

  function _m(t, e) {
    1 & t && (Ti(0, "small", 13), Bi(1, "E-mail invalide"), Oi())
  }

  function wm(t, e) {
    if (1 & t && (Ti(0, "div"), Ci(1, ym, 2, 0, "small", 12), Ci(2, _m, 2, 0, "small", 12), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Ai("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.required), Cr(1), Ai("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.email)
    }
  }

  function bm(t, e) {
    1 & t && (Ti(0, "small", 13), Bi(1, "Mot de passe obligatoire"), Oi())
  }

  function Cm(t, e) {
    if (1 & t && (Ti(0, "div"), Ci(1, bm, 2, 0, "small", 12), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Ai("ngIf", null == t.loginForm.get("password").errors ? null : t.loginForm.get("password").errors.required)
    }
  }
  const Sm = [{
    path: "",
    component: (() => {
      class t {
        constructor() {}
        ngOnInit() {}
      }
      return t.\u0275fac = function (e) {
        return new(e || t)
      }, t.\u0275cmp = he({
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
          1 & t && (Ti(0, "div", 0), Ti(1, "div", 1), Ti(2, "div", 2), Ii(3, "router-outlet"), Oi(), Oi(), Oi())
        },
        directives: [Sp],
        styles: [".authentication[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#5d6d00;color:#eceff1}.authentication[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.form-login[_ngcontent-%COMP%]{margin:3% auto;width:500px}"]
      }), t
    })(),
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
              email: ["", [pf.required, pf.email]],
              password: ["", pf.required]
            })
          }
          onSubmit() {
            this.authenticationService.login(this.loginForm.value).subscribe(t => {
              localStorage.setItem("token", t.token), this.router.navigate(["/administrator/dashboard"])
            }, t => {
              t instanceof Qu && 404 === t.status && (this.errorMessage = "E-mail ou mot de passe incorrect")
            })
          }
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(Si(mm), Si($p), Si(gp))
        }, t.\u0275cmp = he({
          type: t,
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
          template: function (t, e) {
            1 & t && (Ti(0, "div", 0), Ii(1, "img", 1), Oi(), Ci(2, vm, 2, 1, "div", 2), Ti(3, "form", 3), Ni("ngSubmit", (function () {
              return e.onSubmit()
            })), Ti(4, "div", 4), Ti(5, "label", 5), Bi(6, "Adresse e-mail :"), Oi(), Ii(7, "input", 6), Ci(8, wm, 3, 2, "div", 7), Oi(), Ti(9, "div", 4), Ti(10, "label", 8), Bi(11, "Mot de passe :"), Oi(), Ii(12, "input", 9), Ci(13, Cm, 2, 1, "div", 7), Oi(), Ti(14, "div", 4), Ti(15, "button", 10), Bi(16, " CONNEXION "), Oi(), Oi(), Oi()), 2 & t && (Cr(2), Ai("ngIf", e.errorMessage), Cr(1), Ai("formGroup", e.loginForm), Cr(4), Hi("is-invalid", e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Cr(1), Ai("ngIf", e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Cr(4), Hi("is-invalid", e.loginForm.get("password").invalid && e.loginForm.get("password").touched), Cr(1), Ai("ngIf", e.loginForm.get("password").invalid && e.loginForm.get("password").touched), Cr(2), Ai("disabled", !e.loginForm.valid))
          },
          directives: [Ql, em, lf, sm, Xp, af, hm],
          styles: ["h1[_ngcontent-%COMP%]{margin-bottom:20px}.button-login[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}.button-login[_ngcontent-%COMP%]{display:block;border-radius:0;border:none;background-color:#d4e157;color:#fff;width:100%;padding:10px 0;font-weight:700}"]
        }), t
      })()
    }]
  }];
  let xm = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Np.forRoot(Sm)], Np
      ]
    }), t
  })(), Em = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, dc, gm, xm]
      ]
    }), t
  })(), Am = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {
        this.getUser()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof Qu && 401 === t.status && this.authService.logoutUser()
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si($p))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-admins-main"]
      ],
      decls: 46,
      vars: 0,
      consts: [
        [1, "row"],
        [1, "col-md-2", "d-none", "d-md-block", "bg-green", "sidebar"],
        [1, "sidebar-sticky"],
        [1, "text-center"],
        ["src", "../../../assets/images/logo.png", "alt", "logo CSSS", 1, "logo"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLink", "/administrator/dashboard", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/banks", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/townhalls", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/associations", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/associations/households", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "users"],
        ["routerLink", "/administrator/associations/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/administrator/sensitization/sms", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "layers"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["href", "#", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["role", "main", 1, "col-md-9", "ml-sm-auto", "col-lg-10", "px-4"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "div", 0), Ti(1, "nav", 1), Ti(2, "div", 2), Ti(3, "div", 3), Ii(4, "img", 4), Oi(), Ti(5, "ul", 5), Ti(6, "li", 6), Ti(7, "a", 7), Bi(8, " Tableau de Bord "), Oi(), Oi(), Ti(9, "li", 6), Ti(10, "a", 8), Bi(11, " Banques "), Oi(), Oi(), Ti(12, "li", 6), Ti(13, "a", 9), Bi(14, " Municipalit\xe9 "), Oi(), Oi(), Ti(15, "li", 6), Ti(16, "a", 10), Bi(17, " AVEC "), Oi(), Oi(), Ti(18, "li", 6), Ti(19, "a", 11), Ii(20, "span", 12), Bi(21, " M\xe9nages "), Oi(), Oi(), Ti(22, "li", 6), Ti(23, "a", 13), Ii(24, "span", 14), Bi(25, " Appels d'offre "), Oi(), Oi(), Ti(26, "li", 6), Ti(27, "a", 15), Ii(28, "span", 16), Bi(29, " Sensibilisations "), Oi(), Oi(), Oi(), Ti(30, "h6", 17), Ti(31, "span"), Bi(32, "Param\xe8trages"), Oi(), Ti(33, "a", 18), Ii(34, "span", 19), Oi(), Oi(), Ti(35, "ul", 20), Ti(36, "li", 6), Ti(37, "a", 21), Ii(38, "span", 22), Bi(39, " Changer de mot de passe "), Oi(), Oi(), Ti(40, "li", 6), Ti(41, "a", 23), Ni("click", (function () {
          return e.authService.logoutUser()
        })), Ii(42, "span", 22), Bi(43, " Deconnexion "), Oi(), Oi(), Oi(), Oi(), Oi(), Ti(44, "main", 24), Ii(45, "router-outlet"), Oi(), Oi())
      },
      directives: [yp, wp, Sp],
      styles: [".logo[_ngcontent-%COMP%]{width:50%;margin-bottom:20px}"]
    }), t
  })(), km = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/townHalls/"
      }
      getTownhalls() {
        return this.http.get(this.baseUrl)
      }
      getTownhall(t) {
        return this.http.get(this.baseUrl + t)
      }
      setTownhall(t) {
        return this.http.post(this.baseUrl, t)
      }
      putTownhall(t) {
        return this.http.put(this.baseUrl, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Tm = (() => {
    class t {
      constructor(t) {
        this.http = t, this.url = "https://api.csss-ci.com/rest/v1/associations/"
      }
      gets() {
        return this.http.get(this.url)
      }
      getAssociation(t) {
        return this.http.get(this.url + t)
      }
      setAssociation(t) {
        return this.http.post(this.url, t)
      }
      putAssociation(t) {
        return this.http.put(this.url, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Om = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/households/"
      }
      getHouseHolds() {
        return this.http.get(this.baseUrl)
      }
      getHouseHold(t) {
        return this.http.get(this.baseUrl + t)
      }
      setHouseHold(t) {
        return this.http.post(this.baseUrl, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Im = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/suppliers/"
      }
      getSuppliers() {
        return this.http.get(this.baseUrl)
      }
      getSupplier(t) {
        return this.http.get(this.baseUrl + t)
      }
      setSupplier(t) {
        return this.http.post(this.baseUrl, t)
      }
      getDomains() {
        return this.http.get(this.baseUrl + "services")
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Rm = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/needs/"
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      put(t) {
        return this.http.put(this.baseUrl, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Pm(t, e) {
    if (1 & t && (Ti(0, "p", 17), Ti(1, "span"), Bi(2, "Salut, "), Ti(3, "b"), Bi(4), Oi(), Oi(), Ti(5, "span"), Bi(6, "Voici ce qui se passe avec votre entreprise aujourd'hui."), Oi(), Oi()), 2 & t) {
      const t = Di();
      Cr(4), Wi(t.user.name)
    }
  }

  function Nm(t, e) {
    if (1 & t && (Ti(0, "p", 5), Bi(1), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Wi(t.suppliers.length)
    }
  }

  function Vm(t, e) {
    1 & t && (Ti(0, "p", 5), Bi(1, "0"), Oi())
  }
  let Fm = (() => {
    class t {
      constructor(t, e, n, r, s, i, o) {
        this.authService = t, this.townhallsService = e, this.associationsService = n, this.householdsService = r, this.suppliersService = s, this.needsService = i, this.router = o
      }
      ngOnInit() {
        this.getUser(), this.getTownHalls(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof Qu && 401 === t.status && this.router.navigate(["/login"])
        })
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.townhalls = t)
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => this.associations = t)
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => this.households = t)
      }
      getSuppliers() {
        this.suppliersService.getSuppliers().subscribe(t => this.suppliers = t)
      }
      getNeeds() {
        this.needsService.gets().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si($p), Si(km), Si(Tm), Si(Om), Si(Im), Si(Rm), Si(gp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-admins-dashboard"]
      ],
      decls: 67,
      vars: 7,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "needs"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "col-lg-4"],
        [1, "big-title"],
        [1, "col-lg-5"],
        [1, "btn", "btn-success"],
        [1, "col-lg-4", "text-center"],
        [1, "big-title-green"],
        [1, "float-right", "btn", "btn-success"],
        [1, "connected"]
      ],
      template: function (t, e) {
        1 & t && (Ci(0, Pm, 7, 1, "p", 0), Ti(1, "section", 1), Ti(2, "div", 2), Ti(3, "div", 3), Ti(4, "p", 4), Bi(5, "Municipalit\xe9s"), Oi(), Ti(6, "p", 5), Bi(7), Oi(), Oi(), Oi(), Ti(8, "div", 2), Ti(9, "div", 3), Ti(10, "p", 4), Bi(11, "A.V.E.Cs"), Oi(), Ti(12, "p", 5), Bi(13), Oi(), Oi(), Oi(), Ti(14, "div", 2), Ti(15, "div", 3), Ti(16, "p", 4), Bi(17, "M\xe9nages"), Oi(), Ti(18, "p", 5), Bi(19), Oi(), Oi(), Oi(), Ti(20, "div", 2), Ti(21, "div", 3), Ti(22, "p", 4), Bi(23, "Fournisseurs"), Oi(), Ci(24, Nm, 2, 1, "p", 6), Ci(25, Vm, 2, 0, "p", 6), Oi(), Oi(), Oi(), Ti(26, "section", 7), Ti(27, "div", 8), Ti(28, "div", 9), Ti(29, "h2"), Bi(30, "Expressions des besoins"), Oi(), Ti(31, "div", 8), Ti(32, "div", 10), Ti(33, "p", 11), Bi(34), Ii(35, "br"), Bi(36, " Besoins exprim\xe9s "), Oi(), Oi(), Ti(37, "div", 12), Ti(38, "p"), Bi(39, " Besoins Trait\xe9s: 0"), Oi(), Ti(40, "p"), Bi(41, " Sans r\xe9actions: 0"), Oi(), Oi(), Ti(42, "div", 2), Ti(43, "a", 13), Bi(44, "Voir les besoins"), Oi(), Oi(), Oi(), Oi(), Ti(45, "div", 14), Ti(46, "p", 15), Bi(47, " 0 "), Ii(48, "br"), Bi(49, " Plaintes "), Oi(), Ti(50, "a"), Bi(51, "Voir toutes les plaintes"), Oi(), Oi(), Oi(), Oi(), Ti(52, "section", 7), Ti(53, "h2"), Bi(54, "Bilan financiers"), Oi(), Ti(55, "div", 8), Ti(56, "div", 10), Ti(57, "p"), Bi(58, " Besoins exprim\xe9s: 45"), Oi(), Oi(), Ti(59, "div", 10), Ti(60, "p"), Bi(61, " Besoins Trait\xe9s: 45"), Oi(), Oi(), Ti(62, "div", 10), Ti(63, "p"), Bi(64, " Nombre de plaintes: 86"), Oi(), Oi(), Oi(), Ti(65, "a", 16), Bi(66, "Voir les besoins"), Oi(), Oi()), 2 & t && (Ai("ngIf", e.user), Cr(7), Wi(e.townhalls.length), Cr(6), Wi(e.associations.length), Cr(6), Wi(e.households.length), Cr(5), Ai("ngIf", e.suppliers), Cr(1), Ai("ngIf", !e.suppliers), Cr(9), Zi("", e.needs.length, " "))
      },
      directives: [Ql],
      styles: [".enumeration[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin-bottom:40px}.enumeration[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;display:block;text-align:center;color:#827717;font-weight:600}.enumeration[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-family:Roboto Condensed,sans-serif;font-weight:600;font-size:21px;color:#000}.enumeration[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]{border:1px solid #e0e0e0;padding:20px}.title-sm[_ngcontent-%COMP%]{font-family:Roboto Condensed,sans-serif;display:block;text-align:center;color:#827717;font-weight:700}.needs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.connected[_ngcontent-%COMP%]{font-size:1.3rem;margin-bottom:40px}.connected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.bg-grey[_ngcontent-%COMP%]{border:1px solid #e0e0e0;font-size:2rem;font-family:Oswald,sans-serif;text-align:center;font-weight:700;padding:50px}.bg-grey[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:300;font-size:1rem}"]
    }), t
  })(), Dm = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/admins/"
      }
      setAdmin(t) {
        return this.http.post(this.baseUrl, t)
      }
      getAdmins() {
        return this.http.get(this.baseUrl)
      }
      getAdmin(t) {
        return this.http.get(this.baseUrl + t)
      }
      putAdmin(t) {
        return this.http.get(this.baseUrl + t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Mm = (() => {
    class t {
      constructor(t, e, n) {
        this.adminsService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.adminForm = this.fb.group({
          admin: ["", pf.required],
          email: ["", [pf.required, pf.email]]
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
      return new(e || t)(Si(Dm), Si(mm), Si(gp))
    }, t.\u0275cmp = he({
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
        1 & t && (Ti(0, "h1"), Bi(1, "Administrateur"), Oi(), Ii(2, "hr"), Ti(3, "div", 0), Ti(4, "h2"), Bi(5, "Ajouter Administrateur"), Oi(), Ti(6, "form", 1), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(7, "div", 2), Ti(8, "label", 3), Bi(9, "Nom et prenoms"), Oi(), Ii(10, "input", 4), Oi(), Ti(11, "div", 2), Ti(12, "label", 5), Bi(13, "Adresse e-mail"), Oi(), Ii(14, "input", 6), Oi(), Ti(15, "div", 2), Ti(16, "button", 7), Bi(17, "ENREGISTRER"), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(6), Ai("formGroup", e.adminForm), Cr(10), Ai("disabled", !e.adminForm.valid))
      },
      directives: [em, lf, sm, Xp, af, hm, pm],
      styles: [""]
    }), t
  })();

  function jm(t, e) {
    if (1 & t && (Ti(0, "div", 4), Bi(1), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Wi(t.errorMessage)
    }
  }

  function Um(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Bi(4), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.admin), Cr(2), Wi(t.email)
    }
  }
  let Lm = (() => {
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
      return new(e || t)(Si(Dm))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-admins-list"]
      ],
      decls: 16,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/add", 1, "btn", "btn-success", "float-right"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "alert", "alert-danger"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h1"), Bi(1, "Administrateur"), Oi(), Ii(2, "hr"), Ti(3, "h2"), Bi(4, "Liste des administrateurs "), Ti(5, "a", 0), Bi(6, "AJOUTER"), Oi(), Oi(), Ci(7, jm, 2, 1, "div", 1), Ti(8, "table", 2), Ti(9, "thead"), Ti(10, "th"), Bi(11, "Admin"), Oi(), Ti(12, "th"), Bi(13, "E-mail"), Oi(), Oi(), Ti(14, "tbody"), Ci(15, Um, 5, 2, "tr", 3), Oi(), Oi()), 2 & t && (Cr(7), Ai("ngIf", e.errorMessage), Cr(8), Ai("ngForOf", e.admins))
      },
      directives: [yp, Ql, Wl],
      styles: [""]
    }), t
  })();

  function Hm(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Ti(4, "a", 3), Bi(5, "voir detail"), Oi(), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.townHall), Cr(2), Mi("routerLink", "/administrator/townhalls/view/", t.idtownHall, "")
    }
  }
  let $m = (() => {
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
      return new(e || t)(Si(km))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhall-list"]
      ],
      decls: 7,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/townhalls/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Ti(1, "a", 0), Bi(2, "Ajouter"), Oi(), Bi(3), Oi(), Ti(4, "table", 1), Ti(5, "tbody"), Ci(6, Hm, 6, 2, "tr", 2), Oi(), Oi()), 2 & t && (Cr(3), Zi(" Liste des municipalit\xe9s (", e.towns.length, ")\n"), Cr(3), Ai("ngForOf", e.towns))
      },
      directives: [yp, Wl],
      styles: [""]
    }), t
  })(), qm = (() => {
    class t {
      constructor(t, e) {
        this.townService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.townForm = this.fb.group({
          townHall: ["", pf.required],
          officer: ["", pf.required],
          email: ["", [pf.required, pf.email]],
          phone: ["", pf.required]
        })
      }
      onSubmit() {
        this.townService.setTownhall(this.townForm.value).subscribe(t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(km), Si(mm))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhall-add"]
      ],
      decls: 28,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "townHall"],
        ["type", "text", "formControlName", "townHall", "id", "townHall", "aria-describedby", "townHallHelp", 1, "form-control"],
        ["id", "townHallHelp", 1, "form-text", "text-muted"],
        ["for", "officer"],
        ["type", "text", "formControlName", "officer", "id", "townHall", "aria-describedby", "officerHelper", 1, "form-control"],
        ["id", "officerHelp", 1, "form-text", "text-muted"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "id", "phone", "aria-describedby", "phoneHelp", 1, "form-control"],
        ["id", "phoneHelp", 1, "form-text", "text-muted"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", "aria-describedby", "emailHelp", 1, "form-control"],
        ["id", "emailHelp", 1, "form-text", "text-muted"],
        ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "div", 0), Ti(1, "form", 1), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(2, "div", 2), Ti(3, "label", 3), Bi(4, "Municipalit\xe9"), Oi(), Ii(5, "input", 4), Ti(6, "small", 5), Bi(7, "We'll never share your email with anyone else."), Oi(), Oi(), Ti(8, "div", 2), Ti(9, "label", 6), Bi(10, "Agent de mairie"), Oi(), Ii(11, "input", 7), Ti(12, "small", 8), Bi(13, "We'll never share your email with anyone else."), Oi(), Oi(), Ti(14, "div", 2), Ti(15, "label", 9), Bi(16, "T\xe9l\xe9phone"), Oi(), Ii(17, "input", 10), Ti(18, "small", 11), Bi(19, "We'll never share your email with anyone else."), Oi(), Oi(), Ti(20, "div", 2), Ti(21, "label", 12), Bi(22, "E-mail"), Oi(), Ii(23, "input", 13), Ti(24, "small", 14), Bi(25, "We'll never share your email with anyone else."), Oi(), Oi(), Ti(26, "button", 15), Bi(27, "Enr\xe9gistrer"), Oi(), Oi(), Oi()), 2 & t && (Cr(1), Ai("formGroup", e.townForm), Cr(25), Ai("disabled", !e.townForm.valid))
      },
      directives: [em, lf, sm, Xp, af, hm],
      styles: [""]
    }), t
  })(), zm = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhall-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Ti(0, "h1"), Bi(1, "Municipalit\xe9s"), Oi(), Ii(2, "router-outlet"))
      },
      directives: [Sp],
      styles: [""]
    }), t
  })();

  function Gm(t, e) {
    if (1 & t && (Ti(0, "div"), Ti(1, "h3"), Bi(2), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.townHall)
    }
  }
  let Bm = (() => {
    class t {
      constructor(t, e) {
        this.townhallsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.idTownHall = this.activatedRoute.snapshot.params.id, this.getTownHall(this.idTownHall)
      }
      getTownHall(t) {
        this.townhallsService.getTownhall(t).subscribe(t => this.townHall = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(km), Si(ld))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhall-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && Ci(0, Gm, 3, 1, "div", 0), 2 & t && Ai("ngForOf", e.townHall)
      },
      directives: [Wl],
      styles: [""]
    }), t
  })(), Wm = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sensitization-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Ti(0, "h1"), Bi(1, "Sensibilisations"), Oi(), Ii(2, "router-outlet"))
      },
      directives: [Sp],
      styles: [""]
    }), t
  })(), Zm = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Ii(0, "router-outlet")
      },
      directives: [Sp],
      styles: [""]
    }), t
  })(), Qm = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/sensitizations"
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      setAll(t) {
        return this.http.post(this.baseUrl + "/all", t)
      }
      setChiefs(t) {
        return this.http.post(this.baseUrl + "/chiefs", t)
      }
      setAssociation(t) {
        return this.http.post(this.baseUrl + "/association", t)
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Jm(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Bi(4), Oi(), Ti(5, "td"), Bi(6), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.message), Cr(2), Wi(t.recipient), Cr(2), Wi(t.messageDate)
    }
  }
  let Km = (() => {
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
      return new(e || t)(Si(Qm))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-list"]
      ],
      decls: 14,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms/send", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/association", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/everyone", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/chiefs", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Bi(1), Oi(), Ti(2, "div"), Ti(3, "a", 0), Bi(4, "Envoyer sms"), Oi(), Ti(5, "a", 1), Bi(6, "Envoyer sms une AVEC"), Oi(), Ti(7, "a", 2), Bi(8, "Envoyer sms \xe0 toutes les AVECs"), Oi(), Ti(9, "a", 3), Bi(10, "Envoyer SMS aux presidents d'AVEC"), Oi(), Oi(), Ti(11, "table", 4), Ti(12, "tbody"), Ci(13, Jm, 7, 3, "tr", 5), Oi(), Oi()), 2 & t && (Cr(1), Zi(" SMS envoy\xe9s (", e.messages.length, ")\n"), Cr(12), Ai("ngForOf", e.messages))
      },
      directives: [yp, Wl],
      styles: [""]
    }), t
  })();

  function Ym(t, e) {
    if (1 & t && (Ti(0, "div", 10), Bi(1), function (t, e) {
        const n = Ge();
        let r;
        n.firstCreatePass ? (r = function (t, e) {
          if (e)
            for (let n = e.length - 1; n >= 0; n--) {
              const t = e[n];
              if ("json" === t.name) return t
            }
          throw new Error("The pipe 'json' could not be found!")
        }(0, n.pipeRegistry), n.data[21] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(21, r.onDestroy)) : r = n.data[21];
        const s = r.factory || (r.factory = we(r.type)),
          i = Bt(Si),
          o = s();
        Bt(i),
          function (t, e, n, r) {
            21 >= t.data.length && (t.data[21] = null, t.blueprint[21] = null), e[21] = r
          }(n, ze(), 0, o)
      }(), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Wi(la(2, 1, t.errorMessage))
    }
  }

  function Xm(t, e) {
    if (1 & t && (Ti(0, "div", 11), Bi(1), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Wi(t.successMessage)
    }
  }
  let tg = (() => {
    class t {
      constructor(t, e) {
        this.messagesService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", pf.required],
          recipient: ["", [pf.required, pf.minLength(11)]]
        })
      }
      onSubmit() {
        this.messagesService.set(this.smsForm.value).subscribe(t => {
          this.successMessage = "Message envoy\xe9 avec succ\xe8s"
        }, t => {
          this.errorMessage = t
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Qm), Si(mm))
    }, t.\u0275cmp = he({
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
        ["type", "submit", 1, "button", 3, "disabled"],
        [1, "alert", "alert-danger"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Ti(1, "a", 0), Bi(2, "Retour"), Oi(), Bi(3, " Envoi de SMS\n"), Oi(), Ti(4, "div", 1), Ci(5, Ym, 3, 3, "div", 2), Ci(6, Xm, 2, 1, "div", 3), Ti(7, "form", 4), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(8, "div", 5), Ti(9, "label", 6), Bi(10, "Destinataires"), Oi(), Ii(11, "input", 7), Oi(), Ti(12, "div", 5), Ti(13, "label", 6), Bi(14, "Message"), Oi(), Ii(15, "textarea", 8), Oi(), Ti(16, "div", 5), Ti(17, "button", 9), Bi(18, "Envoyer"), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(5), Ai("ngIf", e.errorMessage), Cr(1), Ai("ngIf", e.successMessage), Cr(1), Ai("formGroup", e.smsForm), Cr(10), Ai("disabled", !e.smsForm.valid))
      },
      directives: [yp, Ql, em, lf, sm, Xp, af, hm],
      pipes: [Yl],
      styles: [""]
    }), t
  })(), eg = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", pf.required]
        })
      }
      onSubmit() {
        this.messagesService.setAll(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Qm), Si(mm), Si(gp))
    }, t.\u0275cmp = he({
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
        1 & t && (Ti(0, "h3"), Ti(1, "a", 0), Bi(2, "Retour"), Oi(), Bi(3, " Envoi de SMS \xe0 toutes les AVEC\n"), Oi(), Ti(4, "div", 1), Ti(5, "form", 2), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(6, "div", 3), Ti(7, "label", 4), Bi(8, "Message"), Oi(), Ii(9, "textarea", 5), Oi(), Ti(10, "div", 3), Ti(11, "button", 6), Bi(12, "Envoyer"), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(5), Ai("formGroup", e.smsForm), Cr(6), Ai("disabled", !e.smsForm.valid))
      },
      directives: [yp, em, lf, sm, Xp, af, hm],
      styles: [""]
    }), t
  })(), ng = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", pf.required]
        })
      }
      onSubmit() {
        this.messagesService.setChiefs(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Qm), Si(mm), Si(gp))
    }, t.\u0275cmp = he({
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
        1 & t && (Ti(0, "h3"), Ti(1, "a", 0), Bi(2, "Retour"), Oi(), Bi(3, " Envoi de SMS aux pr\xe9sidents d'AVEC\n"), Oi(), Ti(4, "div", 1), Ti(5, "form", 2), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(6, "div", 3), Ti(7, "label", 4), Bi(8, "Message"), Oi(), Ii(9, "textarea", 5), Oi(), Ti(10, "div", 3), Ti(11, "button", 6), Bi(12, "Envoyer"), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(5), Ai("formGroup", e.smsForm), Cr(6), Ai("disabled", !e.smsForm.valid))
      },
      directives: [yp, em, lf, sm, Xp, af, hm],
      styles: [""]
    }), t
  })();

  function rg(t, e) {
    if (1 & t && (Ti(0, "option", 10), Bi(1), Oi()), 2 & t) {
      const t = e.$implicit;
      Ai("value", t.idassociation), Cr(1), Wi(t.association)
    }
  }
  let sg = (() => {
    class t {
      constructor(t, e, n, r) {
        this.messagesService = t, this.associationsService = e, this.fb = n, this.router = r
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
          recipient: ["", pf.required],
          message: ["", pf.required]
        })
      }
      onSubmit() {
        this.messagesService.setAssociation(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Qm), Si(Tm), Si(mm), Si(gp))
    }, t.\u0275cmp = he({
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
        1 & t && (Ti(0, "h3"), Ti(1, "a", 0), Bi(2, "Retour"), Oi(), Bi(3, " Envoi de SMS \xe0 un AVEC\n"), Oi(), Ti(4, "div", 1), Ti(5, "form", 2), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(6, "div", 3), Ti(7, "label", 4), Bi(8, "AVEC"), Oi(), Ti(9, "select", 5), Ti(10, "option", 6), Bi(11, "Choisir"), Oi(), Ci(12, rg, 2, 2, "option", 7), Oi(), Oi(), Ti(13, "div", 3), Ti(14, "label", 4), Bi(15, "Message"), Oi(), Ii(16, "textarea", 8), Oi(), Ti(17, "div", 3), Ti(18, "button", 9), Bi(19, "Envoyer"), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(5), Ai("formGroup", e.smsForm), Cr(7), Ai("ngForOf", e.associations), Cr(6), Ai("disabled", !e.smsForm.valid))
      },
      directives: [yp, em, lf, sm, Rf, af, hm, Pf, Df, Wl, Xp],
      styles: [""]
    }), t
  })(), ig = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Ti(0, "h1"), Bi(1, "Associations"), Oi(), Ii(2, "router-outlet"))
      },
      directives: [Sp],
      styles: [""]
    }), t
  })();

  function og(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Bi(4), Oi(), Ti(5, "td"), Ti(6, "a", 3), Bi(7, "Voir detail"), Oi(), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.association), Cr(2), Wi(t.chief), Cr(2), Mi("routerLink", "/administrator/associations/view/", t.idassociation, "")
    }
  }
  let ag = (() => {
    class t {
      constructor(t) {
        this.associationsService = t
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
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Tm))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-list"]
      ],
      decls: 7,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/associations/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Bi(1), Ti(2, "a", 0), Bi(3, "Ajouter"), Oi(), Oi(), Ti(4, "table", 1), Ti(5, "tbody"), Ci(6, og, 8, 3, "tr", 2), Oi(), Oi()), 2 & t && (Cr(1), Zi(" Liste des associations (", e.associations.length, ") "), Cr(5), Ai("ngForOf", e.associations))
      },
      directives: [yp, Wl],
      styles: [""]
    }), t
  })();

  function lg(t, e) {
    if (1 & t && (Ti(0, "div", 16), Bi(1), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Wi(t.errorMessage)
    }
  }

  function ug(t, e) {
    1 & t && (Ti(0, "small", 18), Bi(1, "AVEC obligatoire"), Oi())
  }

  function cg(t, e) {
    if (1 & t && (Ti(0, "div"), Ci(1, ug, 2, 0, "small", 17), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Ai("ngIf", null == t.associationForm.get("association").errors ? null : t.associationForm.get("association").errors.required)
    }
  }

  function hg(t, e) {
    1 & t && (Ti(0, "small", 18), Bi(1, "Pr\xe9sident obligatoire"), Oi())
  }

  function dg(t, e) {
    if (1 & t && (Ti(0, "div"), Ci(1, hg, 2, 0, "small", 17), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Ai("ngIf", null == t.associationForm.get("chief").errors ? null : t.associationForm.get("chief").errors.required)
    }
  }

  function pg(t, e) {
    1 & t && (Ti(0, "small", 18), Bi(1, "E-mail obligatoire"), Oi())
  }

  function fg(t, e) {
    1 & t && (Ti(0, "small", 18), Bi(1, "E-mail invalide"), Oi())
  }

  function mg(t, e) {
    if (1 & t && (Ti(0, "div"), Ci(1, pg, 2, 0, "small", 17), Ci(2, fg, 2, 0, "small", 17), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Ai("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.required), Cr(1), Ai("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.email)
    }
  }

  function gg(t, e) {
    1 & t && (Ti(0, "small", 18), Bi(1, "T\xe9l\xe9phone obligatoire"), Oi())
  }

  function vg(t, e) {
    if (1 & t && (Ti(0, "div"), Ci(1, gg, 2, 0, "small", 17), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Ai("ngIf", null == t.associationForm.get("phone").errors ? null : t.associationForm.get("phone").errors.required)
    }
  }
  let yg = (() => {
    class t {
      constructor(t, e) {
        this.associationsService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.associationForm = this.fb.group({
          association: ["", pf.required],
          receipt: [""],
          chief: ["", pf.required],
          phone: ["", pf.required],
          email: ["", [pf.required, pf.email]]
        })
      }
      onSubmit() {
        this.associationsService.setAssociation(this.associationForm.value).subscribe(t => {}, t => {
          t instanceof Qu && (500 === t.status && (this.errorMessage = "Vous devriez \xeatre un agent de mairie"), 401 === t.status && (this.errorMessage = "Session invalide, veuillez vous connecter"))
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Tm), Si(mm))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-add"]
      ],
      decls: 32,
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
      template: function (t, e) {
        1 & t && (Ti(0, "div", 0), Ti(1, "h3"), Bi(2, "Ajouter une association"), Oi(), Ci(3, lg, 2, 1, "div", 1), Ti(4, "form", 2), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(5, "div", 3), Ti(6, "label", 4), Bi(7, "Nom d'AVEC :"), Oi(), Ii(8, "input", 5), Ci(9, cg, 2, 1, "div", 6), Oi(), Ti(10, "div", 3), Ti(11, "label", 7), Bi(12, "Pr\xe9sident d'AVEC :"), Oi(), Ii(13, "input", 8), Ci(14, dg, 2, 1, "div", 6), Oi(), Ti(15, "div", 3), Ti(16, "label", 9), Bi(17, "Num\xe9ro de r\xe9c\xe9piss\xe9 :"), Oi(), Ii(18, "input", 10), Oi(), Ti(19, "div", 3), Ti(20, "label", 11), Bi(21, "Adresse e-mail :"), Oi(), Ii(22, "input", 12), Ci(23, mg, 3, 2, "div", 6), Oi(), Ti(24, "div", 3), Ti(25, "label", 13), Bi(26, "T\xe9l\xe9phone :"), Oi(), Ii(27, "input", 14), Ci(28, vg, 2, 1, "div", 6), Oi(), Ti(29, "div", 3), Ti(30, "button", 15), Bi(31, " CONNEXION "), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(3), Ai("ngIf", e.errorMessage), Cr(1), Ai("formGroup", e.associationForm), Cr(4), Hi("is-invalid", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Cr(1), Ai("ngIf", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Cr(4), Hi("is-invalid", e.associationForm.get("chief").invalid && e.associationForm.get("chief").touched), Cr(1), Ai("ngIf", e.associationForm.get("chief").invalid && e.associationForm.get("chief").touched), Cr(4), Hi("is-invalid", e.associationForm.get("receipt").invalid && e.associationForm.get("receipt").touched), Cr(4), Hi("is-invalid", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Cr(1), Ai("ngIf", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Cr(4), Hi("is-invalid", e.associationForm.get("phone").invalid && e.associationForm.get("phone").touched), Cr(1), Ai("ngIf", e.associationForm.get("phone").invalid && e.associationForm.get("phone").touched), Cr(2), Ai("disabled", !e.associationForm.valid))
      },
      directives: [Ql, em, lf, sm, Xp, af, hm],
      styles: [""]
    }), t
  })(), _g = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-view"]
      ],
      decls: 2,
      vars: 0,
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Bi(1, "En d\xe9v\xe9loppement"), Oi())
      },
      styles: [""]
    }), t
  })(), wg = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Ii(0, "router-outlet")
      },
      directives: [Sp],
      styles: [""]
    }), t
  })();

  function bg(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Bi(4), Oi(), Ti(5, "td"), Bi(6), Oi(), Ti(7, "td"), Ti(8, "a", 3), Bi(9, "Voir detail"), Oi(), Ti(10, "a", 3), Bi(11, "Ajouter besoin"), Oi(), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.household), Cr(2), Wi(t.association), Cr(2), Wi(t.cellPhone), Cr(2), Mi("routerLink", "/administrator/associations/households/view/", t.idhousehold, ""), Cr(2), Mi("routerLink", "/administrator/associations/needs/add/", t.idhousehold, "")
    }
  }
  let Cg = (() => {
    class t {
      constructor(t) {
        this.householdsService = t
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => {
          this.households = t
        }, t => {})
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Om))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-list"]
      ],
      decls: 8,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/associations/households/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Bi(1), Ti(2, "a", 0), Bi(3, " Ajouter "), Oi(), Oi(), Ti(4, "table", 1), Ii(5, "thead"), Ti(6, "tbody"), Ci(7, bg, 12, 5, "tr", 2), Oi(), Oi()), 2 & t && (Cr(1), Zi(" Liste des M\xe9nages(", e.households.length, ") "), Cr(6), Ai("ngForOf", e.households))
      },
      directives: [yp, Wl],
      styles: [""]
    }), t
  })();

  function Sg(t, e) {
    if (1 & t && (Ti(0, "div", 16), Bi(1), Oi()), 2 & t) {
      const t = Di();
      Cr(1), Zi(" ", t.errorMessage, " ")
    }
  }
  let xg = (() => {
    class t {
      constructor(t, e, n) {
        this.householdsService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.houseForm = this.fb.group({
          household: ["", pf.required],
          familySize: ["", pf.required],
          owner: ["", pf.required],
          address: ["", pf.required],
          cellPhone: ["", pf.required],
          mail: ["", pf.required]
        })
      }
      onSubmit() {
        this.householdsService.setHouseHold(this.houseForm.value).subscribe(t => this.router.navigate(["/associations/households/"]), t => {
          t instanceof Qu && (500 === t.status && (this.errorMessage = "Vous devriez \xeatre president d'association"), 401 === t.status && (this.errorMessage = "Veuillez vous reconnecter"))
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Om), Si(mm), Si(gp))
    }, t.\u0275cmp = he({
      type: t,
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
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Bi(1, "Ajouter M\xe9nage"), Oi(), Ti(2, "div", 0), Ci(3, Sg, 2, 1, "div", 1), Ti(4, "form", 2), Ni("ngSubmit", (function () {
          return e.onSubmit()
        })), Ti(5, "div", 3), Ti(6, "label", 4), Bi(7, "Nom de la famille"), Oi(), Ii(8, "input", 5), Oi(), Ti(9, "div", 3), Ti(10, "label", 4), Bi(11, "Taille de la famille"), Oi(), Ii(12, "input", 6), Oi(), Ti(13, "div", 3), Ti(14, "label", 4), Bi(15, "Etes-vous propri\xe9taire ?"), Oi(), Ti(16, "select", 7), Ti(17, "option", 8), Bi(18, "Choisir"), Oi(), Ti(19, "option", 9), Bi(20, "Propri\xe9taire"), Oi(), Ti(21, "option", 9), Bi(22, "Locataire"), Oi(), Oi(), Oi(), Ti(23, "div", 3), Ti(24, "label", 4), Bi(25, "Lieu d'habitation"), Oi(), Ii(26, "input", 10), Oi(), Ti(27, "div", 3), Ti(28, "label", 11), Bi(29, "T\xe9l\xe9phone Mobile"), Oi(), Ii(30, "input", 12), Oi(), Ti(31, "div", 3), Ti(32, "label", 13), Bi(33, "E-mail"), Oi(), Ii(34, "input", 14), Oi(), Ti(35, "div", 3), Ti(36, "button", 15), Bi(37, "Enr\xe9gistrer"), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(3), Ai("ngIf", e.errorMessage), Cr(1), Ai("formGroup", e.houseForm), Cr(15), Ai("value", 1), Cr(2), Ai("value", 0), Cr(15), Ai("disabled", !e.houseForm.valid))
      },
      directives: [Ql, em, lf, sm, Xp, af, hm, wf, Rf, Pf, Df],
      styles: [""]
    }), t
  })(), Eg = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-view"]
      ],
      decls: 2,
      vars: 0,
      template: function (t, e) {
        1 & t && (Ti(0, "p"), Bi(1, "households-view works!"), Oi())
      },
      styles: [""]
    }), t
  })(), Ag = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Ii(0, "router-outlet")
      },
      directives: [Sp],
      styles: [""]
    }), t
  })();

  function kg(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Bi(4), Oi(), Ti(5, "td"), Bi(6), Oi(), Ti(7, "td"), Ti(8, "a", 3), Bi(9, "voir detail"), Oi(), Oi(), Oi()), 2 & t) {
      const t = e.$implicit,
        n = Di();
      Cr(2), Wi(t.need), Cr(2), Wi(n.getStatus(t.status)), Cr(2), Wi(t.needDate), Cr(2), Mi("routerLink", "/administrator/associations/needs/view/", t.idneed, "")
    }
  }
  let Tg = (() => {
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
      return new(e || t)(Si(Rm))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-list"]
      ],
      decls: 7,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/associations/needs/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h3"), Bi(1), Ti(2, "a", 0), Bi(3, "Ajouter"), Oi(), Oi(), Ti(4, "table", 1), Ti(5, "tbody"), Ci(6, kg, 10, 4, "tr", 2), Oi(), Oi()), 2 & t && (Cr(1), Zi(" Liste des besoins (", e.needs.length, ") "), Cr(5), Ai("ngForOf", e.needs))
      },
      directives: [yp, Wl],
      styles: [""]
    }), t
  })();

  function Og(t, e) {
    if (1 & t) {
      const t = ze();
      Ti(0, "div", 1), Ti(1, "h3"), Bi(2), Oi(), Ti(3, "form", 2), Ni("ngSubmit", (function () {
        return $e.lFrame.contextLView = t, Di().onSubmit()
      })), Ti(4, "div", 3), Ti(5, "label", 4), Bi(6, "Titre de besoin"), Oi(), Ii(7, "input", 5), Oi(), Ti(8, "div", 3), Ti(9, "label", 6), Bi(10, "Description"), Oi(), Ii(11, "textarea", 7), Oi(), Ti(12, "div", 3), Ti(13, "button", 8), Bi(14, "Enr\xe9gistrer"), Oi(), Oi(), Oi(), Oi()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Di();
      Cr(2), Wi(t.household), Cr(1), Ai("formGroup", n.needForm), Cr(10), Ai("disabled", !n.needForm.valid)
    }
  }
  let Ig = (() => {
    class t {
      constructor(t, e, n, r) {
        this.needsService = t, this.householdsService = e, this.fb = n, this.activatedRoute = r
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
          householdId: [this.householdId, pf.required],
          need: ["", pf.required],
          description: ["", pf.required]
        })
      }
      onSubmit() {
        this.needsService.set(this.needForm.value).subscribe(t => {
          console.log(t)
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Rm), Si(Om), Si(mm), Si(ld))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-add"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "col-lg-8", 4, "ngFor", "ngForOf"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "need"],
        ["type", "text", "formControlName", "need", "name", "need", 1, "form-control"],
        ["for", "description"],
        ["formControlName", "description", "name", "description", "id", "description", "cols", "30", "rows", "10", 1, "form-control"],
        ["type", "submit", 1, "button", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && Ci(0, Og, 15, 3, "div", 0), 2 & t && Ai("ngForOf", e.household)
      },
      directives: [Wl, em, lf, sm, Xp, af, hm],
      styles: [""]
    }), t
  })();

  function Rg(t, e) {
    if (1 & t && (Ti(0, "div"), Ti(1, "div", 2), Ti(2, "div", 3), Ti(3, "h4"), Bi(4, "Appel d'offre"), Oi(), Oi(), Ti(5, "div", 3), Ti(6, "h4"), Bi(7, "Description du besoin"), Oi(), Oi(), Ti(8, "div", 3), Ti(9, "h4"), Bi(10, "M\xe9nage"), Oi(), Oi(), Oi(), Ii(11, "hr"), Ti(12, "div", 2), Ti(13, "div", 3), Bi(14), Oi(), Ti(15, "div", 3), Bi(16), Oi(), Ti(17, "div", 3), Bi(18), Oi(), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(14), Zi(" ", t.need, " "), Cr(2), Zi(" ", t.description, " "), Cr(2), Zi(" ", t.household, " ")
    }
  }
  let Pg = (() => {
    class t {
      constructor(t, e) {
        this.needsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.idNeed = this.activatedRoute.snapshot.params.id, this.getNeed(this.idNeed)
      }
      getNeed(t) {
        this.needsService.get(t).subscribe(t => {
          this.need = t
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Si(Rm), Si(ld))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-view"]
      ],
      decls: 5,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "bg-grey"],
        [1, "row"],
        [1, "col-lg-4"]
      ],
      template: function (t, e) {
        1 & t && (Ti(0, "h1"), Bi(1, "Appel d'offres"), Oi(), Ci(2, Rg, 19, 3, "div", 0), Ti(3, "div", 1), Bi(4, "OFFRES DES FOURNISSEURs"), Oi()), 2 & t && (Cr(2), Ai("ngForOf", e.need))
      },
      directives: [Wl],
      styles: [""]
    }), t
  })(), Ng = (() => {
    class t {
      constructor(t, e) {
        this.authService = t, this.router = e
      }
      canActivate(t, e) {
        return !!this.authService.loggedIn() || (this.router.navigate(["/login"]), !1)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt($p), Zt(gp))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Vg = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-banks-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Ti(0, "h1"), Bi(1, "Banques"), Oi(), Ii(2, "router-outlet"))
      },
      directives: [Sp],
      styles: [""]
    }), t
  })(), Fg = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/banks/"
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      put(t) {
        return this.http.put(this.baseUrl, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Ku))
    }, t.\u0275prov = ct({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Dg(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Ti(4, "a", 3), Bi(5, "Voir detail"), Oi(), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.bank)
    }
  }
  const Mg = [{
    path: "administrator",
    component: Am,
    canActivate: [Ng],
    children: [{
      path: "dashboard",
      component: Fm
    }, {
      path: "add",
      component: Mm
    }, {
      path: "list",
      component: Lm
    }, {
      path: "banks",
      component: Vg,
      children: [{
        path: "",
        component: (() => {
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
            return new(e || t)(Si(Fg))
          }, t.\u0275cmp = he({
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
              1 & t && (Ti(0, "h3"), Bi(1, " Liste des banques "), Ti(2, "a", 0), Bi(3, "Ajouter"), Oi(), Oi(), Ti(4, "table", 1), Ti(5, "tbody"), Ci(6, Dg, 6, 1, "tr", 2), Oi(), Oi()), 2 & t && (Cr(6), Ai("ngForOf", e.banks))
            },
            directives: [yp, Wl],
            styles: [""]
          }), t
        })()
      }, {
        path: "add",
        component: (() => {
          class t {
            constructor(t, e, n) {
              this.banksService = t, this.fb = e, this.router = n
            }
            ngOnInit() {
              this.createForm()
            }
            createForm() {
              this.bankForm = this.fb.group({
                bank: ["", pf.required],
                banker: ["", pf.required],
                email: ["", [pf.required, pf.email]],
                phone: ["", pf.required]
              })
            }
            onSubmit() {
              this.banksService.set(this.bankForm.value).subscribe(t => this.router.navigate(["/administrator/banks"]))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Si(Fg), Si(mm), Si(gp))
          }, t.\u0275cmp = he({
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
              1 & t && (Ti(0, "h3"), Bi(1, "Ajouter une banque"), Oi(), Ti(2, "div", 0), Ti(3, "form", 1), Ni("ngSubmit", (function () {
                return e.onSubmit()
              })), Ti(4, "div", 2), Ti(5, "label", 3), Bi(6, "Banque"), Oi(), Ii(7, "input", 4), Oi(), Ti(8, "div", 2), Ti(9, "label", 5), Bi(10, "Agent de banque"), Oi(), Ii(11, "input", 6), Oi(), Ti(12, "div", 2), Ti(13, "label", 7), Bi(14, "T\xe9l\xe9phone"), Oi(), Ii(15, "input", 8), Oi(), Ti(16, "div", 2), Ti(17, "label", 9), Bi(18, "E-mail"), Oi(), Ii(19, "input", 10), Oi(), Ti(20, "div", 2), Ti(21, "button", 11), Bi(22, " Enr\xe9gistrer "), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(3), Ai("formGroup", e.bankForm), Cr(18), Ai("disabled", !e.bankForm.valid))
            },
            directives: [em, lf, sm, Xp, af, hm],
            styles: [""]
          }), t
        })()
      }]
    }, {
      path: "townhalls",
      component: zm,
      children: [{
        path: "",
        component: $m
      }, {
        path: "add",
        component: qm
      }, {
        path: "view/:id",
        component: Bm
      }]
    }, {
      path: "sensitization",
      component: Wm,
      children: [{
        path: "sms",
        component: Zm,
        children: [{
          path: "",
          component: Km
        }, {
          path: "send",
          component: tg
        }, {
          path: "chiefs",
          component: ng
        }, {
          path: "association",
          component: sg
        }, {
          path: "everyone",
          component: eg
        }]
      }]
    }, {
      path: "associations",
      component: ig,
      children: [{
        path: "",
        component: ag
      }, {
        path: "add",
        component: yg
      }, {
        path: "view/:id",
        component: _g
      }, {
        path: "households",
        component: wg,
        children: [{
          path: "",
          component: Cg
        }, {
          path: "add",
          component: xg
        }, {
          path: "view",
          component: Eg
        }]
      }, {
        path: "needs",
        component: Ag,
        children: [{
          path: "",
          component: Tg
        }, {
          path: "add/:id",
          component: Ig
        }, {
          path: "view/:id",
          component: Pg
        }]
      }]
    }]
  }];
  let jg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Np.forRoot(Mg)], Np
      ]
    }), t
  })(), Ug = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, gm, dc]
      ]
    }), t
  })();
  const Lg = [{
    path: "sensitization",
    component: Wm,
    canActivate: [Ng],
    children: [{
      path: "sms",
      component: Zm,
      children: [{
        path: "",
        component: Km
      }, {
        path: "send",
        component: tg
      }, {
        path: "everyone",
        component: eg
      }]
    }]
  }];
  let Hg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Np.forRoot(Lg)], Np
      ]
    }), t
  })(), $g = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, dc, gm]
      ]
    }), t
  })(), qg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, dc, gm, $g, Hg]
      ]
    }), t
  })(), zg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, gm, dc, jg, Ug, qg]
      ]
    }), t
  })(), Gg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl]
      ]
    }), t
  })();
  const Bg = [{
    path: "associations",
    component: ig,
    canActivate: [Ng],
    children: [{
      path: "",
      component: ag
    }, {
      path: "add",
      component: yg
    }, {
      path: "view",
      component: _g
    }, {
      path: "households",
      component: wg,
      children: [{
        path: "",
        component: Cg
      }, {
        path: "add",
        component: xg
      }, {
        path: "view",
        component: Eg
      }]
    }, {
      path: "needs",
      component: Ag,
      children: [{
        path: "",
        component: Tg
      }, {
        path: "add/:id",
        component: Ig
      }, {
        path: "view/:id",
        component: Pg
      }]
    }]
  }];
  let Wg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Np.forRoot(Bg)], Np
      ]
    }), t
  })(), Zg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, gm, dc]
      ]
    }), t
  })(), Qg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, dc, gm]
      ]
    }), t
  })(), Jg = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, gm, dc, Wg, Zg, Qg]
      ]
    }), t
  })();

  function Kg(t, e) {
    if (1 & t && (Ti(0, "tr"), Ti(1, "td"), Bi(2), Oi(), Ti(3, "td"), Bi(4), Oi(), Ti(5, "td"), Bi(6), Oi(), Ti(7, "td"), Ti(8, "a", 2), Bi(9, "Voir detail"), Oi(), Oi(), Oi()), 2 & t) {
      const t = e.$implicit;
      Cr(2), Wi(t.supplier), Cr(2), Wi(t.service), Cr(2), Wi(t.phone), Cr(2), Mi("routerLink", "/suppliers/view/", t.idsupplier, "")
    }
  }

  function Yg(t, e) {
    if (1 & t && (Ti(0, "option", 22), Bi(1), Oi()), 2 & t) {
      const t = e.$implicit;
      Ai("value", t.idservice), Cr(1), Wi(t.service)
    }
  }
  const Xg = [{
    path: "suppliers",
    component: (() => {
      class t {
        constructor() {}
        ngOnInit() {}
      }
      return t.\u0275fac = function (e) {
        return new(e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [
          ["app-suppliers-main"]
        ],
        decls: 1,
        vars: 0,
        template: function (t, e) {
          1 & t && Ii(0, "router-outlet")
        },
        directives: [Sp],
        styles: [""]
      }), t
    })(),
    canActivate: [Ng],
    children: [{
      path: "",
      component: (() => {
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
          return new(e || t)(Si(Im))
        }, t.\u0275cmp = he({
          type: t,
          selectors: [
            ["app-suppliers-list"]
          ],
          decls: 6,
          vars: 1,
          consts: [
            [1, "table"],
            [4, "ngFor", "ngForOf"],
            [3, "routerLink"]
          ],
          template: function (t, e) {
            1 & t && (Ti(0, "h1"), Bi(1, "Fournisseurs"), Oi(), Ti(2, "table", 0), Ii(3, "thead"), Ti(4, "tbody"), Ci(5, Kg, 10, 4, "tr", 1), Oi(), Oi()), 2 & t && (Cr(5), Ai("ngForOf", e.suppliers))
          },
          directives: [Wl, yp],
          styles: [""]
        }), t
      })()
    }, {
      path: "add",
      component: (() => {
        class t {
          constructor(t, e) {
            this.suppliersService = t, this.fb = e
          }
          ngOnInit() {
            this.getDomains(), this.createForm()
          }
          getDomains() {
            this.suppliersService.getDomains().subscribe(t => {
              this.services = t
            }, t => {
              console.log(t)
            })
          }
          createForm() {
            this.supplierForm = this.fb.group({
              townHallId: ["", pf.required],
              serviceId: ["", pf.required],
              supplier: ["", pf.required],
              legalForm: ["", pf.required],
              tradeRegister: ["", pf.required],
              taxpayer: ["", pf.required],
              address: ["", pf.required],
              phone: ["", pf.required],
              email: ["", [pf.required, pf.email]]
            })
          }
          onSubmit() {
            this.suppliersService.setSupplier(this.supplierForm.value).subscribe(t => {
              console.log(t)
            }, t => {})
          }
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(Si(Im), Si(mm))
        }, t.\u0275cmp = he({
          type: t,
          selectors: [
            ["app-suppliers-add"]
          ],
          decls: 42,
          vars: 3,
          consts: [
            [1, "col-lg-8"],
            [3, "formGroup", "ngSubmit"],
            [1, "form-group"],
            ["for", "supplier"],
            ["type", "text", "formControlName", "supplier", "name", "supplier", 1, "form-control"],
            ["for", "legalForm"],
            ["type", "text", "formControlName", "legalForm", "name", "legalForm", 1, "form-control"],
            ["for", "serviceId"],
            ["name", "serviceId", "id", "serviceId", "formControlName", "serviceId", 1, "form-control"],
            ["value", ""],
            [3, "value", 4, "ngFor", "ngForOf"],
            ["for", "tradeRegister"],
            ["type", "text", "formControlName", "tradeRegister", "name", "tradeRegister", 1, "form-control"],
            ["for", "taxpayer"],
            ["type", "text", "formControlName", "taxpayer", "name", "taxpayer", 1, "form-control"],
            ["for", "phone"],
            ["type", "tel", "formControlName", "phone", "name", "phone", 1, "form-control"],
            ["for", "mail"],
            ["type", "email", "formControlName", "email", "name", "email", 1, "form-control"],
            ["for", "address"],
            ["type", "text", "formControlName", "address", "name", "address", 1, "form-control"],
            ["type", "submit", 1, "button", 3, "disabled"],
            [3, "value"]
          ],
          template: function (t, e) {
            1 & t && (Ti(0, "div", 0), Ti(1, "h1"), Bi(2, "Ajouter Fournisseur"), Oi(), Ti(3, "form", 1), Ni("ngSubmit", (function () {
              return e.onSubmit()
            })), Ti(4, "div", 2), Ti(5, "label", 3), Bi(6, "Nom du fournisseur"), Oi(), Ii(7, "input", 4), Oi(), Ti(8, "div", 2), Ti(9, "label", 5), Bi(10, "Forme Juridique"), Oi(), Ii(11, "input", 6), Oi(), Ti(12, "div", 2), Ti(13, "label", 7), Bi(14, "Service"), Oi(), Ti(15, "select", 8), Ti(16, "option", 9), Bi(17, "Choisir"), Oi(), Ci(18, Yg, 2, 2, "option", 10), Oi(), Oi(), Ti(19, "div", 2), Ti(20, "label", 11), Bi(21, "R\xe9gistre de commerce"), Oi(), Ii(22, "input", 12), Oi(), Ti(23, "div", 2), Ti(24, "label", 13), Bi(25, "Num\xe9ro contribuable"), Oi(), Ii(26, "input", 14), Oi(), Ti(27, "div", 2), Ti(28, "label", 15), Bi(29, "T\xe9l\xe9phone"), Oi(), Ii(30, "input", 16), Oi(), Ti(31, "div", 2), Ti(32, "label", 17), Bi(33, "E-mail"), Oi(), Ii(34, "input", 18), Oi(), Ti(35, "div", 2), Ti(36, "label", 19), Bi(37, "Adresse"), Oi(), Ii(38, "input", 20), Oi(), Ti(39, "div", 2), Ti(40, "button", 21), Bi(41, "Enr\xe9gistrer"), Oi(), Oi(), Oi(), Oi()), 2 & t && (Cr(3), Ai("formGroup", e.supplierForm), Cr(15), Ai("ngForOf", e.services), Cr(22), Ai("disabled", !e.supplierForm.valid))
          },
          directives: [em, lf, sm, Xp, af, hm, Rf, Pf, Df, Wl],
          styles: [""]
        }), t
      })()
    }, {
      path: "view",
      component: (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return t.\u0275fac = function (e) {
          return new(e || t)
        }, t.\u0275cmp = he({
          type: t,
          selectors: [
            ["app-suppliers-view"]
          ],
          decls: 2,
          vars: 0,
          template: function (t, e) {
            1 & t && (Ti(0, "p"), Bi(1, "suppliers-view works!"), Oi())
          },
          styles: [""]
        }), t
      })()
    }]
  }];
  let tv = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Np.forRoot(Xg)], Np
      ]
    }), t
  })(), ev = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, gm, dc, tv]
      ]
    }), t
  })(), nv = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Xl, Np, dc, gm]
      ]
    }), t
  })(), rv = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t,
      bootstrap: [Bp]
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      providers: [{
        provide: Xu,
        useClass: qp,
        multi: !0
      }, $p, km, Tm, Om, Im, Rm, Qm, Fg, Ng],
      imports: [
        [Ou, Gp, Em, zg, Gg, Jg, ev, qg, nv]
      ]
    }), t
  })();
  (function () {
    if (nr) throw new Error("Cannot enable prod mode after platform setup.");
    er = !1
  })(), ku().bootstrapModule(rv).catch(t => console.error(t))
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