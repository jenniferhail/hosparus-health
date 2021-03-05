/*!
 * mightily v2.0.0
 * Doing less to make more.
 * (c) 2021 Chris Miller
 * MIT License
 * https://bitbucket.org/mightily/theme-development/src/master/
 */

'use strict';

// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'Hello Vue!',
// 	}
// });

jQuery(document).ready((function( $ ) {

	/*! jQuery UI - v1.12.1 - 2016-09-14
	 * http://jqueryui.com
	 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
	 * Copyright jQuery Foundation and other contributors; Licensed MIT */
	
	(function(t) {
	    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
	})((function(t) {
	    function e(t) {
	        for (var e = t.css("visibility");
	            "inherit" === e;) t = t.parent(), e = t.css("visibility");
	        return "hidden" !== e
	    }
	
	    function i(t) {
	        for (var e, i; t.length && t[0] !== document;) {
	            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
	            t = t.parent()
	        }
	        return 0
	    }
	
	    function s() {
	        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
	            closeText: "Done",
	            prevText: "Prev",
	            nextText: "Next",
	            currentText: "Today",
	            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
	            weekHeader: "Wk",
	            dateFormat: "mm/dd/yy",
	            firstDay: 0,
	            isRTL: !1,
	            showMonthAfterYear: !1,
	            yearSuffix: ""
	        }, this._defaults = {
	            showOn: "focus",
	            showAnim: "fadeIn",
	            showOptions: {},
	            defaultDate: null,
	            appendText: "",
	            buttonText: "...",
	            buttonImage: "",
	            buttonImageOnly: !1,
	            hideIfNoPrevNext: !1,
	            navigationAsDateFormat: !1,
	            gotoCurrent: !1,
	            changeMonth: !1,
	            changeYear: !1,
	            yearRange: "c-10:c+10",
	            showOtherMonths: !1,
	            selectOtherMonths: !1,
	            showWeek: !1,
	            calculateWeek: this.iso8601Week,
	            shortYearCutoff: "+10",
	            minDate: null,
	            maxDate: null,
	            duration: "fast",
	            beforeShowDay: null,
	            beforeShow: null,
	            onSelect: null,
	            onChangeMonthYear: null,
	            onClose: null,
	            numberOfMonths: 1,
	            showCurrentAtPos: 0,
	            stepMonths: 1,
	            stepBigMonths: 12,
	            altField: "",
	            altFormat: "",
	            constrainInput: !0,
	            showButtonPanel: !1,
	            autoSize: !1,
	            disabled: !1
	        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	    }
	
	    function n(e) {
	        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	        return e.on("mouseout", i, (function() {
	            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
	        })).on("mouseover", i, o)
	    }
	
	    function o() {
	        t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
	    }
	
	    function a(e, i) {
	        t.extend(e, i);
	        for (var s in i) null == i[s] && (e[s] = i[s]);
	        return e
	    }
	
	    function r(t) {
	        return function() {
	            var e = this.element.val();
	            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
	        }
	    }
	    t.ui = t.ui || {}, t.ui.version = "1.12.1";
	    var h = 0,
	        l = Array.prototype.slice;
	    t.cleanData = (function(e) {
	            return function(i) {
	                var s, n, o;
	                for (o = 0; null != (n = i[o]); o++) try {
	                    s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
	                } catch (a) {}
	                e(i)
	            }
	        })(t.cleanData), t.widget = function(e, i, s) {
	            var n, o, a, r = {},
	                h = e.split(".")[0];
	            e = e.split(".")[1];
	            var l = h + "-" + e;
	            return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function(e) {
	                return !!t.data(e, l)
	            }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) {
	                return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
	            }, t.extend(o, n, {
	                version: s.version,
	                _proto: t.extend({}, s),
	                _childConstructors: []
	            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, (function(e, s) {
	                return t.isFunction(s) ? (r[e] = (function() {
	                    function t() {
	                        return i.prototype[e].apply(this, arguments)
	                    }
	
	                    function n(t) {
	                        return i.prototype[e].apply(this, t)
	                    }
	                    return function() {
	                        var e, i = this._super,
	                            o = this._superApply;
	                        return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
	                    }
	                })(), void 0) : (r[e] = s, void 0)
	            })), o.prototype = t.widget.extend(a, {
	                widgetEventPrefix: n ? a.widgetEventPrefix || e : e
	            }, r, {
	                constructor: o,
	                namespace: h,
	                widgetName: e,
	                widgetFullName: l
	            }), n ? (t.each(n._childConstructors, (function(e, i) {
	                var s = i.prototype;
	                t.widget(s.namespace + "." + s.widgetName, o, i._proto)
	            })), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
	        }, t.widget.extend = function(e) {
	            for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
	                for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
	            return e
	        }, t.widget.bridge = function(e, i) {
	            var s = i.prototype.widgetFullName || e;
	            t.fn[e] = function(n) {
	                var o = "string" == typeof n,
	                    a = l.call(arguments, 1),
	                    r = this;
	                return o ? this.length || "instance" !== n ? this.each((function() {
	                    var i, o = t.data(this, s);
	                    return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
	                })) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each((function() {
	                    var e = t.data(this, s);
	                    e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
	                }))), r
	            }
	        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
	            widgetName: "widget",
	            widgetEventPrefix: "",
	            defaultElement: "<div>",
	            options: {
	                classes: {},
	                disabled: !1,
	                create: null
	            },
	            _createWidget: function(e, i) {
	                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
	                    remove: function(t) {
	                        t.target === i && this.destroy()
	                    }
	                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
	            },
	            _getCreateOptions: function() {
	                return {}
	            },
	            _getCreateEventData: t.noop,
	            _create: t.noop,
	            _init: t.noop,
	            destroy: function() {
	                var e = this;
	                this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
	                    e._removeClass(i, t)
	                })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
	            },
	            _destroy: t.noop,
	            widget: function() {
	                return this.element
	            },
	            option: function(e, i) {
	                var s, n, o, a = e;
	                if (0 === arguments.length) return t.widget.extend({}, this.options);
	                if ("string" == typeof e)
	                    if (a = {}, s = e.split("."), e = s.shift(), s.length) {
	                        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
	                        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
	                        n[e] = i
	                    } else {
	                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
	                        a[e] = i
	                    }
	                return this._setOptions(a), this
	            },
	            _setOptions: function(t) {
	                var e;
	                for (e in t) this._setOption(e, t[e]);
	                return this
	            },
	            _setOption: function(t, e) {
	                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
	            },
	            _setOptionClasses: function(e) {
	                var i, s, n;
	                for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
	                    element: s,
	                    keys: i,
	                    classes: e,
	                    add: !0
	                })))
	            },
	            _setOptionDisabled: function(t) {
	                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
	            },
	            enable: function() {
	                return this._setOptions({
	                    disabled: !1
	                })
	            },
	            disable: function() {
	                return this._setOptions({
	                    disabled: !0
	                })
	            },
	            _classes: function(e) {
	                function i(i, o) {
	                    var a, r;
	                    for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
	                }
	                var s = [],
	                    n = this;
	                return e = t.extend({
	                    element: this.element,
	                    classes: this.options.classes || {}
	                }, e), this._on(e.element, {
	                    remove: "_untrackClassesElement"
	                }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
	            },
	            _untrackClassesElement: function(e) {
	                var i = this;
	                t.each(i.classesElementLookup, (function(s, n) {
	                    -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
	                }))
	            },
	            _removeClass: function(t, e, i) {
	                return this._toggleClass(t, e, i, !1)
	            },
	            _addClass: function(t, e, i) {
	                return this._toggleClass(t, e, i, !0)
	            },
	            _toggleClass: function(t, e, i, s) {
	                s = "boolean" == typeof s ? s : i;
	                var n = "string" == typeof t || null === t,
	                    o = {
	                        extra: n ? e : i,
	                        keys: n ? t : e,
	                        element: n ? this.element : t,
	                        add: s
	                    };
	                return o.element.toggleClass(this._classes(o), s), this
	            },
	            _on: function(e, i, s) {
	                var n, o = this;
	                "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, (function(s, a) {
	                    function r() {
	                        return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
	                    }
	                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
	                    var h = s.match(/^([\w:-]*)\s*(.*)$/),
	                        l = h[1] + o.eventNamespace,
	                        c = h[2];
	                    c ? n.on(l, c, r) : i.on(l, r)
	                }))
	            },
	            _off: function(e, i) {
	                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
	            },
	            _delay: function(t, e) {
	                function i() {
	                    return ("string" == typeof t ? s[t] : t).apply(s, arguments)
	                }
	                var s = this;
	                return setTimeout(i, e || 0)
	            },
	            _hoverable: function(e) {
	                this.hoverable = this.hoverable.add(e), this._on(e, {
	                    mouseenter: function(e) {
	                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
	                    },
	                    mouseleave: function(e) {
	                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
	                    }
	                })
	            },
	            _focusable: function(e) {
	                this.focusable = this.focusable.add(e), this._on(e, {
	                    focusin: function(e) {
	                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
	                    },
	                    focusout: function(e) {
	                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
	                    }
	                })
	            },
	            _trigger: function(e, i, s) {
	                var n, o, a = this.options[e];
	                if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
	                    for (n in o) n in i || (i[n] = o[n]);
	                return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
	            }
	        }, t.each({
	            show: "fadeIn",
	            hide: "fadeOut"
	        }, (function(e, i) {
	            t.Widget.prototype["_" + e] = function(s, n, o) {
	                "string" == typeof n && (n = {
	                    effect: n
	                });
	                var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
	                n = n || {}, "number" == typeof n && (n = {
	                    duration: n
	                }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue((function(i) {
	                    t(this)[e](), o && o.call(s[0]), i()
	                }))
	            }
	        })), t.widget,
	        (function() {
	            function e(t, e, i) {
	                return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
	            }
	
	            function i(e, i) {
	                return parseInt(t.css(e, i), 10) || 0
	            }
	
	            function s(e) {
	                var i = e[0];
	                return 9 === i.nodeType ? {
	                    width: e.width(),
	                    height: e.height(),
	                    offset: {
	                        top: 0,
	                        left: 0
	                    }
	                } : t.isWindow(i) ? {
	                    width: e.width(),
	                    height: e.height(),
	                    offset: {
	                        top: e.scrollTop(),
	                        left: e.scrollLeft()
	                    }
	                } : i.preventDefault ? {
	                    width: 0,
	                    height: 0,
	                    offset: {
	                        top: i.pageY,
	                        left: i.pageX
	                    }
	                } : {
	                    width: e.outerWidth(),
	                    height: e.outerHeight(),
	                    offset: e.offset()
	                }
	            }
	            var n, o = Math.max,
	                a = Math.abs,
	                r = /left|center|right/,
	                h = /top|center|bottom/,
	                l = /[\+\-]\d+(\.[\d]+)?%?/,
	                c = /^\w+/,
	                u = /%$/,
	                d = t.fn.position;
	            t.position = {
	                scrollbarWidth: function() {
	                    if (void 0 !== n) return n;
	                    var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
	                        o = s.children()[0];
	                    return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
	                },
	                getScrollInfo: function(e) {
	                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
	                        s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
	                        n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
	                        o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
	                    return {
	                        width: o ? t.position.scrollbarWidth() : 0,
	                        height: n ? t.position.scrollbarWidth() : 0
	                    }
	                },
	                getWithinInfo: function(e) {
	                    var i = t(e || window),
	                        s = t.isWindow(i[0]),
	                        n = !!i[0] && 9 === i[0].nodeType,
	                        o = !s && !n;
	                    return {
	                        element: i,
	                        isWindow: s,
	                        isDocument: n,
	                        offset: o ? t(e).offset() : {
	                            left: 0,
	                            top: 0
	                        },
	                        scrollLeft: i.scrollLeft(),
	                        scrollTop: i.scrollTop(),
	                        width: i.outerWidth(),
	                        height: i.outerHeight()
	                    }
	                }
	            }, t.fn.position = function(n) {
	                if (!n || !n.of) return d.apply(this, arguments);
	                n = t.extend({}, n);
	                var u, p, f, g, m, _, v = t(n.of),
	                    b = t.position.getWithinInfo(n.within),
	                    y = t.position.getScrollInfo(b),
	                    w = (n.collision || "flip").split(" "),
	                    k = {};
	                return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], (function() {
	                    var t, e, i = (n[this] || "").split(" ");
	                    1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
	                })), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each((function() {
	                    var s, r, h = t(this),
	                        l = h.outerWidth(),
	                        c = h.outerHeight(),
	                        d = i(this, "marginLeft"),
	                        _ = i(this, "marginTop"),
	                        x = l + d + i(this, "marginRight") + y.width,
	                        C = c + _ + i(this, "marginBottom") + y.height,
	                        D = t.extend({}, m),
	                        I = e(k.my, h.outerWidth(), h.outerHeight());
	                    "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
	                        marginLeft: d,
	                        marginTop: _
	                    }, t.each(["left", "top"], (function(e, i) {
	                        t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
	                            targetWidth: p,
	                            targetHeight: f,
	                            elemWidth: l,
	                            elemHeight: c,
	                            collisionPosition: s,
	                            collisionWidth: x,
	                            collisionHeight: C,
	                            offset: [u[0] + I[0], u[1] + I[1]],
	                            my: n.my,
	                            at: n.at,
	                            within: b,
	                            elem: h
	                        })
	                    })), n.using && (r = function(t) {
	                        var e = g.left - D.left,
	                            i = e + p - l,
	                            s = g.top - D.top,
	                            r = s + f - c,
	                            u = {
	                                target: {
	                                    element: v,
	                                    left: g.left,
	                                    top: g.top,
	                                    width: p,
	                                    height: f
	                                },
	                                element: {
	                                    element: h,
	                                    left: D.left,
	                                    top: D.top,
	                                    width: l,
	                                    height: c
	                                },
	                                horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
	                                vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
	                            };
	                        l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u)
	                    }), h.offset(t.extend(D, {
	                        using: r
	                    }))
	                }))
	            }, t.ui.position = {
	                fit: {
	                    left: function(t, e) {
	                        var i, s = e.within,
	                            n = s.isWindow ? s.scrollLeft : s.offset.left,
	                            a = s.width,
	                            r = t.left - e.collisionPosition.marginLeft,
	                            h = n - r,
	                            l = r + e.collisionWidth - a - n;
	                        e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
	                    },
	                    top: function(t, e) {
	                        var i, s = e.within,
	                            n = s.isWindow ? s.scrollTop : s.offset.top,
	                            a = e.within.height,
	                            r = t.top - e.collisionPosition.marginTop,
	                            h = n - r,
	                            l = r + e.collisionHeight - a - n;
	                        e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
	                    }
	                },
	                flip: {
	                    left: function(t, e) {
	                        var i, s, n = e.within,
	                            o = n.offset.left + n.scrollLeft,
	                            r = n.width,
	                            h = n.isWindow ? n.scrollLeft : n.offset.left,
	                            l = t.left - e.collisionPosition.marginLeft,
	                            c = l - h,
	                            u = l + e.collisionWidth - r - h,
	                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
	                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
	                            f = -2 * e.offset[0];
	                        0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f))
	                    },
	                    top: function(t, e) {
	                        var i, s, n = e.within,
	                            o = n.offset.top + n.scrollTop,
	                            r = n.height,
	                            h = n.isWindow ? n.scrollTop : n.offset.top,
	                            l = t.top - e.collisionPosition.marginTop,
	                            c = l - h,
	                            u = l + e.collisionHeight - r - h,
	                            d = "top" === e.my[1],
	                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
	                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
	                            g = -2 * e.offset[1];
	                        0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g))
	                    }
	                },
	                flipfit: {
	                    left: function() {
	                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
	                    },
	                    top: function() {
	                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
	                    }
	                }
	            }
	        })(), t.ui.position, t.extend(t.expr[":"], {
	            data: t.expr.createPseudo ? t.expr.createPseudo((function(e) {
	                return function(i) {
	                    return !!t.data(i, e)
	                }
	            })) : function(e, i, s) {
	                return !!t.data(e, s[3])
	            }
	        }), t.fn.extend({
	            disableSelection: (function() {
	                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
	                return function() {
	                    return this.on(t + ".ui-disableSelection", (function(t) {
	                        t.preventDefault()
	                    }))
	                }
	            })(),
	            enableSelection: function() {
	                return this.off(".ui-disableSelection")
	            }
	        });
	    var c = "ui-effects-",
	        u = "ui-effects-style",
	        d = "ui-effects-animated",
	        p = t;
	    t.effects = {
	            effect: {}
	        },
	        (function(t, e) {
	            function i(t, e, i) {
	                var s = u[e.type] || {};
	                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
	            }
	
	            function s(i) {
	                var s = l(),
	                    n = s._rgba = [];
	                return i = i.toLowerCase(), f(h, (function(t, o) {
	                    var a, r = o.re.exec(i),
	                        h = r && o.parse(r),
	                        l = o.space || "rgba";
	                    return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
	                })), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
	            }
	
	            function n(t, e, i) {
	                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
	            }
	            var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
	                r = /^([\-+])=\s*(\d+\.?\d*)/,
	                h = [{
	                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
	                    parse: function(t) {
	                        return [t[1], t[2], t[3], t[4]]
	                    }
	                }, {
	                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
	                    parse: function(t) {
	                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
	                    }
	                }, {
	                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
	                    parse: function(t) {
	                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
	                    }
	                }, {
	                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
	                    parse: function(t) {
	                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
	                    }
	                }, {
	                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
	                    space: "hsla",
	                    parse: function(t) {
	                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
	                    }
	                }],
	                l = t.Color = function(e, i, s, n) {
	                    return new t.Color.fn.parse(e, i, s, n)
	                },
	                c = {
	                    rgba: {
	                        props: {
	                            red: {
	                                idx: 0,
	                                type: "byte"
	                            },
	                            green: {
	                                idx: 1,
	                                type: "byte"
	                            },
	                            blue: {
	                                idx: 2,
	                                type: "byte"
	                            }
	                        }
	                    },
	                    hsla: {
	                        props: {
	                            hue: {
	                                idx: 0,
	                                type: "degrees"
	                            },
	                            saturation: {
	                                idx: 1,
	                                type: "percent"
	                            },
	                            lightness: {
	                                idx: 2,
	                                type: "percent"
	                            }
	                        }
	                    }
	                },
	                u = {
	                    "byte": {
	                        floor: !0,
	                        max: 255
	                    },
	                    percent: {
	                        max: 1
	                    },
	                    degrees: {
	                        mod: 360,
	                        floor: !0
	                    }
	                },
	                d = l.support = {},
	                p = t("<p>")[0],
	                f = t.each;
	            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, (function(t, e) {
	                e.cache = "_" + t, e.props.alpha = {
	                    idx: 3,
	                    type: "percent",
	                    def: 1
	                }
	            })), l.fn = t.extend(l.prototype, {
	                parse: function(n, a, r, h) {
	                    if (n === e) return this._rgba = [null, null, null, null], this;
	                    (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
	                    var u = this,
	                        d = t.type(n),
	                        p = this._rgba = [];
	                    return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, (function(t, e) {
	                        p[e.idx] = i(n[e.idx], e)
	                    })), this) : "object" === d ? (n instanceof l ? f(c, (function(t, e) {
	                        n[e.cache] && (u[e.cache] = n[e.cache].slice())
	                    })) : f(c, (function(e, s) {
	                        var o = s.cache;
	                        f(s.props, (function(t, e) {
	                            if (!u[o] && s.to) {
	                                if ("alpha" === t || null == n[t]) return;
	                                u[o] = s.to(u._rgba)
	                            }
	                            u[o][e.idx] = i(n[t], e, !0)
	                        })), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
	                    })), this) : e
	                },
	                is: function(t) {
	                    var i = l(t),
	                        s = !0,
	                        n = this;
	                    return f(c, (function(t, o) {
	                        var a, r = i[o.cache];
	                        return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, (function(t, i) {
	                            return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
	                        }))), s
	                    })), s
	                },
	                _space: function() {
	                    var t = [],
	                        e = this;
	                    return f(c, (function(i, s) {
	                        e[s.cache] && t.push(i)
	                    })), t.pop()
	                },
	                transition: function(t, e) {
	                    var s = l(t),
	                        n = s._space(),
	                        o = c[n],
	                        a = 0 === this.alpha() ? l("transparent") : this,
	                        r = a[o.cache] || o.to(a._rgba),
	                        h = r.slice();
	                    return s = s[o.cache], f(o.props, (function(t, n) {
	                        var o = n.idx,
	                            a = r[o],
	                            l = s[o],
	                            c = u[n.type] || {};
	                        null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
	                    })), this[n](h)
	                },
	                blend: function(e) {
	                    if (1 === this._rgba[3]) return this;
	                    var i = this._rgba.slice(),
	                        s = i.pop(),
	                        n = l(e)._rgba;
	                    return l(t.map(i, (function(t, e) {
	                        return (1 - s) * n[e] + s * t
	                    })))
	                },
	                toRgbaString: function() {
	                    var e = "rgba(",
	                        i = t.map(this._rgba, (function(t, e) {
	                            return null == t ? e > 2 ? 1 : 0 : t
	                        }));
	                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
	                },
	                toHslaString: function() {
	                    var e = "hsla(",
	                        i = t.map(this.hsla(), (function(t, e) {
	                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
	                        }));
	                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
	                },
	                toHexString: function(e) {
	                    var i = this._rgba.slice(),
	                        s = i.pop();
	                    return e && i.push(~~(255 * s)), "#" + t.map(i, (function(t) {
	                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
	                    })).join("")
	                },
	                toString: function() {
	                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
	                }
	            }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
	                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
	                var e, i, s = t[0] / 255,
	                    n = t[1] / 255,
	                    o = t[2] / 255,
	                    a = t[3],
	                    r = Math.max(s, n, o),
	                    h = Math.min(s, n, o),
	                    l = r - h,
	                    c = r + h,
	                    u = .5 * c;
	                return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
	            }, c.hsla.from = function(t) {
	                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
	                var e = t[0] / 360,
	                    i = t[1],
	                    s = t[2],
	                    o = t[3],
	                    a = .5 >= s ? s * (1 + i) : s + i - s * i,
	                    r = 2 * s - a;
	                return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
	            }, f(c, (function(s, n) {
	                var o = n.props,
	                    a = n.cache,
	                    h = n.to,
	                    c = n.from;
	                l.fn[s] = function(s) {
	                    if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
	                    var n, r = t.type(s),
	                        u = "array" === r || "object" === r ? s : arguments,
	                        d = this[a].slice();
	                    return f(o, (function(t, e) {
	                        var s = u["object" === r ? t : e.idx];
	                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
	                    })), c ? (n = l(c(d)), n[a] = d, n) : l(d)
	                }, f(o, (function(e, i) {
	                    l.fn[e] || (l.fn[e] = function(n) {
	                        var o, a = t.type(n),
	                            h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
	                            l = this[h](),
	                            c = l[i.idx];
	                        return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
	                    })
	                }))
	            })), l.hook = function(e) {
	                var i = e.split(" ");
	                f(i, (function(e, i) {
	                    t.cssHooks[i] = {
	                        set: function(e, n) {
	                            var o, a, r = "";
	                            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
	                                if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
	                                    for (a = "backgroundColor" === i ? e.parentNode : e;
	                                        ("" === r || "transparent" === r) && a && a.style;) try {
	                                        r = t.css(a, "backgroundColor"), a = a.parentNode
	                                    } catch (h) {}
	                                    n = n.blend(r && "transparent" !== r ? r : "_default")
	                                }
	                                n = n.toRgbaString()
	                            }
	                            try {
	                                e.style[i] = n
	                            } catch (h) {}
	                        }
	                    }, t.fx.step[i] = function(e) {
	                        e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
	                    }
	                }))
	            }, l.hook(a), t.cssHooks.borderColor = {
	                expand: function(t) {
	                    var e = {};
	                    return f(["Top", "Right", "Bottom", "Left"], (function(i, s) {
	                        e["border" + s + "Color"] = t
	                    })), e
	                }
	            }, o = t.Color.names = {
	                aqua: "#00ffff",
	                black: "#000000",
	                blue: "#0000ff",
	                fuchsia: "#ff00ff",
	                gray: "#808080",
	                green: "#008000",
	                lime: "#00ff00",
	                maroon: "#800000",
	                navy: "#000080",
	                olive: "#808000",
	                purple: "#800080",
	                red: "#ff0000",
	                silver: "#c0c0c0",
	                teal: "#008080",
	                white: "#ffffff",
	                yellow: "#ffff00",
	                transparent: [null, null, null, 0],
	                _default: "#ffffff"
	            }
	        })(p),
	        (function() {
	            function e(e) {
	                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
	                    o = {};
	                if (n && n.length && n[0] && n[n[0]])
	                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
	                else
	                    for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
	                return o
	            }
	
	            function i(e, i) {
	                var s, o, a = {};
	                for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
	                return a
	            }
	            var s = ["add", "remove", "toggle"],
	                n = {
	                    border: 1,
	                    borderBottom: 1,
	                    borderColor: 1,
	                    borderLeft: 1,
	                    borderRight: 1,
	                    borderTop: 1,
	                    borderWidth: 1,
	                    margin: 1,
	                    padding: 1
	                };
	            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function(e, i) {
	                t.fx.step[i] = function(t) {
	                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
	                }
	            })), t.fn.addBack || (t.fn.addBack = function(t) {
	                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	            }), t.effects.animateClass = function(n, o, a, r) {
	                var h = t.speed(o, a, r);
	                return this.queue((function() {
	                    var o, a = t(this),
	                        r = a.attr("class") || "",
	                        l = h.children ? a.find("*").addBack() : a;
	                    l = l.map((function() {
	                        var i = t(this);
	                        return {
	                            el: i,
	                            start: e(this)
	                        }
	                    })), o = function() {
	                        t.each(s, (function(t, e) {
	                            n[e] && a[e + "Class"](n[e])
	                        }))
	                    }, o(), l = l.map((function() {
	                        return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
	                    })), a.attr("class", r), l = l.map((function() {
	                        var e = this,
	                            i = t.Deferred(),
	                            s = t.extend({}, h, {
	                                queue: !1,
	                                complete: function() {
	                                    i.resolve(e)
	                                }
	                            });
	                        return this.el.animate(this.diff, s), i.promise()
	                    })), t.when.apply(t, l.get()).done((function() {
	                        o(), t.each(arguments, (function() {
	                            var e = this.el;
	                            t.each(this.diff, (function(t) {
	                                e.css(t, "")
	                            }))
	                        })), h.complete.call(a[0])
	                    }))
	                }))
	            }, t.fn.extend({
	                addClass: (function(e) {
	                    return function(i, s, n, o) {
	                        return s ? t.effects.animateClass.call(this, {
	                            add: i
	                        }, s, n, o) : e.apply(this, arguments)
	                    }
	                })(t.fn.addClass),
	                removeClass: (function(e) {
	                    return function(i, s, n, o) {
	                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
	                            remove: i
	                        }, s, n, o) : e.apply(this, arguments)
	                    }
	                })(t.fn.removeClass),
	                toggleClass: (function(e) {
	                    return function(i, s, n, o, a) {
	                        return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
	                            add: i
	                        } : {
	                            remove: i
	                        }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
	                            toggle: i
	                        }, s, n, o)
	                    }
	                })(t.fn.toggleClass),
	                switchClass: function(e, i, s, n, o) {
	                    return t.effects.animateClass.call(this, {
	                        add: i,
	                        remove: e
	                    }, s, n, o)
	                }
	            })
	        })(),
	        (function() {
	            function e(e, i, s, n) {
	                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
	                    effect: e
	                }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
	            }
	
	            function i(e) {
	                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
	            }
	
	            function s(t, e) {
	                var i = e.outerWidth(),
	                    s = e.outerHeight(),
	                    n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
	                    o = n.exec(t) || ["", 0, i, s, 0];
	                return {
	                    top: parseFloat(o[1]) || 0,
	                    right: "auto" === o[2] ? i : parseFloat(o[2]),
	                    bottom: "auto" === o[3] ? s : parseFloat(o[3]),
	                    left: parseFloat(o[4]) || 0
	                }
	            }
	            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (function(e) {
	                return function(i) {
	                    return !!t(i).data(d) || e(i)
	                }
	            })(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
	                save: function(t, e) {
	                    for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]])
	                },
	                restore: function(t, e) {
	                    for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i))
	                },
	                setMode: function(t, e) {
	                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
	                },
	                createWrapper: function(e) {
	                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
	                    var i = {
	                            width: e.outerWidth(!0),
	                            height: e.outerHeight(!0),
	                            "float": e.css("float")
	                        },
	                        s = t("<div></div>").addClass("ui-effects-wrapper").css({
	                            fontSize: "100%",
	                            background: "transparent",
	                            border: "none",
	                            margin: 0,
	                            padding: 0
	                        }),
	                        n = {
	                            width: e.width(),
	                            height: e.height()
	                        },
	                        o = document.activeElement;
	                    try {
	                        o.id
	                    } catch (a) {
	                        o = document.body
	                    }
	                    return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
	                        position: "relative"
	                    }), e.css({
	                        position: "relative"
	                    })) : (t.extend(i, {
	                        position: e.css("position"),
	                        zIndex: e.css("z-index")
	                    }), t.each(["top", "left", "bottom", "right"], (function(t, s) {
	                        i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
	                    })), e.css({
	                        position: "relative",
	                        top: 0,
	                        left: 0,
	                        right: "auto",
	                        bottom: "auto"
	                    })), e.css(n), s.css(i).show()
	                },
	                removeWrapper: function(e) {
	                    var i = document.activeElement;
	                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
	                }
	            }), t.extend(t.effects, {
	                version: "1.12.1",
	                define: function(e, i, s) {
	                    return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
	                },
	                scaledDimensions: function(t, e, i) {
	                    if (0 === e) return {
	                        height: 0,
	                        width: 0,
	                        outerHeight: 0,
	                        outerWidth: 0
	                    };
	                    var s = "horizontal" !== i ? (e || 100) / 100 : 1,
	                        n = "vertical" !== i ? (e || 100) / 100 : 1;
	                    return {
	                        height: t.height() * n,
	                        width: t.width() * s,
	                        outerHeight: t.outerHeight() * n,
	                        outerWidth: t.outerWidth() * s
	                    }
	                },
	                clipToBox: function(t) {
	                    return {
	                        width: t.clip.right - t.clip.left,
	                        height: t.clip.bottom - t.clip.top,
	                        left: t.clip.left,
	                        top: t.clip.top
	                    }
	                },
	                unshift: function(t, e, i) {
	                    var s = t.queue();
	                    e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
	                },
	                saveStyle: function(t) {
	                    t.data(u, t[0].style.cssText)
	                },
	                restoreStyle: function(t) {
	                    t[0].style.cssText = t.data(u) || "", t.removeData(u)
	                },
	                mode: function(t, e) {
	                    var i = t.is(":hidden");
	                    return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
	                },
	                getBaseline: function(t, e) {
	                    var i, s;
	                    switch (t[0]) {
	                        case "top":
	                            i = 0;
	                            break;
	                        case "middle":
	                            i = .5;
	                            break;
	                        case "bottom":
	                            i = 1;
	                            break;
	                        default:
	                            i = t[0] / e.height
	                    }
	                    switch (t[1]) {
	                        case "left":
	                            s = 0;
	                            break;
	                        case "center":
	                            s = .5;
	                            break;
	                        case "right":
	                            s = 1;
	                            break;
	                        default:
	                            s = t[1] / e.width
	                    }
	                    return {
	                        x: s,
	                        y: i
	                    }
	                },
	                createPlaceholder: function(e) {
	                    var i, s = e.css("position"),
	                        n = e.position();
	                    return e.css({
	                        marginTop: e.css("marginTop"),
	                        marginBottom: e.css("marginBottom"),
	                        marginLeft: e.css("marginLeft"),
	                        marginRight: e.css("marginRight")
	                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
	                        display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
	                        visibility: "hidden",
	                        marginTop: e.css("marginTop"),
	                        marginBottom: e.css("marginBottom"),
	                        marginLeft: e.css("marginLeft"),
	                        marginRight: e.css("marginRight"),
	                        "float": e.css("float")
	                    }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
	                        position: s,
	                        left: n.left,
	                        top: n.top
	                    }), i
	                },
	                removePlaceholder: function(t) {
	                    var e = c + "placeholder",
	                        i = t.data(e);
	                    i && (i.remove(), t.removeData(e))
	                },
	                cleanUp: function(e) {
	                    t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
	                },
	                setTransition: function(e, i, s, n) {
	                    return n = n || {}, t.each(i, (function(t, i) {
	                        var o = e.cssUnit(i);
	                        o[0] > 0 && (n[i] = o[0] * s + o[1])
	                    })), n
	                }
	            }), t.fn.extend({
	                effect: function() {
	                    function i(e) {
	                        function i() {
	                            r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a()
	                        }
	
	                        function a() {
	                            t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e()
	                        }
	                        var r = t(this);
	                        s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a)
	                    }
	                    var s = e.apply(this, arguments),
	                        n = t.effects.effect[s.effect],
	                        o = n.mode,
	                        a = s.queue,
	                        r = a || "fx",
	                        h = s.complete,
	                        l = s.mode,
	                        c = [],
	                        u = function(e) {
	                            var i = t(this),
	                                s = t.effects.mode(i, l) || o;
	                            i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
	                        };
	                    return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each((function() {
	                        h && h.call(this)
	                    })) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
	                },
	                show: (function(t) {
	                    return function(s) {
	                        if (i(s)) return t.apply(this, arguments);
	                        var n = e.apply(this, arguments);
	                        return n.mode = "show", this.effect.call(this, n)
	                    }
	                })(t.fn.show),
	                hide: (function(t) {
	                    return function(s) {
	                        if (i(s)) return t.apply(this, arguments);
	                        var n = e.apply(this, arguments);
	                        return n.mode = "hide", this.effect.call(this, n)
	                    }
	                })(t.fn.hide),
	                toggle: (function(t) {
	                    return function(s) {
	                        if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
	                        var n = e.apply(this, arguments);
	                        return n.mode = "toggle", this.effect.call(this, n)
	                    }
	                })(t.fn.toggle),
	                cssUnit: function(e) {
	                    var i = this.css(e),
	                        s = [];
	                    return t.each(["em", "px", "%", "pt"], (function(t, e) {
	                        i.indexOf(e) > 0 && (s = [parseFloat(i), e])
	                    })), s
	                },
	                cssClip: function(t) {
	                    return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
	                },
	                transfer: function(e, i) {
	                    var s = t(this),
	                        n = t(e.to),
	                        o = "fixed" === n.css("position"),
	                        a = t("body"),
	                        r = o ? a.scrollTop() : 0,
	                        h = o ? a.scrollLeft() : 0,
	                        l = n.offset(),
	                        c = {
	                            top: l.top - r,
	                            left: l.left - h,
	                            height: n.innerHeight(),
	                            width: n.innerWidth()
	                        },
	                        u = s.offset(),
	                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
	                            top: u.top - r,
	                            left: u.left - h,
	                            height: s.innerHeight(),
	                            width: s.innerWidth(),
	                            position: o ? "fixed" : "absolute"
	                        }).animate(c, e.duration, e.easing, (function() {
	                            d.remove(), t.isFunction(i) && i()
	                        }))
	                }
	            }), t.fx.step.clip = function(e) {
	                e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
	                    top: e.pos * (e.end.top - e.start.top) + e.start.top,
	                    right: e.pos * (e.end.right - e.start.right) + e.start.right,
	                    bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
	                    left: e.pos * (e.end.left - e.start.left) + e.start.left
	                })
	            }
	        })(),
	        (function() {
	            var e = {};
	            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function(t, i) {
	                e[i] = function(e) {
	                    return Math.pow(e, t + 2)
	                }
	            })), t.extend(e, {
	                Sine: function(t) {
	                    return 1 - Math.cos(t * Math.PI / 2)
	                },
	                Circ: function(t) {
	                    return 1 - Math.sqrt(1 - t * t)
	                },
	                Elastic: function(t) {
	                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
	                },
	                Back: function(t) {
	                    return t * t * (3 * t - 2)
	                },
	                Bounce: function(t) {
	                    for (var e, i = 4;
	                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
	                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
	                }
	            }), t.each(e, (function(e, i) {
	                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
	                    return 1 - i(1 - t)
	                }, t.easing["easeInOut" + e] = function(t) {
	                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
	                }
	            }))
	        })();
	    var f = t.effects;
	    t.effects.define("blind", "hide", (function(e, i) {
	        var s = {
	                up: ["bottom", "top"],
	                vertical: ["bottom", "top"],
	                down: ["top", "bottom"],
	                left: ["right", "left"],
	                horizontal: ["right", "left"],
	                right: ["left", "right"]
	            },
	            n = t(this),
	            o = e.direction || "up",
	            a = n.cssClip(),
	            r = {
	                clip: t.extend({}, a)
	            },
	            h = t.effects.createPlaceholder(n);
	        r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
	            queue: !1,
	            duration: e.duration,
	            easing: e.easing,
	            complete: i
	        })
	    })), t.effects.define("bounce", (function(e, i) {
	        var s, n, o, a = t(this),
	            r = e.mode,
	            h = "hide" === r,
	            l = "show" === r,
	            c = e.direction || "up",
	            u = e.distance,
	            d = e.times || 5,
	            p = 2 * d + (l || h ? 1 : 0),
	            f = e.duration / p,
	            g = e.easing,
	            m = "up" === c || "down" === c ? "top" : "left",
	            _ = "up" === c || "left" === c,
	            v = 0,
	            b = a.queue().length;
	        for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
	                opacity: 1
	            }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
	        h && (s = {
	            opacity: 0
	        }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
	    })), t.effects.define("clip", "hide", (function(e, i) {
	        var s, n = {},
	            o = t(this),
	            a = e.direction || "vertical",
	            r = "both" === a,
	            h = r || "horizontal" === a,
	            l = r || "vertical" === a;
	        s = o.cssClip(), n.clip = {
	            top: l ? (s.bottom - s.top) / 2 : s.top,
	            right: h ? (s.right - s.left) / 2 : s.right,
	            bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
	            left: h ? (s.right - s.left) / 2 : s.left
	        }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
	            queue: !1,
	            duration: e.duration,
	            easing: e.easing,
	            complete: i
	        })
	    })), t.effects.define("drop", "hide", (function(e, i) {
	        var s, n = t(this),
	            o = e.mode,
	            a = "show" === o,
	            r = e.direction || "left",
	            h = "up" === r || "down" === r ? "top" : "left",
	            l = "up" === r || "left" === r ? "-=" : "+=",
	            c = "+=" === l ? "-=" : "+=",
	            u = {
	                opacity: 0
	            };
	        t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
	            queue: !1,
	            duration: e.duration,
	            easing: e.easing,
	            complete: i
	        })
	    })), t.effects.define("explode", "hide", (function(e, i) {
	        function s() {
	            b.push(this), b.length === u * d && n()
	        }
	
	        function n() {
	            p.css({
	                visibility: "visible"
	            }), t(b).remove(), i()
	        }
	        var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
	            d = u,
	            p = t(this),
	            f = e.mode,
	            g = "show" === f,
	            m = p.show().css("visibility", "hidden").offset(),
	            _ = Math.ceil(p.outerWidth() / d),
	            v = Math.ceil(p.outerHeight() / u),
	            b = [];
	        for (o = 0; u > o; o++)
	            for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
	                position: "absolute",
	                visibility: "visible",
	                left: -a * _,
	                top: -o * v
	            }).parent().addClass("ui-effects-explode").css({
	                position: "absolute",
	                overflow: "hidden",
	                width: _,
	                height: v,
	                left: r + (g ? l * _ : 0),
	                top: h + (g ? c * v : 0),
	                opacity: g ? 0 : 1
	            }).animate({
	                left: r + (g ? 0 : l * _),
	                top: h + (g ? 0 : c * v),
	                opacity: g ? 1 : 0
	            }, e.duration || 500, e.easing, s)
	    })), t.effects.define("fade", "toggle", (function(e, i) {
	        var s = "show" === e.mode;
	        t(this).css("opacity", s ? 0 : 1).animate({
	            opacity: s ? 1 : 0
	        }, {
	            queue: !1,
	            duration: e.duration,
	            easing: e.easing,
	            complete: i
	        })
	    })), t.effects.define("fold", "hide", (function(e, i) {
	        var s = t(this),
	            n = e.mode,
	            o = "show" === n,
	            a = "hide" === n,
	            r = e.size || 15,
	            h = /([0-9]+)%/.exec(r),
	            l = !!e.horizFirst,
	            c = l ? ["right", "bottom"] : ["bottom", "right"],
	            u = e.duration / 2,
	            d = t.effects.createPlaceholder(s),
	            p = s.cssClip(),
	            f = {
	                clip: t.extend({}, p)
	            },
	            g = {
	                clip: t.extend({}, p)
	            },
	            m = [p[c[0]], p[c[1]]],
	            _ = s.queue().length;
	        h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue((function(i) {
	            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
	        })).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4)
	    })), t.effects.define("highlight", "show", (function(e, i) {
	        var s = t(this),
	            n = {
	                backgroundColor: s.css("backgroundColor")
	            };
	        "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
	            backgroundImage: "none",
	            backgroundColor: e.color || "#ffff99"
	        }).animate(n, {
	            queue: !1,
	            duration: e.duration,
	            easing: e.easing,
	            complete: i
	        })
	    })), t.effects.define("size", (function(e, i) {
	        var s, n, o, a = t(this),
	            r = ["fontSize"],
	            h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
	            l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
	            c = e.mode,
	            u = "effect" !== c,
	            d = e.scale || "both",
	            p = e.origin || ["middle", "center"],
	            f = a.css("position"),
	            g = a.position(),
	            m = t.effects.scaledDimensions(a),
	            _ = e.from || m,
	            v = e.to || t.effects.scaledDimensions(a, 0);
	        t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
	            from: {
	                y: _.height / m.height,
	                x: _.width / m.width
	            },
	            to: {
	                y: v.height / m.height,
	                x: v.width / m.width
	            }
	        }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each((function() {
	            var i = t(this),
	                s = t.effects.scaledDimensions(i),
	                o = {
	                    height: s.height * n.from.y,
	                    width: s.width * n.from.x,
	                    outerHeight: s.outerHeight * n.from.y,
	                    outerWidth: s.outerWidth * n.from.x
	                },
	                a = {
	                    height: s.height * n.to.y,
	                    width: s.width * n.to.x,
	                    outerHeight: s.height * n.to.y,
	                    outerWidth: s.width * n.to.x
	                };
	            n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, (function() {
	                u && t.effects.restoreStyle(i)
	            }))
	        }))), a.animate(v, {
	            queue: !1,
	            duration: e.duration,
	            easing: e.easing,
	            complete: function() {
	                var e = a.offset();
	                0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
	            }
	        })
	    })), t.effects.define("scale", (function(e, i) {
	        var s = t(this),
	            n = e.mode,
	            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
	            a = t.extend(!0, {
	                from: t.effects.scaledDimensions(s),
	                to: t.effects.scaledDimensions(s, o, e.direction || "both"),
	                origin: e.origin || ["middle", "center"]
	            }, e);
	        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
	    })), t.effects.define("puff", "hide", (function(e, i) {
	        var s = t.extend(!0, {}, e, {
	            fade: !0,
	            percent: parseInt(e.percent, 10) || 150
	        });
	        t.effects.effect.scale.call(this, s, i)
	    })), t.effects.define("pulsate", "show", (function(e, i) {
	        var s = t(this),
	            n = e.mode,
	            o = "show" === n,
	            a = "hide" === n,
	            r = o || a,
	            h = 2 * (e.times || 5) + (r ? 1 : 0),
	            l = e.duration / h,
	            c = 0,
	            u = 1,
	            d = s.queue().length;
	        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) s.animate({
	            opacity: c
	        }, l, e.easing), c = 1 - c;
	        s.animate({
	            opacity: c
	        }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1)
	    })), t.effects.define("shake", (function(e, i) {
	        var s = 1,
	            n = t(this),
	            o = e.direction || "left",
	            a = e.distance || 20,
	            r = e.times || 3,
	            h = 2 * r + 1,
	            l = Math.round(e.duration / h),
	            c = "up" === o || "down" === o ? "top" : "left",
	            u = "up" === o || "left" === o,
	            d = {},
	            p = {},
	            f = {},
	            g = n.queue().length;
	        for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
	        n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1)
	    })), t.effects.define("slide", "show", (function(e, i) {
	        var s, n, o = t(this),
	            a = {
	                up: ["bottom", "top"],
	                down: ["top", "bottom"],
	                left: ["right", "left"],
	                right: ["left", "right"]
	            },
	            r = e.mode,
	            h = e.direction || "left",
	            l = "up" === h || "down" === h ? "top" : "left",
	            c = "up" === h || "left" === h,
	            u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
	            d = {};
	        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
	            queue: !1,
	            duration: e.duration,
	            easing: e.easing,
	            complete: i
	        })
	    }));
	    var f;
	    t.uiBackCompat !== !1 && (f = t.effects.define("transfer", (function(e, i) {
	        t(this).transfer(e, i)
	    }))), t.ui.focusable = function(i, s) {
	        var n, o, a, r, h, l = i.nodeName.toLowerCase();
	        return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)))
	    }, t.extend(t.expr[":"], {
	        focusable: function(e) {
	            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
	        }
	    }), t.ui.focusable, t.fn.form = function() {
	        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
	    }, t.ui.formResetMixin = {
	        _formResetHandler: function() {
	            var e = t(this);
	            setTimeout((function() {
	                var i = e.data("ui-form-reset-instances");
	                t.each(i, (function() {
	                    this.refresh()
	                }))
	            }))
	        },
	        _bindFormResetHandler: function() {
	            if (this.form = this.element.form(), this.form.length) {
	                var t = this.form.data("ui-form-reset-instances") || [];
	                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
	            }
	        },
	        _unbindFormResetHandler: function() {
	            if (this.form.length) {
	                var e = this.form.data("ui-form-reset-instances");
	                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
	            }
	        }
	    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], (function(e, i) {
	        function s(e, i, s, o) {
	            return t.each(n, (function() {
	                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
	            })), i
	        }
	        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
	            o = i.toLowerCase(),
	            a = {
	                innerWidth: t.fn.innerWidth,
	                innerHeight: t.fn.innerHeight,
	                outerWidth: t.fn.outerWidth,
	                outerHeight: t.fn.outerHeight
	            };
	        t.fn["inner" + i] = function(e) {
	            return void 0 === e ? a["inner" + i].call(this) : this.each((function() {
	                t(this).css(o, s(this, e) + "px")
	            }))
	        }, t.fn["outer" + i] = function(e, n) {
	            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each((function() {
	                t(this).css(o, s(this, e, !0, n) + "px")
	            }))
	        }
	    })), t.fn.addBack = function(t) {
	        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	    }), t.ui.keyCode = {
	        BACKSPACE: 8,
	        COMMA: 188,
	        DELETE: 46,
	        DOWN: 40,
	        END: 35,
	        ENTER: 13,
	        ESCAPE: 27,
	        HOME: 36,
	        LEFT: 37,
	        PAGE_DOWN: 34,
	        PAGE_UP: 33,
	        PERIOD: 190,
	        RIGHT: 39,
	        SPACE: 32,
	        TAB: 9,
	        UP: 38
	    }, t.ui.escapeSelector = (function() {
	        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
	        return function(e) {
	            return e.replace(t, "\\$1")
	        }
	    })(), t.fn.labels = function() {
	        var e, i, s, n, o;
	        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
	    }, t.fn.scrollParent = function(e) {
	        var i = this.css("position"),
	            s = "absolute" === i,
	            n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
	            o = this.parents().filter((function() {
	                var e = t(this);
	                return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
	            })).eq(0);
	        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
	    }, t.extend(t.expr[":"], {
	        tabbable: function(e) {
	            var i = t.attr(e, "tabindex"),
	                s = null != i;
	            return (!s || i >= 0) && t.ui.focusable(e, s)
	        }
	    }), t.fn.extend({
	        uniqueId: (function() {
	            var t = 0;
	            return function() {
	                return this.each((function() {
	                    this.id || (this.id = "ui-id-" + ++t)
	                }))
	            }
	        })(),
	        removeUniqueId: function() {
	            return this.each((function() {
	                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
	            }))
	        }
	    }), t.widget("ui.accordion", {
	        version: "1.12.1",
	        options: {
	            active: 0,
	            animate: {},
	            classes: {
	                "ui-accordion-header": "ui-corner-top",
	                "ui-accordion-header-collapsed": "ui-corner-all",
	                "ui-accordion-content": "ui-corner-bottom"
	            },
	            collapsible: !1,
	            event: "click",
	            header: "> li > :first-child, > :not(li):even",
	            heightStyle: "auto",
	            icons: {
	                activeHeader: "ui-icon-triangle-1-s",
	                header: "ui-icon-triangle-1-e"
	            },
	            activate: null,
	            beforeActivate: null
	        },
	        hideProps: {
	            borderTopWidth: "hide",
	            borderBottomWidth: "hide",
	            paddingTop: "hide",
	            paddingBottom: "hide",
	            height: "hide"
	        },
	        showProps: {
	            borderTopWidth: "show",
	            borderBottomWidth: "show",
	            paddingTop: "show",
	            paddingBottom: "show",
	            height: "show"
	        },
	        _create: function() {
	            var e = this.options;
	            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
	        },
	        _getCreateEventData: function() {
	            return {
	                header: this.active,
	                panel: this.active.length ? this.active.next() : t()
	            }
	        },
	        _createIcons: function() {
	            var e, i, s = this.options.icons;
	            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
	        },
	        _destroyIcons: function() {
	            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
	        },
	        _destroy: function() {
	            var t;
	            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
	        },
	        _setOption: function(t, e) {
	            return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0)
	        },
	        _setOptionDisabled: function(t) {
	            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
	        },
	        _keydown: function(e) {
	            if (!e.altKey && !e.ctrlKey) {
	                var i = t.ui.keyCode,
	                    s = this.headers.length,
	                    n = this.headers.index(e.target),
	                    o = !1;
	                switch (e.keyCode) {
	                    case i.RIGHT:
	                    case i.DOWN:
	                        o = this.headers[(n + 1) % s];
	                        break;
	                    case i.LEFT:
	                    case i.UP:
	                        o = this.headers[(n - 1 + s) % s];
	                        break;
	                    case i.SPACE:
	                    case i.ENTER:
	                        this._eventHandler(e);
	                        break;
	                    case i.HOME:
	                        o = this.headers[0];
	                        break;
	                    case i.END:
	                        o = this.headers[s - 1]
	                }
	                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
	            }
	        },
	        _panelKeyDown: function(e) {
	            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
	        },
	        refresh: function() {
	            var e = this.options;
	            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
	        },
	        _processPanels: function() {
	            var t = this.headers,
	                e = this.panels;
	            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
	        },
	        _refresh: function() {
	            var e, i = this.options,
	                s = i.heightStyle,
	                n = this.element.parent();
	            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each((function() {
	                var e = t(this),
	                    i = e.uniqueId().attr("id"),
	                    s = e.next(),
	                    n = s.uniqueId().attr("id");
	                e.attr("aria-controls", n), s.attr("aria-labelledby", i)
	            })).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
	                "aria-selected": "false",
	                "aria-expanded": "false",
	                tabIndex: -1
	            }).next().attr({
	                "aria-hidden": "true"
	            }).hide(), this.active.length ? this.active.attr({
	                "aria-selected": "true",
	                "aria-expanded": "true",
	                tabIndex: 0
	            }).next().attr({
	                "aria-hidden": "false"
	            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each((function() {
	                var i = t(this),
	                    s = i.css("position");
	                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
	            })), this.headers.each((function() {
	                e -= t(this).outerHeight(!0)
	            })), this.headers.next().each((function() {
	                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
	            })).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each((function() {
	                var i = t(this).is(":visible");
	                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
	            })).height(e))
	        },
	        _activate: function(e) {
	            var i = this._findActive(e)[0];
	            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
	                target: i,
	                currentTarget: i,
	                preventDefault: t.noop
	            }))
	        },
	        _findActive: function(e) {
	            return "number" == typeof e ? this.headers.eq(e) : t()
	        },
	        _setupEvents: function(e) {
	            var i = {
	                keydown: "_keydown"
	            };
	            e && t.each(e.split(" "), (function(t, e) {
	                i[e] = "_eventHandler"
	            })), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
	                keydown: "_panelKeyDown"
	            }), this._hoverable(this.headers), this._focusable(this.headers)
	        },
	        _eventHandler: function(e) {
	            var i, s, n = this.options,
	                o = this.active,
	                a = t(e.currentTarget),
	                r = a[0] === o[0],
	                h = r && n.collapsible,
	                l = h ? t() : a.next(),
	                c = o.next(),
	                u = {
	                    oldHeader: o,
	                    oldPanel: c,
	                    newHeader: h ? t() : a,
	                    newPanel: l
	                };
	            e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
	        },
	        _toggle: function(e) {
	            var i = e.newPanel,
	                s = this.prevShow.length ? this.prevShow : e.oldPanel;
	            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
	                "aria-hidden": "true"
	            }), s.prev().attr({
	                "aria-selected": "false",
	                "aria-expanded": "false"
	            }), i.length && s.length ? s.prev().attr({
	                tabIndex: -1,
	                "aria-expanded": "false"
	            }) : i.length && this.headers.filter((function() {
	                return 0 === parseInt(t(this).attr("tabIndex"), 10)
	            })).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
	                "aria-selected": "true",
	                "aria-expanded": "true",
	                tabIndex: 0
	            })
	        },
	        _animate: function(t, e, i) {
	            var s, n, o, a = this,
	                r = 0,
	                h = t.css("box-sizing"),
	                l = t.length && (!e.length || t.index() < e.index()),
	                c = this.options.animate || {},
	                u = l && c.down || c,
	                d = function() {
	                    a._toggleComplete(i)
	                };
	            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
	                duration: o,
	                easing: n,
	                step: function(t, e) {
	                    e.now = Math.round(t)
	                }
	            }), t.hide().animate(this.showProps, {
	                duration: o,
	                easing: n,
	                complete: d,
	                step: function(t, i) {
	                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
	                }
	            }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
	        },
	        _toggleComplete: function(t) {
	            var e = t.oldPanel,
	                i = e.prev();
	            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
	        }
	    }), t.ui.safeActiveElement = function(t) {
	        var e;
	        try {
	            e = t.activeElement
	        } catch (i) {
	            e = t.body
	        }
	        return e || (e = t.body), e.nodeName || (e = t.body), e
	    }, t.widget("ui.menu", {
	        version: "1.12.1",
	        defaultElement: "<ul>",
	        delay: 300,
	        options: {
	            icons: {
	                submenu: "ui-icon-caret-1-e"
	            },
	            items: "> *",
	            menus: "ul",
	            position: {
	                my: "left top",
	                at: "right top"
	            },
	            role: "menu",
	            blur: null,
	            focus: null,
	            select: null
	        },
	        _create: function() {
	            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
	                role: this.options.role,
	                tabIndex: 0
	            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
	                "mousedown .ui-menu-item": function(t) {
	                    t.preventDefault()
	                },
	                "click .ui-menu-item": function(e) {
	                    var i = t(e.target),
	                        s = t(t.ui.safeActiveElement(this.document[0]));
	                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
	                },
	                "mouseenter .ui-menu-item": function(e) {
	                    if (!this.previousFilter) {
	                        var i = t(e.target).closest(".ui-menu-item"),
	                            s = t(e.currentTarget);
	                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
	                    }
	                },
	                mouseleave: "collapseAll",
	                "mouseleave .ui-menu": "collapseAll",
	                focus: function(t, e) {
	                    var i = this.active || this.element.find(this.options.items).eq(0);
	                    e || this.focus(t, i)
	                },
	                blur: function(e) {
	                    this._delay((function() {
	                        var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
	                        i && this.collapseAll(e)
	                    }))
	                },
	                keydown: "_keydown"
	            }), this.refresh(), this._on(this.document, {
	                click: function(t) {
	                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
	                }
	            })
	        },
	        _destroy: function() {
	            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
	                i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
	            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each((function() {
	                var e = t(this);
	                e.data("ui-menu-submenu-caret") && e.remove()
	            }))
	        },
	        _keydown: function(e) {
	            var i, s, n, o, a = !0;
	            switch (e.keyCode) {
	                case t.ui.keyCode.PAGE_UP:
	                    this.previousPage(e);
	                    break;
	                case t.ui.keyCode.PAGE_DOWN:
	                    this.nextPage(e);
	                    break;
	                case t.ui.keyCode.HOME:
	                    this._move("first", "first", e);
	                    break;
	                case t.ui.keyCode.END:
	                    this._move("last", "last", e);
	                    break;
	                case t.ui.keyCode.UP:
	                    this.previous(e);
	                    break;
	                case t.ui.keyCode.DOWN:
	                    this.next(e);
	                    break;
	                case t.ui.keyCode.LEFT:
	                    this.collapse(e);
	                    break;
	                case t.ui.keyCode.RIGHT:
	                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
	                    break;
	                case t.ui.keyCode.ENTER:
	                case t.ui.keyCode.SPACE:
	                    this._activate(e);
	                    break;
	                case t.ui.keyCode.ESCAPE:
	                    this.collapse(e);
	                    break;
	                default:
	                    a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay((function() {
	                        delete this.previousFilter
	                    }), 1e3)) : delete this.previousFilter
	            }
	            a && e.preventDefault()
	        },
	        _activate: function(t) {
	            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
	        },
	        refresh: function() {
	            var e, i, s, n, o, a = this,
	                r = this.options.icons.submenu,
	                h = this.element.find(this.options.menus);
	            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
	                role: this.options.role,
	                "aria-hidden": "true",
	                "aria-expanded": "false"
	            }).each((function() {
	                var e = t(this),
	                    i = e.prev(),
	                    s = t("<span>").data("ui-menu-submenu-caret", !0);
	                a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
	            })), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each((function() {
	                var e = t(this);
	                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
	            })), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
	                tabIndex: -1,
	                role: this._itemRole()
	            }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
	        },
	        _itemRole: function() {
	            return {
	                menu: "menuitem",
	                listbox: "option"
	            }[this.options.role]
	        },
	        _setOption: function(t, e) {
	            if ("icons" === t) {
	                var i = this.element.find(".ui-menu-icon");
	                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
	            }
	            this._super(t, e)
	        },
	        _setOptionDisabled: function(t) {
	            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
	        },
	        focus: function(t, e) {
	            var i, s, n;
	            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay((function() {
	                this._close()
	            }), this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
	                item: e
	            })
	        },
	        _scrollIntoView: function(e) {
	            var i, s, n, o, a, r;
	            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
	        },
	        blur: function(t, e) {
	            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
	                item: this.active
	            }), this.active = null)
	        },
	        _startOpening: function(t) {
	            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay((function() {
	                this._close(), this._open(t)
	            }), this.delay))
	        },
	        _open: function(e) {
	            var i = t.extend({
	                of: this.active
	            }, this.options.position);
	            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
	        },
	        collapseAll: function(e, i) {
	            clearTimeout(this.timer), this.timer = this._delay((function() {
	                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
	                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
	            }), this.delay)
	        },
	        _close: function(t) {
	            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
	        },
	        _closeOnDocumentClick: function(e) {
	            return !t(e.target).closest(".ui-menu").length
	        },
	        _isDivider: function(t) {
	            return !/[^\-\u2014\u2013\s]/.test(t.text())
	        },
	        collapse: function(t) {
	            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
	            e && e.length && (this._close(), this.focus(t, e))
	        },
	        expand: function(t) {
	            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
	            e && e.length && (this._open(e.parent()), this._delay((function() {
	                this.focus(t, e)
	            })))
	        },
	        next: function(t) {
	            this._move("next", "first", t)
	        },
	        previous: function(t) {
	            this._move("prev", "last", t)
	        },
	        isFirstItem: function() {
	            return this.active && !this.active.prevAll(".ui-menu-item").length
	        },
	        isLastItem: function() {
	            return this.active && !this.active.nextAll(".ui-menu-item").length
	        },
	        _move: function(t, e, i) {
	            var s;
	            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
	        },
	        nextPage: function(e) {
	            var i, s, n;
	            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each((function() {
	                return i = t(this), 0 > i.offset().top - s - n
	            })), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
	        },
	        previousPage: function(e) {
	            var i, s, n;
	            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each((function() {
	                return i = t(this), i.offset().top - s + n > 0
	            })), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0)
	        },
	        _hasScroll: function() {
	            return this.element.outerHeight() < this.element.prop("scrollHeight")
	        },
	        select: function(e) {
	            this.active = this.active || t(e.target).closest(".ui-menu-item");
	            var i = {
	                item: this.active
	            };
	            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
	        },
	        _filterMenuItems: function(e) {
	            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
	                s = RegExp("^" + i, "i");
	            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function() {
	                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
	            }))
	        }
	    }), t.widget("ui.autocomplete", {
	        version: "1.12.1",
	        defaultElement: "<input>",
	        options: {
	            appendTo: null,
	            autoFocus: !1,
	            delay: 300,
	            minLength: 1,
	            position: {
	                my: "left top",
	                at: "left bottom",
	                collision: "none"
	            },
	            source: null,
	            change: null,
	            close: null,
	            focus: null,
	            open: null,
	            response: null,
	            search: null,
	            select: null
	        },
	        requestIndex: 0,
	        pending: 0,
	        _create: function() {
	            var e, i, s, n = this.element[0].nodeName.toLowerCase(),
	                o = "textarea" === n,
	                a = "input" === n;
	            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
	                keydown: function(n) {
	                    if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
	                    e = !1, s = !1, i = !1;
	                    var o = t.ui.keyCode;
	                    switch (n.keyCode) {
	                        case o.PAGE_UP:
	                            e = !0, this._move("previousPage", n);
	                            break;
	                        case o.PAGE_DOWN:
	                            e = !0, this._move("nextPage", n);
	                            break;
	                        case o.UP:
	                            e = !0, this._keyEvent("previous", n);
	                            break;
	                        case o.DOWN:
	                            e = !0, this._keyEvent("next", n);
	                            break;
	                        case o.ENTER:
	                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
	                            break;
	                        case o.TAB:
	                            this.menu.active && this.menu.select(n);
	                            break;
	                        case o.ESCAPE:
	                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
	                            break;
	                        default:
	                            i = !0, this._searchTimeout(n)
	                    }
	                },
	                keypress: function(s) {
	                    if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
	                    if (!i) {
	                        var n = t.ui.keyCode;
	                        switch (s.keyCode) {
	                            case n.PAGE_UP:
	                                this._move("previousPage", s);
	                                break;
	                            case n.PAGE_DOWN:
	                                this._move("nextPage", s);
	                                break;
	                            case n.UP:
	                                this._keyEvent("previous", s);
	                                break;
	                            case n.DOWN:
	                                this._keyEvent("next", s)
	                        }
	                    }
	                },
	                input: function(t) {
	                    return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
	                },
	                focus: function() {
	                    this.selectedItem = null, this.previous = this._value()
	                },
	                blur: function(t) {
	                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
	                }
	            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
	                role: null
	            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
	                mousedown: function(e) {
	                    e.preventDefault(), this.cancelBlur = !0, this._delay((function() {
	                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
	                    }))
	                },
	                menufocus: function(e, i) {
	                    var s, n;
	                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", (function() {
	                        t(e.target).trigger(e.originalEvent)
	                    })), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
	                        item: n
	                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0)
	                },
	                menuselect: function(e, i) {
	                    var s = i.item.data("ui-autocomplete-item"),
	                        n = this.previous;
	                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay((function() {
	                        this.previous = n, this.selectedItem = s
	                    }))), !1 !== this._trigger("select", e, {
	                        item: s
	                    }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
	                }
	            }), this.liveRegion = t("<div>", {
	                role: "status",
	                "aria-live": "assertive",
	                "aria-relevant": "additions"
	            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
	                beforeunload: function() {
	                    this.element.removeAttr("autocomplete")
	                }
	            })
	        },
	        _destroy: function() {
	            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
	        },
	        _setOption: function(t, e) {
	            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
	        },
	        _isEventTargetInWidget: function(e) {
	            var i = this.menu.element[0];
	            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
	        },
	        _closeOnClickOutside: function(t) {
	            this._isEventTargetInWidget(t) || this.close()
	        },
	        _appendTo: function() {
	            var e = this.options.appendTo;
	            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
	        },
	        _initSource: function() {
	            var e, i, s = this;
	            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
	                s(t.ui.autocomplete.filter(e, i.term))
	            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
	                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
	                    url: i,
	                    data: e,
	                    dataType: "json",
	                    success: function(t) {
	                        n(t)
	                    },
	                    error: function() {
	                        n([])
	                    }
	                })
	            }) : this.source = this.options.source
	        },
	        _searchTimeout: function(t) {
	            clearTimeout(this.searching), this.searching = this._delay((function() {
	                var e = this.term === this._value(),
	                    i = this.menu.element.is(":visible"),
	                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
	                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
	            }), this.options.delay)
	        },
	        search: function(t, e) {
	            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
	        },
	        _search: function(t) {
	            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
	                term: t
	            }, this._response())
	        },
	        _response: function() {
	            var e = ++this.requestIndex;
	            return t.proxy((function(t) {
	                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
	            }), this)
	        },
	        __response: function(t) {
	            t && (t = this._normalize(t)), this._trigger("response", null, {
	                content: t
	            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
	        },
	        close: function(t) {
	            this.cancelSearch = !0, this._close(t)
	        },
	        _close: function(t) {
	            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
	        },
	        _change: function(t) {
	            this.previous !== this._value() && this._trigger("change", t, {
	                item: this.selectedItem
	            })
	        },
	        _normalize: function(e) {
	            return e.length && e[0].label && e[0].value ? e : t.map(e, (function(e) {
	                return "string" == typeof e ? {
	                    label: e,
	                    value: e
	                } : t.extend({}, e, {
	                    label: e.label || e.value,
	                    value: e.value || e.label
	                })
	            }))
	        },
	        _suggest: function(e) {
	            var i = this.menu.element.empty();
	            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
	                of: this.element
	            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
	                mousedown: "_closeOnClickOutside"
	            })
	        },
	        _resizeMenu: function() {
	            var t = this.menu.element;
	            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
	        },
	        _renderMenu: function(e, i) {
	            var s = this;
	            t.each(i, (function(t, i) {
	                s._renderItemData(e, i)
	            }))
	        },
	        _renderItemData: function(t, e) {
	            return this._renderItem(t, e).data("ui-autocomplete-item", e)
	        },
	        _renderItem: function(e, i) {
	            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
	        },
	        _move: function(t, e) {
	            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
	        },
	        widget: function() {
	            return this.menu.element
	        },
	        _value: function() {
	            return this.valueMethod.apply(this.element, arguments)
	        },
	        _keyEvent: function(t, e) {
	            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
	        },
	        _isContentEditable: function(t) {
	            if (!t.length) return !1;
	            var e = t.prop("contentEditable");
	            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
	        }
	    }), t.extend(t.ui.autocomplete, {
	        escapeRegex: function(t) {
	            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
	        },
	        filter: function(e, i) {
	            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
	            return t.grep(e, (function(t) {
	                return s.test(t.label || t.value || t)
	            }))
	        }
	    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
	        options: {
	            messages: {
	                noResults: "No search results.",
	                results: function(t) {
	                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
	                }
	            }
	        },
	        __response: function(e) {
	            var i;
	            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
	        }
	    }), t.ui.autocomplete;
	    var g = /ui-corner-([a-z]){2,6}/g;
	    t.widget("ui.controlgroup", {
	        version: "1.12.1",
	        defaultElement: "<div>",
	        options: {
	            direction: "horizontal",
	            disabled: null,
	            onlyVisible: !0,
	            items: {
	                button: "input[type=button], input[type=submit], input[type=reset], button, a",
	                controlgroupLabel: ".ui-controlgroup-label",
	                checkboxradio: "input[type='checkbox'], input[type='radio']",
	                selectmenu: "select",
	                spinner: ".ui-spinner-input"
	            }
	        },
	        _create: function() {
	            this._enhance()
	        },
	        _enhance: function() {
	            this.element.attr("role", "toolbar"), this.refresh()
	        },
	        _destroy: function() {
	            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
	        },
	        _initWidgets: function() {
	            var e = this,
	                i = [];
	            t.each(this.options.items, (function(s, n) {
	                var o, a = {};
	                return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each((function() {
	                    var e = t(this);
	                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
	                })), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
	                    classes: {}
	                }, e.element.find(n).each((function() {
	                    var n = t(this),
	                        o = n[s]("instance"),
	                        r = t.widget.extend({}, a);
	                    if ("button" !== s || !n.parent(".ui-spinner").length) {
	                        o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
	                        var h = n[s]("widget");
	                        t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0])
	                    }
	                }))), void 0) : void 0
	            })), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
	        },
	        _callChildMethod: function(e) {
	            this.childWidgets.each((function() {
	                var i = t(this),
	                    s = i.data("ui-controlgroup-data");
	                s && s[e] && s[e]()
	            }))
	        },
	        _updateCornerClass: function(t, e) {
	            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
	                s = this._buildSimpleOptions(e, "label").classes.label;
	            this._removeClass(t, null, i), this._addClass(t, null, s)
	        },
	        _buildSimpleOptions: function(t, e) {
	            var i = "vertical" === this.options.direction,
	                s = {
	                    classes: {}
	                };
	            return s.classes[e] = {
	                middle: "",
	                first: "ui-corner-" + (i ? "top" : "left"),
	                last: "ui-corner-" + (i ? "bottom" : "right"),
	                only: "ui-corner-all"
	            }[t], s
	        },
	        _spinnerOptions: function(t) {
	            var e = this._buildSimpleOptions(t, "ui-spinner");
	            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
	        },
	        _buttonOptions: function(t) {
	            return this._buildSimpleOptions(t, "ui-button")
	        },
	        _checkboxradioOptions: function(t) {
	            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
	        },
	        _selectmenuOptions: function(t) {
	            var e = "vertical" === this.options.direction;
	            return {
	                width: e ? "auto" : !1,
	                classes: {
	                    middle: {
	                        "ui-selectmenu-button-open": "",
	                        "ui-selectmenu-button-closed": ""
	                    },
	                    first: {
	                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
	                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
	                    },
	                    last: {
	                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
	                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
	                    },
	                    only: {
	                        "ui-selectmenu-button-open": "ui-corner-top",
	                        "ui-selectmenu-button-closed": "ui-corner-all"
	                    }
	                }[t]
	            }
	        },
	        _resolveClassesValues: function(e, i) {
	            var s = {};
	            return t.each(e, (function(n) {
	                var o = i.options.classes[n] || "";
	                o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
	            })), s
	        },
	        _setOption: function(t, e) {
	            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
	        },
	        refresh: function() {
	            var e, i = this;
	            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], (function(t, s) {
	                var n = e[s]().data("ui-controlgroup-data");
	                if (n && i["_" + n.widgetName + "Options"]) {
	                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
	                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
	                } else i._updateCornerClass(e[s](), s)
	            })), this._callChildMethod("refresh"))
	        }
	    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
	        version: "1.12.1",
	        options: {
	            disabled: null,
	            label: null,
	            icon: !0,
	            classes: {
	                "ui-checkboxradio-label": "ui-corner-all",
	                "ui-checkboxradio-icon": "ui-corner-all"
	            }
	        },
	        _getCreateOptions: function() {
	            var e, i, s = this,
	                n = this._super() || {};
	            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each((function() {
	                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
	            })), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
	        },
	        _create: function() {
	            var t = this.element[0].checked;
	            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
	                change: "_toggleClasses",
	                focus: function() {
	                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
	                },
	                blur: function() {
	                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
	                }
	            })
	        },
	        _readType: function() {
	            var e = this.element[0].nodeName.toLowerCase();
	            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
	        },
	        _enhance: function() {
	            this._updateIcon(this.element[0].checked)
	        },
	        widget: function() {
	            return this.label
	        },
	        _getRadioGroup: function() {
	            var e, i = this.element[0].name,
	                s = "input[name='" + t.ui.escapeSelector(i) + "']";
	            return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter((function() {
	                return 0 === t(this).form().length
	            })), e.not(this.element)) : t([])
	        },
	        _toggleClasses: function() {
	            var e = this.element[0].checked;
	            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each((function() {
	                var e = t(this).checkboxradio("instance");
	                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
	            }))
	        },
	        _destroy: function() {
	            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
	        },
	        _setOption: function(t, e) {
	            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0
	        },
	        _updateIcon: function(e) {
	            var i = "ui-icon ui-icon-background ";
	            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
	        },
	        _updateLabel: function() {
	            var t = this.label.contents().not(this.element[0]);
	            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
	        },
	        refresh: function() {
	            var t = this.element[0].checked,
	                e = this.element[0].disabled;
	            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
	                disabled: e
	            })
	        }
	    }]), t.ui.checkboxradio, t.widget("ui.button", {
	        version: "1.12.1",
	        defaultElement: "<button>",
	        options: {
	            classes: {
	                "ui-button": "ui-corner-all"
	            },
	            disabled: null,
	            icon: null,
	            iconPosition: "beginning",
	            label: null,
	            showLabel: !0
	        },
	        _getCreateOptions: function() {
	            var t, e = this._super() || {};
	            return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
	        },
	        _create: function() {
	            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
	                keyup: function(e) {
	                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
	                }
	            })
	        },
	        _enhance: function() {
	            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
	        },
	        _updateTooltip: function() {
	            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
	        },
	        _updateIcon: function(e, i) {
	            var s = "iconPosition" !== e,
	                n = s ? this.options.iconPosition : i,
	                o = "top" === n || "bottom" === n;
	            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
	        },
	        _destroy: function() {
	            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
	        },
	        _attachIconSpace: function(t) {
	            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
	        },
	        _attachIcon: function(t) {
	            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
	        },
	        _setOptions: function(t) {
	            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
	                i = void 0 === t.icon ? this.options.icon : t.icon;
	            e || i || (t.showLabel = !0), this._super(t)
	        },
	        _setOption: function(t, e) {
	            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
	        },
	        refresh: function() {
	            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
	            t !== this.options.disabled && this._setOptions({
	                disabled: t
	            }), this._updateTooltip()
	        }
	    }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
	        options: {
	            text: !0,
	            icons: {
	                primary: null,
	                secondary: null
	            }
	        },
	        _create: function() {
	            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
	        },
	        _setOption: function(t, e) {
	            return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
	        }
	    }), t.fn.button = (function(e) {
	        return function() {
	            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
	                icon: !1
	            }) : this.checkboxradio.apply(this, arguments))
	        }
	    })(t.fn.button), t.fn.buttonset = function() {
	        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
	            button: arguments[0].items
	        }), this.controlgroup.apply(this, arguments))
	    }), t.ui.button, t.extend(t.ui, {
	        datepicker: {
	            version: "1.12.1"
	        }
	    });
	    var m;
	    t.extend(s.prototype, {
	        markerClassName: "hasDatepicker",
	        maxRows: 4,
	        _widgetDatepicker: function() {
	            return this.dpDiv
	        },
	        setDefaults: function(t) {
	            return a(this._defaults, t || {}), this
	        },
	        _attachDatepicker: function(e, i) {
	            var s, n, o;
	            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
	        },
	        _newInst: function(e, i) {
	            var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
	            return {
	                id: s,
	                input: e,
	                selectedDay: 0,
	                selectedMonth: 0,
	                selectedYear: 0,
	                drawMonth: 0,
	                drawYear: 0,
	                inline: i,
	                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
	            }
	        },
	        _connectDatepicker: function(e, i) {
	            var s = t(e);
	            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
	        },
	        _attachments: function(e, i) {
	            var s, n, o, a = this._get(i, "appendText"),
	                r = this._get(i, "isRTL");
	            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
	                src: o,
	                alt: n,
	                title: n
	            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
	                src: o,
	                alt: n,
	                title: n
	            }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", (function() {
	                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
	            })))
	        },
	        _autoSize: function(t) {
	            if (this._get(t, "autoSize") && !t.inline) {
	                var e, i, s, n, o = new Date(2009, 11, 20),
	                    a = this._get(t, "dateFormat");
	                a.match(/[DM]/) && (e = function(t) {
	                    for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
	                    return s
	                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
	            }
	        },
	        _inlineDatepicker: function(e, i) {
	            var s = t(e);
	            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
	        },
	        _dialogDatepicker: function(e, i, s, n, o) {
	            var r, h, l, c, u, d = this._dialogInst;
	            return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
	        },
	        _destroyDatepicker: function(e) {
	            var i, s = t(e),
	                n = t.data(e, "datepicker");
	            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null))
	        },
	        _enableDatepicker: function(e) {
	            var i, s, n = t(e),
	                o = t.data(e, "datepicker");
	            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each((function() {
	                this.disabled = !1
	            })).end().filter("img").css({
	                opacity: "1.0",
	                cursor: ""
	            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, (function(t) {
	                return t === e ? null : t
	            })))
	        },
	        _disableDatepicker: function(e) {
	            var i, s, n = t(e),
	                o = t.data(e, "datepicker");
	            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each((function() {
	                this.disabled = !0
	            })).end().filter("img").css({
	                opacity: "0.5",
	                cursor: "default"
	            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, (function(t) {
	                return t === e ? null : t
	            })), this._disabledInputs[this._disabledInputs.length] = e)
	        },
	        _isDisabledDatepicker: function(t) {
	            if (!t) return !1;
	            for (var e = 0; this._disabledInputs.length > e; e++)
	                if (this._disabledInputs[e] === t) return !0;
	            return !1
	        },
	        _getInst: function(e) {
	            try {
	                return t.data(e, "datepicker")
	            } catch (i) {
	                throw "Missing instance data for this datepicker"
	            }
	        },
	        _optionDatepicker: function(e, i, s) {
	            var n, o, r, h, l = this._getInst(e);
	            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
	        },
	        _changeDatepicker: function(t, e, i) {
	            this._optionDatepicker(t, e, i)
	        },
	        _refreshDatepicker: function(t) {
	            var e = this._getInst(t);
	            e && this._updateDatepicker(e)
	        },
	        _setDateDatepicker: function(t, e) {
	            var i = this._getInst(t);
	            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
	        },
	        _getDateDatepicker: function(t, e) {
	            var i = this._getInst(t);
	            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
	        },
	        _doKeyDown: function(e) {
	            var i, s, n, o = t.datepicker._getInst(e.target),
	                a = !0,
	                r = o.dpDiv.is(".ui-datepicker-rtl");
	            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
	                case 9:
	                    t.datepicker._hideDatepicker(), a = !1;
	                    break;
	                case 13:
	                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
	                case 27:
	                    t.datepicker._hideDatepicker();
	                    break;
	                case 33:
	                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
	                    break;
	                case 34:
	                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
	                    break;
	                case 35:
	                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
	                    break;
	                case 36:
	                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
	                    break;
	                case 37:
	                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
	                    break;
	                case 38:
	                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
	                    break;
	                case 39:
	                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
	                    break;
	                case 40:
	                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
	                    break;
	                default:
	                    a = !1
	            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
	            a && (e.preventDefault(), e.stopPropagation())
	        },
	        _doKeyPress: function(e) {
	            var i, s, n = t.datepicker._getInst(e.target);
	            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
	        },
	        _doKeyUp: function(e) {
	            var i, s = t.datepicker._getInst(e.target);
	            if (s.input.val() !== s.lastVal) try {
	                i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
	            } catch (n) {}
	            return !0
	        },
	        _showDatepicker: function(e) {
	            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
	                var s, n, o, r, h, l, c;
	                s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each((function() {
	                    return r |= "fixed" === t(this).css("position"), !r
	                })), h = {
	                    left: t.datepicker._pos[0],
	                    top: t.datepicker._pos[1]
	                }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
	                    position: "absolute",
	                    display: "block",
	                    top: "-1000px"
	                }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
	                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
	                    display: "none",
	                    left: h.left + "px",
	                    top: h.top + "px"
	                }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
	            }
	        },
	        _updateDatepicker: function(e) {
	            this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
	            var i, s = this._getNumberOfMonths(e),
	                n = s[1],
	                a = 17,
	                r = e.dpDiv.find("." + this._dayOverClass + " a");
	            r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout((function() {
	                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
	            }), 0))
	        },
	        _shouldFocusInput: function(t) {
	            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
	        },
	        _checkOffset: function(e, i, s) {
	            var n = e.dpDiv.outerWidth(),
	                o = e.dpDiv.outerHeight(),
	                a = e.input ? e.input.outerWidth() : 0,
	                r = e.input ? e.input.outerHeight() : 0,
	                h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
	                l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
	            return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
	        },
	        _findPos: function(e) {
	            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
	            return i = t(e).offset(), [i.left, i.top]
	        },
	        _hideDatepicker: function(e) {
	            var i, s, n, o, a = this._curInst;
	            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
	                t.datepicker._tidyDialog(a)
	            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
	                position: "absolute",
	                left: "0",
	                top: "-100px"
	            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
	        },
	        _tidyDialog: function(t) {
	            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
	        },
	        _checkExternalClick: function(e) {
	            if (t.datepicker._curInst) {
	                var i = t(e.target),
	                    s = t.datepicker._getInst(i[0]);
	                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
	            }
	        },
	        _adjustDate: function(e, i, s) {
	            var n = t(e),
	                o = this._getInst(n[0]);
	            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
	        },
	        _gotoToday: function(e) {
	            var i, s = t(e),
	                n = this._getInst(s[0]);
	            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
	        },
	        _selectMonthYear: function(e, i, s) {
	            var n = t(e),
	                o = this._getInst(n[0]);
	            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
	        },
	        _selectDay: function(e, i, s, n) {
	            var o, a = t(e);
	            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
	        },
	        _clearDate: function(e) {
	            var i = t(e);
	            this._selectDate(i, "")
	        },
	        _selectDate: function(e, i) {
	            var s, n = t(e),
	                o = this._getInst(n[0]);
	            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
	        },
	        _updateAlternate: function(e) {
	            var i, s, n, o = this._get(e, "altField");
	            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
	        },
	        noWeekends: function(t) {
	            var e = t.getDay();
	            return [e > 0 && 6 > e, ""]
	        },
	        iso8601Week: function(t) {
	            var e, i = new Date(t.getTime());
	            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
	        },
	        parseDate: function(e, i, s) {
	            if (null == e || null == i) throw "Invalid arguments";
	            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
	            var n, o, a, r, h = 0,
	                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
	                c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
	                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
	                d = (s ? s.dayNames : null) || this._defaults.dayNames,
	                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
	                f = (s ? s.monthNames : null) || this._defaults.monthNames,
	                g = -1,
	                m = -1,
	                _ = -1,
	                v = -1,
	                b = !1,
	                y = function(t) {
	                    var i = e.length > n + 1 && e.charAt(n + 1) === t;
	                    return i && n++, i
	                },
	                w = function(t) {
	                    var e = y(t),
	                        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
	                        n = "y" === t ? s : 1,
	                        o = RegExp("^\\d{" + n + "," + s + "}"),
	                        a = i.substring(h).match(o);
	                    if (!a) throw "Missing number at position " + h;
	                    return h += a[0].length, parseInt(a[0], 10)
	                },
	                k = function(e, s, n) {
	                    var o = -1,
	                        a = t.map(y(e) ? n : s, (function(t, e) {
	                            return [
	                                [e, t]
	                            ]
	                        })).sort((function(t, e) {
	                            return -(t[1].length - e[1].length)
	                        }));
	                    if (t.each(a, (function(t, e) {
	                            var s = e[1];
	                            return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0
	                        })), -1 !== o) return o + 1;
	                    throw "Unknown name at position " + h
	                },
	                x = function() {
	                    if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
	                    h++
	                };
	            for (n = 0; e.length > n; n++)
	                if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;
	                else switch (e.charAt(n)) {
	                    case "d":
	                        _ = w("d");
	                        break;
	                    case "D":
	                        k("D", u, d);
	                        break;
	                    case "o":
	                        v = w("o");
	                        break;
	                    case "m":
	                        m = w("m");
	                        break;
	                    case "M":
	                        m = k("M", p, f);
	                        break;
	                    case "y":
	                        g = w("y");
	                        break;
	                    case "@":
	                        r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
	                        break;
	                    case "!":
	                        r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
	                        break;
	                    case "'":
	                        y("'") ? x() : b = !0;
	                        break;
	                    default:
	                        x()
	                }
	                if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
	            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1)
	                for (m = 1, _ = v;;) {
	                    if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
	                    m++, _ -= o
	                }
	            if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
	            return r
	        },
	        ATOM: "yy-mm-dd",
	        COOKIE: "D, dd M yy",
	        ISO_8601: "yy-mm-dd",
	        RFC_822: "D, d M y",
	        RFC_850: "DD, dd-M-y",
	        RFC_1036: "D, d M y",
	        RFC_1123: "D, d M yy",
	        RFC_2822: "D, d M yy",
	        RSS: "D, d M y",
	        TICKS: "!",
	        TIMESTAMP: "@",
	        W3C: "yy-mm-dd",
	        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
	        formatDate: function(t, e, i) {
	            if (!e) return "";
	            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
	                o = (i ? i.dayNames : null) || this._defaults.dayNames,
	                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
	                r = (i ? i.monthNames : null) || this._defaults.monthNames,
	                h = function(e) {
	                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
	                    return i && s++, i
	                },
	                l = function(t, e, i) {
	                    var s = "" + e;
	                    if (h(t))
	                        for (; i > s.length;) s = "0" + s;
	                    return s
	                },
	                c = function(t, e, i, s) {
	                    return h(t) ? s[e] : i[e]
	                },
	                u = "",
	                d = !1;
	            if (e)
	                for (s = 0; t.length > s; s++)
	                    if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
	                    else switch (t.charAt(s)) {
	                        case "d":
	                            u += l("d", e.getDate(), 2);
	                            break;
	                        case "D":
	                            u += c("D", e.getDay(), n, o);
	                            break;
	                        case "o":
	                            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
	                            break;
	                        case "m":
	                            u += l("m", e.getMonth() + 1, 2);
	                            break;
	                        case "M":
	                            u += c("M", e.getMonth(), a, r);
	                            break;
	                        case "y":
	                            u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
	                            break;
	                        case "@":
	                            u += e.getTime();
	                            break;
	                        case "!":
	                            u += 1e4 * e.getTime() + this._ticksTo1970;
	                            break;
	                        case "'":
	                            h("'") ? u += "'" : d = !0;
	                            break;
	                        default:
	                            u += t.charAt(s)
	                    }
	                    return u
	        },
	        _possibleChars: function(t) {
	            var e, i = "",
	                s = !1,
	                n = function(i) {
	                    var s = t.length > e + 1 && t.charAt(e + 1) === i;
	                    return s && e++, s
	                };
	            for (e = 0; t.length > e; e++)
	                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
	                else switch (t.charAt(e)) {
	                    case "d":
	                    case "m":
	                    case "y":
	                    case "@":
	                        i += "0123456789";
	                        break;
	                    case "D":
	                    case "M":
	                        return null;
	                    case "'":
	                        n("'") ? i += "'" : s = !0;
	                        break;
	                    default:
	                        i += t.charAt(e)
	                }
	                return i
	        },
	        _get: function(t, e) {
	            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
	        },
	        _setDateFromField: function(t, e) {
	            if (t.input.val() !== t.lastVal) {
	                var i = this._get(t, "dateFormat"),
	                    s = t.lastVal = t.input ? t.input.val() : null,
	                    n = this._getDefaultDate(t),
	                    o = n,
	                    a = this._getFormatConfig(t);
	                try {
	                    o = this.parseDate(i, s, a) || n
	                } catch (r) {
	                    s = e ? "" : s
	                }
	                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
	            }
	        },
	        _getDefaultDate: function(t) {
	            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
	        },
	        _determineDate: function(e, i, s) {
	            var n = function(t) {
	                    var e = new Date;
	                    return e.setDate(e.getDate() + t), e
	                },
	                o = function(i) {
	                    try {
	                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
	                    } catch (s) {}
	                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
	                        switch (l[2] || "d") {
	                            case "d":
	                            case "D":
	                                r += parseInt(l[1], 10);
	                                break;
	                            case "w":
	                            case "W":
	                                r += 7 * parseInt(l[1], 10);
	                                break;
	                            case "m":
	                            case "M":
	                                a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
	                                break;
	                            case "y":
	                            case "Y":
	                                o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
	                        }
	                        l = h.exec(i)
	                    }
	                    return new Date(o, a, r)
	                },
	                a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
	            return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
	        },
	        _daylightSavingAdjust: function(t) {
	            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
	        },
	        _setDate: function(t, e, i) {
	            var s = !e,
	                n = t.selectedMonth,
	                o = t.selectedYear,
	                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
	            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
	        },
	        _getDate: function(t) {
	            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
	            return e
	        },
	        _attachHandlers: function(e) {
	            var i = this._get(e, "stepMonths"),
	                s = "#" + e.id.replace(/\\\\/g, "\\");
	            e.dpDiv.find("[data-handler]").map((function() {
	                var e = {
	                    prev: function() {
	                        t.datepicker._adjustDate(s, -i, "M")
	                    },
	                    next: function() {
	                        t.datepicker._adjustDate(s, +i, "M")
	                    },
	                    hide: function() {
	                        t.datepicker._hideDatepicker()
	                    },
	                    today: function() {
	                        t.datepicker._gotoToday(s)
	                    },
	                    selectDay: function() {
	                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
	                    },
	                    selectMonth: function() {
	                        return t.datepicker._selectMonthYear(s, this, "M"), !1
	                    },
	                    selectYear: function() {
	                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
	                    }
	                };
	                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
	            }))
	        },
	        _generateHTML: function(t) {
	            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
	                B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
	                Y = this._get(t, "isRTL"),
	                j = this._get(t, "showButtonPanel"),
	                q = this._get(t, "hideIfNoPrevNext"),
	                K = this._get(t, "navigationAsDateFormat"),
	                U = this._getNumberOfMonths(t),
	                V = this._get(t, "showCurrentAtPos"),
	                $ = this._get(t, "stepMonths"),
	                X = 1 !== U[0] || 1 !== U[1],
	                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
	                Q = this._getMinMaxDate(t, "min"),
	                J = this._getMinMaxDate(t, "max"),
	                Z = t.drawMonth - V,
	                te = t.drawYear;
	            if (0 > Z && (Z += 12, te--), J)
	                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
	            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
	                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
	                    if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
	                        if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
	                            case 0:
	                                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
	                                break;
	                            case U[1] - 1:
	                                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
	                                break;
	                            default:
	                                T += " ui-datepicker-group-middle", I = ""
	                        }
	                        T += "'>"
	                    }
	                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
	                    for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
	                        for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
	                        T += W + "</tr>"
	                    }
	                    Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
	                }
	                y += x
	            }
	            return y += l, t._keyEvent = !1, y
	        },
	        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
	            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
	                _ = this._get(t, "changeYear"),
	                v = this._get(t, "showMonthAfterYear"),
	                b = "<div class='ui-datepicker-title'>",
	                y = "";
	            if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
	            else {
	                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
	                y += "</select>"
	            }
	            if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
	                if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
	                else {
	                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
	                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
	                            return isNaN(e) ? d : e
	                        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
	                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
	                }
	            return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
	        },
	        _adjustInstDate: function(t, e, i) {
	            var s = t.selectedYear + ("Y" === i ? e : 0),
	                n = t.selectedMonth + ("M" === i ? e : 0),
	                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
	                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
	            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
	        },
	        _restrictMinMax: function(t, e) {
	            var i = this._getMinMaxDate(t, "min"),
	                s = this._getMinMaxDate(t, "max"),
	                n = i && i > e ? i : e;
	            return s && n > s ? s : n
	        },
	        _notifyChange: function(t) {
	            var e = this._get(t, "onChangeMonthYear");
	            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
	        },
	        _getNumberOfMonths: function(t) {
	            var e = this._get(t, "numberOfMonths");
	            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
	        },
	        _getMinMaxDate: function(t, e) {
	            return this._determineDate(t, this._get(t, e + "Date"), null)
	        },
	        _getDaysInMonth: function(t, e) {
	            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
	        },
	        _getFirstDayOfMonth: function(t, e) {
	            return new Date(t, e, 1).getDay()
	        },
	        _canAdjustMonth: function(t, e, i, s) {
	            var n = this._getNumberOfMonths(t),
	                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
	            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
	        },
	        _isInRange: function(t, e) {
	            var i, s, n = this._getMinMaxDate(t, "min"),
	                o = this._getMinMaxDate(t, "max"),
	                a = null,
	                r = null,
	                h = this._get(t, "yearRange");
	            return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
	        },
	        _getFormatConfig: function(t) {
	            var e = this._get(t, "shortYearCutoff");
	            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
	                shortYearCutoff: e,
	                dayNamesShort: this._get(t, "dayNamesShort"),
	                dayNames: this._get(t, "dayNames"),
	                monthNamesShort: this._get(t, "monthNamesShort"),
	                monthNames: this._get(t, "monthNames")
	            }
	        },
	        _formatDate: function(t, e, i, s) {
	            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
	            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
	            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
	        }
	    }), t.fn.datepicker = function(e) {
	        if (!this.length) return this;
	        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
	        var i = Array.prototype.slice.call(arguments, 1);
	        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each((function() {
	            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
	        })) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
	    }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
	    var _ = !1;
	    t(document).on("mouseup", (function() {
	        _ = !1
	    })), t.widget("ui.mouse", {
	        version: "1.12.1",
	        options: {
	            cancel: "input, textarea, button, select, option",
	            distance: 1,
	            delay: 0
	        },
	        _mouseInit: function() {
	            var e = this;
	            this.element.on("mousedown." + this.widgetName, (function(t) {
	                return e._mouseDown(t)
	            })).on("click." + this.widgetName, (function(i) {
	                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
	            })), this.started = !1
	        },
	        _mouseDestroy: function() {
	            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
	        },
	        _mouseDown: function(e) {
	            if (!_) {
	                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
	                var i = this,
	                    s = 1 === e.which,
	                    n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
	                return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
	                    i.mouseDelayMet = !0
	                }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
	                    return i._mouseMove(t)
	                }, this._mouseUpDelegate = function(t) {
	                    return i._mouseUp(t)
	                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0
	            }
	        },
	        _mouseMove: function(e) {
	            if (this._mouseMoved) {
	                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
	                if (!e.which)
	                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
	                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
	            }
	            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
	        },
	        _mouseUp: function(e) {
	            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault()
	        },
	        _mouseDistanceMet: function(t) {
	            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
	        },
	        _mouseDelayMet: function() {
	            return this.mouseDelayMet
	        },
	        _mouseStart: function() {},
	        _mouseDrag: function() {},
	        _mouseStop: function() {},
	        _mouseCapture: function() {
	            return !0
	        }
	    }), t.ui.plugin = {
	        add: function(e, i, s) {
	            var n, o = t.ui[e].prototype;
	            for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
	        },
	        call: function(t, e, i, s) {
	            var n, o = t.plugins[e];
	            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
	                for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
	        }
	    }, t.ui.safeBlur = function(e) {
	        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
	    }, t.widget("ui.draggable", t.ui.mouse, {
	        version: "1.12.1",
	        widgetEventPrefix: "drag",
	        options: {
	            addClasses: !0,
	            appendTo: "parent",
	            axis: !1,
	            connectToSortable: !1,
	            containment: !1,
	            cursor: "auto",
	            cursorAt: !1,
	            grid: !1,
	            handle: !1,
	            helper: "original",
	            iframeFix: !1,
	            opacity: !1,
	            refreshPositions: !1,
	            revert: !1,
	            revertDuration: 500,
	            scope: "default",
	            scroll: !0,
	            scrollSensitivity: 20,
	            scrollSpeed: 20,
	            snap: !1,
	            snapMode: "both",
	            snapTolerance: 20,
	            stack: !1,
	            zIndex: !1,
	            drag: null,
	            start: null,
	            stop: null
	        },
	        _create: function() {
	            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
	        },
	        _setOption: function(t, e) {
	            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
	        },
	        _destroy: function() {
	            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
	        },
	        _mouseCapture: function(e) {
	            var i = this.options;
	            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
	        },
	        _blockFrames: function(e) {
	            this.iframeBlocks = this.document.find(e).map((function() {
	                var e = t(this);
	                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
	            }))
	        },
	        _unblockFrames: function() {
	            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
	        },
	        _blurActiveElement: function(e) {
	            var i = t.ui.safeActiveElement(this.document[0]),
	                s = t(e.target);
	            s.closest(i).length || t.ui.safeBlur(i)
	        },
	        _mouseStart: function(e) {
	            var i = this.options;
	            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter((function() {
	                return "fixed" === t(this).css("position")
	            })).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
	        },
	        _refreshOffsets: function(t) {
	            this.offset = {
	                top: this.positionAbs.top - this.margins.top,
	                left: this.positionAbs.left - this.margins.left,
	                scroll: !1,
	                parent: this._getParentOffset(),
	                relative: this._getRelativeOffset()
	            }, this.offset.click = {
	                left: t.pageX - this.offset.left,
	                top: t.pageY - this.offset.top
	            }
	        },
	        _mouseDrag: function(e, i) {
	            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
	                var s = this._uiHash();
	                if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
	                this.position = s.position
	            }
	            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
	        },
	        _mouseStop: function(e) {
	            var i = this,
	                s = !1;
	            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
	                i._trigger("stop", e) !== !1 && i._clear()
	            })) : this._trigger("stop", e) !== !1 && this._clear(), !1
	        },
	        _mouseUp: function(e) {
	            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
	        },
	        cancel: function() {
	            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
	                target: this.element[0]
	            })) : this._clear(), this
	        },
	        _getHandle: function(e) {
	            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
	        },
	        _setHandleClassName: function() {
	            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
	        },
	        _removeHandleClassName: function() {
	            this._removeClass(this.handleElement, "ui-draggable-handle")
	        },
	        _createHelper: function(e) {
	            var i = this.options,
	                s = t.isFunction(i.helper),
	                n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
	            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
	        },
	        _setPositionRelative: function() {
	            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
	        },
	        _adjustOffsetFromHelper: function(e) {
	            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
	                left: +e[0],
	                top: +e[1] || 0
	            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
	        },
	        _isRootNode: function(t) {
	            return /(html|body)/i.test(t.tagName) || t === this.document[0]
	        },
	        _getParentOffset: function() {
	            var e = this.offsetParent.offset(),
	                i = this.document[0];
	            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
	                top: 0,
	                left: 0
	            }), {
	                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
	                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
	            }
	        },
	        _getRelativeOffset: function() {
	            if ("relative" !== this.cssPosition) return {
	                top: 0,
	                left: 0
	            };
	            var t = this.element.position(),
	                e = this._isRootNode(this.scrollParent[0]);
	            return {
	                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
	                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
	            }
	        },
	        _cacheMargins: function() {
	            this.margins = {
	                left: parseInt(this.element.css("marginLeft"), 10) || 0,
	                top: parseInt(this.element.css("marginTop"), 10) || 0,
	                right: parseInt(this.element.css("marginRight"), 10) || 0,
	                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
	            }
	        },
	        _cacheHelperProportions: function() {
	            this.helperProportions = {
	                width: this.helper.outerWidth(),
	                height: this.helper.outerHeight()
	            }
	        },
	        _setContainment: function() {
	            var e, i, s, n = this.options,
	                o = this.document[0];
	            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
	        },
	        _convertPositionTo: function(t, e) {
	            e || (e = this.position);
	            var i = "absolute" === t ? 1 : -1,
	                s = this._isRootNode(this.scrollParent[0]);
	            return {
	                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
	                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
	            }
	        },
	        _generatePosition: function(t, e) {
	            var i, s, n, o, a = this.options,
	                r = this._isRootNode(this.scrollParent[0]),
	                h = t.pageX,
	                l = t.pageY;
	            return r && this.offset.scroll || (this.offset.scroll = {
	                top: this.scrollParent.scrollTop(),
	                left: this.scrollParent.scrollLeft()
	            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
	                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
	                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
	            }
	        },
	        _clear: function() {
	            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
	        },
	        _trigger: function(e, i, s) {
	            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
	        },
	        plugins: {},
	        _uiHash: function() {
	            return {
	                helper: this.helper,
	                position: this.position,
	                originalPosition: this.originalPosition,
	                offset: this.positionAbs
	            }
	        }
	    }), t.ui.plugin.add("draggable", "connectToSortable", {
	        start: function(e, i, s) {
	            var n = t.extend({}, i, {
	                item: s.element
	            });
	            s.sortables = [], t(s.options.connectToSortable).each((function() {
	                var i = t(this).sortable("instance");
	                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
	            }))
	        },
	        stop: function(e, i, s) {
	            var n = t.extend({}, i, {
	                item: s.element
	            });
	            s.cancelHelperRemoval = !1, t.each(s.sortables, (function() {
	                var t = this;
	                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
	                    position: t.placeholder.css("position"),
	                    top: t.placeholder.css("top"),
	                    left: t.placeholder.css("left")
	                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
	            }))
	        },
	        drag: function(e, i, s) {
	            t.each(s.sortables, (function() {
	                var n = !1,
	                    o = this;
	                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, (function() {
	                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
	                }))), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
	                    return i.helper[0]
	                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, (function() {
	                    this.refreshPositions()
	                })), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, (function() {
	                    this.refreshPositions()
	                })))
	            }))
	        }
	    }), t.ui.plugin.add("draggable", "cursor", {
	        start: function(e, i, s) {
	            var n = t("body"),
	                o = s.options;
	            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
	        },
	        stop: function(e, i, s) {
	            var n = s.options;
	            n._cursor && t("body").css("cursor", n._cursor)
	        }
	    }), t.ui.plugin.add("draggable", "opacity", {
	        start: function(e, i, s) {
	            var n = t(i.helper),
	                o = s.options;
	            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
	        },
	        stop: function(e, i, s) {
	            var n = s.options;
	            n._opacity && t(i.helper).css("opacity", n._opacity)
	        }
	    }), t.ui.plugin.add("draggable", "scroll", {
	        start: function(t, e, i) {
	            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
	        },
	        drag: function(e, i, s) {
	            var n = s.options,
	                o = !1,
	                a = s.scrollParentNotHidden[0],
	                r = s.document[0];
	            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
	        }
	    }), t.ui.plugin.add("draggable", "snap", {
	        start: function(e, i, s) {
	            var n = s.options;
	            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each((function() {
	                var e = t(this),
	                    i = e.offset();
	                this !== s.element[0] && s.snapElements.push({
	                    item: this,
	                    width: e.outerWidth(),
	                    height: e.outerHeight(),
	                    top: i.top,
	                    left: i.left
	                })
	            }))
	        },
	        drag: function(e, i, s) {
	            var n, o, a, r, h, l, c, u, d, p, f = s.options,
	                g = f.snapTolerance,
	                m = i.offset.left,
	                _ = m + s.helperProportions.width,
	                v = i.offset.top,
	                b = v + s.helperProportions.height;
	            for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
	                snapItem: s.snapElements[d].item
	            })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
	                top: c - s.helperProportions.height,
	                left: 0
	            }).top), o && (i.position.top = s._convertPositionTo("relative", {
	                top: u,
	                left: 0
	            }).top), a && (i.position.left = s._convertPositionTo("relative", {
	                top: 0,
	                left: h - s.helperProportions.width
	            }).left), r && (i.position.left = s._convertPositionTo("relative", {
	                top: 0,
	                left: l
	            }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
	                top: c,
	                left: 0
	            }).top), o && (i.position.top = s._convertPositionTo("relative", {
	                top: u - s.helperProportions.height,
	                left: 0
	            }).top), a && (i.position.left = s._convertPositionTo("relative", {
	                top: 0,
	                left: h
	            }).left), r && (i.position.left = s._convertPositionTo("relative", {
	                top: 0,
	                left: l - s.helperProportions.width
	            }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
	                snapItem: s.snapElements[d].item
	            })), s.snapElements[d].snapping = n || o || a || r || p)
	        }
	    }), t.ui.plugin.add("draggable", "stack", {
	        start: function(e, i, s) {
	            var n, o = s.options,
	                a = t.makeArray(t(o.stack)).sort((function(e, i) {
	                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
	                }));
	            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each((function(e) {
	                t(this).css("zIndex", n + e)
	            })), this.css("zIndex", n + a.length))
	        }
	    }), t.ui.plugin.add("draggable", "zIndex", {
	        start: function(e, i, s) {
	            var n = t(i.helper),
	                o = s.options;
	            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
	        },
	        stop: function(e, i, s) {
	            var n = s.options;
	            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
	        }
	    }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
	        version: "1.12.1",
	        widgetEventPrefix: "resize",
	        options: {
	            alsoResize: !1,
	            animate: !1,
	            animateDuration: "slow",
	            animateEasing: "swing",
	            aspectRatio: !1,
	            autoHide: !1,
	            classes: {
	                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
	            },
	            containment: !1,
	            ghost: !1,
	            grid: !1,
	            handles: "e,s,se",
	            helper: !1,
	            maxHeight: null,
	            maxWidth: null,
	            minHeight: 10,
	            minWidth: 10,
	            zIndex: 90,
	            resize: null,
	            start: null,
	            stop: null
	        },
	        _num: function(t) {
	            return parseFloat(t) || 0
	        },
	        _isNumber: function(t) {
	            return !isNaN(parseFloat(t))
	        },
	        _hasScroll: function(e, i) {
	            if ("hidden" === t(e).css("overflow")) return !1;
	            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
	                n = !1;
	            return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
	        },
	        _create: function() {
	            var e, i = this.options,
	                s = this;
	            this._addClass("ui-resizable"), t.extend(this, {
	                _aspectRatio: !!i.aspectRatio,
	                aspectRatio: i.aspectRatio,
	                originalElement: this.element,
	                _proportionallyResizeElements: [],
	                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
	            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
	                position: this.element.css("position"),
	                width: this.element.outerWidth(),
	                height: this.element.outerHeight(),
	                top: this.element.css("top"),
	                left: this.element.css("left")
	            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
	                marginTop: this.originalElement.css("marginTop"),
	                marginRight: this.originalElement.css("marginRight"),
	                marginBottom: this.originalElement.css("marginBottom"),
	                marginLeft: this.originalElement.css("marginLeft")
	            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
	                position: "static",
	                zoom: 1,
	                display: "block"
	            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", (function() {
	                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
	            })).on("mouseleave", (function() {
	                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
	            })), this._mouseInit()
	        },
	        _destroy: function() {
	            this._mouseDestroy();
	            var e, i = function(e) {
	                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
	            };
	            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
	                position: e.css("position"),
	                width: e.outerWidth(),
	                height: e.outerHeight(),
	                top: e.css("top"),
	                left: e.css("left")
	            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
	        },
	        _setOption: function(t, e) {
	            switch (this._super(t, e), t) {
	                case "handles":
	                    this._removeHandles(), this._setupHandles();
	                    break;
	                default:
	            }
	        },
	        _setupHandles: function() {
	            var e, i, s, n, o, a = this.options,
	                r = this;
	            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
	                    n: ".ui-resizable-n",
	                    e: ".ui-resizable-e",
	                    s: ".ui-resizable-s",
	                    w: ".ui-resizable-w",
	                    se: ".ui-resizable-se",
	                    sw: ".ui-resizable-sw",
	                    ne: ".ui-resizable-ne",
	                    nw: ".ui-resizable-nw"
	                } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
	                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
	                    zIndex: a.zIndex
	                }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
	            this._renderAxis = function(e) {
	                var i, s, n, o;
	                e = e || this.element;
	                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
	                    mousedown: r._mouseDown
	                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
	            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", (function() {
	                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
	            })), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
	        },
	        _removeHandles: function() {
	            this._handles.remove()
	        },
	        _mouseCapture: function(e) {
	            var i, s, n = !1;
	            for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
	            return !this.options.disabled && n
	        },
	        _mouseStart: function(e) {
	            var i, s, n, o = this.options,
	                a = this.element;
	            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
	                left: i,
	                top: s
	            }, this.size = this._helper ? {
	                width: this.helper.width(),
	                height: this.helper.height()
	            } : {
	                width: a.width(),
	                height: a.height()
	            }, this.originalSize = this._helper ? {
	                width: a.outerWidth(),
	                height: a.outerHeight()
	            } : {
	                width: a.width(),
	                height: a.height()
	            }, this.sizeDiff = {
	                width: a.outerWidth() - a.width(),
	                height: a.outerHeight() - a.height()
	            }, this.originalPosition = {
	                left: i,
	                top: s
	            }, this.originalMousePosition = {
	                left: e.pageX,
	                top: e.pageY
	            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
	        },
	        _mouseDrag: function(e) {
	            var i, s, n = this.originalMousePosition,
	                o = this.axis,
	                a = e.pageX - n.left || 0,
	                r = e.pageY - n.top || 0,
	                h = this._change[o];
	            return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
	        },
	        _mouseStop: function(e) {
	            this.resizing = !1;
	            var i, s, n, o, a, r, h, l = this.options,
	                c = this;
	            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
	                width: c.helper.width() - o,
	                height: c.helper.height() - n
	            }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
	                top: h,
	                left: r
	            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
	        },
	        _updatePrevProperties: function() {
	            this.prevPosition = {
	                top: this.position.top,
	                left: this.position.left
	            }, this.prevSize = {
	                width: this.size.width,
	                height: this.size.height
	            }
	        },
	        _applyChanges: function() {
	            var t = {};
	            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
	        },
	        _updateVirtualBoundaries: function(t) {
	            var e, i, s, n, o, a = this.options;
	            o = {
	                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
	                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
	                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
	                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
	            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
	        },
	        _updateCache: function(t) {
	            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
	        },
	        _updateRatio: function(t) {
	            var e = this.position,
	                i = this.size,
	                s = this.axis;
	            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
	        },
	        _respectSize: function(t) {
	            var e = this._vBoundaries,
	                i = this.axis,
	                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
	                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
	                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
	                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
	                r = this.originalPosition.left + this.originalSize.width,
	                h = this.originalPosition.top + this.originalSize.height,
	                l = /sw|nw|w/.test(i),
	                c = /nw|ne|n/.test(i);
	            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
	        },
	        _getPaddingPlusBorderDimensions: function(t) {
	            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
	            return {
	                height: i[0] + i[2],
	                width: i[1] + i[3]
	            }
	        },
	        _proportionallyResize: function() {
	            if (this._proportionallyResizeElements.length)
	                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
	                    height: i.height() - this.outerDimensions.height || 0,
	                    width: i.width() - this.outerDimensions.width || 0
	                })
	        },
	        _renderProxy: function() {
	            var e = this.element,
	                i = this.options;
	            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
	                width: this.element.outerWidth(),
	                height: this.element.outerHeight(),
	                position: "absolute",
	                left: this.elementOffset.left + "px",
	                top: this.elementOffset.top + "px",
	                zIndex: ++i.zIndex
	            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
	        },
	        _change: {
	            e: function(t, e) {
	                return {
	                    width: this.originalSize.width + e
	                }
	            },
	            w: function(t, e) {
	                var i = this.originalSize,
	                    s = this.originalPosition;
	                return {
	                    left: s.left + e,
	                    width: i.width - e
	                }
	            },
	            n: function(t, e, i) {
	                var s = this.originalSize,
	                    n = this.originalPosition;
	                return {
	                    top: n.top + i,
	                    height: s.height - i
	                }
	            },
	            s: function(t, e, i) {
	                return {
	                    height: this.originalSize.height + i
	                }
	            },
	            se: function(e, i, s) {
	                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
	            },
	            sw: function(e, i, s) {
	                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
	            },
	            ne: function(e, i, s) {
	                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
	            },
	            nw: function(e, i, s) {
	                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
	            }
	        },
	        _propagate: function(e, i) {
	            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
	        },
	        plugins: {},
	        ui: function() {
	            return {
	                originalElement: this.originalElement,
	                element: this.element,
	                helper: this.helper,
	                position: this.position,
	                size: this.size,
	                originalSize: this.originalSize,
	                originalPosition: this.originalPosition
	            }
	        }
	    }), t.ui.plugin.add("resizable", "animate", {
	        stop: function(e) {
	            var i = t(this).resizable("instance"),
	                s = i.options,
	                n = i._proportionallyResizeElements,
	                o = n.length && /textarea/i.test(n[0].nodeName),
	                a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
	                r = o ? 0 : i.sizeDiff.width,
	                h = {
	                    width: i.size.width - r,
	                    height: i.size.height - a
	                },
	                l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
	                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
	            i.element.animate(t.extend(h, c && l ? {
	                top: c,
	                left: l
	            } : {}), {
	                duration: s.animateDuration,
	                easing: s.animateEasing,
	                step: function() {
	                    var s = {
	                        width: parseFloat(i.element.css("width")),
	                        height: parseFloat(i.element.css("height")),
	                        top: parseFloat(i.element.css("top")),
	                        left: parseFloat(i.element.css("left"))
	                    };
	                    n && n.length && t(n[0]).css({
	                        width: s.width,
	                        height: s.height
	                    }), i._updateCache(s), i._propagate("resize", e)
	                }
	            })
	        }
	    }), t.ui.plugin.add("resizable", "containment", {
	        start: function() {
	            var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
	                l = h.options,
	                c = h.element,
	                u = l.containment,
	                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
	            d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
	                left: 0,
	                top: 0
	            }, h.containerPosition = {
	                left: 0,
	                top: 0
	            }, h.parentData = {
	                element: t(document),
	                left: 0,
	                top: 0,
	                width: t(document).width(),
	                height: t(document).height() || document.body.parentNode.scrollHeight
	            }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each((function(t, s) {
	                i[t] = h._num(e.css("padding" + s))
	            })), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
	                height: e.innerHeight() - i[3],
	                width: e.innerWidth() - i[1]
	            }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
	                element: d,
	                left: s.left,
	                top: s.top,
	                width: a,
	                height: r
	            }))
	        },
	        resize: function(e) {
	            var i, s, n, o, a = t(this).resizable("instance"),
	                r = a.options,
	                h = a.containerOffset,
	                l = a.position,
	                c = a._aspectRatio || e.shiftKey,
	                u = {
	                    top: 0,
	                    left: 0
	                },
	                d = a.containerElement,
	                p = !0;
	            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
	        },
	        stop: function() {
	            var e = t(this).resizable("instance"),
	                i = e.options,
	                s = e.containerOffset,
	                n = e.containerPosition,
	                o = e.containerElement,
	                a = t(e.helper),
	                r = a.offset(),
	                h = a.outerWidth() - e.sizeDiff.width,
	                l = a.outerHeight() - e.sizeDiff.height;
	            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
	                left: r.left - n.left - s.left,
	                width: h,
	                height: l
	            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
	                left: r.left - n.left - s.left,
	                width: h,
	                height: l
	            })
	        }
	    }), t.ui.plugin.add("resizable", "alsoResize", {
	        start: function() {
	            var e = t(this).resizable("instance"),
	                i = e.options;
	            t(i.alsoResize).each((function() {
	                var e = t(this);
	                e.data("ui-resizable-alsoresize", {
	                    width: parseFloat(e.width()),
	                    height: parseFloat(e.height()),
	                    left: parseFloat(e.css("left")),
	                    top: parseFloat(e.css("top"))
	                })
	            }))
	        },
	        resize: function(e, i) {
	            var s = t(this).resizable("instance"),
	                n = s.options,
	                o = s.originalSize,
	                a = s.originalPosition,
	                r = {
	                    height: s.size.height - o.height || 0,
	                    width: s.size.width - o.width || 0,
	                    top: s.position.top - a.top || 0,
	                    left: s.position.left - a.left || 0
	                };
	            t(n.alsoResize).each((function() {
	                var e = t(this),
	                    s = t(this).data("ui-resizable-alsoresize"),
	                    n = {},
	                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
	                t.each(o, (function(t, e) {
	                    var i = (s[e] || 0) + (r[e] || 0);
	                    i && i >= 0 && (n[e] = i || null)
	                })), e.css(n)
	            }))
	        },
	        stop: function() {
	            t(this).removeData("ui-resizable-alsoresize")
	        }
	    }), t.ui.plugin.add("resizable", "ghost", {
	        start: function() {
	            var e = t(this).resizable("instance"),
	                i = e.size;
	            e.ghost = e.originalElement.clone(), e.ghost.css({
	                opacity: .25,
	                display: "block",
	                position: "relative",
	                height: i.height,
	                width: i.width,
	                margin: 0,
	                left: 0,
	                top: 0
	            }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
	        },
	        resize: function() {
	            var e = t(this).resizable("instance");
	            e.ghost && e.ghost.css({
	                position: "relative",
	                height: e.size.height,
	                width: e.size.width
	            })
	        },
	        stop: function() {
	            var e = t(this).resizable("instance");
	            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
	        }
	    }), t.ui.plugin.add("resizable", "grid", {
	        resize: function() {
	            var e, i = t(this).resizable("instance"),
	                s = i.options,
	                n = i.size,
	                o = i.originalSize,
	                a = i.originalPosition,
	                r = i.axis,
	                h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
	                l = h[0] || 1,
	                c = h[1] || 1,
	                u = Math.round((n.width - o.width) / l) * l,
	                d = Math.round((n.height - o.height) / c) * c,
	                p = o.width + u,
	                f = o.height + d,
	                g = s.maxWidth && p > s.maxWidth,
	                m = s.maxHeight && f > s.maxHeight,
	                _ = s.minWidth && s.minWidth > p,
	                v = s.minHeight && s.minHeight > f;
	            s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
	        }
	    }), t.ui.resizable, t.widget("ui.dialog", {
	        version: "1.12.1",
	        options: {
	            appendTo: "body",
	            autoOpen: !0,
	            buttons: [],
	            classes: {
	                "ui-dialog": "ui-corner-all",
	                "ui-dialog-titlebar": "ui-corner-all"
	            },
	            closeOnEscape: !0,
	            closeText: "Close",
	            draggable: !0,
	            hide: null,
	            height: "auto",
	            maxHeight: null,
	            maxWidth: null,
	            minHeight: 150,
	            minWidth: 150,
	            modal: !1,
	            position: {
	                my: "center",
	                at: "center",
	                of: window,
	                collision: "fit",
	                using: function(e) {
	                    var i = t(this).css(e).offset().top;
	                    0 > i && t(this).css("top", e.top - i)
	                }
	            },
	            resizable: !0,
	            show: null,
	            title: null,
	            width: 300,
	            beforeClose: null,
	            close: null,
	            drag: null,
	            dragStart: null,
	            dragStop: null,
	            focus: null,
	            open: null,
	            resize: null,
	            resizeStart: null,
	            resizeStop: null
	        },
	        sizeRelatedOptions: {
	            buttons: !0,
	            height: !0,
	            maxHeight: !0,
	            maxWidth: !0,
	            minHeight: !0,
	            minWidth: !0,
	            width: !0
	        },
	        resizableRelatedOptions: {
	            maxHeight: !0,
	            maxWidth: !0,
	            minHeight: !0,
	            minWidth: !0
	        },
	        _create: function() {
	            this.originalCss = {
	                display: this.element[0].style.display,
	                width: this.element[0].style.width,
	                minHeight: this.element[0].style.minHeight,
	                maxHeight: this.element[0].style.maxHeight,
	                height: this.element[0].style.height
	            }, this.originalPosition = {
	                parent: this.element.parent(),
	                index: this.element.parent().children().index(this.element)
	            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
	        },
	        _init: function() {
	            this.options.autoOpen && this.open()
	        },
	        _appendTo: function() {
	            var e = this.options.appendTo;
	            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
	        },
	        _destroy: function() {
	            var t, e = this.originalPosition;
	            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
	        },
	        widget: function() {
	            return this.uiDialog
	        },
	        disable: t.noop,
	        enable: t.noop,
	        close: function(e) {
	            var i = this;
	            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, (function() {
	                i._trigger("close", e)
	            })))
	        },
	        isOpen: function() {
	            return this._isOpen
	        },
	        moveToTop: function() {
	            this._moveToTop()
	        },
	        _moveToTop: function(e, i) {
	            var s = !1,
	                n = this.uiDialog.siblings(".ui-front:visible").map((function() {
	                    return +t(this).css("z-index")
	                })).get(),
	                o = Math.max.apply(null, n);
	            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
	        },
	        open: function() {
	            var e = this;
	            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, (function() {
	                e._focusTabbable(), e._trigger("focus")
	            })), this._makeFocusTarget(), this._trigger("open"), void 0)
	        },
	        _focusTabbable: function() {
	            var t = this._focusedElement;
	            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
	        },
	        _keepFocus: function(e) {
	            function i() {
	                var e = t.ui.safeActiveElement(this.document[0]),
	                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
	                i || this._focusTabbable()
	            }
	            e.preventDefault(), i.call(this), this._delay(i)
	        },
	        _createWrapper: function() {
	            this.uiDialog = t("<div>").hide().attr({
	                tabIndex: -1,
	                role: "dialog"
	            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
	                keydown: function(e) {
	                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;
	                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
	                        var i = this.uiDialog.find(":tabbable"),
	                            s = i.filter(":first"),
	                            n = i.filter(":last");
	                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay((function() {
	                            n.trigger("focus")
	                        })), e.preventDefault()) : (this._delay((function() {
	                            s.trigger("focus")
	                        })), e.preventDefault())
	                    }
	                },
	                mousedown: function(t) {
	                    this._moveToTop(t) && this._focusTabbable()
	                }
	            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
	                "aria-describedby": this.element.uniqueId().attr("id")
	            })
	        },
	        _createTitlebar: function() {
	            var e;
	            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
	                mousedown: function(e) {
	                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
	                }
	            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
	                label: t("<a>").text(this.options.closeText).html(),
	                icon: "ui-icon-closethick",
	                showLabel: !1
	            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
	                click: function(t) {
	                    t.preventDefault(), this.close(t)
	                }
	            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
	                "aria-labelledby": e.attr("id")
	            })
	        },
	        _title: function(t) {
	            this.options.title ? t.text(this.options.title) : t.html("&#160;")
	        },
	        _createButtonPane: function() {
	            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
	        },
	        _createButtons: function() {
	            var e = this,
	                i = this.options.buttons;
	            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, (function(i, s) {
	                var n, o;
	                s = t.isFunction(s) ? {
	                    click: s,
	                    text: i
	                } : s, s = t.extend({
	                    type: "button"
	                }, s), n = s.click, o = {
	                    icon: s.icon,
	                    iconPosition: s.iconPosition,
	                    showLabel: s.showLabel,
	                    icons: s.icons,
	                    text: s.text
	                }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", (function() {
	                    n.apply(e.element[0], arguments)
	                }))
	            })), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
	        },
	        _makeDraggable: function() {
	            function e(t) {
	                return {
	                    position: t.position,
	                    offset: t.offset
	                }
	            }
	            var i = this,
	                s = this.options;
	            this.uiDialog.draggable({
	                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
	                handle: ".ui-dialog-titlebar",
	                containment: "document",
	                start: function(s, n) {
	                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
	                },
	                drag: function(t, s) {
	                    i._trigger("drag", t, e(s))
	                },
	                stop: function(n, o) {
	                    var a = o.offset.left - i.document.scrollLeft(),
	                        r = o.offset.top - i.document.scrollTop();
	                    s.position = {
	                        my: "left top",
	                        at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
	                        of: i.window
	                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
	                }
	            })
	        },
	        _makeResizable: function() {
	            function e(t) {
	                return {
	                    originalPosition: t.originalPosition,
	                    originalSize: t.originalSize,
	                    position: t.position,
	                    size: t.size
	                }
	            }
	            var i = this,
	                s = this.options,
	                n = s.resizable,
	                o = this.uiDialog.css("position"),
	                a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
	            this.uiDialog.resizable({
	                cancel: ".ui-dialog-content",
	                containment: "document",
	                alsoResize: this.element,
	                maxWidth: s.maxWidth,
	                maxHeight: s.maxHeight,
	                minWidth: s.minWidth,
	                minHeight: this._minHeight(),
	                handles: a,
	                start: function(s, n) {
	                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
	                },
	                resize: function(t, s) {
	                    i._trigger("resize", t, e(s))
	                },
	                stop: function(n, o) {
	                    var a = i.uiDialog.offset(),
	                        r = a.left - i.document.scrollLeft(),
	                        h = a.top - i.document.scrollTop();
	                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
	                        my: "left top",
	                        at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
	                        of: i.window
	                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
	                }
	            }).css("position", o)
	        },
	        _trackFocus: function() {
	            this._on(this.widget(), {
	                focusin: function(e) {
	                    this._makeFocusTarget(), this._focusedElement = t(e.target)
	                }
	            })
	        },
	        _makeFocusTarget: function() {
	            this._untrackInstance(), this._trackingInstances().unshift(this)
	        },
	        _untrackInstance: function() {
	            var e = this._trackingInstances(),
	                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
	        },
	        _trackingInstances: function() {
	            var t = this.document.data("ui-dialog-instances");
	            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
	        },
	        _minHeight: function() {
	            var t = this.options;
	            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
	        },
	        _position: function() {
	            var t = this.uiDialog.is(":visible");
	            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
	        },
	        _setOptions: function(e) {
	            var i = this,
	                s = !1,
	                n = {};
	            t.each(e, (function(t, e) {
	                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
	            })), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
	        },
	        _setOption: function(e, i) {
	            var s, n, o = this.uiDialog;
	            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
	                label: t("<a>").text("" + this.options.closeText).html()
	            }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
	        },
	        _size: function() {
	            var t, e, i, s = this.options;
	            this.element.show().css({
	                width: "auto",
	                minHeight: 0,
	                maxHeight: "none",
	                height: 0
	            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
	                height: "auto",
	                width: s.width
	            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
	                minHeight: e,
	                maxHeight: i,
	                height: "auto"
	            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
	        },
	        _blockFrames: function() {
	            this.iframeBlocks = this.document.find("iframe").map((function() {
	                var e = t(this);
	                return t("<div>").css({
	                    position: "absolute",
	                    width: e.outerWidth(),
	                    height: e.outerHeight()
	                }).appendTo(e.parent()).offset(e.offset())[0]
	            }))
	        },
	        _unblockFrames: function() {
	            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
	        },
	        _allowInteraction: function(e) {
	            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
	        },
	        _createOverlay: function() {
	            if (this.options.modal) {
	                var e = !0;
	                this._delay((function() {
	                    e = !1
	                })), this.document.data("ui-dialog-overlays") || this._on(this.document, {
	                    focusin: function(t) {
	                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
	                    }
	                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
	                    mousedown: "_keepFocus"
	                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
	            }
	        },
	        _destroyOverlay: function() {
	            if (this.options.modal && this.overlay) {
	                var t = this.document.data("ui-dialog-overlays") - 1;
	                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
	            }
	        }
	    }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
	        options: {
	            dialogClass: ""
	        },
	        _createWrapper: function() {
	            this._super(), this.uiDialog.addClass(this.options.dialogClass)
	        },
	        _setOption: function(t, e) {
	            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
	        }
	    }), t.ui.dialog, t.widget("ui.droppable", {
	        version: "1.12.1",
	        widgetEventPrefix: "drop",
	        options: {
	            accept: "*",
	            addClasses: !0,
	            greedy: !1,
	            scope: "default",
	            tolerance: "intersect",
	            activate: null,
	            deactivate: null,
	            drop: null,
	            out: null,
	            over: null
	        },
	        _create: function() {
	            var e, i = this.options,
	                s = i.accept;
	            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
	                return t.is(s)
	            }, this.proportions = function() {
	                return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
	                    width: this.element[0].offsetWidth,
	                    height: this.element[0].offsetHeight
	                }
	            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
	        },
	        _addToManager: function(e) {
	            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
	        },
	        _splice: function(t) {
	            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
	        },
	        _destroy: function() {
	            var e = t.ui.ddmanager.droppables[this.options.scope];
	            this._splice(e)
	        },
	        _setOption: function(e, i) {
	            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
	                return t.is(i)
	            };
	            else if ("scope" === e) {
	                var s = t.ui.ddmanager.droppables[this.options.scope];
	                this._splice(s), this._addToManager(i)
	            }
	            this._super(e, i)
	        },
	        _activate: function(e) {
	            var i = t.ui.ddmanager.current;
	            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
	        },
	        _deactivate: function(e) {
	            var i = t.ui.ddmanager.current;
	            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
	        },
	        _over: function(e) {
	            var i = t.ui.ddmanager.current;
	            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
	        },
	        _out: function(e) {
	            var i = t.ui.ddmanager.current;
	            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
	        },
	        _drop: function(e, i) {
	            var s = i || t.ui.ddmanager.current,
	                n = !1;
	            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function() {
	                var i = t(this).droppable("instance");
	                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
	                    offset: i.element.offset()
	                }), i.options.tolerance, e) ? (n = !0, !1) : void 0
	            })), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
	        },
	        ui: function(t) {
	            return {
	                draggable: t.currentItem || t.element,
	                helper: t.helper,
	                position: t.position,
	                offset: t.positionAbs
	            }
	        },
	        _addHoverClass: function() {
	            this._addClass("ui-droppable-hover")
	        },
	        _removeHoverClass: function() {
	            this._removeClass("ui-droppable-hover")
	        },
	        _addActiveClass: function() {
	            this._addClass("ui-droppable-active")
	        },
	        _removeActiveClass: function() {
	            this._removeClass("ui-droppable-active")
	        }
	    });
	    var v = t.ui.intersect = (function() {
	        function t(t, e, i) {
	            return t >= e && e + i > t
	        }
	        return function(e, i, s, n) {
	            if (!i.offset) return !1;
	            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
	                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
	                r = o + e.helperProportions.width,
	                h = a + e.helperProportions.height,
	                l = i.offset.left,
	                c = i.offset.top,
	                u = l + i.proportions().width,
	                d = c + i.proportions().height;
	            switch (s) {
	                case "fit":
	                    return o >= l && u >= r && a >= c && d >= h;
	                case "intersect":
	                    return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
	                case "pointer":
	                    return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
	                case "touch":
	                    return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
	                default:
	                    return !1
	            }
	        }
	    })();
	    t.ui.ddmanager = {
	        current: null,
	        droppables: {
	            "default": []
	        },
	        prepareOffsets: function(e, i) {
	            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
	                a = i ? i.type : null,
	                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
	            t: for (s = 0; o.length > s; s++)
	                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
	                    for (n = 0; r.length > n; n++)
	                        if (r[n] === o[s].element[0]) {
	                            o[s].proportions().height = 0;
	                            continue t
	                        }
	                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
	                        width: o[s].element[0].offsetWidth,
	                        height: o[s].element[0].offsetHeight
	                    }))
	                }
	        },
	        drop: function(e, i) {
	            var s = !1;
	            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), (function() {
	                this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
	            })), s
	        },
	        dragStart: function(e, i) {
	            e.element.parentsUntil("body").on("scroll.droppable", (function() {
	                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
	            }))
	        },
	        drag: function(e, i) {
	            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], (function() {
	                if (!this.options.disabled && !this.greedyChild && this.visible) {
	                    var s, n, o, a = v(e, this, this.options.tolerance, i),
	                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
	                    r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter((function() {
	                        return t(this).droppable("instance").options.scope === n
	                    })), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
	                }
	            }))
	        },
	        dragStop: function(e, i) {
	            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
	        }
	    }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
	        options: {
	            hoverClass: !1,
	            activeClass: !1
	        },
	        _addActiveClass: function() {
	            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
	        },
	        _removeActiveClass: function() {
	            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
	        },
	        _addHoverClass: function() {
	            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
	        },
	        _removeHoverClass: function() {
	            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
	        }
	    }), t.ui.droppable, t.widget("ui.progressbar", {
	        version: "1.12.1",
	        options: {
	            classes: {
	                "ui-progressbar": "ui-corner-all",
	                "ui-progressbar-value": "ui-corner-left",
	                "ui-progressbar-complete": "ui-corner-right"
	            },
	            max: 100,
	            value: 0,
	            change: null,
	            complete: null
	        },
	        min: 0,
	        _create: function() {
	            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
	                role: "progressbar",
	                "aria-valuemin": this.min
	            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
	        },
	        _destroy: function() {
	            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
	        },
	        value: function(t) {
	            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
	        },
	        _constrainedValue: function(t) {
	            return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
	        },
	        _setOptions: function(t) {
	            var e = t.value;
	            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
	        },
	        _setOption: function(t, e) {
	            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
	        },
	        _setOptionDisabled: function(t) {
	            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
	        },
	        _percentage: function() {
	            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
	        },
	        _refreshValue: function() {
	            var e = this.options.value,
	                i = this._percentage();
	            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
	                "aria-valuemax": this.options.max,
	                "aria-valuenow": e
	            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
	        }
	    }), t.widget("ui.selectable", t.ui.mouse, {
	        version: "1.12.1",
	        options: {
	            appendTo: "body",
	            autoRefresh: !0,
	            distance: 0,
	            filter: "*",
	            tolerance: "touch",
	            selected: null,
	            selecting: null,
	            start: null,
	            stop: null,
	            unselected: null,
	            unselecting: null
	        },
	        _create: function() {
	            var e = this;
	            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
	                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each((function() {
	                    var i = t(this),
	                        s = i.offset(),
	                        n = {
	                            left: s.left - e.elementPos.left,
	                            top: s.top - e.elementPos.top
	                        };
	                    t.data(this, "selectable-item", {
	                        element: this,
	                        $element: i,
	                        left: n.left,
	                        top: n.top,
	                        right: n.left + i.outerWidth(),
	                        bottom: n.top + i.outerHeight(),
	                        startselected: !1,
	                        selected: i.hasClass("ui-selected"),
	                        selecting: i.hasClass("ui-selecting"),
	                        unselecting: i.hasClass("ui-unselecting")
	                    })
	                }))
	            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
	        },
	        _destroy: function() {
	            this.selectees.removeData("selectable-item"), this._mouseDestroy()
	        },
	        _mouseStart: function(e) {
	            var i = this,
	                s = this.options;
	            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
	                left: e.pageX,
	                top: e.pageY,
	                width: 0,
	                height: 0
	            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each((function() {
	                var s = t.data(this, "selectable-item");
	                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
	                    unselecting: s.element
	                }))
	            })), t(e.target).parents().addBack().each((function() {
	                var s, n = t.data(this, "selectable-item");
	                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
	                    selecting: n.element
	                }) : i._trigger("unselecting", e, {
	                    unselecting: n.element
	                }), !1) : void 0
	            })))
	        },
	        _mouseDrag: function(e) {
	            if (this.dragged = !0, !this.options.disabled) {
	                var i, s = this,
	                    n = this.options,
	                    o = this.opos[0],
	                    a = this.opos[1],
	                    r = e.pageX,
	                    h = e.pageY;
	                return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
	                    left: o,
	                    top: a,
	                    width: r - o,
	                    height: h - a
	                }), this.selectees.each((function() {
	                    var i = t.data(this, "selectable-item"),
	                        l = !1,
	                        c = {};
	                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
	                        selecting: i.element
	                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
	                        unselecting: i.element
	                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
	                        unselecting: i.element
	                    })))))
	                })), !1
	            }
	        },
	        _mouseStop: function(e) {
	            var i = this;
	            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each((function() {
	                var s = t.data(this, "selectable-item");
	                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
	                    unselected: s.element
	                })
	            })), t(".ui-selecting", this.element[0]).each((function() {
	                var s = t.data(this, "selectable-item");
	                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
	                    selected: s.element
	                })
	            })), this._trigger("stop", e), this.helper.remove(), !1
	        }
	    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
	        version: "1.12.1",
	        defaultElement: "<select>",
	        options: {
	            appendTo: null,
	            classes: {
	                "ui-selectmenu-button-open": "ui-corner-top",
	                "ui-selectmenu-button-closed": "ui-corner-all"
	            },
	            disabled: null,
	            icons: {
	                button: "ui-icon-triangle-1-s"
	            },
	            position: {
	                my: "left top",
	                at: "left bottom",
	                collision: "none"
	            },
	            width: !1,
	            change: null,
	            close: null,
	            focus: null,
	            open: null,
	            select: null
	        },
	        _create: function() {
	            var e = this.element.uniqueId().attr("id");
	            this.ids = {
	                element: e,
	                button: e + "-button",
	                menu: e + "-menu"
	            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
	        },
	        _drawButton: function() {
	            var e, i = this,
	                s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
	            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
	                click: function(t) {
	                    this.button.focus(), t.preventDefault()
	                }
	            }), this.element.hide(), this.button = t("<span>", {
	                tabindex: this.options.disabled ? -1 : 0,
	                id: this.ids.button,
	                role: "combobox",
	                "aria-expanded": "false",
	                "aria-autocomplete": "list",
	                "aria-owns": this.ids.menu,
	                "aria-haspopup": "true",
	                title: this.element.attr("title")
	            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", (function() {
	                i._rendered || i._refreshMenu()
	            }))
	        },
	        _drawMenu: function() {
	            var e = this;
	            this.menu = t("<ul>", {
	                "aria-hidden": "true",
	                "aria-labelledby": this.ids.button,
	                id: this.ids.menu
	            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
	                classes: {
	                    "ui-menu": "ui-corner-bottom"
	                },
	                role: "listbox",
	                select: function(t, i) {
	                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
	                },
	                focus: function(t, i) {
	                    var s = i.item.data("ui-selectmenu-item");
	                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
	                        item: s
	                    }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
	                }
	            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
	                return !1
	            }, this.menuInstance._isDivider = function() {
	                return !1
	            }
	        },
	        refresh: function() {
	            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
	        },
	        _refreshMenu: function() {
	            var t, e = this.element.find("option");
	            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
	        },
	        open: function(t) {
	            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
	        },
	        _position: function() {
	            this.menuWrap.position(t.extend({
	                of: this.button
	            }, this.options.position))
	        },
	        close: function(t) {
	            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
	        },
	        widget: function() {
	            return this.button
	        },
	        menuWidget: function() {
	            return this.menu
	        },
	        _renderButtonItem: function(e) {
	            var i = t("<span>");
	            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
	        },
	        _renderMenu: function(e, i) {
	            var s = this,
	                n = "";
	            t.each(i, (function(i, o) {
	                var a;
	                o.optgroup !== n && (a = t("<li>", {
	                    text: o.optgroup
	                }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
	            }))
	        },
	        _renderItemData: function(t, e) {
	            return this._renderItem(t, e).data("ui-selectmenu-item", e)
	        },
	        _renderItem: function(e, i) {
	            var s = t("<li>"),
	                n = t("<div>", {
	                    title: i.element.attr("title")
	                });
	            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
	        },
	        _setText: function(t, e) {
	            e ? t.text(e) : t.html("&#160;")
	        },
	        _move: function(t, e) {
	            var i, s, n = ".ui-menu-item";
	            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
	        },
	        _getSelectedItem: function() {
	            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
	        },
	        _toggle: function(t) {
	            this[this.isOpen ? "close" : "open"](t)
	        },
	        _setSelection: function() {
	            var t;
	            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
	        },
	        _documentClick: {
	            mousedown: function(e) {
	                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
	            }
	        },
	        _buttonEvents: {
	            mousedown: function() {
	                var t;
	                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
	            },
	            click: function(t) {
	                this._setSelection(), this._toggle(t)
	            },
	            keydown: function(e) {
	                var i = !0;
	                switch (e.keyCode) {
	                    case t.ui.keyCode.TAB:
	                    case t.ui.keyCode.ESCAPE:
	                        this.close(e), i = !1;
	                        break;
	                    case t.ui.keyCode.ENTER:
	                        this.isOpen && this._selectFocusedItem(e);
	                        break;
	                    case t.ui.keyCode.UP:
	                        e.altKey ? this._toggle(e) : this._move("prev", e);
	                        break;
	                    case t.ui.keyCode.DOWN:
	                        e.altKey ? this._toggle(e) : this._move("next", e);
	                        break;
	                    case t.ui.keyCode.SPACE:
	                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
	                        break;
	                    case t.ui.keyCode.LEFT:
	                        this._move("prev", e);
	                        break;
	                    case t.ui.keyCode.RIGHT:
	                        this._move("next", e);
	                        break;
	                    case t.ui.keyCode.HOME:
	                    case t.ui.keyCode.PAGE_UP:
	                        this._move("first", e);
	                        break;
	                    case t.ui.keyCode.END:
	                    case t.ui.keyCode.PAGE_DOWN:
	                        this._move("last", e);
	                        break;
	                    default:
	                        this.menu.trigger(e), i = !1
	                }
	                i && e.preventDefault()
	            }
	        },
	        _selectFocusedItem: function(t) {
	            var e = this.menuItems.eq(this.focusIndex).parent("li");
	            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
	        },
	        _select: function(t, e) {
	            var i = this.element[0].selectedIndex;
	            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
	                item: t
	            }), t.index !== i && this._trigger("change", e, {
	                item: t
	            }), this.close(e)
	        },
	        _setAria: function(t) {
	            var e = this.menuItems.eq(t.index).attr("id");
	            this.button.attr({
	                "aria-labelledby": e,
	                "aria-activedescendant": e
	            }), this.menu.attr("aria-activedescendant", e)
	        },
	        _setOption: function(t, e) {
	            if ("icons" === t) {
	                var i = this.button.find("span.ui-icon");
	                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
	            }
	            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
	        },
	        _setOptionDisabled: function(t) {
	            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
	        },
	        _appendTo: function() {
	            var e = this.options.appendTo;
	            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
	        },
	        _toggleAttr: function() {
	            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
	        },
	        _resizeButton: function() {
	            var t = this.options.width;
	            return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0)
	        },
	        _resizeMenu: function() {
	            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
	        },
	        _getCreateOptions: function() {
	            var t = this._super();
	            return t.disabled = this.element.prop("disabled"), t
	        },
	        _parseOptions: function(e) {
	            var i = this,
	                s = [];
	            e.each((function(e, n) {
	                s.push(i._parseOption(t(n), e))
	            })), this.items = s
	        },
	        _parseOption: function(t, e) {
	            var i = t.parent("optgroup");
	            return {
	                element: t,
	                index: e,
	                value: t.val(),
	                label: t.text(),
	                optgroup: i.attr("label") || "",
	                disabled: i.prop("disabled") || t.prop("disabled")
	            }
	        },
	        _destroy: function() {
	            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
	        }
	    }]), t.widget("ui.slider", t.ui.mouse, {
	        version: "1.12.1",
	        widgetEventPrefix: "slide",
	        options: {
	            animate: !1,
	            classes: {
	                "ui-slider": "ui-corner-all",
	                "ui-slider-handle": "ui-corner-all",
	                "ui-slider-range": "ui-corner-all ui-widget-header"
	            },
	            distance: 0,
	            max: 100,
	            min: 0,
	            orientation: "horizontal",
	            range: !1,
	            step: 1,
	            value: 0,
	            values: null,
	            change: null,
	            slide: null,
	            start: null,
	            stop: null
	        },
	        numPages: 5,
	        _create: function() {
	            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
	        },
	        _refresh: function() {
	            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
	        },
	        _createHandles: function() {
	            var e, i, s = this.options,
	                n = this.element.find(".ui-slider-handle"),
	                o = "<span tabindex='0'></span>",
	                a = [];
	            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
	            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function(e) {
	                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
	            }))
	        },
	        _createRange: function() {
	            var e = this.options;
	            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
	                left: "",
	                bottom: ""
	            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
	        },
	        _setupEvents: function() {
	            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
	        },
	        _destroy: function() {
	            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
	        },
	        _mouseCapture: function(e) {
	            var i, s, n, o, a, r, h, l, c = this,
	                u = this.options;
	            return u.disabled ? !1 : (this.elementSize = {
	                width: this.element.outerWidth(),
	                height: this.element.outerHeight()
	            }, this.elementOffset = this.element.offset(), i = {
	                x: e.pageX,
	                y: e.pageY
	            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each((function(e) {
	                var i = Math.abs(s - c.values(e));
	                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
	            })), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
	                left: 0,
	                top: 0
	            } : {
	                left: e.pageX - h.left - o.width() / 2,
	                top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
	            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
	        },
	        _mouseStart: function() {
	            return !0
	        },
	        _mouseDrag: function(t) {
	            var e = {
	                    x: t.pageX,
	                    y: t.pageY
	                },
	                i = this._normValueFromMouse(e);
	            return this._slide(t, this._handleIndex, i), !1
	        },
	        _mouseStop: function(t) {
	            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
	        },
	        _detectOrientation: function() {
	            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
	        },
	        _normValueFromMouse: function(t) {
	            var e, i, s, n, o;
	            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
	        },
	        _uiHash: function(t, e, i) {
	            var s = {
	                handle: this.handles[t],
	                handleIndex: t,
	                value: void 0 !== e ? e : this.value()
	            };
	            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
	        },
	        _hasMultipleValues: function() {
	            return this.options.values && this.options.values.length
	        },
	        _start: function(t, e) {
	            return this._trigger("start", t, this._uiHash(e))
	        },
	        _slide: function(t, e, i) {
	            var s, n, o = this.value(),
	                a = this.values();
	            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
	        },
	        _stop: function(t, e) {
	            this._trigger("stop", t, this._uiHash(e))
	        },
	        _change: function(t, e) {
	            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
	        },
	        value: function(t) {
	            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
	        },
	        values: function(e, i) {
	            var s, n, o;
	            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
	            if (!arguments.length) return this._values();
	            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
	            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
	            this._refreshValue()
	        },
	        _setOption: function(e, i) {
	            var s, n = 0;
	            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
	                case "orientation":
	                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
	                    break;
	                case "value":
	                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
	                    break;
	                case "values":
	                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
	                    this._animateOff = !1;
	                    break;
	                case "step":
	                case "min":
	                case "max":
	                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
	                    break;
	                case "range":
	                    this._animateOff = !0, this._refresh(), this._animateOff = !1
	            }
	        },
	        _setOptionDisabled: function(t) {
	            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
	        },
	        _value: function() {
	            var t = this.options.value;
	            return t = this._trimAlignValue(t)
	        },
	        _values: function(t) {
	            var e, i, s;
	            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
	            if (this._hasMultipleValues()) {
	                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
	                return i
	            }
	            return []
	        },
	        _trimAlignValue: function(t) {
	            if (this._valueMin() >= t) return this._valueMin();
	            if (t >= this._valueMax()) return this._valueMax();
	            var e = this.options.step > 0 ? this.options.step : 1,
	                i = (t - this._valueMin()) % e,
	                s = t - i;
	            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
	        },
	        _calculateNewMax: function() {
	            var t = this.options.max,
	                e = this._valueMin(),
	                i = this.options.step,
	                s = Math.round((t - e) / i) * i;
	            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
	        },
	        _precision: function() {
	            var t = this._precisionOf(this.options.step);
	            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
	        },
	        _precisionOf: function(t) {
	            var e = "" + t,
	                i = e.indexOf(".");
	            return -1 === i ? 0 : e.length - i - 1
	        },
	        _valueMin: function() {
	            return this.options.min
	        },
	        _valueMax: function() {
	            return this.max
	        },
	        _refreshRange: function(t) {
	            "vertical" === t && this.range.css({
	                width: "",
	                left: ""
	            }), "horizontal" === t && this.range.css({
	                height: "",
	                bottom: ""
	            })
	        },
	        _refreshValue: function() {
	            var e, i, s, n, o, a = this.options.range,
	                r = this.options,
	                h = this,
	                l = this._animateOff ? !1 : r.animate,
	                c = {};
	            this._hasMultipleValues() ? this.handles.each((function(s) {
	                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
	                    left: i + "%"
	                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
	                    width: i - e + "%"
	                }, {
	                    queue: !1,
	                    duration: r.animate
	                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
	                    bottom: i + "%"
	                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
	                    height: i - e + "%"
	                }, {
	                    queue: !1,
	                    duration: r.animate
	                }))), e = i
	            })) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
	                width: i + "%"
	            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
	                width: 100 - i + "%"
	            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
	                height: i + "%"
	            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
	                height: 100 - i + "%"
	            }, r.animate))
	        },
	        _handleEvents: {
	            keydown: function(e) {
	                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
	                switch (e.keyCode) {
	                    case t.ui.keyCode.HOME:
	                    case t.ui.keyCode.END:
	                    case t.ui.keyCode.PAGE_UP:
	                    case t.ui.keyCode.PAGE_DOWN:
	                    case t.ui.keyCode.UP:
	                    case t.ui.keyCode.RIGHT:
	                    case t.ui.keyCode.DOWN:
	                    case t.ui.keyCode.LEFT:
	                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
	                }
	                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
	                    case t.ui.keyCode.HOME:
	                        n = this._valueMin();
	                        break;
	                    case t.ui.keyCode.END:
	                        n = this._valueMax();
	                        break;
	                    case t.ui.keyCode.PAGE_UP:
	                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
	                        break;
	                    case t.ui.keyCode.PAGE_DOWN:
	                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
	                        break;
	                    case t.ui.keyCode.UP:
	                    case t.ui.keyCode.RIGHT:
	                        if (s === this._valueMax()) return;
	                        n = this._trimAlignValue(s + o);
	                        break;
	                    case t.ui.keyCode.DOWN:
	                    case t.ui.keyCode.LEFT:
	                        if (s === this._valueMin()) return;
	                        n = this._trimAlignValue(s - o)
	                }
	                this._slide(e, a, n)
	            },
	            keyup: function(e) {
	                var i = t(e.target).data("ui-slider-handle-index");
	                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
	            }
	        }
	    }), t.widget("ui.sortable", t.ui.mouse, {
	        version: "1.12.1",
	        widgetEventPrefix: "sort",
	        ready: !1,
	        options: {
	            appendTo: "parent",
	            axis: !1,
	            connectWith: !1,
	            containment: !1,
	            cursor: "auto",
	            cursorAt: !1,
	            dropOnEmpty: !0,
	            forcePlaceholderSize: !1,
	            forceHelperSize: !1,
	            grid: !1,
	            handle: !1,
	            helper: "original",
	            items: "> *",
	            opacity: !1,
	            placeholder: !1,
	            revert: !1,
	            scroll: !0,
	            scrollSensitivity: 20,
	            scrollSpeed: 20,
	            scope: "default",
	            tolerance: "intersect",
	            zIndex: 1e3,
	            activate: null,
	            beforeStop: null,
	            change: null,
	            deactivate: null,
	            out: null,
	            over: null,
	            receive: null,
	            remove: null,
	            sort: null,
	            start: null,
	            stop: null,
	            update: null
	        },
	        _isOverAxis: function(t, e, i) {
	            return t >= e && e + i > t
	        },
	        _isFloating: function(t) {
	            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	        },
	        _create: function() {
	            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
	        },
	        _setOption: function(t, e) {
	            this._super(t, e), "handle" === t && this._setHandleClassName()
	        },
	        _setHandleClassName: function() {
	            var e = this;
	            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, (function() {
	                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
	            }))
	        },
	        _destroy: function() {
	            this._mouseDestroy();
	            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
	            return this
	        },
	        _mouseCapture: function(e, i) {
	            var s = null,
	                n = !1,
	                o = this;
	            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each((function() {
	                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
	            })), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each((function() {
	                this === e.target && (n = !0)
	            })), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
	        },
	        _mouseStart: function(e, i, s) {
	            var n, o, a = this.options;
	            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
	                    top: this.offset.top - this.margins.top,
	                    left: this.offset.left - this.margins.left
	                }, t.extend(this.offset, {
	                    click: {
	                        left: e.pageX - this.offset.left,
	                        top: e.pageY - this.offset.top
	                    },
	                    parent: this._getParentOffset(),
	                    relative: this._getRelativeOffset()
	                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
	                    prev: this.currentItem.prev()[0],
	                    parent: this.currentItem.parent()[0]
	                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
	                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
	            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
	        },
	        _mouseDrag: function(e) {
	            var i, s, n, o, a = this.options,
	                r = !1;
	            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
	                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
	                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
	                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
	                    break
	                }
	            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
	        },
	        _mouseStop: function(e, i) {
	            if (e) {
	                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
	                    var s = this,
	                        n = this.placeholder.offset(),
	                        o = this.options.axis,
	                        a = {};
	                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, (function() {
	                        s._clear(e)
	                    }))
	                } else this._clear(e, i);
	                return !1
	            }
	        },
	        cancel: function() {
	            if (this.dragging) {
	                this._mouseUp(new t.Event("mouseup", {
	                    target: null
	                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
	                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
	            }
	            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
	                helper: null,
	                dragging: !1,
	                reverting: !1,
	                _noFinalSort: null
	            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
	        },
	        serialize: function(e) {
	            var i = this._getItemsAsjQuery(e && e.connected),
	                s = [];
	            return e = e || {}, t(i).each((function() {
	                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
	                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
	            })), !s.length && e.key && s.push(e.key + "="), s.join("&")
	        },
	        toArray: function(e) {
	            var i = this._getItemsAsjQuery(e && e.connected),
	                s = [];
	            return e = e || {}, i.each((function() {
	                s.push(t(e.item || this).attr(e.attribute || "id") || "")
	            })), s
	        },
	        _intersectsWith: function(t) {
	            var e = this.positionAbs.left,
	                i = e + this.helperProportions.width,
	                s = this.positionAbs.top,
	                n = s + this.helperProportions.height,
	                o = t.left,
	                a = o + t.width,
	                r = t.top,
	                h = r + t.height,
	                l = this.offset.click.top,
	                c = this.offset.click.left,
	                u = "x" === this.options.axis || s + l > r && h > s + l,
	                d = "y" === this.options.axis || e + c > o && a > e + c,
	                p = u && d;
	            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
	        },
	        _intersectsWithPointer: function(t) {
	            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
	                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
	                o = s && n;
	            return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
	        },
	        _intersectsWithSides: function(t) {
	            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
	                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
	                s = this._getDragVerticalDirection(),
	                n = this._getDragHorizontalDirection();
	            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
	        },
	        _getDragVerticalDirection: function() {
	            var t = this.positionAbs.top - this.lastPositionAbs.top;
	            return 0 !== t && (t > 0 ? "down" : "up")
	        },
	        _getDragHorizontalDirection: function() {
	            var t = this.positionAbs.left - this.lastPositionAbs.left;
	            return 0 !== t && (t > 0 ? "right" : "left")
	        },
	        refresh: function(t) {
	            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
	        },
	        _connectWith: function() {
	            var t = this.options;
	            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
	        },
	        _getItemsAsjQuery: function(e) {
	            function i() {
	                r.push(this)
	            }
	            var s, n, o, a, r = [],
	                h = [],
	                l = this._connectWith();
	            if (l && e)
	                for (s = l.length - 1; s >= 0; s--)
	                    for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
	            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
	                    options: this.options,
	                    item: this.currentItem
	                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
	            return t(r)
	        },
	        _removeCurrentsFromItems: function() {
	            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
	            this.items = t.grep(this.items, (function(t) {
	                for (var i = 0; e.length > i; i++)
	                    if (e[i] === t.item[0]) return !1;
	                return !0
	            }))
	        },
	        _refreshItems: function(e) {
	            this.items = [], this.containers = [this];
	            var i, s, n, o, a, r, h, l, c = this.items,
	                u = [
	                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
	                        item: this.currentItem
	                    }) : t(this.options.items, this.element), this]
	                ],
	                d = this._connectWith();
	            if (d && this.ready)
	                for (i = d.length - 1; i >= 0; i--)
	                    for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
	                        item: this.currentItem
	                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
	            for (i = u.length - 1; i >= 0; i--)
	                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
	                    item: h,
	                    instance: a,
	                    width: 0,
	                    height: 0,
	                    left: 0,
	                    top: 0
	                })
	        },
	        refreshPositions: function(e) {
	            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
	            var i, s, n, o;
	            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
	            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
	            else
	                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
	            return this
	        },
	        _createPlaceholder: function(e) {
	            e = e || this;
	            var i, s = e.options;
	            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
	                element: function() {
	                    var s = e.currentItem[0].nodeName.toLowerCase(),
	                        n = t("<" + s + ">", e.document[0]);
	                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
	                },
	                update: function(t, n) {
	                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
	                }
	            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
	        },
	        _createTrPlaceholder: function(e, i) {
	            var s = this;
	            e.children().each((function() {
	                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
	            }))
	        },
	        _contactContainers: function(e) {
	            var i, s, n, o, a, r, h, l, c, u, d = null,
	                p = null;
	            for (i = this.containers.length - 1; i >= 0; i--)
	                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
	                    if (this._intersectsWith(this.containers[i].containerCache)) {
	                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
	                        d = this.containers[i], p = i
	                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
	            if (d)
	                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
	                else {
	                    for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
	                    if (!o && !this.options.dropOnEmpty) return;
	                    if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
	                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
	                }
	        },
	        _createHelper: function(e) {
	            var i = this.options,
	                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
	            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
	                width: this.currentItem[0].style.width,
	                height: this.currentItem[0].style.height,
	                position: this.currentItem.css("position"),
	                top: this.currentItem.css("top"),
	                left: this.currentItem.css("left")
	            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
	        },
	        _adjustOffsetFromHelper: function(e) {
	            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
	                left: +e[0],
	                top: +e[1] || 0
	            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
	        },
	        _getParentOffset: function() {
	            this.offsetParent = this.helper.offsetParent();
	            var e = this.offsetParent.offset();
	            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
	                top: 0,
	                left: 0
	            }), {
	                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
	                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
	            }
	        },
	        _getRelativeOffset: function() {
	            if ("relative" === this.cssPosition) {
	                var t = this.currentItem.position();
	                return {
	                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
	                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
	                }
	            }
	            return {
	                top: 0,
	                left: 0
	            }
	        },
	        _cacheMargins: function() {
	            this.margins = {
	                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
	                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
	            }
	        },
	        _cacheHelperProportions: function() {
	            this.helperProportions = {
	                width: this.helper.outerWidth(),
	                height: this.helper.outerHeight()
	            }
	        },
	        _setContainment: function() {
	            var e, i, s, n = this.options;
	            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
	        },
	        _convertPositionTo: function(e, i) {
	            i || (i = this.position);
	            var s = "absolute" === e ? 1 : -1,
	                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
	                o = /(html|body)/i.test(n[0].tagName);
	            return {
	                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
	                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
	            }
	        },
	        _generatePosition: function(e) {
	            var i, s, n = this.options,
	                o = e.pageX,
	                a = e.pageY,
	                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
	                h = /(html|body)/i.test(r[0].tagName);
	            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
	                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
	                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
	            }
	        },
	        _rearrange: function(t, e, i, s) {
	            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
	            var n = this.counter;
	            this._delay((function() {
	                n === this.counter && this.refreshPositions(!s)
	            }))
	        },
	        _clear: function(t, e) {
	            function i(t, e, i) {
	                return function(s) {
	                    i._trigger(t, s, e._uiHash(e))
	                }
	            }
	            this.reverting = !1;
	            var s, n = [];
	            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
	                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
	                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
	            } else this.currentItem.show();
	            for (this.fromOutside && !e && n.push((function(t) {
	                    this._trigger("receive", t, this._uiHash(this.fromOutside))
	                })), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push((function(t) {
	                    this._trigger("update", t, this._uiHash())
	                })), this !== this.currentContainer && (e || (n.push((function(t) {
	                    this._trigger("remove", t, this._uiHash())
	                })), n.push(function(t) {
	                    return function(e) {
	                        t._trigger("receive", e, this._uiHash(this))
	                    }
	                }.call(this, this.currentContainer)), n.push(function(t) {
	                    return function(e) {
	                        t._trigger("update", e, this._uiHash(this))
	                    }
	                }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
	            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
	                for (s = 0; n.length > s; s++) n[s].call(this, t);
	                this._trigger("stop", t, this._uiHash())
	            }
	            return this.fromOutside = !1, !this.cancelHelperRemoval
	        },
	        _trigger: function() {
	            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
	        },
	        _uiHash: function(e) {
	            var i = e || this;
	            return {
	                helper: i.helper,
	                placeholder: i.placeholder || t([]),
	                position: i.position,
	                originalPosition: i.originalPosition,
	                offset: i.positionAbs,
	                item: i.currentItem,
	                sender: e ? e.element : null
	            }
	        }
	    }), t.widget("ui.spinner", {
	        version: "1.12.1",
	        defaultElement: "<input>",
	        widgetEventPrefix: "spin",
	        options: {
	            classes: {
	                "ui-spinner": "ui-corner-all",
	                "ui-spinner-down": "ui-corner-br",
	                "ui-spinner-up": "ui-corner-tr"
	            },
	            culture: null,
	            icons: {
	                down: "ui-icon-triangle-1-s",
	                up: "ui-icon-triangle-1-n"
	            },
	            incremental: !0,
	            max: null,
	            min: null,
	            numberFormat: null,
	            page: 10,
	            step: 1,
	            change: null,
	            spin: null,
	            start: null,
	            stop: null
	        },
	        _create: function() {
	            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
	                beforeunload: function() {
	                    this.element.removeAttr("autocomplete")
	                }
	            })
	        },
	        _getCreateOptions: function() {
	            var e = this._super(),
	                i = this.element;
	            return t.each(["min", "max", "step"], (function(t, s) {
	                var n = i.attr(s);
	                null != n && n.length && (e[s] = n)
	            })), e
	        },
	        _events: {
	            keydown: function(t) {
	                this._start(t) && this._keydown(t) && t.preventDefault()
	            },
	            keyup: "_stop",
	            focus: function() {
	                this.previous = this.element.val()
	            },
	            blur: function(t) {
	                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
	            },
	            mousewheel: function(t, e) {
	                if (e) {
	                    if (!this.spinning && !this._start(t)) return !1;
	                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay((function() {
	                        this.spinning && this._stop(t)
	                    }), 100), t.preventDefault()
	                }
	            },
	            "mousedown .ui-spinner-button": function(e) {
	                function i() {
	                    var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
	                    e || (this.element.trigger("focus"), this.previous = s, this._delay((function() {
	                        this.previous = s
	                    })))
	                }
	                var s;
	                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay((function() {
	                    delete this.cancelBlur, i.call(this)
	                })), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
	            },
	            "mouseup .ui-spinner-button": "_stop",
	            "mouseenter .ui-spinner-button": function(e) {
	                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
	            },
	            "mouseleave .ui-spinner-button": "_stop"
	        },
	        _enhance: function() {
	            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
	        },
	        _draw: function() {
	            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
	                classes: {
	                    "ui-button": ""
	                }
	            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
	                icon: this.options.icons.up,
	                showLabel: !1
	            }), this.buttons.last().button({
	                icon: this.options.icons.down,
	                showLabel: !1
	            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
	        },
	        _keydown: function(e) {
	            var i = this.options,
	                s = t.ui.keyCode;
	            switch (e.keyCode) {
	                case s.UP:
	                    return this._repeat(null, 1, e), !0;
	                case s.DOWN:
	                    return this._repeat(null, -1, e), !0;
	                case s.PAGE_UP:
	                    return this._repeat(null, i.page, e), !0;
	                case s.PAGE_DOWN:
	                    return this._repeat(null, -i.page, e), !0
	            }
	            return !1
	        },
	        _start: function(t) {
	            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
	        },
	        _repeat: function(t, e, i) {
	            t = t || 500, clearTimeout(this.timer), this.timer = this._delay((function() {
	                this._repeat(40, e, i)
	            }), t), this._spin(e * this.options.step, i)
	        },
	        _spin: function(t, e) {
	            var i = this.value() || 0;
	            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
	                value: i
	            }) === !1 || (this._value(i), this.counter++)
	        },
	        _increment: function(e) {
	            var i = this.options.incremental;
	            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
	        },
	        _precision: function() {
	            var t = this._precisionOf(this.options.step);
	            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
	        },
	        _precisionOf: function(t) {
	            var e = "" + t,
	                i = e.indexOf(".");
	            return -1 === i ? 0 : e.length - i - 1
	        },
	        _adjustValue: function(t) {
	            var e, i, s = this.options;
	            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
	        },
	        _stop: function(t) {
	            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
	        },
	        _setOption: function(t, e) {
	            var i, s, n;
	            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0)
	        },
	        _setOptionDisabled: function(t) {
	            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
	        },
	        _setOptions: r((function(t) {
	            this._super(t)
	        })),
	        _parse: function(t) {
	            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
	        },
	        _format: function(t) {
	            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
	        },
	        _refresh: function() {
	            this.element.attr({
	                "aria-valuemin": this.options.min,
	                "aria-valuemax": this.options.max,
	                "aria-valuenow": this._parse(this.element.val())
	            })
	        },
	        isValid: function() {
	            var t = this.value();
	            return null === t ? !1 : t === this._adjustValue(t)
	        },
	        _value: function(t, e) {
	            var i;
	            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
	        },
	        _destroy: function() {
	            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
	        },
	        stepUp: r((function(t) {
	            this._stepUp(t)
	        })),
	        _stepUp: function(t) {
	            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
	        },
	        stepDown: r((function(t) {
	            this._stepDown(t)
	        })),
	        _stepDown: function(t) {
	            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
	        },
	        pageUp: r((function(t) {
	            this._stepUp((t || 1) * this.options.page)
	        })),
	        pageDown: r((function(t) {
	            this._stepDown((t || 1) * this.options.page)
	        })),
	        value: function(t) {
	            return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val())
	        },
	        widget: function() {
	            return this.uiSpinner
	        }
	    }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
	        _enhance: function() {
	            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
	        },
	        _uiSpinnerHtml: function() {
	            return "<span>"
	        },
	        _buttonHtml: function() {
	            return "<a></a><a></a>"
	        }
	    }), t.ui.spinner, t.widget("ui.tabs", {
	        version: "1.12.1",
	        delay: 300,
	        options: {
	            active: null,
	            classes: {
	                "ui-tabs": "ui-corner-all",
	                "ui-tabs-nav": "ui-corner-all",
	                "ui-tabs-panel": "ui-corner-bottom",
	                "ui-tabs-tab": "ui-corner-top"
	            },
	            collapsible: !1,
	            event: "click",
	            heightStyle: "content",
	            hide: null,
	            show: null,
	            activate: null,
	            beforeActivate: null,
	            beforeLoad: null,
	            load: null
	        },
	        _isLocal: (function() {
	            var t = /#.*$/;
	            return function(e) {
	                var i, s;
	                i = e.href.replace(t, ""), s = location.href.replace(t, "");
	                try {
	                    i = decodeURIComponent(i)
	                } catch (n) {}
	                try {
	                    s = decodeURIComponent(s)
	                } catch (n) {}
	                return e.hash.length > 1 && i === s
	            }
	        })(),
	        _create: function() {
	            var e = this,
	                i = this.options;
	            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), (function(t) {
	                return e.tabs.index(t)
	            })))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
	        },
	        _initialActive: function() {
	            var e = this.options.active,
	                i = this.options.collapsible,
	                s = location.hash.substring(1);
	            return null === e && (s && this.tabs.each((function(i, n) {
	                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
	            })), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
	        },
	        _getCreateEventData: function() {
	            return {
	                tab: this.active,
	                panel: this.active.length ? this._getPanelForTab(this.active) : t()
	            }
	        },
	        _tabKeydown: function(e) {
	            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
	                s = this.tabs.index(i),
	                n = !0;
	            if (!this._handlePageNav(e)) {
	                switch (e.keyCode) {
	                    case t.ui.keyCode.RIGHT:
	                    case t.ui.keyCode.DOWN:
	                        s++;
	                        break;
	                    case t.ui.keyCode.UP:
	                    case t.ui.keyCode.LEFT:
	                        n = !1, s--;
	                        break;
	                    case t.ui.keyCode.END:
	                        s = this.anchors.length - 1;
	                        break;
	                    case t.ui.keyCode.HOME:
	                        s = 0;
	                        break;
	                    case t.ui.keyCode.SPACE:
	                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
	                    case t.ui.keyCode.ENTER:
	                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
	                    default:
	                        return
	                }
	                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay((function() {
	                    this.option("active", s)
	                }), this.delay))
	            }
	        },
	        _panelKeydown: function(e) {
	            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
	        },
	        _handlePageNav: function(e) {
	            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
	        },
	        _findNextTab: function(e, i) {
	            function s() {
	                return e > n && (e = 0), 0 > e && (e = n), e
	            }
	            for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
	            return e
	        },
	        _focusNextTab: function(t, e) {
	            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
	        },
	        _setOption: function(t, e) {
	            return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
	        },
	        _sanitizeSelector: function(t) {
	            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
	        },
	        refresh: function() {
	            var e = this.options,
	                i = this.tablist.children(":has(a[href])");
	            e.disabled = t.map(i.filter(".ui-state-disabled"), (function(t) {
	                return i.index(t)
	            })), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
	        },
	        _refresh: function() {
	            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
	                "aria-selected": "false",
	                "aria-expanded": "false",
	                tabIndex: -1
	            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
	                "aria-hidden": "true"
	            }), this.active.length ? (this.active.attr({
	                "aria-selected": "true",
	                "aria-expanded": "true",
	                tabIndex: 0
	            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
	                "aria-hidden": "false"
	            })) : this.tabs.eq(0).attr("tabIndex", 0)
	        },
	        _processTabs: function() {
	            var e = this,
	                i = this.tabs,
	                s = this.anchors,
	                n = this.panels;
	            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", (function(e) {
	                t(this).is(".ui-state-disabled") && e.preventDefault()
	            })).on("focus" + this.eventNamespace, ".ui-tabs-anchor", (function() {
	                t(this).closest("li").is(".ui-state-disabled") && this.blur()
	            })), this.tabs = this.tablist.find("> li:has(a[href])").attr({
	                role: "tab",
	                tabIndex: -1
	            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map((function() {
	                return t("a", this)[0]
	            })).attr({
	                role: "presentation",
	                tabIndex: -1
	            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each((function(i, s) {
	                var n, o, a, r = t(s).uniqueId().attr("id"),
	                    h = t(s).closest("li"),
	                    l = h.attr("aria-controls");
	                e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
	                    "aria-controls": a,
	                    "aria-labelledby": r
	                }), o.attr("aria-labelledby", r)
	            })), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
	        },
	        _getList: function() {
	            return this.tablist || this.element.find("ol, ul").eq(0)
	        },
	        _createPanel: function(e) {
	            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
	        },
	        _setOptionDisabled: function(e) {
	            var i, s, n;
	            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
	            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
	        },
	        _setupEvents: function(e) {
	            var i = {};
	            e && t.each(e.split(" "), (function(t, e) {
	                i[e] = "_eventHandler"
	            })), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
	                click: function(t) {
	                    t.preventDefault()
	                }
	            }), this._on(this.anchors, i), this._on(this.tabs, {
	                keydown: "_tabKeydown"
	            }), this._on(this.panels, {
	                keydown: "_panelKeydown"
	            }), this._focusable(this.tabs), this._hoverable(this.tabs)
	        },
	        _setupHeightStyle: function(e) {
	            var i, s = this.element.parent();
	            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each((function() {
	                var e = t(this),
	                    s = e.css("position");
	                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
	            })), this.element.children().not(this.panels).each((function() {
	                i -= t(this).outerHeight(!0)
	            })), this.panels.each((function() {
	                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
	            })).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each((function() {
	                i = Math.max(i, t(this).height("").height())
	            })).height(i))
	        },
	        _eventHandler: function(e) {
	            var i = this.options,
	                s = this.active,
	                n = t(e.currentTarget),
	                o = n.closest("li"),
	                a = o[0] === s[0],
	                r = a && i.collapsible,
	                h = r ? t() : this._getPanelForTab(o),
	                l = s.length ? this._getPanelForTab(s) : t(),
	                c = {
	                    oldTab: s,
	                    oldPanel: l,
	                    newTab: r ? t() : o,
	                    newPanel: h
	                };
	            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
	        },
	        _toggle: function(e, i) {
	            function s() {
	                o.running = !1, o._trigger("activate", e, i)
	            }
	
	            function n() {
	                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
	            }
	            var o = this,
	                a = i.newPanel,
	                r = i.oldPanel;
	            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, (function() {
	                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
	            })) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
	                "aria-selected": "false",
	                "aria-expanded": "false"
	            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter((function() {
	                return 0 === t(this).attr("tabIndex")
	            })).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
	                "aria-selected": "true",
	                "aria-expanded": "true",
	                tabIndex: 0
	            })
	        },
	        _activate: function(e) {
	            var i, s = this._findActive(e);
	            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
	                target: i,
	                currentTarget: i,
	                preventDefault: t.noop
	            }))
	        },
	        _findActive: function(e) {
	            return e === !1 ? t() : this.tabs.eq(e)
	        },
	        _getIndex: function(e) {
	            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
	        },
	        _destroy: function() {
	            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each((function() {
	                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
	            })), this.tabs.each((function() {
	                var e = t(this),
	                    i = e.data("ui-tabs-aria-controls");
	                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
	            })), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
	        },
	        enable: function(e) {
	            var i = this.options.disabled;
	            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, (function(t) {
	                return t !== e ? t : null
	            })) : t.map(this.tabs, (function(t, i) {
	                return i !== e ? i : null
	            }))), this._setOptionDisabled(i))
	        },
	        disable: function(e) {
	            var i = this.options.disabled;
	            if (i !== !0) {
	                if (void 0 === e) i = !0;
	                else {
	                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
	                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
	                }
	                this._setOptionDisabled(i)
	            }
	        },
	        load: function(e, i) {
	            e = this._getIndex(e);
	            var s = this,
	                n = this.tabs.eq(e),
	                o = n.find(".ui-tabs-anchor"),
	                a = this._getPanelForTab(n),
	                r = {
	                    tab: n,
	                    panel: a
	                },
	                h = function(t, e) {
	                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
	                };
	            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done((function(t, e, n) {
	                setTimeout((function() {
	                    a.html(t), s._trigger("load", i, r), h(n, e)
	                }), 1)
	            })).fail((function(t, e) {
	                setTimeout((function() {
	                    h(t, e)
	                }), 1)
	            }))))
	        },
	        _ajaxSettings: function(e, i, s) {
	            var n = this;
	            return {
	                url: e.attr("href").replace(/#.*$/, ""),
	                beforeSend: function(e, o) {
	                    return n._trigger("beforeLoad", i, t.extend({
	                        jqXHR: e,
	                        ajaxSettings: o
	                    }, s))
	                }
	            }
	        },
	        _getPanelForTab: function(e) {
	            var i = t(e).attr("aria-controls");
	            return this.element.find(this._sanitizeSelector("#" + i))
	        }
	    }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
	        _processTabs: function() {
	            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
	        }
	    }), t.ui.tabs, t.widget("ui.tooltip", {
	        version: "1.12.1",
	        options: {
	            classes: {
	                "ui-tooltip": "ui-corner-all ui-widget-shadow"
	            },
	            content: function() {
	                var e = t(this).attr("title") || "";
	                return t("<a>").text(e).html()
	            },
	            hide: !0,
	            items: "[title]:not([disabled])",
	            position: {
	                my: "left top+15",
	                at: "left bottom",
	                collision: "flipfit flip"
	            },
	            show: !0,
	            track: !1,
	            close: null,
	            open: null
	        },
	        _addDescribedBy: function(e, i) {
	            var s = (e.attr("aria-describedby") || "").split(/\s+/);
	            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
	        },
	        _removeDescribedBy: function(e) {
	            var i = e.data("ui-tooltip-id"),
	                s = (e.attr("aria-describedby") || "").split(/\s+/),
	                n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
	        },
	        _create: function() {
	            this._on({
	                mouseover: "open",
	                focusin: "open"
	            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
	                role: "log",
	                "aria-live": "assertive",
	                "aria-relevant": "additions"
	            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
	        },
	        _setOption: function(e, i) {
	            var s = this;
	            this._super(e, i), "content" === e && t.each(this.tooltips, (function(t, e) {
	                s._updateContent(e.element)
	            }))
	        },
	        _setOptionDisabled: function(t) {
	            this[t ? "_disable" : "_enable"]()
	        },
	        _disable: function() {
	            var e = this;
	            t.each(this.tooltips, (function(i, s) {
	                var n = t.Event("blur");
	                n.target = n.currentTarget = s.element[0], e.close(n, !0)
	            })), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function() {
	                var e = t(this);
	                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
	            })))
	        },
	        _enable: function() {
	            this.disabledTitles.each((function() {
	                var e = t(this);
	                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
	            })), this.disabledTitles = t([])
	        },
	        open: function(e) {
	            var i = this,
	                s = t(e ? e.target : this.element).closest(this.options.items);
	            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each((function() {
	                var e, s = t(this);
	                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
	                    element: this,
	                    title: s.attr("title")
	                }, s.attr("title", ""))
	            })), this._registerCloseHandlers(e, s), this._updateContent(s, e))
	        },
	        _updateContent: function(t, e) {
	            var i, s = this.options.content,
	                n = this,
	                o = e ? e.type : null;
	            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], (function(i) {
	                n._delay((function() {
	                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
	                }))
	            })), i && this._open(e, t, i), void 0)
	        },
	        _open: function(e, i, s) {
	            function n(t) {
	                l.of = t, a.is(":hidden") || a.position(l)
	            }
	            var o, a, r, h, l = t.extend({}, this.options.position);
	            if (s) {
	                if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
	                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
	                    mousemove: n
	                }), n(e)) : a.position(t.extend({
	                    of: i
	                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval((function() {
	                    a.is(":visible") && (n(l.of), clearInterval(r))
	                }), t.fx.interval)), this._trigger("open", e, {
	                    tooltip: a
	                })
	            }
	        },
	        _registerCloseHandlers: function(e, i) {
	            var s = {
	                keyup: function(e) {
	                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
	                        var s = t.Event(e);
	                        s.currentTarget = i[0], this.close(s, !0)
	                    }
	                }
	            };
	            i[0] !== this.element[0] && (s.remove = function() {
	                this._removeTooltip(this._find(i).tooltip)
	            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
	        },
	        close: function(e) {
	            var i, s = this,
	                n = t(e ? e.currentTarget : this.element),
	                o = this._find(n);
	            return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, (function() {
	                s._removeTooltip(t(this))
	            })), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, (function(e, i) {
	                t(i.element).attr("title", i.title), delete s.parents[e]
	            })), o.closing = !0, this._trigger("close", e, {
	                tooltip: i
	            }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
	        },
	        _tooltip: function(e) {
	            var i = t("<div>").attr("role", "tooltip"),
	                s = t("<div>").appendTo(i),
	                n = i.uniqueId().attr("id");
	            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
	                element: e,
	                tooltip: i
	            }
	        },
	        _find: function(t) {
	            var e = t.data("ui-tooltip-id");
	            return e ? this.tooltips[e] : null
	        },
	        _removeTooltip: function(t) {
	            t.remove(), delete this.tooltips[t.attr("id")]
	        },
	        _appendTo: function(t) {
	            var e = t.closest(".ui-front, dialog");
	            return e.length || (e = this.document[0].body), e
	        },
	        _destroy: function() {
	            var e = this;
	            t.each(this.tooltips, (function(i, s) {
	                var n = t.Event("blur"),
	                    o = s.element;
	                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
	            })), this.liveRegion.remove()
	        }
	    }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
	        options: {
	            tooltipClass: null
	        },
	        _tooltip: function() {
	            var t = this._superApply(arguments);
	            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
	        }
	    }), t.ui.tooltip
	}));
	
	/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/
	
	 Version: 1.9.0
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues
	
	 */
	/* global window, document, define, jQuery, setInterval, clearInterval */
	;(function(factory) {
	    'use strict';
	    if (typeof define === 'function' && define.amd) {
	        define(['jquery'], factory);
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }
	
	}((function($) {
	    'use strict';
	    var Slick = window.Slick || {};
	
	    Slick = (function() {
	
	        var instanceUid = 0;
	
	        function Slick(element, settings) {
	
	            var _ = this, dataSettings;
	
	            _.defaults = {
	                accessibility: true,
	                adaptiveHeight: false,
	                appendArrows: $(element),
	                appendDots: $(element),
	                arrows: true,
	                asNavFor: null,
	                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
	                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
	                autoplay: false,
	                autoplaySpeed: 3000,
	                centerMode: false,
	                centerPadding: '50px',
	                cssEase: 'ease',
	                customPaging: function(slider, i) {
	                    return $('<button type="button" />').text(i + 1);
	                },
	                dots: false,
	                dotsClass: 'slick-dots',
	                draggable: true,
	                easing: 'linear',
	                edgeFriction: 0.35,
	                fade: false,
	                focusOnSelect: false,
	                focusOnChange: false,
	                infinite: true,
	                initialSlide: 0,
	                lazyLoad: 'ondemand',
	                mobileFirst: false,
	                pauseOnHover: true,
	                pauseOnFocus: true,
	                pauseOnDotsHover: false,
	                respondTo: 'window',
	                responsive: null,
	                rows: 1,
	                rtl: false,
	                slide: '',
	                slidesPerRow: 1,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                speed: 500,
	                swipe: true,
	                swipeToSlide: false,
	                touchMove: true,
	                touchThreshold: 5,
	                useCSS: true,
	                useTransform: true,
	                variableWidth: false,
	                vertical: false,
	                verticalSwiping: false,
	                waitForAnimate: true,
	                zIndex: 1000
	            };
	
	            _.initials = {
	                animating: false,
	                dragging: false,
	                autoPlayTimer: null,
	                currentDirection: 0,
	                currentLeft: null,
	                currentSlide: 0,
	                direction: 1,
	                $dots: null,
	                listWidth: null,
	                listHeight: null,
	                loadIndex: 0,
	                $nextArrow: null,
	                $prevArrow: null,
	                scrolling: false,
	                slideCount: null,
	                slideWidth: null,
	                $slideTrack: null,
	                $slides: null,
	                sliding: false,
	                slideOffset: 0,
	                swipeLeft: null,
	                swiping: false,
	                $list: null,
	                touchObject: {},
	                transformsEnabled: false,
	                unslicked: false
	            };
	
	            $.extend(_, _.initials);
	
	            _.activeBreakpoint = null;
	            _.animType = null;
	            _.animProp = null;
	            _.breakpoints = [];
	            _.breakpointSettings = [];
	            _.cssTransitions = false;
	            _.focussed = false;
	            _.interrupted = false;
	            _.hidden = 'hidden';
	            _.paused = true;
	            _.positionProp = null;
	            _.respondTo = null;
	            _.rowCount = 1;
	            _.shouldClick = true;
	            _.$slider = $(element);
	            _.$slidesCache = null;
	            _.transformType = null;
	            _.transitionType = null;
	            _.visibilityChange = 'visibilitychange';
	            _.windowWidth = 0;
	            _.windowTimer = null;
	
	            dataSettings = $(element).data('slick') || {};
	
	            _.options = $.extend({}, _.defaults, settings, dataSettings);
	
	            _.currentSlide = _.options.initialSlide;
	
	            _.originalSettings = _.options;
	
	            if (typeof document.mozHidden !== 'undefined') {
	                _.hidden = 'mozHidden';
	                _.visibilityChange = 'mozvisibilitychange';
	            } else if (typeof document.webkitHidden !== 'undefined') {
	                _.hidden = 'webkitHidden';
	                _.visibilityChange = 'webkitvisibilitychange';
	            }
	
	            _.autoPlay = $.proxy(_.autoPlay, _);
	            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
	            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
	            _.changeSlide = $.proxy(_.changeSlide, _);
	            _.clickHandler = $.proxy(_.clickHandler, _);
	            _.selectHandler = $.proxy(_.selectHandler, _);
	            _.setPosition = $.proxy(_.setPosition, _);
	            _.swipeHandler = $.proxy(_.swipeHandler, _);
	            _.dragHandler = $.proxy(_.dragHandler, _);
	            _.keyHandler = $.proxy(_.keyHandler, _);
	
	            _.instanceUid = instanceUid++;
	
	            // A simple way to check for HTML strings
	            // Strict HTML recognition (must start with <)
	            // Extracted from jQuery v1.11 source
	            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
	
	
	            _.registerBreakpoints();
	            _.init(true);
	
	        }
	
	        return Slick;
	
	    }());
	
	    Slick.prototype.activateADA = function() {
	        var _ = this;
	
	        _.$slideTrack.find('.slick-active').attr({
	            'aria-hidden': 'false'
	        }).find('a, input, button, select').attr({
	            'tabindex': '0'
	        });
	
	    };
	
	    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
	
	        var _ = this;
	
	        if (typeof(index) === 'boolean') {
	            addBefore = index;
	            index = null;
	        } else if (index < 0 || (index >= _.slideCount)) {
	            return false;
	        }
	
	        _.unload();
	
	        if (typeof(index) === 'number') {
	            if (index === 0 && _.$slides.length === 0) {
	                $(markup).appendTo(_.$slideTrack);
	            } else if (addBefore) {
	                $(markup).insertBefore(_.$slides.eq(index));
	            } else {
	                $(markup).insertAfter(_.$slides.eq(index));
	            }
	        } else {
	            if (addBefore === true) {
	                $(markup).prependTo(_.$slideTrack);
	            } else {
	                $(markup).appendTo(_.$slideTrack);
	            }
	        }
	
	        _.$slides = _.$slideTrack.children(this.options.slide);
	
	        _.$slideTrack.children(this.options.slide).detach();
	
	        _.$slideTrack.append(_.$slides);
	
	        _.$slides.each((function(index, element) {
	            $(element).attr('data-slick-index', index);
	        }));
	
	        _.$slidesCache = _.$slides;
	
	        _.reinit();
	
	    };
	
	    Slick.prototype.animateHeight = function() {
	        var _ = this;
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.animate({
	                height: targetHeight
	            }, _.options.speed);
	        }
	    };
	
	    Slick.prototype.animateSlide = function(targetLeft, callback) {
	
	        var animProps = {},
	            _ = this;
	
	        _.animateHeight();
	
	        if (_.options.rtl === true && _.options.vertical === false) {
	            targetLeft = -targetLeft;
	        }
	        if (_.transformsEnabled === false) {
	            if (_.options.vertical === false) {
	                _.$slideTrack.animate({
	                    left: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            } else {
	                _.$slideTrack.animate({
	                    top: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            }
	
	        } else {
	
	            if (_.cssTransitions === false) {
	                if (_.options.rtl === true) {
	                    _.currentLeft = -(_.currentLeft);
	                }
	                $({
	                    animStart: _.currentLeft
	                }).animate({
	                    animStart: targetLeft
	                }, {
	                    duration: _.options.speed,
	                    easing: _.options.easing,
	                    step: function(now) {
	                        now = Math.ceil(now);
	                        if (_.options.vertical === false) {
	                            animProps[_.animType] = 'translate(' +
	                                now + 'px, 0px)';
	                            _.$slideTrack.css(animProps);
	                        } else {
	                            animProps[_.animType] = 'translate(0px,' +
	                                now + 'px)';
	                            _.$slideTrack.css(animProps);
	                        }
	                    },
	                    complete: function() {
	                        if (callback) {
	                            callback.call();
	                        }
	                    }
	                });
	
	            } else {
	
	                _.applyTransition();
	                targetLeft = Math.ceil(targetLeft);
	
	                if (_.options.vertical === false) {
	                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
	                } else {
	                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
	                }
	                _.$slideTrack.css(animProps);
	
	                if (callback) {
	                    setTimeout((function() {
	
	                        _.disableTransition();
	
	                        callback.call();
	                    }), _.options.speed);
	                }
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.getNavTarget = function() {
	
	        var _ = this,
	            asNavFor = _.options.asNavFor;
	
	        if ( asNavFor && asNavFor !== null ) {
	            asNavFor = $(asNavFor).not(_.$slider);
	        }
	
	        return asNavFor;
	
	    };
	
	    Slick.prototype.asNavFor = function(index) {
	
	        var _ = this,
	            asNavFor = _.getNavTarget();
	
	        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
	            asNavFor.each((function() {
	                var target = $(this).slick('getSlick');
	                if(!target.unslicked) {
	                    target.slideHandler(index, true);
	                }
	            }));
	        }
	
	    };
	
	    Slick.prototype.applyTransition = function(slide) {
	
	        var _ = this,
	            transition = {};
	
	        if (_.options.fade === false) {
	            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
	        } else {
	            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
	        }
	
	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }
	
	    };
	
	    Slick.prototype.autoPlay = function() {
	
	        var _ = this;
	
	        _.autoPlayClear();
	
	        if ( _.slideCount > _.options.slidesToShow ) {
	            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
	        }
	
	    };
	
	    Slick.prototype.autoPlayClear = function() {
	
	        var _ = this;
	
	        if (_.autoPlayTimer) {
	            clearInterval(_.autoPlayTimer);
	        }
	
	    };
	
	    Slick.prototype.autoPlayIterator = function() {
	
	        var _ = this,
	            slideTo = _.currentSlide + _.options.slidesToScroll;
	
	        if ( !_.paused && !_.interrupted && !_.focussed ) {
	
	            if ( _.options.infinite === false ) {
	
	                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
	                    _.direction = 0;
	                }
	
	                else if ( _.direction === 0 ) {
	
	                    slideTo = _.currentSlide - _.options.slidesToScroll;
	
	                    if ( _.currentSlide - 1 === 0 ) {
	                        _.direction = 1;
	                    }
	
	                }
	
	            }
	
	            _.slideHandler( slideTo );
	
	        }
	
	    };
	
	    Slick.prototype.buildArrows = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true ) {
	
	            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
	            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
	
	            if( _.slideCount > _.options.slidesToShow ) {
	
	                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
	                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
	
	                if (_.htmlExpr.test(_.options.prevArrow)) {
	                    _.$prevArrow.prependTo(_.options.appendArrows);
	                }
	
	                if (_.htmlExpr.test(_.options.nextArrow)) {
	                    _.$nextArrow.appendTo(_.options.appendArrows);
	                }
	
	                if (_.options.infinite !== true) {
	                    _.$prevArrow
	                        .addClass('slick-disabled')
	                        .attr('aria-disabled', 'true');
	                }
	
	            } else {
	
	                _.$prevArrow.add( _.$nextArrow )
	
	                    .addClass('slick-hidden')
	                    .attr({
	                        'aria-disabled': 'true',
	                        'tabindex': '-1'
	                    });
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.buildDots = function() {
	
	        var _ = this,
	            i, dot;
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$slider.addClass('slick-dotted');
	
	            dot = $('<ul />').addClass(_.options.dotsClass);
	
	            for (i = 0; i <= _.getDotCount(); i += 1) {
	                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
	            }
	
	            _.$dots = dot.appendTo(_.options.appendDots);
	
	            _.$dots.find('li').first().addClass('slick-active');
	
	        }
	
	    };
	
	    Slick.prototype.buildOut = function() {
	
	        var _ = this;
	
	        _.$slides =
	            _.$slider
	                .children( _.options.slide + ':not(.slick-cloned)')
	                .addClass('slick-slide');
	
	        _.slideCount = _.$slides.length;
	
	        _.$slides.each((function(index, element) {
	            $(element)
	                .attr('data-slick-index', index)
	                .data('originalStyling', $(element).attr('style') || '');
	        }));
	
	        _.$slider.addClass('slick-slider');
	
	        _.$slideTrack = (_.slideCount === 0) ?
	            $('<div class="slick-track"/>').appendTo(_.$slider) :
	            _.$slides.wrapAll('<div class="slick-track"/>').parent();
	
	        _.$list = _.$slideTrack.wrap(
	            '<div class="slick-list"/>').parent();
	        _.$slideTrack.css('opacity', 0);
	
	        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
	            _.options.slidesToScroll = 1;
	        }
	
	        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
	
	        _.setupInfinite();
	
	        _.buildArrows();
	
	        _.buildDots();
	
	        _.updateDots();
	
	
	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
	
	        if (_.options.draggable === true) {
	            _.$list.addClass('draggable');
	        }
	
	    };
	
	    Slick.prototype.buildRows = function() {
	
	        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
	
	        newSlides = document.createDocumentFragment();
	        originalSlides = _.$slider.children();
	
	        if(_.options.rows > 0) {
	
	            slidesPerSection = _.options.slidesPerRow * _.options.rows;
	            numOfSlides = Math.ceil(
	                originalSlides.length / slidesPerSection
	            );
	
	            for(a = 0; a < numOfSlides; a++){
	                var slide = document.createElement('div');
	                for(b = 0; b < _.options.rows; b++) {
	                    var row = document.createElement('div');
	                    for(c = 0; c < _.options.slidesPerRow; c++) {
	                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
	                        if (originalSlides.get(target)) {
	                            row.appendChild(originalSlides.get(target));
	                        }
	                    }
	                    slide.appendChild(row);
	                }
	                newSlides.appendChild(slide);
	            }
	
	            _.$slider.empty().append(newSlides);
	            _.$slider.children().children().children()
	                .css({
	                    'width':(100 / _.options.slidesPerRow) + '%',
	                    'display': 'inline-block'
	                });
	
	        }
	
	    };
	
	    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
	
	        var _ = this,
	            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
	        var sliderWidth = _.$slider.width();
	        var windowWidth = window.innerWidth || $(window).width();
	
	        if (_.respondTo === 'window') {
	            respondToWidth = windowWidth;
	        } else if (_.respondTo === 'slider') {
	            respondToWidth = sliderWidth;
	        } else if (_.respondTo === 'min') {
	            respondToWidth = Math.min(windowWidth, sliderWidth);
	        }
	
	        if ( _.options.responsive &&
	            _.options.responsive.length &&
	            _.options.responsive !== null) {
	
	            targetBreakpoint = null;
	
	            for (breakpoint in _.breakpoints) {
	                if (_.breakpoints.hasOwnProperty(breakpoint)) {
	                    if (_.originalSettings.mobileFirst === false) {
	                        if (respondToWidth < _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    } else {
	                        if (respondToWidth > _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    }
	                }
	            }
	
	            if (targetBreakpoint !== null) {
	                if (_.activeBreakpoint !== null) {
	                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
	                        _.activeBreakpoint =
	                            targetBreakpoint;
	                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                            _.unslick(targetBreakpoint);
	                        } else {
	                            _.options = $.extend({}, _.originalSettings,
	                                _.breakpointSettings[
	                                    targetBreakpoint]);
	                            if (initial === true) {
	                                _.currentSlide = _.options.initialSlide;
	                            }
	                            _.refresh(initial);
	                        }
	                        triggerBreakpoint = targetBreakpoint;
	                    }
	                } else {
	                    _.activeBreakpoint = targetBreakpoint;
	                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                        _.unslick(targetBreakpoint);
	                    } else {
	                        _.options = $.extend({}, _.originalSettings,
	                            _.breakpointSettings[
	                                targetBreakpoint]);
	                        if (initial === true) {
	                            _.currentSlide = _.options.initialSlide;
	                        }
	                        _.refresh(initial);
	                    }
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            } else {
	                if (_.activeBreakpoint !== null) {
	                    _.activeBreakpoint = null;
	                    _.options = _.originalSettings;
	                    if (initial === true) {
	                        _.currentSlide = _.options.initialSlide;
	                    }
	                    _.refresh(initial);
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            }
	
	            // only trigger breakpoints during an actual break. not on initialize.
	            if( !initial && triggerBreakpoint !== false ) {
	                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
	            }
	        }
	
	    };
	
	    Slick.prototype.changeSlide = function(event, dontAnimate) {
	
	        var _ = this,
	            $target = $(event.currentTarget),
	            indexOffset, slideOffset, unevenOffset;
	
	        // If target is a link, prevent default action.
	        if($target.is('a')) {
	            event.preventDefault();
	        }
	
	        // If target is not the <li> element (ie: a child), find the <li>.
	        if(!$target.is('li')) {
	            $target = $target.closest('li');
	        }
	
	        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
	        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
	
	        switch (event.data.message) {
	
	            case 'previous':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
	                }
	                break;
	
	            case 'next':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
	                }
	                break;
	
	            case 'index':
	                var index = event.data.index === 0 ? 0 :
	                    event.data.index || $target.index() * _.options.slidesToScroll;
	
	                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
	                $target.children().trigger('focus');
	                break;
	
	            default:
	                return;
	        }
	
	    };
	
	    Slick.prototype.checkNavigable = function(index) {
	
	        var _ = this,
	            navigables, prevNavigable;
	
	        navigables = _.getNavigableIndexes();
	        prevNavigable = 0;
	        if (index > navigables[navigables.length - 1]) {
	            index = navigables[navigables.length - 1];
	        } else {
	            for (var n in navigables) {
	                if (index < navigables[n]) {
	                    index = prevNavigable;
	                    break;
	                }
	                prevNavigable = navigables[n];
	            }
	        }
	
	        return index;
	    };
	
	    Slick.prototype.cleanUpEvents = function() {
	
	        var _ = this;
	
	        if (_.options.dots && _.$dots !== null) {
	
	            $('li', _.$dots)
	                .off('click.slick', _.changeSlide)
	                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
	                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	            if (_.options.accessibility === true) {
	                _.$dots.off('keydown.slick', _.keyHandler);
	            }
	        }
	
	        _.$slider.off('focus.slick blur.slick');
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
	            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
	
	            if (_.options.accessibility === true) {
	                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
	                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
	            }
	        }
	
	        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
	        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
	        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
	        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
	
	        _.$list.off('click.slick', _.clickHandler);
	
	        $(document).off(_.visibilityChange, _.visibility);
	
	        _.cleanUpSlideEvents();
	
	        if (_.options.accessibility === true) {
	            _.$list.off('keydown.slick', _.keyHandler);
	        }
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
	        }
	
	        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
	
	        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
	
	        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
	
	        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
	
	    };
	
	    Slick.prototype.cleanUpSlideEvents = function() {
	
	        var _ = this;
	
	        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
	        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	    };
	
	    Slick.prototype.cleanUpRows = function() {
	
	        var _ = this, originalSlides;
	
	        if(_.options.rows > 0) {
	            originalSlides = _.$slides.children().children();
	            originalSlides.removeAttr('style');
	            _.$slider.empty().append(originalSlides);
	        }
	
	    };
	
	    Slick.prototype.clickHandler = function(event) {
	
	        var _ = this;
	
	        if (_.shouldClick === false) {
	            event.stopImmediatePropagation();
	            event.stopPropagation();
	            event.preventDefault();
	        }
	
	    };
	
	    Slick.prototype.destroy = function(refresh) {
	
	        var _ = this;
	
	        _.autoPlayClear();
	
	        _.touchObject = {};
	
	        _.cleanUpEvents();
	
	        $('.slick-cloned', _.$slider).detach();
	
	        if (_.$dots) {
	            _.$dots.remove();
	        }
	
	        if ( _.$prevArrow && _.$prevArrow.length ) {
	
	            _.$prevArrow
	                .removeClass('slick-disabled slick-arrow slick-hidden')
	                .removeAttr('aria-hidden aria-disabled tabindex')
	                .css('display','');
	
	            if ( _.htmlExpr.test( _.options.prevArrow )) {
	                _.$prevArrow.remove();
	            }
	        }
	
	        if ( _.$nextArrow && _.$nextArrow.length ) {
	
	            _.$nextArrow
	                .removeClass('slick-disabled slick-arrow slick-hidden')
	                .removeAttr('aria-hidden aria-disabled tabindex')
	                .css('display','');
	
	            if ( _.htmlExpr.test( _.options.nextArrow )) {
	                _.$nextArrow.remove();
	            }
	        }
	
	
	        if (_.$slides) {
	
	            _.$slides
	                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
	                .removeAttr('aria-hidden')
	                .removeAttr('data-slick-index')
	                .each((function(){
	                    $(this).attr('style', $(this).data('originalStyling'));
	                }));
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slideTrack.detach();
	
	            _.$list.detach();
	
	            _.$slider.append(_.$slides);
	        }
	
	        _.cleanUpRows();
	
	        _.$slider.removeClass('slick-slider');
	        _.$slider.removeClass('slick-initialized');
	        _.$slider.removeClass('slick-dotted');
	
	        _.unslicked = true;
	
	        if(!refresh) {
	            _.$slider.trigger('destroy', [_]);
	        }
	
	    };
	
	    Slick.prototype.disableTransition = function(slide) {
	
	        var _ = this,
	            transition = {};
	
	        transition[_.transitionType] = '';
	
	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }
	
	    };
	
	    Slick.prototype.fadeSlide = function(slideIndex, callback) {
	
	        var _ = this;
	
	        if (_.cssTransitions === false) {
	
	            _.$slides.eq(slideIndex).css({
	                zIndex: _.options.zIndex
	            });
	
	            _.$slides.eq(slideIndex).animate({
	                opacity: 1
	            }, _.options.speed, _.options.easing, callback);
	
	        } else {
	
	            _.applyTransition(slideIndex);
	
	            _.$slides.eq(slideIndex).css({
	                opacity: 1,
	                zIndex: _.options.zIndex
	            });
	
	            if (callback) {
	                setTimeout((function() {
	
	                    _.disableTransition(slideIndex);
	
	                    callback.call();
	                }), _.options.speed);
	            }
	
	        }
	
	    };
	
	    Slick.prototype.fadeSlideOut = function(slideIndex) {
	
	        var _ = this;
	
	        if (_.cssTransitions === false) {
	
	            _.$slides.eq(slideIndex).animate({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            }, _.options.speed, _.options.easing);
	
	        } else {
	
	            _.applyTransition(slideIndex);
	
	            _.$slides.eq(slideIndex).css({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            });
	
	        }
	
	    };
	
	    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
	
	        var _ = this;
	
	        if (filter !== null) {
	
	            _.$slidesCache = _.$slides;
	
	            _.unload();
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
	
	            _.reinit();
	
	        }
	
	    };
	
	    Slick.prototype.focusHandler = function() {
	
	        var _ = this;
	
	        // If any child element receives focus within the slider we need to pause the autoplay
	        _.$slider
	            .off('focus.slick blur.slick')
	            .on(
	                'focus.slick',
	                '*',
	                (function(event) {
	                    var $sf = $(this);
	
	                    setTimeout((function() {
	                        if( _.options.pauseOnFocus ) {
	                            if ($sf.is(':focus')) {
	                                _.focussed = true;
	                                _.autoPlay();
	                            }
	                        }
	                    }), 0);
	                })
	            ).on(
	                'blur.slick',
	                '*',
	                (function(event) {
	                    var $sf = $(this);
	
	                    // When a blur occurs on any elements within the slider we become unfocused
	                    if( _.options.pauseOnFocus ) {
	                        _.focussed = false;
	                        _.autoPlay();
	                    }
	                })
	            );
	    };
	
	    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
	
	        var _ = this;
	        return _.currentSlide;
	
	    };
	
	    Slick.prototype.getDotCount = function() {
	
	        var _ = this;
	
	        var breakPoint = 0;
	        var counter = 0;
	        var pagerQty = 0;
	
	        if (_.options.infinite === true) {
	            if (_.slideCount <= _.options.slidesToShow) {
	                 ++pagerQty;
	            } else {
	                while (breakPoint < _.slideCount) {
	                    ++pagerQty;
	                    breakPoint = counter + _.options.slidesToScroll;
	                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	                }
	            }
	        } else if (_.options.centerMode === true) {
	            pagerQty = _.slideCount;
	        } else if(!_.options.asNavFor) {
	            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
	        }else {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToScroll;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        }
	
	        return pagerQty - 1;
	
	    };
	
	    Slick.prototype.getLeft = function(slideIndex) {
	
	        var _ = this,
	            targetLeft,
	            verticalHeight,
	            verticalOffset = 0,
	            targetSlide,
	            coef;
	
	        _.slideOffset = 0;
	        verticalHeight = _.$slides.first().outerHeight(true);
	
	        if (_.options.infinite === true) {
	            if (_.slideCount > _.options.slidesToShow) {
	                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
	                coef = -1
	
	                if (_.options.vertical === true && _.options.centerMode === true) {
	                    if (_.options.slidesToShow === 2) {
	                        coef = -1.5;
	                    } else if (_.options.slidesToShow === 1) {
	                        coef = -2
	                    }
	                }
	                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
	            }
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
	                    if (slideIndex > _.slideCount) {
	                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
	                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
	                    } else {
	                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
	                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
	                    }
	                }
	            }
	        } else {
	            if (slideIndex + _.options.slidesToShow > _.slideCount) {
	                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
	                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
	            }
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            _.slideOffset = 0;
	            verticalOffset = 0;
	        }
	
	        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
	            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
	        } else if (_.options.centerMode === true && _.options.infinite === true) {
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
	        } else if (_.options.centerMode === true) {
	            _.slideOffset = 0;
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
	        }
	
	        if (_.options.vertical === false) {
	            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
	        } else {
	            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
	        }
	
	        if (_.options.variableWidth === true) {
	
	            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	            } else {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
	            }
	
	            if (_.options.rtl === true) {
	                if (targetSlide[0]) {
	                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                } else {
	                    targetLeft =  0;
	                }
	            } else {
	                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	            }
	
	            if (_.options.centerMode === true) {
	                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	                } else {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
	                }
	
	                if (_.options.rtl === true) {
	                    if (targetSlide[0]) {
	                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                    } else {
	                        targetLeft =  0;
	                    }
	                } else {
	                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	                }
	
	                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
	            }
	        }
	
	        return targetLeft;
	
	    };
	
	    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
	
	        var _ = this;
	
	        return _.options[option];
	
	    };
	
	    Slick.prototype.getNavigableIndexes = function() {
	
	        var _ = this,
	            breakPoint = 0,
	            counter = 0,
	            indexes = [],
	            max;
	
	        if (_.options.infinite === false) {
	            max = _.slideCount;
	        } else {
	            breakPoint = _.options.slidesToScroll * -1;
	            counter = _.options.slidesToScroll * -1;
	            max = _.slideCount * 2;
	        }
	
	        while (breakPoint < max) {
	            indexes.push(breakPoint);
	            breakPoint = counter + _.options.slidesToScroll;
	            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	        }
	
	        return indexes;
	
	    };
	
	    Slick.prototype.getSlick = function() {
	
	        return this;
	
	    };
	
	    Slick.prototype.getSlideCount = function() {
	
	        var _ = this,
	            slidesTraversed, swipedSlide, swipeTarget, centerOffset;
	
	        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
	        swipeTarget = (_.swipeLeft * -1) + centerOffset;
	
	        if (_.options.swipeToSlide === true) {
	
	            _.$slideTrack.find('.slick-slide').each((function(index, slide) {
	
	                var slideOuterWidth, slideOffset, slideRightBoundary;
	                slideOuterWidth = $(slide).outerWidth();
	                slideOffset = slide.offsetLeft;
	                if (_.options.centerMode !== true) {
	                    slideOffset += (slideOuterWidth / 2);
	                }
	
	                slideRightBoundary = slideOffset + (slideOuterWidth);
	
	                if (swipeTarget < slideRightBoundary) {
	                    swipedSlide = slide;
	                    return false;
	                }
	            }));
	
	            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
	
	            return slidesTraversed;
	
	        } else {
	            return _.options.slidesToScroll;
	        }
	
	    };
	
	    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'index',
	                index: parseInt(slide)
	            }
	        }, dontAnimate);
	
	    };
	
	    Slick.prototype.init = function(creation) {
	
	        var _ = this;
	
	        if (!$(_.$slider).hasClass('slick-initialized')) {
	
	            $(_.$slider).addClass('slick-initialized');
	
	            _.buildRows();
	            _.buildOut();
	            _.setProps();
	            _.startLoad();
	            _.loadSlider();
	            _.initializeEvents();
	            _.updateArrows();
	            _.updateDots();
	            _.checkResponsive(true);
	            _.focusHandler();
	
	        }
	
	        if (creation) {
	            _.$slider.trigger('init', [_]);
	        }
	
	        if (_.options.accessibility === true) {
	            _.initADA();
	        }
	
	        if ( _.options.autoplay ) {
	
	            _.paused = false;
	            _.autoPlay();
	
	        }
	
	    };
	
	    Slick.prototype.initADA = function() {
	        var _ = this,
	                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
	                tabControlIndexes = _.getNavigableIndexes().filter((function(val) {
	                    return (val >= 0) && (val < _.slideCount);
	                }));
	
	        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
	            'aria-hidden': 'true',
	            'tabindex': '-1'
	        }).find('a, input, button, select').attr({
	            'tabindex': '-1'
	        });
	
	        if (_.$dots !== null) {
	            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each((function(i) {
	                var slideControlIndex = tabControlIndexes.indexOf(i);
	
	                $(this).attr({
	                    'role': 'tabpanel',
	                    'id': 'slick-slide' + _.instanceUid + i,
	                    'tabindex': -1
	                });
	
	                if (slideControlIndex !== -1) {
	                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
	                   if ($('#' + ariaButtonControl).length) {
	                     $(this).attr({
	                         'aria-describedby': ariaButtonControl
	                     });
	                   }
	                }
	            }));
	
	            _.$dots.attr('role', 'tablist').find('li').each((function(i) {
	                var mappedSlideIndex = tabControlIndexes[i];
	
	                $(this).attr({
	                    'role': 'presentation'
	                });
	
	                $(this).find('button').first().attr({
	                    'role': 'tab',
	                    'id': 'slick-slide-control' + _.instanceUid + i,
	                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
	                    'aria-label': (i + 1) + ' of ' + numDotGroups,
	                    'aria-selected': null,
	                    'tabindex': '-1'
	                });
	
	            })).eq(_.currentSlide).find('button').attr({
	                'aria-selected': 'true',
	                'tabindex': '0'
	            }).end();
	        }
	
	        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
	          if (_.options.focusOnChange) {
	            _.$slides.eq(i).attr({'tabindex': '0'});
	          } else {
	            _.$slides.eq(i).removeAttr('tabindex');
	          }
	        }
	
	        _.activateADA();
	
	    };
	
	    Slick.prototype.initArrowEvents = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow
	               .off('click.slick')
	               .on('click.slick', {
	                    message: 'previous'
	               }, _.changeSlide);
	            _.$nextArrow
	               .off('click.slick')
	               .on('click.slick', {
	                    message: 'next'
	               }, _.changeSlide);
	
	            if (_.options.accessibility === true) {
	                _.$prevArrow.on('keydown.slick', _.keyHandler);
	                _.$nextArrow.on('keydown.slick', _.keyHandler);
	            }
	        }
	
	    };
	
	    Slick.prototype.initDotEvents = function() {
	
	        var _ = this;
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	            $('li', _.$dots).on('click.slick', {
	                message: 'index'
	            }, _.changeSlide);
	
	            if (_.options.accessibility === true) {
	                _.$dots.on('keydown.slick', _.keyHandler);
	            }
	        }
	
	        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
	
	            $('li', _.$dots)
	                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
	                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	        }
	
	    };
	
	    Slick.prototype.initSlideEvents = function() {
	
	        var _ = this;
	
	        if ( _.options.pauseOnHover ) {
	
	            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
	            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	        }
	
	    };
	
	    Slick.prototype.initializeEvents = function() {
	
	        var _ = this;
	
	        _.initArrowEvents();
	
	        _.initDotEvents();
	        _.initSlideEvents();
	
	        _.$list.on('touchstart.slick mousedown.slick', {
	            action: 'start'
	        }, _.swipeHandler);
	        _.$list.on('touchmove.slick mousemove.slick', {
	            action: 'move'
	        }, _.swipeHandler);
	        _.$list.on('touchend.slick mouseup.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	        _.$list.on('touchcancel.slick mouseleave.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	
	        _.$list.on('click.slick', _.clickHandler);
	
	        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
	
	        if (_.options.accessibility === true) {
	            _.$list.on('keydown.slick', _.keyHandler);
	        }
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }
	
	        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
	
	        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
	
	        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
	
	        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(_.setPosition);
	
	    };
	
	    Slick.prototype.initUI = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$prevArrow.show();
	            _.$nextArrow.show();
	
	        }
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$dots.show();
	
	        }
	
	    };
	
	    Slick.prototype.keyHandler = function(event) {
	
	        var _ = this;
	         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	            if (event.keyCode === 37 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'next' :  'previous'
	                    }
	                });
	            } else if (event.keyCode === 39 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'previous' : 'next'
	                    }
	                });
	            }
	        }
	
	    };
	
	    Slick.prototype.lazyLoad = function() {
	
	        var _ = this,
	            loadRange, cloneRange, rangeStart, rangeEnd;
	
	        function loadImages(imagesScope) {
	
	            $('img[data-lazy]', imagesScope).each((function() {
	
	                var image = $(this),
	                    imageSource = $(this).attr('data-lazy'),
	                    imageSrcSet = $(this).attr('data-srcset'),
	                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
	                    imageToLoad = document.createElement('img');
	
	                imageToLoad.onload = function() {
	
	                    image
	                        .animate({ opacity: 0 }, 100, (function() {
	
	                            if (imageSrcSet) {
	                                image
	                                    .attr('srcset', imageSrcSet );
	
	                                if (imageSizes) {
	                                    image
	                                        .attr('sizes', imageSizes );
	                                }
	                            }
	
	                            image
	                                .attr('src', imageSource)
	                                .animate({ opacity: 1 }, 200, (function() {
	                                    image
	                                        .removeAttr('data-lazy data-srcset data-sizes')
	                                        .removeClass('slick-loading');
	                                }));
	                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
	                        }));
	
	                };
	
	                imageToLoad.onerror = function() {
	
	                    image
	                        .removeAttr( 'data-lazy' )
	                        .removeClass( 'slick-loading' )
	                        .addClass( 'slick-lazyload-error' );
	
	                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
	
	                };
	
	                imageToLoad.src = imageSource;
	
	            }));
	
	        }
	
	        if (_.options.centerMode === true) {
	            if (_.options.infinite === true) {
	                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
	                rangeEnd = rangeStart + _.options.slidesToShow + 2;
	            } else {
	                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
	                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
	            }
	        } else {
	            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
	            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
	            if (_.options.fade === true) {
	                if (rangeStart > 0) rangeStart--;
	                if (rangeEnd <= _.slideCount) rangeEnd++;
	            }
	        }
	
	        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
	
	        if (_.options.lazyLoad === 'anticipated') {
	            var prevSlide = rangeStart - 1,
	                nextSlide = rangeEnd,
	                $slides = _.$slider.find('.slick-slide');
	
	            for (var i = 0; i < _.options.slidesToScroll; i++) {
	                if (prevSlide < 0) prevSlide = _.slideCount - 1;
	                loadRange = loadRange.add($slides.eq(prevSlide));
	                loadRange = loadRange.add($slides.eq(nextSlide));
	                prevSlide--;
	                nextSlide++;
	            }
	        }
	
	        loadImages(loadRange);
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-slide');
	            loadImages(cloneRange);
	        } else
	        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
	            loadImages(cloneRange);
	        } else if (_.currentSlide === 0) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
	            loadImages(cloneRange);
	        }
	
	    };
	
	    Slick.prototype.loadSlider = function() {
	
	        var _ = this;
	
	        _.setPosition();
	
	        _.$slideTrack.css({
	            opacity: 1
	        });
	
	        _.$slider.removeClass('slick-loading');
	
	        _.initUI();
	
	        if (_.options.lazyLoad === 'progressive') {
	            _.progressiveLazyLoad();
	        }
	
	    };
	
	    Slick.prototype.next = Slick.prototype.slickNext = function() {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'next'
	            }
	        });
	
	    };
	
	    Slick.prototype.orientationChange = function() {
	
	        var _ = this;
	
	        _.checkResponsive();
	        _.setPosition();
	
	    };
	
	    Slick.prototype.pause = Slick.prototype.slickPause = function() {
	
	        var _ = this;
	
	        _.autoPlayClear();
	        _.paused = true;
	
	    };
	
	    Slick.prototype.play = Slick.prototype.slickPlay = function() {
	
	        var _ = this;
	
	        _.autoPlay();
	        _.options.autoplay = true;
	        _.paused = false;
	        _.focussed = false;
	        _.interrupted = false;
	
	    };
	
	    Slick.prototype.postSlide = function(index) {
	
	        var _ = this;
	
	        if( !_.unslicked ) {
	
	            _.$slider.trigger('afterChange', [_, index]);
	
	            _.animating = false;
	
	            if (_.slideCount > _.options.slidesToShow) {
	                _.setPosition();
	            }
	
	            _.swipeLeft = null;
	
	            if ( _.options.autoplay ) {
	                _.autoPlay();
	            }
	
	            if (_.options.accessibility === true) {
	                _.initADA();
	
	                if (_.options.focusOnChange) {
	                    var $currentSlide = $(_.$slides.get(_.currentSlide));
	                    $currentSlide.attr('tabindex', 0).focus();
	                }
	            }
	
	        }
	
	    };
	
	    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'previous'
	            }
	        });
	
	    };
	
	    Slick.prototype.preventDefault = function(event) {
	
	        event.preventDefault();
	
	    };
	
	    Slick.prototype.progressiveLazyLoad = function( tryCount ) {
	
	        tryCount = tryCount || 1;
	
	        var _ = this,
	            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
	            image,
	            imageSource,
	            imageSrcSet,
	            imageSizes,
	            imageToLoad;
	
	        if ( $imgsToLoad.length ) {
	
	            image = $imgsToLoad.first();
	            imageSource = image.attr('data-lazy');
	            imageSrcSet = image.attr('data-srcset');
	            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
	            imageToLoad = document.createElement('img');
	
	            imageToLoad.onload = function() {
	
	                if (imageSrcSet) {
	                    image
	                        .attr('srcset', imageSrcSet );
	
	                    if (imageSizes) {
	                        image
	                            .attr('sizes', imageSizes );
	                    }
	                }
	
	                image
	                    .attr( 'src', imageSource )
	                    .removeAttr('data-lazy data-srcset data-sizes')
	                    .removeClass('slick-loading');
	
	                if ( _.options.adaptiveHeight === true ) {
	                    _.setPosition();
	                }
	
	                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
	                _.progressiveLazyLoad();
	
	            };
	
	            imageToLoad.onerror = function() {
	
	                if ( tryCount < 3 ) {
	
	                    /**
	                     * try to load the image 3 times,
	                     * leave a slight delay so we don't get
	                     * servers blocking the request.
	                     */
	                    setTimeout( (function() {
	                        _.progressiveLazyLoad( tryCount + 1 );
	                    }), 500 );
	
	                } else {
	
	                    image
	                        .removeAttr( 'data-lazy' )
	                        .removeClass( 'slick-loading' )
	                        .addClass( 'slick-lazyload-error' );
	
	                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
	
	                    _.progressiveLazyLoad();
	
	                }
	
	            };
	
	            imageToLoad.src = imageSource;
	
	        } else {
	
	            _.$slider.trigger('allImagesLoaded', [ _ ]);
	
	        }
	
	    };
	
	    Slick.prototype.refresh = function( initializing ) {
	
	        var _ = this, currentSlide, lastVisibleIndex;
	
	        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
	
	        // in non-infinite sliders, we don't want to go past the
	        // last visible index.
	        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
	            _.currentSlide = lastVisibleIndex;
	        }
	
	        // if less slides than to show, go to start.
	        if ( _.slideCount <= _.options.slidesToShow ) {
	            _.currentSlide = 0;
	
	        }
	
	        currentSlide = _.currentSlide;
	
	        _.destroy(true);
	
	        $.extend(_, _.initials, { currentSlide: currentSlide });
	
	        _.init();
	
	        if( !initializing ) {
	
	            _.changeSlide({
	                data: {
	                    message: 'index',
	                    index: currentSlide
	                }
	            }, false);
	
	        }
	
	    };
	
	    Slick.prototype.registerBreakpoints = function() {
	
	        var _ = this, breakpoint, currentBreakpoint, l,
	            responsiveSettings = _.options.responsive || null;
	
	        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
	
	            _.respondTo = _.options.respondTo || 'window';
	
	            for ( breakpoint in responsiveSettings ) {
	
	                l = _.breakpoints.length-1;
	
	                if (responsiveSettings.hasOwnProperty(breakpoint)) {
	                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
	
	                    // loop through the breakpoints and cut out any existing
	                    // ones with the same breakpoint number, we don't want dupes.
	                    while( l >= 0 ) {
	                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
	                            _.breakpoints.splice(l,1);
	                        }
	                        l--;
	                    }
	
	                    _.breakpoints.push(currentBreakpoint);
	                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
	
	                }
	
	            }
	
	            _.breakpoints.sort((function(a, b) {
	                return ( _.options.mobileFirst ) ? a-b : b-a;
	            }));
	
	        }
	
	    };
	
	    Slick.prototype.reinit = function() {
	
	        var _ = this;
	
	        _.$slides =
	            _.$slideTrack
	                .children(_.options.slide)
	                .addClass('slick-slide');
	
	        _.slideCount = _.$slides.length;
	
	        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
	            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            _.currentSlide = 0;
	        }
	
	        _.registerBreakpoints();
	
	        _.setProps();
	        _.setupInfinite();
	        _.buildArrows();
	        _.updateArrows();
	        _.initArrowEvents();
	        _.buildDots();
	        _.updateDots();
	        _.initDotEvents();
	        _.cleanUpSlideEvents();
	        _.initSlideEvents();
	
	        _.checkResponsive(false, true);
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }
	
	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
	
	        _.setPosition();
	        _.focusHandler();
	
	        _.paused = !_.options.autoplay;
	        _.autoPlay();
	
	        _.$slider.trigger('reInit', [_]);
	
	    };
	
	    Slick.prototype.resize = function() {
	
	        var _ = this;
	
	        if ($(window).width() !== _.windowWidth) {
	            clearTimeout(_.windowDelay);
	            _.windowDelay = window.setTimeout((function() {
	                _.windowWidth = $(window).width();
	                _.checkResponsive();
	                if( !_.unslicked ) { _.setPosition(); }
	            }), 50);
	        }
	    };
	
	    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
	
	        var _ = this;
	
	        if (typeof(index) === 'boolean') {
	            removeBefore = index;
	            index = removeBefore === true ? 0 : _.slideCount - 1;
	        } else {
	            index = removeBefore === true ? --index : index;
	        }
	
	        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
	            return false;
	        }
	
	        _.unload();
	
	        if (removeAll === true) {
	            _.$slideTrack.children().remove();
	        } else {
	            _.$slideTrack.children(this.options.slide).eq(index).remove();
	        }
	
	        _.$slides = _.$slideTrack.children(this.options.slide);
	
	        _.$slideTrack.children(this.options.slide).detach();
	
	        _.$slideTrack.append(_.$slides);
	
	        _.$slidesCache = _.$slides;
	
	        _.reinit();
	
	    };
	
	    Slick.prototype.setCSS = function(position) {
	
	        var _ = this,
	            positionProps = {},
	            x, y;
	
	        if (_.options.rtl === true) {
	            position = -position;
	        }
	        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
	        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
	
	        positionProps[_.positionProp] = position;
	
	        if (_.transformsEnabled === false) {
	            _.$slideTrack.css(positionProps);
	        } else {
	            positionProps = {};
	            if (_.cssTransitions === false) {
	                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
	                _.$slideTrack.css(positionProps);
	            } else {
	                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
	                _.$slideTrack.css(positionProps);
	            }
	        }
	
	    };
	
	    Slick.prototype.setDimensions = function() {
	
	        var _ = this;
	
	        if (_.options.vertical === false) {
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: ('0px ' + _.options.centerPadding)
	                });
	            }
	        } else {
	            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: (_.options.centerPadding + ' 0px')
	                });
	            }
	        }
	
	        _.listWidth = _.$list.width();
	        _.listHeight = _.$list.height();
	
	
	        if (_.options.vertical === false && _.options.variableWidth === false) {
	            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
	            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
	
	        } else if (_.options.variableWidth === true) {
	            _.$slideTrack.width(5000 * _.slideCount);
	        } else {
	            _.slideWidth = Math.ceil(_.listWidth);
	            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
	        }
	
	        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
	        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
	
	    };
	
	    Slick.prototype.setFade = function() {
	
	        var _ = this,
	            targetLeft;
	
	        _.$slides.each((function(index, element) {
	            targetLeft = (_.slideWidth * index) * -1;
	            if (_.options.rtl === true) {
	                $(element).css({
	                    position: 'relative',
	                    right: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            } else {
	                $(element).css({
	                    position: 'relative',
	                    left: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            }
	        }));
	
	        _.$slides.eq(_.currentSlide).css({
	            zIndex: _.options.zIndex - 1,
	            opacity: 1
	        });
	
	    };
	
	    Slick.prototype.setHeight = function() {
	
	        var _ = this;
	
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.css('height', targetHeight);
	        }
	
	    };
	
	    Slick.prototype.setOption =
	    Slick.prototype.slickSetOption = function() {
	
	        /**
	         * accepts arguments in format of:
	         *
	         *  - for changing a single option's value:
	         *     .slick("setOption", option, value, refresh )
	         *
	         *  - for changing a set of responsive options:
	         *     .slick("setOption", 'responsive', [{}, ...], refresh )
	         *
	         *  - for updating multiple values at once (not responsive)
	         *     .slick("setOption", { 'option': value, ... }, refresh )
	         */
	
	        var _ = this, l, item, option, value, refresh = false, type;
	
	        if( $.type( arguments[0] ) === 'object' ) {
	
	            option =  arguments[0];
	            refresh = arguments[1];
	            type = 'multiple';
	
	        } else if ( $.type( arguments[0] ) === 'string' ) {
	
	            option =  arguments[0];
	            value = arguments[1];
	            refresh = arguments[2];
	
	            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {
	
	                type = 'responsive';
	
	            } else if ( typeof arguments[1] !== 'undefined' ) {
	
	                type = 'single';
	
	            }
	
	        }
	
	        if ( type === 'single' ) {
	
	            _.options[option] = value;
	
	
	        } else if ( type === 'multiple' ) {
	
	            $.each( option , (function( opt, val ) {
	
	                _.options[opt] = val;
	
	            }));
	
	
	        } else if ( type === 'responsive' ) {
	
	            for ( item in value ) {
	
	                if( $.type( _.options.responsive ) !== 'array' ) {
	
	                    _.options.responsive = [ value[item] ];
	
	                } else {
	
	                    l = _.options.responsive.length-1;
	
	                    // loop through the responsive object and splice out duplicates.
	                    while( l >= 0 ) {
	
	                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
	
	                            _.options.responsive.splice(l,1);
	
	                        }
	
	                        l--;
	
	                    }
	
	                    _.options.responsive.push( value[item] );
	
	                }
	
	            }
	
	        }
	
	        if ( refresh ) {
	
	            _.unload();
	            _.reinit();
	
	        }
	
	    };
	
	    Slick.prototype.setPosition = function() {
	
	        var _ = this;
	
	        _.setDimensions();
	
	        _.setHeight();
	
	        if (_.options.fade === false) {
	            _.setCSS(_.getLeft(_.currentSlide));
	        } else {
	            _.setFade();
	        }
	
	        _.$slider.trigger('setPosition', [_]);
	
	    };
	
	    Slick.prototype.setProps = function() {
	
	        var _ = this,
	            bodyStyle = document.body.style;
	
	        _.positionProp = _.options.vertical === true ? 'top' : 'left';
	
	        if (_.positionProp === 'top') {
	            _.$slider.addClass('slick-vertical');
	        } else {
	            _.$slider.removeClass('slick-vertical');
	        }
	
	        if (bodyStyle.WebkitTransition !== undefined ||
	            bodyStyle.MozTransition !== undefined ||
	            bodyStyle.msTransition !== undefined) {
	            if (_.options.useCSS === true) {
	                _.cssTransitions = true;
	            }
	        }
	
	        if ( _.options.fade ) {
	            if ( typeof _.options.zIndex === 'number' ) {
	                if( _.options.zIndex < 3 ) {
	                    _.options.zIndex = 3;
	                }
	            } else {
	                _.options.zIndex = _.defaults.zIndex;
	            }
	        }
	
	        if (bodyStyle.OTransform !== undefined) {
	            _.animType = 'OTransform';
	            _.transformType = '-o-transform';
	            _.transitionType = 'OTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.MozTransform !== undefined) {
	            _.animType = 'MozTransform';
	            _.transformType = '-moz-transform';
	            _.transitionType = 'MozTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.webkitTransform !== undefined) {
	            _.animType = 'webkitTransform';
	            _.transformType = '-webkit-transform';
	            _.transitionType = 'webkitTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.msTransform !== undefined) {
	            _.animType = 'msTransform';
	            _.transformType = '-ms-transform';
	            _.transitionType = 'msTransition';
	            if (bodyStyle.msTransform === undefined) _.animType = false;
	        }
	        if (bodyStyle.transform !== undefined && _.animType !== false) {
	            _.animType = 'transform';
	            _.transformType = 'transform';
	            _.transitionType = 'transition';
	        }
	        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
	    };
	
	
	    Slick.prototype.setSlideClasses = function(index) {
	
	        var _ = this,
	            centerOffset, allSlides, indexOffset, remainder;
	
	        allSlides = _.$slider
	            .find('.slick-slide')
	            .removeClass('slick-active slick-center slick-current')
	            .attr('aria-hidden', 'true');
	
	        _.$slides
	            .eq(index)
	            .addClass('slick-current');
	
	        if (_.options.centerMode === true) {
	
	            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
	
	            centerOffset = Math.floor(_.options.slidesToShow / 2);
	
	            if (_.options.infinite === true) {
	
	                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
	                    _.$slides
	                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                } else {
	
	                    indexOffset = _.options.slidesToShow + index;
	                    allSlides
	                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                }
	
	                if (index === 0) {
	
	                    allSlides
	                        .eq(allSlides.length - 1 - _.options.slidesToShow)
	                        .addClass('slick-center');
	
	                } else if (index === _.slideCount - 1) {
	
	                    allSlides
	                        .eq(_.options.slidesToShow)
	                        .addClass('slick-center');
	
	                }
	
	            }
	
	            _.$slides
	                .eq(index)
	                .addClass('slick-center');
	
	        } else {
	
	            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
	
	                _.$slides
	                    .slice(index, index + _.options.slidesToShow)
	                    .addClass('slick-active')
	                    .attr('aria-hidden', 'false');
	
	            } else if (allSlides.length <= _.options.slidesToShow) {
	
	                allSlides
	                    .addClass('slick-active')
	                    .attr('aria-hidden', 'false');
	
	            } else {
	
	                remainder = _.slideCount % _.options.slidesToShow;
	                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
	
	                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
	
	                    allSlides
	                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                } else {
	
	                    allSlides
	                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                }
	
	            }
	
	        }
	
	        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
	            _.lazyLoad();
	        }
	    };
	
	    Slick.prototype.setupInfinite = function() {
	
	        var _ = this,
	            i, slideIndex, infiniteCount;
	
	        if (_.options.fade === true) {
	            _.options.centerMode = false;
	        }
	
	        if (_.options.infinite === true && _.options.fade === false) {
	
	            slideIndex = null;
	
	            if (_.slideCount > _.options.slidesToShow) {
	
	                if (_.options.centerMode === true) {
	                    infiniteCount = _.options.slidesToShow + 1;
	                } else {
	                    infiniteCount = _.options.slidesToShow;
	                }
	
	                for (i = _.slideCount; i > (_.slideCount -
	                        infiniteCount); i -= 1) {
	                    slideIndex = i - 1;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex - _.slideCount)
	                        .prependTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
	                    slideIndex = i;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex + _.slideCount)
	                        .appendTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                _.$slideTrack.find('.slick-cloned').find('[id]').each((function() {
	                    $(this).attr('id', '');
	                }));
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.interrupt = function( toggle ) {
	
	        var _ = this;
	
	        if( !toggle ) {
	            _.autoPlay();
	        }
	        _.interrupted = toggle;
	
	    };
	
	    Slick.prototype.selectHandler = function(event) {
	
	        var _ = this;
	
	        var targetElement =
	            $(event.target).is('.slick-slide') ?
	                $(event.target) :
	                $(event.target).parents('.slick-slide');
	
	        var index = parseInt(targetElement.attr('data-slick-index'));
	
	        if (!index) index = 0;
	
	        if (_.slideCount <= _.options.slidesToShow) {
	
	            _.slideHandler(index, false, true);
	            return;
	
	        }
	
	        _.slideHandler(index);
	
	    };
	
	    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
	
	        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
	            _ = this, navTarget;
	
	        sync = sync || false;
	
	        if (_.animating === true && _.options.waitForAnimate === true) {
	            return;
	        }
	
	        if (_.options.fade === true && _.currentSlide === index) {
	            return;
	        }
	
	        if (sync === false) {
	            _.asNavFor(index);
	        }
	
	        targetSlide = index;
	        targetLeft = _.getLeft(targetSlide);
	        slideLeft = _.getLeft(_.currentSlide);
	
	        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
	
	        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	                    _.animateSlide(slideLeft, (function() {
	                        _.postSlide(targetSlide);
	                    }));
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	                    _.animateSlide(slideLeft, (function() {
	                        _.postSlide(targetSlide);
	                    }));
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        }
	
	        if ( _.options.autoplay ) {
	            clearInterval(_.autoPlayTimer);
	        }
	
	        if (targetSlide < 0) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
	            } else {
	                animSlide = _.slideCount + targetSlide;
	            }
	        } else if (targetSlide >= _.slideCount) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = 0;
	            } else {
	                animSlide = targetSlide - _.slideCount;
	            }
	        } else {
	            animSlide = targetSlide;
	        }
	
	        _.animating = true;
	
	        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
	
	        oldSlide = _.currentSlide;
	        _.currentSlide = animSlide;
	
	        _.setSlideClasses(_.currentSlide);
	
	        if ( _.options.asNavFor ) {
	
	            navTarget = _.getNavTarget();
	            navTarget = navTarget.slick('getSlick');
	
	            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
	                navTarget.setSlideClasses(_.currentSlide);
	            }
	
	        }
	
	        _.updateDots();
	        _.updateArrows();
	
	        if (_.options.fade === true) {
	            if (dontAnimate !== true) {
	
	                _.fadeSlideOut(oldSlide);
	
	                _.fadeSlide(animSlide, (function() {
	                    _.postSlide(animSlide);
	                }));
	
	            } else {
	                _.postSlide(animSlide);
	            }
	            _.animateHeight();
	            return;
	        }
	
	        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	            _.animateSlide(targetLeft, (function() {
	                _.postSlide(animSlide);
	            }));
	        } else {
	            _.postSlide(animSlide);
	        }
	
	    };
	
	    Slick.prototype.startLoad = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$prevArrow.hide();
	            _.$nextArrow.hide();
	
	        }
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$dots.hide();
	
	        }
	
	        _.$slider.addClass('slick-loading');
	
	    };
	
	    Slick.prototype.swipeDirection = function() {
	
	        var xDist, yDist, r, swipeAngle, _ = this;
	
	        xDist = _.touchObject.startX - _.touchObject.curX;
	        yDist = _.touchObject.startY - _.touchObject.curY;
	        r = Math.atan2(yDist, xDist);
	
	        swipeAngle = Math.round(r * 180 / Math.PI);
	        if (swipeAngle < 0) {
	            swipeAngle = 360 - Math.abs(swipeAngle);
	        }
	
	        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
	            return (_.options.rtl === false ? 'right' : 'left');
	        }
	        if (_.options.verticalSwiping === true) {
	            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
	                return 'down';
	            } else {
	                return 'up';
	            }
	        }
	
	        return 'vertical';
	
	    };
	
	    Slick.prototype.swipeEnd = function(event) {
	
	        var _ = this,
	            slideCount,
	            direction;
	
	        _.dragging = false;
	        _.swiping = false;
	
	        if (_.scrolling) {
	            _.scrolling = false;
	            return false;
	        }
	
	        _.interrupted = false;
	        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
	
	        if ( _.touchObject.curX === undefined ) {
	            return false;
	        }
	
	        if ( _.touchObject.edgeHit === true ) {
	            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
	        }
	
	        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
	
	            direction = _.swipeDirection();
	
	            switch ( direction ) {
	
	                case 'left':
	                case 'down':
	
	                    slideCount =
	                        _.options.swipeToSlide ?
	                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
	                            _.currentSlide + _.getSlideCount();
	
	                    _.currentDirection = 0;
	
	                    break;
	
	                case 'right':
	                case 'up':
	
	                    slideCount =
	                        _.options.swipeToSlide ?
	                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
	                            _.currentSlide - _.getSlideCount();
	
	                    _.currentDirection = 1;
	
	                    break;
	
	                default:
	
	
	            }
	
	            if( direction != 'vertical' ) {
	
	                _.slideHandler( slideCount );
	                _.touchObject = {};
	                _.$slider.trigger('swipe', [_, direction ]);
	
	            }
	
	        } else {
	
	            if ( _.touchObject.startX !== _.touchObject.curX ) {
	
	                _.slideHandler( _.currentSlide );
	                _.touchObject = {};
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.swipeHandler = function(event) {
	
	        var _ = this;
	
	        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
	            return;
	        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
	            return;
	        }
	
	        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
	            event.originalEvent.touches.length : 1;
	
	        _.touchObject.minSwipe = _.listWidth / _.options
	            .touchThreshold;
	
	        if (_.options.verticalSwiping === true) {
	            _.touchObject.minSwipe = _.listHeight / _.options
	                .touchThreshold;
	        }
	
	        switch (event.data.action) {
	
	            case 'start':
	                _.swipeStart(event);
	                break;
	
	            case 'move':
	                _.swipeMove(event);
	                break;
	
	            case 'end':
	                _.swipeEnd(event);
	                break;
	
	        }
	
	    };
	
	    Slick.prototype.swipeMove = function(event) {
	
	        var _ = this,
	            edgeWasHit = false,
	            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
	
	        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
	
	        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
	            return false;
	        }
	
	        curLeft = _.getLeft(_.currentSlide);
	
	        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
	        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
	
	        _.touchObject.swipeLength = Math.round(Math.sqrt(
	            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
	
	        verticalSwipeLength = Math.round(Math.sqrt(
	            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
	
	        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
	            _.scrolling = true;
	            return false;
	        }
	
	        if (_.options.verticalSwiping === true) {
	            _.touchObject.swipeLength = verticalSwipeLength;
	        }
	
	        swipeDirection = _.swipeDirection();
	
	        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
	            _.swiping = true;
	            event.preventDefault();
	        }
	
	        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
	        if (_.options.verticalSwiping === true) {
	            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
	        }
	
	
	        swipeLength = _.touchObject.swipeLength;
	
	        _.touchObject.edgeHit = false;
	
	        if (_.options.infinite === false) {
	            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
	                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
	                _.touchObject.edgeHit = true;
	            }
	        }
	
	        if (_.options.vertical === false) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        } else {
	            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
	        }
	        if (_.options.verticalSwiping === true) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        }
	
	        if (_.options.fade === true || _.options.touchMove === false) {
	            return false;
	        }
	
	        if (_.animating === true) {
	            _.swipeLeft = null;
	            return false;
	        }
	
	        _.setCSS(_.swipeLeft);
	
	    };
	
	    Slick.prototype.swipeStart = function(event) {
	
	        var _ = this,
	            touches;
	
	        _.interrupted = true;
	
	        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
	            _.touchObject = {};
	            return false;
	        }
	
	        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
	            touches = event.originalEvent.touches[0];
	        }
	
	        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
	        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
	
	        _.dragging = true;
	
	    };
	
	    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
	
	        var _ = this;
	
	        if (_.$slidesCache !== null) {
	
	            _.unload();
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slidesCache.appendTo(_.$slideTrack);
	
	            _.reinit();
	
	        }
	
	    };
	
	    Slick.prototype.unload = function() {
	
	        var _ = this;
	
	        $('.slick-cloned', _.$slider).remove();
	
	        if (_.$dots) {
	            _.$dots.remove();
	        }
	
	        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
	            _.$prevArrow.remove();
	        }
	
	        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
	            _.$nextArrow.remove();
	        }
	
	        _.$slides
	            .removeClass('slick-slide slick-active slick-visible slick-current')
	            .attr('aria-hidden', 'true')
	            .css('width', '');
	
	    };
	
	    Slick.prototype.unslick = function(fromBreakpoint) {
	
	        var _ = this;
	        _.$slider.trigger('unslick', [_, fromBreakpoint]);
	        _.destroy();
	
	    };
	
	    Slick.prototype.updateArrows = function() {
	
	        var _ = this,
	            centerOffset;
	
	        centerOffset = Math.floor(_.options.slidesToShow / 2);
	
	        if ( _.options.arrows === true &&
	            _.slideCount > _.options.slidesToShow &&
	            !_.options.infinite ) {
	
	            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            if (_.currentSlide === 0) {
	
	                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
	
	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
	
	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.updateDots = function() {
	
	        var _ = this;
	
	        if (_.$dots !== null) {
	
	            _.$dots
	                .find('li')
	                    .removeClass('slick-active')
	                    .end();
	
	            _.$dots
	                .find('li')
	                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
	                .addClass('slick-active');
	
	        }
	
	    };
	
	    Slick.prototype.visibility = function() {
	
	        var _ = this;
	
	        if ( _.options.autoplay ) {
	
	            if ( document[_.hidden] ) {
	
	                _.interrupted = true;
	
	            } else {
	
	                _.interrupted = false;
	
	            }
	
	        }
	
	    };
	
	    $.fn.slick = function() {
	        var _ = this,
	            opt = arguments[0],
	            args = Array.prototype.slice.call(arguments, 1),
	            l = _.length,
	            i,
	            ret;
	        for (i = 0; i < l; i++) {
	            if (typeof opt == 'object' || typeof opt == 'undefined')
	                _[i].slick = new Slick(_[i], opt);
	            else
	                ret = _[i].slick[opt].apply(_[i].slick, args);
	            if (typeof ret != 'undefined') return ret;
	        }
	        return _;
	    };
	
	})));
	
	// ==================================================
	// fancyBox v3.5.7
	//
	// Licensed GPLv3 for open source use
	// or fancyBox Commercial License for commercial use
	//
	// http://fancyapps.com/fancybox/
	// Copyright 2019 fancyApps
	//
	// ==================================================
	(function (window, document, $, undefined) {
	  "use strict";
	
	  window.console = window.console || {
	    info: function (stuff) {}
	  };
	
	  // If there's no jQuery, fancyBox can't work
	  // =========================================
	
	  if (!$) {
	    return;
	  }
	
	  // Check if fancyBox is already initialized
	  // ========================================
	
	  if ($.fn.fancybox) {
	    console.info("fancyBox already initialized");
	
	    return;
	  }
	
	  // Private default settings
	  // ========================
	
	  var defaults = {
	    // Close existing modals
	    // Set this to false if you do not need to stack multiple instances
	    closeExisting: false,
	
	    // Enable infinite gallery navigation
	    loop: false,
	
	    // Horizontal space between slides
	    gutter: 50,
	
	    // Enable keyboard navigation
	    keyboard: true,
	
	    // Should allow caption to overlap the content
	    preventCaptionOverlap: true,
	
	    // Should display navigation arrows at the screen edges
	    arrows: true,
	
	    // Should display counter at the top left corner
	    infobar: true,
	
	    // Should display close button (using `btnTpl.smallBtn` template) over the content
	    // Can be true, false, "auto"
	    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
	    smallBtn: "auto",
	
	    // Should display toolbar (buttons at the top)
	    // Can be true, false, "auto"
	    // If "auto" - will be automatically hidden if "smallBtn" is enabled
	    toolbar: "auto",
	
	    // What buttons should appear in the top right corner.
	    // Buttons will be created using templates from `btnTpl` option
	    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
	    buttons: [
	      "zoom",
	      //"share",
	      "slideShow",
	      //"fullScreen",
	      //"download",
	      "thumbs",
	      "close"
	    ],
	
	    // Detect "idle" time in seconds
	    idleTime: 3,
	
	    // Disable right-click and use simple image protection for images
	    protect: false,
	
	    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
	    modal: false,
	
	    image: {
	      // Wait for images to load before displaying
	      //   true  - wait for image to load and then display;
	      //   false - display thumbnail and load the full-sized image over top,
	      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
	      preload: false
	    },
	
	    ajax: {
	      // Object containing settings for ajax request
	      settings: {
	        // This helps to indicate that request comes from the modal
	        // Feel free to change naming
	        data: {
	          fancybox: true
	        }
	      }
	    },
	
	    iframe: {
	      // Iframe template
	      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
	
	      // Preload iframe before displaying it
	      // This allows to calculate iframe content width and height
	      // (note: Due to "Same Origin Policy", you can't get cross domain data).
	      preload: true,
	
	      // Custom CSS styling for iframe wrapping element
	      // You can use this to set custom iframe dimensions
	      css: {},
	
	      // Iframe tag attributes
	      attr: {
	        scrolling: "auto"
	      }
	    },
	
	    // For HTML5 video only
	    video: {
	      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
	        '<source src="{{src}}" type="{{format}}" />' +
	        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
	        "</video>",
	      format: "", // custom video format
	      autoStart: true
	    },
	
	    // Default content type if cannot be detected automatically
	    defaultType: "image",
	
	    // Open/close animation type
	    // Possible values:
	    //   false            - disable
	    //   "zoom"           - zoom images from/to thumbnail
	    //   "fade"
	    //   "zoom-in-out"
	    //
	    animationEffect: "zoom",
	
	    // Duration in ms for open/close animation
	    animationDuration: 366,
	
	    // Should image change opacity while zooming
	    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
	    zoomOpacity: "auto",
	
	    // Transition effect between slides
	    //
	    // Possible values:
	    //   false            - disable
	    //   "fade'
	    //   "slide'
	    //   "circular'
	    //   "tube'
	    //   "zoom-in-out'
	    //   "rotate'
	    //
	    transitionEffect: "fade",
	
	    // Duration in ms for transition animation
	    transitionDuration: 366,
	
	    // Custom CSS class for slide element
	    slideClass: "",
	
	    // Custom CSS class for layout
	    baseClass: "",
	
	    // Base template for layout
	    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
	      '<div class="fancybox-bg"></div>' +
	      '<div class="fancybox-inner">' +
	      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
	      '<div class="fancybox-toolbar">{{buttons}}</div>' +
	      '<div class="fancybox-navigation">{{arrows}}</div>' +
	      '<div class="fancybox-stage"></div>' +
	      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
	      "</div>" +
	      "</div>",
	
	    // Loading indicator template
	    spinnerTpl: '<div class="fancybox-loading"></div>',
	
	    // Error message template
	    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
	
	    btnTpl: {
	      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
	        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
	        "</a>",
	
	      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
	        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
	        "</button>",
	
	      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
	        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
	        "</button>",
	
	      // Arrows
	      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
	        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
	        "</button>",
	
	      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
	        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
	        "</button>",
	
	      // This small close button will be appended to your html/inline/ajax content by default,
	      // if "smallBtn" option is not set to false
	      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
	        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
	        "</button>"
	    },
	
	    // Container is injected into this element
	    parentEl: "body",
	
	    // Hide browser vertical scrollbars; use at your own risk
	    hideScrollbar: true,
	
	    // Focus handling
	    // ==============
	
	    // Try to focus on the first focusable element after opening
	    autoFocus: true,
	
	    // Put focus back to active element after closing
	    backFocus: true,
	
	    // Do not let user to focus on element outside modal content
	    trapFocus: true,
	
	    // Module specific options
	    // =======================
	
	    fullScreen: {
	      autoStart: false
	    },
	
	    // Set `touch: false` to disable panning/swiping
	    touch: {
	      vertical: true, // Allow to drag content vertically
	      momentum: true // Continue movement after releasing mouse/touch when panning
	    },
	
	    // Hash value when initializing manually,
	    // set `false` to disable hash change
	    hash: null,
	
	    // Customize or add new media types
	    // Example:
	    /*
	      media : {
	        youtube : {
	          params : {
	            autoplay : 0
	          }
	        }
	      }
	    */
	    media: {},
	
	    slideShow: {
	      autoStart: false,
	      speed: 3000
	    },
	
	    thumbs: {
	      autoStart: false, // Display thumbnails on opening
	      hideOnClose: true, // Hide thumbnail grid when closing animation starts
	      parentEl: ".fancybox-container", // Container is injected into this element
	      axis: "y" // Vertical (y) or horizontal (x) scrolling
	    },
	
	    // Use mousewheel to navigate gallery
	    // If 'auto' - enabled for images only
	    wheel: "auto",
	
	    // Callbacks
	    //==========
	
	    // See Documentation/API/Events for more information
	    // Example:
	    /*
	      afterShow: function( instance, current ) {
	        console.info( 'Clicked element:' );
	        console.info( current.opts.$orig );
	      }
	    */
	
	    onInit: $.noop, // When instance has been initialized
	
	    beforeLoad: $.noop, // Before the content of a slide is being loaded
	    afterLoad: $.noop, // When the content of a slide is done loading
	
	    beforeShow: $.noop, // Before open animation starts
	    afterShow: $.noop, // When content is done loading and animating
	
	    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
	    afterClose: $.noop, // After instance has been closed
	
	    onActivate: $.noop, // When instance is brought to front
	    onDeactivate: $.noop, // When other instance has been activated
	
	    // Interaction
	    // ===========
	
	    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
	    // each option can be string or method that returns value.
	    //
	    // Possible values:
	    //   "close"           - close instance
	    //   "next"            - move to next gallery item
	    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
	    //   "toggleControls"  - show/hide controls
	    //   "zoom"            - zoom image (if loaded)
	    //   false             - do nothing
	
	    // Clicked on the content
	    clickContent: function (current, event) {
	      return current.type === "image" ? "zoom" : false;
	    },
	
	    // Clicked on the slide
	    clickSlide: "close",
	
	    // Clicked on the background (backdrop) element;
	    // if you have not changed the layout, then most likely you need to use `clickSlide` option
	    clickOutside: "close",
	
	    // Same as previous two, but for double click
	    dblclickContent: false,
	    dblclickSlide: false,
	    dblclickOutside: false,
	
	    // Custom options when mobile device is detected
	    // =============================================
	
	    mobile: {
	      preventCaptionOverlap: false,
	      idleTime: false,
	      clickContent: function (current, event) {
	        return current.type === "image" ? "toggleControls" : false;
	      },
	      clickSlide: function (current, event) {
	        return current.type === "image" ? "toggleControls" : "close";
	      },
	      dblclickContent: function (current, event) {
	        return current.type === "image" ? "zoom" : false;
	      },
	      dblclickSlide: function (current, event) {
	        return current.type === "image" ? "zoom" : false;
	      }
	    },
	
	    // Internationalization
	    // ====================
	
	    lang: "en",
	    i18n: {
	      en: {
	        CLOSE: "Close",
	        NEXT: "Next",
	        PREV: "Previous",
	        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
	        PLAY_START: "Start slideshow",
	        PLAY_STOP: "Pause slideshow",
	        FULL_SCREEN: "Full screen",
	        THUMBS: "Thumbnails",
	        DOWNLOAD: "Download",
	        SHARE: "Share",
	        ZOOM: "Zoom"
	      },
	      de: {
	        CLOSE: "Schlie&szlig;en",
	        NEXT: "Weiter",
	        PREV: "Zur&uuml;ck",
	        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
	        PLAY_START: "Diaschau starten",
	        PLAY_STOP: "Diaschau beenden",
	        FULL_SCREEN: "Vollbild",
	        THUMBS: "Vorschaubilder",
	        DOWNLOAD: "Herunterladen",
	        SHARE: "Teilen",
	        ZOOM: "Vergr&ouml;&szlig;ern"
	      }
	    }
	  };
	
	  // Few useful variables and methods
	  // ================================
	
	  var $W = $(window);
	  var $D = $(document);
	
	  var called = 0;
	
	  // Check if an object is a jQuery object and not a native JavaScript object
	  // ========================================================================
	  var isQuery = function (obj) {
	    return obj && obj.hasOwnProperty && obj instanceof $;
	  };
	
	  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
	  // ===============================================================================
	  var requestAFrame = (function () {
	    return (
	      window.requestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.oRequestAnimationFrame ||
	      // if all else fails, use setTimeout
	      function (callback) {
	        return window.setTimeout(callback, 1000 / 60);
	      }
	    );
	  })();
	
	  var cancelAFrame = (function () {
	    return (
	      window.cancelAnimationFrame ||
	      window.webkitCancelAnimationFrame ||
	      window.mozCancelAnimationFrame ||
	      window.oCancelAnimationFrame ||
	      function (id) {
	        window.clearTimeout(id);
	      }
	    );
	  })();
	
	  // Detect the supported transition-end event property name
	  // =======================================================
	  var transitionEnd = (function () {
	    var el = document.createElement("fakeelement"),
	      t;
	
	    var transitions = {
	      transition: "transitionend",
	      OTransition: "oTransitionEnd",
	      MozTransition: "transitionend",
	      WebkitTransition: "webkitTransitionEnd"
	    };
	
	    for (t in transitions) {
	      if (el.style[t] !== undefined) {
	        return transitions[t];
	      }
	    }
	
	    return "transitionend";
	  })();
	
	  // Force redraw on an element.
	  // This helps in cases where the browser doesn't redraw an updated element properly
	  // ================================================================================
	  var forceRedraw = function ($el) {
	    return $el && $el.length && $el[0].offsetHeight;
	  };
	
	  // Exclude array (`buttons`) options from deep merging
	  // ===================================================
	  var mergeOpts = function (opts1, opts2) {
	    var rez = $.extend(true, {}, opts1, opts2);
	
	    $.each(opts2, (function (key, value) {
	      if ($.isArray(value)) {
	        rez[key] = value;
	      }
	    }));
	
	    return rez;
	  };
	
	  // How much of an element is visible in viewport
	  // =============================================
	
	  var inViewport = function (elem) {
	    var elemCenter, rez;
	
	    if (!elem || elem.ownerDocument !== document) {
	      return false;
	    }
	
	    $(".fancybox-container").css("pointer-events", "none");
	
	    elemCenter = {
	      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
	      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
	    };
	
	    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
	
	    $(".fancybox-container").css("pointer-events", "");
	
	    return rez;
	  };
	
	  // Class definition
	  // ================
	
	  var FancyBox = function (content, opts, index) {
	    var self = this;
	
	    self.opts = mergeOpts({
	      index: index
	    }, $.fancybox.defaults);
	
	    if ($.isPlainObject(opts)) {
	      self.opts = mergeOpts(self.opts, opts);
	    }
	
	    if ($.fancybox.isMobile) {
	      self.opts = mergeOpts(self.opts, self.opts.mobile);
	    }
	
	    self.id = self.opts.id || ++called;
	
	    self.currIndex = parseInt(self.opts.index, 10) || 0;
	    self.prevIndex = null;
	
	    self.prevPos = null;
	    self.currPos = 0;
	
	    self.firstRun = true;
	
	    // All group items
	    self.group = [];
	
	    // Existing slides (for current, next and previous gallery items)
	    self.slides = {};
	
	    // Create group elements
	    self.addContent(content);
	
	    if (!self.group.length) {
	      return;
	    }
	
	    self.init();
	  };
	
	  $.extend(FancyBox.prototype, {
	    // Create DOM structure
	    // ====================
	
	    init: function () {
	      var self = this,
	        firstItem = self.group[self.currIndex],
	        firstItemOpts = firstItem.opts,
	        $container,
	        buttonStr;
	
	      if (firstItemOpts.closeExisting) {
	        $.fancybox.close(true);
	      }
	
	      // Hide scrollbars
	      // ===============
	
	      $("body").addClass("fancybox-active");
	
	      if (
	        !$.fancybox.getInstance() &&
	        firstItemOpts.hideScrollbar !== false &&
	        !$.fancybox.isMobile &&
	        document.body.scrollHeight > window.innerHeight
	      ) {
	        $("head").append(
	          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
	          (window.innerWidth - document.documentElement.clientWidth) +
	          "px;}</style>"
	        );
	
	        $("body").addClass("compensate-for-scrollbar");
	      }
	
	      // Build html markup and set references
	      // ====================================
	
	      // Build html code for buttons and insert into main template
	      buttonStr = "";
	
	      $.each(firstItemOpts.buttons, (function (index, value) {
	        buttonStr += firstItemOpts.btnTpl[value] || "";
	      }));
	
	      // Create markup from base template, it will be initially hidden to
	      // avoid unnecessary work like painting while initializing is not complete
	      $container = $(
	          self.translate(
	            self,
	            firstItemOpts.baseTpl
	            .replace("{{buttons}}", buttonStr)
	            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
	          )
	        )
	        .attr("id", "fancybox-container-" + self.id)
	        .addClass(firstItemOpts.baseClass)
	        .data("FancyBox", self)
	        .appendTo(firstItemOpts.parentEl);
	
	      // Create object holding references to jQuery wrapped nodes
	      self.$refs = {
	        container: $container
	      };
	
	      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function (item) {
	        self.$refs[item] = $container.find(".fancybox-" + item);
	      }));
	
	      self.trigger("onInit");
	
	      // Enable events, deactive previous instances
	      self.activate();
	
	      // Build slides, load and reveal content
	      self.jumpTo(self.currIndex);
	    },
	
	    // Simple i18n support - replaces object keys found in template
	    // with corresponding values
	    // ============================================================
	
	    translate: function (obj, str) {
	      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
	
	      return str.replace(/\{\{(\w+)\}\}/g, (function (match, n) {
	        return arr[n] === undefined ? match : arr[n];
	      }));
	    },
	
	    // Populate current group with fresh content
	    // Check if each object has valid type and content
	    // ===============================================
	
	    addContent: function (content) {
	      var self = this,
	        items = $.makeArray(content),
	        thumbs;
	
	      $.each(items, (function (i, item) {
	        var obj = {},
	          opts = {},
	          $item,
	          type,
	          found,
	          src,
	          srcParts;
	
	        // Step 1 - Make sure we have an object
	        // ====================================
	
	        if ($.isPlainObject(item)) {
	          // We probably have manual usage here, something like
	          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )
	
	          obj = item;
	          opts = item.opts || item;
	        } else if ($.type(item) === "object" && $(item).length) {
	          // Here we probably have jQuery collection returned by some selector
	          $item = $(item);
	
	          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
	          opts = $item.data() || {};
	          opts = $.extend(true, {}, opts, opts.options);
	
	          // Here we store clicked element
	          opts.$orig = $item;
	
	          obj.src = self.opts.src || opts.src || $item.attr("href");
	
	          // Assume that simple syntax is used, for example:
	          //   `$.fancybox.open( $("#test"), {} );`
	          if (!obj.type && !obj.src) {
	            obj.type = "inline";
	            obj.src = item;
	          }
	        } else {
	          // Assume we have a simple html code, for example:
	          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
	          obj = {
	            type: "html",
	            src: item + ""
	          };
	        }
	
	        // Each gallery object has full collection of options
	        obj.opts = $.extend(true, {}, self.opts, opts);
	
	        // Do not merge buttons array
	        if ($.isArray(opts.buttons)) {
	          obj.opts.buttons = opts.buttons;
	        }
	
	        if ($.fancybox.isMobile && obj.opts.mobile) {
	          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
	        }
	
	        // Step 2 - Make sure we have content type, if not - try to guess
	        // ==============================================================
	
	        type = obj.type || obj.opts.type;
	        src = obj.src || "";
	
	        if (!type && src) {
	          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
	            type = "video";
	
	            if (!obj.opts.video.format) {
	              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
	            }
	          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
	            type = "image";
	          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
	            type = "iframe";
	            obj = $.extend(true, obj, {
	              contentType: "pdf",
	              opts: {
	                iframe: {
	                  preload: false
	                }
	              }
	            });
	          } else if (src.charAt(0) === "#") {
	            type = "inline";
	          }
	        }
	
	        if (type) {
	          obj.type = type;
	        } else {
	          self.trigger("objectNeedsType", obj);
	        }
	
	        if (!obj.contentType) {
	          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
	        }
	
	        // Step 3 - Some adjustments
	        // =========================
	
	        obj.index = self.group.length;
	
	        if (obj.opts.smallBtn == "auto") {
	          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
	        }
	
	        if (obj.opts.toolbar === "auto") {
	          obj.opts.toolbar = !obj.opts.smallBtn;
	        }
	
	        // Find thumbnail image, check if exists and if is in the viewport
	        obj.$thumb = obj.opts.$thumb || null;
	
	        if (obj.opts.$trigger && obj.index === self.opts.index) {
	          obj.$thumb = obj.opts.$trigger.find("img:first");
	
	          if (obj.$thumb.length) {
	            obj.opts.$orig = obj.opts.$trigger;
	          }
	        }
	
	        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
	          obj.$thumb = obj.opts.$orig.find("img:first");
	        }
	
	        if (obj.$thumb && !obj.$thumb.length) {
	          obj.$thumb = null;
	        }
	
	        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);
	
	        // "caption" is a "special" option, it can be used to customize caption per gallery item
	        if ($.type(obj.opts.caption) === "function") {
	          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
	        }
	
	        if ($.type(self.opts.caption) === "function") {
	          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
	        }
	
	        // Make sure we have caption as a string or jQuery object
	        if (!(obj.opts.caption instanceof $)) {
	          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
	        }
	
	        // Check if url contains "filter" used to filter the content
	        // Example: "ajax.html #something"
	        if (obj.type === "ajax") {
	          srcParts = src.split(/\s+/, 2);
	
	          if (srcParts.length > 1) {
	            obj.src = srcParts.shift();
	
	            obj.opts.filter = srcParts.shift();
	          }
	        }
	
	        // Hide all buttons and disable interactivity for modal items
	        if (obj.opts.modal) {
	          obj.opts = $.extend(true, obj.opts, {
	            trapFocus: true,
	            // Remove buttons
	            infobar: 0,
	            toolbar: 0,
	
	            smallBtn: 0,
	
	            // Disable keyboard navigation
	            keyboard: 0,
	
	            // Disable some modules
	            slideShow: 0,
	            fullScreen: 0,
	            thumbs: 0,
	            touch: 0,
	
	            // Disable click event handlers
	            clickContent: false,
	            clickSlide: false,
	            clickOutside: false,
	            dblclickContent: false,
	            dblclickSlide: false,
	            dblclickOutside: false
	          });
	        }
	
	        // Step 4 - Add processed object to group
	        // ======================================
	
	        self.group.push(obj);
	      }));
	
	      // Update controls if gallery is already opened
	      if (Object.keys(self.slides).length) {
	        self.updateControls();
	
	        // Update thumbnails, if needed
	        thumbs = self.Thumbs;
	
	        if (thumbs && thumbs.isActive) {
	          thumbs.create();
	
	          thumbs.focus();
	        }
	      }
	    },
	
	    // Attach an event handler functions for:
	    //   - navigation buttons
	    //   - browser scrolling, resizing;
	    //   - focusing
	    //   - keyboard
	    //   - detecting inactivity
	    // ======================================
	
	    addEvents: function () {
	      var self = this;
	
	      self.removeEvents();
	
	      // Make navigation elements clickable
	      // ==================================
	
	      self.$refs.container
	        .on("click.fb-close", "[data-fancybox-close]", (function (e) {
	          e.stopPropagation();
	          e.preventDefault();
	
	          self.close(e);
	        }))
	        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function (e) {
	          e.stopPropagation();
	          e.preventDefault();
	
	          self.previous();
	        }))
	        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function (e) {
	          e.stopPropagation();
	          e.preventDefault();
	
	          self.next();
	        }))
	        .on("click.fb", "[data-fancybox-zoom]", (function (e) {
	          // Click handler for zoom button
	          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
	        }));
	
	      // Handle page scrolling and browser resizing
	      // ==========================================
	
	      $W.on("orientationchange.fb resize.fb", (function (e) {
	        if (e && e.originalEvent && e.originalEvent.type === "resize") {
	          if (self.requestId) {
	            cancelAFrame(self.requestId);
	          }
	
	          self.requestId = requestAFrame((function () {
	            self.update(e);
	          }));
	        } else {
	          if (self.current && self.current.type === "iframe") {
	            self.$refs.stage.hide();
	          }
	
	          setTimeout(
	            (function () {
	              self.$refs.stage.show();
	
	              self.update(e);
	            }),
	            $.fancybox.isMobile ? 600 : 250
	          );
	        }
	      }));
	
	      $D.on("keydown.fb", (function (e) {
	        var instance = $.fancybox ? $.fancybox.getInstance() : null,
	          current = instance.current,
	          keycode = e.keyCode || e.which;
	
	        // Trap keyboard focus inside of the modal
	        // =======================================
	
	        if (keycode == 9) {
	          if (current.opts.trapFocus) {
	            self.focus(e);
	          }
	
	          return;
	        }
	
	        // Enable keyboard navigation
	        // ==========================
	
	        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
	          return;
	        }
	
	        // Backspace and Esc keys
	        if (keycode === 8 || keycode === 27) {
	          e.preventDefault();
	
	          self.close(e);
	
	          return;
	        }
	
	        // Left arrow and Up arrow
	        if (keycode === 37 || keycode === 38) {
	          e.preventDefault();
	
	          self.previous();
	
	          return;
	        }
	
	        // Righ arrow and Down arrow
	        if (keycode === 39 || keycode === 40) {
	          e.preventDefault();
	
	          self.next();
	
	          return;
	        }
	
	        self.trigger("afterKeydown", e, keycode);
	      }));
	
	      // Hide controls after some inactivity period
	      if (self.group[self.currIndex].opts.idleTime) {
	        self.idleSecondsCounter = 0;
	
	        $D.on(
	          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
	          (function (e) {
	            self.idleSecondsCounter = 0;
	
	            if (self.isIdle) {
	              self.showControls();
	            }
	
	            self.isIdle = false;
	          })
	        );
	
	        self.idleInterval = window.setInterval((function () {
	          self.idleSecondsCounter++;
	
	          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
	            self.isIdle = true;
	            self.idleSecondsCounter = 0;
	
	            self.hideControls();
	          }
	        }), 1000);
	      }
	    },
	
	    // Remove events added by the core
	    // ===============================
	
	    removeEvents: function () {
	      var self = this;
	
	      $W.off("orientationchange.fb resize.fb");
	      $D.off("keydown.fb .fb-idle");
	
	      this.$refs.container.off(".fb-close .fb-prev .fb-next");
	
	      if (self.idleInterval) {
	        window.clearInterval(self.idleInterval);
	
	        self.idleInterval = null;
	      }
	    },
	
	    // Change to previous gallery item
	    // ===============================
	
	    previous: function (duration) {
	      return this.jumpTo(this.currPos - 1, duration);
	    },
	
	    // Change to next gallery item
	    // ===========================
	
	    next: function (duration) {
	      return this.jumpTo(this.currPos + 1, duration);
	    },
	
	    // Switch to selected gallery item
	    // ===============================
	
	    jumpTo: function (pos, duration) {
	      var self = this,
	        groupLen = self.group.length,
	        firstRun,
	        isMoved,
	        loop,
	        current,
	        previous,
	        slidePos,
	        stagePos,
	        prop,
	        diff;
	
	      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
	        return;
	      }
	
	      // Should loop?
	      pos = parseInt(pos, 10);
	      loop = self.current ? self.current.opts.loop : self.opts.loop;
	
	      if (!loop && (pos < 0 || pos >= groupLen)) {
	        return false;
	      }
	
	      // Check if opening for the first time; this helps to speed things up
	      firstRun = self.firstRun = !Object.keys(self.slides).length;
	
	      // Create slides
	      previous = self.current;
	
	      self.prevIndex = self.currIndex;
	      self.prevPos = self.currPos;
	
	      current = self.createSlide(pos);
	
	      if (groupLen > 1) {
	        if (loop || current.index < groupLen - 1) {
	          self.createSlide(pos + 1);
	        }
	
	        if (loop || current.index > 0) {
	          self.createSlide(pos - 1);
	        }
	      }
	
	      self.current = current;
	      self.currIndex = current.index;
	      self.currPos = current.pos;
	
	      self.trigger("beforeShow", firstRun);
	
	      self.updateControls();
	
	      // Validate duration length
	      current.forcedDuration = undefined;
	
	      if ($.isNumeric(duration)) {
	        current.forcedDuration = duration;
	      } else {
	        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
	      }
	
	      duration = parseInt(duration, 10);
	
	      // Check if user has swiped the slides or if still animating
	      isMoved = self.isMoved(current);
	
	      // Make sure current slide is visible
	      current.$slide.addClass("fancybox-slide--current");
	
	      // Fresh start - reveal container, current slide and start loading content
	      if (firstRun) {
	        if (current.opts.animationEffect && duration) {
	          self.$refs.container.css("transition-duration", duration + "ms");
	        }
	
	        self.$refs.container.addClass("fancybox-is-open").trigger("focus");
	
	        // Attempt to load content into slide
	        // This will later call `afterLoad` -> `revealContent`
	        self.loadSlide(current);
	
	        self.preload("image");
	
	        return;
	      }
	
	      // Get actual slide/stage positions (before cleaning up)
	      slidePos = $.fancybox.getTranslate(previous.$slide);
	      stagePos = $.fancybox.getTranslate(self.$refs.stage);
	
	      // Clean up all slides
	      $.each(self.slides, (function (index, slide) {
	        $.fancybox.stop(slide.$slide, true);
	      }));
	
	      if (previous.pos !== current.pos) {
	        previous.isComplete = false;
	      }
	
	      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
	
	      // If slides are out of place, then animate them to correct position
	      if (isMoved) {
	        // Calculate horizontal swipe distance
	        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
	
	        $.each(self.slides, (function (index, slide) {
	          slide.$slide.removeClass("fancybox-animated").removeClass((function (index, className) {
	            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
	          }));
	
	          // Make sure that each slide is in equal distance
	          // This is mostly needed for freshly added slides, because they are not yet positioned
	          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
	
	          $.fancybox.setTranslate(slide.$slide, {
	            top: 0,
	            left: leftPos - stagePos.left + diff
	          });
	
	          if (slide.pos !== current.pos) {
	            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
	          }
	
	          // Redraw to make sure that transition will start
	          forceRedraw(slide.$slide);
	
	          // Animate the slide
	          $.fancybox.animate(
	            slide.$slide, {
	              top: 0,
	              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
	            },
	            duration,
	            (function () {
	              slide.$slide
	                .css({
	                  transform: "",
	                  opacity: ""
	                })
	                .removeClass("fancybox-slide--next fancybox-slide--previous");
	
	              if (slide.pos === self.currPos) {
	                self.complete();
	              }
	            })
	          );
	        }));
	      } else if (duration && current.opts.transitionEffect) {
	        // Set transition effect for previously active slide
	        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
	
	        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
	
	        $.fancybox.animate(
	          previous.$slide,
	          prop,
	          duration,
	          (function () {
	            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
	          }),
	          false
	        );
	      }
	
	      if (current.isLoaded) {
	        self.revealContent(current);
	      } else {
	        self.loadSlide(current);
	      }
	
	      self.preload("image");
	    },
	
	    // Create new "slide" element
	    // These are gallery items  that are actually added to DOM
	    // =======================================================
	
	    createSlide: function (pos) {
	      var self = this,
	        $slide,
	        index;
	
	      index = pos % self.group.length;
	      index = index < 0 ? self.group.length + index : index;
	
	      if (!self.slides[pos] && self.group[index]) {
	        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
	
	        self.slides[pos] = $.extend(true, {}, self.group[index], {
	          pos: pos,
	          $slide: $slide,
	          isLoaded: false
	        });
	
	        self.updateSlide(self.slides[pos]);
	      }
	
	      return self.slides[pos];
	    },
	
	    // Scale image to the actual size of the image;
	    // x and y values should be relative to the slide
	    // ==============================================
	
	    scaleToActual: function (x, y, duration) {
	      var self = this,
	        current = self.current,
	        $content = current.$content,
	        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
	        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
	        newImgWidth = current.width,
	        newImgHeight = current.height,
	        imgPos,
	        posX,
	        posY,
	        scaleX,
	        scaleY;
	
	      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
	        return;
	      }
	
	      self.isAnimating = true;
	
	      $.fancybox.stop($content);
	
	      x = x === undefined ? canvasWidth * 0.5 : x;
	      y = y === undefined ? canvasHeight * 0.5 : y;
	
	      imgPos = $.fancybox.getTranslate($content);
	
	      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
	      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
	
	      scaleX = newImgWidth / imgPos.width;
	      scaleY = newImgHeight / imgPos.height;
	
	      // Get center position for original image
	      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
	      posY = canvasHeight * 0.5 - newImgHeight * 0.5;
	
	      // Make sure image does not move away from edges
	      if (newImgWidth > canvasWidth) {
	        posX = imgPos.left * scaleX - (x * scaleX - x);
	
	        if (posX > 0) {
	          posX = 0;
	        }
	
	        if (posX < canvasWidth - newImgWidth) {
	          posX = canvasWidth - newImgWidth;
	        }
	      }
	
	      if (newImgHeight > canvasHeight) {
	        posY = imgPos.top * scaleY - (y * scaleY - y);
	
	        if (posY > 0) {
	          posY = 0;
	        }
	
	        if (posY < canvasHeight - newImgHeight) {
	          posY = canvasHeight - newImgHeight;
	        }
	      }
	
	      self.updateCursor(newImgWidth, newImgHeight);
	
	      $.fancybox.animate(
	        $content, {
	          top: posY,
	          left: posX,
	          scaleX: scaleX,
	          scaleY: scaleY
	        },
	        duration || 366,
	        (function () {
	          self.isAnimating = false;
	        })
	      );
	
	      // Stop slideshow
	      if (self.SlideShow && self.SlideShow.isActive) {
	        self.SlideShow.stop();
	      }
	    },
	
	    // Scale image to fit inside parent element
	    // ========================================
	
	    scaleToFit: function (duration) {
	      var self = this,
	        current = self.current,
	        $content = current.$content,
	        end;
	
	      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
	        return;
	      }
	
	      self.isAnimating = true;
	
	      $.fancybox.stop($content);
	
	      end = self.getFitPos(current);
	
	      self.updateCursor(end.width, end.height);
	
	      $.fancybox.animate(
	        $content, {
	          top: end.top,
	          left: end.left,
	          scaleX: end.width / $content.width(),
	          scaleY: end.height / $content.height()
	        },
	        duration || 366,
	        (function () {
	          self.isAnimating = false;
	        })
	      );
	    },
	
	    // Calculate image size to fit inside viewport
	    // ===========================================
	
	    getFitPos: function (slide) {
	      var self = this,
	        $content = slide.$content,
	        $slide = slide.$slide,
	        width = slide.width || slide.opts.width,
	        height = slide.height || slide.opts.height,
	        maxWidth,
	        maxHeight,
	        minRatio,
	        aspectRatio,
	        rez = {};
	
	      if (!slide.isLoaded || !$content || !$content.length) {
	        return false;
	      }
	
	      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
	      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
	
	      maxWidth -=
	        parseFloat($slide.css("paddingLeft")) +
	        parseFloat($slide.css("paddingRight")) +
	        parseFloat($content.css("marginLeft")) +
	        parseFloat($content.css("marginRight"));
	
	      maxHeight -=
	        parseFloat($slide.css("paddingTop")) +
	        parseFloat($slide.css("paddingBottom")) +
	        parseFloat($content.css("marginTop")) +
	        parseFloat($content.css("marginBottom"));
	
	      if (!width || !height) {
	        width = maxWidth;
	        height = maxHeight;
	      }
	
	      minRatio = Math.min(1, maxWidth / width, maxHeight / height);
	
	      width = minRatio * width;
	      height = minRatio * height;
	
	      // Adjust width/height to precisely fit into container
	      if (width > maxWidth - 0.5) {
	        width = maxWidth;
	      }
	
	      if (height > maxHeight - 0.5) {
	        height = maxHeight;
	      }
	
	      if (slide.type === "image") {
	        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
	        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
	      } else if (slide.contentType === "video") {
	        // Force aspect ratio for the video
	        // "I say the whole world must learn of our peaceful ways… by force!"
	        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;
	
	        if (height > width / aspectRatio) {
	          height = width / aspectRatio;
	        } else if (width > height * aspectRatio) {
	          width = height * aspectRatio;
	        }
	      }
	
	      rez.width = width;
	      rez.height = height;
	
	      return rez;
	    },
	
	    // Update content size and position for all slides
	    // ==============================================
	
	    update: function (e) {
	      var self = this;
	
	      $.each(self.slides, (function (key, slide) {
	        self.updateSlide(slide, e);
	      }));
	    },
	
	    // Update slide content position and size
	    // ======================================
	
	    updateSlide: function (slide, e) {
	      var self = this,
	        $content = slide && slide.$content,
	        width = slide.width || slide.opts.width,
	        height = slide.height || slide.opts.height,
	        $slide = slide.$slide;
	
	      // First, prevent caption overlap, if needed
	      self.adjustCaption(slide);
	
	      // Then resize content to fit inside the slide
	      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
	        $.fancybox.stop($content);
	
	        $.fancybox.setTranslate($content, self.getFitPos(slide));
	
	        if (slide.pos === self.currPos) {
	          self.isAnimating = false;
	
	          self.updateCursor();
	        }
	      }
	
	      // Then some adjustments
	      self.adjustLayout(slide);
	
	      if ($slide.length) {
	        $slide.trigger("refresh");
	
	        if (slide.pos === self.currPos) {
	          self.$refs.toolbar
	            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
	            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
	        }
	      }
	
	      self.trigger("onUpdate", slide, e);
	    },
	
	    // Horizontally center slide
	    // =========================
	
	    centerSlide: function (duration) {
	      var self = this,
	        current = self.current,
	        $slide = current.$slide;
	
	      if (self.isClosing || !current) {
	        return;
	      }
	
	      $slide.siblings().css({
	        transform: "",
	        opacity: ""
	      });
	
	      $slide
	        .parent()
	        .children()
	        .removeClass("fancybox-slide--previous fancybox-slide--next");
	
	      $.fancybox.animate(
	        $slide, {
	          top: 0,
	          left: 0,
	          opacity: 1
	        },
	        duration === undefined ? 0 : duration,
	        (function () {
	          // Clean up
	          $slide.css({
	            transform: "",
	            opacity: ""
	          });
	
	          if (!current.isComplete) {
	            self.complete();
	          }
	        }),
	        false
	      );
	    },
	
	    // Check if current slide is moved (swiped)
	    // ========================================
	
	    isMoved: function (slide) {
	      var current = slide || this.current,
	        slidePos,
	        stagePos;
	
	      if (!current) {
	        return false;
	      }
	
	      stagePos = $.fancybox.getTranslate(this.$refs.stage);
	      slidePos = $.fancybox.getTranslate(current.$slide);
	
	      return (
	        !current.$slide.hasClass("fancybox-animated") &&
	        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
	      );
	    },
	
	    // Update cursor style depending if content can be zoomed
	    // ======================================================
	
	    updateCursor: function (nextWidth, nextHeight) {
	      var self = this,
	        current = self.current,
	        $container = self.$refs.container,
	        canPan,
	        isZoomable;
	
	      if (!current || self.isClosing || !self.Guestures) {
	        return;
	      }
	
	      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
	
	      canPan = self.canPan(nextWidth, nextHeight);
	
	      isZoomable = canPan ? true : self.isZoomable();
	
	      $container.toggleClass("fancybox-is-zoomable", isZoomable);
	
	      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);
	
	      if (canPan) {
	        $container.addClass("fancybox-can-pan");
	      } else if (
	        isZoomable &&
	        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
	      ) {
	        $container.addClass("fancybox-can-zoomIn");
	      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
	        $container.addClass("fancybox-can-swipe");
	      }
	    },
	
	    // Check if current slide is zoomable
	    // ==================================
	
	    isZoomable: function () {
	      var self = this,
	        current = self.current,
	        fitPos;
	
	      // Assume that slide is zoomable if:
	      //   - image is still loading
	      //   - actual size of the image is smaller than available area
	      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
	        if (!current.isLoaded) {
	          return true;
	        }
	
	        fitPos = self.getFitPos(current);
	
	        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
	          return true;
	        }
	      }
	
	      return false;
	    },
	
	    // Check if current image dimensions are smaller than actual
	    // =========================================================
	
	    isScaledDown: function (nextWidth, nextHeight) {
	      var self = this,
	        rez = false,
	        current = self.current,
	        $content = current.$content;
	
	      if (nextWidth !== undefined && nextHeight !== undefined) {
	        rez = nextWidth < current.width && nextHeight < current.height;
	      } else if ($content) {
	        rez = $.fancybox.getTranslate($content);
	        rez = rez.width < current.width && rez.height < current.height;
	      }
	
	      return rez;
	    },
	
	    // Check if image dimensions exceed parent element
	    // ===============================================
	
	    canPan: function (nextWidth, nextHeight) {
	      var self = this,
	        current = self.current,
	        pos = null,
	        rez = false;
	
	      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
	        rez = self.getFitPos(current);
	
	        if (nextWidth !== undefined && nextHeight !== undefined) {
	          pos = {
	            width: nextWidth,
	            height: nextHeight
	          };
	        } else if (current.isComplete) {
	          pos = $.fancybox.getTranslate(current.$content);
	        }
	
	        if (pos && rez) {
	          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
	        }
	      }
	
	      return rez;
	    },
	
	    // Load content into the slide
	    // ===========================
	
	    loadSlide: function (slide) {
	      var self = this,
	        type,
	        $slide,
	        ajaxLoad;
	
	      if (slide.isLoading || slide.isLoaded) {
	        return;
	      }
	
	      slide.isLoading = true;
	
	      if (self.trigger("beforeLoad", slide) === false) {
	        slide.isLoading = false;
	
	        return false;
	      }
	
	      type = slide.type;
	      $slide = slide.$slide;
	
	      $slide
	        .off("refresh")
	        .trigger("onReset")
	        .addClass(slide.opts.slideClass);
	
	      // Create content depending on the type
	      switch (type) {
	        case "image":
	          self.setImage(slide);
	
	          break;
	
	        case "iframe":
	          self.setIframe(slide);
	
	          break;
	
	        case "html":
	          self.setContent(slide, slide.src || slide.content);
	
	          break;
	
	        case "video":
	          self.setContent(
	            slide,
	            slide.opts.video.tpl
	            .replace(/\{\{src\}\}/gi, slide.src)
	            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
	            .replace("{{poster}}", slide.thumb || "")
	          );
	
	          break;
	
	        case "inline":
	          if ($(slide.src).length) {
	            self.setContent(slide, $(slide.src));
	          } else {
	            self.setError(slide);
	          }
	
	          break;
	
	        case "ajax":
	          self.showLoading(slide);
	
	          ajaxLoad = $.ajax(
	            $.extend({}, slide.opts.ajax.settings, {
	              url: slide.src,
	              success: function (data, textStatus) {
	                if (textStatus === "success") {
	                  self.setContent(slide, data);
	                }
	              },
	              error: function (jqXHR, textStatus) {
	                if (jqXHR && textStatus !== "abort") {
	                  self.setError(slide);
	                }
	              }
	            })
	          );
	
	          $slide.one("onReset", (function () {
	            ajaxLoad.abort();
	          }));
	
	          break;
	
	        default:
	          self.setError(slide);
	
	          break;
	      }
	
	      return true;
	    },
	
	    // Use thumbnail image, if possible
	    // ================================
	
	    setImage: function (slide) {
	      var self = this,
	        ghost;
	
	      // Check if need to show loading icon
	      setTimeout((function () {
	        var $img = slide.$image;
	
	        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
	          self.showLoading(slide);
	        }
	      }), 50);
	
	      //Check if image has srcset
	      self.checkSrcset(slide);
	
	      // This will be wrapper containing both ghost and actual image
	      slide.$content = $('<div class="fancybox-content"></div>')
	        .addClass("fancybox-is-hidden")
	        .appendTo(slide.$slide.addClass("fancybox-slide--image"));
	
	      // If we have a thumbnail, we can display it while actual image is loading
	      // Users will not stare at black screen and actual image will appear gradually
	      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
	        slide.width = slide.opts.width;
	        slide.height = slide.opts.height;
	
	        ghost = document.createElement("img");
	
	        ghost.onerror = function () {
	          $(this).remove();
	
	          slide.$ghost = null;
	        };
	
	        ghost.onload = function () {
	          self.afterLoad(slide);
	        };
	
	        slide.$ghost = $(ghost)
	          .addClass("fancybox-image")
	          .appendTo(slide.$content)
	          .attr("src", slide.thumb);
	      }
	
	      // Start loading actual image
	      self.setBigImage(slide);
	    },
	
	    // Check if image has srcset and get the source
	    // ============================================
	    checkSrcset: function (slide) {
	      var srcset = slide.opts.srcset || slide.opts.image.srcset,
	        found,
	        temp,
	        pxRatio,
	        windowWidth;
	
	      // If we have "srcset", then we need to find first matching "src" value.
	      // This is necessary, because when you set an src attribute, the browser will preload the image
	      // before any javascript or even CSS is applied.
	      if (srcset) {
	        pxRatio = window.devicePixelRatio || 1;
	        windowWidth = window.innerWidth * pxRatio;
	
	        temp = srcset.split(",").map((function (el) {
	          var ret = {};
	
	          el.trim()
	            .split(/\s+/)
	            .forEach((function (el, i) {
	              var value = parseInt(el.substring(0, el.length - 1), 10);
	
	              if (i === 0) {
	                return (ret.url = el);
	              }
	
	              if (value) {
	                ret.value = value;
	                ret.postfix = el[el.length - 1];
	              }
	            }));
	
	          return ret;
	        }));
	
	        // Sort by value
	        temp.sort((function (a, b) {
	          return a.value - b.value;
	        }));
	
	        // Ok, now we have an array of all srcset values
	        for (var j = 0; j < temp.length; j++) {
	          var el = temp[j];
	
	          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
	            found = el;
	            break;
	          }
	        }
	
	        // If not found, take the last one
	        if (!found && temp.length) {
	          found = temp[temp.length - 1];
	        }
	
	        if (found) {
	          slide.src = found.url;
	
	          // If we have default width/height values, we can calculate height for matching source
	          if (slide.width && slide.height && found.postfix == "w") {
	            slide.height = (slide.width / slide.height) * found.value;
	            slide.width = found.value;
	          }
	
	          slide.opts.srcset = srcset;
	        }
	      }
	    },
	
	    // Create full-size image
	    // ======================
	
	    setBigImage: function (slide) {
	      var self = this,
	        img = document.createElement("img"),
	        $img = $(img);
	
	      slide.$image = $img
	        .one("error", (function () {
	          self.setError(slide);
	        }))
	        .one("load", (function () {
	          var sizes;
	
	          if (!slide.$ghost) {
	            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
	
	            self.afterLoad(slide);
	          }
	
	          if (self.isClosing) {
	            return;
	          }
	
	          if (slide.opts.srcset) {
	            sizes = slide.opts.sizes;
	
	            if (!sizes || sizes === "auto") {
	              sizes =
	                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
	                "vw";
	            }
	
	            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
	          }
	
	          // Hide temporary image after some delay
	          if (slide.$ghost) {
	            setTimeout((function () {
	              if (slide.$ghost && !self.isClosing) {
	                slide.$ghost.hide();
	              }
	            }), Math.min(300, Math.max(1000, slide.height / 1600)));
	          }
	
	          self.hideLoading(slide);
	        }))
	        .addClass("fancybox-image")
	        .attr("src", slide.src)
	        .appendTo(slide.$content);
	
	      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
	        $img.trigger("load");
	      } else if (img.error) {
	        $img.trigger("error");
	      }
	    },
	
	    // Computes the slide size from image size and maxWidth/maxHeight
	    // ==============================================================
	
	    resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
	      var maxWidth = parseInt(slide.opts.width, 10),
	        maxHeight = parseInt(slide.opts.height, 10);
	
	      // Sets the default values from the image
	      slide.width = imgWidth;
	      slide.height = imgHeight;
	
	      if (maxWidth > 0) {
	        slide.width = maxWidth;
	        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
	      }
	
	      if (maxHeight > 0) {
	        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
	        slide.height = maxHeight;
	      }
	    },
	
	    // Create iframe wrapper, iframe and bindings
	    // ==========================================
	
	    setIframe: function (slide) {
	      var self = this,
	        opts = slide.opts.iframe,
	        $slide = slide.$slide,
	        $iframe;
	
	      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
	        .css(opts.css)
	        .appendTo($slide);
	
	      $slide.addClass("fancybox-slide--" + slide.contentType);
	
	      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
	        .attr(opts.attr)
	        .appendTo(slide.$content);
	
	      if (opts.preload) {
	        self.showLoading(slide);
	
	        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
	        // (due to browser security policy)
	
	        $iframe.on("load.fb error.fb", (function (e) {
	          this.isReady = 1;
	
	          slide.$slide.trigger("refresh");
	
	          self.afterLoad(slide);
	        }));
	
	        // Recalculate iframe content size
	        // ===============================
	
	        $slide.on("refresh.fb", (function () {
	          var $content = slide.$content,
	            frameWidth = opts.css.width,
	            frameHeight = opts.css.height,
	            $contents,
	            $body;
	
	          if ($iframe[0].isReady !== 1) {
	            return;
	          }
	
	          try {
	            $contents = $iframe.contents();
	            $body = $contents.find("body");
	          } catch (ignore) {}
	
	          // Calculate content dimensions, if it is accessible
	          if ($body && $body.length && $body.children().length) {
	            // Avoid scrolling to top (if multiple instances)
	            $slide.css("overflow", "visible");
	
	            $content.css({
	              width: "100%",
	              "max-width": "100%",
	              height: "9999px"
	            });
	
	            if (frameWidth === undefined) {
	              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
	            }
	
	            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");
	
	            if (frameHeight === undefined) {
	              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
	            }
	
	            $content.css("height", frameHeight ? frameHeight : "");
	
	            $slide.css("overflow", "auto");
	          }
	
	          $content.removeClass("fancybox-is-hidden");
	        }));
	      } else {
	        self.afterLoad(slide);
	      }
	
	      $iframe.attr("src", slide.src);
	
	      // Remove iframe if closing or changing gallery item
	      $slide.one("onReset", (function () {
	        // This helps IE not to throw errors when closing
	        try {
	          $(this)
	            .find("iframe")
	            .hide()
	            .unbind()
	            .attr("src", "//about:blank");
	        } catch (ignore) {}
	
	        $(this)
	          .off("refresh.fb")
	          .empty();
	
	        slide.isLoaded = false;
	        slide.isRevealed = false;
	      }));
	    },
	
	    // Wrap and append content to the slide
	    // ======================================
	
	    setContent: function (slide, content) {
	      var self = this;
	
	      if (self.isClosing) {
	        return;
	      }
	
	      self.hideLoading(slide);
	
	      if (slide.$content) {
	        $.fancybox.stop(slide.$content);
	      }
	
	      slide.$slide.empty();
	
	      // If content is a jQuery object, then it will be moved to the slide.
	      // The placeholder is created so we will know where to put it back.
	      if (isQuery(content) && content.parent().length) {
	        // Make sure content is not already moved to fancyBox
	        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
	          content.parents(".fancybox-slide").trigger("onReset");
	        }
	
	        // Create temporary element marking original place of the content
	        slide.$placeholder = $("<div>")
	          .hide()
	          .insertAfter(content);
	
	        // Make sure content is visible
	        content.css("display", "inline-block");
	      } else if (!slide.hasError) {
	        // If content is just a plain text, try to convert it to html
	        if ($.type(content) === "string") {
	          content = $("<div>")
	            .append($.trim(content))
	            .contents();
	        }
	
	        // If "filter" option is provided, then filter content
	        if (slide.opts.filter) {
	          content = $("<div>")
	            .html(content)
	            .find(slide.opts.filter);
	        }
	      }
	
	      slide.$slide.one("onReset", (function () {
	        // Pause all html5 video/audio
	        $(this)
	          .find("video,audio")
	          .trigger("pause");
	
	        // Put content back
	        if (slide.$placeholder) {
	          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
	
	          slide.$placeholder = null;
	        }
	
	        // Remove custom close button
	        if (slide.$smallBtn) {
	          slide.$smallBtn.remove();
	
	          slide.$smallBtn = null;
	        }
	
	        // Remove content and mark slide as not loaded
	        if (!slide.hasError) {
	          $(this).empty();
	
	          slide.isLoaded = false;
	          slide.isRevealed = false;
	        }
	      }));
	
	      $(content).appendTo(slide.$slide);
	
	      if ($(content).is("video,audio")) {
	        $(content).addClass("fancybox-video");
	
	        $(content).wrap("<div></div>");
	
	        slide.contentType = "video";
	
	        slide.opts.width = slide.opts.width || $(content).attr("width");
	        slide.opts.height = slide.opts.height || $(content).attr("height");
	      }
	
	      slide.$content = slide.$slide
	        .children()
	        .filter("div,form,main,video,audio,article,.fancybox-content")
	        .first();
	
	      slide.$content.siblings().hide();
	
	      // Re-check if there is a valid content
	      // (in some cases, ajax response can contain various elements or plain text)
	      if (!slide.$content.length) {
	        slide.$content = slide.$slide
	          .wrapInner("<div></div>")
	          .children()
	          .first();
	      }
	
	      slide.$content.addClass("fancybox-content");
	
	      slide.$slide.addClass("fancybox-slide--" + slide.contentType);
	
	      self.afterLoad(slide);
	    },
	
	    // Display error message
	    // =====================
	
	    setError: function (slide) {
	      slide.hasError = true;
	
	      slide.$slide
	        .trigger("onReset")
	        .removeClass("fancybox-slide--" + slide.contentType)
	        .addClass("fancybox-slide--error");
	
	      slide.contentType = "html";
	
	      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
	
	      if (slide.pos === this.currPos) {
	        this.isAnimating = false;
	      }
	    },
	
	    // Show loading icon inside the slide
	    // ==================================
	
	    showLoading: function (slide) {
	      var self = this;
	
	      slide = slide || self.current;
	
	      if (slide && !slide.$spinner) {
	        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
	          .appendTo(slide.$slide)
	          .hide()
	          .fadeIn("fast");
	      }
	    },
	
	    // Remove loading icon from the slide
	    // ==================================
	
	    hideLoading: function (slide) {
	      var self = this;
	
	      slide = slide || self.current;
	
	      if (slide && slide.$spinner) {
	        slide.$spinner.stop().remove();
	
	        delete slide.$spinner;
	      }
	    },
	
	    // Adjustments after slide content has been loaded
	    // ===============================================
	
	    afterLoad: function (slide) {
	      var self = this;
	
	      if (self.isClosing) {
	        return;
	      }
	
	      slide.isLoading = false;
	      slide.isLoaded = true;
	
	      self.trigger("afterLoad", slide);
	
	      self.hideLoading(slide);
	
	      // Add small close button
	      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
	        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
	      }
	
	      // Disable right click
	      if (slide.opts.protect && slide.$content && !slide.hasError) {
	        slide.$content.on("contextmenu.fb", (function (e) {
	          if (e.button == 2) {
	            e.preventDefault();
	          }
	
	          return true;
	        }));
	
	        // Add fake element on top of the image
	        // This makes a bit harder for user to select image
	        if (slide.type === "image") {
	          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
	        }
	      }
	
	      self.adjustCaption(slide);
	
	      self.adjustLayout(slide);
	
	      if (slide.pos === self.currPos) {
	        self.updateCursor();
	      }
	
	      self.revealContent(slide);
	    },
	
	    // Prevent caption overlap,
	    // fix css inconsistency across browsers
	    // =====================================
	
	    adjustCaption: function (slide) {
	      var self = this,
	        current = slide || self.current,
	        caption = current.opts.caption,
	        preventOverlap = current.opts.preventCaptionOverlap,
	        $caption = self.$refs.caption,
	        $clone,
	        captionH = false;
	
	      $caption.toggleClass("fancybox-caption--separate", preventOverlap);
	
	      if (preventOverlap && caption && caption.length) {
	        if (current.pos !== self.currPos) {
	          $clone = $caption.clone().appendTo($caption.parent());
	
	          $clone
	            .children()
	            .eq(0)
	            .empty()
	            .html(caption);
	
	          captionH = $clone.outerHeight(true);
	
	          $clone.empty().remove();
	        } else if (self.$caption) {
	          captionH = self.$caption.outerHeight(true);
	        }
	
	        current.$slide.css("padding-bottom", captionH || "");
	      }
	    },
	
	    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
	    // ====================================================================================
	
	    adjustLayout: function (slide) {
	      var self = this,
	        current = slide || self.current,
	        scrollHeight,
	        marginBottom,
	        inlinePadding,
	        actualPadding;
	
	      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
	        current.$content.css("margin-bottom", "");
	
	        // If we would always set margin-bottom for the content,
	        // then it would potentially break vertical align
	        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
	          inlinePadding = current.$slide[0].style["padding-bottom"];
	          actualPadding = current.$slide.css("padding-bottom");
	
	          if (parseFloat(actualPadding) > 0) {
	            scrollHeight = current.$slide[0].scrollHeight;
	
	            current.$slide.css("padding-bottom", 0);
	
	            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
	              marginBottom = actualPadding;
	            }
	
	            current.$slide.css("padding-bottom", inlinePadding);
	          }
	        }
	
	        current.$content.css("margin-bottom", marginBottom);
	      }
	    },
	
	    // Make content visible
	    // This method is called right after content has been loaded or
	    // user navigates gallery and transition should start
	    // ============================================================
	
	    revealContent: function (slide) {
	      var self = this,
	        $slide = slide.$slide,
	        end = false,
	        start = false,
	        isMoved = self.isMoved(slide),
	        isRevealed = slide.isRevealed,
	        effect,
	        effectClassName,
	        duration,
	        opacity;
	
	      slide.isRevealed = true;
	
	      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
	      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
	
	      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);
	
	      if (isMoved || slide.pos !== self.currPos || !duration) {
	        effect = false;
	      }
	
	      // Check if can zoom
	      if (effect === "zoom") {
	        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
	          end = self.getFitPos(slide);
	        } else {
	          effect = "fade";
	        }
	      }
	
	      // Zoom animation
	      // ==============
	      if (effect === "zoom") {
	        self.isAnimating = true;
	
	        end.scaleX = end.width / start.width;
	        end.scaleY = end.height / start.height;
	
	        // Check if we need to animate opacity
	        opacity = slide.opts.zoomOpacity;
	
	        if (opacity == "auto") {
	          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
	        }
	
	        if (opacity) {
	          start.opacity = 0.1;
	          end.opacity = 1;
	        }
	
	        // Draw image at start position
	        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
	
	        forceRedraw(slide.$content);
	
	        // Start animation
	        $.fancybox.animate(slide.$content, end, duration, (function () {
	          self.isAnimating = false;
	
	          self.complete();
	        }));
	
	        return;
	      }
	
	      self.updateSlide(slide);
	
	      // Simply show content if no effect
	      // ================================
	      if (!effect) {
	        slide.$content.removeClass("fancybox-is-hidden");
	
	        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
	          slide.$content.hide().fadeIn("fast");
	        }
	
	        if (slide.pos === self.currPos) {
	          self.complete();
	        }
	
	        return;
	      }
	
	      // Prepare for CSS transiton
	      // =========================
	      $.fancybox.stop($slide);
	
	      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
	      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
	
	      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);
	
	      slide.$content.removeClass("fancybox-is-hidden");
	
	      // Force reflow
	      forceRedraw($slide);
	
	      if (slide.type !== "image") {
	        slide.$content.hide().show(0);
	      }
	
	      $.fancybox.animate(
	        $slide,
	        "fancybox-slide--current",
	        duration,
	        (function () {
	          $slide.removeClass(effectClassName).css({
	            transform: "",
	            opacity: ""
	          });
	
	          if (slide.pos === self.currPos) {
	            self.complete();
	          }
	        }),
	        true
	      );
	    },
	
	    // Check if we can and have to zoom from thumbnail
	    //================================================
	
	    getThumbPos: function (slide) {
	      var rez = false,
	        $thumb = slide.$thumb,
	        thumbPos,
	        btw,
	        brw,
	        bbw,
	        blw;
	
	      if (!$thumb || !inViewport($thumb[0])) {
	        return false;
	      }
	
	      thumbPos = $.fancybox.getTranslate($thumb);
	
	      btw = parseFloat($thumb.css("border-top-width") || 0);
	      brw = parseFloat($thumb.css("border-right-width") || 0);
	      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
	      blw = parseFloat($thumb.css("border-left-width") || 0);
	
	      rez = {
	        top: thumbPos.top + btw,
	        left: thumbPos.left + blw,
	        width: thumbPos.width - brw - blw,
	        height: thumbPos.height - btw - bbw,
	        scaleX: 1,
	        scaleY: 1
	      };
	
	      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
	    },
	
	    // Final adjustments after current gallery item is moved to position
	    // and it`s content is loaded
	    // ==================================================================
	
	    complete: function () {
	      var self = this,
	        current = self.current,
	        slides = {},
	        $el;
	
	      if (self.isMoved() || !current.isLoaded) {
	        return;
	      }
	
	      if (!current.isComplete) {
	        current.isComplete = true;
	
	        current.$slide.siblings().trigger("onReset");
	
	        self.preload("inline");
	
	        // Trigger any CSS transiton inside the slide
	        forceRedraw(current.$slide);
	
	        current.$slide.addClass("fancybox-slide--complete");
	
	        // Remove unnecessary slides
	        $.each(self.slides, (function (key, slide) {
	          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
	            slides[slide.pos] = slide;
	          } else if (slide) {
	            $.fancybox.stop(slide.$slide);
	
	            slide.$slide.off().remove();
	          }
	        }));
	
	        self.slides = slides;
	      }
	
	      self.isAnimating = false;
	
	      self.updateCursor();
	
	      self.trigger("afterShow");
	
	      // Autoplay first html5 video/audio
	      if (!!current.opts.video.autoStart) {
	        current.$slide
	          .find("video,audio")
	          .filter(":visible:first")
	          .trigger("play")
	          .one("ended", (function () {
	            if (Document.exitFullscreen) {
	              Document.exitFullscreen();
	            } else if (this.webkitExitFullscreen) {
	              this.webkitExitFullscreen();
	            }
	
	            self.next();
	          }));
	      }
	
	      // Try to focus on the first focusable element
	      if (current.opts.autoFocus && current.contentType === "html") {
	        // Look for the first input with autofocus attribute
	        $el = current.$content.find("input[autofocus]:enabled:visible:first");
	
	        if ($el.length) {
	          $el.trigger("focus");
	        } else {
	          self.focus(null, true);
	        }
	      }
	
	      // Avoid jumping
	      current.$slide.scrollTop(0).scrollLeft(0);
	    },
	
	    // Preload next and previous slides
	    // ================================
	
	    preload: function (type) {
	      var self = this,
	        prev,
	        next;
	
	      if (self.group.length < 2) {
	        return;
	      }
	
	      next = self.slides[self.currPos + 1];
	      prev = self.slides[self.currPos - 1];
	
	      if (prev && prev.type === type) {
	        self.loadSlide(prev);
	      }
	
	      if (next && next.type === type) {
	        self.loadSlide(next);
	      }
	    },
	
	    // Try to find and focus on the first focusable element
	    // ====================================================
	
	    focus: function (e, firstRun) {
	      var self = this,
	        focusableStr = [
	          "a[href]",
	          "area[href]",
	          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	          "select:not([disabled]):not([aria-hidden])",
	          "textarea:not([disabled]):not([aria-hidden])",
	          "button:not([disabled]):not([aria-hidden])",
	          "iframe",
	          "object",
	          "embed",
	          "video",
	          "audio",
	          "[contenteditable]",
	          '[tabindex]:not([tabindex^="-"])'
	        ].join(","),
	        focusableItems,
	        focusedItemIndex;
	
	      if (self.isClosing) {
	        return;
	      }
	
	      if (e || !self.current || !self.current.isComplete) {
	        // Focus on any element inside fancybox
	        focusableItems = self.$refs.container.find("*:visible");
	      } else {
	        // Focus inside current slide
	        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
	      }
	
	      focusableItems = focusableItems.filter(focusableStr).filter((function () {
	        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
	      }));
	
	      if (focusableItems.length) {
	        focusedItemIndex = focusableItems.index(document.activeElement);
	
	        if (e && e.shiftKey) {
	          // Back tab
	          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
	            e.preventDefault();
	
	            focusableItems.eq(focusableItems.length - 1).trigger("focus");
	          }
	        } else {
	          // Outside or Forward tab
	          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
	            if (e) {
	              e.preventDefault();
	            }
	
	            focusableItems.eq(0).trigger("focus");
	          }
	        }
	      } else {
	        self.$refs.container.trigger("focus");
	      }
	    },
	
	    // Activates current instance - brings container to the front and enables keyboard,
	    // notifies other instances about deactivating
	    // =================================================================================
	
	    activate: function () {
	      var self = this;
	
	      // Deactivate all instances
	      $(".fancybox-container").each((function () {
	        var instance = $(this).data("FancyBox");
	
	        // Skip self and closing instances
	        if (instance && instance.id !== self.id && !instance.isClosing) {
	          instance.trigger("onDeactivate");
	
	          instance.removeEvents();
	
	          instance.isVisible = false;
	        }
	      }));
	
	      self.isVisible = true;
	
	      if (self.current || self.isIdle) {
	        self.update();
	
	        self.updateControls();
	      }
	
	      self.trigger("onActivate");
	
	      self.addEvents();
	    },
	
	    // Start closing procedure
	    // This will start "zoom-out" animation if needed and clean everything up afterwards
	    // =================================================================================
	
	    close: function (e, d) {
	      var self = this,
	        current = self.current,
	        effect,
	        duration,
	        $content,
	        domRect,
	        opacity,
	        start,
	        end;
	
	      var done = function () {
	        self.cleanUp(e);
	      };
	
	      if (self.isClosing) {
	        return false;
	      }
	
	      self.isClosing = true;
	
	      // If beforeClose callback prevents closing, make sure content is centered
	      if (self.trigger("beforeClose", e) === false) {
	        self.isClosing = false;
	
	        requestAFrame((function () {
	          self.update();
	        }));
	
	        return false;
	      }
	
	      // Remove all events
	      // If there are multiple instances, they will be set again by "activate" method
	      self.removeEvents();
	
	      $content = current.$content;
	      effect = current.opts.animationEffect;
	      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
	
	      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
	
	      if (e !== true) {
	        $.fancybox.stop(current.$slide);
	      } else {
	        effect = false;
	      }
	
	      // Remove other slides
	      current.$slide
	        .siblings()
	        .trigger("onReset")
	        .remove();
	
	      // Trigger animations
	      if (duration) {
	        self.$refs.container
	          .removeClass("fancybox-is-open")
	          .addClass("fancybox-is-closing")
	          .css("transition-duration", duration + "ms");
	      }
	
	      // Clean up
	      self.hideLoading(current);
	
	      self.hideControls(true);
	
	      self.updateCursor();
	
	      // Check if possible to zoom-out
	      if (
	        effect === "zoom" &&
	        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
	      ) {
	        effect = "fade";
	      }
	
	      if (effect === "zoom") {
	        $.fancybox.stop($content);
	
	        domRect = $.fancybox.getTranslate($content);
	
	        start = {
	          top: domRect.top,
	          left: domRect.left,
	          scaleX: domRect.width / end.width,
	          scaleY: domRect.height / end.height,
	          width: end.width,
	          height: end.height
	        };
	
	        // Check if we need to animate opacity
	        opacity = current.opts.zoomOpacity;
	
	        if (opacity == "auto") {
	          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
	        }
	
	        if (opacity) {
	          end.opacity = 0;
	        }
	
	        $.fancybox.setTranslate($content, start);
	
	        forceRedraw($content);
	
	        $.fancybox.animate($content, end, duration, done);
	
	        return true;
	      }
	
	      if (effect && duration) {
	        $.fancybox.animate(
	          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
	          "fancybox-animated fancybox-fx-" + effect,
	          duration,
	          done
	        );
	      } else {
	        // If skip animation
	        if (e === true) {
	          setTimeout(done, duration);
	        } else {
	          done();
	        }
	      }
	
	      return true;
	    },
	
	    // Final adjustments after removing the instance
	    // =============================================
	
	    cleanUp: function (e) {
	      var self = this,
	        instance,
	        $focus = self.current.opts.$orig,
	        x,
	        y;
	
	      self.current.$slide.trigger("onReset");
	
	      self.$refs.container.empty().remove();
	
	      self.trigger("afterClose", e);
	
	      // Place back focus
	      if (!!self.current.opts.backFocus) {
	        if (!$focus || !$focus.length || !$focus.is(":visible")) {
	          $focus = self.$trigger;
	        }
	
	        if ($focus && $focus.length) {
	          x = window.scrollX;
	          y = window.scrollY;
	
	          $focus.trigger("focus");
	
	          $("html, body")
	            .scrollTop(y)
	            .scrollLeft(x);
	        }
	      }
	
	      self.current = null;
	
	      // Check if there are other instances
	      instance = $.fancybox.getInstance();
	
	      if (instance) {
	        instance.activate();
	      } else {
	        $("body").removeClass("fancybox-active compensate-for-scrollbar");
	
	        $("#fancybox-style-noscroll").remove();
	      }
	    },
	
	    // Call callback and trigger an event
	    // ==================================
	
	    trigger: function (name, slide) {
	      var args = Array.prototype.slice.call(arguments, 1),
	        self = this,
	        obj = slide && slide.opts ? slide : self.current,
	        rez;
	
	      if (obj) {
	        args.unshift(obj);
	      } else {
	        obj = self;
	      }
	
	      args.unshift(self);
	
	      if ($.isFunction(obj.opts[name])) {
	        rez = obj.opts[name].apply(obj, args);
	      }
	
	      if (rez === false) {
	        return rez;
	      }
	
	      if (name === "afterClose" || !self.$refs) {
	        $D.trigger(name + ".fb", args);
	      } else {
	        self.$refs.container.trigger(name + ".fb", args);
	      }
	    },
	
	    // Update infobar values, navigation button states and reveal caption
	    // ==================================================================
	
	    updateControls: function () {
	      var self = this,
	        current = self.current,
	        index = current.index,
	        $container = self.$refs.container,
	        $caption = self.$refs.caption,
	        caption = current.opts.caption;
	
	      // Recalculate content dimensions
	      current.$slide.trigger("refresh");
	
	      // Set caption
	      if (caption && caption.length) {
	        self.$caption = $caption;
	
	        $caption
	          .children()
	          .eq(0)
	          .html(caption);
	      } else {
	        self.$caption = null;
	      }
	
	      if (!self.hasHiddenControls && !self.isIdle) {
	        self.showControls();
	      }
	
	      // Update info and navigation elements
	      $container.find("[data-fancybox-count]").html(self.group.length);
	      $container.find("[data-fancybox-index]").html(index + 1);
	
	      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
	      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);
	
	      if (current.type === "image") {
	        // Re-enable buttons; update download button source
	        $container
	          .find("[data-fancybox-zoom]")
	          .show()
	          .end()
	          .find("[data-fancybox-download]")
	          .attr("href", current.opts.image.src || current.src)
	          .show();
	      } else if (current.opts.toolbar) {
	        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
	      }
	
	      // Make sure focus is not on disabled button/element
	      if ($(document.activeElement).is(":hidden,[disabled]")) {
	        self.$refs.container.trigger("focus");
	      }
	    },
	
	    // Hide toolbar and caption
	    // ========================
	
	    hideControls: function (andCaption) {
	      var self = this,
	        arr = ["infobar", "toolbar", "nav"];
	
	      if (andCaption || !self.current.opts.preventCaptionOverlap) {
	        arr.push("caption");
	      }
	
	      this.$refs.container.removeClass(
	        arr
	        .map((function (i) {
	          return "fancybox-show-" + i;
	        }))
	        .join(" ")
	      );
	
	      this.hasHiddenControls = true;
	    },
	
	    showControls: function () {
	      var self = this,
	        opts = self.current ? self.current.opts : self.opts,
	        $container = self.$refs.container;
	
	      self.hasHiddenControls = false;
	      self.idleSecondsCounter = 0;
	
	      $container
	        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
	        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
	        .toggleClass("fancybox-show-caption", !!self.$caption)
	        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
	        .toggleClass("fancybox-is-modal", !!opts.modal);
	    },
	
	    // Toggle toolbar and caption
	    // ==========================
	
	    toggleControls: function () {
	      if (this.hasHiddenControls) {
	        this.showControls();
	      } else {
	        this.hideControls();
	      }
	    }
	  });
	
	  $.fancybox = {
	    version: "3.5.7",
	    defaults: defaults,
	
	    // Get current instance and execute a command.
	    //
	    // Examples of usage:
	    //
	    //   $instance = $.fancybox.getInstance();
	    //   $.fancybox.getInstance().jumpTo( 1 );
	    //   $.fancybox.getInstance( 'jumpTo', 1 );
	    //   $.fancybox.getInstance( function() {
	    //       console.info( this.currIndex );
	    //   });
	    // ======================================================
	
	    getInstance: function (command) {
	      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
	        args = Array.prototype.slice.call(arguments, 1);
	
	      if (instance instanceof FancyBox) {
	        if ($.type(command) === "string") {
	          instance[command].apply(instance, args);
	        } else if ($.type(command) === "function") {
	          command.apply(instance, args);
	        }
	
	        return instance;
	      }
	
	      return false;
	    },
	
	    // Create new instance
	    // ===================
	
	    open: function (items, opts, index) {
	      return new FancyBox(items, opts, index);
	    },
	
	    // Close current or all instances
	    // ==============================
	
	    close: function (all) {
	      var instance = this.getInstance();
	
	      if (instance) {
	        instance.close();
	
	        // Try to find and close next instance
	        if (all === true) {
	          this.close(all);
	        }
	      }
	    },
	
	    // Close all instances and unbind all events
	    // =========================================
	
	    destroy: function () {
	      this.close(true);
	
	      $D.add("body").off("click.fb-start", "**");
	    },
	
	    // Try to detect mobile devices
	    // ============================
	
	    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	
	    // Detect if 'translate3d' support is available
	    // ============================================
	
	    use3d: (function () {
	      var div = document.createElement("div");
	
	      return (
	        window.getComputedStyle &&
	        window.getComputedStyle(div) &&
	        window.getComputedStyle(div).getPropertyValue("transform") &&
	        !(document.documentMode && document.documentMode < 11)
	      );
	    })(),
	
	    // Helper function to get current visual state of an element
	    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
	    // =====================================================================
	
	    getTranslate: function ($el) {
	      var domRect;
	
	      if (!$el || !$el.length) {
	        return false;
	      }
	
	      domRect = $el[0].getBoundingClientRect();
	
	      return {
	        top: domRect.top || 0,
	        left: domRect.left || 0,
	        width: domRect.width,
	        height: domRect.height,
	        opacity: parseFloat($el.css("opacity"))
	      };
	    },
	
	    // Shortcut for setting "translate3d" properties for element
	    // Can set be used to set opacity, too
	    // ========================================================
	
	    setTranslate: function ($el, props) {
	      var str = "",
	        css = {};
	
	      if (!$el || !props) {
	        return;
	      }
	
	      if (props.left !== undefined || props.top !== undefined) {
	        str =
	          (props.left === undefined ? $el.position().left : props.left) +
	          "px, " +
	          (props.top === undefined ? $el.position().top : props.top) +
	          "px";
	
	        if (this.use3d) {
	          str = "translate3d(" + str + ", 0px)";
	        } else {
	          str = "translate(" + str + ")";
	        }
	      }
	
	      if (props.scaleX !== undefined && props.scaleY !== undefined) {
	        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
	      } else if (props.scaleX !== undefined) {
	        str += " scaleX(" + props.scaleX + ")";
	      }
	
	      if (str.length) {
	        css.transform = str;
	      }
	
	      if (props.opacity !== undefined) {
	        css.opacity = props.opacity;
	      }
	
	      if (props.width !== undefined) {
	        css.width = props.width;
	      }
	
	      if (props.height !== undefined) {
	        css.height = props.height;
	      }
	
	      return $el.css(css);
	    },
	
	    // Simple CSS transition handler
	    // =============================
	
	    animate: function ($el, to, duration, callback, leaveAnimationName) {
	      var self = this,
	        from;
	
	      if ($.isFunction(duration)) {
	        callback = duration;
	        duration = null;
	      }
	
	      self.stop($el);
	
	      from = self.getTranslate($el);
	
	      $el.on(transitionEnd, (function (e) {
	        // Skip events from child elements and z-index change
	        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
	          return;
	        }
	
	        self.stop($el);
	
	        if ($.isNumeric(duration)) {
	          $el.css("transition-duration", "");
	        }
	
	        if ($.isPlainObject(to)) {
	          if (to.scaleX !== undefined && to.scaleY !== undefined) {
	            self.setTranslate($el, {
	              top: to.top,
	              left: to.left,
	              width: from.width * to.scaleX,
	              height: from.height * to.scaleY,
	              scaleX: 1,
	              scaleY: 1
	            });
	          }
	        } else if (leaveAnimationName !== true) {
	          $el.removeClass(to);
	        }
	
	        if ($.isFunction(callback)) {
	          callback(e);
	        }
	      }));
	
	      if ($.isNumeric(duration)) {
	        $el.css("transition-duration", duration + "ms");
	      }
	
	      // Start animation by changing CSS properties or class name
	      if ($.isPlainObject(to)) {
	        if (to.scaleX !== undefined && to.scaleY !== undefined) {
	          delete to.width;
	          delete to.height;
	
	          if ($el.parent().hasClass("fancybox-slide--image")) {
	            $el.parent().addClass("fancybox-is-scaling");
	          }
	        }
	
	        $.fancybox.setTranslate($el, to);
	      } else {
	        $el.addClass(to);
	      }
	
	      // Make sure that `transitionend` callback gets fired
	      $el.data(
	        "timer",
	        setTimeout((function () {
	          $el.trigger(transitionEnd);
	        }), duration + 33)
	      );
	    },
	
	    stop: function ($el, callCallback) {
	      if ($el && $el.length) {
	        clearTimeout($el.data("timer"));
	
	        if (callCallback) {
	          $el.trigger(transitionEnd);
	        }
	
	        $el.off(transitionEnd).css("transition-duration", "");
	
	        $el.parent().removeClass("fancybox-is-scaling");
	      }
	    }
	  };
	
	  // Default click handler for "fancyboxed" links
	  // ============================================
	
	  function _run(e, opts) {
	    var items = [],
	      index = 0,
	      $target,
	      value,
	      instance;
	
	    // Avoid opening multiple times
	    if (e && e.isDefaultPrevented()) {
	      return;
	    }
	
	    e.preventDefault();
	
	    opts = opts || {};
	
	    if (e && e.data) {
	      opts = mergeOpts(e.data.options, opts);
	    }
	
	    $target = opts.$target || $(e.currentTarget).trigger("blur");
	    instance = $.fancybox.getInstance();
	
	    if (instance && instance.$trigger && instance.$trigger.is($target)) {
	      return;
	    }
	
	    if (opts.selector) {
	      items = $(opts.selector);
	    } else {
	      // Get all related items and find index for clicked one
	      value = $target.attr("data-fancybox") || "";
	
	      if (value) {
	        items = e.data ? e.data.items : [];
	        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
	      } else {
	        items = [$target];
	      }
	    }
	
	    index = $(items).index($target);
	
	    // Sometimes current item can not be found
	    if (index < 0) {
	      index = 0;
	    }
	
	    instance = $.fancybox.open(items, opts, index);
	
	    // Save last active element
	    instance.$trigger = $target;
	  }
	
	  // Create a jQuery plugin
	  // ======================
	
	  $.fn.fancybox = function (options) {
	    var selector;
	
	    options = options || {};
	    selector = options.selector || false;
	
	    if (selector) {
	      // Use body element instead of document so it executes first
	      $("body")
	        .off("click.fb-start", selector)
	        .on("click.fb-start", selector, {
	          options: options
	        }, _run);
	    } else {
	      this.off("click.fb-start").on(
	        "click.fb-start", {
	          items: this,
	          options: options
	        },
	        _run
	      );
	    }
	
	    return this;
	  };
	
	  // Self initializing plugin for all elements having `data-fancybox` attribute
	  // ==========================================================================
	
	  $D.on("click.fb-start", "[data-fancybox]", _run);
	
	  // Enable "trigger elements"
	  // =========================
	
	  $D.on("click.fb-start", "[data-fancybox-trigger]", (function (e) {
	    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
	      .eq($(this).attr("data-fancybox-index") || 0)
	      .trigger("click.fb-start", {
	        $trigger: $(this)
	      });
	  }));
	
	  // Track focus event for better accessibility styling
	  // ==================================================
	  (function () {
	    var buttonStr = ".fancybox-button",
	      focusStr = "fancybox-focus",
	      $pressed = null;
	
	    $D.on("mousedown mouseup focus blur", buttonStr, (function (e) {
	      switch (e.type) {
	        case "mousedown":
	          $pressed = $(this);
	          break;
	        case "mouseup":
	          $pressed = null;
	          break;
	        case "focusin":
	          $(buttonStr).removeClass(focusStr);
	
	          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
	            $(this).addClass(focusStr);
	          }
	          break;
	        case "focusout":
	          $(buttonStr).removeClass(focusStr);
	          break;
	      }
	    }));
	  })();
	})(window, document, jQuery);
	// ==========================================================================
	//
	// Media
	// Adds additional media type support
	//
	// ==========================================================================
	(function ($) {
	  "use strict";
	
	  // Object containing properties for each media type
	  var defaults = {
	    youtube: {
	      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
	      params: {
	        autoplay: 1,
	        autohide: 1,
	        fs: 1,
	        rel: 0,
	        hd: 1,
	        wmode: "transparent",
	        enablejsapi: 1,
	        html5: 1
	      },
	      paramPlace: 8,
	      type: "iframe",
	      url: "https://www.youtube-nocookie.com/embed/$4",
	      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
	    },
	
	    vimeo: {
	      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
	      params: {
	        autoplay: 1,
	        hd: 1,
	        show_title: 1,
	        show_byline: 1,
	        show_portrait: 0,
	        fullscreen: 1
	      },
	      paramPlace: 3,
	      type: "iframe",
	      url: "//player.vimeo.com/video/$2"
	    },
	
	    instagram: {
	      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
	      type: "image",
	      url: "//$1/p/$2/media/?size=l"
	    },
	
	    // Examples:
	    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
	    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
	    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
	    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
	    gmap_place: {
	      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
	      type: "iframe",
	      url: function (rez) {
	        return (
	          "//maps.google." +
	          rez[2] +
	          "/?ll=" +
	          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
	          "&output=" +
	          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
	        );
	      }
	    },
	
	    // Examples:
	    // https://www.google.com/maps/search/Empire+State+Building/
	    // https://www.google.com/maps/search/?api=1&query=centurylink+field
	    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
	    gmap_search: {
	      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
	      type: "iframe",
	      url: function (rez) {
	        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
	      }
	    }
	  };
	
	  // Formats matching url to final form
	  var format = function (url, rez, params) {
	    if (!url) {
	      return;
	    }
	
	    params = params || "";
	
	    if ($.type(params) === "object") {
	      params = $.param(params, true);
	    }
	
	    $.each(rez, (function (key, value) {
	      url = url.replace("$" + key, value || "");
	    }));
	
	    if (params.length) {
	      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
	    }
	
	    return url;
	  };
	
	  $(document).on("objectNeedsType.fb", (function (e, instance, item) {
	    var url = item.src || "",
	      type = false,
	      media,
	      thumb,
	      rez,
	      params,
	      urlParams,
	      paramObj,
	      provider;
	
	    media = $.extend(true, {}, defaults, item.opts.media);
	
	    // Look for any matching media type
	    $.each(media, (function (providerName, providerOpts) {
	      rez = url.match(providerOpts.matcher);
	
	      if (!rez) {
	        return;
	      }
	
	      type = providerOpts.type;
	      provider = providerName;
	      paramObj = {};
	
	      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
	        urlParams = rez[providerOpts.paramPlace];
	
	        if (urlParams[0] == "?") {
	          urlParams = urlParams.substring(1);
	        }
	
	        urlParams = urlParams.split("&");
	
	        for (var m = 0; m < urlParams.length; ++m) {
	          var p = urlParams[m].split("=", 2);
	
	          if (p.length == 2) {
	            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	          }
	        }
	      }
	
	      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
	
	      url =
	        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
	
	      thumb =
	        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
	
	      if (providerName === "youtube") {
	        url = url.replace(/&t=((\d+)m)?(\d+)s/, (function (match, p1, m, s) {
	          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
	        }));
	      } else if (providerName === "vimeo") {
	        url = url.replace("&%23", "#");
	      }
	
	      return false;
	    }));
	
	    // If it is found, then change content type and update the url
	
	    if (type) {
	      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
	        item.opts.thumb = thumb;
	      }
	
	      if (type === "iframe") {
	        item.opts = $.extend(true, item.opts, {
	          iframe: {
	            preload: false,
	            attr: {
	              scrolling: "no"
	            }
	          }
	        });
	      }
	
	      $.extend(item, {
	        type: type,
	        src: url,
	        origSrc: item.src,
	        contentSource: provider,
	        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
	      });
	    } else if (url) {
	      item.type = item.opts.defaultType;
	    }
	  }));
	
	  // Load YouTube/Video API on request to detect when video finished playing
	  var VideoAPILoader = {
	    youtube: {
	      src: "https://www.youtube.com/iframe_api",
	      class: "YT",
	      loading: false,
	      loaded: false
	    },
	
	    vimeo: {
	      src: "https://player.vimeo.com/api/player.js",
	      class: "Vimeo",
	      loading: false,
	      loaded: false
	    },
	
	    load: function (vendor) {
	      var _this = this,
	        script;
	
	      if (this[vendor].loaded) {
	        setTimeout((function () {
	          _this.done(vendor);
	        }));
	        return;
	      }
	
	      if (this[vendor].loading) {
	        return;
	      }
	
	      this[vendor].loading = true;
	
	      script = document.createElement("script");
	      script.type = "text/javascript";
	      script.src = this[vendor].src;
	
	      if (vendor === "youtube") {
	        window.onYouTubeIframeAPIReady = function () {
	          _this[vendor].loaded = true;
	          _this.done(vendor);
	        };
	      } else {
	        script.onload = function () {
	          _this[vendor].loaded = true;
	          _this.done(vendor);
	        };
	      }
	
	      document.body.appendChild(script);
	    },
	    done: function (vendor) {
	      var instance, $el, player;
	
	      if (vendor === "youtube") {
	        delete window.onYouTubeIframeAPIReady;
	      }
	
	      instance = $.fancybox.getInstance();
	
	      if (instance) {
	        $el = instance.current.$content.find("iframe");
	
	        if (vendor === "youtube" && YT !== undefined && YT) {
	          player = new YT.Player($el.attr("id"), {
	            events: {
	              onStateChange: function (e) {
	                if (e.data == 0) {
	                  instance.next();
	                }
	              }
	            }
	          });
	        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
	          player = new Vimeo.Player($el);
	
	          player.on("ended", (function () {
	            instance.next();
	          }));
	        }
	      }
	    }
	  };
	
	  $(document).on({
	    "afterShow.fb": function (e, instance, current) {
	      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
	        VideoAPILoader.load(current.contentSource);
	      }
	    }
	  });
	})(jQuery);
	// ==========================================================================
	//
	// Guestures
	// Adds touch guestures, handles click and tap events
	//
	// ==========================================================================
	(function (window, document, $) {
	  "use strict";
	
	  var requestAFrame = (function () {
	    return (
	      window.requestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.oRequestAnimationFrame ||
	      // if all else fails, use setTimeout
	      function (callback) {
	        return window.setTimeout(callback, 1000 / 60);
	      }
	    );
	  })();
	
	  var cancelAFrame = (function () {
	    return (
	      window.cancelAnimationFrame ||
	      window.webkitCancelAnimationFrame ||
	      window.mozCancelAnimationFrame ||
	      window.oCancelAnimationFrame ||
	      function (id) {
	        window.clearTimeout(id);
	      }
	    );
	  })();
	
	  var getPointerXY = function (e) {
	    var result = [];
	
	    e = e.originalEvent || e || window.e;
	    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
	
	    for (var key in e) {
	      if (e[key].pageX) {
	        result.push({
	          x: e[key].pageX,
	          y: e[key].pageY
	        });
	      } else if (e[key].clientX) {
	        result.push({
	          x: e[key].clientX,
	          y: e[key].clientY
	        });
	      }
	    }
	
	    return result;
	  };
	
	  var distance = function (point2, point1, what) {
	    if (!point1 || !point2) {
	      return 0;
	    }
	
	    if (what === "x") {
	      return point2.x - point1.x;
	    } else if (what === "y") {
	      return point2.y - point1.y;
	    }
	
	    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	  };
	
	  var isClickable = function ($el) {
	    if (
	      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
	      $.isFunction($el.get(0).onclick) ||
	      $el.data("selectable")
	    ) {
	      return true;
	    }
	
	    // Check for attributes like data-fancybox-next or data-fancybox-close
	    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
	      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
	        return true;
	      }
	    }
	
	    return false;
	  };
	
	  var hasScrollbars = function (el) {
	    var overflowY = window.getComputedStyle(el)["overflow-y"],
	      overflowX = window.getComputedStyle(el)["overflow-x"],
	      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
	      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
	
	    return vertical || horizontal;
	  };
	
	  var isScrollable = function ($el) {
	    var rez = false;
	
	    while (true) {
	      rez = hasScrollbars($el.get(0));
	
	      if (rez) {
	        break;
	      }
	
	      $el = $el.parent();
	
	      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
	        break;
	      }
	    }
	
	    return rez;
	  };
	
	  var Guestures = function (instance) {
	    var self = this;
	
	    self.instance = instance;
	
	    self.$bg = instance.$refs.bg;
	    self.$stage = instance.$refs.stage;
	    self.$container = instance.$refs.container;
	
	    self.destroy();
	
	    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
	  };
	
	  Guestures.prototype.destroy = function () {
	    var self = this;
	
	    self.$container.off(".fb.touch");
	
	    $(document).off(".fb.touch");
	
	    if (self.requestId) {
	      cancelAFrame(self.requestId);
	      self.requestId = null;
	    }
	
	    if (self.tapped) {
	      clearTimeout(self.tapped);
	      self.tapped = null;
	    }
	  };
	
	  Guestures.prototype.ontouchstart = function (e) {
	    var self = this,
	      $target = $(e.target),
	      instance = self.instance,
	      current = instance.current,
	      $slide = current.$slide,
	      $content = current.$content,
	      isTouchDevice = e.type == "touchstart";
	
	    // Do not respond to both (touch and mouse) events
	    if (isTouchDevice) {
	      self.$container.off("mousedown.fb.touch");
	    }
	
	    // Ignore right click
	    if (e.originalEvent && e.originalEvent.button == 2) {
	      return;
	    }
	
	    // Ignore taping on links, buttons, input elements
	    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
	      return;
	    }
	    // Ignore clicks on the scrollbar
	    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
	      return;
	    }
	
	    // Ignore clicks while zooming or closing
	    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
	      e.stopPropagation();
	      e.preventDefault();
	
	      return;
	    }
	
	    self.realPoints = self.startPoints = getPointerXY(e);
	
	    if (!self.startPoints.length) {
	      return;
	    }
	
	    // Allow other scripts to catch touch event if "touch" is set to false
	    if (current.touch) {
	      e.stopPropagation();
	    }
	
	    self.startEvent = e;
	
	    self.canTap = true;
	    self.$target = $target;
	    self.$content = $content;
	    self.opts = current.opts.touch;
	
	    self.isPanning = false;
	    self.isSwiping = false;
	    self.isZooming = false;
	    self.isScrolling = false;
	    self.canPan = instance.canPan();
	
	    self.startTime = new Date().getTime();
	    self.distanceX = self.distanceY = self.distance = 0;
	
	    self.canvasWidth = Math.round($slide[0].clientWidth);
	    self.canvasHeight = Math.round($slide[0].clientHeight);
	
	    self.contentLastPos = null;
	    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
	      top: 0,
	      left: 0
	    };
	    self.sliderStartPos = $.fancybox.getTranslate($slide);
	
	    // Since position will be absolute, but we need to make it relative to the stage
	    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
	
	    self.sliderStartPos.top -= self.stagePos.top;
	    self.sliderStartPos.left -= self.stagePos.left;
	
	    self.contentStartPos.top -= self.stagePos.top;
	    self.contentStartPos.left -= self.stagePos.left;
	
	    $(document)
	      .off(".fb.touch")
	      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
	      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));
	
	    if ($.fancybox.isMobile) {
	      document.addEventListener("scroll", self.onscroll, true);
	    }
	
	    // Skip if clicked outside the sliding area
	    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
	      if ($target.is(".fancybox-image")) {
	        e.preventDefault();
	      }
	
	      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
	        return;
	      }
	    }
	
	    self.isScrollable = isScrollable($target) || isScrollable($target.parent());
	
	    // Check if element is scrollable and try to prevent default behavior (scrolling)
	    if (!($.fancybox.isMobile && self.isScrollable)) {
	      e.preventDefault();
	    }
	
	    // One finger or mouse click - swipe or pan an image
	    if (self.startPoints.length === 1 || current.hasError) {
	      if (self.canPan) {
	        $.fancybox.stop(self.$content);
	
	        self.isPanning = true;
	      } else {
	        self.isSwiping = true;
	      }
	
	      self.$container.addClass("fancybox-is-grabbing");
	    }
	
	    // Two fingers - zoom image
	    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
	      self.canTap = false;
	      self.isSwiping = false;
	      self.isPanning = false;
	
	      self.isZooming = true;
	
	      $.fancybox.stop(self.$content);
	
	      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
	      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
	
	      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
	      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
	
	      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
	    }
	  };
	
	  Guestures.prototype.onscroll = function (e) {
	    var self = this;
	
	    self.isScrolling = true;
	
	    document.removeEventListener("scroll", self.onscroll, true);
	  };
	
	  Guestures.prototype.ontouchmove = function (e) {
	    var self = this;
	
	    // Make sure user has not released over iframe or disabled element
	    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
	      self.ontouchend(e);
	      return;
	    }
	
	    if (self.isScrolling) {
	      self.canTap = false;
	      return;
	    }
	
	    self.newPoints = getPointerXY(e);
	
	    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
	      return;
	    }
	
	    if (!(self.isSwiping && self.isSwiping === true)) {
	      e.preventDefault();
	    }
	
	    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
	    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
	
	    self.distance = distance(self.newPoints[0], self.startPoints[0]);
	
	    // Skip false ontouchmove events (Chrome)
	    if (self.distance > 0) {
	      if (self.isSwiping) {
	        self.onSwipe(e);
	      } else if (self.isPanning) {
	        self.onPan();
	      } else if (self.isZooming) {
	        self.onZoom();
	      }
	    }
	  };
	
	  Guestures.prototype.onSwipe = function (e) {
	    var self = this,
	      instance = self.instance,
	      swiping = self.isSwiping,
	      left = self.sliderStartPos.left || 0,
	      angle;
	
	    // If direction is not yet determined
	    if (swiping === true) {
	      // We need at least 10px distance to correctly calculate an angle
	      if (Math.abs(self.distance) > 10) {
	        self.canTap = false;
	
	        if (instance.group.length < 2 && self.opts.vertical) {
	          self.isSwiping = "y";
	        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
	          self.isSwiping = "x";
	        } else {
	          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);
	
	          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
	        }
	
	        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
	          self.isScrolling = true;
	
	          return;
	        }
	
	        instance.isDragging = self.isSwiping;
	
	        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
	        self.startPoints = self.newPoints;
	
	        $.each(instance.slides, (function (index, slide) {
	          var slidePos, stagePos;
	
	          $.fancybox.stop(slide.$slide);
	
	          slidePos = $.fancybox.getTranslate(slide.$slide);
	          stagePos = $.fancybox.getTranslate(instance.$refs.stage);
	
	          slide.$slide
	            .css({
	              transform: "",
	              opacity: "",
	              "transition-duration": ""
	            })
	            .removeClass("fancybox-animated")
	            .removeClass((function (index, className) {
	              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
	            }));
	
	          if (slide.pos === instance.current.pos) {
	            self.sliderStartPos.top = slidePos.top - stagePos.top;
	            self.sliderStartPos.left = slidePos.left - stagePos.left;
	          }
	
	          $.fancybox.setTranslate(slide.$slide, {
	            top: slidePos.top - stagePos.top,
	            left: slidePos.left - stagePos.left
	          });
	        }));
	
	        // Stop slideshow
	        if (instance.SlideShow && instance.SlideShow.isActive) {
	          instance.SlideShow.stop();
	        }
	      }
	
	      return;
	    }
	
	    // Sticky edges
	    if (swiping == "x") {
	      if (
	        self.distanceX > 0 &&
	        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
	      ) {
	        left = left + Math.pow(self.distanceX, 0.8);
	      } else if (
	        self.distanceX < 0 &&
	        (self.instance.group.length < 2 ||
	          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
	      ) {
	        left = left - Math.pow(-self.distanceX, 0.8);
	      } else {
	        left = left + self.distanceX;
	      }
	    }
	
	    self.sliderLastPos = {
	      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
	      left: left
	    };
	
	    if (self.requestId) {
	      cancelAFrame(self.requestId);
	
	      self.requestId = null;
	    }
	
	    self.requestId = requestAFrame((function () {
	      if (self.sliderLastPos) {
	        $.each(self.instance.slides, (function (index, slide) {
	          var pos = slide.pos - self.instance.currPos;
	
	          $.fancybox.setTranslate(slide.$slide, {
	            top: self.sliderLastPos.top,
	            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
	          });
	        }));
	
	        self.$container.addClass("fancybox-is-sliding");
	      }
	    }));
	  };
	
	  Guestures.prototype.onPan = function () {
	    var self = this;
	
	    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
	    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
	      self.startPoints = self.newPoints;
	      return;
	    }
	
	    self.canTap = false;
	
	    self.contentLastPos = self.limitMovement();
	
	    if (self.requestId) {
	      cancelAFrame(self.requestId);
	    }
	
	    self.requestId = requestAFrame((function () {
	      $.fancybox.setTranslate(self.$content, self.contentLastPos);
	    }));
	  };
	
	  // Make panning sticky to the edges
	  Guestures.prototype.limitMovement = function () {
	    var self = this;
	
	    var canvasWidth = self.canvasWidth;
	    var canvasHeight = self.canvasHeight;
	
	    var distanceX = self.distanceX;
	    var distanceY = self.distanceY;
	
	    var contentStartPos = self.contentStartPos;
	
	    var currentOffsetX = contentStartPos.left;
	    var currentOffsetY = contentStartPos.top;
	
	    var currentWidth = contentStartPos.width;
	    var currentHeight = contentStartPos.height;
	
	    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
	
	    if (currentWidth > canvasWidth) {
	      newOffsetX = currentOffsetX + distanceX;
	    } else {
	      newOffsetX = currentOffsetX;
	    }
	
	    newOffsetY = currentOffsetY + distanceY;
	
	    // Slow down proportionally to traveled distance
	    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
	    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
	
	    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
	    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);
	
	    //   ->
	    if (distanceX > 0 && newOffsetX > minTranslateX) {
	      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
	    }
	
	    //    <-
	    if (distanceX < 0 && newOffsetX < maxTranslateX) {
	      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
	    }
	
	    //   \/
	    if (distanceY > 0 && newOffsetY > minTranslateY) {
	      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
	    }
	
	    //   /\
	    if (distanceY < 0 && newOffsetY < maxTranslateY) {
	      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
	    }
	
	    return {
	      top: newOffsetY,
	      left: newOffsetX
	    };
	  };
	
	  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
	    var self = this;
	
	    var canvasWidth = self.canvasWidth;
	    var canvasHeight = self.canvasHeight;
	
	    if (newWidth > canvasWidth) {
	      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
	      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
	    } else {
	      // Center horizontally
	      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
	    }
	
	    if (newHeight > canvasHeight) {
	      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
	      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
	    } else {
	      // Center vertically
	      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
	    }
	
	    return {
	      top: newOffsetY,
	      left: newOffsetX
	    };
	  };
	
	  Guestures.prototype.onZoom = function () {
	    var self = this;
	
	    // Calculate current distance between points to get pinch ratio and new width and height
	    var contentStartPos = self.contentStartPos;
	
	    var currentWidth = contentStartPos.width;
	    var currentHeight = contentStartPos.height;
	
	    var currentOffsetX = contentStartPos.left;
	    var currentOffsetY = contentStartPos.top;
	
	    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
	
	    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
	
	    var newWidth = Math.floor(currentWidth * pinchRatio);
	    var newHeight = Math.floor(currentHeight * pinchRatio);
	
	    // This is the translation due to pinch-zooming
	    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
	    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
	
	    // Point between the two touches
	    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
	    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
	
	    // And this is the translation due to translation of the centerpoint
	    // between the two fingers
	    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
	    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
	
	    // The new offset is the old/current one plus the total translation
	    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
	    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
	
	    var newPos = {
	      top: newOffsetY,
	      left: newOffsetX,
	      scaleX: pinchRatio,
	      scaleY: pinchRatio
	    };
	
	    self.canTap = false;
	
	    self.newWidth = newWidth;
	    self.newHeight = newHeight;
	
	    self.contentLastPos = newPos;
	
	    if (self.requestId) {
	      cancelAFrame(self.requestId);
	    }
	
	    self.requestId = requestAFrame((function () {
	      $.fancybox.setTranslate(self.$content, self.contentLastPos);
	    }));
	  };
	
	  Guestures.prototype.ontouchend = function (e) {
	    var self = this;
	
	    var swiping = self.isSwiping;
	    var panning = self.isPanning;
	    var zooming = self.isZooming;
	    var scrolling = self.isScrolling;
	
	    self.endPoints = getPointerXY(e);
	    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
	
	    self.$container.removeClass("fancybox-is-grabbing");
	
	    $(document).off(".fb.touch");
	
	    document.removeEventListener("scroll", self.onscroll, true);
	
	    if (self.requestId) {
	      cancelAFrame(self.requestId);
	
	      self.requestId = null;
	    }
	
	    self.isSwiping = false;
	    self.isPanning = false;
	    self.isZooming = false;
	    self.isScrolling = false;
	
	    self.instance.isDragging = false;
	
	    if (self.canTap) {
	      return self.onTap(e);
	    }
	
	    self.speed = 100;
	
	    // Speed in px/ms
	    self.velocityX = (self.distanceX / self.dMs) * 0.5;
	    self.velocityY = (self.distanceY / self.dMs) * 0.5;
	
	    if (panning) {
	      self.endPanning();
	    } else if (zooming) {
	      self.endZooming();
	    } else {
	      self.endSwiping(swiping, scrolling);
	    }
	
	    return;
	  };
	
	  Guestures.prototype.endSwiping = function (swiping, scrolling) {
	    var self = this,
	      ret = false,
	      len = self.instance.group.length,
	      distanceX = Math.abs(self.distanceX),
	      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
	      speedX = 300;
	
	    self.sliderLastPos = null;
	
	    // Close if swiped vertically / navigate if horizontally
	    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
	      // Continue vertical movement
	      $.fancybox.animate(
	        self.instance.current.$slide, {
	          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
	          opacity: 0
	        },
	        200
	      );
	      ret = self.instance.close(true, 250);
	    } else if (canAdvance && self.distanceX > 0) {
	      ret = self.instance.previous(speedX);
	    } else if (canAdvance && self.distanceX < 0) {
	      ret = self.instance.next(speedX);
	    }
	
	    if (ret === false && (swiping == "x" || swiping == "y")) {
	      self.instance.centerSlide(200);
	    }
	
	    self.$container.removeClass("fancybox-is-sliding");
	  };
	
	  // Limit panning from edges
	  // ========================
	  Guestures.prototype.endPanning = function () {
	    var self = this,
	      newOffsetX,
	      newOffsetY,
	      newPos;
	
	    if (!self.contentLastPos) {
	      return;
	    }
	
	    if (self.opts.momentum === false || self.dMs > 350) {
	      newOffsetX = self.contentLastPos.left;
	      newOffsetY = self.contentLastPos.top;
	    } else {
	      // Continue movement
	      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
	      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
	    }
	
	    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
	
	    newPos.width = self.contentStartPos.width;
	    newPos.height = self.contentStartPos.height;
	
	    $.fancybox.animate(self.$content, newPos, 366);
	  };
	
	  Guestures.prototype.endZooming = function () {
	    var self = this;
	
	    var current = self.instance.current;
	
	    var newOffsetX, newOffsetY, newPos, reset;
	
	    var newWidth = self.newWidth;
	    var newHeight = self.newHeight;
	
	    if (!self.contentLastPos) {
	      return;
	    }
	
	    newOffsetX = self.contentLastPos.left;
	    newOffsetY = self.contentLastPos.top;
	
	    reset = {
	      top: newOffsetY,
	      left: newOffsetX,
	      width: newWidth,
	      height: newHeight,
	      scaleX: 1,
	      scaleY: 1
	    };
	
	    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
	    $.fancybox.setTranslate(self.$content, reset);
	
	    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
	      self.instance.scaleToFit(150);
	    } else if (newWidth > current.width || newHeight > current.height) {
	      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
	    } else {
	      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
	
	      $.fancybox.animate(self.$content, newPos, 150);
	    }
	  };
	
	  Guestures.prototype.onTap = function (e) {
	    var self = this;
	    var $target = $(e.target);
	
	    var instance = self.instance;
	    var current = instance.current;
	
	    var endPoints = (e && getPointerXY(e)) || self.startPoints;
	
	    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
	    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
	
	    var where;
	
	    var process = function (prefix) {
	      var action = current.opts[prefix];
	
	      if ($.isFunction(action)) {
	        action = action.apply(instance, [current, e]);
	      }
	
	      if (!action) {
	        return;
	      }
	
	      switch (action) {
	        case "close":
	          instance.close(self.startEvent);
	
	          break;
	
	        case "toggleControls":
	          instance.toggleControls();
	
	          break;
	
	        case "next":
	          instance.next();
	
	          break;
	
	        case "nextOrClose":
	          if (instance.group.length > 1) {
	            instance.next();
	          } else {
	            instance.close(self.startEvent);
	          }
	
	          break;
	
	        case "zoom":
	          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
	            if (instance.canPan()) {
	              instance.scaleToFit();
	            } else if (instance.isScaledDown()) {
	              instance.scaleToActual(tapX, tapY);
	            } else if (instance.group.length < 2) {
	              instance.close(self.startEvent);
	            }
	          }
	
	          break;
	      }
	    };
	
	    // Ignore right click
	    if (e.originalEvent && e.originalEvent.button == 2) {
	      return;
	    }
	
	    // Skip if clicked on the scrollbar
	    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
	      return;
	    }
	
	    // Check where is clicked
	    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
	      where = "Outside";
	    } else if ($target.is(".fancybox-slide")) {
	      where = "Slide";
	    } else if (
	      instance.current.$content &&
	      instance.current.$content
	      .find($target)
	      .addBack()
	      .filter($target).length
	    ) {
	      where = "Content";
	    } else {
	      return;
	    }
	
	    // Check if this is a double tap
	    if (self.tapped) {
	      // Stop previously created single tap
	      clearTimeout(self.tapped);
	      self.tapped = null;
	
	      // Skip if distance between taps is too big
	      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
	        return this;
	      }
	
	      // OK, now we assume that this is a double-tap
	      process("dblclick" + where);
	    } else {
	      // Single tap will be processed if user has not clicked second time within 300ms
	      // or there is no need to wait for double-tap
	      self.tapX = tapX;
	      self.tapY = tapY;
	
	      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
	        self.tapped = setTimeout((function () {
	          self.tapped = null;
	
	          if (!instance.isAnimating) {
	            process("click" + where);
	          }
	        }), 500);
	      } else {
	        process("click" + where);
	      }
	    }
	
	    return this;
	  };
	
	  $(document)
	    .on("onActivate.fb", (function (e, instance) {
	      if (instance && !instance.Guestures) {
	        instance.Guestures = new Guestures(instance);
	      }
	    }))
	    .on("beforeClose.fb", (function (e, instance) {
	      if (instance && instance.Guestures) {
	        instance.Guestures.destroy();
	      }
	    }));
	})(window, document, jQuery);
	// ==========================================================================
	//
	// SlideShow
	// Enables slideshow functionality
	//
	// Example of usage:
	// $.fancybox.getInstance().SlideShow.start()
	//
	// ==========================================================================
	(function (document, $) {
	  "use strict";
	
	  $.extend(true, $.fancybox.defaults, {
	    btnTpl: {
	      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
	        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
	        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
	        "</button>"
	    },
	    slideShow: {
	      autoStart: false,
	      speed: 3000,
	      progress: true
	    }
	  });
	
	  var SlideShow = function (instance) {
	    this.instance = instance;
	    this.init();
	  };
	
	  $.extend(SlideShow.prototype, {
	    timer: null,
	    isActive: false,
	    $button: null,
	
	    init: function () {
	      var self = this,
	        instance = self.instance,
	        opts = instance.group[instance.currIndex].opts.slideShow;
	
	      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", (function () {
	        self.toggle();
	      }));
	
	      if (instance.group.length < 2 || !opts) {
	        self.$button.hide();
	      } else if (opts.progress) {
	        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
	      }
	    },
	
	    set: function (force) {
	      var self = this,
	        instance = self.instance,
	        current = instance.current;
	
	      // Check if reached last element
	      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
	        if (self.isActive && current.contentType !== "video") {
	          if (self.$progress) {
	            $.fancybox.animate(self.$progress.show(), {
	              scaleX: 1
	            }, current.opts.slideShow.speed);
	          }
	
	          self.timer = setTimeout((function () {
	            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
	              instance.jumpTo(0);
	            } else {
	              instance.next();
	            }
	          }), current.opts.slideShow.speed);
	        }
	      } else {
	        self.stop();
	        instance.idleSecondsCounter = 0;
	        instance.showControls();
	      }
	    },
	
	    clear: function () {
	      var self = this;
	
	      clearTimeout(self.timer);
	
	      self.timer = null;
	
	      if (self.$progress) {
	        self.$progress.removeAttr("style").hide();
	      }
	    },
	
	    start: function () {
	      var self = this,
	        current = self.instance.current;
	
	      if (current) {
	        self.$button
	          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
	          .removeClass("fancybox-button--play")
	          .addClass("fancybox-button--pause");
	
	        self.isActive = true;
	
	        if (current.isComplete) {
	          self.set(true);
	        }
	
	        self.instance.trigger("onSlideShowChange", true);
	      }
	    },
	
	    stop: function () {
	      var self = this,
	        current = self.instance.current;
	
	      self.clear();
	
	      self.$button
	        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
	        .removeClass("fancybox-button--pause")
	        .addClass("fancybox-button--play");
	
	      self.isActive = false;
	
	      self.instance.trigger("onSlideShowChange", false);
	
	      if (self.$progress) {
	        self.$progress.removeAttr("style").hide();
	      }
	    },
	
	    toggle: function () {
	      var self = this;
	
	      if (self.isActive) {
	        self.stop();
	      } else {
	        self.start();
	      }
	    }
	  });
	
	  $(document).on({
	    "onInit.fb": function (e, instance) {
	      if (instance && !instance.SlideShow) {
	        instance.SlideShow = new SlideShow(instance);
	      }
	    },
	
	    "beforeShow.fb": function (e, instance, current, firstRun) {
	      var SlideShow = instance && instance.SlideShow;
	
	      if (firstRun) {
	        if (SlideShow && current.opts.slideShow.autoStart) {
	          SlideShow.start();
	        }
	      } else if (SlideShow && SlideShow.isActive) {
	        SlideShow.clear();
	      }
	    },
	
	    "afterShow.fb": function (e, instance, current) {
	      var SlideShow = instance && instance.SlideShow;
	
	      if (SlideShow && SlideShow.isActive) {
	        SlideShow.set();
	      }
	    },
	
	    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
	      var SlideShow = instance && instance.SlideShow;
	
	      // "P" or Spacebar
	      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
	        keypress.preventDefault();
	
	        SlideShow.toggle();
	      }
	    },
	
	    "beforeClose.fb onDeactivate.fb": function (e, instance) {
	      var SlideShow = instance && instance.SlideShow;
	
	      if (SlideShow) {
	        SlideShow.stop();
	      }
	    }
	  });
	
	  // Page Visibility API to pause slideshow when window is not active
	  $(document).on("visibilitychange", (function () {
	    var instance = $.fancybox.getInstance(),
	      SlideShow = instance && instance.SlideShow;
	
	    if (SlideShow && SlideShow.isActive) {
	      if (document.hidden) {
	        SlideShow.clear();
	      } else {
	        SlideShow.set();
	      }
	    }
	  }));
	})(document, jQuery);
	// ==========================================================================
	//
	// FullScreen
	// Adds fullscreen functionality
	//
	// ==========================================================================
	(function (document, $) {
	  "use strict";
	
	  // Collection of methods supported by user browser
	  var fn = (function () {
	    var fnMap = [
	      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
	      // new WebKit
	      [
	        "webkitRequestFullscreen",
	        "webkitExitFullscreen",
	        "webkitFullscreenElement",
	        "webkitFullscreenEnabled",
	        "webkitfullscreenchange",
	        "webkitfullscreenerror"
	      ],
	      // old WebKit (Safari 5.1)
	      [
	        "webkitRequestFullScreen",
	        "webkitCancelFullScreen",
	        "webkitCurrentFullScreenElement",
	        "webkitCancelFullScreen",
	        "webkitfullscreenchange",
	        "webkitfullscreenerror"
	      ],
	      [
	        "mozRequestFullScreen",
	        "mozCancelFullScreen",
	        "mozFullScreenElement",
	        "mozFullScreenEnabled",
	        "mozfullscreenchange",
	        "mozfullscreenerror"
	      ],
	      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
	    ];
	
	    var ret = {};
	
	    for (var i = 0; i < fnMap.length; i++) {
	      var val = fnMap[i];
	
	      if (val && val[1] in document) {
	        for (var j = 0; j < val.length; j++) {
	          ret[fnMap[0][j]] = val[j];
	        }
	
	        return ret;
	      }
	    }
	
	    return false;
	  })();
	
	  if (fn) {
	    var FullScreen = {
	      request: function (elem) {
	        elem = elem || document.documentElement;
	
	        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
	      },
	      exit: function () {
	        document[fn.exitFullscreen]();
	      },
	      toggle: function (elem) {
	        elem = elem || document.documentElement;
	
	        if (this.isFullscreen()) {
	          this.exit();
	        } else {
	          this.request(elem);
	        }
	      },
	      isFullscreen: function () {
	        return Boolean(document[fn.fullscreenElement]);
	      },
	      enabled: function () {
	        return Boolean(document[fn.fullscreenEnabled]);
	      }
	    };
	
	    $.extend(true, $.fancybox.defaults, {
	      btnTpl: {
	        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
	          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
	          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
	          "</button>"
	      },
	      fullScreen: {
	        autoStart: false
	      }
	    });
	
	    $(document).on(fn.fullscreenchange, (function () {
	      var isFullscreen = FullScreen.isFullscreen(),
	        instance = $.fancybox.getInstance();
	
	      if (instance) {
	        // If image is zooming, then force to stop and reposition properly
	        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
	          instance.isAnimating = false;
	
	          instance.update(true, true, 0);
	
	          if (!instance.isComplete) {
	            instance.complete();
	          }
	        }
	
	        instance.trigger("onFullscreenChange", isFullscreen);
	
	        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
	
	        instance.$refs.toolbar
	          .find("[data-fancybox-fullscreen]")
	          .toggleClass("fancybox-button--fsenter", !isFullscreen)
	          .toggleClass("fancybox-button--fsexit", isFullscreen);
	      }
	    }));
	  }
	
	  $(document).on({
	    "onInit.fb": function (e, instance) {
	      var $container;
	
	      if (!fn) {
	        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
	
	        return;
	      }
	
	      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
	        $container = instance.$refs.container;
	
	        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function (e) {
	          e.stopPropagation();
	          e.preventDefault();
	
	          FullScreen.toggle();
	        }));
	
	        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
	          FullScreen.request();
	        }
	
	        // Expose API
	        instance.FullScreen = FullScreen;
	      } else if (instance) {
	        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
	      }
	    },
	
	    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
	      // "F"
	      if (instance && instance.FullScreen && keycode === 70) {
	        keypress.preventDefault();
	
	        instance.FullScreen.toggle();
	      }
	    },
	
	    "beforeClose.fb": function (e, instance) {
	      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
	        FullScreen.exit();
	      }
	    }
	  });
	})(document, jQuery);
	// ==========================================================================
	//
	// Thumbs
	// Displays thumbnails in a grid
	//
	// ==========================================================================
	(function (document, $) {
	  "use strict";
	
	  var CLASS = "fancybox-thumbs",
	    CLASS_ACTIVE = CLASS + "-active";
	
	  // Make sure there are default values
	  $.fancybox.defaults = $.extend(
	    true, {
	      btnTpl: {
	        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
	          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
	          "</button>"
	      },
	      thumbs: {
	        autoStart: false, // Display thumbnails on opening
	        hideOnClose: true, // Hide thumbnail grid when closing animation starts
	        parentEl: ".fancybox-container", // Container is injected into this element
	        axis: "y" // Vertical (y) or horizontal (x) scrolling
	      }
	    },
	    $.fancybox.defaults
	  );
	
	  var FancyThumbs = function (instance) {
	    this.init(instance);
	  };
	
	  $.extend(FancyThumbs.prototype, {
	    $button: null,
	    $grid: null,
	    $list: null,
	    isVisible: false,
	    isActive: false,
	
	    init: function (instance) {
	      var self = this,
	        group = instance.group,
	        enabled = 0;
	
	      self.instance = instance;
	      self.opts = group[instance.currIndex].opts.thumbs;
	
	      instance.Thumbs = self;
	
	      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
	
	      // Enable thumbs if at least two group items have thumbnails
	      for (var i = 0, len = group.length; i < len; i++) {
	        if (group[i].thumb) {
	          enabled++;
	        }
	
	        if (enabled > 1) {
	          break;
	        }
	      }
	
	      if (enabled > 1 && !!self.opts) {
	        self.$button.removeAttr("style").on("click", (function () {
	          self.toggle();
	        }));
	
	        self.isActive = true;
	      } else {
	        self.$button.hide();
	      }
	    },
	
	    create: function () {
	      var self = this,
	        instance = self.instance,
	        parentEl = self.opts.parentEl,
	        list = [],
	        src;
	
	      if (!self.$grid) {
	        // Create main element
	        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
	          instance.$refs.container
	          .find(parentEl)
	          .addBack()
	          .filter(parentEl)
	        );
	
	        // Add "click" event that performs gallery navigation
	        self.$grid.on("click", "a", (function () {
	          instance.jumpTo($(this).attr("data-index"));
	        }));
	      }
	
	      // Build the list
	      if (!self.$list) {
	        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
	      }
	
	      $.each(instance.group, (function (i, item) {
	        src = item.thumb;
	
	        if (!src && item.type === "image") {
	          src = item.src;
	        }
	
	        list.push(
	          '<a href="javascript:;" tabindex="0" data-index="' +
	          i +
	          '"' +
	          (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
	          "></a>"
	        );
	      }));
	
	      self.$list[0].innerHTML = list.join("");
	
	      if (self.opts.axis === "x") {
	        // Set fixed width for list element to enable horizontal scrolling
	        self.$list.width(
	          parseInt(self.$grid.css("padding-right"), 10) +
	          instance.group.length *
	          self.$list
	          .children()
	          .eq(0)
	          .outerWidth(true)
	        );
	      }
	    },
	
	    focus: function (duration) {
	      var self = this,
	        $list = self.$list,
	        $grid = self.$grid,
	        thumb,
	        thumbPos;
	
	      if (!self.instance.current) {
	        return;
	      }
	
	      thumb = $list
	        .children()
	        .removeClass(CLASS_ACTIVE)
	        .filter('[data-index="' + self.instance.current.index + '"]')
	        .addClass(CLASS_ACTIVE);
	
	      thumbPos = thumb.position();
	
	      // Check if need to scroll to make current thumb visible
	      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
	        $list.stop().animate({
	            scrollTop: $list.scrollTop() + thumbPos.top
	          },
	          duration
	        );
	      } else if (
	        self.opts.axis === "x" &&
	        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
	      ) {
	        $list
	          .parent()
	          .stop()
	          .animate({
	              scrollLeft: thumbPos.left
	            },
	            duration
	          );
	      }
	    },
	
	    update: function () {
	      var that = this;
	      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
	
	      if (that.isVisible) {
	        if (!that.$grid) {
	          that.create();
	        }
	
	        that.instance.trigger("onThumbsShow");
	
	        that.focus(0);
	      } else if (that.$grid) {
	        that.instance.trigger("onThumbsHide");
	      }
	
	      // Update content position
	      that.instance.update();
	    },
	
	    hide: function () {
	      this.isVisible = false;
	      this.update();
	    },
	
	    show: function () {
	      this.isVisible = true;
	      this.update();
	    },
	
	    toggle: function () {
	      this.isVisible = !this.isVisible;
	      this.update();
	    }
	  });
	
	  $(document).on({
	    "onInit.fb": function (e, instance) {
	      var Thumbs;
	
	      if (instance && !instance.Thumbs) {
	        Thumbs = new FancyThumbs(instance);
	
	        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
	          Thumbs.show();
	        }
	      }
	    },
	
	    "beforeShow.fb": function (e, instance, item, firstRun) {
	      var Thumbs = instance && instance.Thumbs;
	
	      if (Thumbs && Thumbs.isVisible) {
	        Thumbs.focus(firstRun ? 0 : 250);
	      }
	    },
	
	    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
	      var Thumbs = instance && instance.Thumbs;
	
	      // "G"
	      if (Thumbs && Thumbs.isActive && keycode === 71) {
	        keypress.preventDefault();
	
	        Thumbs.toggle();
	      }
	    },
	
	    "beforeClose.fb": function (e, instance) {
	      var Thumbs = instance && instance.Thumbs;
	
	      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
	        Thumbs.$grid.hide();
	      }
	    }
	  });
	})(document, jQuery);
	//// ==========================================================================
	//
	// Share
	// Displays simple form for sharing current url
	//
	// ==========================================================================
	(function (document, $) {
	  "use strict";
	
	  $.extend(true, $.fancybox.defaults, {
	    btnTpl: {
	      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
	        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
	        "</button>"
	    },
	    share: {
	      url: function (instance, item) {
	        return (
	          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
	        );
	      },
	      tpl: '<div class="fancybox-share">' +
	        "<h1>{{SHARE}}</h1>" +
	        "<p>" +
	        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
	        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
	        "<span>Facebook</span>" +
	        "</a>" +
	        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
	        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
	        "<span>Twitter</span>" +
	        "</a>" +
	        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
	        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
	        "<span>Pinterest</span>" +
	        "</a>" +
	        "</p>" +
	        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
	        "</div>"
	    }
	  });
	
	  function escapeHtml(string) {
	    var entityMap = {
	      "&": "&amp;",
	      "<": "&lt;",
	      ">": "&gt;",
	      '"': "&quot;",
	      "'": "&#39;",
	      "/": "&#x2F;",
	      "`": "&#x60;",
	      "=": "&#x3D;"
	    };
	
	    return String(string).replace(/[&<>"'`=\/]/g, (function (s) {
	      return entityMap[s];
	    }));
	  }
	
	  $(document).on("click", "[data-fancybox-share]", (function () {
	    var instance = $.fancybox.getInstance(),
	      current = instance.current || null,
	      url,
	      tpl;
	
	    if (!current) {
	      return;
	    }
	
	    if ($.type(current.opts.share.url) === "function") {
	      url = current.opts.share.url.apply(current, [instance, current]);
	    }
	
	    tpl = current.opts.share.tpl
	      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
	      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
	      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
	      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
	
	    $.fancybox.open({
	      src: instance.translate(instance, tpl),
	      type: "html",
	      opts: {
	        touch: false,
	        animationEffect: false,
	        afterLoad: function (shareInstance, shareCurrent) {
	          // Close self if parent instance is closing
	          instance.$refs.container.one("beforeClose.fb", (function () {
	            shareInstance.close(null, 0);
	          }));
	
	          // Opening links in a popup window
	          shareCurrent.$content.find(".fancybox-share__button").click((function () {
	            window.open(this.href, "Share", "width=550, height=450");
	            return false;
	          }));
	        },
	        mobile: {
	          autoFocus: false
	        }
	      }
	    });
	  }));
	})(document, jQuery);
	// ==========================================================================
	//
	// Hash
	// Enables linking to each modal
	//
	// ==========================================================================
	(function (window, document, $) {
	  "use strict";
	
	  // Simple $.escapeSelector polyfill (for jQuery prior v3)
	  if (!$.escapeSelector) {
	    $.escapeSelector = function (sel) {
	      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
	      var fcssescape = function (ch, asCodePoint) {
	        if (asCodePoint) {
	          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
	          if (ch === "\0") {
	            return "\uFFFD";
	          }
	
	          // Control characters and (dependent upon position) numbers get escaped as code points
	          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
	        }
	
	        // Other potentially-special ASCII characters get backslash-escaped
	        return "\\" + ch;
	      };
	
	      return (sel + "").replace(rcssescape, fcssescape);
	    };
	  }
	
	  // Get info about gallery name and current index from url
	  function parseUrl() {
	    var hash = window.location.hash.substr(1),
	      rez = hash.split("-"),
	      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
	      gallery = rez.join("-");
	
	    return {
	      hash: hash,
	      /* Index is starting from 1 */
	      index: index < 1 ? 1 : index,
	      gallery: gallery
	    };
	  }
	
	  // Trigger click evnt on links to open new fancyBox instance
	  function triggerFromUrl(url) {
	    if (url.gallery !== "") {
	      // If we can find element matching 'data-fancybox' atribute,
	      // then triggering click event should start fancyBox
	      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
	        .eq(url.index - 1)
	        .focus()
	        .trigger("click.fb-start");
	    }
	  }
	
	  // Get gallery name from current instance
	  function getGalleryID(instance) {
	    var opts, ret;
	
	    if (!instance) {
	      return false;
	    }
	
	    opts = instance.current ? instance.current.opts : instance.opts;
	    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
	
	    return ret === "" ? false : ret;
	  }
	
	  // Start when DOM becomes ready
	  $((function () {
	    // Check if user has disabled this module
	    if ($.fancybox.defaults.hash === false) {
	      return;
	    }
	
	    // Update hash when opening/closing fancyBox
	    $(document).on({
	      "onInit.fb": function (e, instance) {
	        var url, gallery;
	
	        if (instance.group[instance.currIndex].opts.hash === false) {
	          return;
	        }
	
	        url = parseUrl();
	        gallery = getGalleryID(instance);
	
	        // Make sure gallery start index matches index from hash
	        if (gallery && url.gallery && gallery == url.gallery) {
	          instance.currIndex = url.index - 1;
	        }
	      },
	
	      "beforeShow.fb": function (e, instance, current, firstRun) {
	        var gallery;
	
	        if (!current || current.opts.hash === false) {
	          return;
	        }
	
	        // Check if need to update window hash
	        gallery = getGalleryID(instance);
	
	        if (!gallery) {
	          return;
	        }
	
	        // Variable containing last hash value set by fancyBox
	        // It will be used to determine if fancyBox needs to close after hash change is detected
	        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");
	
	        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
	        if (window.location.hash === "#" + instance.currentHash) {
	          return;
	        }
	
	        if (firstRun && !instance.origHash) {
	          instance.origHash = window.location.hash;
	        }
	
	        if (instance.hashTimer) {
	          clearTimeout(instance.hashTimer);
	        }
	
	        // Update hash
	        instance.hashTimer = setTimeout((function () {
	          if ("replaceState" in window.history) {
	            window.history[firstRun ? "pushState" : "replaceState"]({},
	              document.title,
	              window.location.pathname + window.location.search + "#" + instance.currentHash
	            );
	
	            if (firstRun) {
	              instance.hasCreatedHistory = true;
	            }
	          } else {
	            window.location.hash = instance.currentHash;
	          }
	
	          instance.hashTimer = null;
	        }), 300);
	      },
	
	      "beforeClose.fb": function (e, instance, current) {
	        if (!current || current.opts.hash === false) {
	          return;
	        }
	
	        clearTimeout(instance.hashTimer);
	
	        // Goto previous history entry
	        if (instance.currentHash && instance.hasCreatedHistory) {
	          window.history.back();
	        } else if (instance.currentHash) {
	          if ("replaceState" in window.history) {
	            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
	          } else {
	            window.location.hash = instance.origHash;
	          }
	        }
	
	        instance.currentHash = null;
	      }
	    });
	
	    // Check if need to start/close after url has changed
	    $(window).on("hashchange.fb", (function () {
	      var url = parseUrl(),
	        fb = null;
	
	      // Find last fancyBox instance that has "hash"
	      $.each(
	        $(".fancybox-container")
	        .get()
	        .reverse(),
	        (function (index, value) {
	          var tmp = $(value).data("FancyBox");
	
	          if (tmp && tmp.currentHash) {
	            fb = tmp;
	            return false;
	          }
	        })
	      );
	
	      if (fb) {
	        // Now, compare hash values
	        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
	          fb.currentHash = null;
	
	          fb.close();
	        }
	      } else if (url.gallery !== "") {
	        triggerFromUrl(url);
	      }
	    }));
	
	    // Check current hash and trigger click event on matching element to start fancyBox, if needed
	    setTimeout((function () {
	      if (!$.fancybox.getInstance()) {
	        triggerFromUrl(parseUrl());
	      }
	    }), 50);
	  }));
	})(window, document, jQuery);
	// ==========================================================================
	//
	// Wheel
	// Basic mouse weheel support for gallery navigation
	//
	// ==========================================================================
	(function (document, $) {
	  "use strict";
	
	  var prevTime = new Date().getTime();
	
	  $(document).on({
	    "onInit.fb": function (e, instance, current) {
	      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function (e) {
	        var current = instance.current,
	          currTime = new Date().getTime();
	
	        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
	          return;
	        }
	
	        e.preventDefault();
	        e.stopPropagation();
	
	        if (current.$slide.hasClass("fancybox-animated")) {
	          return;
	        }
	
	        e = e.originalEvent || e;
	
	        if (currTime - prevTime < 250) {
	          return;
	        }
	
	        prevTime = currTime;
	
	        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
	      }));
	    }
	  });
	})(document, jQuery);
	
	// ------------------------------------------
	// Rellax.js
	// Buttery smooth parallax library
	// Copyright (c) 2016 Moe Amaya (@moeamaya)
	// MIT license
	//
	// Thanks to Paraxify.js and Jaime Cabllero
	// for parallax concepts
	// ------------------------------------------
	
	(function (root, factory) {
	  if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define([], factory);
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.Rellax = factory();
	  }
	}(typeof window !== "undefined" ? window : global, (function () {
	  var Rellax = function(el, options){
	    "use strict";
	
	    var self = Object.create(Rellax.prototype);
	
	    var posY = 0;
	    var screenY = 0;
	    var posX = 0;
	    var screenX = 0;
	    var blocks = [];
	    var pause = true;
	
	    // check what requestAnimationFrame to use, and if
	    // it's not supported, use the onscroll event
	    var loop = window.requestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.msRequestAnimationFrame ||
	      window.oRequestAnimationFrame ||
	      function(callback){ return setTimeout(callback, 1000 / 60); };
	
	    // store the id for later use
	    var loopId = null;
	
	    // Test via a getter in the options object to see if the passive property is accessed
	    var supportsPassive = false;
	    try {
	      var opts = Object.defineProperty({}, 'passive', {
	        get: function() {
	          supportsPassive = true;
	        }
	      });
	      window.addEventListener("testPassive", null, opts);
	      window.removeEventListener("testPassive", null, opts);
	    } catch (e) {}
	
	    // check what cancelAnimation method to use
	    var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
	
	    // check which transform property to use
	    var transformProp = window.transformProp || (function(){
	        var testEl = document.createElement('div');
	        if (testEl.style.transform === null) {
	          var vendors = ['Webkit', 'Moz', 'ms'];
	          for (var vendor in vendors) {
	            if (testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
	              return vendors[vendor] + 'Transform';
	            }
	          }
	        }
	        return 'transform';
	      })();
	
	    // Default Settings
	    self.options = {
	      speed: -2,
	      center: false,
	      wrapper: null,
	      relativeToWrapper: false,
	      round: true,
	      vertical: true,
	      horizontal: false,
	      callback: function() {},
	    };
	
	    // User defined options (might have more in the future)
	    if (options){
	      Object.keys(options).forEach((function(key){
	        self.options[key] = options[key];
	      }));
	    }
	
	    // By default, rellax class
	    if (!el) {
	      el = '.rellax';
	    }
	
	    // check if el is a className or a node
	    var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];
	
	    // Now query selector
	    if (elements.length > 0) {
	      self.elems = elements;
	    }
	
	    // The elements don't exist
	    else {
	      console.warn("Rellax: The elements you're trying to select don't exist.");
	      return;
	    }
	
	    // Has a wrapper and it exists
	    if (self.options.wrapper) {
	      if (!self.options.wrapper.nodeType) {
	        var wrapper = document.querySelector(self.options.wrapper);
	
	        if (wrapper) {
	          self.options.wrapper = wrapper;
	        } else {
	          console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
	          return;
	        }
	      }
	    }
	
	
	    // Get and cache initial position of all elements
	    var cacheBlocks = function() {
	      for (var i = 0; i < self.elems.length; i++){
	        var block = createBlock(self.elems[i]);
	        blocks.push(block);
	      }
	    };
	
	
	    // Let's kick this script off
	    // Build array for cached element values
	    var init = function() {
	      for (var i = 0; i < blocks.length; i++){
	        self.elems[i].style.cssText = blocks[i].style;
	      }
	
	      blocks = [];
	
	      screenY = window.innerHeight;
	      screenX = window.innerWidth;
	      setPosition();
	
	      cacheBlocks();
	
	      animate();
	
	      // If paused, unpause and set listener for window resizing events
	      if (pause) {
	        window.addEventListener('resize', init);
	        pause = false;
	        // Start the loop
	        update();
	      }
	    };
	
	    // We want to cache the parallax blocks'
	    // values: base, top, height, speed
	    // el: is dom object, return: el cache values
	    var createBlock = function(el) {
	      var dataPercentage = el.getAttribute( 'data-rellax-percentage' );
	      var dataSpeed = el.getAttribute( 'data-rellax-speed' );
	      var dataZindex = el.getAttribute( 'data-rellax-zindex' ) || 0;
	      var dataMin = el.getAttribute( 'data-rellax-min' );
	      var dataMax = el.getAttribute( 'data-rellax-max' );
	
	      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
	      // ensures elements are positioned based on HTML layout.
	      //
	      // If the element has the percentage attribute, the posY and posX needs to be
	      // the current scroll position's value, so that the elements are still positioned based on HTML layout
	      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
	      // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
	      if (self.options.relativeToWrapper) {
	        var scrollPosY = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
	        wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
	      }
	      var posY = self.options.vertical ? ( dataPercentage || self.options.center ? wrapperPosY : 0 ) : 0;
	      var posX = self.options.horizontal ? ( dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) : 0 ) : 0;
	
	      var blockTop = posY + el.getBoundingClientRect().top;
	      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
	
	      var blockLeft = posX + el.getBoundingClientRect().left;
	      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;
	
	      // apparently parallax equation everyone uses
	      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
	      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
	      if(self.options.center){ percentageX = 0.5; percentageY = 0.5; }
	
	      // Optional individual block speed as data attr, otherwise global speed
	      var speed = dataSpeed ? dataSpeed : self.options.speed;
	
	      var bases = updatePosition(percentageX, percentageY, speed);
	
	      // ~~Store non-translate3d transforms~~
	      // Store inline styles and extract transforms
	      var style = el.style.cssText;
	      var transform = '';
	
	      // Check if there's an inline styled transform
	      var searchResult = /transform\s*:/i.exec(style);
	      if (searchResult) {
	        // Get the index of the transform
	        var index = searchResult.index;
	
	        // Trim the style to the transform point and get the following semi-colon index
	        var trimmedStyle = style.slice(index);
	        var delimiter = trimmedStyle.indexOf(';');
	
	        // Remove "transform" string and save the attribute
	        if (delimiter) {
	          transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g,'');
	        } else {
	          transform = " " + trimmedStyle.slice(11).replace(/\s/g,'');
	        }
	      }
	
	      return {
	        baseX: bases.x,
	        baseY: bases.y,
	        top: blockTop,
	        left: blockLeft,
	        height: blockHeight,
	        width: blockWidth,
	        speed: speed,
	        style: style,
	        transform: transform,
	        zindex: dataZindex,
	        min: dataMin,
	        max: dataMax
	      };
	    };
	
	    // set scroll position (posY, posX)
	    // side effect method is not ideal, but okay for now
	    // returns true if the scroll changed, false if nothing happened
	    var setPosition = function() {
	      var oldY = posY;
	      var oldX = posX;
	
	      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
	      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
	      // If option relativeToWrapper is true, use relative wrapper value instead.
	      if (self.options.relativeToWrapper) {
	        var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
	        posY = scrollPosY - self.options.wrapper.offsetTop;
	      }
	
	
	      if (oldY != posY && self.options.vertical) {
	        // scroll changed, return true
	        return true;
	      }
	
	      if (oldX != posX && self.options.horizontal) {
	        // scroll changed, return true
	        return true;
	      }
	
	      // scroll did not change
	      return false;
	    };
	
	    // Ahh a pure function, gets new transform value
	    // based on scrollPosition and speed
	    // Allow for decimal pixel values
	    var updatePosition = function(percentageX, percentageY, speed) {
	      var result = {};
	      var valueX = (speed * (100 * (1 - percentageX)));
	      var valueY = (speed * (100 * (1 - percentageY)));
	
	      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
	      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
	
	      return result;
	    };
	
	    // Remove event listeners and loop again
	    var deferredUpdate = function() {
	      window.removeEventListener('resize', deferredUpdate);
	      window.removeEventListener('orientationchange', deferredUpdate);
	      (self.options.wrapper ? self.options.wrapper : window).removeEventListener('scroll', deferredUpdate);
	      (self.options.wrapper ? self.options.wrapper : document).removeEventListener('touchmove', deferredUpdate);
	
	      // loop again
	      loopId = loop(update);
	    };
	
	    // Loop
	    var update = function() {
	      if (setPosition() && pause === false) {
	        animate();
	
	        // loop again
	        loopId = loop(update);
	      } else {
	        loopId = null;
	
	        // Don't animate until we get a position updating event
	        window.addEventListener('resize', deferredUpdate);
	        window.addEventListener('orientationchange', deferredUpdate);
	        (self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? { passive: true } : false);
	        (self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? { passive: true } : false);
	      }
	    };
	
	    // Transform3d on parallax element
	    var animate = function() {
	      var positions;
	      for (var i = 0; i < self.elems.length; i++){
	        var percentageY = ((posY - blocks[i].top + screenY) / (blocks[i].height + screenY));
	        var percentageX = ((posX - blocks[i].left + screenX) / (blocks[i].width + screenX));
	
	        // Subtracting initialize value, so element stays in same spot as HTML
	        positions = updatePosition(percentageX, percentageY, blocks[i].speed);// - blocks[i].baseX;
	        var positionY = positions.y - blocks[i].baseY;
	        var positionX = positions.x - blocks[i].baseX;
	
	        // The next two "if" blocks go like this:
	        // Check if a limit is defined (first "min", then "max");
	        // Check if we need to change the Y or the X
	        // (Currently working only if just one of the axes is enabled)
	        // Then, check if the new position is inside the allowed limit
	        // If so, use new position. If not, set position to limit.
	
	        // Check if a min limit is defined
	        if (blocks[i].min !== null) {
	          if (self.options.vertical && !self.options.horizontal) {
	            positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
	          }
	          if (self.options.horizontal && !self.options.vertical) {
	            positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
	          }
	        }
	
	        // Check if a max limit is defined
	        if (blocks[i].max !== null) {
	          if (self.options.vertical && !self.options.horizontal) {
	            positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
	          }
	          if (self.options.horizontal && !self.options.vertical) {
	            positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
	          }
	        }
	
	        var zindex = blocks[i].zindex;
	
	        // Move that element
	        // (Set the new translation and append initial inline transforms.)
	        var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
	        self.elems[i].style[transformProp] = translate;
	      }
	      self.options.callback(positions);
	    };
	
	    self.destroy = function() {
	      for (var i = 0; i < self.elems.length; i++){
	        self.elems[i].style.cssText = blocks[i].style;
	      }
	
	      // Remove resize event listener if not pause, and pause
	      if (!pause) {
	        window.removeEventListener('resize', init);
	        pause = true;
	      }
	
	      // Clear the animation loop to prevent possible memory leak
	      clearLoop(loopId);
	      loopId = null;
	    };
	
	    // Init
	    init();
	
	    // Allow to recalculate the initial values whenever we want
	    self.refresh = init;
	
	    return self;
	  };
	  return Rellax;
	})));
	

    var ac,
    accordions = {
    	settings: {
    		accListItem: $('.layout.accordion.list-view .accordion-item'),
    		accTabItem: $('.layout.accordion.tab-view .accordion-item'),
    		accItem: $('.layout.accordion.tab-view details'),
    		accMenuTab: $('.layout.accordion.tab-view .accordion-title'),
    		breakpoint: 860
    	},
    	init: function() {
    		ac = this.settings;
    		this.bindUIActions();
    		console.log('accordions loaded!');
    	},
    	bindUIActions: function() {
    		// Add media query to tab view at ac.breakpoint
    		var windowSize = $(window).width();
    		// Get width of window on load or resize
    		$(window).on('load resize', (function() {
    			windowSize = $(window).width();
    
    			if ( windowSize >= ac.breakpoint ) {
    				$('.layout.accordion.tab-view .accordion-content').css('display', 'block');
    
    				// console.log(ac.accTabItem);
    				var hasActiveClass = false;
    				for ( var i = 0; i < ac.accTabItem.length; i++ ) {
    					if ( $(ac.accTabItem[i]).hasClass('active') ) {
    						hasActiveClass = true;
    						// console.log('An accordion was found with an active class.');
    						break
    					}
    				}
    
    				if (hasActiveClass == false) {
    					// console.log('None of the accordions have an active class.');
    					// Add active class to first accordion in tab view when screens are larger than ac.breakpoint
    					$('.layout.accordion.tab-view .accordion-item:first-child').addClass('active');
    				}
    			} else if ( windowSize < ac.breakpoint ) {
    				$('.layout.accordion.tab-view .accordion-item').removeClass('active');
    				$('.accordion-content').css('display', 'none');
    			}
    		}));
    
    		// List View
    		$('.layout.accordion.list-view .accordion-item').on('click', (function (evt) {
    			evt.preventDefault();
    			this.classList.toggle('active');
    			$(this).find('.accordion-content').slideToggle( '3000', (function() {
    				// Animation complete.
    			}));
    		}));
    
    		// Tab View, < ac.breakpointpx
    		$('.layout.accordion.tab-view .accordion-item').on('click', (function (evt) {
    			if ( windowSize < ac.breakpoint ) {
    				evt.preventDefault();
    				this.classList.toggle('active');
    				$(this).find('.accordion-content').slideToggle( '3000', (function() {
    					// Animation complete.
    				}));
    			}
    		}));
    
    		// Tab View — Disable accordion functionality
    		$('.layout.accordion.tab-view summary').on('click', (function(evt) {
    			if ( windowSize >= ac.breakpoint ) {
    				evt.preventDefault();
    			}
    		}));
    
    		// Tab View — Menu Selection
    		$('.layout.accordion.tab-view .accordion-title').on('click', (function (evt) {
    
    			// Define elements
    			var parentElement = accordions.getClosest(this, '.layout.accordion.tab-view');
    			var accTitleItems = parentElement.querySelectorAll('.accordion-title');
    			var accMenuItems = parentElement.querySelectorAll('.accordion-menu');
    			var accNavItems = parentElement.querySelectorAll('.accordion-nav-item');
    			var accGroups = parentElement.querySelectorAll('.accordion-group');
    
    			// Remove active class from all selected tabs, accordion groups, nav item, and accordion item
    			for ( var i = 0; i < accTitleItems.length; i++ ) {
    				accTitleItems[i].classList.remove('active');
    			}
    			for ( var i = 0; i < accMenuItems.length; i++ ) {
    				accMenuItems[i].classList.remove('active');
    			}
    			for ( var i = 0; i < accNavItems.length; i++ ) {
    				accNavItems[i].classList.remove('active');
    			}
    			for ( var i = 0; i < accGroups.length; i++ ) {
    				accGroups[i].classList.remove('active');
    			}
    
    			// Add active class to selected tab
    			this.classList.add('active');
    			var selectedItem = this.dataset.tab - 1;
    
    			// Add active class to accordion menu & first nav item
    			var thisMenu = accMenuItems[selectedItem];
    			thisMenu.classList.add('active');
    			var thisNavItem = thisMenu.querySelectorAll('.accordion-nav-item');
    			thisNavItem[0].classList.add('active');
    
    			// Add active class to accordion group
    			var thisGroup = accGroups[selectedItem];
    			thisGroup.classList.add('active');
    
    		}));
    
    		// Tab View — Show selected accordion
    		$('.layout.accordion.tab-view .accordion-nav-item').on('click', (function (evt) {
    
    			$(this).siblings().removeClass('active');
    			$(this).addClass('active');
    
    			// Define elements
    			var parentElement = accordions.getClosest(this, '.accordion-menu').dataset.tab;
    			var accordionElement = this.dataset.accordion;
    
    			// Remove active class from all accordions
    			$(this).closest('.row').find('.accordion-group[data-tab="' + parentElement + '"] .accordion-item').removeClass('active');
    			// Add active class to selected accordion
    			$(this).closest('.row').find('.accordion-group[data-tab="' + parentElement + '"] .accordion-item[data-accordion="' + accordionElement + '"]').addClass('active');
    
    		}));
    
    	},
    	getClosest: function (elem, selector) {
    		// Element.matches() polyfill
    		if (!Element.prototype.matches) {
    			Element.prototype.matches =
    				Element.prototype.matchesSelector ||
    				Element.prototype.mozMatchesSelector ||
    				Element.prototype.msMatchesSelector ||
    				Element.prototype.oMatchesSelector ||
    				Element.prototype.webkitMatchesSelector ||
    				function(s) {
    					var matches = (this.document || this.ownerDocument).querySelectorAll(s),
    						i = matches.length;
    					while (--i >= 0 && matches.item(i) !== this) {}
    					return i > -1;
    				};
    		}
    		// Get the closest matching element
    		for ( ; elem && elem !== document; elem = elem.parentNode ) {
    			if ( elem.matches( selector ) ) return elem;
    		}
    		return null;
    	}
    };
    
	var as,
	aos = {
		settings: {
			heroCards: $('#hero-cards .intro .content'),
			firstLayout: $('#layout-1 .buttons'),
			openCards: $('#hero-cards .item-list')
		},
		init: function() {
			as = this.settings;
			this.bindUIActions();
			console.log('aos loaded!');
		},
		bindUIActions: function() {
			AOS.init({
			    easing: 'ease-in-out',
			    once: false,
			    duration: 800
			});
			window.addEventListener('load', AOS.refresh);
		}
	};
	
    var cn,
    cookieNotice = {
    	settings: {
    		notice: $('.cookie-notice'),
    		close: $('.cookie-notice .close')
    	},
    	init: function() {
    		cn = this.settings;
    		this.bindUIActions();
    		console.log('cookieNotice loaded!');
    	},
    	bindUIActions: function() {
    		cn.close.on('click', (function() {
    			cn.notice.addClass('move');
    			setTimeout((function(){
    				cn.notice.addClass('hide');
    			}), 600);
    		}));
    	}
    };
    
    var nf,
    notification = {
    	settings: {
    		notice: $('.notification'),
    		close: $('.notification .close')
    	},
    	init: function() {
    		nf = this.settings;
    		this.bindUIActions();
    		console.log('notification loaded!');
    	},
    	bindUIActions: function() {
    		nf.close.on('click', (function() {
    			nf.notice.addClass('hide');
    		}));
    	}
    };
    
    var rq,
    randomQuote = {
    	settings: {
    		quoteList: $('.splash li'),
    		random: Math.floor(Math.random() * $('.splash li').length),
    	},
    	init: function() {
    		rq = this.settings;
    		this.bindUIActions();
    		console.log('randomQuote loaded!');
    	},
    	bindUIActions: function() {
    		rq.quoteList.hide().eq(rq.random).show();
    	}
    };
    
    var sl,
    slider = {
    	settings: {
    		sliderEls: document.getElementsByClassName('carousel'),
    		blogSliderEls: document.getElementsByClassName('blog-slider'),
    		maxDots: 5,
    		transformXIntervalNext: -18,
    		transformXIntervalPrev: 18,
    	},
    	init: function() {
    		sl = this.settings;
    		this.bindUIActions();
    		console.log('slider loaded!');
    	},
    	bindUIActions: function() {
    
    		if (sl.sliderEls.length > 0) {
    			for (var i = 0; i < sl.sliderEls.length; i++) {
    
    				$('.carousel .item-list').on('init', (function (event, slick) {
    					// console.log('A slick slider has been initialized.');
    					$(this).find('ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
    					$(this).find('ul.slick-dots li').each((function (index) {
    						$(this).addClass('dot-index-' + index);
    					}));
    					$(this).find('ul.slick-dots').css('transform', 'translateX(0)');
    					slider.setBoundries($(this),'default');
    				}));
    
    				var transformCount = 0;
    				$('.carousel .item-list').on('beforeChange', (function (event, slick, currentSlide, nextSlide) {
    					var totalCount = $(this).find('.slick-dots li').length;
    					if (totalCount > sl.maxDots) {
    						if (nextSlide > currentSlide) {
    							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
    								if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
    									transformCount = transformCount + sl.transformXIntervalNext;
    									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
    									var nextSlidePlusOne = nextSlide + 1;
    									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
    									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
    									var pPointer = nextSlide - 3;
    									var pPointerMinusOne = pPointer - 1;
    									$(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1');
    									$(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
    								}
    							}
    						}
    						else {
    							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
    								if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
    									transformCount = transformCount + sl.transformXIntervalPrev;
    									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
    									var nextSlidePlusOne = nextSlide - 1;
    									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
    									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
    									var nPointer = currentSlide + 3;
    									var nPointerMinusOne = nPointer - 1;
    									$(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
    									$(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
    								}
    							}
    						}
    					}
    				}));
    
    				$('.carousel .item-list').not('.slick-initialized').slick({
    					dots: true,
    					infinite: false,
    					speed: 500,
    					slidesToShow: 3,
    					slidesToScroll: 3,
    					cssEase: 'linear',
    					responsive: [
    						{
    							breakpoint: 1045,
    							settings: {
    								slidesToShow: 2,
    								slidesToScroll: 2
    							}
    						},
    						{
    							breakpoint: 800,
    							settings: {
    								slidesToShow: 1,
    								slidesToScroll: 1
    							}
    						},
    						{
    							breakpoint: 600,
    							settings: {
    								arrows: false,
    								slidesToShow: 1,
    								slidesToScroll: 1
    							}
    						}
    					]
    				});
    
    			}
    		}
    
    		if (sl.blogSliderEls.length > 0) {
    			for (var i = 0; i < sl.blogSliderEls.length; i++) {
    				$('.blog-slider').not('.slick-initialized').slick({
    					dots: false,
    					arrows: false,
    					fade: true,
    					infinite: true,
    					speed: 500,
    					cssEase: 'linear',
    					asNavFor: '.blog-slider-nav',
    					adaptiveHeight: true
    				});
    				$('.blog-slider-nav').not('.slick-initialized').slick({
    					slidesToShow: 4,
    					slidesToScroll: 1,
    					asNavFor: '.blog-slider',
    					arrows: true,
    					dots: false,
    					centerMode: false,
    					focusOnSelect: true
    				});
    			}
    		}
    
    	},
    	setBoundries: function(slick, state) {
    		if (state === 'default') {
    			slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
    		}
    	}
    };
    
    var hc,
    heroCards = {
    	settings: {
    		images: $('.home .hero.style-cards .image-wrapper'),
    		close: $('.home .hero.style-cards .close-btn')
    	},
    	init: function() {
    		hc = this.settings;
    		this.bindUIActions();
    		this.initStyleCards();
    		console.log('hero cards loaded!');
    	},
    	bindUIActions: function() {
    
    		// Hide the intro & reveal the cards
    		$('.home .hero.style-cards .btn-start').on('click', (function(evt) {
    			evt.preventDefault();
    			var intro = $(this).closest('.intro');
    			for ( var i = 0; i < intro.length; i++ ) {
    				intro[i].classList.toggle('hide');
    			}
    			var itemWrapper = $(this).closest('.col').find('.item-wrapper');
    			for ( var i = 0; i < itemWrapper.length; i++ ) {
    				itemWrapper[i].classList.toggle('hide');
    			}
    		}));
    
    		// Hide the cards & reveal the intro
    		$('.home .hero.style-cards .back-btn').on('click', (function(evt) {
    			evt.preventDefault();
    			var intro = $(this).closest('.col').find('.intro');
    			for ( var i = 0; i < intro.length; i++ ) {
    				intro[i].classList.toggle('hide');
    			}
    			var itemWrapper = $(this).closest('.col').find('.item-wrapper');
    			for ( var i = 0; i < itemWrapper.length; i++ ) {
    				itemWrapper[i].classList.toggle('hide');
    			}
    		}));
    
    		hc.images.click( (function() {
    			var $this = $(this);
    			$this.closest('.item-list').find('.item').removeClass('active');
    			$this.closest('.item').addClass('active');
    			$this.closest('.item-list').addClass('opened');
    			$('.item-list').css('transform', 'translate3d(' + $this.data('translate-x') + ',0,0)');
    		}));
    
    		hc.close.click((function(){
    			var $this = $(this);
    			$this.closest('.item').removeClass('active');
    			$this.closest('.item-list').removeClass('opened');
    			$('.item-list').css('transform', 'translate3d(0,0,0)');
    		}));
    
    		$(window).resize((function(){
    			heroCards.initStyleCards();
    		}));
    
    	},
    	calculatePos: function($el) {
    		var itemPosX = $el.offset().left;
    		var targetPosX = ($(window).width() - 840) / 2;
    		var translateX = targetPosX - itemPosX;
    		$el.attr('data-translate-x', translateX + 'px');
    	},
    	initStyleCards: function() {
    		$('.home .layout.style-cards').each((function(){
    			$(this).find('.image-wrapper').each((function(){
    				heroCards.calculatePos($(this));
    			}));
    		}));
    	}
    };
    
    var fb,
    fancybox = {
    	settings: {
    		callLink: $('.menu-item.call-hosparus a'),
    		callLightbox: $('#call-hosparus'),
    		searchLink: $('.menu-item.search a'),
    		searchLightbox: $('#search-lightbox')
    	},
    	init: function() {
    		fb = this.settings;
    		this.bindUIActions();
    		console.log('fancybox loaded!');
    	},
    	bindUIActions: function() {
    		var windowSize = $(window).width();
    		// Get width of window on load or resize
    		$(window).on('load resize', (function() {
    			windowSize = $(window).width();
    		}));
    		fb.callLink.on('click', (function(evt) {
    			// console.log('You clicked the phone icon.');
    			if ( windowSize >= 1060 ) {
    				evt.preventDefault();
    				$.fancybox.open(fb.callLightbox);
    			}
    		}));
    		fb.searchLink.on('click', (function(evt) {
    			// console.log('You clicked the search icon.');
    			if ( windowSize < 1060 ) {
    				evt.preventDefault();
    				$.fancybox.open(fb.searchLightbox);
    			}
    		}));
    	}
    };
    
    var mu,
    menu = {
    	settings: {
    		body: $('body'),
    		menuSub: $('.menu-center .menu-item-has-children'),
    		menuBtn: $('.menu-right .menu-item.drawer a'),
    		menuDrawer: $('#menu-drawer'),
    
    		menuRight: $('.menu-right'),
    		openSearch: $('.menu-item.search .open-search'),
    		closeSearch: $('.menu-item.search .close-btn'),
    		mobilePadding: '15px',
    		desktopPadding: '30px',
    	},
    	init: function() {
    		mu = this.settings;
    		this.bindUIActions();
    		console.log('menu loaded!');
    	},
    	bindUIActions: function() {
    		// Submenu hover effect
    		mu.menuSub.mouseover( (function() {
    			var subMenuHeight = $(this).find('.sub-menu').outerHeight();
    			subMenuHeight = subMenuHeight - 20;
    			$('.header').css('padding-bottom', subMenuHeight);
    		}));
    
    		var windowSize = $(window).width();
    		// Get width of window on load or resize
    		$(window).on('load resize', (function() {
    			windowSize = $(window).width();
    			if ( windowSize < 1058 ) {
    				// console.log('Set bottom padding to ' + mu.mobilePadding);
    				$('.header').css('padding-bottom', mu.mobilePadding);
    			} else {
    				$('.header').css('padding-bottom', mu.desktopPadding);
    			}
    		}));
    
    		mu.menuSub.mouseleave( (function() {
    			// Remove bottom padding from header
    			$('.header').css('padding-bottom', mu.desktopPadding);
    		}));
    
    		mu.menuBtn.click( (function(evt) {
    			evt.preventDefault();
    			mu.menuDrawer.toggleClass('active');
    			mu.body.toggleClass('stopScroll');
    			$('header').toggleClass('drawer-open');
    			if ($('.menu-item.drawer a').html() == 'Close') {
    				$('.menu-item.drawer a').html('Menu');
    			} else {
    				$('.menu-item.drawer a').html('Close');
    			}
    		}));
    		mu.openSearch.click( (function(evt) {
    			$('#nav-search').css('display', 'block');
    			evt.preventDefault();
    			$('.menu-center').addClass('hide-center-nav');
    			mu.menuRight.addClass('reveal-search');
    			$('#nav-search .search-field').focus();
    		}));
    		mu.closeSearch.click( (function(evt) {
    			evt.preventDefault();
    			mu.menuRight.removeClass('reveal-search');
    			$('.menu-center').removeClass('hide-center-nav');
    		}));
    
    		var menuItems = document.querySelectorAll('.menu-drawer li.menu-item-has-children');
    		Array.prototype.forEach.call(menuItems, (function(el, i){
    			var activatingA = el.querySelector('a');
    			var btn = '<button class="mobile-submenu" aria-expanded="false"><i class="fal fa-plus"></i><span><span class="visuallyhidden">Show Submenu for “' + activatingA.text + '”</span></span></button>';
    			activatingA.insertAdjacentHTML('afterend', btn);
    
    			el.querySelector('.mobile-submenu').addEventListener("click",  (function(event){
    				if ($(this).parent().hasClass('active')) {
    					$(this).parent().removeClass('active');
    					this.parentNode.querySelector('a').setAttribute('aria-expanded', "false");
    					this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
    				} else {
    					$(this).parent().addClass('active');
    					this.parentNode.querySelector('a').setAttribute('aria-expanded', "true");
    					this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
    				}
    				event.preventDefault();
    			}));
    		}));
    	}
    };
    
    var wz,
    wizard = {
    	settings: {
    		start: $('.btn.open-wizard'),
    		heroLayouts: $('.layout.hero.style-cards'),
    		question: $('.layout.wizard .question'),
    	    answers: $('.answer'),
    		result: $('.results .layout'),
    	    nextQuestionID: '',
    		backQuestionID: '',
    	    buttonControls: $('.layout.wizard .controls .btn'),
    	    buttonNext: $('.layout.wizard .controls .btn.next'),
    	    buttonBack: $('.layout.wizard .controls .btn.back'),
    	    customMsg: $('#custom-message'),
    		wizardOpen: false,
    	},
    	init: function() {
    		wz = this.settings;
    		this.bindUIActions();
    		console.log('wizard loaded!');
    	},
    	bindUIActions: function() {
    
    		// Initialize the fancybox
    		$(wz.start).click( (function(evt) {
    			evt.preventDefault();
    			$.fancybox.open({
    				// Options will go here
    				src  : '#wizard',
    			    type : 'inline',
    				opts : {
    					afterShow : function( instance, current ) {
    						wz.wizardOpen = true;
    						// console.info( 'Wizard is open! ' +  wz.wizardOpen);
    					},
    					afterClose : function( instance, current ) {
    						wz.wizardOpen = false;
    						// console.info( 'Wizard is closed! ' +  wz.wizardOpen);
    					}
    				}
    			});
    		}));
    
    		// Closing the fancybox
    		$('.wizard-close-btn').click( (function() {
    			$.fancybox.close();
    			console.log('Close the wizard!');
    		}));
    
    	    // Selecting an answer
    	    wz.answers.click( (function(evt) {
    			evt.preventDefault();
    			wz.nextQuestionID = $(this).attr('href').substr(1);
    			wizard.selectAnswer($(this));
    	    }));
    
    	    // Selecting the next button
    	    wz.buttonNext.click( (function(evt) {
    			// Check to make sure an answer was selected
    			// If no answer was chosen, display an error message
    			var target = $(this).data('target-question');
    			// console.log('Target question: ' + target);
    
    			if (target == 0) {
    				console.log('Target equals 0.');
    				// Display the custom message if an answer is already selected (from navigating with back and next buttons)
    				if ( $('.question.active .answer').hasClass('selected') ) {
    					console.log('An answer has the selected class.');
    					wz.customMsg.html( $('.question.active .answer.selected').data('message') );
    				} else {
    					wz.customMsg.html('Please select an answer.');
    				}
    			} else {
    				console.log('Target equals ' + target + '.');
    				// Set the data attribute on the back button
    				wz.backQuestionID = $(this).parents('.wizard').find('.question.active').attr('id');
    				wz.buttonBack.data('target-question', wz.backQuestionID);
    
    				wizard.goToQuestion(target);
    				$(this).data('target-question', 0)
    			}
    	    }));
    
    		// Selecting the back button
    		wz.buttonBack.click( (function(evt) {
    			window.history.back();
    			// console.log(window.history);
    			// var target = $(this).data('target-question');
    			// wizard.goToQuestion(target);
    		}));
    
    		window.addEventListener('popstate', (function(e) {
    			// console.log('Popstate event is happening.');
    			// call goToQuestion and pass the variable window.location.hash
    			var popstate = window.location.hash.replace('#', '');
    			// console.log(popstate);
    			// wizard.goToQuestion(popstate);
    
    			// Remove active class from all questions
    			wz.question.removeClass('active');
    
    			// If popstate == empty, go to q1
    			if (popstate == '') {
    				// console.log('Popstate is empty.');
    				// Set target question to active
    				$('.wizard .question').first().addClass('active');
    			} else {
    				if (popstate.length > 3) {
    					// console.log('Popstate length is > 3.');
    					// This is a result
    					wz.result.removeClass('active');
    					// Take the popstate value, convert it to an array by exploding the string by comma
    					popstate = popstate.split(',');
    					$.each(popstate, (function( index, value) {
    						$('#' + value).addClass('active');
    					}));
    					// Close the lightbox
    					if (wz.wizardOpen == true) {
    						$.fancybox.close();
    					}
    				} else {
    					// console.log('Popstate is not empty, but not > 3.');
    					// This is a question
    					// Set target question to active
    					$('.wizard #' + popstate).addClass('active');
    					// Open the lightbox
    					if (wz.wizardOpen == false) {
    						$.fancybox.open();
    					}
    					// $.fancybox.open( $('#wizard') );
    				}
    			}
    			// Then clear the custom message
    			wz.customMsg.html('');
    
    			// Replicating a click of the selected answer
    			var selectedAnswer = $('.question.active .answer.selected');
    			wz.nextQuestionID = selectedAnswer.attr('id');
    			wizard.selectAnswer(selectedAnswer);
    		}));
    
    		// **
    		// On page load, check for a hashtag in the url and display a result
    		// **
    		var pageUrl = window.location.hash.replace('#', '');
    		// console.log('The page url is: ' + pageUrl);
    		if (pageUrl.length > 3) {
    			// This is a result
    			// Remove active class from all results
    			wz.result.removeClass('active');
    			wz.heroLayouts.removeClass('active');
    			// Take the hash value, convert it to an array by exploding the string by comma
    			pageUrl = pageUrl.split(',%20');
    			// console.log('The page url is: ' + pageUrl);
    			$.each(pageUrl, (function( index, value) {
    				$('.results #' + value).addClass('active');
    			}));
    			// Reveal the results content
    			$('.layout.hero.style-cards.results-content').addClass('active');
    			// Close the lightbox
    			$.fancybox.close();
    			// Scroll to results
    			// $('html, body').animate({
    	        //     scrollTop: $('#results').offset().top - 160
                // }, 1500);
    		} else if (pageUrl.length > 0 && pageUrl.length < 3) {
    			// This is a question
    			// Remove active class from all questions
    			wz.question.removeClass('active');
    			// Set target question to active
    			$('.wizard #' + pageUrl).addClass('active');
    			// Open the lightbox
    			$.fancybox.open( $('#wizard') );
    		}
    
    	},
    	selectAnswer: function($answer) {
    		// Clear the selected class (from all selected answers)
    		$answer.parents('.wizard').find('.question.active .answer').removeClass('selected');
    		// Add the selected class
    		$answer.addClass('selected');
    		// Set the data attribute on the next button
    		wz.buttonNext.data('target-question', wz.nextQuestionID);
    		// Change the custom message according to answer selection
    		wz.customMsg.html( $answer.data('message') );
    
    	},
    	goToQuestion: function($targetQuestion) {
    		// Set a new pushstate
    		history.pushState('Next Question', 'New Page', '#' + $targetQuestion);
    
    		if ($targetQuestion.length > 3) {
    			// This is a result
    			wz.result.removeClass('active');
    			wz.heroLayouts.removeClass('active');
    			// Take the popstate value, convert it to an array by exploding the string by comma
    			// console.log($targetQuestion);
    			$targetQuestion = $targetQuestion.split(', ');
    			$.each($targetQuestion, (function( index, value) {
    				$('.results #' + value).addClass('active');
    			}));
    			$('.layout.hero.style-cards.results-content').addClass('active');
    			// Close the lightbox
    			$.fancybox.close();
    		} else {
    			// This is a question
    			// Remove active class from all questions
    			wz.question.removeClass('active');
    			// Set target question to active
    			$('.wizard #' + $targetQuestion).addClass('active');
    		}
    
    		// Then clear the custom message
    		wz.customMsg.html('');
    	},
    	// Add a function for changing the pushstate
    	changeUrl: function() {
    
    	}
    };
    
	var gm,
	googleMap = {
		settings: {
			mapMain: {},
			mapElement: $('.map-canvas')[0],
			mapOptions: {
				  // How zoomed in you want the map to start at (always required)
				  zoom: 11,
				  mapTypeControl: false,
				  scaleControl: false,
				  streetViewControl: false,
				  // The latitude and longitude to center the map (always required)
				  // Set to the coordinates of the first marker — fixes the zoom issue with only one marker
				  center: new google.maps.LatLng(locationData[0].lat, locationData[0].lng),
				  // Map styles from Snazzy Maps.
				  styles: [
				    {
				        "featureType": "water",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#e9e9e9"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f5f5f5"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 17
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 29
				            },
				            {
				                "weight": 0.2
				            }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 18
				            }
				        ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f5f5f5"
				            },
				            {
				                "lightness": 21
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#dedede"
				            },
				            {
				                "lightness": 21
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.stroke",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#ffffff"
				            },
				            {
				                "lightness": 16
				            }
				        ]
				    },
				    {
				        "elementType": "labels.text.fill",
				        "stylers": [
				            {
				                "saturation": 36
				            },
				            {
				                "color": "#333333"
				            },
				            {
				                "lightness": 40
				            }
				        ]
				    },
				    {
				        "elementType": "labels.icon",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "transit",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f2f2f2"
				            },
				            {
				                "lightness": 19
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.fill",
				        "stylers": [
				            {
				                "color": "#fefefe"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "administrative",
				        "elementType": "geometry.stroke",
				        "stylers": [
				            {
				                "color": "#fefefe"
				            },
				            {
				                "lightness": 17
				            },
				            {
				                "weight": 1.2
				            }
				        ]
				    }
				]
			 },
			mapMarkers: [],
			mapWindows: [],
			mapSearchBtn: $('.search-btn'),
			mapSearchField: $('.search-zip'),
			mapSearchVal: '',
			mapResults: [],
			mapResetBtn: $('.reset-btn'),
			mapError: $('.error-message'),
			markerPath: globalVar.themePath + '/app/assets/img/',
			// markerPath: '/app/themes/hosparus-health/app/assets/img/',
			// markerPath: '/wp-content/themes/hosparus-health/app/assets/img/',
			markerDefault: 'baseline-place-38px.svg',
			markerActive: 'baseline-place-navy.svg',
		},
		init: function(){
			gm = this.settings;
			this.bindUIActions();
			if (gm.mapElement) {
				gm.mapMain = new google.maps.Map(gm.mapElement, gm.mapOptions);
				console.log('Creating map...');
				googleMap.createMarkers();
			}
		},
		bindUIActions: function(){
			// Execute some methods when the search button is clicked.
			gm.mapSearchBtn.click((function(evt) {
				evt.preventDefault();
				googleMap.findLocations();
			}));
			gm.mapSearchField.on('keyup', (function(evt) {
				if (evt.which == 13) {
					evt.preventDefault();
					googleMap.findLocations();
				}
			}));
			gm.mapSearchField.on('input', (function(evt) {
				// Clear the error msg
				gm.mapError.html('');
			}));
			gm.mapResetBtn.click((function(evt) {
				// evt.preventDefault();
				// Clear the error msg
				gm.mapError.html('');
				// Clear the input field
				gm.mapSearchField.val('');
				// Close all marker windows.
				$.each(gm.mapWindows, (function(index, infoWindow){
					infoWindow.close();
				}));
				// Create a new bounds object we will use to position the map. Needed to support multiple location results.
				var resetBounds = new google.maps.LatLngBounds();
				$.each(gm.mapMarkers, (function(index, marker){
					// Reset active icons to default color
					marker.setIcon(gm.markerPath + gm.markerDefault);
					resetBounds.extend(marker.position);
				}));
				// Position map using the bounds from the markers.
				gm.mapMain.fitBounds(resetBounds);
			}));
		},
		createMarkers: function(){
			console.log('Creating markers...');
			// Create a new bounds object we will use to position the map.
			var bounds = new google.maps.LatLngBounds();
			// Loop through locations and create markers and info windows.
			$.each(locationData, (function(index, location) {
				// Create the marker.
				var marker = new google.maps.Marker({
					id: location.id,
					position: new google.maps.LatLng(location.lat, location.lng),
					map: gm.mapMain,
					title: location.name,
					draggable: false,
					flat: true,
					icon: gm.markerPath + gm.markerDefault,
				});
				// Create the info window.
				var infoWindowContent = '<div class="marker-window"><span class="h6 marker-title">' + location.name + '</span><div class="links"><a href="' + location.link + '">View Location</a> | <a href="' + location.directions + '" target="_blank">Get Directions</a></div></div>';
				var infoWindow = new google.maps.InfoWindow({
					id: location.id,
					content: infoWindowContent
				});
				// Add the click handler for the marker
				marker.addListener('click', (function() {
					gm.mapMain.panTo(marker.getPosition());
					infoWindow.open(gm.mapMain, marker);
				}));
				// Push marker and info window data to their respective arrays.
				gm.mapMarkers.push(marker);
				gm.mapWindows.push(infoWindow);
				// Push the marker position to the bounds for correct map positioning.
				bounds.extend(marker.position);
			}));
			// Reposition the map based on the locations present on the map
			// Position map using the bounds from the markers.
			if (locationData.length > 1) {
				gm.mapMain.fitBounds(bounds);
				gm.mapMain.panToBounds(bounds);
			} else {
				// console.log('Only one marker present.');
				// gm.mapMain.fitBounds(bounds);
			}
	
		},
		findMarkers: function(){
			console.log('Searching locations...');
			// Get the value of the search input field.
			gm.mapSearchVal = gm.mapSearchField.val();
			gm.mapResults = [];
			// Loop through all location data.
			$.each(locationData, (function(index, location){
				// Loop through the zip codes of this location.
				$.each(location.zipCodes, (function(zipIndex, zipCode){
					if(zipCode == gm.mapSearchVal){
						// If the search term matches a zip code in a location, push that locations marker to the mapResults array.
						var markerMatch = gm.mapMarkers.filter((function(obj) { return obj.id == locationData[index].id}));
						// Push the first value of the match. There will only ever be one value matched since ids are unique.
						gm.mapResults.push(markerMatch[0]);
					}
				}));
			}));
		},
		gotoMarkers: function(){
			console.log('Found ' + gm.mapResults.length + ' location(s)...');
			// Close all marker windows.
			$.each(gm.mapWindows, (function(index, infoWindow){
				infoWindow.close();
			}));
			// Throw message if there are no results and stop this function.
			if(gm.mapResults.length == 0){
				gm.mapError.html('Sorry, there are no Hosparus Health locations in your area.');
				return;
			}
			// Create a new bounds object we will use to position the map. Needed to support multiple location results.
			var bounds = new google.maps.LatLngBounds();
			// Loop through each result marker and open it's info window.
			$.each(gm.mapResults, (function(index, marker){
				marker.setIcon(gm.markerPath + gm.markerActive);
				// Extend the bounds object to include this markers position.
				bounds.extend(marker.position);
				// Open the info window associated with this marker.
				var activeWindow = gm.mapWindows.filter((function(obj) { return obj.id == marker.id }));
				// console.log(activeWindow);
				activeWindow[0].open(gm.mapMain, marker);
			}));
			// Position map using the bounds from the markers.
			gm.mapMain.fitBounds(bounds);
			gm.mapMain.panToBounds(bounds);
			//googleMap.smoothZoom(gm.mapMain, 18, gm.mapMain.getZoom());
			// Adjust zoom if there is one result. Throw message if there is more than one result.
			if(gm.mapResults.length == 1){
				gm.mapMain.setZoom(9);
			} else {
				gm.mapError.html('Your zip code has multiple service locations. Please contact us.');
			}
		},
		alertMessage: function(message){
			alert(message);
		},
		smoothZoom: function(map, max, cnt){
			if (cnt >= max) {
				return;
			}
			else {
				z = google.maps.event.addListener(map, 'zoom_changed', (function(event){
					google.maps.event.removeListener(z);
					googleMap.smoothZoom(map, max, cnt + 1);
				}));
				setTimeout((function(){map.setZoom(cnt)}), 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
			}
		},
		findLocations: function(){
			googleMap.findMarkers();
			googleMap.gotoMarkers();
		}
	}
	
	var ft,
	facet = {
		settings: {
			query: $('.facet-query'),
			layouts: $('.blog-wrapper'),
			offset: 112,
		},
		init: function() {
			ft = this.settings;
			this.bindUIActions();
			console.log('facet loaded!');
		},
		bindUIActions: function() {
	
			// Add media query to tab view at ac.breakpoint
			var windowSize = $(window).width();
	
			$(document).on('facetwp-loaded', (function() {
				// Get width of window on load or resize
				$(window).on('load resize', (function() {
					windowSize = $(window).width();
				}));
				// Scroll to top of listing layout after interacting with Facet
				if (FWP.loaded) {
					if (windowSize >= 1059) {
						ft.offset = 163;
					} else if (windowSize >= 500) {
						ft.offset = 133;
					}
					$('html, body').animate({
		                scrollTop: $('.facetwp-template').offset().top - ft.offset
		            }, 500);
		        }
			}));
	
			$(document).on('facetwp-loaded', (function() {
				// console.log( FWP.facets.blog_search );
				// console.log( FWP.facets.categories );
				if ( $('body').hasClass('page-template-blog') ) {
					if (FWP.facets.blog_search.length > 0 || FWP.facets.categories.length > 0) {
						ft.query.removeClass('hide');
						ft.layouts.addClass('hide');
					} else {
						ft.layouts.removeClass('hide');
						ft.query.addClass('hide');
					}
				}
	        }));
	
		}
	};
	
	var rl,
	rellax = {
		settings: {
	
		},
		init: function() {
			rl = this.settings;
			this.bindUIActions();
			console.log('rellax loaded!');
		},
		bindUIActions: function() {
			var windowSize = $(window).width();
			// Get width of window on load or resize
			$(window).on('load resize', (function() {
				windowSize = $(window).width();
			}));
			if (windowSize > 760) {
				if (document.getElementsByClassName('rellax').length != 0) {
					var rellax = new Rellax('.rellax', {
						speed: 1,
						center: false,
						wrapper: null,
						round: true,
						vertical: true,
						horizontal: false
					});
				}
			}
		}
	};
	
	var ev,
	events = {
		settings: {
			backBtn: $('#back-to-events')
		},
		init: function() {
			ev = this.settings;
			this.bindUIActions();
			console.log('events loaded!');
		},
		bindUIActions: function() {
			if ( ev.backBtn.length > 0 ) {
				var backUrl = document.referrer;
				// console.log('Back url: ' + backUrl);
				if ( backUrl.length > 0 ) {
					// console.log('The back url is not empty.');
					// Check to see if query strings exist in the back url
					if ( backUrl.indexOf('fwp_event_type') != -1 ) {
						// console.log('The back url contains fwp_event_type');
						events.changeLink(backUrl);
					} else if ( backUrl.indexOf('fwp_event_location') != -1 ) {
						// console.log('The back url contains fwp_event_location');
						events.changeLink(backUrl);
					} else if ( backUrl.indexOf('fwp_event_date') != -1 ) {
						// console.log('The back url contains fwp_event_date');
						events.changeLink(backUrl);
					}
				}
			}
		},
		changeLink: function(newUrl) {
			ev.backBtn.attr('href', newUrl);
		}
	};
	

    var sg,
    styleGuide = {
    	settings: {
    
    	},
    	init: function() {
    		sg = this.settings;
    		this.bindUIActions();
    		console.log('loaded style guide');
    	},
    	bindUIActions: function() {
    		$('section.layout').each((function () {
    	        var id = $(this).attr('id');
    			var title = $(this).find('.style-title').text();
    	        $('.style-guide-nav ul').append('<li><a href="#' + id + '">' + title + '</a></li>');
    	    }));
    	}
    };
    
    var sghn,
    styleGuideHideNav = {
    	settings: {
    
    	},
    	init: function() {
    		sghn = this.settings;
    		this.bindUIActions();
    		console.log('loaded style guide hide nav');
    	},
    	bindUIActions: function() {
    		$('.toggle-style-guide-nav').on('click', (function(e) {
    			e.preventDefault();
    			$('body').toggleClass('hide-style-guide-nav');
    		}));
    	}
    };
    

	// $('select').selectmenu();

    accordions.init();
	aos.init();
    cookieNotice.init();
    notification.init();
    randomQuote.init();
    slider.init();
    styleGuide.init();
    styleGuideHideNav.init();
    heroCards.init();
    fancybox.init();
    menu.init();
	wizard.init();
	googleMap.init();
	facet.init();
	rellax.init();
	events.init();

}));
