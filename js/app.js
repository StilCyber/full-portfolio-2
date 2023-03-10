(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            a = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (t) {
              return e({}, r, t);
            },
            o = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            u = "sizes",
            p = "poster",
            f = "llOriginalAttrs",
            m = "data",
            h = "loading",
            g = "loaded",
            v = "applied",
            w = "error",
            b = "native",
            S = "data-",
            T = "ll-status",
            E = function (e, t) {
              return e.getAttribute(S + t);
            },
            y = function (e) {
              return E(e, T);
            },
            x = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            C = function (e) {
              return x(e, null);
            },
            L = function (e) {
              return null === y(e);
            },
            M = function (e) {
              return y(e) === b;
            },
            _ = [h, g, v, w],
            k = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            P = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            A = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            G = function (e, t) {
              e && (e.toLoadCount = t);
            },
            B = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            $ = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && B(s).forEach(t);
            },
            D = function (e, t) {
              B(e).forEach(t);
            },
            V = [d],
            H = [d, p],
            N = [d, c, u],
            F = [m],
            R = function (e) {
              return !!e[f];
            },
            q = function (e) {
              return e[f];
            },
            j = function (e) {
              return delete e[f];
            },
            W = function (e, t) {
              if (!R(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[f] = s);
              }
            },
            Y = function (e, t) {
              if (R(e)) {
                var s = q(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              P(e, t.class_applied),
                x(e, v),
                s &&
                  (t.unobserve_completed && O(e, t),
                  k(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              P(e, t.class_loading),
                x(e, h),
                s && (z(s, 1), k(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            J = function (e, t) {
              K(e, u, E(e, t.data_sizes)),
                K(e, c, E(e, t.data_srcset)),
                K(e, d, E(e, t.data_src));
            },
            Q = {
              IMG: function (e, t) {
                $(e, function (e) {
                  W(e, N), J(e, t);
                }),
                  W(e, N),
                  J(e, t);
              },
              IFRAME: function (e, t) {
                W(e, V), K(e, d, E(e, t.data_src));
              },
              VIDEO: function (e, t) {
                D(e, function (e) {
                  W(e, V), K(e, d, E(e, t.data_src));
                }),
                  W(e, H),
                  K(e, p, E(e, t.data_poster)),
                  K(e, d, E(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                W(e, F), K(e, m, E(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                k(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            ae = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                A(e, t.class_loading),
                t.unobserve_completed && O(e, s);
            },
            re = function (e, t, s) {
              var i = I(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = M(t);
                      ae(t, s, i),
                        P(t, s.class_loaded),
                        x(t, g),
                        k(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = M(t);
                      ae(t, s, i),
                        P(t, s.class_error),
                        x(t, w),
                        k(s.callback_error, t, i),
                        s.restore_on_error && Y(t, N),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  }
                );
            },
            le = function (e, t, s) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      re(e, t, s),
                      (function (e) {
                        R(e) ||
                          (e[f] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg),
                          n = E(e, t.data_bg_hidpi),
                          r = a && n ? n : i;
                        r &&
                          ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                          I(e).setAttribute(d, r),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_multi),
                          n = E(e, t.data_bg_multi_hidpi),
                          r = a && n ? n : i;
                        r && ((e.style.backgroundImage = r), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            a = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = a.join()),
                            "" === e.style.backgroundImage &&
                              ((a = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = a.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    re(e, t, s),
                      (function (e, t, s) {
                        var i = Q[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(u);
            },
            de = function (e) {
              $(e, function (e) {
                Y(e, N);
              }),
                Y(e, N);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                Y(e, V);
              },
              VIDEO: function (e) {
                D(e, function (e) {
                  Y(e, V);
                }),
                  Y(e, H),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, F);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (R(e)) {
                        var t = q(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    M(e) ||
                    (A(e, t.class_entered),
                    A(e, t.class_exited),
                    A(e, t.class_applied),
                    A(e, t.class_loading),
                    A(e, t.class_loaded),
                    A(e, t.class_error));
                })(e, t),
                C(e),
                j(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            fe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            me = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return _.indexOf(y(e)) >= 0;
                      })(e);
                      x(e, "entered"),
                        P(e, s.class_entered),
                        A(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && O(e, s);
                        })(e, s, i),
                        k(s.callback_enter, e, t, i),
                        n || le(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      L(e) ||
                        (P(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return y(e) === h;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              $(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            de(e),
                            A(e, s.class_loading),
                            z(i, -1),
                            C(e),
                            k(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        k(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return y(e) === w;
              })(e);
            },
            we = function (e, t) {
              return (function (e) {
                return he(e).filter(L);
              })(e || ge(t));
            },
            be = function (e, s) {
              var n = l(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !fe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        me(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), he(s).filter(ve)).forEach(function (t) {
                          A(t, e.class_error), C(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  n,
                  a = this._settings,
                  r = we(e, a);
                G(this, r.length),
                  !s && i
                    ? fe(a)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  re(e, t, s),
                                  (function (e, t) {
                                    var s = Q[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  x(e, b);
                              })(e, t, s);
                          }),
                            G(s, 0);
                        })(r, a, this)
                      : ((n = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                we(e, s).forEach(function (e) {
                  O(e, t), le(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = l(t);
              le(e, s);
            }),
            (be.resetStatus = function (e) {
              C(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) o(e, s);
                  else o(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    let e = !0,
      t = (e = 500) => {
        document.documentElement.classList.contains("lock") ? i(e) : n(e);
      },
      i = (t = 500) => {
        let s = document.querySelector("body");
        if (e) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (s.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      },
      n = (t = 500) => {
        let s = document.querySelector("body");
        if (e) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (s.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      };
    if (document.querySelectorAll("_anim-items").length > 0) {
      function oe(e) {
        for (let e = 0; e < animItems.lenght; e++) {
          const t = animItems[e],
            s = (t.offsetHeight, de(t).top),
            i = 4;
          let n = window.innerHeight - animItemHeight / i;
          animItemHeight > window.innerHeight &&
            (n = window.innerHeight - window.innerHeight / i),
            pageYOffset > s - n && pageYOffset < s + animItemHeight
              ? s.classList.add("_active")
              : animItem.classList.contains("_anim-no-hide") ||
                animItem.classList.remove("_active");
        }
      }
      function de(e) {
        const t = e.getBoundingClientRect(),
          s = window.pageXOffset || document.documentElement.scrollLeft,
          i = window.pageYOffset || document.documentElement.scrollTop;
        return { top: t.top + i, left: t.left + s };
      }
      window.addEventListener("scroll", oe),
        setTimeout(() => {
          oe();
        }, 300);
    }
    function a(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function r(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s]);
      });
    }
    const l = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function o() {
      const e = "undefined" != typeof document ? document : {};
      return r(e, l), e;
    }
    const d = {
      document: l,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function c() {
      const e = "undefined" != typeof window ? window : {};
      return r(e, d), e;
    }
    function u(e, t = 0) {
      return setTimeout(e, t);
    }
    function p() {
      return Date.now();
    }
    function f(e, t = "x") {
      const s = c();
      let i, n, a;
      const r = (function (e) {
        const t = c();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = r.transform || r.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((a =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = a.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function m(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function h(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const a = e[n];
        if (
          null != a &&
          ((i = a),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(a, i);
            void 0 !== n &&
              n.enumerable &&
              (m(t[i]) && m(a[i])
                ? a[i].__swiper__
                  ? (t[i] = a[i])
                  : h(t[i], a[i])
                : !m(t[i]) && m(a[i])
                ? ((t[i] = {}), a[i].__swiper__ ? (t[i] = a[i]) : h(t[i], a[i]))
                : (t[i] = a[i]));
          }
        }
      }
      var i;
      return t;
    }
    function g(e, t, s) {
      e.style.setProperty(t, s);
    }
    function v({ swiper: e, targetPosition: t, side: s }) {
      const i = c(),
        n = -e.translate;
      let a,
        r = null;
      const l = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const o = t > n ? "next" : "prev",
        d = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
        u = () => {
          (a = new Date().getTime()), null === r && (r = a);
          const o = Math.max(Math.min((a - r) / l, 1), 0),
            c = 0.5 - Math.cos(o * Math.PI) / 2;
          let p = n + c * (t - n);
          if ((d(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), d(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: p });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    function w(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function b(e, t = []) {
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function S(e, t) {
      return c().getComputedStyle(e, null).getPropertyValue(t);
    }
    function T(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function E(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function y(e, t, s) {
      const i = c();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let x, C, L;
    function M() {
      return (
        x ||
          (x = (function () {
            const e = c(),
              t = o();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        x
      );
    }
    function _(e = {}) {
      return (
        C ||
          (C = (function ({ userAgent: e } = {}) {
            const t = M(),
              s = c(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              a = { ios: !1, android: !1 },
              r = s.screen.width,
              l = s.screen.height,
              o = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === i;
            let m = "MacIntel" === i;
            return (
              !d &&
                m &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${l}`) >= 0 &&
                ((d = n.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (m = !1)),
              o && !f && ((a.os = "android"), (a.android = !0)),
              (d || p || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        C
      );
    }
    function k() {
      return (
        L ||
          (L = (function () {
            const e = c();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        L
      );
    }
    const P = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n(...s) {
          i.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(i, s);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, i, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
          : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
          i.unshift(n);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          t
        );
      },
    };
    const A = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(S(i, "padding-left") || 0, 10) -
              parseInt(S(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(S(i, "padding-top") || 0, 10) -
              parseInt(S(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: n,
            slidesEl: a,
            size: r,
            rtlTranslate: l,
            wrongRTL: o,
          } = e,
          d = e.virtual && i.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          u = w(a, `.${e.params.slideClass}, swiper-slide`),
          p = d ? e.virtual.slides.length : u.length;
        let f = [];
        const m = [],
          h = [];
        let v = i.slidesOffsetBefore;
        "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
        let b = i.slidesOffsetAfter;
        "function" == typeof b && (b = i.slidesOffsetAfter.call(e));
        const T = e.snapGrid.length,
          E = e.slidesGrid.length;
        let x = i.spaceBetween,
          C = -v,
          L = 0,
          M = 0;
        if (void 0 === r) return;
        "string" == typeof x &&
          x.indexOf("%") >= 0 &&
          (x = (parseFloat(x.replace("%", "")) / 100) * r),
          (e.virtualSize = -x),
          u.forEach((e) => {
            l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (g(n, "--swiper-centered-offset-before", ""),
            g(n, "--swiper-centered-offset-after", ""));
        const _ = i.grid && i.grid.rows > 1 && e.grid;
        let k;
        _ && e.grid.initSlides(p);
        const P =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < p; n += 1) {
          let a;
          if (
            ((k = 0),
            u[n] && (a = u[n]),
            _ && e.grid.updateSlide(n, a, p, t),
            !u[n] || "none" !== S(a, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              P && (u[n].style[t("width")] = "");
              const r = getComputedStyle(a),
                l = a.style.transform,
                o = a.style.webkitTransform;
              if (
                (l && (a.style.transform = "none"),
                o && (a.style.webkitTransform = "none"),
                i.roundLengths)
              )
                k = e.isHorizontal() ? y(a, "width", !0) : y(a, "height", !0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  i = s(r, "padding-right"),
                  n = s(r, "margin-left"),
                  l = s(r, "margin-right"),
                  o = r.getPropertyValue("box-sizing");
                if (o && "border-box" === o) k = e + n + l;
                else {
                  const { clientWidth: s, offsetWidth: r } = a;
                  k = e + t + i + n + l + (r - s);
                }
              }
              l && (a.style.transform = l),
                o && (a.style.webkitTransform = o),
                i.roundLengths && (k = Math.floor(k));
            } else
              (k = (r - (i.slidesPerView - 1) * x) / i.slidesPerView),
                i.roundLengths && (k = Math.floor(k)),
                u[n] && (u[n].style[t("width")] = `${k}px`);
            u[n] && (u[n].swiperSlideSize = k),
              h.push(k),
              i.centeredSlides
                ? ((C = C + k / 2 + L / 2 + x),
                  0 === L && 0 !== n && (C = C - r / 2 - x),
                  0 === n && (C = C - r / 2 - x),
                  Math.abs(C) < 0.001 && (C = 0),
                  i.roundLengths && (C = Math.floor(C)),
                  M % i.slidesPerGroup == 0 && f.push(C),
                  m.push(C))
                : (i.roundLengths && (C = Math.floor(C)),
                  (M - Math.min(e.params.slidesPerGroupSkip, M)) %
                    e.params.slidesPerGroup ==
                    0 && f.push(C),
                  m.push(C),
                  (C = C + k + x)),
              (e.virtualSize += k + x),
              (L = k),
              (M += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + b),
          l &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (n.style.width = `${e.virtualSize + i.spaceBetween}px`),
          i.setWrapperSize &&
            (n.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`),
          _ && e.grid.updateWrapperSize(k, f, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < f.length; s += 1) {
            let n = f[s];
            i.roundLengths && (n = Math.floor(n)),
              f[s] <= e.virtualSize - r && t.push(n);
          }
          (f = t),
            Math.floor(e.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 &&
              f.push(e.virtualSize - r);
        }
        if (d && i.loop) {
          const t = h[0] + x;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup
              ),
              n = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + n);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && f.push(f[f.length - 1] + t),
              m.push(m[m.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === f.length && (f = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
          ).forEach((e) => {
            e.style[s] = `${x}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          f = f.map((e) => (e < 0 ? -v : e > t ? t + b : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            f.forEach((e, s) => {
              f[s] = e - t;
            }),
              m.forEach((e, s) => {
                m[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: f,
            slidesGrid: m,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          g(n, "--swiper-centered-offset-before", -f[0] + "px"),
            g(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== c && e.emit("slidesLengthChange"),
          f.length !== T &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          m.length !== E && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          p <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          a = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides[e];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            a = e > a ? e : a;
          }
        (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: a } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        n && (r = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const l = i[e];
          let o = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
          const d =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            c =
              (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            u = -(r - o),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (l.progress = n ? -d : d),
            (l.originalProgress = n ? -c : c);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: a, isEnd: r, progressLoop: l } = t;
        const o = a,
          d = r;
        if (0 === i) (n = 0), (a = !0), (r = !0);
        else {
          n = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            l = Math.abs(e - t.maxTranslate()) < 1;
          (a = s || n <= 0), (r = l || n >= 1), s && (n = 0), l && (n = 1);
        }
        if (s.loop) {
          const s = T(
              t.slides.filter(
                (e) => "0" === e.getAttribute("data-swiper-slide-index")
              )[0]
            ),
            i = T(
              t.slides.filter(
                (e) =>
                  1 * e.getAttribute("data-swiper-slide-index") ==
                  t.slides.length - 1
              )[0]
            ),
            n = t.slidesGrid[s],
            a = t.slidesGrid[i],
            r = t.slidesGrid[t.slidesGrid.length - 1],
            o = Math.abs(e);
          (l = o >= n ? (o - n) / r : (o + r - a) / r), l > 1 && (l -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: l,
          isBeginning: a,
          isEnd: r,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !o && t.emit("reachBeginning toEdge"),
          r && !d && t.emit("reachEnd toEdge"),
          ((o && !a) || (d && !r)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
          a = e.virtual && s.virtual.enabled,
          r = (e) => w(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let l;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass
            );
          }),
          a)
        )
          if (s.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (l = r(`[data-swiper-slide-index="${t}"]`));
          } else l = r(`[data-swiper-slide-index="${n}"]`);
        else l = t[n];
        if (l) {
          l.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(l, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(l, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: n,
            activeIndex: a,
            realIndex: r,
            snapIndex: l,
          } = t;
        let o,
          d = e;
        const c = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : i >= t[e] && i < t[e + 1] && (n = e + 1)
                  : i >= t[e] && (n = e);
              return (
                s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          o = i.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, d);
          o = e + Math.floor((d - e) / n.slidesPerGroup);
        }
        if ((o >= i.length && (o = i.length - 1), d === a))
          return (
            o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = c(d))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? c(d)
            : t.slides[d]
            ? parseInt(
                t.slides[d].getAttribute("data-swiper-slide-index") || d,
                10
              )
            : d),
          Object.assign(t, {
            snapIndex: o,
            realIndex: u,
            previousIndex: a,
            activeIndex: d,
          }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          r !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = e.closest(`.${s.slideClass}, swiper-slide`);
        let n,
          a = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (a = !0), (n = e);
              break;
            }
        if (!i || !a)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                i.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const I = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let a = f(n, e);
        return s && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: n, wrapperEl: a, progress: r } = s;
        let l,
          o = 0,
          d = 0;
        s.isHorizontal() ? (o = i ? -e : e) : (d = e),
          n.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
          n.cssMode
            ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -o : -d)
            : n.virtualTranslate ||
              (a.style.transform = `translate3d(${o}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? o : d);
        const c = s.maxTranslate() - s.minTranslate();
        (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
          l !== r && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
        const a = this,
          { params: r, wrapperEl: l } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        const o = a.minTranslate(),
          d = a.maxTranslate();
        let c;
        if (
          ((c = i && e > o ? o : i && e < d ? d : e),
          a.updateProgress(c),
          r.cssMode)
        ) {
          const e = a.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!a.support.smoothScroll)
              return (
                v({ swiper: a, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.wrapperEl.removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      s && a.emit("transitionEnd"));
                  }),
                a.wrapperEl.addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function O({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: a } = e;
      let r = s;
      if (
        (r || (r = n > a ? "next" : n < a ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && n !== a)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === r
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const z = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
        "string" == typeof e && (e = parseInt(e, 10));
        const a = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: m,
        } = a;
        if (
          (a.animating && l.preventInteractionOnTransition) ||
          (!m && !i && !n)
        )
          return !1;
        const h = Math.min(a.params.slidesPerGroupSkip, r);
        let g = h + Math.floor((r - h) / a.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1);
        const w = -o[g];
        if (l.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * w),
              s = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (r = e)
                : t >= s && t < i && (r = e + 1)
              : t >= s && (r = e);
          }
        if (a.initialized && r !== u) {
          if (!a.allowSlideNext && w < a.translate && w < a.minTranslate())
            return !1;
          if (
            !a.allowSlidePrev &&
            w > a.translate &&
            w > a.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let b;
        if (
          (r !== (c || 0) && s && a.emit("beforeSlideChangeStart"),
          a.updateProgress(w),
          (b = r > u ? "next" : r < u ? "prev" : "reset"),
          (p && -w === a.translate) || (!p && w === a.translate))
        )
          return (
            a.updateActiveIndex(r),
            l.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== l.effect && a.setTranslate(w),
            "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)),
            !1
          );
        if (l.cssMode) {
          const e = a.isHorizontal(),
            s = p ? w : -w;
          if (0 === t) {
            const t = a.virtual && a.params.virtual.enabled;
            t &&
              ((a.wrapperEl.style.scrollSnapType = "none"),
              (a._immediateVirtual = !0)),
              t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
                ? ((a._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    f[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (a.wrapperEl.style.scrollSnapType = ""),
                    (a._immediateVirtual = !1);
                });
          } else {
            if (!a.support.smoothScroll)
              return (
                v({ swiper: a, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          a.setTransition(t),
          a.setTranslate(w),
          a.updateActiveIndex(r),
          a.updateSlidesClasses(),
          a.emit("beforeTransitionStart", t, i),
          a.transitionStart(s, b),
          0 === t
            ? a.transitionEnd(s, b)
            : a.animating ||
              ((a.animating = !0),
              a.onSlideToWrapperTransitionEnd ||
                (a.onSlideToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.wrapperEl.removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, b));
                }),
              a.wrapperEl.addEventListener(
                "transitionend",
                a.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const n = this;
        let a = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (a += n.virtual.slidesBefore)
              : (a = T(
                  n.slides.filter(
                    (e) => 1 * e.getAttribute("data-swiper-slide-index") === a
                  )[0]
                ))),
          n.slideTo(a, t, s, i)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { enabled: n, params: a, animating: r } = i;
        if (!n) return i;
        let l = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < a.slidesPerGroupSkip ? 1 : l,
          d = i.virtual && a.virtual.enabled;
        if (a.loop) {
          if (r && !d && a.loopPreventsSliding) return !1;
          i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        return a.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: n,
            snapGrid: a,
            slidesGrid: r,
            rtlTranslate: l,
            enabled: o,
            animating: d,
          } = i;
        if (!o) return i;
        const c = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (d && !c && n.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(l ? i.translate : -i.translate),
          f = a.map((e) => u(e));
        let m = a[f.indexOf(p) - 1];
        if (void 0 === m && n.cssMode) {
          let e;
          a.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (m = a[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== m &&
            ((h = r.indexOf(m)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(h, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const n = this;
        let a = n.activeIndex;
        const r = Math.min(n.params.slidesPerGroupSkip, a),
          l = r + Math.floor((a - r) / n.params.slidesPerGroup),
          o = n.rtlTranslate ? n.translate : -n.translate;
        if (o >= n.snapGrid[l]) {
          const e = n.snapGrid[l];
          o - e > (n.snapGrid[l + 1] - e) * i && (a += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[l - 1];
          o - e <= (n.snapGrid[l] - e) * i && (a -= n.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, n.slidesGrid.length - 1)),
          n.slideTo(a, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          a = e.clickedIndex;
        const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? a < e.loopedSlides - i / 2 ||
                a > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (a = T(w(s, `${r}[data-swiper-slide-index="${n}"]`)[0])),
                  u(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - i
              ? (e.loopFix(),
                (a = T(w(s, `${r}[data-swiper-slide-index="${n}"]`)[0])),
                u(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    const G = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        w(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: i,
        activeSlideIndex: n,
        byController: a,
        byMousewheel: r,
      } = {}) {
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
          slides: o,
          allowSlidePrev: d,
          allowSlideNext: c,
          slidesEl: u,
          params: p,
        } = l;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && p.virtual.enabled)
        )
          return (
            t &&
              (p.centeredSlides || 0 !== l.snapIndex
                ? p.centeredSlides && l.snapIndex < p.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = d),
            (l.allowSlideNext = c),
            void l.emit("loopFix")
          );
        const f =
          "auto" === p.slidesPerView
            ? l.slidesPerViewDynamic()
            : Math.ceil(parseFloat(p.slidesPerView, 10));
        let m = p.loopedSlides || f;
        m % p.slidesPerGroup != 0 &&
          (m += p.slidesPerGroup - (m % p.slidesPerGroup)),
          (l.loopedSlides = m);
        const h = [],
          g = [];
        let v = l.activeIndex;
        void 0 === n
          ? (n = T(
              l.slides.filter((e) =>
                e.classList.contains("swiper-slide-active")
              )[0]
            ))
          : (v = n);
        const w = "next" === s || !s,
          b = "prev" === s || !s;
        let S = 0,
          E = 0;
        if (n < m) {
          S = m - n;
          for (let e = 0; e < m - n; e += 1) {
            const t = e - Math.floor(e / o.length) * o.length;
            h.push(o.length - t - 1);
          }
        } else if (n > l.slides.length - 2 * m) {
          E = n - (l.slides.length - 2 * m);
          for (let e = 0; e < E; e += 1) {
            const t = e - Math.floor(e / o.length) * o.length;
            g.push(t);
          }
        }
        if (
          (b &&
            h.forEach((e) => {
              u.prepend(l.slides[e]);
            }),
          w &&
            g.forEach((e) => {
              u.append(l.slides[e]);
            }),
          l.recalcSlides(),
          p.watchSlidesProgress && l.updateSlidesOffset(),
          t)
        )
          if (h.length > 0 && b)
            if (void 0 === e) {
              const e = l.slidesGrid[v],
                t = l.slidesGrid[v + S] - e;
              r
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(v + S, 0, !1, !0),
                  i &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else i && l.slideToLoop(e, 0, !1, !0);
          else if (g.length > 0 && w)
            if (void 0 === e) {
              const e = l.slidesGrid[v],
                t = l.slidesGrid[v - E] - e;
              r
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(v - E, 0, !1, !0),
                  i &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else l.slideToLoop(e, 0, !1, !0);
        if (
          ((l.allowSlidePrev = d),
          (l.allowSlideNext = c),
          l.controller && l.controller.control && !a)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: s,
            setTranslate: i,
            activeSlideIndex: n,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((e) => {
                e.params.loop && e.loopFix(t);
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix(t);
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i } = e;
        if (!s.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const n = [];
        t.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          n[t] = e;
        }),
          t.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          n.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function B(e) {
      const t = this,
        s = o(),
        i = c(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: a, touches: r, enabled: l } = t;
      if (!l) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && a.preventInteractionOnTransition) return;
      !t.animating && a.cssMode && a.loop && t.loopFix();
      let d = e;
      d.originalEvent && (d = d.originalEvent);
      let u = d.target;
      if ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(u)) return;
      if ("which" in d && 3 === d.which) return;
      if ("button" in d && d.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const f = !!a.noSwipingClass && "" !== a.noSwipingClass,
        m = e.composedPath ? e.composedPath() : e.path;
      f && d.target && d.target.shadowRoot && m && (u = m[0]);
      const h = a.noSwipingSelector
          ? a.noSwipingSelector
          : `.${a.noSwipingClass}`,
        g = !(!d.target || !d.target.shadowRoot);
      if (
        a.noSwiping &&
        (g
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === o() || s === c()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(h, u)
          : u.closest(h))
      )
        return void (t.allowClick = !0);
      if (a.swipeHandler && !u.closest(a.swipeHandler)) return;
      (r.currentX = d.pageX), (r.currentY = d.pageY);
      const v = r.currentX,
        w = r.currentY,
        b = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
        S = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
      if (b && (v <= S || v >= i.innerWidth - S)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (r.startX = v),
        (r.startY = w),
        (n.touchStartTime = p()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        a.threshold > 0 && (n.allowThresholdMove = !1);
      let T = !0;
      u.matches(n.focusableElements) &&
        ((T = !1), "SELECT" === u.nodeName && (n.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(n.focusableElements) &&
          s.activeElement !== u &&
          s.activeElement.blur();
      const E = T && t.allowTouchMove && a.touchStartPreventDefault;
      (!a.touchStartForcePreventDefault && !E) ||
        u.isContentEditable ||
        d.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !a.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", d);
    }
    function $(e) {
      const t = o(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: a, rtlTranslate: r, enabled: l } = s;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", d)
        );
      const c = i.evCache.findIndex((e) => e.pointerId === d.pointerId);
      c >= 0 && (i.evCache[c] = d);
      const u = i.evCache.length > 1 ? i.evCache[0] : d,
        f = u.pageX,
        m = u.pageY;
      if (d.preventedByNestedSwiper) return (a.startX = f), void (a.startY = m);
      if (!s.allowTouchMove)
        return (
          d.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(a, {
              startX: f,
              startY: m,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: f,
              currentY: m,
            }),
            (i.touchStartTime = p()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (m < a.startY && s.translate <= s.maxTranslate()) ||
            (m > a.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (f < a.startX && s.translate <= s.maxTranslate()) ||
          (f > a.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        d.target === t.activeElement &&
        d.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", d),
        d.targetTouches && d.targetTouches.length > 1)
      )
        return;
      (a.currentX = f), (a.currentY = m);
      const h = a.currentX - a.startX,
        g = a.currentY - a.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + g ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) ||
        (s.isVertical() && a.currentX === a.startX)
          ? (i.isScrolling = !1)
          : h * h + g * g >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(g), Math.abs(h))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", d),
        void 0 === i.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && d.cancelable && d.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
      let v = s.isHorizontal() ? h : g,
        w = s.isHorizontal()
          ? a.currentX - a.previousX
          : a.currentY - a.previousY;
      n.oneWayMovement &&
        ((v = Math.abs(v) * (r ? 1 : -1)), (w = Math.abs(w) * (r ? 1 : -1))),
        (a.diff = v),
        (v *= n.touchRatio),
        r && ((v = -v), (w = -w));
      const b = s.touchesDirection;
      (s.swipeDirection = v > 0 ? "prev" : "next"),
        (s.touchesDirection = w > 0 ? "prev" : "next");
      const S = s.params.loop && !n.cssMode;
      if (!i.isMoved) {
        if (
          (S && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", d);
      }
      let T;
      i.isMoved &&
        b !== s.touchesDirection &&
        S &&
        Math.abs(v) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (T = !0)),
        s.emit("sliderMove", d),
        (i.isMoved = !0),
        (i.currentTranslate = v + i.startTranslate);
      let E = !0,
        y = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (y = 0),
        v > 0
          ? (S &&
              !T &&
              i.currentTranslate >
                (n.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((E = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + v) ** y)))
          : v < 0 &&
            (S &&
              !T &&
              i.currentTranslate <
                (n.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === n.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((E = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - v) ** y))),
        E && (d.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(v) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            void (a.diff = s.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function D(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      )
        return;
      const {
        params: n,
        touches: a,
        rtlTranslate: r,
        slidesGrid: l,
        enabled: o,
      } = t;
      if (!o) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", d),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = p(),
        f = c - s.touchStartTime;
      if (t.allowClick) {
        const e = d.path || (d.composedPath && d.composedPath());
        t.updateClickedSlide((e && e[0]) || d.target),
          t.emit("tap click", d),
          f < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d);
      }
      if (
        ((s.lastClickTime = p()),
        u(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === a.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let m;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (m = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: m });
      let h = 0,
        g = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < l.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== l[e + t]
          ? m >= l[e] && m < l[e + t] && ((h = e), (g = l[e + t] - l[e]))
          : m >= l[e] && ((h = e), (g = l[l.length - 1] - l[l.length - 2]));
      }
      let v = null,
        w = null;
      n.rewind &&
        (t.isBeginning
          ? (w =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (v = 0));
      const b = (m - l[h]) / g,
        S = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (f > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (b >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? v : h + S)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (b > 1 - n.longSwipesRatio
              ? t.slideTo(h + S)
              : null !== w && b < 0 && Math.abs(b) > n.longSwipesRatio
              ? t.slideTo(w)
              : t.slideTo(h));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
          ? d.target === t.navigation.nextEl
            ? t.slideTo(h + S)
            : t.slideTo(h)
          : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + S),
            "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h));
      }
    }
    let V;
    function H() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e,
        r = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const l = r && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
        ? e.params.loop && !r
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(V),
          (V = setTimeout(() => {
            e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function N(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function F() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    const R = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    };
    function q(e) {
      R(this, e.target), this.update();
    }
    let j = !1;
    function W() {}
    const Y = (e, t) => {
      const s = o(),
        { params: i, el: n, wrapperEl: a, device: r } = e,
        l = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      n[d]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          n[d]("click", e.onClick, !0),
        i.cssMode && a[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
              r.ios || r.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              H,
              !0
            )
          : e[c]("observerUpdate", H, !0),
        n[d]("load", e.onLoad, { capture: !0 });
    };
    const X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const U = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function K(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                h(t, s))
              : h(t, s))
          : h(t, s);
      };
    }
    const J = {
        eventsEmitter: P,
        update: A,
        translate: I,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              (s.wrapperEl.style.transitionDuration = `${e}ms`),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: z,
        loop: G,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = o(),
              { params: s } = e;
            (e.onTouchStart = B.bind(e)),
              (e.onTouchMove = $.bind(e)),
              (e.onTouchEnd = D.bind(e)),
              s.cssMode && (e.onScroll = F.bind(e)),
              (e.onClick = N.bind(e)),
              (e.onLoad = q.bind(e)),
              j || (t.addEventListener("touchstart", W), (j = !0)),
              Y(e, "on");
          },
          detachEvents: function () {
            Y(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: n } = e,
              a = i.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const r = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
            if (!r || e.currentBreakpoint === r) return;
            const l = (r in a ? a[r] : void 0) || e.originalParams,
              o = X(e, i),
              d = X(e, l),
              c = i.enabled;
            o && !d
              ? (n.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !o &&
                d &&
                (n.classList.add(`${i.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === i.grid.fill)) &&
                  n.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const s = i[t] && i[t].enabled,
                  n = l[t] && l[t].enabled;
                s && !n && e[t].disable(), !s && n && e[t].enable();
              });
            const u = l.direction && l.direction !== i.direction,
              p = i.loop && (l.slidesPerView !== i.slidesPerView || u);
            u && s && e.changeDirection(), h(e.params, l);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !f ? e.disable() : !c && f && e.enable(),
              (e.currentBreakpoint = r),
              e.emit("_beforeBreakpoint", l),
              p && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let i = !1;
            const n = c(),
              a = "window" === t ? n.innerHeight : s.clientHeight,
              r = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < r.length; e += 1) {
              const { point: a, value: l } = r[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = a)
                : l <= s.clientWidth && (i = a);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: n, device: a } = e,
              r = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: a.android },
                  { ios: a.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass
              );
            t.push(...r), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      Q = {};
    class Z {
      constructor(...e) {
        let t, s;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = h({}, s)),
          t && !s.el && (s.el = t);
        const i = o();
        if (
          s.el &&
          "string" == typeof s.el &&
          i.querySelectorAll(s.el).length > 1
        ) {
          const e = [];
          return (
            i.querySelectorAll(s.el).forEach((t) => {
              const i = h({}, s, { el: t });
              e.push(new Z(i));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = M()),
          (n.device = _({ userAgent: s.userAgent })),
          (n.browser = k()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const a = {};
        n.modules.forEach((e) => {
          e({
            params: s,
            swiper: n,
            extendParams: K(s, a),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = h({}, U, a);
        return (
          (n.params = h({}, r, Q, s)),
          (n.originalParams = h({}, n.params)),
          (n.passedParams = h({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: p(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = w(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: a,
          size: r,
          activeIndex: l,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = i[l].swiperSlideSize;
          for (let s = l + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < i.length; e += 1) {
            (t ? n[e] + a[e] - n[l] < r : n[e] - n[l] < r) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            n[l] - n[e] < r && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && R(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t), s.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return w(s, i())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = b("div", t.params.wrapperClass)),
            s.append(n),
            w(s, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: n,
            slidesEl: t.isElement ? s : n,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === S(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === S(s, "direction")),
            wrongRTL: "-webkit-box" === S(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? R(t, e)
                : e.addEventListener("load", (e) => {
                    R(t, e.target);
                  });
            }),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, el: n, wrapperEl: a, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttribute("style"),
              a.removeAttribute("style"),
              r &&
                r.length &&
                r.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        h(Q, e);
      }
      static get extendedDefaults() {
        return Q;
      }
      static get defaults() {
        return U;
      }
      static installModule(e) {
        Z.prototype.__modules__ || (Z.prototype.__modules__ = []);
        const t = Z.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => Z.installModule(e)), Z)
          : (Z.installModule(e), Z);
      }
    }
    Object.keys(J).forEach((e) => {
      Object.keys(J[e]).forEach((t) => {
        Z.prototype[t] = J[e][t];
      });
    }),
      Z.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = c();
          let n = null,
            a = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  a = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let n = s,
                      a = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((n = s ? s.width : (t[0] || t).inlineSize),
                          (a = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === s && a === i) || r();
                  });
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", r),
                i.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              a && i.cancelAnimationFrame(a),
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", r),
                i.removeEventListener("orientationchange", l);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            a = c(),
            r = (e, t = {}) => {
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = E(e.el);
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.el, { childList: e.params.observeSlideChildren }),
                  r(e.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const ee = Z;
    function te(e, t, s, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((n) => {
            if (!s[n] && !0 === s.auto) {
              let a = w(e.el, `.${i[n]}`)[0];
              a || ((a = b("div", i[n])), (a.className = i[n]), e.el.append(a)),
                (s[n] = a),
                (t[n] = a);
            }
          }),
        s
      );
    }
    function se({ swiper: e, extendParams: t, on: s, emit: i }) {
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = { nextEl: null, prevEl: null });
      const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function a(t) {
        let s;
        return t &&
          "string" == typeof t &&
          e.isElement &&
          ((s = e.el.shadowRoot.querySelector(t)), s)
          ? s
          : (t &&
              ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                s.length > 1 &&
                1 === e.el.querySelectorAll(t).length &&
                (s = e.el.querySelector(t))),
            t && !s ? t : s);
      }
      function r(t, s) {
        const i = e.params.navigation;
        (t = n(t)).forEach((t) => {
          t &&
            (t.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === t.tagName && (t.disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function l() {
        const { nextEl: t, prevEl: s } = e.navigation;
        if (e.params.loop) return r(s, !1), void r(t, !1);
        r(s, e.isBeginning && !e.params.rewind),
          r(t, e.isEnd && !e.params.rewind);
      }
      function o(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), i("navigationPrev"));
      }
      function d(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), i("navigationNext"));
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = te(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        let s = a(t.nextEl),
          i = a(t.prevEl);
        Object.assign(e.navigation, { nextEl: s, prevEl: i }),
          (s = n(s)),
          (i = n(i));
        const r = (s, i) => {
          s && s.addEventListener("click", "next" === i ? d : o),
            !e.enabled && s && s.classList.add(...t.lockClass.split(" "));
        };
        s.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
      }
      function u() {
        let { nextEl: t, prevEl: s } = e.navigation;
        (t = n(t)), (s = n(s));
        const i = (t, s) => {
          t.removeEventListener("click", "next" === s ? d : o),
            t.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        t.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      s("init", () => {
        !1 === e.params.navigation.enabled ? p() : (c(), l());
      }),
        s("toEdge fromEdge lock unlock", () => {
          l();
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
          let { nextEl: t, prevEl: s } = e.navigation;
          (t = n(t)),
            (s = n(s)),
            [...t, ...s]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList[e.enabled ? "remove" : "add"](
                  e.params.navigation.lockClass
                )
              );
        }),
        s("click", (t, s) => {
          let { nextEl: a, prevEl: r } = e.navigation;
          (a = n(a)), (r = n(r));
          const l = s.target;
          if (
            e.params.navigation.hideOnClick &&
            !r.includes(l) &&
            !a.includes(l)
          ) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === l || e.pagination.el.contains(l))
            )
              return;
            let t;
            a.length
              ? (t = a[0].classList.contains(e.params.navigation.hiddenClass))
              : r.length &&
                (t = r[0].classList.contains(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              [...a, ...r]
                .filter((e) => !!e)
                .forEach((t) =>
                  t.classList.toggle(e.params.navigation.hiddenClass)
                );
          }
        });
      const p = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.el.classList.remove(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            c(),
            l();
        },
        disable: p,
        update: l,
        init: c,
        destroy: u,
      });
    }
    function ie(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ne({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = "swiper-pagination";
      let a;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
          paginationDisabledClass: `${n}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let r = 0;
      const l = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function o() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function d(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t &&
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${i}-${s}`),
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${i}-${s}-${s}`));
      }
      function c(t) {
        const s = t.target.closest(ie(e.params.pagination.bulletClass));
        if (!s) return;
        t.preventDefault();
        const i = T(s) * e.params.slidesPerGroup;
        e.params.loop ? e.slideToLoop(i) : e.slideTo(i);
      }
      function u() {
        const t = e.rtl,
          s = e.params.pagination;
        if (o()) return;
        let n,
          c = e.pagination.el;
        c = l(c);
        const u =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          p = e.params.loop
            ? Math.ceil(u / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          ((n = e.params.loop
            ? e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex
            : void 0 !== e.snapIndex
            ? e.snapIndex
            : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let l, o, u;
          if (
            (s.dynamicBullets &&
              ((a = y(i[0], e.isHorizontal() ? "width" : "height", !0)),
              c.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  a * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((r += n - (e.previousIndex || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (l = Math.max(n - r, 0)),
              (o = l + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (o + l) / 2)),
            i.forEach((e) => {
              e.classList.remove(
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`)
              );
            }),
            c.length > 1)
          )
            i.forEach((e) => {
              const t = T(e);
              t === n && e.classList.add(s.bulletActiveClass),
                s.dynamicBullets &&
                  (t >= l &&
                    t <= o &&
                    e.classList.add(`${s.bulletActiveClass}-main`),
                  t === l && d(e, "prev"),
                  t === o && d(e, "next"));
            });
          else {
            const e = i[n];
            if ((e && e.classList.add(s.bulletActiveClass), s.dynamicBullets)) {
              const e = i[l],
                t = i[o];
              for (let e = l; e <= o; e += 1)
                i[e].classList.add(`${s.bulletActiveClass}-main`);
              d(e, "prev"), d(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (a * n - a) / 2 - u * a,
              l = t ? "right" : "left";
            i.forEach((t) => {
              t.style[e.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        c.forEach((t, a) => {
          if (
            ("fraction" === s.type &&
              (t.querySelectorAll(ie(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(n + 1);
              }),
              t.querySelectorAll(ie(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(p);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const a = (n + 1) / p;
            let r = 1,
              l = 1;
            "horizontal" === i ? (r = a) : (l = a),
              t.querySelectorAll(ie(s.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${l})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((t.innerHTML = s.renderCustom(e, n + 1, p)),
              0 === a && i("paginationRender", t))
            : (0 === a && i("paginationRender", t), i("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function p() {
        const t = e.params.pagination;
        if (o()) return;
        const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let n = e.pagination.el;
        n = l(n);
        let a = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil(s / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (a += t.renderBullet.call(e, s, t.bulletClass))
              : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (a = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (a = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          n.forEach((s) => {
            "custom" !== t.type && (s.innerHTML = a || ""),
              "bullets" === t.type &&
                (e.pagination.bullets = [
                  ...s.querySelectorAll(ie(t.bulletClass)),
                ]);
          }),
          "custom" !== t.type && i("paginationRender", n[0]);
      }
      function f() {
        e.params.pagination = te(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s;
        "string" == typeof t.el &&
          e.isElement &&
          (s = e.el.shadowRoot.querySelector(t.el)),
          s ||
            "string" != typeof t.el ||
            (s = [...document.querySelectorAll(t.el)]),
          s || (s = t.el),
          s &&
            0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...e.el.querySelectorAll(t.el)]),
              s.length > 1 &&
                (s = s.filter((t) => E(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, { el: s }),
            (s = l(s)),
            s.forEach((s) => {
              "bullets" === t.type &&
                t.clickable &&
                s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (r = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", c),
                e.enabled || s.classList.add(t.lockClass);
            }));
      }
      function m() {
        const t = e.params.pagination;
        if (o()) return;
        let s = e.pagination.el;
        s &&
          ((s = l(s)),
          s.forEach((s) => {
            s.classList.remove(t.hiddenClass),
              s.classList.remove(t.modifierClass + t.type),
              s.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && s.removeEventListener("click", c);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(t.bulletActiveClass)
            );
      }
      s("init", () => {
        !1 === e.params.pagination.enabled ? h() : (f(), p(), u());
      }),
        s("activeIndexChange", () => {
          void 0 === e.snapIndex && u();
        }),
        s("snapIndexChange", () => {
          u();
        }),
        s("snapGridLengthChange", () => {
          p(), u();
        }),
        s("destroy", () => {
          m();
        }),
        s("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = l(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          u();
        }),
        s("click", (t, s) => {
          const n = s.target;
          let { el: a } = e.pagination;
          if (
            (Array.isArray(a) || (a = [a].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              a &&
              a.length > 0 &&
              !n.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            const t = a[0].classList.contains(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              a.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const h = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = l(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          m();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = l(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            f(),
            p(),
            u();
        },
        disable: h,
        render: p,
        update: u,
        init: f,
        destroy: m,
      });
    }
    function ae() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      ae(),
        document.querySelector(".sale__slider") &&
          new ee(".sale__slider", {
            modules: [se, ne],
            observer: !0,
            observeParents: !0,
            slidesPerView: 4,
            spaceBetween: 20,
            speed: 800,
            pagination: {
              el: ".slider-quality__pagging",
              clickable: !0,
              type: "bullets",
            },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 0 },
              472: { slidesPerView: 1.5, spaceBetween: 20 },
              654: { slidesPerView: 2, spaceBetween: 20 },
              754: { slidesPerView: 2.5, spaceBetween: 20 },
              998: { slidesPerView: 3, spaceBetween: 30 },
              1354: { slidesPerView: 4, spaceBetween: 30 },
            },
            on: { touchStart: function () {} },
          }),
        document.querySelector(".rpg__slider") &&
          new ee(".rpg__slider", {
            modules: [se, ne],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 33,
            autoHeight: !0,
            speed: 800,
            pagination: {
              el: ".slider-rpg-quality__pagging",
              type: "progressbar",
            },
            breakpoints: {
              320: { slidesPerView: 2, spaceBetween: 15, autoHeight: !0 },
              472: { slidesPerView: 3, spaceBetween: 20 },
              596: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1347: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          });
    });
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let re = !1;
    setTimeout(() => {
      if (re) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    let le = document.querySelector(".video-module");
    le.addEventListener("click", function (e) {
      let t = document.querySelector(".video-module").querySelector("video");
      t.paused
        ? (t.play(), le.classList.add("_pause"))
        : (t.pause(), le.classList.remove("_pause"));
    }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let s = document.querySelector(".menu__icon");
        s &&
          s.addEventListener("click", function (s) {
            e && (t(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        re = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let n,
          a = 0;
        document.addEventListener("windowScroll", function (r) {
          const l = window.scrollY;
          clearTimeout(n),
            l >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (l > a
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (n = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (a = l <= 0 ? 0 : l);
        });
      })();
  })();
})();
