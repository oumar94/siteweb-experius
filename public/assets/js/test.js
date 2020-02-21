/********************************************
 * REVOLUTION 5.1.5 EXTENSION - NAVIGATION
 * @version: 1.1 (04.01.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function (t) {
    var e = jQuery.fn.revolution,
        i = e.is_mobile();
    jQuery.extend(!0, e, {
        hideUnHideNav: function (t) {
            var e = t.c.width(),
                i = t.navigation.arrows,
                a = t.navigation.bullets,
                n = t.navigation.thumbnails,
                s = t.navigation.tabs;
            p(i) && T(t.c.find(".tparrows"), i.hide_under, e, i.hide_over), p(a) && T(t.c.find(".tp-bullets"), a.hide_under, e, a.hide_over), p(n) && T(t.c.parent().find(".tp-thumbs"), n.hide_under, e, n.hide_over), p(s) && T(t.c.parent().find(".tp-tabs"), s.hide_under, e, s.hide_over), y(t)
        },
        resizeThumbsTabs: function (t, e) {
            if (t.navigation && t.navigation.tabs.enable || t.navigation && t.navigation.thumbnails.enable) {
                var i = (jQuery(window).width() - 480) / 500,
                    a = new punchgs.TimelineLite,
                    s = t.navigation.tabs,
                    r = t.navigation.thumbnails,
                    o = t.navigation.bullets;
                if (a.pause(), i = i > 1 ? 1 : 0 > i ? 0 : i, p(s) && (e || s.width > s.min_width) && n(i, a, t.c, s, t.slideamount, "tab"), p(r) && (e || r.width > r.min_width) && n(i, a, t.c, r, t.slideamount, "thumb"), p(o) && e) {
                    var d = t.c.find(".tp-bullets");
                    d.find(".tp-bullet").each(function (t) {
                        var e = jQuery(this),
                            i = t + 1,
                            a = e.outerWidth() + parseInt(void 0 === o.space ? 0 : o.space, 0),
                            n = e.outerHeight() + parseInt(void 0 === o.space ? 0 : o.space, 0);
                        "vertical" === o.direction ? (e.css({
                            top: (i - 1) * n + "px",
                            left: "0px"
                        }), d.css({
                            height: (i - 1) * n + e.outerHeight(),
                            width: e.outerWidth()
                        })) : (e.css({
                            left: (i - 1) * a + "px",
                            top: "0px"
                        }), d.css({
                            width: (i - 1) * a + e.outerWidth(),
                            height: e.outerHeight()
                        }))
                    })
                }
                a.play(), y(t)
            }
            return !0
        },
        updateNavIndexes: function (t) {
            function i(t) {
                a.find(t).lenght > 0 && a.find(t).each(function (t) {
                    jQuery(this).data("liindex", t)
                })
            }
            var a = t.c;
            i(".tp-tab"), i(".tp-bullet"), i(".tp-thumb"), e.resizeThumbsTabs(t, !0), e.manageNavigation(t)
        },
        manageNavigation: function (t) {
            var i = e.getHorizontalOffset(t.c.parent(), "left"),
                n = e.getHorizontalOffset(t.c.parent(), "right");
            p(t.navigation.bullets) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.bullets.h_offset_old = void 0 === t.navigation.bullets.h_offset_old ? t.navigation.bullets.h_offset : t.navigation.bullets.h_offset_old, t.navigation.bullets.h_offset = "center" === t.navigation.bullets.h_align ? t.navigation.bullets.h_offset_old + i / 2 - n / 2 : t.navigation.bullets.h_offset_old + i - n), b(t.c.find(".tp-bullets"), t.navigation.bullets)), p(t.navigation.thumbnails) && b(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), p(t.navigation.tabs) && b(t.c.parent().find(".tp-tabs"), t.navigation.tabs), p(t.navigation.arrows) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.arrows.left.h_offset_old = void 0 === t.navigation.arrows.left.h_offset_old ? t.navigation.arrows.left.h_offset : t.navigation.arrows.left.h_offset_old, t.navigation.arrows.left.h_offset = "right" === t.navigation.arrows.left.h_align ? t.navigation.arrows.left.h_offset_old + n : t.navigation.arrows.left.h_offset_old + i, t.navigation.arrows.right.h_offset_old = void 0 === t.navigation.arrows.right.h_offset_old ? t.navigation.arrows.right.h_offset : t.navigation.arrows.right.h_offset_old, t.navigation.arrows.right.h_offset = "right" === t.navigation.arrows.right.h_align ? t.navigation.arrows.right.h_offset_old + n : t.navigation.arrows.right.h_offset_old + i), b(t.c.find(".tp-leftarrow.tparrows"), t.navigation.arrows.left), b(t.c.find(".tp-rightarrow.tparrows"), t.navigation.arrows.right)), p(t.navigation.thumbnails) && a(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), p(t.navigation.tabs) && a(t.c.parent().find(".tp-tabs"), t.navigation.tabs)
        },
        createNavigation: function (t, e) {
            var n = t.parent(),
                s = e.navigation.arrows,
                d = e.navigation.bullets,
                u = e.navigation.thumbnails,
                v = e.navigation.tabs,
                m = p(s),
                b = p(d),
                _ = p(u),
                y = p(v);
            r(t, e), o(t, e), m && f(t, s, e), e.li.each(function (i) {
                var a = jQuery(this);
                b && w(t, d, a, e), _ && x(t, u, a, "tp-thumb", e), y && x(t, v, a, "tp-tab", e)
            }), t.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function () {
                var i = 0 == t.find(".next-revslide").length ? t.find(".active-revslide").data("index") : t.find(".next-revslide").data("index");
                t.find(".tp-bullet").each(function () {
                    var t = jQuery(this);
                    t.data("liref") === i ? t.addClass("selected") : t.removeClass("selected")
                }), n.find(".tp-thumb, .tp-tab").each(function () {
                    var t = jQuery(this);
                    t.data("liref") === i ? (t.addClass("selected"), t.hasClass("tp-tab") ? a(n.find(".tp-tabs"), v) : a(n.find(".tp-thumbs"), u)) : t.removeClass("selected")
                });
                var r = 0,
                    o = !1;
                e.thumbs && jQuery.each(e.thumbs, function (t, e) {
                    r = o === !1 ? t : r, o = e.id === i || t === i ? !0 : o
                });
                var d = r > 0 ? r - 1 : e.slideamount - 1,
                    l = r + 1 == e.slideamount ? 0 : r + 1;
                if (s.enable === !0) {
                    var h = s.tmp;
                    jQuery.each(e.thumbs[d].params, function (t, e) {
                        h = h.replace(e.from, e.to)
                    }), s.left.j.html(h), h = s.tmp, jQuery.each(e.thumbs[l].params, function (t, e) {
                        h = h.replace(e.from, e.to)
                    }), s.right.j.html(h), punchgs.TweenLite.set(s.left.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + e.thumbs[d].src + ")"
                    }), punchgs.TweenLite.set(s.right.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + e.thumbs[l].src + ")"
                    })
                }
            }), h(s), h(d), h(u), h(v), n.on("mouseenter mousemove", function () {
                n.hasClass("tp-mouseover") || (n.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(g), m && s.hide_onleave && g(n.find(".tparrows"), s, "show"), b && d.hide_onleave && g(n.find(".tp-bullets"), d, "show"), _ && u.hide_onleave && g(n.find(".tp-thumbs"), u, "show"), y && v.hide_onleave && g(n.find(".tp-tabs"), v, "show"), i && (n.removeClass("tp-mouseover"), c(t, e)))
            }), n.on("mouseleave", function () {
                n.removeClass("tp-mouseover"), c(t, e)
            }), m && s.hide_onleave && g(n.find(".tparrows"), s, "hide", 0), b && d.hide_onleave && g(n.find(".tp-bullets"), d, "hide", 0), _ && u.hide_onleave && g(n.find(".tp-thumbs"), u, "hide", 0), y && v.hide_onleave && g(n.find(".tp-tabs"), v, "hide", 0), _ && l(n.find(".tp-thumbs"), e), y && l(n.find(".tp-tabs"), e), "carousel" === e.sliderType && l(t, e, !0), "on" == e.navigation.touch.touchenabled && l(t, e, "swipebased")
        }
    });
    var a = function (t, e) {
        var i = (t.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", t.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
            a = t.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
            n = t.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
            s = t.find(i),
            r = s.find(a),
            o = e.direction,
            d = "vertical" === o ? s.find(n).first().outerHeight(!0) + e.space : s.find(n).first().outerWidth(!0) + e.space,
            l = "vertical" === o ? s.height() : s.width(),
            h = parseInt(s.find(n + ".selected").data("liindex"), 0),
            p = l / d,
            u = "vertical" === o ? s.height() : s.width(),
            c = 0 - h * d,
            g = "vertical" === o ? r.height() : r.width(),
            f = 0 - (g - u) > c ? 0 - (g - u) : f > 0 ? 0 : c,
            v = r.data("offset");
        p > 2 && (f = 0 >= c - (v + d) ? 0 - d > c - (v + d) ? v : f + d : f, f = d > c - d + v + l && c + (Math.round(p) - 2) * d < v ? c + (Math.round(p) - 2) * d : f), f = 0 - (g - u) > f ? 0 - (g - u) : f > 0 ? 0 : f, "vertical" !== o && s.width() >= r.width() && (f = 0), "vertical" === o && s.height() >= r.height() && (f = 0), t.hasClass("dragged") || ("vertical" === o ? r.data("tmmove", punchgs.TweenLite.to(r, .5, {
            top: f + "px",
            ease: punchgs.Power3.easeInOut
        })) : r.data("tmmove", punchgs.TweenLite.to(r, .5, {
            left: f + "px",
            ease: punchgs.Power3.easeInOut
        })), r.data("offset", f))
    },
        n = function (t, e, i, a, n, s) {
            var r = i.parent().find(".tp-" + s + "s"),
                o = r.find(".tp-" + s + "s-inner-wrapper"),
                d = r.find(".tp-" + s + "-mask"),
                l = a.width * t < a.min_width ? a.min_width : Math.round(a.width * t),
                h = Math.round(l / a.width * a.height),
                p = "vertical" === a.direction ? l : l * n + a.space * (n - 1),
                u = "vertical" === a.direction ? h * n + a.space * (n - 1) : h,
                c = "vertical" === a.direction ? {
                    width: l + "px"
                } : {
                        height: h + "px"
                    };
            e.add(punchgs.TweenLite.set(r, c)), e.add(punchgs.TweenLite.set(o, {
                width: p + "px",
                height: u + "px"
            })), e.add(punchgs.TweenLite.set(d, {
                width: p + "px",
                height: u + "px"
            }));
            var g = o.find(".tp-" + s);
            return g && jQuery.each(g, function (t, i) {
                "vertical" === a.direction ? e.add(punchgs.TweenLite.set(i, {
                    top: t * (h + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: l + "px",
                    height: h + "px"
                })) : "horizontal" === a.direction && e.add(punchgs.TweenLite.set(i, {
                    left: t * (l + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: l + "px",
                    height: h + "px"
                }))
            }), e
        },
        s = function (t) {
            var e = 0,
                i = 0,
                a = 0,
                n = 0,
                s = 1,
                r = 1,
                o = 1;
            return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), a = e * s, n = i * s, "deltaY" in t && (n = t.deltaY), "deltaX" in t && (a = t.deltaX), (a || n) && t.deltaMode && (1 == t.deltaMode ? (a *= r, n *= r) : (a *= o, n *= o)), a && !e && (e = 1 > a ? -1 : 1), n && !i && (i = 1 > n ? -1 : 1), n = navigator.userAgent.match(/mozilla/i) ? 10 * n : n, (n > 300 || -300 > n) && (n /= 10), {
                spinX: e,
                spinY: i,
                pixelX: a,
                pixelY: n
            }
        },
        r = function (t, i) {
            "on" === i.navigation.keyboardNavigation && jQuery(document).keydown(function (a) {
                ("horizontal" == i.navigation.keyboard_direction && 39 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 40 == a.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 0, e.callingNewSlide(i, t, 1)), ("horizontal" == i.navigation.keyboard_direction && 37 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 38 == a.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 1, e.callingNewSlide(i, t, -1))
            })
        },
        o = function (t, i) {
            if ("on" === i.navigation.mouseScrollNavigation || "carousel" === i.navigation.mouseScrollNavigation) {
                i.isIEEleven = !!navigator.userAgent.match(/Trident.*rv\:11\./), i.isSafari = !!navigator.userAgent.match(/safari/i), i.ischrome = !!navigator.userAgent.match(/chrome/i);
                var a = i.ischrome ? -49 : i.isIEEleven || i.isSafari ? -9 : navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                    n = i.ischrome ? 49 : i.isIEEleven || i.isSafari ? 9 : navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                t.on("mousewheel DOMMouseScroll", function (r) {
                    var o = s(r.originalEvent),
                        d = t.find(".tp-revslider-slidesli.active-revslide").index(),
                        l = t.find(".tp-revslider-slidesli.processing-revslide").index(),
                        h = -1 != d && 0 == d || -1 != l && 0 == l ? !0 : !1,
                        p = -1 != d && d == i.slideamount - 1 || 1 != l && l == i.slideamount - 1 ? !0 : !1,
                        u = !0;
                    return "carousel" == i.navigation.mouseScrollNavigation && (h = p = !1), -1 == l ? o.pixelY < a ? h || (i.sc_indicator = "arrow", i.sc_indicator_dir = 0, e.callingNewSlide(i, t, -1), u = !1) : o.pixelY > n && (p || (i.sc_indicator = "arrow", i.sc_indicator_dir = 1, e.callingNewSlide(i, t, 1), u = !1)) : u = !p && o.spinY > 0 || !h && o.spinY <= 0 ? !1 : !0, 0 == u ? (r.preventDefault(r), !1) : void 0
                })
            }
        },
        d = function (t, e, a) {
            return t = i ? jQuery(a.target).closest("." + t).length || jQuery(a.srcElement).closest("." + t).length : jQuery(a.toElement).closest("." + t).length || jQuery(a.originalTarget).closest("." + t).length, t === !0 || 1 === t ? 1 : 0
        },
        l = function (t, a, n) {
            t.data("opt", a);
            var s = a.carousel;
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), s.Limit = "endless";
            var r = (i || "Firefox" === e.get_browser(), t),
                o = "vertical" === a.navigation.thumbnails.direction || "vertical" === a.navigation.tabs.direction ? "none" : "vertical",
                l = a.navigation.touch.swipe_direction || "horizontal";
            o = "swipebased" == n && "vertical" == l ? "none" : n ? "vertical" : o, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, .noSwipe", r.swipetp({
                allowPageScroll: o,
                triggerOnTouchLeave: !0,
                treshold: a.navigation.touch.swipe_treshold,
                fingers: a.navigation.touch.swipe_min_touches,
                excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
                swipeStatus: function (i, n, r, o, h, p, u) {
                    var c = d("rev_slider_wrapper", t, i),
                        g = d("tp-thumbs", t, i),
                        f = d("tp-tabs", t, i),
                        v = jQuery(this).attr("class"),
                        m = v.match(/tp-tabs|tp-thumb/gi) ? !0 : !1;
                    if ("carousel" === a.sliderType && (("move" === n || "end" === n || "cancel" == n) && a.dragStartedOverSlider && !a.dragStartedOverThumbs && !a.dragStartedOverTabs || "start" === n && c > 0 && 0 === g && 0 === f)) switch (a.dragStartedOverSlider = !0, o = r && r.match(/left|up/g) ? Math.round(-1 * o) : o = Math.round(1 * o), n) {
                        case "start":
                            void 0 !== s.positionanim && (s.positionanim.kill(), s.slide_globaloffset = "off" === s.infinity ? s.slide_offset : e.simp(s.slide_offset, s.maxwidth)), s.overpull = "none", s.wrap.addClass("dragged");
                            break;
                        case "move":
                            if (s.slide_offset = "off" === s.infinity ? s.slide_globaloffset + o : e.simp(s.slide_globaloffset + o, s.maxwidth), "off" === s.infinity) {
                                var b = "center" === s.horizontal_align ? (s.wrapwidth / 2 - s.slide_width / 2 - s.slide_offset) / s.slide_width : (0 - s.slide_offset) / s.slide_width;
                                "none" !== s.overpull && 0 !== s.overpull || !(0 > b || b > a.slideamount - 1) ? b >= 0 && b <= a.slideamount - 1 && (b >= 0 && o > s.overpull || b <= a.slideamount - 1 && o < s.overpull) && (s.overpull = 0) : s.overpull = o, s.slide_offset = 0 > b ? s.slide_offset + (s.overpull - o) / 1.1 + Math.sqrt(Math.abs((s.overpull - o) / 1.1)) : b > a.slideamount - 1 ? s.slide_offset + (s.overpull - o) / 1.1 - Math.sqrt(Math.abs((s.overpull - o) / 1.1)) : s.slide_offset
                            }
                            e.organiseCarousel(a, r, !0, !0);
                            break;
                        case "end":
                        case "cancel":
                            s.slide_globaloffset = s.slide_offset, s.wrap.removeClass("dragged"), e.carouselToEvalPosition(a, r), a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                    } else {
                        if (("move" !== n && "end" !== n && "cancel" != n || a.dragStartedOverSlider || !a.dragStartedOverThumbs && !a.dragStartedOverTabs) && !("start" === n && c > 0 && (g > 0 || f > 0))) {
                            if ("end" == n && !m) {
                                if (a.sc_indicator = "arrow", "horizontal" == l && "left" == r || "vertical" == l && "up" == r) return a.sc_indicator_dir = 0, e.callingNewSlide(a, a.c, 1), !1;
                                if ("horizontal" == l && "right" == r || "vertical" == l && "down" == r) return a.sc_indicator_dir = 1, e.callingNewSlide(a, a.c, -1), !1
                            }
                            return a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1, !0
                        }
                        g > 0 && (a.dragStartedOverThumbs = !0), f > 0 && (a.dragStartedOverTabs = !0);
                        var w = a.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                            _ = a.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                            x = a.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                            y = a.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                            T = a.dragStartedOverThumbs ? a.navigation.thumbnails : a.navigation.tabs;
                        o = r && r.match(/left|up/g) ? Math.round(-1 * o) : o = Math.round(1 * o);
                        var j = t.parent().find(_),
                            L = j.find(x),
                            S = T.direction,
                            C = "vertical" === S ? L.height() : L.width(),
                            I = "vertical" === S ? j.height() : j.width(),
                            k = "vertical" === S ? j.find(y).first().outerHeight(!0) + T.space : j.find(y).first().outerWidth(!0) + T.space,
                            O = void 0 === L.data("offset") ? 0 : parseInt(L.data("offset"), 0),
                            Q = 0;
                        switch (n) {
                            case "start":
                                t.parent().find(w).addClass("dragged"), O = "vertical" === S ? L.position().top : L.position().left, L.data("offset", O), L.data("tmmove") && L.data("tmmove").pause();
                                break;
                            case "move":
                                if (I >= C) return !1;
                                Q = O + o, Q = Q > 0 ? "horizontal" === S ? Q - L.width() * (Q / L.width() * Q / L.width()) : Q - L.height() * (Q / L.height() * Q / L.height()) : Q;
                                var M = "vertical" === S ? 0 - (L.height() - j.height()) : 0 - (L.width() - j.width());
                                Q = M > Q ? "horizontal" === S ? Q + L.width() * (Q - M) / L.width() * (Q - M) / L.width() : Q + L.height() * (Q - M) / L.height() * (Q - M) / L.height() : Q, "vertical" === S ? punchgs.TweenLite.set(L, {
                                    top: Q + "px"
                                }) : punchgs.TweenLite.set(L, {
                                    left: Q + "px"
                                });
                                break;
                            case "end":
                            case "cancel":
                                if (m) return Q = O + o, Q = "vertical" === S ? Q < 0 - (L.height() - j.height()) ? 0 - (L.height() - j.height()) : Q : Q < 0 - (L.width() - j.width()) ? 0 - (L.width() - j.width()) : Q, Q = Q > 0 ? 0 : Q, Q = Math.abs(o) > k / 10 ? 0 >= o ? Math.floor(Q / k) * k : Math.ceil(Q / k) * k : 0 > o ? Math.ceil(Q / k) * k : Math.floor(Q / k) * k, Q = "vertical" === S ? Q < 0 - (L.height() - j.height()) ? 0 - (L.height() - j.height()) : Q : Q < 0 - (L.width() - j.width()) ? 0 - (L.width() - j.width()) : Q, Q = Q > 0 ? 0 : Q, "vertical" === S ? punchgs.TweenLite.to(L, .5, {
                                    top: Q + "px",
                                    ease: punchgs.Power3.easeOut
                                }) : punchgs.TweenLite.to(L, .5, {
                                    left: Q + "px",
                                    ease: punchgs.Power3.easeOut
                                }), Q = Q ? Q : "vertical" === S ? L.position().top : L.position().left, L.data("offset", Q), L.data("distance", o), setTimeout(function () {
                                    a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                                }, 100), t.parent().find(w).removeClass("dragged"), !1
                        }
                    }
                }
            })
        },
        h = function (t) {
            t.hide_delay = jQuery.isNumeric(parseInt(t.hide_delay, 0)) ? t.hide_delay / 1e3 : .2, t.hide_delay_mobile = jQuery.isNumeric(parseInt(t.hide_delay_mobile, 0)) ? t.hide_delay_mobile / 1e3 : .2
        },
        p = function (t) {
            return t && t.enable
        },
        u = function (t) {
            return t && t.enable && t.hide_onleave === !0 && (void 0 === t.position ? !0 : !t.position.match(/outer/g))
        },
        c = function (t, e) {
            var a = t.parent();
            u(e.navigation.arrows) && punchgs.TweenLite.delayedCall(i ? e.navigation.arrows.hide_delay_mobile : e.navigation.arrows.hide_delay, g, [a.find(".tparrows"), e.navigation.arrows, "hide"]), u(e.navigation.bullets) && punchgs.TweenLite.delayedCall(i ? e.navigation.bullets.hide_delay_mobile : e.navigation.bullets.hide_delay, g, [a.find(".tp-bullets"), e.navigation.bullets, "hide"]), u(e.navigation.thumbnails) && punchgs.TweenLite.delayedCall(i ? e.navigation.thumbnails.hide_delay_mobile : e.navigation.thumbnails.hide_delay, g, [a.find(".tp-thumbs"), e.navigation.thumbnails, "hide"]), u(e.navigation.tabs) && punchgs.TweenLite.delayedCall(i ? e.navigation.tabs.hide_delay_mobile : e.navigation.tabs.hide_delay, g, [a.find(".tp-tabs"), e.navigation.tabs, "hide"])
        },
        g = function (t, e, i, a) {
            switch (a = void 0 === a ? .5 : a, i) {
                case "show":
                    punchgs.TweenLite.to(t, a, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        overwrite: "auto"
                    });
                    break;
                case "hide":
                    punchgs.TweenLite.to(t, a, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOu,
                        overwrite: "auto"
                    })
            }
        },
        f = function (t, e, i) {
            e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, 0 === t.find(".tp-leftarrow.tparrows").length && t.append('<div class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</div>"), 0 === t.find(".tp-rightarrow.tparrows").length && t.append('<div class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</div>");
            var a = t.find(".tp-leftarrow.tparrows"),
                n = t.find(".tp-rightarrow.tparrows");
            n.click(function () {
                i.sc_indicator = "arrow", i.sc_indicator_dir = 0, t.revnext()
            }), a.click(function () {
                i.sc_indicator = "arrow", i.sc_indicator_dir = 1, t.revprev()
            }), e.right.j = t.find(".tp-rightarrow.tparrows"), e.left.j = t.find(".tp-leftarrow.tparrows"), e.padding_top = parseInt(i.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(i.carousel.padding_bottom || 0, 0), b(a, e.left), b(n, e.right), ("outer-left" == e.position || "outer-right" == e.position) && (i.outernav = !0)
        },
        v = function (t, e) {
            var i = t.outerHeight(!0),
                a = (t.outerWidth(!0), "top" === e.v_align ? {
                    top: "0px",
                    y: Math.round(e.v_offset) + "px"
                } : "center" === e.v_align ? {
                    top: "50%",
                    y: Math.round(0 - i / 2 + e.v_offset) + "px"
                } : {
                            top: "100%",
                            y: Math.round(0 - (i + e.v_offset)) + "px"
                        });
            t.hasClass("outer-bottom") || punchgs.TweenLite.set(t, a)
        },
        m = function (t, e) {
            var i = (t.outerHeight(!0), t.outerWidth(!0)),
                a = "left" === e.h_align ? {
                    left: "0px",
                    x: Math.round(e.h_offset) + "px"
                } : "center" === e.h_align ? {
                    left: "50%",
                    x: Math.round(0 - i / 2 + e.h_offset) + "px"
                } : {
                            left: "100%",
                            x: Math.round(0 - (i + e.h_offset)) + "px"
                        };
            punchgs.TweenLite.set(t, a)
        },
        b = function (t, e) {
            var i = t.closest(".tp-simpleresponsive").length > 0 ? t.closest(".tp-simpleresponsive") : t.closest(".tp-revslider-mainul").length > 0 ? t.closest(".tp-revslider-mainul") : t.closest(".rev_slider_wrapper").length > 0 ? t.closest(".rev_slider_wrapper") : t.parent().find(".tp-revslider-mainul"),
                a = i.width(),
                n = i.height();
            if (v(t, e), m(t, e), "outer-left" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout ? "outer-right" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout || punchgs.TweenLite.set(t, {
                right: 0 - t.outerWidth() + "px",
                x: e.h_offset + "px"
            }) : punchgs.TweenLite.set(t, {
                left: 0 - t.outerWidth() + "px",
                x: e.h_offset + "px"
            }), t.hasClass("tp-thumbs") || t.hasClass("tp-tabs")) {
                var s = t.data("wr_padding"),
                    r = t.data("maxw"),
                    o = t.data("maxh"),
                    d = t.hasClass("tp-thumbs") ? t.find(".tp-thumb-mask") : t.find(".tp-tab-mask"),
                    l = parseInt(e.padding_top || 0, 0),
                    h = parseInt(e.padding_bottom || 0, 0);
                r > a && "outer-left" !== e.position && "outer-right" !== e.position ? (punchgs.TweenLite.set(t, {
                    left: "0px",
                    x: 0,
                    maxWidth: a - 2 * s + "px"
                }), punchgs.TweenLite.set(d, {
                    maxWidth: a - 2 * s + "px"
                })) : (punchgs.TweenLite.set(t, {
                    maxWidth: r + "px"
                }), punchgs.TweenLite.set(d, {
                    maxWidth: r + "px"
                })), o + 2 * s > n && "outer-bottom" !== e.position && "outer-top" !== e.position ? (punchgs.TweenLite.set(t, {
                    top: "0px",
                    y: 0,
                    maxHeight: l + h + (n - 2 * s) + "px"
                }), punchgs.TweenLite.set(d, {
                    maxHeight: l + h + (n - 2 * s) + "px"
                })) : (punchgs.TweenLite.set(t, {
                    maxHeight: o + "px"
                }), punchgs.TweenLite.set(d, {
                    maxHeight: o + "px"
                })), "outer-left" !== e.position && "outer-right" !== e.position && (l = 0, h = 0), e.span === !0 && "vertical" === e.direction ? (punchgs.TweenLite.set(t, {
                    maxHeight: l + h + (n - 2 * s) + "px",
                    height: l + h + (n - 2 * s) + "px",
                    top: 0 - l,
                    y: 0
                }), v(d, e)) : e.span === !0 && "horizontal" === e.direction && (punchgs.TweenLite.set(t, {
                    maxWidth: "100%",
                    width: a - 2 * s + "px",
                    left: 0,
                    x: 0
                }), m(d, e))
            }
        },
        w = function (t, e, i, a) {
            0 === t.find(".tp-bullets").length && (e.style = void 0 === e.style ? "" : e.style, t.append('<div class="tp-bullets ' + e.style + " " + e.direction + '"></div>'));
            var n = t.find(".tp-bullets"),
                s = i.data("index"),
                r = e.tmp;
            jQuery.each(a.thumbs[i.index()].params, function (t, e) {
                r = r.replace(e.from, e.to)
            }), n.append('<div class="justaddedbullet tp-bullet">' + r + "</div>");
            var o = t.find(".justaddedbullet"),
                d = t.find(".tp-bullet").length,
                l = o.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                h = o.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0);
            "vertical" === e.direction ? (o.css({
                top: (d - 1) * h + "px",
                left: "0px"
            }), n.css({
                height: (d - 1) * h + o.outerHeight(),
                width: o.outerWidth()
            })) : (o.css({
                left: (d - 1) * l + "px",
                top: "0px"
            }), n.css({
                width: (d - 1) * l + o.outerWidth(),
                height: o.outerHeight()
            })), o.find(".tp-bullet-image").css({
                backgroundImage: "url(" + a.thumbs[i.index()].src + ")"
            }), o.data("liref", s), o.click(function () {
                a.sc_indicator = "bullet", t.revcallslidewithid(s), t.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), o.removeClass("justaddedbullet"), e.padding_top = parseInt(a.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(a.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (a.outernav = !0), b(n, e)
        },
        _ = function (t, e) {
            e = parseFloat(e), t = t.replace("#", "");
            var i = parseInt(t.substring(0, 2), 16),
                a = parseInt(t.substring(2, 4), 16),
                n = parseInt(t.substring(4, 6), 16),
                s = "rgba(" + i + "," + a + "," + n + "," + e + ")";
            return s
        },
        x = function (t, e, i, a, n) {
            var s = "tp-thumb" === a ? ".tp-thumbs" : ".tp-tabs",
                r = "tp-thumb" === a ? ".tp-thumb-mask" : ".tp-tab-mask",
                o = "tp-thumb" === a ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                d = "tp-thumb" === a ? ".tp-thumb" : ".tp-tab",
                l = "tp-thumb" === a ? ".tp-thumb-image" : ".tp-tab-image";
            if (e.visibleAmount = e.visibleAmount > n.slideamount ? n.slideamount : e.visibleAmount, e.sliderLayout = n.sliderLayout, 0 === t.parent().find(s).length) {
                e.style = void 0 === e.style ? "" : e.style;
                var h = e.span === !0 ? "tp-span-wrapper" : "",
                    p = '<div class="' + a + "s " + h + " " + e.position + " " + e.style + '"><div class="' + a + '-mask"><div class="' + a + 's-inner-wrapper" style="position:relative;"></div></div></div>';
                "outer-top" === e.position ? t.parent().prepend(p) : "outer-bottom" === e.position ? t.after(p) : t.append(p), e.padding_top = parseInt(n.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(n.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (n.outernav = !0)
            }
            var u = i.data("index"),
                c = t.parent().find(s),
                g = c.find(r),
                f = g.find(o),
                v = "horizontal" === e.direction ? e.width * e.visibleAmount + e.space * (e.visibleAmount - 1) : e.width,
                m = "horizontal" === e.direction ? e.height : e.height * e.visibleAmount + e.space * (e.visibleAmount - 1),
                w = e.tmp;
            jQuery.each(n.thumbs[i.index()].params, function (t, e) {
                w = w.replace(e.from, e.to)
            }), f.append('<div data-liindex="' + i.index() + '" data-liref="' + u + '" class="justaddedthumb ' + a + '" style="width:' + e.width + "px;height:" + e.height + 'px;">' + w + "</div>");
            var x = c.find(".justaddedthumb"),
                y = c.find(d).length,
                T = x.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                j = x.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0);
            x.find(l).css({
                backgroundImage: "url(" + n.thumbs[i.index()].src + ")"
            }), "vertical" === e.direction ? (x.css({
                top: (y - 1) * j + "px",
                left: "0px"
            }), f.css({
                height: (y - 1) * j + x.outerHeight(),
                width: x.outerWidth()
            })) : (x.css({
                left: (y - 1) * T + "px",
                top: "0px"
            }), f.css({
                width: (y - 1) * T + x.outerWidth(),
                height: x.outerHeight()
            })), c.data("maxw", v), c.data("maxh", m), c.data("wr_padding", e.wrapper_padding);
            var L = "outer-top" === e.position || "outer-bottom" === e.position ? "relative" : "absolute";
            "outer-top" !== e.position && "outer-bottom" !== e.position || "center" !== e.h_align ? "0" : "auto";
            g.css({
                maxWidth: v + "px",
                maxHeight: m + "px",
                overflow: "hidden",
                position: "relative"
            }), c.css({
                maxWidth: v + "px",
                maxHeight: m + "px",
                overflow: "visible",
                position: L,
                background: _(e.wrapper_color, e.wrapper_opacity),
                padding: e.wrapper_padding + "px",
                boxSizing: "contet-box"
            }), x.click(function () {
                n.sc_indicator = "bullet";
                var e = t.parent().find(o).data("distance");
                e = void 0 === e ? 0 : e, Math.abs(e) < 10 && (t.revcallslidewithid(u), t.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
            }), x.removeClass("justaddedthumb"), b(c, e)
        },
        y = function (t) {
            var e = t.c.parent().find(".outer-top"),
                i = t.c.parent().find(".outer-bottom");
            t.top_outer = e.hasClass("tp-forcenotvisible") ? 0 : e.outerHeight() || 0, t.bottom_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0
        },
        T = function (t, e, i, a) {
            e > i || i > a ? t.addClass("tp-forcenotvisible") : t.removeClass("tp-forcenotvisible")
        }
}(jQuery);